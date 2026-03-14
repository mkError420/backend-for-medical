"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, Eye as EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Bug, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FlaskConical as FlaskIcon, Dna as DnaIcon, Microscope as MicroscopeIcon } from "lucide-react"

export default function MicrobiologyPage() {
  const departmentInfo = {
    name: "Department of Microbiology - Phase 3",
    head: "Prof. Dr. F. Begum",
    established: "2011",
    faculty: 10,
    students: 180,
    courses: 3,
    labs: 5,
    description: "The Phase 3 Microbiology program focuses on clinical microbiology, infectious diseases, and advanced diagnostic techniques. We emphasize laboratory diagnosis, antimicrobial stewardship, and infection control in clinical practice."
  }

  const faculty = [
    {
      name: "Prof. Dr. F. Begum",
      designation: "Professor & Head",
      qualifications: "MBBS, M.Phil, PhD",
      experience: "20 years",
      specialization: "Medical Microbiology, Infection Control",
      email: "f.begum@rcmc.edu.bd",
      phone: "Ext: 2380",
      publications: 45,
      research: "Antimicrobial Resistance, Hospital Infections",
      image: "/faculty/f-begum.jpg"
    },
    {
      name: "Assoc. Prof. Dr. M. Rahman",
      designation: "Associate Professor",
      qualifications: "MBBS, M.Phil",
      experience: "16 years",
      specialization: "Virology, Immunology",
      email: "m.rahman@rcmc.edu.bd",
      phone: "Ext: 2381",
      publications: 38,
      research: "Viral Pathogenesis, Immunological Disorders",
      image: "/faculty/m-rahman.jpg"
    },
    {
      name: "Asst. Prof. Dr. S. Ahmed",
      designation: "Assistant Professor",
      qualifications: "MBBS, M.Phil",
      experience: "12 years",
      specialization: "Mycology, Parasitology",
      email: "s.ahmed@rcmc.edu.bd",
      phone: "Ext: 2382",
      publications: 25,
      research: "Fungal Infections, Parasitic Diseases",
      image: "/faculty/s-ahmed.jpg"
    },
    {
      name: "Dr. N. Khatun",
      designation: "Lecturer",
      qualifications: "MBBS, M.Phil (Pursuing)",
      experience: "6 years",
      specialization: "Molecular Microbiology, Diagnostic Techniques",
      email: "n.khatun@rcmc.edu.bd",
      phone: "Ext: 2383",
      publications: 12,
      research: "Molecular Diagnostics, Rapid Testing Methods",
      image: "/faculty/n-khatun.jpg"
    }
  ]

  const courses = [
    {
      code: "MICR-301",
      name: "Clinical Microbiology I",
      semester: "3rd Year, 1st Semester",
      credits: 5,
      type: "Theory + Practical",
      duration: "6 Months",
      description: "Advanced study of clinical microbiology with emphasis on diagnostic techniques and interpretation.",
      topics: ["Bacteriology", "Mycology", "Parasitology", "Laboratory Diagnosis"],
      prerequisites: "Basic Microbiology"
    },
    {
      code: "MICR-302",
      name: "Virology & Immunology",
      semester: "3rd Year, 2nd Semester",
      credits: 5,
      type: "Theory + Practical",
      duration: "6 Months",
      description: "Comprehensive study of virology, immunology, and their clinical applications.",
      topics: ["Viral Pathogenesis", "Clinical Virology", "Immunology", "Serology"],
      prerequisites: "MICR-301"
    },
    {
      code: "MICR-303",
      name: "Infection Control & Hospital Epidemiology",
      semester: "4th Year, 1st Semester",
      credits: 4,
      type: "Theory + Practical",
      duration: "6 Months",
      description: "Study of infection control practices, hospital epidemiology, and antimicrobial stewardship.",
      topics: ["Infection Control", "Hospital Epidemiology", "Antimicrobial Stewardship", "Outbreak Management"],
      prerequisites: "MICR-302"
    }
  ]

  const laboratories = [
    {
      name: "Bacteriology Laboratory",
      type: "Diagnostic Lab",
      capacity: 25,
      equipment: [
        "Autoclaves",
        "Incubators",
        "Microscopes",
        "Culture Media Equipment",
        "Automated Systems",
        "Biosafety Cabinets"
      ],
      tests: [
        "Culture & Sensitivity",
        "Identification Tests",
        "Biochemical Tests",
        "Serological Tests",
        "Rapid Tests"
      ],
      schedule: "Monday - Saturday, 8:00 AM - 8:00 PM",
      incharge: "Prof. Dr. F. Begum"
    },
    {
      name: "Virology Laboratory",
      type: "Diagnostic Lab",
      capacity: 20,
      equipment: [
        "PCR Machines",
        "Real-time PCR",
        "Cell Culture Facilities",
        "ELISA Readers",
        "Fluorescence Microscopes",
        "Viral Load Analyzers"
      ],
      tests: [
        "Viral PCR",
        "Serology",
        "Viral Culture",
        "Rapid Antigen Tests",
        "Viral Load Testing"
      ],
      schedule: "Monday - Friday, 9:00 AM - 6:00 PM",
      incharge: "Assoc. Prof. Dr. M. Rahman"
    },
    {
      name: "Mycology & Parasitology Lab",
      type: "Diagnostic Lab",
      capacity: 20,
      equipment: [
        "Microscopes",
        "Incubators",
        "Culture Systems",
        "Staining Equipment",
        "Diagnostic Kits",
        "Microscopy Equipment"
      ],
      tests: [
        "Fungal Culture",
        "Parasite Detection",
        "Staining Tests",
        "Serological Tests",
        "Molecular Tests"
      ],
      schedule: "Monday - Friday, 8:00 AM - 5:00 PM",
      incharge: "Asst. Prof. Dr. S. Ahmed"
    },
    {
      name: "Molecular Microbiology Laboratory",
      type: "Research Lab",
      capacity: 15,
      equipment: [
        "PCR Systems",
        "Sequencing Equipment",
        "Gel Electrophoresis",
        "Hybridization Systems",
        "Bioinformatics Tools",
        "Real-time PCR"
      ],
      tests: [
        "Molecular Detection",
        "Genotyping",
        "Resistance Testing",
        "Pathogen Identification",
        "Research Projects"
      ],
      schedule: "Monday - Friday, 9:00 AM - 5:00 PM",
      incharge: "Dr. N. Khatun"
    },
    {
      name: "Teaching Laboratory",
      type: "Educational Lab",
      capacity: 40,
      equipment: [
        "Teaching Microscopes",
        "Culture Demonstrations",
        "Staining Sets",
        "Multimedia Projectors",
        "Teaching Aids",
        "Assessment Tools"
      ],
      tests: [
        "Practical Classes",
        "Skill Development",
        "Case Studies",
        "Diagnostic Training",
        "Assessment Sessions"
      ],
      schedule: "Monday - Friday, 8:00 AM - 5:00 PM",
      incharge: "Dr. N. Khatun"
    }
  ]

  const diagnosticServices = [
    {
      name: "Bacteriology Service",
      description: "Comprehensive bacterial identification and antimicrobial susceptibility testing",
      tests: ["Culture & Sensitivity", "Identification", "Biochemical Tests", "Rapid Tests"],
      volume: "1200 samples/day",
      turnaround: "24-72 hours",
      pathogens: "50+ bacterial species"
    },
    {
      name: "Virology Service",
      description: "Advanced viral detection and monitoring services",
      tests: ["PCR Testing", "Serology", "Viral Load", "Rapid Antigen Tests"],
      volume: "500 samples/day",
      turnaround: "2-48 hours",
      pathogens: "30+ viral agents"
    },
    {
      name: "Mycology Service",
      description: "Fungal identification and antifungal susceptibility testing",
      tests: ["Fungal Culture", "Identification", "Susceptibility Testing", "Serology"],
      volume: "200 samples/day",
      turnaround: "48 hours-2 weeks",
      pathogens: "25+ fungal species"
    },
    {
      name: "Parasitology Service",
      description: "Parasite detection and identification services",
      tests: ["Microscopy", "Antigen Tests", "Serology", "Molecular Tests"],
      volume: "300 samples/day",
      turnaround: "2-24 hours",
      pathogens: "20+ parasites"
    }
  ]

  const infectionControlPrograms = [
    {
      name: "Hospital Infection Surveillance",
      description: "Active surveillance of hospital-acquired infections",
      activities: ["Ward Surveillance", "ICU Monitoring", "Surgical Site Infections", "Device-related Infections"],
      frequency: "Daily",
      outcomes: "Reduced HAI rates by 40%",
      compliance: "95%"
    },
    {
      name: "Antimicrobial Stewardship Program",
      description: "Optimization of antimicrobial use and resistance prevention",
      activities: ["Antibiotic Audits", "Guideline Development", "Education Programs", "Resistance Monitoring"],
      frequency: "Weekly",
      outcomes: "Reduced inappropriate use by 35%",
      compliance: "88%"
    },
    {
      name: "Outbreak Investigation",
      description: "Rapid response to infectious disease outbreaks",
      activities: ["Case Investigation", "Contact Tracing", "Environmental Sampling", "Control Measures"],
      frequency: "As needed",
      outcomes: "Average outbreak resolution: 7 days",
      compliance: "100%"
    },
    {
      name: "Sterilization Monitoring",
      description: "Quality control of sterilization processes",
      activities: ["Biological Monitoring", "Chemical Indicators", "Process Validation", "Staff Training"],
      frequency: "Daily",
      outcomes: "100% sterilization compliance",
      compliance: "98%"
    }
  ]

  const researchProjects = [
    {
      title: "Antimicrobial Resistance Patterns",
      principalInvestigator: "Prof. Dr. F. Begum",
      coInvestigators: ["Assoc. Prof. Dr. M. Rahman", "Dr. N. Khatun"],
      duration: "2024-2026",
      funding: "BDT 850,000",
      status: "Ongoing",
      description: "Study of antimicrobial resistance patterns in hospital and community settings.",
      publications: 4,
      impact: "High"
    },
    {
      title: "Viral Epidemiology Study",
      principalInvestigator: "Assoc. Prof. Dr. M. Rahman",
      coInvestigators: ["Asst. Prof. Dr. S. Ahmed"],
      duration: "2023-2025",
      funding: "BDT 650,000",
      status: "Ongoing",
      description: "Epidemiological study of viral infections in the local population.",
      publications: 3,
      impact: "High"
    },
    {
      title: "Rapid Diagnostic Test Development",
      principalInvestigator: "Asst. Prof. Dr. S. Ahmed",
      coInvestigators: ["Prof. Dr. F. Begum"],
      duration: "2024-2027",
      funding: "BDT 750,000",
      status: "Starting",
      description: "Development and validation of rapid diagnostic tests for common infections.",
      publications: 1,
      impact: "High"
    }
  ]

  const antimicrobialStewardship = [
    {
      antibiotic: "Beta-lactams",
      resistanceRate: "35%",
      trend: "Increasing",
      interventions: ["Guideline Implementation", "Dose Optimization", "De-escalation Protocols"],
      impact: "Reduced use by 25%"
    },
    {
      antibiotic: "Fluoroquinolones",
      resistanceRate: "45%",
      trend: "Stable",
      interventions: ["Restriction Policies", "Education Programs", "Alternatives Promotion"],
      impact: "Reduced inappropriate use by 40%"
    },
    {
      antibiotic: "Carbapenems",
      resistanceRate: "15%",
      trend: "Increasing",
      interventions: ["Carbapenem-sparing Strategies", "Combination Therapy", "Therapeutic Drug Monitoring"],
      impact: "Maintained susceptibility"
    },
    {
      antibiotic: "Vancomycin",
      resistanceRate: "8%",
      trend: "Stable",
      interventions: ["Dose Optimization", "Therapeutic Monitoring", "Guideline Adherence"],
      impact: "Reduced toxicity and resistance"
    }
  ]

  const achievements = [
    {
      title: "Best Microbiology Department Award",
      year: "2024",
      category: "Academic Excellence",
      description: "Recognized for outstanding microbiology education and diagnostic services.",
      impact: "High"
    },
    {
      title: "Infection Control Excellence",
      year: "2023",
      category: "Quality",
      description: "Awarded for exceptional infection control program implementation.",
      impact: "High"
    },
    {
      title: "Research Excellence Award",
      year: "2023",
      category: "Research",
      description: "Recognized for significant contributions to microbiology research.",
      impact: "High"
    },
    {
      title: "WHO Collaboration Recognition",
      year: "2022",
      category: "International",
      description: "Recognized for WHO collaboration in disease surveillance and control.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Microbiology Workshop 2024",
      date: "2024-12-27",
      time: "9:00 AM - 5:00 PM",
      venue: "Microbiology Department",
      type: "Workshop",
      organizer: "Prof. Dr. F. Begum",
      participants: "Microbiology Professionals",
      description: "Annual workshop on recent advances in microbiology and infectious diseases."
    },
    {
      title: "Infection Control Seminar",
      date: "2024-12-30",
      time: "2:00 PM - 4:00 PM",
      venue: "Conference Hall",
      type: "Seminar",
      organizer: "Assoc. Prof. Dr. M. Rahman",
      participants: "Healthcare Workers",
      description: "Seminar on infection control practices and antimicrobial stewardship."
    },
    {
      title: "Antimicrobial Resistance Conference",
      date: "2025-01-03",
      time: "10:00 AM - 1:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Asst. Prof. Dr. S. Ahmed",
      participants: "Researchers & Clinicians",
      description: "Conference on antimicrobial resistance and stewardship strategies."
    }
  ]

  const resources = [
    {
      title: "Clinical Microbiology Manual",
      description: "Comprehensive guide for clinical microbiology procedures and techniques",
      type: "PDF",
      size: "8.5 MB",
      downloadCount: 1950,
      category: "Lab Manual"
    },
    {
      title: "Infection Control Guidelines",
      description: "Complete guidelines for infection control practices and protocols",
      type: "PDF",
      size: "6.2 MB",
      downloadCount: 2400,
      category: "Guidelines"
    },
    {
      title: "Antimicrobial Stewardship Protocols",
      description: "Detailed protocols for antimicrobial stewardship program implementation",
      type: "PDF",
      size: "4.8 MB",
      downloadCount: 1600,
      category: "Protocols"
    },
    {
      title: "Microbiology Atlas",
      description: "Comprehensive atlas of microorganisms with diagnostic features",
      type: "PDF",
      size: "35.5 MB",
      downloadCount: 2800,
      category: "Atlas"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Bug className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Microbiology - Phase 3</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Clinical Microbiology and Infection Control Excellence</p>
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
                    <MicroscopeIcon className="w-8 h-8 text-orange-600" />
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
                        <Bug className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {service.pathogens}
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

          {/* Infection Control Programs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Infection Control Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {infectionControlPrograms.map((program, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <ShieldIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{program.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          program.compliance >= '95%' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {program.compliance} Compliance
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    
                    <div className="space-y-3 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Frequency:</span> {program.frequency}
                      </div>
                      <div>
                        <span className="font-medium">Key Activities:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {program.activities.slice(0, 3).map((activity, activityIndex) => (
                            <span key={activityIndex} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              {activity}
                            </span>
                          ))}
                          {program.activities.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              +{program.activities.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="font-medium">Outcomes:</span>
                        <span className="font-medium text-green-600">{program.outcomes}</span>
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

          {/* Antimicrobial Stewardship */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Antimicrobial Stewardship</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {antimicrobialStewardship.map((antibiotic, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <AlertTriangleIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{antibiotic.antibiotic}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          antibiotic.trend === 'Increasing' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {antibiotic.trend} Resistance
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Resistance Rate:</span>
                        <span className="font-medium text-red-600">{antibiotic.resistanceRate}</span>
                      </div>
                      <div>
                        <span className="font-medium">Interventions:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {antibiotic.interventions.slice(0, 3).map((intervention, interventionIndex) => (
                            <span key={interventionIndex} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              {intervention}
                            </span>
                          ))}
                          {antibiotic.interventions.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              +{antibiotic.interventions.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="font-medium">Impact:</span>
                        <span className="font-medium text-green-600">{antibiotic.impact}</span>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Microbiology Resources</h2>
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
