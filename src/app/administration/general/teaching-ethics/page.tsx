"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon } from "lucide-react"

export default function TeachingEthicsPage() {
  const curriculumOverview = [
    {
      year: "First Year",
      title: "Foundation of Medical Ethics",
      duration: "40 hours",
      credits: 4,
      modules: 8,
      assessment: "Theory + Viva",
      coordinator: "Prof. Dr. Ahmed"
    },
    {
      year: "Second Year", 
      title: "Clinical Ethics & Professionalism",
      duration: "45 hours",
      credits: 5,
      modules: 10,
      assessment: "Case Studies + OSCE",
      coordinator: "Prof. Dr. Rahman"
    },
    {
      year: "Third Year",
      title: "Advanced Medical Ethics",
      duration: "50 hours",
      credits: 5,
      modules: 12,
      assessment: "Research + Presentation",
      coordinator: "Prof. Dr. Khan"
    },
    {
      year: "Fourth Year",
      title: "Applied Ethics in Practice",
      duration: "55 hours",
      credits: 6,
      modules: 14,
      assessment: "Clinical Portfolio + Ethics Committee",
      coordinator: "Prof. Dr. Islam"
    },
    {
      year: "Final Year",
      title: "Ethics in Specialized Medicine",
      duration: "60 hours",
      credits: 7,
      modules: 16,
      assessment: "Comprehensive Exam + Research Thesis",
      coordinator: "Prof. Dr. Chowdhury"
    }
  ]

  const teachingMethods = [
    {
      title: "Interactive Lectures",
      description: "Engaging theoretical sessions with real-world examples",
      frequency: "Weekly",
      duration: "2 hours",
      participants: "150 students",
      effectiveness: 85
    },
    {
      title: "Case-Based Learning",
      description: "Analysis of ethical dilemmas in clinical scenarios",
      frequency: "Bi-weekly", 
      duration: "3 hours",
      participants: "25 students",
      effectiveness: 92
    },
    {
      title: "Role-Playing Sessions",
      description: "Simulated patient-doctor ethical interactions",
      frequency: "Monthly",
      duration: "4 hours",
      participants: "10 students",
      effectiveness: 88
    },
    {
      title: "Ethics Debates",
      description: "Structured debates on controversial ethical topics",
      frequency: "Monthly",
      duration: "2 hours",
      participants: "20 students",
      effectiveness: 90
    },
    {
      title: "Guest Lectures",
      description: "Industry experts sharing practical experiences",
      frequency: "Quarterly",
      duration: "3 hours",
      participants: "150 students",
      effectiveness: 87
    },
    {
      title: "Journal Clubs",
      description: "Critical analysis of ethics research papers",
      frequency: "Weekly",
      duration: "1 hour",
      participants: "15 students",
      effectiveness: 83
    }
  ]

  const assessmentMethods = [
    {
      type: "Written Examinations",
      weight: "30%",
      frequency: "Semester End",
      description: "Theory papers covering ethical principles and frameworks",
      passingCriteria: "60%"
    },
    {
      type: "Viva Voce",
      weight: "20%", 
      frequency: "Semester End",
      description: "Oral examination testing ethical reasoning and decision-making",
      passingCriteria: "60%"
    },
    {
      type: "Case Study Analysis",
      weight: "25%",
      frequency: "Continuous",
      description: "Written analysis of ethical scenarios with justification",
      passingCriteria: "65%"
    },
    {
      type: "OSCE Stations",
      weight: "15%",
      frequency: "Annual",
      description: "Objective Structured Clinical Examination for ethical skills",
      passingCriteria: "70%"
    },
    {
      type: "Research Projects",
      weight: "10%",
      frequency: "Annual",
      description: "Independent research on contemporary ethical issues",
      passingCriteria: "65%"
    }
  ]

  const facultyMembers = [
    {
      name: "Prof. Dr. Md. Ahmed",
      designation: "Professor & Head",
      department: "Department of Medical Ethics",
      experience: "25 years",
      specialization: "Clinical Ethics, Research Ethics",
      publications: 45,
      email: "ahmed.ethics@rcmc.edu.bd"
    },
    {
      name: "Prof. Dr. Fatema Rahman",
      designation: "Professor",
      department: "Department of Medical Ethics", 
      experience: "20 years",
      specialization: "Bioethics, Professionalism",
      publications: 38,
      email: "fatema.ethics@rcmc.edu.bd"
    },
    {
      name: "Associate Prof. Dr. Kamal Hossain",
      designation: "Associate Professor",
      department: "Department of Medical Ethics",
      experience: "15 years", 
      specialization: "Patient Rights, End-of-Life Care",
      publications: 28,
      email: "kamal.ethics@rcmc.edu.bd"
    },
    {
      name: "Assistant Prof. Dr. Sarah Islam",
      designation: "Assistant Professor",
      department: "Department of Medical Ethics",
      experience: "8 years",
      specialization: "Global Health Ethics, Medical Humanities",
      publications: 15,
      email: "sarah.ethics@rcmc.edu.bd"
    }
  ]

  const studentResources = [
    {
      title: "Medical Ethics Textbook",
      type: "Core Textbook",
      format: "Print + Digital",
      access: "Library + Online Portal",
      usage: "Essential reading"
    },
    {
      title: "Ethics Case Collection",
      type: "Reference Material",
      format: "Digital Database",
      access: "Online Portal",
      usage: "Case studies and examples"
    },
    {
      title: "Video Lecture Library",
      type: "Learning Resource",
      format: "Video Streaming",
      access: "LMS Platform",
      usage: "Supplementary learning"
    },
    {
      title: "Ethics Guidelines Manual",
      type: "Reference Guide",
      format: "PDF",
      access: "Department Website",
      usage: "Quick reference"
    },
    {
      title: "Research Ethics Templates",
      type: "Tool",
      format: "Word Templates",
      access: "Online Portal",
      usage: "Research projects"
    },
    {
      title: "Discussion Forum",
      type: "Interactive Platform",
      format: "Online Forum",
      access: "LMS Platform",
      usage: "Peer learning"
    }
  ]

  const getEffectivenessColor = (score: number) => {
    if (score >= 90) return "bg-green-500"
    if (score >= 80) return "bg-blue-500"
    if (score >= 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  const getWeightColor = (weight: string) => {
    const num = parseInt(weight)
    if (num >= 25) return "bg-red-100 text-red-700"
    if (num >= 20) return "bg-orange-100 text-orange-700"
    return "bg-blue-100 text-blue-700"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <GraduationCap className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Teaching Medical Ethics to Undergraduates</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Comprehensive ethics education for future healthcare professionals</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Medical Education</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Curriculum Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Curriculum Overview by Year</h2>
            <div className="space-y-4">
              {curriculumOverview.map((year, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                          <BookMarked className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{year.title}</h3>
                          <p className="text-sm text-gray-600">{year.year} MBBS</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{year.credits}</div>
                        <div className="text-sm text-gray-600">Credits</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Clock className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{year.duration}</div>
                        <div className="text-xs text-gray-600">Duration</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <BookOpen className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{year.modules}</div>
                        <div className="text-xs text-gray-600">Modules</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <FileCheck className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{year.assessment}</div>
                        <div className="text-xs text-gray-600">Assessment</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{year.coordinator}</div>
                        <div className="text-xs text-gray-600">Coordinator</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Teaching Methods */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Teaching Methods & Effectiveness</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachingMethods.map((method, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        {method.effectiveness}% Effective
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{method.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                    
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Frequency:</span>
                        <span className="font-medium">{method.frequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{method.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Group Size:</span>
                        <span className="font-medium">{method.participants}</span>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Effectiveness</span>
                        <span>{method.effectiveness}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getEffectivenessColor(method.effectiveness)}`}
                          style={{ width: `${method.effectiveness}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Assessment Methods */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Assessment Methods</h2>
            <div className="space-y-4">
              {assessmentMethods.map((assessment, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Target className="w-6 h-6 text-purple-600" />
                        <h3 className="text-lg font-semibold text-gray-800">{assessment.type}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getWeightColor(assessment.weight)}`}>
                        {assessment.weight} Weight
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{assessment.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Frequency: {assessment.frequency}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AwardIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Passing: {assessment.passingCriteria}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Faculty Members */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Faculty Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facultyMembers.map((faculty, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <Users2 className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{faculty.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{faculty.designation}</p>
                        <p className="text-sm text-gray-500 mb-3">{faculty.department}</p>
                        
                        <div className="space-y-1 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            <span>{faculty.experience} experience</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Brain className="w-4 h-4" />
                            <span>{faculty.specialization}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            <span>{faculty.publications} publications</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span className="text-blue-600">{faculty.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Student Resources */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Student Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentResources.map((resource, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Lightbulb className="w-7 h-7" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{resource.title}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="bg-gray-100 px-2 py-1 rounded text-xs">{resource.type}</div>
                      <div>Format: {resource.format}</div>
                      <div>Access: {resource.access}</div>
                      <div className="font-medium text-blue-600">{resource.usage}</div>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      Access Resource
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
                <h2 className="text-3xl font-bold mb-6">Medical Ethics Department</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For inquiries about medical ethics curriculum, teaching methods, or student support, please contact our department.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Department Office</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email Contact</h3>
                      <p className="text-gray-600 text-sm">ethics.dept@rcmc.edu.bd</p>
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
