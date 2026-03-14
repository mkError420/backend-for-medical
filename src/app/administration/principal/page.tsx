"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, GraduationCap, BookOpen, Calendar } from "lucide-react"

export default function PrincipalPage() {
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Led the college to achieve 95% pass rate in final examinations"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Research Publications",
      description: "Published 50+ research papers in international journals"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Student Development",
      description: "Established comprehensive student mentorship programs"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Institutional Awards",
      description: "Received Best Medical College award for consecutive 3 years"
    }
  ]

  const responsibilities = [
    "Academic Administration and Curriculum Development",
    "Faculty Recruitment and Professional Development",
    "Student Affairs and Welfare Management",
    "Research and Innovation Promotion",
    "Hospital Administration Coordination",
    "Institutional Accreditation and Quality Assurance",
    "Budget Planning and Financial Management",
    "Community Engagement and Public Relations"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Principal's Office</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Leadership in Medical Education Excellence
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                Visionary Leadership
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-6xl mx-auto">
          {/* Principal Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-2xl text-gray-800">Meet Our Principal</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-3xl font-bold">PR</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Prof. Dr. P. R. Rahman</h3>
                      <p className="text-lg font-semibold text-blue-600 mb-2">Principal</p>
                      <p className="text-lg text-gray-600 mb-4">Rangpur Community Medical College & Hospital</p>
                      <div className="space-y-2">
                        <p className="text-gray-700"><span className="font-semibold">Experience:</span> 25+ years in Medical Education</p>
                        <p className="text-gray-700"><span className="font-semibold">Specialization:</span> Internal Medicine & Medical Administration</p>
                        <p className="text-gray-700"><span className="font-semibold">Qualification:</span> MBBS, MD (Medicine), FCPS</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Prof. Dr. P. R. Rahman is a distinguished medical professional and academic leader with extensive experience in medical education and healthcare administration. Under his visionary leadership, Rangpur Community Medical College has achieved remarkable milestones in academic excellence, research innovation, and healthcare services.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      His commitment to educational excellence, combined with a deep understanding of modern medical practices, has positioned our institution as a leading center for medical education in Northern Bangladesh.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Vision & Mission */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Vision</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To establish RCMC as a center of excellence in medical education, research, and healthcare services, producing competent healthcare professionals who can serve humanity with compassion and skill.
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
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Mission</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To provide quality medical education, foster research culture, and deliver compassionate healthcare services while upholding the highest ethical standards.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                      {achievement.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="text-2xl text-gray-800">Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
                <CardTitle className="text-2xl text-gray-800">Academic Initiatives</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Calendar className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Modern Curriculum</h4>
                      <p className="text-gray-600 text-sm">Implemented updated medical curriculum aligned with international standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Faculty Development</h4>
                      <p className="text-gray-600 text-sm">Regular training programs and workshops for faculty enhancement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <BookOpen className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Research Promotion</h4>
                      <p className="text-gray-600 text-sm">Established research cell and encouraged student participation in research</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Award className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Quality Assurance</h4>
                      <p className="text-gray-600 text-sm">Implemented comprehensive quality assurance mechanisms</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Contact Principal's Office</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For academic matters, administrative issues, or official inquiries, please contact the Principal's Office through the following channels:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Principal's Office, 2nd Floor</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600 text-sm">principal@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-gray-800 mb-2">Office Hours</h3>
                  <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Friday & Saturday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
