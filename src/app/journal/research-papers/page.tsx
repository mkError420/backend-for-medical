"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Search,
  Filter,
  FileText,
  Download,
  Eye,
  Share2,
  Calendar,
  Users,
  TrendingUp,
  Star,
  Award,
  BookOpen,
  Globe,
  ExternalLink,
  Heart,
  MessageSquare,
  Quote,
  ChevronDown,
  ChevronUp,
  Tag,
  User,
  Clock,
  BarChart,
  ThumbsUp
} from "lucide-react"

export default function ResearchPapersPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [expandedPaper, setExpandedPaper] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const papersInfo = {
    name: "Research Papers",
    tagline: "Cutting-edge medical research and scientific discoveries",
    description: "Explore our comprehensive collection of peer-reviewed research papers covering all aspects of medical science, from clinical trials to basic science research."
  }

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "clinical", name: "Clinical Research" },
    { id: "basic", name: "Basic Science" },
    { id: "education", name: "Medical Education" },
    { id: "public-health", name: "Public Health" },
    { id: "technology", name: "Medical Technology" },
    { id: "pharmacology", name: "Pharmacology" }
  ]

  const years = [
    { id: "all", name: "All Years" },
    { id: "2024", name: "2024" },
    { id: "2023", name: "2023" },
    { id: "2022", name: "2022" },
    { id: "2021", name: "2021" }
  ]

  const researchPapers = [
    {
      id: "1",
      title: "Long-term Cardiovascular Complications Post-COVID-19 Infection: A Multi-center Cohort Study",
      authors: [
        { name: "Dr. Elizabeth Thompson", affiliation: "Department of Cardiology", orcid: "0000-0001-2345-6789" },
        { name: "Dr. Sarah Johnson", affiliation: "Department of Internal Medicine", orcid: "0000-0002-3456-7890" },
        { name: "Dr. Robert Martinez", affiliation: "Department of Epidemiology", orcid: "0000-0003-4567-8901" }
      ],
      category: "clinical",
      year: "2024",
      journal: "International Journal of Cardiology",
      volume: "189",
      issue: "3",
      pages: "245-258",
      doi: "10.1016/j.ijcard.2024.01.015",
      abstract: "This comprehensive multi-center study investigates the long-term cardiovascular complications observed in patients recovered from COVID-19 infection. Our findings suggest significant increases in myocarditis, pericarditis, and arrhythmias up to 12 months post-infection.",
      keywords: ["COVID-19", "Cardiovascular", "Long-term effects", "Multi-center study"],
      citations: 23,
      downloads: 1847,
      views: 5234,
      impactFactor: "12.5",
      featured: true,
      openAccess: true,
      publishedDate: "2024-01-15",
      methodology: "Prospective cohort study with 2,500 patients across 15 medical centers",
      conclusions: "COVID-19 survivors require long-term cardiovascular monitoring and follow-up care",
      funding: "National Institutes of Health (NIH) Grant #HL123456",
      conflicts: "No conflicts of interest declared"
    },
    {
      id: "2",
      title: "Novel Biomarkers for Early Cancer Detection: Machine Learning Approach",
      authors: [
        { name: "Dr. Michael Chen", affiliation: "Department of Oncology", orcid: "0000-0004-5678-9012" },
        { name: "Dr. Linda Brown", affiliation: "Department of Pathology", orcid: "0000-0005-6789-0123" },
        { name: "Dr. Thomas Garcia", affiliation: "Department of Bioinformatics", orcid: "0000-0006-7890-1234" }
      ],
      category: "basic",
      year: "2024",
      journal: "Nature Medicine",
      volume: "30",
      issue: "2",
      pages: "167-179",
      doi: "10.1038/s41591-024-0123",
      abstract: "We present a novel machine learning algorithm for early cancer detection using circulating tumor DNA and protein biomarkers. Our model achieves 94% sensitivity and 97% specificity for early-stage cancer detection.",
      keywords: ["Cancer", "Biomarkers", "Machine Learning", "Early Detection"],
      citations: 31,
      downloads: 2341,
      views: 6789,
      impactFactor: "82.9",
      featured: true,
      openAccess: false,
      publishedDate: "2024-02-28",
      methodology: "Retrospective analysis of 10,000 patient samples with validation cohort of 2,000",
      conclusions: "Machine learning-based biomarker panels show promise for population-level cancer screening",
      funding: "Cancer Research UK Grant #CRUK-2024-001",
      conflicts: "Authors declare no competing interests"
    },
    {
      id: "3",
      title: "Virtual Reality in Medical Education: A Systematic Review and Meta-Analysis",
      authors: [
        { name: "Dr. David Kim", affiliation: "Department of Medical Education", orcid: "0000-0007-8901-2345" },
        { name: "Dr. Patricia Williams", affiliation: "Department of Surgery", orcid: "0000-0008-9012-3456" },
        { name: "Dr. James Anderson", affiliation: "Department of Psychology", orcid: "0000-0009-0123-4567" }
      ],
      category: "education",
      year: "2023",
      journal: "Medical Education",
      volume: "57",
      issue: "8",
      pages: "892-905",
      doi: "10.1111/medu.14567",
      abstract: "This systematic review evaluates the effectiveness of virtual reality (VR) in medical education across various specialties. Our meta-analysis demonstrates significant improvements in procedural skills and knowledge retention.",
      keywords: ["Virtual Reality", "Medical Education", "Systematic Review", "Meta-Analysis"],
      citations: 18,
      downloads: 1567,
      views: 4234,
      impactFactor: "6.8",
      featured: false,
      openAccess: true,
      publishedDate: "2023-08-15",
      methodology: "Systematic review of 45 studies with meta-analysis of 3,200 participants",
      conclusions: "VR technology should be integrated into standard medical curricula",
      funding: "Educational Innovation Grant #EDU-2023-045",
      conflicts: "One author receives consulting fees from VR education company"
    },
    {
      id: "4",
      title: "Mental Health Impact on Healthcare Workers: Post-Pandemic Analysis",
      authors: [
        { name: "Dr. Amanda Foster", affiliation: "Department of Psychiatry", orcid: "0000-0010-2345-6789" },
        { name: "Dr. Jennifer Adams", affiliation: "Department of Public Health", orcid: "0000-0011-3456-7890" }
      ],
      category: "public-health",
      year: "2023",
      journal: "Journal of Occupational Health",
      volume: "65",
      issue: "4",
      pages: "234-248",
      doi: "10.1539/joh.2023.0234",
      abstract: "Our study examines the persistent mental health effects on healthcare workers following the COVID-19 pandemic. High rates of burnout, anxiety, and depression continue to affect healthcare professionals.",
      keywords: ["Mental Health", "Healthcare Workers", "Burnout", "Post-Pandemic"],
      citations: 15,
      downloads: 1234,
      views: 3456,
      impactFactor: "4.2",
      featured: false,
      openAccess: true,
      publishedDate: "2023-10-20",
      methodology: "Cross-sectional survey of 1,500 healthcare workers in 5 hospitals",
      conclusions: "Institutional mental health support programs are urgently needed",
      funding: "WHO Mental Health Grant #WHO-MH-2023-067",
      conflicts: "No conflicts of interest"
    },
    {
      id: "5",
      title: "AI-Assisted Diagnosis in Radiology: Clinical Validation Study",
      authors: [
        { name: "Dr. Lisa Wilson", affiliation: "Department of Radiology", orcid: "0000-0012-4567-8901" },
        { name: "Dr. Mark Davis", affiliation: "Department of Computer Science", orcid: "0000-0013-5678-9012" }
      ],
      category: "technology",
      year: "2023",
      journal: "Radiology AI",
      volume: "3",
      issue: "1",
      pages: "45-58",
      doi: "10.1016/j.radiolai.2023.100123",
      abstract: "We validate an AI system for radiological diagnosis across multiple imaging modalities. The AI system demonstrates comparable accuracy to expert radiologists while reducing interpretation time.",
      keywords: ["Artificial Intelligence", "Radiology", "Diagnosis", "Machine Learning"],
      citations: 22,
      downloads: 1890,
      views: 5678,
      impactFactor: "8.7",
      featured: false,
      openAccess: false,
      publishedDate: "2023-12-05",
      methodology: "Prospective validation study with 10,000 imaging studies",
      conclusions: "AI assistance can improve radiology efficiency and diagnostic accuracy",
      funding: "Tech Innovation Grant #TECH-2023-089",
      conflicts: "Authors are employees of AI medical imaging company"
    }
  ]

  const filteredPapers = researchPapers.filter(paper => {
    const categoryMatch = selectedCategory === "all" || paper.category === selectedCategory
    const yearMatch = selectedYear === "all" || paper.year === selectedYear
    const searchMatch = searchTerm === "" || 
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.some(author => author.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      paper.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    return categoryMatch && yearMatch && searchMatch
  })

  const togglePaper = (paperId: string) => {
    setExpandedPaper(expandedPaper === paperId ? null : paperId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="text-center text-gray-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-700">{papersInfo.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90 text-gray-600">
                {papersInfo.tagline}
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {papersInfo.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search papers by title, author, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Publication Year</label>
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
            </div>
          </div>
        </div>
      </div>

      {/* Research Papers List */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Research Papers ({filteredPapers.length})</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Sort by Citations
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Sort by Date
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            {filteredPapers.map((paper) => (
              <Card key={paper.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div 
                    className="cursor-pointer"
                    onClick={() => togglePaper(paper.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {paper.featured && (
                            <Badge className="bg-yellow-500 text-white">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                          {paper.openAccess && (
                            <Badge className="bg-green-500 text-white">
                              <Globe className="w-3 h-3 mr-1" />
                              Open Access
                            </Badge>
                          )}
                          <Badge variant="outline" className="capitalize">
                            {paper.category}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                          {paper.title}
                        </h3>
                        <div className="text-gray-600 mb-3">
                          {paper.authors.map((author, index) => (
                            <span key={index}>
                              {author.name}
                              {index < paper.authors.length - 1 && ", "}
                            </span>
                          ))}
                        </div>
                        <div className="text-sm text-gray-500">
                          {paper.journal} • Volume {paper.volume}, Issue {paper.issue} • Pages {paper.pages} • {paper.year}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {expandedPaper === paper.id ? 
                          <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        }
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{paper.citations} citations</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{paper.downloads.toLocaleString()} downloads</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{paper.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BarChart className="w-4 h-4" />
                        <span>IF: {paper.impactFactor}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                {expandedPaper === paper.id && (
                  <CardContent className="p-6 border-t border-gray-200">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Abstract</h4>
                        <p className="text-gray-700 leading-relaxed">{paper.abstract}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {paper.keywords.map((keyword, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Authors & Affiliations</h4>
                        <div className="space-y-2">
                          {paper.authors.map((author, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <User className="w-4 h-4 text-gray-400" />
                              <span className="font-medium">{author.name}</span>
                              <span className="text-gray-600">• {author.affiliation}</span>
                              <span className="text-gray-400">• ORCID: {author.orcid}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Methodology</h4>
                          <p className="text-sm text-gray-700">{paper.methodology}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Conclusions</h4>
                          <p className="text-sm text-gray-700">{paper.conclusions}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Funding</h4>
                          <p className="text-sm text-gray-700">{paper.funding}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Conflicts of Interest</h4>
                          <p className="text-sm text-gray-700">{paper.conflicts}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="text-sm text-gray-500">
                          DOI: <a href={`https://doi.org/${paper.doi}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                            {paper.doi}
                          </a>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                          <Button size="sm" variant="outline">
                            <ThumbsUp className="w-4 h-4 mr-2" />
                            Cite
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Research Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
                <div className="text-lg font-semibold text-gray-600">Papers Published</div>
                <div className="text-sm text-gray-500">Peer-reviewed research</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">10,000+</div>
                <div className="text-lg font-semibold text-gray-600">Total Citations</div>
                <div className="text-sm text-gray-500">Research impact</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">200+</div>
                <div className="text-lg font-semibold text-gray-600">Researchers</div>
                <div className="text-sm text-gray-500">Contributing authors</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
                <div className="text-lg font-semibold text-gray-600">Countries</div>
                <div className="text-sm text-gray-500">Global readership</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
