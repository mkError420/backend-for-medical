"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Brain, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Award, 
  CheckCircle, 
  Heart, 
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
  Smile,
  Activity,
  Headphones,
  Eye,
  BookOpen,
  UserCheck,
  Calendar as CalendarIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  AlertCircle,
  HandHeart
} from "lucide-react"

export default function PsychologicalSupportPage() {
  const [activeService, setActiveService] = useState('counseling')

  const psychologicalSupportInfo = {
    name: "Psychological Support Services",
    tagline: "Nurturing mental health and emotional wellbeing for student success",
    established: "2017",
    director: "Dr. Emily Chen",
    staff: 20,
    description: "The Psychological Support Services provides comprehensive mental health care, counseling, and wellness programs to support students' emotional and psychological wellbeing throughout their academic journey.",
    mission: "To promote mental health awareness, provide accessible psychological support, and create a campus environment where students can thrive emotionally and academically."
  }

  const quickStats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "4,500+",
      label: "Students Served",
      description: "Students receiving psychological support",
      color: "text-purple-600"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      value: "88%",
      label: "Wellbeing",
      description: "Students reporting improved mental health",
      color: "text-pink-600"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      value: "24/7",
      label: "Crisis Support",
      description: "Round-the-clock emergency assistance",
      color: "text-red-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.8",
      label: "Satisfaction",
      description: "Student satisfaction rating",
      color: "text-blue-600"
    }
  ]

  const services = [
    {
      id: "counseling",
      name: "Individual Counseling",
      icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
      description: "Confidential one-on-one counseling with licensed mental health professionals",
      features: ["Personal therapy sessions", "Mental health assessment", "Treatment planning", "Progress monitoring", "Referral services", "Follow-up care"],
      hours: "9:00 AM - 6:00 PM",
      staff: "12 licensed counselors"
    },
    {
      id: "group",
      name: "Group Therapy",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: "Therapeutic group sessions for shared experiences and mutual support",
      features: ["Support groups", "Skill-building workshops", "Peer support", "Group counseling", "Therapeutic activities", "Community building"],
      hours: "Varies by group",
      staff: "8 group facilitators"
    },
    {
      id: "crisis",
      name: "Crisis Intervention",
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      description: "24/7 emergency mental health support and crisis management",
      features: ["Crisis hotline", "Emergency counseling", "Safety planning", "Risk assessment", "Immediate intervention", "Emergency referrals"],
      hours: "24/7 Available",
      staff: "On-call crisis team"
    },
    {
      id: "wellness",
      name: "Mental Wellness",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      description: "Preventative mental health programs and wellness activities",
      features: ["Stress management", "Mindfulness training", "Resilience building", "Self-care workshops", "Mental health education", "Wellness coaching"],
      hours: "Varies by program",
      staff: "6 wellness coaches"
    },
    {
      id: "assessment",
      name: "Psychological Assessment",
      icon: <Brain className="w-8 h-8 text-indigo-500" />,
      description: "Comprehensive psychological testing and evaluation services",
      features: ["Psychological testing", "ADHD assessment", "Learning disability evaluation", "Personality assessment", "Cognitive testing", "Diagnostic services"],
      hours: "8:00 AM - 5:00 PM",
      staff: "4 licensed psychologists"
    },
    {
      id: "specialized",
      name: "Specialized Support",
      icon: <Target className="w-8 h-8 text-amber-500" />,
      description: "Targeted support for specific mental health concerns and populations",
      features: ["Anxiety disorders", "Depression treatment", "Trauma recovery", "Eating disorders", "Substance abuse counseling", "LGBTQ+ support"],
      hours: "9:00 AM - 6:00 PM",
      staff: "10 specialized therapists"
    }
  ]

  const upcomingEvents = [
    {
      title: "Mental Health Awareness Week",
      date: "March 20-24",
      time: "All Day",
      location: "Campus Center",
      type: "awareness",
      description: "Week-long series of events promoting mental health awareness and destigmatization"
    },
    {
      title: "Stress Management Workshop",
      date: "March 28",
      time: "3:00 PM - 5:00 PM",
      location: "Wellness Center",
      type: "workshop",
      description: "Learn effective stress management techniques and coping strategies"
    },
    {
      title: "Group Therapy Session",
      date: "April 5",
      time: "6:00 PM - 7:30 PM",
      location: "Counseling Center",
      type: "therapy",
      description: "Support group for students dealing with academic stress and anxiety"
    },
    {
      title: "Mindfulness Meditation",
      date: "April 12",
      time: "12:00 PM - 1:00 PM",
      location: "Quiet Room",
      type: "wellness",
      description: "Guided meditation session for stress reduction and mental clarity"
    }
  ]

  const resources = [
    {
      title: "Crisis Resources",
      icon: <Phone className="w-6 h-6" />,
      items: [
        { name: "24/7 Crisis Hotline", description: "Immediate mental health crisis support" },
        { name: "Emergency Contacts", description: "Local and national crisis resources" },
        { name: "Safety Planning", description: "Personal safety planning tools" },
        { name: "Emergency Services", description: "Campus and community emergency contacts" }
      ]
    },
    {
      title: "Self-Help Tools",
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        { name: "Mental Health Apps", description: "Digital tools for self-care and support" },
        { name: "Self-Guided Therapy", description: "Online cognitive behavioral therapy tools" },
        { name: "Meditation Resources", description: "Guided meditation and mindfulness exercises" },
        { name: "Workshop Materials", description: "Handouts and resources from past workshops" }
      ]
    },
    {
      title: "Support Services",
      icon: <HandHeart className="w-6 h-6" />,
      items: [
        { name: "Peer Support", description: "Student-to-student mental health support" },
        { name: "Community Resources", description: "Local mental health services and organizations" },
        { name: "Online Support Groups", description: "Virtual support communities" },
        { name: "Family Support", description: "Resources for families and supporters" }
      ]
    }
  ]

  const staff = [
    {
      name: "Dr. Emily Chen",
      role: "Director of Psychological Services",
      image: "/staff/emily-chen.jpg",
      email: "emily.chen@college.edu",
      phone: "+1 234-567-8901",
      expertise: ["Clinical Psychology", "Crisis Intervention", "Program Development", "Mental Health Advocacy"],
      bio: "Dr. Chen leads our psychological services with over 12 years of experience in college mental health and crisis intervention."
    },
    {
      name: "Dr. Michael Roberts",
      role: "Lead Clinical Psychologist",
      image: "/staff/michael-roberts.jpg",
      email: "michael.roberts@college.edu",
      phone: "+1 234-567-8902",
      expertise: ["Individual Therapy", "Group Counseling", "Psychological Assessment", "Trauma-Informed Care"],
      bio: "Dr. Roberts specializes in evidence-based therapies and psychological assessment services."
    },
    {
      name: "Ms. Sarah Williams",
      role: "Crisis Intervention Coordinator",
      image: "/staff/sarah-williams.jpg",
      email: "sarah.williams@college.edu",
      phone: "+1 234-567-8903",
      expertise: ["Crisis Management", "Emergency Response", "Risk Assessment", "Safety Planning"],
      bio: "Ms. Williams coordinates our crisis intervention services and emergency response protocols."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="text-center text-gray-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-700">{psychologicalSupportInfo.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90 text-gray-600">
                {psychologicalSupportInfo.tagline}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{psychologicalSupportInfo.established}</div>
                <div className="text-lg font-medium text-gray-500">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{psychologicalSupportInfo.director}</div>
                <div className="text-lg font-medium text-gray-500">Director</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{psychologicalSupportInfo.staff}</div>
                <div className="text-lg font-medium text-gray-500">Staff Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">4.8★</div>
                <div className="text-lg font-medium text-gray-500">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Mental Health Impact</h2>
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
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
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
                            <CheckCircle className="w-4 h-4 text-purple-500" />
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

      {/* Upcoming Events */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <CalendarIcon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{event.description}</p>
                      <Badge variant="outline" className="mt-2">
                        {event.type}
                      </Badge>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Mental Health Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 ml-3">{resource.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {resource.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5" />
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Mental Health Team</h2>
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
                      <p className="text-sm text-purple-600 font-medium mb-2">{member.role}</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MailIcon className="w-4 h-4" />
                          <span>{member.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <PhoneIcon className="w-4 h-4" />
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
                <Brain className="w-12 h-12 text-purple-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {psychologicalSupportInfo.mission}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
