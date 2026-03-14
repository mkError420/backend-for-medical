"use client"

import React, { useState, useEffect } from "react"
import { Search, FileText, Filter, Calendar, User, ChevronDown, ChevronUp, Download, Eye, Clock, Award, BarChart3, X, Bell, Megaphone, AlertCircle, CheckCircle, Info, Star, TrendingUp, Users, Bookmark, Share2, ExternalLink, Tag, Archive, Pin, Flag, ThumbsUp, MessageSquare, Send, File, Image as ImageIcon, Link2, FileText as DocumentIcon, BookOpen, Building, Stethoscope, Heart, Brain, Eye as EyeIcon, TestTube, Pill, Activity, Phone, Mail, MapPin, Clock as ClockIcon, UserCheck, Shield, Syringe, Microscope } from "lucide-react"

interface DepartmentNotice {
  id: string
  title: string
  content: string
  department: string
  departmentCode: string
  category: string
  priority: "urgent" | "high" | "normal" | "low"
  type: "clinical" | "academic" | "administrative" | "research" | "training" | "schedule" | "announcement"
  author: string
  authorRole: string
  publishDate: string
  expiryDate?: string
  status: "active" | "expired" | "draft"
  attachments: {
    name: string
    type: string
    size: string
    url: string
  }[]
  tags: string[]
  views: number
  likes: number
  comments: number
  bookmarks: number
  featured: boolean
  pinned: boolean
  readBy: number
  targetAudience: string[]
  contactInfo: {
    phone?: string
    email?: string
    location?: string
  }
}

interface ServiceDepartment {
  id: string
  name: string
  code: string
  description: string
  head: string
  headTitle: string
  contact: {
    phone: string
    email: string
    location: string
    extension: string
  }
  services: string[]
  timings: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
  emergency: boolean
  icon: string
  color: string
  noticeCount: number
  activeNotices: number
  latestNotice?: string
}

const serviceDepartments: ServiceDepartment[] = [
  {
    id: "1",
    name: "Emergency Medicine",
    code: "EM",
    description: "24/7 emergency medical care and trauma services",
    head: "Dr. A. K. M. Fazlul Haque",
    headTitle: "Head of Emergency Medicine",
    contact: {
      phone: "+880-2-12345678",
      email: "emergency@rcmc.edu.bd",
      location: "Ground Floor, Main Hospital Building",
      extension: "101"
    },
    services: ["Emergency Care", "Trauma Management", "Critical Care", "Ambulance Services", "Emergency Surgery"],
    timings: {
      monday: "24 Hours",
      tuesday: "24 Hours",
      wednesday: "24 Hours",
      thursday: "24 Hours",
      friday: "24 Hours",
      saturday: "24 Hours",
      sunday: "24 Hours"
    },
    emergency: true,
    icon: "shield",
    color: "red",
    noticeCount: 15,
    activeNotices: 8,
    latestNotice: "New Emergency Protocols Effective Immediately"
  },
  {
    id: "2",
    name: "Cardiology",
    code: "CARD",
    description: "Comprehensive cardiac care and cardiovascular services",
    head: "Prof. Dr. M. A. Karim",
    headTitle: "Professor & Head of Cardiology",
    contact: {
      phone: "+880-2-12345679",
      email: "cardiology@rcmc.edu.bd",
      location: "3rd Floor, Block A",
      extension: "201"
    },
    services: ["Cardiac Consultation", "ECG", "Echocardiography", "Stress Test", "Cardiac Catheterization"],
    timings: {
      monday: "8:00 AM - 8:00 PM",
      tuesday: "8:00 AM - 8:00 PM",
      wednesday: "8:00 AM - 8:00 PM",
      thursday: "8:00 AM - 8:00 PM",
      friday: "8:00 AM - 8:00 PM",
      saturday: "8:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    emergency: false,
    icon: "heart",
    color: "red",
    noticeCount: 12,
    activeNotices: 6,
    latestNotice: "Updated Cardiology OPD Schedule"
  },
  {
    id: "3",
    name: "Neurology",
    code: "NEURO",
    description: "Diagnosis and treatment of neurological disorders",
    head: "Dr. S. R. Ahmed",
    headTitle: "Associate Professor & Head",
    contact: {
      phone: "+880-2-12345680",
      email: "neurology@rcmc.edu.bd",
      location: "4th Floor, Block B",
      extension: "301"
    },
    services: ["Neurological Consultation", "EEG", "CT Scan", "MRI", "Neuro Rehabilitation"],
    timings: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 5:00 PM",
      saturday: "9:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    emergency: false,
    icon: "brain",
    color: "purple",
    noticeCount: 8,
    activeNotices: 4,
    latestNotice: "New Neurology Equipment Installation"
  },
  {
    id: "4",
    name: "Ophthalmology",
    code: "OPHT",
    description: "Comprehensive eye care and vision services",
    head: "Dr. N. K. Begum",
    headTitle: "Professor & Head of Ophthalmology",
    contact: {
      phone: "+880-2-12345681",
      email: "eye@rcmc.edu.bd",
      location: "2nd Floor, Block C",
      extension: "401"
    },
    services: ["Eye Examination", "Cataract Surgery", "Glaucoma Treatment", "LASIK", "Pediatric Ophthalmology"],
    timings: {
      monday: "8:30 AM - 4:30 PM",
      tuesday: "8:30 AM - 4:30 PM",
      wednesday: "8:30 AM - 4:30 PM",
      thursday: "8:30 AM - 4:30 PM",
      friday: "8:30 AM - 4:30 PM",
      saturday: "8:30 AM - 1:30 PM",
      sunday: "Closed"
    },
    emergency: false,
    icon: "eye",
    color: "blue",
    noticeCount: 10,
    activeNotices: 7,
    latestNotice: "World Sight Day Celebration"
  },
  {
    id: "5",
    name: "Pathology",
    code: "PATH",
    description: "Laboratory diagnostics and pathology services",
    head: "Dr. R. Islam",
    headTitle: "Professor & Head of Pathology",
    contact: {
      phone: "+880-2-12345682",
      email: "pathology@rcmc.edu.bd",
      location: "1st Floor, Laboratory Building",
      extension: "501"
    },
    services: ["Blood Tests", "Biopsy", "Histopathology", "Microbiology", "Biochemistry"],
    timings: {
      monday: "7:00 AM - 10:00 PM",
      tuesday: "7:00 AM - 10:00 PM",
      wednesday: "7:00 AM - 10:00 PM",
      thursday: "7:00 AM - 10:00 PM",
      friday: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 8:00 PM",
      sunday: "7:00 AM - 2:00 PM"
    },
    emergency: false,
    icon: "testtube",
    color: "green",
    noticeCount: 14,
    activeNotices: 9,
    latestNotice: "New Test Packages Available"
  },
  {
    id: "6",
    name: "Pharmacy",
    code: "PHARM",
    description: "Medication dispensing and pharmaceutical services",
    head: "Dr. M. A. Salam",
    headTitle: "Chief Pharmacist",
    contact: {
      phone: "+880-2-12345683",
      email: "pharmacy@rcmc.edu.bd",
      location: "Ground Floor, Main Building",
      extension: "601"
    },
    services: ["Medication Dispensing", "Drug Information", "Clinical Pharmacy", "Compounding", "Vaccination"],
    timings: {
      monday: "8:00 AM - 9:00 PM",
      tuesday: "8:00 AM - 9:00 PM",
      wednesday: "8:00 AM - 9:00 PM",
      thursday: "8:00 AM - 9:00 PM",
      friday: "8:00 AM - 9:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "8:00 AM - 2:00 PM"
    },
    emergency: false,
    icon: "pill",
    color: "orange",
    noticeCount: 6,
    activeNotices: 3,
    latestNotice: "New Medication Stock Update"
  }
]

const mockDepartmentNotices: DepartmentNotice[] = [
  {
    id: "1",
    title: "Emergency Department Protocol Update - New Triage System",
    content: "Effective from 1st April 2024, the Emergency Department will implement a new triage system to improve patient care efficiency. All medical staff are requested to attend the mandatory training session on 25th March 2024 at 10:00 AM in Conference Room A.",
    department: "Emergency Medicine",
    departmentCode: "EM",
    category: "Clinical Protocol",
    priority: "urgent",
    type: "clinical",
    author: "Dr. A. K. M. Fazlul Haque",
    authorRole: "Head of Emergency Medicine",
    publishDate: "2024-03-15",
    expiryDate: "2024-04-30",
    status: "active",
    attachments: [
      {
        name: "New_Triage_Protocol.pdf",
        type: "PDF",
        size: "1.5 MB",
        url: "#"
      }
    ],
    tags: ["emergency", "triage", "protocol", "training", "urgent"],
    views: 567,
    likes: 23,
    comments: 8,
    bookmarks: 45,
    featured: true,
    pinned: true,
    readBy: 123,
    targetAudience: ["Emergency Staff", "Medical Officers", "Nurses"],
    contactInfo: {
      phone: "+880-2-12345678",
      email: "emergency@rcmc.edu.bd",
      location: "Ground Floor, Main Hospital Building"
    }
  },
  {
    id: "2",
    title: "Cardiology OPD Schedule Change - Ramadan Timing",
    content: "During Ramadan, the Cardiology OPD timing will be adjusted. New timing: 2:00 PM - 6:00 PM Monday to Thursday, 9:00 AM - 1:00 PM on Friday. Closed on Saturday and Sunday. This schedule will be effective from the first day of Ramadan.",
    department: "Cardiology",
    departmentCode: "CARD",
    category: "Schedule Update",
    priority: "high",
    type: "schedule",
    author: "Prof. Dr. M. A. Karim",
    authorRole: "Professor & Head of Cardiology",
    publishDate: "2024-03-10",
    expiryDate: "2024-04-30",
    status: "active",
    attachments: [],
    tags: ["cardiology", "opd", "schedule", "ramadan", "timing"],
    views: 234,
    likes: 12,
    comments: 5,
    bookmarks: 28,
    featured: false,
    pinned: false,
    readBy: 89,
    targetAudience: ["Cardiology Patients", "Staff", "Reception"],
    contactInfo: {
      phone: "+880-2-12345679",
      email: "cardiology@rcmc.edu.bd",
      location: "3rd Floor, Block A"
    }
  },
  {
    id: "3",
    title: "New MRI Machine Installation - Neurology Department",
    content: "The Neurology Department is pleased to announce the installation of a new 3T MRI machine. The machine will be operational from 1st May 2024. Training sessions for technicians and radiologists will be conducted from 20th to 25th April 2024.",
    department: "Neurology",
    departmentCode: "NEURO",
    category: "Equipment Update",
    priority: "normal",
    type: "administrative",
    author: "Dr. S. R. Ahmed",
    authorRole: "Associate Professor & Head",
    publishDate: "2024-03-12",
    expiryDate: "2024-05-01",
    status: "active",
    attachments: [
      {
        name: "MRI_Specifications.pdf",
        type: "PDF",
        size: "3.2 MB",
        url: "#"
      },
      {
        name: "Training_Schedule.docx",
        type: "Document",
        size: "456 KB",
        url: "#"
      }
    ],
    tags: ["neurology", "mri", "equipment", "training", "new-machine"],
    views: 189,
    likes: 15,
    comments: 7,
    bookmarks: 34,
    featured: false,
    pinned: false,
    readBy: 67,
    targetAudience: ["Neurology Staff", "Radiologists", "Technicians"],
    contactInfo: {
      phone: "+880-2-12345680",
      email: "neurology@rcmc.edu.bd",
      location: "4th Floor, Block B"
    }
  }
]

const categories = ["All Categories", "Clinical Protocol", "Schedule Update", "Equipment Update", "Administrative", "Research", "Training"]
const types = ["All Types", "Clinical", "Academic", "Administrative", "Research", "Training", "Schedule", "Announcement"]
const priorities = ["All Priorities", "Urgent", "High", "Normal", "Low"]
const sortOptions = [
  { value: "latest", label: "Latest First" },
  { value: "priority", label: "Priority" },
  { value: "views", label: "Most Viewed" },
  { value: "likes", label: "Most Liked" },
  { value: "expiry", label: "Expiry Date" }
]

export default function NoticeBoardServiceDepartmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedPriority, setSelectedPriority] = useState("All Priorities")
  const [sortBy, setSortBy] = useState("latest")
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [noticesPerPage] = useState(10)
  const [selectedNotice, setSelectedNotice] = useState<DepartmentNotice | null>(null)
  const [showNoticeDetails, setShowNoticeDetails] = useState(false)
  const [selectedDept, setSelectedDept] = useState<ServiceDepartment | null>(null)
  const [showDeptDetails, setShowDeptDetails] = useState(false)
  const [filteredNotices, setFilteredNotices] = useState<DepartmentNotice[]>(mockDepartmentNotices)

  useEffect(() => {
    let filtered = mockDepartmentNotices.filter(notice => {
      const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesDepartment = selectedDepartment === "all" || notice.departmentCode === selectedDepartment
      const matchesCategory = selectedCategory === "All Categories" || notice.category === selectedCategory
      const matchesType = selectedType === "All Types" || notice.type === selectedType
      const matchesPriority = selectedPriority === "All Priorities" || notice.priority === selectedPriority

      return matchesSearch && matchesDepartment && matchesCategory && matchesType && matchesPriority
    })

    // Sort notices
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "latest":
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        case "priority":
          const priorityOrder = { urgent: 0, high: 1, normal: 2, low: 3 }
          return priorityOrder[a.priority] - priorityOrder[b.priority]
        case "views":
          return b.views - a.views
        case "likes":
          return b.likes - a.likes
        case "expiry":
          if (!a.expiryDate) return 1
          if (!b.expiryDate) return -1
          return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime()
        default:
          return 0
      }
    })

    setFilteredNotices(filtered)
    setCurrentPage(1)
  }, [searchTerm, selectedDepartment, selectedCategory, selectedType, selectedPriority, sortBy])

  const indexOfLastNotice = currentPage * noticesPerPage
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage
  const currentNotices = filteredNotices.slice(indexOfFirstNotice, indexOfLastNotice)
  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "normal":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "low":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "urgent":
        return <AlertCircle className="h-3 w-3" />
      case "high":
        return <Flag className="h-3 w-3" />
      case "normal":
        return <Info className="h-3 w-3" />
      case "low":
        return <CheckCircle className="h-3 w-3" />
      default:
        return <Info className="h-3 w-3" />
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "clinical":
        return <Stethoscope className="h-4 w-4" />
      case "academic":
        return <BookOpen className="h-4 w-4" />
      case "administrative":
        return <Award className="h-4 w-4" />
      case "research":
        return <Microscope className="h-4 w-4" />
      case "training":
        return <UserCheck className="h-4 w-4" />
      case "schedule":
        return <Calendar className="h-4 w-4" />
      default:
        return <Megaphone className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "clinical":
        return "bg-red-100 text-red-700"
      case "academic":
        return "bg-purple-100 text-purple-700"
      case "administrative":
        return "bg-indigo-100 text-indigo-700"
      case "research":
        return "bg-green-100 text-green-700"
      case "training":
        return "bg-blue-100 text-blue-700"
      case "schedule":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getDepartmentIcon = (iconName: string) => {
    switch (iconName) {
      case "shield":
        return <Shield className="h-6 w-6" />
      case "heart":
        return <Heart className="h-6 w-6" />
      case "brain":
        return <Brain className="h-6 w-6" />
      case "eye":
        return <EyeIcon className="h-6 w-6" />
      case "testtube":
        return <TestTube className="h-6 w-6" />
      case "pill":
        return <Pill className="h-6 w-6" />
      default:
        return <Building className="h-6 w-6" />
    }
  }

  const getDepartmentColor = (color: string) => {
    switch (color) {
      case "red":
        return "bg-red-100 text-red-700 border-red-200"
      case "blue":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "green":
        return "bg-green-100 text-green-700 border-green-200"
      case "purple":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "orange":
        return "bg-orange-100 text-orange-700 border-orange-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const handleNoticeClick = (notice: DepartmentNotice) => {
    setSelectedNotice(notice)
    setShowNoticeDetails(true)
  }

  const handleDepartmentClick = (department: ServiceDepartment) => {
    setSelectedDept(department)
    setShowDeptDetails(true)
  }

  const isExpired = (expiryDate?: string) => {
    if (!expiryDate) return false
    return new Date(expiryDate) < new Date()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#FBFCFC] text-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <Building className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Service Departments</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Notices and announcements from clinical and service departments
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                <Building className="h-4 w-4" />
                <span className="text-xl">{serviceDepartments.length}</span>
              </div>
              <p className="text-xs text-gray-600">Departments</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
                <Megaphone className="h-4 w-4" />
                <span className="text-xl">{serviceDepartments.reduce((sum, d) => sum + d.noticeCount, 0)}</span>
              </div>
              <p className="text-xs text-gray-600">Total Notices</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                <CheckCircle className="h-4 w-4" />
                <span className="text-xl">{serviceDepartments.reduce((sum, d) => sum + d.activeNotices, 0)}</span>
              </div>
              <p className="text-xs text-gray-600">Active Notices</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
                <AlertCircle className="h-4 w-4" />
                <span className="text-xl">{serviceDepartments.filter(d => d.emergency).length}</span>
              </div>
              <p className="text-xs text-gray-600">Emergency Services</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold">
                <Eye className="h-4 w-4" />
                <span className="text-xl">{mockDepartmentNotices.reduce((sum, n) => sum + n.views, 0).toLocaleString()}</span>
              </div>
              <p className="text-xs text-gray-600">Total Views</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-indigo-600 font-semibold">
                <Bookmark className="h-4 w-4" />
                <span className="text-xl">{mockDepartmentNotices.reduce((sum, n) => sum + n.bookmarks, 0).toLocaleString()}</span>
              </div>
              <p className="text-xs text-gray-600">Bookmarks</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Departments Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDepartments.map((department) => (
              <div
                key={department.id}
                className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => handleDepartmentClick(department)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${getDepartmentColor(department.color)}`}>
                      {getDepartmentIcon(department.icon)}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {department.emergency && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                          <AlertCircle className="h-3 w-3" />
                          24/7
                        </span>
                      )}
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {department.code}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {department.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{department.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      <span className="truncate">{department.head}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{department.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate">{department.contact.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-blue-600">{department.noticeCount}</div>
                      <div className="text-xs text-gray-600">Notices</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-green-600">{department.activeNotices}</div>
                      <div className="text-xs text-gray-600">Active</div>
                    </div>
                  </div>

                  {department.latestNotice && (
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-xs text-blue-600 font-medium mb-1">Latest Notice</div>
                      <div className="text-sm text-gray-700 line-clamp-1">{department.latestNotice}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search notices by title, content, department, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
              {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Departments</option>
                    {serviceDepartments.map(dept => (
                      <option key={dept.id} value={dept.code}>{dept.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                  <select
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {priorities.map(priority => (
                      <option key={priority} value={priority}>{priority}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedDepartment("all")
                      setSelectedCategory("All Categories")
                      setSelectedType("All Types")
                      setSelectedPriority("All Priorities")
                      setSortBy("latest")
                    }}
                    className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Department Notices ({filteredNotices.length} notices found)
                </h2>
                <div className="text-sm text-gray-600">
                  Showing {indexOfFirstNotice + 1}-{Math.min(indexOfLastNotice, filteredNotices.length)} of {filteredNotices.length}
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {currentNotices.length > 0 ? (
                currentNotices.map((notice) => (
                  <div
                    key={notice.id}
                    className={`group relative overflow-hidden transition-all duration-300 ${
                      notice.pinned 
                        ? "bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500" 
                        : "bg-white hover:bg-gray-50 border-l-4 border-transparent hover:border-blue-300"
                    }`}
                    onClick={() => handleNoticeClick(notice)}
                  >
                    {/* Pinned/Featured Banner */}
                    {(notice.pinned || notice.featured) && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                    )}

                    <div className="p-8">
                      <div className="flex gap-6">
                        {/* Enhanced Notice Icon */}
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-200 ${getTypeColor(notice.type)}`}>
                              {React.cloneElement(getTypeIcon(notice.type), { className: "h-8 w-8" })}
                            </div>
                            <div className="absolute -top-1 -right-1 flex flex-col gap-1">
                              {notice.pinned && (
                                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                                  <Pin className="h-3 w-3 text-white" />
                                </div>
                              )}
                              {notice.featured && (
                                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
                                  <Star className="h-3 w-3 text-white" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Enhanced Notice Content */}
                        <div className="flex-1 min-w-0">
                          {/* Professional Header */}
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start gap-3 mb-3">
                                <div className="flex-1">
                                  <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                                    {notice.title}
                                  </h3>
                                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                    <div className="flex items-center gap-1">
                                      <Building className="h-4 w-4" />
                                      <span className="font-medium">{notice.department}</span>
                                    </div>
                                    <span className="text-gray-400">•</span>
                                    <div className="flex items-center gap-1">
                                      <User className="h-4 w-4" />
                                      <span className="font-medium">{notice.author}</span>
                                    </div>
                                    <span className="text-gray-400">•</span>
                                    <span className="italic">{notice.authorRole}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">{notice.category}</span>
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getDepartmentColor(serviceDepartments.find(d => d.code === notice.departmentCode)?.color || 'gray')}`}>
                                      {notice.departmentCode}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2 flex-shrink-0">
                              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold border shadow-sm ${getPriorityColor(notice.priority)}`}>
                                {getPriorityIcon(notice.priority)}
                                {notice.priority.charAt(0).toUpperCase() + notice.priority.slice(1)}
                              </span>
                              {isExpired(notice.expiryDate) && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                                  <AlertCircle className="h-3 w-3" />
                                  Expired
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Enhanced Content Preview */}
                          <div className="mb-4">
                            <p className="text-gray-700 leading-relaxed line-clamp-3 text-sm">{notice.content}</p>
                          </div>

                          {/* Professional Metadata Grid */}
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center gap-2 text-gray-600 mb-1">
                                <Calendar className="h-4 w-4" />
                                <span className="text-xs font-medium">Published</span>
                              </div>
                              <div className="text-sm font-semibold text-gray-900">{formatDate(notice.publishDate)}</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center gap-2 text-gray-600 mb-1">
                                <Clock className="h-4 w-4" />
                                <span className="text-xs font-medium">Expires</span>
                              </div>
                              <div className="text-sm font-semibold text-gray-900">
                                {notice.expiryDate ? formatDate(notice.expiryDate) : "No expiry"}
                              </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center gap-2 text-gray-600 mb-1">
                                <Users className="h-4 w-4" />
                                <span className="text-xs font-medium">Read By</span>
                              </div>
                              <div className="text-sm font-semibold text-gray-900">{notice.readBy} people</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center gap-2 text-gray-600 mb-1">
                                <Eye className="h-4 w-4" />
                                <span className="text-xs font-medium">Views</span>
                              </div>
                              <div className="text-sm font-semibold text-gray-900">{notice.views.toLocaleString()}</div>
                            </div>
                          </div>

                          {/* Contact Information */}
                          <div className="mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                              <Phone className="h-4 w-4" />
                              <span className="font-medium">Contact Information</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              {notice.contactInfo.phone && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Phone className="h-4 w-4" />
                                  <span>{notice.contactInfo.phone}</span>
                                </div>
                              )}
                              {notice.contactInfo.email && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Mail className="h-4 w-4" />
                                  <span className="truncate">{notice.contactInfo.email}</span>
                                </div>
                              )}
                              {notice.contactInfo.location && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <MapPin className="h-4 w-4" />
                                  <span className="truncate">{notice.contactInfo.location}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Enhanced Actions Bar */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-6">
                              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                                <ThumbsUp className="h-4 w-4" />
                                <span className="font-medium">{notice.likes}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                                <MessageSquare className="h-4 w-4" />
                                <span className="font-medium">{notice.comments}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                                <Bookmark className="h-4 w-4" />
                                <span className="font-medium">{notice.bookmarks}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  // Handle share
                                }}
                                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                                title="Share notice"
                              >
                                <Share2 className="h-4 w-4" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  // Handle bookmark
                                }}
                                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                                title="Bookmark notice"
                              >
                                <Bookmark className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-16 text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Megaphone className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No notices found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedDepartment("all")
                      setSelectedCategory("All Categories")
                      setSelectedType("All Types")
                      setSelectedPriority("All Priorities")
                      setSortBy("latest")
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="p-6 border-t">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-3 py-2 border rounded-lg ${
                            currentPage === pageNum
                              ? "bg-blue-600 text-white border-blue-600"
                              : "border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          {pageNum}
                        </button>
                      )
                    })}
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Department Details Modal */}
      {showDeptDetails && selectedDept && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Department Details</h2>
                <button
                  onClick={() => setShowDeptDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Department Header */}
                <div className="border-b pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${getDepartmentColor(selectedDept.color)}`}>
                      {getDepartmentIcon(selectedDept.icon)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedDept.name}</h3>
                      <p className="text-gray-600">{selectedDept.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-gray-100 px-2 py-1 rounded text-sm">{selectedDept.code}</span>
                        {selectedDept.emergency && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded text-sm font-medium">
                            <AlertCircle className="h-3 w-3" />
                            24/7 Emergency
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Department Head */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Department Head</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium text-gray-900">{selectedDept.head}</div>
                      <div className="text-sm text-gray-600">{selectedDept.headTitle}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{selectedDept.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{selectedDept.contact.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{selectedDept.contact.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">Ext: {selectedDept.contact.extension}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Services Provided</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedDept.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timings */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Department Timings</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-2 text-sm">
                      {Object.entries(selectedDept.timings).map(([day, timing]) => (
                        <div key={day} className="text-center">
                          <div className="font-medium text-gray-900 capitalize">{day.slice(0, 3)}</div>
                          <div className="text-gray-600">{timing}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{selectedDept.noticeCount}</div>
                    <div className="text-sm text-gray-600">Total Notices</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{selectedDept.activeNotices}</div>
                    <div className="text-sm text-gray-600">Active Notices</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{selectedDept.services.length}</div>
                    <div className="text-sm text-gray-600">Services</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      {selectedDept.emergency ? "24/7" : "Scheduled"}
                    </div>
                    <div className="text-sm text-gray-600">Service Type</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notice Details Modal */}
      {showNoticeDetails && selectedNotice && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Notice Details</h2>
                <button
                  onClick={() => setShowNoticeDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Notice Header */}
                <div className="border-b pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    {selectedNotice.pinned && <Pin className="h-5 w-5 text-blue-500" />}
                    {selectedNotice.featured && <Star className="h-5 w-5 text-yellow-500" />}
                    <h3 className="text-2xl font-bold text-gray-900">{selectedNotice.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(selectedNotice.priority)}`}>
                      {getPriorityIcon(selectedNotice.priority)}
                      {selectedNotice.priority.charAt(0).toUpperCase() + selectedNotice.priority.slice(1)} Priority
                    </span>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded text-sm font-medium ${getTypeColor(selectedNotice.type)}`}>
                      {getTypeIcon(selectedNotice.type)}
                      {selectedNotice.type.charAt(0).toUpperCase() + selectedNotice.type.slice(1)}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded text-sm font-medium bg-gray-100 text-gray-700">
                      {selectedNotice.category}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded text-sm font-medium ${getDepartmentColor(serviceDepartments.find(d => d.code === selectedNotice.departmentCode)?.color || 'gray')}`}>
                      {selectedNotice.department}
                    </span>
                  </div>
                </div>

                {/* Author Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Published By</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium text-gray-900">{selectedNotice.author}</div>
                      <div className="text-sm text-gray-600">{selectedNotice.authorRole}</div>
                      <div className="text-sm text-gray-600">{selectedNotice.department}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Publication Details</h4>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Published:</span>
                        <span className="font-medium">{formatDate(selectedNotice.publishDate)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Expires:</span>
                        <span className="font-medium">
                          {selectedNotice.expiryDate ? formatDate(selectedNotice.expiryDate) : "No expiry"}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Status:</span>
                        <span className={`font-medium ${
                          isExpired(selectedNotice.expiryDate) ? "text-red-600" : "text-green-600"
                        }`}>
                          {isExpired(selectedNotice.expiryDate) ? "Expired" : "Active"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Notice Content</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{selectedNotice.content}</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Department Contact</h4>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    {selectedNotice.contactInfo.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{selectedNotice.contactInfo.phone}</span>
                      </div>
                    )}
                    {selectedNotice.contactInfo.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{selectedNotice.contactInfo.email}</span>
                      </div>
                    )}
                    {selectedNotice.contactInfo.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{selectedNotice.contactInfo.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Mark as Read
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Bookmark className="h-4 w-4" />
                    Bookmark
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
