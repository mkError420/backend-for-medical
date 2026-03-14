"use client"

import React from "react"
import { Accessibility, Eye, Keyboard, Volume2, Smartphone, Monitor, Mouse, Text, Search, Phone, Mail, MapPin, ChevronRight, CheckCircle, AlertCircle, Info } from "lucide-react"

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      title: "Keyboard Navigation",
      description: "Our website is fully navigable using keyboard controls. Use Tab to move between elements and Enter to activate links and buttons.",
      icon: <Keyboard className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Screen Reader Support",
      description: "We use semantic HTML5 markup and ARIA labels to ensure compatibility with screen readers like JAWS, NVDA, and VoiceOver.",
      icon: <Eye className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Responsive Design",
      description: "Our website adapts to different screen sizes and devices, ensuring a good experience on desktop, tablet, and mobile.",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "High Contrast Mode",
      description: "We maintain sufficient color contrast ratios for text and interactive elements to ensure readability.",
      icon: <Monitor className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Clear Typography",
      description: "We use readable fonts and appropriate font sizes with proper line spacing for better readability.",
      icon: <Text className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Alternative Text",
      description: "All meaningful images include descriptive alt text for screen reader users and when images fail to load.",
      icon: <Info className="w-6 h-6" />,
      color: "from-red-500 to-red-600"
    }
  ]

  
  const browserFeatures = [
    { browser: "Chrome", features: ["Full zoom support", "High contrast mode", "Screen reader compatibility"] },
    { browser: "Firefox", features: ["Text-only zoom", "Reader mode", "Accessibility inspector"] },
    { browser: "Safari", features: ["VoiceOver integration", "Reduce motion", "Increase contrast"] },
    { browser: "Edge", features: ["Immersive reader", "High contrast", "Narrator support"] }
  ]

  const complianceStandards = [
    {
      title: "WCAG 2.1 AA",
      description: "We aim to conform to Web Content Accessibility Guidelines 2.1 Level AA standards.",
      status: "compliant"
    },
    {
      title: "Section 508",
      description: "Our website meets the accessibility requirements of Section 508 of the Rehabilitation Act.",
      status: "compliant"
    },
    {
      title: "ADA Compliance",
      description: "We follow the Americans with Disabilities Act guidelines for web accessibility.",
      status: "compliant"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Accessibility</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4">
              Making our website accessible to everyone
            </p>
            <p className="text-gray-600">
              Medical College & Hospital is committed to digital inclusion and equal access
            </p>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to Accessibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Medical College & Hospital, we are committed to ensuring that our website is accessible to all users, 
              regardless of their abilities or disabilities. We believe that everyone should have equal access to 
              information about our educational programs, healthcare services, and institutional resources.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We continuously work to improve the accessibility of our website and welcome feedback from users 
              about their experience or suggestions for improvement.
            </p>
          </div>

          {/* Accessibility Features */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Accessibility Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessibilityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          {/* Browser Accessibility */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Browser Accessibility Features</h2>
            <p className="text-gray-700 mb-6">
              Most modern browsers include built-in accessibility features. Here are some common options:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {browserFeatures.map((browser, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{browser.browser}</h3>
                  <ul className="space-y-2">
                    {browser.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Standards */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Compliance Standards</h2>
            <div className="space-y-4">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{standard.title}</h3>
                    <p className="text-gray-700 text-sm">{standard.description}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">Compliant</span>
                </div>
              ))}
            </div>
          </div>

          {/* Getting Help */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Need Assistance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Report Accessibility Issues</h3>
                <p className="text-gray-700 mb-4">
                  If you encounter any accessibility barriers on our website, please let us know so we can address them promptly.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-700">accessibility@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-700">+880 521-12345</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Alternative Access</h3>
                <p className="text-gray-700 mb-4">
                  If you need information in alternative formats or have difficulty accessing our website, we're here to help.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-800">In-Person Assistance</p>
                      <p className="text-gray-700">Visit our administrative office</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Volume2 className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-800">Phone Support</p>
                      <p className="text-gray-700">Call for verbal assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Improvement */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Continuous Improvement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to ongoing improvement of our website's accessibility. Our team regularly:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">Conducts accessibility audits and testing</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">Trains staff on accessibility best practices</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">Incorporates user feedback into improvements</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">Stays updated on accessibility standards and technologies</span>
              </li>
            </ul>
          </div>

          {/* Related Links */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/privacy-policy" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-gray-700 font-medium">Privacy Policy</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href="/terms-of-service" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-gray-700 font-medium">Terms of Service</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href="/sitemap" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-gray-700 font-medium">Sitemap</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href="/" className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group">
                <span className="text-gray-700 font-medium">Home Page</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
