"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart } from "lucide-react"

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The Trust</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Rangpur Group of Educational Institutions
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-blue-800 px-6 py-2 rounded-full text-lg font-semibold">
                Since 1995
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-6xl mx-auto">
          {/* Trust Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="text-2xl text-gray-800">About Our Trust</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Rangpur Group of Educational Institutions stands as a beacon of excellence in medical education and healthcare services in Northern Bangladesh. Established with a vision to provide world-class medical education and healthcare facilities, our trust has been instrumental in shaping the future of healthcare professionals.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Our commitment to academic excellence, research innovation, and compassionate healthcare has made us a trusted name in medical education. We believe in nurturing not just skilled professionals, but compassionate healthcare providers who can make a real difference in society.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Through our various institutions and initiatives, we continue to uphold the highest standards of medical education while remaining accessible to students from diverse backgrounds.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trust Info Card */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To provide exceptional medical education and healthcare services that transform lives and communities.
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
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our Values</h3>
                    <p className="text-gray-600">
                      Excellence, Integrity, Compassion, Innovation, and Service to Humanity.
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
              <Card className="shadow-lg border-0 text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-gray-600">Graduates</div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                  <div className="text-gray-600">Faculty Members</div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-gray-600">Research Publications</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trust Leadership */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Trust Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">RC</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. R. Chowdhury</h3>
                  <p className="text-gray-600 mb-2">Chairman</p>
                  <p className="text-sm text-gray-500">Leading with vision and commitment to excellence in medical education.</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">MA</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Prof. M. Ahmed</h3>
                  <p className="text-gray-600 mb-2">Secretary</p>
                  <p className="text-sm text-gray-500">Dedicated to advancing medical research and academic excellence.</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">SK</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. S. Karim</h3>
                  <p className="text-gray-600 mb-2">Treasurer</p>
                  <p className="text-sm text-gray-500">Ensuring sustainable growth and development of our institutions.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white-500 text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For more information about our trust and initiatives, please contact us. We welcome your inquiries and collaboration opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-gray-600">Rangpur Group Campus, Rangpur, Bangladesh</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">+88-0123456789</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">trust@rcmc.edu.bd</p>
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
