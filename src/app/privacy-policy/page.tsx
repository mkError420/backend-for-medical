"use client"

import React from "react"
import { Shield, Eye, Lock, Database, UserCheck, FileText, AlertCircle, Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react"

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 11, 2024"

  const privacySections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      content: [
        {
          subtitle: "Personal Information",
          description: "We collect personal information you voluntarily provide when you interact with our website, apply for admission, seek employment, or use our healthcare services. This includes name, contact details, academic records, and medical history where applicable."
        },
        {
          subtitle: "Automatically Collected Information",
          description: "Our systems automatically collect technical information when you visit our website, including IP address, browser type, device information, pages visited, and time spent on each page. This helps us improve user experience and website performance."
        },
        {
          subtitle: "Cookies and Tracking",
          description: "We use cookies and similar technologies to enhance your experience, remember preferences, and analyze website traffic. You can control cookie settings through your browser preferences."
        }
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: <Eye className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      content: [
        {
          subtitle: "Educational Services",
          description: "To process admission applications, manage student records, provide academic services, and communicate with students and parents about educational matters."
        },
        {
          subtitle: "Healthcare Services",
          description: "To provide medical care, maintain patient records, schedule appointments, process insurance claims, and communicate with patients about their health and treatment."
        },
        {
          subtitle: "Administrative Purposes",
          description: "For administrative operations, compliance with legal requirements, website improvement, research purposes, and to respond to your inquiries and requests."
        }
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: <UserCheck className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      content: [
        {
          subtitle: "Authorized Personnel",
          description: "We share your information with authorized faculty, staff, and healthcare providers who need access to perform their duties and provide services to you."
        },
        {
          subtitle: "Legal Requirements",
          description: "We may disclose information when required by law, court order, or government authority, or to protect our rights, property, or safety, or that of our users or the public."
        },
        {
          subtitle: "Third-Party Services",
          description: "We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing users, subject to confidentiality agreements."
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security and Protection",
      icon: <Lock className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      content: [
        {
          subtitle: "Security Measures",
          description: "We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction, including encryption, firewalls, and secure servers."
        },
        {
          subtitle: "Access Control",
          description: "Access to personal information is restricted to authorized personnel only, and all staff members are trained on privacy protection and data security best practices."
        },
        {
          subtitle: "Regular Monitoring",
          description: "We regularly review and update our security measures to ensure they remain effective against evolving threats and vulnerabilities."
        }
      ]
    }
  ]

  const userRights = [
    {
      title: "Access and Correction",
      description: "You have the right to access and correct your personal information held by us. Contact our privacy officer to request access or make corrections.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Data Deletion",
      description: "You may request deletion of your personal information, subject to legal and regulatory requirements and our legitimate business interests.",
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      title: "Opt-Out",
      description: "You can opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails or contacting us directly.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Complaints",
      description: "If you believe your privacy rights have been violated, you can file a complaint with our privacy officer or relevant data protection authority.",
      icon: <UserCheck className="w-6 h-6" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4">
              Your privacy is important to us
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Medical College & Hospital ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and protect your information when you interact with our website, educational programs, healthcare services, and other offerings.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our services and providing your information, you consent to the collection, use, and sharing of your information as described in this policy. If you do not agree with this policy, please do not use our services or provide your personal information.
            </p>
          </div>

          {/* Privacy Sections */}
          {privacySections.map((section, index) => (
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

          {/* User Rights Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Rights and Choices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userRights.map((right, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {right.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{right.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{right.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact our Privacy Officer:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-700">privacy@medicalcollege.edu</p>
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
                  <p className="text-gray-700">Privacy Office, Admin Building</p>
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

          {/* Policy Updates */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, applicable laws, or regulatory requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date at the top of this policy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our services after any changes to this policy constitutes your acceptance of the updated terms.
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-gray-700 font-medium">Terms of Service</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-gray-700 font-medium">Cookie Policy</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-gray-700 font-medium">Data Protection Policy</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-gray-700 font-medium">Patient Privacy Rights</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
