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
const { createAppointment, getAllAppointments, getAppointmentById, updateAppointment, deleteAppointment, cancelAppointment, } = require('../controllers/appointmentController');
router.post('/', (0, validateSchema_1.validateSchema)(validation_1.createAppointmentSchema), createAppointment);
router.get('/', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.paginationQuerySchema), getAllAppointments);
router.get('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), getAppointmentById);
router.put('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.updateAppointmentSchema), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), updateAppointment);
router.delete('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), deleteAppointment);
router.patch('/:id/cancel', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), cancelAppointment);
exports.default = router;
//# sourceMappingURL=appointments.js.map