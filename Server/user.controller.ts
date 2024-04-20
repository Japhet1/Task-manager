// import { Request, Response } from 'express';
// import UserModel from './user.model'; // Assuming 'User' is exported from the userModels file
// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config();

// const secretKey = process.env.SECRET_KEY || ''

// interface AuthRequest extends Request {
//   body: {
//     username: string;
//     email: string;
//     password: string;
//   };
// }

// const createToken = (_id: string): string => {
//   return jwt.sign({ _id }, secretKey as string, { expiresIn: '3d' });
// };

// // login user
// const loginUser = async (req: AuthRequest, res: Response): Promise<void> => {
//   const { email, password } = req.body;

//   try {
//     const user = await UserModel.login(email, password);

//     // create token
//     const token = createToken(user._id);

//     res.status(200).json({ email, token });
//   } catch (error) {
//     res.status(400).json({ error: (error as Error).message });
//   }
// };

// // signup user
// const signUser = async (req: AuthRequest, res: Response): Promise<void> => {
//   const { username, email, password } = req.body;
//   try {
//     const user = await UserModel.signup(username, email, password);

//     // create token
//     const token = createToken(user._id);

//     res.status(200).json({ email, token });
//   } catch (error) {
//     res.status(400).json({ error: (error as Error).message });
//   }
// };

// export { loginUser, signUser };


import { Request, Response } from 'express';
import User from './user.model';
//import { UserDocument } from './user.model';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

const secretKey = process.env.SECRET || ''

const createToken = (_id: string) => {
    return jwt.sign({ _id }, secretKey, { expiresIn: '1d' });
};
const getAllUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await User.find();
      res.status(200).json({ users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

// const getUserById = async (req: Request, res: Response): Promise<void> => {
//     try {
//       const userId: string = req.params.id; // Assuming user ID is passed in the request params
//       const user: IUser | null = await User.findById(userId);
  
//       if (!user) {
//         res.status(404).json({ error: 'User not found' });
//         return;
//       }
  
//       res.status(200).json({ user });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;

  try {
      const user = await User.login(username, email, password);

      // create token
      const token = createToken(user._id);

      res.status(200).json({ username, email, token });
  } catch (error) {
      // Explicitly specify the type of 'error' as 'Error'
      res.status(400).json({ error: (error as Error).message });
  }
};

const signUser = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;
  
  try {
      const user = await User.signup(username, email, password);

      // create token
      const token = createToken(user._id);

      res.status(200).json({ username, email, token });
  } catch (error) {
      // Explicitly specify the type of 'error' as 'Error'
      res.status(400).json({ error: (error as Error).message });
  }
};

export { loginUser, signUser, getAllUser };

