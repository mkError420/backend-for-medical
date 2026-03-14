"use client"

import React, { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Download,
  Share2,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Search,
  Printer,
  FileText,
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Minimize2,
  Settings,
  Eye,
  Bookmark,
  MessageSquare,
  ThumbsUp,
  Copy,
  ExternalLink,
  Info,
  X,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Calendar,
  User,
  Filter,
  Grid,
  List,
  Clock,
  TrendingUp,
  Star
} from "lucide-react"

export default function PDFViewerPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages] = useState(12)
  const [zoom, setZoom] = useState(100)
  const [searchTerm, setSearchTerm] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [selectedPDF, setSelectedPDF] = useState<string | null>("pdf-1")
  const [viewMode, setViewMode] = useState<"table" | "viewer">("table")
  const [filterCategory, setFilterCategory] = useState("all")

  const pdfDocuments = [
    {
      id: "pdf-1",
      title: "Long-term Cardiovascular Complications Post-COVID-19 Infection: A Multi-center Cohort Study",
      authors: "Elizabeth Thompson, Sarah Johnson, Robert Martinez",
      journal: "International Journal of Cardiology",
      volume: "189",
      issue: "3",
      pages: "245-258",
      year: "2024",
      doi: "10.1016/j.ijcard.2024.01.015",
      fileSize: "2.4 MB",
      downloads: 1847,
      citations: 23,
      views: 5234,
      category: "clinical",
      publishedDate: "2024-01-15",
      totalPages: 12,
      featured: true,
      openAccess: true,
      abstract: "This comprehensive multi-center study investigates the long-term cardiovascular complications observed in patients recovered from COVID-19 infection..."
    },
    {
      id: "pdf-2",
      title: "Novel Biomarkers for Early Cancer Detection: Machine Learning Approach",
      authors: "Michael Chen, Linda Brown, Thomas Garcia",
      journal: "Nature Medicine",
      volume: "30",
      issue: "2",
      pages: "167-179",
      year: "2024",
      doi: "10.1038/s41591-024-0123",
      fileSize: "3.8 MB",
      downloads: 2341,
      citations: 31,
      views: 6789,
      category: "basic",
      publishedDate: "2024-02-28",
      totalPages: 18,
      featured: true,
      openAccess: false,
      abstract: "We present a novel machine learning algorithm for early cancer detection using circulating tumor DNA and protein biomarkers..."
    },
    {
      id: "pdf-3",
      title: "Virtual Reality in Medical Education: A Systematic Review and Meta-Analysis",
      authors: "David Kim, Patricia Williams, James Anderson",
      journal: "Medical Education",
      volume: "57",
      issue: "8",
      pages: "892-905",
      year: "2023",
      doi: "10.1111/medu.14567",
      fileSize: "1.9 MB",
      downloads: 1567,
      citations: 18,
      views: 4234,
      category: "education",
      publishedDate: "2023-08-15",
      totalPages: 14,
      featured: false,
      openAccess: true,
      abstract: "This systematic review evaluates the effectiveness of virtual reality (VR) in medical education across various specialties..."
    },
    {
      id: "pdf-4",
      title: "Mental Health Impact on Healthcare Workers: Post-Pandemic Analysis",
      authors: "Amanda Foster, Jennifer Adams",
      journal: "Journal of Occupational Health",
      volume: "65",
      issue: "4",
      pages: "234-248",
      year: "2023",
      doi: "10.1539/joh.2023.0234",
      fileSize: "2.1 MB",
      downloads: 1234,
      citations: 15,
      views: 3456,
      category: "public-health",
      publishedDate: "2023-10-20",
      totalPages: 15,
      featured: false,
      openAccess: true,
      abstract: "Our study examines the persistent mental health effects on healthcare workers following the COVID-19 pandemic..."
    },
    {
      id: "pdf-5",
      title: "AI-Assisted Diagnosis in Radiology: Clinical Validation Study",
      authors: "Lisa Wilson, Mark Davis",
      journal: "Radiology AI",
      volume: "3",
      issue: "1",
      pages: "45-58",
      year: "2023",
      doi: "10.1016/j.radiolai.2023.100123",
      fileSize: "4.2 MB",
      downloads: 1890,
      citations: 22,
      views: 5678,
      category: "technology",
      publishedDate: "2023-12-05",
      totalPages: 20,
      featured: false,
      openAccess: false,
      abstract: "We validate an AI system for radiological diagnosis across multiple imaging modalities..."
    },
    {
      id: "pdf-6",
      title: "Gene Therapy Advances in Rare Diseases: Current Status and Future Prospects",
      authors: "Robinson Miller, Clark Peterson, Lewis Baker",
      journal: "Molecular Therapy",
      volume: "32",
      issue: "5",
      pages: "1234-1250",
      year: "2023",
      doi: "10.1016/j.ymthe.2023.09.012",
      fileSize: "3.5 MB",
      downloads: 987,
      citations: 12,
      views: 2345,
      category: "basic",
      publishedDate: "2023-11-30",
      totalPages: 16,
      featured: false,
      openAccess: true,
      abstract: "This review summarizes recent advances in gene therapy for rare diseases and discusses future directions..."
    },
    {
      id: "pdf-7",
      title: "Robotic Surgery in Complex Cardiac Procedures: Outcomes and Complications",
      authors: "Harris Taylor, White Johnson, Martin Lewis",
      journal: "Annals of Thoracic Surgery",
      volume: "116",
      issue: "2",
      pages: "456-468",
      year: "2023",
      doi: "10.1016/j.athoracsur.2023.04.023",
      fileSize: "2.8 MB",
      downloads: 1456,
      citations: 19,
      views: 3876,
      category: "clinical",
      publishedDate: "2023-09-10",
      totalPages: 13,
      featured: false,
      openAccess: false,
      abstract: "We analyze outcomes and complications of robotic surgery in complex cardiac procedures compared to traditional approaches..."
    },
    {
      id: "pdf-8",
      title: "Digital Health Interventions for Diabetes Management: Systematic Review",
      authors: "Turner Sarah, Baker Rachel, Cooper Diana",
      journal: "Diabetes Technology & Therapeutics",
      volume: "25",
      issue: "8",
      pages: "678-692",
      year: "2023",
      doi: "10.1089/dia.2023.0123",
      fileSize: "2.3 MB",
      downloads: 1123,
      citations: 14,
      views: 2987,
      category: "technology",
      publishedDate: "2023-07-22",
      totalPages: 15,
      featured: false,
      openAccess: true,
      abstract: "This systematic review evaluates the effectiveness of digital health interventions for diabetes management..."
    }
  ]

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "clinical", name: "Clinical Research" },
    { id: "basic", name: "Basic Science" },
    { id: "education", name: "Medical Education" },
    { id: "public-health", name: "Public Health" },
    { id: "technology", name: "Technology" }
  ]

  const currentDocument = pdfDocuments.find(doc => doc.id === selectedPDF) || pdfDocuments[0]

  const filteredPDFs = pdfDocuments.filter(pdf => 
    filterCategory === "all" || pdf.category === filterCategory
  )

  const handleOpenPDF = (pdfId: string) => {
    setSelectedPDF(pdfId)
    setViewMode("viewer")
    setCurrentPage(1)
    setZoom(100)
    setRotation(0)
  }

  const handleBackToTable = () => {
    setViewMode("table")
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 300))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50))
  }

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360)
  }

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, currentDocument.totalPages))
  }

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  // Table View
  if (viewMode === "table") {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="responsive-container-full py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">PDF Document Library</h1>
                <p className="text-gray-600 mt-2">Browse and access research papers and publications</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white border-b border-gray-200">
          <div className="responsive-container-full py-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Category:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={filterCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PDF Table */}
        <div className="responsive-container-full py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Document
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Authors
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Journal
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Published
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stats
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredPDFs.map((pdf) => (
                    <tr key={pdf.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm font-semibold text-gray-900 truncate max-w-md">
                                {pdf.title}
                              </h3>
                              {pdf.featured && (
                                <Badge className="bg-yellow-500 text-white text-xs">
                                  <Star className="w-3 h-3 mr-1" />
                                  Featured
                                </Badge>
                              )}
                              {pdf.openAccess && (
                                <Badge className="bg-green-500 text-white text-xs">
                                  Open Access
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-gray-500 line-clamp-2">
                              {pdf.abstract}
                            </p>
                            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                              <span>{pdf.fileSize}</span>
                              <span>{pdf.totalPages} pages</span>
                              <span>Vol {pdf.volume}, Issue {pdf.issue}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs">
                          {pdf.authors.length > 2 ? 
                            `${pdf.authors.split(', ')[0]} et al.` : 
                            pdf.authors
                          }
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{pdf.journal}</div>
                        <div className="text-xs text-gray-500">{pdf.year}</div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="outline" className="capitalize text-xs">
                          {pdf.category.replace('-', ' ')}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{pdf.publishedDate}</div>
                        <div className="text-xs text-gray-500">DOI: {pdf.doi}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <Download className="w-3 h-3" />
                            <span>{pdf.downloads.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <TrendingUp className="w-3 h-3" />
                            <span>{pdf.citations} citations</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <Eye className="w-3 h-3" />
                            <span>{pdf.views.toLocaleString()} views</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Button 
                            size="sm" 
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => handleOpenPDF(pdf.id)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // PDF Viewer View
  return (
    <div className={`min-h-screen bg-gray-100 ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="responsive-container-full py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={handleBackToTable}>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Library
              </Button>
              <div>
                <h1 className="text-lg font-semibold text-gray-800 line-clamp-1">{currentDocument.title}</h1>
                <p className="text-sm text-gray-600">{currentDocument.authors}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
              <Button variant="outline" size="sm" onClick={toggleFullscreen}>
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200">
        <div className="responsive-container-full py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handlePrevPage} disabled={currentPage === 1}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded">
                <input
                  type="number"
                  value={currentPage}
                  onChange={(e) => setCurrentPage(Math.max(1, Math.min(parseInt(e.target.value) || 1, currentDocument.totalPages)))}
                  className="w-12 text-center bg-transparent border-0 outline-none"
                  min="1"
                  max={currentDocument.totalPages}
                />
                <span className="text-gray-600">/ {currentDocument.totalPages}</span>
              </div>
              
              <Button variant="outline" size="sm" onClick={handleNextPage} disabled={currentPage === currentDocument.totalPages}>
                <ChevronRight className="w-4 h-4" />
              </Button>
              
              <div className="w-px h-6 bg-gray-300 mx-2" />
              
              <Button variant="outline" size="sm" onClick={handleZoomOut}>
                <ZoomOut className="w-4 h-4" />
              </Button>
              
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded">
                <span className="text-sm font-medium">{zoom}%</span>
              </div>
              
              <Button variant="outline" size="sm" onClick={handleZoomIn}>
                <ZoomIn className="w-4 h-4" />
              </Button>
              
              <Button variant="outline" size="sm" onClick={handleRotate}>
                <RotateCw className="w-4 h-4" />
              </Button>
              
              <div className="w-px h-6 bg-gray-300 mx-2" />
              
              <Button variant="outline" size="sm" onClick={() => setShowSearch(!showSearch)}>
                <Search className="w-4 h-4" />
              </Button>
              
              <Button variant="outline" size="sm">
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline">{currentDocument.fileSize}</Badge>
              <Badge variant="outline">{currentDocument.journal}</Badge>
            </div>
          </div>
          
          {showSearch && (
            <div className="mt-3 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search in document..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button variant="outline" size="sm" onClick={() => setShowSearch(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 p-4 hidden lg:block">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Document Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Journal:</span>
                <span className="font-medium">{currentDocument.journal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Volume:</span>
                <span className="font-medium">{currentDocument.volume}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Issue:</span>
                <span className="font-medium">{currentDocument.issue}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pages:</span>
                <span className="font-medium">{currentDocument.pages}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Year:</span>
                <span className="font-medium">{currentDocument.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">DOI:</span>
                <span className="font-medium text-xs">{currentDocument.doi}</span>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Statistics</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Downloads:</span>
                <span className="font-medium">{currentDocument.downloads.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Citations:</span>
                <span className="font-medium">{currentDocument.citations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Views:</span>
                <span className="font-medium">{currentDocument.views.toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <MessageSquare className="w-4 h-4 mr-2" />
                Comment
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Copy className="w-4 h-4 mr-2" />
                Cite
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-8">
          <div className="max-w-4xl w-full">
            <div 
              className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto"
              style={{ 
                transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                transformOrigin: 'center',
                transition: 'transform 0.3s ease'
              }}
            >
              <div className="aspect-[8.5/11] bg-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <FileText className="w-24 h-24 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Page {currentPage}</h3>
                  <p className="text-gray-500">PDF content would be displayed here</p>
                  <div className="mt-8 space-y-4 text-left max-w-2xl mx-auto">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/5"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              <Button variant="outline" size="sm" onClick={handlePrevPage} disabled={currentPage === 1}>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium">
                Page {currentPage} of {currentDocument.totalPages}
              </span>
              <Button variant="outline" size="sm" onClick={handleNextPage} disabled={currentPage === currentDocument.totalPages}>
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
