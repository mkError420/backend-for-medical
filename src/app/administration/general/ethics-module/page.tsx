"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp } from "lucide-react"

export default function EthicsModulePage() {
  const modules = [
    {
      title: "Introduction to Medical Ethics",
      code: "ETH-101",
      duration: "2 hours",
      level: "Beginner",
      description: "Fundamental concepts and principles of medical ethics",
      topics: ["Ethical Principles", "Professional Codes", "Legal Framework", "Case Studies"],
      progress: 100,
      status: "completed"
    },
    {
      title: "Patient Rights & Autonomy",
      code: "ETH-102",
      duration: "3 hours",
      level: "Intermediate",
      description: "Understanding and respecting patient rights in healthcare",
      topics: ["Informed Consent", "Confidentiality", "Decision Making", "Cultural Sensitivity"],
      progress: 75,
      status: "in-progress"
    },
    {
      title: "End-of-Life Ethics",
      code: "ETH-103",
      duration: "2.5 hours",
      level: "Advanced",
      description: "Ethical considerations in palliative and terminal care",
      topics: ["Palliative Care", "Life Support", "DNR Orders", "Family Communication"],
      progress: 0,
      status: "not-started"
    },
    {
      title: "Research Ethics & Integrity",
      code: "ETH-104",
      duration: "4 hours",
      level: "Advanced",
      description: "Ethical conduct in medical research and publications",
      topics: ["Human Subjects", "IRB Process", "Data Integrity", "Publication Ethics"],
      progress: 0,
      status: "not-started"
    }
  ]

  const assessments = [
    {
      title: "Ethics Fundamentals Quiz",
      module: "ETH-101",
      questions: 20,
      duration: "30 minutes",
      passingScore: 80,
      attempts: 3,
      status: "passed",
      score: 92
    },
    {
      title: "Patient Rights Assessment",
      module: "ETH-102",
      questions: 25,
      duration: "45 minutes",
      passingScore: 75,
      attempts: 2,
      status: "available",
      score: null
    },
    {
      title: "Case Study Analysis",
      module: "ETH-103",
      questions: 15,
      duration: "60 minutes",
      passingScore: 70,
      attempts: 1,
      status: "locked",
      score: null
    }
  ]

  const resources = [
    {
      title: "Ethics Handbook",
      type: "PDF",
      size: "2.4 MB",
      downloads: 145,
      category: "Reference"
    },
    {
      title: "Case Study Collection",
      type: "PDF",
      size: "1.8 MB",
      downloads: 98,
      category: "Practice"
    },
    {
      title: "Video Lectures Series",
      type: "Video",
      size: "450 MB",
      downloads: 67,
      category: "Learning"
    },
    {
      title: "Ethics Decision Framework",
      type: "Interactive",
      size: "Online",
      downloads: 234,
      category: "Tool"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-700"
      case "in-progress": return "bg-blue-100 text-blue-700"
      case "not-started": return "bg-gray-100 text-gray-700"
      case "passed": return "bg-green-100 text-green-700"
      case "available": return "bg-yellow-100 text-yellow-700"
      case "locked": return "bg-gray-100 text-gray-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress === 100) return "bg-green-500"
    if (progress > 0) return "bg-blue-500"
    return "bg-gray-300"
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case "PDF": return <FileText className="w-5 h-5" />
      case "Video": return <Video className="w-5 h-5" />
      case "Interactive": return <FileQuestion className="w-5 h-5" />
      default: return <FileText className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <BookOpen className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ethics Training Module</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Comprehensive medical ethics education and certification</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Professional Development</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* User Progress Overview */}
          <Card className="shadow-lg border-0 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Learning Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">1</div>
                  <div className="text-sm text-gray-600">Modules Completed</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Timer className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">7.5</div>
                  <div className="text-sm text-gray-600">Hours Completed</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">92%</div>
                  <div className="text-sm text-gray-600">Average Score</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">25%</div>
                  <div className="text-sm text-gray-600">Certificate Progress</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Training Modules */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Training Modules</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {modules.map((module, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl text-gray-800">{module.title}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{module.code} • {module.duration} • {module.level}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(module.status)}`}>
                        {module.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">{module.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{module.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(module.progress)}`}
                          style={{ width: `${module.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                        <PlayCircle className="w-4 h-4" />
                        {module.progress === 0 ? 'Start Module' : module.progress === 100 ? 'Review' : 'Continue'}
                      </button>
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View Details">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Assessments */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Assessments</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {assessments.map((assessment, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{assessment.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assessment.status)}`}>
                        {assessment.status.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Module:</span>
                        <span className="font-medium">{assessment.module}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Questions:</span>
                        <span className="font-medium">{assessment.questions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{assessment.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Passing Score:</span>
                        <span className="font-medium">{assessment.passingScore}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Attempts:</span>
                        <span className="font-medium">{assessment.attempts}</span>
                      </div>
                    </div>

                    {assessment.score && (
                      <div className="mb-4 p-3 bg-green-50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-700">{assessment.score}%</div>
                        <div className="text-sm text-green-600">Your Score</div>
                      </div>
                    )}

                    <button 
                      className={`w-full px-4 py-2 rounded-lg transition-colors ${
                        assessment.status === 'locked' 
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : assessment.status === 'passed'
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                      disabled={assessment.status === 'locked'}
                    >
                      {assessment.status === 'locked' ? 'Locked' : 
                       assessment.status === 'passed' ? 'View Results' : 'Start Assessment'}
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Learning Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {getFileIcon(resource.type)}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{resource.title}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center justify-center gap-1">
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">{resource.type}</span>
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">{resource.category}</span>
                      </div>
                      <div>{resource.size}</div>
                      <div>{resource.downloads} downloads</div>
                    </div>
                    <button className="mt-4 w-full bg-green-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Training Support</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For assistance with ethics training modules, assessments, or technical support, please contact our training team.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Support Hotline</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email Support</h3>
                      <p className="text-gray-600 text-sm">ethics.training@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Training Center</h3>
                      <p className="text-gray-600 text-sm">Medical Education Unit</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
