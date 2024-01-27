import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserModel from './auth.model';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const secretKey = process.env.SECRET_KEY || '';

router.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = new UserModel({ username, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
