"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Download, Eye, Search, Filter, Calendar, Clock, Users, Award, FileText, PlayCircle, CheckCircle, AlertCircle, BarChart3, TrendingUp, Target, GraduationCap, Brain, Stethoscope, Heart, Activity, Smile } from "lucide-react"

export default function CurriculumPage() {
  const programs = [
    {
      title: "Doctor of Medicine (MBBS)",
      duration: "5 Years",
      level: "Undergraduate",
      students: 250,
      status: "active",
      description: "Comprehensive medical education program following international standards",
      semesters: 10,
      credits: 240,
      accreditation: "BMDC & WHO Approved"
    },
    {
      title: "Bachelor of Dental Surgery (BDS)",
      duration: "5 Years", 
      level: "Undergraduate",
      students: 80,
      status: "active",
      description: "Comprehensive dental education with clinical training and research",
      semesters: 10,
      credits: 220,
      accreditation: "BMDC & DCI Approved"
    },
    {
      title: "Bachelor of Nursing (BSc Nursing)",
      duration: "4 Years", 
      level: "Undergraduate",
      students: 120,
      status: "active",
      description: "Professional nursing education with clinical training",
      semesters: 8,
      credits: 160,
      accreditation: "BNMC Approved"
    }
  ]

  const courses = [
    {
      code: "MD-101",
      title: "Anatomy & Physiology",
      program: "MBBS",
      semester: "1st",
      credits: 8,
      hours: "160",
      type: "Core",
      prerequisites: "None",
      status: "active"
    },
    {
      code: "MD-102", 
      title: "Biochemistry & Genetics",
      program: "MBBS",
      semester: "1st",
      credits: 6,
      hours: "120",
      type: "Core",
      prerequisites: "None",
      status: "active"
    },
    {
      code: "MD-201",
      title: "Pathology & Microbiology",
      program: "MBBS", 
      semester: "3rd",
      credits: 7,
      hours: "140",
      type: "Core",
      prerequisites: "MD-101, MD-102",
      status: "active"
    },
    {
      code: "DS-101",
      title: "Dental Anatomy & Histology",
      program: "BDS",
      semester: "1st", 
      credits: 6,
      hours: "120",
      type: "Core",
      prerequisites: "None",
      status: "active"
    },
    {
      code: "DS-102",
      title: "Oral Biology & Tooth Morphology",
      program: "BDS",
      semester: "1st", 
      credits: 5,
      hours: "100",
      type: "Core",
      prerequisites: "DS-101",
      status: "active"
    },
    {
      code: "NS-101",
      title: "Fundamentals of Nursing",
      program: "BSc Nursing",
      semester: "1st", 
      credits: 6,
      hours: "120",
      type: "Core",
      prerequisites: "None",
      status: "active"
    }
  ]

  const curriculumFramework = [
    {
      area: "Basic Medical Sciences",
      courses: 12,
      credits: 48,
      description: "Foundation courses in anatomy, physiology, biochemistry"
    },
    {
      area: "Clinical Sciences", 
      courses: 18,
      credits: 72,
      description: "Clinical medicine, surgery, pediatrics, obstetrics"
    },
    {
      area: "Community Medicine",
      courses: 6,
      credits: 24,
      description: "Public health, epidemiology, preventive medicine"
    },
    {
      area: "Professional Development",
      courses: 8,
      credits: 32,
      description: "Communication skills, ethics, research methodology"
    }
  ]

  const assessments = [
    {
      type: "Formative Assessment",
      frequency: "Weekly",
      weight: "20%",
      methods: ["Quizzes", "Assignments", "Presentations"]
    },
    {
      type: "Summative Assessment", 
      frequency: "Semester End",
      weight: "60%",
      methods: ["Written Exams", "OSCE", "Viva Voce"]
    },
    {
      type: "Continuous Assessment",
      frequency: "Ongoing", 
      weight: "20%",
      methods: ["Attendance", "Participation", "Clinical Performance"]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-700"
      case "upcoming": return "bg-blue-100 text-blue-700"
      case "completed": return "bg-gray-100 text-gray-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const getProgramIcon = (program: string) => {
    if (program.includes("MBBS")) return <Stethoscope className="w-6 h-6" />
    if (program.includes("BDS")) return <Smile className="w-6 h-6" />
    if (program.includes("Nursing")) return <Heart className="w-6 h-6" />
    if (program.includes("Public Health")) return <Activity className="w-6 h-6" />
    return <BookOpen className="w-6 h-6" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <GraduationCap className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Curriculum</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Comprehensive medical education programs and courses</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Academic Affairs</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Academic Programs Overview */}
          <Card className="shadow-lg border-0 mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Academic Programs Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">4</div>
                  <div className="text-sm text-gray-600">Active Programs</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">495</div>
                  <div className="text-sm text-gray-600">Total Students</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">680</div>
                  <div className="text-sm text-gray-600">Total Credits</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">100%</div>
                  <div className="text-sm text-gray-600">Accreditation Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Programs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Academic Programs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {programs.map((program, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                          {getProgramIcon(program.title)}
                        </div>
                        <div>
                          <CardTitle className="text-lg text-gray-800">{program.title}</CardTitle>
                          <p className="text-sm text-gray-600">{program.level}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(program.status)}`}>
                        {program.status.toUpperCase()}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4 text-sm">{program.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <div className="font-semibold">{program.duration}</div>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Students:</span>
                        <div className="font-semibold">{program.students}</div>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Semesters:</span>
                        <div className="font-semibold">{program.semesters}</div>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Credits:</span>
                        <div className="font-semibold">{program.credits}</div>
                      </div>
                    </div>

                    <div className="mb-4 p-3 bg-green-50 rounded-lg">
                      <div className="text-sm text-green-800 font-medium">{program.accreditation}</div>
                    </div>

                    <div className="flex gap-2 items-stretch">
                      <button className="flex-1 h-10 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm">
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                      <button className="h-10 w-10 flex items-center justify-center text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Download Curriculum">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Course Catalog */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Course Catalog</h2>
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input 
                        type="text" 
                        placeholder="Search courses..." 
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Course Code</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Course Title</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Program</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Semester</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Credits</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Hours</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((course, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-blue-600">{course.code}</td>
                          <td className="py-3 px-4">
                            <div>
                              <div className="font-medium text-gray-800">{course.title}</div>
                              <div className="text-xs text-gray-500">Prereq: {course.prerequisites}</div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm">{course.program}</td>
                          <td className="py-3 px-4 text-sm">{course.semester}</td>
                          <td className="py-3 px-4 text-sm">{course.credits}</td>
                          <td className="py-3 px-4 text-sm">{course.hours}</td>
                          <td className="py-3 px-4">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                              {course.type}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="text-blue-600 hover:text-blue-800">
                              <Eye className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Curriculum Framework */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Curriculum Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {curriculumFramework.map((area, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                      <Brain className="w-7 h-7" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{area.area}</h3>
                    <p className="text-sm text-gray-600 mb-4">{area.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Courses:</span>
                        <span className="font-semibold">{area.courses}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Credits:</span>
                        <span className="font-semibold">{area.credits}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Assessment Structure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Assessment Structure</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {assessments.map((assessment, index) => (
                <Card key={index} className="shadow-lg border-0">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                    <CardTitle className="text-lg text-gray-800">{assessment.type}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Frequency:</span>
                        <span className="font-medium">{assessment.frequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Weight:</span>
                        <span className="font-medium">{assessment.weight}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Methods:</h4>
                      <div className="flex flex-wrap gap-2">
                        {assessment.methods.map((method, methodIndex) => (
                          <span key={methodIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Resources */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Academic Resources</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Access curriculum documents, academic policies, and educational resources for faculty and students.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <FileText className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold">Curriculum Documents</h3>
                    <p className="text-sm text-gray-600 text-center">Program syllabi and course outlines</p>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold">Academic Analytics</h3>
                    <p className="text-sm text-gray-600 text-center">Performance metrics and reports</p>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold">Academic Calendar</h3>
                    <p className="text-sm text-gray-600 text-center">Important dates and schedules</p>
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
