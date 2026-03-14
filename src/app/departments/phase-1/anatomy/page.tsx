"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, Eye as EyeIcon, Activity as HeartActivity } from "lucide-react"

export default function AnatomyPage() {
  const departmentInfo = {
    name: "Department of Anatomy",
    head: "Prof. Dr. A. Rahman",
    established: "2010",
    faculty: 12,
    students: 250,
    courses: 4,
    labs: 3,
    description: "The Department of Anatomy is committed to excellence in teaching human anatomy through comprehensive theoretical knowledge, practical dissection, and modern educational methodologies. We provide students with a strong foundation in anatomical sciences essential for medical practice."
  }

  const faculty = [
    {
      name: "Prof. Dr. A. Rahman",
      designation: "Professor & Head",
      qualifications: "MBBS, M.Phil (Anatomy)",
      experience: "22 years",
      specialization: "Gross Anatomy, Neuroanatomy",
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
      specialization: "Histology, Embryology",
      email: "m.karim@rcmc.edu.bd",
      phone: "Ext: 2346",
      publications: 32,
      research: "Histology, Developmental Anatomy",
      image: "/faculty/m-karim.jpg"
    },
    {
      name: "Asst. Prof. Dr. S. Begum",
      designation: "Assistant Professor",
      qualifications: "MBBS, M.Phil",
      experience: "10 years",
      specialization: "Regional Anatomy, Applied Anatomy",
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
      specialization: "Surface Anatomy, Radiological Anatomy",
      email: "r.islam@rcmc.edu.bd",
      phone: "Ext: 2348",
      publications: 12,
      research: "Radiological Anatomy, Teaching Methods",
      image: "/faculty/r-islam.jpg"
    }
  ]

  const courses = [
    {
      code: "ANAT-101",
      name: "General Anatomy",
      semester: "1st Semester",
      credits: 5,
      type: "Theory + Practical",
      duration: "1 Year",
      description: "Comprehensive study of general anatomical principles, terminology, and introduction to human body systems.",
      topics: ["Anatomical Terminology", "Introduction to Systems", "Body Cavities", "Basic Tissues"],
      prerequisites: "None"
    },
    {
      code: "ANAT-102",
      name: "Gross Anatomy I",
      semester: "2nd Semester",
      credits: 6,
      type: "Theory + Practical",
      duration: "1 Year",
      description: "Detailed study of upper and lower limb anatomy including osteology, arthrology, and myology.",
      topics: ["Upper Limb Anatomy", "Lower Limb Anatomy", "Joints", "Muscle Groups"],
      prerequisites: "ANAT-101"
    },
    {
      code: "ANAT-103",
      name: "Gross Anatomy II",
      semester: "3rd Semester",
      credits: 6,
      type: "Theory + Practical",
      duration: "1 Year",
      description: "Study of thorax, abdomen, and pelvis anatomy with clinical correlations.",
      topics: ["Thoracic Anatomy", "Abdominal Anatomy", "Pelvic Anatomy", "Clinical Correlations"],
      prerequisites: "ANAT-102"
    },
    {
      code: "ANAT-104",
      name: "Neuroanatomy & Embryology",
      semester: "4th Semester",
      credits: 5,
      type: "Theory + Practical",
      duration: "6 Months",
      description: "Study of central and peripheral nervous systems and human embryology.",
      topics: ["Central Nervous System", "Peripheral Nervous System", "Human Embryology", "Developmental Anomalies"],
      prerequisites: "ANAT-103"
    }
  ]

  const laboratories = [
    {
      name: "Dissection Hall",
      type: "Practical Lab",
      capacity: 60,
      equipment: [
        "Dissection Tables",
        "Ventilation System",
        "Storage Facilities",
        "Demonstration Area",
        "Audio-Visual Equipment",
        "Preservation Tanks"
      ],
      activities: [
        "Human Cadaver Dissection",
        "Demonstration Sessions",
        "Practical Examinations",
        "Skill Development"
      ],
      schedule: "Monday - Friday, 8:00 AM - 5:00 PM",
      incharge: "Dr. R. Islam"
    },
    {
      name: "Histology Laboratory",
      type: "Microscopy Lab",
      capacity: 30,
      equipment: [
        "Compound Microscopes",
        "Microtomes",
        "Staining Equipment",
        "Slide Preparation Tools",
        "Digital Imaging System",
        "Projector Microscope"
      ],
      activities: [
        "Tissue Processing",
        "Slide Preparation",
        "Microscopic Study",
        "Digital Imaging"
      ],
      schedule: "Monday - Friday, 8:00 AM - 5:00 PM",
      incharge: "Assoc. Prof. Dr. M. Karim"
    },
    {
      name: "Anatomy Museum",
      type: "Educational Museum",
      capacity: 50,
      equipment: [
        "Anatomical Specimens",
        "Models and Charts",
        "Skeletons",
        "Digital Displays",
        "Interactive Stations",
        "Study Areas"
      ],
      activities: [
        "Self-Study Sessions",
        "Guided Tours",
        "Demonstrations",
        "Examinations"
      ],
      schedule: "Monday - Saturday, 9:00 AM - 6:00 PM",
      incharge: "Asst. Prof. Dr. S. Begum"
    }
  ]

  const researchProjects = [
    {
      title: "Morphometric Study of Skull Foramina",
      principalInvestigator: "Prof. Dr. A. Rahman",
      coInvestigators: ["Assoc. Prof. Dr. M. Karim", "Asst. Prof. Dr. S. Begum"],
      duration: "2023-2025",
      funding: "BDT 400,000",
      status: "Ongoing",
      description: "Study of variations in skull foramina and their clinical significance.",
      publications: 1,
      impact: "Medium"
    },
    {
      title: "Applied Anatomy of Surgical Approaches",
      principalInvestigator: "Asst. Prof. Dr. S. Begum",
      coInvestigators: ["Prof. Dr. A. Rahman"],
      duration: "2023-2024",
      funding: "BDT 350,000",
      status: "Ongoing",
      description: "Anatomical basis for various surgical approaches and their clinical applications.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Developmental Anomalies in Bangladeshi Population",
      principalInvestigator: "Assoc. Prof. Dr. M. Karim",
      coInvestigators: ["Dr. R. Islam"],
      duration: "2024-2026",
      funding: "BDT 500,000",
      status: "Starting",
      description: "Study of congenital anomalies and their prevalence in local population.",
      publications: 0,
      impact: "High"
    }
  ]

  const achievements = [
    {
      title: "Best Anatomy Department Award",
      year: "2023",
      category: "Academic Excellence",
      description: "Recognized for outstanding performance in anatomical education and research.",
      impact: "High"
    },
    {
      title: "Excellence in Teaching Methods",
      year: "2022",
      category: "Education",
      description: "Awarded for innovative teaching methodologies in anatomy.",
      impact: "Medium"
    },
    {
      title: "Research Publication Award",
      year: "2022",
      category: "Research",
      description: "Recognized for high-impact publications in anatomical sciences.",
      impact: "High"
    },
    {
      title: "Museum Development Award",
      year: "2021",
      category: "Infrastructure",
      description: "Awarded for significant development of anatomy museum facilities.",
      impact: "Medium"
    }
  ]

  const upcomingEvents = [
    {
      title: "Anatomy Workshop 2024",
      date: "2024-12-18",
      time: "9:00 AM - 5:00 PM",
      venue: "Anatomy Department",
      type: "Workshop",
      organizer: "Prof. Dr. A. Rahman",
      participants: "Faculty & Students",
      description: "Annual workshop on recent advances in anatomical sciences."
    },
    {
      title: "Dissection Competition",
      date: "2024-12-22",
      time: "10:00 AM - 2:00 PM",
      venue: "Dissection Hall",
      type: "Competition",
      organizer: "Assoc. Prof. Dr. M. Karim",
      participants: "MBBS Students",
      description: "Inter-batch dissection skill competition."
    },
    {
      title: "Anatomy Quiz Competition",
      date: "2024-12-25",
      time: "2:00 PM - 4:00 PM",
      venue: "Lecture Hall",
      type: "Competition",
      organizer: "Asst. Prof. Dr. S. Begum",
      participants: "MBBS Students",
      description: "Annual anatomy quiz competition for students."
    }
  ]

  const resources = [
    {
      title: "Dissection Manual",
      description: "Comprehensive guide for human cadaver dissection",
      type: "PDF",
      size: "8.5 MB",
      downloadCount: 1800,
      category: "Lab Manual"
    },
    {
      title: "Anatomy Atlas",
      description: "Digital atlas of human anatomical structures",
      type: "PDF",
      size: "45.2 MB",
      downloadCount: 3200,
      category: "Study Material"
    },
    {
      title: "Histology Slide Collection",
      description: "Digital collection of histological slides",
      type: "Image Gallery",
      size: "120 MB",
      downloadCount: 950,
      category: "Multimedia"
    },
    {
      title: "Question Bank",
      description: "Collection of previous anatomy exam questions",
      type: "PDF",
      size: "3.8 MB",
      downloadCount: 4100,
      category: "Exam Prep"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Anatomy</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Exploring the Structure and Form of Human Body</p>
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
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentInfo.courses}</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Microscope className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentInfo.labs}</div>
                  <div className="text-sm text-gray-600">Laboratories</div>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Courses Offered</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Laboratories</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Research Projects</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{resource.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <FileIcon className="w-4 h-4" />
                            {resource.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Database className="w-4 h-4" />
                            {resource.size}
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            {resource.downloadCount} downloads
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                            {resource.category}
                          </span>
                          <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center gap-1">
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

          {/* Contact Information */}
          <Card className="shadow-lg border-0 bg-white text-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  For inquiries about the Department of Anatomy, courses, or research opportunities, please contact us.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Department Office</h3>
                      <p className="text-gray-600 text-sm">+88-0123456789</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email Contact</h3>
                      <p className="text-gray-600 text-sm">anatomy@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Basic Sciences Block, Room 102</p>
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
