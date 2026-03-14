"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, AlertTriangle, Users2, GraduationCap, PenTool, MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react"

export default function StudentConductPage() {
  const conductPolicies = [
    {
      title: "Academic Integrity",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Guidelines for maintaining honesty and integrity in academic work",
      rules: [
        "No plagiarism or cheating in examinations",
        "Proper citation of sources in all academic work",
        "Original work submission requirements",
        "Collaboration policies for assignments"
      ]
    },
    {
      title: "Professional Behavior",
      icon: <UserCheck className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Standards for professional conduct in clinical and academic settings",
      rules: [
        "Respectful communication with faculty and staff",
        "Professional attire in clinical areas",
        "Punctuality and attendance requirements",
        "Appropriate use of institutional resources"
      ]
    },
    {
      title: "Clinical Conduct",
      icon: <Stethoscope className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Ethical behavior and patient care standards during clinical rotations",
      rules: [
        "Patient confidentiality and privacy protection",
        "Informed consent procedures",
        "Professional patient interactions",
        "Supervision and scope of practice adherence"
      ]
    },
    {
      title: "Campus Life",
      icon: <Building className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "Rules and regulations for campus facilities and community living",
      rules: [
        "Respect for campus property and facilities",
        "Noise and disturbance policies",
        "Parking and transportation rules",
        "Use of library and study areas"
      ]
    }
  ]

  const disciplinaryActions = [
    {
      level: "Minor Violations",
      color: "from-yellow-100 to-yellow-200",
      textColor: "text-yellow-800",
      actions: [
        "Verbal warning",
        "Written warning",
        "Counseling session",
        "Community service"
      ]
    },
    {
      level: "Moderate Violations",
      color: "from-orange-100 to-orange-200",
      textColor: "text-orange-800",
      actions: [
        "Probation period",
        "Suspension from clinical rotations",
        "Mandatory ethics course",
        "Parent/guardian notification"
      ]
    },
    {
      level: "Major Violations",
      color: "from-red-100 to-red-200",
      textColor: "text-red-800",
      actions: [
        "Temporary suspension",
        "Permanent academic record notation",
        "Expulsion proceedings",
        "Legal action if applicable"
      ]
    }
  ]

  const reportingProcess = [
    {
      step: 1,
      title: "Incident Report",
      description: "File formal report with Student Affairs Office",
      icon: <FileText className="w-5 h-5" />
    },
    {
      step: 2,
      title: "Initial Review",
      description: "Preliminary investigation by disciplinary committee",
      icon: <Search className="w-5 h-5" />
    },
    {
      step: 3,
      title: "Hearing",
      description: "Formal hearing with all parties involved",
      icon: <Gavel className="w-5 h-5" />
    },
    {
      step: 4,
      title: "Decision",
      description: "Committee decision and disciplinary action",
      icon: <Scale className="w-5 h-5" />
    },
    {
      step: 5,
      title: "Appeal Process",
      description: "Right to appeal within specified timeframe",
      icon: <MessageSquare className="w-5 h-5" />
    }
  ]

  const resources = [
    {
      title: "Student Handbook",
      type: "PDF",
      size: "3.2 MB",
      description: "Complete guide to student conduct and policies"
    },
    {
      title: "Academic Integrity Policy",
      type: "PDF",
      size: "1.5 MB",
      description: "Detailed academic honesty guidelines"
    },
    {
      title: "Clinical Conduct Manual",
      type: "PDF",
      size: "2.1 MB",
      description: "Professional behavior in clinical settings"
    },
    {
      title: "Disciplinary Procedures",
      type: "Interactive",
      size: "Online",
      description: "Step-by-step disciplinary process guide"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Users2 className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Conduct</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Guidelines for professional behavior and academic integrity</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Professional Excellence</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Code of Conduct Overview */}
          <Card className="shadow-lg border-0 mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Code of Conduct</h2>
              <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
                Rangpur Community Medical College expects all students to maintain high standards of professional conduct, 
                academic integrity, and ethical behavior. These guidelines ensure a safe, respectful, and productive 
                learning environment for all members of our academic community.
              </p>
            </CardContent>
          </Card>

          {/* Conduct Policies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Conduct Policies</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {conductPolicies.map((policy, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardHeader className={`bg-gradient-to-r ${policy.color} text-white`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        {policy.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{policy.title}</CardTitle>
                        <p className="text-sm opacity-90 mt-1">{policy.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {policy.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Disciplinary Actions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Disciplinary Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {disciplinaryActions.map((level, index) => (
                <Card key={index} className="shadow-lg border-0">
                  <CardContent className={`p-6 bg-gradient-to-br ${level.color}`}>
                    <h3 className={`text-xl font-bold mb-4 ${level.textColor}`}>{level.level}</h3>
                    <ul className="space-y-2">
                      {level.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-gray-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Reporting Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="text-2xl text-gray-800">Reporting Process</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {reportingProcess.map((process, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                        {process.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          {process.icon}
                          <h4 className="font-semibold text-gray-800">{process.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{process.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-2xl text-gray-800">Student Rights</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <ThumbsUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Right to Due Process</h4>
                      <p className="text-sm text-gray-600">Fair and impartial hearing procedures</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ThumbsUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Right to Appeal</h4>
                      <p className="text-sm text-gray-600">Appeal decisions within 10 working days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ThumbsUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Right to Representation</h4>
                      <p className="text-sm text-gray-600">Have advisor or representative present</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ThumbsUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Right to Privacy</h4>
                      <p className="text-sm text-gray-600">Confidential handling of all proceedings</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resources */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Resources & Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{resource.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                    <div className="text-xs text-gray-500 mb-4">
                      <div className="bg-gray-100 px-2 py-1 rounded inline-block">{resource.type}</div>
                      <div className="mt-1">{resource.size}</div>
                    </div>
                    <button className="w-full bg-green-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Student Affairs Office</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For questions about student conduct, disciplinary procedures, or to report violations, please contact the Student Affairs Office.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Phone</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600 text-sm">student.affairs@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Admin Building, Room 201</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
                  <div className="flex items-center justify-center gap-2 text-gray-800 font-semibold">
                    <Clock className="w-5 h-5 text-green-700" />
                    Office Hours
                  </div>
                  <p className="text-gray-600 mt-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Emergency Contact: Available 24/7</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
