"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.deleteAppointment = exports.updateAppointment = exports.getAppointmentById = exports.getAllAppointments = exports.createAppointment = void 0;
const Appointment_1 = __importDefault(require("../models/Appointment"));
const createAppointment = async (req, res) => {
    try {
        const appointment = new Appointment_1.default(req.body);
        await appointment.save();
        res.status(201).json({
            success: true,
            data: appointment,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.createAppointment = createAppointment;
const getAllAppointments = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || '';
        const status = req.query.status;
        const doctorId = req.query.doctorId;
        const query = {};
        if (search) {
            query.$or = [
                { patientName: { $regex: search, $options: 'i' } },
                { phone: { $regex: search, $options: 'i' } },
            ];
        }
        if (status) {
            query.status = status;
        }
        if (doctorId) {
            query.doctorId = doctorId;
        }
        const skip = (page - 1) * limit;
        const appointments = await Appointment_1.default.find(query)
            .populate('doctorId', 'name specialization')
            .sort({ date: -1, time: -1 })
            .skip(skip)
            .limit(limit);
        const total = await Appointment_1.default.countDocuments(query);
        res.status(200).json({
            success: true,
            data: appointments,
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
exports.getAllAppointments = getAllAppointments;
const getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment_1.default.findById(req.params.id).populate('doctorId', 'name specialization');
        if (!appointment) {
            res.status(404).json({
                success: false,
                error: 'Appointment not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: appointment,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.getAppointmentById = getAppointmentById;
const updateAppointment = async (req, res) => {
    try {
        const appointment = await Appointment_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('doctorId', 'name specialization');
        if (!appointment) {
            res.status(404).json({
                success: false,
                error: 'Appointment not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: appointment,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.updateAppointment = updateAppointment;
const deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment_1.default.findByIdAndDelete(req.params.id);
        if (!appointment) {
            res.status(404).json({
                success: false,
                error: 'Appointment not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Appointment deleted successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.deleteAppointment = deleteAppointment;
const cancelAppointment = async (req, res) => {
    try {
        const appointment = await Appointment_1.default.findByIdAndUpdate(req.params.id, { status: 'cancelled' }, { new: true, runValidators: true }).populate('doctorId', 'name specialization');
        if (!appointment) {
            res.status(404).json({
                success: false,
                error: 'Appointment not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: appointment,
            message: 'Appointment cancelled successfully',
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message || 'Server error',
        });
    }
};
exports.cancelAppointment = cancelAppointment;
//# sourceMappingURL=appointmentController.js.map