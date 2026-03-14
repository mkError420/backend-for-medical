"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, AlertTriangle, Users2, GraduationCap, PenTool, MessageSquare, ThumbsUp, ThumbsDown, FileDown, FolderOpen, Archive, FileSignature, Receipt, ClipboardList, UserPlus, FileSpreadsheet, FileImage, File } from "lucide-react"

export default function InternalFormsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const formCategories = [
    {
      id: "academic",
      name: "Academic Forms",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "from-blue-500 to-blue-600",
      description: "Student and faculty academic forms"
    },
    {
      id: "administrative",
      name: "Administrative Forms",
      icon: <Settings className="w-5 h-5" />,
      color: "from-green-500 to-green-600",
      description: "General administration procedures"
    },
    {
      id: "hr",
      name: "HR Forms",
      icon: <Users className="w-5 h-5" />,
      color: "from-purple-500 to-purple-600",
      description: "Employee and staff related forms"
    },
    {
      id: "medical",
      name: "Medical Forms",
      icon: <Stethoscope className="w-5 h-5" />,
      color: "from-red-500 to-red-600",
      description: "Clinical and patient care forms"
    },
    {
      id: "financial",
      name: "Financial Forms",
      icon: <Receipt className="w-5 h-5" />,
      color: "from-orange-500 to-orange-600",
      description: "Finance and accounting documents"
    }
  ]

  const forms = [
    // Academic Forms
    {
      id: 1,
      title: "Student Admission Form",
      category: "academic",
      type: "PDF",
      size: "245 KB",
      downloads: 1234,
      lastUpdated: "2024-02-15",
      description: "New student application and admission form",
      required: true,
      icon: <UserPlus className="w-5 h-5" />
    },
    {
      id: 2,
      title: "Course Registration Form",
      category: "academic",
      type: "PDF",
      size: "156 KB",
      downloads: 892,
      lastUpdated: "2024-01-20",
      description: "Semester course registration document",
      required: true,
      icon: <ClipboardList className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Examination Application",
      category: "academic",
      type: "PDF",
      size: "189 KB",
      downloads: 567,
      lastUpdated: "2024-02-01",
      description: "Final examination application form",
      required: true,
      icon: <FileSignature className="w-5 h-5" />
    },
    {
      id: 4,
      title: "Transcript Request Form",
      category: "academic",
      type: "PDF",
      size: "98 KB",
      downloads: 445,
      lastUpdated: "2024-01-15",
      description: "Academic transcript request document",
      required: false,
      icon: <FileText className="w-5 h-5" />
    },
    
    // Administrative Forms
    {
      id: 5,
      title: "Leave Application Form",
      category: "administrative",
      type: "PDF",
      size: "134 KB",
      downloads: 789,
      lastUpdated: "2024-02-10",
      description: "Staff and student leave application",
      required: true,
      icon: <Calendar className="w-5 h-5" />
    },
    {
      id: 6,
      title: "Visitor Registration Form",
      category: "administrative",
      type: "PDF",
      size: "87 KB",
      downloads: 234,
      lastUpdated: "2024-01-25",
      description: "Campus visitor registration document",
      required: true,
      icon: <UserCheck className="w-5 h-5" />
    },
    {
      id: 7,
      title: "Facility Request Form",
      category: "administrative",
      type: "PDF",
      size: "156 KB",
      downloads: 345,
      lastUpdated: "2024-02-05",
      description: "Room and facility booking request",
      required: false,
      icon: <Building className="w-5 h-5" />
    },
    {
      id: 8,
      title: "Complaint Form",
      category: "administrative",
      type: "PDF",
      size: "112 KB",
      downloads: 123,
      lastUpdated: "2024-01-30",
      description: "Official complaint submission form",
      required: false,
      icon: <MessageSquare className="w-5 h-5" />
    },

    // HR Forms
    {
      id: 9,
      title: "Job Application Form",
      category: "hr",
      type: "PDF",
      size: "267 KB",
      downloads: 1456,
      lastUpdated: "2024-02-12",
      description: "Employment application document",
      required: true,
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      id: 10,
      title: "Performance Evaluation Form",
      category: "hr",
      type: "Excel",
      size: "445 KB",
      downloads: 234,
      lastUpdated: "2024-02-08",
      description: "Staff performance evaluation template",
      required: true,
      icon: <FileSpreadsheet className="w-5 h-5" />
    },
    {
      id: 11,
      title: "Training Request Form",
      category: "hr",
      type: "PDF",
      size: "178 KB",
      downloads: 189,
      lastUpdated: "2024-01-22",
      description: "Professional development training request",
      required: false,
      icon: <Award className="w-5 h-5" />
    },
    {
      id: 12,
      title: "Employee Exit Form",
      category: "hr",
      type: "PDF",
      size: "234 KB",
      downloads: 67,
      lastUpdated: "2024-01-18",
      description: "Employee separation and exit process",
      required: true,
      icon: <User className="w-5 h-5" />
    },

    // Medical Forms
    {
      id: 13,
      title: "Patient Registration Form",
      category: "medical",
      type: "PDF",
      size: "298 KB",
      downloads: 2345,
      lastUpdated: "2024-02-14",
      description: "New patient registration and medical history",
      required: true,
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      id: 14,
      title: "Medical Certificate Form",
      category: "medical",
      type: "PDF",
      size: "167 KB",
      downloads: 890,
      lastUpdated: "2024-02-03",
      description: "Medical fitness certificate document",
      required: true,
      icon: <FileCheck className="w-5 h-5" />
    },
    {
      id: 15,
      title: "Consent Form",
      category: "medical",
      type: "PDF",
      size: "145 KB",
      downloads: 567,
      lastUpdated: "2024-01-28",
      description: "Medical procedure consent document",
      required: true,
      icon: <FileSignature className="w-5 h-5" />
    },
    {
      id: 16,
      title: "Medical Report Form",
      category: "medical",
      type: "PDF",
      size: "189 KB",
      downloads: 432,
      lastUpdated: "2024-02-06",
      description: "Medical examination report template",
      required: false,
      icon: <FileText className="w-5 h-5" />
    },

    // Financial Forms
    {
      id: 17,
      title: "Fee Payment Form",
      category: "financial",
      type: "PDF",
      size: "123 KB",
      downloads: 1567,
      lastUpdated: "2024-02-11",
      description: "Academic fee payment document",
      required: true,
      icon: <Receipt className="w-5 h-5" />
    },
    {
      id: 18,
      title: "Refund Request Form",
      category: "financial",
      type: "PDF",
      size: "134 KB",
      downloads: 234,
      lastUpdated: "2024-01-24",
      description: "Fee refund application document",
      required: false,
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 19,
      title: "Purchase Requisition",
      category: "financial",
      type: "Excel",
      size: "234 KB",
      downloads: 456,
      lastUpdated: "2024-02-07",
      description: "Departmental purchase request form",
      required: true,
      icon: <FileSpreadsheet className="w-5 h-5" />
    },
    {
      id: 20,
      title: "Expense Claim Form",
      category: "financial",
      type: "Excel",
      size: "189 KB",
      downloads: 345,
      lastUpdated: "2024-01-26",
      description: "Business expense reimbursement claim",
      required: false,
      icon: <Receipt className="w-5 h-5" />
    }
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "PDF": return <FileText className="w-5 h-5 text-red-600" />
      case "Excel": return <FileSpreadsheet className="w-5 h-5 text-green-600" />
      case "Word": return <FileText className="w-5 h-5 text-blue-600" />
      default: return <File className="w-5 h-5 text-gray-600" />
    }
  }

  const filteredForms = forms.filter(form => {
    const matchesSearch = form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || form.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (categoryId: string) => {
    const category = formCategories.find(cat => cat.id === categoryId)
    return category ? category.color : "from-gray-500 to-gray-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <FolderOpen className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Internal Forms</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Download official forms and documents</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Document Center</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter */}
          <Card className="shadow-lg border-0 mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search forms by title or description..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <select 
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {formCategories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Categories Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {formCategories.map(category => (
              <Card 
                key={category.id}
                className={`shadow-lg border-0 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  selectedCategory === category.id ? 'ring-2 ring-green-500' : ''
                }`}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
              >
                <CardContent className={`p-4 text-center bg-gradient-to-br ${category.color} text-white`}>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                  <p className="text-xs opacity-90 mt-1">{forms.filter(f => f.category === category.id).length} forms</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Forms Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Available Forms ({filteredForms.length})
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Filter className="w-4 h-4" />
                <span>Filtered by: {selectedCategory === 'all' ? 'All Categories' : formCategories.find(c => c.id === selectedCategory)?.name}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredForms.map(form => (
                <Card key={form.id} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${getCategoryColor(form.category)} rounded-full flex items-center justify-center text-white`}>
                          {form.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 text-sm">{form.title}</h3>
                          {form.required && (
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                              Required
                            </span>
                          )}
                        </div>
                      </div>
                      {getFileIcon(form.type)}
                    </div>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{form.description}</p>

                    <div className="space-y-2 text-xs text-gray-500 mb-4">
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="font-medium">{form.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span className="font-medium">{form.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Downloads:</span>
                        <span className="font-medium">{form.downloads}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Updated:</span>
                        <span className="font-medium">{form.lastUpdated}</span>
                      </div>
                    </div>

                    <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 group-hover:scale-105 transition-transform">
                      <FileDown className="w-4 h-4" />
                      Download Form
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredForms.length === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No forms found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>

          {/* Statistics */}
          <Card className="shadow-lg border-0 bg-gradient-to-br from-gray-50 to-gray-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Download Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{forms.length}</div>
                  <div className="text-sm text-gray-600">Total Forms</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    {forms.reduce((sum, form) => sum + form.downloads, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Total Downloads</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Archive className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    {forms.filter(f => f.required).length}
                  </div>
                  <div className="text-sm text-gray-600">Required Forms</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
