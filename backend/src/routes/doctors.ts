import express from 'express';
import { authenticate, authorize } from '../middlewares/auth';
import { validateSchema } from '../middlewares/validateSchema';
import {
  createDoctorSchema,
  updateDoctorSchema,
  idParamSchema,
  paginationQuerySchema,
} from '../utils/validation';

const router = express.Router();

// Controller imports (will be created)
const {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
  getDoctorList,
} = require('../controllers/doctorController');

// Public routes
router.get('/', validateSchema(paginationQuerySchema), getAllDoctors);
router.get('/list', getDoctorList);
router.get('/:id', validateSchema(idParamSchema), getDoctorById);

// Protected routes (admin only)
router.post('/', authenticate, authorize('admin', 'super_admin'), validateSchema(createDoctorSchema), createDoctor);
router.put('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(updateDoctorSchema), validateSchema(idParamSchema), updateDoctor);
router.delete('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(idParamSchema), deleteDoctor);

export default router;
