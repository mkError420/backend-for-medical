// API service for admin dashboard
const API_BASE_URL = 'http://localhost:5000/api';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  admin: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

export const adminAPI = {
  // Test connection
  testConnection: async (): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'test@test.com',
          password: 'test'
        }),
      });
      return response.status !== 0;
    } catch (error) {
      console.error('API connection test failed:', error);
      return false;
    }
  },

  // Login
  login: async (email: string, password: string): Promise<ApiResponse<LoginResponse>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        error: 'Unable to connect to admin server. Please try again.',
        data: null as any
      };
    }
  },

  // Get profile
  getProfile: async (token: string): Promise<ApiResponse<any>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        error: 'Unable to connect to admin server.',
        data: null as any
      };
    }
  }
};
