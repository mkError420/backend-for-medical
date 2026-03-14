"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, Star, Trophy, MessageSquare, Mic, Brain, Zap, PenTool, Camera, Image, BookOpen as Book, FileText as Document } from "lucide-react"

export default function MagazinePage() {
  const [activeTab, setActiveTab] = useState("committee")

  const magazineCommittee = [
    {
      name: "Prof. Dr. M. A. Rahman",
      position: "Magazine Committee Chairman",
      role: "Overall Editorial Management",
      email: "magazine.chairman@rcmc.edu.bd",
      phone: "+88-0123458100",
      experience: "20+ years",
      qualification: "MBBS, MD, PhD",
      specialization: "Medical Journalism & Editorial Leadership",
      avatar: "MR",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Dr. S. K. Ahmed",
      position: "Editor-in-Chief",
      role: "Content Development & Editing",
      email: "editor.magazine@rcmc.edu.bd",
      phone: "+88-0123458101",
      experience: "16+ years",
      qualification: "MBBS, MD, MA",
      specialization: "Medical Writing & Content Creation",
      avatar: "SA",
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Prof. Dr. R. C. Mondal",
      position: "Senior Editor",
      role: "Research Publications",
      email: "research.magazine@rcmc.edu.bd",
      phone: "+88-0123458102",
      experience: "18+ years",
      qualification: "MBBS, FCPS, PhD",
      specialization: "Research Publication & Peer Review",
      avatar: "RM",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Dr. N. A. Begum",
      position: "Associate Editor",
      role: "Student Contributions",
      email: "student.magazine@rcmc.edu.bd",
      phone: "+88-0123458103",
      experience: "14+ years",
      qualification: "MBBS, MPH, MA",
      specialization: "Student Writing & Creative Content",
      avatar: "NB",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Mr. K. M. Hassan",
      position: "Design & Layout Editor",
      role: "Visual Design & Graphics",
      email: "design.magazine@rcmc.edu.bd",
      phone: "+88-0123458104",
      experience: "12+ years",
      qualification: "BFA, MFA, M.Sc.",
      specialization: "Graphic Design & Magazine Layout",
      avatar: "KH",
      color: "from-teal-500 to-cyan-600"
    },
    {
      name: "Ms. F. R. Chowdhury",
      position: "Member Secretary",
      role: "Distribution & Administration",
      email: "admin.magazine@rcmc.edu.bd",
      phone: "+88-0123458105",
      experience: "10+ years",
      qualification: "MA, MBA",
      specialization: "Publication Management & Distribution",
      avatar: "FC",
      color: "from-blue-600 to-indigo-600"
    }
  ]

  const magazineSections = [
    {
      icon: <Book className="w-6 h-6" />,
      title: "Research Articles",
      description: "Latest medical research and findings"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Student Writings",
      description: "Creative works and experiences"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photography",
      description: "Campus life and medical photography"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "News & Updates",
      description: "College news and announcements"
    }
  ]

  const upcomingIssues = [
    {
      date: "March 2025",
      title: "Spring Edition",
      description: "Focus on new medical technologies",
      theme: "Innovation in Medicine",
      articles: "24 Articles"
    },
    {
      date: "June 2025",
      title: "Summer Edition",
      description: "Student achievements and research highlights",
      theme: "Excellence in Education",
      articles: "28 Articles"
    },
    {
      date: "September 2025",
      title: "Autumn Edition",
      description: "Public health and community medicine",
      theme: "Community Health",
      articles: "26 Articles"
    },
    {
      date: "December 2025",
      title: "Winter Edition",
      description: "Yearly review and future perspectives",
      theme: "Annual Review",
      articles: "32 Articles"
    }
  ]

  const magazineStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "6",
      label: "Editorial Team",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Book className="w-8 h-8" />,
      number: "4",
      label: "Annual Issues",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      number: "100+",
      label: "Annual Articles",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "500+",
      label: "Readership",
      color: "from-cyan-400 to-cyan-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-[#EAEAEA] text-white">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#111827]">Magazine Committee</h1>
            <p className="text-xl md:text-2xl text-[#252F40] leading-relaxed mb-8">
              Sharing Knowledge and Inspiring Through Publications
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 inline-flex">
                <button
                  onClick={() => setActiveTab("committee")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "committee"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                      : "text-blue-600 hover:text-blue-800 hover:bg-white/10"
                  }`}
                >
                  <Users className="inline w-4 h-4 mr-2" />
                  Committee
                </button>
                <button
                  onClick={() => setActiveTab("sections")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "sections"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                      : "text-blue-600 hover:text-blue-800 hover:bg-white/10"
                  }`}
                >
                  <Book className="inline w-4 h-4 mr-2" />
                  Sections
                </button>
                <button
                  onClick={() => setActiveTab("upcoming")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "upcoming"
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                      : "text-blue-600 hover:text-blue-800 hover:bg-white/10"
                  }`}
                >
                  <Calendar className="inline w-4 h-4 mr-2" />
                  Upcoming
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
                <h2 className="text-4xl font-bold text-blue-900 mb-4">Editorial Committee</h2>
                <p className="text-xl text-blue-600">Creative minds shaping our college magazine</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {magazineCommittee.map((member, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-blue-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-xl font-bold">{member.avatar}</span>
                      </div>
                      <h3 className="text-lg font-bold text-blue-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-blue-700 mb-1">{member.position}</p>
                      <p className="text-xs text-blue-500 mb-3">{member.role}</p>
                      
                      <div className="space-y-2 text-xs mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-3 h-3 text-blue-400" />
                          <span className="text-blue-600">{member.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-3 h-3 text-blue-400" />
                          <span className="text-blue-600">{member.phone}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-blue-200">
                        <p className="text-xs text-blue-500 mb-1">Experience: {member.experience}</p>
                        <p className="text-xs text-blue-500 mb-1">Qualification: {member.qualification}</p>
                        <p className="text-xs text-blue-500">Specialization: {member.specialization}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {magazineStats.map((stat, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-blue-200 hover:bg-white/90 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-blue-900 mb-1">{stat.number}</div>
                        <div className="text-blue-600">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </div>
          )}

          {/* Sections Tab */}
          {activeTab === "sections" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-blue-900 mb-4">Magazine Sections</h2>
                <p className="text-xl text-blue-600">Diverse content for our readers</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {magazineSections.map((section, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-blue-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                        {section.icon}
                      </div>
                      <h3 className="text-lg font-bold text-blue-900 mb-2">{section.title}</h3>
                      <p className="text-sm text-blue-600">{section.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Tab */}
          {activeTab === "upcoming" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-blue-900 mb-4">Upcoming Issues</h2>
                <p className="text-xl text-blue-600">Exciting editions coming soon</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {upcomingIssues.map((issue, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-blue-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-sm font-bold text-blue-600 mb-1">{issue.date}</div>
                          <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            {issue.articles}
                          </div>
                        </div>
                        <Book className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold text-blue-900 mb-2">{issue.title}</h3>
                      <p className="text-sm text-blue-600 mb-2">{issue.description}</p>
                      <div className="text-xs text-blue-500 font-semibold">Theme: {issue.theme}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-md border border-blue-200">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Magazine Committee</h2>
                <p className="text-blue-600 mb-8 max-w-2xl mx-auto">
                  For article submissions, advertising inquiries, or magazine subscriptions, please contact our Magazine Committee:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-blue-900">Office Location</h3>
                      <p className="text-blue-600 text-sm">Editorial Office, Library Building</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-blue-900">Editorial Phone</h3>
                      <p className="text-blue-600 text-sm">+88-0123458100</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-blue-900">Magazine Email</h3>
                      <p className="text-blue-600 text-sm">magazine@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-blue-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-blue-900 mb-2">Office Hours</h3>
                  <p className="text-blue-600">Sunday - Thursday: 10:00 AM - 6:00 PM</p>
                  <p className="text-blue-600">Friday: 2:00 PM - 8:00 PM</p>
                  <p className="text-blue-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <div className="mt-4 p-4 bg-blue-100 rounded">
                    <p className="text-blue-700 font-semibold">Submission Deadline: 15th of every month</p>
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
