"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdmission = exports.updateAdmission = exports.getAdmissionById = exports.getAllAdmissions = exports.createAdmission = void 0;
const Admission_1 = __importDefault(require("../models/Admission"));
const createAdmission = async (req, res) => {
    try {
        const admission = new Admission_1.default(req.body);
        await admission.save();
        res.status(201).json({
            success: true,
            data: admission,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.createAdmission = createAdmission;
const getAllAdmissions = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || '';
        const status = req.query.status;
        const query = {};
        if (search) {
            query.$or = [
                { studentName: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
            ];
        }
        if (status) {
            query.status = status;
        }
        const skip = (page - 1) * limit;
        const admissions = await Admission_1.default.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
        const total = await Admission_1.default.countDocuments(query);
        res.status(200).json({
            success: true,
            data: admissions,
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
exports.getAllAdmissions = getAllAdmissions;
const getAdmissionById = async (req, res) => {
    try {
        const admission = await Admission_1.default.findById(req.params.id);
        if (!admission) {
            res.status(404).json({
                success: false,
                error: 'Admission application not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: admission,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.getAdmissionById = getAdmissionById;
const updateAdmission = async (req, res) => {
    try {
        const admission = await Admission_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!admission) {
            res.status(404).json({
                success: false,
                error: 'Admission application not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: admission,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.updateAdmission = updateAdmission;
const deleteAdmission = async (req, res) => {
    try {
        const admission = await Admission_1.default.findByIdAndDelete(req.params.id);
        if (!admission) {
            res.status(404).json({
                success: false,
                error: 'Admission application not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Admission application deleted successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.deleteAdmission = deleteAdmission;
//# sourceMappingURL=admissionController.js.map