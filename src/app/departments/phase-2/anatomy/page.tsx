"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, Eye as EyeIcon, Activity as HeartActivity } from "lucide-react"

export default function AnatomyPage() {
  const departmentInfo = {
    name: "Department of Anatomy - Phase 2",
    head: "Prof. Dr. A. Rahman",
    established: "2010",
    faculty: 12,
    students: 180,
    courses: 3,
    labs: 4,
    description: "The Phase 2 Anatomy program focuses on advanced clinical anatomy, surgical anatomy, and radiological correlations. We emphasize applied anatomical knowledge essential for clinical practice and surgical procedures."
  }

  const faculty = [
    {
      name: "Prof. Dr. A. Rahman",
      designation: "Professor & Head",
      qualifications: "MBBS, M.Phil (Anatomy)",
      experience: "22 years",
      specialization: "Surgical Anatomy, Neuroanatomy",
      email: "a.rahman@rcmc.edu.bd",
      phone: "Ext: 2345",
      publications: 45,
      research: "Neuroanatomy, Clinical Anatomy",
      image: "/faculty/a-rahman.jpg"
    },
    {
      name: "Assoc. Prof. Dr. M. Karim",
      designation: "Associate Professor",
      qualifications: "MBBS, M.Phil",
      experience: "18 years",
      specialization: "Radiological Anatomy, Imaging",
      email: "m.karim@rcmc.edu.bd",
      phone: "Ext: 2346",
      publications: 32,
      research: "Radiological Anatomy, Medical Imaging",
      image: "/faculty/m-karim.jpg"
    },
    {
      name: "Asst. Prof. Dr. S. Begum",
      designation: "Assistant Professor",
      qualifications: "MBBS, M.Phil",
      experience: "10 years",
      specialization: "Applied Anatomy, Surgical Approaches",
      email: "s.begum@rcmc.edu.bd",
      phone: "Ext: 2347",
      publications: 22,
      research: "Applied Anatomy, Surgical Anatomy",
      image: "/faculty/s-begum.jpg"
    },
    {
      name: "Dr. R. Islam",
      designation: "Lecturer",
      qualifications: "MBBS, M.Phil (Pursuing)",
      experience: "6 years",
      specialization: "Surface Anatomy, Clinical Correlations",
      email: "r.islam@rcmc.edu.bd",
      phone: "Ext: 2348",
      publications: 12,
      research: "Surface Anatomy, Clinical Teaching",
      image: "/faculty/r-islam.jpg"
    }
  ]

  const courses = [
    {
      code: "ANAT-201",
      name: "Applied Anatomy I",
      semester: "3rd Year, 1st Semester",
      credits: 6,
      type: "Theory + Practical",
      duration: "1 Year",
      description: "Advanced study of applied anatomy with emphasis on clinical correlations and surgical approaches.",
      topics: ["Surgical Anatomy", "Clinical Correlations", "Applied Neuroanatomy", "Surface Anatomy"],
      prerequisites: "ANAT-101, ANAT-102, ANAT-103, ANAT-104"
    },
    {
      code: "ANAT-202",
      name: "Radiological Anatomy",
      semester: "3rd Year, 2nd Semester",
      credits: 5,
      type: "Theory + Practical",
      duration: "6 Months",
      description: "Comprehensive study of cross-sectional anatomy and radiological imaging correlations.",
      topics: ["CT Anatomy", "MRI Anatomy", "Ultrasound Anatomy", "Radiographic Interpretation"],
      prerequisites: "ANAT-201"
    },
    {
      code: "ANAT-203",
      name: "Advanced Clinical Anatomy",
      semester: "4th Year, 1st Semester",
      credits: 4,
      type: "Theory + Practical",
      duration: "6 Months",
      description: "Integration of anatomical knowledge with clinical procedures and emergency medicine.",
      topics: ["Emergency Anatomy", "Procedure-based Anatomy", "Anatomical Variations", "Clinical Problem Solving"],
      prerequisites: "ANAT-202"
    }
  ]

  const laboratories = [
    {
      name: "Dissection Hall",
      type: "Teaching Lab",
      capacity: 60,
      equipment: [
        "Dissection Tables",
        "Cadaver Storage",
        "Surgical Instruments",
        "Anatomical Models",
        "Microscopes",
        "Ventilation System"
      ],
      experiments: [
        "Advanced Dissection",
        "Surgical Approaches",
        "Anatomical Variations",
        "Clinical Correlations",
        "Procedural Anatomy"
      ],
      schedule: "Monday - Friday, 8:00 AM - 5:00 PM",
      incharge: "Dr. R. Islam"
    },
    {
      name: "Radiology Lab",
      type: "Imaging Lab",
      capacity: 30,
      equipment: [
        "Digital Radiography System",
        "CT Scanner Access",
        "MRI Viewer",
        "Ultrasound Machine",
        "PACS System",
        "3D Reconstruction Software"
      ],
      experiments: [
        "Radiological Anatomy",
        "Cross-sectional Studies",
        "Image Interpretation",
        "3D Anatomy Visualization",
        "Clinical Imaging Correlations"
      ],
      schedule: "Monday - Friday, 9:00 AM - 6:00 PM",
      incharge: "Assoc. Prof. Dr. M. Karim"
    },
    {
      name: "Surgical Anatomy Lab",
      type: "Skills Lab",
      capacity: 25,
      equipment: [
        "Surgical Simulators",
        "Anatomical Specimens",
        "Surgical Instruments",
        "Endoscopic Equipment",
        "Video Recording System",
        "Assessment Tools"
      ],
      experiments: [
        "Surgical Approach Training",
        "Endoscopic Anatomy",
        "Procedure Simulation",
        "Anatomical Landmark Identification",
        "Complication Management"
      ],
      schedule: "Monday - Saturday, 8:00 AM - 8:00 PM",
      incharge: "Asst. Prof. Dr. S. Begum"
    },
    {
      name: "Digital Anatomy Lab",
      type: "Computer Lab",
      capacity: 40,
      equipment: [
        "3D Anatomy Software",
        "Virtual Reality Systems",
        "Interactive Tables",
        "Computers with Anatomy Programs",
        "Multimedia Projectors",
        "Assessment Software"
      ],
      experiments: [
        "Virtual Dissection",
        "3D Anatomy Exploration",
        "Interactive Learning",
        "Assessment and Testing",
        "Research Projects"
      ],
      schedule: "Monday - Friday, 8:00 AM - 8:00 PM",
      incharge: "Prof. Dr. A. Rahman"
    }
  ]

  const researchProjects = [
    {
      title: "Anatomical Variations in Bangladeshi Population",
      principalInvestigator: "Prof. Dr. A. Rahman",
      coInvestigators: ["Assoc. Prof. Dr. M. Karim", "Asst. Prof. Dr. S. Begum"],
      duration: "2024-2026",
      funding: "BDT 700,000",
      status: "Ongoing",
      description: "Comprehensive study of anatomical variations in the local population for clinical relevance.",
      publications: 4,
      impact: "High"
    },
    {
      title: "Radiological Anatomy Database Development",
      principalInvestigator: "Assoc. Prof. Dr. M. Karim",
      coInvestigators: ["Dr. R. Islam"],
      duration: "2023-2025",
      funding: "BDT 500,000",
      status: "Ongoing",
      description: "Development of a comprehensive radiological anatomy database for teaching and reference.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Surgical Anatomy Innovation Methods",
      principalInvestigator: "Asst. Prof. Dr. S. Begum",
      coInvestigators: ["Prof. Dr. A. Rahman"],
      duration: "2024-2027",
      funding: "BDT 600,000",
      status: "Starting",
      description: "Innovative teaching methods for surgical anatomy using modern technology.",
      publications: 1,
      impact: "Medium"
    }
  ]

  const achievements = [
    {
      title: "Excellence in Clinical Anatomy Teaching",
      year: "2024",
      category: "Academic Excellence",
      description: "Recognized for outstanding clinical anatomy education and innovative teaching methods.",
      impact: "High"
    },
    {
      title: "Best Anatomical Research Award",
      year: "2023",
      category: "Research",
      description: "Awarded for significant contributions to anatomical research and clinical applications.",
      impact: "High"
    },
    {
      title: "Innovation in Anatomy Education",
      year: "2023",
      category: "Education",
      description: "Recognized for implementing innovative digital anatomy teaching methodologies.",
      impact: "Medium"
    },
    {
      title: "Best Surgical Anatomy Publication",
      year: "2022",
      category: "Research",
      description: "Awarded for outstanding surgical anatomy research publication.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Surgical Anatomy Workshop 2024",
      date: "2024-12-20",
      time: "9:00 AM - 5:00 PM",
      venue: "Surgical Anatomy Lab",
      type: "Workshop",
      organizer: "Prof. Dr. A. Rahman",
      participants: "Phase 2 Students",
      description: "Hands-on workshop on surgical approaches and anatomical landmarks."
    },
    {
      title: "Radiological Anatomy Seminar",
      date: "2024-12-25",
      time: "2:00 PM - 4:00 PM",
      venue: "Radiology Lab",
      type: "Seminar",
      organizer: "Assoc. Prof. Dr. M. Karim",
      participants: "Faculty & Students",
      description: "Interactive session on radiological anatomy and imaging correlations."
    },
    {
      title: "Clinical Anatomy Case Conference",
      date: "2024-12-30",
      time: "10:00 AM - 1:00 PM",
      venue: "Dissection Hall",
      type: "Conference",
      organizer: "Asst. Prof. Dr. S. Begum",
      participants: "Clinical Faculty",
      description: "Case-based conference on clinical anatomy applications."
    }
  ]

  const resources = [
    {
      title: "Clinical Anatomy Atlas",
      description: "Comprehensive atlas of clinical anatomy with surgical correlations",
      type: "PDF",
      size: "45.2 MB",
      downloadCount: 2100,
      category: "Atlas"
    },
    {
      title: "Radiological Anatomy Guide",
      description: "Complete guide to radiological anatomy and image interpretation",
      type: "PDF",
      size: "28.5 MB",
      downloadCount: 1850,
      category: "Imaging"
    },
    {
      title: "Surgical Anatomy Videos",
      description: "Demonstration videos of surgical approaches and anatomical dissections",
      type: "Video",
      size: "850 MB",
      downloadCount: 1200,
      category: "Multimedia"
    },
    {
      title: "Applied Anatomy Notes",
      description: "Comprehensive notes on applied anatomy for clinical practice",
      type: "PDF",
      size: "12.3 MB",
      downloadCount: 3200,
      category: "Study Material"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Bone className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Anatomy - Phase 2</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Clinical Anatomy and Surgical Applications</p>
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
                    <Microscope className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentInfo.labs}</div>
                  <div className="text-sm text-gray-600">Specialized Labs</div>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Specialized Laboratories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {laboratories.map((lab, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Microscope className="w-6 h-6" />
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Anatomy Research Projects</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Anatomy Resources</h2>
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
