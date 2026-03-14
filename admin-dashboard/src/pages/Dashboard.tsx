import React, { useState, useEffect } from 'react';
import { 
  Users, 
  FileText, 
  Building, 
  Calendar,
  TrendingUp,
  UserCheck,
  GraduationCap,
  BookOpen
} from 'lucide-react';

interface StatCard {
  title: string;
  value: number;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<StatCard[]>([
    {
      title: 'Total Faculty',
      value: 0,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Departments',
      value: 0,
      icon: Building,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Active Notices',
      value: 0,
      icon: FileText,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Today\'s Appointments',
      value: 0,
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Total Doctors',
      value: 0,
      icon: UserCheck,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      title: 'Pending Admissions',
      value: 0,
      icon: GraduationCap,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      title: 'Journal Articles',
      value: 0,
      icon: BookOpen,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      title: 'Growth Rate',
      value: 12,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ]);

  const [recentActivities] = useState([
    {
      id: 1,
      type: 'notice',
      title: 'New notice published',
      description: 'Annual Medical Conference 2024',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'admission',
      title: 'New admission application',
      description: 'John Doe - MBBS Program',
      time: '4 hours ago',
    },
    {
      id: 3,
      type: 'appointment',
      title: 'Appointment scheduled',
      description: 'Patient Sarah with Dr. Smith',
      time: '6 hours ago',
    },
    {
      id: 4,
      type: 'faculty',
      title: 'New faculty added',
      description: 'Dr. Emily Johnson - Cardiology',
      time: '1 day ago',
    },
  ]);

  useEffect(() => {
    // Simulate fetching stats from API
    const fetchStats = async () => {
      // In a real app, these would come from your API
      setStats(prev => prev.map(stat => ({
        ...stat,
        value: Math.floor(Math.random() * 100) + 10,
      })));
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening at your medical college.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {stat.title === 'Growth Rate' ? `${stat.value}%` : stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'notice' ? 'bg-yellow-500' :
                  activity.type === 'admission' ? 'bg-blue-500' :
                  activity.type === 'appointment' ? 'bg-green-500' :
                  'bg-purple-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button
              onClick={() => window.location.href = '/notices/create'}
              className="w-full btn btn-primary h-10"
            >
              Create Notice
            </button>
            <button
              onClick={() => window.location.href = '/faculty/create'}
              className="w-full btn btn-secondary h-10"
            >
              Add Faculty
            </button>
            <button
              onClick={() => window.location.href = '/admissions'}
              className="w-full btn btn-secondary h-10"
            >
              Review Applications
            </button>
            <button
              onClick={() => window.location.href = '/appointments'}
              className="w-full btn btn-secondary h-10"
            >
              View Appointments
            </button>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Department Overview</h2>
          <div className="space-y-3">
            {['General Medicine', 'Cardiology', 'Neurology', 'Pediatrics'].map((dept, index) => (
              <div key={dept} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{dept}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: `${Math.random() * 60 + 20}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-900 w-8">{Math.floor(Math.random() * 50 + 10)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Statistics</h2>
          <div className="space-y-3">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => (
              <div key={month} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{month}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-medical-600 h-2 rounded-full"
                      style={{ width: `${Math.random() * 80 + 20}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-900 w-8">{Math.floor(Math.random() * 100 + 20)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
