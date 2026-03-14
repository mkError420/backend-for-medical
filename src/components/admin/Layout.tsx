import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Building, 
  Users, 
  BookOpen, 
  GraduationCap, 
  UserCheck, 
  Calendar,
  Menu,
  X,
  LogOut,
  Settings
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { user, logout } = useAuth();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Notices', path: '/notices' },
    { icon: Building, label: 'Departments', path: '/departments' },
    { icon: Users, label: 'Faculty', path: '/faculty' },
    { icon: BookOpen, label: 'Journals', path: '/journals' },
    { icon: GraduationCap, label: 'Admissions', path: '/admissions' },
    { icon: UserCheck, label: 'Doctors', path: '/doctors' },
    { icon: Calendar, label: 'Appointments', path: '/appointments' },
  ];

  const handleMenuItemClick = (path: string) => {
    window.location.href = path;
    onClose();
  };

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-between h-16 px-6 border-b">
        <h1 className="text-xl font-bold text-gray-900">Medical College</h1>
        <button
          onClick={onClose}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <nav className="mt-6">
        <div className="px-3">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleMenuItemClick(item.path)}
              className="sidebar-item w-full mb-1"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            {user?.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.role}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="sidebar-item w-full text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

const Header = ({ onMenuToggle }: { onMenuToggle: () => void }) => {
  return (
    <header className="bg-white shadow-sm border-b lg:hidden">
      <div className="flex items-center justify-between h-16 px-4">
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Admin Dashboard</h1>
        <div className="w-8" />
      </div>
    </header>
  );
};

export const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="lg:ml-64">
        <Header onMenuToggle={() => setSidebarOpen(true)} />
        
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
