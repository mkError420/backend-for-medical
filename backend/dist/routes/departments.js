"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const departmentController_1 = require("../controllers/departmentController");
const auth_1 = require("../middlewares/auth");
const validateSchema_1 = require("../middlewares/validateSchema");
const validation_1 = require("../utils/validation");
const router = express_1.default.Router();
router.get('/', (0, validateSchema_1.validateSchema)(validation_1.paginationQuerySchema), departmentController_1.getAllDepartments);
router.get('/list', departmentController_1.getDepartmentList);
router.get('/:id', (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), departmentController_1.getDepartmentById);
router.post('/', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.createDepartmentSchema), departmentController_1.createDepartment);
router.put('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.updateDepartmentSchema), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), departmentController_1.updateDepartment);
router.delete('/:id', auth_1.authenticate, (0, auth_1.authorize)('admin', 'super_admin'), (0, validateSchema_1.validateSchema)(validation_1.idParamSchema), departmentController_1.deleteDepartment);
exports.default = router;
//# sourceMappingURL=departments.js.map