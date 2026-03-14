"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  TrendingUp, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Award, 
  CheckCircle, 
  DollarSign, 
  PiggyBank, 
  FileText, 
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
  Heart,
  Calculator,
  CreditCard,
  Briefcase,
  GraduationCap,
  HandHelping,
  AlertCircle,
  BookOpen,
  Calendar as CalendarIcon,
  Phone as PhoneIcon,
  Mail as MailIcon
} from "lucide-react"

export default function FinancialSupportPage() {
  const [activeService, setActiveService] = useState('aid')

  const financialSupportInfo = {
    name: "Financial Support Services",
    tagline: "Empowering students through financial assistance and education",
    established: "2014",
    director: "Mr. Robert Martinez",
    staff: 12,
    description: "The Financial Support Services provides comprehensive financial assistance, education, and resources to help students manage their finances effectively and achieve their educational goals without financial burden.",
    mission: "To ensure that no student is denied educational opportunities due to financial constraints, and to promote financial literacy and independence among our student community."
  }

  const quickStats = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      value: "$2.5M+",
      label: "Annual Aid",
      description: "Financial assistance distributed yearly",
      color: "text-green-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "8,000+",
      label: "Students Helped",
      description: "Students receiving financial support",
      color: "text-blue-600"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      value: "94%",
      label: "Retention",
      description: "Students completing their education",
      color: "text-purple-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.6",
      label: "Satisfaction",
      description: "Student satisfaction rating",
      color: "text-orange-600"
    }
  ]

  const services = [
    {
      id: "aid",
      name: "Financial Aid",
      icon: <PiggyBank className="w-8 h-8 text-green-500" />,
      description: "Comprehensive financial assistance programs for eligible students",
      features: ["Need-based grants", "Merit scholarships", "Emergency funds", "Work-study programs", "Loan counseling", "Grant writing assistance"],
      hours: "8:00 AM - 6:00 PM",
      staff: "8 financial aid counselors"
    },
    {
      id: "scholarships",
      name: "Scholarship Programs",
      icon: <Award className="w-8 h-8 text-blue-500" />,
      description: "Merit-based and need-based scholarship opportunities",
      features: ["Academic scholarships", "Athletic scholarships", "Departmental awards", "External scholarships", "Application assistance", "Essay writing support"],
      hours: "9:00 AM - 5:00 PM",
      staff: "6 scholarship coordinators"
    },
    {
      id: "workstudy",
      name: "Work-Study Programs",
      icon: <Briefcase className="w-8 h-8 text-purple-500" />,
      description: "On-campus and off-campus employment opportunities for students",
      features: ["On-campus jobs", "Federal work-study", "Internship placement", "Career services", "Job search assistance", "Resume building"],
      hours: "8:00 AM - 8:00 PM",
      staff: "5 employment coordinators"
    },
    {
      id: "emergency",
      name: "Emergency Assistance",
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      description: "Rapid financial assistance for urgent student needs",
      features: ["Emergency loans", "Crisis grants", "Housing assistance", "Meal vouchers", "Transportation help", "Basic needs support"],
      hours: "24/7 Available",
      staff: "On-call emergency team"
    },
    {
      id: "literacy",
      name: "Financial Literacy",
      icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
      description: "Education and resources for smart financial management",
      features: ["Budget workshops", "Debt management", "Credit building", "Tax preparation", "Investment basics", "Financial planning tools"],
      hours: "Varies by workshop",
      staff: "4 financial educators"
    },
    {
      id: "counseling",
      name: "Financial Counseling",
      icon: <HandHelping className="w-8 h-8 text-amber-500" />,
      description: "Personalized financial guidance and planning services",
      features: ["One-on-one counseling", "Debt management plans", "Budget creation", "Savings strategies", "Financial goal setting", "Loan counseling"],
      hours: "9:00 AM - 5:00 PM",
      staff: "8 financial counselors"
    }
  ]

  const resources = [
    {
      title: "Financial Tools",
      icon: <Calculator className="w-6 h-6" />,
      items: [
        { name: "Budget Calculator", description: "Personal budget planning tool" },
        { name: "Loan Calculator", description: "Student loan payment estimator" },
        { name: "Scholarship Search", description: "Find matching opportunities" },
        { name: "Financial Planning", description: "Long-term financial goal tracker" }
      ]
    },
    {
      title: "Application Resources",
      icon: <FileText className="w-6 h-6" />,
      items: [
        { name: "FAFSA Assistance", description: "Federal student aid application help" },
        { name: "Scholarship Essays", description: "Writing guidance and review" },
        { name: "Document Templates", description: "Financial aid application forms" },
        { name: "Application Tracking", description: "Monitor application status" }
      ]
    },
    {
      title: "Emergency Support",
      icon: <HelpCircle className="w-6 h-6" />,
      items: [
        { name: "Crisis Hotline", description: "24/7 financial emergency support" },
        { name: "Emergency Grants", description: "Rapid financial assistance" },
        { name: "Resource Navigation", description: "Community financial resources" },
        { name: "Basic Needs Support", description: "Essential living expense help" }
      ]
    }
  ]

  const upcomingDeadlines = [
    {
      title: "FAFSA Application",
      date: "March 15",
      type: "federal",
      description: "Federal student aid application deadline for next academic year"
    },
    {
      title: "Spring Scholarships",
      date: "April 1",
      type: "scholarship",
      description: "Multiple scholarship opportunities with April deadlines"
    },
    {
      title: "Work-Study Registration",
      date: "April 15",
      type: "employment",
      description: "On-campus work-study program registration deadline"
    },
    {
      title: "Emergency Aid",
      date: "Ongoing",
      type: "emergency",
      description: "Emergency financial assistance available year-round"
    }
  ]

  const staff = [
    {
      name: "Mr. Robert Martinez",
      role: "Director of Financial Support",
      image: "/staff/robert-martinez.jpg",
      email: "robert.martinez@college.edu",
      phone: "+1 234-567-8901",
      expertise: ["Financial Aid Management", "Student Loans", "Scholarship Programs", "Financial Literacy"],
      bio: "Mr. Martinez leads our financial support Services with over 15 years of experience in higher education finance and student Aid administration."
    },
    {
      name: "Ms. Jennifer Lee",
      role: "Senior Financial Aid Counselor",
      image: "/staff/jennifer-lee.jpg",
      email: "jennifer.lee@college.edu",
      phone: "+1 234-567-8902",
      expertise: ["Need Analysis", "FAFSA Assistance", "Scholarship Matching", "Grant Writing"],
      bio: "Ms. Lee specializes in helping students navigate the financial aid process and maximize their funding opportunities."
    },
    {
      name: "Mr. David Brown",
      role: "Work-Study Coordinator",
      image: "/staff/david-brown.jpg",
      email: "david.brown@college.edu",
      phone: "+1 234-567-8903",
      expertise: ["Student Employment", "Job Placement", "Career Services", "Internship Programs"],
      bio: "Mr. Brown connects students with meaningful employment opportunities that support their education and career development."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="text-center text-gray-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-700">{financialSupportInfo.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90 text-gray-600">
                {financialSupportInfo.tagline}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{financialSupportInfo.established}</div>
                <div className="text-lg font-medium text-gray-500">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{financialSupportInfo.director}</div>
                <div className="text-lg font-medium text-gray-500">Director</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{financialSupportInfo.staff}</div>
                <div className="text-lg font-medium text-gray-500">Staff Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">4.6★</div>
                <div className="text-lg font-medium text-gray-500">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Financial Impact</h2>
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
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
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

      {/* Important Deadlines */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Important Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingDeadlines.map((deadline, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <CalendarIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{deadline.title}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{deadline.date}</span>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {deadline.type}
                        </Badge>
                      </div>
                      <p className="text-gray-700">{deadline.description}</p>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Financial Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 ml-3">{resource.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {resource.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-green-500 mt-0.5" />
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Financial Team</h2>
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
                      <p className="text-sm text-green-600 font-medium mb-2">{member.role}</p>
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
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {financialSupportInfo.mission}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
