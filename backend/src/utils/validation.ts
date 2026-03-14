import Joi from 'joi';

// Authentication schemas
export const loginSchema = {
  body: Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'Please provide a valid email',
      'any.required': 'Email is required',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': 'Password must be at least 6 characters long',
      'any.required': 'Password is required',
    }),
  }),
};

// Notice schemas
export const createNoticeSchema = {
  body: Joi.object({
    title: Joi.string().required().max(200).messages({
      'any.required': 'Title is required',
      'string.max': 'Title cannot exceed 200 characters',
    }),
    description: Joi.string().required().messages({
      'any.required': 'Description is required',
    }),
    category: Joi.string().valid('general', 'academic', 'emergency', 'event').required().messages({
      'any.required': 'Category is required',
      'any.only': 'Category must be one of: general, academic, emergency, event',
    }),
    date: Joi.date().optional(),
    attachment: Joi.string().optional(),
  }),
};

export const updateNoticeSchema = {
  body: Joi.object({
    title: Joi.string().optional().max(200),
    description: Joi.string().optional(),
    category: Joi.string().valid('general', 'academic', 'emergency', 'event').optional(),
    date: Joi.date().optional(),
    attachment: Joi.string().optional(),
  }),
};

// Department schemas
export const createDepartmentSchema = {
  body: Joi.object({
    name: Joi.string().required().max(100).messages({
      'any.required': 'Department name is required',
      'string.max': 'Department name cannot exceed 100 characters',
    }),
    description: Joi.string().required().messages({
      'any.required': 'Description is required',
    }),
    headOfDepartment: Joi.string().required().max(100).messages({
      'any.required': 'Head of department is required',
      'string.max': 'Head of department name cannot exceed 100 characters',
    }),
    facilities: Joi.array().items(Joi.string()).optional(),
  }),
};

export const updateDepartmentSchema = {
  body: Joi.object({
    name: Joi.string().optional().max(100),
    description: Joi.string().optional(),
    headOfDepartment: Joi.string().optional().max(100),
    facilities: Joi.array().items(Joi.string()).optional(),
  }),
};

// Faculty schemas
export const createFacultySchema = {
  body: Joi.object({
    name: Joi.string().required().max(100).messages({
      'any.required': 'Faculty name is required',
      'string.max': 'Faculty name cannot exceed 100 characters',
    }),
    designation: Joi.string().required().max(100).messages({
      'any.required': 'Designation is required',
      'string.max': 'Designation cannot exceed 100 characters',
    }),
    department: Joi.string().required().messages({
      'any.required': 'Department is required',
    }),
    qualification: Joi.string().required().messages({
      'any.required': 'Qualification is required',
    }),
    experience: Joi.number().min(0).optional().messages({
      'number.min': 'Experience cannot be negative',
    }),
    profileImage: Joi.string().optional(),
  }),
};

export const updateFacultySchema = {
  body: Joi.object({
    name: Joi.string().optional().max(100),
    designation: Joi.string().optional().max(100),
    department: Joi.string().optional(),
    qualification: Joi.string().optional(),
    experience: Joi.number().min(0).optional(),
    profileImage: Joi.string().optional(),
  }),
};

// Journal Article schemas
export const createJournalSchema = {
  body: Joi.object({
    title: Joi.string().required().max(200).messages({
      'any.required': 'Article title is required',
      'string.max': 'Article title cannot exceed 200 characters',
    }),
    author: Joi.string().required().max(100).messages({
      'any.required': 'Author name is required',
      'string.max': 'Author name cannot exceed 100 characters',
    }),
    abstract: Joi.string().required().messages({
      'any.required': 'Abstract is required',
    }),
    pdfFile: Joi.string().optional(),
    publishedDate: Joi.date().optional(),
  }),
};

export const updateJournalSchema = {
  body: Joi.object({
    title: Joi.string().optional().max(200),
    author: Joi.string().optional().max(100),
    abstract: Joi.string().optional(),
    pdfFile: Joi.string().optional(),
    publishedDate: Joi.date().optional(),
  }),
};

// Admission schemas
export const createAdmissionSchema = {
  body: Joi.object({
    studentName: Joi.string().required().max(100).messages({
      'any.required': 'Student name is required',
      'string.max': 'Student name cannot exceed 100 characters',
    }),
    email: Joi.string().email().required().messages({
      'string.email': 'Please provide a valid email',
      'any.required': 'Email is required',
    }),
    phone: Joi.string().required().max(20).messages({
      'any.required': 'Phone number is required',
      'string.max': 'Phone number cannot exceed 20 characters',
    }),
    qualification: Joi.string().required().messages({
      'any.required': 'Qualification is required',
    }),
    documents: Joi.array().items(Joi.string()).optional(),
    status: Joi.string().valid('pending', 'approved', 'rejected').optional(),
  }),
};

export const updateAdmissionSchema = {
  body: Joi.object({
    studentName: Joi.string().optional().max(100),
    email: Joi.string().email().optional(),
    phone: Joi.string().optional().max(20),
    qualification: Joi.string().optional(),
    documents: Joi.array().items(Joi.string()).optional(),
    status: Joi.string().valid('pending', 'approved', 'rejected').optional(),
  }),
};

// Doctor schemas
export const createDoctorSchema = {
  body: Joi.object({
    name: Joi.string().required().max(100).messages({
      'any.required': 'Doctor name is required',
      'string.max': 'Doctor name cannot exceed 100 characters',
    }),
    specialization: Joi.string().required().max(100).messages({
      'any.required': 'Specialization is required',
      'string.max': 'Specialization cannot exceed 100 characters',
    }),
    department: Joi.string().required().messages({
      'any.required': 'Department is required',
    }),
    experience: Joi.number().min(0).optional().messages({
      'number.min': 'Experience cannot be negative',
    }),
    schedule: Joi.object().optional(),
  }),
};

export const updateDoctorSchema = {
  body: Joi.object({
    name: Joi.string().optional().max(100),
    specialization: Joi.string().optional().max(100),
    department: Joi.string().optional(),
    experience: Joi.number().min(0).optional(),
    schedule: Joi.object().optional(),
  }),
};

// Appointment schemas
export const createAppointmentSchema = {
  body: Joi.object({
    patientName: Joi.string().required().max(100).messages({
      'any.required': 'Patient name is required',
      'string.max': 'Patient name cannot exceed 100 characters',
    }),
    phone: Joi.string().required().max(20).messages({
      'any.required': 'Phone number is required',
      'string.max': 'Phone number cannot exceed 20 characters',
    }),
    doctorId: Joi.string().required().messages({
      'any.required': 'Doctor ID is required',
    }),
    date: Joi.date().required().messages({
      'any.required': 'Appointment date is required',
    }),
    time: Joi.string().required().messages({
      'any.required': 'Appointment time is required',
    }),
    status: Joi.string().valid('scheduled', 'completed', 'cancelled').optional(),
  }),
};

export const updateAppointmentSchema = {
  body: Joi.object({
    patientName: Joi.string().optional().max(100),
    phone: Joi.string().optional().max(20),
    doctorId: Joi.string().optional(),
    date: Joi.date().optional(),
    time: Joi.string().optional(),
    status: Joi.string().valid('scheduled', 'completed', 'cancelled').optional(),
  }),
};

// Common ID parameter validation
export const idParamSchema = {
  params: Joi.object({
    id: Joi.string().required().messages({
      'any.required': 'ID parameter is required',
      'string.base': 'ID must be a string',
    }),
  }),
};

// Pagination query validation
export const paginationQuerySchema = {
  query: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(10),
    search: Joi.string().optional(),
  }),
};
