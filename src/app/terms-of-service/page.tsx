"use client"

import React from "react"
import { FileText, Users, Shield, AlertTriangle, CheckCircle, Gavel, Heart, BookOpen, ChevronRight, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function TermsOfServicePage() {
  const lastUpdated = "March 11, 2024"

  const termsSections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      content: [
        {
          subtitle: "Agreement",
          description: "By accessing and using Medical College & Hospital's website, services, and facilities, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
        },
        {
          subtitle: "Modifications",
          description: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of any modified terms."
        }
      ]
    },
    {
      id: "services",
      title: "Services Description",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      content: [
        {
          subtitle: "Educational Services",
          description: "We provide undergraduate and postgraduate medical education programs, including MBBS courses, clinical training, research opportunities, and academic support services."
        },
        {
          subtitle: "Healthcare Services",
          description: "Our hospital provides comprehensive medical care including emergency services, outpatient and inpatient care, surgical procedures, diagnostic services, and specialized treatments."
        },
        {
          subtitle: "Digital Services",
          description: "Our website provides information about admissions, programs, faculty, facilities, and online services for students, patients, and visitors."
        }
      ]
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      content: [
        {
          subtitle: "Accurate Information",
          description: "You must provide accurate, complete, and current information when using our services, especially for admission applications, patient registration, or employment applications."
        },
        {
          subtitle: "Proper Conduct",
          description: "Users must conduct themselves appropriately, respect others' rights, and comply with all applicable laws, regulations, and institutional policies while using our services."
        },
        {
          subtitle: "Account Security",
          description: "If you have an account with us, you are responsible for maintaining the confidentiality of your login credentials and for all activities under your account."
        }
      ]
    },
    {
      id: "privacy",
      title: "Privacy and Data Protection",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      content: [
        {
          subtitle: "Privacy Policy",
          description: "Your privacy is important to us. Our use of your personal information is governed by our Privacy Policy, which outlines how we collect, use, store, and protect your data."
        },
        {
          subtitle: "Medical Confidentiality",
          description: "We maintain strict confidentiality of all medical records and patient information in accordance with healthcare laws and professional ethics."
        },
        {
          subtitle: "Data Security",
          description: "We implement appropriate security measures to protect your personal and medical information against unauthorized access, alteration, or disclosure."
        }
      ]
    },
    {
      id: "prohibited-activities",
      title: "Prohibited Activities",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      content: [
        {
          subtitle: "Unauthorized Access",
          description: "You may not attempt to gain unauthorized access to our systems, networks, or data, or interfere with the proper functioning of our website and services."
        },
        {
          subtitle: "Misuse of Content",
          description: "You may not copy, reproduce, distribute, or create derivative works of our content without explicit permission, except as permitted by law."
        },
        {
          subtitle: "Harmful Activities",
          description: "You may not use our services for any illegal, harmful, or malicious purposes, including spreading viruses, spam, or engaging in fraudulent activities."
        }
      ]
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: <Gavel className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      content: [
        {
          subtitle: "Service Availability",
          description: "We strive to provide reliable services but cannot guarantee uninterrupted availability. We are not liable for temporary disruptions or technical issues."
        },
        {
          subtitle: "Information Accuracy",
          description: "While we endeavor to provide accurate information, we make no warranties about the completeness or accuracy of content on our website."
        },
        {
          subtitle: "Damages",
          description: "Our liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages arising from your use of our services."
        }
      ]
    }
  ]

  const keyPoints = [
    {
      title: "Educational Excellence",
      description: "We are committed to providing high-quality medical education and training programs that meet national and international standards.",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Healthcare Quality",
      description: "Our healthcare services are delivered by qualified professionals following established medical protocols and ethical standards.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Equal Opportunity",
      description: "We provide equal opportunities to all students, patients, and employees regardless of race, religion, gender, or background.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Compliance",
      description: "We operate in compliance with all applicable laws, regulations, and accreditation requirements for medical education and healthcare.",
      icon: <CheckCircle className="w-6 h-6" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4">
              Guidelines for using our services and facilities
            </p>
            <p className="text-gray-600">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Medical College & Hospital</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service govern your use of Medical College & Hospital's website, educational programs, healthcare services, and related facilities. By accessing or using our services, you agree to comply with these terms and all applicable laws and regulations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our institution is dedicated to excellence in medical education, research, and healthcare delivery. These terms are designed to ensure a safe, respectful, and productive environment for all members of our community.
            </p>
          </div>

          {/* Key Commitments */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Commitments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{point.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terms Sections */}
          {termsSections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center text-white mr-4`}>
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
              </div>
              
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-4 border-gray-200 pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.subtitle}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms of Service or need clarification on any aspect, please contact our administrative office:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-700">admin@medicalcollege.edu</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-700">+880 1234-567890</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-gray-700">Administrative Office</p>
                  <p className="text-gray-700">Medical College Road, Dhaka 1234</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">Office Hours</p>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Legal Notice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service constitute a legally binding agreement between you and Medical College & Hospital. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable. Our failure to enforce any provision of these terms does not constitute a waiver of our right to enforce such provision.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These terms are governed by and construed in accordance with the laws of Bangladesh, and any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/privacy-policy" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-gray-700 font-medium">Privacy Policy</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-gray-700 font-medium">Academic Regulations</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-gray-700 font-medium">Patient Rights</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-gray-700 font-medium">Code of Conduct</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
