"use client"

import React, { useState, useEffect } from "react"
import { Search, FileText, Filter, Calendar, User, ChevronDown, ChevronUp, Download, Eye, Clock, Award, BarChart3, X, Bell, Megaphone, AlertCircle, CheckCircle, Info, Star, TrendingUp, Users, Bookmark, Share2, ExternalLink, Tag, Archive, Pin, Flag, ThumbsUp, MessageSquare, Send, File, Image as ImageIcon, Link2, FileText as DocumentIcon, BookOpen } from "lucide-react"

interface Notice {
  id: string
  title: string
  content: string
  category: string
  priority: "urgent" | "high" | "normal" | "low"
  type: "general" | "academic" | "administrative" | "examination" | "event" | "holiday" | "recruitment" | "result"
  author: string
  authorRole: string
  department: string
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
}

const mockNotices: Notice[] = [
  {
    id: "1",
    title: "Annual MBBS Final Professional Examination Schedule - 2024",
    content: "The Annual MBBS Final Professional Examination for the academic year 2024 will commence from 15th May 2024. All final year students are requested to complete their form fill-up by 30th April 2024. Detailed examination schedule and venue information are attached with this notice.",
    category: "Examination",
    priority: "urgent",
    type: "examination",
    author: "Prof. Dr. A. K. M. Fazlul Haque",
    authorRole: "Controller of Examinations",
    department: "Examination Control",
    publishDate: "2024-03-15",
    expiryDate: "2024-05-01",
    status: "active",
    attachments: [
      {
        name: "MBBS_Final_Exam_Schedule_2024.pdf",
        type: "PDF",
        size: "2.3 MB",
        url: "#"
      },
      {
        name: "Exam_Guidelines_2024.pdf",
        type: "PDF",
        size: "1.2 MB",
        url: "#"
      }
    ],
    tags: ["examination", "final-professional", "mbbs", "schedule", "urgent"],
    views: 1250,
    likes: 45,
    comments: 12,
    bookmarks: 89,
    featured: true,
    pinned: true,
    readBy: 245,
    targetAudience: ["Final Year Students", "Faculty Members", "Department Heads"]
  },
  {
    id: "2",
    title: "International Medical Conference 2024 - Call for Papers",
    content: "Rangpur Community Medical College is organizing the International Medical Conference 2024 on 'Innovations in Medical Education and Healthcare Delivery'. Researchers and medical professionals are invited to submit their abstracts for presentation. Last date for submission: 30th April 2024.",
    category: "Event",
    priority: "high",
    type: "event",
    author: "Dr. Sarah Johnson",
    authorRole: "Conference Secretary",
    department: "Medical Education Unit",
    publishDate: "2024-03-10",
    expiryDate: "2024-04-30",
    status: "active",
    attachments: [
      {
        name: "Conference_Brochure_2024.pdf",
        type: "PDF",
        size: "5.6 MB",
        url: "#"
      },
      {
        name: "Abstract_Submission_Form.docx",
        type: "Document",
        size: "156 KB",
        url: "#"
      }
    ],
    tags: ["conference", "call-for-papers", "medical-education", "healthcare", "international"],
    views: 890,
    likes: 67,
    comments: 23,
    bookmarks: 123,
    featured: true,
    pinned: false,
    readBy: 178,
    targetAudience: ["Faculty Members", "Researchers", "Students", "Medical Professionals"]
  },
  {
    id: "3",
    title: "Library Hours Extended During Examination Period",
    content: "To facilitate better preparation for upcoming examinations, the college library will remain open from 8:00 AM to 10:00 PM daily until 31st May 2024. All students are requested to make use of this extended facility for their study and research needs.",
    category: "Academic",
    priority: "normal",
    type: "academic",
    author: "Mr. Muhammad Ali",
    authorRole: "Librarian",
    department: "Library",
    publishDate: "2024-03-12",
    expiryDate: "2024-05-31",
    status: "active",
    attachments: [],
    tags: ["library", "extended-hours", "examination", "study-facility"],
    views: 567,
    likes: 34,
    comments: 8,
    bookmarks: 45,
    featured: false,
    pinned: false,
    readBy: 156,
    targetAudience: ["All Students", "Faculty Members"]
  },
  {
    id: "4",
    title: "Holiday Notice: Independence Day 2024",
    content: "The college will remain closed on 26th March 2024 on the occasion of Independence Day. Normal academic activities will resume from 27th March 2024. All departments and offices are requested to display the national flag prominently on their premises.",
    category: "Holiday",
    priority: "normal",
    type: "holiday",
    author: "Admin Office",
    authorRole: "Administrative Officer",
    department: "Administration",
    publishDate: "2024-03-20",
    expiryDate: "2024-03-26",
    status: "active",
    attachments: [],
    tags: ["holiday", "independence-day", "26-march", "national-holiday"],
    views: 1234,
    likes: 78,
    comments: 15,
    bookmarks: 67,
    featured: false,
    pinned: false,
    readBy: 456,
    targetAudience: ["All Students", "Faculty Members", "Staff", "Employees"]
  },
  {
    id: "5",
    title: "Faculty Recruitment - Assistant Professor positions available",
    content: "Applications are invited from qualified candidates for Assistant Professor positions in the departments of Anatomy, Physiology, and Biochemistry. Minimum qualifications: MBBS, FCPS/MD/MS in relevant discipline with 3 years teaching experience. Last date for application: 15th April 2024.",
    category: "Recruitment",
    priority: "high",
    type: "recruitment",
    author: "HR Department",
    authorRole: "HR Manager",
    department: "Human Resources",
    publishDate: "2024-03-08",
    expiryDate: "2024-04-15",
    status: "active",
    attachments: [
      {
        name: "Job_Application_Form.pdf",
        type: "PDF",
        size: "234 KB",
        url: "#"
      },
      {
        name: "Recruitment_Guidelines.pdf",
        type: "PDF",
        size: "456 KB",
        url: "#"
      }
    ],
    tags: ["recruitment", "faculty", "assistant-professor", "anatomy", "physiology", "biochemistry"],
    views: 789,
    likes: 23,
    comments: 34,
    bookmarks: 89,
    featured: false,
    pinned: false,
    readBy: 234,
    targetAudience: ["Job Seekers", "Medical Professionals", "Academicians"]
  }
]

const categories = [
  "All Categories",
  "Academic",
  "Administrative", 
  "Examination",
  "Event",
  "Holiday",
  "Recruitment",
  "General"
]

const types = [
  "All Types",
  "General",
  "Academic",
  "Administrative",
  "Examination",
  "Event",
  "Holiday",
  "Recruitment",
  "Result"
]

const priorities = ["All Priorities", "Urgent", "High", "Normal", "Low"]
const sortOptions = [
  { value: "latest", label: "Latest First" },
  { value: "priority", label: "Priority" },
  { value: "views", label: "Most Viewed" },
  { value: "likes", label: "Most Liked" },
  { value: "expiry", label: "Expiry Date" }
]

export default function NoticeBoardOverviewPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedPriority, setSelectedPriority] = useState("All Priorities")
  const [sortBy, setSortBy] = useState("latest")
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [noticesPerPage] = useState(10)
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null)
  const [showNoticeDetails, setShowNoticeDetails] = useState(false)
  const [filteredNotices, setFilteredNotices] = useState<Notice[]>(mockNotices)

  useEffect(() => {
    let filtered = mockNotices.filter(notice => {
      const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === "All Categories" || notice.category === selectedCategory
      const matchesType = selectedType === "All Types" || notice.type === selectedType
      const matchesPriority = selectedPriority === "All Priorities" || notice.priority === selectedPriority

      return matchesSearch && matchesCategory && matchesType && matchesPriority
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
  }, [searchTerm, selectedCategory, selectedType, selectedPriority, sortBy])

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
      case "academic":
        return <BookOpen className="h-4 w-4" />
      case "examination":
        return <FileText className="h-4 w-4" />
      case "event":
        return <Calendar className="h-4 w-4" />
      case "holiday":
        return <Clock className="h-4 w-4" />
      case "recruitment":
        return <Users className="h-4 w-4" />
      case "administrative":
        return <Award className="h-4 w-4" />
      default:
        return <Megaphone className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "academic":
        return "bg-purple-100 text-purple-700"
      case "examination":
        return "bg-red-100 text-red-700"
      case "event":
        return "bg-green-100 text-green-700"
      case "holiday":
        return "bg-yellow-100 text-yellow-700"
      case "recruitment":
        return "bg-blue-100 text-blue-700"
      case "administrative":
        return "bg-indigo-100 text-indigo-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getAttachmentIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return <FileText className="h-4 w-4 text-red-600" />
      case "document":
      case "docx":
        return <DocumentIcon className="h-4 w-4 text-blue-600" />
      case "image":
      case "jpg":
      case "png":
        return <ImageIcon className="h-4 w-4 text-green-600" />
      default:
        return <File className="h-4 w-4 text-gray-600" />
    }
  }

  const handleNoticeClick = (notice: Notice) => {
    setSelectedNotice(notice)
    setShowNoticeDetails(true)
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
                <Megaphone className="h-12 w-12 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Notice Board</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay updated with the latest announcements, examination schedules, events, and important information
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
                <Megaphone className="h-4 w-4" />
                <span className="text-xl">{mockNotices.length}</span>
              </div>
              <p className="text-xs text-gray-600">Total Notices</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
                <AlertCircle className="h-4 w-4" />
                <span className="text-xl">{mockNotices.filter(n => n.priority === 'urgent').length}</span>
              </div>
              <p className="text-xs text-gray-600">Urgent</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                <Pin className="h-4 w-4" />
                <span className="text-xl">{mockNotices.filter(n => n.pinned).length}</span>
              </div>
              <p className="text-xs text-gray-600">Pinned</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                <CheckCircle className="h-4 w-4" />
                <span className="text-xl">{mockNotices.filter(n => n.status === 'active').length}</span>
              </div>
              <p className="text-xs text-gray-600">Active</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold">
                <Eye className="h-4 w-4" />
                <span className="text-xl">{mockNotices.reduce((sum, n) => sum + n.views, 0).toLocaleString()}</span>
              </div>
              <p className="text-xs text-gray-600">Total Views</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-indigo-600 font-semibold">
                <Bookmark className="h-4 w-4" />
                <span className="text-xl">{mockNotices.reduce((sum, n) => sum + n.bookmarks, 0).toLocaleString()}</span>
              </div>
              <p className="text-xs text-gray-600">Bookmarks</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search notices by title, content, author, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                  Notices ({filteredNotices.length} notices found)
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
                        ? "bg-gradient-to-r from-orange-50 to-white border-l-4 border-orange-500" 
                        : "bg-white hover:bg-gray-50 border-l-4 border-transparent hover:border-orange-300"
                    }`}
                    onClick={() => handleNoticeClick(notice)}
                  >
                    {/* Pinned/Featured Banner */}
                    {(notice.pinned || notice.featured) && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
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
                                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
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
                                  <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 group-hover:text-orange-600 transition-colors">
                                    {notice.title}
                                  </h3>
                                  <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-1">
                                      <User className="h-4 w-4" />
                                      <span className="font-medium">{notice.author}</span>
                                    </div>
                                    <span className="text-gray-400">•</span>
                                    <span className="italic">{notice.authorRole}</span>
                                    <span className="text-gray-400">•</span>
                                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">{notice.department}</span>
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

                          {/* Enhanced Attachments */}
                          {notice.attachments.length > 0 && (
                            <div className="mb-4">
                              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                <FileText className="h-4 w-4" />
                                <span className="font-medium">Attachments ({notice.attachments.length})</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {notice.attachments.map((attachment, index) => (
                                  <div key={index} className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-lg hover:border-orange-300 hover:shadow-sm transition-all duration-200">
                                    {getAttachmentIcon(attachment.type)}
                                    <div className="max-w-[200px]">
                                      <div className="text-sm font-medium text-gray-900 truncate">{attachment.name}</div>
                                      <div className="text-xs text-gray-500">{attachment.size}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Enhanced Tags */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {notice.tags.slice(0, 5).map((tag, index) => (
                                <span key={index} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors">
                                  <Tag className="h-3 w-3 mr-1" />
                                  {tag}
                                </span>
                              ))}
                              {notice.tags.length > 5 && (
                                <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                  +{notice.tags.length - 5} more
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Enhanced Actions Bar */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-6">
                              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors cursor-pointer">
                                <ThumbsUp className="h-4 w-4" />
                                <span className="font-medium">{notice.likes}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors cursor-pointer">
                                <MessageSquare className="h-4 w-4" />
                                <span className="font-medium">{notice.comments}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors cursor-pointer">
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
                                className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                                title="Share notice"
                              >
                                <Share2 className="h-4 w-4" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  // Handle bookmark
                                }}
                                className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                                title="Bookmark notice"
                              >
                                <Bookmark className="h-4 w-4" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  // Handle download
                                }}
                                className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                                title="Download attachments"
                              >
                                <Download className="h-4 w-4" />
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
                      setSelectedCategory("All Categories")
                      setSelectedType("All Types")
                      setSelectedPriority("All Priorities")
                      setSortBy("latest")
                    }}
                    className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
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
                              ? "bg-orange-600 text-white border-orange-600"
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
                    {selectedNotice.pinned && <Pin className="h-5 w-5 text-orange-500" />}
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

                {/* Attachments */}
                {selectedNotice.attachments.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Attachments</h4>
                    <div className="space-y-2">
                      {selectedNotice.attachments.map((attachment, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center gap-3">
                            {getAttachmentIcon(attachment.type)}
                            <div>
                              <div className="font-medium text-gray-900">{attachment.name}</div>
                              <div className="text-sm text-gray-600">{attachment.size}</div>
                            </div>
                          </div>
                          <button className="flex items-center gap-2 px-3 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors text-sm">
                            <Download className="h-4 w-4" />
                            Download
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedNotice.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{selectedNotice.views}</div>
                    <div className="text-sm text-gray-600">Views</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{selectedNotice.readBy}</div>
                    <div className="text-sm text-gray-600">Read By</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{selectedNotice.likes}</div>
                    <div className="text-sm text-gray-600">Likes</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{selectedNotice.bookmarks}</div>
                    <div className="text-sm text-gray-600">Bookmarks</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t">
                  <button className="flex-1 bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-medium">
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
                  <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="h-4 w-4" />
                    Download
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
