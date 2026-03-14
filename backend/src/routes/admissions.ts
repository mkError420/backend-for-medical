import express from 'express';
import { authenticate, authorize } from '../middlewares/auth';
import { validateSchema } from '../middlewares/validateSchema';
import {
  createAdmissionSchema,
  updateAdmissionSchema,
  idParamSchema,
  paginationQuerySchema,
} from '../utils/validation';

const router = express.Router();

// Controller imports (will be created)
const {
  createAdmission,
  getAllAdmissions,
  getAdmissionById,
  updateAdmission,
  deleteAdmission,
} = require('../controllers/admissionController');

// Public routes (for creating applications)
router.post('/', validateSchema(createAdmissionSchema), createAdmission);

// Protected routes (admin only)
router.get('/', authenticate, authorize('admin', 'super_admin'), validateSchema(paginationQuerySchema), getAllAdmissions);
router.get('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(idParamSchema), getAdmissionById);
router.put('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(updateAdmissionSchema), validateSchema(idParamSchema), updateAdmission);
router.delete('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(idParamSchema), deleteAdmission);

export default router;
