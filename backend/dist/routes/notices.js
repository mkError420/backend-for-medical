"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const noticeController_1 = require("../controllers/noticeController");
const auth_1 = require("../middlewares/auth");
const validateSchema_1 = require("../middlewares/validateSchema");
const validation_1 = require("../utils/validation");
const router = express_1.default.Router();
router.get('/', (0, validateSchema_1.validateSchema)(validation_1.paginationQuerySchema), noticeController_1.getAllNotices);
router.get('/category/:category', (0, validateSchema_1.validateSchema)(validation_1.paginationQuerySchema), noticeController_1.getNoticesByCategory);
router.get('/:id', (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), noticeController_1.getNoticeById);
router.post('/', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.createNoticeSchema), noticeController_1.createNotice);
router.put('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.updateNoticeSchema), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), noticeController_1.updateNotice);
router.delete('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), noticeController_1.deleteNotice);
exports.default = router;
//# sourceMappingURL=notices.js.map