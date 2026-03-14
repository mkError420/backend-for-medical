"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar,
  Download,
  Search,
  Filter,
  FileText,
  BookOpen,
  Archive,
  Clock,
  Eye,
  Share2,
  ChevronDown,
  ChevronUp,
  Users,
  Globe,
  TrendingUp,
  Award,
  Star,
  Volume2,
  Hash,
  ExternalLink
} from "lucide-react"

export default function JournalArchivePage() {
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedVolume, setSelectedVolume] = useState("all")
  const [expandedIssue, setExpandedIssue] = useState<string | null>(null)

  const archiveInfo = {
    name: "Journal Archive",
    tagline: "Comprehensive collection of medical research publications",
    description: "Access our complete archive of medical journals, research papers, and academic publications spanning over two decades of medical excellence."
  }

  const years = [
    { id: "all", name: "All Years" },
    { id: "2024", name: "2024" },
    { id: "2023", name: "2023" },
    { id: "2022", name: "2022" },
    { id: "2021", name: "2021" },
    { id: "2020", name: "2020" },
    { id: "2019", name: "2019" },
    { id: "2018", name: "2018" }
  ]

  const volumes = [
    { id: "all", name: "All Volumes" },
    { id: "25", name: "Volume 25 (2024)" },
    { id: "24", name: "Volume 24 (2023)" },
    { id: "23", name: "Volume 23 (2022)" },
    { id: "22", name: "Volume 22 (2021)" },
    { id: "21", name: "Volume 21 (2020)" },
    { id: "20", name: "Volume 20 (2019)" },
    { id: "19", name: "Volume 19 (2018)" }
  ]

  const archiveIssues = [
    {
      id: "2024-v25-i1",
      year: "2024",
      volume: "25",
      issue: "1",
      title: "Volume 25, Issue 1 (January-March 2024)",
      publicationDate: "March 31, 2024",
      articles: 12,
      pages: 245,
      downloads: 1847,
      citationCount: 89,
      featured: true,
      description: "Special issue on COVID-19 long-term effects and post-pandemic healthcare challenges.",
      articlesList: [
        {
          title: "Long-term Cardiovascular Complications Post-COVID-19 Infection",
          authors: "Thompson E, Johnson S, Martinez R",
          pages: "1-15",
          citations: 23,
          downloads: 342
        },
        {
          title: "Mental Health Impact on Healthcare Workers During Pandemic Recovery",
          authors: "Williams P, Anderson J, Foster A",
          pages: "16-28",
          citations: 18,
          downloads: 289
        },
        {
          title: "Novel Biomarkers for Early Cancer Detection",
          authors: "Chen M, Brown L, Garcia T",
          pages: "29-45",
          citations: 31,
          downloads: 412
        }
      ]
    },
    {
      id: "2024-v25-i2",
      year: "2024",
      volume: "25",
      issue: "2",
      title: "Volume 25, Issue 2 (April-June 2024)",
      publicationDate: "June 30, 2024",
      articles: 10,
      pages: 198,
      downloads: 1523,
      citationCount: 67,
      featured: false,
      description: "Focus on medical education innovations and digital health technologies.",
      articlesList: [
        {
          title: "Virtual Reality in Medical Education: A Comprehensive Review",
          authors: "Kim D, Wilson F, Davis R",
          pages: "1-18",
          citations: 15,
          downloads: 267
        },
        {
          title: "AI-Assisted Diagnosis in Radiology",
          authors: "Lee J, Miller K, Taylor S",
          pages: "19-32",
          citations: 22,
          downloads: 356
        }
      ]
    },
    {
      id: "2023-v24-i4",
      year: "2023",
      volume: "24",
      issue: "4",
      title: "Volume 24, Issue 4 (October-December 2023)",
      publicationDate: "December 31, 2023",
      articles: 8,
      pages: 167,
      downloads: 1234,
      citationCount: 45,
      featured: false,
      description: "Year-end special on breakthrough medical discoveries.",
      articlesList: [
        {
          title: "Gene Therapy Advances in Rare Diseases",
          authors: "Robinson M, Clark P, Lewis B",
          pages: "1-20",
          citations: 19,
          downloads: 298
        }
      ]
    },
    {
      id: "2023-v24-i3",
      year: "2023",
      volume: "24",
      issue: "3",
      title: "Volume 24, Issue 3 (July-September 2023)",
      publicationDate: "September 30, 2023",
      articles: 11,
      pages: 212,
      downloads: 1456,
      citationCount: 78,
      featured: false,
      description: "Focus on surgical innovations and minimally invasive procedures.",
      articlesList: [
        {
          title: "Robotic Surgery in Complex Cardiac Procedures",
          authors: "Harris T, White J, Martin L",
          pages: "1-25",
          citations: 28,
          downloads: 387
        }
      ]
    },
    {
      id: "2022-v23-i2",
      year: "2022",
      volume: "23",
      issue: "2",
      title: "Volume 23, Issue 2 (April-June 2022)",
      publicationDate: "June 30, 2022",
      articles: 9,
      pages: 189,
      downloads: 987,
      citationCount: 34,
      featured: false,
      description: "Special issue on tropical medicine and infectious diseases.",
      articlesList: [
        {
          title: "Emerging Vector-Borne Diseases in Southeast Asia",
          authors: "Turner S, Baker R, Cooper D",
          pages: "1-22",
          citations: 12,
          downloads: 234
        }
      ]
    }
  ]

  const filteredIssues = archiveIssues.filter(issue => {
    const yearMatch = selectedYear === "all" || issue.year === selectedYear
    const volumeMatch = selectedVolume === "all" || issue.volume === selectedVolume
    return yearMatch && volumeMatch
  })

  const toggleIssue = (issueId: string) => {
    setExpandedIssue(expandedIssue === issueId ? null : issueId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="text-center text-gray-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Archive className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-700">{archiveInfo.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90 text-gray-600">
                {archiveInfo.tagline}
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {archiveInfo.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">25+</div>
                <div className="text-lg font-semibold text-gray-600">Volumes</div>
                <div className="text-sm text-gray-500">Since 1998</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
                <div className="text-lg font-semibold text-gray-600">Articles</div>
                <div className="text-sm text-gray-500">Peer-reviewed</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">50K+</div>
                <div className="text-lg font-semibold text-gray-600">Downloads</div>
                <div className="text-sm text-gray-500">This year</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">2000+</div>
                <div className="text-lg font-semibold text-gray-600">Citations</div>
                <div className="text-sm text-gray-500">Total impact</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Year</label>
                <div className="flex flex-wrap gap-2">
                  {years.map((year) => (
                    <Button
                      key={year.id}
                      variant={selectedYear === year.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedYear(year.id)}
                    >
                      {year.name}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Volume</label>
                <div className="flex flex-wrap gap-2">
                  {volumes.map((volume) => (
                    <Button
                      key={volume.id}
                      variant={selectedVolume === volume.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedVolume(volume.id)}
                    >
                      {volume.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Archive Issues */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Journal Issues</h2>
          <div className="space-y-6">
            {filteredIssues.map((issue) => (
              <Card key={issue.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleIssue(issue.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Volume2 className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{issue.title}</h3>
                        <p className="text-gray-600">{issue.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{issue.publicationDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            <span>{issue.articles} articles</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Hash className="w-4 h-4" />
                            <span>{issue.pages} pages</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {issue.featured && (
                        <Badge className="bg-yellow-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Download className="w-4 h-4" />
                          <span>{issue.downloads.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <TrendingUp className="w-4 h-4" />
                          <span>{issue.citationCount} citations</span>
                        </div>
                      </div>
                      {expandedIssue === issue.id ? 
                        <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      }
                    </div>
                  </div>
                </CardHeader>
                
                {expandedIssue === issue.id && (
                  <CardContent className="p-6 border-t border-gray-200">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-gray-800">Articles in this Issue</h4>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {issue.articlesList.map((article, index) => (
                          <Card key={index} className="border-0 bg-gray-50 hover:bg-gray-100 transition-colors">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h5 className="font-semibold text-gray-800 mb-1">{article.title}</h5>
                                  <p className="text-sm text-gray-600 mb-2">{article.authors}</p>
                                  <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <span>Pages {article.pages}</span>
                                    <div className="flex items-center gap-1">
                                      <TrendingUp className="w-3 h-3" />
                                      <span>{article.citations} citations</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Download className="w-3 h-3" />
                                      <span>{article.downloads} downloads</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button size="sm" variant="outline">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <Download className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Current Issue</h3>
                <p className="text-gray-600 mb-4">Access the latest published issue</p>
                <Button variant="outline">View Now</Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Most Cited</h3>
                <p className="text-gray-600 mb-4">Browse our most influential articles</p>
                <Button variant="outline">Browse</Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Search Archive</h3>
                <p className="text-gray-600 mb-4">Search through all publications</p>
                <Button variant="outline">Search</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
