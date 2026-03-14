"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock } from "lucide-react"

export default function SOPsPage() {
  const sopCategories = [
    {
      title: "Academic Operations",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Procedures for academic activities and curriculum management",
      sops: [
        {
          title: "Classroom Management Protocol",
          code: "SOP-ACD-001",
          version: "v2.1",
          lastUpdated: "2024-02-15",
          status: "Active",
          access: "Public",
          size: "245 KB"
        },
        {
          title: "Examination Conduct Guidelines",
          code: "SOP-ACD-002",
          version: "v3.0",
          lastUpdated: "2024-01-20",
          status: "Active",
          access: "Public",
          size: "512 KB"
        },
        {
          title: "Student Assessment Procedures",
          code: "SOP-ACD-003",
          version: "v1.8",
          lastUpdated: "2024-02-01",
          status: "Active",
          access: "Faculty",
          size: "189 KB"
        },
        {
          title: "Curriculum Review Process",
          code: "SOP-ACD-004",
          version: "v2.3",
          lastUpdated: "2024-01-10",
          status: "Under Review",
          access: "Faculty",
          size: "334 KB"
        }
      ]
    },
    {
      title: "Clinical Services",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Healthcare service delivery and patient care protocols",
      sops: [
        {
          title: "Patient Admission Procedure",
          code: "SOP-CLN-001",
          version: "v4.2",
          lastUpdated: "2024-02-10",
          status: "Active",
          access: "Public",
          size: "445 KB"
        },
        {
          title: "Emergency Response Protocol",
          code: "SOP-CLN-002",
          version: "v5.1",
          lastUpdated: "2024-02-20",
          status: "Active",
          access: "Medical Staff",
          size: "678 KB"
        },
        {
          title: "Surgical Safety Checklist",
          code: "SOP-CLN-003",
          version: "v3.5",
          lastUpdated: "2024-01-25",
          status: "Active",
          access: "Medical Staff",
          size: "234 KB"
        },
        {
          title: "Infection Control Guidelines",
          code: "SOP-CLN-004",
          version: "v6.0",
          lastUpdated: "2024-02-05",
          status: "Active",
          access: "All Staff",
          size: "892 KB"
        }
      ]
    },
    {
      title: "Administrative Processes",
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "General administration and office management procedures",
      sops: [
        {
          title: "Leave Application Process",
          code: "SOP-ADM-001",
          version: "v2.0",
          lastUpdated: "2024-01-15",
          status: "Active",
          access: "All Staff",
          size: "156 KB"
        },
        {
          title: "Procurement Guidelines",
          code: "SOP-ADM-002",
          version: "v3.1",
          lastUpdated: "2024-02-12",
          status: "Active",
          access: "Admin",
          size: "423 KB"
        },
        {
          title: "Record Management System",
          code: "SOP-ADM-003",
          version: "v1.5",
          lastUpdated: "2024-01-30",
          status: "Active",
          access: "Admin",
          size: "278 KB"
        },
        {
          title: "Visitor Management Protocol",
          code: "SOP-ADM-004",
          version: "v1.2",
          lastUpdated: "2024-02-08",
          status: "Draft",
          access: "Public",
          size: "134 KB"
        }
      ]
    },
    {
      title: "Safety & Compliance",
      icon: <Lock className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "Safety protocols and regulatory compliance procedures",
      sops: [
        {
          title: "Fire Safety Evacuation Plan",
          code: "SOP-SFT-001",
          version: "v2.8",
          lastUpdated: "2024-01-20",
          status: "Active",
          access: "Public",
          size: "367 KB"
        },
        {
          title: "Workplace Safety Guidelines",
          code: "SOP-SFT-002",
          version: "v3.2",
          lastUpdated: "2024-02-15",
          status: "Active",
          access: "All Staff",
          size: "289 KB"
        },
        {
          title: "Data Protection Protocol",
          code: "SOP-SFT-003",
          version: "v1.7",
          lastUpdated: "2024-02-01",
          status: "Active",
          access: "IT Staff",
          size: "445 KB"
        },
        {
          title: "Regulatory Compliance Framework",
          code: "SOP-SFT-004",
          version: "v2.4",
          lastUpdated: "2024-01-10",
          status: "Under Review",
          access: "Management",
          size: "567 KB"
        }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-700"
      case "Under Review": return "bg-yellow-100 text-yellow-700"
      case "Draft": return "bg-gray-100 text-gray-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const getAccessIcon = (access: string) => {
    switch (access) {
      case "Public": return <Unlock className="w-4 h-4" />
      case "All Staff": return <Users className="w-4 h-4" />
      case "Faculty": return <BookOpen className="w-4 h-4" />
      case "Medical Staff": return <Shield className="w-4 h-4" />
      case "Admin": return <Settings className="w-4 h-4" />
      case "IT Staff": return <Settings className="w-4 h-4" />
      case "Management": return <User className="w-4 h-4" />
      default: return <Lock className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <FileCheck className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Standard Operating Procedures</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Comprehensive guidelines for operational excellence</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Quality & Compliance</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Section */}
          <Card className="shadow-lg border-0 mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search SOPs by title or code..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex gap-2">
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>All Categories</option>
                    <option>Academic Operations</option>
                    <option>Clinical Services</option>
                    <option>Administrative Processes</option>
                    <option>Safety & Compliance</option>
                  </select>
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Under Review</option>
                    <option>Draft</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SOP Categories */}
          <div className="space-y-8">
            {sopCategories.map((category, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                <CardHeader className={`bg-gradient-to-r ${category.color} text-white`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <p className="text-sm opacity-90 mt-1">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {category.sops.map((sop, sopIndex) => (
                      <div key={sopIndex} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-800">{sop.title}</h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(sop.status)}`}>
                                {sop.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                              <span className="font-medium">{sop.code}</span>
                              <span>Version {sop.version}</span>
                              <span>Updated: {sop.lastUpdated}</span>
                              <span>{sop.size}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                {getAccessIcon(sop.access)}
                                <span>{sop.access}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View">
                              <Eye className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Download">
                              <Download className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics and Information */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800">48</div>
                <div className="text-sm text-gray-600">Total SOPs</div>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800">42</div>
                <div className="text-sm text-gray-600">Active SOPs</div>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 bg-gradient-to-br from-yellow-50 to-yellow-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800">4</div>
                <div className="text-sm text-gray-600">Under Review</div>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800">2</div>
                <div className="text-sm text-gray-600">Draft SOPs</div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700 mt-12">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">SOP Management Office</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For inquiries about SOPs, requests for new procedures, or compliance questions, please contact our quality assurance team.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600 text-sm">sop@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office</h3>
                      <p className="text-gray-600 text-sm">Quality Assurance Dept.</p>
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
