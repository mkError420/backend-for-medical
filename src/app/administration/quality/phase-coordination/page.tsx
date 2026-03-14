"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor } from "lucide-react"

export default function PhaseCoordinationPage() {
  const phases = [
    {
      name: "Phase I (Year 1-2)",
      title: "Basic Sciences Foundation",
      duration: "2 years",
      focus: "Anatomy, Physiology, Biochemistry, Community Medicine",
      coordinator: "Prof. Dr. A. Rahman",
      totalStudents: 250,
      completedModules: 12,
      totalModules: 16,
      progress: 75,
      status: "active",
      color: "blue"
    },
    {
      name: "Phase II (Year 3)",
      title: "Para-Clinical Sciences",
      duration: "1 year",
      focus: "Pharmacology, Pathology, Microbiology, Forensic Medicine",
      coordinator: "Prof. Dr. S. Khatun",
      totalStudents: 125,
      completedModules: 8,
      totalModules: 10,
      progress: 80,
      status: "active",
      color: "green"
    },
    {
      name: "Phase III (Year 4)",
      title: "Clinical Sciences - Part I",
      duration: "1 year",
      focus: "Medicine, Surgery, Gynecology & Obstetrics",
      coordinator: "Prof. Dr. M. Ahmed",
      totalStudents: 120,
      completedModules: 6,
      totalModules: 12,
      progress: 50,
      status: "active",
      color: "purple"
    },
    {
      name: "Phase IV (Year 5)",
      title: "Clinical Sciences - Part II",
      duration: "1 year",
      focus: "Pediatrics, ENT, Ophthalmology, Orthopedics, Specialized Medicine",
      coordinator: "Prof. Dr. F. Begum",
      totalStudents: 115,
      completedModules: 4,
      totalModules: 14,
      progress: 28,
      status: "active",
      color: "orange"
    }
  ]

  const coordinators = [
    {
      name: "Prof. Dr. Abdul Rahman",
      phase: "Phase I Coordinator",
      designation: "Professor of Anatomy",
      department: "Department of Anatomy",
      experience: "22 years",
      qualifications: "MBBS, M.Phil (Anatomy)",
      email: "rahman.anatomy@rcmc.edu.bd",
      phone: "Ext: 2345",
      responsibilities: [
        "Curriculum implementation for Phase I",
        "Faculty coordination for basic sciences",
        "Student progress monitoring",
        "Inter-departmental liaison"
      ]
    },
    {
      name: "Prof. Dr. Salma Khatun",
      phase: "Phase II Coordinator",
      designation: "Professor of Pharmacology",
      department: "Department of Pharmacology",
      experience: "20 years",
      qualifications: "MBBS, M.Phil, PhD",
      email: "salma.pharmacology@rcmc.edu.bd",
      phone: "Ext: 2346",
      responsibilities: [
        "Para-clinical curriculum oversight",
        "Laboratory coordination",
        "Research integration",
        "Assessment planning"
      ]
    },
    {
      name: "Prof. Dr. Mahmud Ahmed",
      phase: "Phase III Coordinator",
      designation: "Professor of Medicine",
      department: "Department of Medicine",
      experience: "25 years",
      qualifications: "MBBS, FCPS, FRCP",
      email: "mahmud.medicine@rcmc.edu.bd",
      phone: "Ext: 2347",
      responsibilities: [
        "Clinical rotation planning",
        "Hospital coordination",
        "Clinical skills training",
        "Patient care integration"
      ]
    },
    {
      name: "Prof. Dr. Farida Begum",
      phase: "Phase IV Coordinator",
      designation: "Professor of Gynecology",
      department: "Department of Gynae & Obs",
      experience: "23 years",
      qualifications: "MBBS, FCPS, FRCOG",
      email: "farida.gynae@rcmc.edu.bd",
      phone: "Ext: 2348",
      responsibilities: [
        "Advanced clinical training",
        "Specialty rotation management",
        "Internship preparation",
        "Final examination coordination"
      ]
    }
  ]

  const coordinationActivities = [
    {
      title: "Phase Transition Meetings",
      description: "Regular meetings to ensure smooth transition between phases",
      frequency: "Monthly",
      participants: "All Phase Coordinators",
      nextMeeting: "2024-12-05",
      status: "scheduled",
      outcomes: [
        "Curriculum alignment review",
        "Student progress assessment",
        "Resource allocation planning",
        "Faculty deployment strategy"
      ]
    },
    {
      title: "Inter-Phase Integration Workshops",
      description: "Workshops to integrate learning across different phases",
      frequency: "Quarterly",
      participants: "Faculty & Students",
      nextMeeting: "2024-12-15",
      status: "planning",
      outcomes: [
        "Cross-phase case discussions",
        "Integrated learning approaches",
        "Best practice sharing",
        "Student feedback collection"
      ]
    },
    {
      title: "Curriculum Review Sessions",
      description: "Comprehensive review of phase-wise curriculum",
      frequency: "Bi-annual",
      participants: "Academic Council & Coordinators",
      nextMeeting: "2024-12-20",
      status: "scheduled",
      outcomes: [
        "Curriculum gap analysis",
        "Update recommendations",
        "Assessment method review",
        "Learning outcome evaluation"
      ]
    },
    {
      title: "Student Progress Reviews",
      description: "Detailed review of student performance across phases",
      frequency: "Monthly",
      participants: "Phase Coordinators & Faculty",
      nextMeeting: "2024-11-28",
      status: "urgent",
      outcomes: [
        "Performance analysis",
        "Remedial planning",
        "Academic support strategies",
        "Parent communication"
      ]
    }
  ]

  const upcomingEvents = [
    {
      title: "Phase I to II Transition Workshop",
      date: "2024-12-10",
      time: "9:00 AM - 1:00 PM",
      venue: "Lecture Hall A",
      type: "Workshop",
      participants: "Phase I & II Students",
      priority: "high"
    },
    {
      title: "Clinical Skills Assessment",
      date: "2024-12-12",
      time: "2:00 PM - 5:00 PM",
      venue: "Clinical Skills Lab",
      type: "Assessment",
      participants: "Phase III Students",
      priority: "medium"
    },
    {
      title: "Inter-Phase Research Symposium",
      date: "2024-12-18",
      time: "10:00 AM - 4:00 PM",
      venue: "Conference Hall",
      type: "Symposium",
      participants: "All Phases",
      priority: "high"
    },
    {
      title: "Phase Coordination Meeting",
      date: "2024-12-20",
      time: "3:00 PM - 5:00 PM",
      venue: "Meeting Room 301",
      type: "Meeting",
      participants: "All Coordinators",
      priority: "critical"
    }
  ]

  const performanceMetrics = [
    {
      metric: "Phase Completion Rate",
      current: 85.5,
      target: 90,
      trend: "up",
      change: "+3.2%"
    },
    {
      metric: "Student Satisfaction",
      current: 78.3,
      target: 85,
      trend: "up",
      change: "+2.8%"
    },
    {
      metric: "Faculty Coordination Index",
      current: 92.1,
      target: 95,
      trend: "stable",
      change: "0%"
    },
    {
      metric: "Resource Utilization",
      current: 88.7,
      target: 90,
      trend: "up",
      change: "+1.5%"
    }
  ]

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500"
    if (progress >= 60) return "bg-blue-500"
    if (progress >= 40) return "bg-yellow-500"
    return "bg-red-500"
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Layers className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Phase Coordination</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Seamless integration and coordination across all MBBS phases</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Academic Management</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Phase Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">MBBS Phase Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {phases.map((phase, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardHeader className={`bg-gradient-to-r from-${phase.color}-50 to-${phase.color}-100`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl text-gray-800">{phase.name}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{phase.title}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(phase.status)}`}>
                        {phase.status.toUpperCase()}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Focus Areas:</p>
                      <p className="text-gray-700">{phase.focus}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{phase.totalStudents}</div>
                        <div className="text-xs text-gray-600">Students</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Clock className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{phase.duration}</div>
                        <div className="text-xs text-gray-600">Duration</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{phase.completedModules}/{phase.totalModules} modules</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(phase.progress)}`}
                          style={{ width: `${phase.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Coordinator:</span> {phase.coordinator}
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View Details →
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Phase Coordinators */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Phase Coordinators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coordinators.map((coordinator, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <User className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{coordinator.name}</h3>
                        <p className="text-sm text-blue-600 font-medium">{coordinator.phase}</p>
                        <p className="text-sm text-gray-600">{coordinator.designation}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span>{coordinator.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{coordinator.qualifications}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{coordinator.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span className="text-blue-600">{coordinator.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{coordinator.phone}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {coordinator.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      Contact Coordinator
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Coordination Activities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Coordination Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coordinationActivities.map((activity, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Workflow className="w-6 h-6 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-800">{activity.title}</h3>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                        {activity.status.toUpperCase()}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Frequency: {activity.frequency}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{activity.participants}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Expected Outcomes:</h4>
                      <ul className="space-y-1">
                        {activity.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-600 mt-1" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Next: {activity.nextMeeting}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Schedule →
                      </button>
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
                        <CalendarDays className="w-6 h-6 text-green-600" />
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

                    <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      Add to Calendar
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
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

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Phase Coordination Office</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For inquiries about phase coordination, curriculum integration, or academic transitions, please contact our office.
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
                      <p className="text-gray-600 text-sm">phase.coordination@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Academic Block, Room 401</p>
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
