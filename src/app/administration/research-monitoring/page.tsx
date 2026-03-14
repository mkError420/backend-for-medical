"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, Search, TrendingUp, Microscope, Lightbulb, BarChart3 } from "lucide-react"

export default function ResearchMonitoringPage() {
  const researchTeam = [
    {
      name: "Prof. Dr. M. A. Karim",
      position: "Director of Research",
      department: "Research & Development",
      email: "director.research@rcmc.edu.bd",
      phone: "+88-0123457200",
      experience: "20+ years",
      qualification: "MBBS, MD, PhD",
      specialization: "Medical Research Leadership & Innovation",
      avatar: "MK",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Dr. S. K. Rahman",
      position: "Associate Director",
      department: "Clinical Research",
      email: "associate.research@rcmc.edu.bd",
      phone: "+88-0123457201",
      experience: "16+ years",
      qualification: "MBBS, MD, PhD",
      specialization: "Clinical Trials & Evidence-Based Medicine",
      avatar: "SR",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Prof. Dr. R. C. Ahmed",
      position: "Senior Research Scientist",
      department: "Basic Medical Sciences",
      email: "senior.research@rcmc.edu.bd",
      phone: "+88-0123457202",
      experience: "14+ years",
      qualification: "MBBS, PhD, DSc",
      specialization: "Molecular Biology & Genetics Research",
      avatar: "RA",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Dr. N. A. Begum",
      position: "Research Coordinator",
      department: "Community Medicine",
      email: "community.research@rcmc.edu.bd",
      phone: "+88-0123457203",
      experience: "12+ years",
      qualification: "MBBS, MPH, PhD",
      specialization: "Public Health Research & Epidemiology",
      avatar: "NB",
      color: "from-pink-400 to-pink-600"
    },
    {
      name: "Prof. Dr. K. M. Hassan",
      position: "Principal Investigator",
      department: "Pharmacology Research",
      email: "pharmacology.research@rcmc.edu.bd",
      phone: "+88-0123457204",
      experience: "15+ years",
      qualification: "MBBS, MD, PhD",
      specialization: "Drug Development & Clinical Pharmacology",
      avatar: "KH",
      color: "from-orange-400 to-orange-600"
    },
    {
      name: "Dr. F. R. Chowdhury",
      position: "Research Scientist",
      department: "Pathology & Microbiology",
      email: "pathology.research@rcmc.edu.bd",
      phone: "+88-0123457205",
      experience: "10+ years",
      qualification: "MBBS, MD, PhD",
      specialization: "Diagnostic Research & Laboratory Medicine",
      avatar: "FC",
      color: "from-teal-400 to-teal-600"
    },
    {
      name: "Ms. T. J. Khatun",
      position: "Research Officer",
      department: "Biostatistics & Data Management",
      email: "biostatistics.research@rcmc.edu.bd",
      phone: "+88-0123457206",
      experience: "8+ years",
      qualification: "M.Sc., M.Phil.",
      specialization: "Statistical Analysis & Research Methodology",
      avatar: "TK",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      name: "Mr. A. H. Rahman",
      position: "Lab Technician",
      department: "Research Laboratory",
      email: "lab.technician@rcmc.edu.bd",
      phone: "+88-0123457207",
      experience: "6+ years",
      qualification: "B.Sc., M.Sc.",
      specialization: "Laboratory Operations & Equipment Management",
      avatar: "AR",
      color: "from-red-400 to-red-600"
    },
    {
      name: "Ms. S. M. Ali",
      position: "Research Assistant",
      department: "Clinical Trials Unit",
      email: "trials.assistant@rcmc.edu.bd",
      phone: "+88-0123457208",
      experience: "5+ years",
      qualification: "B.Sc., M.Sc.",
      specialization: "Clinical Trial Management & Data Collection",
      avatar: "SA",
      color: "from-cyan-400 to-cyan-600"
    }
  ]

  const researchFunctions = [
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Laboratory Research",
      description: "Advanced medical and clinical research facilities"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analysis",
      description: "Statistical analysis and research data management"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Hub",
      description: "Fostering research creativity and new ideas"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Publication Support",
      description: "Research publication and dissemination assistance"
    }
  ]

  const researchStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "9",
      label: "Research Team Members",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Search className="w-8 h-8" />,
      number: "100+",
      label: "Active Research Projects",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: "50+",
      label: "Annual Publications",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15",
      label: "Research Grants",
      color: "from-orange-400 to-orange-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Monitoring</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Advancing Medical Science Through Research Excellence
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                Research Innovation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-6xl mx-auto">
          {/* About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-2xl text-gray-800">About Research & Monitoring</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Research & Monitoring department at Rangpur Community Medical College is committed to advancing medical science through cutting-edge research, innovative methodologies, and evidence-based practices. Our dedicated team of researchers works across multiple disciplines to address critical healthcare challenges.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We focus on clinical research, basic medical sciences, community medicine, and translational research to bridge the gap between laboratory discoveries and clinical applications. Our state-of-the-art research facilities and collaborative environment foster innovation and excellence.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Through rigorous research methodologies, ethical practices, and international collaborations, we contribute to the global body of medical knowledge while training the next generation of medical researchers and scientists.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Research Statistics */}
            <div className="space-y-6">
              {researchStats.map((stat, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Functions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Research Functions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchFunctions.map((func, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                      {func.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{func.title}</h3>
                    <p className="text-sm text-gray-600">{func.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Team Members */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Research Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {researchTeam.map((member, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-xl font-bold">{member.avatar}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-blue-600 mb-1">{member.position}</p>
                    <p className="text-xs text-gray-500 mb-3">{member.department}</p>
                    
                    <div className="space-y-2 text-xs mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <Mail className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{member.email}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{member.phone}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Experience: {member.experience}</p>
                      <p className="text-xs text-gray-500 mb-1">Qualification: {member.qualification}</p>
                      <p className="text-xs text-gray-500">Specialization: {member.specialization}</p>
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
                <h2 className="text-3xl font-bold mb-6">Contact Research & Monitoring</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For research collaborations, project inquiries, or academic research support, please contact our Research & Monitoring department through the following channels:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Research Building</h3>
                      <p className="text-gray-600 text-sm">Research Complex, 2nd Floor</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Department Phone</h3>
                      <p className="text-gray-600 text-sm">+88-0123457200</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Department Email</h3>
                      <p className="text-gray-600 text-sm">research@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-gray-800 mb-2">Office Hours</h3>
                  <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Friday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Saturday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
