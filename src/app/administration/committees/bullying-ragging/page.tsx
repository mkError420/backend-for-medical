"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, Star, Trophy, MessageSquare, Mic, Brain, Zap, AlertTriangle, ShieldCheck, Eye, Ear, HelpCircle, PhoneCall, MessageCircle, Lock, Key, UserX, Ban, StopCircle, CheckCircle, AlertCircle, Info, FileCheck, Hand, HeartHandshake, UsersRound, Megaphone, Search } from "lucide-react"

export default function BullyingRaggingPage() {
  const [activeTab, setActiveTab] = useState("committee")

  const bullyingRaggingCommittee = [
    {
      name: "Prof. Dr. M. A. Karim",
      position: "Anti-Bullying Chairman",
      role: "Overall Anti-Bullying Policy Management",
      email: "antibullying.chairman@rcmc.edu.bd",
      phone: "+88-0123458500",
      experience: "28+ years",
      qualification: "MBBS, MD, PhD",
      specialization: "Student Welfare & Mental Health",
      avatar: "MK",
      color: "from-red-500 to-orange-600"
    },
    {
      name: "Dr. S. R. Begum",
      position: "Vice Chairman",
      role: "Student Counseling & Support",
      email: "counseling@rcmc.edu.bd",
      phone: "+88-0123458501",
      experience: "22+ years",
      qualification: "MBBS, MD, M.Phil.",
      specialization: "Psychological Counseling & Student Support",
      avatar: "SB",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Prof. Dr. A. K. Islam",
      position: "Senior Member",
      role: "Disciplinary Actions & Investigations",
      email: "discipline@rcmc.edu.bd",
      phone: "+88-0123458502",
      experience: "25+ years",
      qualification: "MBBS, FCPS, LLM",
      specialization: "Medical Ethics & Legal Affairs",
      avatar: "AI",
      color: "from-red-600 to-orange-600"
    },
    {
      name: "Dr. N. A. Rahman",
      position: "Member",
      role: "Student Affairs & Welfare",
      email: "welfare@rcmc.edu.bd",
      phone: "+88-0123458503",
      experience: "18+ years",
      qualification: "MBBS, MPH, MSW",
      specialization: "Student Welfare Programs & Support Services",
      avatar: "NR",
      color: "from-orange-600 to-red-600"
    },
    {
      name: "Ms. F. R. Ahmed",
      position: "Member",
      role: "Female Student Protection",
      email: "women.welfare@rcmc.edu.bd",
      phone: "+88-0123458504",
      experience: "20+ years",
      qualification: "MA, MSW, LLB",
      specialization: "Women's Rights & Gender Equality",
      avatar: "FA",
      color: "from-red-500 to-pink-600"
    },
    {
      name: "Mr. K. M. Hassan",
      position: "Member Secretary",
      role: "Documentation & Reporting",
      email: "reporting@rcmc.edu.bd",
      phone: "+88-0123458505",
      experience: "15+ years",
      qualification: "MBA, MPA, LLB",
      specialization: "Administrative Documentation & Case Management",
      avatar: "KH",
      color: "from-orange-500 to-amber-600"
    }
  ]

  const preventionServices = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Prevention Programs",
      description: "Educational programs and awareness campaigns"
    },
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: "24/7 Helpline",
      description: "Round-the-clock support and counseling"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Monitoring System",
      description: "Continuous monitoring and early detection"
    },
    {
      icon: <Hand className="w-6 h-6" />,
      title: "Support Services",
      description: "Counseling and rehabilitation services"
    }
  ]

  const reportingProcess = [
    {
      step: "1",
      title: "Incident Report",
      description: "Report bullying or ragging incidents",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Immediate Action",
      description: "Take immediate protective measures",
      icon: <Shield className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Investigation",
      description: "Thorough investigation and evidence collection",
      icon: <Search className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Resolution",
      description: "Appropriate action and follow-up support",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ]

  const antiBullyingStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "6",
      label: "Committee Members",
      color: "from-red-400 to-orange-600"
    },
    {
      icon: <PhoneCall className="w-8 h-8" />,
      number: "24/7",
      label: "Helpline Available",
      color: "from-orange-400 to-red-600"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      number: "100%",
      label: "Zero Tolerance Policy",
      color: "from-red-400 to-pink-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      number: "48h",
      label: "Response Time",
      color: "from-orange-400 to-amber-600"
    }
  ]

  const reportingChannels = [
    {
      name: "Emergency Helpline",
      contact: "+88-0123458500",
      type: "Phone",
      available: "24/7",
      priority: "High",
      description: "For immediate assistance and emergency cases"
    },
    {
      name: "Email Reporting",
      contact: "report@rcmc.edu.bd",
      type: "Email",
      available: "24/7",
      priority: "Medium",
      description: "For detailed incident reports and documentation"
    },
    {
      name: "Online Portal",
      contact: "report.rcmc.edu.bd",
      type: "Web",
      available: "24/7",
      priority: "Medium",
      description: "Anonymous reporting through secure online portal"
    },
    {
      name: "In-Person Reporting",
      contact: "Welfare Office",
      type: "Office",
      available: "9AM-5PM",
      priority: "High",
      description: "Face-to-face reporting with committee members"
    }
  ]

  const preventiveMeasures = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Awareness Campaigns",
      description: "Regular awareness programs and workshops",
      frequency: "Monthly"
    },
    {
      icon: <UsersRound className="w-8 h-8" />,
      title: "Peer Support Groups",
      description: "Student-led support and monitoring groups",
      frequency: "Weekly"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Policy Enforcement",
      description: "Strict implementation of anti-bullying policies",
      frequency: "Ongoing"
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Counseling Sessions",
      description: "Regular counseling and mental health support",
      frequency: "Daily"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-[#EAEAEA] text-white">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#111827]">Anti-Bullying & Anti-Ragging Committee</h1>
            <p className="text-xl md:text-2xl text-[#253240] leading-relaxed mb-8">
      Ensuring a Safe and Respectful Learning Environment
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
                  onClick={() => setActiveTab("services")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "services"
                      ? "bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg"
                      : "text-red-600 hover:text-red-800 hover:bg-white/10"
                  }`}
                >
                  <ShieldCheck className="inline w-4 h-4 mr-2" />
                  Services
                </button>
                <button
                  onClick={() => setActiveTab("process")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "process"
                      ? "bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg"
                      : "text-red-600 hover:text-red-800 hover:bg-white/10"
                  }`}
                >
                  <AlertTriangle className="inline w-4 h-4 mr-2" />
                  Process
                </button>
                <button
                  onClick={() => setActiveTab("reporting")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "reporting"
                      ? "bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg"
                      : "text-red-600 hover:text-red-800 hover:bg-white/10"
                  }`}
                >
                  <PhoneCall className="inline w-4 h-4 mr-2" />
                  Reporting
                </button>
                <button
                  onClick={() => setActiveTab("prevention")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "prevention"
                      ? "bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg"
                      : "text-red-600 hover:text-red-800 hover:bg-white/10"
                  }`}
                >
                  <Shield className="inline w-4 h-4 mr-2" />
                  Prevention
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
                <h2 className="text-4xl font-bold text-red-900 mb-4">Anti-Bullying Committee Members</h2>
                <p className="text-xl text-red-600">Dedicated professionals ensuring student safety</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {bullyingRaggingCommittee.map((member, index) => (
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
                {antiBullyingStats.map((stat, index) => (
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

          {/* Services Tab */}
          {activeTab === "services" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-red-900 mb-4">Prevention Services</h2>
                <p className="text-xl text-red-600">Comprehensive services to prevent bullying and ragging</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {preventionServices.map((service, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-red-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold text-red-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-red-600">{service.description}</p>
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
                <h2 className="text-4xl font-bold text-red-900 mb-4">Incident Reporting Process</h2>
                <p className="text-xl text-red-600">Systematic approach to handle bullying incidents</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reportingProcess.map((step, index) => (
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

          {/* Reporting Tab */}
          {activeTab === "reporting" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-red-900 mb-4">Reporting Channels</h2>
                <p className="text-xl text-red-600">Multiple ways to report bullying incidents</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reportingChannels.map((channel, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-red-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-red-900">{channel.name}</h3>
                          <p className="text-sm text-red-600">{channel.contact}</p>
                        </div>
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <PhoneCall className="w-6 h-6 text-red-600" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-red-50 rounded-lg">
                          <div className="text-sm font-bold text-red-900">{channel.type}</div>
                          <div className="text-xs text-red-600">Type</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-sm font-bold text-green-900">{channel.available}</div>
                          <div className="text-xs text-green-600">Available</div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          channel.priority === "High" 
                            ? "bg-red-100 text-red-700" 
                            : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {channel.priority} Priority
                        </span>
                      </div>
                      
                      <p className="text-sm text-red-600">{channel.description}</p>
                      
                      <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300">
                        <PhoneCall className="inline w-4 h-4 mr-2" />
                        Report Now
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Prevention Tab */}
          {activeTab === "prevention" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-red-900 mb-4">Preventive Measures</h2>
                <p className="text-xl text-red-600">Proactive measures to prevent bullying and ragging</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {preventiveMeasures.map((measure, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-red-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                          {measure.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-red-900">{measure.title}</h3>
                          <p className="text-sm text-red-600">{measure.frequency}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-red-600">{measure.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Emergency Contact Information */}
          <Card className="bg-white/80 backdrop-blur-md border border-red-200">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-red-900 mb-6">Emergency Contact Information</h2>
                <p className="text-red-600 mb-8 max-w-2xl mx-auto">
                  If you or someone you know is experiencing bullying or ragging, please reach out immediately. We are here to help 24/7.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <PhoneCall className="w-5 h-5 text-red-600" />
                    <div>
                      <h3 className="font-semibold text-red-900">Emergency Helpline</h3>
                      <p className="text-red-600 text-sm">+88-0123458500 (24/7)</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-red-600" />
                    <div>
                      <h3 className="font-semibold text-red-900">Email Support</h3>
                      <p className="text-red-600 text-sm">emergency@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <div>
                      <h3 className="font-semibold text-red-900">Welfare Office</h3>
                      <p className="text-red-600 text-sm">Admin Building, Room 101</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-red-50 rounded-lg max-w-3xl mx-auto">
                  <h3 className="font-bold text-red-900 mb-4 text-lg">Important Notice</h3>
                  <div className="space-y-2 text-left">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <p className="text-red-700 text-sm">Zero tolerance policy against all forms of bullying and ragging</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <ShieldCheck className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <p className="text-red-700 text-sm">All reports are treated with strict confidentiality</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <p className="text-red-700 text-sm">Immediate action guaranteed for all reported cases</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <p className="text-red-700 text-sm">Professional counseling and support available</p>
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
