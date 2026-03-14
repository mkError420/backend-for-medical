import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Layout } from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Notices from './pages/Notices';
import Departments from './pages/Departments';

// Placeholder components for other pages
const Faculty = () => <div className="card"><h1 className="text-2xl font-bold">Faculty Management</h1><p className="text-gray-600 mt-2">Manage faculty members and staff</p></div>;
const Journals = () => <div className="card"><h1 className="text-2xl font-bold">Journal Articles</h1><p className="text-gray-600 mt-2">Manage research publications</p></div>;
const Admissions = () => <div className="card"><h1 className="text-2xl font-bold">Admissions</h1><p className="text-gray-600 mt-2">Manage student applications</p></div>;
const Doctors = () => <div className="card"><h1 className="text-2xl font-bold">Doctors Management</h1><p className="text-gray-600 mt-2">Manage doctors and medical staff</p></div>;
const Appointments = () => <div className="card"><h1 className="text-2xl font-bold">Appointments</h1><p className="text-gray-600 mt-2">Manage patient appointments</p></div>;

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="notices" element={<Notices />} />
        <Route path="departments" element={<Departments />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="journals" element={<Journals />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="appointments" element={<Appointments />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
