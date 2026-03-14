"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Music, Users, Calendar, Star, Target, Heart, Mail, Phone, MapPin, Award, Camera, Palette, Gamepad2, Mic, Dribbble, Activity } from "lucide-react"

export default function SportsCulturalPage() {
  const [activeTab, setActiveTab] = useState("sports")

  const sportsCommittee = [
    {
      name: "Prof. Dr. M. A. Rahman",
      position: "Sports Coordinator",
      role: "Overall Sports Management",
      email: "sports.coordinator@rcmc.edu.bd",
      phone: "+88-0123457300",
      experience: "15+ years",
      qualification: "MBBS, MD, M.P.Ed.",
      specialization: "Sports Medicine & Event Management",
      avatar: "MR",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Dr. S. K. Ahmed",
      position: "Assistant Sports Coordinator",
      role: "Indoor Sports & Facilities",
      email: "indoor.sports@rcmc.edu.bd",
      phone: "+88-0123457301",
      experience: "10+ years",
      qualification: "MBBS, M.P.Ed.",
      specialization: "Indoor Games & Facility Management",
      avatar: "SA",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Ms. N. A. Begum",
      position: "Sports Officer",
      role: "Women's Sports & Activities",
      email: "women.sports@rcmc.edu.bd",
      phone: "+88-0123457302",
      experience: "8+ years",
      qualification: "M.P.Ed., M.Sc.",
      specialization: "Women's Sports & Recreation",
      avatar: "NB",
      color: "from-pink-500 to-purple-600"
    }
  ]

  const culturalCommittee = [
    {
      name: "Prof. Dr. R. C. Mondal",
      position: "Cultural Coordinator",
      role: "Overall Cultural Activities",
      email: "cultural.coordinator@rcmc.edu.bd",
      phone: "+88-0123457400",
      experience: "18+ years",
      qualification: "MBBS, MA, M.P.Ed.",
      specialization: "Cultural Event Management & Arts",
      avatar: "RM",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Ms. F. R. Chowdhury",
      position: "Assistant Cultural Coordinator",
      role: "Music & Performing Arts",
      email: "music.arts@rcmc.edu.bd",
      phone: "+88-0123457401",
      experience: "12+ years",
      qualification: "MA, M.P.Ed.",
      specialization: "Music & Dance Coordination",
      avatar: "FC",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Mr. K. M. Hassan",
      position: "Cultural Officer",
      role: "Literary & Debate Activities",
      email: "literary.arts@rcmc.edu.bd",
      phone: "+88-0123457402",
      experience: "10+ years",
      qualification: "MA, M.P.Ed.",
      specialization: "Literary Events & Debate Management",
      avatar: "KH",
      color: "from-cyan-500 to-blue-600"
    }
  ]

  const sportsActivities = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Annual Sports Meet",
      description: "Inter-college sports competitions and championships",
      participants: "500+",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Indoor Tournaments",
      description: "Badminton, Table Tennis, Chess competitions",
      participants: "200+",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Outdoor Sports",
      description: "Cricket, Football, Athletics events",
      participants: "300+",
      color: "from-green-400 to-green-600"
    }
  ]

  const culturalActivities = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music Festival",
      description: "Annual musical performances and competitions",
      participants: "400+",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Art Exhibition",
      description: "Student art showcase and competitions",
      participants: "150+",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Debate Competition",
      description: "Inter-college debate tournaments",
      participants: "100+",
      color: "from-cyan-400 to-cyan-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Animated Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-2xl animate-pulse delay-75"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse delay-150"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse delay-300"></div>
        </div>
        
        <div className="relative responsive-container-full py-20">
          <div className="max-w-4xl mx-auto text-center text-gray-800">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Sports & Cultural Committees
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Nurturing Talent Through Excellence in Sports and Arts
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800/10 backdrop-blur-md rounded-2xl p-1 inline-flex">
                <button
                  onClick={() => setActiveTab("sports")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "sports"
                      ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  <Trophy className="inline w-4 h-4 mr-2" />
                  Sports Committee
                </button>
                <button
                  onClick={() => setActiveTab("cultural")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "cultural"
                      ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  <Music className="inline w-4 h-4 mr-2" />
                  Cultural Committee
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-6xl mx-auto">
          {/* Sports Committee Tab */}
          {activeTab === "sports" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Sports Committee</h2>
                <p className="text-xl text-gray-600">Promoting physical fitness and sportsmanship</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {sportsCommittee.map((member, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-gray-300 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-xl font-bold">{member.avatar}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-gray-700 mb-1">{member.position}</p>
                      <p className="text-xs text-gray-500 mb-3">{member.role}</p>
                      
                      <div className="space-y-2 text-xs mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-600">{member.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-600">{member.phone}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-300">
                        <p className="text-xs text-gray-500 mb-1">Experience: {member.experience}</p>
                        <p className="text-xs text-gray-500 mb-1">Qualification: {member.qualification}</p>
                        <p className="text-xs text-gray-500">Specialization: {member.specialization}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sports Activities */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Sports Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {sportsActivities.map((activity, index) => (
                    <Card key={index} className="bg-white/80 backdrop-blur-md border border-gray-300 hover:bg-white/90 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                          {activity.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                        <div className="text-2xl font-bold text-gray-800">{activity.participants}+ Participants</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Cultural Committee Tab */}
          {activeTab === "cultural" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Cultural Committee</h2>
                <p className="text-xl text-gray-600">Celebrating creativity and cultural diversity</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {culturalCommittee.map((member, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-gray-300 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-xl font-bold">{member.avatar}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-gray-700 mb-1">{member.position}</p>
                      <p className="text-xs text-gray-500 mb-3">{member.role}</p>
                      
                      <div className="space-y-2 text-xs mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-600">{member.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-600">{member.phone}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-300">
                        <p className="text-xs text-gray-500 mb-1">Experience: {member.experience}</p>
                        <p className="text-xs text-gray-500 mb-1">Qualification: {member.qualification}</p>
                        <p className="text-xs text-gray-500">Specialization: {member.specialization}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Cultural Activities */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Cultural Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {culturalActivities.map((activity, index) => (
                    <Card key={index} className="bg-white/80 backdrop-blur-md border border-gray-300 hover:bg-white/90 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                          {activity.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                        <div className="text-2xl font-bold text-gray-800">{activity.participants}+ Participants</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-md border border-gray-300">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Committees</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For sports events, cultural activities, or committee inquiries, please contact us through the following channels:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Office Location</h3>
                      <p className="text-gray-600 text-sm">Student Activity Center</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Committee Phone</h3>
                      <p className="text-gray-600 text-sm">+88-0123457300</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Committee Email</h3>
                      <p className="text-gray-600 text-sm">committees@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-white/60 rounded-lg max-w-2xl mx-auto backdrop-blur-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                  <p className="text-gray-600">Sunday - Thursday: 10:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Friday: 2:00 PM - 8:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
