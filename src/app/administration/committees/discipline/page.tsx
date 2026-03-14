"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, Star, Trophy, MessageSquare, Mic, Brain, Zap, AlertTriangle, ShieldCheck, Eye, Ear, HelpCircle, PhoneCall, MessageCircle, Lock, Key, UserX, Ban, StopCircle, CheckCircle, AlertCircle, Info, FileCheck, Hand, HeartHandshake, UsersRound, Megaphone, Search, Gavel, Scale, ClipboardList, FileWarning, UserMinus, ThumbsDown, AlertOctagon, Flag, Hammer, Archive } from "lucide-react"

export default function DisciplinePage() {
  const [activeTab, setActiveTab] = useState("committee")

  const disciplineCommittee = [
    {
      name: "Prof. Dr. M. A. Rahman",
      position: "Discipline Committee Chairman",
      role: "Overall Discipline & Conduct Management",
      email: "discipline.chairman@rcmc.edu.bd",
      phone: "+88-0123458600",
      experience: "30+ years",
      qualification: "MBBS, MD, PhD, LLM",
      specialization: "Medical Ethics & Administrative Law",
      avatar: "MR",
      color: "from-indigo-500 to-blue-600"
    },
    {
      name: "Dr. S. K. Ahmed",
      position: "Vice Chairman",
      role: "Student Conduct & Behavioral Standards",
      email: "conduct@rcmc.edu.bd",
      phone: "+88-0123458601",
      experience: "25+ years",
      qualification: "MBBS, MD, M.Sc.",
      specialization: "Student Behavioral Management",
      avatar: "SA",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Prof. Dr. R. C. Mondal",
      position: "Senior Member",
      role: "Academic Integrity & Ethics",
      email: "ethics@rcmc.edu.bd",
      phone: "+88-0123458602",
      experience: "28+ years",
      qualification: "MBBS, FCPS, PhD",
      specialization: "Academic Ethics & Professional Conduct",
      avatar: "RM",
      color: "from-indigo-600 to-blue-600"
    },
    {
      name: "Dr. N. A. Begum",
      position: "Member",
      role: "Faculty Discipline & Professional Conduct",
      email: "faculty.discipline@rcmc.edu.bd",
      phone: "+88-0123458603",
      experience: "20+ years",
      qualification: "MBBS, MPH, M.Ed.",
      specialization: "Faculty Development & Conduct Standards",
      avatar: "NB",
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Mr. K. M. Hassan",
      position: "Member",
      role: "Administrative Discipline & HR Policies",
      email: "admin.discipline@rcmc.edu.bd",
      phone: "+88-0123458604",
      experience: "18+ years",
      qualification: "M.Com., MBA, LLB",
      specialization: "Administrative Law & HR Management",
      avatar: "KH",
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Ms. F. R. Chowdhury",
      position: "Member Secretary",
      role: "Documentation & Case Management",
      email: "cases@rcmc.edu.bd",
      phone: "+88-0123458605",
      experience: "15+ years",
      qualification: "B.Com., M.Com., LLB",
      specialization: "Legal Documentation & Case Management",
      avatar: "FC",
      color: "from-blue-500 to-cyan-600"
    }
  ]

  const disciplineServices = [
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "Disciplinary Hearings",
      description: "Formal hearings and disciplinary proceedings"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Fair Investigation",
      description: "Impartial investigation of disciplinary cases"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Policy Enforcement",
      description: "Implementation of discipline policies"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Rights Protection",
      description: "Protection of rights for all parties"
    }
  ]

  const disciplinaryProcess = [
    {
      step: "1",
      title: "Complaint Filing",
      description: "Submit formal complaint with evidence",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Preliminary Review",
      description: "Initial assessment and validity check",
      icon: <Search className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Formal Investigation",
      description: "Detailed investigation and evidence collection",
      icon: <ClipboardList className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Decision & Action",
      description: "Final decision and disciplinary action",
      icon: <Gavel className="w-8 h-8" />
    }
  ]

  const disciplineStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "6",
      label: "Committee Members",
      color: "from-indigo-400 to-blue-600"
    },
    {
      icon: <Gavel className="w-8 h-8" />,
      number: "100+",
      label: "Cases Handled",
      color: "from-blue-400 to-indigo-600"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      number: "98%",
      label: "Fair Resolution",
      color: "from-indigo-400 to-purple-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "7d",
      label: "Avg Resolution Time",
      color: "from-blue-400 to-cyan-600"
    }
  ]

  const disciplinaryCategories = [
    {
      name: "Academic Misconduct",
      description: "Cheating, plagiarism, exam violations",
      severity: "High",
      examples: ["Exam cheating", "Plagiarism", "Fake certificates", "Impersonation"]
    },
    {
      name: "Behavioral Issues",
      description: "Disruptive behavior and misconduct",
      severity: "Medium",
      examples: ["Disrespect to faculty", "Class disruption", "Verbal abuse", "Harassment"]
    },
    {
      name: "Professional Conduct",
      description: "Violation of professional ethics",
      severity: "High",
      examples: ["Patient rights violation", "Unprofessional behavior", "Ethical breaches", "Confidentiality breaches"]
    },
    {
      name: "Administrative Violations",
      description: "Breaking institutional rules",
      severity: "Low",
      examples: ["Attendance violations", "Property damage", "Rule violations", "Policy breaches"]
    }
  ]

  const disciplinaryActions = [
    {
      action: "Warning",
      severity: "Low",
      description: "Written or verbal warning for minor violations",
      applicable: ["First offenses", "Minor violations", "Behavioral issues"]
    },
    {
      action: "Probation",
      severity: "Medium",
      description: "Probationary period with monitoring",
      applicable: ["Repeated offenses", "Academic misconduct", "Behavioral issues"]
    },
    {
      action: "Suspension",
      severity: "High",
      description: "Temporary suspension from academic activities",
      applicable: ["Serious violations", "Professional misconduct", "Repeated offenses"]
    },
    {
      action: "Expulsion",
      severity: "Critical",
      description: "Permanent removal from institution",
      applicable: ["Criminal conduct", "Severe violations", "Repeated serious offenses"]
    }
  ]

  const rightsAndResponsibilities = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Student Rights",
      items: [
        "Right to fair hearing and impartial investigation",
        "Right to present evidence and witnesses",
        "Right to appeal disciplinary decisions",
        "Right to confidentiality and privacy protection"
      ]
    },
    {
      icon: <UsersRound className="w-8 h-8" />,
      title: "Student Responsibilities",
      items: [
        "Maintain academic integrity and honesty",
        "Respect faculty, staff, and fellow students",
        "Follow institutional rules and regulations",
        "Contribute to a positive learning environment"
      ]
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Faculty Rights",
      items: [
        "Right to respectful and professional conduct",
        "Right to fair evaluation and assessment",
        "Right to safe working environment",
        "Right to institutional support and protection"
      ]
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Faculty Responsibilities",
      items: [
        "Maintain professional ethics and standards",
        "Provide fair and unbiased evaluation",
        "Create inclusive learning environment",
        "Serve as role models for students"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-[#EAEAEA] text-white">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#111827]">Discipline Committee</h1>
            <p className="text-xl md:text-2xl text-[#253240] leading-relaxed mb-8">
      Upholding Academic Integrity and Professional Conduct
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 inline-flex">
                <button
                  onClick={() => setActiveTab("committee")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "committee"
                      ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg"
                      : "text-indigo-600 hover:text-indigo-800 hover:bg-white/10"
                  }`}
                >
                  <Users className="inline w-4 h-4 mr-2" />
                  Committee
                </button>
                <button
                  onClick={() => setActiveTab("services")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "services"
                      ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg"
                      : "text-indigo-600 hover:text-indigo-800 hover:bg-white/10"
                  }`}
                >
                  <Gavel className="inline w-4 h-4 mr-2" />
                  Services
                </button>
                <button
                  onClick={() => setActiveTab("process")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "process"
                      ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg"
                      : "text-indigo-600 hover:text-indigo-800 hover:bg-white/10"
                  }`}
                >
                  <ClipboardList className="inline w-4 h-4 mr-2" />
                  Process
                </button>
                <button
                  onClick={() => setActiveTab("categories")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "categories"
                      ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg"
                      : "text-indigo-600 hover:text-indigo-800 hover:bg-white/10"
                  }`}
                >
                  <FileWarning className="inline w-4 h-4 mr-2" />
                  Categories
                </button>
                <button
                  onClick={() => setActiveTab("rights")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "rights"
                      ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg"
                      : "text-indigo-600 hover:text-indigo-800 hover:bg-white/10"
                  }`}
                >
                  <ShieldCheck className="inline w-4 h-4 mr-2" />
                  Rights
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-6xl mx-auto">
          {/* Committee Tab */}
          {activeTab === "committee" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-indigo-900 mb-4">Discipline Committee Members</h2>
                <p className="text-xl text-indigo-600">Experienced professionals ensuring institutional discipline</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {disciplineCommittee.map((member, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-indigo-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-xl font-bold">{member.avatar}</span>
                      </div>
                      <h3 className="text-lg font-bold text-indigo-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-indigo-700 mb-1">{member.position}</p>
                      <p className="text-xs text-indigo-500 mb-3">{member.role}</p>
                      
                      <div className="space-y-2 text-xs mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-3 h-3 text-indigo-400" />
                          <span className="text-indigo-600">{member.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-3 h-3 text-indigo-400" />
                          <span className="text-indigo-600">{member.phone}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-indigo-200">
                        <p className="text-xs text-indigo-500 mb-1">Experience: {member.experience}</p>
                        <p className="text-xs text-indigo-500 mb-1">Qualification: {member.qualification}</p>
                        <p className="text-xs text-indigo-500">Specialization: {member.specialization}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {disciplineStats.map((stat, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-indigo-200 hover:bg-white/90 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-indigo-900 mb-1">{stat.number}</div>
                        <div className="text-indigo-600">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === "services" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-indigo-900 mb-4">Disciplinary Services</h2>
                <p className="text-xl text-indigo-600">Comprehensive discipline management services</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {disciplineServices.map((service, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-indigo-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold text-indigo-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-indigo-600">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Process Tab */}
          {activeTab === "process" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-indigo-900 mb-4">Disciplinary Process</h2>
                <p className="text-xl text-indigo-600">Systematic approach to disciplinary proceedings</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {disciplinaryProcess.map((step, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-indigo-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                        {step.icon}
                      </div>
                      <div className="text-2xl font-bold text-indigo-900 mb-2">Step {step.step}</div>
                      <h3 className="text-lg font-bold text-indigo-800 mb-2">{step.title}</h3>
                      <p className="text-sm text-indigo-600">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Categories Tab */}
          {activeTab === "categories" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-indigo-900 mb-4">Disciplinary Categories</h2>
                <p className="text-xl text-indigo-600">Classification of disciplinary violations</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {disciplinaryCategories.map((category, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-indigo-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-indigo-900">{category.name}</h3>
                          <p className="text-sm text-indigo-600">{category.description}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          category.severity === "High" 
                            ? "bg-red-100 text-red-700" 
                            : category.severity === "Medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}>
                          {category.severity} Severity
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-indigo-800">Examples:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {category.examples.map((example, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                              <span className="text-xs text-indigo-600">{example}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">Disciplinary Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {disciplinaryActions.map((action, index) => (
                    <Card key={index} className="bg-white/80 backdrop-blur-md border border-indigo-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                            action.severity === "Critical" 
                              ? "bg-red-100 text-red-600"
                              : action.severity === "High"
                              ? "bg-orange-100 text-orange-600"
                              : action.severity === "Medium"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-green-100 text-green-600"
                          }`}>
                            <Gavel className="w-6 h-6" />
                          </div>
                          <h3 className="text-lg font-bold text-indigo-900">{action.action}</h3>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            action.severity === "Critical" 
                              ? "bg-red-100 text-red-700"
                              : action.severity === "High"
                              ? "bg-orange-100 text-orange-700"
                              : action.severity === "Medium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                          }`}>
                            {action.severity}
                          </span>
                        </div>
                        <p className="text-sm text-indigo-600 mb-3">{action.description}</p>
                        <div className="space-y-1">
                          <p className="text-xs font-semibold text-indigo-800">Applicable for:</p>
                          {action.applicable.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              <span className="text-xs text-indigo-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Rights Tab */}
          {activeTab === "rights" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-indigo-900 mb-4">Rights & Responsibilities</h2>
                <p className="text-xl text-indigo-600">Clear guidelines for all community members</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rightsAndResponsibilities.map((item, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-indigo-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold text-indigo-900">{item.title}</h3>
                      </div>
                      
                      <div className="space-y-2">
                        {item.items.map((point, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-indigo-600">{point}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-md border border-indigo-200">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-indigo-900 mb-6">Contact Discipline Committee</h2>
                <p className="text-indigo-600 mb-8 max-w-2xl mx-auto">
                  For disciplinary matters, complaints, or inquiries about conduct policies, please contact our Discipline Committee:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <div>
                      <h3 className="font-semibold text-indigo-900">Committee Office</h3>
                      <p className="text-indigo-600 text-sm">Admin Building, Room 201</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-indigo-600" />
                    <div>
                      <h3 className="font-semibold text-indigo-900">Committee Phone</h3>
                      <p className="text-indigo-600 text-sm">+88-0123458600</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-indigo-600" />
                    <div>
                      <h3 className="font-semibold text-indigo-900">Committee Email</h3>
                      <p className="text-indigo-600 text-sm">discipline@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-indigo-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-indigo-900 mb-2">Office Hours</h3>
                  <p className="text-indigo-600">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                  <p className="text-indigo-600">Friday: 9:00 AM - 2:00 PM</p>
                  <p className="text-indigo-600">Saturday: Closed</p>
                  <div className="mt-4 p-4 bg-indigo-100 rounded">
                    <p className="text-indigo-700 font-semibold">Emergency Cases: +88-0123458601 (24/7)</p>
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
