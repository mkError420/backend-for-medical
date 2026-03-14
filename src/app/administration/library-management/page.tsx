"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, Search } from "lucide-react"

export default function LibraryManagementPage() {
  const libraryEmployees = [
    {
      name: "Prof. Dr. A. K. M. Azad",
      position: "Chief Librarian",
      department: "Library Management",
      email: "chief.librarian@rcmc.edu.bd",
      phone: "+88-0123456800",
      experience: "25+ years",
      qualification: "M.A., M.Lib.I.Sc., Ph.D.",
      specialization: "Library Administration & Digital Libraries",
      avatar: "AA",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Mrs. S. K. Begum",
      position: "Deputy Librarian",
      department: "Library Management",
      email: "deputy.librarian@rcmc.edu.bd",
      phone: "+88-0123456801",
      experience: "18+ years",
      qualification: "M.A., M.Lib.I.Sc.",
      specialization: "Technical Services & Cataloging",
      avatar: "SB",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Mr. M. R. Khan",
      position: "Senior Librarian",
      department: "Academic Library",
      email: "senior.librarian@rcmc.edu.bd",
      phone: "+88-0123456802",
      experience: "15+ years",
      qualification: "M.A., M.Lib.I.Sc.",
      specialization: "Reference Services & User Education",
      avatar: "MK",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Ms. N. A. Chowdhury",
      position: "Assistant Librarian",
      department: "Digital Library",
      email: "assistant.librarian@rcmc.edu.bd",
      phone: "+88-0123456803",
      experience: "10+ years",
      qualification: "M.A., M.Lib.I.Sc., PGDCA",
      specialization: "Digital Resources & E-Library Management",
      avatar: "NC",
      color: "from-pink-400 to-pink-600"
    },
    {
      name: "Mr. K. M. Hassan",
      position: "Library Officer",
      department: "Circulation Section",
      email: "circulation.officer@rcmc.edu.bd",
      phone: "+88-0123456804",
      experience: "8+ years",
      qualification: "B.A., B.Lib.I.Sc.",
      specialization: "Circulation & Membership Management",
      avatar: "KH",
      color: "from-orange-400 to-orange-600"
    },
    {
      name: "Ms. F. R. Ahmed",
      position: "Library Assistant",
      department: "Periodical Section",
      email: "periodical.assistant@rcmc.edu.bd",
      phone: "+88-0123456805",
      experience: "6+ years",
      qualification: "B.A., B.Lib.I.Sc.",
      specialization: "Journal Management & Serial Publications",
      avatar: "FA",
      color: "from-teal-400 to-teal-600"
    },
    {
      name: "Mr. S. M. Ali",
      position: "Library Assistant",
      department: "Technical Processing",
      email: "technical.assistant@rcmc.edu.bd",
      phone: "+88-0123456806",
      experience: "7+ years",
      qualification: "B.A., B.Lib.I.Sc.",
      specialization: "Book Processing & Classification",
      avatar: "SA",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      name: "Ms. T. J. Begum",
      position: "Junior Library Assistant",
      department: "Reference Section",
      email: "reference.assistant@rcmc.edu.bd",
      phone: "+88-0123456807",
      experience: "4+ years",
      qualification: "B.A., C.Lib.I.Sc.",
      specialization: "Reference Services & Information Retrieval",
      avatar: "TB",
      color: "from-red-400 to-red-600"
    }
  ]

  const libraryStats = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: "50,000+",
      label: "Books Collection",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "8",
      label: "Library Staff",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "12+",
      label: "Hours Daily",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Search className="w-8 h-8" />,
      number: "100%",
      label: "Digital Access",
      color: "from-orange-400 to-orange-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Library Banner */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/api/placeholder/1920/400" 
            alt="Library Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        <div className="relative responsive-container-full h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Library Management</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Gateway to Knowledge and Learning Resources
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
                <Clock className="inline w-4 h-4 mr-2" />
                Open 12 Hours Daily
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
                <BookOpen className="inline w-4 h-4 mr-2" />
                50,000+ Books
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-6xl mx-auto">
          {/* Library Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {libraryStats.map((stat, index) => (
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

          {/* Library Employees Section */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Library Management Team</h2>
              <p className="text-xl text-gray-600">Dedicated professionals serving your knowledge needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {libraryEmployees.map((employee, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${employee.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-xl font-bold">{employee.avatar}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{employee.name}</h3>
                    <p className="text-sm font-semibold text-blue-600 mb-1">{employee.position}</p>
                    <p className="text-xs text-gray-500 mb-3">{employee.department}</p>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-center space-x-2">
                        <Mail className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{employee.email}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{employee.phone}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Experience: {employee.experience}</p>
                      <p className="text-xs text-gray-500 mb-1">Qualification: {employee.qualification}</p>
                      <p className="text-xs text-gray-500">Specialization: {employee.specialization}</p>
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
                <h2 className="text-3xl font-bold mb-6">Contact Library Management</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For library services, book inquiries, or research assistance, please contact us through the following channels:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Library Location</h3>
                      <p className="text-gray-600 text-sm">Academic Building, 3rd Floor</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Library Phone</h3>
                      <p className="text-gray-600 text-sm">+88-0123456800</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Library Email</h3>
                      <p className="text-gray-600 text-sm">library@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-gray-800 mb-2">Library Hours</h3>
                  <p className="text-gray-600">Sunday - Thursday: 8:00 AM - 8:00 PM</p>
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
