"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, Eye as EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, FileSearch as FileSearchIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FlaskConical as FlaskIcon, Dna as DnaIcon, Microscope as MicroscopeIcon } from "lucide-react"

export default function PathologyPage() {
  const departmentInfo = {
    name: "Department of Pathology - Phase 3",
    head: "Prof. Dr. M. Ahmed",
    established: "2011",
    faculty: 12,
    students: 180,
    courses: 3,
    labs: 5,
    description: "The Phase 3 Pathology program focuses on clinical pathology, diagnostic techniques, and advanced disease mechanisms. We emphasize laboratory medicine, histopathology, and molecular diagnostics for clinical practice."
  }

  const faculty = [
    {
      name: "Prof. Dr. M. Ahmed",
      designation: "Professor & Head",
      qualifications: "MBBS, M.Phil, PhD",
      experience: "22 years",
      specialization: "Histopathology, Molecular Pathology",
      email: "m.ahmed@rcmc.edu.bd",
      phone: "Ext: 2370",
      publications: 48,
      research: "Cancer Pathology, Molecular Diagnostics",
      image: "/faculty/m-ahmed.jpg"
    },
    {
      name: "Assoc. Prof. Dr. S. Khatun",
      designation: "Associate Professor",
      qualifications: "MBBS, M.Phil",
      experience: "18 years",
      specialization: "Clinical Pathology, Hematology",
      email: "s.khatun@rcmc.edu.bd",
      phone: "Ext: 2371",
      publications: 35,
      research: "Hematological Disorders, Clinical Chemistry",
      image: "/faculty/s-khatun.jpg"
    },
    {
      name: "Asst. Prof. Dr. A. Rahman",
      designation: "Assistant Professor",
      qualifications: "MBBS, M.Phil",
      experience: "12 years",
      specialization: "Cytopathology, Forensic Pathology",
      email: "a.rahman@rcmc.edu.bd",
      phone: "Ext: 2372",
      publications: 28,
      research: "Cytopathology, Cancer Screening",
      image: "/faculty/a-rahman.jpg"
    },
    {
      name: "Dr. N. Begum",
      designation: "Lecturer",
      qualifications: "MBBS, M.Phil (Pursuing)",
      experience: "7 years",
      specialization: "Immunohistochemistry, Molecular Techniques",
      email: "n.begum@rcmc.edu.bd",
      phone: "Ext: 2373",
      publications: 15,
      research: "Immunohistochemistry, Diagnostic Markers",
      image: "/faculty/n-begum.jpg"
    }
  ]

  const courses = [
    {
      code: "PATH-301",
      name: "Clinical Pathology I",
      semester: "3rd Year, 1st Semester",
      credits: 5,
      type: "Theory + Practical",
      duration: "6 Months",
      description: "Advanced study of clinical pathology with emphasis on laboratory diagnostics and interpretation.",
      topics: ["Clinical Chemistry", "Hematology", "Clinical Microscopy", "Quality Control"],
      prerequisites: "Basic Pathology"
    },
    {
      code: "PATH-302",
      name: "Histopathology & Cytopathology",
      semester: "3rd Year, 2nd Semester",
      credits: 6,
      type: "Theory + Practical",
      duration: "6 Months",
      description: "Comprehensive study of tissue pathology and cytopathology with clinical correlations.",
      topics: ["Histopathology", "Cytopathology", "Immunohistochemistry", "Molecular Pathology"],
      prerequisites: "PATH-301"
    },
    {
      code: "PATH-303",
      name: "Advanced Diagnostic Pathology",
      semester: "4th Year, 1st Semester",
      credits: 4,
      type: "Theory + Practical",
      duration: "6 Months",
      description: "Integration of advanced diagnostic techniques and molecular pathology in clinical practice.",
      topics: ["Molecular Diagnostics", "Flow Cytometry", "Electron Microscopy", "Digital Pathology"],
      prerequisites: "PATH-302"
    }
  ]

  const laboratories = [
    {
      name: "Histopathology Laboratory",
      type: "Diagnostic Lab",
      capacity: 30,
      equipment: [
        "Automated Tissue Processor",
        "Microtomes",
        "Staining Machines",
        "Microscopes",
        "Slide Scanner",
        "Digital Pathology System"
      ],
      tests: [
        "Tissue Processing",
        "Section Cutting",
        "H&E Staining",
        "Special Stains",
        "Immunohistochemistry"
      ],
      schedule: "Monday - Friday, 8:00 AM - 6:00 PM",
      incharge: "Prof. Dr. M. Ahmed"
    },
    {
      name: "Clinical Pathology Laboratory",
      type: "Diagnostic Lab",
      capacity: 25,
      equipment: [
        "Autoanalyzers",
        "Hematology Analyzers",
        "Coagulation Analyzers",
        "Urine Analyzers",
        "Microscopes",
        "Centrifuges"
      ],
      tests: [
        "Complete Blood Count",
        "Biochemical Tests",
        "Urine Analysis",
        "Coagulation Tests",
        "Body Fluid Analysis"
      ],
      schedule: "24/7 Service",
      incharge: "Assoc. Prof. Dr. S. Khatun"
    },
    {
      name: "Cytopathology Laboratory",
      type: "Diagnostic Lab",
      capacity: 20,
      equipment: [
        "Liquid-based Cytology",
        "Pap Staining Equipment",
        "Microscopes",
        "Digital Imaging",
        "Screening Systems",
        "Reporting Software"
      ],
      tests: [
        "Pap Smear",
        "FNAC",
        "Body Fluid Cytology",
        "Urine Cytology",
        "Screening Programs"
      ],
      schedule: "Monday - Saturday, 8:00 AM - 8:00 PM",
      incharge: "Asst. Prof. Dr. A. Rahman"
    },
    {
      name: "Molecular Pathology Laboratory",
      type: "Research Lab",
      capacity: 15,
      equipment: [
        "PCR Machines",
        "DNA Sequencers",
        "Real-time PCR",
        "Gel Electrophoresis",
        "Hybridization Systems",
        "Bioinformatics Tools"
      ],
      tests: [
        "PCR Testing",
        "Molecular Markers",
        "Genetic Testing",
        "Pathogen Detection",
        "Cancer Markers"
      ],
      schedule: "Monday - Friday, 9:00 AM - 5:00 PM",
      incharge: "Dr. N. Begum"
    },
    {
      name: "Teaching Laboratory",
      type: "Educational Lab",
      capacity: 40,
      equipment: [
        "Teaching Microscopes",
        "Slide Sets",
        "Digital Microscopes",
        "Multimedia Projectors",
        "Teaching Aids",
        "Assessment Tools"
      ],
      tests: [
        "Practical Classes",
        "Slide Review",
        "Skill Development",
        "Case Studies",
        "Assessment Sessions"
      ],
      schedule: "Monday - Friday, 8:00 AM - 5:00 PM",
      incharge: "Dr. N. Begum"
    }
  ]

  const diagnosticServices = [
    {
      name: "Histopathology Service",
      description: "Comprehensive tissue diagnosis with advanced staining techniques",
      tests: ["Biopsy Processing", "Surgical Specimens", "Autopsy Tissue", "Special Stains", "IHC"],
      volume: "1500 cases/month",
      turnaround: "3-5 days",
      quality: "ISO 15189 Certified"
    },
    {
      name: "Clinical Pathology Service",
      description: "Routine and specialized clinical pathology testing",
      tests: ["CBC", "Biochemistry", "Urine Analysis", "Body Fluids", "Coagulation"],
      volume: "5000 tests/day",
      turnaround: "2-24 hours",
      quality: "NABL Accredited"
    },
    {
      name: "Cytopathology Service",
      description: "Screening and diagnostic cytology services",
      tests: ["Pap Smear", "FNAC", "Body Fluid Cytology", "Screening Programs"],
      volume: "800 cases/month",
      turnaround: "1-2 days",
      quality: "Bethesda System"
    },
    {
      name: "Molecular Diagnostics",
      description: "Advanced molecular testing for precision medicine",
      tests: ["PCR", "Molecular Markers", "Genetic Testing", "Pathogen Detection"],
      volume: "300 tests/month",
      turnaround: "2-7 days",
      quality: "CAP Accredited"
    }
  ]

  const researchProjects = [
    {
      title: "Molecular Markers in Breast Cancer",
      principalInvestigator: "Prof. Dr. M. Ahmed",
      coInvestigators: ["Assoc. Prof. Dr. S. Khatun", "Dr. N. Begum"],
      duration: "2024-2026",
      funding: "BDT 900,000",
      status: "Ongoing",
      description: "Study of molecular markers for breast cancer prognosis and treatment planning.",
      publications: 4,
      impact: "High"
    },
    {
      title: "Hematological Disorders in Local Population",
      principalInvestigator: "Assoc. Prof. Dr. S. Khatun",
      coInvestigators: ["Asst. Prof. Dr. A. Rahman"],
      duration: "2023-2025",
      funding: "BDT 600,000",
      status: "Ongoing",
      description: "Epidemiological study of hematological disorders in the local population.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Digital Pathology Implementation",
      principalInvestigator: "Asst. Prof. Dr. A. Rahman",
      coInvestigators: ["Prof. Dr. M. Ahmed"],
      duration: "2024-2027",
      funding: "BDT 800,000",
      status: "Starting",
      description: "Implementation and validation of digital pathology systems for diagnostic accuracy.",
      publications: 1,
      impact: "High"
    }
  ]

  const qualityAssurance = [
    {
      name: "Internal Quality Control",
      description: "Daily quality control procedures for all laboratory tests",
      frequency: "Daily",
      parameters: ["Control Materials", "Levey-Jennings Charts", "Westgard Rules", "Trend Analysis"],
      compliance: "98%"
    },
    {
      name: "External Quality Assurance",
      description: "Participation in national and international EQA programs",
      frequency: "Quarterly",
      parameters: ["Proficiency Testing", "Inter-lab Comparison", "Standardized Samples", "Performance Evaluation"],
      compliance: "95%"
    },
    {
      name: "Accreditation Compliance",
      description: "Maintenance of national and international accreditation standards",
      frequency: "Continuous",
      parameters: ["ISO Standards", "NABL Requirements", "CAP Guidelines", "Documentation"],
      compliance: "100%"
    },
    {
      name: "Proficiency Development",
      description: "Continuous training and skill development for laboratory staff",
      frequency: "Monthly",
      parameters: ["Training Programs", "Skill Assessment", "Competency Evaluation", "Certification"],
      compliance: "92%"
    }
  ]

  const achievements = [
    {
      title: "Best Pathology Department Award",
      year: "2024",
      category: "Academic Excellence",
      description: "Recognized for outstanding pathology education and diagnostic services.",
      impact: "High"
    },
    {
      title: "Research Excellence Award",
      year: "2023",
      category: "Research",
      description: "Awarded for significant contributions to pathology research and publications.",
      impact: "High"
    },
    {
      title: "Quality Assurance Excellence",
      year: "2023",
      category: "Quality",
      description: "Recognized for exceptional quality management and accreditation compliance.",
      impact: "High"
    },
    {
      title: "Innovation in Diagnostic Services",
      year: "2022",
      category: "Innovation",
      description: "Awarded for implementing innovative diagnostic technologies and services.",
      impact: "Medium"
    }
  ]

  const upcomingEvents = [
    {
      title: "Pathology Workshop 2024",
      date: "2024-12-26",
      time: "9:00 AM - 5:00 PM",
      venue: "Pathology Department",
      type: "Workshop",
      organizer: "Prof. Dr. M. Ahmed",
      participants: "Pathology Professionals",
      description: "Annual workshop on recent advances in pathology and diagnostic techniques."
    },
    {
      title: "Molecular Pathology Seminar",
      date: "2024-12-29",
      time: "2:00 PM - 4:00 PM",
      venue: "Molecular Lab",
      type: "Seminar",
      organizer: "Dr. N. Begum",
      participants: "Faculty & Students",
      description: "Interactive session on molecular pathology techniques and applications."
    },
    {
      title: "Quality Assurance Conference",
      date: "2025-01-02",
      time: "10:00 AM - 1:00 PM",
      venue: "Conference Hall",
      type: "Conference",
      organizer: "Assoc. Prof. Dr. S. Khatun",
      participants: "Laboratory Professionals",
      description: "Conference on quality assurance and laboratory accreditation."
    }
  ]

  const resources = [
    {
      title: "Pathology Laboratory Manual",
      description: "Comprehensive guide for pathology laboratory procedures and techniques",
      type: "PDF",
      size: "9.2 MB",
      downloadCount: 1850,
      category: "Lab Manual"
    },
    {
      title: "Histopathology Atlas",
      description: "Complete atlas of histopathological slides and diagnostic criteria",
      type: "PDF",
      size: "45.5 MB",
      downloadCount: 2200,
      category: "Atlas"
    },
    {
      title: "Quality Control Protocols",
      description: "Detailed protocols for laboratory quality control and assurance",
      type: "PDF",
      size: "6.8 MB",
      downloadCount: 1400,
      category: "Protocols"
    },
    {
      title: "Molecular Pathology Techniques",
      description: "Video demonstrations of molecular pathology procedures and techniques",
      type: "Video",
      size: "750 MB",
      downloadCount: 850,
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
                <MicroscopeIcon className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Pathology - Phase 3</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Diagnostic Pathology and Laboratory Medicine</p>
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
                  <div className="text-sm text-gray-600">Phase 3 Students</div>
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
                    <FlaskIcon className="w-8 h-8 text-orange-600" />
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Phase 3 Courses</h2>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {laboratories.map((lab, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <MicroscopeIcon className="w-6 h-6" />
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

          {/* Diagnostic Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Diagnostic Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {diagnosticServices.map((service, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FileSearchIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {service.quality}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-3 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Key Tests:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {service.tests.slice(0, 4).map((test, testIndex) => (
                            <span key={testIndex} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              {test}
                            </span>
                          ))}
                          {service.tests.length > 4 && (
                            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              +{service.tests.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="font-semibold">{service.volume}</div>
                        <div className="text-xs text-gray-600">Volume</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-semibold">{service.turnaround}</div>
                        <div className="text-xs text-gray-600">Turnaround</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <CheckCircleIcon className="w-4 h-4 text-green-600 mx-auto mb-1" />
                        <div className="text-xs text-gray-600">Quality</div>
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
                        <DnaIcon className="w-6 h-6" />
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

          {/* Quality Assurance */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Quality Assurance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {qualityAssurance.map((qa, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <CheckCircleIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{qa.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          qa.compliance >= '95%' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {qa.compliance} Compliance
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{qa.description}</p>
                    
                    <div className="space-y-3 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Frequency:</span> {qa.frequency}
                      </div>
                      <div>
                        <span className="font-medium">Parameters:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {qa.parameters.slice(0, 3).map((param, paramIndex) => (
                            <span key={paramIndex} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              {param}
                            </span>
                          ))}
                          {qa.parameters.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              +{qa.parameters.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="font-medium">Compliance Rate:</span>
                        <span className="font-medium text-green-600">{qa.compliance}</span>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Pathology Resources</h2>
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
