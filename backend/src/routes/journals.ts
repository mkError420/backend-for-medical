import express from 'express';
import { authenticate, authorize } from '../middlewares/auth';
import { validateSchema } from '../middlewares/validateSchema';
import {
  createJournalSchema,
  updateJournalSchema,
  idParamSchema,
  paginationQuerySchema,
} from '../utils/validation';

const router = express.Router();

// Controller imports (will be created)
const {
  createJournal,
  getAllJournals,
  getJournalById,
  updateJournal,
  deleteJournal,
} = require('../controllers/journalController');

// Public routes
router.get('/', validateSchema(paginationQuerySchema), getAllJournals);
router.get('/:id', validateSchema(idParamSchema), getJournalById);

// Protected routes (admin only)
router.post('/', authenticate, authorize('admin', 'super_admin'), validateSchema(createJournalSchema), createJournal);
router.put('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(updateJournalSchema), validateSchema(idParamSchema), updateJournal);
router.delete('/:id', authenticate, authorize('admin', 'super_admin'), validateSchema(idParamSchema), deleteJournal);

export default router;
