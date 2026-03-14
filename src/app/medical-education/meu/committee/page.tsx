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

export default function MEUCommitteePage() {
  const [expandedDepartments, setExpandedDepartments] = useState<{[key: string]: boolean}>({})

  const committeeInfo = {
    name: "Medical Education Unit (MEU) Committee",
    tagline: "Excellence in medical education and professional development",
    established: "2015",
    chairman: "Dr. Robert Mitchell",
    members: "25+",
    description: "The Medical Education Unit Committee is dedicated to enhancing the quality of medical education through innovative teaching methods, faculty development, and continuous improvement of educational standards.",
    mission: "To foster excellence in medical education through innovative teaching methodologies, research-based practices, and continuous professional development of faculty and students."
  }

  const quickStats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "25+",
      label: "Members",
      description: "Experienced faculty members",
      color: "text-blue-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "50+",
      label: "Programs",
      description: "Educational initiatives",
      color: "text-green-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: "98%",
      label: "Success Rate",
      description: "Student satisfaction",
      color: "text-orange-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.9",
      label: "Rating",
      description: "Educational quality",
      color: "text-purple-600"
    }
  ]

  const organizationalStructure = [
    {
      id: "leadership",
      title: "Leadership Team",
      icon: <Crown className="w-8 h-8 text-blue-500" />,
      description: "Executive leadership and strategic direction",
      members: [
        {
          name: "Dr. Robert Mitchell",
          role: "Chairman",
          image: "https://picsum.photos/seed/robert-mitchell/200/200.jpg",
          email: "robert.mitchell@college.edu",
          phone: "+1 234-567-8901",
          responsibilities: ["Overall committee leadership", "Strategic planning", "Policy formulation", "Quality assurance", "External collaborations"],
          qualifications: ["MD, PhD in Medical Education", "25+ years experience", "Fellow of AMEE", "Certified Medical Educator"],
          office: "Room 101, MEU Building",
          hours: "9:00 AM - 6:00 PM"
        },
        {
          name: "Dr. Jennifer Adams",
          role: "Vice Chairman",
          image: "https://picsum.photos/seed/jennifer-adams/200/200.jpg",
          email: "jennifer.adams@college.edu",
          phone: "+1 234-567-8902",
          responsibilities: ["Assist Chairman", "Curriculum development", "Faculty training", "Research coordination", "Student affairs"],
          qualifications: ["MD, M.Ed", "20+ years experience", "Certified Curriculum Developer", "Educational Researcher"],
          office: "Room 102, MEU Building",
          hours: "10:00 AM - 7:00 PM"
        }
      ]
    },
    {
      id: "curriculum",
      title: "Curriculum Development",
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      description: "Design and implementation of medical curriculum",
      members: [
        {
          name: "Dr. Michael Chen",
          role: "Curriculum Coordinator",
          image: "https://picsum.photos/seed/michael-chen/200/200.jpg",
          email: "michael.chen@college.edu",
          phone: "+1 234-567-8903",
          responsibilities: ["Curriculum design", "Learning objectives", "Assessment strategies", "Educational research", "Innovation implementation"],
          qualifications: ["MD, PhD in Curriculum Development", "15+ years experience", "Curriculum Expert", "Educational Technologist"],
          office: "Room 201, MEU Building",
          hours: "8:00 AM - 6:00 PM"
        },
        {
          name: "Dr. Sarah Williams",
          role: "Assessment Specialist",
          image: "https://picsum.photos/seed/sarah-williams/200/200.jpg",
          email: "sarah.williams@college.edu",
          phone: "+1 234-567-8904",
          responsibilities: ["Assessment design", "Evaluation methods", "Quality control", "Feedback systems", "Data analysis"],
          qualifications: ["MD, MSc in Assessment", "12+ years experience", "Assessment Expert", "Data Analyst"],
          office: "Room 202, MEU Building",
          hours: "9:00 AM - 5:00 PM"
        }
      ]
    },
    {
      id: "faculty",
      title: "Faculty Development",
      icon: <GraduationCap className="w-8 h-8 text-purple-500" />,
      description: "Professional development and training for faculty",
      members: [
        {
          name: "Dr. James Wilson",
          role: "Faculty Development Coordinator",
          image: "https://picsum.photos/seed/james-wilson/200/200.jpg",
          email: "james.wilson@college.edu",
          phone: "+1 234-567-8905",
          responsibilities: ["Training programs", "Workshop organization", "Mentoring", "Performance evaluation", "Career development"],
          qualifications: ["MD, PhD in Medical Education", "18+ years experience", "Certified Trainer", "Leadership Coach"],
          office: "Room 301, MEU Building",
          hours: "8:00 AM - 8:00 PM"
        },
        {
          name: "Dr. Maria Garcia",
          role: "Educational Technology Specialist",
          image: "https://picsum.photos/seed/maria-garcia/200/200.jpg",
          email: "maria.garcia@college.edu",
          phone: "+1 234-567-8906",
          responsibilities: ["E-learning development", "Technology integration", "Digital resources", "Online assessment", "Technical support"],
          qualifications: ["MD, MS in Educational Technology", "10+ years experience", "EdTech Specialist", "Digital Learning Expert"],
          office: "Room 302, MEU Building",
          hours: "9:00 AM - 6:00 PM"
        }
      ]
    },
    {
      id: "research",
      title: "Educational Research",
      icon: <Microscope className="w-8 h-8 text-orange-500" />,
      description: "Research in medical education methodologies",
      members: [
        {
          name: "Dr. David Lee",
          role: "Research Coordinator",
          image: "https://picsum.photos/seed/david-lee/200/200.jpg",
          email: "david.lee@college.edu",
          phone: "+1 234-567-8907",
          responsibilities: ["Research planning", "Project supervision", "Publication support", "Conference organization", "Funding applications"],
          qualifications: ["MD, PhD in Educational Research", "20+ years experience", "Research Fellow", "Published Author"],
          office: "Room 401, MEU Building",
          hours: "9:00 AM - 6:00 PM"
        },
        {
          name: "Dr. Lisa Anderson",
          role: "Biostatistics Expert",
          image: "https://picsum.photos/seed/lisa-anderson/200/200.jpg",
          email: "lisa.anderson@college.edu",
          phone: "+1 234-567-8908",
          responsibilities: ["Statistical analysis", "Research methodology", "Data interpretation", "Study design", "Quality control"],
          qualifications: ["MD, PhD in Biostatistics", "15+ years experience", "Statistical Expert", "Research Consultant"],
          office: "Room 402, MEU Building",
          hours: "8:00 AM - 5:00 PM"
        }
      ]
    },
    {
      id: "quality",
      title: "Quality Assurance",
      icon: <Shield className="w-8 h-8 text-red-500" />,
      description: "Quality control and continuous improvement",
      members: [
        {
          name: "Dr. Thomas Brown",
          role: "Quality Assurance Coordinator",
          image: "https://picsum.photos/seed/thomas-brown/200/200.jpg",
          email: "thomas.brown@college.edu",
          phone: "+1 234-567-8909",
          responsibilities: ["Quality monitoring", "Accreditation support", "Compliance management", "Continuous improvement", "Reporting"],
          qualifications: ["MD, MSc in Quality Management", "18+ years experience", "Quality Auditor", "Accreditation Specialist"],
          office: "Room 501, MEU Building",
          hours: "8:00 AM - 6:00 PM"
        },
        {
          name: "Dr. Patricia Martinez",
          role: "Standards Compliance Officer",
          image: "https://picsum.photos/seed/patricia-martinez/200/200.jpg",
          email: "patricia.martinez@college.edu",
          phone: "+1 234-567-8910",
          responsibilities: ["Standards implementation", "Compliance checking", "Documentation", "Audit preparation", "Training"],
          qualifications: ["MD, LLM in Medical Law", "12+ years experience", "Compliance Expert", "Legal Advisor"],
          office: "Room 502, MEU Building",
          hours: "9:00 AM - 5:00 PM"
        }
      ]
    }
  ]

  const currentPrograms = [
    {
      title: "Advanced Teaching Methods Workshop",
      description: "Innovative teaching techniques for medical educators",
      duration: "3 days",
      participants: "50 faculty",
      coordinator: "Dr. James Wilson",
      status: "Ongoing"
    },
    {
      title: "Curriculum Review 2024",
      description: "Comprehensive review and update of medical curriculum",
      duration: "6 months",
      participants: "25 committee members",
      coordinator: "Dr. Michael Chen",
      status: "In Progress"
    },
    {
      title: "Faculty Development Program",
      description: "Continuous professional development for teaching staff",
      duration: "Year-long",
      participants: "100+ faculty",
      coordinator: "Dr. Maria Garcia",
      status: "Active"
    },
    {
      title: "Educational Research Initiative",
      description: "Research projects on medical education effectiveness",
      duration: "12 months",
      participants: "30 researchers",
      coordinator: "Dr. David Lee",
      status: "Planning"
    }
  ]

  const achievements = [
    {
      title: "Excellence in Medical Education Award",
      year: "2023",
      description: "Recognized by National Medical Council",
      category: "Institutional"
    },
    {
      title: "Best Curriculum Innovation",
      year: "2023",
      description: "Innovative teaching methodology implemented",
      category: "Academic"
    },
    {
      title: "Research Publication Record",
      year: "2023",
      description: "50+ research papers published in indexed journals",
      category: "Research"
    },
    {
      title: "Faculty Development Excellence",
      year: "2023",
      description: "Trained 200+ faculty members in advanced teaching",
      category: "Training"
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
                <GraduationCap className="w-10 h-10 text-white" />
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
                <div className="text-lg font-medium text-gray-500">Chairman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{committeeInfo.members}</div>
                <div className="text-lg font-medium text-gray-500">Members</div>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Committee Impact</h2>
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

      {/* Current Programs */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Current Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentPrograms.map((program, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{program.title}</h3>
                      <p className="text-gray-700 mb-3">{program.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{program.participants}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-sm text-gray-600">Coordinator: </span>
                          <span className="text-sm font-medium text-gray-800">{program.coordinator}</span>
                        </div>
                        <Badge 
                          variant={program.status === "Active" ? "default" : "outline"}
                          className="text-xs"
                        >
                          {program.status}
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Achievements</h2>
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
