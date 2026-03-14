"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Building, 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar,
  User,
  MapPin,
  Phone,
  Mail,
  Users,
  Stethoscope,
  Heart,
  Brain,
  Baby,
  Activity,
  ChevronDown,
  X,
  Save,
  Clock,
  CheckCircle,
  Info,
  TrendingUp,
  Download,
  MoreHorizontal,
  Menu,
  Home,
  FileText,
  GraduationCap,
  UserCheck,
  BookOpen
} from 'lucide-react'

interface Department {
  _id: string;
  name: string;
  description: string;
  headOfDepartment: string;
  hodEmail: string;
  hodPhone: string;
  location: string;
  facilities: string[];
  doctorsCount: number;
  bedsCount: number;
  establishedYear: number;
  type: 'clinical' | 'academic' | 'diagnostic' | 'support';
  status: 'active' | 'inactive';
  image?: string;
  createdAt: string;
  updatedAt: string;
}

const DepartmentsPage: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingDepartment, setEditingDepartment] = useState<Department | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    headOfDepartment: '',
    hodEmail: '',
    hodPhone: '',
    location: '',
    facilities: '',
    doctorsCount: 0,
    bedsCount: 0,
    establishedYear: new Date().getFullYear(),
    type: 'clinical' as Department['type'],
    status: 'active' as Department['status'],
    image: ''
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
    fetchDepartments();
  }, [router]);

  const fetchDepartments = async () => {
    try {
      setLoading(true);
      // Mock data for now - replace with actual API call
      const mockDepartments: Department[] = [
        {
          _id: '1',
          name: 'Cardiology',
          description: 'Specialized department for heart and cardiovascular diseases with advanced diagnostic and treatment facilities.',
          headOfDepartment: 'Dr. Emily Johnson',
          hodEmail: 'emily.johnson@medicalcollege.com',
          hodPhone: '+1 234-567-8901',
          location: 'Building A, 3rd Floor',
          facilities: ['Cardiac ICU', 'Cath Lab', 'Echocardiography', 'Stress Test', 'ECG'],
          doctorsCount: 12,
          bedsCount: 45,
          establishedYear: 2010,
          type: 'clinical',
          status: 'active',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '2',
          name: 'Neurology',
          description: 'Department dealing with disorders of the nervous system including brain, spinal cord, and nerves.',
          headOfDepartment: 'Dr. Michael Brown',
          hodEmail: 'michael.brown@medicalcollege.com',
          hodPhone: '+1 234-567-8902',
          location: 'Building B, 2nd Floor',
          facilities: ['Neuro ICU', 'EEG Lab', 'EMG Lab', 'Stroke Unit', 'Sleep Lab'],
          doctorsCount: 8,
          bedsCount: 30,
          establishedYear: 2012,
          type: 'clinical',
          status: 'active',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '3',
          name: 'Anatomy',
          description: 'Academic department focused on teaching human anatomy through modern teaching methods and research.',
          headOfDepartment: 'Dr. Sarah Williams',
          hodEmail: 'sarah.williams@medicalcollege.com',
          hodPhone: '+1 234-567-8903',
          location: 'Academic Block, 1st Floor',
          facilities: ['Dissection Hall', 'Museum', 'Histology Lab', 'Research Lab'],
          doctorsCount: 6,
          bedsCount: 0,
          establishedYear: 2008,
          type: 'academic',
          status: 'active',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '4',
          name: 'Radiology',
          description: 'Diagnostic imaging department providing various imaging services for accurate diagnosis.',
          headOfDepartment: 'Dr. Robert Davis',
          hodEmail: 'robert.davis@medicalcollege.com',
          hodPhone: '+1 234-567-8904',
          location: 'Diagnostic Center, Ground Floor',
          facilities: ['X-Ray', 'CT Scan', 'MRI', 'Ultrasound', 'PET Scan'],
          doctorsCount: 10,
          bedsCount: 0,
          establishedYear: 2015,
          type: 'diagnostic',
          status: 'active',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '5',
          name: 'Pediatrics',
          description: 'Comprehensive healthcare services for infants, children, and adolescents with specialized care.',
          headOfDepartment: 'Dr. Lisa Anderson',
          hodEmail: 'lisa.anderson@medicalcollege.com',
          hodPhone: '+1 234-567-8905',
          location: 'Building C, 1st Floor',
          facilities: ['NICU', 'PICU', 'Play Area', 'Vaccination Center', 'Growth Clinic'],
          doctorsCount: 15,
          bedsCount: 60,
          establishedYear: 2011,
          type: 'clinical',
          status: 'active',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        }
      ];
      
      setDepartments(mockDepartments);
    } catch (error) {
      console.error('Failed to fetch departments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const facilitiesArray = formData.facilities.split(',').map(f => f.trim()).filter(f => f);
      
      if (editingDepartment) {
        // Update existing department
        setDepartments(departments.map(dept => 
          dept._id === editingDepartment._id 
            ? { ...dept, ...formData, facilities: facilitiesArray, updatedAt: new Date().toISOString() }
            : dept
        ));
      } else {
        // Create new department
        const newDepartment: Department = {
          _id: Date.now().toString(),
          ...formData,
          facilities: facilitiesArray,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        setDepartments([newDepartment, ...departments]);
      }

      setShowCreateModal(false);
      setEditingDepartment(null);
      setFormData({
        name: '',
        description: '',
        headOfDepartment: '',
        hodEmail: '',
        hodPhone: '',
        location: '',
        facilities: '',
        doctorsCount: 0,
        bedsCount: 0,
        establishedYear: new Date().getFullYear(),
        type: 'clinical',
        status: 'active',
        image: ''
      });
    } catch (error) {
      console.error('Failed to save department:', error);
    }
  };

  const handleEdit = (department: Department) => {
    setEditingDepartment(department);
    setFormData({
      name: department.name,
      description: department.description,
      headOfDepartment: department.headOfDepartment,
      hodEmail: department.hodEmail,
      hodPhone: department.hodPhone,
      location: department.location,
      facilities: department.facilities.join(', '),
      doctorsCount: department.doctorsCount,
      bedsCount: department.bedsCount,
      establishedYear: department.establishedYear,
      type: department.type,
      status: department.status,
      image: department.image || ''
    });
    setShowCreateModal(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this department?')) {
      setDepartments(departments.filter(dept => dept._id !== id));
    }
  };

  const handleStatusToggle = (id: string, currentStatus: Department['status']) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    setDepartments(departments.map(dept => 
      dept._id === id 
        ? { ...dept, status: newStatus, updatedAt: new Date().toISOString() }
        : dept
    ));
  };

  const filteredDepartments = departments.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dept.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dept.headOfDepartment.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || dept.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: Department['type']) => {
    switch (type) {
      case 'clinical': return Stethoscope;
      case 'academic': return GraduationCap;
      case 'diagnostic': return Activity;
      default: return Building;
    }
  };

  const getTypeColor = (type: Department['type']) => {
    switch (type) {
      case 'clinical': return 'from-blue-500 to-blue-600';
      case 'academic': return 'from-purple-500 to-purple-600';
      case 'diagnostic': return 'from-green-500 to-green-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeBgColor = (type: Department['type']) => {
    switch (type) {
      case 'clinical': return 'from-blue-50 to-blue-100';
      case 'academic': return 'from-purple-50 to-purple-100';
      case 'diagnostic': return 'from-green-50 to-green-100';
      default: return 'from-gray-50 to-gray-100';
    }
  };

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/admin-dashboard', active: false },
    { icon: FileText, label: 'Notices', path: '/admin-dashboard/notices' },
    { icon: Building, label: 'Departments', path: '/admin-dashboard/departments', active: true },
    { icon: Users, label: 'Faculty', path: '/admin-dashboard/faculty' },
    { icon: BookOpen, label: 'Journals', path: '/admin-dashboard/journals' },
    { icon: GraduationCap, label: 'Admissions', path: '/admin-dashboard/admissions' },
    { icon: UserCheck, label: 'Doctors', path: '/admin-dashboard/doctors' },
    { icon: Calendar, label: 'Appointments', path: '/admin-dashboard/appointments' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading departments...</p>
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
              <Building className="w-6 h-6 text-white" />
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
              onClick={() => router.push(item.path)}
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
                  <h1 className="text-2xl font-bold text-gray-900">Departments Management</h1>
                  <p className="text-sm text-gray-500">Manage college departments and facilities</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-2">
                  <Search className="h-4 w-4 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search departments..."
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
                  <span className="font-medium">New Department</span>
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
                {['all', 'clinical', 'academic', 'diagnostic', 'support'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                      selectedType === type
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              {filteredDepartments.length} department{filteredDepartments.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        {/* Departments List */}
        <main className="p-6">
          {filteredDepartments.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
              <Building className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No departments found</h3>
              <p className="text-gray-500 mb-6">Create your first department to get started</p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all"
              >
                <Plus className="h-4 w-4" />
                <span>Create Department</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredDepartments.map((department) => {
                const TypeIcon = getTypeIcon(department.type);
                return (
                  <div key={department._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 overflow-hidden">
                    {/* Header */}
                    <div className={`h-2 bg-gradient-to-r ${getTypeColor(department.type)}`} />
                    
                    <div className="p-6">
                      {/* Type and Status */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r ${getTypeBgColor(department.type)}`}>
                          <TypeIcon className={`h-3 w-3 bg-gradient-to-r ${getTypeColor(department.type)} text-transparent bg-clip-text`} />
                          <span className="text-xs font-medium capitalize">{department.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleStatusToggle(department._id, department.status)}
                            className={`px-2 py-1 text-xs font-medium rounded-lg transition-colors ${
                              department.status === 'active'
                                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {department.status}
                          </button>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {department.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {department.description}
                      </p>

                      {/* HOD Info */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <User className="h-3 w-3 text-gray-500" />
                          <span className="text-xs font-medium text-gray-700">Head of Department</span>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{department.headOfDepartment}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Mail className="h-3 w-3" />
                            <span className="truncate">{department.hodEmail}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Phone className="h-3 w-3" />
                            <span>{department.hodPhone}</span>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <Users className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-blue-900">{department.doctorsCount}</p>
                          <p className="text-xs text-blue-700">Doctors</p>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <Heart className="h-4 w-4 text-green-600 mx-auto mb-1" />
                          <p className="text-lg font-bold text-green-900">{department.bedsCount}</p>
                          <p className="text-xs text-green-700">Beds</p>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-4">
                        <MapPin className="h-3 w-3" />
                        <span>{department.location}</span>
                      </div>

                      {/* Facilities */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-gray-700 mb-2">Key Facilities:</p>
                        <div className="flex flex-wrap gap-1">
                          {department.facilities.slice(0, 3).map((facility, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                              {facility}
                            </span>
                          ))}
                          {department.facilities.length > 3 && (
                            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                              +{department.facilities.length - 3} more
                            </span>
                          )}
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
                            onClick={() => handleEdit(department)}
                            className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(department._id)}
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
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingDepartment ? 'Edit Department' : 'Create New Department'}
                </h2>
                <button
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingDepartment(null);
                    setFormData({
                      name: '',
                      description: '',
                      headOfDepartment: '',
                      hodEmail: '',
                      hodPhone: '',
                      location: '',
                      facilities: '',
                      doctorsCount: 0,
                      bedsCount: 0,
                      establishedYear: new Date().getFullYear(),
                      type: 'clinical',
                      status: 'active',
                      image: ''
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
                    Department Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter department name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as Department['type'] })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="clinical">Clinical</option>
                    <option value="academic">Academic</option>
                    <option value="diagnostic">Diagnostic</option>
                    <option value="support">Support</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter department description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Head of Department
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.headOfDepartment}
                    onChange={(e) => setFormData({ ...formData, headOfDepartment: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Dr. John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    HOD Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.hodEmail}
                    onChange={(e) => setFormData({ ...formData, hodEmail: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="hod@medicalcollege.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    HOD Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.hodPhone}
                    onChange={(e) => setFormData({ ...formData, hodPhone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 234-567-8900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Building A, 3rd Floor"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Established Year
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.establishedYear}
                    onChange={(e) => setFormData({ ...formData, establishedYear: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="1900"
                    max={new Date().getFullYear()}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Doctors
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.doctorsCount}
                    onChange={(e) => setFormData({ ...formData, doctorsCount: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Beds
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.bedsCount}
                    onChange={(e) => setFormData({ ...formData, bedsCount: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as Department['status'] })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Facilities (comma-separated)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.facilities}
                    onChange={(e) => setFormData({ ...formData, facilities: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ICU, Laboratory, X-Ray, Emergency Room"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingDepartment(null);
                    setFormData({
                      name: '',
                      description: '',
                      headOfDepartment: '',
                      hodEmail: '',
                      hodPhone: '',
                      location: '',
                      facilities: '',
                      doctorsCount: 0,
                      bedsCount: 0,
                      establishedYear: new Date().getFullYear(),
                      type: 'clinical',
                      status: 'active',
                      image: ''
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
                  {editingDepartment ? 'Update Department' : 'Create Department'}
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

export default DepartmentsPage;
