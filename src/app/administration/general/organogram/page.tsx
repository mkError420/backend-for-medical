"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, ChevronDown, UserCheck, Stethoscope, Microscope, BookOpen, Activity } from "lucide-react"

export default function OrganogramPage() {
  const topLevel = {
    title: "Governing Body",
    head: "Chairman",
    name: "Prof. Dr. M. A. Karim",
    description: "Overall governance and strategic direction"
  }

  const secondLevel = [
    {
      title: "Principal",
      name: "Prof. Dr. S. M. Rahman",
      description: "Chief Executive Officer",
      icon: <User className="w-5 h-5" />
    },
    {
      title: "Vice Principal",
      name: "Prof. Dr. A. K. M. Islam",
      description: "Academic Administration",
      icon: <UserCheck className="w-5 h-5" />
    }
  ]

  const departments = [
    {
      name: "Academic Affairs",
      head: "Prof. Dr. M. A. Matin",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      subdivisions: [
        { name: "Basic Sciences", head: "Prof. Dr. A. K. Khan" },
        { name: "Clinical Sciences", head: "Prof. Dr. S. R. Ahmed" },
        { name: "Surgical Sciences", head: "Prof. Dr. L. K. Singh" }
      ]
    },
    {
      name: "Hospital Administration",
      head: "Dr. M. R. Chowdhury",
      icon: <Building className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      subdivisions: [
        { name: "Medical Services", head: "Dr. N. R. Islam" },
        { name: "Nursing Services", head: "Mrs. S. K. Begum" },
        { name: "Support Services", head: "Mr. K. H. Ahmed" }
      ]
    },
    {
      name: "Finance & Accounts",
      head: "Mr. M. A. Salam",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      subdivisions: [
        { name: "Budget & Planning", head: "Mr. F. R. Rahman" },
        { name: "Accounts", head: "Mr. A. S. Khan" },
        { name: "Audit", head: "Mrs. R. P. Sharma" }
      ]
    },
    {
      name: "Human Resources",
      head: "Mrs. S. A. Begum",
      icon: <Users className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      subdivisions: [
        { name: "Recruitment", head: "Mr. M. K. Hassan" },
        { name: "Training & Development", head: "Mrs. L. K. Singh" },
        { name: "Employee Relations", head: "Mr. N. R. Islam" }
      ]
    }
  ]

  const supportUnits = [
    {
      name: "IT Department",
      head: "Eng. M. A. Karim",
      icon: <Settings className="w-5 h-5" />,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      name: "Library",
      head: "Mr. S. R. Chowdhury",
      icon: <FileText className="w-5 h-5" />,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Quality Assurance",
      head: "Dr. F. K. Begum",
      icon: <Shield className="w-5 h-5" />,
      color: "from-rose-500 to-rose-600"
    },
    {
      name: "Student Affairs",
      head: "Mr. A. S. Rahman",
      icon: <Heart className="w-5 h-5" />,
      color: "from-emerald-500 to-emerald-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Building className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Organizational Structure</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Hierarchical structure of RCMC administration</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Organizational Chart</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Level - Governing Body */}
          <div className="text-center mb-12">
            <Card className="shadow-xl border-0 max-w-md mx-auto bg-gradient-to-r from-green-600 to-green-700 text-white">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">{topLevel.title}</h2>
                <p className="text-xl font-semibold mb-1">{topLevel.head}</p>
                <p className="text-lg mb-2">{topLevel.name}</p>
                <p className="text-sm opacity-90">{topLevel.description}</p>
              </CardContent>
            </Card>
          </div>

          {/* Connection Line */}
          <div className="flex justify-center mb-8">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>

          {/* Second Level - Principal & Vice Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {secondLevel.map((person, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                      {person.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{person.title}</h3>
                  <p className="text-lg font-semibold text-green-700 mb-2">{person.name}</p>
                  <p className="text-sm text-gray-600">{person.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Third Level - Departments */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Administrative Departments</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardHeader className={`bg-gradient-to-r ${dept.color} text-white`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        {dept.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{dept.name}</CardTitle>
                        <p className="text-sm opacity-90">Head: {dept.head}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Subdivisions:</h4>
                    <div className="space-y-2">
                      {dept.subdivisions.map((sub, subIndex) => (
                        <div key={subIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-800">{sub.name}</p>
                            <p className="text-sm text-gray-600">{sub.head}</p>
                          </div>
                          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Support Units */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Support Units</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportUnits.map((unit, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 bg-gradient-to-br ${unit.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      {unit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{unit.name}</h3>
                    <p className="text-sm text-green-700 font-medium">{unit.head}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-gray-50 to-gray-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Organizational Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Total Staff</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">150+</div>
                  <div className="text-sm text-gray-600">Faculty Members</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">15</div>
                  <div className="text-sm text-gray-600">Departments</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">24/7</div>
                  <div className="text-sm text-gray-600">Operations</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
