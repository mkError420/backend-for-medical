"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  GraduationCap, 
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
  FileText,
  CheckCircle,
  X,
  Save,
  Clock,
  Info,
  TrendingUp,
  Download,
  MoreHorizontal,
  Menu,
  Home,
  FileText as FileTextIcon,
  Building,
  Users,
  BookOpen,
  UserCheck,
  Calendar as CalendarIcon,
  Star,
  Award,
  AlertCircle,
  UserPlus,
  School,
  Briefcase
} from 'lucide-react'

interface Admission {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  address: string;
  city: string;
  country: string;
  program: 'mbbs' | 'bds' | 'nursing' | 'pharmacy' | 'medical_technology';
  academicYear: string;
  applicationDate: string;
  status: 'pending' | 'under_review' | 'approved' | 'rejected' | 'enrolled' | 'withdrawn';
  previousEducation: {
    institution: string;
    degree: string;
    year: string;
    gpa: number;
  };
  entranceExam: {
    score: number;
    rank: number;
    totalMarks: number;
  };
  documents: {
    transcript: boolean;
    certificate: boolean;
    idProof: boolean;
    photo: boolean;
    recommendation: boolean;
  };
  interviewScore?: number;
  remarks?: string;
  createdAt: string;
  updatedAt: string;
}

const AdmissionsPage: React.FC = () => {
  const [admissions, setAdmissions] = useState<Admission[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProgram, setSelectedProgram] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingAdmission, setEditingAdmission] = useState<Admission | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: 'male' as Admission['gender'],
    address: '',
    city: '',
    country: '',
    program: 'mbbs' as Admission['program'],
    academicYear: '',
    applicationDate: '',
    status: 'pending' as Admission['status'],
    previousEducation: {
      institution: '',
      degree: '',
      year: '',
      gpa: 0
    },
    entranceExam: {
      score: 0,
      rank: 0,
      totalMarks: 100
    },
    documents: {
      transcript: false,
      certificate: false,
      idProof: false,
      photo: false,
      recommendation: false
    },
    interviewScore: 0,
    remarks: ''
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
    fetchAdmissions();
  }, [router]);

  const fetchAdmissions = async () => {
    try {
      setLoading(true);
      // Mock data for now - replace with actual API call
      const mockAdmissions: Admission[] = [
        {
          _id: '1',
          firstName: 'John',
          lastName: 'Smith',
          email: 'john.smith@email.com',
          phone: '+1 234-567-8901',
          dateOfBirth: '1998-05-15',
          gender: 'male',
          address: '123 Main Street, Apt 4B',
          city: 'New York',
          country: 'USA',
          program: 'mbbs',
          academicYear: '2024-2025',
          applicationDate: '2024-03-10',
          status: 'under_review',
          previousEducation: {
            institution: 'Lincoln High School',
            degree: 'High School Diploma',
            year: '2020',
            gpa: 3.8
          },
          entranceExam: {
            score: 85,
            rank: 45,
            totalMarks: 100
          },
          documents: {
            transcript: true,
            certificate: true,
            idProof: true,
            photo: true,
            recommendation: false
          },
          interviewScore: 78,
          remarks: 'Strong academic background, good interview performance',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '2',
          firstName: 'Sarah',
          lastName: 'Johnson',
          email: 'sarah.johnson@email.com',
          phone: '+1 234-567-8902',
          dateOfBirth: '1999-08-22',
          gender: 'female',
          address: '456 Oak Avenue',
          city: 'Los Angeles',
          country: 'USA',
          program: 'bds',
          academicYear: '2024-2025',
          applicationDate: '2024-03-12',
          status: 'approved',
          previousEducation: {
            institution: 'Westlake Academy',
            degree: 'High School Diploma',
            year: '2021',
            gpa: 3.9
          },
          entranceExam: {
            score: 92,
            rank: 12,
            totalMarks: 100
          },
          documents: {
            transcript: true,
            certificate: true,
            idProof: true,
            photo: true,
            recommendation: true
          },
          interviewScore: 85,
          remarks: 'Excellent candidate, strong academic record',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '3',
          firstName: 'Michael',
          lastName: 'Brown',
          email: 'michael.brown@email.com',
          phone: '+1 234-567-8903',
          dateOfBirth: '1997-12-03',
          gender: 'male',
          address: '789 Pine Road',
          city: 'Chicago',
          country: 'USA',
          program: 'nursing',
          academicYear: '2024-2025',
          applicationDate: '2024-03-08',
          status: 'pending',
          previousEducation: {
            institution: 'Central High School',
            degree: 'High School Diploma',
            year: '2019',
            gpa: 3.6
          },
          entranceExam: {
            score: 78,
            rank: 89,
            totalMarks: 100
          },
          documents: {
            transcript: true,
            certificate: true,
            idProof: false,
            photo: true,
            recommendation: false
          },
          remarks: 'Good academic background, documents pending',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '4',
          firstName: 'Emily',
          lastName: 'Davis',
          email: 'emily.davis@email.com',
          phone: '+1 234-567-8904',
          dateOfBirth: '2000-02-14',
          gender: 'female',
          address: '321 Elm Street',
          city: 'Houston',
          country: 'USA',
          program: 'pharmacy',
          academicYear: '2024-2025',
          applicationDate: '2024-03-15',
          status: 'rejected',
          previousEducation: {
            institution: 'Riverside High School',
            degree: 'High School Diploma',
            year: '2022',
            gpa: 3.2
          },
          entranceExam: {
            score: 65,
            rank: 156,
            totalMarks: 100
          },
          documents: {
            transcript: true,
            certificate: false,
            idProof: true,
            photo: true,
            recommendation: false
          },
          remarks: 'Below minimum requirements for entrance exam',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '5',
          firstName: 'David',
          lastName: 'Wilson',
          email: 'david.wilson@email.com',
          phone: '+1 234-567-8905',
          dateOfBirth: '1998-09-30',
          gender: 'male',
          address: '654 Maple Drive',
          city: 'Phoenix',
          country: 'USA',
          program: 'medical_technology',
          academicYear: '2024-2025',
          applicationDate: '2024-03-11',
          status: 'enrolled',
          previousEducation: {
            institution: 'Desert High School',
            degree: 'High School Diploma',
            year: '2020',
            gpa: 3.7
          },
          entranceExam: {
            score: 88,
            rank: 28,
            totalMarks: 100
          },
          documents: {
            transcript: true,
            certificate: true,
            idProof: true,
            photo: true,
            recommendation: true
          },
          interviewScore: 82,
          remarks: 'Strong candidate, successfully enrolled',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        }
      ];
      
      setAdmissions(mockAdmissions);
    } catch (error) {
      console.error('Failed to fetch admissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingAdmission) {
        // Update existing admission
        setAdmissions(admissions.map(admission => 
          admission._id === editingAdmission._id 
            ? { ...admission, ...formData, updatedAt: new Date().toISOString() }
            : admission
        ));
      } else {
        // Create new admission
        const newAdmission: Admission = {
          _id: Date.now().toString(),
          ...formData,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        setAdmissions([newAdmission, ...admissions]);
      }

      setShowCreateModal(false);
      setEditingAdmission(null);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        gender: 'male',
        address: '',
        city: '',
        country: '',
        program: 'mbbs',
        academicYear: '',
        applicationDate: '',
        status: 'pending',
        previousEducation: {
          institution: '',
          degree: '',
          year: '',
          gpa: 0
        },
        entranceExam: {
          score: 0,
          rank: 0,
          totalMarks: 100
        },
        documents: {
          transcript: false,
          certificate: false,
          idProof: false,
          photo: false,
          recommendation: false
        },
        interviewScore: 0,
        remarks: ''
      });
    } catch (error) {
      console.error('Failed to save admission:', error);
    }
  };

  const handleEdit = (admission: Admission) => {
    setEditingAdmission(admission);
    setFormData({
      firstName: admission.firstName,
      lastName: admission.lastName,
      email: admission.email,
      phone: admission.phone,
      dateOfBirth: admission.dateOfBirth,
      gender: admission.gender,
      address: admission.address,
      city: admission.city,
      country: admission.country,
      program: admission.program,
      academicYear: admission.academicYear,
      applicationDate: admission.applicationDate,
      status: admission.status,
      previousEducation: admission.previousEducation,
      entranceExam: admission.entranceExam,
      documents: admission.documents,
      interviewScore: admission.interviewScore || 0,
      remarks: admission.remarks || ''
    });
    setShowCreateModal(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this admission application?')) {
      setAdmissions(admissions.filter(admission => admission._id !== id));
    }
  };

  const handleStatusToggle = (id: string, currentStatus: Admission['status']) => {
    const statusOptions: Admission['status'][] = ['pending', 'under_review', 'approved', 'rejected', 'enrolled', 'withdrawn'];
    const currentIndex = statusOptions.indexOf(currentStatus);
    const newStatus = statusOptions[(currentIndex + 1) % statusOptions.length];
    
    setAdmissions(admissions.map(admission => 
      admission._id === id 
        ? { ...admission, status: newStatus, updatedAt: new Date().toISOString() }
        : admission
    ));
  };

  const filteredAdmissions = admissions.filter(admission => {
    const matchesSearch = admission.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admission.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admission.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProgram = selectedProgram === 'all' || admission.program === selectedProgram;
    const matchesStatus = selectedStatus === 'all' || admission.status === selectedStatus;
    return matchesSearch && matchesProgram && matchesStatus;
  });

  const getProgramIcon = (program: Admission['program']) => {
    switch (program) {
      case 'mbbs': return GraduationCap;
      case 'bds': return UserPlus;
      case 'nursing': return Users;
      case 'pharmacy': return Briefcase;
      default: return School;
    }
  };

  const getProgramColor = (program: Admission['program']) => {
    switch (program) {
      case 'mbbs': return 'from-blue-500 to-blue-600';
      case 'bds': return 'from-green-500 to-green-600';
      case 'nursing': return 'from-purple-500 to-purple-600';
      case 'pharmacy': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getProgramBgColor = (program: Admission['program']) => {
    switch (program) {
      case 'mbbs': return 'from-blue-50 to-blue-100';
      case 'bds': return 'from-green-50 to-green-100';
      case 'nursing': return 'from-purple-50 to-purple-100';
      case 'pharmacy': return 'from-orange-50 to-orange-100';
      default: return 'from-gray-50 to-gray-100';
    }
  };

  const getStatusColor = (status: Admission['status']) => {
    switch (status) {
      case 'pending': return 'from-yellow-500 to-yellow-600';
      case 'under_review': return 'from-blue-500 to-blue-600';
      case 'approved': return 'from-green-500 to-green-600';
      case 'rejected': return 'from-red-500 to-red-600';
      case 'enrolled': return 'from-purple-500 to-purple-600';
      case 'withdrawn': return 'from-gray-500 to-gray-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusBgColor = (status: Admission['status']) => {
    switch (status) {
      case 'pending': return 'from-yellow-50 to-yellow-100';
      case 'under_review': return 'from-blue-50 to-blue-100';
      case 'approved': return 'from-green-50 to-green-100';
      case 'rejected': return 'from-red-50 to-red-100';
      case 'enrolled': return 'from-purple-50 to-purple-100';
      case 'withdrawn': return 'from-gray-50 to-gray-100';
      default: return 'from-gray-50 to-gray-100';
    }
  };

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/admin-dashboard', active: false },
    { icon: FileTextIcon, label: 'Notices', path: '/admin-dashboard/notices' },
    { icon: Building, label: 'Departments', path: '/admin-dashboard/departments' },
    { icon: Users, label: 'Faculty', path: '/admin-dashboard/faculty' },
    { icon: BookOpen, label: 'Journals', path: '/admin-dashboard/journals' },
    { icon: GraduationCap, label: 'Admissions', path: '/admin-dashboard/admissions', active: true },
    { icon: UserCheck, label: 'Doctors', path: '/admin-dashboard/doctors' },
    { icon: CalendarIcon, label: 'Appointments', path: '/admin-dashboard/appointments' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading admissions...</p>
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
              <GraduationCap className="w-6 h-6 text-white" />
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
                  <h1 className="text-2xl font-bold text-gray-900">Admissions Management</h1>
                  <p className="text-sm text-gray-500">Manage student applications and enrollment process</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-2">
                  <Search className="h-4 w-4 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search admissions..."
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
                  <span className="font-medium">New Application</span>
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
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Programs</option>
                  <option value="mbbs">MBBS</option>
                  <option value="bds">BDS</option>
                  <option value="nursing">Nursing</option>
                  <option value="pharmacy">Pharmacy</option>
                  <option value="medical_technology">Medical Technology</option>
                </select>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="under_review">Under Review</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                  <option value="enrolled">Enrolled</option>
                  <option value="withdrawn">Withdrawn</option>
                </select>
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              {filteredAdmissions.length} application{filteredAdmissions.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        {/* Admissions List */}
        <main className="p-6">
          {filteredAdmissions.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
              <GraduationCap className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No applications found</h3>
              <p className="text-gray-500 mb-6">Create your first admission application to get started</p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all"
              >
                <Plus className="h-4 w-4" />
                <span>New Application</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAdmissions.map((admission) => {
                const ProgramIcon = getProgramIcon(admission.program);
                return (
                  <div key={admission._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 overflow-hidden">
                    {/* Header */}
                    <div className={`h-2 bg-gradient-to-r ${getProgramColor(admission.program)}`} />
                    
                    <div className="p-6">
                      {/* Program and Status */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r ${getProgramBgColor(admission.program)}`}>
                          <ProgramIcon className={`h-3 w-3 bg-gradient-to-r ${getProgramColor(admission.program)} text-transparent bg-clip-text`} />
                          <span className="text-xs font-medium uppercase">{admission.program}</span>
                        </div>
                        <button
                          onClick={() => handleStatusToggle(admission._id, admission.status)}
                          className={`px-2 py-1 text-xs font-medium rounded-lg transition-colors ${
                            admission.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                              : admission.status === 'under_review'
                              ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                              : admission.status === 'approved'
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : admission.status === 'rejected'
                              ? 'bg-red-100 text-red-700 hover:bg-red-200'
                              : admission.status === 'enrolled'
                              ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {admission.status.replace('_', ' ')}
                        </button>
                      </div>

                      {/* Name */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {admission.firstName} {admission.lastName}
                      </h3>

                      {/* Contact Info */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Mail className="h-3 w-3" />
                          <span className="truncate">{admission.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Phone className="h-3 w-3" />
                          <span>{admission.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="h-3 w-3" />
                          <span>{admission.city}, {admission.country}</span>
                        </div>
                      </div>

                      {/* Academic Info */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <School className="h-3 w-3 text-gray-500" />
                          <span className="text-xs font-medium text-gray-700">Academic Year: {admission.academicYear}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                          <div>GPA: {admission.previousEducation.gpa.toFixed(1)}</div>
                          <div>Entrance Score: {admission.entranceExam.score}%</div>
                          <div>Rank: #{admission.entranceExam.rank}</div>
                          <div>Interview: {admission.interviewScore || 'N/A'}</div>
                        </div>
                      </div>

                      {/* Previous Education */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-gray-700 mb-1">Previous Education:</p>
                        <p className="text-sm text-gray-600">{admission.previousEducation.degree}</p>
                        <p className="text-xs text-gray-500">{admission.previousEducation.institution}</p>
                      </div>

                      {/* Documents Status */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-gray-700 mb-2">Documents:</p>
                        <div className="flex flex-wrap gap-1">
                          {Object.entries(admission.documents).map(([key, value]) => (
                            <span key={key} className={`px-2 py-1 text-xs rounded-full ${
                              value ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }`}>
                              {key.replace(/([A-Z])/g, ' $1').trim()} {value ? '✓' : '✗'}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Application Date */}
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-4">
                        <Calendar className="h-3 w-3" />
                        <span>Applied: {admission.applicationDate}</span>
                      </div>

                      {/* Remarks */}
                      {admission.remarks && (
                        <div className="mb-4">
                          <p className="text-xs font-medium text-gray-700 mb-1">Remarks:</p>
                          <p className="text-xs text-gray-600">{admission.remarks}</p>
                        </div>
                      )}

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
                            onClick={() => handleEdit(admission)}
                            className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(admission._id)}
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
                  {editingAdmission ? 'Edit Application' : 'Create New Application'}
                </h2>
                <button
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingAdmission(null);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      dateOfBirth: '',
                      gender: 'male',
                      address: '',
                      city: '',
                      country: '',
                      program: 'mbbs',
                      academicYear: '',
                      applicationDate: '',
                      status: 'pending',
                      previousEducation: {
                        institution: '',
                        degree: '',
                        year: '',
                        gpa: 0
                      },
                      entranceExam: {
                        score: 0,
                        rank: 0,
                        totalMarks: 100
                      },
                      documents: {
                        transcript: false,
                        certificate: false,
                        idProof: false,
                        photo: false,
                        recommendation: false
                      },
                      interviewScore: 0,
                      remarks: ''
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
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Smith"
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
                    placeholder="john.smith@email.com"
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
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value as Admission['gender'] })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Program
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value as Admission['program'] })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="mbbs">MBBS</option>
                    <option value="bds">BDS</option>
                    <option value="nursing">Nursing</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="medical_technology">Medical Technology</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Academic Year
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.academicYear}
                    onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="2024-2025"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Application Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.applicationDate}
                    onChange={(e) => setFormData({ ...formData, applicationDate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as Admission['status'] })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="pending">Pending</option>
                    <option value="under_review">Under Review</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                    <option value="enrolled">Enrolled</option>
                    <option value="withdrawn">Withdrawn</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123 Main Street, Apt 4B"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="New York"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="USA"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Institution
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.previousEducation.institution}
                    onChange={(e) => setFormData({ ...formData, previousEducation: { ...formData.previousEducation, institution: e.target.value } })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Lincoln High School"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Degree
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.previousEducation.degree}
                    onChange={(e) => setFormData({ ...formData, previousEducation: { ...formData.previousEducation, degree: e.target.value } })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="High School Diploma"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Graduation Year
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.previousEducation.year}
                    onChange={(e) => setFormData({ ...formData, previousEducation: { ...formData.previousEducation, year: e.target.value } })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="2020"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GPA
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={formData.previousEducation.gpa}
                    onChange={(e) => setFormData({ ...formData, previousEducation: { ...formData.previousEducation, gpa: parseFloat(e.target.value) } })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    max="4"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Entrance Exam Score
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.entranceExam.score}
                    onChange={(e) => setFormData({ ...formData, entranceExam: { ...formData.entranceExam, score: parseInt(e.target.value) } })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    max={formData.entranceExam.totalMarks}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Entrance Exam Rank
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.entranceExam.rank}
                    onChange={(e) => setFormData({ ...formData, entranceExam: { ...formData.entranceExam, rank: parseInt(e.target.value) } })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interview Score
                  </label>
                  <input
                    type="number"
                    value={formData.interviewScore}
                    onChange={(e) => setFormData({ ...formData, interviewScore: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    max="100"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Remarks
                  </label>
                  <textarea
                    rows={3}
                    value={formData.remarks}
                    onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Additional notes about the application"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Documents Status
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {Object.entries(formData.documents).map(([key, value]) => (
                      <label key={key} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setFormData({ 
                            ...formData, 
                            documents: { ...formData.documents, [key]: e.target.checked }
                          })}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingAdmission(null);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      dateOfBirth: '',
                      gender: 'male',
                      address: '',
                      city: '',
                      country: '',
                      program: 'mbbs',
                      academicYear: '',
                      applicationDate: '',
                      status: 'pending',
                      previousEducation: {
                        institution: '',
                        degree: '',
                        year: '',
                        gpa: 0
                      },
                      entranceExam: {
                        score: 0,
                        rank: 0,
                        totalMarks: 100
                      },
                      documents: {
                        transcript: false,
                        certificate: false,
                        idProof: false,
                        photo: false,
                        recommendation: false
                      },
                      interviewScore: 0,
                      remarks: ''
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
                  {editingAdmission ? 'Update Application' : 'Create Application'}
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

export default AdmissionsPage;
