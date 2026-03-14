"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, Star, Trophy, MessageSquare, Mic, Brain, Zap } from "lucide-react"

export default function DebateClubPage() {
  const [activeTab, setActiveTab] = useState("committee")

  const debateCommittee = [
    {
      name: "Prof. Dr. M. A. Rahman",
      position: "Debate Club Chairman",
      role: "Overall Debate Management",
      email: "debate.chairman@rcmc.edu.bd",
      phone: "+88-0123457900",
      experience: "20+ years",
      qualification: "MBBS, MD, PhD",
      specialization: "Debate Coaching & Critical Thinking",
      avatar: "MR",
      color: "from-red-500 to-orange-600"
    },
    {
      name: "Dr. S. K. Ahmed",
      position: "Vice Chairman",
      role: "Debate Training & Development",
      email: "training.debate@rcmc.edu.bd",
      phone: "+88-0123457901",
      experience: "16+ years",
      qualification: "MBBS, MD, M.Ed.",
      specialization: "Debate Methodology & Public Speaking",
      avatar: "SA",
      color: "from-orange-500 to-amber-600"
    },
    {
      name: "Prof. Dr. R. C. Mondal",
      position: "Senior Member",
      role: "Tournament Organization",
      email: "tournament.debate@rcmc.edu.bd",
      phone: "+88-0123457902",
      experience: "18+ years",
      qualification: "MBBS, FCPS, PhD",
      specialization: "Competition Management & Judging",
      avatar: "RM",
      color: "from-amber-500 to-yellow-600"
    },
    {
      name: "Dr. N. A. Begum",
      position: "Member",
      role: "Student Coordination",
      email: "student.debate@rcmc.edu.bd",
      phone: "+88-0123457903",
      experience: "14+ years",
      qualification: "MBBS, MPH, MA",
      specialization: "Student Mentorship & Skill Development",
      avatar: "NB",
      color: "from-red-600 to-rose-600"
    },
    {
      name: "Mr. K. M. Hassan",
      position: "Member",
      role: "Research & Content",
      email: "research.debate@rcmc.edu.bd",
      phone: "+88-0123457904",
      experience: "12+ years",
      qualification: "MA, M.Phil.",
      specialization: "Debate Topics & Content Development",
      avatar: "KH",
      color: "from-orange-600 to-red-600"
    },
    {
      name: "Ms. F. R. Chowdhury",
      position: "Member Secretary",
      role: "Documentation & Communication",
      email: "communication.debate@rcmc.edu.bd",
      phone: "+88-0123457905",
      experience: "10+ years",
      qualification: "MA, MBA",
      specialization: "Event Documentation & Public Relations",
      avatar: "FC",
      color: "from-rose-500 to-orange-600"
    }
  ]

  const debateFormats = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Parliamentary Debate",
      description: "British Parliamentary style debate format"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Policy Debate",
      description: "Policy-focused argumentation and analysis"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Extemporaneous",
      description: "Impromptu speaking and quick thinking"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lincoln-Douglas",
      description: "One-on-one value-based debate"
    }
  ]

  const upcomingDebates = [
    {
      date: "March 25",
      title: "Inter-College Debate Championship",
      description: "Annual debate competition with medical colleges",
      participants: "12 Teams",
      format: "Parliamentary"
    },
    {
      date: "April 15",
      title: "Medical Ethics Debate",
      description: "Ethical issues in modern medical practice",
      participants: "8 Teams",
      format: "Policy"
    },
    {
      date: "May 10",
      title: "Public Health Forum",
      description: "Healthcare policy and public health debates",
      participants: "10 Teams",
      format: "Extemporaneous"
    },
    {
      date: "June 20",
      title: "National Debate Qualifier",
      description: "Qualification rounds for national tournament",
      participants: "15 Teams",
      format: "Lincoln-Douglas"
    }
  ]

  const debateStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "6",
      label: "Committee Members",
      color: "from-red-400 to-red-600"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      number: "15+",
      label: "Annual Tournaments",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "50+",
      label: "Active Debaters",
      color: "from-amber-400 to-amber-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "10",
      label: "Championships Won",
      color: "from-rose-400 to-rose-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-[#EAEAEA] text-white">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#111827]">Debate Club Committee</h1>
            <p className="text-xl md:text-2xl text-[#252F40] leading-relaxed mb-8">
              Fostering Critical Thinking and Effective Communication
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 inline-flex">
                <button
                  onClick={() => setActiveTab("committee")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "committee"
                      ? "bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg"
                      : "text-red-600 hover:text-red-800 hover:bg-white/10"
                  }`}
                >
                  <Users className="inline w-4 h-4 mr-2" />
                  Committee
                </button>
                <button
                  onClick={() => setActiveTab("formats")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "formats"
                      ? "bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg"
                      : "text-red-600 hover:text-red-800 hover:bg-white/10"
                  }`}
                >
                  <MessageSquare className="inline w-4 h-4 mr-2" />
                  Formats
                </button>
                <button
                  onClick={() => setActiveTab("upcoming")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "upcoming"
                      ? "bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg"
                      : "text-red-600 hover:text-red-800 hover:bg-white/10"
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
                <h2 className="text-4xl font-bold text-red-900 mb-4">Committee Members</h2>
                <p className="text-xl text-red-600">Experienced mentors shaping future debaters</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {debateCommittee.map((member, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-red-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-xl font-bold">{member.avatar}</span>
                      </div>
                      <h3 className="text-lg font-bold text-red-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-red-700 mb-1">{member.position}</p>
                      <p className="text-xs text-red-500 mb-3">{member.role}</p>
                      
                      <div className="space-y-2 text-xs mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-3 h-3 text-red-400" />
                          <span className="text-red-600">{member.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-3 h-3 text-red-400" />
                          <span className="text-red-600">{member.phone}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-red-200">
                        <p className="text-xs text-red-500 mb-1">Experience: {member.experience}</p>
                        <p className="text-xs text-red-500 mb-1">Qualification: {member.qualification}</p>
                        <p className="text-xs text-red-500">Specialization: {member.specialization}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {debateStats.map((stat, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-red-200 hover:bg-white/90 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-red-900 mb-1">{stat.number}</div>
                        <div className="text-red-600">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </div>
          )}

          {/* Formats Tab */}
          {activeTab === "formats" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-red-900 mb-4">Debate Formats</h2>
                <p className="text-xl text-red-600">Diverse debate styles for comprehensive skill development</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {debateFormats.map((format, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-red-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                        {format.icon}
                      </div>
                      <h3 className="text-lg font-bold text-red-900 mb-2">{format.title}</h3>
                      <p className="text-sm text-red-600">{format.description}</p>
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
                <h2 className="text-4xl font-bold text-red-900 mb-4">Upcoming Debates</h2>
                <p className="text-xl text-red-600">Exciting debate competitions and events</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {upcomingDebates.map((debate, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-red-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-sm font-bold text-red-600 mb-1">{debate.date}</div>
                          <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            {debate.format}
                          </div>
                        </div>
                        <Trophy className="w-6 h-6 text-red-400" />
                      </div>
                      <h3 className="text-lg font-bold text-red-900 mb-2">{debate.title}</h3>
                      <p className="text-sm text-red-600 mb-2">{debate.description}</p>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-red-400" />
                        <span className="text-red-600 text-sm">{debate.participants}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-md border border-red-200">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-red-900 mb-6">Contact Debate Club Committee</h2>
                <p className="text-red-600 mb-8 max-w-2xl mx-auto">
                  For debate participation, training inquiries, or collaboration opportunities, please contact our Debate Club Committee:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <div>
                      <h3 className="font-semibold text-red-900">Club Location</h3>
                      <p className="text-red-600 text-sm">Debate Hall, Academic Building</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-red-600" />
                    <div>
                      <h3 className="font-semibold text-red-900">Committee Phone</h3>
                      <p className="text-red-600 text-sm">+88-0123457900</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-red-600" />
                    <div>
                      <h3 className="font-semibold text-red-900">Club Email</h3>
                      <p className="text-red-600 text-sm">debate@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-red-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-red-900 mb-2">Practice Schedule</h3>
                  <p className="text-red-600">Sunday - Wednesday: 4:00 PM - 6:00 PM</p>
                  <p className="text-red-600">Thursday: 2:00 PM - 5:00 PM</p>
                  <p className="text-red-600">Friday: 10:00 AM - 1:00 PM</p>
                  <p className="text-red-600">Saturday: Closed</p>
                  <div className="mt-4 p-4 bg-red-100 rounded">
                    <p className="text-red-700 font-semibold">Debate Hotline: +88-0123457901 (Practice Days Only)</p>
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
