"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon } from "lucide-react"

export default function PersonalReviewPage() {
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    designation: "",
    department: "",
    employeeId: "",
    email: "",
    phone: "",
    reviewPeriod: "",
    
    // Teaching Performance
    teachingMethods: "",
    subjectKnowledge: "",
    studentEngagement: "",
    assessmentTechniques: "",
    curriculumDevelopment: "",
    
    // Research Activities
    researchProjects: "",
    publications: "",
    conferencePresentations: "",
    grantApplications: "",
    researchCollaboration: "",
    
    // Clinical Skills (if applicable)
    clinicalCompetence: "",
    patientCare: "",
    clinicalTeaching: "",
    proceduralSkills: "",
    
    // Administrative Responsibilities
    committeeWork: "",
    administrativeTasks: "",
    mentorship: "",
    qualityAssurance: "",
    
    // Professional Development
    trainingAttended: "",
    skillsAcquired: "",
    certifications: "",
    professionalMemberships: "",
    
    // Achievements
    awards: "",
    recognition: "",
    innovations: "",
    
    // Goals and Objectives
    shortTermGoals: "",
    longTermGoals: "",
    developmentNeeds: "",
    supportRequired: "",
    
    // Self Assessment
    strengths: "",
    areasForImprovement: "",
    overallPerformance: "",
    challengesFaced: "",
    
    // Reviewer Comments
    reviewerComments: "",
    recommendations: "",
    actionPlan: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
  }

  const ratingOptions = [
    { value: "excellent", label: "Excellent" },
    { value: "very_good", label: "Very Good" },
    { value: "good", label: "Good" },
    { value: "satisfactory", label: "Satisfactory" },
    { value: "needs_improvement", label: "Needs Improvement" }
  ]

  const reviewPeriods = [
    "January - June 2024",
    "July - December 2024",
    "Annual 2024",
    "Custom Period"
  ]

  const departments = [
    "Department of Anatomy",
    "Department of Physiology",
    "Department of Biochemistry",
    "Department of Pharmacology",
    "Department of Pathology",
    "Department of Microbiology",
    "Department of Forensic Medicine",
    "Department of Community Medicine",
    "Department of Medicine",
    "Department of Surgery",
    "Department of Gynecology & Obstetrics",
    "Department of Pediatrics",
    "Department of ENT",
    "Department of Ophthalmology",
    "Department of Orthopedics"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Clipboard className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Personal Review Form</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Comprehensive faculty performance evaluation and professional development</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Quality Assessment</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <Card className="shadow-lg border-0">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Review Submitted Successfully!</h2>
                <p className="text-gray-600 mb-8">Your personal review has been submitted and will be processed by the Quality Assurance team.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Submit Another Review
                </button>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
                    <User className="w-6 h-6 text-blue-600" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Designation *</label>
                      <input
                        type="text"
                        required
                        value={formData.designation}
                        onChange={(e) => handleInputChange('designation', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., Professor, Associate Professor"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
                      <select
                        required
                        value={formData.department}
                        onChange={(e) => handleInputChange('department', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Department</option>
                        {departments.map(dept => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Employee ID *</label>
                      <input
                        type="text"
                        required
                        value={formData.employeeId}
                        onChange={(e) => handleInputChange('employeeId', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter employee ID"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@rcmc.edu.bd"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+880-XXXXXXXXXX"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Review Period *</label>
                      <select
                        required
                        value={formData.reviewPeriod}
                        onChange={(e) => handleInputChange('reviewPeriod', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Review Period</option>
                        {reviewPeriods.map(period => (
                          <option key={period} value={period}>{period}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Teaching Performance */}
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                  <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-green-600" />
                    Teaching Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      { field: 'teachingMethods', label: 'Teaching Methods and Methodology' },
                      { field: 'subjectKnowledge', label: 'Subject Knowledge and Expertise' },
                      { field: 'studentEngagement', label: 'Student Engagement and Interaction' },
                      { field: 'assessmentTechniques', label: 'Assessment and Evaluation Techniques' },
                      { field: 'curriculumDevelopment', label: 'Curriculum Development and Innovation' }
                    ].map((item) => (
                      <div key={item.field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{item.label}</label>
                        <select
                          value={formData[item.field as keyof typeof formData]}
                          onChange={(e) => handleInputChange(item.field, e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Select Rating</option>
                          {ratingOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Research Activities */}
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                  <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
                    <Search className="w-6 h-6 text-purple-600" />
                    Research Activities
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      { field: 'researchProjects', label: 'Research Projects Undertaken', type: 'textarea' },
                      { field: 'publications', label: 'Publications (Papers, Articles, Books)', type: 'textarea' },
                      { field: 'conferencePresentations', label: 'Conference Presentations and Papers', type: 'textarea' },
                      { field: 'grantApplications', label: 'Grant Applications and Funding', type: 'textarea' },
                      { field: 'researchCollaboration', label: 'Research Collaboration Activities', type: 'textarea' }
                    ].map((item) => (
                      <div key={item.field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{item.label}</label>
                        {item.type === 'textarea' ? (
                          <textarea
                            value={formData[item.field as keyof typeof formData]}
                            onChange={(e) => handleInputChange(item.field, e.target.value)}
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder={`Describe your ${item.label.toLowerCase()}`}
                          />
                        ) : (
                          <select
                            value={formData[item.field as keyof typeof formData]}
                            onChange={(e) => handleInputChange(item.field, e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          >
                            <option value="">Select Rating</option>
                            {ratingOptions.map(option => (
                              <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                          </select>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Professional Development */}
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
                  <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-orange-600" />
                    Professional Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      { field: 'trainingAttended', label: 'Training Programs Attended', type: 'textarea' },
                      { field: 'skillsAcquired', label: 'New Skills Acquired', type: 'textarea' },
                      { field: 'certifications', label: 'Certifications and Licenses', type: 'textarea' },
                      { field: 'professionalMemberships', label: 'Professional Memberships', type: 'textarea' }
                    ].map((item) => (
                      <div key={item.field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{item.label}</label>
                        <textarea
                          value={formData[item.field as keyof typeof formData]}
                          onChange={(e) => handleInputChange(item.field, e.target.value)}
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder={`List your ${item.label.toLowerCase()}`}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements and Goals */}
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-yellow-100">
                  <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-yellow-600" />
                    Achievements and Goals
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      { field: 'awards', label: 'Awards and Recognition', type: 'textarea' },
                      { field: 'innovations', label: 'Innovations and Contributions', type: 'textarea' },
                      { field: 'shortTermGoals', label: 'Short-term Goals (1 year)', type: 'textarea' },
                      { field: 'longTermGoals', label: 'Long-term Goals (3-5 years)', type: 'textarea' },
                      { field: 'developmentNeeds', label: 'Professional Development Needs', type: 'textarea' },
                      { field: 'supportRequired', label: 'Support Required from Institution', type: 'textarea' }
                    ].map((item) => (
                      <div key={item.field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{item.label}</label>
                        <textarea
                          value={formData[item.field as keyof typeof formData]}
                          onChange={(e) => handleInputChange(item.field, e.target.value)}
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder={`Describe your ${item.label.toLowerCase()}`}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Self Assessment */}
              <Card className="shadow-lg border-0">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100">
                  <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
                    <UserCheck className="w-6 h-6 text-indigo-600" />
                    Self Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      { field: 'strengths', label: 'Key Strengths and Accomplishments' },
                      { field: 'areasForImprovement', label: 'Areas for Improvement' },
                      { field: 'overallPerformance', label: 'Overall Performance Assessment' },
                      { field: 'challengesFaced', label: 'Challenges Faced and How They Were Addressed' }
                    ].map((item) => (
                      <div key={item.field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{item.label}</label>
                        <textarea
                          value={formData[item.field as keyof typeof formData]}
                          onChange={(e) => handleInputChange(item.field, e.target.value)}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder={`Provide detailed ${item.label.toLowerCase()}`}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Form Actions */}
              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({
                    name: "", designation: "", department: "", employeeId: "", email: "", phone: "", reviewPeriod: "",
                    teachingMethods: "", subjectKnowledge: "", studentEngagement: "", assessmentTechniques: "", curriculumDevelopment: "",
                    researchProjects: "", publications: "", conferencePresentations: "", grantApplications: "", researchCollaboration: "",
                    clinicalCompetence: "", patientCare: "", clinicalTeaching: "", proceduralSkills: "",
                    committeeWork: "", administrativeTasks: "", mentorship: "", qualityAssurance: "",
                    trainingAttended: "", skillsAcquired: "", certifications: "", professionalMemberships: "",
                    awards: "", recognition: "", innovations: "",
                    shortTermGoals: "", longTermGoals: "", developmentNeeds: "", supportRequired: "",
                    strengths: "", areasForImprovement: "", overallPerformance: "", challengesFaced: "",
                    reviewerComments: "", recommendations: "", actionPlan: ""
                  })}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Clear Form
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Review
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
