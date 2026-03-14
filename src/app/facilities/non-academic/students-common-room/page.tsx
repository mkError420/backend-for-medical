"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Clock, Calendar, Target, Lightbulb, Star, Coffee, Heart, CheckCircle, BookOpen, Building, MapPin, Phone, Mail, Activity, Shield, Settings, Wifi, Car, Monitor, User, TrendingUp, ChevronRight, ArrowRight, Gamepad2, Music, Pizza, Dumbbell, Tv, Headphones, Utensils, Laptop, Smartphone, Tablet, Smile, Zap, Trophy, Medal, Flag, MessageCircle, Share2, Download, Upload, Eye, FileText, Search, Menu, X, Volume2, Video, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Mic, MicOff, VideoOff, Share, Link, ExternalLink, Copy, Clipboard, Save, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, Play } from "lucide-react"

export default function StudentsCommonRoomPage() {
  const [activeSection, setActiveSection] = useState('overview')

  const commonRoomInfo = {
    name: "Students Common Room",
    tagline: "A vibrant hub for student life, learning, and leisure",
    established: "2018",
    coordinator: "Ms. Jennifer Smith",
    students: 500,
    description: "The Students Common Room is a dynamic space designed to foster student engagement, collaboration, and relaxation. This modern facility provides a perfect blend of academic support, recreational activities, and social interaction opportunities for our diverse student community.",
    mission: "To create an inclusive and supportive environment that enhances student life, promotes academic success, and builds lasting friendships through diverse activities and services."
  }

  const quickStats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "500+",
      label: "Students",
      description: "Active student members",
      color: "text-blue-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "24/7",
      label: "Access",
      description: "Round-the-clock availability",
      color: "text-green-600"
    },
    {
      icon: <Building className="w-6 h-6" />,
      value: "8",
      label: "Activity Zones",
      description: "Specialized areas",
      color: "text-purple-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "95%",
      label: "Satisfaction",
      description: "Student approval rate",
      color: "text-orange-600"
    }
  ]

  const facilities = [
    {
      name: "Study & Learning Zone",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      description: "Quiet and collaborative study spaces with modern learning resources",
      features: ["Study cubicles", "Group tables", "Whiteboards", "Reference books", "Power outlets", "High-speed WiFi"],
      capacity: "80 students",
      hours: "24/7 access"
    },
    {
      name: "Gaming & Entertainment Area",
      icon: <Gamepad2 className="w-8 h-8 text-purple-500" />,
      description: "Modern gaming consoles and entertainment systems for leisure activities",
      features: ["Gaming consoles", "VR headsets", "Board games", "Card games", "Tournament space", "Streaming setup"],
      capacity: "30 students",
      hours: "10:00 AM - 10:00 PM"
    },
    {
      name: "Relaxation Lounge",
      icon: <Coffee className="w-8 h-8 text-amber-500" />,
      description: "Comfortable seating area for relaxation and informal gatherings",
      features: ["Comfortable sofas", "Coffee bar", "Snack vending", "Music system", "Reading corner", "Charging stations"],
      capacity: "40 students",
      hours: "24/7 access"
    },
    {
      name: "Fitness & Wellness Corner",
      icon: <Dumbbell className="w-8 h-8 text-green-500" />,
      description: "Compact fitness area with basic exercise equipment and wellness resources",
      features: ["Exercise equipment", "Yoga mats", "Meditation space", "Fitness apps", "Health resources", "Shower facilities"],
      capacity: "15 students",
      hours: "6:00 AM - 9:00 PM"
    },
    {
      name: "Tech & Innovation Hub",
      icon: <Laptop className="w-8 h-8 text-indigo-500" />,
      description: "Technology center with computers, printers, and innovation tools",
      features: ["Computers", "3D printer", "Printing services", "Scanning", "Software access", "Tech support"],
      capacity: "25 students",
      hours: "8:00 AM - 8:00 PM"
    },
    {
      name: "Creative Studio",
      icon: <Camera className="w-8 h-8 text-rose-500" />,
      description: "Space for creative activities, photography, and multimedia projects",
      features: ["Photo studio", "Video equipment", "Art supplies", "Music production", "Craft materials", "Display area"],
      capacity: "20 students",
      hours: "9:00 AM - 6:00 PM"
    },
    {
      name: "Social & Event Space",
      icon: <Users className="w-8 h-8 text-orange-500" />,
      description: "Flexible area for social events, meetings, and student activities",
      features: ["Event staging", "Audio system", "Projector", "Flexible seating", "Storage", "Decorations"],
      capacity: "100 students",
      hours: "8:00 AM - 11:00 PM"
    },
    {
      name: "Kitchen & Dining Area",
      icon: <Utensils className="w-8 h-8 text-teal-500" />,
      description: "Self-service kitchen and dining facilities for students",
      features: ["Microwave ovens", "Refrigerators", "Dining tables", "Water dispensers", "Coffee machines", "Cleaning supplies"],
      capacity: "35 students",
      hours: "7:00 AM - 10:00 PM"
    }
  ]

  const galleryItems = [
    {
      id: 1,
      type: "image",
      title: "Study Zone Interior",
      description: "Modern study spaces with comfortable seating and natural lighting",
      thumbnail: "/gallery/study-zone.jpg",
      fullImage: "/gallery/study-zone-full.jpg",
      category: "academic"
    },
    {
      id: 2,
      type: "video",
      title: "Student Activities Tour",
      description: "Virtual tour of student activities and events",
      thumbnail: "/gallery/activities-tour-thumb.jpg",
      videoUrl: "/videos/student-activities.mp4",
      duration: "3:30",
      category: "activities"
    },
    {
      id: 3,
      type: "image",
      title: "Gaming Area",
      description: "State-of-the-art gaming and entertainment facilities",
      thumbnail: "/gallery/gaming-area.jpg",
      fullImage: "/gallery/gaming-area-full.jpg",
      category: "recreation"
    },
    {
      id: 4,
      type: "video",
      title: "Student Testimonials",
      description: "What students say about their common room experience",
      thumbnail: "/gallery/testimonials-thumb.jpg",
      videoUrl: "/videos/student-testimonials.mp4",
      duration: "4:15",
      category: "testimonials"
    },
    {
      id: 5,
      type: "image",
      title: "Relaxation Lounge",
      description: "Comfortable spaces for relaxation and social interaction",
      thumbnail: "/gallery/relaxation-lounge.jpg",
      fullImage: "/gallery/relaxation-lounge-full.jpg",
      category: "wellness"
    },
    {
      id: 6,
      type: "video",
      title: "Facilities Overview",
      description: "Complete overview of all common room facilities",
      thumbnail: "/gallery/facilities-overview-thumb.jpg",
      videoUrl: "/videos/facilities-overview.mp4",
      duration: "5:45",
      category: "tour"
    },
    {
      id: 7,
      type: "image",
      title: "Creative Studio",
      description: "Creative space for artistic and multimedia projects",
      thumbnail: "/gallery/creative-studio.jpg",
      fullImage: "/gallery/creative-studio-full.jpg",
      category: "creative"
    },
    {
      id: 8,
      type: "image",
      title: "Fitness Corner",
      description: "Wellness and fitness facilities for students",
      thumbnail: "/gallery/fitness-corner.jpg",
      fullImage: "/gallery/fitness-corner-full.jpg",
      category: "fitness"
    },
    {
      id: 9,
      type: "video",
      title: "Event Highlights",
      description: "Highlights from recent student events and activities",
      thumbnail: "/gallery/event-highlights-thumb.jpg",
      videoUrl: "/videos/event-highlights.mp4",
      duration: "2:20",
      category: "events"
    }
  ]

  const activities = [
    {
      title: "Study Groups & Tutoring",
      icon: <BookOpen className="w-6 h-6" />,
      time: "6:00 PM - 8:00 PM",
      days: "Monday - Thursday",
      type: "academic",
      description: "Peer-led study groups and tutoring sessions for various subjects",
      participants: "All students"
    },
    {
      title: "Gaming Tournaments",
      icon: <Gamepad2 className="w-6 h-6" />,
      time: "7:00 PM - 9:00 PM",
      days: "Fridays",
      type: "recreational",
      description: "Weekly gaming competitions and tournaments with prizes",
      participants: "Gaming enthusiasts"
    },
    {
      title: "Movie Nights",
      icon: <Tv className="w-6 h-6" />,
      time: "8:00 PM - 10:00 PM",
      days: "Saturdays",
      type: "entertainment",
      description: "Weekly movie screenings with snacks and discussions",
      participants: "All students"
    },
    {
      title: "Workshops & Seminars",
      icon: <Lightbulb className="w-6 h-6" />,
      time: "3:00 PM - 5:00 PM",
      days: "Wednesdays",
      type: "educational",
      description: "Skill development workshops and educational seminars",
      participants: "Interested students"
    },
    {
      title: "Social Mixers",
      icon: <Users className="w-6 h-6" />,
      time: "6:00 PM - 8:00 PM",
      days: "First Friday of month",
      type: "social",
      description: "Monthly social gatherings to build community and friendships",
      participants: "All students"
    },
    {
      title: "Fitness Classes",
      icon: <Dumbbell className="w-6 h-6" />,
      time: "7:00 AM - 8:00 AM",
      days: "Monday, Wednesday, Friday",
      type: "wellness",
      description: "Morning fitness and wellness activities",
      participants: "Fitness enthusiasts"
    },
    {
      title: "Creative Workshops",
      icon: <Camera className="w-6 h-6" />,
      time: "2:00 PM - 4:00 PM",
      days: "Tuesdays",
      type: "creative",
      description: "Art, photography, and creative expression workshops",
      participants: "Creative students"
    },
    {
      title: "Career Development",
      icon: <Target className="w-6 h-6" />,
      time: "4:00 PM - 6:00 PM",
      days: "Thursdays",
      type: "professional",
      description: "Career guidance, resume workshops, and networking events",
      participants: "Career-focused students"
    }
  ]

  const community = [
    {
      name: "Ms. Jennifer Smith",
      role: "Common Room Coordinator",
      department: "Student Affairs",
      image: "/faculty/jennifer-smith.jpg",
      experience: "6 years",
      email: "jennifer.smith@rcmc.edu",
      phone: "Ext: 4501",
      research: "Student engagement, Community building, Event management",
      quote: "The common room is where friendships begin and memories are made"
    },
    {
      name: "Mr. David Johnson",
      role: "Activities Director",
      department: "Student Life",
      image: "/faculty/david-johnson.jpg",
      experience: "4 years",
      email: "david.johnson@rcmc.edu",
      phone: "Ext: 4502",
      research: "Student activities, Event planning, Leadership development",
      quote: "Great student experiences happen when we create opportunities for connection"
    },
    {
      name: "Ms. Emily Chen",
      role: "Wellness Coordinator",
      department: "Health Services",
      image: "/faculty/emily-chen.jpg",
      experience: "3 years",
      email: "emily.chen@rcmc.edu",
      phone: "Ext: 4503",
      research: "Student wellness, Mental health, Stress management",
      quote: "A healthy student is a successful student"
    },
    {
      name: "Mr. Robert Williams",
      role: "Tech Support Lead",
      department: "IT Services",
      image: "/faculty/robert-williams.jpg",
      experience: "5 years",
      email: "robert.williams@rcmc.edu",
      phone: "Ext: 4504",
      research: "Educational technology, Student tech support, Digital literacy",
      quote: "Technology should empower, not complicate, student life"
    }
  ]

  const resources = [
    {
      title: "Academic Support",
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        { name: "Study Materials", description: "Access to textbooks, notes, and study guides" },
        { name: "Tutoring Services", description: "Peer tutoring and academic assistance" },
        { name: "Online Resources", description: "Digital learning platforms and databases" },
        { name: "Exam Preparation", description: "Study groups and exam prep materials" }
      ]
    },
    {
      title: "Technology & Equipment",
      icon: <Laptop className="w-6 h-6" />,
      items: [
        { name: "Computer Access", description: "High-speed computers with essential software" },
        { name: "Printing Services", description: "Free printing and scanning facilities" },
        { name: "WiFi Access", description: "High-speed internet throughout the facility" },
        { name: "Tech Support", description: "Technical assistance and troubleshooting" }
      ]
    },
    {
      title: "Recreation & Entertainment",
      icon: <Gamepad2 className="w-6 h-6" />,
      items: [
        { name: "Gaming Systems", description: "Modern consoles and gaming equipment" },
        { name: "Movie Library", description: "Extensive collection of movies and shows" },
        { name: "Board Games", description: "Variety of board games and card games" },
        { name: "Music System", description: "Audio equipment and music streaming" }
      ]
    },
    {
      title: "Wellness & Comfort",
      icon: <Heart className="w-6 h-6" />,
      items: [
        { name: "Comfortable Seating", description: "Ergonomic chairs and relaxation areas" },
        { name: "Snack & Beverage", description: "Vending machines and coffee service" },
        { name: "Quiet Spaces", description: "Peaceful areas for relaxation and meditation" },
        { name: "Fitness Equipment", description: "Basic exercise and wellness equipment" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="text-center text-white">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-700">{commonRoomInfo.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90 text-gray-600">
                {commonRoomInfo.tagline}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{commonRoomInfo.established}</div>
                <div className="text-lg font-medium text-gray-500">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{commonRoomInfo.coordinator}</div>
                <div className="text-lg font-medium text-gray-500">Coordinator</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-700 mb-2">{commonRoomInfo.students}</div>
                <div className="text-lg font-medium text-gray-500">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-700 mb-2">8</div>
                <div className="text-lg font-medium text-gray-500">Activity Zones</div>
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
                  <div className="mb-4 text-blue-500">
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
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        {facility.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.name}</h3>
                        <p className="text-gray-600 mb-4">{facility.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {facility.features.map((feature, featureIndex) => (
                            <span key={featureIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-semibold">Capacity:</span>
                            <span>{facility.capacity}</span>
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

          {/* Gallery Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Gallery & Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map(item => (
                <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <div className="absolute top-2 right-2">
                        {item.type === "video" ? (
                          <Badge className="bg-red-500 text-white">
                            <Video className="w-3 h-3 mr-1" />
                            {item.duration}
                          </Badge>
                        ) : (
                          <Badge className="bg-blue-500 text-white">
                            <Image className="w-3 h-3 mr-1" />
                            Image
                          </Badge>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        {item.type === "video" ? (
                          <Button className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-4">
                            <Play className="w-6 h-6" />
                          </Button>
                        ) : (
                          <Button className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-4">
                            <Eye className="w-6 h-6" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <Button variant="outline" size="sm">
                          {item.type === "video" ? "Watch Video" : "View Image"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Staff & Leadership</h2>
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
                        <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                        <p className="text-sm text-gray-500 mb-1">{member.department} • {member.experience} years</p>
                        <p className="text-sm text-gray-500 mb-4">{member.research}</p>
                        <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600 mb-4">
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
                  <Shield className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {commonRoomInfo.mission}
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
