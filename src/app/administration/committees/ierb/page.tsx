"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, Star, Trophy, MessageSquare, Mic, Brain, Zap, Gavel, Scale, FileCheck, AlertCircle } from "lucide-react"

export default function IERBPage() {
  const [activeTab, setActiveTab] = useState("committee")

  const ierbCommittee = [
    {
      name: "Prof. Dr. M. A. Rahman",
      position: "IERB Chairman",
      role: "Overall Ethics Review Management",
      email: "ierb.chairman@rcmc.edu.bd",
      phone: "+88-0123458000",
      experience: "25+ years",
      qualification: "MBBS, MD, PhD, LLM",
      specialization: "Medical Ethics & Research Governance",
      avatar: "MR",
      color: "from-red-500 to-orange-600"
    },
    {
      name: "Dr. S. K. Ahmed",
      position: "Vice Chairman",
      role: "Clinical Research Ethics",
      email: "clinical.ierb@rcmc.edu.bd",
      phone: "+88-0123458001",
      experience: "20+ years",
      qualification: "MBBS, MD, M.Phil.",
      specialization: "Clinical Trial Ethics & Patient Safety",
      avatar: "SA",
      color: "from-orange-500 to-amber-600"
    },
    {
      name: "Prof. Dr. R. C. Mondal",
      position: "Senior Member",
      role: "Basic Research Ethics",
      email: "basic.ierb@rcmc.edu.bd",
      phone: "+88-0123458002",
      experience: "22+ years",
      qualification: "MBBS, FCPS, PhD",
      specialization: "Laboratory Research & Animal Ethics",
      avatar: "RM",
      color: "from-amber-500 to-yellow-600"
    },
    {
      name: "Dr. N. A. Begum",
      position: "Member",
      role: "Community Research Ethics",
      email: "community.ierb@rcmc.edu.bd",
      phone: "+88-0123458003",
      experience: "18+ years",
      qualification: "MBBS, MPH, PhD",
      specialization: "Public Health Ethics & Community Engagement",
      avatar: "NB",
      color: "from-red-600 to-rose-600"
    },
    {
      name: "Mr. K. M. Hassan",
      position: "Member",
      role: "Legal & Compliance",
      email: "legal.ierb@rcmc.edu.bd",
      phone: "+88-0123458004",
      experience: "15+ years",
      qualification: "LLB, LLM, M.Phil.",
      specialization: "Research Law & Regulatory Compliance",
      avatar: "KH",
      color: "from-orange-600 to-red-600"
    },
    {
      name: "Ms. F. R. Chowdhury",
      position: "Member Secretary",
      role: "Documentation & Administration",
      email: "admin.ierb@rcmc.edu.bd",
      phone: "+88-0123458005",
      experience: "12+ years",
      qualification: "MA, MBA, M.Sc.",
      specialization: "Ethics Documentation & Administrative Support",
      avatar: "FC",
      color: "from-rose-500 to-orange-600"
    }
  ]

  const ethicsGuidelines = [
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "Research Ethics",
      description: "Ethical guidelines for medical research studies"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Patient Protection",
      description: "Safeguarding patient rights and welfare"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Informed Consent",
      description: "Ensuring voluntary and informed participation"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Risk Assessment",
      description: "Evaluating research risks and benefits"
    }
  ]

  const reviewProcess = [
    {
      step: "1",
      title: "Protocol Submission",
      description: "Researchers submit detailed research protocols",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Initial Review",
      description: "Preliminary assessment of ethical compliance",
      icon: <AlertCircle className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Full Committee Review",
      description: "Comprehensive ethical evaluation by full board",
      icon: <Users className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Decision & Approval",
      description: "Final decision and approval communication",
      icon: <Award className="w-8 h-8" />
    }
  ]

  const ierbStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "6",
      label: "Board Members",
      color: "from-red-400 to-red-600"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      number: "100+",
      label: "Annual Reviews",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "100%",
      label: "Ethics Compliance",
      color: "from-amber-400 to-amber-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "30d",
      label: "Review Timeline",
      color: "from-rose-400 to-rose-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-[#EAEAEA] text-white">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <Gavel className="w-12 h-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#111827]">Institutional Ethics Review Board</h1>
            <p className="text-xl md:text-2xl text-[#252F40] leading-relaxed mb-8">
              Ensuring Ethical Standards in Medical Research
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 inline-flex">
                <button
                  onClick={() => setActiveTab("committee")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "committee"
                      ? "bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg"
                      : "text-red-600 hover:text-red-800 hover:bg-white/10"
                  }`}
                >
                  <Users className="inline w-4 h-4 mr-2" />
                  Committee
                </button>
                <button
                  onClick={() => setActiveTab("guidelines")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "guidelines"
                      ? "bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg"
                      : "text-red-600 hover:text-red-800 hover:bg-white/10"
                  }`}
                >
                  <Shield className="inline w-4 h-4 mr-2" />
                  Guidelines
                </button>
                <button
                  onClick={() => setActiveTab("process")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "process"
                      ? "bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg"
                      : "text-red-600 hover:text-red-800 hover:bg-white/10"
                  }`}
                >
                  <FileCheck className="inline w-4 h-4 mr-2" />
                  Process
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
                <h2 className="text-4xl font-bold text-red-900 mb-4">IERB Committee Members</h2>
                <p className="text-xl text-red-600">Expert professionals ensuring ethical research standards</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {ierbCommittee.map((member, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-red-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-xl font-bold">{member.avatar}</span>
                      </div>
                      <h3 className="text-lg font-bold text-red-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-red-700 mb-1">{member.position}</p>
                      <p className="text-xs text-red-500 mb-3">{member.role}</p>
                      
                      <div className="space-y-2 text-xs mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-3 h-3 text-red-400" />
                          <span className="text-red-600">{member.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-3 h-3 text-red-400" />
                          <span className="text-red-600">{member.phone}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-red-200">
                        <p className="text-xs text-red-500 mb-1">Experience: {member.experience}</p>
                        <p className="text-xs text-red-500 mb-1">Qualification: {member.qualification}</p>
                        <p className="text-xs text-red-500">Specialization: {member.specialization}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {ierbStats.map((stat, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-red-200 hover:bg-white/90 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-red-900 mb-1">{stat.number}</div>
                        <div className="text-red-600">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </div>
          )}

          {/* Guidelines Tab */}
          {activeTab === "guidelines" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-red-900 mb-4">Ethics Guidelines</h2>
                <p className="text-xl text-red-600">Comprehensive ethical framework for research</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ethicsGuidelines.map((guideline, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-red-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                        {guideline.icon}
                      </div>
                      <h3 className="text-lg font-bold text-red-900 mb-2">{guideline.title}</h3>
                      <p className="text-sm text-red-600">{guideline.description}</p>
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
                <h2 className="text-4xl font-bold text-red-900 mb-4">Review Process</h2>
                <p className="text-xl text-red-600">Systematic ethical review workflow</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviewProcess.map((step, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-red-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                        {step.icon}
                      </div>
                      <div className="text-2xl font-bold text-red-900 mb-2">Step {step.step}</div>
                      <h3 className="text-lg font-bold text-red-800 mb-2">{step.title}</h3>
                      <p className="text-sm text-red-600">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-md border border-red-200">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-red-900 mb-6">Contact Institutional Ethics Review Board</h2>
                <p className="text-red-600 mb-8 max-w-2xl mx-auto">
                  For ethics review submissions, consultations, or ethical guidance, please contact our IERB:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <div>
                      <h3 className="font-semibold text-red-900">Office Location</h3>
                      <p className="text-red-600 text-sm">Research Ethics Building</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-red-600" />
                    <div>
                      <h3 className="font-semibold text-red-900">IERB Phone</h3>
                      <p className="text-red-600 text-sm">+88-0123458000</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-red-600" />
                    <div>
                      <h3 className="font-semibold text-red-900">IERB Email</h3>
                      <p className="text-red-600 text-sm">ierb@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-red-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-red-900 mb-2">Office Hours</h3>
                  <p className="text-red-600">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                  <p className="text-red-600">Friday: 9:00 AM - 2:00 PM</p>
                  <p className="text-red-600">Saturday: Closed</p>
                  <div className="mt-4 p-4 bg-red-100 rounded">
                    <p className="text-red-700 font-semibold">Emergency Ethics Consultation: +88-0123458001</p>
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
