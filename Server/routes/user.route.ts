import express, { Router } from 'express';
const router: Router = express.Router();

// Import controller functions
import { loginUser, signUser, getAllUser } from '../controllers/user.controller';

router.get('/', getAllUser);

// Login route
router.post('/login', loginUser);

// Signup route
router.post('/signup', signUser);

export default router;

