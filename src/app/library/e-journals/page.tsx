"use client"

import React, { useState, useEffect } from "react"
import { Search, FileText, Filter, Calendar, User, ChevronDown, ChevronUp, Download, Eye, Library, Clock, Award, BarChart3, X, Globe, ExternalLink, Star, TrendingUp, Users, Bookmark, Share2, Volume2, File, Database, BookOpen, FilterIcon, Zap, CheckCircle, AlertCircle, Lock, Unlock } from "lucide-react"

interface Journal {
  id: string
  title: string
  publisher: string
  issn: string
  frequency: string
  category: string
  subcategory: string
  language: string
  access: "free" | "subscription" | "open-access" | "institutional"
  impactFactor: number
  ranking: string
  indexedIn: string[]
  description: string
  latestIssue: {
    volume: string
    issue: string
    date: string
    articles: number
  }
  archive: {
    volumes: number
    years: string
    articles: number
  }
  features: string[]
  website?: string
  submissionGuidelines?: string
  editorialBoard?: string
  peerReview: string
  acceptanceRate: string
  publicationTime: string
  views: number
  citations: number
  bookmarks: number
}

const mockJournals: Journal[] = [
  {
    id: "1",
    title: "Journal of Medical Research and Innovation",
    publisher: "Bangladesh Medical Research Council",
    issn: "2518-596X",
    frequency: "Quarterly",
    category: "General Medicine",
    subcategory: "Medical Research",
    language: "English",
    access: "open-access",
    impactFactor: 2.8,
    ranking: "Q2",
    indexedIn: ["PubMed", "Scopus", "Google Scholar", "DOAJ"],
    description: "Peer-reviewed medical journal covering innovative research in clinical medicine and healthcare delivery.",
    latestIssue: {
      volume: "8",
      issue: "2",
      date: "2024-03-15",
      articles: 12
    },
    archive: {
      volumes: 8,
      years: "2017-2024",
      articles: 342
    },
    features: ["Peer Review", "Open Access", "Rapid Publication", "DOI Assignment"],
    website: "https://jmri.org",
    submissionGuidelines: "https://jmri.org/submissions",
    editorialBoard: "International experts from 15 countries",
    peerReview: "Double-blind",
    acceptanceRate: "25%",
    publicationTime: "6-8 weeks",
    views: 15420,
    citations: 892,
    bookmarks: 445
  },
  {
    id: "2",
    title: "Bangladesh Journal of Medical Sciences",
    publisher: "Bangladesh Medical Association",
    issn: "1994-3573",
    frequency: "Bimonthly",
    category: "Multidisciplinary",
    subcategory: "Medical Sciences",
    language: "English",
    access: "subscription",
    impactFactor: 1.9,
    ranking: "Q3",
    indexedIn: ["PubMed Central", "Scopus", "Google Scholar"],
    description: "Comprehensive medical journal covering all aspects of medical sciences and clinical practice.",
    latestIssue: {
      volume: "23",
      issue: "1",
      date: "2024-01-20",
      articles: 15
    },
    archive: {
      volumes: 23,
      years: "2002-2024",
      articles: 890
    },
    features: ["Peer Review", "Indexed", "Print & Online", "Archived"],
    website: "https://bjms.org",
    peerReview: "Single-blind",
    acceptanceRate: "30%",
    publicationTime: "8-10 weeks",
    views: 12350,
    citations: 654,
    bookmarks: 321
  },
  {
    id: "3",
    title: "Journal of Surgical Education",
    publisher: "Surgical Education Society of Bangladesh",
    issn: "2708-4756",
    frequency: "Monthly",
    category: "Surgery",
    subcategory: "Surgical Education",
    language: "English",
    access: "open-access",
    impactFactor: 3.2,
    ranking: "Q1",
    indexedIn: ["PubMed", "Scopus", "Web of Science", "Google Scholar"],
    description: "Focus on surgical education, training methodologies, and innovative surgical techniques.",
    latestIssue: {
      volume: "5",
      issue: "3",
      date: "2024-03-10",
      articles: 8
    },
    archive: {
      volumes: 5,
      years: "2020-2024",
      articles: 156
    },
    features: ["Open Access", "Rapid Review", "Video Abstracts", "CME Credits"],
    website: "https://jseb.org",
    peerReview: "Double-blind",
    acceptanceRate: "20%",
    publicationTime: "4-6 weeks",
    views: 8900,
    citations: 445,
    bookmarks: 234
  },
  {
    id: "4",
    title: "International Journal of Tropical Medicine",
    publisher: "Tropical Medicine Research Institute",
    issn: "2518-5902",
    frequency: "Quarterly",
    category: "Tropical Medicine",
    subcategory: "Infectious Diseases",
    language: "English",
    access: "institutional",
    impactFactor: 2.1,
    ranking: "Q3",
    indexedIn: ["PubMed", "Scopus", "Google Scholar"],
    description: "Dedicated to research in tropical diseases, epidemiology, and public health in tropical regions.",
    latestIssue: {
      volume: "12",
      issue: "1",
      date: "2024-02-28",
      articles: 10
    },
    archive: {
      volumes: 12,
      years: "2013-2024",
      articles: 445
    },
    features: ["Institutional Access", "Peer Review", "Special Issues", "Conference Proceedings"],
    website: "https://ijtm.org",
    peerReview: "Single-blind",
    acceptanceRate: "35%",
    publicationTime: "10-12 weeks",
    views: 6780,
    citations: 334,
    bookmarks: 189
  },
  {
    id: "5",
    title: "Journal of Medical Informatics and Digital Health",
    publisher: "Digital Health Research Center",
    issn: "2773-3451",
    frequency: "Bimonthly",
    category: "Medical Informatics",
    subcategory: "Digital Health",
    language: "English",
    access: "open-access",
    impactFactor: 4.1,
    ranking: "Q1",
    indexedIn: ["PubMed", "Scopus", "Web of Science", "IEEE Xplore"],
    description: "Cutting-edge research in medical informatics, telemedicine, AI in healthcare, and digital health technologies.",
    latestIssue: {
      volume: "3",
      issue: "2",
      date: "2024-03-20",
      articles: 14
    },
    archive: {
      volumes: 3,
      years: "2022-2024",
      articles: 78
    },
    features: ["Open Access", "Fast Track", "Data Papers", "Software Tools"],
    website: "https://jmidh.org",
    peerReview: "Double-blind",
    acceptanceRate: "15%",
    publicationTime: "3-4 weeks",
    views: 12450,
    citations: 567,
    bookmarks: 378
  }
]

const categories = [
  "All Categories",
  "General Medicine",
  "Surgery",
  "Pediatrics",
  "Obstetrics & Gynecology",
  "Anatomy",
  "Physiology",
  "Biochemistry",
  "Pathology",
  "Pharmacology",
  "Microbiology",
  "Community Medicine",
  "Psychiatry",
  "Dermatology",
  "Radiology",
  "Anesthesiology",
  "Tropical Medicine",
  "Medical Informatics",
  "Multidisciplinary"
]

const accessLevels = ["All Access", "Free", "Open Access", "Subscription", "Institutional"]
const frequencies = ["All Frequencies", "Monthly", "Bimonthly", "Quarterly", "Semi-annual", "Annual"]
const sortOptions = [
  { value: "title", label: "Title" },
  { value: "impactFactor", label: "Impact Factor" },
  { value: "views", label: "Most Viewed" },
  { value: "citations", label: "Most Cited" },
  { value: "latest", label: "Latest Issue" }
]

export default function EJournalsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedAccess, setSelectedAccess] = useState("All Access")
  const [selectedFrequency, setSelectedFrequency] = useState("All Frequencies")
  const [sortBy, setSortBy] = useState("title")
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [journalsPerPage] = useState(12)
  const [selectedJournal, setSelectedJournal] = useState<Journal | null>(null)
  const [showJournalDetails, setShowJournalDetails] = useState(false)
  const [filteredJournals, setFilteredJournals] = useState<Journal[]>(mockJournals)

  useEffect(() => {
    let filtered = mockJournals.filter(journal => {
      const matchesSearch = journal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           journal.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           journal.issn.includes(searchTerm) ||
                           journal.indexedIn.some(index => index.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === "All Categories" || journal.category === selectedCategory
      const matchesAccess = selectedAccess === "All Access" || 
                           (selectedAccess === "Free" && journal.access === "free") ||
                           (selectedAccess === "Open Access" && journal.access === "open-access") ||
                           (selectedAccess === "Subscription" && journal.access === "subscription") ||
                           (selectedAccess === "Institutional" && journal.access === "institutional")
      const matchesFrequency = selectedFrequency === "All Frequencies" || journal.frequency === selectedFrequency

      return matchesSearch && matchesCategory && matchesAccess && matchesFrequency
    })

    // Sort journals
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title)
        case "impactFactor":
          return b.impactFactor - a.impactFactor
        case "views":
          return b.views - a.views
        case "citations":
          return b.citations - a.citations
        case "latest":
          return new Date(b.latestIssue.date).getTime() - new Date(a.latestIssue.date).getTime()
        default:
          return 0
      }
    })

    setFilteredJournals(filtered)
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, selectedAccess, selectedFrequency, sortBy])

  const indexOfLastJournal = currentPage * journalsPerPage
  const indexOfFirstJournal = indexOfLastJournal - journalsPerPage
  const currentJournals = filteredJournals.slice(indexOfFirstJournal, indexOfLastJournal)
  const totalPages = Math.ceil(filteredJournals.length / journalsPerPage)

  const getAccessColor = (access: string) => {
    switch (access) {
      case "free":
        return "bg-green-100 text-green-800 border-green-200"
      case "open-access":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "subscription":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "institutional":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getAccessIcon = (access: string) => {
    switch (access) {
      case "free":
        return <Unlock className="h-3 w-3" />
      case "open-access":
        return <Globe className="h-3 w-3" />
      case "subscription":
        return <Lock className="h-3 w-3" />
      case "institutional":
        return <Database className="h-3 w-3" />
      default:
        return <FileText className="h-3 w-3" />
    }
  }

  const getRankingColor = (ranking: string) => {
    switch (ranking) {
      case "Q1":
        return "bg-green-100 text-green-800 border-green-200"
      case "Q2":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Q3":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Q4":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const handleJournalClick = (journal: Journal) => {
    setSelectedJournal(journal)
    setShowJournalDetails(true)
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
                <FileText className="h-12 w-12 text-indigo-600" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">E-Journals</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Access to premier medical journals and publications for research and academic excellence
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-indigo-600 font-semibold">
                <FileText className="h-4 w-4" />
                <span className="text-xl">{mockJournals.length}</span>
              </div>
              <p className="text-xs text-gray-600">Total Journals</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                <Globe className="h-4 w-4" />
                <span className="text-xl">{mockJournals.filter(j => j.access === 'open-access').length}</span>
              </div>
              <p className="text-xs text-gray-600">Open Access</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-yellow-600 font-semibold">
                <Star className="h-4 w-4" />
                <span className="text-xl">{mockJournals.filter(j => j.impactFactor > 2).length}</span>
              </div>
              <p className="text-xs text-gray-600">High Impact</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold">
                <BookOpen className="h-4 w-4" />
                <span className="text-xl">{mockJournals.reduce((sum, j) => sum + j.archive.articles, 0).toLocaleString()}</span>
              </div>
              <p className="text-xs text-gray-600">Total Articles</p>
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
                  placeholder="Search journals by title, publisher, ISSN, or indexing..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    {accessLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
                  <select
                    value={selectedFrequency}
                    onChange={(e) => setSelectedFrequency(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    {frequencies.map(frequency => (
                      <option key={frequency} value={frequency}>{frequency}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                      setSelectedAccess("All Access")
                      setSelectedFrequency("All Frequencies")
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
                  Medical Journals ({filteredJournals.length} journals found)
                </h2>
                <div className="text-sm text-gray-600">
                  Showing {indexOfFirstJournal + 1}-{Math.min(indexOfLastJournal, filteredJournals.length)} of {filteredJournals.length}
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {currentJournals.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                  {currentJournals.map((journal) => (
                    <div
                      key={journal.id}
                      className="bg-white border rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      onClick={() => handleJournalClick(journal)}
                    >
                      {/* Journal Header */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                              {journal.title}
                            </h3>
                            <p className="text-gray-600 mb-2">{journal.publisher}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <span className="font-mono bg-gray-100 px-2 py-1 rounded">ISSN: {journal.issn}</span>
                              <span className="bg-gray-100 px-2 py-1 rounded">{journal.frequency}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2 ml-4">
                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getAccessColor(journal.access)}`}>
                              {getAccessIcon(journal.access)}
                              {journal.access === "open-access" ? "Open Access" : 
                               journal.access.charAt(0).toUpperCase() + journal.access.slice(1)}
                            </span>
                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getRankingColor(journal.ranking)}`}>
                              <Star className="h-3 w-3" />
                              {journal.ranking}
                            </span>
                          </div>
                        </div>

                        {/* Journal Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-indigo-600">{journal.impactFactor}</div>
                            <div className="text-xs text-gray-600">Impact Factor</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-green-600">{journal.latestIssue.articles}</div>
                            <div className="text-xs text-gray-600">Latest Articles</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-purple-600">{journal.archive.volumes}</div>
                            <div className="text-xs text-gray-600">Volumes</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-orange-600">{journal.views.toLocaleString()}</div>
                            <div className="text-xs text-gray-600">Views</div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{journal.description}</p>

                        {/* Indexing */}
                        <div className="mb-4">
                          <div className="text-xs text-gray-600 mb-2">Indexed in:</div>
                          <div className="flex flex-wrap gap-1">
                            {journal.indexedIn.slice(0, 3).map((index, idx) => (
                              <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                {index}
                              </span>
                            ))}
                            {journal.indexedIn.length > 3 && (
                              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                +{journal.indexedIn.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Latest Issue */}
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="text-sm text-gray-600">
                            <div className="font-medium">Latest Issue</div>
                            <div>Vol {journal.latestIssue.volume}, Issue {journal.latestIssue.issue}</div>
                            <div>{new Date(journal.latestIssue.date).toLocaleDateString()}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                // Handle journal access
                              }}
                              className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                            >
                              Access Journal
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                // Handle bookmark
                              }}
                              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <Bookmark className="h-4 w-4 text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-16 text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No journals found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("All Categories")
                      setSelectedAccess("All Access")
                      setSelectedFrequency("All Frequencies")
                      setSortBy("title")
                    }}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
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
                              ? "bg-indigo-600 text-white border-indigo-600"
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

      {/* Journal Details Modal */}
      {showJournalDetails && selectedJournal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Journal Details</h2>
                <button
                  onClick={() => setShowJournalDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Journal Header */}
                <div className="border-b pb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedJournal.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">{selectedJournal.publisher}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-mono bg-gray-100 px-3 py-1 rounded">ISSN: {selectedJournal.issn}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded">{selectedJournal.frequency}</span>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getAccessColor(selectedJournal.access)}`}>
                      {getAccessIcon(selectedJournal.access)}
                      {selectedJournal.access === "open-access" ? "Open Access" : 
                       selectedJournal.access.charAt(0).toUpperCase() + selectedJournal.access.slice(1)}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getRankingColor(selectedJournal.ranking)}`}>
                      <Star className="h-4 w-4" />
                      {selectedJournal.ranking}
                    </span>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-indigo-50 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600">{selectedJournal.impactFactor}</div>
                    <div className="text-sm text-gray-600">Impact Factor</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{selectedJournal.acceptanceRate}</div>
                    <div className="text-sm text-gray-600">Acceptance Rate</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{selectedJournal.publicationTime}</div>
                    <div className="text-sm text-gray-600">Publication Time</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{selectedJournal.citations.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Citations</div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">About this Journal</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedJournal.description}</p>
                </div>

                {/* Latest Issue */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Latest Issue</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium text-gray-900 mb-2">
                        Volume {selectedJournal.latestIssue.volume}, Issue {selectedJournal.latestIssue.issue}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        Published: {new Date(selectedJournal.latestIssue.date).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-600">
                        {selectedJournal.latestIssue.articles} articles in this issue
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Archive</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Volumes:</span>
                          <span className="font-medium">{selectedJournal.archive.volumes}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Years:</span>
                          <span className="font-medium">{selectedJournal.archive.years}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Articles:</span>
                          <span className="font-medium">{selectedJournal.archive.articles.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indexing */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Indexing & Archiving</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJournal.indexedIn.map((index, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
                        {index}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Journal Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedJournal.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t">
                  <button className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                    Access Journal
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
