"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, Edit3, CheckCircle } from "lucide-react"

export default function AcademicCoordinationPage() {
  const academicCoordinators = [
    {
      name: "Prof. Dr. M. A. Rahman",
      position: "Chief Academic Coordinator",
      department: "Academic Affairs",
      email: "chief.academic@rcmc.edu.bd",
      phone: "+88-0123456900",
      experience: "18+ years",
      qualification: "MBBS, MD, PhD",
      specialization: "Curriculum Development & Academic Planning",
      avatar: "MR",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Dr. S. K. Ahmed",
      position: "Senior Academic Coordinator",
      department: "Medical Education",
      email: "senior.academic@rcmc.edu.bd",
      phone: "+88-0123456901",
      experience: "15+ years",
      qualification: "MBBS, MD, M.Ed.",
      specialization: "Teaching Methodology & Assessment",
      avatar: "SA",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Prof. Dr. R. C. Mondal",
      position: "Academic Coordinator",
      department: "Clinical Training",
      email: "clinical.coordinator@rcmc.edu.bd",
      phone: "+88-0123456902",
      experience: "12+ years",
      qualification: "MBBS, FCPS, MS",
      specialization: "Clinical Skills & Practical Training",
      avatar: "RM",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Dr. N. A. Begum",
      position: "Academic Coordinator",
      department: "Student Assessment",
      email: "assessment.coordinator@rcmc.edu.bd",
      phone: "+88-0123456903",
      experience: "10+ years",
      qualification: "MBBS, MPH, M.Ed.",
      specialization: "Examination System & Evaluation Methods",
      avatar: "NB",
      color: "from-pink-400 to-pink-600"
    },
    {
      name: "Prof. Dr. K. M. Hassan",
      position: "Academic Coordinator",
      department: "Research & Innovation",
      email: "research.coordinator@rcmc.edu.bd",
      phone: "+88-0123456904",
      experience: "14+ years",
      qualification: "MBBS, MD, PhD",
      specialization: "Research Supervision & Academic Publications",
      avatar: "KH",
      color: "from-orange-400 to-orange-600"
    },
    {
      name: "Dr. F. R. Chowdhury",
      position: "Assistant Academic Coordinator",
      department: "Quality Assurance",
      email: "quality.coordinator@rcmc.edu.bd",
      phone: "+88-0123456904",
      experience: "8+ years",
      qualification: "MBBS, MPH",
      specialization: "Academic Quality & Standards Compliance",
      avatar: "FC",
      color: "from-teal-400 to-teal-600"
    },
    {
      name: "Ms. T. J. Khatun",
      position: "Academic Coordinator",
      department: "Faculty Development",
      email: "faculty.coordinator@rcmc.edu.bd",
      phone: "+88-0123456906",
      experience: "7+ years",
      qualification: "M.Sc., M.Ed.",
      specialization: "Faculty Training & Professional Development",
      avatar: "TK",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      name: "Mr. A. H. Rahman",
      position: "Academic Coordinator",
      department: "Student Affairs",
      email: "student.academic@rcmc.edu.bd",
      phone: "+88-0123456907",
      experience: "9+ years",
      qualification: "M.Sc., M.Ed.",
      specialization: "Student Academic Support & Counseling",
      avatar: "AR",
      color: "from-red-400 to-red-600"
    }
  ]

  const coordinationFunctions = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Curriculum Management",
      description: "Development and implementation of academic programs"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Faculty Coordination",
      description: "Faculty development and performance evaluation"
    },
    {
      icon: <Edit3 className="w-6 h-6" />,
      title: "Assessment Systems",
      description: "Examination and evaluation framework management"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Academic standards and compliance monitoring"
    }
  ]

  const academicStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "8",
      label: "Academic Coordinators",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: "15+",
      label: "Academic Programs",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      number: "100%",
      label: "Quality Compliance",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "24/7",
      label: "Academic Support",
      color: "from-orange-400 to-orange-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Coordination</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Excellence in Academic Management
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                Academic Excellence
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
                  <CardTitle className="text-2xl text-gray-800">About Academic Coordination</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Academic Coordination department at Rangpur Community Medical College serves as the central hub for managing all academic activities, ensuring the highest standards of medical education and training. Our team of experienced academic coordinators works collaboratively to maintain academic excellence and innovation.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We are responsible for curriculum development, faculty management, student assessment, quality assurance, and continuous improvement of academic programs. Our coordinators bring diverse expertise from various medical and educational backgrounds to provide comprehensive academic support.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Through systematic planning, regular monitoring, and strategic interventions, we ensure that our academic programs meet national and international standards while preparing competent healthcare professionals for the future.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Academic Statistics */}
            <div className="space-y-6">
              {academicStats.map((stat, index) => (
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

          {/* Coordination Functions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Coordination Functions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coordinationFunctions.map((func, index) => (
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

          {/* Academic Coordinators */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Academic Coordinators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {academicCoordinators.map((coordinator, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${coordinator.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-xl font-bold">{coordinator.avatar}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{coordinator.name}</h3>
                    <p className="text-sm font-semibold text-blue-600 mb-1">{coordinator.position}</p>
                    <p className="text-xs text-gray-500 mb-3">{coordinator.department}</p>
                    
                    <div className="space-y-2 text-xs mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <Mail className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{coordinator.email}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{coordinator.phone}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Experience: {coordinator.experience}</p>
                      <p className="text-xs text-gray-500 mb-1">Qualification: {coordinator.qualification}</p>
                      <p className="text-xs text-gray-500">Specialization: {coordinator.specialization}</p>
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
                <h2 className="text-3xl font-bold mb-6">Contact Academic Coordination</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For academic matters, curriculum inquiries, or educational support, please contact our Academic Coordination office through the following channels:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Academic Affairs Building</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Department Phone</h3>
                      <p className="text-gray-600 text-sm">+88-0123456900</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Department Email</h3>
                      <p className="text-gray-600 text-sm">academic@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-gray-800 mb-2">Office Hours</h3>
                  <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
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
