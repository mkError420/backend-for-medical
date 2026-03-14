"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, AwardIcon as Award2 } from "lucide-react"

export default function AcademicCouncilPage() {
  const councilMembers = [
    {
      name: "Prof. Dr. Md. Abdul Karim",
      position: "Chairman",
      designation: "Principal & Professor of Medicine",
      department: "Department of Medicine",
      experience: "30 years",
      qualifications: "MBBS, FCPS, FRCP",
      email: "principal@rcmc.edu.bd",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Prof. Dr. Fatema Begum",
      position: "Vice-Chairman",
      designation: "Vice Principal & Professor of Surgery",
      department: "Department of Surgery",
      experience: "28 years",
      qualifications: "MBBS, FCPS, FRCS",
      email: "viceprincipal@rcmc.edu.bd",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Prof. Dr. Ahmed Hassan",
      position: "Member",
      designation: "Professor & Head",
      department: "Department of Pediatrics",
      experience: "25 years",
      qualifications: "MBBS, FCPS, MRCPCH",
      email: "ahmed.pediatrics@rcmc.edu.bd",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Prof. Dr. Salma Khatun",
      position: "Member",
      designation: "Professor & Head",
      department: "Department of Gynecology & Obstetrics",
      experience: "22 years",
      qualifications: "MBBS, FCPS, FRCOG",
      email: "salma.gynae@rcmc.edu.bd",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Associate Prof. Dr. Rahman Miah",
      position: "Member Secretary",
      designation: "Associate Professor",
      department: "Department of Pharmacology",
      experience: "18 years",
      qualifications: "MBBS, M.Phil, PhD",
      email: "rahman.pharmacology@rcmc.edu.bd",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Dr. Nasreen Akhter",
      position: "Member",
      designation: "Assistant Professor",
      department: "Department of Community Medicine",
      experience: "12 years",
      qualifications: "MBBS, MPH",
      email: "nasreen.community@rcmc.edu.bd",
      image: "/api/placeholder/150/150"
    }
  ]

  const councilFunctions = [
    {
      title: "Academic Policy Development",
      description: "Formulate and review academic policies, regulations, and standards",
      category: "Policy Making",
      frequency: "Annual Review",
      impact: "High"
    },
    {
      title: "Curriculum Oversight",
      description: "Approve and monitor curriculum development and modifications",
      category: "Curriculum",
      frequency: "Bi-annual Review",
      impact: "Critical"
    },
    {
      title: "Quality Assurance",
      description: "Ensure academic quality standards and continuous improvement",
      category: "Quality Control",
      frequency: "Continuous",
      impact: "Critical"
    },
    {
      title: "Student Academic Matters",
      description: "Address student academic issues, grievances, and welfare",
      category: "Student Affairs",
      frequency: "As Needed",
      impact: "High"
    },
    {
      title: "Faculty Development",
      description: "Oversee faculty recruitment, promotion, and professional development",
      category: "HR Management",
      frequency: "Quarterly",
      impact: "High"
    },
    {
      title: "Research & Innovation",
      description: "Promote research activities and academic innovation",
      category: "Research",
      frequency: "Monthly",
      impact: "Medium"
    }
  ]

  const upcomingMeetings = [
    {
      title: "Academic Council Meeting - Curriculum Review",
      date: "2024-12-15",
      time: "10:00 AM",
      venue: "Conference Room, Admin Block",
      agenda: [
        "Review of MBBS curriculum modifications",
        "Introduction of new elective courses",
        "Student feedback analysis",
        "Faculty development proposals"
      ],
      status: "scheduled"
    },
    {
      title: "Academic Council Meeting - Annual Review",
      date: "2024-12-28",
      time: "2:00 PM",
      venue: "Senate Hall",
      agenda: [
        "Annual academic performance review",
        "Budget allocation for academic year",
        "New faculty appointments",
        "Research grant approvals"
      ],
      status: "scheduled"
    },
    {
      title: "Emergency Meeting - Examination Issues",
      date: "2024-11-25",
      time: "3:00 PM",
      venue: "Vice Principal's Office",
      agenda: [
        "Examination irregularities discussion",
        "Remedial measures planning",
        "Student grievance redressal"
      ],
      status: "urgent"
    }
  ]

  const recentDecisions = [
    {
      title: "Approval of New Digital Learning Platform",
      date: "2024-11-10",
      decision: "Approved implementation of comprehensive LMS for all departments",
      impact: "Enhanced digital learning capabilities",
      status: "implemented"
    },
    {
      title: "Revision of Assessment Criteria",
      date: "2024-11-05",
      decision: "Updated assessment guidelines for practical examinations",
      impact: "Improved evaluation standards",
      status: "in-progress"
    },
    {
      title: "Faculty Exchange Program",
      date: "2024-10-28",
      decision: "Approved faculty exchange program with international medical colleges",
      impact: "Global exposure for faculty",
      status: "planning"
    },
    {
      title: "Student Research Grants",
      date: "2024-10-20",
      decision: "Allocated funds for undergraduate research projects",
      impact: "Promotion of research culture",
      status: "implemented"
    }
  ]

  const academicReports = [
    {
      title: "Annual Academic Report 2023-24",
      type: "Annual Report",
      date: "2024-09-30",
      size: "4.2 MB",
      downloads: 156,
      status: "published"
    },
    {
      title: "Curriculum Review Report",
      type: "Review Report",
      date: "2024-08-15",
      size: "2.8 MB",
      downloads: 89,
      status: "published"
    },
    {
      title: "Student Performance Analysis",
      type: "Analysis Report",
      date: "2024-07-20",
      size: "1.5 MB",
      downloads: 124,
      status: "published"
    },
    {
      title: "Faculty Development Report",
      type: "Progress Report",
      date: "2024-06-10",
      size: "3.1 MB",
      downloads: 67,
      status: "published"
    }
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Critical": return "bg-red-100 text-red-700"
      case "High": return "bg-orange-100 text-orange-700"
      case "Medium": return "bg-yellow-100 text-yellow-700"
      case "Low": return "bg-green-100 text-green-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled": return "bg-blue-100 text-blue-700"
      case "urgent": return "bg-red-100 text-red-700"
      case "implemented": return "bg-green-100 text-green-700"
      case "in-progress": return "bg-yellow-100 text-yellow-700"
      case "planning": return "bg-purple-100 text-purple-700"
      case "published": return "bg-green-100 text-green-700"
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
                <Users2 className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Council</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Governing body for academic excellence and quality assurance</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Academic Governance</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Council Members */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Council Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {councilMembers.map((member, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <User className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-sm text-blue-600 font-medium">{member.position}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-start gap-2">
                        <Briefcase className="w-4 h-4 text-gray-500 mt-0.5" />
                        <span>{member.designation}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Building className="w-4 h-4 text-gray-500 mt-0.5" />
                        <span>{member.department}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-gray-500 mt-0.5" />
                        <span>{member.qualifications}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-gray-500 mt-0.5" />
                        <span>{member.experience} experience</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-gray-500 mt-0.5" />
                        <span className="text-blue-600">{member.email}</span>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      Contact
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Council Functions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Council Functions & Responsibilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {councilFunctions.map((func, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Gavel className="w-8 h-8 text-purple-600" />
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(func.impact)}`}>
                        {func.impact} IMPACT
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{func.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{func.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium">{func.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Frequency:</span>
                        <span className="font-medium">{func.frequency}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Meetings */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Upcoming Meetings</h2>
            <div className="space-y-4">
              {upcomingMeetings.map((meeting, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{meeting.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" />
                            {meeting.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {meeting.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {meeting.venue}
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(meeting.status)}`}>
                        {meeting.status.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Agenda Items:</h4>
                      <ul className="space-y-1">
                        {meeting.agenda.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Add to Calendar
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Decisions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Recent Decisions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentDecisions.map((decision, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(decision.status)}`}>
                        {decision.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{decision.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{decision.decision}</p>
                    
                    <div className="space-y-2 text-sm mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Date: {decision.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Impact: {decision.impact}</span>
                      </div>
                    </div>

                    <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Reports */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Academic Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {academicReports.map((report, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <FileIcon className="w-7 h-7" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{report.title}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="bg-gray-100 px-2 py-1 rounded text-xs">{report.type}</div>
                      <div>Date: {report.date}</div>
                      <div>Size: {report.size}</div>
                      <div>{report.downloads} downloads</div>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
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
                <h2 className="text-3xl font-bold mb-6">Academic Council Secretariat</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For inquiries about Academic Council meetings, agenda items, or academic governance matters, please contact the secretariat.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Council Office</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email Contact</h3>
                      <p className="text-gray-600 text-sm">academic.council@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Admin Block, Room 301</p>
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
