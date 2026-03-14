"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Users,
  Building,
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
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  User,
  HelpCircle,
  Award,
  BookOpen,
  Calendar,
  Megaphone,
  TrendingUp
} from "lucide-react"
import { notices } from "@/data/notices"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedMessage, setSelectedMessage] = useState<any>(null)
  const [mapZoom, setMapZoom] = useState(15)
  const [isAdmissionDropdownOpen, setIsAdmissionDropdownOpen] = useState(false)
  const [isFeeDropdownOpen, setIsFeeDropdownOpen] = useState(false)
  const [isApplyDropdownOpen, setIsApplyDropdownOpen] = useState(false)
  
  const messageData = [
    {
      id: 'chairman',
      name: 'Prof. Dr. M. A. Karim',
      position: 'Chairman',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format',
      title: 'Chairman Message',
      description: 'From the Chairman\'s Office',
      content: `It is my privilege to lead this prestigious institution. Our commitment to academic excellence and healthcare innovation has positioned us as a leader in medical education.

We strive to create an environment where students can flourish, research can thrive, and patients receive the highest quality care.

Our vision is to be recognized globally as a center of excellence in medical education, research, and healthcare delivery. We are dedicated to fostering a culture of continuous improvement and innovation.

Excellence in education, compassion in care.`,
      quote: "Excellence in education, compassion in care.",
      link: '/administration/ministry/management-committee'
    },
    {
      id: 'md',
      name: 'Dr. A. H. M. Kamal',
      position: 'Managing Director',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face&auto=format',
      title: 'MD Message',
      description: 'From the Managing Director\'s Desk',
      content: `Welcome to our esteemed Medical College & Hospital. We are committed to excellence in medical education and healthcare services. Our institution stands as a beacon of hope and healing.

With state-of-the-art facilities, experienced faculty, and a patient-centric approach, we continue to set benchmarks in medical education and healthcare delivery.

Our mission is to nurture future healthcare professionals who will serve humanity with compassion, skill, and integrity. We believe in creating an environment where innovation thrives and excellence becomes a habit.

Together, we heal, teach, and innovate for a healthier tomorrow.`,
      quote: "Together, we heal, teach, and innovate for a healthier tomorrow.",
      link: '/administration/ministry/management-committee'
    },
    {
      id: 'principal',
      name: 'Prof. Dr. S. R. Ahmed',
      position: 'Principal',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format',
      title: 'Principal Message',
      description: 'From the Principal\'s Office',
      content: `As Principal, I am dedicated to fostering an environment of academic rigor and clinical excellence. Our comprehensive curriculum ensures students receive world-class medical education.

We prepare future healthcare leaders who will make significant contributions to medicine and society.

Our faculty comprises distinguished professionals who are not only experts in their fields but also passionate mentors committed to student success.

Nurturing tomorrow's healthcare leaders today.`,
      quote: "Nurturing tomorrow's healthcare leaders today.",
      link: '/administration/principal'
    }
  ]
  
  const banners = [
    {
      id: 1,
      title: "Excellence in Medical Education & Healthcare",
      description: "A premier institution dedicated to shaping future healthcare professionals through innovative education, research, and compassionate patient care.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=600&fit=crop&auto=format"
    },
    {
      id: 2,
      title: "Advanced Medical Facilities",
      description: "State-of-the-art infrastructure and modern medical equipment for comprehensive healthcare services.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&h=600&fit=crop&auto=format"
    },
    {
      id: 3,
      title: "Expert Medical Faculty",
      description: "Renowned professors and experienced medical practitioners committed to academic excellence.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=600&fit=crop&auto=format"
    },
    {
      id: 4,
      title: "Research & Innovation",
      description: "Cutting-edge research facilities and opportunities for medical advancement and discovery.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1920&h=600&fit=crop&auto=format"
    }
  ]

  const newsItems = [
    {
      id: 1,
      title: "MBBS Admission 2024 Now Open - Apply Before Deadline",
      type: "Admission",
      urgency: "high"
    },
    {
      id: 2,
      title: "New Advanced ICU Wing Inaugurated at Hospital",
      type: "Facility",
      urgency: "medium"
    },
    {
      id: 3,
      title: "Faculty Receives National Research Excellence Award",
      type: "Achievement",
      urgency: "medium"
    },
    {
      id: 4,
      title: "Medical Symposium 2024 - Registration Now Open",
      type: "Event",
      urgency: "low"
    },
    {
      id: 5,
      title: "Free Health Camp for Local Community This Weekend",
      type: "Community",
      urgency: "high"
    },
    {
      id: 6,
      title: "New Pediatric Department Fully Operational",
      type: "Service",
      urgency: "medium"
    },
    {
      id: 7,
      title: "Orientation Program for New Students - April 1st",
      type: "Academic",
      urgency: "low"
    },
    {
      id: 8,
      title: "Hospital Achieves ISO Certification for Quality Healthcare",
      type: "Achievement",
      urgency: "high"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const truncateText = (text: string, maxLength: number = 150): string => {
    if (text.length <= maxLength) return text
    return text.substr(0, maxLength) + '...'
  }

  const openMessagePopup = (message: any) => {
    setSelectedMessage(message)
  }

  const closeMessagePopup = () => {
    setSelectedMessage(null)
  }

  const handleMapWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -1 : 1
    setMapZoom(prevZoom => {
      const newZoom = prevZoom + delta
      return Math.min(20, Math.max(10, newZoom)) // Zoom between 10 and 20
    })
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Carousel */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Carousel Images */}
        <div className="relative min-h-[300px] xs:min-h-[350px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[580px] xl:min-h-[680px] 2xl:min-h-[720px] w-full">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover object-center"
                style={{
                  objectPosition: 'center',
                  minHeight: '100%',
                  minWidth: '100%'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            </div>
          ))}
        </div>


        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-colors"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* News Ticker */}
      <section className="bg-[#EAEAEA] text-[#116C64] py-2 sm:py-3 overflow-hidden">
        <div className="flex items-center">
          <div className="bg-[#116C64]/10 px-2 sm:px-4 py-1 sm:py-2 flex items-center space-x-1 sm:space-x-2 z-10 relative flex-shrink-0">
            <Megaphone className="w-4 h-4 sm:w-5 sm:h-5 text-[#116C64]" />
            <span className="font-bold text-xs sm:text-sm text-[#116C64] hidden xs:inline sm:inline">Latest News</span>
            <span className="font-bold text-xs text-[#116C64] xs:hidden sm:hidden">News</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="animate-ticker flex items-center space-x-4 sm:space-x-6 lg:space-x-8 whitespace-nowrap">
              {[...newsItems, ...newsItems].map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex items-center space-x-2 sm:space-x-3 py-1">
                  <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-semibold rounded ${
                    item.urgency === 'high' 
                      ? 'bg-[#116C64] text-white' 
                      : item.urgency === 'medium'
                      ? 'bg-[#116C64]/80 text-white'
                      : 'bg-[#116C64]/60 text-white'
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-xs sm:text-sm sm:text-base truncate max-w-[200px] sm:max-w-none">{item.title}</span>
                  {item.urgency === 'high' && (
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#116C64] flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/* Main Content - Two Column Layout */}
      <div className="responsive-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:mx-8 lg:px-8 section-padding">
          {/* First Column - Main Content (9 columns) */}
          <div className="lg:col-span-9 space-y-8">
            {/* Who We Are Section */}
            <section className="bg-white rounded-lg">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-primary/5 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                      <Building className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl sm:text-2xl text-gray-700">Who We Are?</CardTitle>
                      <CardDescription className="text-sm">About Our Institution</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4">
                    <div className="prose prose-sm max-w-none">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Rangpur Community Medical College — Shaping Clinicians, Inspiring Confidence</h2>
                      <p className="text-gray-700 leading-relaxed">
                        At Rangpur Community Medical College, excellence isn't a slogan—it's our operating standard. Year after year, our programs attract strong demand: 135 MBBS seats typically fill a month before their orientation event, driven largely by recommendations from our own students and their families. We are proudly global, with 50% of our learners coming from abroad, and we currently have 344 international students enrolled from India, Nepal, Maldives, and Bhutan.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Our state-of-the-art facilities, experienced faculty, and comprehensive curriculum ensure that students receive world-class medical education while our hospital provides quality healthcare services to the community.
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Link href="/about" className="text-primary hover:text-primary-dark font-medium text-sm flex items-center">
                        Learn more about us... <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* MD Message & Notice Board Section */}
            <section className="bg-white rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {messageData.map((message) => (
                  <Card key={message.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => openMessagePopup(message)}>
                    <CardHeader className="bg-primary/5 border-b">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center">
                          {message.id === 'md' && <User className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
                          {message.id === 'chairman' && <Award className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
                          {message.id === 'principal' && <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
                        </div>
                        <div>
                          <CardTitle className="text-xl sm:text-2xl text-primary">{message.title}</CardTitle>
                          <CardDescription className="text-sm">{message.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-4">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 mb-4">
                            <img 
                              src={message.image}
                              alt={message.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-full">
                            <h3 className="font-semibold text-gray-900 mb-1">{message.name}</h3>
                            <p className="text-sm text-gray-600 mb-3">{message.position}</p>
                            <div className="prose prose-sm max-w-none">
                              <p className="text-gray-700 leading-relaxed line-clamp-2 md:line-clamp-2 lg:line-clamp-3">
                                {message.content}
                              </p>
                            </div>
                            <div className="mt-4 pt-4 border-t">
                              <p className="text-sm text-gray-600 italic">
                                "{message.quote}"
                              </p>
                            </div>
                            <div className="mt-4">
                              <span className="text-primary hover:text-primary-dark font-medium text-sm flex items-center justify-center">
                                Click to read more... <ArrowRight className="ml-1 h-3 w-3" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Banner Content Section */}
            <section className="bg-[#F3F7F4] py-12 sm:py-16">
              <div className="responsive-container">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    What we provide?
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {banners.map((banner) => (
                    <div key={banner.id} className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors">
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{banner.title}</h3>
                      <p className="text-sm sm:text-base mb-4 text-white/90 line-clamp-3">{banner.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Quick Stats */}
            <section className="section-padding bg-white border-b">
              <div className="responsive-container">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">2000+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Faculty Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Beds Capacity</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="section-padding">
              <div className="responsive-container">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Why Choose RCMC?
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    We provide comprehensive medical education and healthcare services with state-of-the-art facilities and experienced professionals.
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Education</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Comprehensive MBBS program with modern curriculum and experienced faculty members dedicated to student success.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Stethoscope className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Healthcare</h3>
                        <p className="text-gray-600 leading-relaxed">
                          State-of-the-art medical facilities providing comprehensive healthcare services across all major specialties.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Microscope className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Research Excellence</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Cutting-edge research facilities and opportunities for students and faculty to contribute to medical science.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Facilities</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Well-equipped laboratories, modern classrooms, digital library, and comfortable hostel facilities.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Renowned professors and medical practitioners with extensive clinical and teaching experience.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient Care</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Compassionate healthcare services with focus on patient wellness and community health programs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Departments Overview */}
            <section className="section-padding bg-white">
              <div className="responsive-container">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Academic Departments
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Our comprehensive curriculum spans across four phases, covering all essential medical disciplines.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">I</span>
                      </div>
                      <CardTitle>Phase I</CardTitle>
                      <CardDescription>
                        Basic Sciences - Anatomy, Physiology, Biochemistry
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">II</span>
                      </div>
                      <CardTitle>Phase II</CardTitle>
                      <CardDescription>
                        Basic Sciences - Anatomy, Physiology, Biochemistry
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">III</span>
                      </div>
                      <CardTitle>Phase III</CardTitle>
                      <CardDescription>
                        Community Medicine, Pathology, Microbiology
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">IV</span>
                      </div>
                      <CardTitle>Phase IV</CardTitle>
                      <CardDescription>
                        Clinical Medicine & Surgery Specialties
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                <div className="text-center mt-8">
                  <Link href="/departments/phase-1/general-info">
                    <Button size="lg" className="bg-primary hover:bg-primary-dark">
                      View All Departments
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* News & Events */}
            <section className="section-padding">
              <div className="responsive-container">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
                    <div className="space-y-6">
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">MBBS Admission 2024 Open</h3>
                              <p className="text-gray-600 mb-2">Applications are now being accepted for the 2024-2025 academic year.</p>
                              <span className="text-sm text-primary">2 days ago</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">Research Excellence Award</h3>
                              <p className="text-gray-600 mb-2">Our faculty received national recognition for groundbreaking research.</p>
                              <span className="text-sm text-primary">1 week ago</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Activity className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">New ICU Wing Inaugurated</h3>
                              <p className="text-gray-600 mb-2">State-of-the-art intensive care facility now operational.</p>
                              <span className="text-sm text-primary">2 weeks ago</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
                    <div className="space-y-6">
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-base sm:text-lg">15</span>
                              <span className="text-white text-xs">MAR</span>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">Medical Symposium 2024</h3>
                              <p className="text-gray-600 mb-2">Annual medical conference featuring international speakers.</p>
                              <span className="text-sm text-gray-500">9:00 AM - Auditorium</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-base sm:text-lg">22</span>
                              <span className="text-white text-xs">MAR</span>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">Health Camp</h3>
                              <p className="text-gray-600 mb-2">Free health checkup camp for local community.</p>
                              <span className="text-sm text-gray-500">8:00 AM - Hospital Ground</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-base sm:text-lg">01</span>
                              <span className="text-white text-xs">APR</span>
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">Orientation Day</h3>
                              <p className="text-gray-600 mb-2">Welcome program for new MBBS students.</p>
                              <span className="text-sm text-gray-500">10:00 AM - Main Hall</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Link href="/notice-board/overview">
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      View All News & Events
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* Second Column - Notice Widget (3 columns) */}
          <div className="lg:col-span-3 bg-gray-300 p-4 rounded-lg">
            <div className="sticky top-6 space-y-6">
              {/* Image Section */}
              <Card className="bg-white border-l-4 border-primary lg:order-2 order-1 hidden lg:block">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {/* First Image - Chairman */}
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src="https://picsum.photos/seed/businesswoman-formal/400/250.jpg"
                        alt="Chairman - Female Professional"
                        className="w-full h-40 sm:h-48 lg:h-56 object-cover rounded-lg"
                        onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/professional-woman-formal/400/250.jpg' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>
                    {/* Text Outside Image */}
                    <div className="mt-4">
                      <p className="text-white font-semibold text-sm bg-black/50 px-3 py-2 rounded-lg inline-block">
                        Chairman
                      </p>
                    </div>
                    
                    {/* Second Image - Managing Director */}
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src="https://picsum.photos/seed/businessman-formal/400/250.jpg"
                        alt="Managing Director - Male Professional"
                        className="w-full h-40 sm:h-48 lg:h-56 object-cover rounded-lg"
                        onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/professional-man-formal/400/250.jpg' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>
                    {/* Text Outside Image */}
                    <div className="mt-4">
                      <p className="text-white font-semibold text-sm bg-black/50 px-3 py-2 rounded-lg inline-block">
                        Managing Director
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Notice Board Widget */}
              <Card className="bg-white border-l-4 border-primary">
                <CardHeader className="bg-gray-700 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                      <Megaphone className="h-5 w-5 text-red-500 animate-pulse" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">Notice Board</CardTitle>
                      <CardDescription className="text-sm text-gray-300">Latest announcements & updates</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="h-64 overflow-hidden relative">
                    <div className="animate-notice-ticker flex flex-col space-y-3 absolute left-0 right-0">
                      {[...notices, ...notices, ...notices].map((notice, index) => (
                        <div key={`${notice.id}-${index}`} className="border-l-2 border-gray-200 pl-3 py-2 hover:border-primary transition-colors cursor-pointer" onClick={() => openMessagePopup(notice)}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-1 text-xs font-semibold rounded ${
                              notice.priority === 'urgent' 
                                ? 'bg-red-100 text-red-700' 
                                : notice.priority === 'high'
                                ? 'bg-orange-100 text-orange-700'
                                : notice.priority === 'normal'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}>
                              {notice.type}
                            </span>
                            {notice.priority === 'urgent' && (
                              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            )}
                          </div>
                          <h4 className="font-semibold text-gray-900 text-sm line-clamp-1">
                            {notice.title}
                          </h4>
                          <span className="text-xs text-gray-500">
                            {new Date(notice.publishDate).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link href="/notice-board/overview" className="text-primary hover:text-primary-dark font-medium text-sm flex items-center justify-center">
                      View All Notices <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Admission Widget */}
              <Card className="bg-white">
                <CardHeader className="bg-gray-700 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-red-500 animate-pulse" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">Admission</CardTitle>
                      <CardDescription className="text-sm text-gray-300">Join our programs</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Link href="/admission/local/mbbs-info" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">MBBS Program</span>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </Link>
                    <Link href="/admission/local/eligibility" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Eligibility Criteria</span>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </Link>
                    <div className="relative group"
                      onMouseEnter={() => setIsAdmissionDropdownOpen(true)}
                      onMouseLeave={() => {
                        setTimeout(() => setIsAdmissionDropdownOpen(false), 150)
                      }}
                                            >
                        <button 
                        onClick={() => setIsAdmissionDropdownOpen(!isAdmissionDropdownOpen)}
                        className="block w-full p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900">Admission Process</span>
                          <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isAdmissionDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </button>
                      
                      {/* Dropdown Content */}
                      {isAdmissionDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50 min-w-[200px]">
                          <div className="py-2">
                            <Link href="/admission/local/process" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                              Local Admission Process
                            </Link>
                            <Link href="/admission/foreign/process" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                              Foreign Admission Process
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="relative group"
                      onMouseEnter={() => setIsFeeDropdownOpen(true)}
                      onMouseLeave={() => {
                        setTimeout(() => setIsFeeDropdownOpen(false), 150)
                      }}
                                            >
                        <button 
                          onClick={() => setIsFeeDropdownOpen(!isFeeDropdownOpen)}
                          className="block w-full p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-900">Fee Structure</span>
                            <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isFeeDropdownOpen ? 'rotate-180' : ''}`} />
                          </div>
                        </button>
                      
                      {/* Dropdown Content */}
                      {isFeeDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50 min-w-[200px]">
                          <div className="py-2">
                            <Link href="/admission/local/fee-structure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                              Local Fee Structure
                            </Link>
                            <Link href="/admission/foreign/fee-structure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                              Foreign Fee Structure
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="relative group"
                      onMouseEnter={() => setIsApplyDropdownOpen(true)}
                      onMouseLeave={() => {
                        setTimeout(() => setIsApplyDropdownOpen(false), 150)
                      }}
                                            >
                        <button 
                          onClick={() => setIsApplyDropdownOpen(!isApplyDropdownOpen)}
                          className="block w-full p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-900">Apply Now</span>
                            <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isApplyDropdownOpen ? 'rotate-180' : ''}`} />
                          </div>
                        </button>
                      
                        {/* Dropdown Content */}
                        {isApplyDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50 min-w-[200px]">
                            <div className="py-2">
                              <Link href="/admission/local/application" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                Local Application
                              </Link>
                              <Link href="/admission/foreign/application" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                Foreign Application
                              </Link>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links Widget */}
              <Card className="bg-white">
                <CardHeader className="bg-gray-700 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                      <ChevronDown className="h-5 w-5 text-red-500 animate-pulse rotate-270" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">Quick Links</CardTitle>
                      <CardDescription className="text-sm text-gray-300">Important resources</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Link href="/admission/local/mbbs-info" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">MBBS Admission</span>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </Link>
                    <Link href="/hospital/doctors" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Find Doctors</span>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </Link>
                    <Link href="/hospital/emergency" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Emergency Services</span>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </Link>
                    <Link href="http://localhost:3000/facilities/academic/general" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Facilities</span>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </Link>
                    <Link href="/contact" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Contact Us</span>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info Widget */}
              <Card className="bg-white">
                <CardHeader className="bg-gray-700 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-red-500 animate-pulse" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">Contact Info</CardTitle>
                      <CardDescription className="text-sm text-gray-300">Get in touch</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Emergency</p>
                        <p className="text-sm text-gray-600">+880 1234-567890</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Email</p>
                        <p className="text-sm text-gray-600">info@medicalcollege.edu</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Address</p>
                        <p className="text-sm text-gray-600">Medical College Road, Dhaka</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Visiting Hours</p>
                        <p className="text-sm text-gray-600">4 PM - 7 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map Widget */}
              <Card className="bg-white">
                <CardHeader className="bg-gray-700 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-red-500 animate-pulse" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">Location</CardTitle>
                      <CardDescription className="text-sm text-gray-300">Find us on map</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden cursor-pointer relative" onWheel={handleMapWheel}>
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57461.92891438!2d89.2028!3d25.7433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e36f9e8e8e8e8e%3A0x8e8e8e8e8e8e8e8!2sRangpur+Community+Medical+College!5e0!3m2!1sen!2sbd!4v1234567890&z=${mapZoom}`}
                      width="100%"
                      height="200"
                      style={{ border: 0, pointerEvents: 'none' }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                      title="Rangpur Community Medical College Location - Use mouse wheel to zoom in/out"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
                        <span className="text-xs font-medium text-gray-700">Scroll to zoom • Click to open</span>
                      </div>
                    </div>
                    {/* Location Marker with Name */}
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-2 flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-900 leading-tight">Rangpur Community</p>
                          <p className="text-xs font-bold text-gray-900 leading-tight">Medical College</p>
                        </div>
                      </div>
                    </div>
                    {/* Zoom Indicator */}
                    <div className="absolute bottom-4 right-4 pointer-events-none">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
                        <span className="text-xs font-medium text-gray-700">Zoom: {mapZoom}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Rangpur+Community+Medical+College+Hospital+Bangladesh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark font-medium text-sm flex items-center justify-center"
                    >
                      Get Directions <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <section className="bg-red-600 text-white section-padding px-4">
        <div className="responsive-container">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Emergency Services Available 24/7</h2>
            <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6 lg:mb-8">Our emergency department is always ready to provide immediate medical care.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
              <a href="tel:+8801234567890" className="flex items-center gap-2 hover:underline">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold">+880 1234-567890</span>
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Rangpur+Community+Medical+College+Hospital+Bangladesh" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-primary hover:bg-highlight">
                  <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Message Popup Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    {selectedMessage.id === 'md' && <User className="h-6 w-6 text-white" />}
                    {selectedMessage.id === 'chairman' && <Award className="h-6 w-6 text-white" />}
                    {selectedMessage.id === 'principal' && <GraduationCap className="h-6 w-6 text-white" />}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{selectedMessage.title}</h2>
                    <p className="text-sm text-gray-600">{selectedMessage.description}</p>
                  </div>
                </div>
                <button
                  onClick={closeMessagePopup}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close popup"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
            
            <div className="p-4 sm:p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={selectedMessage.image}
                      alt={selectedMessage.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedMessage.name}</h3>
                    <p className="text-base text-gray-600 mb-4">{selectedMessage.position}</p>
                    <div className="prose prose-lg max-w-none">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {selectedMessage.content}
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t">
                      <blockquote className="text-lg text-gray-600 italic text-center">
                        "{selectedMessage.quote}"
                      </blockquote>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Link href={selectedMessage.link} className="flex-1">
                        <Button size="lg" className="w-full bg-primary hover:bg-primary-dark">
                          Show more... <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Button size="lg" variant="outline" onClick={closeMessagePopup} className="w-full sm:w-auto">
                        Close
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
