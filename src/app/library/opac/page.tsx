"use client"

import React, { useState, useEffect } from "react"
import { Search, Book, Filter, Calendar, User, FileText, ChevronDown, ChevronUp, Download, Eye, Library, Clock, Award, BarChart3, X } from "lucide-react"

interface BookItem {
  id: string
  title: string
  author: string
  publisher: string
  year: string
  isbn: string
  category: string
  subcategory: string
  status: "available" | "issued" | "reserved"
  location: string
  accessionNo: string
  edition: string
  pages: string
  language: string
  description?: string
}

const mockBooks: BookItem[] = [
  {
    id: "1",
    title: "Gray's Anatomy",
    author: "Henry Gray",
    publisher: "Elsevier",
    year: "2021",
    isbn: "978-0702077050",
    category: "Anatomy",
    subcategory: "Gross Anatomy",
    status: "available",
    location: "Section A, Shelf 1",
    accessionNo: "ACC-001",
    edition: "42nd Edition",
    pages: "1584",
    language: "English",
    description: "The classic anatomical textbook with detailed illustrations and comprehensive coverage of human anatomy."
  },
  {
    id: "2",
    title: "Harrison's Principles of Internal Medicine",
    author: " Dennis L. Kasper, Anthony S. Fauci",
    publisher: "McGraw-Hill Education",
    year: "2022",
    isbn: "978-1264268509",
    category: "Medicine",
    subcategory: "Internal Medicine",
    status: "issued",
    location: "Section B, Shelf 3",
    accessionNo: "ACC-002",
    edition: "21st Edition",
    pages: "1984",
    language: "English",
    description: "Comprehensive reference for internal medicine covering all major diseases and conditions."
  },
  {
    id: "3",
    title: "Guyton and Hall Textbook of Medical Physiology",
    author: "John E. Hall",
    publisher: "Elsevier",
    year: "2021",
    isbn: "978-0323594525",
    category: "Physiology",
    subcategory: "Medical Physiology",
    status: "available",
    location: "Section C, Shelf 2",
    accessionNo: "ACC-003",
    edition: "14th Edition",
    pages: "1152",
    language: "English",
    description: "Detailed explanation of physiological concepts and mechanisms in human body."
  },
  {
    id: "4",
    title: "Robbins Basic Pathology",
    author: "Vinay Kumar, Abul K. Abbas, Jon C. Aster",
    publisher: "Elsevier",
    year: "2022",
    isbn: "978-0323673355",
    category: "Pathology",
    subcategory: "General Pathology",
    status: "reserved",
    location: "Section D, Shelf 1",
    accessionNo: "ACC-004",
    edition: "11th Edition",
    pages: "960",
    language: "English",
    description: "Fundamental concepts of pathology with clinical correlations."
  },
  {
    id: "5",
    title: "Goodman & Gilman's The Pharmacological Basis of Therapeutics",
    author: "Laurence L. Brunton, Randa Hilal-Dandan, Bjorn C. Knollmann",
    publisher: "McGraw-Hill Education",
    year: "2023",
    isbn: "978-1264674325",
    category: "Pharmacology",
    subcategory: "Medical Pharmacology",
    status: "available",
    location: "Section E, Shelf 2",
    accessionNo: "ACC-005",
    edition: "14th Edition",
    pages: "1376",
    language: "English",
    description: "Comprehensive pharmacology textbook covering mechanisms of drug action and therapeutic applications."
  }
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
  "Anesthesiology"
]

const languages = ["All Languages", "English", "Bangla", "Hindi", "Urdu"]
const publicationYears = ["All Years", "2024", "2023", "2022", "2021", "2020", "2019", "2018"]

export default function LibraryOPAC() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedLanguage, setSelectedLanguage] = useState("All Languages")
  const [selectedYear, setSelectedYear] = useState("All Years")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [sortBy, setSortBy] = useState("title")
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [booksPerPage] = useState(10)
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null)
  const [showBookDetails, setShowBookDetails] = useState(false)
  const [filteredBooks, setFilteredBooks] = useState<BookItem[]>(mockBooks)

  useEffect(() => {
    let filtered = mockBooks.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.isbn.includes(searchTerm) ||
                           book.accessionNo.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === "All Categories" || book.category === selectedCategory
      const matchesLanguage = selectedLanguage === "All Languages" || book.language === selectedLanguage
      const matchesYear = selectedYear === "All Years" || book.year === selectedYear
      const matchesStatus = selectedStatus === "all" || book.status === selectedStatus

      return matchesSearch && matchesCategory && matchesLanguage && matchesYear && matchesStatus
    })

    // Sort books
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title)
        case "author":
          return a.author.localeCompare(b.author)
        case "year":
          return b.year.localeCompare(a.year)
        case "category":
          return a.category.localeCompare(b.category)
        default:
          return 0
      }
    })

    setFilteredBooks(filtered)
    setCurrentPage(1)
  }, [searchTerm, selectedCategory, selectedLanguage, selectedYear, selectedStatus, sortBy])

  const indexOfLastBook = currentPage * booksPerPage
  const indexOfFirstBook = indexOfLastBook - booksPerPage
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook)
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800 border-green-200"
      case "issued":
        return "bg-red-100 text-red-800 border-red-200"
      case "reserved":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "available":
        return <Book className="h-3 w-3" />
      case "issued":
        return <User className="h-3 w-3" />
      case "reserved":
        return <Clock className="h-3 w-3" />
      default:
        return <Book className="h-3 w-3" />
    }
  }

  const handleBookClick = (book: BookItem) => {
    setSelectedBook(book)
    setShowBookDetails(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#FBFCFC] text-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Library className="h-12 w-12" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Library OPAC</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Online Public Access Catalog - Search and explore our extensive collection of medical books and resources
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                <Book className="h-4 w-4" />
                <span className="text-xl">{mockBooks.length}</span>
              </div>
              <p className="text-xs text-gray-600">Total Books</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                <Book className="h-4 w-4" />
                <span className="text-xl">{mockBooks.filter(b => b.status === 'available').length}</span>
              </div>
              <p className="text-xs text-gray-600">Available</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
                <User className="h-4 w-4" />
                <span className="text-xl">{mockBooks.filter(b => b.status === 'issued').length}</span>
              </div>
              <p className="text-xs text-gray-600">Issued</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-yellow-600 font-semibold">
                <Clock className="h-4 w-4" />
                <span className="text-xl">{mockBooks.filter(b => b.status === 'reserved').length}</span>
              </div>
              <p className="text-xs text-gray-600">Reserved</p>
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
                  placeholder="Search by title, author, ISBN, or accession number..."
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {languages.map(language => (
                      <option key={language} value={language}>{language}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Publication Year</label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {publicationYears.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="available">Available</option>
                    <option value="issued">Issued</option>
                    <option value="reserved">Reserved</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="year">Year</option>
                    <option value="category">Category</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Search Results ({filteredBooks.length} books found)
              </h2>
              <div className="text-sm text-gray-600">
                Showing {indexOfFirstBook + 1}-{Math.min(indexOfLastBook, filteredBooks.length)} of {filteredBooks.length}
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {currentBooks.length > 0 ? (
              currentBooks.map((book) => (
                <div
                  key={book.id}
                  className="p-6 hover:bg-gray-50 cursor-pointer transition-colors border-l-4 border-transparent hover:border-blue-500"
                  onClick={() => handleBookClick(book)}
                >
                  <div className="flex gap-6">
                    {/* Book Cover */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-20 h-28 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-sm flex items-center justify-center border border-blue-200">
                          <Book className="h-10 w-10 text-blue-600" />
                        </div>
                        <div className="absolute -top-2 -right-2">
                          <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold border ${getStatusColor(book.status)}`}>
                            {book.status === "available" ? "✓" : book.status === "issued" ? "!" : "⏰"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Book Information */}
                    <div className="flex-1 min-w-0">
                      {/* Title and Status */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                        <div className="min-w-0">
                          <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">{book.title}</h3>
                          <p className="text-gray-600 font-medium">by {book.author}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(book.status)}`}>
                            {getStatusIcon(book.status)}
                            {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                          </span>
                        </div>
                      </div>

                      {/* Key Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Category</p>
                            <p className="text-gray-700 font-medium">{book.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Calendar className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Published</p>
                            <p className="text-gray-700 font-medium">{book.year}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Award className="h-4 w-4 text-purple-600" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Edition</p>
                            <p className="text-gray-700 font-medium">{book.edition}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Library className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Location</p>
                            <p className="text-gray-700 font-medium">{book.location}</p>
                          </div>
                        </div>
                      </div>

                      {/* Additional Details */}
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded font-mono">ISBN: {book.isbn}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">ACC: {book.accessionNo}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{book.pages} pages</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{book.language}</span>
                        </div>
                      </div>

                      {/* Description */}
                      {book.description && (
                        <div className="border-t pt-3">
                          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{book.description}</p>
                        </div>
                      )}

                      {/* Action Button */}
                      <div className="flex items-center justify-between mt-4 pt-3 border-t">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Eye className="h-3 w-3" />
                          Click to view details
                        </div>
                        {book.status === "available" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              // Handle reserve action
                            }}
                            className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Reserve Book
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-16 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No books found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All Categories")
                    setSelectedLanguage("All Languages")
                    setSelectedYear("All Years")
                    setSelectedStatus("all")
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

      {/* Book Details Modal */}
      {showBookDetails && selectedBook && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Book Details</h2>
                <button
                  onClick={() => setShowBookDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="w-full h-48 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Book className="h-16 w-16 text-blue-600" />
                  </div>
                  <div className="mt-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium border ${getStatusColor(selectedBook.status)}`}>
                      {getStatusIcon(selectedBook.status)}
                      {selectedBook.status.charAt(0).toUpperCase() + selectedBook.status.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedBook.title}</h3>
                      <p className="text-gray-600">by {selectedBook.author}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Publication Details</h4>
                        <div className="space-y-1 text-sm">
                          <p><span className="font-medium">Publisher:</span> {selectedBook.publisher}</p>
                          <p><span className="font-medium">Year:</span> {selectedBook.year}</p>
                          <p><span className="font-medium">Edition:</span> {selectedBook.edition}</p>
                          <p><span className="font-medium">Pages:</span> {selectedBook.pages}</p>
                          <p><span className="font-medium">Language:</span> {selectedBook.language}</p>
                          <p><span className="font-medium">ISBN:</span> {selectedBook.isbn}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Library Information</h4>
                        <div className="space-y-1 text-sm">
                          <p><span className="font-medium">Accession No:</span> {selectedBook.accessionNo}</p>
                          <p><span className="font-medium">Category:</span> {selectedBook.category}</p>
                          <p><span className="font-medium">Subcategory:</span> {selectedBook.subcategory}</p>
                          <p><span className="font-medium">Location:</span> {selectedBook.location}</p>
                          <p><span className="font-medium">Status:</span> {selectedBook.status}</p>
                        </div>
                      </div>
                    </div>

                    {selectedBook.description && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                        <p className="text-gray-600 text-sm">{selectedBook.description}</p>
                      </div>
                    )}

                    <div className="flex gap-3 pt-4">
                      {selectedBook.status === "available" && (
                        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                          Reserve Book
                        </button>
                      )}
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Download className="h-4 w-4" />
                        Download Details
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
