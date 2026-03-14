"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFaculty = exports.updateFaculty = exports.getFacultyById = exports.getAllFaculty = exports.createFaculty = void 0;
const Faculty_1 = __importDefault(require("../models/Faculty"));
const createFaculty = async (req, res) => {
    try {
        const faculty = new Faculty_1.default(req.body);
        await faculty.save();
        res.status(201).json({
            success: true,
            data: faculty,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.createFaculty = createFaculty;
const getAllFaculty = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || '';
        const department = req.query.department;
        const query = {};
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { designation: { $regex: search, $options: 'i' } },
            ];
        }
        if (department) {
            query.department = department;
        }
        const skip = (page - 1) * limit;
        const faculty = await Faculty_1.default.find(query)
            .populate('department', 'name')
            .sort({ name: 1 })
            .skip(skip)
            .limit(limit);
        const total = await Faculty_1.default.countDocuments(query);
        res.status(200).json({
            success: true,
            data: faculty,
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
exports.getAllFaculty = getAllFaculty;
const getFacultyById = async (req, res) => {
    try {
        const faculty = await Faculty_1.default.findById(req.params.id).populate('department', 'name');
        if (!faculty) {
            res.status(404).json({
                success: false,
                error: 'Faculty not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: faculty,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.getFacultyById = getFacultyById;
const updateFaculty = async (req, res) => {
    try {
        const faculty = await Faculty_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('department', 'name');
        if (!faculty) {
            res.status(404).json({
                success: false,
                error: 'Faculty not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: faculty,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.updateFaculty = updateFaculty;
const deleteFaculty = async (req, res) => {
    try {
        const faculty = await Faculty_1.default.findByIdAndDelete(req.params.id);
        if (!faculty) {
            res.status(404).json({
                success: false,
                error: 'Faculty not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Faculty deleted successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.deleteFaculty = deleteFaculty;
//# sourceMappingURL=facultyController.js.map