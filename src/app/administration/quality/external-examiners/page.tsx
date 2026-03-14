"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, Globe, University, UserCog } from "lucide-react"

export default function ExternalExaminersPage() {
  const externalExaminers = [
    {
      name: "Prof. Dr. A. K. M. Fazlul Haque",
      university: "Bangabandhu Sheikh Mujib Medical University",
      department: "Department of Medicine",
      specialization: "Internal Medicine & Cardiology",
      experience: "35 years",
      qualifications: "MBBS, FCPS, FRCP (Edin), FACC",
      designation: "Professor & Head",
      email: "f.haque@bsmmu.edu.bd",
      phone: "+880-2-12345678",
      status: "active",
      subjects: ["Medicine", "Cardiology", "Internal Medicine"],
      lastVisit: "2024-10-15",
      nextVisit: "2025-03-20",
      totalVisits: 8,
      rating: 4.8
    },
    {
      name: "Prof. Dr. Fatema Begum",
      university: "Dhaka Medical College",
      department: "Department of Surgery",
      specialization: "General Surgery & Laparoscopic Surgery",
      experience: "28 years",
      qualifications: "MBBS, FCPS, FRCS (Glasgow)",
      designation: "Professor of Surgery",
      email: "fatema.surgery@dmc.gov.bd",
      phone: "+880-2-87654321",
      status: "active",
      subjects: ["Surgery", "General Surgery", "Laparoscopic Surgery"],
      lastVisit: "2024-11-05",
      nextVisit: "2025-02-15",
      totalVisits: 6,
      rating: 4.9
    },
    {
      name: "Prof. Dr. M. R. Khan",
      university: "Chittagong Medical College",
      department: "Department of Gynecology & Obstetrics",
      specialization: "High-Risk Pregnancy & Reproductive Medicine",
      experience: "30 years",
      qualifications: "MBBS, FCPS, MRCOG (London)",
      designation: "Professor & Head",
      email: "mr.khan@cmc.gov.bd",
      phone: "+880-31-654321",
      status: "active",
      subjects: ["Gynecology", "Obstetrics", "Reproductive Medicine"],
      lastVisit: "2024-09-20",
      nextVisit: "2025-04-10",
      totalVisits: 7,
      rating: 4.7
    },
    {
      name: "Prof. Dr. S. Islam",
      university: "Rajshahi Medical College",
      department: "Department of Pediatrics",
      specialization: "Neonatology & Pediatric Cardiology",
      experience: "25 years",
      qualifications: "MBBS, FCPS, FRCPCH (UK)",
      designation: "Professor of Pediatrics",
      email: "s.islam@rmc.gov.bd",
      phone: "+880-721-765432",
      status: "active",
      subjects: ["Pediatrics", "Neonatology", "Pediatric Cardiology"],
      lastVisit: "2024-10-28",
      nextVisit: "2025-01-25",
      totalVisits: 5,
      rating: 4.6
    }
  ]

  const upcomingExaminations = [
    {
      title: "Final Professional MBBS Examination - Phase III",
      date: "2025-01-15",
      time: "9:00 AM - 5:00 PM",
      venue: "Examination Hall A & B",
      examiner: "Prof. Dr. A. K. M. Fazlul Haque",
      subject: "Medicine",
      candidates: 120,
      status: "scheduled",
      priority: "high"
    },
    {
      title: "Professional MBBS Examination - Phase IV",
      date: "2025-02-20",
      time: "9:00 AM - 5:00 PM",
      venue: "Clinical Skills Lab",
      examiner: "Prof. Dr. Fatema Begum",
      subject: "Surgery",
      candidates: 115,
      status: "scheduled",
      priority: "high"
    },
    {
      title: "Formative Assessment - Phase II",
      date: "2025-03-10",
      time: "2:00 PM - 6:00 PM",
      venue: "Lecture Hall C",
      examiner: "Prof. Dr. M. R. Khan",
      subject: "Gynecology & Obstetrics",
      candidates: 125,
      status: "planning",
      priority: "medium"
    },
    {
      title: "OSCE Examination - All Phases",
      date: "2025-04-05",
      time: "8:00 AM - 6:00 PM",
      venue: "OSCE Center",
      examiner: "Multiple Examiners",
      subject: "Clinical Skills",
      candidates: 250,
      status: "planning",
      priority: "critical"
    }
  ]

  const examinationStatistics = [
    {
      metric: "Total Examinations Conducted",
      current: 156,
      target: 180,
      trend: "up",
      change: "+12%"
    },
    {
      metric: "Pass Rate",
      current: 78.5,
      target: 85,
      trend: "up",
      change: "+3.2%"
    },
    {
      metric: "Examiner Satisfaction",
      current: 92.3,
      target: 95,
      trend: "stable",
      change: "+0.5%"
    },
    {
      metric: "Assessment Quality Index",
      current: 88.7,
      target: 90,
      trend: "up",
      change: "+2.1%"
    }
  ]

  const guidelinesDocuments = [
    {
      title: "External Examiner Guidelines",
      description: "Comprehensive guidelines for external examiners",
      type: "PDF",
      size: "2.4 MB",
      uploadDate: "2024-01-15",
      category: "Guidelines"
    },
    {
      title: "Assessment Criteria & Standards",
      description: "Detailed assessment criteria for all examinations",
      type: "PDF",
      size: "3.1 MB",
      uploadDate: "2024-02-20",
      category: "Standards"
    },
    {
      title: "Examination Schedule 2025",
      description: "Complete examination schedule for the year 2025",
      type: "Excel",
      size: "1.2 MB",
      uploadDate: "2024-11-01",
      category: "Schedule"
    },
    {
      title: "OSCE Assessment Framework",
      description: "Framework for Objective Structured Clinical Examination",
      type: "PDF",
      size: "4.5 MB",
      uploadDate: "2024-03-10",
      category: "Framework"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-700"
      case "scheduled": return "bg-blue-100 text-blue-700"
      case "planning": return "bg-yellow-100 text-yellow-700"
      case "urgent": return "bg-red-100 text-red-700"
      case "completed": return "bg-gray-100 text-gray-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical": return "bg-red-100 text-red-700"
      case "high": return "bg-orange-100 text-orange-700"
      case "medium": return "bg-yellow-100 text-yellow-700"
      case "low": return "bg-green-100 text-green-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingIcon className="w-4 h-4 text-green-600" />
      case "down": return <TrendingIcon className="w-4 h-4 text-red-600 rotate-180" />
      default: return <Activity className="w-4 h-4 text-gray-600" />
    }
  }

  const getRatingStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
    }
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-200 text-yellow-400" />)
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />)
    }
    return stars
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <University className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">External Examiners</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Ensuring academic excellence through external assessment and quality assurance</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Quality Assurance</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* External Examiners Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our External Examiners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {externalExaminers.map((examiner, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <UserCog className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{examiner.name}</h3>
                        <p className="text-sm text-blue-600 font-medium">{examiner.designation}</p>
                        <p className="text-sm text-gray-600">{examiner.university}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getStatusColor(examiner.status)}`}>
                          {examiner.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span>{examiner.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{examiner.qualifications}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{examiner.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        <span>{examiner.specialization}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span className="text-blue-600">{examiner.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{examiner.phone}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Subjects Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {examiner.subjects.map((subject, subjectIndex) => (
                          <span key={subjectIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <CalendarDays className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{examiner.totalVisits}</div>
                        <div className="text-xs text-gray-600">Total Visits</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-center mb-1">
                          {getRatingStars(examiner.rating)}
                        </div>
                        <div className="font-semibold">{examiner.rating}</div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Last Visit:</span>
                        <span className="font-medium">{examiner.lastVisit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Next Visit:</span>
                        <span className="font-medium">{examiner.nextVisit}</span>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      Contact Examiner
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Examinations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Upcoming Examinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingExaminations.map((exam, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <FileCheck className="w-6 h-6 text-green-600" />
                        <h3 className="text-lg font-semibold text-gray-800">{exam.title}</h3>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(exam.priority)}`}>
                        {exam.priority.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>Date: {exam.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Time: {exam.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Venue: {exam.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Examiner: {exam.examiner}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>Subject: {exam.subject}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>Candidates: {exam.candidates}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.status)}`}>
                        {exam.status.toUpperCase()}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View Details →
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Examination Statistics */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Examination Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {examinationStatistics.map((stat, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{stat.metric}</h3>
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-gray-800">{stat.current}</span>
                      <span className="text-sm text-gray-500">/ {stat.target}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      {getTrendIcon(stat.trend)}
                      <span className={`text-sm font-medium ${
                        stat.trend === 'up' ? 'text-green-600' : 
                        stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Guidelines & Documents */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Guidelines & Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guidelinesDocuments.map((doc, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{doc.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{doc.description}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <FileIcon className="w-4 h-4" />
                            {doc.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Database className="w-4 h-4" />
                            {doc.size}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            {doc.uploadDate}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            {doc.category}
                          </span>
                          <button className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">External Examination Office</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For inquiries about external examinations, assessment schedules, or examiner coordination, please contact our office.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Examination Office</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email Contact</h3>
                      <p className="text-gray-600 text-sm">external.exam@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Academic Block, Room 301</p>
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
