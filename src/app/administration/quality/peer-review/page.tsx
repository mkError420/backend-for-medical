"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send } from "lucide-react"

export default function PeerReviewPage() {
  const peerReviewCommittees = [
    {
      name: "Basic Sciences Review Committee",
      chairperson: "Prof. Dr. A. Rahman",
      members: 8,
      department: "Department of Anatomy",
      focus: "Anatomy, Physiology, Biochemistry, Community Medicine",
      meetingsPerYear: 12,
      lastMeeting: "2024-11-15",
      nextMeeting: "2024-12-10",
      status: "active",
      completedReviews: 24,
      pendingReviews: 3
    },
    {
      name: "Clinical Sciences Review Committee",
      chairperson: "Prof. Dr. M. Ahmed",
      members: 10,
      department: "Department of Medicine",
      focus: "Medicine, Surgery, Gynecology, Pediatrics",
      meetingsPerYear: 12,
      lastMeeting: "2024-11-20",
      nextMeeting: "2024-12-15",
      status: "active",
      completedReviews: 32,
      pendingReviews: 5
    },
    {
      name: "Para-Clinical Review Committee",
      chairperson: "Prof. Dr. S. Khatun",
      members: 6,
      department: "Department of Pharmacology",
      focus: "Pharmacology, Pathology, Microbiology, Forensic Medicine",
      meetingsPerYear: 8,
      lastMeeting: "2024-11-10",
      nextMeeting: "2024-12-05",
      status: "active",
      completedReviews: 18,
      pendingReviews: 2
    },
    {
      name: "Research & Publication Review Committee",
      chairperson: "Prof. Dr. F. Begum",
      members: 7,
      department: "Department of Research",
      focus: "Research Papers, Publications, Theses",
      meetingsPerYear: 10,
      lastMeeting: "2024-11-25",
      nextMeeting: "2024-12-20",
      status: "active",
      completedReviews: 15,
      pendingReviews: 4
    }
  ]

  const ongoingReviews = [
    {
      title: "MBBS Curriculum Review - Phase I",
      submitter: "Prof. Dr. A. Rahman",
      department: "Department of Anatomy",
      reviewType: "Curriculum Review",
      submittedDate: "2024-11-01",
      deadline: "2024-12-15",
      reviewers: ["Prof. Dr. S. Khatun", "Prof. Dr. M. Ahmed", "Prof. Dr. F. Begum"],
      status: "in-progress",
      priority: "high",
      progress: 65
    },
    {
      title: "Clinical Assessment Methodology",
      submitter: "Prof. Dr. M. Ahmed",
      department: "Department of Medicine",
      reviewType: "Assessment Review",
      submittedDate: "2024-11-05",
      deadline: "2024-12-10",
      reviewers: ["Prof. Dr. F. Begum", "Prof. Dr. A. Rahman"],
      status: "in-progress",
      priority: "medium",
      progress: 40
    },
    {
      title: "Research Ethics Guidelines",
      submitter: "Prof. Dr. S. Khatun",
      department: "Department of Pharmacology",
      reviewType: "Policy Review",
      submittedDate: "2024-11-10",
      deadline: "2024-12-20",
      reviewers: ["Prof. Dr. F. Begum", "Prof. Dr. M. Ahmed", "Prof. Dr. A. Rahman"],
      status: "pending",
      priority: "high",
      progress: 10
    },
    {
      title: "Student Feedback Analysis Report",
      submitter: "Quality Assurance Cell",
      department: "Academic Affairs",
      reviewType: "Report Review",
      submittedDate: "2024-11-15",
      deadline: "2024-12-05",
      reviewers: ["Prof. Dr. A. Rahman", "Prof. Dr. S. Khatun"],
      status: "in-progress",
      priority: "critical",
      progress: 80
    }
  ]

  const reviewStatistics = [
    {
      metric: "Total Reviews Completed",
      current: 89,
      target: 100,
      trend: "up",
      change: "+8%"
    },
    {
      metric: "Average Review Time",
      current: 12.5,
      target: 10,
      trend: "down",
      change: "-2.3 days"
    },
    {
      metric: "Reviewer Participation",
      current: 94.2,
      target: 95,
      trend: "up",
      change: "+1.8%"
    },
    {
      metric: "Quality Score",
      current: 87.8,
      target: 90,
      trend: "up",
      change: "+3.1%"
    }
  ]

  const reviewGuidelines = [
    {
      title: "Peer Review Process Guidelines",
      description: "Standard procedures for conducting peer reviews",
      type: "PDF",
      size: "1.8 MB",
      uploadDate: "2024-01-10",
      category: "Process"
    },
    {
      title: "Review Criteria & Standards",
      description: "Evaluation criteria for different types of reviews",
      type: "PDF",
      size: "2.2 MB",
      uploadDate: "2024-02-15",
      category: "Standards"
    },
    {
      title: "Reviewer Training Manual",
      description: "Comprehensive training guide for peer reviewers",
      type: "PDF",
      size: "3.5 MB",
      uploadDate: "2024-03-20",
      category: "Training"
    },
    {
      title: "Quality Assurance Framework",
      description: "Framework for maintaining review quality",
      type: "PDF",
      size: "2.8 MB",
      uploadDate: "2024-04-05",
      category: "Framework"
    }
  ]

  const recentActivities = [
    {
      action: "Review Completed",
      item: "MBBS Curriculum Review - Phase II",
      reviewer: "Prof. Dr. S. Khatun",
      date: "2024-11-28",
      time: "10:30 AM",
      status: "completed"
    },
    {
      action: "Review Assigned",
      item: "Clinical Assessment Methodology",
      reviewer: "Prof. Dr. F. Begum",
      date: "2024-11-28",
      time: "2:15 PM",
      status: "assigned"
    },
    {
      action: "Review Submitted",
      item: "Research Ethics Guidelines",
      reviewer: "Prof. Dr. M. Ahmed",
      date: "2024-11-27",
      time: "4:45 PM",
      status: "submitted"
    },
    {
      action: "Meeting Scheduled",
      item: "Basic Sciences Committee Meeting",
      reviewer: "Prof. Dr. A. Rahman",
      date: "2024-11-27",
      time: "11:00 AM",
      status: "scheduled"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-700"
      case "in-progress": return "bg-blue-100 text-blue-700"
      case "pending": return "bg-yellow-100 text-yellow-700"
      case "completed": return "bg-gray-100 text-gray-700"
      case "assigned": return "bg-purple-100 text-purple-700"
      case "submitted": return "bg-indigo-100 text-indigo-700"
      case "scheduled": return "bg-orange-100 text-orange-700"
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
                <MessageCircle className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Peer Review</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Collaborative quality assurance through systematic peer evaluation</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Quality Assurance</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Peer Review Committees */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Peer Review Committees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {peerReviewCommittees.map((committee, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <Users className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{committee.name}</h3>
                        <p className="text-sm text-blue-600 font-medium">Chair: {committee.chairperson}</p>
                        <p className="text-sm text-gray-600">{committee.department}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getStatusColor(committee.status)}`}>
                          {committee.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{committee.members} members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{committee.focus}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{committee.meetingsPerYear} meetings/year</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <CheckSquare className="w-5 h-5 text-green-600 mx-auto mb-1" />
                        <div className="font-semibold">{committee.completedReviews}</div>
                        <div className="text-xs text-gray-600">Completed</div>
                      </div>
                      <div className="text-center p-3 bg-yellow-50 rounded-lg">
                        <Clock className="w-5 h-5 text-yellow-600 mx-auto mb-1" />
                        <div className="font-semibold">{committee.pendingReviews}</div>
                        <div className="text-xs text-gray-600">Pending</div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Last Meeting:</span>
                        <span className="font-medium">{committee.lastMeeting}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Next Meeting:</span>
                        <span className="font-medium">{committee.nextMeeting}</span>
                      </div>
                    </div>

                    <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Committee Details
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ongoing Reviews */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Ongoing Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ongoingReviews.map((review, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <FileSearch className="w-6 h-6 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-800">{review.title}</h3>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(review.priority)}`}>
                        {review.priority.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Submitter: {review.submitter}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span>{review.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>Type: {review.reviewType}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Reviewers:</h4>
                      <div className="space-y-1">
                        {review.reviewers.map((reviewer, reviewerIndex) => (
                          <div key={reviewerIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {reviewer}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{review.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(review.progress)}`}
                          style={{ width: `${review.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(review.status)}`}>
                        {review.status.toUpperCase()}
                      </span>
                      <div className="text-sm text-gray-600">
                        <span>Deadline: {review.deadline}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Review Statistics */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Review Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviewStatistics.map((stat, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
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

          {/* Recent Activities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Recent Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentActivities.map((activity, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <RefreshCw className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-semibold text-gray-800">{activity.action}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                            {activity.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{activity.item}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {activity.reviewer}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-3 h-3" />
                            {activity.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {activity.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Review Guidelines */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Review Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviewGuidelines.map((guide, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{guide.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <FileIcon className="w-4 h-4" />
                            {guide.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Database className="w-4 h-4" />
                            {guide.size}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="w-4 h-4" />
                            {guide.uploadDate}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                            {guide.category}
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
                <h2 className="text-3xl font-bold mb-6">Peer Review Office</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For inquiries about peer review processes, committee assignments, or review guidelines, please contact our office.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Review Office</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email Contact</h3>
                      <p className="text-gray-600 text-sm">peer.review@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Academic Block, Room 302</p>
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
