import axios from 'axios';
import { LoginCredentials, LoginResponse, PaginationParams } from '../types';

const API_BASE_URL = (import.meta.env?.VITE_API_URL as string) || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') || localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('adminToken');
      localStorage.removeItem('user');
      localStorage.removeItem('adminUser');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await api.post('/auth/login', credentials);
    return response.data.data;
  },
  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data.data;
  },
  logout: async () => {
    await api.post('/auth/logout');
  },
};

// Notices API
export const noticesAPI = {
  getAll: async (params?: PaginationParams) => {
    const response = await api.get('/notices', { params });
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/notices/${id}`);
    return response.data.data;
  },
  create: async (data: any) => {
    const response = await api.post('/notices', data);
    return response.data.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/notices/${id}`, data);
    return response.data.data;
  },
  delete: async (id: string) => {
    await api.delete(`/notices/${id}`);
  },
};

// Departments API
export const departmentsAPI = {
  getAll: async (params?: PaginationParams) => {
    const response = await api.get('/departments', { params });
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/departments/${id}`);
    return response.data.data;
  },
  getList: async () => {
    const response = await api.get('/departments/list');
    return response.data.data;
  },
  create: async (data: any) => {
    const response = await api.post('/departments', data);
    return response.data.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/departments/${id}`, data);
    return response.data.data;
  },
  delete: async (id: string) => {
    await api.delete(`/departments/${id}`);
  },
};

// Faculty API
export const facultyAPI = {
  getAll: async (params?: PaginationParams) => {
    const response = await api.get('/faculty', { params });
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/faculty/${id}`);
    return response.data.data;
  },
  create: async (data: any) => {
    const response = await api.post('/faculty', data);
    return response.data.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/faculty/${id}`, data);
    return response.data.data;
  },
  delete: async (id: string) => {
    await api.delete(`/faculty/${id}`);
  },
};

// Journals API
export const journalsAPI = {
  getAll: async (params?: PaginationParams) => {
    const response = await api.get('/journals', { params });
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/journals/${id}`);
    return response.data.data;
  },
  create: async (data: any) => {
    const response = await api.post('/journals', data);
    return response.data.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/journals/${id}`, data);
    return response.data.data;
  },
  delete: async (id: string) => {
    await api.delete(`/journals/${id}`);
  },
};

// Admissions API
export const admissionsAPI = {
  getAll: async (params?: PaginationParams) => {
    const response = await api.get('/admissions', { params });
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/admissions/${id}`);
    return response.data.data;
  },
  create: async (data: any) => {
    const response = await api.post('/admissions', data);
    return response.data.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/admissions/${id}`, data);
    return response.data.data;
  },
  delete: async (id: string) => {
    await api.delete(`/admissions/${id}`);
  },
};

// Doctors API
export const doctorsAPI = {
  getAll: async (params?: PaginationParams) => {
    const response = await api.get('/doctors', { params });
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/doctors/${id}`);
    return response.data.data;
  },
  getList: async () => {
    const response = await api.get('/doctors/list');
    return response.data.data;
  },
  create: async (data: any) => {
    const response = await api.post('/doctors', data);
    return response.data.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/doctors/${id}`, data);
    return response.data.data;
  },
  delete: async (id: string) => {
    await api.delete(`/doctors/${id}`);
  },
};

// Appointments API
export const appointmentsAPI = {
  getAll: async (params?: PaginationParams) => {
    const response = await api.get('/appointments', { params });
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/appointments/${id}`);
    return response.data.data;
  },
  create: async (data: any) => {
    const response = await api.post('/appointments', data);
    return response.data.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/appointments/${id}`, data);
    return response.data.data;
  },
  delete: async (id: string) => {
    await api.delete(`/appointments/${id}`);
  },
  cancel: async (id: string) => {
    const response = await api.patch(`/appointments/${id}/cancel`);
    return response.data.data;
  },
};

export default api;
