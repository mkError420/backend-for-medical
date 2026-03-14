"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, AlertTriangle, Users2, GraduationCap, PenTool, MessageSquare, ThumbsUp, ThumbsDown, FileDown, FolderOpen, Archive, FileSignature, Receipt, ClipboardList, UserPlus, FileSpreadsheet, FileImage, File, Badge, Star, Target, Zap, AwardIcon, ChevronRight, List } from "lucide-react"

export default function ServiceRulesPage() {
  const serviceCategories = [
    {
      title: "Employee Service Rules",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Comprehensive guidelines for employee conduct and service",
      rules: [
        "Code of conduct and professional ethics",
        "Attendance and punctuality requirements",
        "Dress code and appearance standards",
        "Performance evaluation procedures",
        "Promotion and career advancement"
      ]
    },
    {
      title: "Academic Service Rules",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Rules governing academic activities and faculty responsibilities",
      rules: [
        "Teaching responsibilities and standards",
        "Research and publication guidelines",
        "Student evaluation and grading policies",
        "Curriculum development procedures",
        "Academic integrity requirements"
      ]
    },
    {
      title: "Clinical Service Rules",
      icon: <Stethoscope className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Healthcare service delivery and patient care standards",
      rules: [
        "Patient care protocols and standards",
        "Clinical duty schedules and rotations",
        "Medical record documentation requirements",
        "Emergency response procedures",
        "Infection control and safety protocols"
      ]
    },
    {
      title: "Administrative Service Rules",
      icon: <Settings className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "General administrative procedures and office management",
      rules: [
        "Office hours and attendance policies",
        "Meeting and communication protocols",
        "Document management and filing systems",
        "Procurement and expense procedures",
        "Facility usage and maintenance rules"
      ]
    }
  ]

  const leavePolicies = [
    {
      type: "Annual Leave",
      days: "20 days",
      eligibility: "All permanent employees",
      accrual: "1.67 days per month",
      conditions: "With prior approval",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      type: "Sick Leave",
      days: "15 days",
      eligibility: "All employees",
      accrual: "As needed with medical certificate",
      conditions: "Medical documentation required",
      icon: <Heart className="w-5 h-5" />
    },
    {
      type: "Maternity Leave",
      days: "16 weeks",
      eligibility: "Female employees",
      accrual: "As per labor law",
      conditions: "Medical certification required",
      icon: <UserCheck className="w-5 h-5" />
    },
    {
      type: "Study Leave",
      days: "30 days",
      eligibility: "Academic staff",
      accrual: "Once every 3 years",
      conditions: "For professional development",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      type: "Casual Leave",
      days: "12 days",
      eligibility: "All employees",
      accrual: "1 day per month",
      conditions: "Emergency situations only",
      icon: <Clock className="w-5 h-5" />
    },
    {
      type: "Pilgrimage Leave",
      days: "15 days",
      eligibility: "Muslim employees",
      accrual: "Once during service",
      conditions: "With prior approval",
      icon: <Star className="w-5 h-5" />
    }
  ]

  const disciplinaryRules = [
    {
      category: "Minor Offenses",
      color: "from-yellow-50 to-yellow-100",
      textColor: "text-yellow-800",
      offenses: [
        "Late arrival without permission",
        "Improper dress code violation",
        "Unauthorized absence from duty",
        "Negligence in routine duties"
      ],
      actions: ["Verbal warning", "Written warning", "Deduction from salary"]
    },
    {
      category: "Major Offenses",
      color: "from-orange-50 to-orange-100",
      textColor: "text-orange-800",
      offenses: [
        "Repeated absence without leave",
        "Misconduct with colleagues",
        "Violation of patient confidentiality",
        "Negligence causing harm"
      ],
      actions: ["Suspension", "Demotion", "Salary increment freeze"]
    },
    {
      category: "Gross Offenses",
      color: "from-red-50 to-red-100",
      textColor: "text-red-800",
      offenses: [
        "Corruption and bribery",
        "Physical assault",
        "Theft or vandalism",
        "Serious breach of professional ethics"
      ],
      actions: ["Termination", "Legal proceedings", "Blacklisting"]
    }
  ]

  const benefits = [
    {
      title: "Provident Fund",
      description: "Retirement savings scheme with employer contribution",
      eligibility: "All permanent employees",
      contribution: "10% employee + 10% employer",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Health Insurance",
      description: "Comprehensive medical coverage for employee and family",
      eligibility: "All employees",
      coverage: "Inpatient, outpatient, and emergency care",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Performance Bonus",
      description: "Annual bonus based on performance evaluation",
      eligibility: "Based on annual review",
      amount: "Up to 2 basic salaries",
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Professional Development",
      description: "Support for continuing education and training",
      eligibility: "Academic and clinical staff",
      support: "Financial assistance and study leave",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ]

  const procedures = [
    {
      title: "Recruitment Process",
      steps: [
        "Job advertisement and application collection",
        "Initial screening and shortlisting",
        "Written examination and interviews",
        "Medical examination and background check",
        "Final selection and appointment"
      ]
    },
    {
      title: "Performance Evaluation",
      steps: [
        "Self-assessment by employee",
        "Supervisor evaluation and feedback",
        "Review committee assessment",
        "Performance rating and documentation",
        "Discussion of development plan"
      ]
    },
    {
      title: "Grievance Redressal",
      steps: [
        "Submit written grievance to department head",
        "Initial investigation by HR department",
        "Meeting with grievance committee",
        "Decision and communication of outcome",
        "Appeal process if required"
      ]
    }
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Rules & Regulations</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Comprehensive guidelines for service conduct and procedures</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Professional Standards</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Service Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Service Categories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
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
                    <h4 className="font-semibold text-gray-800 mb-3">Key Regulations:</h4>
                    <ul className="space-y-2">
                      {category.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="flex items-start space-x-3">
                          <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Leave Policies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Leave Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leavePolicies.map((policy, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        {policy.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800">{policy.type}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium text-gray-800">{policy.days}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Eligibility:</span>
                        <span className="font-medium text-gray-800">{policy.eligibility}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Accrual:</span>
                        <span className="font-medium text-gray-800">{policy.accrual}</span>
                      </div>
                    </div>
                    <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-600">
                      <strong>Conditions:</strong> {policy.conditions}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Disciplinary Rules */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Disciplinary Rules</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {disciplinaryRules.map((category, index) => (
                <Card key={index} className="shadow-lg border-0">
                  <CardContent className={`p-6 bg-gradient-to-br ${category.color}`}>
                    <h3 className={`text-xl font-bold mb-4 ${category.textColor}`}>{category.category}</h3>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Offenses:</h4>
                      <ul className="space-y-1">
                        {category.offenses.map((offense, offenseIndex) => (
                          <li key={offenseIndex} className="flex items-start space-x-2">
                            <AlertTriangle className="w-3 h-3 text-gray-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-xs">{offense}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Actions:</h4>
                      <ul className="space-y-1">
                        {category.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-center space-x-2">
                            <Zap className="w-3 h-3 text-gray-600 flex-shrink-0" />
                            <span className="text-gray-700 text-xs">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Employee Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Employee Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{benefit.description}</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div><strong>Eligibility:</strong> {benefit.eligibility}</div>
                      <div><strong>Details:</strong> {benefit.contribution || benefit.coverage || benefit.amount || benefit.support}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Procedures */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Key Procedures</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {procedures.map((procedure, index) => (
                <Card key={index} className="shadow-lg border-0">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <CardTitle className="text-lg text-gray-800">{procedure.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ol className="space-y-3">
                      {procedure.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex space-x-3">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                            {stepIndex + 1}
                          </div>
                          <span className="text-sm text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">HR & Administration Office</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For inquiries about service rules, leave policies, or employment matters, please contact the HR department.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Phone</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600 text-sm">hr@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Admin Building, Room 101</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
                  <div className="flex items-center justify-center gap-2 text-gray-800 font-semibold">
                    <Clock className="w-5 h-5 text-green-700" />
                    Office Hours
                  </div>
                  <p className="text-gray-600 mt-2">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Friday & Saturday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
