"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDoctorList = exports.deleteDoctor = exports.updateDoctor = exports.getDoctorById = exports.getAllDoctors = exports.createDoctor = void 0;
const Doctor_1 = __importDefault(require("../models/Doctor"));
const createDoctor = async (req, res) => {
    try {
        const doctor = new Doctor_1.default(req.body);
        await doctor.save();
        res.status(201).json({
            success: true,
            data: doctor,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.createDoctor = createDoctor;
const getAllDoctors = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || '';
        const specialization = req.query.specialization;
        const department = req.query.department;
        const query = {};
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { specialization: { $regex: search, $options: 'i' } },
            ];
        }
        if (specialization) {
            query.specialization = { $regex: specialization, $options: 'i' };
        }
        if (department) {
            query.department = department;
        }
        const skip = (page - 1) * limit;
        const doctors = await Doctor_1.default.find(query)
            .populate('department', 'name')
            .sort({ name: 1 })
            .skip(skip)
            .limit(limit);
        const total = await Doctor_1.default.countDocuments(query);
        res.status(200).json({
            success: true,
            data: doctors,
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
exports.getAllDoctors = getAllDoctors;
const getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor_1.default.findById(req.params.id).populate('department', 'name');
        if (!doctor) {
            res.status(404).json({
                success: false,
                error: 'Doctor not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: doctor,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.getDoctorById = getDoctorById;
const updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctor_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('department', 'name');
        if (!doctor) {
            res.status(404).json({
                success: false,
                error: 'Doctor not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: doctor,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.updateDoctor = updateDoctor;
const deleteDoctor = async (req, res) => {
    try {
        const doctor = await Doctor_1.default.findByIdAndDelete(req.params.id);
        if (!doctor) {
            res.status(404).json({
                success: false,
                error: 'Doctor not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Doctor deleted successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.deleteDoctor = deleteDoctor;
const getDoctorList = async (req, res) => {
    try {
        const doctors = await Doctor_1.default.find()
            .select('name specialization')
            .sort({ name: 1 });
        res.status(200).json({
            success: true,
            data: doctors,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.getDoctorList = getDoctorList;
//# sourceMappingURL=doctorController.js.map