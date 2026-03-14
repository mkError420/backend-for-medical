"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin } from "lucide-react"

export default function GoverningBodyPage() {
  const governingMembers = [
    {
      name: "Prof. Dr. M. A. Rahman",
      title: "Chairman",
      role: "Governing Body",
      expertise: "Medical Education & Administration",
      image: "MR",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Dr. S. K. Ahmed",
      title: "Vice Chairman",
      role: "Governing Body",
      expertise: "Healthcare Management",
      image: "SA",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Prof. Dr. R. C. Mondal",
      title: "Member",
      role: "Academic Affairs",
      expertise: "Medical Research",
      image: "RM",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Dr. N. A. Begum",
      title: "Member",
      role: "Student Welfare",
      expertise: "Public Health",
      image: "NB",
      color: "from-pink-400 to-pink-600"
    },
    {
      name: "Prof. Dr. K. M. Hassan",
      title: "Member",
      role: "Finance & Administration",
      expertise: "Hospital Management",
      image: "KH",
      color: "from-orange-400 to-orange-600"
    },
    {
      name: "Dr. F. R. Chowdhury",
      title: "Member Secretary",
      role: "Academic Coordination",
      expertise: "Medical Curriculum Development",
      image: "FC",
      color: "from-teal-400 to-teal-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Governing Body</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Leadership Excellence in Medical Education
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                Committed to Excellence
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-6xl mx-auto">
          {/* About Governing Body */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-2xl text-gray-800">About Our Governing Body</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Governing Body of Rangpur Community Medical College & Hospital is composed of distinguished professionals from various fields of medicine, education, and administration. Our governing body provides strategic direction and oversight to ensure the highest standards of medical education and healthcare services.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      With a collective experience spanning decades, our members bring diverse expertise in medical education, research, healthcare management, and public service. Their guidance ensures that our institution remains at the forefront of medical education while maintaining ethical standards and social responsibility.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The governing body meets regularly to review academic progress, approve policies, and make strategic decisions that shape the future of our institution and benefit our students and the community at large.
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
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Key Functions</h3>
                    <ul className="text-gray-600 text-left space-y-2">
                      <li>• Academic Policy Development</li>
                      <li>• Strategic Planning</li>
                      <li>• Quality Assurance</li>
                      <li>• Resource Management</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our Commitment</h3>
                    <p className="text-gray-600">
                      Excellence in medical education, research, and healthcare services for the betterment of society.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Governing Body Members */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Governing Body Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {governingMembers.map((member, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-2xl font-bold">{member.image}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                    <p className="text-lg font-semibold text-blue-600 mb-1 group-hover:text-blue-700 transition-colors duration-300">{member.title}</p>
                    <p className="text-gray-600 mb-2 group-hover:text-gray-700 transition-colors duration-300">{member.role}</p>
                    <p className="text-sm text-gray-500 italic group-hover:text-gray-600 transition-colors duration-300">{member.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Meeting Schedule */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meeting Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Quarterly</div>
                  <div className="text-gray-700 font-semibold">Regular Meetings</div>
                  <p className="text-sm text-gray-600 mt-2">Strategic planning and policy review</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">Monthly</div>
                  <div className="text-gray-700 font-semibold">Academic Committee</div>
                  <p className="text-sm text-gray-600 mt-2">Curriculum and academic matters</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">Bi-annual</div>
                  <div className="text-gray-700 font-semibold">Finance Review</div>
                  <p className="text-sm text-gray-600 mt-2">Budget and financial planning</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">Annual</div>
                  <div className="text-gray-700 font-semibold">General Assembly</div>
                  <p className="text-sm text-gray-600 mt-2">Annual reports and elections</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Contact Governing Body</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For official inquiries, meeting requests, or other matters related to the Governing Body, please contact us through the following channels:
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
                      <p className="text-gray-600 text-sm">governing@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
