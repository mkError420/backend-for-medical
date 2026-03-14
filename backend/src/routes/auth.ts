import express from 'express';
import { login, getProfile, refreshToken, logout } from '../controllers/authController';
import { authenticate } from '../middlewares/auth';
import { validateSchema } from '../middlewares/validateSchema';
import { loginSchema } from '../utils/validation';

const router = express.Router();

// Public routes
router.post('/login', validateSchema(loginSchema), login);
router.post('/refresh', refreshToken);

// Protected routes
router.post('/logout', authenticate, logout);
router.get('/profile', authenticate, getProfile);

export default router;
