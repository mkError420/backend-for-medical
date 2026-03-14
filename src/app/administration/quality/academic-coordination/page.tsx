"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle } from "lucide-react"

export default function AcademicCoordinationPage() {
  const coordinationUnits = [
    {
      name: "Curriculum Development Unit",
      head: "Prof. Dr. A. Rahman",
      staff: 12,
      focus: "Curriculum Design, Review, Implementation",
      projects: 8,
      completedProjects: 5,
      status: "active",
      color: "blue"
    },
    {
      name: "Faculty Development Unit",
      head: "Prof. Dr. S. Khatun",
      staff: 8,
      focus: "Training, Workshops, Skill Enhancement",
      projects: 6,
      completedProjects: 4,
      status: "active",
      color: "green"
    },
    {
      name: "Student Affairs Unit",
      head: "Prof. Dr. M. Ahmed",
      staff: 10,
      focus: "Student Support, Counseling, Activities",
      projects: 10,
      completedProjects: 7,
      status: "active",
      color: "purple"
    },
    {
      name: "Assessment & Evaluation Unit",
      head: "Prof. Dr. F. Begum",
      staff: 6,
      focus: "Examination, Assessment, Quality Control",
      projects: 7,
      completedProjects: 5,
      status: "active",
      color: "orange"
    }
  ]

  const ongoingInitiatives = [
    {
      title: "Integrated Curriculum Implementation",
      description: "Implementation of integrated MBBS curriculum across all phases",
      coordinator: "Prof. Dr. A. Rahman",
      departments: ["Anatomy", "Physiology", "Biochemistry", "Pharmacology"],
      startDate: "2024-01-15",
      targetDate: "2024-12-31",
      progress: 75,
      status: "in-progress",
      priority: "high",
      milestones: [
        { title: "Curriculum Mapping", completed: true, date: "2024-03-30" },
        { title: "Faculty Training", completed: true, date: "2024-06-15" },
        { title: "Pilot Implementation", completed: true, date: "2024-09-01" },
        { title: "Full Implementation", completed: false, date: "2024-12-31" }
      ]
    },
    {
      title: "Digital Learning Platform",
      description: "Development and deployment of comprehensive digital learning platform",
      coordinator: "Prof. Dr. S. Khatun",
      departments: ["IT Department", "Library", "All Clinical Departments"],
      startDate: "2024-02-01",
      targetDate: "2025-03-31",
      progress: 60,
      status: "in-progress",
      priority: "critical",
      milestones: [
        { title: "Platform Development", completed: true, date: "2024-08-15" },
        { title: "Content Upload", completed: true, date: "2024-10-30" },
        { title: "Beta Testing", completed: false, date: "2025-01-15" },
        { title: "Full Launch", completed: false, date: "2025-03-31" }
      ]
    },
    {
      title: "Research Capacity Building",
      description: "Enhancing research capabilities and infrastructure",
      coordinator: "Prof. Dr. M. Ahmed",
      departments: ["Research Cell", "All Departments"],
      startDate: "2024-03-01",
      targetDate: "2025-06-30",
      progress: 45,
      status: "in-progress",
      priority: "medium",
      milestones: [
        { title: "Infrastructure Setup", completed: true, date: "2024-09-30" },
        { title: "Training Programs", completed: true, date: "2024-11-15" },
        { title: "Research Grants", completed: false, date: "2025-03-31" },
        { title: "Publication Support", completed: false, date: "2025-06-30" }
      ]
    },
    {
      title: "Student Mentorship Program",
      description: "Comprehensive mentorship program for academic and professional development",
      coordinator: "Prof. Dr. F. Begum",
      departments: ["Student Affairs", "All Departments"],
      startDate: "2024-04-01",
      targetDate: "2024-12-15",
      progress: 85,
      status: "in-progress",
      priority: "high",
      milestones: [
        { title: "Program Design", completed: true, date: "2024-06-30" },
        { title: "Mentor Training", completed: true, date: "2024-08-15" },
        { title: "Pilot Phase", completed: true, date: "2024-10-01" },
        { title: "Full Implementation", completed: false, date: "2024-12-15" }
      ]
    }
  ]

  const coordinationMetrics = [
    {
      metric: "Inter-Departmental Collaboration",
      current: 87.5,
      target: 90,
      trend: "up",
      change: "+4.2%"
    },
    {
      metric: "Initiative Completion Rate",
      current: 78.3,
      target: 85,
      trend: "up",
      change: "+3.8%"
    },
    {
      metric: "Faculty Engagement",
      current: 92.1,
      target: 95,
      trend: "stable",
      change: "+1.2%"
    },
    {
      metric: "Student Satisfaction",
      current: 84.7,
      target: 88,
      trend: "up",
      change: "+2.5%"
    }
  ]

  const upcomingEvents = [
    {
      title: "Academic Coordination Meeting",
      date: "2024-12-05",
      time: "2:00 PM - 4:00 PM",
      venue: "Conference Hall A",
      type: "Meeting",
      participants: "All Unit Heads",
      priority: "high"
    },
    {
      title: "Curriculum Review Workshop",
      date: "2024-12-10",
      time: "9:00 AM - 1:00 PM",
      venue: "Lecture Hall B",
      type: "Workshop",
      participants: "Faculty Members",
      priority: "medium"
    },
    {
      title: "Digital Platform Training",
      date: "2024-12-15",
      time: "10:00 AM - 12:00 PM",
      venue: "Computer Lab",
      type: "Training",
      participants: "Students & Faculty",
      priority: "high"
    },
    {
      title: "Research Symposium",
      date: "2024-12-20",
      time: "9:00 AM - 5:00 PM",
      venue: "Auditorium",
      type: "Symposium",
      participants: "All Departments",
      priority: "critical"
    }
  ]

  const coordinationResources = [
    {
      title: "Academic Coordination Framework",
      description: "Comprehensive framework for academic coordination activities",
      type: "PDF",
      size: "3.2 MB",
      uploadDate: "2024-01-10",
      category: "Framework"
    },
    {
      title: "Inter-Departmental Guidelines",
      description: "Guidelines for effective inter-departmental collaboration",
      type: "PDF",
      size: "2.1 MB",
      uploadDate: "2024-02-15",
      category: "Guidelines"
    },
    {
      title: "Initiative Management Handbook",
      description: "Handbook for managing academic initiatives",
      type: "PDF",
      size: "4.5 MB",
      uploadDate: "2024-03-20",
      category: "Handbook"
    },
    {
      title: "Quality Assurance Protocols",
      description: "Protocols for maintaining academic quality",
      type: "PDF",
      size: "2.8 MB",
      uploadDate: "2024-04-05",
      category: "Protocols"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-700"
      case "in-progress": return "bg-blue-100 text-blue-700"
      case "completed": return "bg-gray-100 text-gray-700"
      case "planning": return "bg-yellow-100 text-yellow-700"
      case "critical": return "bg-red-100 text-red-700"
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

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500"
    if (progress >= 60) return "bg-blue-500"
    if (progress >= 40) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Network className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Coordination</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Integrating academic excellence through coordinated efforts and collaboration</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Academic Management</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Coordination Units */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Coordination Units</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coordinationUnits.map((unit, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <GitMerge className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{unit.name}</h3>
                        <p className="text-sm text-blue-600 font-medium">Head: {unit.head}</p>
                        <p className="text-sm text-gray-600">{unit.focus}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getStatusColor(unit.status)}`}>
                          {unit.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{unit.staff}</div>
                        <div className="text-xs text-gray-600">Staff</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Target className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="font-semibold">{unit.projects}</div>
                        <div className="text-xs text-gray-600">Projects</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <CheckSquare className="w-5 h-5 text-green-600 mx-auto mb-1" />
                        <div className="font-semibold">{unit.completedProjects}</div>
                        <div className="text-xs text-gray-600">Completed</div>
                      </div>
                    </div>

                    <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Unit Details
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ongoing Initiatives */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Ongoing Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ongoingInitiatives.map((initiative, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <ArrowRightCircle className="w-6 h-6 text-green-600" />
                        <h3 className="text-lg font-semibold text-gray-800">{initiative.title}</h3>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(initiative.priority)}`}>
                        {initiative.priority.toUpperCase()}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{initiative.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Coordinator: {initiative.coordinator}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span>Departments: {initiative.departments.join(", ")}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{initiative.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(initiative.progress)}`}
                          style={{ width: `${initiative.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Milestones:</h4>
                      <div className="space-y-2">
                        {initiative.milestones.map((milestone, milestoneIndex) => (
                          <div key={milestoneIndex} className="flex items-center gap-2 text-sm">
                            {milestone.completed ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <Clock className="w-4 h-4 text-gray-400" />
                            )}
                            <span className={milestone.completed ? "text-gray-700" : "text-gray-500"}>
                              {milestone.title}
                            </span>
                            <span className="text-xs text-gray-500 ml-auto">
                              {milestone.date}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(initiative.status)}`}>
                        {initiative.status.toUpperCase()}
                      </span>
                      <div className="text-sm text-gray-600">
                        <span>Target: {initiative.targetDate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Coordination Metrics */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Coordination Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coordinationMetrics.map((metric, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{metric.metric}</h3>
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-gray-800">{metric.current}%</span>
                      <span className="text-sm text-gray-500">/ {metric.target}%</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      {getTrendIcon(metric.trend)}
                      <span className={`text-sm font-medium ${
                        metric.trend === 'up' ? 'text-green-600' : 
                        metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <CalendarDays className="w-6 h-6 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(event.priority)}`}>
                        {event.priority.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>Date: {event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Time: {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Venue: {event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Monitor className="w-4 h-4" />
                        <span>Type: {event.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>Participants: {event.participants}</span>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      Add to Calendar
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Coordination Resources */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Coordination Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coordinationResources.map((resource, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{resource.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <FileIcon className="w-4 h-4" />
                            {resource.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Database className="w-4 h-4" />
                            {resource.size}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            {resource.uploadDate}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                            {resource.category}
                          </span>
                          <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1">
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
                <h2 className="text-3xl font-bold mb-6">Academic Coordination Office</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For inquiries about academic coordination, inter-departmental collaboration, or initiative management, please contact our office.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Coordination Office</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email Contact</h3>
                      <p className="text-gray-600 text-sm">academic.coordination@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Academic Block, Room 303</p>
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
