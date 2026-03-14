"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, Calendar, Target, Lightbulb, Star, Coffee, Heart, CheckCircle, BookOpen, Building, MapPin, Phone, Mail, Activity, Shield, Settings, Wifi, Car, Monitor, User, TrendingUp, ChevronRight, ArrowRight } from "lucide-react"

export default function TeachersLoungePage() {
  const [activeSection, setActiveSection] = useState('overview')

  const loungeInfo = {
    name: "Teachers Lounge",
    tagline: "A sanctuary for faculty collaboration and wellness",
    established: "2015",
    director: "Dr. Sarah Johnson",
    faculty: 12,
    description: "The Teachers Lounge provides a comprehensive environment for faculty members to relax, collaborate, and engage in professional development activities. This state-of-the-art facility combines comfort, technology, and community to support the academic excellence and well-being of our teaching staff.",
    mission: "To create an inspiring and supportive environment that fosters innovation, collaboration, and work-life balance for our dedicated faculty members."
  }

  const quickStats = [
    {
      icon: <Coffee className="w-6 h-6" />,
      value: "24/7",
      label: "Access",
      description: "Round-the-clock availability",
      color: "text-amber-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "150+",
      label: "Faculty Members",
      description: "Active faculty members",
      color: "text-blue-600"
    },
    {
      icon: <Building className="w-6 h-6" />,
      value: "6",
      label: "Facility Zones",
      description: "Specialized areas",
      color: "text-emerald-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "98%",
      label: "Satisfaction",
      description: "Faculty approval rate",
      color: "text-purple-600"
    }
  ]

  const facilities = [
    {
      name: "Main Lounge Area",
      icon: <Coffee className="w-8 h-8 text-amber-500" />,
      description: "Spacious open-plan lounge with comfortable seating and ambient lighting",
      features: ["Comfortable sofas", "Coffee bar", "Reading nooks", "Natural lighting", "Power outlets", "WiFi access"],
      capacity: "50 persons",
      hours: "24/7 access"
    },
    {
      name: "Quiet Study Zone",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      description: "Soundproofed area designed for focused work and deep concentration",
      features: ["Individual desks", "Soundproofing", "Task lighting", "Power outlets", "USB charging", "Climate control"],
      capacity: "20 persons",
      hours: "6:00 AM - 10:00 PM"
    },
    {
      name: "Collaboration Hub",
      icon: <Users className="w-8 h-8 text-purple-500" />,
      description: "Interactive space equipped for group discussions and collaborative projects",
      features: ["Whiteboard walls", "Projector", "Flexible seating", "Video conferencing", "Presentation tools"],
      capacity: "15 persons",
      hours: "8:00 AM - 8:00 PM"
    },
    {
      name: "Wellness Corner",
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      description: "Dedicated relaxation area with stress-relief amenities",
      features: ["Massage chairs", "Meditation space", "Aromatherapy", "Calming music", "Yoga mats"],
      capacity: "10 persons",
      hours: "24/7 access"
    },
    {
      name: "Tech Station",
      icon: <Monitor className="w-8 h-8 text-indigo-500" />,
      description: "Modern technology center with computers and multimedia equipment",
      features: ["High-speed computers", "Printing services", "Scanning", "Video editing", "High-speed internet"],
      capacity: "12 persons",
      hours: "7:00 AM - 9:00 PM"
    },
    {
      name: "Outdoor Terrace",
      icon: <Wifi className="w-8 h-8 text-green-500" />,
      description: "Fresh air space with garden views and outdoor seating",
      features: ["Outdoor seating", "Garden views", "Shade coverage", "WiFi access", "Weather protection"],
      capacity: "25 persons",
      hours: "6:00 AM - 8:00 PM"
    }
  ]

  const activities = [
    {
      title: "Morning Coffee Sessions",
      icon: <Coffee className="w-6 h-6" />,
      time: "7:30 AM - 8:30 AM",
      days: "Monday - Friday",
      type: "social",
      description: "Informal gatherings over coffee to start the day with networking and community building",
      participants: "All faculty members"
    },
    {
      title: "Professional Development Workshops",
      icon: <Lightbulb className="w-6 h-6" />,
      time: "3:00 PM - 5:00 PM",
      days: "Tuesdays",
      type: "educational",
      description: "Skill enhancement and knowledge sharing sessions led by expert facilitators",
      participants: "Interested faculty"
    },
    {
      title: "Wellness Wednesday",
      icon: <Heart className="w-6 h-6" />,
      time: "12:00 PM - 1:00 PM",
      days: "Wednesdays",
      type: "wellness",
      description: "Health and wellness activities focusing on stress management and work-life balance",
      participants: "All faculty members"
    },
    {
      title: "Research Roundtable",
      icon: <Target className="w-6 h-6" />,
      time: "2:00 PM - 4:00 PM",
      days: "Thursdays",
      type: "academic",
      description: "Collaborative research discussions and feedback sessions for research-active faculty",
      participants: "Research-active faculty"
    },
    {
      title: "Social Friday",
      icon: <Star className="w-6 h-6" />,
      time: "4:00 PM - 6:00 PM",
      days: "Fridays",
      type: "social",
      description: "Relaxed social gathering to end the week with refreshments and networking",
      participants: "All faculty members"
    }
  ]

  const community = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lounge Coordinator",
      department: "Medicine",
      image: "/faculty/sarah-johnson.jpg",
      experience: "8 years",
      email: "sarah.johnson@rcmc.edu",
      phone: "Ext: 3601",
      research: "Faculty wellness programs, Community building initiatives",
      quote: "The lounge is our second home - a place where ideas flow and friendships grow"
    },
    {
      name: "Dr. Michael Chen",
      role: "Tech Support Lead",
      department: "Surgery",
      image: "/faculty/michael-chen.jpg",
      experience: "6 years",
      email: "michael.chen@rcmc.edu",
      phone: "Ext: 3602",
      research: "Educational technology integration, Digital resource management",
      quote: "Technology should enhance, not replace, human connection"
    },
    {
      name: "Dr. Lisa Anderson",
      role: "Social Activities Director",
      department: "Pediatrics",
      image: "/faculty/lisa-anderson.jpg",
      experience: "5 years",
      email: "lisa.anderson@rcmc.edu",
      phone: "Ext: 3603",
      research: "Community engagement, Event planning, Faculty wellness",
      quote: "Great teaching happens when great teachers support each other"
    },
    {
      name: "Dr. Robert Wilson",
      role: "Wellness Champion",
      department: "Psychiatry",
      image: "/faculty/robert-wilson.jpg",
      experience: "10 years",
      email: "robert.wilson@rcmc.edu",
      phone: "Ext: 3604",
      research: "Mental health, Work-life balance, Stress management",
      quote: "Taking care of ourselves enables us to better care for others"
    }
  ]

  const resources = [
    {
      title: "Comfort & Convenience",
      icon: <Coffee className="w-6 h-6" />,
      items: [
        { name: "Premium Coffee Service", description: "Fresh coffee, tea, and light refreshments available 24/7" },
        { name: "Comfortable Seating", description: "Ergonomic chairs and sofas for relaxation" },
        { name: "Climate Control", description: "Optimal temperature and air quality management" },
        { name: "High-Speed WiFi", description: "Reliable internet connection throughout the lounge" }
      ]
    },
    {
      title: "Work & Study",
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        { name: "Quiet Study Areas", description: "Soundproof spaces for focused work" },
        { name: "Collaboration Spaces", description: "Flexible areas for group discussions" },
        { name: "Tech Equipment", description: "Computers, printers, and office supplies" },
        { name: "Meeting Rooms", description: "Private spaces for meetings and discussions" }
      ]
    },
    {
      title: "Wellness & Recreation",
      icon: <Heart className="w-6 h-6" />,
      items: [
        { name: "Wellness Programs", description: "Regular stress management and health activities" },
        { name: "Recreation Area", description: "Games, books, and relaxation activities" },
        { name: "Fitness Corner", description: "Basic exercise equipment and yoga mats" },
        { name: "Outdoor Space", description: "Fresh air area with garden views" }
      ]
    },
    {
      title: "Professional Development",
      icon: <Award className="w-6 h-6" />,
      items: [
        { name: "Skill Workshops", description: "Professional development and training sessions" },
        { name: "Mentoring Programs", description: "Faculty-to-faculty mentoring opportunities" },
        { name: "Research Support", description: "Resources for research collaboration" },
        { name: "Career Counseling", description: "Career guidance and advancement support" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="flex flex-col items-center justify-center text-center text-gray-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-black/20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{loungeInfo.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90">
                {loungeInfo.tagline}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-700 mb-2">{loungeInfo.established}</div>
                <div className="text-lg font-medium">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-700 mb-2">{loungeInfo.director}</div>
                <div className="text-lg font-medium">Director</div>  
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-700 mb-2">{loungeInfo.faculty}</div>
                <div className="text-lg font-medium">Faculty Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Quick Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-amber-500">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-600">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                        {facility.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.name}</h3>
                        <p className="text-gray-600 mb-4">{facility.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {facility.features.map((feature, featureIndex) => (
                            <span key={featureIndex} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-semibold">Capacity:</span>
                            <span>{facility.capacity} persons</span>
                          </div>
                          <div>
                            <span className="font-semibold">Hours:</span>
                            <span>{facility.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Activities & Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-purple-500">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h3>
                        <p className="text-gray-600 mb-4">{activity.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                          <div>
                            <span className="font-semibold">Time:</span>
                            <span>{activity.time}</span>
                          </div>
                          <div>
                            <span className="font-semibold">Days:</span>
                            <span>{activity.days}</span>
                          </div>
                          <div>
                            <span className="font-semibold">Type:</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                              {activity.type}
                            </span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 mt-4">
                          <span className="font-semibold">Participants:</span>
                          <span>{activity.participants}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Community Leaders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {community.map((member, index) => (
                <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                        <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                        <p className="text-sm text-gray-500 mb-1">{member.department} • {member.experience} years</p>
                        <p className="text-sm text-gray-500 mb-4">{member.research}</p>
                        <blockquote className="border-l-4 border-purple-400 pl-4 italic text-gray-600 mb-4">
                          "{member.quote}"
                        </blockquote>
                        <div className="flex gap-2 mt-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="w-4 h-4" />
                            <span>{member.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="w-4 h-4" />
                            <span>{member.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Resources & Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="text-blue-500">
                        {resource.icon}
                      </div>
                      <span className="text-xl font-bold text-gray-800">{resource.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {resource.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 mb-1">{item.name}</h4>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-16">
            <Card className="border-0">
              <CardContent className="p-8 text-center">
                <div className="max-w-4xl mx-auto">
                  <Shield className="w-12 h-12 text-amber-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {loungeInfo.mission}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
