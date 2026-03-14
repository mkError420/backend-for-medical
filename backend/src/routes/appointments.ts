import express from 'express';
import { authenticate, authorize } from '../middlewares/auth';
import { validateSchema } from '../middlewares/validateSchema';
import {
  createAppointmentSchema,
  updateAppointmentSchema,
  idParamSchema,
  paginationQuerySchema,
} from '../utils/validation';

const router = express.Router();

// Controller imports (will be created)
const {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
  cancelAppointment,
} = require('../controllers/appointmentController');

// Public routes (for booking appointments)
router.post('/', validateSchema(createAppointmentSchema), createAppointment);

// Protected routes (admin only)
router.get('/', authenticate, authorize('admin', 'super_admin'), validateSchema(paginationQuerySchema), getAllAppointments);
router.get('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(idParamSchema), getAppointmentById);
router.put('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(updateAppointmentSchema), validateSchema(idParamSchema), updateAppointment);
router.delete('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(idParamSchema), deleteAppointment);
router.patch('/:id/cancel', authenticate, authorize('admin', 'super_admin'), validateSchema(idParamSchema), cancelAppointment);

export default router;
