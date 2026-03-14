import express from 'express';
import {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
  getDepartmentList,
} from '../controllers/departmentController';
import { authenticate, authorize } from '../middlewares/auth';
import { validateSchema } from '../middlewares/validateSchema';
import {
  createDepartmentSchema,
  updateDepartmentSchema,
  idParamSchema,
  paginationQuerySchema,
} from '../utils/validation';

const router = express.Router();

// Public routes
router.get('/', validateSchema(paginationQuerySchema), getAllDepartments);
router.get('/list', getDepartmentList);
router.get('/:id', validateSchema(idParamSchema), getDepartmentById);

// Protected routes (admin only)
router.post('/', authenticate, authorize('admin', 'super_admin'), validateSchema(createDepartmentSchema), createDepartment);
router.put('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(updateDepartmentSchema), validateSchema(idParamSchema), updateDepartment);
router.delete('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(idParamSchema), deleteDepartment);

export default router;
