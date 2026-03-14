"use client"

import React, { useState, useEffect } from "react"
import { Search, FileText, Filter, Calendar, User, ChevronDown, ChevronUp, Download, Eye, Clock, Award, BarChart3, X, Bell, Megaphone, AlertCircle, CheckCircle, Info, Star, TrendingUp, Users, Bookmark, Share2, ExternalLink, Tag, Archive, Pin, Flag, ThumbsUp, MessageSquare, Send, File, Image as ImageIcon, Link2, FileText as DocumentIcon, BookOpen, Building, Stethoscope, Heart, Brain, Eye as EyeIcon, TestTube, Pill, Activity, Phone, Mail, MapPin, Clock as ClockIcon, UserCheck, Shield, Syringe, Microscope, Scan, Thermometer, Dna, Beaker } from "lucide-react"

interface DiagnosticNotice {
  id: string
  title: string
  content: string
  service: string
  serviceCode: string
  category: string
  priority: "urgent" | "high" | "normal" | "low"
  type: "equipment" | "schedule" | "pricing" | "protocol" | "maintenance" | "training" | "announcement"
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

interface DiagnosticService {
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
  appointmentRequired: boolean
  preparationRequired: boolean
  icon: string
  color: string
  noticeCount: number
  activeNotices: number
  latestNotice?: string
  priceRange: string
  reportTime: string
}

const diagnosticServices: DiagnosticService[] = [
  {
    id: "1",
    name: "Radiology & Imaging",
    code: "RAD",
    description: "Advanced diagnostic imaging services including X-ray, CT, MRI, and ultrasound",
    head: "Dr. M. A. Rahman",
    headTitle: "Professor & Head of Radiology",
    contact: {
      phone: "+880-2-12345684",
      email: "radiology@rcmc.edu.bd",
      location: "Ground Floor, Diagnostic Center",
      extension: "701"
    },
    services: ["X-Ray", "CT Scan", "MRI", "Ultrasound", "Mammography", "DEXA Scan"],
    timings: {
      monday: "8:00 AM - 10:00 PM",
      tuesday: "8:00 AM - 10:00 PM",
      wednesday: "8:00 AM - 10:00 PM",
      thursday: "8:00 AM - 10:00 PM",
      friday: "8:00 AM - 10:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "8:00 AM - 2:00 PM"
    },
    emergency: true,
    appointmentRequired: true,
    preparationRequired: true,
    icon: "xray",
    color: "blue",
    noticeCount: 18,
    activeNotices: 10,
    latestNotice: "New 3T MRI Machine Installation Complete",
    priceRange: "500 - 15,000 BDT",
    reportTime: "24-48 hours"
  },
  {
    id: "2",
    name: "Pathology Laboratory",
    code: "LAB",
    description: "Comprehensive laboratory diagnostics including hematology, biochemistry, and microbiology",
    head: "Dr. R. Islam",
    headTitle: "Professor & Head of Pathology",
    contact: {
      phone: "+880-2-12345682",
      email: "pathology@rcmc.edu.bd",
      location: "1st Floor, Laboratory Building",
      extension: "501"
    },
    services: ["Blood Tests", "Urine Tests", "Biopsy", "Histopathology", "Microbiology", "Molecular Diagnostics"],
    timings: {
      monday: "7:00 AM - 10:00 PM",
      tuesday: "7:00 AM - 10:00 PM",
      wednesday: "7:00 AM - 10:00 PM",
      thursday: "7:00 AM - 10:00 PM",
      friday: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 8:00 PM",
      sunday: "7:00 AM - 2:00 PM"
    },
    emergency: true,
    appointmentRequired: false,
    preparationRequired: true,
    icon: "testtube",
    color: "green",
    noticeCount: 22,
    activeNotices: 14,
    latestNotice: "New Test Packages Available",
    priceRange: "100 - 5,000 BDT",
    reportTime: "6-24 hours"
  },
  {
    id: "3",
    name: "Cardiac Diagnostics",
    code: "CARDIO",
    description: "Specialized cardiac diagnostic services including ECG, Echocardiography, and stress testing",
    head: "Prof. Dr. M. A. Karim",
    headTitle: "Professor & Head of Cardiology",
    contact: {
      phone: "+880-2-12345679",
      email: "cardiology@rcmc.edu.bd",
      location: "3rd Floor, Block A",
      extension: "201"
    },
    services: ["ECG", "Echocardiography", "Stress Test", "Holter Monitor", "Event Monitor", "Cardiac CT"],
    timings: {
      monday: "8:00 AM - 8:00 PM",
      tuesday: "8:00 AM - 8:00 PM",
      wednesday: "8:00 AM - 8:00 PM",
      thursday: "8:00 AM - 8:00 PM",
      friday: "8:00 AM - 8:00 PM",
      saturday: "8:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    emergency: true,
    appointmentRequired: true,
    preparationRequired: false,
    icon: "heart",
    color: "red",
    noticeCount: 12,
    activeNotices: 7,
    latestNotice: "Updated Cardiac Diagnostics Schedule",
    priceRange: "300 - 8,000 BDT",
    reportTime: "Same day to 48 hours"
  },
  {
    id: "4",
    name: "Neurodiagnostics",
    code: "NEURO-DX",
    description: "Advanced neurological diagnostic services including EEG, EMG, and nerve conduction studies",
    head: "Dr. S. R. Ahmed",
    headTitle: "Associate Professor & Head",
    contact: {
      phone: "+880-2-12345680",
      email: "neurology@rcmc.edu.bd",
      location: "4th Floor, Block B",
      extension: "301"
    },
    services: ["EEG", "EMG", "Nerve Conduction Study", "Evoked Potentials", "Sleep Study", "Botox Therapy"],
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
    appointmentRequired: true,
    preparationRequired: true,
    icon: "brain",
    color: "purple",
    noticeCount: 8,
    activeNotices: 5,
    latestNotice: "New EEG Machine Installation",
    priceRange: "800 - 6,000 BDT",
    reportTime: "24-72 hours"
  },
  {
    id: "5",
    name: "Endoscopy Services",
    code: "ENDO",
    description: "Comprehensive endoscopic diagnostic and therapeutic procedures",
    head: "Dr. N. K. Begum",
    headTitle: "Professor & Head of Gastroenterology",
    contact: {
      phone: "+880-2-12345685",
      email: "endoscopy@rcmc.edu.bd",
      location: "2nd Floor, Endoscopy Unit",
      extension: "801"
    },
    services: ["Upper GI Endoscopy", "Colonoscopy", "Bronchoscopy", "ERCP", "Capsule Endoscopy", "Manometry"],
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
    appointmentRequired: true,
    preparationRequired: true,
    icon: "syringe",
    color: "orange",
    noticeCount: 10,
    activeNotices: 6,
    latestNotice: "Endoscopy Schedule Update",
    priceRange: "3,000 - 12,000 BDT",
    reportTime: "Same day to 48 hours"
  },
  {
    id: "6",
    name: "Molecular Diagnostics",
    code: "MOL-DX",
    description: "Advanced molecular and genetic testing services",
    head: "Dr. A. K. M. Salam",
    headTitle: "Chief Molecular Pathologist",
    contact: {
      phone: "+880-2-12345686",
      email: "molecular@rcmc.edu.bd",
      location: "Basement, Laboratory Building",
      extension: "901"
    },
    services: ["PCR Testing", "COVID-19 Testing", "Genetic Testing", "HPV Testing", "HIV Testing", "Hepatitis Panel"],
    timings: {
      monday: "8:00 AM - 6:00 PM",
      tuesday: "8:00 AM - 6:00 PM",
      wednesday: "8:00 AM - 6:00 PM",
      thursday: "8:00 AM - 6:00 PM",
      friday: "8:00 AM - 6:00 PM",
      saturday: "8:00 AM - 4:00 PM",
      sunday: "Closed"
    },
    emergency: false,
    appointmentRequired: false,
    preparationRequired: false,
    icon: "dna",
    color: "indigo",
    noticeCount: 6,
    activeNotices: 4,
    latestNotice: "New PCR Test Available",
    priceRange: "500 - 8,000 BDT",
    reportTime: "24-72 hours"
  }
]

const mockDiagnosticNotices: DiagnosticNotice[] = [
  {
    id: "1",
    title: "New 3T MRI Machine Installation - Radiology Department",
    content: "The Radiology Department is pleased to announce the successful installation of a new state-of-the-art 3T MRI machine. The new equipment provides superior image quality and faster scanning times. All referring physicians are requested to note the updated protocols and preparation guidelines. Training sessions for radiologists and technicians will be conducted from 25th to 30th March 2024.",
    service: "Radiology & Imaging",
    serviceCode: "RAD",
    category: "Equipment Update",
    priority: "high",
    type: "equipment",
    author: "Dr. M. A. Rahman",
    authorRole: "Professor & Head of Radiology",
    publishDate: "2024-03-15",
    expiryDate: "2024-05-15",
    status: "active",
    attachments: [
      {
        name: "3T_MRI_Specifications.pdf",
        type: "PDF",
        size: "2.8 MB",
        url: "#"
      },
      {
        name: "New_Protocols_Guidelines.docx",
        type: "Document",
        size: "567 KB",
        url: "#"
      }
    ],
    tags: ["radiology", "mri", "equipment", "new-machine", "training"],
    views: 789,
    likes: 34,
    comments: 12,
    bookmarks: 67,
    featured: true,
    pinned: true,
    readBy: 234,
    targetAudience: ["Radiologists", "Referring Physicians", "Technicians", "Patients"],
    contactInfo: {
      phone: "+880-2-12345684",
      email: "radiology@rcmc.edu.bd",
      location: "Ground Floor, Diagnostic Center"
    }
  },
  {
    id: "2",
    title: "COVID-19 PCR Testing Schedule Update - Molecular Diagnostics",
    content: "Effective from 20th March 2024, the COVID-19 PCR testing schedule will be adjusted to accommodate increased demand. Sample collection time: 8:00 AM - 12:00 PM daily. Report delivery: Within 24 hours for samples collected before 10:00 AM, within 36 hours for samples collected after 10:00 AM. Emergency testing available 24/7 with additional charges.",
    service: "Molecular Diagnostics",
    serviceCode: "MOL-DX",
    category: "Schedule Update",
    priority: "normal",
    type: "schedule",
    author: "Dr. A. K. M. Salam",
    authorRole: "Chief Molecular Pathologist",
    publishDate: "2024-03-12",
    expiryDate: "2024-04-30",
    status: "active",
    attachments: [
      {
        name: "COVID_Testing_Schedule.pdf",
        type: "PDF",
        size: "1.2 MB",
        url: "#"
      }
    ],
    tags: ["covid-19", "pcr", "testing", "schedule", "molecular"],
    views: 456,
    likes: 23,
    comments: 8,
    bookmarks: 89,
    featured: false,
    pinned: false,
    readBy: 178,
    targetAudience: ["Patients", "Physicians", "Laboratory Staff"],
    contactInfo: {
      phone: "+880-2-12345686",
      email: "molecular@rcmc.edu.bd",
      location: "Basement, Laboratory Building"
    }
  },
  {
    id: "3",
    title: "Endoscopy Preparation Guidelines Update",
    content: "Updated preparation guidelines for all endoscopic procedures effective immediately. Patients must fast for 8 hours before upper GI endoscopy and 12 hours before colonoscopy. New bowel preparation protocol for colonoscopy: Split-dose regimen with 2L PEG solution. Detailed preparation instructions are available at the reception and on our website.",
    service: "Endoscopy Services",
    serviceCode: "ENDO",
    category: "Protocol Update",
    priority: "high",
    type: "protocol",
    author: "Dr. N. K. Begum",
    authorRole: "Professor & Head of Gastroenterology",
    publishDate: "2024-03-10",
    expiryDate: "2024-06-30",
    status: "active",
    attachments: [
      {
        name: "Endoscopy_Preparation_Guide.pdf",
        type: "PDF",
        size: "1.8 MB",
        url: "#"
      }
    ],
    tags: ["endoscopy", "preparation", "guidelines", "protocol", "bowel-prep"],
    views: 623,
    likes: 28,
    comments: 15,
    bookmarks: 123,
    featured: false,
    pinned: false,
    readBy: 289,
    targetAudience: ["Patients", "Endoscopists", "Nursing Staff"],
    contactInfo: {
      phone: "+880-2-12345685",
      email: "endoscopy@rcmc.edu.bd",
      location: "2nd Floor, Endoscopy Unit"
    }
  }
]

const categories = ["All Categories", "Equipment Update", "Schedule Update", "Pricing Update", "Protocol Update", "Maintenance", "Training", "Announcement"]
const types = ["All Types", "Equipment", "Schedule", "Pricing", "Protocol", "Maintenance", "Training", "Announcement"]
const priorities = ["All Priorities", "Urgent", "High", "Normal", "Low"]
const sortOptions = [
  { value: "latest", label: "Latest First" },
  { value: "priority", label: "Priority" },
  { value: "views", label: "Most Viewed" },
  { value: "likes", label: "Most Liked" },
  { value: "expiry", label: "Expiry Date" }
]

export default function NoticeBoardDiagnosticServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedService, setSelectedService] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedPriority, setSelectedPriority] = useState("All Priorities")
  const [sortBy, setSortBy] = useState("latest")
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [noticesPerPage] = useState(10)
  const [selectedNotice, setSelectedNotice] = useState<DiagnosticNotice | null>(null)
  const [showNoticeDetails, setShowNoticeDetails] = useState(false)
  const [selectedSvc, setSelectedSvc] = useState<DiagnosticService | null>(null)
  const [showSvcDetails, setShowSvcDetails] = useState(false)
  const [filteredNotices, setFilteredNotices] = useState<DiagnosticNotice[]>(mockDiagnosticNotices)

  useEffect(() => {
    let filtered = mockDiagnosticNotices.filter(notice => {
      const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesService = selectedService === "all" || notice.serviceCode === selectedService
      const matchesCategory = selectedCategory === "All Categories" || notice.category === selectedCategory
      const matchesType = selectedType === "All Types" || notice.type === selectedType
      const matchesPriority = selectedPriority === "All Priorities" || notice.priority === selectedPriority

      return matchesSearch && matchesService && matchesCategory && matchesType && matchesPriority
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
  }, [searchTerm, selectedService, selectedCategory, selectedType, selectedPriority, sortBy])

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
      case "equipment":
        return <Microscope className="h-4 w-4" />
      case "schedule":
        return <Calendar className="h-4 w-4" />
      case "pricing":
        return <Thermometer className="h-4 w-4" />
      case "protocol":
        return <Shield className="h-4 w-4" />
      case "maintenance":
        return <Activity className="h-4 w-4" />
      case "training":
        return <UserCheck className="h-4 w-4" />
      default:
        return <Megaphone className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "equipment":
        return "bg-purple-100 text-purple-700"
      case "schedule":
        return "bg-blue-100 text-blue-700"
      case "pricing":
        return "bg-green-100 text-green-700"
      case "protocol":
        return "bg-red-100 text-red-700"
      case "maintenance":
        return "bg-orange-100 text-orange-700"
      case "training":
        return "bg-indigo-100 text-indigo-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "xray":
        return <Scan className="h-6 w-6" />
      case "testtube":
        return <TestTube className="h-6 w-6" />
      case "heart":
        return <Heart className="h-6 w-6" />
      case "brain":
        return <Brain className="h-6 w-6" />
      case "syringe":
        return <Syringe className="h-6 w-6" />
      case "dna":
        return <Dna className="h-6 w-6" />
      default:
        return <Microscope className="h-6 w-6" />
    }
  }

  const getServiceColor = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "green":
        return "bg-green-100 text-green-700 border-green-200"
      case "red":
        return "bg-red-100 text-red-700 border-red-200"
      case "purple":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "orange":
        return "bg-orange-100 text-orange-700 border-orange-200"
      case "indigo":
        return "bg-indigo-100 text-indigo-700 border-indigo-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const handleNoticeClick = (notice: DiagnosticNotice) => {
    setSelectedNotice(notice)
    setShowNoticeDetails(true)
  }

  const handleServiceClick = (service: DiagnosticService) => {
    setSelectedSvc(service)
    setShowSvcDetails(true)
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
                <Microscope className="h-12 w-12 text-purple-600" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Diagnostic Services</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Notices and updates from diagnostic and laboratory services
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold">
                <Microscope className="h-4 w-4" />
                <span className="text-xl">{diagnosticServices.length}</span>
              </div>
              <p className="text-xs text-gray-600">Services</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
                <Megaphone className="h-4 w-4" />
                <span className="text-xl">{diagnosticServices.reduce((sum, d) => sum + d.noticeCount, 0)}</span>
              </div>
              <p className="text-xs text-gray-600">Total Notices</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                <CheckCircle className="h-4 w-4" />
                <span className="text-xl">{diagnosticServices.reduce((sum, d) => sum + d.activeNotices, 0)}</span>
              </div>
              <p className="text-xs text-gray-600">Active Notices</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
                <AlertCircle className="h-4 w-4" />
                <span className="text-xl">{diagnosticServices.filter(d => d.emergency).length}</span>
              </div>
              <p className="text-xs text-gray-600">Emergency Services</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                <Calendar className="h-4 w-4" />
                <span className="text-xl">{diagnosticServices.filter(d => d.appointmentRequired).length}</span>
              </div>
              <p className="text-xs text-gray-600">Appointment Required</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-indigo-600 font-semibold">
                <Eye className="h-4 w-4" />
                <span className="text-xl">{mockDiagnosticNotices.reduce((sum, n) => sum + n.views, 0).toLocaleString()}</span>
              </div>
              <p className="text-xs text-gray-600">Total Views</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Services Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Diagnostic Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diagnosticServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => handleServiceClick(service)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${getServiceColor(service.color)}`}>
                      {getServiceIcon(service.icon)}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {service.emergency && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                          <AlertCircle className="h-3 w-3" />
                          24/7
                        </span>
                      )}
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {service.code}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      <span className="truncate">{service.head}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{service.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate">{service.contact.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-purple-600">{service.noticeCount}</div>
                      <div className="text-xs text-gray-600">Notices</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-green-600">{service.activeNotices}</div>
                      <div className="text-xs text-gray-600">Active</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-2 bg-blue-50 rounded">
                      <div className="text-sm font-bold text-blue-600">{service.priceRange}</div>
                      <div className="text-xs text-gray-600">Price Range</div>
                    </div>
                    <div className="text-center p-2 bg-orange-50 rounded">
                      <div className="text-sm font-bold text-orange-600">{service.reportTime}</div>
                      <div className="text-xs text-gray-600">Report Time</div>
                    </div>
                  </div>

                  {service.latestNotice && (
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="text-xs text-purple-600 font-medium mb-1">Latest Notice</div>
                      <div className="text-sm text-gray-700 line-clamp-1">{service.latestNotice}</div>
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
                  placeholder="Search notices by title, content, service, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="all">All Services</option>
                    {diagnosticServices.map(svc => (
                      <option key={svc.id} value={svc.code}>{svc.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      setSelectedService("all")
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
                  Diagnostic Notices ({filteredNotices.length} notices found)
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
                        ? "bg-gradient-to-r from-purple-50 to-white border-l-4 border-purple-500" 
                        : "bg-white hover:bg-gray-50 border-l-4 border-transparent hover:border-purple-300"
                    }`}
                    onClick={() => handleNoticeClick(notice)}
                  >
                    {/* Pinned/Featured Banner */}
                    {(notice.pinned || notice.featured) && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
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
                                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md">
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
                                  <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 group-hover:text-purple-600 transition-colors">
                                    {notice.title}
                                  </h3>
                                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                    <div className="flex items-center gap-1">
                                      <Microscope className="h-4 w-4" />
                                      <span className="font-medium">{notice.service}</span>
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
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getServiceColor(diagnosticServices.find(d => d.code === notice.serviceCode)?.color || 'gray')}`}>
                                      {notice.serviceCode}
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
                              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
                                <ThumbsUp className="h-4 w-4" />
                                <span className="font-medium">{notice.likes}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
                                <MessageSquare className="h-4 w-4" />
                                <span className="font-medium">{notice.comments}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
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
                                className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
                                title="Share notice"
                              >
                                <Share2 className="h-4 w-4" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  // Handle bookmark
                                }}
                                className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
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
                      setSelectedService("all")
                      setSelectedCategory("All Categories")
                      setSelectedType("All Types")
                      setSelectedPriority("All Priorities")
                      setSortBy("latest")
                    }}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
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
                              ? "bg-purple-600 text-white border-purple-600"
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

      {/* Service Details Modal */}
      {showSvcDetails && selectedSvc && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Service Details</h2>
                <button
                  onClick={() => setShowSvcDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Service Header */}
                <div className="border-b pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${getServiceColor(selectedSvc.color)}`}>
                      {getServiceIcon(selectedSvc.icon)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedSvc.name}</h3>
                      <p className="text-gray-600">{selectedSvc.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-gray-100 px-2 py-1 rounded text-sm">{selectedSvc.code}</span>
                        {selectedSvc.emergency && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded text-sm font-medium">
                            <AlertCircle className="h-3 w-3" />
                            24/7 Emergency
                          </span>
                        )}
                        {selectedSvc.appointmentRequired && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm font-medium">
                            <Calendar className="h-3 w-3" />
                            Appointment Required
                          </span>
                        )}
                        {selectedSvc.preparationRequired && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm font-medium">
                            <Shield className="h-3 w-3" />
                            Preparation Required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Head */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Service Head</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium text-gray-900">{selectedSvc.head}</div>
                      <div className="text-sm text-gray-600">{selectedSvc.headTitle}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{selectedSvc.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{selectedSvc.contact.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{selectedSvc.contact.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">Ext: {selectedSvc.contact.extension}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Diagnostic Services</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedSvc.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timings */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Service Timings</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-2 text-sm">
                      {Object.entries(selectedSvc.timings).map(([day, timing]) => (
                        <div key={day} className="text-center">
                          <div className="font-medium text-gray-900 capitalize">{day.slice(0, 3)}</div>
                          <div className="text-gray-600">{timing}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing & Report Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{selectedSvc.priceRange}</div>
                      <div className="text-sm text-gray-600">BDT</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Report Delivery Time</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{selectedSvc.reportTime}</div>
                      <div className="text-sm text-gray-600">Typical turnaround</div>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{selectedSvc.noticeCount}</div>
                    <div className="text-sm text-gray-600">Total Notices</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{selectedSvc.activeNotices}</div>
                    <div className="text-sm text-gray-600">Active Notices</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{selectedSvc.services.length}</div>
                    <div className="text-sm text-gray-600">Services</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">
                      {selectedSvc.emergency ? "24/7" : "Scheduled"}
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
                    {selectedNotice.pinned && <Pin className="h-5 w-5 text-purple-500" />}
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
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded text-sm font-medium ${getServiceColor(diagnosticServices.find(d => d.code === selectedNotice.serviceCode)?.color || 'gray')}`}>
                      {selectedNotice.service}
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
                      <div className="text-sm text-gray-600">{selectedNotice.service}</div>
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
                  <h4 className="font-semibold text-gray-900 mb-3">Service Contact</h4>
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
                  <button className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium">
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
