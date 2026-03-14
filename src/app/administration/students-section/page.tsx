"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, HelpCircle } from "lucide-react"

export default function StudentsSectionPage() {
  const services = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Admission Support",
      description: "Guidance through admission process and documentation",
      contact: "admission@rcmc.edu.bd"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Academic Records",
      description: "Maintenance of academic transcripts and certificates",
      contact: "records@rcmc.edu.bd"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Examination Services",
      description: "Exam registration, scheduling, and result management",
      contact: "exams@rcmc.edu.bd"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Student Welfare",
      description: "Counseling, health services, and support programs",
      contact: "welfare@rcmc.edu.bd"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Scholarships & Aid",
      description: "Financial assistance and merit-based scholarships",
      contact: "scholarship@rcmc.edu.bd"
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Student Support",
      description: "General inquiries and problem resolution",
      contact: "support@rcmc.edu.bd"
    }
  ]

  const facilities = [
    {
      name: "Student Counseling Center",
      description: "Professional counseling services for academic and personal issues",
      hours: "9:00 AM - 5:00 PM"
    },
    {
      name: "Career Guidance Cell",
      description: "Career planning, job placement assistance, and internships",
      hours: "10:00 AM - 4:00 PM"
    },
    {
      name: "Health Services",
      description: "Medical check-ups, emergency care, and health counseling",
      hours: "24/7 Emergency"
    },
    {
      name: "Library & Study Center",
      description: "Extensive medical literature collection and study spaces",
      hours: "8:00 AM - 10:00 PM"
    }
  ]

  const guidelines = [
    "Academic Discipline and Conduct",
    "Attendance Requirements and Policies",
    "Examination Rules and Regulations",
    "Leave of Absence Procedures",
    "Code of Ethics for Medical Students",
    "Anti-Ragging Policy and Measures",
    "Grievance Redressal Mechanism",
    "Hostel Accommodation Guidelines"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Students Section</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Comprehensive Support for Student Success
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                Student First Approach
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-6xl mx-auto">
          {/* About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-2xl text-gray-800">About Students Section</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Students Section at Rangpur Community Medical College is dedicated to providing comprehensive support services to our medical students throughout their academic journey. We serve as the central hub for all student-related administrative and support functions, ensuring that our students can focus on their studies while we handle the administrative aspects.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Our team is committed to creating a supportive, inclusive, and enriching environment that fosters academic excellence, personal growth, and professional development. We understand the unique challenges faced by medical students and have designed our services to address their specific needs effectively.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      From admission to graduation, the Students Section is your trusted partner in navigating the various aspects of medical education, ensuring a smooth and successful academic experience at RCMC.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Functions Card */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
                    <p className="text-gray-600 text-sm">
                      To provide exceptional student services that support academic excellence and holistic development.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Student Welfare</h3>
                    <p className="text-gray-600 text-sm">
                      Ensuring student well-being, safety, and success through comprehensive support programs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Student Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Student Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                        <div className="flex items-center space-x-2 text-xs text-blue-600">
                          <Mail className="w-3 h-3" />
                          <span>{service.contact}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Student Facilities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Student Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.name}</h3>
                        <p className="text-gray-600 mb-3">{facility.description}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{facility.hours}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Student Guidelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
                <CardTitle className="text-2xl text-gray-800">Student Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {guidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-2xl text-gray-800">Important Information</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Academic Calendar</h4>
                    <p className="text-gray-700 text-sm">Download the latest academic calendar for important dates and deadlines.</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Fee Structure</h4>
                    <p className="text-gray-700 text-sm">View detailed fee structure and payment schedules for all programs.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Hostel Information</h4>
                    <p className="text-gray-700 text-sm">Complete information about hostel facilities and accommodation.</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Emergency Contacts</h4>
                    <p className="text-gray-700 text-sm">Important contact numbers for emergencies and urgent matters.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistics */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Student Support Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1200+</div>
                  <div className="text-gray-700 font-semibold">Active Students</div>
                  <p className="text-sm text-gray-600 mt-2">Currently enrolled</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-gray-700 font-semibold">Satisfaction Rate</div>
                  <p className="text-sm text-gray-600 mt-2">Student feedback</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-700 font-semibold">Support Available</div>
                  <p className="text-sm text-gray-600 mt-2">Round-the-clock assistance</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-gray-700 font-semibold">Support Programs</div>
                  <p className="text-sm text-gray-600 mt-2">Various initiatives</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Contact Students Section</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For any student-related queries, support, or assistance, please contact us through the following channels:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Student Affairs Building</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Helpline</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600 text-sm">students@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-gray-800 mb-2">Office Hours</h3>
                  <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Friday: Closed</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
