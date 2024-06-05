import mongoose, { Document, Model } from 'mongoose';
import validator, { IsEmailOptions } from 'validator';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

interface UserDocument extends Document {
    username: string,
    email: string,
    password: string
}

interface UserModel extends Model<UserDocument> {
    signup(usersname: string, email: string, password: string): Promise<UserDocument>;
    login(username: string, email: string, password: string): Promise<UserDocument>;
}

const userSchema = new Schema<UserDocument, UserModel>({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: 'Email is not valid',
        },
    },
    password: {
        type: String,
        required: true,
    },
});

// static signup method
userSchema.statics.signup = async function (username: string, email: string, password: string): Promise<UserDocument> {
    // validation
    if (!username || !email || !password) {
        throw new Error('All fields must be filled');
    }
    if (!validator.isEmail(email)) {
        throw new Error('Email is not valid');
    }
    if (!validator.isStrongPassword(password)) {
        throw new Error('Password is not strong enough');
    }

    const exists = await this.findOne({ email });
    if (exists) {
        throw new Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ username, email, password: hash });

    return user;
};

// static login method
userSchema.statics.login = async function (username: string, email: string, password: string): Promise<UserDocument> {
    // validation
    if (!username || !email || !password) {
        throw new Error('All fields must be filled');
    }

    const user = await this.findOne({ email });
    if (!user) {
        throw new Error('Incorrect email');
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw new Error('Incorrect password');
    }

    return user;
};

const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

export default User