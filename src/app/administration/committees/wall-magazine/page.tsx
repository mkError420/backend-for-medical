"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, Star, Trophy, MessageSquare, Mic, Brain, Zap, PenTool, Palette, Camera, Edit3, FileImage, Lightbulb, Sparkles, TrendingUp, Eye, Share2, Bookmark } from "lucide-react"

export default function WallMagazinePage() {
  const [activeTab, setActiveTab] = useState("committee")

  const wallMagazineCommittee = [
    {
      name: "Prof. Dr. A. K. Azad",
      position: "Wall Magazine Chairman",
      role: "Overall Editorial Management",
      email: "magazine.chairman@rcmc.edu.bd",
      phone: "+88-0123458300",
      experience: "20+ years",
      qualification: "MBBS, MD, MA",
      specialization: "Medical Journalism & Creative Writing",
      avatar: "AA",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Dr. S. R. Khan",
      position: "Editor-in-Chief",
      role: "Content Development & Review",
      email: "editor@rcmc.edu.bd",
      phone: "+88-0123458301",
      experience: "18+ years",
      qualification: "MBBS, MD, M.Phil.",
      specialization: "Medical Content Creation & Editing",
      avatar: "SK",
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "Prof. Dr. M. N. Islam",
      position: "Senior Editor",
      role: "Research Publications",
      email: "research.editor@rcmc.edu.bd",
      phone: "+88-0123458302",
      experience: "22+ years",
      qualification: "MBBS, FCPS, PhD",
      specialization: "Medical Research & Academic Writing",
      avatar: "MI",
      color: "from-rose-500 to-pink-600"
    },
    {
      name: "Dr. F. A. Begum",
      position: "Content Coordinator",
      role: "Article Collection & Curation",
      email: "content@rcmc.edu.bd",
      phone: "+88-0123458303",
      experience: "15+ years",
      qualification: "MBBS, MPH, MA",
      specialization: "Content Management & Curation",
      avatar: "FB",
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Mr. R. H. Chowdhury",
      position: "Design & Layout Head",
      role: "Visual Design & Layout",
      email: "design@rcmc.edu.bd",
      phone: "+88-0123458304",
      experience: "12+ years",
      qualification: "BFA, MFA, GD",
      specialization: "Graphic Design & Visual Communication",
      avatar: "RC",
      color: "from-pink-600 to-rose-600"
    },
    {
      name: "Ms. N. S. Rahman",
      position: "Member Secretary",
      role: "Documentation & Distribution",
      email: "distribution@rcmc.edu.bd",
      phone: "+88-0123458305",
      experience: "10+ years",
      qualification: "BA, MA, MBA",
      specialization: "Publication Management & Distribution",
      avatar: "NR",
      color: "from-purple-500 to-rose-600"
    }
  ]

  const magazineCategories = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Research Articles",
      description: "Latest medical research and discoveries"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health Tips",
      description: "Wellness and preventive healthcare advice"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Student Corner",
      description: "Creative works and achievements of students"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Awards & Recognition",
      description: "Achievements and accomplishments"
    }
  ]

  const publicationProcess = [
    {
      step: "1",
      title: "Content Collection",
      description: "Gather articles and creative submissions",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Editorial Review",
      description: "Review and edit submitted content",
      icon: <Edit3 className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Design & Layout",
      description: "Create visually appealing magazine layout",
      icon: <Palette className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Publication",
      description: "Print and distribute the magazine",
      icon: <BookOpen className="w-8 h-8" />
    }
  ]

  const magazineStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "6",
      label: "Committee Members",
      color: "from-purple-400 to-pink-600"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: "12",
      label: "Annual Issues",
      color: "from-pink-400 to-rose-600"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      number: "5000+",
      label: "Monthly Readers",
      color: "from-rose-400 to-pink-600"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      number: "15",
      label: "Awards Won",
      color: "from-purple-400 to-rose-600"
    }
  ]

  const featuredIssues = [
    {
      title: "Medical Innovation Special",
      month: "December 2025",
      theme: "Cutting-edge medical technologies",
      articles: 24,
      downloads: 1250
    },
    {
      title: "Student Research Edition",
      month: "November 2025",
      theme: "Student-led research projects",
      articles: 18,
      downloads: 980
    },
    {
      title: "Public Health Focus",
      month: "October 2025",
      theme: "Community health initiatives",
      articles: 20,
      downloads: 1100
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="bg-[#EAEAEA] text-white">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#111827]">Wall Magazine Committee</h1>
            <p className="text-xl md:text-2xl text-[#253240] leading-relaxed mb-8">
      Fostering Creativity and Academic Excellence Through Publications
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 inline-flex">
                <button
                  onClick={() => setActiveTab("committee")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "committee"
                      ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg"
                      : "text-purple-600 hover:text-purple-800 hover:bg-white/10"
                  }`}
                >
                  <Users className="inline w-4 h-4 mr-2" />
                  Committee
                </button>
                <button
                  onClick={() => setActiveTab("categories")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "categories"
                      ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg"
                      : "text-purple-600 hover:text-purple-800 hover:bg-white/10"
                  }`}
                >
                  <FileText className="inline w-4 h-4 mr-2" />
                  Categories
                </button>
                <button
                  onClick={() => setActiveTab("process")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "process"
                      ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg"
                      : "text-purple-600 hover:text-purple-800 hover:bg-white/10"
                  }`}
                >
                  <Edit3 className="inline w-4 h-4 mr-2" />
                  Process
                </button>
                <button
                  onClick={() => setActiveTab("issues")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "issues"
                      ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg"
                      : "text-purple-600 hover:text-purple-800 hover:bg-white/10"
                  }`}
                >
                  <BookOpen className="inline w-4 h-4 mr-2" />
                  Issues
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
                <h2 className="text-4xl font-bold text-purple-900 mb-4">Wall Magazine Committee Members</h2>
                <p className="text-xl text-purple-600">Creative professionals managing editorial operations</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {wallMagazineCommittee.map((member, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-purple-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-xl font-bold">{member.avatar}</span>
                      </div>
                      <h3 className="text-lg font-bold text-purple-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-purple-700 mb-1">{member.position}</p>
                      <p className="text-xs text-purple-500 mb-3">{member.role}</p>
                      
                      <div className="space-y-2 text-xs mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-3 h-3 text-purple-400" />
                          <span className="text-purple-600">{member.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-3 h-3 text-purple-400" />
                          <span className="text-purple-600">{member.phone}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-purple-200">
                        <p className="text-xs text-purple-500 mb-1">Experience: {member.experience}</p>
                        <p className="text-xs text-purple-500 mb-1">Qualification: {member.qualification}</p>
                        <p className="text-xs text-purple-500">Specialization: {member.specialization}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {magazineStats.map((stat, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-purple-200 hover:bg-white/90 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-purple-900 mb-1">{stat.number}</div>
                        <div className="text-purple-600">{stat.label}</div>
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
                <h2 className="text-4xl font-bold text-purple-900 mb-4">Magazine Categories</h2>
                <p className="text-xl text-purple-600">Diverse content categories for our publications</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {magazineCategories.map((category, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-purple-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold text-purple-900 mb-2">{category.title}</h3>
                      <p className="text-sm text-purple-600">{category.description}</p>
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
                <h2 className="text-4xl font-bold text-purple-900 mb-4">Publication Process</h2>
                <p className="text-xl text-purple-600">Systematic editorial and publishing workflow</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {publicationProcess.map((step, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-purple-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                        {step.icon}
                      </div>
                      <div className="text-2xl font-bold text-purple-900 mb-2">Step {step.step}</div>
                      <h3 className="text-lg font-bold text-purple-800 mb-2">{step.title}</h3>
                      <p className="text-sm text-purple-600">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Issues Tab */}
          {activeTab === "issues" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-purple-900 mb-4">Featured Issues</h2>
                <p className="text-xl text-purple-600">Recent and popular magazine editions</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredIssues.map((issue, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-purple-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-bold text-purple-900 mb-2">{issue.title}</h3>
                      <p className="text-sm text-purple-600 mb-1">{issue.month}</p>
                      <p className="text-xs text-purple-500 mb-4">{issue.theme}</p>
                      
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-purple-600">Articles:</span>
                          <span className="text-purple-800 font-semibold">{issue.articles}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-purple-600">Downloads:</span>
                          <span className="text-purple-800 font-semibold">{issue.downloads}</span>
                        </div>
                      </div>
                      
                      <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                        <Eye className="inline w-4 h-4 mr-2" />
                        View Issue
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-md border border-purple-200">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">Contact Wall Magazine Committee</h2>
                <p className="text-purple-600 mb-8 max-w-2xl mx-auto">
                  For article submissions, editorial inquiries, or magazine subscriptions, please contact our Wall Magazine Committee:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-purple-900">Editorial Office</h3>
                      <p className="text-purple-600 text-sm">Academic Building, Room 204</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-purple-900">Magazine Phone</h3>
                      <p className="text-purple-600 text-sm">+88-0123458300</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-purple-900">Magazine Email</h3>
                      <p className="text-purple-600 text-sm">magazine@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-purple-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-purple-900 mb-2">Submission Guidelines</h3>
                  <p className="text-purple-600 mb-2">Article submission deadline: 15th of each month</p>
                  <p className="text-purple-600 mb-2">Publication date: Last day of each month</p>
                  <p className="text-purple-600">Word limit: 500-2000 words per article</p>
                  <div className="mt-4 p-4 bg-purple-100 rounded">
                    <p className="text-purple-700 font-semibold">Submissions: articles@rcmc.edu.bd</p>
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
