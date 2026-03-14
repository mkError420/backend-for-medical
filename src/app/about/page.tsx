"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Building,
  Users,
  Heart,
  Activity,
  GraduationCap,
  Stethoscope,
  Microscope,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  BookOpen,
  Calendar,
  TrendingUp,
  Target,
  Lightbulb,
  Shield
} from "lucide-react"

export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#F3F7F4] text-gray-700 py-16 sm:py-20 lg:py-24">
        <div className="responsive-container">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About RCMC
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              A premier institution dedicated to excellence in medical education and healthcare services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="responsive-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 section-padding">
          {/* Main Content */}
          <div className="lg:col-span-12 space-y-8">
            {/* Introduction Section */}
            <section className="bg-white rounded-lg p-6 sm:p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8 sm:mb-12">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Who We Are
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Rangpur Community Medical College & Hospital stands as a beacon of excellence in medical education and healthcare delivery in northern Bangladesh. Since our establishment, we have been committed to nurturing future healthcare professionals who will serve humanity with compassion, skill, and integrity.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      To provide world-class medical education and healthcare services through innovative teaching methods, state-of-the-art facilities, and a patient-centric approach. We strive to create an environment where academic excellence meets compassionate care.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Our mission extends beyond education to include community service, research advancement, and the development of healthcare solutions that address local and global health challenges.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      To be recognized globally as a center of excellence in medical education, research, and healthcare delivery. We envision a future where our graduates lead healthcare innovation and our hospital sets benchmarks in patient care.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We aim to transform healthcare through education, research, and service, creating a healthier tomorrow for communities we serve and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Values */}
            <section className="bg-white rounded-lg p-6 sm:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Core Values
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                  The principles that guide our institution and shape our approach to medical education and healthcare
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Excellence</CardTitle>
                    <CardDescription>
                      Pursuing the highest standards in education, research, and patient care
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Compassion</CardTitle>
                    <CardDescription>
                      Treating patients and students with empathy, dignity, and respect
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Innovation</CardTitle>
                    <CardDescription>
                      Embracing new ideas and technologies to advance medical science
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Integrity</CardTitle>
                    <CardDescription>
                      Upholding ethical standards and professional conduct in all we do
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </section>

            {/* History & Milestones */}
            <section className="bg-white rounded-lg p-6 sm:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Journey
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                  Key milestones in our history of medical education and healthcare excellence
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">2008</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Foundation</h3>
                      <p className="text-gray-600">
                        Rangpur Community Medical College & Hospital was established with a vision to provide quality medical education and healthcare services to the people of northern Bangladesh.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">2010</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">First Batch Graduation</h3>
                      <p className="text-gray-600">
                        Our first batch of MBBS students graduated, marking the beginning of our contribution to healthcare professionals in Bangladesh.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">2015</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Hospital Expansion</h3>
                      <p className="text-gray-600">
                        Major expansion of our hospital facilities, including addition of modern diagnostic equipment and increased bed capacity to serve more patients.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">2020</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Excellence</h3>
                      <p className="text-gray-600">
                        Establishment of dedicated research facilities and recognition for our contributions to medical research and publications.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">2024</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Transformation</h3>
                      <p className="text-gray-600">
                        Implementation of modern digital systems for hospital management and medical education, enhancing efficiency and accessibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Leadership Section */}
            <section className="bg-white rounded-lg p-6 sm:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Leadership
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                  Led by experienced professionals committed to medical education and healthcare excellence
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <CardTitle className="text-lg">Dr. A. H. M. Kamal</CardTitle>
                    <CardDescription>Managing Director</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <CardTitle className="text-lg">Prof. Dr. M. A. Karim</CardTitle>
                    <CardDescription>Chairman</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <CardTitle className="text-lg">Prof. Dr. S. R. Ahmed</CardTitle>
                    <CardDescription>Principal</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-[#F3F7F4] text-gray-700 rounded-lg p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Join Us in Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you're a prospective student, healthcare professional, or community partner, we invite you to be part of our journey toward healthcare excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admission/local">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary-dark">
                    Apply for Admission
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
