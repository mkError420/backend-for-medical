import express from 'express';
import { authenticate, authorize } from '../middlewares/auth';
import { validateSchema } from '../middlewares/validateSchema';
import {
  createFacultySchema,
  updateFacultySchema,
  idParamSchema,
  paginationQuerySchema,
} from '../utils/validation';

const router = express.Router();

// Controller imports (will be created)
const {
  createFaculty,
  getAllFaculty,
  getFacultyById,
  updateFaculty,
  deleteFaculty,
} = require('../controllers/facultyController');

// Public routes
router.get('/', validateSchema(paginationQuerySchema), getAllFaculty);
router.get('/:id', validateSchema(idParamSchema), getFacultyById);

// Protected routes (admin only)
router.post('/', authenticate, authorize('admin', 'super_admin'), validateSchema(createFacultySchema), createFaculty);
router.put('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(updateFacultySchema), validateSchema(idParamSchema), updateFaculty);
router.delete('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(idParamSchema), deleteFaculty);

export default router;
