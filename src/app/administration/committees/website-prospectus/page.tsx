"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, Star, Trophy, MessageSquare, Mic, Brain, Zap, Globe, Monitor, Smartphone, Tablet, Code, Database, Server, Cloud, Wifi, Layout, Settings2, Image, Video, FileCheck, Download, Upload, RefreshCw, Search, Link, ExternalLink, BarChart, PieChart, TrendingUp, User, Lock, Key, ShieldCheck } from "lucide-react"

export default function WebsiteProspectusPage() {
  const [activeTab, setActiveTab] = useState("committee")

  const websiteProspectusCommittee = [
    {
      name: "Prof. Dr. S. M. Hassan",
      position: "Website & Prospectus Chairman",
      role: "Overall Digital Strategy Management",
      email: "digital.chairman@rcmc.edu.bd",
      phone: "+88-0123458400",
      experience: "25+ years",
      qualification: "MBBS, MD, MS",
      specialization: "Digital Strategy & Information Management",
      avatar: "SH",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Dr. A. R. Karim",
      position: "Technical Director",
      role: "Website Development & Maintenance",
      email: "tech.director@rcmc.edu.bd",
      phone: "+88-0123458401",
      experience: "20+ years",
      qualification: "MBBS, MD, M.Sc. IT",
      specialization: "Web Development & System Architecture",
      avatar: "AK",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Prof. Dr. N. P. Chakraborty",
      position: "Content Director",
      role: "Content Strategy & Prospectus Development",
      email: "content.director@rcmc.edu.bd",
      phone: "+88-0123458402",
      experience: "22+ years",
      qualification: "MBBS, FCPS, PhD",
      specialization: "Medical Content Strategy & Academic Publishing",
      avatar: "NC",
      color: "from-blue-600 to-cyan-600"
    },
    {
      name: "Dr. M. A. Sultana",
      position: "UX/UI Designer",
      role: "User Experience & Interface Design",
      email: "design@rcmc.edu.bd",
      phone: "+88-0123458403",
      experience: "15+ years",
      qualification: "MBBS, MSc HCI",
      specialization: "User Experience Design & Digital Interface",
      avatar: "MS",
      color: "from-cyan-600 to-blue-600"
    },
    {
      name: "Mr. T. H. Rahman",
      position: "Database Administrator",
      role: "Data Management & Security",
      email: "database@rcmc.edu.bd",
      phone: "+88-0123458404",
      experience: "18+ years",
      qualification: "B.Sc. CS, M.Sc. IT, CCNA",
      specialization: "Database Architecture & Cybersecurity",
      avatar: "TR",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Ms. S. K. Paul",
      position: "Member Secretary",
      role: "Documentation & Coordination",
      email: "coordination@rcmc.edu.bd",
      phone: "+88-0123458405",
      experience: "12+ years",
      qualification: "BA, MA, MBA",
      specialization: "Project Coordination & Documentation",
      avatar: "SP",
      color: "from-cyan-500 to-teal-600"
    }
  ]

  const digitalServices = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website Management",
      description: "Official website development and maintenance"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Digital Prospectus",
      description: "Interactive digital prospectus creation"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Management",
      description: "Academic data and information systems"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Cybersecurity",
      description: "Digital security and privacy protection"
    }
  ]

  const developmentProcess = [
    {
      step: "1",
      title: "Planning & Strategy",
      description: "Define digital objectives and requirements",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Design & Development",
      description: "Create user-friendly interfaces and systems",
      icon: <Code className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Content Creation",
      description: "Develop engaging and informative content",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Testing & Launch",
      description: "Quality assurance and deployment",
      icon: <FileCheck className="w-8 h-8" />
    }
  ]

  const digitalStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "6",
      label: "Committee Members",
      color: "from-blue-400 to-cyan-600"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      number: "50K+",
      label: "Monthly Visitors",
      color: "from-cyan-400 to-blue-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      number: "100%",
      label: "Mobile Responsive",
      color: "from-blue-400 to-indigo-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "25%",
      label: "Traffic Growth",
      color: "from-cyan-400 to-teal-600"
    }
  ]

  const digitalPlatforms = [
    {
      name: "Official Website",
      url: "www.rcmc.edu.bd",
      visitors: "25,000+",
      status: "Active",
      features: ["Admission Portal", "Course Catalog", "Faculty Directory", "News & Events"]
    },
    {
      name: "Digital Prospectus",
      url: "prospectus.rcmc.edu.bd",
      visitors: "15,000+",
      status: "Active",
      features: ["Interactive Content", "Virtual Tour", "Program Details", "Application Guide"]
    },
    {
      name: "Student Portal",
      url: "student.rcmc.edu.bd",
      visitors: "8,000+",
      status: "Active",
      features: ["Academic Records", "Course Registration", "Exam Results", "Library Access"]
    },
    {
      name: "Faculty Portal",
      url: "faculty.rcmc.edu.bd",
      visitors: "2,000+",
      status: "Active",
      features: ["Research Portal", "Publication Database", "Teaching Resources", "Admin Tools"]
    }
  ]

  const technologies = [
    {
      icon: <Code className="w-8 h-8" />,
      name: "Frontend Development",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      name: "Backend Systems",
      tech: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      name: "Cloud Infrastructure",
      tech: ["AWS", "Vercel", "Cloudflare", "Digital Ocean"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      name: "Security Solutions",
      tech: ["SSL/TLS", "Firewall", "2FA", "Data Encryption"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="bg-[#EAEAEA] text-white">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#111827]">Website & Prospectus Committee</h1>
            <p className="text-xl md:text-2xl text-[#253240] leading-relaxed mb-8">
      Managing Digital Presence and Information Architecture
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 inline-flex">
                <button
                  onClick={() => setActiveTab("committee")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "committee"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg"
                      : "text-blue-600 hover:text-blue-800 hover:bg-white/10"
                  }`}
                >
                  <Users className="inline w-4 h-4 mr-2" />
                  Committee
                </button>
                <button
                  onClick={() => setActiveTab("services")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "services"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg"
                      : "text-blue-600 hover:text-blue-800 hover:bg-white/10"
                  }`}
                >
                  <Monitor className="inline w-4 h-4 mr-2" />
                  Services
                </button>
                <button
                  onClick={() => setActiveTab("process")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "process"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg"
                      : "text-blue-600 hover:text-blue-800 hover:bg-white/10"
                  }`}
                >
                  <Code className="inline w-4 h-4 mr-2" />
                  Process
                </button>
                <button
                  onClick={() => setActiveTab("platforms")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "platforms"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg"
                      : "text-blue-600 hover:text-blue-800 hover:bg-white/10"
                  }`}
                >
                  <Globe className="inline w-4 h-4 mr-2" />
                  Platforms
                </button>
                <button
                  onClick={() => setActiveTab("technology")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "technology"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg"
                      : "text-blue-600 hover:text-blue-800 hover:bg-white/10"
                  }`}
                >
                  <Database className="inline w-4 h-4 mr-2" />
                  Technology
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
                <h2 className="text-4xl font-bold text-blue-900 mb-4">Website & Prospectus Committee Members</h2>
                <p className="text-xl text-blue-600">Digital professionals managing web and information systems</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {websiteProspectusCommittee.map((member, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-blue-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-xl font-bold">{member.avatar}</span>
                      </div>
                      <h3 className="text-lg font-bold text-blue-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-blue-700 mb-1">{member.position}</p>
                      <p className="text-xs text-blue-500 mb-3">{member.role}</p>
                      
                      <div className="space-y-2 text-xs mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-3 h-3 text-blue-400" />
                          <span className="text-blue-600">{member.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-3 h-3 text-blue-400" />
                          <span className="text-blue-600">{member.phone}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-blue-200">
                        <p className="text-xs text-blue-500 mb-1">Experience: {member.experience}</p>
                        <p className="text-xs text-blue-500 mb-1">Qualification: {member.qualification}</p>
                        <p className="text-xs text-blue-500">Specialization: {member.specialization}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {digitalStats.map((stat, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-blue-200 hover:bg-white/90 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-blue-900 mb-1">{stat.number}</div>
                        <div className="text-blue-600">{stat.label}</div>
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
                <h2 className="text-4xl font-bold text-blue-900 mb-4">Digital Services</h2>
                <p className="text-xl text-blue-600">Comprehensive digital solutions for the institution</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {digitalServices.map((service, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-blue-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-blue-600">{service.description}</p>
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
                <h2 className="text-4xl font-bold text-blue-900 mb-4">Development Process</h2>
                <p className="text-xl text-blue-600">Systematic approach to digital development</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {developmentProcess.map((step, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-blue-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                        {step.icon}
                      </div>
                      <div className="text-2xl font-bold text-blue-900 mb-2">Step {step.step}</div>
                      <h3 className="text-lg font-bold text-blue-800 mb-2">{step.title}</h3>
                      <p className="text-sm text-blue-600">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Platforms Tab */}
          {activeTab === "platforms" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-blue-900 mb-4">Digital Platforms</h2>
                <p className="text-xl text-blue-600">Our comprehensive digital ecosystem</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {digitalPlatforms.map((platform, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-blue-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-blue-900">{platform.name}</h3>
                          <p className="text-sm text-blue-600">{platform.url}</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Globe className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-900">{platform.visitors}</div>
                          <div className="text-xs text-blue-600">Monthly Visitors</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-lg font-bold text-green-900">{platform.status}</div>
                          <div className="text-xs text-green-600">Status</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-blue-800">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {platform.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-xs text-blue-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                        <ExternalLink className="inline w-4 h-4 mr-2" />
                        Visit Platform
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Technology Tab */}
          {activeTab === "technology" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-blue-900 mb-4">Technology Stack</h2>
                <p className="text-xl text-blue-600">Modern technologies powering our digital infrastructure</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {technologies.map((tech, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-blue-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          {tech.icon}
                        </div>
                        <h3 className="text-lg font-bold text-blue-900">{tech.name}</h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {tech.tech.map((item, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {item}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-md border border-blue-200">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Website & Prospectus Committee</h2>
                <p className="text-blue-600 mb-8 max-w-2xl mx-auto">
                  For website development, digital prospectus creation, or technical support, please contact our Website & Prospectus Committee:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-blue-900">Digital Office</h3>
                      <p className="text-blue-600 text-sm">IT Building, Room 301</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-blue-900">Support Phone</h3>
                      <p className="text-blue-600 text-sm">+88-0123458400</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-blue-900">Support Email</h3>
                      <p className="text-blue-600 text-sm">support@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-blue-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-blue-900 mb-2">Technical Support Hours</h3>
                  <p className="text-blue-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-blue-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-blue-600">Sunday: Emergency Support Only</p>
                  <div className="mt-4 p-4 bg-blue-100 rounded">
                    <p className="text-blue-700 font-semibold">Emergency Support: +88-0123458401 (24/7)</p>
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
