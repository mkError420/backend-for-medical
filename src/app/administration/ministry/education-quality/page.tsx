"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Calendar, Mail, Phone, MapPin, Landmark, BadgeCheck, Award, BookOpen, Star } from "lucide-react"

export default function EducationQualityByMinistryPage() {
  const committeeMembers = [
    {
      name: "Prof. Dr. A. K. M. Nazrul Islam",
      designation: "Chairman",
      affiliation: "Education Quality Assurance (Ministry)",
      avatar: "AN",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Prof. Dr. M. A. Karim",
      designation: "Member",
      affiliation: "Curriculum Development",
      avatar: "MK",
      color: "from-emerald-500 to-green-600",
    },
    {
      name: "Dr. S. R. Chowdhury",
      designation: "Member",
      affiliation: "Academic Standards",
      avatar: "SC",
      color: "from-purple-500 to-fuchsia-600",
    },
    {
      name: "Prof. Dr. F. K. Begum",
      designation: "Member",
      affiliation: "Faculty Development",
      avatar: "FB",
      color: "from-rose-500 to-pink-600",
    },
    {
      name: "Dr. M. R. Hassan",
      designation: "Member",
      affiliation: "Student Assessment",
      avatar: "MH",
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Mr. A. S. Rahman",
      designation: "Member Secretary",
      affiliation: "Documentation & Coordination",
      avatar: "AR",
      color: "from-cyan-500 to-sky-600",
    },
  ]

  const responsibilities = [
    "Ensure compliance with national medical education standards",
    "Monitor and evaluate curriculum implementation",
    "Assess faculty development and training programs",
    "Review student assessment and examination systems",
    "Promote continuous quality improvement in medical education",
  ]

  const operations = [
    {
      title: "Curriculum Review",
      value: "Bi-annual",
      description: "Curriculum alignment and updates",
      color: "from-blue-50 to-indigo-50",
      text: "text-blue-700",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      title: "Quality Audit",
      value: "Annual",
      description: "Comprehensive quality assessment",
      color: "from-green-50 to-emerald-50",
      text: "text-green-700",
      icon: <BadgeCheck className="w-4 h-4" />,
    },
    {
      title: "Faculty Training",
      value: "Quarterly",
      description: "Professional development programs",
      color: "from-purple-50 to-fuchsia-50",
      text: "text-purple-700",
      icon: <Award className="w-4 h-4" />,
    },
    {
      title: "Student Feedback",
      value: "Semester",
      description: "Learning experience evaluation",
      color: "from-amber-50 to-orange-50",
      text: "text-amber-700",
      icon: <Star className="w-4 h-4" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <BookOpen className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Education Quality (By Ministry)</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Ensuring excellence in medical education standards</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Quality Assurance & Excellence</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <CardTitle className="text-2xl text-gray-800">About Education Quality</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Education Quality (By Ministry) committee ensures that Rangpur Community Medical College & Hospital maintains
                      the highest standards of medical education in compliance with national and international guidelines.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Through systematic monitoring, evaluation, and continuous improvement processes, the committee works to enhance
                      curriculum effectiveness, faculty competence, and overall educational outcomes for medical students.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Mission</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To maintain and enhance the quality of medical education through continuous improvement.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Focus Areas</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Curriculum, faculty development, and student assessment.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Committee Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {committeeMembers.map((member, index) => (
                <Card
                  key={index}
                  className="shadow-lg border-0 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white text-2xl font-bold">{member.avatar}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-lg font-semibold text-green-700 mb-1">{member.designation}</p>
                    <p className="text-sm text-gray-600">{member.affiliation}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-fuchsia-50">
                <CardTitle className="text-2xl text-gray-800">Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
                <CardTitle className="text-2xl text-gray-800">Operations</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {operations.map((o, index) => (
                    <div key={index} className={`rounded-lg p-4 bg-gradient-to-br ${o.color} border border-gray-100`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-gray-800">{o.title}</div>
                        <div className={o.text}>{o.icon}</div>
                      </div>
                      <div className={`text-lg font-bold ${o.text}`}>{o.value}</div>
                      <div className="text-sm text-gray-600 mt-1">{o.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Contact</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For official communication related to Education Quality initiatives, please use the following contact information.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Address</h3>
                      <p className="text-gray-600 text-sm">RCMC Campus, Rangpur</p>
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
                      <p className="text-gray-600 text-sm">education.quality@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
                  <div className="flex items-center justify-center gap-2 text-gray-800 font-semibold">
                    <Users className="w-5 h-5 text-green-700" />
                    Quality Assurance Office
                  </div>
                  <p className="text-gray-600 mt-2">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
