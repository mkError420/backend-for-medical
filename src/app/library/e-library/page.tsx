"use client"

import React, { useState, useEffect } from "react"
import { Search, Book, Filter, Calendar, User, FileText, ChevronDown, ChevronUp, Download, Eye, Library, Clock, Award, BarChart3, X, Video, Headphones, FileImage, Globe, Database, Cloud, Monitor, Smartphone, Tablet, Laptop, BookOpen, File, FolderOpen, Star, TrendingUp, Users, PlayCircle, PauseCircle, Volume2 } from "lucide-react"

interface EResource {
  id: string
  title: string
  author: string
  publisher: string
  year: string
  type: "ebook" | "journal" | "video" | "audio" | "database" | "multimedia"
  category: string
  subcategory: string
  format: string
  size: string
  duration?: string
  language: string
  access: "free" | "premium" | "subscription"
  rating: number
  downloads: number
  views: number
  description?: string
  url?: string
  thumbnail?: string
  tags: string[]
}

const mockEResources: EResource[] = [
  {
    id: "1",
    title: "Comprehensive Anatomy Atlas",
    author: "Dr. John Smith",
    publisher: "Medical Publications International",
    year: "2023",
    type: "ebook",
    category: "Anatomy",
    subcategory: "Gross Anatomy",
    format: "PDF",
    size: "125 MB",
    language: "English",
    access: "free",
    rating: 4.8,
    downloads: 1250,
    views: 3400,
    description: "Interactive anatomy atlas with 3D models and detailed illustrations.",
    tags: ["anatomy", "3d-models", "illustrations", "medical-students"]
  },
  {
    id: "2",
    title: "Surgical Techniques Video Series",
    author: "Prof. Sarah Johnson",
    publisher: "Surgical Education Network",
    year: "2024",
    type: "video",
    category: "Surgery",
    subcategory: "General Surgery",
    format: "MP4",
    size: "2.3 GB",
    duration: "45 min",
    language: "English",
    access: "premium",
    rating: 4.9,
    downloads: 890,
    views: 5600,
    description: "Comprehensive video series covering advanced surgical procedures.",
    tags: ["surgery", "procedures", "training", "advanced"]
  },
  {
    id: "3",
    title: "Medical Pharmacology Audio Lectures",
    author: "Dr. Michael Brown",
    publisher: "Audio Medical Education",
    year: "2023",
    type: "audio",
    category: "Pharmacology",
    subcategory: "Medical Pharmacology",
    format: "MP3",
    size: "450 MB",
    duration: "12 hours",
    language: "English",
    access: "free",
    rating: 4.6,
    downloads: 2100,
    views: 8900,
    description: "Complete audio lecture series covering all aspects of medical pharmacology.",
    tags: ["pharmacology", "lectures", "audio", "comprehensive"]
  },
  {
    id: "4",
    title: "PubMed Central Database Access",
    author: "National Library of Medicine",
    publisher: "NCBI",
    year: "2024",
    type: "database",
    category: "Research",
    subcategory: "Medical Journals",
    format: "Web Database",
    size: "Online",
    language: "English",
    access: "subscription",
    rating: 4.7,
    downloads: 0,
    views: 12500,
    description: "Access to millions of biomedical and life sciences journal articles.",
    tags: ["research", "journals", "database", "pubmed"]
  },
  {
    id: "5",
    title: "Interactive Physiology Simulations",
    author: "Dr. Emily Davis",
    publisher: "Interactive Medical Learning",
    year: "2024",
    type: "multimedia",
    category: "Physiology",
    subcategory: "Medical Physiology",
    format: "Interactive Web",
    size: "Online",
    language: "English",
    access: "premium",
    rating: 4.9,
    downloads: 567,
    views: 4300,
    description: "Interactive simulations and animations for understanding physiological processes.",
    tags: ["physiology", "interactive", "simulations", "animations"]
  }
]

const resourceTypes = [
  { id: "all", name: "All Types", icon: Library },
  { id: "ebook", name: "E-Books", icon: Book },
  { id: "journal", name: "Journals", icon: FileText },
  { id: "video", name: "Videos", icon: Video },
  { id: "audio", name: "Audio", icon: Headphones },
  { id: "database", name: "Databases", icon: Database },
  { id: "multimedia", name: "Multimedia", icon: Monitor }
]

const categories = [
  "All Categories",
  "Anatomy",
  "Physiology",
  "Biochemistry",
  "Pathology",
  "Pharmacology",
  "Medicine",
  "Surgery",
  "Pediatrics",
  "Obstetrics & Gynecology",
  "Microbiology",
  "Community Medicine",
  "Psychiatry",
  "Dermatology",
  "Radiology",
  "Anesthesiology",
  "Research"
]

const accessLevels = ["All Access", "Free", "Premium", "Subscription"]
const languages = ["All Languages", "English", "Bangla", "Hindi", "Urdu"]
const sortOptions = [
  { value: "title", label: "Title" },
  { value: "rating", label: "Rating" },
  { value: "views", label: "Most Viewed" },
  { value: "downloads", label: "Most Downloaded" },
  { value: "year", label: "Latest" }
]

export default function ELibraryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedAccess, setSelectedAccess] = useState("All Access")
  const [selectedLanguage, setSelectedLanguage] = useState("All Languages")
  const [sortBy, setSortBy] = useState("title")
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [resourcesPerPage] = useState(12)
  const [selectedResource, setSelectedResource] = useState<EResource | null>(null)
  const [showResourceDetails, setShowResourceDetails] = useState(false)
  const [filteredResources, setFilteredResources] = useState<EResource[]>(mockEResources)

  useEffect(() => {
    let filtered = mockEResources.filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesType = selectedType === "all" || resource.type === selectedType
      const matchesCategory = selectedCategory === "All Categories" || resource.category === selectedCategory
      const matchesAccess = selectedAccess === "All Access" || resource.access === selectedAccess
      const matchesLanguage = selectedLanguage === "All Languages" || resource.language === selectedLanguage

      return matchesSearch && matchesType && matchesCategory && matchesAccess && matchesLanguage
    })

    // Sort resources
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title)
        case "rating":
          return b.rating - a.rating
        case "views":
          return b.views - a.views
        case "downloads":
          return b.downloads - a.downloads
        case "year":
          return b.year.localeCompare(a.year)
        default:
          return 0
      }
    })

    setFilteredResources(filtered)
    setCurrentPage(1)
  }, [searchTerm, selectedType, selectedCategory, selectedAccess, selectedLanguage, sortBy])

  const indexOfLastResource = currentPage * resourcesPerPage
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage
  const currentResources = filteredResources.slice(indexOfFirstResource, indexOfLastResource)
  const totalPages = Math.ceil(filteredResources.length / resourcesPerPage)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "ebook":
        return <Book className="h-5 w-5" />
      case "journal":
        return <FileText className="h-5 w-5" />
      case "video":
        return <Video className="h-5 w-5" />
      case "audio":
        return <Headphones className="h-5 w-5" />
      case "database":
        return <Database className="h-5 w-5" />
      case "multimedia":
        return <Monitor className="h-5 w-5" />
      default:
        return <File className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "ebook":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "journal":
        return "bg-green-100 text-green-700 border-green-200"
      case "video":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "audio":
        return "bg-orange-100 text-orange-700 border-orange-200"
      case "database":
        return "bg-red-100 text-red-700 border-red-200"
      case "multimedia":
        return "bg-indigo-100 text-indigo-700 border-indigo-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getAccessColor = (access: string) => {
    switch (access) {
      case "free":
        return "bg-green-100 text-green-800 border-green-200"
      case "premium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "subscription":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const handleResourceClick = (resource: EResource) => {
    setSelectedResource(resource)
    setShowResourceDetails(true)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#FBFCFC] text-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <Cloud className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">E-Library</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Digital resources including e-books, journals, videos, audio lectures, and interactive multimedia content
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
                <Book className="h-4 w-4" />
                <span className="text-xl">{mockEResources.filter(r => r.type === 'ebook').length}</span>
              </div>
              <p className="text-xs text-gray-600">E-Books</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                <FileText className="h-4 w-4" />
                <span className="text-xl">{mockEResources.filter(r => r.type === 'journal').length}</span>
              </div>
              <p className="text-xs text-gray-600">Journals</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold">
                <Video className="h-4 w-4" />
                <span className="text-xl">{mockEResources.filter(r => r.type === 'video').length}</span>
              </div>
              <p className="text-xs text-gray-600">Videos</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
                <Headphones className="h-4 w-4" />
                <span className="text-xl">{mockEResources.filter(r => r.type === 'audio').length}</span>
              </div>
              <p className="text-xs text-gray-600">Audio</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
                <Database className="h-4 w-4" />
                <span className="text-xl">{mockEResources.filter(r => r.type === 'database').length}</span>
              </div>
              <p className="text-xs text-gray-600">Databases</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-indigo-600 font-semibold">
                <Monitor className="h-4 w-4" />
                <span className="text-xl">{mockEResources.filter(r => r.type === 'multimedia').length}</span>
              </div>
              <p className="text-xs text-gray-600">Multimedia</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Resource Type Selector */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {resourceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                  selectedType === type.id
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
              >
                <type.icon className="h-6 w-6" />
                <span className="text-xs font-medium">{type.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search e-resources by title, author, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Access Level</label>
                  <select
                    value={selectedAccess}
                    onChange={(e) => setSelectedAccess(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {accessLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {languages.map(language => (
                      <option key={language} value={language}>{language}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                      setSelectedType("all")
                      setSelectedCategory("All Categories")
                      setSelectedAccess("All Access")
                      setSelectedLanguage("All Languages")
                      setSortBy("title")
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
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  E-Resources ({filteredResources.length} items found)
                </h2>
                <div className="text-sm text-gray-600">
                  Showing {indexOfFirstResource + 1}-{Math.min(indexOfLastResource, filteredResources.length)} of {filteredResources.length}
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {currentResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                  {currentResources.map((resource) => (
                    <div
                      key={resource.id}
                      className="bg-white border rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      onClick={() => handleResourceClick(resource)}
                    >
                      {/* Resource Thumbnail */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center overflow-hidden">
                        <div className={`p-4 rounded-full ${getTypeColor(resource.type)}`}>
                          {getTypeIcon(resource.type)}
                        </div>
                        <div className="absolute top-2 right-2">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getAccessColor(resource.access)}`}>
                            {resource.access.charAt(0).toUpperCase() + resource.access.slice(1)}
                          </span>
                        </div>
                        {resource.type === "video" && (
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                            <PlayCircle className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        )}
                      </div>

                      {/* Resource Content */}
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-green-600 transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-gray-600">by {resource.author}</p>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          {renderStars(resource.rating)}
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-gray-400" />
                            <span>{resource.category}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span>{resource.year}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Database className="h-4 w-4 text-gray-400" />
                            <span>{resource.format} • {resource.size}</span>
                          </div>
                          {resource.duration && (
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span>{resource.duration}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t">
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              <span>{resource.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Download className="h-3 w-3" />
                              <span>{resource.downloads.toLocaleString()}</span>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              // Handle access/download
                            }}
                            className="text-green-600 hover:text-green-700 font-medium text-sm"
                          >
                            Access Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-16 text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No e-resources found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedType("all")
                      setSelectedCategory("All Categories")
                      setSelectedAccess("All Access")
                      setSelectedLanguage("All Languages")
                      setSortBy("title")
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
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
                              ? "bg-green-600 text-white border-green-600"
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

      {/* Resource Details Modal */}
      {showResourceDetails && selectedResource && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Resource Details</h2>
                <button
                  onClick={() => setShowResourceDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <div className={`p-8 rounded-full ${getTypeColor(selectedResource.type)}`}>
                        {React.cloneElement(getTypeIcon(selectedResource.type), { className: "h-16 w-16" })}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium border ${getAccessColor(selectedResource.access)}`}>
                        {selectedResource.access.charAt(0).toUpperCase() + selectedResource.access.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    {renderStars(selectedResource.rating)}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedResource.title}</h3>
                      <p className="text-lg text-gray-600 mb-4">by {selectedResource.author}</p>
                      <p className="text-gray-700 leading-relaxed">{selectedResource.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Resource Information</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Type:</span>
                            <span className="font-medium capitalize">{selectedResource.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Category:</span>
                            <span className="font-medium">{selectedResource.category}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Format:</span>
                            <span className="font-medium">{selectedResource.format}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Size:</span>
                            <span className="font-medium">{selectedResource.size}</span>
                          </div>
                          {selectedResource.duration && (
                            <div className="flex justify-between">
                              <span className="text-gray-600">Duration:</span>
                              <span className="font-medium">{selectedResource.duration}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-gray-600">Language:</span>
                            <span className="font-medium">{selectedResource.language}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Publication Details</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Publisher:</span>
                            <span className="font-medium">{selectedResource.publisher}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Year:</span>
                            <span className="font-medium">{selectedResource.year}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Views:</span>
                            <span className="font-medium">{selectedResource.views.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Downloads:</span>
                            <span className="font-medium">{selectedResource.downloads.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedResource.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t">
                      <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium">
                        Access Resource
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Download className="h-4 w-4" />
                        Download
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <BookOpen className="h-4 w-4" />
                        Add to Library
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
