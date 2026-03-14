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
const { createDoctor, getAllDoctors, getDoctorById, updateDoctor, deleteDoctor, getDoctorList, } = require('../controllers/doctorController');
router.get('/', (0, validateSchema_1.validateSchema)(validation_1.paginationQuerySchema), getAllDoctors);
router.get('/list', getDoctorList);
router.get('/:id', (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), getDoctorById);
router.post('/', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.createDoctorSchema), createDoctor);
router.put('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.updateDoctorSchema), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), updateDoctor);
router.delete('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), deleteDoctor);
exports.default = router;
//# sourceMappingURL=doctors.js.map