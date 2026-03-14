"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  BookOpen, 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar,
  User,
  FileText,
  Download,
  ExternalLink,
  Tag,
  ChevronDown,
  X,
  Save,
  Clock,
  CheckCircle,
  Info,
  TrendingUp,
  MoreHorizontal,
  Menu,
  Home,
  FileText as FileTextIcon,
  Building,
  Users,
  GraduationCap,
  UserCheck,
  Calendar as CalendarIcon,
  Star,
  Globe,
  Award,
  BarChart
} from 'lucide-react'

interface Journal {
  _id: string;
  title: string;
  description: string;
  authors: string[];
  category: 'research' | 'case_study' | 'review' | 'editorial' | 'conference';
  publicationDate: string;
  journalName: string;
  volume: string;
  issue: string;
  pages: string;
  doi: string;
  issn: string;
  impactFactor: number;
  citations: number;
  downloads: number;
  status: 'published' | 'under_review' | 'draft' | 'rejected';
  abstract: string;
  keywords: string[];
  pdfUrl?: string;
  externalUrl?: string;
  createdAt: string;
  updatedAt: string;
}

const JournalsPage: React.FC = () => {
  const [journals, setJournals] = useState<Journal[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingJournal, setEditingJournal] = useState<Journal | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    authors: '',
    category: 'research' as Journal['category'],
    publicationDate: '',
    journalName: '',
    volume: '',
    issue: '',
    pages: '',
    doi: '',
    issn: '',
    impactFactor: 0,
    citations: 0,
    downloads: 0,
    status: 'draft' as Journal['status'],
    abstract: '',
    keywords: '',
    pdfUrl: '',
    externalUrl: ''
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
    fetchJournals();
  }, [router]);

  const fetchJournals = async () => {
    try {
      setLoading(true);
      // Mock data for now - replace with actual API call
      const mockJournals: Journal[] = [
        {
          _id: '1',
          title: 'Advanced Treatment Protocols for Cardiovascular Diseases',
          description: 'A comprehensive study on modern treatment approaches for cardiovascular conditions, including innovative surgical techniques and pharmacological interventions.',
          authors: ['Dr. Sarah Williams', 'Dr. Robert Davis', 'Dr. Emily Johnson'],
          category: 'research',
          publicationDate: '2024-03-15',
          journalName: 'Journal of Cardiology',
          volume: '45',
          issue: '2',
          pages: '123-145',
          doi: '10.1234/jcard.2024.45.2.123',
          issn: '1234-5678',
          impactFactor: 4.5,
          citations: 23,
          downloads: 156,
          status: 'published',
          abstract: 'This study presents a comprehensive analysis of current treatment protocols for cardiovascular diseases, focusing on recent advances in interventional cardiology and pharmacotherapy. We conducted a multi-center study involving 500 patients over a 2-year period...',
          keywords: ['cardiovascular', 'treatment protocols', 'interventional cardiology', 'pharmacotherapy'],
          pdfUrl: 'https://example.com/journal1.pdf',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '2',
          title: 'Novel Biomarkers for Early Detection of Diabetes',
          description: 'Investigation of new biomarkers that can predict the onset of diabetes mellitus type 2 in high-risk populations.',
          authors: ['Dr. Michael Chen', 'Dr. Lisa Anderson'],
          category: 'research',
          publicationDate: '2024-02-28',
          journalName: 'Diabetes Research Journal',
          volume: '32',
          issue: '1',
          pages: '67-89',
          doi: '10.5678/diab.2024.32.1.67',
          issn: '2345-6789',
          impactFactor: 3.8,
          citations: 15,
          downloads: 98,
          status: 'published',
          abstract: 'Early detection of type 2 diabetes mellitus is crucial for preventing complications. This study explores novel biomarkers including genetic markers, inflammatory markers, and metabolic indicators that can predict diabetes onset...',
          keywords: ['diabetes', 'biomarkers', 'early detection', 'genetic markers'],
          pdfUrl: 'https://example.com/journal2.pdf',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '3',
          title: 'Case Study: Rare Neurological Disorder in Pediatric Patients',
          description: 'A detailed analysis of a rare neurological condition affecting children, including diagnostic challenges and treatment outcomes.',
          authors: ['Dr. Emily Johnson', 'Dr. Michael Brown'],
          category: 'case_study',
          publicationDate: '2024-03-10',
          journalName: 'Pediatrics Neurology',
          volume: '18',
          issue: '3',
          pages: '234-256',
          doi: '10.8901/pneuro.2024.18.3.234',
          issn: '3456-7890',
          impactFactor: 2.9,
          citations: 8,
          downloads: 67,
          status: 'published',
          abstract: 'We present a case series of 5 pediatric patients with a rare neurological disorder characterized by progressive motor dysfunction and cognitive decline. The study highlights diagnostic challenges and treatment approaches...',
          keywords: ['neurological disorder', 'pediatrics', 'case study', 'motor dysfunction'],
          pdfUrl: 'https://example.com/journal3.pdf',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '4',
          title: 'Review: Current Trends in Medical Education Technology',
          description: 'A comprehensive review of technological advancements in medical education, including virtual reality, simulation, and online learning platforms.',
          authors: ['Dr. Sarah Williams', 'Dr. Robert Davis'],
          category: 'review',
          publicationDate: '2024-01-15',
          journalName: 'Medical Education Review',
          volume: '12',
          issue: '4',
          pages: '345-378',
          doi: '10.1234/medu.2024.12.4.345',
          issn: '4567-8901',
          impactFactor: 3.2,
          citations: 34,
          downloads: 234,
          status: 'published',
          abstract: 'Medical education has undergone significant transformation with the integration of technology. This review examines current trends including virtual reality simulations, online learning platforms, artificial intelligence in education...',
          keywords: ['medical education', 'technology', 'virtual reality', 'simulation'],
          pdfUrl: 'https://example.com/journal4.pdf',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        },
        {
          _id: '5',
          title: 'Machine Learning Applications in Medical Diagnosis',
          description: 'Exploration of machine learning algorithms for improving diagnostic accuracy in medical imaging and clinical decision support.',
          authors: ['Dr. Michael Chen', 'Dr. Lisa Anderson', 'Dr. Robert Davis'],
          category: 'research',
          publicationDate: '2024-03-20',
          journalName: 'AI in Medicine',
          volume: '8',
          issue: '1',
          pages: '12-34',
          doi: '10.2345/aimed.2024.8.1.12',
          issn: '5678-9012',
          impactFactor: 5.2,
          citations: 0,
          downloads: 45,
          status: 'under_review',
          abstract: 'Machine learning has shown promising results in medical diagnosis. This study evaluates various ML algorithms for diagnostic accuracy in medical imaging and clinical decision support systems...',
          keywords: ['machine learning', 'medical diagnosis', 'artificial intelligence', 'medical imaging'],
          pdfUrl: 'https://example.com/journal5.pdf',
          createdAt: '2024-03-14T10:00:00Z',
          updatedAt: '2024-03-14T10:00:00Z'
        }
      ];
      
      setJournals(mockJournals);
    } catch (error) {
      console.error('Failed to fetch journals:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const authorsArray = formData.authors.split(',').map(a => a.trim()).filter(a => a);
      const keywordsArray = formData.keywords.split(',').map(k => k.trim()).filter(k => k);
      
      if (editingJournal) {
        // Update existing journal
        setJournals(journals.map(journal => 
          journal._id === editingJournal._id 
            ? { 
                ...journal, 
                ...formData, 
                authors: authorsArray,
                keywords: keywordsArray,
                updatedAt: new Date().toISOString() 
              }
            : journal
        ));
      } else {
        // Create new journal
        const newJournal: Journal = {
          _id: Date.now().toString(),
          ...formData,
          authors: authorsArray,
          keywords: keywordsArray,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        setJournals([newJournal, ...journals]);
      }

      setShowCreateModal(false);
      setEditingJournal(null);
      setFormData({
        title: '',
        description: '',
        authors: '',
        category: 'research',
        publicationDate: '',
        journalName: '',
        volume: '',
        issue: '',
        pages: '',
        doi: '',
        issn: '',
        impactFactor: 0,
        citations: 0,
        downloads: 0,
        status: 'draft',
        abstract: '',
        keywords: '',
        pdfUrl: '',
        externalUrl: ''
      });
    } catch (error) {
      console.error('Failed to save journal:', error);
    }
  };

  const handleEdit = (journal: Journal) => {
    setEditingJournal(journal);
    setFormData({
      title: journal.title,
      description: journal.description,
      authors: journal.authors.join(', '),
      category: journal.category,
      publicationDate: journal.publicationDate,
      journalName: journal.journalName,
      volume: journal.volume,
      issue: journal.issue,
      pages: journal.pages,
      doi: journal.doi,
      issn: journal.issn,
      impactFactor: journal.impactFactor,
      citations: journal.citations,
      downloads: journal.downloads,
      status: journal.status,
      abstract: journal.abstract,
      keywords: journal.keywords.join(', '),
      pdfUrl: journal.pdfUrl || '',
      externalUrl: journal.externalUrl || ''
    });
    setShowCreateModal(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this journal?')) {
      setJournals(journals.filter(journal => journal._id !== id));
    }
  };

  const handleStatusToggle = (id: string, currentStatus: Journal['status']) => {
    const statusOptions: Journal['status'][] = ['draft', 'under_review', 'published', 'rejected'];
    const currentIndex = statusOptions.indexOf(currentStatus);
    const newStatus = statusOptions[(currentIndex + 1) % statusOptions.length];
    
    setJournals(journals.map(journal => 
      journal._id === id 
        ? { ...journal, status: newStatus, updatedAt: new Date().toISOString() }
        : journal
    ));
  };

  const filteredJournals = journals.filter(journal => {
    const matchesSearch = journal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         journal.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         journal.journalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         journal.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || journal.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || journal.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getCategoryIcon = (category: Journal['category']) => {
    switch (category) {
      case 'research': return BarChart;
      case 'case_study': return FileText;
      case 'review': return Star;
      case 'editorial': return Award;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: Journal['category']) => {
    switch (category) {
      case 'research': return 'from-blue-500 to-blue-600';
      case 'case_study': return 'from-green-500 to-green-600';
      case 'review': return 'from-purple-500 to-purple-600';
      case 'editorial': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryBgColor = (category: Journal['category']) => {
    switch (category) {
      case 'research': return 'from-blue-50 to-blue-100';
      case 'case_study': return 'from-green-50 to-green-100';
      case 'review': return 'from-purple-50 to-purple-100';
      case 'editorial': return 'from-orange-50 to-orange-100';
      default: return 'from-gray-50 to-gray-100';
    }
  };

  const getStatusColor = (status: Journal['status']) => {
    switch (status) {
      case 'published': return 'from-green-500 to-green-600';
      case 'under_review': return 'from-yellow-500 to-yellow-600';
      case 'draft': return 'from-gray-500 to-gray-600';
      case 'rejected': return 'from-red-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusBgColor = (status: Journal['status']) => {
    switch (status) {
      case 'published': return 'from-green-50 to-green-100';
      case 'under_review': return 'from-yellow-50 to-yellow-100';
      case 'draft': return 'from-gray-50 to-gray-100';
      case 'rejected': return 'from-red-50 to-red-100';
      default: return 'from-gray-50 to-gray-100';
    }
  };

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/admin-dashboard', active: false },
    { icon: FileTextIcon, label: 'Notices', path: '/admin-dashboard/notices' },
    { icon: Building, label: 'Departments', path: '/admin-dashboard/departments' },
    { icon: Users, label: 'Faculty', path: '/admin-dashboard/faculty' },
    { icon: BookOpen, label: 'Journals', path: '/admin-dashboard/journals', active: true },
    { icon: GraduationCap, label: 'Admissions', path: '/admin-dashboard/admissions' },
    { icon: UserCheck, label: 'Doctors', path: '/admin-dashboard/doctors' },
    { icon: CalendarIcon, label: 'Appointments', path: '/admin-dashboard/appointments' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading journals...</p>
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
              <BookOpen className="w-6 h-6 text-white" />
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
                  <h1 className="text-2xl font-bold text-gray-900">Journal Management</h1>
                  <p className="text-sm text-gray-500">Manage research publications and academic journals</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-2">
                  <Search className="h-4 w-4 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search journals..."
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
                  <span className="font-medium">New Journal</span>
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
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  <option value="research">Research</option>
                  <option value="case_study">Case Study</option>
                  <option value="review">Review</option>
                  <option value="editorial">Editorial</option>
                  <option value="conference">Conference</option>
                </select>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="published">Published</option>
                  <option value="under_review">Under Review</option>
                  <option value="draft">Draft</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              {filteredJournals.length} journal{filteredJournals.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>

        {/* Journals List */}
        <main className="p-6">
          {filteredJournals.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No journals found</h3>
              <p className="text-gray-500 mb-6">Create your first journal publication to get started</p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all"
              >
                <Plus className="h-4 w-4" />
                <span>New Journal</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredJournals.map((journal) => {
                const CategoryIcon = getCategoryIcon(journal.category);
                return (
                  <div key={journal._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 overflow-hidden">
                    {/* Header */}
                    <div className={`h-2 bg-gradient-to-r ${getCategoryColor(journal.category)}`} />
                    
                    <div className="p-6">
                      {/* Category and Status */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryBgColor(journal.category)}`}>
                          <CategoryIcon className={`h-3 w-3 bg-gradient-to-r ${getCategoryColor(journal.category)} text-transparent bg-clip-text`} />
                          <span className="text-xs font-medium capitalize">{journal.category.replace('_', ' ')}</span>
                        </div>
                        <button
                          onClick={() => handleStatusToggle(journal._id, journal.status)}
                          className={`px-2 py-1 text-xs font-medium rounded-lg transition-colors ${
                            journal.status === 'published'
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : journal.status === 'under_review'
                              ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                              : journal.status === 'draft'
                              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              : 'bg-red-100 text-red-700 hover:bg-red-200'
                          }`}
                        >
                          {journal.status.replace('_', ' ')}
                        </button>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {journal.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {journal.description}
                      </p>

                      {/* Authors */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-gray-700 mb-2">Authors:</p>
                        <div className="flex flex-wrap gap-1">
                          {journal.authors.slice(0, 2).map((author, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full">
                              {author}
                            </span>
                          ))}
                          {journal.authors.length > 2 && (
                            <span className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full">
                              +{journal.authors.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Journal Info */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Globe className="h-3 w-3 text-gray-500" />
                          <span className="text-xs font-medium text-gray-700">{journal.journalName}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                          <div>Vol: {journal.volume}, Issue: {journal.issue}</div>
                          <div>Pages: {journal.pages}</div>
                          <div>DOI: {journal.doi}</div>
                          <div>ISSN: {journal.issn}</div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="text-center p-2 bg-blue-50 rounded-lg">
                          <BarChart className="h-3 w-3 text-blue-600 mx-auto mb-1" />
                          <p className="text-xs font-bold text-blue-900">{journal.impactFactor}</p>
                          <p className="text-xs text-blue-600">Impact</p>
                        </div>
                        <div className="text-center p-2 bg-green-50 rounded-lg">
                          <TrendingUp className="h-3 w-3 text-green-600 mx-auto mb-1" />
                          <p className="text-xs font-bold text-green-900">{journal.citations}</p>
                          <p className="text-xs text-green-600">Citations</p>
                        </div>
                        <div className="text-center p-2 bg-purple-50 rounded-lg">
                          <Download className="h-3 w-3 text-purple-600 mx-auto mb-1" />
                          <p className="text-xs font-bold text-purple-900">{journal.downloads}</p>
                          <p className="text-xs text-purple-600">Downloads</p>
                        </div>
                      </div>

                      {/* Publication Date */}
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-4">
                        <Calendar className="h-3 w-3" />
                        <span>Published: {journal.publicationDate}</span>
                      </div>

                      {/* Keywords */}
                      <div className="mb-4">
                        <p className="text-xs font-medium text-gray-700 mb-2">Keywords:</p>
                        <div className="flex flex-wrap gap-1">
                          {journal.keywords.slice(0, 3).map((keyword, index) => (
                            <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                              {keyword}
                            </span>
                          ))}
                          {journal.keywords.length > 3 && (
                            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                              +{journal.keywords.length - 3} more
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
                          {journal.pdfUrl && (
                            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                              <Download className="h-4 w-4 text-gray-500" />
                            </button>
                          )}
                          {journal.externalUrl && (
                            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                              <ExternalLink className="h-4 w-4 text-gray-500" />
                            </button>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleEdit(journal)}
                            className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(journal._id)}
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
                  {editingJournal ? 'Edit Journal' : 'Create New Journal'}
                </h2>
                <button
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingJournal(null);
                    setFormData({
                      title: '',
                      description: '',
                      authors: '',
                      category: 'research',
                      publicationDate: '',
                      journalName: '',
                      volume: '',
                      issue: '',
                      pages: '',
                      doi: '',
                      issn: '',
                      impactFactor: 0,
                      citations: 0,
                      downloads: 0,
                      status: 'draft',
                      abstract: '',
                      keywords: '',
                      pdfUrl: '',
                      externalUrl: ''
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
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter journal title"
                  />
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
                    placeholder="Enter journal description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as Journal['category'] })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="research">Research</option>
                    <option value="case_study">Case Study</option>
                    <option value="review">Review</option>
                    <option value="editorial">Editorial</option>
                    <option value="conference">Conference</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as Journal['status'] })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="draft">Draft</option>
                    <option value="under_review">Under Review</option>
                    <option value="published">Published</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Authors (comma-separated)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.authors}
                    onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Dr. Sarah Williams, Dr. Robert Davis"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Publication Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.publicationDate}
                    onChange={(e) => setFormData({ ...formData, publicationDate: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Journal Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.journalName}
                    onChange={(e) => setFormData({ ...formData, journalName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Journal of Cardiology"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Volume
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="45"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issue
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pages
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pages}
                    onChange={(e) => setFormData({ ...formData, pages: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123-145"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    DOI
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.doi}
                    onChange={(e) => setFormData({ ...formData, doi: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="10.1234/jcard.2024.45.2.123"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ISSN
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.issn}
                    onChange={(e) => setFormData({ ...formData, issn: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1234-5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Impact Factor
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={formData.impactFactor}
                    onChange={(e) => setFormData({ ...formData, impactFactor: parseFloat(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Citations
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.citations}
                    onChange={(e) => setFormData({ ...formData, citations: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Downloads
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.downloads}
                    onChange={(e) => setFormData({ ...formData, downloads: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Abstract
                  </label>
                  <textarea
                    rows={4}
                    value={formData.abstract}
                    onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter journal abstract"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Keywords (comma-separated)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.keywords}
                    onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="cardiovascular, treatment protocols, interventional cardiology"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PDF URL
                  </label>
                  <input
                    type="url"
                    value={formData.pdfUrl}
                    onChange={(e) => setFormData({ ...formData, pdfUrl: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://example.com/journal.pdf"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    External URL
                  </label>
                  <input
                    type="url"
                    value={formData.externalUrl}
                    onChange={(e) => setFormData({ ...formData, externalUrl: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://example.com/journal"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingJournal(null);
                    setFormData({
                      title: '',
                      description: '',
                      authors: '',
                      category: 'research',
                      publicationDate: '',
                      journalName: '',
                      volume: '',
                      issue: '',
                      pages: '',
                      doi: '',
                      issn: '',
                      impactFactor: 0,
                      citations: 0,
                      downloads: 0,
                      status: 'draft',
                      abstract: '',
                      keywords: '',
                      pdfUrl: '',
                      externalUrl: ''
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
                  {editingJournal ? 'Update Journal' : 'Create Journal'}
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

export default JournalsPage;
