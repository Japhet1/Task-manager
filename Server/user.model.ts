// import mongoose, { Schema, Document, Model, model } from 'mongoose';
// import bcrypt from 'bcrypt';
// import validator from 'validator'

// export interface IUser extends Document {
//   username: string;
//   email: string;
//   password: string;
//   //comparePassword(candidatePassword: string): Promise<boolean>;
// }

// interface IUserModel extends Model<IUser & Document> {
//   login(email: string, password: string): Promise<IUser & Document>;
//   signup(username: string, email: string, password: string): Promise<IUser & Document>;
// }

// const userSchema: Schema = new Schema({
//   username: { type: String, required: true },
//   email: { type: String,  unique: true, required: true },
//   password: { type: String, required: true },
// });

// // userSchema.pre<IUser>('save', async function (next) {
// //   const user = this;

// //   if (!user.isModified('password')) return next();

// //   const salt = await bcrypt.genSalt(10);
// //   const hash = await bcrypt.hash(user.password, salt);
// //   user.password = hash;
// //   next();
// // });

// // userSchema.methods.comparePassword = async function (candidatePassword: string) {
// //   return bcrypt.compare(candidatePassword, this.password);
// // };

// // userSchema.statics.login = async function (email: string, password: string): Promise<IUser & Document> {
// //   // Your login logic here
// //   const user = await this.findOne({ email, password }); // Modify this according to your logic
// //   if (!user) {
// //     throw new Error('Invalid credentials');
// //   }
// //   return user;
// // };

// userSchema.statics.login = async function (email: string, password: string): Promise<IUser & Document> {
//   // validation
//   if (!email || !password) {
//     throw new Error('All fields must be filled');
//   }

//   const user = await this.findOne({ email });
//   if (!user) {
//     throw new Error('Incorrect email');
//   }

//   const match = await bcrypt.compare(password, user.password);
//   if (!match) {
//     throw new Error('Incorrect password');
//   }

//   return user;
// };

// // userSchema.statics.signup = async function (username: string, email: string, password: string): Promise<IUser & Document> {
// //   // Your signup logic here
// //   const user = await this.create({ username, email, password }); // Modify this according to your logic
// //   return user;
// // };
// userSchema.statics.signup = async function (username: string, email: string, password: string): Promise<IUser & Document> {
//   // validation
//   // if (!username || !email || !password) {
//   //   throw new Error('Alled fields must be filled');
//   // }
//   if (!validator.isEmail(email)) {
//     throw new Error('Email is not valid');
//   }
//   if (!validator.isStrongPassword(password)) {
//     throw new Error('Password is not strong enough');
//   }

//   const exists = await this.findOne({ email });
//   if (exists) {
//     throw new Error('Email already in use');
//   }

//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(password, salt);

//   const user = await this.create({ email, password: hash });

//   return user;
// };

// const UserModel = mongoose.model<IUser, IUserModel>('User', userSchema);

// export default UserModel;

import mongoose, { Document, Model } from 'mongoose';
import validator, { IsEmailOptions } from 'validator';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

interface UserDocument extends Document {
    email: string;
    password: string;
}

interface UserModel extends Model<UserDocument> {
    signup(email: string, password: string): Promise<UserDocument>;
    login(email: string, password: string): Promise<UserDocument>;
}

const userSchema = new Schema<UserDocument, UserModel>({
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
userSchema.statics.signup = async function (email: string, password: string): Promise<UserDocument> {
    // validation
    if (!email || !password) {
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

    const user = await this.create({ email, password: hash });

    return user;
};

// static login method
userSchema.statics.login = async function (email: string, password: string): Promise<UserDocument> {
    // validation
    if (!email || !password) {
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