"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, AlertTriangle, MessageSquare, CheckCircle, FileCheck, Headphones } from "lucide-react"

export default function ComplaintPage() {
  const [activeTab, setActiveTab] = useState("committee")

  const complaintCommittee = [
    {
      name: "Prof. Dr. M. A. Rahman",
      position: "Complaint Committee Chairman",
      role: "Overall Complaint Management",
      email: "complaint.chairman@rcmc.edu.bd",
      phone: "+88-0123457600",
      experience: "20+ years",
      qualification: "MBBS, MD, LLM",
      specialization: "Legal Affairs & Student Welfare",
      avatar: "MR",
      color: "from-indigo-500 to-blue-600"
    },
    {
      name: "Dr. S. K. Ahmed",
      position: "Vice Chairman",
      role: "Academic Complaints",
      email: "academic.complaint@rcmc.edu.bd",
      phone: "+88-0123457601",
      experience: "16+ years",
      qualification: "MBBS, MD, M.Ed.",
      specialization: "Academic Standards & Student Affairs",
      avatar: "SA",
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "Prof. Dr. R. C. Mondal",
      position: "Senior Member",
      role: "Administrative Complaints",
      email: "admin.complaint@rcmc.edu.bd",
      phone: "+88-0123457602",
      experience: "18+ years",
      qualification: "MBBS, FCPS, MBA",
      specialization: "Administration & Hospital Management",
      avatar: "RM",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Dr. N. A. Begum",
      position: "Member",
      role: "Student Welfare Complaints",
      email: "student.welfare@rcmc.edu.bd",
      phone: "+88-0123457603",
      experience: "12+ years",
      qualification: "MBBS, MPH, MSW",
      specialization: "Student Counseling & Welfare Services",
      avatar: "NB",
      color: "from-teal-500 to-green-600"
    },
    {
      name: "Mr. K. M. Hassan",
      position: "Member",
      role: "Facility Complaints",
      email: "facility.complaint@rcmc.edu.bd",
      phone: "+88-0123457604",
      experience: "14+ years",
      qualification: "M.Sc., M.P.Ed.",
      specialization: "Facility Management & Infrastructure",
      avatar: "KH",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Ms. F. R. Chowdhury",
      position: "Member Secretary",
      role: "Documentation & Follow-up",
      email: "complaint.secretary@rcmc.edu.bd",
      phone: "+88-0123457605",
      experience: "10+ years",
      qualification: "MA, MBA, LLB",
      specialization: "Legal Documentation & Case Management",
      avatar: "FC",
      color: "from-cyan-500 to-blue-600"
    }
  ]

  const complaintTypes = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Academic Issues",
      description: "Examination, grading, and curriculum concerns"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Administrative Problems",
      description: "Admission, registration, and administrative matters"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Student Welfare",
      description: "Hostel, facilities, and student services"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Documentation Issues",
      description: "Certificates, transcripts, and records"
    }
  ]

  const complaintProcess = [
    {
      step: "1",
      title: "Submit Complaint",
      description: "Fill out the complaint form with detailed information",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Initial Review",
      description: "Committee reviews and categorizes the complaint",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Investigation",
      description: "Thorough investigation of the reported issue",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Resolution",
      description: "Appropriate action and resolution provided",
      icon: <Award className="w-8 h-8" />
    }
  ]

  const complaintStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "6",
      label: "Committee Members",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      number: "95%",
      label: "Resolution Rate",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "48h",
      label: "Response Time",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "100%",
      label: "Confidentiality",
      color: "from-teal-400 to-teal-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-[#EAEAEA] text-black-600">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Complaint Committee</h1>
            <p className="text-xl md:text-2xl text-[#111827] leading-relaxed mb-8">
              Ensuring Fair Resolution and Student Welfare
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
                  onClick={() => setActiveTab("process")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "process"
                      ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg"
                      : "text-indigo-600 hover:text-indigo-800 hover:bg-white/10"
                  }`}
                >
                  <FileCheck className="inline w-4 h-4 mr-2" />
                  Process
                </button>
                <button
                  onClick={() => setActiveTab("types")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "types"
                      ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg"
                      : "text-indigo-600 hover:text-indigo-800 hover:bg-white/10"
                  }`}
                >
                  <MessageSquare className="inline w-4 h-4 mr-2" />
                  Types
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
                <h2 className="text-4xl font-bold text-indigo-900 mb-4">Committee Members</h2>
                <p className="text-xl text-indigo-600">Dedicated professionals ensuring fair resolution</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {complaintCommittee.map((member, index) => (
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
                {complaintStats.map((stat, index) => (
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

          {/* Process Tab */}
          {activeTab === "process" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-indigo-900 mb-4">Complaint Resolution Process</h2>
                <p className="text-xl text-indigo-600">Transparent and efficient complaint handling</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {complaintProcess.map((step, index) => (
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

          {/* Types Tab */}
          {activeTab === "types" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-indigo-900 mb-4">Types of Complaints</h2>
                <p className="text-xl text-indigo-600">Comprehensive complaint categories</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {complaintTypes.map((type, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-indigo-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                        {type.icon}
                      </div>
                      <h3 className="text-lg font-bold text-indigo-900 mb-2">{type.title}</h3>
                      <p className="text-sm text-indigo-600">{type.description}</p>
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
                <h2 className="text-3xl font-bold text-indigo-900 mb-6">Contact Complaint Committee</h2>
                <p className="text-indigo-600 mb-8 max-w-2xl mx-auto">
                  For filing complaints or seeking assistance, please contact our Complaint Committee through the following channels:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <div>
                      <h3 className="font-semibold text-indigo-900">Office Location</h3>
                      <p className="text-indigo-600 text-sm">Administrative Building, Room 201</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-indigo-600" />
                    <div>
                      <h3 className="font-semibold text-indigo-900">Helpline</h3>
                      <p className="text-indigo-600 text-sm">+88-0123457600</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-indigo-600" />
                    <div>
                      <h3 className="font-semibold text-indigo-900">Complaint Email</h3>
                      <p className="text-indigo-600 text-sm">complaint@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-indigo-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-indigo-900 mb-2">Office Hours</h3>
                  <p className="text-indigo-600">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                  <p className="text-indigo-600">Friday: 9:00 AM - 2:00 PM</p>
                  <p className="text-indigo-600">Saturday: Closed</p>
                  <div className="mt-4 p-4 bg-indigo-100 rounded">
                    <p className="text-indigo-700 font-semibold">Emergency Contact: +88-0123457601 (24/7)</p>
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
