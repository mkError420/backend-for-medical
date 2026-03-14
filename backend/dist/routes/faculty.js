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
const { createFaculty, getAllFaculty, getFacultyById, updateFaculty, deleteFaculty, } = require('../controllers/facultyController');
router.get('/', (0, validateSchema_1.validateSchema)(validation_1.paginationQuerySchema), getAllFaculty);
router.get('/:id', (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), getFacultyById);
router.post('/', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.createFacultySchema), createFaculty);
router.put('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.updateFacultySchema), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), updateFaculty);
router.delete('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), deleteFaculty);
exports.default = router;
//# sourceMappingURL=faculty.js.map