"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, CheckCircle, Star, Medal, FileCheck, TrendingUp } from "lucide-react"

export default function AccreditationPage() {
  const [activeTab, setActiveTab] = useState("committee")

  const accreditationCommittee = [
    {
      name: "Prof. Dr. M. A. Rahman",
      position: "Accreditation Committee Chairman",
      role: "Overall Accreditation Management",
      email: "accreditation.chairman@rcmc.edu.bd",
      phone: "+88-0123457700",
      experience: "22+ years",
      qualification: "MBBS, MD, PhD, M.Ed.",
      specialization: "Medical Education & Quality Assurance",
      avatar: "MR",
      color: "from-emerald-500 to-teal-600"
    },
    {
      name: "Dr. S. K. Ahmed",
      position: "Vice Chairman",
      role: "Curriculum & Standards",
      email: "curriculum.accreditation@rcmc.edu.bd",
      phone: "+88-0123457701",
      experience: "18+ years",
      qualification: "MBBS, MD, M.Ed.",
      specialization: "Curriculum Development & Educational Standards",
      avatar: "SA",
      color: "from-teal-500 to-cyan-600"
    },
    {
      name: "Prof. Dr. R. C. Mondal",
      position: "Senior Member",
      role: "Clinical Standards & Training",
      email: "clinical.accreditation@rcmc.edu.bd",
      phone: "+88-0123457702",
      experience: "20+ years",
      qualification: "MBBS, FCPS, PhD",
      specialization: "Clinical Training & Skills Assessment",
      avatar: "RM",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Dr. N. A. Begum",
      position: "Member",
      role: "Research & Innovation",
      email: "research.accreditation@rcmc.edu.bd",
      phone: "+88-0123457703",
      experience: "15+ years",
      qualification: "MBBS, MPH, PhD",
      specialization: "Research Standards & Innovation Management",
      avatar: "NB",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Mr. K. M. Hassan",
      position: "Member",
      role: "Infrastructure & Facilities",
      email: "facility.accreditation@rcmc.edu.bd",
      phone: "+88-0123457704",
      experience: "16+ years",
      qualification: "M.Sc., M.P.Ed.",
      specialization: "Facility Standards & Infrastructure Compliance",
      avatar: "KH",
      color: "from-lime-500 to-green-600"
    },
    {
      name: "Ms. F. R. Chowdhury",
      position: "Member Secretary",
      role: "Documentation & Compliance",
      email: "compliance.accreditation@rcmc.edu.bd",
      phone: "+88-0123457705",
      experience: "12+ years",
      qualification: "MA, MBA, LLB",
      specialization: "Documentation & Regulatory Compliance",
      avatar: "FC",
      color: "from-emerald-500 to-teal-600"
    }
  ]

  const accreditationStandards = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "BMDC Standards",
      description: "Bangladesh Medical & Dental Council compliance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "WHO Guidelines",
      description: "World Health Organization medical education standards"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Continuous quality improvement systems"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Metrics",
      description: "Educational effectiveness measurement"
    }
  ]

  const accreditationProcess = [
    {
      step: "1",
      title: "Self-Assessment",
      description: "Internal evaluation of programs and facilities",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Documentation",
      description: "Preparation of comprehensive accreditation documents",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "3",
      title: "External Review",
      description: "Peer evaluation by accreditation body",
      icon: <Users className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Certification",
      description: "Award of accreditation status",
      icon: <FileCheck className="w-8 h-8" />
    }
  ]

  const accreditationStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "6",
      label: "Committee Members",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "100%",
      label: "BMDC Compliance",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "A+",
      label: "Quality Rating",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "5yr",
      label: "Accreditation Cycle",
      color: "from-green-400 to-green-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="bg-[#EAEAEA] text-white">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#111827]">Accreditation Committee</h1>
            <p className="text-xl md:text-2xl text-[#111827] leading-relaxed mb-8">
              Ensuring Excellence Through Quality Standards
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 inline-flex">
                <button
                  onClick={() => setActiveTab("committee")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "committee"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                      : "text-emerald-600 hover:text-emerald-800 hover:bg-white/10"
                  }`}
                >
                  <Users className="inline w-4 h-4 mr-2" />
                  Committee
                </button>
                <button
                  onClick={() => setActiveTab("standards")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "standards"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                      : "text-emerald-600 hover:text-emerald-800 hover:bg-white/10"
                  }`}
                >
                  <Shield className="inline w-4 h-4 mr-2" />
                  Standards
                </button>
                <button
                  onClick={() => setActiveTab("process")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "process"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                      : "text-emerald-600 hover:text-emerald-800 hover:bg-white/10"
                  }`}
                >
                  <CheckCircle className="inline w-4 h-4 mr-2" />
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
                <h2 className="text-4xl font-bold text-emerald-900 mb-4">Committee Members</h2>
                <p className="text-xl text-emerald-600">Experts in medical education and quality assurance</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {accreditationCommittee.map((member, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-emerald-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-xl font-bold">{member.avatar}</span>
                      </div>
                      <h3 className="text-lg font-bold text-emerald-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-emerald-700 mb-1">{member.position}</p>
                      <p className="text-xs text-emerald-500 mb-3">{member.role}</p>
                      
                      <div className="space-y-2 text-xs mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-600">{member.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-600">{member.phone}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-emerald-200">
                        <p className="text-xs text-emerald-500 mb-1">Experience: {member.experience}</p>
                        <p className="text-xs text-emerald-500 mb-1">Qualification: {member.qualification}</p>
                        <p className="text-xs text-emerald-500">Specialization: {member.specialization}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {accreditationStats.map((stat, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-emerald-200 hover:bg-white/90 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-emerald-900 mb-1">{stat.number}</div>
                        <div className="text-emerald-600">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </div>
          )}

          {/* Standards Tab */}
          {activeTab === "standards" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-emerald-900 mb-4">Accreditation Standards</h2>
                <p className="text-xl text-emerald-600">Compliance with national and international standards</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {accreditationStandards.map((standard, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-emerald-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                        {standard.icon}
                      </div>
                      <h3 className="text-lg font-bold text-emerald-900 mb-2">{standard.title}</h3>
                      <p className="text-sm text-emerald-600">{standard.description}</p>
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
                <h2 className="text-4xl font-bold text-emerald-900 mb-4">Accreditation Process</h2>
                <p className="text-xl text-emerald-600">Systematic approach to quality assurance</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {accreditationProcess.map((step, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-emerald-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                        {step.icon}
                      </div>
                      <div className="text-2xl font-bold text-emerald-900 mb-2">Step {step.step}</div>
                      <h3 className="text-lg font-bold text-emerald-800 mb-2">{step.title}</h3>
                      <p className="text-sm text-emerald-600">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-md border border-emerald-200">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-emerald-900 mb-6">Contact Accreditation Committee</h2>
                <p className="text-emerald-600 mb-8 max-w-2xl mx-auto">
                  For accreditation inquiries, documentation, or quality assurance matters, please contact our Accreditation Committee:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <div>
                      <h3 className="font-semibold text-emerald-900">Office Location</h3>
                      <p className="text-emerald-600 text-sm">Quality Assurance Building</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-emerald-600" />
                    <div>
                      <h3 className="font-semibold text-emerald-900">Committee Phone</h3>
                      <p className="text-emerald-600 text-sm">+88-0123457700</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <div>
                      <h3 className="font-semibold text-emerald-900">Committee Email</h3>
                      <p className="text-emerald-600 text-sm">accreditation@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-emerald-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-emerald-900 mb-2">Office Hours</h3>
                  <p className="text-emerald-600">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                  <p className="text-emerald-600">Friday: 9:00 AM - 2:00 PM</p>
                  <p className="text-emerald-600">Saturday: Closed</p>
                  <div className="mt-4 p-4 bg-emerald-100 rounded">
                    <p className="text-emerald-700 font-semibold">Next Accreditation Review: December 2025</p>
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
