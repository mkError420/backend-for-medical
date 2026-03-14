"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Calendar, Mail, Phone, MapPin, Briefcase, BadgeCheck } from "lucide-react"

export default function ManagementCommitteeByMinistryPage() {
  const committeeMembers = [
    {
      name: "Prof. Dr. M. A. Rahman",
      designation: "Chairman",
      affiliation: "Ministry of Health & Family Welfare",
      avatar: "MR",
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Dr. S. K. Ahmed",
      designation: "Member",
      affiliation: "Directorate General of Medical Education",
      avatar: "SA",
      color: "from-emerald-500 to-green-600",
    },
    {
      name: "Prof. Dr. R. C. Mondal",
      designation: "Member",
      affiliation: "Medical Education & Quality Assurance",
      avatar: "RM",
      color: "from-purple-500 to-fuchsia-600",
    },
    {
      name: "Dr. N. A. Begum",
      designation: "Member",
      affiliation: "Public Health & Administration",
      avatar: "NB",
      color: "from-rose-500 to-pink-600",
    },
    {
      name: "Prof. Dr. K. M. Hassan",
      designation: "Member",
      affiliation: "Finance & Governance",
      avatar: "KH",
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Mr. F. R. Chowdhury",
      designation: "Member Secretary",
      affiliation: "Administration & Documentation",
      avatar: "FC",
      color: "from-cyan-500 to-sky-600",
    },
  ]

  const responsibilities = [
    "Provide strategic direction for institutional administration",
    "Ensure compliance with ministry guidelines and regulatory requirements",
    "Review major policies, plans, and governance decisions",
    "Monitor academic, administrative, and service delivery standards",
    "Oversee transparency, accountability, and effective resource utilization",
  ]

  const meetingInfo = [
    {
      title: "Regular Meeting",
      value: "Quarterly",
      description: "Review progress and key governance matters",
      color: "from-blue-50 to-indigo-50",
      text: "text-blue-700",
    },
    {
      title: "Special Meeting",
      value: "As Needed",
      description: "Urgent agenda items and policy decisions",
      color: "from-green-50 to-emerald-50",
      text: "text-green-700",
    },
    {
      title: "Reporting",
      value: "Ongoing",
      description: "Periodic reporting and compliance follow-ups",
      color: "from-purple-50 to-fuchsia-50",
      text: "text-purple-700",
    },
    {
      title: "Documentation",
      value: "Minutes",
      description: "Official records maintained by the Secretary",
      color: "from-amber-50 to-orange-50",
      text: "text-amber-700",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Briefcase className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Management Committee (By Ministry)</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Governance, oversight, and institutional guidance</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                Policy & Compliance
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-2xl text-gray-800">About the Committee</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Management Committee (By Ministry) provides governance oversight and strategic guidance to ensure that Rangpur
                      Community Medical College & Hospital operates in alignment with relevant ministry policies, regulatory standards, and
                      institutional objectives.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The committee supports transparent decision-making, monitors performance indicators, and recommends actions for
                      continuous improvement across academic, administrative, and service functions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Purpose</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To ensure governance quality, regulatory compliance, and effective management practices.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BadgeCheck className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Key Focus</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Accountability, transparency, and continuous improvement.</p>
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
                    <p className="text-lg font-semibold text-blue-600 mb-1">{member.designation}</p>
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
                <CardTitle className="text-2xl text-gray-800">Meeting & Reporting</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {meetingInfo.map((m, index) => (
                    <div key={index} className={`rounded-lg p-4 bg-gradient-to-br ${m.color} border border-gray-100`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-gray-800">{m.title}</div>
                        <Calendar className={`w-4 h-4 ${m.text}`} />
                      </div>
                      <div className={`text-lg font-bold ${m.text}`}>{m.value}</div>
                      <div className="text-sm text-gray-600 mt-1">{m.description}</div>
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
                  For official communication related to the Management Committee, please use the following contact information.
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
                      <p className="text-gray-600 text-sm">management.committee@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
                  <div className="flex items-center justify-center gap-2 text-gray-800 font-semibold">
                    <Users className="w-5 h-5 text-blue-600" />
                    Secretariat
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
