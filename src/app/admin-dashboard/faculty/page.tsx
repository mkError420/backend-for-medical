"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  GraduationCap,
  Briefcase,
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
  Building,
  UserCheck,
  Calendar as CalendarIcon,
  Star
} from 'lucide-react'

interface Faculty {
  _id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string[];
  specialization: string[];
  experience: number;
  email: string;
  phone: string;
  address: string;
  joiningDate: string;
  type: 'permanent' | 'contract' | 'visiting' | 'part_time';
  status: 'active' | 'inactive' | 'on_leave';
  image?: string;
  publications: number;
  researchAreas: string[];
  achievements: string[];
  createdAt: string;
  updatedAt: string;
}

const FacultyPage: React.FC = () => {
  const [faculty, setFaculty] = useState<Faculty[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingFaculty, setEditingFaculty] = useState<Faculty | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    department: '',
    qualification: '',
    specialization: '',
    experience: 0,
    email: '',
    phone: '',
    address: '',
    joiningDate: '',
    type: 'permanent' as Faculty['type'],
    status: 'active' as Faculty['status'],
    image: '',
    publications: 0,
    researchAreas: '',
    achievements: ''
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
    fetchFaculty();
  }, [router]);

  const fetchFaculty = async () => {
    try {
      setLoading(true);
      // Mock data for now - replace with actual API call
      const mockFaculty: Faculty[] = [
        {
          _id: '1',
          name: 'Dr. Sarah Williams',
          designation: 'Professor of Medicine',
          department: 'General Medicine',
          qualification: ['MBBS', 'MD', 'FACP'],
          specialization: ['Internal Medicine', 'Diabetes', 'Hypertension'],
          experience: 20,
          email: 'sarah.williams@medicalcollege.com',
          phone: '+1 234-567-8901',
          address: '123 Medical Complex, City',
          joiningDate: '2004-03-15',
          type: 'permanent',
          status: 'active',
          publications: 45,
          researchAreas: ['Diabetes Research', 'Cardiovascular Health', 'Internal Medicine'],
          achievements: ['Best Teacher Award 2020', 'Research Excellence Award 2018', '15 Years Service Award'],
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '2',
          name: 'Dr. Robert Davis',
          designation: 'Associate Professor',
          department: 'Cardiology',
          qualification: ['MBBS', 'MD', 'FACC'],
          specialization: ['Interventional Cardiology', 'Heart Failure', 'Cardiac Imaging'],
          experience: 15,
          email: 'robert.davis@medicalcollege.com',
          phone: '+1 234-567-8902',
          address: '456 Heart Center, City',
          joiningDate: '2009-06-20',
          type: 'permanent',
          status: 'active',
          publications: 32,
          researchAreas: ['Cardiac Interventions', 'Heart Failure Management', 'Preventive Cardiology'],
          achievements: ['Young Investigator Award 2015', 'Best Cardiologist Award 2019'],
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '3',
          name: 'Dr. Lisa Anderson',
          designation: 'Assistant Professor',
          department: 'Pediatrics',
          qualification: ['MBBS', 'MD', 'FAAP'],
          specialization: ['Neonatology', 'Pediatric Cardiology', 'Child Development'],
          experience: 8,
          email: 'lisa.anderson@medicalcollege.com',
          phone: '+1 234-567-8903',
          address: '789 Children Hospital, City',
          joiningDate: '2016-01-10',
          type: 'permanent',
          status: 'active',
          publications: 18,
          researchAreas: ['Neonatal Care', 'Pediatric Cardiology', 'Child Nutrition'],
          achievements: ['Best Young Researcher 2018', 'Excellence in Teaching 2021'],
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '4',
          name: 'Dr. Michael Chen',
          designation: 'Senior Lecturer',
          department: 'Anatomy',
          qualification: ['MBBS', 'MS', 'PhD'],
          specialization: ['Human Anatomy', 'Neuroanatomy', 'Surgical Anatomy'],
          experience: 12,
          email: 'michael.chen@medicalcollege.com',
          phone: '+1 234-567-8904',
          address: '321 Academic Block, City',
          joiningDate: '2012-08-15',
          type: 'permanent',
          status: 'on_leave',
          publications: 25,
          researchAreas: ['Anatomical Research', 'Medical Education', 'Neuroscience'],
          achievements: ['Excellence in Teaching 2017', 'Research Grant Award 2020'],
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '5',
          name: 'Dr. Emily Johnson',
          designation: 'Visiting Professor',
          department: 'Neurology',
          qualification: ['MBBS', 'MD', 'FAAN'],
          specialization: ['Stroke Medicine', 'Neurocritical Care', 'Movement Disorders'],
          experience: 25,
          email: 'emily.johnson@medicalcollege.com',
          phone: '+1 234-567-8905',
          address: '654 Neuro Center, City',
          joiningDate: '2018-09-01',
          type: 'visiting',
          status: 'active',
          publications: 67,
          researchAreas: ['Stroke Research', 'Neurocritical Care', 'Movement Disorders'],
          achievements: ['Lifetime Achievement Award 2022', 'International Research Award 2021'],
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        }
      ];
      
      setFaculty(mockFaculty);
    } catch (error) {
      console.error('Failed to fetch faculty:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const qualificationArray = formData.qualification.split(',').map(q => q.trim()).filter(q => q);
      const specializationArray = formData.specialization.split(',').map(s => s.trim()).filter(s => s);
      const researchAreasArray = formData.researchAreas.split(',').map(r => r.trim()).filter(r => r);
      const achievementsArray = formData.achievements.split(',').map(a => a.trim()).filter(a => a);
      
      if (editingFaculty) {
        // Update existing faculty
        setFaculty(faculty.map(f => 
          f._id === editingFaculty._id 
            ? { 
                ...f, 
                ...formData, 
                qualification: qualificationArray,
                specialization: specializationArray,
                researchAreas: researchAreasArray,
                achievements: achievementsArray,
                updatedAt: new Date().toISOString() 
              }
            : f
        ));
      } else {
        // Create new faculty
        const newFaculty: Faculty = {
          _id: Date.now().toString(),
          ...formData,
          qualification: qualificationArray,
          specialization: specializationArray,
          researchAreas: researchAreasArray,
          achievements: achievementsArray,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        setFaculty([newFaculty, ...faculty]);
      }

      setShowCreateModal(false);
      setEditingFaculty(null);
      setFormData({
        name: '',
        designation: '',
        department: '',
        qualification: '',
        specialization: '',
        experience: 0,
        email: '',
        phone: '',
        address: '',
        joiningDate: '',
        type: 'permanent',
        status: 'active',
        image: '',
        publications: 0,
        researchAreas: '',
        achievements: ''
      });
    } catch (error) {
      console.error('Failed to save faculty:', error);
    }
  };

  const handleEdit = (facultyMember: Faculty) => {
    setEditingFaculty(facultyMember);
    setFormData({
      name: facultyMember.name,
      designation: facultyMember.designation,
      department: facultyMember.department,
      qualification: facultyMember.qualification.join(', '),
      specialization: facultyMember.specialization.join(', '),
      experience: facultyMember.experience,
      email: facultyMember.email,
      phone: facultyMember.phone,
      address: facultyMember.address,
      joiningDate: facultyMember.joiningDate,
      type: facultyMember.type,
      status: facultyMember.status,
      image: facultyMember.image || '',
      publications: facultyMember.publications,
      researchAreas: facultyMember.researchAreas.join(', '),
      achievements: facultyMember.achievements.join(', ')
    });
    setShowCreateModal(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this faculty member?')) {
      setFaculty(faculty.filter(f => f._id !== id));
    }
  };

  const handleStatusToggle = (id: string, currentStatus: Faculty['status']) => {
    const statusOptions: Faculty['status'][] = ['active', 'inactive', 'on_leave'];
    const currentIndex = statusOptions.indexOf(currentStatus);
    const newStatus = statusOptions[(currentIndex + 1) % statusOptions.length];
    
    setFaculty(faculty.map(f => 
      f._id === id 
        ? { ...f, status: newStatus, updatedAt: new Date().toISOString() }
        : f
    ));
  };

  const filteredFaculty = faculty.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         f.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         f.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         f.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || f.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || f.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getTypeIcon = (type: Faculty['type']) => {
    switch (type) {
      case 'permanent': return Award;
      case 'contract': return Briefcase;
      case 'visiting': return Star;
      default: return Users;
    }
  };

  const getTypeColor = (type: Faculty['type']) => {
    switch (type) {
      case 'permanent': return 'from-blue-500 to-blue-600';
      case 'contract': return 'from-orange-500 to-orange-600';
      case 'visiting': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeBgColor = (type: Faculty['type']) => {
    switch (type) {
      case 'permanent': return 'from-blue-50 to-blue-100';
      case 'contract': return 'from-orange-50 to-orange-100';
      case 'visiting': return 'from-purple-50 to-purple-100';
      default: return 'from-gray-50 to-gray-100';
    }
  };

  const getStatusColor = (status: Faculty['status']) => {
    switch (status) {
      case 'active': return 'from-green-500 to-green-600';
      case 'inactive': return 'from-red-500 to-red-600';
      case 'on_leave': return 'from-yellow-500 to-yellow-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusBgColor = (status: Faculty['status']) => {
    switch (status) {
      case 'active': return 'from-green-50 to-green-100';
      case 'inactive': return 'from-red-50 to-red-100';
      case 'on_leave': return 'from-yellow-50 to-yellow-100';
      default: return 'from-gray-50 to-gray-100';
    }
  };

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/admin-dashboard', active: false },
    { icon: FileText, label: 'Notices', path: '/admin-dashboard/notices' },
    { icon: Building, label: 'Departments', path: '/admin-dashboard/departments' },
    { icon: Users, label: 'Faculty', path: '/admin-dashboard/faculty', active: true },
    { icon: BookOpen, label: 'Journals', path: '/admin-dashboard/journals' },
    { icon: GraduationCap, label: 'Admissions', path: '/admin-dashboard/admissions' },
    { icon: UserCheck, label: 'Doctors', path: '/admin-dashboard/doctors' },
    { icon: CalendarIcon, label: 'Appointments', path: '/admin-dashboard/appointments' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading faculty...</p>
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
              <Users className="w-6 h-6 text-white" />
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
                  <h1 className="text-2xl font-bold text-gray-900">Faculty Management</h1>
                  <p className="text-sm text-gray-500">Manage college faculty and staff members</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-2">
                  <Search className="h-4 w-4 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search faculty..."
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
                  <span className="font-medium">Add Faculty</span>
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
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Types</option>
                  <option value="permanent">Permanent</option>
                  <option value="contract">Contract</option>
                  <option value="visiting">Visiting</option>
                  <option value="part_time">Part Time</option>
                </select>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="on_leave">On Leave</option>
                </select>
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              {filteredFaculty.length} faculty member{filteredFaculty.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        {/* Faculty List */}
        <main className="p-6">
          {filteredFaculty.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
              <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No faculty found</h3>
              <p className="text-gray-500 mb-6">Add your first faculty member to get started</p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all"
              >
                <Plus className="h-4 w-4" />
                <span>Add Faculty</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredFaculty.map((facultyMember) => {
                const TypeIcon = getTypeIcon(facultyMember.type);
                return (
                  <div key={facultyMember._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 overflow-hidden">
                    {/* Header */}
                    <div className={`h-2 bg-gradient-to-r ${getTypeColor(facultyMember.type)}`} />
                    
                    <div className="p-6">
                      {/* Type and Status */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r ${getTypeBgColor(facultyMember.type)}`}>
                          <TypeIcon className={`h-3 w-3 bg-gradient-to-r ${getTypeColor(facultyMember.type)} text-transparent bg-clip-text`} />
                          <span className="text-xs font-medium capitalize">{facultyMember.type.replace('_', ' ')}</span>
                        </div>
                        <button
                          onClick={() => handleStatusToggle(facultyMember._id, facultyMember.status)}
                          className={`px-2 py-1 text-xs font-medium rounded-lg transition-colors ${
                            facultyMember.status === 'active'
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : facultyMember.status === 'inactive'
                              ? 'bg-red-100 text-red-700 hover:bg-red-200'
                              : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                          }`}
                        >
                          {facultyMember.status.replace('_', ' ')}
                        </button>
                      </div>

                      {/* Name and Designation */}
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {facultyMember.name}
                        </h3>
                        <p className="text-sm text-gray-600">{facultyMember.designation}</p>
                      </div>

                      {/* Department */}
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                        <Building className="h-3 w-3" />
                        <span>{facultyMember.department}</span>
                      </div>

                      {/* Qualifications */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-gray-700 mb-2">Qualifications:</p>
                        <div className="flex flex-wrap gap-1">
                          {facultyMember.qualification.slice(0, 3).map((qual, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full">
                              {qual}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Specializations */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-gray-700 mb-2">Specializations:</p>
                        <div className="flex flex-wrap gap-1">
                          {facultyMember.specialization.slice(0, 2).map((spec, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-purple-50 text-purple-700 rounded-full">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="text-center p-2 bg-gray-50 rounded-lg">
                          <Briefcase className="h-3 w-3 text-gray-600 mx-auto mb-1" />
                          <p className="text-xs font-bold text-gray-900">{facultyMember.experience}</p>
                          <p className="text-xs text-gray-600">Years</p>
                        </div>
                        <div className="text-center p-2 bg-blue-50 rounded-lg">
                          <BookOpen className="h-3 w-3 text-blue-600 mx-auto mb-1" />
                          <p className="text-xs font-bold text-blue-900">{facultyMember.publications}</p>
                          <p className="text-xs text-blue-600">Papers</p>
                        </div>
                        <div className="text-center p-2 bg-green-50 rounded-lg">
                          <Calendar className="h-3 w-3 text-green-600 mx-auto mb-1" />
                          <p className="text-xs font-bold text-green-900">{new Date(facultyMember.joiningDate).getFullYear()}</p>
                          <p className="text-xs text-green-600">Joined</p>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Mail className="h-3 w-3" />
                          <span className="truncate">{facultyMember.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Phone className="h-3 w-3" />
                          <span>{facultyMember.phone}</span>
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
                            onClick={() => handleEdit(facultyMember)}
                            className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(facultyMember._id)}
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
                  {editingFaculty ? 'Edit Faculty Member' : 'Add New Faculty Member'}
                </h2>
                <button
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingFaculty(null);
                    setFormData({
                      name: '',
                      designation: '',
                      department: '',
                      qualification: '',
                      specialization: '',
                      experience: 0,
                      email: '',
                      phone: '',
                      address: '',
                      joiningDate: '',
                      type: 'permanent',
                      status: 'active',
                      image: '',
                      publications: 0,
                      researchAreas: '',
                      achievements: ''
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
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Dr. John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Designation
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Professor of Medicine"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="General Medicine"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="faculty@medicalcollege.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 234-567-8900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123 Medical Complex, City"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Employment Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as Faculty['type'] })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="permanent">Permanent</option>
                    <option value="contract">Contract</option>
                    <option value="visiting">Visiting</option>
                    <option value="part_time">Part Time</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as Faculty['status'] })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="on_leave">On Leave</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience (Years)
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Joining Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.joiningDate}
                    onChange={(e) => setFormData({ ...formData, joiningDate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Publications Count
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.publications}
                    onChange={(e) => setFormData({ ...formData, publications: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qualifications (comma-separated)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="MBBS, MD, FACP"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specializations (comma-separated)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialization}
                    onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Internal Medicine, Diabetes, Hypertension"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Research Areas (comma-separated)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.researchAreas}
                    onChange={(e) => setFormData({ ...formData, researchAreas: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Diabetes Research, Cardiovascular Health"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Achievements (comma-separated)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.achievements}
                    onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Best Teacher Award 2020, Research Excellence Award 2018"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingFaculty(null);
                    setFormData({
                      name: '',
                      designation: '',
                      department: '',
                      qualification: '',
                      specialization: '',
                      experience: 0,
                      email: '',
                      phone: '',
                      address: '',
                      joiningDate: '',
                      type: 'permanent',
                      status: 'active',
                      image: '',
                      publications: 0,
                      researchAreas: '',
                      achievements: ''
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
                  {editingFaculty ? 'Update Faculty' : 'Add Faculty'}
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

export default FacultyPage;
