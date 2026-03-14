"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  User, 
  Shield, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Award, 
  CheckCircle, 
  Building, 
  MapPin, 
  Crown,
  Star,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookOpen,
  Coffee,
  Heart,
  Target,
  Lightbulb,
  Settings,
  Zap,
  TrendingUp,
  Eye,
  FileText,
  Download,
  Upload,
  MessageSquare,
  Activity,
  HandHelping,
  UserCheck,
  UserPlus,
  Users2,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Calendar as CalendarIcon,
  GraduationCap,
  Briefcase,
  Stethoscope,
  HeartPulse,
  Microscope,
  TestTube,
  Brain,
  FileCheck,
  Clipboard,
  Award as AwardIcon
} from "lucide-react"

export default function RMCCommitteePage() {
  const [expandedDepartments, setExpandedDepartments] = useState<{[key: string]: boolean}>({})

  const committeeInfo = {
    name: "Research Management Committee (RMC)",
    tagline: "Advancing medical research excellence and innovation",
    established: "2018",
    chairman: "Dr. Elizabeth Thompson",
    members: "18+",
    description: "The Research Management Committee is dedicated to promoting and facilitating high-quality medical research, ensuring ethical standards, and fostering innovation in medical education and healthcare.",
    mission: "To cultivate a vibrant research ecosystem that advances medical knowledge, supports innovative discoveries, and enhances healthcare outcomes through rigorous scientific inquiry."
  }

  const quickStats = [
    {
      icon: <Microscope className="w-6 h-6" />,
      value: "150+",
      label: "Research Projects",
      description: "Active research initiatives",
      color: "text-blue-600"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      value: "80+",
      label: "Publications",
      description: "Peer-reviewed papers",
      color: "text-green-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "95%",
      label: "Grant Success",
      description: "Funding acquisition rate",
      color: "text-orange-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.8",
      label: "Impact Score",
      description: "Research quality rating",
      color: "text-purple-600"
    }
  ]

  const organizationalStructure = [
    {
      id: "leadership",
      title: "Leadership Team",
      icon: <Crown className="w-8 h-8 text-blue-500" />,
      description: "Executive leadership and strategic research direction",
      members: [
        {
          name: "Dr. Elizabeth Thompson",
          role: "Chairperson",
          image: "https://picsum.photos/seed/elizabeth-thompson/200/200.jpg",
          email: "elizabeth.thompson@college.edu",
          phone: "+1 234-567-8911",
          responsibilities: ["Overall research leadership", "Strategic planning", "Policy formulation", "Quality assurance", "External collaborations"],
          qualifications: ["MD, PhD in Medical Research", "22+ years experience", "Fellow of Royal Society", "Certified Research Administrator"],
          office: "Room 201, Research Building",
          hours: "9:00 AM - 6:00 PM"
        },
        {
          name: "Dr. Robert Martinez",
          role: "Vice Chairperson",
          image: "https://picsum.photos/seed/robert-martinez/200/200.jpg",
          email: "robert.martinez@college.edu",
          phone: "+1 234-567-8912",
          responsibilities: ["Research coordination", "Grant management", "Ethics oversight", "Faculty mentoring", "Publication support"],
          qualifications: ["MD, MSc in Clinical Research", "18+ years experience", "IRB Certified", "Grant Writing Expert"],
          office: "Room 202, Research Building",
          hours: "10:00 AM - 7:00 PM"
        }
      ]
    },
    {
      id: "clinical",
      title: "Clinical Research",
      icon: <Stethoscope className="w-8 h-8 text-green-500" />,
      description: "Clinical trials and patient-centered research",
      members: [
        {
          name: "Dr. Sarah Johnson",
          role: "Clinical Research Coordinator",
          image: "https://picsum.photos/seed/sarah-johnson/200/200.jpg",
          email: "sarah.johnson@college.edu",
          phone: "+1 234-567-8913",
          responsibilities: ["Clinical trial management", "Patient recruitment", "Data collection", "Safety monitoring", "Regulatory compliance"],
          qualifications: ["MD, MPH", "15+ years experience", "GCP Certified", "Clinical Research Coordinator"],
          office: "Room 301, Research Building",
          hours: "8:00 AM - 6:00 PM"
        },
        {
          name: "Dr. Michael Chen",
          role: "Biostatistics Lead",
          image: "https://picsum.photos/seed/michael-chen/200/200.jpg",
          email: "michael.chen@college.edu",
          phone: "+1 234-567-8914",
          responsibilities: ["Statistical analysis", "Study design", "Data interpretation", "Sample size calculation", "Power analysis"],
          qualifications: ["MD, PhD in Biostatistics", "12+ years experience", "Certified Biostatistician", "SAS Expert"],
          office: "Room 302, Research Building",
          hours: "9:00 AM - 5:00 PM"
        }
      ]
    },
    {
      id: "basic",
      title: "Basic Science Research",
      icon: <Microscope className="w-8 h-8 text-purple-500" />,
      description: "Fundamental medical science investigations",
      members: [
        {
          name: "Dr. Amanda Foster",
          role: "Basic Science Research Head",
          image: "https://picsum.photos/seed/amanda-foster/200/200.jpg",
          email: "amanda.foster@college.edu",
          phone: "+1 234-567-8915",
          responsibilities: ["Laboratory research", "Molecular studies", "Cell culture", "Animal studies", "Basic science mentoring"],
          qualifications: ["MD, PhD in Molecular Biology", "20+ years experience", "Cell Biology Expert", "Published Researcher"],
          office: "Room 401, Research Building",
          hours: "8:00 AM - 8:00 PM"
        },
        {
          name: "Dr. David Kim",
          role: "Laboratory Manager",
          image: "https://picsum.photos/seed/david-kim/200/200.jpg",
          email: "david.kim@college.edu",
          phone: "+1 234-567-8916",
          responsibilities: ["Lab operations", "Equipment maintenance", "Safety protocols", "Reagent management", "Quality control"],
          qualifications: ["MD, MSc in Laboratory Medicine", "10+ years experience", "Lab Safety Certified", "Equipment Specialist"],
          office: "Room 402, Research Building",
          hours: "9:00 AM - 6:00 PM"
        }
      ]
    },
    {
      id: "ethics",
      title: "Research Ethics",
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      description: "Ethical oversight and compliance",
      members: [
        {
          name: "Dr. Patricia Williams",
          role: "IRB Chairperson",
          image: "https://picsum.photos/seed/patricia-williams/200/200.jpg",
          email: "patricia.williams@college.edu",
          phone: "+1 234-567-8917",
          responsibilities: ["Ethics review", "Protocol approval", "Risk assessment", "Informed consent", "Compliance monitoring"],
          qualifications: ["MD, LLM in Bioethics", "16+ years experience", "IRB Certified", "Bioethics Expert"],
          office: "Room 501, Research Building",
          hours: "9:00 AM - 6:00 PM"
        },
        {
          name: "Dr. James Anderson",
          role: "Research Compliance Officer",
          image: "https://picsum.photos/seed/james-anderson/200/200.jpg",
          email: "james.anderson@college.edu",
          phone: "+1 234-567-8918",
          responsibilities: ["Regulatory compliance", "Audit preparation", "Documentation", "Training programs", "Policy development"],
          qualifications: ["MD, MPH in Public Health", "14+ years experience", "Compliance Specialist", "Regulatory Expert"],
          office: "Room 502, Research Building",
          hours: "8:00 AM - 5:00 PM"
        }
      ]
    },
    {
      id: "funding",
      title: "Grant Management",
      icon: <Award className="w-8 h-8 text-red-500" />,
      description: "Research funding and financial management",
      members: [
        {
          name: "Dr. Linda Brown",
          role: "Grant Development Manager",
          image: "https://picsum.photos/seed/linda-brown/200/200.jpg",
          email: "linda.brown@college.edu",
          phone: "+1 234-567-8919",
          responsibilities: ["Grant writing", "Funding strategy", "Budget development", "Proposal review", "Funder relations"],
          qualifications: ["MD, MBA", "18+ years experience", "Grant Writing Certified", "Funding Expert"],
          office: "Room 601, Research Building",
          hours: "8:00 AM - 6:00 PM"
        },
        {
          name: "Dr. Thomas Garcia",
          role: "Financial Analyst",
          image: "https://picsum.photos/seed/thomas-garcia/200/200.jpg",
          email: "thomas.garcia@college.edu",
          phone: "+1 234-567-8920",
          responsibilities: ["Budget management", "Financial reporting", "Cost analysis", "Audit support", "Resource allocation"],
          qualifications: ["MD, MSc in Finance", "12+ years experience", "Financial Analyst", "Budget Expert"],
          office: "Room 602, Research Building",
          hours: "9:00 AM - 5:00 PM"
        }
      ]
    }
  ]

  const currentProjects = [
    {
      title: "COVID-19 Long-term Effects Study",
      description: "Comprehensive study on post-COVID complications and recovery patterns",
      duration: "24 months",
      participants: "500 patients",
      coordinator: "Dr. Sarah Johnson",
      status: "Ongoing"
    },
    {
      title: "Novel Cancer Immunotherapy Research",
      description: "Investigating new immunotherapeutic approaches for solid tumors",
      duration: "36 months",
      participants: "200 patients",
      coordinator: "Dr. Amanda Foster",
      status: "Active"
    },
    {
      title: "Diabetes Prevention Program",
      description: "Community-based intervention for diabetes prevention and management",
      duration: "18 months",
      participants: "1000 participants",
      coordinator: "Dr. Michael Chen",
      status: "Recruiting"
    },
    {
      title: "Mental Health in Medical Students",
      description: "Study on stress, burnout, and coping mechanisms in medical education",
      duration: "12 months",
      participants: "300 students",
      coordinator: "Dr. Patricia Williams",
      status: "Planning"
    }
  ]

  const achievements = [
    {
      title: "Excellence in Research Award",
      year: "2023",
      description: "National recognition for outstanding research contributions",
      category: "Institutional"
    },
    {
      title: "Breakthrough Discovery",
      year: "2023",
      description: "Novel treatment approach for rare disease published in Nature Medicine",
      category: "Research"
    },
    {
      title: "Grant Success Record",
      year: "2023",
      description: "$5M+ in research funding secured from national agencies",
      category: "Funding"
    },
    {
      title: "Publication Excellence",
      year: "2023",
      description: "80+ peer-reviewed publications in high-impact journals",
      category: "Academic"
    }
  ]

  const toggleDepartment = (departmentId: string) => {
    setExpandedDepartments(prev => ({
      ...prev,
      [departmentId]: !prev[departmentId]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="text-center text-gray-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Microscope className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-700">{committeeInfo.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90 text-gray-600">
                {committeeInfo.tagline}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{committeeInfo.established}</div>
                <div className="text-lg font-medium text-gray-500">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{committeeInfo.chairman}</div>
                <div className="text-lg font-medium text-gray-500">Chairperson</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{committeeInfo.members}</div>
                <div className="text-lg font-medium text-gray-500">Members</div>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Research Impact</h2>
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

      {/* Organizational Structure */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Organizational Structure</h2>
          <div className="space-y-6">
            {organizationalStructure.map((department) => (
              <Card key={department.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleDepartment(department.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        {department.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{department.title}</h3>
                        <p className="text-sm text-gray-600">{department.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">
                        {department.members.length} members
                      </Badge>
                      {expandedDepartments[department.id] ? 
                        <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      }
                    </div>
                  </div>
                </CardHeader>
                
                {expandedDepartments[department.id] && (
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {department.members.map((member, index) => (
                        <Card key={index} className="border-0 bg-gray-50 hover:bg-gray-100 transition-colors">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                              <img 
                                src={member.image} 
                                alt={member.name}
                                className="w-16 h-16 rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h4>
                                <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
                                
                                <div className="space-y-2 text-sm text-gray-600">
                                  <div className="flex items-center gap-2">
                                    <MailIcon className="w-4 h-4" />
                                    <span>{member.email}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <PhoneIcon className="w-4 h-4" />
                                    <span>{member.phone}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{member.office}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{member.hours}</span>
                                  </div>
                                </div>
                                
                                <div className="mt-3">
                                  <p className="font-medium text-gray-800 mb-1">Key Responsibilities:</p>
                                  <div className="flex flex-wrap gap-1">
                                    {member.responsibilities.map((resp, respIndex) => (
                                      <Badge key={respIndex} variant="outline" className="text-xs">
                                        {resp}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="mt-3">
                                  <p className="font-medium text-gray-800 mb-1">Qualifications:</p>
                                  <div className="flex flex-wrap gap-1">
                                    {member.qualifications.map((qual, qualIndex) => (
                                      <Badge key={qualIndex} variant="secondary" className="text-xs">
                                        {qual}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Current Projects */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Current Research Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentProjects.map((project, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Microscope className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-700 mb-3">{project.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{project.participants}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-sm text-gray-600">Coordinator: </span>
                          <span className="text-sm font-medium text-gray-800">{project.coordinator}</span>
                        </div>
                        <Badge 
                          variant={project.status === "Active" ? "default" : "outline"}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Research Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AwardIcon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{achievement.year}</p>
                  <p className="text-sm text-gray-700 mb-3">{achievement.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {achievement.category}
                  </Badge>
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
                <Heart className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {committeeInfo.mission}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
