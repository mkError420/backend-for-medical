"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity } from "lucide-react"

export default function MedicalEthicsPage() {
  const principles = [
    {
      title: "Beneficence",
      description: "Act in the best interest of patients and promote their well-being",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Non-maleficence",
      description: "Do no harm and avoid causing unnecessary suffering",
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Autonomy",
      description: "Respect patients' right to make informed decisions about their care",
      icon: <UserCheck className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Justice",
      description: "Ensure fair and equitable distribution of healthcare resources",
      icon: <Scale className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    }
  ]

  const guidelines = [
    {
      category: "Patient Care Ethics",
      icon: <Stethoscope className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      items: [
        {
          title: "Informed Consent Protocol",
          description: "Procedures for obtaining proper informed consent from patients",
          document: "ETH-PC-001",
          lastUpdated: "2024-02-10"
        },
        {
          title: "Patient Confidentiality",
          description: "Guidelines for maintaining patient privacy and data protection",
          document: "ETH-PC-002",
          lastUpdated: "2024-01-15"
        },
        {
          title: "End-of-Life Care",
          description: "Ethical considerations in palliative and terminal care",
          document: "ETH-PC-003",
          lastUpdated: "2024-02-01"
        }
      ]
    },
    {
      category: "Professional Conduct",
      icon: <User className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      items: [
        {
          title: "Doctor-Patient Relationship",
          description: "Professional boundaries and appropriate conduct standards",
          document: "ETH-PR-001",
          lastUpdated: "2024-01-20"
        },
        {
          title: "Conflict of Interest Policy",
          description: "Guidelines for managing professional and financial conflicts",
          document: "ETH-PR-002",
          lastUpdated: "2024-02-05"
        },
        {
          title: "Professional Integrity",
          description: "Standards for honesty and transparency in medical practice",
          document: "ETH-PR-003",
          lastUpdated: "2024-01-10"
        }
      ]
    },
    {
      category: "Research Ethics",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      items: [
        {
          title: "Human Subject Research",
          description: "Ethical guidelines for research involving human participants",
          document: "ETH-RE-001",
          lastUpdated: "2024-02-15"
        },
        {
          title: "Institutional Review Board",
          description: "IRB procedures and ethical review processes",
          document: "ETH-RE-002",
          lastUpdated: "2024-01-25"
        },
        {
          title: "Research Integrity",
          description: "Guidelines for honest and ethical research conduct",
          document: "ETH-RE-003",
          lastUpdated: "2024-02-08"
        }
      ]
    }
  ]

  const committee = [
    {
      name: "Prof. Dr. M. A. Karim",
      role: "Chairman",
      department: "Department of Medicine",
      expertise: "Clinical Ethics"
    },
    {
      name: "Prof. Dr. S. R. Ahmed",
      role: "Member",
      department: "Department of Surgery",
      expertise: "Surgical Ethics"
    },
    {
      name: "Dr. F. K. Begum",
      role: "Member",
      department: "Department of Pediatrics",
      expertise: "Pediatric Ethics"
    },
    {
      name: "Mr. A. S. Rahman",
      role: "Member Secretary",
      department: "Legal Affairs",
      expertise: "Healthcare Law"
    },
    {
      name: "Mrs. S. A. Begum",
      role: "Member",
      department: "Nursing Services",
      expertise: "Nursing Ethics"
    },
    {
      name: "Prof. Dr. L. K. Singh",
      role: "Member",
      department: "Department of Anatomy",
      expertise: "Research Ethics"
    }
  ]

  const reportingProcess = [
    {
      step: 1,
      title: "Identify Concern",
      description: "Recognize potential ethical violation or dilemma"
    },
    {
      step: 2,
      title: "Document Incident",
      description: "Record details with supporting evidence"
    },
    {
      step: 3,
      title: "Submit Report",
      description: "File formal complaint with Ethics Committee"
    },
    {
      step: 4,
      title: "Review Process",
      description: "Committee investigates and evaluates the case"
    },
    {
      step: 5,
      title: "Resolution",
      description: "Implement appropriate corrective actions"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <HandHeart className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Ethics</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Upholding the highest standards of medical professionalism</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Ethical Excellence</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Core Principles */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Core Ethical Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      {principle.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{principle.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ethical Guidelines */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Ethical Guidelines & Policies</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {guidelines.map((category, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardHeader className={`bg-gradient-to-r ${category.color} text-white`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        {category.icon}
                      </div>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                          <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <FileText className="w-4 h-4" />
                              <span>{item.document}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors" title="View">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-1 text-green-600 hover:bg-green-50 rounded transition-colors" title="Download">
                                <Download className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 mt-2">Updated: {item.lastUpdated}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ethics Committee */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-2xl text-gray-800">Ethics Committee</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {committee.map((member, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{member.name}</h4>
                        <p className="text-sm text-green-700 font-medium">{member.role}</p>
                        <p className="text-xs text-gray-600">{member.department} • {member.expertise}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="text-2xl text-gray-800">Reporting Process</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {reportingProcess.map((process, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                        {process.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{process.title}</h4>
                        <p className="text-sm text-gray-600">{process.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Ethics Committee Contact</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For ethical concerns, consultations, or to report violations, please contact the Ethics Committee.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Hotline</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600 text-sm">ethics@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office</h3>
                      <p className="text-gray-600 text-sm">Ethics Committee Office</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
                  <div className="flex items-center justify-center gap-2 text-gray-800 font-semibold">
                    <Gavel className="w-5 h-5 text-green-700" />
                    Confidential & Anonymous Reporting Available
                  </div>
                  <p className="text-gray-600 mt-2">All reports are handled with strict confidentiality</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
