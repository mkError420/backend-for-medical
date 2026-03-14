"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, Eye as EyeIcon, Activity as HeartActivity } from "lucide-react"

export default function BiochemistryPage() {
  const departmentInfo = {
    name: "Department of Biochemistry",
    head: "Prof. Dr. M. Ahmed",
    established: "2010",
    faculty: 8,
    students: 250,
    courses: 3,
    labs: 3,
    description: "The Department of Biochemistry focuses on understanding the chemical processes within and relating to living organisms. We provide comprehensive education in biochemical principles, molecular biology, and clinical applications through theoretical knowledge and practical training."
  }

  const faculty = [
    {
      name: "Prof. Dr. M. Ahmed",
      designation: "Professor & Head",
      qualifications: "MBBS, M.Phil, PhD",
      experience: "18 years",
      specialization: "Clinical Biochemistry, Molecular Biology",
      email: "m.ahmed@rcmc.edu.bd",
      phone: "Ext: 2350",
      publications: 32,
      research: "Clinical Biochemistry, Molecular Diagnostics",
      image: "/faculty/m-ahmed.jpg"
    },
    {
      name: "Assoc. Prof. Dr. N. Khatun",
      designation: "Associate Professor",
      qualifications: "MBBS, M.Phil",
      experience: "15 years",
      specialization: "Enzymology, Metabolism",
      email: "n.khatun@rcmc.edu.bd",
      phone: "Ext: 2351",
      publications: 28,
      research: "Enzyme Kinetics, Metabolic Disorders",
      image: "/faculty/n-khatun.jpg"
    },
    {
      name: "Asst. Prof. Dr. R. Islam",
      designation: "Assistant Professor",
      qualifications: "MBBS, M.Phil",
      experience: "9 years",
      specialization: "Nutritional Biochemistry, Vitamins",
      email: "r.islam@rcmc.edu.bd",
      phone: "Ext: 2352",
      publications: 20,
      research: "Nutritional Biochemistry, Vitamin Metabolism",
      image: "/faculty/r-islam.jpg"
    },
    {
      name: "Dr. S. Begum",
      designation: "Lecturer",
      qualifications: "MBBS, M.Phil (Pursuing)",
      experience: "5 years",
      specialization: "Immunology, Hormone Chemistry",
      email: "s.begum@rcmc.edu.bd",
      phone: "Ext: 2353",
      publications: 10,
      research: "Clinical Immunology, Hormonal Analysis",
      image: "/faculty/s-begum.jpg"
    }
  ]

  const courses = [
    {
      code: "BIOC-101",
      name: "General Biochemistry",
      semester: "1st Semester",
      credits: 4,
      type: "Theory + Practical",
      duration: "1 Year",
      description: "Fundamental concepts of biochemistry including structure and function of biomolecules, enzymes, and metabolism.",
      topics: ["Biomolecules", "Enzymes", "Carbohydrate Metabolism", "Protein Chemistry"],
      prerequisites: "None"
    },
    {
      code: "BIOC-102",
      name: "Metabolism & Nutrition",
      semester: "2nd Semester",
      credits: 4,
      type: "Theory + Practical",
      duration: "1 Year",
      description: "Study of metabolic pathways, nutritional biochemistry, and clinical applications.",
      topics: ["Lipid Metabolism", "Protein Metabolism", "Nutrition", "Vitamins & Minerals"],
      prerequisites: "BIOC-101"
    },
    {
      code: "BIOC-103",
      name: "Molecular Biology & Genetics",
      semester: "3rd Semester",
      credits: 3,
      type: "Theory + Practical",
      duration: "6 Months",
      description: "Introduction to molecular biology, DNA technology, and genetic principles.",
      topics: ["DNA Structure", "RNA Processing", "Gene Expression", "Molecular Techniques"],
      prerequisites: "BIOC-102"
    }
  ]

  const laboratories = [
    {
      name: "Biochemistry Laboratory",
      type: "Teaching Lab",
      capacity: 30,
      equipment: [
        "Spectrophotometers",
        "Centrifuges",
        "pH Meters",
        "Water Baths",
        "Incubators",
        "Analytical Balances"
      ],
      experiments: [
        "Qualitative Analysis",
        "Quantitative Estimations",
        "Enzyme Assays",
        "Metabolic Studies"
      ],
      schedule: "Monday - Friday, 8:00 AM - 5:00 PM",
      incharge: "Dr. S. Begum"
    },
    {
      name: "Instrumentation Laboratory",
      type: "Advanced Lab",
      capacity: 20,
      equipment: [
        "HPLC System",
        "GC-MS",
        "Electrophoresis Setup",
        "PCR Machine",
        "Spectrofluorometer",
        "Atomic Absorption Spectrophotometer"
      ],
      experiments: [
        "Chromatography",
        "Electrophoresis",
        "PCR Techniques",
        "Advanced Analysis"
      ],
      schedule: "Monday - Friday, 9:00 AM - 6:00 PM",
      incharge: "Asst. Prof. Dr. R. Islam"
    },
    {
      name: "Research Laboratory",
      type: "Research Facility",
      capacity: 15,
      equipment: [
        "Cell Culture Facilities",
        "Molecular Biology Equipment",
        "Cold Storage",
        "Safety Cabinets",
        "Autoclave",
        "Research Microscopes"
      ],
      experiments: [
        "Research Projects",
        "Thesis Work",
        "Publications",
        "Innovation Projects"
      ],
      schedule: "Monday - Saturday, 8:00 AM - 8:00 PM",
      incharge: "Prof. Dr. M. Ahmed"
    }
  ]

  const researchProjects = [
    {
      title: "Biomarkers for Early Detection of Diabetes",
      principalInvestigator: "Prof. Dr. M. Ahmed",
      coInvestigators: ["Assoc. Prof. Dr. N. Khatun", "Asst. Prof. Dr. R. Islam"],
      duration: "2023-2025",
      funding: "BDT 600,000",
      status: "Ongoing",
      description: "Identification and validation of novel biomarkers for early diabetes detection.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Nutritional Status Assessment in Rural Areas",
      principalInvestigator: "Asst. Prof. Dr. R. Islam",
      coInvestigators: ["Dr. S. Begum"],
      duration: "2023-2024",
      funding: "BDT 400,000",
      status: "Ongoing",
      description: "Assessment of nutritional deficiencies and their impact on health in rural populations.",
      publications: 1,
      impact: "Medium"
    },
    {
      title: "Enzyme Kinetics in Metabolic Disorders",
      principalInvestigator: "Assoc. Prof. Dr. N. Khatun",
      coInvestigators: ["Prof. Dr. M. Ahmed"],
      duration: "2024-2026",
      funding: "BDT 550,000",
      status: "Starting",
      description: "Study of enzyme alterations in various metabolic disorders.",
      publications: 0,
      impact: "High"
    }
  ]

  const achievements = [
    {
      title: "Best Research Publication Award",
      year: "2023",
      category: "Research",
      description: "Awarded for outstanding research publication in international journal.",
      impact: "High"
    },
    {
      title: "Excellence in Laboratory Services",
      year: "2022",
      category: "Service",
      description: "Recognized for excellence in clinical laboratory services.",
      impact: "Medium"
    },
    {
      title: "Innovation in Teaching Methods",
      year: "2022",
      category: "Education",
      description: "Awarded for implementing innovative teaching methodologies in biochemistry.",
      impact: "Medium"
    },
    {
      title: "Research Grant Achievement",
      year: "2021",
      category: "Research",
      description: "Received significant research grant for molecular biology studies.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Biochemistry Workshop 2024",
      date: "2024-12-20",
      time: "9:00 AM - 5:00 PM",
      venue: "Biochemistry Department",
      type: "Workshop",
      organizer: "Prof. Dr. M. Ahmed",
      participants: "Faculty & Students",
      description: "Annual workshop on recent advances in biochemical sciences."
    },
    {
      title: "Molecular Biology Seminar",
      date: "2024-12-23",
      time: "2:00 PM - 4:00 PM",
      venue: "Seminar Room",
      type: "Seminar",
      organizer: "Assoc. Prof. Dr. N. Khatun",
      participants: "Research Scholars",
      description: "Seminar on advanced molecular biology techniques."
    },
    {
      title: "Laboratory Skills Competition",
      date: "2024-12-26",
      time: "10:00 AM - 1:00 PM",
      venue: "Biochemistry Lab",
      type: "Competition",
      organizer: "Asst. Prof. Dr. R. Islam",
      participants: "MBBS Students",
      description: "Annual laboratory skills competition for students."
    }
  ]

  const resources = [
    {
      title: "Biochemistry Laboratory Manual",
      description: "Comprehensive guide for all biochemistry practical experiments",
      type: "PDF",
      size: "6.8 MB",
      downloadCount: 1450,
      category: "Lab Manual"
    },
    {
      title: "Metabolic Pathways Chart",
      description: "Visual guide to major metabolic pathways",
      type: "PDF",
      size: "12.5 MB",
      downloadCount: 2800,
      category: "Study Material"
    },
    {
      title: "Molecular Biology Protocols",
      description: "Step-by-step protocols for molecular biology techniques",
      type: "PDF",
      size: "4.2 MB",
      downloadCount: 980,
      category: "Protocol"
    },
    {
      title: "Question Bank",
      description: "Collection of previous biochemistry exam questions",
      type: "PDF",
      size: "2.9 MB",
      downloadCount: 3500,
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
                <Dna className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Biochemistry</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Exploring the Molecular Basis of Life</p>
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
                    <Beaker className="w-8 h-8 text-orange-600" />
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
                        <Beaker className="w-6 h-6" />
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
                  For inquiries about the Department of Biochemistry, courses, or research opportunities, please contact us.
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
                      <p className="text-gray-600 text-sm">biochemistry@rcmc.edu.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Office Location</h3>
                      <p className="text-gray-600 text-sm">Basic Sciences Block, Room 103</p>
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
