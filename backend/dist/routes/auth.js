"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const auth_1 = require("../middlewares/auth");
const validateSchema_1 = require("../middlewares/validateSchema");
const validation_1 = require("../utils/validation");
const router = express_1.default.Router();
router.post('/login', (0, validateSchema_1.validateSchema)(validation_1.loginSchema), authController_1.login);
router.post('/refresh', authController_1.refreshToken);
router.post('/logout', auth_1.authenticate, authController_1.logout);
router.get('/profile', auth_1.authenticate, authController_1.getProfile);
exports.default = router;
//# sourceMappingURL=auth.js.map