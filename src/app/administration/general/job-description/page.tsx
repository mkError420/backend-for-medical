"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, DollarSign, GraduationCap, Star, CheckCircle } from "lucide-react"

export default function JobDescriptionPage() {
  const jobCategories = [
    {
      title: "Faculty Positions",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      jobs: [
        {
          title: "Professor - Anatomy",
          department: "Basic Medical Sciences",
          type: "Full-time",
          experience: "10+ years",
          salary: "Negotiable",
          deadline: "2024-03-15"
        },
        {
          title: "Associate Professor - Medicine",
          department: "Clinical Medicine",
          type: "Full-time",
          experience: "8+ years",
          salary: "Negotiable",
          deadline: "2024-03-20"
        },
        {
          title: "Assistant Professor - Surgery",
          department: "Surgical Sciences",
          type: "Full-time",
          experience: "5+ years",
          salary: "Negotiable",
          deadline: "2024-03-25"
        }
      ]
    },
    {
      title: "Medical Staff",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      jobs: [
        {
          title: "Senior Medical Officer",
          department: "Hospital Services",
          type: "Full-time",
          experience: "5+ years",
          salary: "BDT 80,000 - 120,000",
          deadline: "2024-03-18"
        },
        {
          title: "Medical Officer",
          department: "Emergency Department",
          type: "Full-time",
          experience: "2+ years",
          salary: "BDT 60,000 - 80,000",
          deadline: "2024-03-22"
        },
        {
          title: "Resident Medical Officer",
          department: "Ward Services",
          type: "Full-time",
          experience: "1+ years",
          salary: "BDT 45,000 - 60,000",
          deadline: "2024-03-28"
        }
      ]
    },
    {
      title: "Administrative Positions",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      jobs: [
        {
          title: "Administrative Officer",
          department: "General Administration",
          type: "Full-time",
          experience: "3+ years",
          salary: "BDT 50,000 - 70,000",
          deadline: "2024-03-16"
        },
        {
          title: "HR Manager",
          department: "Human Resources",
          type: "Full-time",
          experience: "5+ years",
          salary: "BDT 70,000 - 90,000",
          deadline: "2024-03-19"
        },
        {
          title: "Finance Officer",
          department: "Finance & Accounts",
          type: "Full-time",
          experience: "3+ years",
          salary: "BDT 55,000 - 75,000",
          deadline: "2024-03-24"
        }
      ]
    },
    {
      title: "Technical Staff",
      icon: <Settings className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      jobs: [
        {
          title: "Lab Technician",
          department: "Pathology",
          type: "Full-time",
          experience: "2+ years",
          salary: "BDT 35,000 - 45,000",
          deadline: "2024-03-21"
        },
        {
          title: "IT Support Officer",
          department: "IT Department",
          type: "Full-time",
          experience: "2+ years",
          salary: "BDT 40,000 - 55,000",
          deadline: "2024-03-26"
        },
        {
          title: "Maintenance Engineer",
          department: "Facilities",
          type: "Full-time",
          experience: "3+ years",
          salary: "BDT 45,000 - 60,000",
          deadline: "2024-03-30"
        }
      ]
    }
  ]

  const benefits = [
    "Competitive salary package",
    "Provident Fund & Gratuity",
    "Health insurance for family",
    "Professional development opportunities",
    "Annual performance bonus",
    "Festival bonuses",
    "Paid leave and holidays",
    "Transport allowance"
  ]

  const applicationProcess = [
    {
      step: 1,
      title: "Submit Application",
      description: "Apply online with updated CV and cover letter"
    },
    {
      step: 2,
      title: "Initial Screening",
      description: "HR team reviews applications against requirements"
    },
    {
      step: 3,
      title: "Technical Assessment",
      description: "Domain-specific evaluation and interview"
    },
    {
      step: 4,
      title: "Final Interview",
      description: "Meeting with department head and management"
    },
    {
      step: 5,
      title: "Offer & Onboarding",
      description: "Job offer and joining formalities"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Briefcase className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Job Descriptions</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Explore career opportunities at RCMC</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Join Our Team</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Job Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Current Openings</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobCategories.map((category, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardHeader className={`bg-gradient-to-r ${category.color} text-white`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        {category.icon}
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {category.jobs.map((job, jobIndex) => (
                        <div key={jobIndex} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                              {job.type}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{job.department}</p>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-600">Exp: {job.experience}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <DollarSign className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-600">{job.salary}</span>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-sm text-red-600">
                              <Calendar className="w-4 h-4" />
                              <span>Deadline: {job.deadline}</span>
                            </div>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                              Apply Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="text-2xl text-gray-800">Employee Benefits</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-fuchsia-50">
                <CardTitle className="text-2xl text-gray-800">Application Process</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {applicationProcess.map((process, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                        {process.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{process.title}</h4>
                        <p className="text-sm text-gray-600">{process.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Contact HR Department</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For inquiries about job applications and career opportunities, please contact our HR team.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                      <p className="text-gray-600 text-sm">hr@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office</h3>
                      <p className="text-gray-600 text-sm">RCMC Campus, Rangpur</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
                  <div className="flex items-center justify-center gap-2 text-gray-800 font-semibold">
                    <Users className="w-5 h-5 text-green-700" />
                    HR Office Hours
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
