"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDepartmentList = exports.deleteDepartment = exports.updateDepartment = exports.getDepartmentById = exports.getAllDepartments = exports.createDepartment = void 0;
const Department_1 = __importDefault(require("../models/Department"));
const createDepartment = async (req, res) => {
    try {
        const department = new Department_1.default(req.body);
        await department.save();
        res.status(201).json({
            success: true,
            data: department,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.createDepartment = createDepartment;
const getAllDepartments = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || '';
        const query = {};
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { headOfDepartment: { $regex: search, $options: 'i' } },
            ];
        }
        const skip = (page - 1) * limit;
        const departments = await Department_1.default.find(query)
            .sort({ name: 1 })
            .skip(skip)
            .limit(limit);
        const total = await Department_1.default.countDocuments(query);
        res.status(200).json({
            success: true,
            data: departments,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.getAllDepartments = getAllDepartments;
const getDepartmentById = async (req, res) => {
    try {
        const department = await Department_1.default.findById(req.params.id);
        if (!department) {
            res.status(404).json({
                success: false,
                error: 'Department not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: department,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.getDepartmentById = getDepartmentById;
const updateDepartment = async (req, res) => {
    try {
        const department = await Department_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!department) {
            res.status(404).json({
                success: false,
                error: 'Department not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: department,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.updateDepartment = updateDepartment;
const deleteDepartment = async (req, res) => {
    try {
        const department = await Department_1.default.findByIdAndDelete(req.params.id);
        if (!department) {
            res.status(404).json({
                success: false,
                error: 'Department not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Department deleted successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.deleteDepartment = deleteDepartment;
const getDepartmentList = async (req, res) => {
    try {
        const departments = await Department_1.default.find()
            .select('name')
            .sort({ name: 1 });
        res.status(200).json({
            success: true,
            data: departments,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.getDepartmentList = getDepartmentList;
//# sourceMappingURL=departmentController.js.map