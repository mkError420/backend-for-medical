import { Request, Response } from 'express';
import Admin from '../models/Admin';
import { generateToken, generateRefreshToken } from '../config/jwt';
import { AuthRequest } from '../middlewares/auth';

// Admin login
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      res.status(400).json({
        success: false,
        error: 'Please provide email and password',
      });
      return;
    }

    // Find admin by email with password
    const admin = await Admin.findOne({ email }).select('+password');

    if (!admin) {
      res.status(401).json({
        success: false,
        error: 'Invalid credentials',
      });
      return;
    }

    // Check password
    const isPasswordValid = await admin.comparePassword(password);

    if (!isPasswordValid) {
      res.status(401).json({
        success: false,
        error: 'Invalid credentials',
      });
      return;
    }

    // Generate tokens
    const token = generateToken({
      id: admin._id.toString(),
      email: admin.email,
      role: admin.role,
    });

    const refreshToken = generateRefreshToken({
      id: admin._id.toString(),
      email: admin.email,
      role: admin.role,
    });

    res.status(200).json({
      success: true,
      data: {
        token,
        refreshToken,
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
        },
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Get current admin profile
export const getProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const admin = await Admin.findById(req.user?.id);

    if (!admin) {
      res.status(404).json({
        success: false,
        error: 'Admin not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        createdAt: admin.createdAt,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message || 'Server error',
    });
  }
};

// Refresh token
export const refreshToken = async (req: Request, res: Response): Promise<void> => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      res.status(401).json({
        success: false,
        error: 'Refresh token is required',
      });
      return;
    }

    // Verify refresh token (you might want to use a separate secret for refresh tokens)
    const { verifyToken } = require('../config/jwt');
    const decoded = verifyToken(refreshToken);

    // Generate new access token
    const token = generateToken({
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    });

    res.status(200).json({
      success: true,
      data: { token },
    });
  } catch (error: any) {
    res.status(401).json({
      success: false,
      error: 'Invalid refresh token',
    });
  }
};

// Logout (client-side responsibility, but we can add token blacklisting if needed)
export const logout = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({
    success: true,
    message: 'Logged out successfully',
  });
};
