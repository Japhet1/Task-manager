import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from './user.model';

dotenv.config();

const secretKey = process.env.SECRET || '';

const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  // const token = req.header('Authorization')?.split(' ')[1];

  // if (!token) {
  //   return res.status(401).json({ error: 'Access denied' });
  // }

  // jwt.verify(token, secretKey, (err: any, user: any) => {
  //   if (err) {
  //     return res.status(403).json({ error: 'Invalid token' });
  //   }
  //   req.user = user;
  //   next();
  // });

  const authorization = req.headers?.authorization;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  const token = authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(token, secretKey) as { _id: string }; // Type assertion for decoded object
    req.user = await User.findOne({ _id: decoded._id }).select('_id');
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Request is not authorized' });
  }

};

export default authenticateToken;




