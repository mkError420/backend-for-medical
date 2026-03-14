"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck } from "lucide-react"

export default function StaffConductPage() {
  const conductPrinciples = [
    {
      title: "Professional Demeanor",
      description: "Maintain professional appearance, attitude, and behavior in all workplace interactions",
      category: "Professional Standards",
      importance: "critical",
      examples: [
        "Appropriate dress code and grooming",
        "Courteous communication with all stakeholders",
        "Positive representation of the institution"
      ]
    },
    {
      title: "Workplace Integrity",
      description: "Demonstrate honesty, reliability, and ethical behavior in all work-related activities",
      category: "Core Values",
      importance: "critical",
      examples: [
        "Accurate timekeeping and attendance",
        "Truthful reporting of work activities",
        "Responsible use of institutional resources"
      ]
    },
    {
      title: "Team Collaboration",
      description: "Work cooperatively with colleagues and contribute to a positive work environment",
      category: "Interpersonal Relations",
      importance: "high",
      examples: [
        "Supportive attitude toward team members",
        "Effective communication and coordination",
        "Willingness to assist others when needed"
      ]
    },
    {
      title: "Service Excellence",
      description: "Provide high-quality service to students, faculty, patients, and visitors with professionalism",
      category: "Service Standards",
      importance: "critical",
      examples: [
        "Prompt and courteous response to requests",
        "Attention to detail in service delivery",
        "Continuous improvement of service skills"
      ]
    },
    {
      title: "Confidentiality & Privacy",
      description: "Protect sensitive information and maintain privacy of all institutional and personal data",
      category: "Information Security",
      importance: "critical",
      examples: [
        "Safeguarding student and patient information",
        "Proper handling of administrative documents",
        "Restricted access to confidential areas"
      ]
    },
    {
      title: "Safety & Compliance",
      description: "Adhere to safety protocols and institutional policies at all times",
      category: "Regulatory Compliance",
      importance: "high",
      examples: [
        "Following health and safety guidelines",
        "Proper use of equipment and facilities",
        "Reporting safety concerns promptly"
      ]
    }
  ]

  const prohibitedBehaviors = [
    {
      title: "Attendance Issues",
      description: "Irregular attendance, unauthorized absences, or time manipulation",
      severity: "moderate",
      examples: [
        "Frequent unauthorized absences",
        "Late arrivals without proper notification",
        "Time card manipulation or buddy punching"
      ],
      consequences: ["Written warning", "Salary deduction", "Suspension"]
    },
    {
      title: "Misconduct",
      description: "Inappropriate behavior, insubordination, or workplace disruption",
      severity: "severe",
      examples: [
        "Disrespectful behavior toward colleagues",
        "Refusal to follow legitimate instructions",
        "Creating hostile work environment"
      ],
      consequences: ["Suspension", "Termination", "Legal action"]
    },
    {
      title: "Theft & Misuse",
      description: "Unauthorized taking or misuse of institutional property",
      severity: "severe",
      examples: [
        "Theft of office supplies or equipment",
        "Personal use of institutional vehicles",
        "Unauthorized use of facilities for personal gain"
      ],
      consequences: ["Immediate termination", "Legal prosecution", "Police report"]
    },
    {
      title: "Breach of Confidentiality",
      description: "Unauthorized disclosure of sensitive information",
      severity: "severe",
      examples: [
        "Sharing student academic records",
        "Discussing patient information publicly",
        "Leaking institutional strategic information"
      ],
      consequences: ["Immediate termination", "Legal liability", "Blacklisting"]
    }
  ]

  const staffCategories = [
    {
      category: "Administrative Staff",
      responsibilities: [
        "Office management and coordination",
        "Record keeping and documentation",
        "Communication and correspondence",
        "Event and meeting coordination"
      ],
      specificRules: [
        "Professional telephone etiquette",
        "Proper document handling procedures",
        "Meeting room management protocols",
        "Visitor接待 standards"
      ],
      icon: <Building2 className="w-6 h-6" />
    },
    {
      category: "Technical Staff",
      responsibilities: [
        "Equipment maintenance and repair",
        "Facility management and upkeep",
        "Technical support services",
        "Safety and security operations"
      ],
      specificRules: [
        "Proper equipment handling procedures",
        "Safety protocol compliance",
        "Maintenance reporting requirements",
        "Emergency response procedures"
      ],
      icon: <Wrench className="w-6 h-6" />
    },
    {
      category: "Support Staff",
      responsibilities: [
        "Cleaning and housekeeping services",
        "Food services and hospitality",
        "Transportation and logistics",
        "General maintenance tasks"
      ],
      specificRules: [
        "Hygiene and sanitation standards",
        "Food safety protocols",
        "Vehicle operation guidelines",
        "Waste management procedures"
      ],
      icon: <Truck className="w-6 h-6" />
    }
  ]

  const reportingProcedures = [
    {
      step: 1,
      title: "Incident Report",
      description: "Report misconduct to immediate supervisor or department head",
      timeline: "Within 24 hours",
      required: ["Written incident report", "Witness statements if available", "Date and time details"]
    },
    {
      step: 2,
      title: "Supervisor Review",
      description: "Initial assessment by immediate supervisor",
      timeline: "2-3 working days",
      required: ["Fact verification", "Initial documentation", "Severity assessment"]
    },
    {
      step: 3,
      title: "HR Investigation",
      description: "Formal investigation by Human Resources department",
      timeline: "7-10 working days",
      required: ["Detailed investigation", "Witness interviews", "Evidence collection"]
    },
    {
      step: 4,
      title: "Disciplinary Action",
      description: "Decision and implementation of appropriate disciplinary measures",
      timeline: "3-5 days after investigation",
      required: ["Written decision", "Action plan", "Follow-up schedule"]
    }
  ]

  const trainingPrograms = [
    {
      title: "New Staff Orientation",
      duration: "2 days",
      frequency: "For all new hires",
      topics: ["Institutional policies", "Code of conduct", "Safety procedures", "Communication skills"],
      mandatory: true
    },
    {
      title: "Professional Development",
      duration: "1 day monthly",
      frequency: "Ongoing",
      topics: ["Customer service", "Team building", "Time management", "Conflict resolution"],
      mandatory: false
    },
    {
      title: "Safety & Security Training",
      duration: "Half day quarterly",
      frequency: "Quarterly refreshers",
      topics: ["Emergency procedures", "Fire safety", "First aid", "Security protocols"],
      mandatory: true
    },
    {
      title: "Ethics & Compliance",
      duration: "1 day annually",
      frequency: "Annual refresher",
      topics: ["Ethical decision making", "Confidentiality", "Anti-harassment", "Legal compliance"],
      mandatory: true
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
                <Users2 className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Staff Code of Conduct</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Professional standards and ethical guidelines for all staff members</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Workplace Excellence</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Core Principles */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Core Principles of Staff Conduct</h2>
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

          {/* Staff Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Staff Categories & Responsibilities</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {staffCategories.map((category, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white">
                        {category.icon}
                      </div>
                      <CardTitle className="text-xl text-gray-800">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-blue-600" />
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1">
                        {category.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <Clipboard className="w-4 h-4 text-purple-600" />
                        Specific Rules:
                      </h4>
                      <ul className="space-y-1">
                        {category.specificRules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            {rule}
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

          {/* Training Programs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Training & Development Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingPrograms.map((program, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-800">{program.title}</h3>
                      </div>
                      {program.mandatory && (
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                          MANDATORY
                        </span>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Duration: {program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Frequency: {program.frequency}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Schedule
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Reporting Procedures */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Reporting & Disciplinary Procedures</h2>
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

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Staff Welfare & HR Office</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For questions about staff conduct, reporting procedures, or workplace concerns, please contact our HR department.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">HR Hotline</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email Contact</h3>
                      <p className="text-gray-600 text-sm">hr.staff@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">HR Office</h3>
                      <p className="text-gray-600 text-sm">Admin Block, Room 102</p>
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
