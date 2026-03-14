"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Upload,
  FileText,
  Send,
  CheckCircle,
  AlertCircle,
  Info,
  ChevronRight,
  ChevronLeft,
  Plus,
  X,
  Download,
  Eye,
  Save,
  User,
  Mail,
  Phone,
  Globe,
  Calendar,
  BookOpen,
  FileSpreadsheet,
  Image,
  Video,
  HelpCircle,
  Shield,
  Clock,
  Target,
  Award,
  Settings,
  Search,
  Filter,
  RefreshCw,
  ExternalLink,
  Copy,
  Printer,
  Share2,
  MessageSquare,
  Heart,
  Star,
  TrendingUp,
  BarChart,
  Database,
  Lock,
  Key,
  Zap,
  Lightbulb
} from "lucide-react"

export default function JournalSubmissionPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showHelpModal, setShowHelpModal] = useState("")
  const [formData, setFormData] = useState({
    manuscriptType: "",
    title: "",
    abstract: "",
    keywords: "",
    authors: [],
    files: [],
    coverLetter: "",
    conflicts: "",
    funding: "",
    dataAvailability: "",
    ethicsApproval: "",
    consent: "",
    terms: false,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    institution: "",
    department: "",
    country: ""
  })

  const totalSteps = 6

  const submissionSteps = [
    {
      id: 1,
      title: "Manuscript Information",
      description: "Basic manuscript details and type",
      icon: <FileText className="w-6 h-6" />,
      completed: false
    },
    {
      id: 2,
      title: "Author Information",
      description: "Author details and affiliations",
      icon: <User className="w-6 h-6" />,
      completed: false
    },
    {
      id: 3,
      title: "File Upload",
      description: "Upload manuscript and supplementary files",
      icon: <Upload className="w-6 h-6" />,
      completed: false
    },
    {
      id: 4,
      title: "Cover Letter",
      description: "Write and upload cover letter",
      icon: <Mail className="w-6 h-6" />,
      completed: false
    },
    {
      id: 5,
      title: "Compliance & Ethics",
      description: "Ethical statements and disclosures",
      icon: <Shield className="w-6 h-6" />,
      completed: false
    },
    {
      id: 6,
      title: "Review & Submit",
      description: "Review and submit your manuscript",
      icon: <Send className="w-6 h-6" />,
      completed: false
    }
  ]

  const manuscriptTypes = [
    { id: "original", name: "Original Research", description: "Novel research findings" },
    { id: "review", name: "Review Article", description: "Comprehensive literature review" },
    { id: "case", name: "Case Report", description: "Clinical case studies" },
    { id: "short", name: "Short Communication", description: "Brief research reports" },
    { id: "editorial", name: "Editorial", description: "Opinion pieces and commentary" },
    { id: "letter", name: "Letter to Editor", description: "Responses to published articles" }
  ]

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStepClick = (stepId: number) => {
    if (stepId <= currentStep || stepId === currentStep + 1) {
      setCurrentStep(stepId)
    }
  }

  const getHelpContent = (type: string) => {
    switch (type) {
      case "guidelines":
        return {
          title: "Submission Guidelines",
          content: (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Manuscript Requirements</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Original work not published elsewhere</li>
                  <li>• Double-spaced, 12-point Times New Roman font</li>
                  <li>• Maximum word count: 4000 for original research</li>
                  <li>• Abstract: 250-300 words</li>
                  <li>• References in Vancouver style</li>
                  <li>• High-resolution figures (300 DPI)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">File Formats</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Manuscript: .doc, .docx, .pdf (Max 10MB)</li>
                  <li>• Figures: .jpg, .png, .gif (Max 5MB each)</li>
                  <li>• Tables: .xlsx, .csv (Max 2MB each)</li>
                  <li>• Supplementary: .pdf, .zip (Max 20MB)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Review Process</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Initial editorial screening (1-2 weeks)</li>
                  <li>• Peer review process (4-6 weeks)</li>
                  <li>• Author revision period (2-4 weeks)</li>
                  <li>• Final decision (6-8 weeks total)</li>
                </ul>
              </div>
            </div>
          )
        }
      case "support":
        return {
          title: "Contact Support",
          content: (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Editorial Office</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>editorial@medicaljournal.edu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (234) 567-8900</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Monday-Friday, 9:00 AM - 5:00 PM EST</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Common Issues</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Submission system problems</li>
                  <li>• File upload issues</li>
                  <li>• Account access problems</li>
                  <li>• Publication timeline questions</li>
                  <li>• Open access policies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Response Time</h4>
                <p className="text-sm text-gray-600">
                  We typically respond to inquiries within 24-48 hours during business days.
                </p>
              </div>
            </div>
          )
        }
      case "resources":
        return {
          title: "Author Resources",
          content: (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Writing Resources</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <a href="#" className="text-blue-600 hover:underline">Scientific Writing Guide</a></li>
                  <li>• <a href="#" className="text-blue-600 hover:underline">Abstract Writing Tips</a></li>
                  <li>• <a href="#" className="text-blue-600 hover:underline">Reference Management</a></li>
                  <li>• <a href="#" className="text-blue-600 hover:underline">Figure Preparation</a></li>
                  <li>• <a href="#" className="text-blue-600 hover:underline">Statistical Guidelines</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Ethical Guidelines</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <a href="#" className="text-blue-600 hover:underline">Publication Ethics</a></li>
                  <li>• <a href="#" className="text-blue-600 hover:underline">Plagiarism Policy</a></li>
                  <li>• <a href="#" className="text-blue-600 hover:underline">Author Guidelines</a></li>
                  <li>• <a href="#" className="text-blue-600 hover:underline">Data Sharing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Workshops & Training</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Academic Writing Workshop</li>
                  <li>• Peer Review Process Training</li>
                  <li>• Open Access Publishing</li>
                  <li>• Research Impact Metrics</li>
                </ul>
              </div>
            </div>
          )
        }
      default:
        return { title: "", content: null }
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Manuscript Type</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {manuscriptTypes.map((type) => (
                  <Card 
                    key={type.id} 
                    className={`border-2 cursor-pointer transition-all duration-200 ${
                      formData.manuscriptType === type.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setFormData({...formData, manuscriptType: type.id})}
                  >
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">{type.name}</h4>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Manuscript Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Manuscript Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter manuscript title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Abstract *
                  </label>
                  <textarea
                    value={formData.abstract}
                    onChange={(e) => setFormData({...formData, abstract: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={6}
                    placeholder="Enter abstract (250-300 words)"
                  />
                  <p className="text-sm text-gray-500 mt-1">Word count: {formData.abstract.split(' ').filter(word => word).length}/300</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Keywords *
                  </label>
                  <input
                    type="text"
                    value={formData.keywords}
                    onChange={(e) => setFormData({...formData, keywords: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter keywords (separated by commas)"
                  />
                  <p className="text-sm text-gray-500 mt-1">Separate keywords with commas (5-8 keywords recommended)</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Corresponding Author</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Last name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Affiliation</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Institution *</label>
                  <input
                    type="text"
                    value={formData.institution}
                    onChange={(e) => setFormData({...formData, institution: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Institution name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                    <input
                      type="text"
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Department"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                    <select 
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="JP">Japan</option>
                      <option value="CN">China</option>
                      <option value="IN">India</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Co-Authors</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Add additional authors (optional)</p>
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Author
                  </Button>
                </div>
                <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                  <Info className="w-4 h-4 inline mr-2" />
                  You can add co-authors in the next step or after initial submission
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Upload Manuscript</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-700 mb-2">Drop your manuscript here</h4>
                <p className="text-gray-500 mb-4">or click to browse</p>
                <Button variant="outline">Choose File</Button>
                <p className="text-sm text-gray-500 mt-4">
                  Accepted formats: .doc, .docx, .pdf (Max file size: 10MB)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Supplementary Files</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400 transition-colors cursor-pointer">
                    <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Figures</p>
                    <p className="text-xs text-gray-500">JPG, PNG, GIF</p>
                  </Card>
                  <Card className="border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400 transition-colors cursor-pointer">
                    <FileSpreadsheet className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Tables</p>
                    <p className="text-xs text-gray-500">Excel, CSV</p>
                  </Card>
                  <Card className="border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400 transition-colors cursor-pointer">
                    <Video className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Media</p>
                    <p className="text-xs text-gray-500">MP4, AVI</p>
                  </Card>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">File Requirements</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">Formatting Guidelines:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Double-spaced, 12-point Times New Roman font</li>
                  <li>• Maximum word count: 4000 for original research</li>
                  <li>• Abstract: 250-300 words</li>
                  <li>• References: Vancouver style</li>
                  <li>• High-resolution figures (300 DPI)</li>
                  <li>• All tables and figures numbered and titled</li>
                </ul>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Cover Letter</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter Text *
                  </label>
                  <textarea
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={8}
                    placeholder="Write your cover letter explaining the significance of your research..."
                  />
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Cover Letter Guidelines:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Briefly introduce your research and its significance</li>
                    <li>• Explain why your manuscript is suitable for this journal</li>
                    <li>• Confirm that the work is original and unpublished</li>
                    <li>• Declare any conflicts of interest</li>
                    <li>• Suggest potential reviewers (optional)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Suggested Reviewers</h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Optional: Suggest 3-5 potential reviewers with expertise in your field
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Reviewer 1 Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Institution</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Institution"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expertise</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Area of expertise"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Ethical Compliance</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ethics Committee Approval *
                  </label>
                  <select 
                    value={formData.ethicsApproval}
                    onChange={(e) => setFormData({...formData, ethicsApproval: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select option</option>
                    <option value="approved">Approved - IRB/Ethics Committee</option>
                    <option value="not-required">Not required</option>
                    <option value="pending">Pending approval</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ethics Approval Number (if applicable)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="IRB/ETHICS-XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Informed Consent *
                  </label>
                  <select 
                    value={formData.consent}
                    onChange={(e) => setFormData({...formData, consent: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select option</option>
                    <option value="obtained">Obtained from all participants</option>
                    <option value="not-required">Not required</option>
                    <option value="waived">Waived by ethics committee</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Disclosures</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Conflicts of Interest *
                  </label>
                  <textarea
                    value={formData.conflicts}
                    onChange={(e) => setFormData({...formData, conflicts: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Declare any conflicts of interest or state 'None to declare'"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Funding Sources *
                  </label>
                  <textarea
                    value={formData.funding}
                    onChange={(e) => setFormData({...formData, funding: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="List all funding sources and grant numbers"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data Availability Statement *
                  </label>
                  <textarea
                    value={formData.dataAvailability}
                    onChange={(e) => setFormData({...formData, dataAvailability: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Describe how readers can access the data"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Author Contributions</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <Info className="w-4 h-4 inline mr-2" />
                  You will be able to specify individual author contributions after submission
                </p>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Review Your Submission</h3>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Manuscript Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-600">Type:</span>
                        <p className="text-gray-800">{formData.manuscriptType || 'Not selected'}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Title:</span>
                        <p className="text-gray-800">{formData.title || 'Not provided'}</p>
                      </div>
                      <div className="md:col-span-2">
                        <span className="font-medium text-gray-600">Abstract:</span>
                        <p className="text-gray-800">{formData.abstract || 'Not provided'}</p>
                      </div>
                      <div className="md:col-span-2">
                        <span className="font-medium text-gray-600">Keywords:</span>
                        <p className="text-gray-800">{formData.keywords || 'Not provided'}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Compliance & Ethics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-800">Ethics approval: {formData.ethicsApproval || 'Not specified'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-800">Informed consent: {formData.consent || 'Not specified'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-800">Conflicts of interest: {formData.conflicts ? 'Declared' : 'Not declared'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-800">Funding: {formData.funding ? 'Provided' : 'Not provided'}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={formData.terms}
                      onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I confirm that this manuscript is my original work, has not been published elsewhere, and I agree to the journal's terms and conditions.
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="responsive-container-full py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Journal Submission</h1>
              <p className="text-gray-600 mt-2">Submit your manuscript for peer review</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button variant="outline" size="sm">
                <HelpCircle className="w-4 h-4 mr-2" />
                Help
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200">
        <div className="responsive-container-full py-6">
          <div className="flex items-center justify-between">
            {submissionSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center">
                  <button
                    onClick={() => handleStepClick(step.id)}
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                      step.id === currentStep
                        ? 'border-blue-500 bg-blue-500 text-white'
                        : step.id < currentStep
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-300 bg-white text-gray-500'
                    }`}
                  >
                    {step.id < currentStep ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.id
                    )}
                  </button>
                  <div className="ml-3 hidden md:block">
                    <h3 className="text-sm font-medium text-gray-900">{step.title}</h3>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                </div>
                {index < submissionSteps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-4 ${
                    step.id < currentStep ? 'bg-green-500' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="responsive-container-full py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              {renderStepContent()}
              
              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                <div className="text-sm text-gray-500">
                  Step {currentStep} of {totalSteps}
                </div>
                
                <Button
                  onClick={handleNextStep}
                  disabled={currentStep === totalSteps}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {currentStep === totalSteps ? 'Submit' : 'Next'}
                  {currentStep < totalSteps && <ChevronRight className="w-4 h-4 ml-2" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Help Sidebar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <Card className="w-64 border-0 shadow-lg">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Quick Help</h3>
            <div className="space-y-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => setShowHelpModal("guidelines")}
              >
                <FileText className="w-4 h-4 mr-2" />
                Submission Guidelines
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => setShowHelpModal("support")}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                onClick={() => setShowHelpModal("resources")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Author Resources
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">
                {getHelpContent(showHelpModal).title}
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHelpModal("")}
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="overflow-y-auto max-h-[60vh]">
              {getHelpContent(showHelpModal).content}
            </CardContent>
            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-end">
                <Button onClick={() => setShowHelpModal("")}>
                  Close
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
