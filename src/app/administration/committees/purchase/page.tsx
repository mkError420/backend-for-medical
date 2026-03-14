"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, Star, Trophy, MessageSquare, Mic, Brain, Zap, ShoppingCart, Package, Truck, DollarSign, FileCheck, Receipt } from "lucide-react"

export default function PurchasePage() {
  const [activeTab, setActiveTab] = useState("committee")

  const purchaseCommittee = [
    {
      name: "Prof. Dr. M. A. Rahman",
      position: "Purchase Committee Chairman",
      role: "Overall Procurement Management",
      email: "purchase.chairman@rcmc.edu.bd",
      phone: "+88-0123458200",
      experience: "22+ years",
      qualification: "MBBS, MD, MBA",
      specialization: "Procurement Management & Supply Chain",
      avatar: "MR",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Dr. S. K. Ahmed",
      position: "Vice Chairman",
      role: "Medical Equipment Procurement",
      email: "medical.purchase@rcmc.edu.bd",
      phone: "+88-0123458201",
      experience: "18+ years",
      qualification: "MBBS, MD, M.Sc.",
      specialization: "Medical Equipment & Supplies Management",
      avatar: "SA",
      color: "from-teal-500 to-cyan-600"
    },
    {
      name: "Prof. Dr. R. C. Mondal",
      position: "Senior Member",
      role: "Pharmaceutical Procurement",
      email: "pharma.purchase@rcmc.edu.bd",
      phone: "+88-0123458202",
      experience: "20+ years",
      qualification: "MBBS, FCPS, PhD",
      specialization: "Pharmaceutical Supply Chain Management",
      avatar: "RM",
      color: "from-emerald-500 to-green-600"
    },
    {
      name: "Dr. N. A. Begum",
      position: "Member",
      role: "Quality Assurance",
      email: "quality.purchase@rcmc.edu.bd",
      phone: "+88-0123458203",
      experience: "16+ years",
      qualification: "MBBS, MPH, M.Sc.",
      specialization: "Quality Control & Standards Compliance",
      avatar: "NB",
      color: "from-lime-500 to-green-600"
    },
    {
      name: "Mr. K. M. Hassan",
      position: "Member",
      role: "Financial Management",
      email: "finance.purchase@rcmc.edu.bd",
      phone: "+88-0123458204",
      experience: "14+ years",
      qualification: "M.Com., MBA, CA",
      specialization: "Budget Management & Financial Oversight",
      avatar: "KH",
      color: "from-green-600 to-emerald-600"
    },
    {
      name: "Ms. F. R. Chowdhury",
      position: "Member Secretary",
      role: "Documentation & Records",
      email: "records.purchase@rcmc.edu.bd",
      phone: "+88-0123458205",
      experience: "12+ years",
      qualification: "B.Com., M.Com., MBA",
      specialization: "Purchase Documentation & Record Keeping",
      avatar: "FC",
      color: "from-teal-600 to-cyan-600"
    }
  ]

  const purchaseCategories = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Medical Supplies",
      description: "Medical equipment and consumables"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Logistics",
      description: "Transportation and delivery services"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Quality Control",
      description: "Quality assurance and inspection"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Budget Management",
      description: "Cost optimization and financial planning"
    }
  ]

  const procurementProcess = [
    {
      step: "1",
      title: "Requirement Assessment",
      description: "Identify and evaluate procurement needs",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Vendor Selection",
      description: "Evaluate and select qualified vendors",
      icon: <Users className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Purchase Order",
      description: "Issue official purchase orders",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Delivery & Inspection",
      description: "Receive and inspect delivered items",
      icon: <Package className="w-8 h-8" />
    }
  ]

  const purchaseStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "6",
      label: "Committee Members",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      number: "500+",
      label: "Annual Purchases",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "100%",
      label: "Quality Compliance",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      number: "15%",
      label: "Cost Savings",
      color: "from-lime-400 to-lime-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      {/* Hero Section */}
      <div className="bg-[#EAEAEA] text-white">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#111827]">Purchase Committee</h1>
            <p className="text-xl md:text-2xl text-[#253240] leading-relaxed mb-8">
      Ensuring Quality Procurement and Efficient Supply Chain
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 inline-flex">
                <button
                  onClick={() => setActiveTab("committee")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "committee"
                      ? "bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg"
                      : "text-green-600 hover:text-green-800 hover:bg-white/10"
                  }`}
                >
                  <Users className="inline w-4 h-4 mr-2" />
                  Committee
                </button>
                <button
                  onClick={() => setActiveTab("categories")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "categories"
                      ? "bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg"
                      : "text-green-600 hover:text-green-800 hover:bg-white/10"
                  }`}
                >
                  <Package className="inline w-4 h-4 mr-2" />
                  Categories
                </button>
                <button
                  onClick={() => setActiveTab("process")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "process"
                      ? "bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg"
                      : "text-green-600 hover:text-green-800 hover:bg-white/10"
                  }`}
                >
                  <FileCheck className="inline w-4 h-4 mr-2" />
                  Process
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-6xl mx-auto">
          {/* Committee Tab */}
          {activeTab === "committee" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-green-900 mb-4">Purchase Committee Members</h2>
                <p className="text-xl text-green-600">Expert professionals managing procurement operations</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {purchaseCommittee.map((member, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-green-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-xl font-bold">{member.avatar}</span>
                      </div>
                      <h3 className="text-lg font-bold text-green-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-green-700 mb-1">{member.position}</p>
                      <p className="text-xs text-green-500 mb-3">{member.role}</p>
                      
                      <div className="space-y-2 text-xs mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-3 h-3 text-green-400" />
                          <span className="text-green-600">{member.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-3 h-3 text-green-400" />
                          <span className="text-green-600">{member.phone}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-green-200">
                        <p className="text-xs text-green-500 mb-1">Experience: {member.experience}</p>
                        <p className="text-xs text-green-500 mb-1">Qualification: {member.qualification}</p>
                        <p className="text-xs text-green-500">Specialization: {member.specialization}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {purchaseStats.map((stat, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-green-200 hover:bg-white/90 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-green-900 mb-1">{stat.number}</div>
                        <div className="text-green-600">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </div>
          )}

          {/* Categories Tab */}
          {activeTab === "categories" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-green-900 mb-4">Purchase Categories</h2>
                <p className="text-xl text-green-600">Comprehensive procurement categories</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {purchaseCategories.map((category, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-green-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold text-green-900 mb-2">{category.title}</h3>
                      <p className="text-sm text-green-600">{category.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Process Tab */}
          {activeTab === "process" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-green-900 mb-4">Procurement Process</h2>
                <p className="text-xl text-green-600">Systematic procurement workflow</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {procurementProcess.map((step, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-green-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                        {step.icon}
                      </div>
                      <div className="text-2xl font-bold text-green-900 mb-2">Step {step.step}</div>
                      <h3 className="text-lg font-bold text-green-800 mb-2">{step.title}</h3>
                      <p className="text-sm text-green-600">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-md border border-green-200">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-green-900 mb-6">Contact Purchase Committee</h2>
                <p className="text-green-600 mb-8 max-w-2xl mx-auto">
                  For procurement inquiries, vendor applications, or purchase requests, please contact our Purchase Committee:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-green-900">Office Location</h3>
                      <p className="text-green-600 text-sm">Purchase Office, Admin Building</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-green-900">Purchase Phone</h3>
                      <p className="text-green-600 text-sm">+88-0123458200</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-green-900">Purchase Email</h3>
                      <p className="text-green-600 text-sm">purchase@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-green-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-green-900 mb-2">Office Hours</h3>
                  <p className="text-green-600">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                  <p className="text-green-600">Friday: 9:00 AM - 2:00 PM</p>
                  <p className="text-green-600">Saturday: Closed</p>
                  <div className="mt-4 p-4 bg-green-100 rounded">
                    <p className="text-green-700 font-semibold">Emergency Purchase: +88-0123458201 (24/7)</p>
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
