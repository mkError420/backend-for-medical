"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, Stethoscope, Activity, Brain } from "lucide-react"

export default function MedicalEducationUnitPage() {
  const medicalEducationStaff = [
    {
      name: "Prof. Dr. M. A. Karim",
      position: "Director of Medical Education",
      department: "Medical Education Unit",
      email: "director.medical@rcmc.edu.bd",
      phone: "+88-0123457100",
      experience: "22+ years",
      qualification: "MBBS, MD, PhD, M.Ed.",
      specialization: "Medical Education Leadership & Curriculum Development",
      avatar: "MK",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Dr. S. K. Rahman",
      position: "Associate Director",
      department: "Clinical Training",
      email: "associate.medical@rcmc.edu.bd",
      phone: "+88-0123457101",
      experience: "16+ years",
      qualification: "MBBS, MD, M.Ed.",
      specialization: "Clinical Skills Training & Simulation",
      avatar: "SR",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Prof. Dr. R. C. Ahmed",
      position: "Professor of Medical Education",
      department: "Academic Development",
      email: "prof.medical@rcmc.edu.bd",
      phone: "+88-0123457102",
      experience: "18+ years",
      qualification: "MBBS, FCPS, PhD",
      specialization: "Teaching Methodology & Faculty Development",
      avatar: "RA",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Dr. N. A. Begum",
      position: "Assistant Professor",
      department: "Student Assessment",
      email: "assistant.medical@rcmc.edu.bd",
      phone: "+88-0123457103",
      experience: "12+ years",
      qualification: "MBBS, MPH, M.Ed.",
      specialization: "Assessment Design & Evaluation Systems",
      avatar: "NB",
      color: "from-pink-400 to-pink-600"
    },
    {
      name: "Dr. K. M. Hassan",
      position: "Medical Education Officer",
      department: "Skills Laboratory",
      email: "officer.medical@rcmc.edu.bd",
      phone: "+88-0123457104",
      experience: "10+ years",
      qualification: "MBBS, MD",
      specialization: "Simulation Lab Management & Clinical Skills",
      avatar: "KH",
      color: "from-orange-400 to-orange-600"
    },
    {
      name: "Ms. F. R. Chowdhury",
      position: "Education Coordinator",
      department: "E-Learning & Technology",
      email: "coordinator.medical@rcmc.edu.bd",
      phone: "+88-0123457105",
      experience: "8+ years",
      qualification: "M.Sc., M.Ed.",
      specialization: "Digital Learning & Educational Technology",
      avatar: "FC",
      color: "from-teal-400 to-teal-600"
    }
  ]

  const unitFunctions = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Clinical Skills Training",
      description: "Hands-on clinical practice and skill development"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Curriculum Development",
      description: "Modern medical curriculum design and implementation"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Assessment & Evaluation",
      description: "Comprehensive student assessment systems"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Educational quality monitoring and improvement"
    }
  ]

  const educationStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "6",
      label: "Education Specialists",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: "50+",
      label: "Training Modules",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "100%",
      label: "Competency Based",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "24/7",
      label: "Lab Access",
      color: "from-orange-400 to-orange-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Education Unit</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Excellence in Medical Training & Education
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                Medical Excellence
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
                  <CardTitle className="text-2xl text-gray-800">About Medical Education Unit</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Medical Education Unit at Rangpur Community Medical College is dedicated to excellence in medical education through innovative teaching methodologies, advanced clinical training, and comprehensive assessment systems. We ensure that our medical students receive the highest quality education and practical training.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Our unit focuses on competency-based medical education, integrating theoretical knowledge with practical skills through state-of-the-art simulation laboratories and clinical training facilities. We employ modern educational technologies to enhance learning outcomes and prepare competent healthcare professionals.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Through continuous curriculum review, faculty development programs, and quality assurance mechanisms, we maintain educational standards that meet both national and international requirements, ensuring our graduates are well-prepared for global healthcare challenges.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Education Statistics */}
            <div className="space-y-6">
              {educationStats.map((stat, index) => (
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

          {/* Unit Functions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Unit Functions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {unitFunctions.map((func, index) => (
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

          {/* Medical Education Staff */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Medical Education Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalEducationStaff.map((staff, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${staff.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-xl font-bold">{staff.avatar}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{staff.name}</h3>
                    <p className="text-sm font-semibold text-blue-600 mb-1">{staff.position}</p>
                    <p className="text-xs text-gray-500 mb-3">{staff.department}</p>
                    
                    <div className="space-y-2 text-xs mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <Mail className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{staff.email}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{staff.phone}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Experience: {staff.experience}</p>
                      <p className="text-xs text-gray-500 mb-1">Qualification: {staff.qualification}</p>
                      <p className="text-xs text-gray-500">Specialization: {staff.specialization}</p>
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
                <h2 className="text-3xl font-bold mb-6">Contact Medical Education Unit</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For medical education inquiries, training programs, or educational support, please contact our Medical Education Unit through the following channels:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Unit Location</h3>
                      <p className="text-gray-600 text-sm">Medical Education Building</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Unit Phone</h3>
                      <p className="text-gray-600 text-sm">+88-0123457100</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Unit Email</h3>
                      <p className="text-gray-600 text-sm">medical.education@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-gray-800 mb-2">Office Hours</h3>
                  <p className="text-gray-600">Sunday - Thursday: 8:00 AM - 7:00 PM</p>
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
