"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, VideoIcon, Award, Trophy, Medal, GraduationCap, School, User, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Users, CheckCircle, Clock, Eye, Calendar, MapPin, BarChart3, CheckSquare, Download, Phone, Mail, FileText, Activity, TrendingUp } from "lucide-react"

export default function FacultyDevelopmentPage() {
  const developmentPrograms = [
    {
      name: "Teaching Excellence Program",
      coordinator: "Prof. Dr. S. Khatun",
      duration: "6 months",
      participants: 45,
      completedParticipants: 32,
      status: "active",
      focus: "Modern teaching methodologies, assessment techniques",
      nextSession: "2024-12-10",
      completionRate: 71,
      color: "blue"
    },
    {
      name: "Research Skills Workshop",
      coordinator: "Prof. Dr. M. Ahmed",
      duration: "3 months",
      participants: 28,
      completedParticipants: 22,
      status: "active",
      focus: "Research methodology, paper writing, grant proposals",
      nextSession: "2024-12-15",
      completionRate: 79,
      color: "green"
    },
    {
      name: "Clinical Skills Enhancement",
      coordinator: "Prof. Dr. F. Begum",
      duration: "4 months",
      participants: 35,
      completedParticipants: 25,
      status: "active",
      focus: "Advanced clinical procedures, patient care",
      nextSession: "2024-12-08",
      completionRate: 71,
      color: "purple"
    },
    {
      name: "Leadership Development",
      coordinator: "Prof. Dr. A. Rahman",
      duration: "8 months",
      participants: 20,
      completedParticipants: 12,
      status: "active",
      focus: "Academic leadership, administration, management",
      nextSession: "2024-12-20",
      completionRate: 60,
      color: "orange"
    }
  ]

  const upcomingWorkshops = [
    {
      title: "Advanced Teaching Methodologies",
      date: "2024-12-10",
      time: "9:00 AM - 1:00 PM",
      venue: "Lecture Hall A",
      instructor: "Prof. Dr. S. Khatun",
      participants: 25,
      maxParticipants: 30,
      status: "open",
      priority: "high",
      category: "Teaching"
    },
    {
      title: "Research Paper Writing",
      date: "2024-12-15",
      time: "2:00 PM - 5:00 PM",
      venue: "Conference Room B",
      instructor: "Prof. Dr. M. Ahmed",
      participants: 18,
      maxParticipants: 25,
      status: "open",
      priority: "medium",
      category: "Research"
    },
    {
      title: "Digital Assessment Tools",
      date: "2024-12-18",
      time: "10:00 AM - 12:00 PM",
      venue: "Computer Lab",
      instructor: "IT Department",
      participants: 15,
      maxParticipants: 20,
      status: "open",
      priority: "medium",
      category: "Technology"
    },
    {
      title: "Clinical Simulation Training",
      date: "2024-12-22",
      time: "8:00 AM - 4:00 PM",
      venue: "Simulation Center",
      instructor: "Prof. Dr. F. Begum",
      participants: 12,
      maxParticipants: 15,
      status: "open",
      priority: "high",
      category: "Clinical"
    }
  ]

  const facultyAchievements = [
    {
      name: "Prof. Dr. A. Rahman",
      achievement: "Best Research Paper Award",
      category: "Research",
      date: "2024-11-15",
      description: "Awarded for outstanding research in medical education",
      impact: "High"
    },
    {
      name: "Prof. Dr. S. Khatun",
      achievement: "Excellence in Teaching",
      category: "Teaching",
      date: "2024-11-10",
      description: "Recognized for innovative teaching methodologies",
      impact: "High"
    },
    {
      name: "Prof. Dr. M. Ahmed",
      achievement: "Research Grant Approval",
      category: "Research",
      date: "2024-11-05",
      description: "Received grant for cardiovascular research project",
      impact: "Medium"
    },
    {
      name: "Prof. Dr. F. Begum",
      achievement: "International Publication",
      category: "Publication",
      date: "2024-11-01",
      description: "Published paper in international medical journal",
      impact: "High"
    }
  ]

  const developmentMetrics = [
    {
      metric: "Faculty Participation Rate",
      current: 78.5,
      target: 85,
      trend: "up",
      change: "+5.2%"
    },
    {
      metric: "Program Completion Rate",
      current: 82.3,
      target: 90,
      trend: "up",
      change: "+3.8%"
    },
    {
      metric: "Satisfaction Score",
      current: 87.6,
      target: 90,
      trend: "up",
      change: "+2.1%"
    },
    {
      metric: "Skill Improvement Index",
      current: 75.8,
      target: 80,
      trend: "stable",
      change: "+1.5%"
    }
  ]

  const trainingResources = [
    {
      title: "Teaching Methods Handbook",
      description: "Comprehensive guide to modern teaching methodologies",
      type: "PDF",
      size: "4.2 MB",
      uploadDate: "2024-01-15",
      category: "Teaching"
    },
    {
      title: "Research Toolkit",
      description: "Tools and templates for research activities",
      type: "ZIP",
      size: "8.5 MB",
      uploadDate: "2024-02-20",
      category: "Research"
    },
    {
      title: "Clinical Skills Videos",
      description: "Video tutorials for clinical procedures",
      type: "MP4",
      size: "1.2 GB",
      uploadDate: "2024-03-10",
      category: "Clinical"
    },
    {
      title: "Assessment Guidelines",
      description: "Guidelines for student assessment and evaluation",
      type: "PDF",
      size: "2.8 MB",
      uploadDate: "2024-04-05",
      category: "Assessment"
    }
  ]

  const mentorshipPrograms = [
    {
      title: "Junior Faculty Mentorship",
      mentor: "Prof. Dr. A. Rahman",
      mentees: 8,
      duration: "12 months",
      focus: "Career development, research guidance",
      status: "active",
      startDate: "2024-01-01",
      endDate: "2024-12-31"
    },
    {
      title: "New Faculty Induction",
      mentor: "Prof. Dr. S. Khatun",
      mentees: 5,
      duration: "6 months",
      focus: "Institutional orientation, teaching basics",
      status: "active",
      startDate: "2024-07-01",
      endDate: "2024-12-31"
    },
    {
      title: "Research Mentorship",
      mentor: "Prof. Dr. M. Ahmed",
      mentees: 6,
      duration: "18 months",
      focus: "Research methodology, publication support",
      status: "active",
      startDate: "2024-03-01",
      endDate: "2025-08-31"
    },
    {
      title: "Leadership Coaching",
      mentor: "Prof. Dr. F. Begum",
      mentees: 4,
      duration: "9 months",
      focus: "Leadership skills, administration",
      status: "active",
      startDate: "2024-04-01",
      endDate: "2024-12-31"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-700"
      case "open": return "bg-blue-100 text-blue-700"
      case "completed": return "bg-gray-100 text-gray-700"
      case "planning": return "bg-yellow-100 text-yellow-700"
      case "closed": return "bg-red-100 text-red-700"
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
      case "up": return <TrendingUp className="w-4 h-4 text-green-600" />
      case "down": return <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />
      default: return <Activity className="w-4 h-4 text-gray-600" />
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500"
    if (progress >= 60) return "bg-blue-500"
    if (progress >= 40) return "bg-yellow-500"
    return "bg-red-500"
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "bg-red-100 text-red-700"
      case "Medium": return "bg-yellow-100 text-yellow-700"
      case "Low": return "bg-green-100 text-green-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <User className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Faculty Development</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Empowering educators through continuous learning and professional growth</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Academic Excellence</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Development Programs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Development Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {developmentPrograms.map((program, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{program.name}</h3>
                        <p className="text-sm text-blue-600 font-medium">Coordinator: {program.coordinator}</p>
                        <p className="text-sm text-gray-600">{program.focus}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getStatusColor(program.status)}`}>
                          {program.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{program.participants}</div>
                        <div className="text-xs text-gray-600">Total</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <CheckSquare className="w-5 h-5 text-green-600 mx-auto mb-1" />
                        <div className="font-semibold">{program.completedParticipants}</div>
                        <div className="text-xs text-gray-600">Completed</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="font-semibold">{program.duration}</div>
                        <div className="text-xs text-gray-600">Duration</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Completion Rate</span>
                        <span>{program.completionRate}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(program.completionRate)}`}
                          style={{ width: `${program.completionRate}%` }}
                        />
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Next Session:</span>
                        <span className="font-medium">{program.nextSession}</span>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Program Details
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Workshops */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Upcoming Workshops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingWorkshops.map((workshop, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Book className="w-6 h-6 text-purple-600" />
                        <h3 className="text-lg font-semibold text-gray-800">{workshop.title}</h3>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(workshop.priority)}`}>
                        {workshop.priority.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Date: {workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Time: {workshop.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Venue: {workshop.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Instructor: {workshop.instructor}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Participants</span>
                        <span>{workshop.participants}/{workshop.maxParticipants}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-purple-500 transition-all duration-300"
                          style={{ width: `${(workshop.participants / workshop.maxParticipants) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(workshop.status)}`}>
                        {workshop.status.toUpperCase()}
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        {workshop.category}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Faculty Achievements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Faculty Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facultyAchievements.map((achievement, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-800">{achievement.achievement}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(achievement.impact)}`}>
                            {achievement.impact} IMPACT
                          </span>
                        </div>
                        <p className="text-sm text-blue-600 font-medium mb-1">{achievement.name}</p>
                        <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                            {achievement.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {achievement.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Development Metrics */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Development Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentMetrics.map((metric, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
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

          {/* Mentorship Programs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Mentorship Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mentorshipPrograms.map((program, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{program.title}</h3>
                        <p className="text-sm text-blue-600 font-medium">Mentor: {program.mentor}</p>
                        <p className="text-sm text-gray-600">{program.focus}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getStatusColor(program.status)}`}>
                          {program.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{program.mentees}</div>
                        <div className="text-xs text-gray-600">Mentees</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="font-semibold">{program.duration}</div>
                        <div className="text-xs text-gray-600">Duration</div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Start Date:</span>
                        <span className="font-medium">{program.startDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>End Date:</span>
                        <span className="font-medium">{program.endDate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Training Resources */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Training Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingResources.map((resource, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Book className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{resource.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            {resource.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <BarChart3 className="w-4 h-4" />
                            {resource.size}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
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
                <h2 className="text-3xl font-bold mb-6">Faculty Development Office</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For inquiries about faculty development programs, workshops, or mentorship opportunities, please contact our office.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Development Office</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email Contact</h3>
                      <p className="text-gray-600 text-sm">faculty.development@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Academic Block, Room 304</p>
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
