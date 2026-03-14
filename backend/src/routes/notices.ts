import express from 'express';
import {
  createNotice,
  getAllNotices,
  getNoticeById,
  updateNotice,
  deleteNotice,
  getNoticesByCategory,
} from '../controllers/noticeController';
import { authenticate, authorize } from '../middlewares/auth';
import { validateSchema } from '../middlewares/validateSchema';
import {
  createNoticeSchema,
  updateNoticeSchema,
  idParamSchema,
  paginationQuerySchema,
} from '../utils/validation';

const router = express.Router();

// Public routes
router.get('/', validateSchema(paginationQuerySchema), getAllNotices);
router.get('/category/:category', validateSchema(paginationQuerySchema), getNoticesByCategory);
router.get('/:id', validateSchema(idParamSchema), getNoticeById);

// Protected routes (admin only)
router.post('/', authenticate, authorize('admin', 'super_admin'), validateSchema(createNoticeSchema), createNotice);
router.put('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(updateNoticeSchema), validateSchema(idParamSchema), updateNotice);
router.delete('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(idParamSchema), deleteNotice);

export default router;
