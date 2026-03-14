"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Plane, Users, FileText, Mail, Phone, MapPin, Calendar, Shield, CreditCard, Home, GraduationCap, CheckCircle, AlertCircle, Clock, MessageCircle } from "lucide-react"

export default function ForeignHelpDeskPage() {
  const [activeTab, setActiveTab] = useState("admission")

  const services = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Travel Assistance",
      description: "Visa guidance, flight booking, and travel arrangements"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Accommodation",
      description: "Hostel facilities and off-campus housing options"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Legal Support",
      description: "Immigration assistance and legal documentation help"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Financial Services",
      description: "Fee payment options and banking assistance"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Language Support",
      description: "English proficiency programs and translation services"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cultural Integration",
      description: "Orientation programs and cultural exchange activities"
    }
  ]

  const admissionSteps = [
    { step: 1, title: "Application Submission", description: "Submit online application with required documents" },
    { step: 2, title: "Document Verification", description: "Review and verification of academic and personal documents" },
    { step: 3, title: "Eligibility Assessment", description: "Evaluation of academic qualifications and eligibility criteria" },
    { step: 4, title: "Offer Letter", description: "Issuance of admission offer letter to successful candidates" },
    { step: 5, title: "Visa Processing", description: "Assistance with student visa application and documentation" },
    { step: 6, title: "Pre-arrival Preparation", description: "Travel arrangements and accommodation booking" }
  ]

  const requirements = [
    "Academic Transcripts (translated)",
    "Passport Copy",
    "Birth Certificate",
    "Medical Fitness Certificate",
    "Police Clearance Certificate",
    "Financial Support Documents",
    "Passport-sized Photographs",
    "English Proficiency Certificate"
  ]

  const foreignOfficers = [
    {
      name: "Dr. Sarah Johnson",
      position: "International Student Coordinator",
      country: "USA",
      email: "sarah.johnson@rcmc.edu.bd",
      phone: "+88-0123456790",
      languages: ["English", "Spanish", "French"],
      experience: "10+ years",
      image: "SJ",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Prof. Dr. Li Wei",
      position: "Foreign Student Advisor",
      country: "China",
      email: "li.wei@rcmc.edu.bd",
      phone: "+88-0123456791",
      languages: ["Mandarin", "Cantonese", "English"],
      experience: "8+ years",
      image: "LW",
      color: "from-red-400 to-red-600"
    },
    {
      name: "Dr. Ahmed Hassan",
      position: "Middle East Student Coordinator",
      country: "UAE",
      email: "ahmed.hassan@rcmc.edu.bd",
      phone: "+88-0123456792",
      languages: ["Arabic", "English", "Urdu"],
      experience: "12+ years",
      image: "AH",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Ms. Priya Sharma",
      position: "South Asia Student Coordinator",
      country: "India",
      email: "priya.sharma@rcmc.edu.bd",
      phone: "+88-0123456793",
      languages: ["Hindi", "Bengali", "English"],
      experience: "6+ years",
      image: "PS",
      color: "from-purple-400 to-purple-600"
    }
  ]

  const faqs = [
    {
      question: "What are the eligibility criteria for foreign students?",
      answer: "Foreign students must have completed secondary education with science background, minimum GPA requirements, and English proficiency (IELTS 6.0 or equivalent)."
    },
    {
      question: "How long does the admission process take?",
      answer: "The complete admission process typically takes 4-6 weeks from application to arrival, including visa processing time."
    },
    {
      question: "What accommodation options are available?",
      answer: "We provide on-campus hostel facilities and assist with off-campus housing. All accommodations are safe, secure, and fully furnished."
    },
    {
      question: "Is there airport pickup service?",
      answer: "Yes, we provide complimentary airport pickup service for all international students upon arrival."
    },
    {
      question: "What medical facilities are available for foreign students?",
      answer: "Foreign students have access to our hospital facilities with comprehensive health insurance coverage included in the fee structure."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section with New Design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#E0FAE1]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative responsive-container-full py-20">
          <div className="max-w-4xl mx-auto text-center text-gray-600">
            <div className="flex justify-center mb-6">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Foreign Help Desk</h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-8">
              Your Gateway to Medical Education in Bangladesh
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-black-600 font-semibold">
                <Phone className="inline w-4 h-4 mr-2" />
                24/7 Support
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-black-600 font-semibold">
                <Globe className="inline w-4 h-4 mr-2" />
                Multi-lingual Assistance
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="responsive-container-full py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-2 flex flex-wrap gap-2">
            {["officers", "admission", "services", "requirements", "faqs", "contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#B3C8B4] text-black-700 shadow-lg"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab === "officers" ? "Foreign Officers" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="responsive-container-full pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Admission Tab */}
          {activeTab === "admission" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Admission Process</h2>
                <p className="text-xl text-gray-600">Step-by-step guide for international students</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {admissionSteps.map((step, index) => (
                  <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {step.step}
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === "services" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
                <p className="text-xl text-gray-600">Comprehensive support for international students</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Foreign Officers Tab */}
          {activeTab === "officers" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Foreign Officers</h2>
                <p className="text-xl text-gray-600">Dedicated coordinators for international student support</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {foreignOfficers.map((officer, index) => (
                  <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`w-24 h-24 bg-gradient-to-br ${officer.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-2xl font-bold">{officer.image}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{officer.name}</h3>
                      <p className="text-sm font-semibold text-blue-600 mb-1">{officer.position}</p>
                      <p className="text-xs text-gray-500 mb-3">{officer.country}</p>
                      
                      <div className="space-y-2 text-xs mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-600">{officer.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-600">{officer.phone}</span>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500 mb-2">Languages: {officer.languages.join(", ")}</p>
                        <p className="text-xs text-gray-500">Experience: {officer.experience}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">24/7 Support Available</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Our foreign officers are available round-the-clock to assist international students with any queries, concerns, or support needs. Feel free to reach out to any officer based on your region or language preference.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Requirements Tab */}
          {activeTab === "requirements" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Document Requirements</h2>
                <p className="text-xl text-gray-600">Essential documents for admission</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="shadow-lg border-0">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <CardTitle className="text-2xl text-gray-800">Academic Documents</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <ul className="space-y-4">
                      {requirements.slice(0, 4).map((req, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                    <CardTitle className="text-2xl text-gray-800">Personal Documents</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <ul className="space-y-4">
                      {requirements.slice(4, 8).map((req, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-lg border-0 bg-gradient-to-r from-orange-50 to-yellow-50">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Important Note</h3>
                      <p className="text-gray-700">
                        All documents must be translated into English and notarized. Original documents should be brought along with attested copies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* FAQs Tab */}
          {activeTab === "faqs" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">Common queries from international students</p>
              </div>

              <div className="space-y-6 max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                  <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-blue-600 font-bold text-sm">Q</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-green-600 font-bold text-sm">A</span>
                            </div>
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === "contact" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Foreign Help Desk</h2>
                <p className="text-xl text-gray-600">We're here to help you 24/7</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      <Phone className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Emergency Hotline</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">+88-0123456789</p>
                    <p className="text-gray-600">24/7 Available</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      <Mail className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email Support</h3>
                    <p className="text-lg font-semibold text-green-600 mb-2">foreign@rcmc.edu.bd</p>
                    <p className="text-gray-600">Quick Response</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Office Location</h3>
                    <p className="text-gray-600 mb-2">International Student Center</p>
                    <p className="text-gray-600">RCMC Campus, Rangpur</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-lg border-0 bg-[#081933] text-white">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                      <div>
                        <Clock className="w-6 h-6 mx-auto mb-2" />
                        <p className="font-semibold">Sunday - Thursday</p>
                        <p className="text-blue-100">9:00 AM - 8:00 PM</p>
                      </div>
                      <div>
                        <Clock className="w-6 h-6 mx-auto mb-2" />
                        <p className="font-semibold">Friday</p>
                        <p className="text-blue-100">10:00 AM - 4:00 PM</p>
                      </div>
                      <div>
                        <Clock className="w-6 h-6 mx-auto mb-2" />
                        <p className="font-semibold">Saturday</p>
                        <p className="text-blue-100">Emergency Only</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
