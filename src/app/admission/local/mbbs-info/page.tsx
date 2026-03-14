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
  ChevronDown
} from "lucide-react"

export default function MBBSInfoPage() {
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
                <GraduationCap className="h-20 w-20 text-blue-600" />
              </div>
            </div>
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-800">
                MBBS Admission
                <span className="block text-3xl md:text-4xl text-gray-600 mt-2">Information Portal</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your comprehensive gateway to excellence in medical education at Bangladesh's premier institution
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
            <div className="flex justify-center space-x-8 text-gray-600">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">150+</div>
                <div className="text-sm">Seats Available</div>
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
              <Users className="h-14 w-14 text-blue-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">150 Seats</h3>
              <p className="text-gray-600">Available for local students</p>
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
              <h3 className="font-bold text-xl mb-2 text-gray-800">Affordable</h3>
              <p className="text-gray-600">Competitive tuition fees</p>
              <div className="mt-4 text-purple-600 font-semibold">Payment Plans</div>
            </CardContent>
          </Card>
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-full -mr-10 -mt-10"></div>
              <Award className="h-14 w-14 text-orange-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">BMDC Approved</h3>
              <p className="text-gray-600">Fully accredited program</p>
              <div className="mt-4 text-orange-600 font-semibold">Since 2020</div>
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
                Admission Requirements
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ensure you meet all criteria for successful admission to our prestigious MBBS program
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
                        <span className="font-semibold text-gray-800">HSC/Alim/A-level</span>
                        <p className="text-gray-600 text-sm">Minimum GPA 3.5</p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">SSC/Dakhil/O-level</span>
                        <p className="text-gray-600 text-sm">Minimum GPA 4.0</p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Combined GPA</span>
                        <p className="text-gray-600 text-sm">Minimum 8.0 (SSC + HSC)</p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Biology</span>
                        <p className="text-gray-600 text-sm">Must have Biology in both levels</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <FileText className="mr-3 h-6 w-6" />
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
                        <span className="font-semibold text-gray-800">Birth Certificate</span>
                        <p className="text-gray-600 text-sm">Original + 2 photocopies</p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Academic Transcripts</span>
                        <p className="text-gray-600 text-sm">SSC & HSC mark sheets</p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Citizenship Certificate</span>
                        <p className="text-gray-600 text-sm">Bangladeshi citizen proof</p>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Character Certificate</span>
                        <p className="text-gray-600 text-sm">From previous institution</p>
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
                Admission Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to secure your place in our MBBS program
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { 
                  step: 1, 
                  title: "Online Application", 
                  description: "Fill out the online application form with accurate information",
                  icon: "📝",
                  color: "blue"
                },
                { 
                  step: 2, 
                  title: "Document Submission", 
                  description: "Submit all required documents to the admission office",
                  icon: "📄",
                  color: "purple"
                },
                { 
                  step: 3, 
                  title: "Merit List", 
                  description: "Wait for the merit list based on SSC/HSC results",
                  icon: "📊",
                  color: "green"
                },
                { 
                  step: 4, 
                  title: "Medical Exam", 
                  description: "Complete the mandatory medical fitness test",
                  icon: "🏥",
                  color: "orange"
                },
                { 
                  step: 5, 
                  title: "Final Admission", 
                  description: "Complete admission formalities and fee payment",
                  icon: "🎓",
                  color: "red"
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
                          <div className={`bg-${process.color}-500 h-2 rounded-full`} style={{width: `${(process.step / 5) * 100}%`}}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Step {process.step} of 5</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow connectors */}
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="bg-blue-600 rounded-full p-1">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Alternative timeline for mobile */}
            <div className="lg:hidden mt-12">
              <div className="relative">
                <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-600 to-blue-200"></div>
                <div className="space-y-8">
                  {[
                    { step: 1, title: "Online Application", description: "Fill out the online application form with accurate information", color: "blue" },
                    { step: 2, title: "Document Submission", description: "Submit all required documents to the admission office", color: "purple" },
                    { step: 3, title: "Merit List Publication", description: "Wait for the merit list based on SSC/HSC results", color: "green" },
                    { step: 4, title: "Medical Examination", description: "Complete the mandatory medical fitness test", color: "orange" },
                    { step: 5, title: "Final Admission", description: "Complete admission formalities and fee payment", color: "red" }
                  ].map((process) => (
                    <div key={process.step} className="relative flex items-center">
                      <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>
                      <div className="ml-16 flex-1">
                        <Card className="shadow-md border-0 bg-white">
                          <CardContent className="p-4">
                            <div className={`inline-flex items-center justify-center w-8 h-8 bg-${process.color}-100 rounded-full mb-2`}>
                              <span className={`text-${process.color}-600 font-bold text-sm`}>{process.step}</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-800">{process.title}</h3>
                            <p className="text-gray-600 text-sm">{process.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Need Help with Your Application?</h3>
                <p className="text-blue-100 mb-6">
                  Our admission counselors are available to guide you through each step of the process
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-gray-700 hover:bg-white hover:text-blue-600">
                    <Mail className="mr-2 h-5 w-5 text-gray-700" />
                    Email Support
                  </Button>
                </div>
              </div>
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
                Fee Structure
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transparent and affordable fee structure for local students
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-center">
                  <h3 className="text-white text-2xl font-bold">First Year</h3>
                  <div className="text-4xl font-bold text-white mt-2">৳300,000</div>
                  <p className="text-green-100 text-sm mt-1">One-time payment</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Admission Fee</span>
                      <span className="font-semibold">৳50,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Tuition Fee</span>
                      <span className="font-semibold">৳200,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Library Fee</span>
                      <span className="font-semibold">৳10,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Laboratory Fee</span>
                      <span className="font-semibold">৳15,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Development Fee</span>
                      <span className="font-semibold">৳25,000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center">
                  <h3 className="text-white text-2xl font-bold">Subsequent Years</h3>
                  <div className="text-4xl font-bold text-white mt-2">৳250,000</div>
                  <p className="text-blue-100 text-sm mt-1">Per year</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Tuition Fee</span>
                      <span className="font-semibold">৳200,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Library Fee</span>
                      <span className="font-semibold">৳10,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Laboratory Fee</span>
                      <span className="font-semibold">৳15,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Development Fee</span>
                      <span className="font-semibold">৳25,000</span>
                    </li>
                    <li className="flex justify-between text-green-600 font-semibold">
                      <span>Total 5 Years</span>
                      <span>৳1,300,000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-center">
                  <h3 className="text-white text-2xl font-bold">Payment Options</h3>
                  <div className="text-2xl font-bold text-white mt-2">Flexible</div>
                  <p className="text-purple-100 text-sm mt-1">Choose your plan</p>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Annual payment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Semester payment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Installment available</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Bank loan facility</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Scholarship eligible</span>
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
                Important Dates
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Mark your calendar with these key admission dates
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white overflow-hidden group">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-center">
                  <div className="text-white text-3xl font-bold">OCT</div>
                  <div className="text-blue-100 text-sm">2024</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">Application Period</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Opens:</span>
                      <span className="font-semibold">Oct 1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Closes:</span>
                      <span className="font-semibold">Oct 31</span>
                    </div>
                  </div>
                  <div className="mt-4 text-blue-600 text-sm font-semibold">Online Portal</div>
                </CardContent>
              </Card>
              
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white overflow-hidden group">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-center">
                  <div className="text-white text-3xl font-bold">NOV</div>
                  <div className="text-green-100 text-sm">2024</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">Merit List</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Published:</span>
                      <span className="font-semibold">Nov 15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-semibold">2:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-4 text-green-600 text-sm font-semibold">Website</div>
                </CardContent>
              </Card>
              
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white overflow-hidden group">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-center">
                  <div className="text-white text-3xl font-bold">NOV</div>
                  <div className="text-orange-100 text-sm">2024</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">Admission</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Start:</span>
                      <span className="font-semibold">Nov 16</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">End:</span>
                      <span className="font-semibold">Nov 30</span>
                    </div>
                  </div>
                  <div className="mt-4 text-orange-600 text-sm font-semibold">Campus</div>
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
                      <span className="font-semibold">Jan 1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-semibold">9:00 AM</span>
                    </div>
                  </div>
                  <div className="mt-4 text-purple-600 text-sm font-semibold">Orientation</div>
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
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our admission team is here to help you with any questions
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <Phone className="mr-3 h-6 w-6" />
                    Admission Office
                  </CardTitle>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center group">
                      <div className="bg-blue-100 rounded-full p-3 mr-4">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Phone</h4>
                        <p className="text-gray-600">+880-2-XXXXXXX</p>
                        <p className="text-sm text-gray-500">Sunday-Thursday: 9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group">
                      <div className="bg-blue-100 rounded-full p-3 mr-4">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Email</h4>
                        <p className="text-gray-600">admission@medicalcollege.edu.bd</p>
                        <p className="text-sm text-gray-500">24/7 response time</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group">
                      <div className="bg-blue-100 rounded-full p-3 mr-4">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Office Hours</h4>
                        <p className="text-gray-600">Sunday-Thursday: 9:00 AM - 5:00 PM</p>
                        <p className="text-sm text-gray-500">Friday & Saturday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <MapPin className="mr-3 h-6 w-6" />
                    Campus Location
                  </CardTitle>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start group">
                      <div className="bg-green-100 rounded-full p-3 mr-4 mt-1">
                        <MapPin className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Address</h4>
                        <p className="text-gray-600">Medical College Road</p>
                        <p className="text-gray-600">Dhaka, Bangladesh</p>
                        <p className="text-sm text-gray-500">Postal Code: 1000</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Campus Visit</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Visit our campus for a guided tour and counseling session
                      </p>
                      <Button variant="outline" className="w-full">
                        <MapPin className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Virtual Tour</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Explore our facilities from anywhere
                      </p>
                      <Button variant="outline" className="w-full">
                        <Users className="mr-2 h-4 w-4" />
                        Start Virtual Tour
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Medical Journey?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Join thousands of successful medical professionals who started their careers at our prestigious institution
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Apply Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                    <Phone className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Calendar Modal */}
      {isCalendarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 mr-3" />
                  <h2 className="text-2xl font-bold">Academic Calendar 2024-2025</h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white hover:bg-opacity-20"
                  onClick={() => setIsCalendarOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <p className="text-blue-100 mt-2">MBBS Program - Important Dates & Events</p>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Semester Breakdown */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  Academic Year Structure
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">First Year</h4>
                    <p className="text-sm text-gray-600">January - December 2025</p>
                    <ul className="text-xs text-gray-500 mt-2 space-y-1">
                      <li>• 2 Semesters (6 months each)</li>
                      <li>• Anatomy, Physiology, Biochemistry</li>
                      <li>• Final examination: December 2025</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Second Year</h4>
                    <p className="text-sm text-gray-600">January - December 2026</p>
                    <ul className="text-xs text-gray-500 mt-2 space-y-1">
                      <li>• Community Medicine, Forensic Medicine</li>
                      <li>• Pharmacology, Pathology, Microbiology</li>
                      <li>• Final examination: December 2026</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Third Year</h4>
                    <p className="text-sm text-gray-600">January - December 2027</p>
                    <ul className="text-xs text-gray-500 mt-2 space-y-1">
                      <li>• Medicine, Surgery, Obstetrics & Gynecology</li>
                      <li>• Ophthalmology, ENT, Orthopedics</li>
                      <li>• Final examination: December 2027</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Fourth & Final Year</h4>
                    <p className="text-sm text-gray-600">January - December 2028</p>
                    <ul className="text-xs text-gray-500 mt-2 space-y-1">
                      <li>• Advanced clinical rotations</li>
                      <li>• Specialized departments</li>
                      <li>• Final professional exam: December 2028</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Monthly Calendar */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-purple-600" />
                  Key Academic Events
                </h3>
                <div className="space-y-4">
                  {/* January 2025 */}
                  <div className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-blue-800">January 2025</h4>
                      <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">Orientation Month</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Jan 1: Orientation & Registration</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Jan 5: Classes Begin</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Jan 15: First Assessment</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Jan 25: Parent-Teacher Meeting</span>
                      </div>
                    </div>
                  </div>

                  {/* February 2025 */}
                  <div className="border-l-4 border-green-500 bg-green-50 rounded-r-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-green-800">February 2025</h4>
                      <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Regular Classes</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Feb 10: Mid-term Test 1</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Feb 14: Health Camp</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Feb 20: Lab Practical Exam</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Feb 28: Monthly Test</span>
                      </div>
                    </div>
                  </div>

                  {/* March 2025 */}
                  <div className="border-l-4 border-purple-500 bg-purple-50 rounded-r-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-purple-800">March 2025</h4>
                      <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">Exam Month</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Mar 1-15: Semester Final Exams</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Mar 20: Result Publication</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Mar 25: Spring Break Begins</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Mar 31: Break Ends</span>
                      </div>
                    </div>
                  </div>

                  {/* April 2025 */}
                  <div className="border-l-4 border-orange-500 bg-orange-50 rounded-r-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-orange-800">April 2025</h4>
                      <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">New Semester</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Apr 1: Semester 2 Begins</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Apr 5: New Course Registration</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Apr 15: Medical Workshop</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Apr 25: Community Outreach</span>
                      </div>
                    </div>
                  </div>

                  {/* May-June 2025 */}
                  <div className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-red-800">May - June 2025</h4>
                      <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">Summer Term</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">May 10: Clinical Rotations Start</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">May 20: Summer Camp</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Jun 1-15: Summer Exams</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Jun 20: Summer Vacation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Deadlines */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-red-600" />
                  Important Deadlines
                </h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-gray-700 font-medium">Tuition Payment:</span>
                      <span className="text-gray-600 ml-2">5th of each month</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-gray-700 font-medium">Assignment Submission:</span>
                      <span className="text-gray-600 ml-2">As per schedule</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-gray-700 font-medium">Exam Registration:</span>
                      <span className="text-gray-600 ml-2">2 weeks before</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-gray-700 font-medium">Leave Applications:</span>
                      <span className="text-gray-600 ml-2">3 days prior</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Options */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Calendar
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  <Calendar className="mr-2 h-4 w-4" />
                  Add to Google Calendar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
