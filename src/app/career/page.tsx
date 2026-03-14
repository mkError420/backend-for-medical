"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, GraduationCap, Heart, Building, Clock, Mail, Phone, MapPin, Award, TrendingUp, Target, Zap, Search, Filter, Calendar, DollarSign, FileText, ChevronRight, Star, CheckCircle, ArrowRight, User, Map, X } from "lucide-react"

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)

  const handleApply = (job: any) => {
    setSelectedJob(job)
    setShowApplicationForm(true)
  }

  const handleCloseApplication = () => {
    setShowApplicationForm(false)
    setSelectedJob(null)
  }

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the application data to your backend
    alert(`Application submitted for ${selectedJob?.title}! We will contact you soon.`)
    handleCloseApplication()
  }

  const jobCategories = [
    {
      id: "faculty",
      title: "Faculty Positions",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      description: "Teaching and research positions",
      count: 12
    },
    {
      id: "medical",
      title: "Medical Staff",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      description: "Doctors, nurses, and healthcare professionals",
      count: 8
    },
    {
      id: "administrative",
      title: "Administrative",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      description: "Office and management positions",
      count: 6
    },
    {
      id: "support",
      title: "Support Staff",
      icon: <Building className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      description: "Technical and support services",
      count: 4
    }
  ]

  const featuredJobs = [
    {
      title: "Assistant Professor - Anatomy",
      department: "Phase-I Department",
      type: "Full-time",
      experience: "3-5 years",
      location: "Main Campus",
      salary: "Competitive",
      deadline: "2024-04-15",
      category: "faculty",
      featured: true,
      description: "We are seeking a dedicated Assistant Professor of Anatomy to join our Phase-I department. The ideal candidate will be responsible for teaching anatomy to medical students, conducting research, and participating in curriculum development. Strong knowledge of human anatomy and teaching experience required."
    },
    {
      title: "Senior Resident - Medicine",
      department: "Phase-IV Department",
      type: "Full-time",
      experience: "2-3 years",
      location: "Hospital",
      salary: "Negotiable",
      deadline: "2024-03-30",
      category: "medical",
      featured: true,
      description: "Join our Medicine department as a Senior Resident. You will be responsible for patient care, clinical training of junior doctors, and participation in academic activities. Must have completed MBBS and internship with valid medical registration."
    },
    {
      title: "HR Manager",
      department: "Administration",
      type: "Full-time",
      experience: "5-7 years",
      location: "Admin Building",
      salary: "Industry Standard",
      deadline: "2024-04-10",
      category: "administrative",
      featured: true,
      description: "We are looking for an experienced HR Manager to oversee all human resources operations including recruitment, employee relations, performance management, and compliance. MBA in HR Management and 5+ years of experience required."
    },
    {
      title: "Lab Technician",
      department: "Pathology",
      type: "Full-time",
      experience: "1-2 years",
      location: "Hospital",
      salary: "As per norms",
      deadline: "2024-04-05",
      category: "support",
      featured: true,
      description: "Seeking a skilled Lab Technician to perform laboratory tests, maintain equipment, and ensure quality control. Diploma in Medical Laboratory Technology required. Experience in a hospital setting preferred."
    }
  ]

  const allJobs = [
    ...featuredJobs,
    {
      title: "Associate Professor - Physiology",
      department: "Phase-I Department",
      type: "Full-time",
      experience: "5-8 years",
      location: "Main Campus",
      salary: "Competitive",
      deadline: "2024-04-20",
      category: "faculty",
      featured: false,
      description: "We are inviting applications for Associate Professor of Physiology. Responsibilities include teaching medical students, research supervision, and contributing to academic committees. PhD in Physiology and extensive teaching experience required."
    },
    {
      title: "Staff Nurse",
      department: "Nursing",
      type: "Full-time",
      experience: "1-3 years",
      location: "Hospital",
      salary: "As per norms",
      deadline: "2024-04-08",
      category: "medical",
      featured: false,
      description: "Looking for compassionate Staff Nurses to provide quality patient care. Must have BSc in Nursing and valid nursing registration. Experience in hospital setting preferred. Excellent patient care and communication skills essential."
    },
    {
      title: "Accountant",
      department: "Finance",
      type: "Full-time",
      experience: "2-4 years",
      location: "Admin Building",
      salary: "Industry Standard",
      deadline: "2024-04-12",
      category: "administrative",
      featured: false,
      description: "Seeking a detail-oriented Accountant to manage financial records, prepare reports, and ensure compliance. B.Com/M.Com with accounting background required. Experience with Tally or similar accounting software preferred."
    },
    {
      title: "Library Assistant",
      department: "Library",
      type: "Full-time",
      experience: "1-2 years",
      location: "Library Building",
      salary: "As per norms",
      deadline: "2024-04-18",
      category: "support",
      featured: false,
      description: "We need a Library Assistant to manage library operations, assist students, and maintain cataloging systems. Bachelor's degree in Library Science or relevant field required. Good organizational and communication skills essential."
    }
  ]

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Industry-standard compensation with regular increments",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Health Insurance",
      description: "Comprehensive medical coverage for you and your family",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Professional Development",
      description: "Continuous learning opportunities and career growth",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hours and generous leave policies",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Retirement Benefits",
      description: "Provident fund and gratuity benefits",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art infrastructure and work environment",
      icon: <Building className="w-6 h-6" />
    }
  ]

  const cultureValues = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in healthcare and education",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "Integrity",
      description: "We conduct ourselves with honesty and ethical principles",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Compassion",
      description: "We care for our patients and colleagues with empathy",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Innovation",
      description: "We embrace new ideas and continuous improvement",
      icon: <Zap className="w-8 h-8" />
    }
  ]

  const filteredJobs = activeTab === "all" 
    ? allJobs 
    : allJobs.filter(job => job.category === activeTab)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Opportunities</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Join our team and make a difference in healthcare</p>
            <div className="mt-8 flex justify-center gap-4">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                {allJobs.length} Open Positions
              </div>
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                500+ Employees
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Job Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {jobCategories.map((category) => (
                <Card 
                  key={category.id} 
                  className="shadow-lg border-0 hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-[1.05] hover:-translate-y-2"
                  onClick={() => setActiveTab(category.id)}
                >
                  <CardHeader className={`bg-gradient-to-r ${category.color} text-white group-hover:scale-105 transition-transform`}>
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        {category.icon}
                      </div>
                      <div className="text-2xl font-bold">{category.count}</div>
                    </div>
                    <CardTitle className="text-xl mt-2">{category.title}</CardTitle>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={activeTab === "all" ? "default" : "outline"}
                onClick={() => setActiveTab("all")}
                className="rounded-full"
              >
                All Positions ({allJobs.length})
              </Button>
              {jobCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeTab === category.id ? "default" : "outline"}
                  onClick={() => setActiveTab(category.id)}
                  className="rounded-full"
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">
                {activeTab === "all" ? "All Positions" : jobCategories.find(c => c.id === activeTab)?.title}
              </h2>
              <div className="flex items-center gap-2 text-gray-600">
                <Search className="w-4 h-4" />
                <span>{filteredJobs.length} positions found</span>
              </div>
            </div>
            <div className="space-y-4">
              {filteredJobs.map((job, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Briefcase className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                            <p className="text-gray-600 mb-3">{job.department}</p>
                            <p className="text-gray-700 text-sm mb-3 leading-relaxed">{job.description}</p>
                            <div className="flex flex-wrap gap-3 text-sm">
                              <div className="flex items-center gap-1 text-gray-600">
                                <Clock className="w-4 h-4" />
                                {job.type}
                              </div>
                              <div className="flex items-center gap-1 text-gray-600">
                                <Users className="w-4 h-4" />
                                {job.experience}
                              </div>
                              <div className="flex items-center gap-1 text-gray-600">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1 text-gray-600">
                                <DollarSign className="w-4 h-4" />
                                {job.salary}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-3">
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Apply by</p>
                          <p className="font-semibold text-red-600">{job.deadline}</p>
                        </div>
                        <Button 
                          className="bg-gray-600 hover:bg-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          onClick={() => handleApply(job)}
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Work With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-2xl transition-all duration-300 text-center hover:scale-[1.05] hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Culture Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Culture & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cultureValues.map((value, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-2xl transition-all duration-300 text-center group hover:scale-[1.05] hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Have questions about career opportunities? Our HR team is here to help you.
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
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600 text-sm">careers@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">HR Office</h3>
                      <p className="text-gray-600 text-sm">Admin Building, Room 101</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Your Resume
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application Form Modal */}
          {showApplicationForm && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">Apply for Position</h2>
                      <p className="text-gray-600 mt-1">{selectedJob?.title}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCloseApplication}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                </div>

                <form onSubmit={handleSubmitApplication} className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+88-0123456789"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Position
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your current job title"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience *
                      </label>
                      <input
                        type="number"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Number of years"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Salary
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Expected monthly salary"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Resume/CV *
                    </label>
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                    </p>
                  </div>

                  <div className="mt-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        required
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">
                        I confirm that all information provided is accurate and complete
                      </span>
                    </label>
                  </div>

                  <div className="mt-6 flex gap-3 justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleCloseApplication}
                      className="px-6"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gray-600 hover:bg-gray-700 px-6"
                    >
                      Submit Application
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
