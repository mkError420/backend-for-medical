"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationQuerySchema = exports.idParamSchema = exports.updateAppointmentSchema = exports.createAppointmentSchema = exports.updateDoctorSchema = exports.createDoctorSchema = exports.updateAdmissionSchema = exports.createAdmissionSchema = exports.updateJournalSchema = exports.createJournalSchema = exports.updateFacultySchema = exports.createFacultySchema = exports.updateDepartmentSchema = exports.createDepartmentSchema = exports.updateNoticeSchema = exports.createNoticeSchema = exports.loginSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.loginSchema = {
    body: joi_1.default.object({
        email: joi_1.default.string().email().required().messages({
            'string.email': 'Please provide a valid email',
            'any.required': 'Email is required',
        }),
        password: joi_1.default.string().min(6).required().messages({
            'string.min': 'Password must be at least 6 characters long',
            'any.required': 'Password is required',
        }),
    }),
};
exports.createNoticeSchema = {
    body: joi_1.default.object({
        title: joi_1.default.string().required().max(200).messages({
            'any.required': 'Title is required',
            'string.max': 'Title cannot exceed 200 characters',
        }),
        description: joi_1.default.string().required().messages({
            'any.required': 'Description is required',
        }),
        category: joi_1.default.string().valid('general', 'academic', 'emergency', 'event').required().messages({
            'any.required': 'Category is required',
            'any.only': 'Category must be one of: general, academic, emergency, event',
        }),
        date: joi_1.default.date().optional(),
        attachment: joi_1.default.string().optional(),
    }),
};
exports.updateNoticeSchema = {
    body: joi_1.default.object({
        title: joi_1.default.string().optional().max(200),
        description: joi_1.default.string().optional(),
        category: joi_1.default.string().valid('general', 'academic', 'emergency', 'event').optional(),
        date: joi_1.default.date().optional(),
        attachment: joi_1.default.string().optional(),
    }),
};
exports.createDepartmentSchema = {
    body: joi_1.default.object({
        name: joi_1.default.string().required().max(100).messages({
            'any.required': 'Department name is required',
            'string.max': 'Department name cannot exceed 100 characters',
        }),
        description: joi_1.default.string().required().messages({
            'any.required': 'Description is required',
        }),
        headOfDepartment: joi_1.default.string().required().max(100).messages({
            'any.required': 'Head of department is required',
            'string.max': 'Head of department name cannot exceed 100 characters',
        }),
        facilities: joi_1.default.array().items(joi_1.default.string()).optional(),
    }),
};
exports.updateDepartmentSchema = {
    body: joi_1.default.object({
        name: joi_1.default.string().optional().max(100),
        description: joi_1.default.string().optional(),
        headOfDepartment: joi_1.default.string().optional().max(100),
        facilities: joi_1.default.array().items(joi_1.default.string()).optional(),
    }),
};
exports.createFacultySchema = {
    body: joi_1.default.object({
        name: joi_1.default.string().required().max(100).messages({
            'any.required': 'Faculty name is required',
            'string.max': 'Faculty name cannot exceed 100 characters',
        }),
        designation: joi_1.default.string().required().max(100).messages({
            'any.required': 'Designation is required',
            'string.max': 'Designation cannot exceed 100 characters',
        }),
        department: joi_1.default.string().required().messages({
            'any.required': 'Department is required',
        }),
        qualification: joi_1.default.string().required().messages({
            'any.required': 'Qualification is required',
        }),
        experience: joi_1.default.number().min(0).optional().messages({
            'number.min': 'Experience cannot be negative',
        }),
        profileImage: joi_1.default.string().optional(),
    }),
};
exports.updateFacultySchema = {
    body: joi_1.default.object({
        name: joi_1.default.string().optional().max(100),
        designation: joi_1.default.string().optional().max(100),
        department: joi_1.default.string().optional(),
        qualification: joi_1.default.string().optional(),
        experience: joi_1.default.number().min(0).optional(),
        profileImage: joi_1.default.string().optional(),
    }),
};
exports.createJournalSchema = {
    body: joi_1.default.object({
        title: joi_1.default.string().required().max(200).messages({
            'any.required': 'Article title is required',
            'string.max': 'Article title cannot exceed 200 characters',
        }),
        author: joi_1.default.string().required().max(100).messages({
            'any.required': 'Author name is required',
            'string.max': 'Author name cannot exceed 100 characters',
        }),
        abstract: joi_1.default.string().required().messages({
            'any.required': 'Abstract is required',
        }),
        pdfFile: joi_1.default.string().optional(),
        publishedDate: joi_1.default.date().optional(),
    }),
};
exports.updateJournalSchema = {
    body: joi_1.default.object({
        title: joi_1.default.string().optional().max(200),
        author: joi_1.default.string().optional().max(100),
        abstract: joi_1.default.string().optional(),
        pdfFile: joi_1.default.string().optional(),
        publishedDate: joi_1.default.date().optional(),
    }),
};
exports.createAdmissionSchema = {
    body: joi_1.default.object({
        studentName: joi_1.default.string().required().max(100).messages({
            'any.required': 'Student name is required',
            'string.max': 'Student name cannot exceed 100 characters',
        }),
        email: joi_1.default.string().email().required().messages({
            'string.email': 'Please provide a valid email',
            'any.required': 'Email is required',
        }),
        phone: joi_1.default.string().required().max(20).messages({
            'any.required': 'Phone number is required',
            'string.max': 'Phone number cannot exceed 20 characters',
        }),
        qualification: joi_1.default.string().required().messages({
            'any.required': 'Qualification is required',
        }),
        documents: joi_1.default.array().items(joi_1.default.string()).optional(),
        status: joi_1.default.string().valid('pending', 'approved', 'rejected').optional(),
    }),
};
exports.updateAdmissionSchema = {
    body: joi_1.default.object({
        studentName: joi_1.default.string().optional().max(100),
        email: joi_1.default.string().email().optional(),
        phone: joi_1.default.string().optional().max(20),
        qualification: joi_1.default.string().optional(),
        documents: joi_1.default.array().items(joi_1.default.string()).optional(),
        status: joi_1.default.string().valid('pending', 'approved', 'rejected').optional(),
    }),
};
exports.createDoctorSchema = {
    body: joi_1.default.object({
        name: joi_1.default.string().required().max(100).messages({
            'any.required': 'Doctor name is required',
            'string.max': 'Doctor name cannot exceed 100 characters',
        }),
        specialization: joi_1.default.string().required().max(100).messages({
            'any.required': 'Specialization is required',
            'string.max': 'Specialization cannot exceed 100 characters',
        }),
        department: joi_1.default.string().required().messages({
            'any.required': 'Department is required',
        }),
        experience: joi_1.default.number().min(0).optional().messages({
            'number.min': 'Experience cannot be negative',
        }),
        schedule: joi_1.default.object().optional(),
    }),
};
exports.updateDoctorSchema = {
    body: joi_1.default.object({
        name: joi_1.default.string().optional().max(100),
        specialization: joi_1.default.string().optional().max(100),
        department: joi_1.default.string().optional(),
        experience: joi_1.default.number().min(0).optional(),
        schedule: joi_1.default.object().optional(),
    }),
};
exports.createAppointmentSchema = {
    body: joi_1.default.object({
        patientName: joi_1.default.string().required().max(100).messages({
            'any.required': 'Patient name is required',
            'string.max': 'Patient name cannot exceed 100 characters',
        }),
        phone: joi_1.default.string().required().max(20).messages({
            'any.required': 'Phone number is required',
            'string.max': 'Phone number cannot exceed 20 characters',
        }),
        doctorId: joi_1.default.string().required().messages({
            'any.required': 'Doctor ID is required',
        }),
        date: joi_1.default.date().required().messages({
            'any.required': 'Appointment date is required',
        }),
        time: joi_1.default.string().required().messages({
            'any.required': 'Appointment time is required',
        }),
        status: joi_1.default.string().valid('scheduled', 'completed', 'cancelled').optional(),
    }),
};
exports.updateAppointmentSchema = {
    body: joi_1.default.object({
        patientName: joi_1.default.string().optional().max(100),
        phone: joi_1.default.string().optional().max(20),
        doctorId: joi_1.default.string().optional(),
        date: joi_1.default.date().optional(),
        time: joi_1.default.string().optional(),
        status: joi_1.default.string().valid('scheduled', 'completed', 'cancelled').optional(),
    }),
};
exports.idParamSchema = {
    params: joi_1.default.object({
        id: joi_1.default.string().required().messages({
            'any.required': 'ID parameter is required',
            'string.base': 'ID must be a string',
        }),
    }),
};
exports.paginationQuerySchema = {
    query: joi_1.default.object({
        page: joi_1.default.number().integer().min(1).default(1),
        limit: joi_1.default.number().integer().min(1).max(100).default(10),
        search: joi_1.default.string().optional(),
    }),
};
//# sourceMappingURL=validation.js.map