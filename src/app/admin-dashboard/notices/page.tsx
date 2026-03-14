"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  FileText, 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar,
  User,
  Tag,
  ChevronDown,
  X,
  Save,
  Clock,
  AlertCircle,
  CheckCircle,
  Info,
  TrendingUp,
  Download,
  MoreHorizontal,
  Bell
} from 'lucide-react'

interface Notice {
  _id: string;
  title: string;
  description: string;
  category: 'general' | 'academic' | 'emergency' | 'event';
  date: string;
  author?: string;
  attachment?: string;
  status: 'active' | 'inactive';
  views: number;
  createdAt: string;
  updatedAt: string;
}

const NoticesPage: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'general' as Notice['category'],
    date: '',
    attachment: '',
    status: 'active' as Notice['status']
  })
  const router = useRouter()

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
      router.push('/login');
    }
    fetchNotices();
  }, [router]);

  const fetchNotices = async () => {
    try {
      setLoading(true);
      // Mock data for now - replace with actual API call
      const mockNotices: Notice[] = [
        {
          _id: '1',
          title: 'Annual Medical Conference 2024',
          description: 'Join us for the annual medical conference featuring the latest advancements in medical science and healthcare practices.',
          category: 'event',
          date: '2024-03-20',
          author: 'Dr. Sarah Johnson',
          status: 'active',
          views: 234,
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '2',
          title: 'New Cardiology Wing Opening',
          description: 'We are pleased to announce the opening of our new state-of-the-art cardiology wing with advanced diagnostic facilities.',
          category: 'general',
          date: '2024-03-15',
          author: 'Admin',
          status: 'active',
          views: 189,
          createdAt: '2024-03-13T14:30:00Z',
          updatedAt: '2024-03-13T14:30:00Z'
        },
        {
          _id: '3',
          title: 'Admissions Open for 2024-25',
          description: 'Applications are now open for the academic year 2024-25. Last date to apply is May 31, 2024.',
          category: 'academic',
          date: '2024-03-10',
          author: 'Admissions Office',
          status: 'active',
          views: 456,
          createdAt: '2024-03-10T09:15:00Z',
          updatedAt: '2024-03-10T09:15:00Z'
        },
        {
          _id: '4',
          title: 'Emergency Protocol Update',
          description: 'Updated emergency response protocols for all departments. Please review and implement immediately.',
          category: 'emergency',
          date: '2024-03-12',
          author: 'Medical Director',
          status: 'active',
          views: 78,
          createdAt: '2024-03-12T16:45:00Z',
          updatedAt: '2024-03-12T16:45:00Z'
        },
        {
          _id: '5',
          title: 'Faculty Meeting Schedule',
          description: 'Monthly faculty meeting scheduled for March 25, 2024 at 3:00 PM in Conference Room A.',
          category: 'general',
          date: '2024-03-25',
          author: 'HR Department',
          status: 'inactive',
          views: 23,
          createdAt: '2024-03-11T11:20:00Z',
          updatedAt: '2024-03-11T11:20:00Z'
        }
      ];
      
      setNotices(mockNotices);
    } catch (error) {
      console.error('Failed to fetch notices:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingNotice) {
        // Update existing notice
        setNotices(notices.map(notice => 
          notice._id === editingNotice._id 
            ? { ...notice, ...formData, updatedAt: new Date().toISOString() }
            : notice
        ));
      } else {
        // Create new notice
        const newNotice: Notice = {
          _id: Date.now().toString(),
          ...formData,
          author: user?.name || 'Admin',
          views: 0,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        setNotices([newNotice, ...notices]);
      }

      setShowCreateModal(false);
      setEditingNotice(null);
      setFormData({
        title: '',
        description: '',
        category: 'general',
        date: '',
        attachment: '',
        status: 'active'
      });
    } catch (error) {
      console.error('Failed to save notice:', error);
    }
  };

  const handleEdit = (notice: Notice) => {
    setEditingNotice(notice);
    setFormData({
      title: notice.title,
      description: notice.description,
      category: notice.category,
      date: notice.date,
      attachment: notice.attachment || '',
      status: notice.status
    });
    setShowCreateModal(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      setNotices(notices.filter(notice => notice._id !== id));
    }
  };

  const handleStatusToggle = (id: string, currentStatus: Notice['status']) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    setNotices(notices.map(notice => 
      notice._id === id 
        ? { ...notice, status: newStatus, updatedAt: new Date().toISOString() }
        : notice
    ));
  };

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: Notice['category']) => {
    switch (category) {
      case 'emergency': return AlertCircle;
      case 'academic': return TrendingUp;
      case 'event': return Calendar;
      default: return Info;
    }
  };

  const getCategoryColor = (category: Notice['category']) => {
    switch (category) {
      case 'emergency': return 'from-red-500 to-red-600';
      case 'academic': return 'from-blue-500 to-blue-600';
      case 'event': return 'from-green-500 to-green-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryBgColor = (category: Notice['category']) => {
    switch (category) {
      case 'emergency': return 'from-red-50 to-red-100';
      case 'academic': return 'from-blue-50 to-blue-100';
      case 'event': return 'from-green-50 to-green-100';
      default: return 'from-gray-50 to-gray-100';
    }
  };

  const menuItems = [
    { icon: () => <div className="w-5 h-5" />, label: 'Dashboard', path: '/admin-dashboard', active: false },
    { icon: FileText, label: 'Notices', path: '/admin-dashboard/notices', active: true, badge: notices.filter(n => n.status === 'active').length },
    { icon: () => <div className="w-5 h-5" />, label: 'Departments', path: '/admin-dashboard/departments' },
    { icon: () => <div className="w-5 h-5" />, label: 'Faculty', path: '/admin-dashboard/faculty' },
    { icon: () => <div className="w-5 h-5" />, label: 'Journals', path: '/admin-dashboard/journals' },
    { icon: () => <div className="w-5 h-5" />, label: 'Admissions', path: '/admin-dashboard/admissions' },
    { icon: () => <div className="w-5 h-5" />, label: 'Doctors', path: '/admin-dashboard/doctors' },
    { icon: () => <div className="w-5 h-5" />, label: 'Appointments', path: '/admin-dashboard/appointments' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading notices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="h-20 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-between px-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <FileText className="w-6 h-6 text-white" />
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

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              {user?.name?.charAt(0).toUpperCase() || 'A'}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{user?.name || 'Admin'}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.role || 'admin'}</p>
            </div>
          </div>
          <button
            onClick={() => router.push('/login')}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors font-medium"
          >
            <X className="h-4 w-4" />
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
                  <h1 className="text-2xl font-bold text-gray-900">Notices Management</h1>
                  <p className="text-sm text-gray-500">Manage college notices and announcements</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-2">
                  <Search className="h-4 w-4 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search notices..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-64"
                  />
                </div>
                
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all"
                >
                  <Plus className="h-4 w-4" />
                  <span className="font-medium">New Notice</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Filters */}
        <div className="px-6 py-4 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Filter by:</span>
              </div>
              <div className="flex space-x-2">
                {['all', 'general', 'academic', 'emergency', 'event'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              {filteredNotices.length} notice{filteredNotices.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        {/* Notices List */}
        <main className="p-6">
          {filteredNotices.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
              <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No notices found</h3>
              <p className="text-gray-500 mb-6">Create your first notice to get started</p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all"
              >
                <Plus className="h-4 w-4" />
                <span>Create Notice</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredNotices.map((notice) => {
                const CategoryIcon = getCategoryIcon(notice.category);
                return (
                  <div key={notice._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 overflow-hidden">
                    {/* Header */}
                    <div className={`h-2 bg-gradient-to-r ${getCategoryColor(notice.category)}`} />
                    
                    <div className="p-6">
                      {/* Category and Status */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryBgColor(notice.category)}`}>
                          <CategoryIcon className={`h-3 w-3 bg-gradient-to-r ${getCategoryColor(notice.category)} text-transparent bg-clip-text`} />
                          <span className="text-xs font-medium capitalize">{notice.category}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleStatusToggle(notice._id, notice.status)}
                            className={`px-2 py-1 text-xs font-medium rounded-lg transition-colors ${
                              notice.status === 'active'
                                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {notice.status}
                          </button>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {notice.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {notice.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{notice.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{notice.views}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{notice.author}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-2">
                          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                            <Eye className="h-4 w-4 text-gray-500" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                            <Download className="h-4 w-4 text-gray-500" />
                          </button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleEdit(notice)}
                            className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(notice._id)}
                            className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </div>

      {/* Create/Edit Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingNotice ? 'Edit Notice' : 'Create New Notice'}
                </h2>
                <button
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingNotice(null);
                    setFormData({
                      title: '',
                      description: '',
                      category: 'general',
                      date: '',
                      attachment: '',
                      status: 'active'
                    });
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notice Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter notice title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as Notice['category'] })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="general">General</option>
                    <option value="academic">Academic</option>
                    <option value="emergency">Emergency</option>
                    <option value="event">Event</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as Notice['status'] })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter notice description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attachment URL (optional)
                </label>
                <input
                  type="url"
                  value={formData.attachment}
                  onChange={(e) => setFormData({ ...formData, attachment: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/document.pdf"
                />
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingNotice(null);
                    setFormData({
                      title: '',
                      description: '',
                      category: 'general',
                      date: '',
                      attachment: '',
                      status: 'active'
                    });
                  }}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all font-medium"
                >
                  {editingNotice ? 'Update Notice' : 'Create Notice'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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

const Menu = X; // Temporary fix for import

export default NoticesPage;
