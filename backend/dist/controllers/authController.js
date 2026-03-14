"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refreshToken = exports.getProfile = exports.login = void 0;
const Admin_1 = __importDefault(require("../models/Admin"));
const jwt_1 = require("../config/jwt");
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                success: false,
                error: 'Please provide email and password',
            });
            return;
        }
        const admin = await Admin_1.default.findOne({ email }).select('+password');
        if (!admin) {
            res.status(401).json({
                success: false,
                error: 'Invalid credentials',
            });
            return;
        }
        const isPasswordValid = await admin.comparePassword(password);
        if (!isPasswordValid) {
            res.status(401).json({
                success: false,
                error: 'Invalid credentials',
            });
            return;
        }
        const token = (0, jwt_1.generateToken)({
            id: admin._id.toString(),
            email: admin.email,
            role: admin.role,
        });
        const refreshToken = (0, jwt_1.generateRefreshToken)({
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.login = login;
const getProfile = async (req, res) => {
    try {
        const admin = await Admin_1.default.findById(req.user?.id);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.getProfile = getProfile;
const refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            res.status(401).json({
                success: false,
                error: 'Refresh token is required',
            });
            return;
        }
        const { verifyToken } = require('../config/jwt');
        const decoded = verifyToken(refreshToken);
        const token = (0, jwt_1.generateToken)({
            id: decoded.id,
            email: decoded.email,
            role: decoded.role,
        });
        res.status(200).json({
            success: true,
            data: { token },
        });
    }
    catch (error) {
        res.status(401).json({
            success: false,
            error: 'Invalid refresh token',
        });
    }
};
exports.refreshToken = refreshToken;
const logout = async (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Logged out successfully',
    });
};
exports.logout = logout;
//# sourceMappingURL=authController.js.map