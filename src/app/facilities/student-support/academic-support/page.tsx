"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  BookOpen, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Award, 
  CheckCircle, 
  Headphones, 
  Laptop, 
  MessageSquare, 
  FileText, 
  TrendingUp, 
  Target, 
  Lightbulb, 
  Star, 
  ChevronRight,
  HelpCircle,
  User,
  MapPin,
  Globe,
  Video,
  Download,
  Upload,
  Settings,
  Shield,
  Zap,
  Coffee,
  Heart
} from "lucide-react"

export default function AcademicSupportPage() {
  const [activeService, setActiveService] = useState('tutoring')

  const academicSupportInfo = {
    name: "Academic Support Services",
    tagline: "Comprehensive academic assistance for student success",
    established: "2015",
    director: "Dr. Sarah Johnson",
    staff: 25,
    description: "The Academic Support Services provides comprehensive assistance to help students achieve their academic goals through tutoring, writing support, technology resources, and specialized programs designed to enhance learning outcomes.",
    mission: "To empower students with the academic resources, skills, and support needed to excel in their studies and achieve their full potential."
  }

  const quickStats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "5,000+",
      label: "Students Helped",
      description: "Active academic support recipients",
      color: "text-blue-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "95%",
      label: "Success Rate",
      description: "Students achieving academic goals",
      color: "text-green-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "24/7",
      label: "Availability",
      description: "Round-the-clock support access",
      color: "text-purple-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.8",
      label: "Satisfaction",
      description: "Student satisfaction rating",
      color: "text-orange-600"
    }
  ]

  const services = [
    {
      id: "tutoring",
      name: "Peer Tutoring",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: "One-on-one and group tutoring sessions with trained peer tutors",
      features: ["Subject-specific tutoring", "Study skills development", "Exam preparation", "Online and in-person options", "Flexible scheduling", "Progress tracking"],
      hours: "9:00 AM - 8:00 PM",
      staff: "50+ peer tutors"
    },
    {
      id: "writing",
      name: "Writing Center",
      icon: <FileText className="w-8 h-8 text-green-500" />,
      description: "Professional writing assistance for all academic assignments and projects",
      features: ["Essay writing help", "Research paper support", "Citation guidance", "Grammar and style review", "Thesis assistance", "Portfolio development"],
      hours: "10:00 AM - 6:00 PM",
      staff: "15 writing consultants"
    },
    {
      id: "technology",
      name: "Technology Support",
      icon: <Laptop className="w-8 h-8 text-purple-500" />,
      description: "Technical assistance and access to learning technologies",
      features: ["Computer labs", "Software training", "Technical troubleshooting", "Assistive technology", "Online learning tools", "Device lending"],
      hours: "8:00 AM - 9:00 PM",
      staff: "10 tech specialists"
    },
    {
      id: "disability",
      name: "Disability Services",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      description: "Comprehensive support for students with disabilities and special needs",
      features: ["Accessibility accommodations", "Assistive technology", "Note-taking services", "Extended test time", "Alternative formats", "Accessibility training"],
      hours: "8:00 AM - 5:00 PM",
      staff: "8 disability coordinators"
    },
    {
      id: "counseling",
      name: "Academic Counseling",
      icon: <MessageSquare className="w-8 h-8 text-indigo-500" />,
      description: "Professional guidance for academic planning and career development",
      features: ["Academic planning", "Course selection help", "Career guidance", "Study strategies", "Time management", "Goal setting"],
      hours: "9:00 AM - 5:00 PM",
      staff: "12 academic counselors"
    },
    {
      id: "workshops",
      name: "Skills Workshops",
      icon: <Lightbulb className="w-8 h-8 text-amber-500" />,
      description: "Regular workshops to develop essential academic and professional skills",
      features: ["Study techniques", "Research skills", "Presentation skills", "Time management", "Note-taking strategies", "Exam preparation"],
      hours: "Varies by workshop",
      staff: "20+ workshop facilitators"
    }
  ]

  const resources = [
    {
      title: "Online Learning Tools",
      icon: <Globe className="w-6 h-6" />,
      items: [
        { name: "Learning Management System", description: "Access course materials and assignments" },
        { name: "Virtual Tutoring Platform", description: "Connect with tutors online" },
        { name: "Digital Library Resources", description: "E-books, journals, and databases" },
        { name: "Academic Video Library", description: "Recorded lectures and tutorials" }
      ]
    },
    {
      title: "Study Materials",
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        { name: "Study Guides", description: "Comprehensive subject guides" },
        { name: "Practice Tests", description: "Self-assessment tools" },
        { name: "Writing Templates", description: "Academic paper templates" },
        { name: "Citation Tools", description: "Reference management software" }
      ]
    },
    {
      title: "Support Services",
      icon: <HelpCircle className="w-6 h-6" />,
      items: [
        { name: "24/7 Help Desk", description: "Round-the-clock academic support" },
        { name: "Peer Mentorship", description: "Student-to-student guidance" },
        { name: "Study Groups", description: "Collaborative learning opportunities" },
        { name: "Academic Coaching", description: "Personalized academic guidance" }
      ]
    }
  ]

  const staff = [
    {
      name: "Dr. Sarah Johnson",
      role: "Director of Academic Support",
      image: "/staff/sarah-johnson.jpg",
      email: "sarah.johnson@college.edu",
      phone: "+1 234-567-8901",
      expertise: ["Educational Leadership", "Student Development", "Academic Support Programs"],
      bio: "Dr. Johnson has over 15 years of experience in academic support and student services."
    },
    {
      name: "Prof. Michael Chen",
      role: "Head of Tutoring Services",
      image: "/staff/michael-chen.jpg",
      email: "michael.chen@college.edu",
      phone: "+1 234-567-8902",
      expertise: ["Mathematics", "Sciences", "Engineering Support", "Peer Tutoring Training"],
      bio: "Professor Chen leads our peer tutoring program with expertise in STEM subjects."
    },
    {
      name: "Ms. Emily Rodriguez",
      role: "Writing Center Coordinator",
      image: "/staff/emily-rodriguez.jpg",
      email: "emily.rodriguez@college.edu",
      phone: "+1 234-567-8903",
      expertise: ["Academic Writing", "Research Methods", "Composition", "Technical Writing"],
      bio: "Ms. Rodriguez specializes in helping students improve their academic writing skills."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="text-center text-gray-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-700">{academicSupportInfo.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90 text-gray-600">
                {academicSupportInfo.tagline}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{academicSupportInfo.established}</div>
                <div className="text-lg font-medium text-gray-500">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{academicSupportInfo.director}</div>
                <div className="text-lg font-medium text-gray-500">Director</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{academicSupportInfo.staff}</div>
                <div className="text-lg font-medium text-gray-500">Staff Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">4.9★</div>
                <div className="text-lg font-medium text-gray-500">Rating</div>
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
                  <div className="mb-4">
                    <div className={stat.color}>
                      {stat.icon}
                    </div>
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

      {/* Services Navigation */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {services.map(service => (
                <Button
                  key={service.id}
                  variant={activeService === service.id ? "default" : "outline"}
                  onClick={() => setActiveService(service.id)}
                  className="flex items-center gap-2"
                >
                  {service.icon}
                  {service.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.filter(service => service.id === activeService).map(service => (
              <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-semibold">Hours:</span>
                        <span>{service.hours}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Staff:</span>
                        <span>{service.staff}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Resources & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 ml-3">{resource.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {resource.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-800">{item.name}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Staff Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                      <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span>{member.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span>{member.phone}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 mb-1">Expertise:</p>
                          <div className="flex flex-wrap gap-1">
                            {member.expertise.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <Card className="border-0">
            <CardContent className="p-8 text-center">
              <div className="max-w-4xl mx-auto">
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {academicSupportInfo.mission}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
