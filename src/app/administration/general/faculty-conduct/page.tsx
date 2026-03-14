"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature } from "lucide-react"

export default function FacultyConductPage() {
  const conductPrinciples = [
    {
      title: "Professional Integrity",
      description: "Maintain highest standards of honesty, ethics, and professional behavior in all academic and clinical activities",
      category: "Core Values",
      importance: "critical",
      examples: [
        "Truthful communication with students and colleagues",
        "Accurate representation of qualifications and experience", 
        "Transparent evaluation processes"
      ]
    },
    {
      title: "Student Welfare",
      description: "Prioritize student well-being, safety, and educational development in all interactions and decisions",
      category: "Student Relations",
      importance: "critical",
      examples: [
        "Maintain appropriate professional boundaries",
        "Provide fair and unbiased academic support",
        "Protect student confidentiality and privacy"
      ]
    },
    {
      title: "Academic Excellence",
      description: "Uphold rigorous academic standards and contribute to continuous improvement of medical education",
      category: "Academic Responsibilities",
      importance: "high",
      examples: [
        "Regular updating of teaching materials and methods",
        "Evidence-based teaching practices",
        "Constructive feedback and mentorship"
      ]
    },
    {
      title: "Research Ethics",
      description: "Conduct research with integrity, ensuring ethical treatment of subjects and accurate reporting of findings",
      category: "Research Standards",
      importance: "critical",
      examples: [
        "Proper informed consent procedures",
        "Accurate data collection and analysis",
        "Appropriate authorship credit"
      ]
    },
    {
      title: "Collegiality & Respect",
      description: "Foster a collaborative environment based on mutual respect, teamwork, and professional courtesy",
      category: "Interpersonal Relations",
      importance: "high",
      examples: [
        "Respectful disagreement and debate",
        "Support for junior faculty development",
        "Constructive peer review and feedback"
      ]
    },
    {
      title: "Institutional Responsibility",
      description: "Support the mission, values, and policies of the institution while serving as positive ambassadors",
      category: "Institutional Commitment",
      importance: "medium",
      examples: [
        "Active participation in institutional committees",
        "Adherence to administrative policies",
        "Representation of college values in external activities"
      ]
    }
  ]

  const prohibitedBehaviors = [
    {
      title: "Academic Misconduct",
      description: "Actions that compromise academic integrity and fairness",
      severity: "severe",
      examples: [
        "Grade manipulation or favoritism",
        "Plagiarism in teaching materials",
        "Unauthorized sharing of examination materials"
      ],
      consequences: ["Suspension", "Termination", "Academic penalties"]
    },
    {
      title: "Harassment & Discrimination",
      description: "Any form of harassment, bullying, or discriminatory behavior",
      severity: "severe",
      examples: [
        "Sexual harassment or advances",
        "Discrimination based on gender, religion, or ethnicity",
        "Creation of hostile work environment"
      ],
      consequences: ["Immediate suspension", "Legal action", "Termination"]
    },
    {
      title: "Conflict of Interest",
      description: "Situations where personal interests conflict with professional responsibilities",
      severity: "moderate",
      examples: [
        "Financial relationships with pharmaceutical companies",
        "Personal relationships affecting grading",
        "External employment affecting institutional duties"
      ],
      consequences: ["Disclosure requirements", "Reassignment", "Disciplinary action"]
    },
    {
      title: "Breach of Confidentiality",
      description: "Unauthorized disclosure of sensitive information",
      severity: "moderate",
      examples: [
        "Sharing student academic records",
        "Discussing patient information inappropriately",
        "Revealing institutional strategic information"
      ],
      consequences: ["Formal warning", "Suspension", "Legal liability"]
    }
  ]

  const reportingProcedures = [
    {
      step: 1,
      title: "Initial Report",
      description: "Submit formal complaint to Department Head or Dean",
      timeline: "Immediate",
      required: ["Written documentation", "Specific details", "Supporting evidence if available"]
    },
    {
      step: 2,
      title: "Preliminary Review",
      description: "Initial assessment by administration to determine validity",
      timeline: "3-5 working days",
      required: ["Initial fact-finding", "Determine jurisdiction", "Decide on investigation"]
    },
    {
      step: 3,
      title: "Formal Investigation",
      description: "Detailed investigation by Ethics Committee",
      timeline: "15-30 days",
      required: ["Evidence collection", "Witness interviews", "Expert consultation if needed"]
    },
    {
      step: 4,
      title: "Findings & Recommendations",
      description: "Committee submits findings and recommendations to administration",
      timeline: "5-7 days after investigation",
      required: ["Written report", "Evidence summary", "Recommended actions"]
    },
    {
      step: 5,
      title: "Decision & Appeal",
      description: "Final decision by administration with right to appeal",
      timeline: "10 days for decision, 15 days for appeal",
      required: ["Formal notification", "Appeal process information", "Implementation timeline"]
    }
  ]

  const supportResources = [
    {
      title: "Faculty Development Office",
      services: ["Conduct training programs", "Ethics workshops", "Mentorship opportunities"],
      contact: "faculty.dev@rcmc.edu.bd",
      extension: "Ext: 2341"
    },
    {
      title: "Ethics Committee",
      services: ["Ethics consultation", "Case review", "Policy interpretation"],
      contact: "ethics.committee@rcmc.edu.bd", 
      extension: "Ext: 2342"
    },
    {
      title: "Human Resources",
      services: ["Policy guidance", "Conflict resolution", "Legal support"],
      contact: "hr@rcmc.edu.bd",
      extension: "Ext: 2343"
    },
    {
      title: "Counseling Services",
      services: ["Personal counseling", "Stress management", "Work-life balance support"],
      contact: "counseling@rcmc.edu.bd",
      extension: "Ext: 2344"
    }
  ]

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "critical": return "bg-red-100 text-red-700"
      case "high": return "bg-orange-100 text-orange-700"
      case "medium": return "bg-yellow-100 text-yellow-700"
      case "low": return "bg-green-100 text-green-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "severe": return "bg-red-100 text-red-700 border-red-200"
      case "moderate": return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "mild": return "bg-blue-100 text-blue-700 border-blue-200"
      default: return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Gavel className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Code of Conduct of Faculty</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Upholding professional excellence and ethical standards in medical education</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Professional Standards</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Core Principles */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Core Principles of Faculty Conduct</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {conductPrinciples.map((principle, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl text-gray-800">{principle.title}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{principle.category}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImportanceColor(principle.importance)}`}>
                        {principle.importance.toUpperCase()}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">{principle.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Expected Behaviors:
                      </h4>
                      <ul className="space-y-1">
                        {principle.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Prohibited Behaviors */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Prohibited Behaviors & Consequences</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {prohibitedBehaviors.map((behavior, index) => (
                <Card key={index} className={`shadow-lg border-0 hover:shadow-xl transition-all duration-300 ${getSeverityColor(behavior.severity)}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Ban className="w-6 h-6 text-red-600" />
                        <h3 className="text-lg font-semibold text-gray-800">{behavior.title}</h3>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(behavior.severity)}`}>
                        {behavior.severity.toUpperCase()}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{behavior.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        Examples:
                      </h4>
                      <ul className="space-y-1">
                        {behavior.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <Flag className="w-4 h-4 text-orange-600" />
                        Potential Consequences:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {behavior.consequences.map((consequence, consequenceIndex) => (
                          <span key={consequenceIndex} className="bg-red-50 text-red-700 px-2 py-1 rounded text-xs">
                            {consequence}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Reporting Procedures */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Reporting & Investigation Procedures</h2>
            <div className="space-y-4">
              {reportingProcedures.map((procedure, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <span className="font-bold">{procedure.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{procedure.title}</h3>
                        <p className="text-gray-600 mb-3">{procedure.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">Timeline: {procedure.timeline}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileCheck className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">Requirements: {procedure.required.length} items</span>
                          </div>
                        </div>

                        <div className="mt-3">
                          <div className="flex flex-wrap gap-2">
                            {procedure.required.map((req, reqIndex) => (
                              <span key={reqIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                {req}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Support Resources */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Support & Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportResources.map((resource, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Handshake className="w-7 h-7" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{resource.title}</h3>
                    <div className="text-sm text-gray-600 space-y-2 mb-4">
                      {resource.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="bg-gray-50 px-2 py-1 rounded text-xs">
                          {service}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1 text-xs text-gray-600">
                      <div className="flex items-center justify-center gap-1">
                        <Mail className="w-3 h-3" />
                        {resource.contact}
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Phone className="w-3 h-3" />
                        {resource.extension}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Faculty Conduct Office</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For questions about faculty conduct, reporting procedures, or ethics consultations, please contact our office.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Conduct Hotline</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email Contact</h3>
                      <p className="text-gray-600 text-sm">conduct.office@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Admin Block, Room 205</p>
                    </div>
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
