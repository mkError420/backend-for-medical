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
  Calendar as CalendarIcon
} from "lucide-react"

export default function GirlsHostelOrganogramPage() {
  const [expandedDepartments, setExpandedDepartments] = useState<{[key: string]: boolean}>({})

  const hostelInfo = {
    name: "Girls Hostel Organizational Structure",
    tagline: "Comprehensive management structure for safe and efficient hostel operations",
    established: "2012",
    warden: "Dr. Sarah Mitchell",
    capacity: "400 students",
    description: "The Girls Hostel operates under a well-defined organizational structure that ensures smooth administration, student welfare, and maintenance of high standards in hostel life and facilities with special focus on safety and security.",
    mission: "To provide a safe, supportive, and empowering living environment that fosters academic excellence, personal growth, and community development among resident female students."
  }

  const quickStats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "400+",
      label: "Residents",
      description: "Current student residents",
      color: "text-pink-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      value: "24/7",
      label: "Security",
      description: "Enhanced security coverage",
      color: "text-purple-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.9",
      label: "Satisfaction",
      description: "Student satisfaction rating",
      color: "text-orange-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "18+",
      label: "Awards",
      description: "Excellence in hostel management",
      color: "text-green-600"
    }
  ]

  const organizationalStructure = [
    {
      id: "leadership",
      title: "Leadership Team",
      icon: <Crown className="w-8 h-8 text-pink-500" />,
      description: "Top-level administration and strategic management",
      members: [
        {
          name: "Dr. Sarah Mitchell",
          role: "Chief Warden",
          image: "/staff/sarah-mitchell.jpg",
          email: "sarah.mitchell@college.edu",
          phone: "+1 234-567-8901",
          responsibilities: ["Overall hostel administration", "Women's safety initiatives", "Student discipline", "Staff supervision"],
          qualifications: ["PhD in Education Administration", "18+ years experience", "Certified Student Affairs Professional", "Women's Safety Certified"],
          office: "Room 101, Admin Block",
          hours: "9:00 AM - 6:00 PM"
        },
        {
          name: "Ms. Jennifer Davis",
          role: "Deputy Warden",
          image: "/staff/jennifer-davis.jpg",
          email: "jennifer.davis@college.edu",
          phone: "+1 234-567-8902",
          responsibilities: ["Assist Chief Warden", "Student welfare programs", "Women's empowerment activities", "Parent communication"],
          qualifications: ["Masters in Counseling", "12+ years experience", "Student Development Specialist", "Gender Studies"],
          office: "Room 102, Admin Block",
          hours: "10:00 AM - 7:00 PM"
        }
      ]
    },
    {
      id: "administrative",
      title: "Administrative Staff",
      icon: <Settings className="w-8 h-8 text-green-500" />,
      description: "Day-to-day operations and administrative support",
      members: [
        {
          name: "Ms. Emily Johnson",
          role: "Hostel Administrator",
          image: "/staff/emily-johnson.jpg",
          email: "emily.johnson@college.edu",
          phone: "+1 234-567-8903",
          responsibilities: ["Room allocation", "Fee management", "Record keeping", "Student registration", "Women's safety protocols"],
          qualifications: ["BBA in Administration", "10+ years experience", "Certified Office Manager", "Safety Training"],
          office: "Room 201, Admin Block",
          hours: "8:00 AM - 8:00 PM"
        },
        {
          name: "Ms. Patricia Brown",
          role: "Accounts Officer",
          image: "/staff/patricia-brown.jpg",
          email: "patricia.brown@college.edu",
          phone: "+1 234-567-8904",
          responsibilities: ["Fee collection", "Budget management", "Financial reporting", "Expense tracking"],
          qualifications: ["M.Com in Finance", "8+ years experience", "Certified Accountant"],
          office: "Room 202, Admin Block",
          hours: "9:00 AM - 5:00 PM"
        }
      ]
    },
    {
      id: "supervisory",
      title: "Supervisory Staff",
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      description: "Student supervision and welfare management",
      members: [
        {
          name: "Ms. Maria Garcia",
          role: "Senior Resident Warden",
          image: "/staff/maria-garcia.jpg",
          email: "maria.garcia@college.edu",
          phone: "+1 234-567-8905",
          responsibilities: ["Floor supervision", "Student discipline", "Night duty", "Emergency response", "Women's safety monitoring"],
          qualifications: ["Masters in Social Work", "15+ years experience", "Certified Counselor", "Women's Safety Training"],
          office: "Ground Floor, Hostel Block A",
          hours: "Rotational shifts"
        },
        {
          name: "Ms. Lisa Wilson",
          role: "Resident Warden",
          image: "/staff/lisa-wilson.jpg",
          email: "lisa.wilson@college.edu",
          phone: "+1 234-567-8906",
          responsibilities: ["Student mentoring", "Activity coordination", "Floor management", "Attendance tracking", "Counseling support"],
          qualifications: ["Masters in Psychology", "10+ years experience", "Student Mentor", "Crisis Intervention Certified"],
          office: "First Floor, Hostel Block A",
          hours: "2:00 PM - 10:00 PM"
        }
      ]
    },
    {
      id: "support",
      title: "Support Staff",
      icon: <HandHelping className="w-8 h-8 text-orange-500" />,
      description: "Facilities maintenance and essential services",
      members: [
        {
          name: "Ms. Nancy Martinez",
          role: "Maintenance Supervisor",
          image: "/staff/nancy-martinez.jpg",
          email: "nancy.martinez@college.edu",
          phone: "+1 234-567-8907",
          responsibilities: ["Facilities maintenance", "Repair coordination", "Safety inspections", "Equipment management"],
          qualifications: ["Diploma in Engineering", "12+ years experience", "Certified Maintenance Professional"],
          office: "Maintenance Office, Ground Floor",
          hours: "8:00 AM - 6:00 PM"
        },
        {
          name: "Ms. Barbara Thompson",
          role: "Security Supervisor",
          image: "/staff/barbara-thompson.jpg",
          email: "barbara.thompson@college.edu",
          phone: "+1 234-567-8908",
          responsibilities: ["Women's security management", "Access control", "Emergency response", "Surveillance monitoring"],
          qualifications: ["Security Training Certificate", "18+ years experience", "Licensed Security Professional", "Women's Safety Specialist"],
          office: "Security Office, Main Gate",
          hours: "24/7 Rotational"
        }
      ]
    },
    {
      id: "services",
      title: "Service Staff",
      icon: <Coffee className="w-8 h-8 text-pink-500" />,
      description: "Housekeeping and food services",
      members: [
        {
          name: "Ms. Susan Anderson",
          role: "Housekeeping Supervisor",
          image: "/staff/susan-anderson.jpg",
          email: "susan.anderson@college.edu",
          phone: "+1 234-567-8909",
          responsibilities: ["Cleaning supervision", "Room inspections", "Linen management", "Sanitation standards"],
          qualifications: ["Diploma in Hospitality", "10+ years experience", "Housekeeping Management Certificate"],
          office: "Housekeeping Office, Ground Floor",
          hours: "7:00 AM - 3:00 PM"
        },
        {
          name: "Ms. Dorothy Lee",
          role: "Mess Supervisor",
          image: "/staff/dorothy-lee.jpg",
          email: "dorothy.lee@college.edu",
          phone: "+1 234-567-8910",
          responsibilities: ["Food quality control", "Menu planning", "Kitchen management", "Nutrition standards", "Special dietary needs"],
          qualifications: ["Diploma in Food Technology", "14+ years experience", "Food Safety Certified", "Nutrition Specialist"],
          office: "Mess Office, Ground Floor",
          hours: "6:00 AM - 2:00 PM"
        }
      ]
    }
  ]

  const studentLeadership = [
    {
      title: "Hostel Council",
      icon: <Users2 className="w-6 h-6" />,
      description: "Student representative body",
      members: [
        { name: "Emma Johnson", role: "Hostel President", floor: "Block A, Floor 2" },
        { name: "Sophia Chen", role: "Cultural Secretary", floor: "Block A, Floor 3" },
        { name: "Olivia Williams", role: "Sports Secretary", floor: "Block B, Floor 1" },
        { name: "Ava Brown", role: "Discipline Committee", floor: "Block A, Floor 4" }
      ]
    },
    {
      title: "Floor Representatives",
      icon: <UserCheck className="w-6 h-6" />,
      description: "Floor-level student coordinators",
      members: [
        { name: "Isabella Lee", role: "Floor 1 Representative", floor: "Block A, Floor 1" },
        { name: "Mia Garcia", role: "Floor 2 Representative", floor: "Block A, Floor 2" },
        { name: "Charlotte Martinez", role: "Floor 3 Representative", floor: "Block A, Floor 3" },
        { name: "Amelia Thompson", role: "Floor 4 Representative", floor: "Block A, Floor 4" }
      ]
    }
  ]

  const toggleDepartment = (departmentId: string) => {
    setExpandedDepartments(prev => ({
      ...prev,
      [departmentId]: !prev[departmentId]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="text-center text-gray-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-700">{hostelInfo.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90 text-gray-600">
                {hostelInfo.tagline}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{hostelInfo.established}</div>
                <div className="text-lg font-medium text-gray-500">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{hostelInfo.warden}</div>
                <div className="text-lg font-medium text-gray-500">Chief Warden</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{hostelInfo.capacity}</div>
                <div className="text-lg font-medium text-gray-500">Capacity</div>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Hostel Operations</h2>
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
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
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

      {/* Student Leadership */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Student Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentLeadership.map((group, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      {group.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{group.title}</h3>
                      <p className="text-sm text-gray-600">{group.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {group.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <User className="w-5 h-5 text-pink-500" />
                          <div>
                            <div className="font-medium text-gray-800">{member.name}</div>
                            <div className="text-sm text-gray-600">{member.role}</div>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {member.floor}
                        </Badge>
                      </div>
                    ))}
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
                <Heart className="w-12 h-12 text-pink-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {hostelInfo.mission}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
