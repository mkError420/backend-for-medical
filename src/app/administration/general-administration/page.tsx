"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building } from "lucide-react"

export default function GeneralAdministrationPage() {
  const departments = [
    {
      name: "Academic Affairs",
      head: "Prof. Dr. A. K. M. Azad",
      staff: 12,
      functions: ["Curriculum Development", "Student Records", "Academic Planning", "Examination Management"]
    },
    {
      name: "Human Resources",
      head: "Mrs. S. K. Begum",
      staff: 8,
      functions: ["Recruitment", "Staff Development", "Payroll Management", "Employee Relations"]
    },
    {
      name: "Finance & Accounts",
      head: "Mr. M. R. Khan",
      staff: 10,
      functions: ["Budget Planning", "Financial Reporting", "Fee Collection", "Audit Management"]
    },
    {
      name: "Facilities Management",
      head: "Eng. M. A. Salam",
      staff: 15,
      functions: ["Campus Maintenance", "Infrastructure Development", "Safety Management", "Utilities"]
    }
  ]

  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Documentation",
      description: "Official document management and record keeping"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Scheduling",
      description: "Academic calendar and event coordination"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance",
      description: "Regulatory compliance and quality assurance"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Operations",
      description: "Daily administrative operations and logistics"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">General Administration</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Efficient Management for Excellence in Education
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                Supporting Excellence
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
                  <CardTitle className="text-2xl text-gray-800">About General Administration</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The General Administration department serves as the backbone of Rangpur Community Medical College & Hospital, ensuring smooth operations and efficient management of all administrative functions. Our dedicated team works tirelessly to create an environment conducive to academic excellence and healthcare delivery.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We are committed to providing comprehensive administrative support to all departments, faculty, students, and staff. Our services encompass everything from academic records management to facility maintenance, financial administration to human resources development.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Through systematic processes, modern technology, and a skilled workforce, we strive to maintain the highest standards of administrative efficiency while ensuring compliance with all regulatory requirements and institutional policies.
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
                      To provide efficient, transparent, and responsive administrative services that support academic excellence and institutional growth.
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
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Core Values</h3>
                    <p className="text-gray-600 text-sm">
                      Efficiency, Integrity, Professionalism, Innovation, and Service Excellence.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Administrative Departments */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Administrative Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{dept.name}</h3>
                        <p className="text-gray-600 mb-2">Head: {dept.head}</p>
                        <p className="text-sm text-gray-500">Staff: {dept.staff} members</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Key Functions:</h4>
                      <ul className="space-y-1">
                        {dept.functions.map((func, funcIndex) => (
                          <li key={funcIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span>{func}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Administrative Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Administrative Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Administrative Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">45+</div>
                  <div className="text-gray-700 font-semibold">Administrative Staff</div>
                  <p className="text-sm text-gray-600 mt-2">Dedicated professionals</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-gray-700 font-semibold">Support Services</div>
                  <p className="text-sm text-gray-600 mt-2">Round-the-clock assistance</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-gray-700 font-semibold">Digital Records</div>
                  <p className="text-sm text-gray-600 mt-2">Paperless administration</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">ISO</div>
                  <div className="text-gray-700 font-semibold">Certified</div>
                  <p className="text-sm text-gray-600 mt-2">Quality management</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Contact General Administration</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For administrative services, inquiries, or support, please contact our General Administration office through the following channels:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Admin Block, Ground Floor</p>
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
                      <p className="text-gray-600 text-sm">admin@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-gray-800 mb-2">Office Hours</h3>
                  <p className="text-gray-600">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Friday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Saturday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
