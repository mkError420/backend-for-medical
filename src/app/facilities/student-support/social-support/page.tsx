"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Heart, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Award, 
  CheckCircle, 
  Headphones, 
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
  HandHeart,
  Users2,
  MessageCircle,
  Share2,
  Eye,
  BookOpen,
  UserCheck,
  Calendar as CalendarIcon,
  Phone as PhoneIcon,
  Mail as MailIcon
} from "lucide-react"

export default function SocialSupportPage() {
  const [activeService, setActiveService] = useState('counseling')

  const socialSupportInfo = {
    name: "Social Support Services",
    tagline: "Creating a supportive community for student wellbeing and success",
    established: "2016",
    director: "Dr. Maria Thompson",
    staff: 18,
    description: "The Social Support Services provides comprehensive emotional, social, and personal support to help students thrive in their college experience. We offer a safe, inclusive environment where students can access resources, build connections, and develop essential life skills.",
    mission: "To foster student wellbeing through compassionate support, community building, and programs that promote personal growth and social development."
  }

  const quickStats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "3,000+",
      label: "Students Served",
      description: "Active social support recipients",
      color: "text-blue-600"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      value: "92%",
      label: "Wellbeing",
      description: "Students reporting improved wellbeing",
      color: "text-green-600"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      value: "150+",
      label: "Monthly Events",
      description: "Social and wellness activities",
      color: "text-purple-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.7",
      label: "Satisfaction",
      description: "Student satisfaction rating",
      color: "text-orange-600"
    }
  ]

  const services = [
    {
      id: "counseling",
      name: "Personal Counseling",
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      description: "Professional counseling services for personal and academic challenges",
      features: ["Individual sessions", "Group therapy", "Crisis intervention", "Mental health resources", "Confidential support", "Referral services"],
      hours: "9:00 AM - 6:00 PM",
      staff: "8 licensed counselors"
    },
    {
      id: "wellness",
      name: "Wellness Programs",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      description: "Holistic wellness activities and health promotion programs",
      features: ["Stress management", "Mindfulness sessions", "Fitness activities", "Nutrition workshops", "Sleep hygiene", "Self-care strategies"],
      hours: "Varies by program",
      staff: "6 wellness coordinators"
    },
    {
      id: "peer",
      name: "Peer Support",
      icon: <Users2 className="w-8 h-8 text-purple-500" />,
      description: "Student-to-student support network and mentoring programs",
      features: ["Peer counseling", "Support groups", "Mentorship matching", "Student ambassadors", "Crisis buddies", "Community building"],
      hours: "10:00 AM - 8:00 PM",
      staff: "50+ peer supporters"
    },
    {
      id: "emergency",
      name: "Emergency Support",
      icon: <Shield className="w-8 h-8 text-red-500" />,
      description: "24/7 crisis intervention and emergency assistance services",
      features: ["Crisis hotline", "Emergency counseling", "Safety planning", "Resource connection", "Follow-up care", "Emergency housing"],
      hours: "24/7 Available",
      staff: "On-call emergency team"
    },
    {
      id: "community",
      name: "Community Building",
      icon: <Users className="w-8 h-8 text-green-500" />,
      description: "Programs and activities to build inclusive campus community",
      features: ["Social events", "Cultural celebrations", "Inclusive programs", "Community service", "Leadership development", "Campus initiatives"],
      hours: "Varies by event",
      staff: "12 community coordinators"
    },
    {
      id: "financial",
      name: "Financial Wellness",
      icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
      description: "Financial counseling and basic needs support for students",
      features: ["Budget counseling", "Emergency funds", "Scholarship guidance", "Work-study programs", "Financial literacy", "Resource navigation"],
      hours: "9:00 AM - 5:00 PM",
      staff: "5 financial advisors"
    }
  ]

  const upcomingEvents = [
    {
      title: "Mental Health Awareness Week",
      date: "March 15-19",
      time: "All Day",
      location: "Campus Center",
      type: "wellness",
      description: "Week-long series of workshops and activities promoting mental health awareness"
    },
    {
      title: "Peer Support Mixer",
      date: "March 22",
      time: "6:00 PM - 8:00 PM",
      location: "Student Lounge",
      type: "social",
      description: "Casual networking event to connect with peer supporters"
    },
    {
      title: "Stress Management Workshop",
      date: "March 25",
      time: "2:00 PM - 4:00 PM",
      location: "Wellness Center",
      type: "workshop",
      description: "Learn effective stress management techniques and coping strategies"
    },
    {
      title: "Community Service Day",
      date: "April 2",
      time: "9:00 AM - 5:00 PM",
      location: "Various Locations",
      type: "community",
      description: "Campus-wide community service projects and volunteer opportunities"
    }
  ]

  const resources = [
    {
      title: "Crisis Support",
      icon: <Phone className="w-6 h-6" />,
      items: [
        { name: "24/7 Hotline", description: "Round-the-clock crisis support line" },
        { name: "Emergency Contacts", description: "Immediate assistance contacts" },
        { name: "Safety Resources", description: "Personal safety planning tools" },
        { name: "Crisis Counseling", description: "Emergency mental health services" }
      ]
    },
    {
      title: "Wellness Resources",
      icon: <Heart className="w-6 h-6" />,
      items: [
        { name: "Mental Health Apps", description: "Digital wellness and meditation tools" },
        { name: "Self-Care Library", description: "Books and resources on wellbeing" },
        { name: "Fitness Programs", description: "Exercise and movement activities" },
        { name: "Nutrition Guidance", description: "Healthy eating and meal planning" }
      ]
    },
    {
      title: "Community Support",
      icon: <Users2 className="w-6 h-6" />,
      items: [
        { name: "Student Groups", description: "Various student support communities" },
        { name: "Mentorship Programs", description: "Peer-to-peer guidance opportunities" },
        { name: "Social Events", description: "Campus activities and gatherings" },
        { name: "Volunteer Opportunities", description: "Community service and involvement" }
      ]
    }
  ]

  const staff = [
    {
      name: "Dr. Maria Thompson",
      role: "Director of Social Support",
      image: "/staff/maria-thompson.jpg",
      email: "maria.thompson@college.edu",
      phone: "+1 234-567-8901",
      expertise: ["Clinical Psychology", "Student Development", "Crisis Intervention", "Program Management"],
      bio: "Dr. Thompson leads our social support services with over 12 years of experience in student mental health and wellness programs."
    },
    {
      name: "Mr. James Wilson",
      role: "Lead Counselor",
      image: "/staff/james-wilson.jpg",
      email: "james.wilson@college.edu",
      phone: "+1 234-567-8902",
      expertise: ["Individual Counseling", "Group Therapy", "Crisis Management", "Student Advocacy"],
      bio: "Mr. Wilson specializes in student counseling and crisis intervention services."
    },
    {
      name: "Ms. Priya Patel",
      role: "Wellness Coordinator",
      image: "/staff/priya-patel.jpg",
      email: "priya.patel@college.edu",
      phone: "+1 234-567-8903",
      expertise: ["Wellness Programming", "Mindfulness", "Stress Management", "Community Building"],
      bio: "Ms. Patel develops and coordinates our wellness programs and activities."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="text-center text-gray-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-700">{socialSupportInfo.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90 text-gray-600">
                {socialSupportInfo.tagline}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{socialSupportInfo.established}</div>
                <div className="text-lg font-medium text-gray-500">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{socialSupportInfo.director}</div>
                <div className="text-lg font-medium text-gray-500">Director</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{socialSupportInfo.staff}</div>
                <div className="text-lg font-medium text-gray-500">Staff Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">4.7★</div>
                <div className="text-lg font-medium text-gray-500">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Impact & Statistics</h2>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Support Services</h2>
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
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Support Resources</h2>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Support Team</h2>
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
                      <p className="text-sm text-pink-600 font-medium mb-2">{member.role}</p>
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
                <HandHeart className="w-12 h-12 text-pink-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {socialSupportInfo.mission}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
