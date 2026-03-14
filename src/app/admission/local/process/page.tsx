"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  GraduationCap,
  Users,
  Clock,
  FileText,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  Award,
  CheckCircle,
  ArrowRight,
  Download,
  Info,
  X,
  ChevronDown,
  Upload,
  Edit,
  Eye,
  AlertCircle,
  CheckSquare,
  Square,
  Loader,
  User,
  CreditCard,
  Shield,
  Target
} from "lucide-react"

export default function AdmissionProcessPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([])

  const steps = [
    { 
      id: 1, 
      title: "Online Application", 
      description: "Fill out the online application form with accurate information",
      icon: "📝",
      duration: "30-45 minutes",
      details: [
        "Create account with valid email",
        "Fill personal information form",
        "Enter academic details",
        "Upload required documents",
        "Review and submit application"
      ]
    },
    { 
      id: 2, 
      title: "Document Verification", 
      description: "Submit original documents for verification",
      icon: "📄",
      duration: "2-3 business days",
      details: [
        "Submit original academic transcripts",
        "Provide birth certificate",
        "Submit citizenship proof",
        "Character certificate",
        "Medical fitness report"
      ]
    },
    { 
      id: 3, 
      title: "Merit List Publication", 
      description: "Wait for merit list based on SSC/HSC results",
      icon: "📊",
      duration: "2-3 weeks",
      details: [
        "Merit calculation based on GPA",
        "List published on website",
        "SMS notification to candidates",
        "Check admission portal",
        "Download merit list"
      ]
    },
    { 
      id: 4, 
      title: "Medical Examination", 
      description: "Complete the mandatory medical fitness test",
      icon: "🏥",
      duration: "1-2 days",
      details: [
        "Schedule medical test",
        "Visit designated hospital",
        "Complete health checkup",
        "Receive fitness certificate",
        "Submit medical report"
      ]
    },
    { 
      id: 5, 
      title: "Fee Payment & Admission", 
      description: "Complete admission formalities and fee payment",
      icon: "🎓",
      duration: "3-5 days",
      details: [
        "Pay admission fees",
        "Submit fee receipt",
        "Complete registration",
        "Receive student ID",
        "Attend orientation"
      ]
    }
  ]

  const documents = [
    { id: "ssc", name: "SSC Mark Sheet", required: true, format: "PDF/JPG", size: "Max 2MB" },
    { id: "hsc", name: "HSC Mark Sheet", required: true, format: "PDF/JPG", size: "Max 2MB" },
    { id: "birth", name: "Birth Certificate", required: true, format: "PDF/JPG", size: "Max 1MB" },
    { id: "citizenship", name: "Citizenship Certificate", required: true, format: "PDF/JPG", size: "Max 1MB" },
    { id: "character", name: "Character Certificate", required: true, format: "PDF/JPG", size: "Max 1MB" },
    { id: "photo", name: "Passport Size Photo", required: true, format: "JPG/PNG", size: "Max 500KB" },
    { id: "medical", name: "Medical Certificate", required: false, format: "PDF", size: "Max 2MB" },
    { id: "quota", name: "Quota Certificate (if applicable)", required: false, format: "PDF", size: "Max 1MB" }
  ]

  const toggleDocument = (docId: string) => {
    setSelectedDocuments(prev => 
      prev.includes(docId) 
        ? prev.filter(id => id !== docId)
        : [...prev, docId]
    )
  }

  const markStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId])
    }
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-[#F9FAFB] text-gray-700 overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 opacity-20 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-200 opacity-20 rounded-full -ml-32 -mb-32"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white bg-opacity-60 p-4 rounded-full backdrop-blur-sm">
                <Target className="h-20 w-20 text-blue-600" />
              </div>
            </div>
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-800">
                Admission Process
                <span className="block text-3xl md:text-4xl text-gray-600 mt-2">Step-by-Step Guide</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Complete guide to secure your place in our prestigious MBBS program
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="/admission/local/mbbs-info">
                <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                  <ArrowRight className="mr-2 h-6 w-6 rotate-180" />
                  Back to MBBS Info
                </Button>
              </Link>
              <Link href="/admission/local/eligibility">
                <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                  <CheckCircle className="mr-2 h-6 w-6" />
                  Check Eligibility
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Process Overview */}
      <div className="container mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {steps.map((step, index) => (
            <Card key={step.id} className={`shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden ${currentStep === step.id ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                  completedSteps.includes(step.id) 
                    ? 'bg-green-100 text-green-600' 
                    : currentStep === step.id 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {completedSteps.includes(step.id) ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <span className="text-xl font-bold">{step.id}</span>
                  )}
                </div>
                <h3 className="font-bold text-sm mb-2 text-gray-800">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.duration}</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div 
                      className={`h-1 rounded-full transition-all duration-300 ${
                        completedSteps.includes(step.id) 
                          ? 'bg-green-500 w-full' 
                          : currentStep === step.id 
                          ? 'bg-blue-500 w-1/2' 
                          : 'bg-gray-300 w-0'
                      }`}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Interactive Process Guide */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Interactive Process Guide
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Follow each step carefully to complete your admission successfully
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Current Step Details */}
              <div className="lg:col-span-2">
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white">
                        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                          <span className="text-xl font-bold">{currentStep}</span>
                        </div>
                        <div>
                          <CardTitle className="text-xl">{steps[currentStep - 1].title}</CardTitle>
                          <CardDescription className="text-blue-100">
                            {steps[currentStep - 1].description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-white text-3xl">{steps[currentStep - 1].icon}</div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Step Details</h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {steps[currentStep - 1].duration}
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {steps[currentStep - 1].details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                              <CheckCircle className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Step-specific content */}
                    {currentStep === 1 && (
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h4 className="font-semibold text-blue-800 mb-4">Application Form Tips</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                            <span className="text-gray-700">Double-check all information before submission</span>
                          </div>
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                            <span className="text-gray-700">Use a valid email address for communication</span>
                          </div>
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                            <span className="text-gray-700">Keep your phone number active for SMS updates</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="bg-purple-50 rounded-lg p-6">
                        <h4 className="font-semibold text-purple-800 mb-4">Document Submission</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-purple-600 mr-2 mt-1" />
                            <span className="text-gray-700">Submit original documents to admission office</span>
                          </div>
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-purple-600 mr-2 mt-1" />
                            <span className="text-gray-700">Bring photocopies for office records</span>
                          </div>
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-purple-600 mr-2 mt-1" />
                            <span className="text-gray-700">Get acknowledgment receipt</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="bg-green-50 rounded-lg p-6">
                        <h4 className="font-semibold text-green-800 mb-4">Merit List Information</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-green-600 mr-2 mt-1" />
                            <span className="text-gray-700">Check website regularly for updates</span>
                          </div>
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-green-600 mr-2 mt-1" />
                            <span className="text-gray-700">Save your application number</span>
                          </div>
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-green-600 mr-2 mt-1" />
                            <span className="text-gray-700">Contact office if not selected</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="bg-orange-50 rounded-lg p-6">
                        <h4 className="font-semibold text-orange-800 mb-4">Medical Examination</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-orange-600 mr-2 mt-1" />
                            <span className="text-gray-700">Visit designated medical college hospital</span>
                          </div>
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-orange-600 mr-2 mt-1" />
                            <span className="text-gray-700">Bring admission letter and ID</span>
                          </div>
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-orange-600 mr-2 mt-1" />
                            <span className="text-gray-700">Fast for 8 hours before test</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 5 && (
                      <div className="bg-red-50 rounded-lg p-6">
                        <h4 className="font-semibold text-red-800 mb-4">Final Admission</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-red-600 mr-2 mt-1" />
                            <span className="text-gray-700">Pay fees within deadline</span>
                          </div>
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-red-600 mr-2 mt-1" />
                            <span className="text-gray-700">Collect student ID card</span>
                          </div>
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-red-600 mr-2 mt-1" />
                            <span className="text-gray-700">Attend orientation program</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                      <Button
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        variant="outline"
                        className="border-gray-600 text-gray-600 hover:bg-gray-50"
                      >
                        <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                        Previous Step
                      </Button>
                      <div className="space-x-4">
                        <Button
                          onClick={() => markStepComplete(currentStep)}
                          variant="outline"
                          className="border-green-600 text-green-600 hover:bg-green-50"
                        >
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Mark Complete
                        </Button>
                        <Button
                          onClick={nextStep}
                          disabled={currentStep === steps.length}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Next Step
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Document Checklist */}
              <div>
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6">
                    <CardTitle className="flex items-center text-white text-xl">
                      <FileText className="mr-3 h-6 w-6" />
                      Document Checklist
                    </CardTitle>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {documents.map((doc) => (
                        <div key={doc.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                          <button
                            onClick={() => toggleDocument(doc.id)}
                            className="mt-1"
                          >
                            {selectedDocuments.includes(doc.id) ? (
                              <CheckSquare className="h-4 w-4 text-green-600" />
                            ) : (
                              <Square className="h-4 w-4 text-gray-400" />
                            )}
                          </button>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className={`font-medium text-sm ${doc.required ? 'text-gray-800' : 'text-gray-600'}`}>
                                {doc.name}
                                {doc.required && <span className="text-red-500 ml-1">*</span>}
                              </span>
                              <Upload className="h-3 w-3 text-gray-400" />
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {doc.format} • {doc.size}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-600 mb-3">
                        Selected: {selectedDocuments.length} of {documents.length} documents
                      </div>
                      <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Selected Documents
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Important Notes */}
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden mt-6">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6">
                    <CardTitle className="flex items-center text-white text-xl">
                      <AlertCircle className="mr-3 h-6 w-6" />
                      Important Notes
                    </CardTitle>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <div className="bg-orange-100 rounded-full p-1 mr-2 mt-1">
                          <AlertCircle className="h-3 w-3 text-orange-600" />
                        </div>
                        <span className="text-gray-700">All documents must be authentic</span>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-orange-100 rounded-full p-1 mr-2 mt-1">
                          <AlertCircle className="h-3 w-3 text-orange-600" />
                        </div>
                        <span className="text-gray-700">Keep photocopies of all submissions</span>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-orange-100 rounded-full p-1 mr-2 mt-1">
                          <AlertCircle className="h-3 w-3 text-orange-600" />
                        </div>
                        <span className="text-gray-700">Follow deadlines strictly</span>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-orange-100 rounded-full p-1 mr-2 mt-1">
                          <AlertCircle className="h-3 w-3 text-orange-600" />
                        </div>
                        <span className="text-gray-700">Contact office for any queries</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline View */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <Calendar className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Admission Timeline
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Key dates and deadlines for the admission process
              </p>
            </div>

            <div className="space-y-6">
              {[
                { month: "October", events: ["Application portal opens", "Online registration starts"], color: "blue" },
                { month: "November", events: ["Application deadline", "Document verification begins"], color: "purple" },
                { month: "December", events: ["Merit list publication", "Medical examination"], color: "green" },
                { month: "January", events: ["Admission confirmation", "Fee payment deadline"], color: "orange" },
                { month: "February", events: ["Orientation program", "Classes begin"], color: "red" }
              ].map((timeline, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-24 text-right pr-4 font-semibold text-${timeline.color}-600`}>
                    {timeline.month}
                  </div>
                  <div className={`w-4 h-4 bg-${timeline.color}-500 rounded-full`}></div>
                  <div className="flex-1 pl-4">
                    <div className={`bg-${timeline.color}-50 rounded-lg p-4 border-l-4 border-${timeline.color}-500`}>
                      <ul className="space-y-1">
                        {timeline.events.map((event, i) => (
                          <li key={i} className="text-sm text-gray-700">• {event}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Help with the Process?</h3>
              <p className="text-blue-100 mb-6">
                Our admission counselors are available to guide you through each step of the admission process
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Admission Office
                </Button>
                <Button size="lg" variant="outline" className="border-white text-gray-700 hover:bg-white hover:text-blue-600">
                  <Mail className="mr-2 h-5 w-5 text-gray-700" />
                  Email Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
