"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Upload,
  FileText,
  Send,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Calendar,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Globe,
  ExternalLink,
  Heart,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Tag,
  User,
  BarChart,
  ThumbsUp,
  Download,
  Settings,
  Zap,
  Target,
  Shield,
  Mail,
  Phone,
  HelpCircle,
  Info,
  FileCheck,
  ClipboardList,
  PenTool,
  Image,
  Video,
  FileSpreadsheet,
  Database,
  Lock,
  Unlock,
  Key,
  RefreshCw,
  Save,
  Printer,
  Share2,
  Link,
  Copy,
  MoreHorizontal
} from "lucide-react"

export default function PublicationSystemPage() {
  const [activeTab, setActiveTab] = useState("submit")
  const [expandedSubmission, setExpandedSubmission] = useState<string | null>(null)

  const systemInfo = {
    name: "Publication System",
    tagline: "Streamlined manuscript submission and peer review management",
    description: "Our comprehensive publication system provides authors with an efficient platform for manuscript submission, peer review, and publication tracking."
  }

  const submissionSteps = [
    {
      id: 1,
      title: "Prepare Your Manuscript",
      description: "Format your paper according to our guidelines and prepare all required documents",
      icon: <FileText className="w-6 h-6" />,
      status: "pending"
    },
    {
      id: 2,
      title: "Create Account",
      description: "Register or login to your author account to begin the submission process",
      icon: <User className="w-6 h-6" />,
      status: "pending"
    },
    {
      id: 3,
      title: "Submit Manuscript",
      description: "Upload your manuscript and provide all required information and metadata",
      icon: <Upload className="w-6 h-6" />,
      status: "pending"
    },
    {
      id: 4,
      title: "Peer Review",
      description: "Your manuscript undergoes rigorous peer review by expert reviewers",
      icon: <Users className="w-6 h-6" />,
      status: "pending"
    },
    {
      id: 5,
      title: "Editorial Decision",
      description: "Receive editorial decision and any required revisions",
      icon: <CheckCircle className="w-6 h-6" />,
      status: "pending"
    },
    {
      id: 6,
      title: "Publication",
      description: "Accepted papers are published online and in print editions",
      icon: <BookOpen className="w-6 h-6" />,
      status: "pending"
    }
  ]

  const mySubmissions = [
    {
      id: "sub-1",
      title: "Novel Biomarkers for Early Cancer Detection: Machine Learning Approach",
      authors: "Michael Chen, Linda Brown, Thomas Garcia",
      submittedDate: "2024-01-15",
      status: "under-review",
      statusColor: "bg-yellow-500",
      currentStep: 4,
      totalSteps: 6,
      daysInReview: 45,
      assignedReviewers: 3,
      completedReviews: 2,
      estimatedDecision: "2024-03-15",
      manuscriptType: "Original Research",
      wordCount: 3500,
      figures: 6,
      tables: 4,
      supplementaryFiles: 2
    },
    {
      id: "sub-2",
      title: "Virtual Reality in Medical Education: A Systematic Review",
      authors: "David Kim, Patricia Williams, James Anderson",
      submittedDate: "2023-12-10",
      status: "revisions-required",
      statusColor: "bg-orange-500",
      currentStep: 5,
      totalSteps: 6,
      daysInReview: 65,
      assignedReviewers: 3,
      completedReviews: 3,
      revisionDeadline: "2024-02-15",
      manuscriptType: "Review Article",
      wordCount: 5800,
      figures: 8,
      tables: 6,
      supplementaryFiles: 3
    },
    {
      id: "sub-3",
      title: "Long-term Cardiovascular Complications Post-COVID-19",
      authors: "Elizabeth Thompson, Sarah Johnson",
      submittedDate: "2023-11-20",
      status: "accepted",
      statusColor: "bg-green-500",
      currentStep: 6,
      totalSteps: 6,
      daysToPublication: 30,
      publicationDate: "2024-02-28",
      manuscriptType: "Clinical Research",
      wordCount: 4200,
      figures: 5,
      tables: 3,
      supplementaryFiles: 1
    },
    {
      id: "sub-4",
      title: "AI-Assisted Diagnosis in Radiology: Clinical Validation",
      authors: "Lisa Wilson, Mark Davis",
      submittedDate: "2023-10-15",
      status: "rejected",
      statusColor: "bg-red-500",
      currentStep: 5,
      totalSteps: 6,
      rejectionReason: "Insufficient sample size for validation",
      manuscriptType: "Technical Report",
      wordCount: 2800,
      figures: 4,
      tables: 2,
      supplementaryFiles: 1
    }
  ]

  const guidelines = [
    {
      title: "Manuscript Formatting",
      description: "Detailed formatting guidelines for manuscript preparation",
      icon: <FileText className="w-6 h-6" />,
      items: [
        "Double-spaced, 12-point Times New Roman font",
        "Maximum word count: 4000 for original research",
        "Abstract: 250-300 words",
        "References: Vancouver style",
        "Figures and tables: High-resolution images"
      ]
    },
    {
      title: "Submission Requirements",
      description: "Required documents and information for submission",
      icon: <ClipboardList className="w-6 h-6" />,
      items: [
        "Cover letter with significance statement",
        "Title page with author affiliations",
        "Manuscript file (Word or LaTeX)",
        "Figure files (high-resolution)",
        "Conflict of interest disclosure",
        "Data availability statement"
      ]
    },
    {
      title: "Ethical Guidelines",
      description: "Ethical requirements for research publication",
      icon: <Shield className="w-6 h-6" />,
      items: [
        "IRB/ethics committee approval",
        "Informed consent documentation",
        "Animal welfare compliance",
        "Author contribution statements",
        "Data privacy and confidentiality",
        "Plagiarism-free content"
      ]
    }
  ]

  const toggleSubmission = (submissionId: string) => {
    setExpandedSubmission(expandedSubmission === submissionId ? null : submissionId)
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "under-review": { color: "bg-yellow-500", text: "Under Review" },
      "revisions-required": { color: "bg-orange-500", text: "Revisions Required" },
      "accepted": { color: "bg-green-500", text: "Accepted" },
      "rejected": { color: "bg-red-500", text: "Rejected" },
      "submitted": { color: "bg-blue-500", text: "Submitted" }
    }
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig["submitted"]
    
    return (
      <Badge className={`${config.color} text-white`}>
        {config.text}
      </Badge>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="text-center text-gray-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-700">{systemInfo.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90 text-gray-600">
                {systemInfo.tagline}
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {systemInfo.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-2">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={activeTab === "submit" ? "default" : "ghost"}
                onClick={() => setActiveTab("submit")}
                className="flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Submit Manuscript
              </Button>
              <Button
                variant={activeTab === "submissions" ? "default" : "ghost"}
                onClick={() => setActiveTab("submissions")}
                className="flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                My Submissions
              </Button>
              <Button
                variant={activeTab === "guidelines" ? "default" : "ghost"}
                onClick={() => setActiveTab("guidelines")}
                className="flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Guidelines
              </Button>
              <Button
                variant={activeTab === "help" ? "default" : "ghost"}
                onClick={() => setActiveTab("help")}
                className="flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                Help & Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Manuscript Tab */}
      {activeTab === "submit" && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Submit Your Manuscript</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {submissionSteps.map((step, index) => (
                <Card key={step.id} className="border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.id}
                      </div>
                      {index < submissionSteps.length - 1 && (
                        <div className="hidden md:block w-full h-0.5 bg-gray-300 ml-4"></div>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-5 h-5 mr-2" />
                Start New Submission
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* My Submissions Tab */}
      {activeTab === "submissions" && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">My Submissions</h2>
              <div className="flex gap-2">
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

            <div className="space-y-6">
              {mySubmissions.map((submission) => (
                <Card key={submission.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div 
                      className="cursor-pointer"
                      onClick={() => toggleSubmission(submission.id)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {getStatusBadge(submission.status)}
                            <Badge variant="outline">{submission.manuscriptType}</Badge>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{submission.title}</h3>
                          <p className="text-gray-600 mb-2">{submission.authors}</p>
                          <div className="text-sm text-gray-500">
                            Submitted: {submission.submittedDate}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {expandedSubmission === submission.id ? 
                            <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          }
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                              <FileText className="w-4 h-4" />
                              <span>{submission.wordCount} words</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Image className="w-4 h-4" />
                              <span>{submission.figures} figures</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FileSpreadsheet className="w-4 h-4" />
                              <span>{submission.tables} tables</span>
                            </div>
                          </div>
                          
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(submission.currentStep / submission.totalSteps) * 100}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Step {submission.currentStep} of {submission.totalSteps}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  {expandedSubmission === submission.id && (
                    <CardContent className="p-6 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Submission Details</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Manuscript ID:</span>
                              <span className="font-medium">{submission.id}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Type:</span>
                              <span className="font-medium">{submission.manuscriptType}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Word Count:</span>
                              <span className="font-medium">{submission.wordCount}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Supplementary Files:</span>
                              <span className="font-medium">{submission.supplementaryFiles}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Review Status</h4>
                          <div className="space-y-2 text-sm">
                            {submission.status === "under-review" && (
                              <>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Days in Review:</span>
                                  <span className="font-medium">{submission.daysInReview}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Assigned Reviewers:</span>
                                  <span className="font-medium">{submission.assignedReviewers}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Completed Reviews:</span>
                                  <span className="font-medium">{submission.completedReviews}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Estimated Decision:</span>
                                  <span className="font-medium">{submission.estimatedDecision}</span>
                                </div>
                              </>
                            )}
                            
                            {submission.status === "revisions-required" && (
                              <>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Revision Deadline:</span>
                                  <span className="font-medium">{submission.revisionDeadline}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Completed Reviews:</span>
                                  <span className="font-medium">{submission.completedReviews}/{submission.assignedReviewers}</span>
                                </div>
                              </>
                            )}
                            
                            {submission.status === "accepted" && (
                              <>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Publication Date:</span>
                                  <span className="font-medium">{submission.publicationDate}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Days to Publication:</span>
                                  <span className="font-medium">{submission.daysToPublication}</span>
                                </div>
                              </>
                            )}
                            
                            {submission.status === "rejected" && (
                              <div className="flex justify-between">
                                <span className="text-gray-600">Reason:</span>
                                <span className="font-medium">{submission.rejectionReason}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
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
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                          <Button size="sm" variant="outline">
                            <MoreHorizontal className="w-4 h-4 mr-2" />
                            More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Guidelines Tab */}
      {activeTab === "guidelines" && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Author Guidelines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guidelines.map((guideline, index) => (
                <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      {guideline.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{guideline.title}</h3>
                    <p className="text-gray-600">{guideline.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {guideline.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-4">
                      <Download className="w-4 h-4 mr-2" />
                      Download Full Guidelines
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Help & Support Tab */}
      {activeTab === "help" && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Help & Support</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">Get help via email</p>
                  <p className="text-gray-800 font-medium">publications@medicalcollege.edu</p>
                  <Button variant="outline" className="mt-4">
                    Send Email
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
                  <p className="text-gray-800 font-medium">+1 (234) 567-8900</p>
                  <Button variant="outline" className="mt-4">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Chat with our support team</p>
                  <p className="text-gray-800 font-medium">Available 9 AM - 5 PM</p>
                  <Button variant="outline" className="mt-4">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">FAQ</h3>
                  <p className="text-gray-600 mb-4">Find answers to common questions</p>
                  <p className="text-gray-800 font-medium">Browse our knowledge base</p>
                  <Button variant="outline" className="mt-4">
                    View FAQ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
