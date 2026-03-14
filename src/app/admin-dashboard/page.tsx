"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Users, 
  FileText, 
  Building, 
  Calendar,
  TrendingUp,
  UserCheck,
  GraduationCap,
  BookOpen,
  Menu,
  X,
  LogOut,
  Home,
  Bell,
  Settings,
  Search,
  Filter,
  ChevronDown,
  Activity,
  UserPlus,
  Clock,
  Star,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  Download,
  Eye,
  Edit,
  Trash2
} from 'lucide-react'

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'super_admin';
  createdAt: string;
}

const AdminDashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const storedUser = localStorage.getItem('adminUser');

    if (!token || !storedUser) {
      router.push('/login');
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
    } catch (error) {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      router.push('/login');
    }
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/login');
  };

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/admin-dashboard', active: true },
    { icon: FileText, label: 'Notices', path: '/admin-dashboard/notices', badge: 3 },
    { icon: Building, label: 'Departments', path: '/admin-dashboard/departments' },
    { icon: Users, label: 'Faculty', path: '/admin-dashboard/faculty' },
    { icon: BookOpen, label: 'Journals', path: '/admin-dashboard/journals' },
    { icon: GraduationCap, label: 'Admissions', path: '/admin-dashboard/admissions', badge: 12 },
    { icon: UserCheck, label: 'Doctors', path: '/admin-dashboard/doctors' },
    { icon: Calendar, label: 'Appointments', path: '/admin-dashboard/appointments', badge: 8 },
  ];

  const stats = [
    { 
      title: 'Total Students', 
      value: '1,234', 
      change: '+12%', 
      trend: 'up', 
      icon: Users, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    { 
      title: 'Departments', 
      value: '12', 
      change: '+2', 
      trend: 'up', 
      icon: Building, 
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    { 
      title: 'Active Faculty', 
      value: '89', 
      change: '+5%', 
      trend: 'up', 
      icon: UserCheck, 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    { 
      title: 'Pending Applications', 
      value: '45', 
      change: '-8%', 
      trend: 'down', 
      icon: GraduationCap, 
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    },
  ];

  const recentActivities = [
    { 
      id: 1, 
      type: 'admission', 
      title: 'New admission application', 
      description: 'Sarah Johnson - MBBS Program', 
      time: '2 minutes ago',
      priority: 'high'
    },
    { 
      id: 2, 
      type: 'notice', 
      title: 'Notice published', 
      description: 'Annual Medical Conference 2024', 
      time: '1 hour ago',
      priority: 'medium'
    },
    { 
      id: 3, 
      type: 'appointment', 
      title: 'Appointment scheduled', 
      description: 'Patient with Dr. Emily Chen', 
      time: '3 hours ago',
      priority: 'low'
    },
    { 
      id: 4, 
      type: 'faculty', 
      title: 'New faculty joined', 
      description: 'Dr. Michael Brown - Cardiology', 
      time: '5 hours ago',
      priority: 'medium'
    },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Medical Conference', date: 'Mar 20, 2024', type: 'conference' },
    { id: 2, title: 'Board Meeting', date: 'Mar 22, 2024', type: 'meeting' },
    { id: 3, title: 'Student Orientation', date: 'Mar 25, 2024', type: 'event' },
  ];

  const chartData = [
    { month: 'Jan', students: 850, faculty: 65 },
    { month: 'Feb', students: 920, faculty: 68 },
    { month: 'Mar', students: 1050, faculty: 72 },
    { month: 'Apr', students: 1100, faculty: 75 },
    { month: 'May', students: 1180, faculty: 78 },
    { month: 'Jun', students: 1234, faculty: 89 },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        {/* Sidebar Header */}
        <div className="h-20 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-between px-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">Medical College</h1>
              <p className="text-blue-100 text-xs">Admin Portal</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.path}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                item.active 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  item.active ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  <item.icon className={`h-4 w-4 ${item.active ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <span className={`font-medium ${item.active ? 'text-white' : ''}`}>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  item.active ? 'bg-white/20 text-white' : 'bg-red-100 text-red-600'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors font-medium"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Menu className="h-5 w-5 text-gray-600" />
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                  <p className="text-sm text-gray-500">Welcome back, {user?.name}!</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-2">
                  <Search className="h-4 w-4 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-64"
                  />
                </div>
                
                {/* Notifications */}
                <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
                  <Bell className="h-5 w-5 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                
                {/* Settings */}
                <button className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
                  <Settings className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.bgColor} flex items-center justify-center`}>
                      <stat.icon className={`h-6 w-6 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`} />
                    </div>
                    <div className={`flex items-center space-x-1 text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.trend === 'up' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600 mt-1">{stat.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts and Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Growth Overview</h2>
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="week">Last Week</option>
                    <option value="month">Last Month</option>
                    <option value="year">Last Year</option>
                  </select>
                </div>
                
                <div className="space-y-4">
                  {chartData.map((data, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{data.month}</span>
                        <div className="flex items-center space-x-4">
                          <span className="text-blue-600 font-medium">{data.students} students</span>
                          <span className="text-purple-600 font-medium">{data.faculty} faculty</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                            style={{ width: `${(data.students / 1500) * 100}%` }}
                          />
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                            style={{ width: `${(data.faculty / 100) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activities */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
                </div>
                
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.priority === 'high' ? 'bg-red-500' :
                        activity.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-xs text-gray-600 mt-0.5">{activity.description}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                      <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreHorizontal className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View Calendar</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-lg ${
                        event.type === 'conference' ? 'bg-blue-100 text-blue-700' :
                        event.type === 'meeting' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
                      }`}>
                        {event.type}
                      </span>
                      <Calendar className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
