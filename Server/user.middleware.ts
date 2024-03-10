// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config();

// const secretKey = process.env.SECRET_KEY || '';

// const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.header('Authorization')?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ error: 'Access denied' });
//   }

//   jwt.verify(token, secretKey, (err: any, user: any) => {
//     if (err) {
//       return res.status(403).json({ error: 'Invalid token' });
//     }
//     req.user = user;
//     next();
//   });
// };

// export default authenticateToken;
