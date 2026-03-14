"use client"

import React from "react"
import { Map, Home, Users, BookOpen, Heart, FileText, Phone, Mail, MapPin, Clock, ChevronRight, Building, GraduationCap, Newspaper, Library, Calendar, Search, Shield, Award } from "lucide-react"

export default function SitemapPage() {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: <Home className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      links: [
        { title: "Home", href: "/", description: "Main landing page" },
        { title: "Administration", href: "/administration", description: "Leadership and management" },
        { title: "Career", href: "/career", description: "Job opportunities" },
        { title: "Privacy Policy", href: "/privacy-policy", description: "Data protection policy" },
        { title: "Terms of Service", href: "/terms-of-service", description: "Website terms and conditions" },
        { title: "Sitemap", href: "/sitemap", description: "Site navigation" }
      ]
    },
    {
      title: "Academic Programs",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      links: [
        { title: "Admissions", href: "/admission/local/mbbs-info", description: "MBBS program information and requirements" },
        { title: "Medical Education", href: "/medical-education/meu/committee", description: "Educational resources and programs" }
      ]
    },
    {
      title: "Departments",
      icon: <Building className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      links: [
        { title: "Phase I Departments", href: "/departments/phase-1/general-info", description: "Basic sciences" },
        { title: "Phase II Departments", href: "/departments/phase-2/general-info", description: "Para-clinical sciences" },
        { title: "Phase III Departments", href: "/departments/phase-3/general-info", description: "Clinical sciences" },
        { title: "Phase IV Departments", href: "/departments/phase-4/general-info", description: "Advanced clinical training" }
      ]
    },
    {
      title: "Hospital Services",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      links: [
        { title: "Hospital Overview", href: "/hospital/overview", description: "Hospital information" },
        { title: "Emergency Services", href: "/hospital/emergency", description: "24/7 emergency care" }
      ]
    },
    {
      title: "Facilities",
      icon: <Building className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      links: [
        { title: "Academic Facilities", href: "/facilities/academic/general", description: "Lecture halls, labs, classrooms" },
        { title: "Library", href: "/library/opac", description: "Medical library and OPAC system" }
      ]
    },
    {
      title: "Resources",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      links: [
        { title: "Medical Journal", href: "/journal/archive", description: "Research publications archive" },
        { title: "Library OPAC", href: "/library/opac", description: "Online public access catalog" },
        { title: "Notice Board", href: "/notice-board/overview", description: "Announcements and notices overview" }
      ]
    }
  ]

  const quickLinks = [
    {
      title: "Emergency Contact",
      href: "/hospital/emergency",
      icon: <Phone className="w-5 h-5" />,
      color: "text-red-600"
    },
    {
      title: "Admission Helpline",
      href: "/admission",
      icon: <Phone className="w-5 h-5" />,
      color: "text-blue-600"
    },
    {
      title: "Library Catalog",
      href: "/library/opac",
      icon: <Search className="w-5 h-5" />,
      color: "text-green-600"
    },
    {
      title: "Career Opportunities",
      href: "/career",
      icon: <Users className="w-5 h-5" />,
      color: "text-purple-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sitemap</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4">
              Navigate through our website easily
            </p>
            <p className="text-gray-600">
              Find all pages and sections of Medical College & Hospital
            </p>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className={`${link.color}`}>
                    {link.icon}
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Main Sitemap Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center text-white mr-4`}>
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {link.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors mt-1 flex-shrink-0" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* RCMC Location Information */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">RCMC Location & Contact</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Campus Address</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Rangpur Community Medical College (RCMC)</p>
                      <p className="text-gray-700">Medical College Road</p>
                      <p className="text-gray-700">Rangpur, Bangladesh 5400</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Phone Numbers</p>
                      <p className="text-gray-700">Main: +880 521-12345</p>
                      <p className="text-gray-700">Emergency: +880 521-67890</p>
                      <p className="text-gray-700">Admission: +880 521-54321</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Email Addresses</p>
                      <p className="text-gray-700">info@rcmc.edu.bd</p>
                      <p className="text-gray-700">admission@rcmc.edu.bd</p>
                      <p className="text-gray-700">hospital@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Visiting Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Administrative Office</p>
                      <p className="text-gray-700">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-700">Friday & Saturday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Hospital Services</p>
                      <p className="text-gray-700">OPD: 8:00 AM - 8:00 PM</p>
                      <p className="text-gray-700">Emergency: 24/7 Available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Library Hours</p>
                      <p className="text-gray-700">Saturday - Thursday: 8:00 AM - 10:00 PM</p>
                      <p className="text-gray-700">Friday: 2:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Getting to RCMC</h3>
              <p className="text-gray-700 leading-relaxed">
                RCMC is conveniently located in the heart of Rangpur city, easily accessible by public transportation, 
                private vehicles, and rickshaws. The campus is situated near the Rangpur Medical College Hospital 
                and is well-connected to major roads and highways in the region.
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-700 text-sm">+880 521-12345</p>
                <p className="text-gray-600 text-xs mt-1">Mon-Fri, 9AM-5PM</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Email Support</h3>
                <p className="text-gray-700 text-sm">info@rcmc.edu.bd</p>
                <p className="text-gray-600 text-xs mt-1">24-48 hour response</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Visit Campus</h3>
                <p className="text-gray-700 text-sm">Medical College Road</p>
                <p className="text-gray-600 text-xs mt-1">Rangpur, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
