"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, ClipboardList, Target, Zap, AlertTriangle, TrendingDown, RefreshCw, Database, PieChart, LineChart } from "lucide-react"

export default function QASPage() {
  const qualityMetrics = [
    {
      title: "Patient Safety Score",
      value: 94.5,
      target: 95,
      trend: "up",
      change: "+2.3%",
      status: "good",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Clinical Quality Index",
      value: 88.2,
      target: 90,
      trend: "up",
      change: "+1.8%",
      status: "moderate",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Service Excellence",
      value: 91.7,
      target: 92,
      trend: "stable",
      change: "0%",
      status: "good",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Compliance Rate",
      value: 96.8,
      target: 98,
      trend: "down",
      change: "-0.5%",
      status: "warning",
      icon: <FileCheck className="w-6 h-6" />
    }
  ]

  const auditReports = [
    {
      title: "Clinical Audit Q3 2024",
      type: "Quarterly",
      date: "2024-10-15",
      status: "completed",
      score: 92,
      findings: 12,
      recommendations: 8,
      department: "Clinical Services"
    },
    {
      title: "Patient Safety Audit",
      type: "Monthly",
      date: "2024-11-01",
      status: "in-progress",
      score: null,
      findings: 5,
      recommendations: null,
      department: "Quality Assurance"
    },
    {
      title: "Pharmacy Compliance Audit",
      type: "Bi-annual",
      date: "2024-09-20",
      status: "completed",
      score: 96,
      findings: 3,
      recommendations: 2,
      department: "Pharmacy"
    },
    {
      title: "Emergency Services Review",
      type: "Special",
      date: "2024-11-10",
      status: "scheduled",
      score: null,
      findings: null,
      recommendations: null,
      department: "Emergency"
    }
  ]

  const improvementProjects = [
    {
      title: "Reduce Patient Wait Time",
      department: "Outpatient Services",
      priority: "high",
      status: "in-progress",
      progress: 65,
      targetDate: "2024-12-31",
      team: ["Dr. Smith", "Nurse Johnson", "Admin Davis"],
      kpi: "Wait time < 30 mins"
    },
    {
      title: "Enhance Medication Safety",
      department: "Pharmacy",
      priority: "critical",
      status: "in-progress",
      progress: 40,
      targetDate: "2024-11-30",
      team: ["Dr. Wilson", "Pharmacist Lee"],
      kpi: "Zero medication errors"
    },
    {
      title: "Improve Discharge Process",
      department: "Ward Management",
      priority: "medium",
      status: "planning",
      progress: 15,
      targetDate: "2025-01-15",
      team: ["Dr. Brown", "Nurse Manager Chen"],
      kpi: "Discharge time < 2 hours"
    },
    {
      title: "Digital Records Implementation",
      department: "IT Services",
      priority: "high",
      status: "completed",
      progress: 100,
      targetDate: "2024-10-15",
      team: ["IT Team", "Medical Records"],
      kpi: "100% digital adoption"
    }
  ]

  const complianceItems = [
    {
      standard: "Joint Commission International",
      category: "Accreditation",
      status: "compliant",
      lastAudit: "2024-06-15",
      nextAudit: "2025-06-15",
      score: 96,
      requirements: 145,
      met: 139
    },
    {
      standard: "ISO 9001:2015",
      category: "Quality Management",
      status: "compliant",
      lastAudit: "2024-03-20",
      nextAudit: "2025-03-20",
      score: 94,
      requirements: 89,
      met: 84
    },
    {
      standard: "Healthcare Regulations",
      category: "Legal Compliance",
      status: "partial",
      lastAudit: "2024-09-10",
      nextAudit: "2024-12-10",
      score: 88,
      requirements: 67,
      met: 59
    },
    {
      standard: "Patient Safety Standards",
      category: "Safety",
      status: "compliant",
      lastAudit: "2024-08-05",
      nextAudit: "2025-02-05",
      score: 98,
      requirements: 112,
      met: 110
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-700"
      case "in-progress": return "bg-blue-100 text-blue-700"
      case "planning": return "bg-yellow-100 text-yellow-700"
      case "scheduled": return "bg-purple-100 text-purple-700"
      case "compliant": return "bg-green-100 text-green-700"
      case "partial": return "bg-yellow-100 text-yellow-700"
      case "non-compliant": return "bg-red-100 text-red-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical": return "bg-red-100 text-red-700"
      case "high": return "bg-orange-100 text-orange-700"
      case "medium": return "bg-yellow-100 text-yellow-700"
      case "low": return "bg-green-100 text-green-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good": return <TrendingUp className="w-5 h-5 text-green-600" />
      case "moderate": return <AlertCircle className="w-5 h-5 text-yellow-600" />
      case "warning": return <TrendingDown className="w-5 h-5 text-red-600" />
      default: return <Activity className="w-5 h-5 text-gray-600" />
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress === 100) return "bg-green-500"
    if (progress >= 60) return "bg-blue-500"
    if (progress >= 30) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <ClipboardList className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Quality Assurance Scheme (QAS)</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Comprehensive quality management and continuous improvement</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Healthcare Excellence</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Quality Metrics Dashboard */}
          <Card className="shadow-lg border-0 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Quality Metrics Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {qualityMetrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        {metric.icon}
                      </div>
                      {getStatusIcon(metric.status)}
                    </div>
                    <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.title}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-2xl font-bold text-gray-800">{metric.value}</span>
                      <span className="text-sm text-gray-500">/ {metric.target}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className={`text-sm font-medium ${
                        metric.trend === 'up' ? 'text-green-600' : 
                        metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {metric.change}
                      </span>
                      <span className="text-xs text-gray-500">vs last month</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Audit Reports */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Audit Reports</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {auditReports.map((report, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl text-gray-800">{report.title}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{report.department} • {report.type}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                        {report.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-600">Audit Date:</span>
                        <p className="font-medium">{report.date}</p>
                      </div>
                      {report.score && (
                        <div>
                          <span className="text-sm text-gray-600">Score:</span>
                          <p className="font-medium text-lg text-green-600">{report.score}%</p>
                        </div>
                      )}
                      <div>
                        <span className="text-sm text-gray-600">Findings:</span>
                        <p className="font-medium">{report.findings || 'N/A'}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Recommendations:</span>
                        <p className="font-medium">{report.recommendations || 'N/A'}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4" />
                        View Report
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Download">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Improvement Projects */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Quality Improvement Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {improvementProjects.map((project, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{project.department}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                          {project.priority.toUpperCase()}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(project.progress)}`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Target Date:</span>
                        <span className="font-medium">{project.targetDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Key Performance Indicator:</span>
                        <span className="font-medium">{project.kpi}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Team Members:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.team.map((member, memberIndex) => (
                          <span key={memberIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                      <Target className="w-4 h-4" />
                      View Details
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Compliance Standards */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Compliance Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceItems.map((item, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{item.standard}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{item.category}</span>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Compliance Score:</span>
                        <span className={`font-medium ${item.score >= 95 ? 'text-green-600' : item.score >= 85 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {item.score}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Requirements Met:</span>
                        <span className="font-medium">{item.met}/{item.requirements}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Audit:</span>
                        <span className="font-medium">{item.lastAudit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Next Audit:</span>
                        <span className="font-medium">{item.nextAudit}</span>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          item.score >= 95 ? 'bg-green-500' : 
                          item.score >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>

                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <FileCheck className="w-4 h-4" />
                      View Compliance Details
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Quality Assurance Support</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For assistance with quality management, audits, compliance, or improvement initiatives, please contact our QA team.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">QA Hotline</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email Support</h3>
                      <p className="text-gray-600 text-sm">qa.support@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">QA Office</h3>
                      <p className="text-gray-600 text-sm">Admin Block, 2nd Floor</p>
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
