"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  GraduationCap,
  Users,
  Clock,
  FileText,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  Award,
  CheckCircle,
  ArrowRight,
  Download,
  Info,
  X,
  ChevronDown,
  Globe,
  Plane,
  CreditCard
} from "lucide-react"

export default function ForeignMBBSInfoPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-[#F9FAFB] text-gray-700 overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 opacity-20 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-200 opacity-20 rounded-full -ml-32 -mb-32"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white bg-opacity-60 p-4 rounded-full backdrop-blur-sm">
                <Globe className="h-20 w-20 text-blue-600" />
              </div>
            </div>
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-800">
                Foreign Student MBBS
                <span className="block text-3xl md:text-4xl text-gray-600 mt-2">Admission Portal</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your gateway to world-class medical education in Bangladesh for international students
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                <Download className="mr-2 h-6 w-6" />
                Download Prospectus
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200" onClick={() => setIsCalendarOpen(true)}>
                <Calendar className="mr-2 h-6 w-6" />
                Academic Calendar
              </Button>
            </div>
            <div className="flex justify-center space-x-8 text-gray-600 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">50+</div>
                <div className="text-sm">Foreign Seats</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">5+</div>
                <div className="text-sm">Years Program</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">100%</div>
                <div className="text-sm">BMDC Approved</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="container mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-10 -mt-10"></div>
              <Plane className="h-14 w-14 text-blue-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">50 Seats</h3>
              <p className="text-gray-600">Available for foreign students</p>
              <div className="mt-4 text-blue-600 font-semibold">Open Now</div>
            </CardContent>
          </Card>
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-full -mr-10 -mt-10"></div>
              <Clock className="h-14 w-14 text-green-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">5 Years</h3>
              <p className="text-gray-600">Course + 1 Year Internship</p>
              <div className="mt-4 text-green-600 font-semibold">BMDC Approved</div>
            </CardContent>
          </Card>
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full -mr-10 -mt-10"></div>
              <DollarSign className="h-14 w-14 text-purple-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">Competitive</h3>
              <p className="text-gray-600">International student fees</p>
              <div className="mt-4 text-purple-600 font-semibold">Payment Plans</div>
            </CardContent>
          </Card>
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-full -mr-10 -mt-10"></div>
              <CreditCard className="h-14 w-14 text-orange-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">Visa Support</h3>
              <p className="text-gray-600">Complete assistance provided</p>
              <div className="mt-4 text-orange-600 font-semibold">Student Visa</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Admission Requirements */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Foreign Student Requirements
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ensure you meet all criteria for successful admission as an international student
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <BookOpen className="mr-3 h-6 w-6" />
                    Academic Qualifications
                  </CardTitle>
                </div>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start group">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">A-Levels/12th Grade</span>
                        <p className="text-gray-600 text-sm">Minimum GPA 3.5 or equivalent</p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">O-Levels/10th Grade</span>
                        <p className="text-gray-600 text-sm">Minimum GPA 4.0 or equivalent</p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Biology & Chemistry</span>
                        <p className="text-gray-600 text-sm">Must have both subjects</p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Physics</span>
                        <p className="text-gray-600 text-sm">Required subject</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <CreditCard className="mr-3 h-6 w-6" />
                    Required Documents
                  </CardTitle>
                </div>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start group">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Valid Passport</span>
                        <p className="text-gray-600 text-sm">Minimum 6 months validity</p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Academic Transcripts</span>
                        <p className="text-gray-600 text-sm">O-Level & A-Level certificates</p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Equivalence Certificate</span>
                        <p className="text-gray-600 text-sm">From concerned authority</p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Medical Fitness Report</span>
                        <p className="text-gray-600 text-sm">From registered physician</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Process */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <Clock className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Foreign Admission Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Follow these steps to secure your place as an international student
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {[
                { 
                  step: 1, 
                  title: "Online Application", 
                  description: "Fill out the foreign student application form",
                  icon: "📝",
                  color: "blue"
                },
                { 
                  step: 2, 
                  title: "Document Submission", 
                  description: "Submit required documents via email/post",
                  icon: "📄",
                  color: "purple"
                },
                { 
                  step: 3, 
                  title: "Equivalence Verification", 
                  description: "Get academic equivalence certificate",
                  icon: "🔍",
                  color: "green"
                },
                { 
                  step: 4, 
                  title: "Selection Process", 
                  description: "Review and selection by admission committee",
                  icon: "📊",
                  color: "orange"
                },
                { 
                  step: 5, 
                  title: "Visa Processing", 
                  description: "Student visa application assistance",
                  icon: "🛂",
                  color: "red"
                },
                { 
                  step: 6, 
                  title: "Final Admission", 
                  description: "Complete admission and fee payment",
                  icon: "🎓",
                  color: "indigo"
                }
              ].map((process, index) => (
                <div key={process.step} className="relative">
                  <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white overflow-hidden h-full">
                    <div className={`bg-gradient-to-br from-${process.color}-500 to-${process.color}-600 p-6 text-center relative`}>
                      <div className="absolute top-2 right-2 bg-white bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{process.step}</span>
                      </div>
                      <div className="text-4xl mb-3">{process.icon}</div>
                      <h3 className="text-white font-bold text-lg">{process.title}</h3>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                      <div className="mt-4">
                        <div className={`w-full bg-${process.color}-100 rounded-full h-2`}>
                          <div className={`bg-${process.color}-500 h-2 rounded-full`} style={{width: `${(process.step / 6) * 100}%`}}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Step {process.step} of 6</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow connectors */}
                  {index < 5 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="bg-blue-600 rounded-full p-1">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fee Structure */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
                <DollarSign className="h-10 w-10 text-purple-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Foreign Student Fee Structure
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive fee structure for international students
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-center">
                  <h3 className="text-white text-2xl font-bold">First Year</h3>
                  <div className="text-4xl font-bold text-white mt-2">$15,000</div>
                  <p className="text-green-100 text-sm mt-1">One-time payment</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Admission Fee</span>
                      <span className="font-semibold">$2,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Tuition Fee</span>
                      <span className="font-semibold">$10,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Library Fee</span>
                      <span className="font-semibold">$500</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Laboratory Fee</span>
                      <span className="font-semibold">$1,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Development Fee</span>
                      <span className="font-semibold">$1,500</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center">
                  <h3 className="text-white text-2xl font-bold">Subsequent Years</h3>
                  <div className="text-4xl font-bold text-white mt-2">$12,000</div>
                  <p className="text-blue-100 text-sm mt-1">Per year</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Tuition Fee</span>
                      <span className="font-semibold">$10,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Library Fee</span>
                      <span className="font-semibold">$500</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Laboratory Fee</span>
                      <span className="font-semibold">$1,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Development Fee</span>
                      <span className="font-semibold">$500</span>
                    </li>
                    <li className="flex justify-between text-green-600 font-semibold">
                      <span>Total 5 Years</span>
                      <span>$63,000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-center">
                  <h3 className="text-white text-2xl font-bold">Additional Costs</h3>
                  <div className="text-2xl font-bold text-white mt-2">Estimate</div>
                  <p className="text-purple-100 text-sm mt-1">Per year</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Hostel Accommodation</span>
                      <span className="font-semibold">$2,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Food & Meals</span>
                      <span className="font-semibold">$1,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Medical Insurance</span>
                      <span className="font-semibold">$300</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Personal Expenses</span>
                      <span className="font-semibold">$1,000</span>
                    </li>
                    <li className="flex justify-between text-blue-600 font-semibold">
                      <span>Total Additional</span>
                      <span>$4,800/year</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 text-sm">
                * Fees are subject to change. Please verify with the admission office.
              </p>
              <Button size="lg" className="mt-4 bg-purple-600 hover:bg-purple-700">
                <Download className="mr-2 h-5 w-5" />
                Download Detailed Fee Breakdown
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Important Dates */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6">
                <Calendar className="h-10 w-10 text-orange-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Foreign Student Admission Timeline
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Important dates for international student admissions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white overflow-hidden group">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-center">
                  <div className="text-white text-3xl font-bold">JUN</div>
                  <div className="text-blue-100 text-sm">2024</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">Application Opens</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Start Date:</span>
                      <span className="font-semibold">June 1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Portal:</span>
                      <span className="font-semibold">Online</span>
                    </div>
                  </div>
                  <div className="mt-4 text-blue-600 text-sm font-semibold">Early Bird</div>
                </CardContent>
              </Card>
              
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white overflow-hidden group">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-center">
                  <div className="text-white text-3xl font-bold">AUG</div>
                  <div className="text-green-100 text-sm">2024</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">Application Deadline</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Deadline:</span>
                      <span className="font-semibold">Aug 31</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Late Fee:</span>
                      <span className="font-semibold">$100</span>
                    </div>
                  </div>
                  <div className="mt-4 text-green-600 text-sm font-semibold">Final Date</div>
                </CardContent>
              </Card>
              
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white overflow-hidden group">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-center">
                  <div className="text-white text-3xl font-bold">SEP</div>
                  <div className="text-orange-100 text-sm">2024</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">Selection Results</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Published:</span>
                      <span className="font-semibold">Sep 15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Notification:</span>
                      <span className="font-semibold">Email</span>
                    </div>
                  </div>
                  <div className="mt-4 text-orange-600 text-sm font-semibold">Merit List</div>
                </CardContent>
              </Card>
              
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white overflow-hidden group">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-center">
                  <div className="text-white text-3xl font-bold">JAN</div>
                  <div className="text-purple-100 text-sm">2025</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">Classes Begin</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-semibold">Jan 10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Orientation:</span>
                      <span className="font-semibold">Jan 8</span>
                    </div>
                  </div>
                  <div className="mt-4 text-purple-600 text-sm font-semibold">Start Date</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <Phone className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Foreign Student Office
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our international student team is here to help you with any questions
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <Phone className="mr-3 h-6 w-6" />
                    Contact Information
                  </CardTitle>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center group">
                      <div className="bg-blue-100 rounded-full p-3 mr-4">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Hotline</div>
                        <div className="text-gray-600">+880 2 1234567</div>
                        <div className="text-sm text-gray-500">24/7 Support</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center group">
                      <div className="bg-green-100 rounded-full p-3 mr-4">
                        <Mail className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Email</div>
                        <div className="text-gray-600">foreign@medicalcollege.edu.bd</div>
                        <div className="text-sm text-gray-500">Response within 24 hours</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center group">
                      <div className="bg-purple-100 rounded-full p-3 mr-4">
                        <MapPin className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Office Location</div>
                        <div className="text-gray-600">Foreign Student Affairs Office</div>
                        <div className="text-sm text-gray-500">Main Campus, Building A</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <Clock className="mr-3 h-6 w-6" />
                    Office Hours
                  </CardTitle>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="font-semibold text-gray-800">Saturday - Wednesday</span>
                      <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="font-semibold text-gray-800">Thursday</span>
                      <span className="text-gray-600">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="font-semibold text-gray-800">Friday</span>
                      <span className="text-red-600 font-semibold">Closed</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">Emergency Contact</span>
                      <span className="text-red-600 font-semibold">+880 1712345678</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Info className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-blue-800">Note</span>
                    </div>
                    <p className="text-sm text-blue-700">
                      Appointment recommended for document submission and visa processing assistance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Start Your Medical Journey in Bangladesh!</h3>
                <p className="text-blue-100 mb-6">
                  Join students from over 15 countries pursuing their medical dreams at our prestigious institution
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    <Globe className="mr-2 h-5 w-5" />
                    Apply Online
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-gray-700 hover:bg-white hover:text-blue-600">
                    <Download className="mr-2 h-5 w-5 text-gray-700" />
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
