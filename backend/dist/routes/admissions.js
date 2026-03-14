"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middlewares/auth");
const validateSchema_1 = require("../middlewares/validateSchema");
const validation_1 = require("../utils/validation");
const router = express_1.default.Router();
const { createAdmission, getAllAdmissions, getAdmissionById, updateAdmission, deleteAdmission, } = require('../controllers/admissionController');
router.post('/', (0, validateSchema_1.validateSchema)(validation_1.createAdmissionSchema), createAdmission);
router.get('/', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.paginationQuerySchema), getAllAdmissions);
router.get('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), getAdmissionById);
router.put('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.updateAdmissionSchema), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), updateAdmission);
router.delete('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), deleteAdmission);
exports.default = router;
//# sourceMappingURL=admissions.js.map