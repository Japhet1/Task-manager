// import express, { Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import UserModel from './user.model';
// import dotenv from 'dotenv';
// //import { loginUser, signUser } from './user.controller'

// dotenv.config();

// const router = express.Router();
// const secretKey = process.env.SECRET_KEY || '';

// const createToken = (_id: string): string => {
//   return jwt.sign({ _id }, secretKey as string, { expiresIn: '3d' });
// };

// // router.post('/login', loginUser)
// // router.post('/signup', signUser)

// router.post('/register', async (req: Request, res: Response) => {
//   // try {
//   //   const { username, email, password } = req.body;
//   //   const user = await UserModel.signup(username, email, password);
//   //   await user.save();

//   //   res.status(201).json({ message: 'User registered successfully.' });
//   // } catch (error) {
//   //   res.status(500).json({ error: 'Internal Server Error' });
//   // }
//   const { username, email, password } = req.body;
//   try {
//     const user = await UserModel.signup(username, email, password);

//     // create token
//     const token = createToken(user._id);

//     res.status(200).json({ email, token });
//   } catch (error) {
//     res.status(400).json({ error: (error as Error).message });
//   }
// });

// router.post('/login', async (req: Request, res: Response) => {
//   // try {
//   //   const { email, password } = req.body;

//   //   const user = await UserModel.login(email, password);
//   //   if (!user) {
//   //     return res.status(401).json({ error: 'Invalid credentials' });
//   //   }

//   //   const isValidPassword = await user.comparePassword(password);
//   //   if (!isValidPassword) {
//   //     return res.status(401).json({ error: 'Invalid credentials' });
//   //   }

//   //   const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
//   //   res.json({ token });
//   // } catch (error) {
//   //   res.status(500).json({ error: 'Internal Server Error' });
//   // }
//   const { email, password } = req.body;

//   try {
//     const user = await UserModel.login(email, password);

//     // create token
//     const token = createToken(user._id);

//     res.status(200).json({ email, token });
//   } catch (error) {
//     res.status(400).json({ error: (error as Error).message });
//   }
// });

// export default router;

import express, { Router } from 'express';
const router: Router = express.Router();

// Import controller functions
import { loginUser, signUser } from './user.controller';

// Login route
router.post('/login', loginUser);

// Signup route
router.post('/signup', signUser);

export default router;

