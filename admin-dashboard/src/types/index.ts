export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'super_admin';
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  admin: User;
}

export interface Notice {
  _id: string;
  title: string;
  description: string;
  category: 'general' | 'academic' | 'emergency' | 'event';
  date: string;
  attachment?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Department {
  _id: string;
  name: string;
  description: string;
  headOfDepartment: string;
  facilities: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Faculty {
  _id: string;
  name: string;
  designation: string;
  department: Department;
  qualification: string;
  experience?: number;
  profileImage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Journal {
  _id: string;
  title: string;
  author: string;
  abstract: string;
  pdfFile?: string;
  publishedDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface Admission {
  _id: string;
  studentName: string;
  email: string;
  phone: string;
  qualification: string;
  documents?: string[];
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  department: Department;
  experience?: number;
  schedule?: {
    days: string[];
    time: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Appointment {
  _id: string;
  patientName: string;
  phone: string;
  doctorId: Doctor;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
}
