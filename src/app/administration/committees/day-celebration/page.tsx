"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, Star, Gift, Cake, Sparkles, Music, Camera } from "lucide-react"

export default function DayCelebrationPage() {
  const [activeTab, setActiveTab] = useState("committee")

  const celebrationCommittee = [
    {
      name: "Prof. Dr. M. A. Rahman",
      position: "Day Celebration Chairman",
      role: "Overall Event Management",
      email: "celebration.chairman@rcmc.edu.bd",
      phone: "+88-0123457800",
      experience: "18+ years",
      qualification: "MBBS, MD, M.Ed.",
      specialization: "Event Management & Student Activities",
      avatar: "MR",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Dr. S. K. Ahmed",
      position: "Vice Chairman",
      role: "Cultural Programs",
      email: "cultural.celebration@rcmc.edu.bd",
      phone: "+88-0123457801",
      experience: "14+ years",
      qualification: "MBBS, MD, M.Ed.",
      specialization: "Cultural Events & Entertainment",
      avatar: "SA",
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "Prof. Dr. R. C. Mondal",
      position: "Senior Member",
      role: "Logistics & Venue Management",
      email: "logistics.celebration@rcmc.edu.bd",
      phone: "+88-0123457802",
      experience: "16+ years",
      qualification: "MBBS, FCPS, MBA",
      specialization: "Event Planning & Facility Management",
      avatar: "RM",
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Dr. N. A. Begum",
      position: "Member",
      role: "Student Coordination",
      email: "student.celebration@rcmc.edu.bd",
      phone: "+88-0123457803",
      experience: "12+ years",
      qualification: "MBBS, MPH, MSW",
      specialization: "Student Engagement & Activities",
      avatar: "NB",
      color: "from-violet-500 to-purple-600"
    },
    {
      name: "Mr. K. M. Hassan",
      position: "Member",
      role: "Budget & Finance",
      email: "finance.celebration@rcmc.edu.bd",
      phone: "+88-0123457804",
      experience: "10+ years",
      qualification: "M.Com., MBA",
      specialization: "Event Budgeting & Financial Management",
      avatar: "KH",
      color: "from-fuchsia-500 to-pink-600"
    },
    {
      name: "Ms. F. R. Chowdhury",
      position: "Member Secretary",
      role: "Documentation & Media",
      email: "media.celebration@rcmc.edu.bd",
      phone: "+88-0123457805",
      experience: "8+ years",
      qualification: "MA, MBA, M.Sc.",
      specialization: "Event Documentation & Media Relations",
      avatar: "FC",
      color: "from-rose-500 to-pink-600"
    }
  ]

  const celebrationEvents = [
    {
      icon: <Cake className="w-6 h-6" />,
      title: "Birthday Celebrations",
      description: "Monthly birthday celebrations for students and staff"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Convocation Day",
      description: "Annual graduation ceremony and awards"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Valentine's Day",
      description: "Love and friendship celebration events"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Cultural Festivals",
      description: "Traditional and cultural celebrations"
    }
  ]

  const upcomingEvents = [
    {
      date: "March 21",
      title: "Spring Festival",
      description: "Welcome spring with cultural performances",
      participants: "500+",
      type: "Cultural"
    },
    {
      date: "April 7",
      title: "World Health Day",
      description: "Health awareness and medical camp",
      participants: "300+",
      type: "Health"
    },
    {
      date: "May 12",
      title: "Nurses Day",
      description: "Honoring our nursing staff",
      participants: "200+",
      type: "Professional"
    },
    {
      date: "June 15",
      title: "Annual Sports Day",
      description: "Sports competitions and awards",
      participants: "800+",
      type: "Sports"
    }
  ]

  const celebrationStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "6",
      label: "Committee Members",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: "12+",
      label: "Annual Events",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      number: "1000+",
      label: "Participants",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      number: "50+",
      label: "Activities",
      color: "from-rose-400 to-rose-600"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#111827]">Day Celebration Committee</h1>
            <p className="text-xl md:text-2xl text-[#252F40] leading-relaxed mb-8">
              Creating Memorable Moments and Building Community
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
                  onClick={() => setActiveTab("events")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "events"
                      ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg"
                      : "text-purple-600 hover:text-purple-800 hover:bg-white/10"
                  }`}
                >
                  <Calendar className="inline w-4 h-4 mr-2" />
                  Events
                </button>
                <button
                  onClick={() => setActiveTab("upcoming")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "upcoming"
                      ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg"
                      : "text-purple-600 hover:text-purple-800 hover:bg-white/10"
                  }`}
                >
                  <Star className="inline w-4 h-4 mr-2" />
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
                <h2 className="text-4xl font-bold text-purple-900 mb-4">Committee Members</h2>
                <p className="text-xl text-purple-600">Dedicated organizers creating memorable experiences</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {celebrationCommittee.map((member, index) => (
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
                {celebrationStats.map((stat, index) => (
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

          {/* Events Tab */}
          {activeTab === "events" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-purple-900 mb-4">Celebration Events</h2>
                <p className="text-xl text-purple-600">Diverse events throughout the year</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {celebrationEvents.map((event, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-purple-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                        {event.icon}
                      </div>
                      <h3 className="text-lg font-bold text-purple-900 mb-2">{event.title}</h3>
                      <p className="text-sm text-purple-600">{event.description}</p>
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
                <h2 className="text-4xl font-bold text-purple-900 mb-4">Upcoming Events</h2>
                <p className="text-xl text-purple-600">Mark your calendar for these exciting events</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-purple-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-sm font-bold text-purple-600 mb-1">{event.date}</div>
                          <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            {event.type}
                          </div>
                        </div>
                        <Calendar className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-bold text-purple-900 mb-2">{event.title}</h3>
                      <p className="text-sm text-purple-600 mb-2">{event.description}</p>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-600 text-sm">{event.participants} participants</span>
                      </div>
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
                <h2 className="text-3xl font-bold text-purple-900 mb-6">Contact Day Celebration Committee</h2>
                <p className="text-purple-600 mb-8 max-w-2xl mx-auto">
                  For event participation, suggestions, or collaboration opportunities, please contact our Day Celebration Committee:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-purple-900">Office Location</h3>
                      <p className="text-purple-600 text-sm">Student Activity Center</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-purple-900">Committee Phone</h3>
                      <p className="text-purple-600 text-sm">+88-0123457800</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <div>
                      <h3 className="font-semibold text-purple-900">Committee Email</h3>
                      <p className="text-purple-600 text-sm">celebration@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-purple-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-purple-900 mb-2">Office Hours</h3>
                  <p className="text-purple-600">Sunday - Thursday: 10:00 AM - 6:00 PM</p>
                  <p className="text-purple-600">Friday: 2:00 PM - 8:00 PM</p>
                  <p className="text-purple-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <div className="mt-4 p-4 bg-purple-100 rounded">
                    <p className="text-purple-700 font-semibold">Event Hotline: +88-0123457801 (Event Days Only)</p>
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
