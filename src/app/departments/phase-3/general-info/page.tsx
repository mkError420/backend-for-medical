"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Ear, Baby, StethoscopeIcon, Thermometer, Bandage } from "lucide-react"

export default function Phase3GeneralInfoPage() {
  const departmentOverview = {
    name: "Phase III - Clinical Sciences",
    duration: "2 Years",
    totalStudents: 150,
    facultyCount: 45,
    courses: 16,
    established: "2012",
    description: "Phase III focuses on clinical training through comprehensive study of clinical subjects, rotations in various departments, and hands-on patient care experience, preparing students for internship and independent medical practice."
  }

  const departments = [
    {
      name: "Department of Medicine",
      head: "Prof. Dr. M. Rahman",
      faculty: 12,
      courses: 4,
      beds: 120,
      established: "2012",
      description: "Comprehensive study of internal medicine, diagnosis, and management of adult diseases.",
      facilities: ["Indoor Wards", "OPD", "ICU", "Emergency Department", "Diabetes Center"],
      achievements: ["Best Clinical Department 2023", "50 Research Publications", "Clinical Excellence Award"]
    },
    {
      name: "Department of Surgery",
      head: "Prof. Dr. A. Karim",
      faculty: 10,
      courses: 4,
      beds: 80,
      established: "2012",
      description: "Study of surgical principles, operative techniques, and perioperative patient care.",
      facilities: ["Surgical Wards", "OT Complex", "Surgical ICU", "Emergency Surgery", "Day Care Surgery"],
      achievements: ["Surgical Excellence 2023", "35 Publications", "Innovation in Surgery"]
    },
    {
      name: "Department of Pediatrics",
      head: "Prof. Dr. S. Begum",
      faculty: 8,
      courses: 3,
      beds: 60,
      established: "2012",
      description: "Comprehensive care of infants, children, and adolescents including preventive and therapeutic aspects.",
      facilities: ["Pediatric Ward", "NICU", "PICU", "Pediatric OPD", "Immunization Center"],
      achievements: ["Pediatric Excellence 2023", "28 Publications", "Child Healthcare Award"]
    },
    {
      name: "Department of Obstetrics & Gynecology",
      head: "Prof. Dr. N. Ahmed",
      faculty: 8,
      courses: 3,
      beds: 70,
      established: "2012",
      description: "Comprehensive women's healthcare including pregnancy, childbirth, and reproductive health.",
      facilities: ["Labor Ward", "Gynae Ward", "NICU", "Infertility Clinic", "Family Planning Center"],
      achievements: ["Women's Health Excellence 2023", "30 Publications", "Safe Motherhood Award"]
    },
    {
      name: "Department of ENT",
      head: "Prof. Dr. K. Islam",
      faculty: 4,
      courses: 1,
      beds: 25,
      established: "2012",
      description: "Diagnosis and treatment of ear, nose, throat disorders, and head & neck diseases.",
      facilities: ["ENT Ward", "ENT OPD", "Audiology Lab", "Speech Therapy", "Head & Neck Surgery"],
      achievements: ["ENT Excellence 2023", "15 Publications", "Hearing Care Initiative"]
    },
    {
      name: "Department of Ophthalmology",
      head: "Prof. Dr. R. Khatun",
      faculty: 3,
      courses: 1,
      beds: 20,
      established: "2012",
      description: "Comprehensive eye care including diagnosis, medical and surgical treatment of eye diseases.",
      facilities: ["Eye Ward", "Eye OPD", "Operation Theatre", "Optical Shop", "Vision Center"],
      achievements: ["Eye Care Excellence 2023", "12 Publications", "Vision Restoration Program"]
    }
  ]

  const clinicalRotations = [
    {
      name: "Medicine Rotation",
      duration: "8 Weeks",
      department: "Department of Medicine",
      settings: ["Indoor Wards", "OPD", "Emergency"],
      objectives: ["Clinical Examination", "Diagnosis", "Treatment Planning", "Patient Management"],
      assessment: "Clinical Skills Assessment + Written Exam"
    },
    {
      name: "Surgery Rotation",
      duration: "8 Weeks",
      department: "Department of Surgery",
      settings: ["Surgical Wards", "OT", "Emergency Surgery"],
      objectives: ["Pre-operative Assessment", "Surgical Assistance", "Post-operative Care", "Wound Management"],
      assessment: "Surgical Skills Assessment + Case Presentation"
    },
    {
      name: "Pediatrics Rotation",
      duration: "6 Weeks",
      department: "Department of Pediatrics",
      settings: ["Pediatric Ward", "NICU", "OPD"],
      objectives: ["Pediatric Examination", "Growth Assessment", "Vaccination", "Common Childhood Illnesses"],
      assessment: "Pediatric Skills Assessment + OSCE"
    },
    {
      name: "Obstetrics & Gynecology Rotation",
      duration: "6 Weeks",
      department: "Department of Obstetrics & Gynecology",
      settings: ["Labor Ward", "Gynae Ward", "OPD"],
      objectives: ["Antenatal Care", "Normal Delivery", "Gynae Examination", "Family Planning"],
      assessment: "Obstetric Skills Assessment + Case Studies"
    },
    {
      name: "ENT Rotation",
      duration: "2 Weeks",
      department: "Department of ENT",
      settings: ["ENT OPD", "Minor OT"],
      objectives: ["ENT Examination", "Common ENT Procedures", "Emergency ENT Care"],
      assessment: "ENT Skills Assessment + Practical Exam"
    },
    {
      name: "Ophthalmology Rotation",
      duration: "2 Weeks",
      department: "Department of Ophthalmology",
      settings: ["Eye OPD", "Minor OT"],
      objectives: ["Eye Examination", "Vision Testing", "Common Eye Diseases", "Refraction"],
      assessment: "Ophthalmic Skills Assessment + Practical Exam"
    }
  ]

  const teachingMethods = [
    {
      name: "Bedside Teaching",
      description: "Direct patient interaction and learning at the bedside with faculty guidance",
      frequency: "Daily",
      duration: "2-3 hours",
      participants: "Students, Faculty, Patients",
      effectiveness: "95%"
    },
    {
      name: "Ward Rounds",
      description: "Daily rounds with faculty discussing patient cases and management plans",
      frequency: "Daily",
      duration: "1-2 hours",
      participants: "Students, Faculty, Interns",
      effectiveness: "92%"
    },
    {
      name: "OPD Teaching",
      description: "Outpatient department teaching focusing on common diseases and primary care",
      frequency: "3 times/week",
      duration: "3-4 hours",
      participants: "Students, Faculty, OPD Patients",
      effectiveness: "88%"
    },
    {
      name: "Case Presentations",
      description: "Student-led presentations of interesting cases with faculty discussion",
      frequency: "Weekly",
      duration: "1 hour",
      participants: "Students, Faculty",
      effectiveness: "90%"
    },
    {
      name: "Clinical Conferences",
      description: "Regular conferences on clinical topics and recent advances",
      frequency: "Weekly",
      duration: "1-2 hours",
      participants: "Students, Faculty, Guest Speakers",
      effectiveness: "93%"
    },
    {
      name: "Skills Lab Training",
      description: "Hands-on training in clinical skills using simulation and models",
      frequency: "2 times/week",
      duration: "2-3 hours",
      participants: "Students, Skills Lab Faculty",
      effectiveness: "94%"
    }
  ]

  const assessmentMethods = [
    {
      name: "Clinical Examination",
      description: "Assessment of clinical skills through direct observation",
      weight: "30%",
      frequency: "End of each rotation",
      criteria: ["History Taking", "Physical Examination", "Communication", "Professionalism"]
    },
    {
      name: "Case Studies",
      description: "Written analysis and presentation of clinical cases",
      weight: "20%",
      frequency: "Monthly",
      criteria: ["Case Analysis", "Differential Diagnosis", "Investigation Plan", "Management"]
    },
    {
      name: "OSCE",
      description: "Objective Structured Clinical Examination with standardized patients",
      weight: "25%",
      frequency: "End of Phase",
      criteria: ["Clinical Skills", "Communication", "Time Management", "Decision Making"]
    },
    {
      name: "Written Examinations",
      description: "Theory papers covering clinical knowledge and problem-solving",
      weight: "15%",
      frequency: "End of each semester",
      criteria: ["Knowledge", "Understanding", "Application", "Problem Solving"]
    },
    {
      name: "Logbook Assessment",
      description: "Assessment of completed clinical procedures and experiences",
      weight: "10%",
      frequency: "Continuous",
      criteria: ["Procedure Completion", "Case Diversity", "Skill Progress", "Attendance"]
    }
  ]

  const facilities = [
    {
      name: "Teaching Hospital",
      capacity: "500 beds",
      departments: 15,
      dailyPatients: 800,
      description: "Fully equipped teaching hospital with all major clinical departments",
      features: ["24/7 Emergency", "ICU Facilities", "Modern OTs", "Diagnostic Services", "Pharmacy"]
    },
    {
      name: "Skills Laboratory",
      capacity: "40 students",
      simulators: 25,
      procedures: 50,
      description: "Advanced clinical skills training facility with modern simulators",
      features: ["Clinical Simulators", "Mannequins", "Task Trainers", "Audio-visual System", "Assessment Tools"]
    },
    {
      name: "Library & Learning Center",
      books: 10000,
      journals: 100,
      computers: 50,
      description: "Comprehensive learning resources for clinical education",
      features: ["Digital Resources", "Study Areas", "Group Discussion Rooms", "Internet Access", "Printing Services"]
    },
    {
      name: "Computer Laboratory",
      computers: 60,
      software: 15,
      internet: "High-speed",
      description: "Modern computer lab with medical software and internet access",
      features: ["Medical Software", "E-learning Platforms", "Research Tools", "Statistical Programs", "Online Resources"]
    }
  ]

  const achievements = [
    {
      title: "Best Clinical Training Program",
      year: "2023",
      category: "Education",
      description: "Recognized for excellence in clinical training and student development",
      impact: "High"
    },
    {
      title: "Research Excellence Award",
      year: "2023",
      category: "Research",
      description: "Awarded for outstanding clinical research contributions",
      impact: "High"
    },
    {
      title: "Patient Care Excellence",
      year: "2022",
      category: "Clinical Services",
      description: "Recognized for outstanding patient care and clinical outcomes",
      impact: "High"
    },
    {
      title: "Innovation in Medical Education",
      year: "2022",
      category: "Education",
      description: "Awarded for innovative teaching methodologies and curriculum development",
      impact: "Medium"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Hospital className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Phase III - Clinical Sciences</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Clinical Training and Patient Care Experience</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Clinical Medicine</div>
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
                  <div className="text-sm text-gray-600">Clinical Courses</div>
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
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Established: {departmentOverview.established}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Clinical Departments */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <StethoscopeIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{dept.name}</h3>
                        <p className="text-sm text-blue-600 font-medium">Head: {dept.head}</p>
                        <p className="text-sm text-gray-600">Est. {dept.established}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{dept.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <User className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{dept.faculty}</div>
                        <div className="text-xs text-gray-600">Faculty</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Hospital className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="font-semibold">{dept.beds}</div>
                        <div className="text-xs text-gray-600">Beds</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Facilities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.facilities.slice(0, 3).map((facility, facilityIndex) => (
                          <span key={facilityIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {facility}
                          </span>
                        ))}
                        {dept.facilities.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            +{dept.facilities.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="w-4 h-4 text-yellow-600" />
                        <span className="font-medium">{dept.achievements[0]}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Clinical Rotations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Rotations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clinicalRotations.map((rotation, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{rotation.name}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {rotation.duration}
                      </span>
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Department:</span> {rotation.department}
                      </div>
                      <div>
                        <span className="font-medium">Settings:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {rotation.settings.map((setting, settingIndex) => (
                            <span key={settingIndex} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              {setting}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">Objectives:</span>
                        <div className="space-y-1 mt-1">
                          {rotation.objectives.slice(0, 3).map((objective, objectiveIndex) => (
                            <div key={objectiveIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              {objective}
                            </div>
                          ))}
                          {rotation.objectives.length > 3 && (
                            <div className="text-blue-600 font-medium">
                              +{rotation.objectives.length - 3} more objectives
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="font-medium">Assessment:</span>
                        <span>{rotation.assessment}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Teaching Methods */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Teaching Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachingMethods.map((method, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{method.name}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {method.effectiveness} Effective
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Frequency:</span>
                        <span className="font-medium">{method.frequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{method.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Participants:</span>
                        <span className="font-medium text-xs">{method.participants}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Assessment Methods */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Assessment Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {assessmentMethods.map((assessment, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FileCheck className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{assessment.name}</h3>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          {assessment.weight} Weight
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{assessment.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Frequency:</span>
                        <span className="font-medium">{assessment.frequency}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Assessment Criteria:</h4>
                      <div className="flex flex-wrap gap-2">
                        {assessment.criteria.map((criterion, criterionIndex) => (
                          <span key={criterionIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {criterion}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Building className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{facility.name}</h3>
                        <p className="text-sm text-gray-600">{facility.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {Object.entries(facility).filter(([key]) => 
                        ['capacity', 'departments', 'dailyPatients', 'books', 'journals', 'computers', 'software', 'simulators', 'procedures', 'internet'].includes(key)
                      ).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="font-semibold">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Features:</h4>
                      <div className="space-y-1">
                        {facility.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                        {facility.features.length > 3 && (
                          <div className="text-sm text-blue-600 font-medium">
                            +{facility.features.length - 3} more features
                          </div>
                        )}
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
        </div>
      </div>
    </div>
  )
}
