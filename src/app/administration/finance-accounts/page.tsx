"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, DollarSign, Calculator, TrendingUp, Building, UserCheck } from "lucide-react"

export default function FinanceAccountsPage() {
  const employees = [
    {
      name: "Mr. M. R. Khan",
      position: "Chief Financial Officer",
      department: "Finance & Accounts",
      email: "cfo@rcmc.edu.bd",
      phone: "+88-0123456789",
      experience: "20+ years",
      qualification: "MBA, CA, CMA",
      specialization: "Financial Strategy & Planning",
      avatar: "MK",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Mrs. S. K. Begum",
      position: "Senior Accountant",
      department: "Accounts Department",
      email: "s.k.begum@rcmc.edu.bd",
      phone: "+88-0123456788",
      experience: "15+ years",
      qualification: "M.Com, CA (Inter)",
      specialization: "Financial Reporting & Compliance",
      avatar: "SB",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Mr. A. H. Rahman",
      position: "Finance Manager",
      department: "Finance Department",
      email: "a.h.rahman@rcmc.edu.bd",
      phone: "+88-0123456787",
      experience: "12+ years",
      qualification: "BBA, MBA",
      specialization: "Budget Management & Analysis",
      avatar: "AR",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Ms. N. A. Chowdhury",
      position: "Senior Accountant",
      department: "Accounts Department",
      email: "n.a.chowdhury@rcmc.edu.bd",
      phone: "+88-0123456786",
      experience: "10+ years",
      qualification: "M.Com, CPA",
      specialization: "Audit & Internal Controls",
      avatar: "NC",
      color: "from-pink-400 to-pink-600"
    },
    {
      name: "Mr. K. M. Hassan",
      position: "Accounts Officer",
      department: "Accounts Department",
      email: "k.m.hassan@rcmc.edu.bd",
      phone: "+88-0123456785",
      experience: "8+ years",
      qualification: "B.Com, M.Com",
      specialization: "Payroll & Benefits Administration",
      avatar: "KH",
      color: "from-orange-400 to-orange-600"
    },
    {
      name: "Ms. F. R. Ahmed",
      position: "Finance Executive",
      department: "Finance Department",
      email: "f.r.ahmed@rcmc.edu.bd",
      phone: "+88-0123456784",
      experience: "6+ years",
      qualification: "BBA, MBA",
      specialization: "Financial Analysis & Reporting",
      avatar: "FA",
      color: "from-teal-400 to-teal-600"
    },
    {
      name: "Mr. S. M. Ali",
      position: "Accounts Officer",
      department: "Accounts Department",
      email: "s.m.ali@rcmc.edu.bd",
      phone: "+88-0123456783",
      experience: "7+ years",
      qualification: "B.Com, CA (Part)",
      specialization: "Taxation & Compliance",
      avatar: "SA",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      name: "Ms. T. J. Begum",
      position: "Junior Accountant",
      department: "Accounts Department",
      email: "t.j.begum@rcmc.edu.bd",
      phone: "+88-0123456782",
      experience: "4+ years",
      qualification: "B.Com",
      specialization: "Data Entry & Bookkeeping",
      avatar: "TB",
      color: "from-red-400 to-red-600"
    }
  ]

  const departmentFunctions = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Financial Planning",
      description: "Strategic financial planning and budgeting"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Accounting Services",
      description: "Comprehensive accounting and bookkeeping"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Financial Analysis",
      description: "Performance analysis and reporting"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance & Audit",
      description: "Regulatory compliance and internal audits"
    }
  ]

  const statistics = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "8",
      label: "Team Members",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: "80+",
      label: "Years Combined Experience",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "100%",
      label: "Accuracy Rate",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "24/7",
      label: "Financial Support",
      color: "from-orange-400 to-orange-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Finance & Accounts</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Excellence in Financial Management
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                Financial Integrity
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-6xl mx-auto">
          {/* Department Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-2xl text-gray-800">Department Overview</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Finance & Accounts Department at Rangpur Community Medical College & Hospital is responsible for managing all financial operations, ensuring fiscal responsibility, and maintaining transparency in all financial transactions. Our team of experienced professionals works diligently to support the institution's mission through sound financial management.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We handle budgeting, financial planning, accounting, payroll, auditing, and compliance matters, ensuring that all financial activities align with regulatory requirements and institutional goals. Our commitment to excellence and integrity has established us as a cornerstone of the institution's administrative framework.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Department Statistics */}
            <div className="space-y-6">
              {statistics.map((stat, index) => (
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

          {/* Department Functions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Department Functions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentFunctions.map((func, index) => (
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

          {/* Department Employees */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Department Employees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {employees.map((employee, index) => (
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
                <h2 className="text-3xl font-bold mb-6">Contact Finance & Accounts</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For financial inquiries, account services, or department matters, please contact us through the following channels:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Finance Block, 2nd Floor</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Department Phone</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Department Email</h3>
                      <p className="text-gray-600 text-sm">finance@rcmc.edu.bd</p>
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
