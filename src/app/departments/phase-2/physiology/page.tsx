"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, Eye as EyeIcon, Activity as HeartActivity } from "lucide-react"

export default function PhysiologyPage() {
  const departmentInfo = {
    name: "Department of Physiology - Phase 2",
    head: "Prof. Dr. S. Khatun",
    established: "2010",
    faculty: 10,
    students: 180,
    courses: 3,
    labs: 4,
    description: "The Phase 2 Physiology program focuses on advanced physiological concepts, clinical applications, and integrated understanding of body systems in disease states. We emphasize clinical correlation and problem-based learning."
  }

  const faculty = [
    {
      name: "Prof. Dr. S. Khatun",
      designation: "Professor & Head",
      qualifications: "MBBS, M.Phil, PhD",
      experience: "20 years",
      specialization: "Clinical Neurophysiology, Cardiovascular Pathophysiology",
      email: "s.khatun@rcmc.edu.bd",
      phone: "Ext: 2346",
      publications: 38,
      research: "Neurophysiology, Autonomic Nervous System",
      image: "/faculty/s-khatun.jpg"
    },
    {
      name: "Assoc. Prof. Dr. M. Rahman",
      designation: "Associate Professor",
      qualifications: "MBBS, M.Phil",
      experience: "15 years",
      specialization: "Clinical Respiratory Physiology, Exercise Pathophysiology",
      email: "m.rahman@rcmc.edu.bd",
      phone: "Ext: 2347",
      publications: 25,
      research: "Respiratory Mechanics, Exercise Physiology",
      image: "/faculty/m-rahman.jpg"
    },
    {
      name: "Asst. Prof. Dr. A. Karim",
      designation: "Assistant Professor",
      qualifications: "MBBS, M.Phil",
      experience: "8 years",
      specialization: "Endocrine Disorders, Metabolic Pathophysiology",
      email: "a.karim@rcmc.edu.bd",
      phone: "Ext: 2348",
      publications: 18,
      research: "Hormonal Regulation, Metabolic Disorders",
      image: "/faculty/a-karim.jpg"
    },
    {
      name: "Dr. N. Ahmed",
      designation: "Lecturer",
      qualifications: "MBBS, M.Phil (Pursuing)",
      experience: "5 years",
      specialization: "Gastrointestinal Pathophysiology, Renal Disorders",
      email: "n.ahmed@rcmc.edu.bd",
      phone: "Ext: 2349",
      publications: 8,
      research: "GI Motility, Renal Function",
      image: "/faculty/n-ahmed.jpg"
    }
  ]

  const courses = [
    {
      code: "PHYS-201",
      name: "Systemic Physiology & Pathophysiology",
      semester: "3rd Year, 1st Semester",
      credits: 6,
      type: "Theory + Practical",
      duration: "1 Year",
      description: "Advanced study of systemic physiology with emphasis on pathophysiological mechanisms and clinical correlations.",
      topics: ["Cardiovascular Pathophysiology", "Respiratory Disorders", "Renal Pathophysiology", "Acid-Base Disorders"],
      prerequisites: "PHYS-101, PHYS-102, PHYS-103, PHYS-104"
    },
    {
      code: "PHYS-202",
      name: "Clinical Physiology",
      semester: "3rd Year, 2nd Semester",
      credits: 5,
      type: "Theory + Practical",
      duration: "6 Months",
      description: "Clinical applications of physiological principles in diagnosis and management of diseases.",
      topics: ["Clinical Examination", "Diagnostic Tests", "Physiological Monitoring", "Emergency Physiology"],
      prerequisites: "PHYS-201"
    },
    {
      code: "PHYS-203",
      name: "Integrated Physiology",
      semester: "4th Year, 1st Semester",
      credits: 4,
      type: "Theory + Practical",
      duration: "6 Months",
      description: "Integration of physiological concepts across organ systems with clinical problem-solving.",
      topics: ["Multi-system Disorders", "Physiological Adaptation", "Critical Care Physiology", "Aging Physiology"],
      prerequisites: "PHYS-202"
    }
  ]

  const laboratories = [
    {
      name: "Clinical Physiology Laboratory",
      type: "Teaching Lab",
      capacity: 40,
      equipment: [
        "ECG Machines",
        "Pulse Oximeters",
        "Blood Pressure Monitors",
        "Peak Flow Meters",
        "Glucometers",
        "Clinical Examination Equipment"
      ],
      experiments: [
        "Clinical Examination Skills",
        "Physiological Parameter Measurement",
        "Diagnostic Test Interpretation",
        "Case-based Learning",
        "Clinical Correlation Exercises"
      ],
      schedule: "Monday - Friday, 8:00 AM - 5:00 PM",
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Pathophysiology Laboratory",
      type: "Research Lab",
      capacity: 20,
      equipment: [
        "Advanced Monitoring Systems",
        "Data Acquisition Systems",
        "Simulation Equipment",
        "Research Microscopes",
        "Physiological Modeling Software",
        "Clinical Decision Support Tools"
      ],
      experiments: [
        "Disease Mechanism Studies",
        "Physiological Modeling",
        "Clinical Research Projects",
        "Case Study Analysis",
        "Evidence-based Physiology"
      ],
      schedule: "By Appointment",
      incharge: "Prof. Dr. S. Khatun"
    },
    {
      name: "Skills Laboratory",
      type: "Skills Lab",
      capacity: 30,
      equipment: [
        "Mannequins",
        "Simulation Models",
        "Clinical Skills Equipment",
        "Audio-visual Aids",
        "Computer Systems",
        "Assessment Tools"
      ],
      experiments: [
        "Clinical Skills Practice",
        "Procedural Skills",
        "Emergency Scenarios",
        "Patient Communication",
        "Team-based Learning"
      ],
      schedule: "Monday - Saturday, 9:00 AM - 6:00 PM",
      incharge: "Assoc. Prof. Dr. M. Rahman"
    },
    {
      name: "Computer Laboratory",
      type: "Computer Lab",
      capacity: 30,
      equipment: [
        "Computers with Physiology Software",
        "Clinical Simulation Programs",
        "E-learning Platforms",
        "Internet Access",
        "Multimedia Projectors",
        "Assessment Software"
      ],
      experiments: [
        "Virtual Clinical Scenarios",
        "Physiological Data Analysis",
        "Case-based Learning",
        "Online Assessments",
        "Research Data Management"
      ],
      schedule: "Monday - Friday, 8:00 AM - 8:00 PM",
      incharge: "Asst. Prof. Dr. A. Karim"
    }
  ]

  const researchProjects = [
    {
      title: "Cardiovascular Autonomic Dysfunction in Metabolic Syndrome",
      principalInvestigator: "Prof. Dr. S. Khatun",
      coInvestigators: ["Assoc. Prof. Dr. M. Rahman", "Asst. Prof. Dr. A. Karim"],
      duration: "2024-2026",
      funding: "BDT 800,000",
      status: "Ongoing",
      description: "Clinical study of autonomic cardiovascular changes in metabolic syndrome patients.",
      publications: 3,
      impact: "High"
    },
    {
      title: "Physiological Markers in COVID-19 Recovery",
      principalInvestigator: "Assoc. Prof. Dr. M. Rahman",
      coInvestigators: ["Dr. N. Ahmed"],
      duration: "2023-2025",
      funding: "BDT 600,000",
      status: "Ongoing",
      description: "Long-term physiological assessment of COVID-19 survivors.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Endocrine Disruptors and Metabolic Health",
      principalInvestigator: "Asst. Prof. Dr. A. Karim",
      coInvestigators: ["Prof. Dr. S. Khatun"],
      duration: "2024-2027",
      funding: "BDT 700,000",
      status: "Starting",
      description: "Impact of environmental endocrine disruptors on metabolic physiology.",
      publications: 0,
      impact: "High"
    }
  ]

  const achievements = [
    {
      title: "Excellence in Clinical Physiology Teaching",
      year: "2024",
      category: "Academic Excellence",
      description: "Recognized for outstanding clinical physiology education and student outcomes.",
      impact: "High"
    },
    {
      title: "Best Clinical Research Award",
      year: "2023",
      category: "Research",
      description: "Awarded for significant contributions to clinical physiological research.",
      impact: "High"
    },
    {
      title: "Innovation in Medical Education",
      year: "2023",
      category: "Education",
      description: "Recognized for implementing innovative clinical teaching methodologies.",
      impact: "Medium"
    },
    {
      title: "Best Clinical Publication Award",
      year: "2022",
      category: "Research",
      description: "Awarded for outstanding clinical research publication.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Clinical Physiology Workshop 2024",
      date: "2024-12-18",
      time: "9:00 AM - 5:00 PM",
      venue: "Clinical Skills Lab",
      type: "Workshop",
      organizer: "Prof. Dr. S. Khatun",
      participants: "Phase 2 Students",
      description: "Hands-on workshop on clinical physiology skills and procedures."
    },
    {
      title: "Case Study Discussion Series",
      date: "2024-12-22",
      time: "2:00 PM - 4:00 PM",
      venue: "Seminar Room",
      type: "Seminar",
      organizer: "Assoc. Prof. Dr. M. Rahman",
      participants: "Faculty & Students",
      description: "Interactive case-based learning sessions."
    },
    {
      title: "Clinical Research Symposium",
      date: "2024-12-28",
      time: "10:00 AM - 1:00 PM",
      venue: "Lecture Hall",
      type: "Symposium",
      organizer: "Asst. Prof. Dr. A. Karim",
      participants: "Research Scholars",
      description: "Presentation of ongoing clinical research projects."
    }
  ]

  const resources = [
    {
      title: "Clinical Physiology Manual",
      description: "Comprehensive guide for clinical physiology procedures",
      type: "PDF",
      size: "6.8 MB",
      downloadCount: 980,
      category: "Clinical Manual"
    },
    {
      title: "Pathophysiology Lecture Notes",
      description: "Complete lecture notes for systemic pathophysiology",
      type: "PDF",
      size: "10.2 MB",
      downloadCount: 1450,
      category: "Study Material"
    },
    {
      title: "Clinical Case Studies",
      description: "Collection of clinical cases with physiological correlations",
      type: "PDF",
      size: "4.5 MB",
      downloadCount: 2100,
      category: "Case Studies"
    },
    {
      title: "Physiological Assessment Videos",
      description: "Demonstration videos of clinical physiology procedures",
      type: "Video",
      size: "320 MB",
      downloadCount: 650,
      category: "Multimedia"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <HeartPulse className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Physiology - Phase 2</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Clinical Physiology and Pathophysiology</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Clinical Sciences</div>
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
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentInfo.faculty}</div>
                  <div className="text-sm text-gray-600">Faculty Members</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentInfo.students}</div>
                  <div className="text-sm text-gray-600">Phase 2 Students</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentInfo.courses}</div>
                  <div className="text-sm text-gray-600">Advanced Courses</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentInfo.labs}</div>
                  <div className="text-sm text-gray-600">Clinical Labs</div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
                {departmentInfo.description}
              </p>
              <div className="text-center mt-6">
                <p className="text-lg font-semibold text-gray-800">
                  Head of Department: {departmentInfo.head}
                </p>
                <p className="text-sm text-gray-600">
                  Established: {departmentInfo.established}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Faculty Members */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Faculty Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faculty.map((member, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <User className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-sm text-blue-600 font-medium">{member.designation}</p>
                        <p className="text-sm text-gray-600">{member.qualifications}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Brain className="w-4 h-4" />
                        <span>{member.specialization}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{member.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>{member.publications} publications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span className="text-blue-600">{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{member.phone}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Research Focus:</h4>
                      <p className="text-sm text-gray-600">{member.research}</p>
                    </div>

                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Full Profile
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Phase 2 Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <span>Semester:</span>
                        <span className="font-medium">{course.semester}</span>
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
                      <div className="flex justify-between">
                        <span>Prerequisites:</span>
                        <span className="font-medium">{course.prerequisites}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {topic}
                          </span>
                        ))}
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

          {/* Laboratories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Laboratories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {laboratories.map((lab, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Stethoscope className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{lab.name}</h3>
                        <p className="text-sm text-gray-600">{lab.type}</p>
                        <p className="text-sm text-blue-600 font-medium">Incharge: {lab.incharge}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{lab.capacity}</div>
                        <div className="text-xs text-gray-600">Capacity</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Settings className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="font-semibold">{lab.equipment.length}</div>
                        <div className="text-xs text-gray-600">Equipment</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Equipment:</h4>
                      <div className="space-y-1">
                        {lab.equipment.slice(0, 3).map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {item}
                          </div>
                        ))}
                        {lab.equipment.length > 3 && (
                          <div className="text-sm text-blue-600 font-medium">
                            +{lab.equipment.length - 3} more items
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-medium">{lab.schedule}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Projects */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Research Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchProjects.map((project, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Search className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                        <p className="text-sm text-blue-600 font-medium">PI: {project.principalInvestigator}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 
                          project.status === 'Starting' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{project.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Funding:</span>
                        <span className="font-medium">{project.funding}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Publications:</span>
                        <span className="font-medium">{project.publications}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Co-Investigators:</h4>
                      <div className="space-y-1">
                        {project.coInvestigators.map((coPI, coPIIndex) => (
                          <div key={coPIIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            {coPI}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {project.impact} IMPACT
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View Details →
                      </button>
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

          {/* Upcoming Events */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <CalendarDays className="w-6 h-6 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {event.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Date: {event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Time: {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Venue: {event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Organizer: {event.organizer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>Participants: {event.participants}</span>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      Register for Event
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{resource.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                              {resource.type}
                            </span>
                            <span>{resource.size}</span>
                          </div>
                          <div className="text-sm text-blue-600 font-medium">
                            {resource.downloadCount} downloads
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {resource.category}
                          </span>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
