"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, Eye as EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical } from "lucide-react"

export default function Phase2GeneralInfoPage() {
  const departmentOverview = {
    name: "Phase II - Para-Clinical Sciences",
    duration: "1 Year",
    totalStudents: 125,
    facultyCount: 32,
    courses: 12,
    established: "2011",
    description: "Phase II provides bridge between basic sciences and clinical medicine through comprehensive study of para-clinical subjects, preparing students for clinical training in Phase III."
  }

  const departments = [
    {
      name: "Department of Pharmacology",
      head: "Prof. Dr. S. Khatun",
      faculty: 10,
      courses: 3,
      labs: 3,
      established: "2011",
      description: "Study of drugs, their actions, and effects on living systems with focus on rational therapeutics.",
      facilities: ["Pharmacology Lab", "Animal House", "Research Lab", "Clinical Pharmacy"],
      achievements: ["Best Teaching Award 2023", "20 Research Publications", "Drug Discovery Research"]
    },
    {
      name: "Department of Pathology",
      head: "Prof. Dr. M. Ahmed",
      faculty: 8,
      courses: 3,
      labs: 3,
      established: "2011",
      description: "Study of disease mechanisms, structural and functional changes in cells and tissues.",
      facilities: ["Histopathology Lab", "Clinical Pathology", "Molecular Pathology", "Research Facilities"],
      achievements: ["Research Excellence 2023", "15 Publications", "Diagnostic Innovation"]
    },
    {
      name: "Department of Microbiology",
      head: "Prof. Dr. F. Begum",
      faculty: 7,
      courses: 3,
      labs: 3,
      established: "2011",
      description: "Study of microorganisms, their characteristics, and role in health and disease.",
      facilities: ["Microbiology Lab", "Virology Lab", "Immunology Lab", "Research Center"],
      achievements: ["Microbiology Excellence 2023", "18 Publications", "WHO Collaborations"]
    },
    {
      name: "Department of Forensic Medicine",
      head: "Prof. Dr. A. Rahman",
      faculty: 7,
      courses: 3,
      labs: 2,
      established: "2011",
      description: "Application of medical knowledge to legal problems and investigation of deaths and injuries.",
      facilities: ["Forensic Lab", "Museum", "Research Facilities", "Court Liaison Office"],
      achievements: ["Forensic Excellence 2023", "12 Publications", "Legal Medicine Awards"]
    }
  ]

  const courses = [
    {
      code: "PHAR-201",
      name: "General Pharmacology",
      department: "Pharmacology",
      credits: 4,
      duration: "6 Months",
      type: "Theory + Practical",
      description: "Comprehensive study of pharmacodynamics, pharmacokinetics, and major drug classes."
    },
    {
      code: "PATH-201",
      name: "General Pathology",
      department: "Pathology",
      credits: 4,
      duration: "6 Months",
      type: "Theory + Practical",
      description: "Study of basic pathological processes, inflammation, and neoplasia."
    },
    {
      code: "MICR-201",
      name: "General Microbiology",
      department: "Microbiology",
      credits: 4,
      duration: "6 Months",
      type: "Theory + Practical",
      description: "Study of bacteriology, virology, mycology, and immunology."
    },
    {
      code: "FORE-201",
      name: "Forensic Medicine",
      department: "Forensic Medicine",
      credits: 3,
      duration: "6 Months",
      type: "Theory + Practical",
      description: "Introduction to forensic principles, medicolegal investigations, and toxicology."
    },
    {
      code: "PHAR-202",
      name: "Systemic Pharmacology",
      department: "Pharmacology",
      credits: 3,
      duration: "6 Months",
      type: "Theory + Practical",
      description: "Study of drugs affecting specific organ systems and their clinical applications."
    },
    {
      code: "PATH-202",
      name: "Systemic Pathology",
      department: "Pathology",
      credits: 3,
      duration: "6 Months",
      type: "Theory + Practical",
      description: "Study of pathology of specific organ systems and disease processes."
    }
  ]

  const facilities = [
    {
      name: "Pharmacology Laboratory",
      type: "Laboratory",
      capacity: 40,
      equipment: ["Animal Experiment Setup", "Drug Testing Equipment", "Data Acquisition Systems", "Research Tools"],
      available: true,
      description: "Modern facility for pharmacological research and drug testing."
    },
    {
      name: "Pathology Laboratory",
      type: "Laboratory",
      capacity: 35,
      equipment: ["Microscopes", "Tissue Processors", "Staining Equipment", "Diagnostic Tools"],
      available: true,
      description: "Well-equipped laboratory for histopathology and clinical pathology."
    },
    {
      name: "Microbiology Laboratory",
      type: "Laboratory",
      capacity: 30,
      equipment: ["Culture Media", "Incubators", "Microscopes", "Safety Cabinets"],
      available: true,
      description: "Advanced facility for microbiological research and diagnostics."
    },
    {
      name: "Forensic Laboratory",
      type: "Laboratory",
      capacity: 25,
      equipment: ["Analysis Equipment", "Documentation Tools", "Evidence Storage", "Research Instruments"],
      available: true,
      description: "Specialized facility for forensic analysis and investigation."
    },
    {
      name: "Animal House",
      type: "Research Facility",
      capacity: 20,
      equipment: ["Animal Housing", "Surgical Setup", "Post-operative Care", "Research Equipment"],
      available: true,
      description: "Modern facility for animal research and experimental studies."
    },
    {
      name: "Clinical Skills Lab",
      type: "Skills Lab",
      capacity: 45,
      equipment: ["Simulators", "Mannequins", "Training Equipment", "Assessment Tools"],
      available: true,
      description: "State-of-the-art facility for clinical skills development."
    }
  ]

  const achievements = [
    {
      title: "Best Para-Clinical Department Award",
      year: "2023",
      category: "Academic Excellence",
      description: "Recognized for outstanding performance in para-clinical sciences education.",
      impact: "High"
    },
    {
      title: "Research Excellence Award",
      year: "2023",
      category: "Research",
      description: "Awarded for significant contributions to para-clinical research.",
      impact: "High"
    },
    {
      title: "Clinical Skills Innovation",
      year: "2022",
      category: "Education",
      description: "Recognized for implementing innovative clinical teaching methodologies.",
      impact: "Medium"
    },
    {
      title: "Community Service Excellence",
      year: "2022",
      category: "Community Service",
      description: "Awarded for outstanding community health initiatives and outreach programs.",
      impact: "High"
    }
  ]

  const facultyHighlights = [
    {
      name: "Prof. Dr. S. Khatun",
      designation: "Professor & Head",
      department: "Pharmacology",
      experience: "20 years",
      publications: 38,
      awards: ["Best Teacher Award 2023", "Research Excellence 2022"],
      specialization: "Clinical Pharmacology, Drug Development"
    },
    {
      name: "Prof. Dr. M. Ahmed",
      designation: "Professor & Head",
      department: "Pathology",
      experience: "18 years",
      publications: 32,
      awards: ["Pathology Excellence 2023", "Best Publication 2022"],
      specialization: "Histopathology, Molecular Pathology"
    },
    {
      name: "Prof. Dr. F. Begum",
      designation: "Professor & Head",
      department: "Microbiology",
      experience: "15 years",
      publications: 28,
      awards: ["Microbiology Excellence 2023", "Innovation Award 2022"],
      specialization: "Medical Microbiology, Immunology"
    },
    {
      name: "Prof. Dr. A. Rahman",
      designation: "Professor & Head",
      department: "Forensic Medicine",
      experience: "22 years",
      publications: 25,
      awards: ["Forensic Excellence 2023", "Legal Medicine Award 2022"],
      specialization: "Forensic Pathology, Toxicology"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Pill className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Phase II - General Information</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Bridge to Clinical Medicine - Para-Clinical Sciences</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Para-Clinical Sciences</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Department Overview */}
          <Card className="shadow-lg border-0 mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentOverview.totalStudents}</div>
                  <div className="text-sm text-gray-600">Total Students</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentOverview.facultyCount}</div>
                  <div className="text-sm text-gray-600">Faculty Members</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentOverview.courses}</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentOverview.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
                {departmentOverview.description}
              </p>
            </CardContent>
          </Card>

          {/* Departments */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <Building className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{dept.name}</h3>
                        <p className="text-sm text-blue-600 font-medium">Head: {dept.head}</p>
                        <p className="text-sm text-gray-600">Established: {dept.established}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{dept.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <User className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{dept.faculty}</div>
                        <div className="text-xs text-gray-600">Faculty</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <BookOpen className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="font-semibold">{dept.courses}</div>
                        <div className="text-xs text-gray-600">Courses</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <TestTube className="w-5 h-5 text-green-600 mx-auto mb-1" />
                        <div className="font-semibold">{dept.labs}</div>
                        <div className="text-xs text-gray-600">Labs</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Facilities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.facilities.map((facility, facilityIndex) => (
                          <span key={facilityIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Department Details
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Courses Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{course.name}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {course.code}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Department:</span>
                        <span className="font-medium">{course.department}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Credits:</span>
                        <span className="font-medium">{course.credits}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="font-medium">{course.type}</span>
                      </div>
                    </div>

                    <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      View Course Details
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{facility.name}</h3>
                        <p className="text-sm text-gray-600">{facility.type}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                          facility.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {facility.available ? 'AVAILABLE' : 'MAINTENANCE'}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{facility.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{facility.capacity}</div>
                        <div className="text-xs text-gray-600">Capacity</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Settings className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="font-semibold">{facility.equipment.length}</div>
                        <div className="text-xs text-gray-600">Equipment</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Equipment:</h4>
                      <div className="space-y-1">
                        {facility.equipment.slice(0, 3).map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {item}
                          </div>
                        ))}
                        {facility.equipment.length > 3 && (
                          <div className="text-sm text-blue-600 font-medium">
                            +{facility.equipment.length - 3} more items
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Faculty Highlights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Faculty Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facultyHighlights.map((faculty, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <User className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{faculty.name}</h3>
                        <p className="text-sm text-blue-600 font-medium">{faculty.designation}</p>
                        <p className="text-sm text-gray-600">{faculty.department}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{faculty.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>{faculty.publications} publications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{faculty.specialization}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Recent Awards:</h4>
                      <div className="flex flex-wrap gap-2">
                        {faculty.awards.map((award, awardIndex) => (
                          <span key={awardIndex} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                            {award}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            achievement.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {achievement.impact} IMPACT
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {achievement.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {achievement.year}
                          </span>
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
                <h2 className="text-3xl font-bold mb-6">Phase II Office</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For inquiries about Phase II programs, admissions, or departmental information, please contact our office.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Phase Office</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email Contact</h3>
                      <p className="text-gray-600 text-sm">phase2@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Para-Clinical Block, Room 201</p>
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
