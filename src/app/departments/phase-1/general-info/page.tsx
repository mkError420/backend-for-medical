"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, Eye as EyeIcon } from "lucide-react"

export default function Phase1GeneralInfoPage() {
  const departmentOverview = {
    name: "Phase I - Basic Sciences",
    duration: "2 Years",
    totalStudents: 250,
    facultyCount: 45,
    courses: 16,
    established: "2010",
    description: "Phase I provides the foundation of medical education through comprehensive study of basic medical sciences, preparing students for clinical training in subsequent phases."
  }

  const departments = [
    {
      name: "Department of Anatomy",
      head: "Prof. Dr. A. Rahman",
      faculty: 12,
      courses: 4,
      labs: 3,
      established: "2010",
      description: "Comprehensive study of human anatomy through theoretical knowledge and practical dissection experience.",
      facilities: ["Dissection Hall", "Museum", "Histology Lab", "Research Lab"],
      achievements: ["Best Department Award 2023", "25 Research Publications", "International Collaborations"]
    },
    {
      name: "Department of Physiology",
      head: "Prof. Dr. S. Khatun",
      faculty: 10,
      courses: 4,
      labs: 4,
      established: "2010",
      description: "Study of normal functions of human body systems and their regulatory mechanisms.",
      facilities: ["Physiology Labs", "Research Facilities", "Animal House", "Computer Lab"],
      achievements: ["Excellence in Teaching 2023", "15 Research Publications", "Modern Lab Setup"]
    },
    {
      name: "Department of Biochemistry",
      head: "Prof. Dr. M. Ahmed",
      faculty: 8,
      courses: 3,
      labs: 3,
      established: "2010",
      description: "Understanding chemical processes within and relating to living organisms at molecular level.",
      facilities: ["Biochemistry Labs", "Instrument Room", "Research Lab", "Quality Control Lab"],
      achievements: ["Research Excellence 2023", "20 Publications", "Advanced Equipment"]
    },
    {
      name: "Department of Community Medicine",
      head: "Prof. Dr. F. Begum",
      faculty: 15,
      courses: 5,
      labs: 2,
      established: "2010",
      description: "Study of health and disease in population groups and community-based healthcare approaches.",
      facilities: ["Community Lab", "Statistics Lab", "Field Practice Areas", "Research Center"],
      achievements: ["Community Service Award 2023", "30 Field Projects", "WHO Collaborations"]
    }
  ]

  const courses = [
    {
      code: "ANAT-101",
      name: "General Anatomy",
      department: "Anatomy",
      credits: 5,
      duration: "1 Year",
      type: "Theory + Practical",
      description: "Comprehensive study of human gross anatomy, embryology, and histology."
    },
    {
      code: "PHYS-101",
      name: "General Physiology",
      department: "Physiology",
      credits: 5,
      duration: "1 Year",
      type: "Theory + Practical",
      description: "Study of normal functions of various organ systems and homeostatic mechanisms."
    },
    {
      code: "BIOC-101",
      name: "General Biochemistry",
      department: "Biochemistry",
      credits: 4,
      duration: "1 Year",
      type: "Theory + Practical",
      description: "Fundamental concepts of biochemistry including metabolism, enzymes, and molecular biology."
    },
    {
      code: "COMM-101",
      name: "Community Medicine",
      department: "Community Medicine",
      credits: 4,
      duration: "1 Year",
      type: "Theory + Field Work",
      description: "Introduction to public health, epidemiology, and community healthcare management."
    },
    {
      code: "ANAT-102",
      name: "Neuroanatomy",
      department: "Anatomy",
      credits: 3,
      duration: "6 Months",
      type: "Theory + Practical",
      description: "Detailed study of central and peripheral nervous system anatomy."
    },
    {
      code: "PHYS-102",
      name: "Special Physiology",
      department: "Physiology",
      credits: 3,
      duration: "6 Months",
      type: "Theory + Practical",
      description: "Advanced topics in physiology including neurophysiology and endocrinology."
    }
  ]

  const facilities = [
    {
      name: "Dissection Hall",
      type: "Laboratory",
      capacity: 60,
      equipment: ["Dissection Tables", "Ventilation System", "Storage Facilities", "Demonstration Area"],
      available: true,
      description: "State-of-the-art facility for anatomical dissection and practical training."
    },
    {
      name: "Physiology Laboratory",
      type: "Laboratory",
      capacity: 40,
      equipment: ["Physiological Recording Systems", "Experiment Setups", "Computer Systems", "Data Analysis Tools"],
      available: true,
      description: "Modern equipment for conducting physiological experiments and demonstrations."
    },
    {
      name: "Biochemistry Laboratory",
      type: "Laboratory",
      capacity: 30,
      equipment: ["Spectrophotometers", "Centrifuges", "Chromatography Systems", "Molecular Biology Equipment"],
      available: true,
      description: "Well-equipped laboratory for biochemical analysis and research."
    },
    {
      name: "Anatomy Museum",
      type: "Museum",
      capacity: 50,
      equipment: ["Specimens", "Models", "Charts", "Digital Displays"],
      available: true,
      description: "Extensive collection of anatomical specimens and models for learning."
    },
    {
      name: "Computer Laboratory",
      type: "Computer Lab",
      capacity: 45,
      equipment: ["Computers", "Internet Access", "Educational Software", "Simulation Tools"],
      available: true,
      description: "Modern computer facility for e-learning and research activities."
    },
    {
      name: "Research Laboratory",
      type: "Research",
      capacity: 20,
      equipment: ["Advanced Microscopes", "PCR Machines", "Cell Culture Facilities", "Research Equipment"],
      available: true,
      description: "Dedicated research facility for faculty and student research projects."
    }
  ]

  const achievements = [
    {
      title: "Best Basic Sciences Department Award",
      year: "2023",
      category: "Academic Excellence",
      description: "Recognized for outstanding performance in basic medical sciences education.",
      impact: "High"
    },
    {
      title: "Research Excellence Award",
      year: "2023",
      category: "Research",
      description: "Awarded for significant contributions to medical research in basic sciences.",
      impact: "High"
    },
    {
      title: "Innovation in Teaching Methods",
      year: "2022",
      category: "Education",
      description: "Recognized for implementing innovative teaching methodologies.",
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
      name: "Prof. Dr. A. Rahman",
      designation: "Professor & Head",
      department: "Anatomy",
      experience: "22 years",
      publications: 45,
      awards: ["Best Teacher Award 2023", "Research Excellence 2022"],
      specialization: "Gross Anatomy, Neuroanatomy"
    },
    {
      name: "Prof. Dr. S. Khatun",
      designation: "Professor & Head",
      department: "Physiology",
      experience: "20 years",
      publications: 38,
      awards: ["Excellence in Teaching 2023", "Innovation Award 2022"],
      specialization: "Neurophysiology, Cardiovascular Physiology"
    },
    {
      name: "Prof. Dr. M. Ahmed",
      designation: "Professor & Head",
      department: "Biochemistry",
      experience: "18 years",
      publications: 32,
      awards: ["Research Excellence 2023", "Best Publication 2022"],
      specialization: "Clinical Biochemistry, Molecular Biology"
    },
    {
      name: "Prof. Dr. F. Begum",
      designation: "Professor & Head",
      department: "Community Medicine",
      experience: "25 years",
      publications: 52,
      awards: ["Community Service Award 2023", "Public Health Leadership 2022"],
      specialization: "Epidemiology, Public Health Nutrition"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Microscope className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Phase I - General Information</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Foundation of Medical Education - Basic Sciences</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Basic Medical Sciences</div>
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
                        <Beaker className="w-5 h-5 text-green-600 mx-auto mb-1" />
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
                <h2 className="text-3xl font-bold mb-6">Phase I Office</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For inquiries about Phase I programs, admissions, or departmental information, please contact our office.
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
                      <p className="text-gray-600 text-sm">phase1@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Basic Sciences Block, Room 101</p>
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
