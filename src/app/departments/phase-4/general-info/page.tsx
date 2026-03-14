"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, UserCheck as UserCheckIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2 } from "lucide-react"

export default function Phase4GeneralInfoPage() {
  const departmentOverview = {
    name: "Phase IV - Internship & Clinical Practice",
    duration: "1 Year",
    totalStudents: 125,
    facultyCount: 55,
    courses: 8,
    established: "2013",
    description: "Phase IV is the compulsory internship year providing hands-on clinical experience under supervision. Interns rotate through all major departments gaining comprehensive clinical skills and professional competence for independent medical practice."
  }

  const internshipRotations = [
    {
      name: "Medicine Internship",
      duration: "12 Weeks",
      department: "Department of Medicine",
      settings: ["Indoor Wards", "OPD", "Emergency", "ICU"],
      responsibilities: ["Patient Management", "Emergency Care", "Ward Rounds", "Discharge Planning"],
      assessment: "Logbook + Clinical Evaluation + Final Exam",
      supervisor: "Prof. Dr. M. Rahman"
    },
    {
      name: "Surgery Internship",
      duration: "12 Weeks",
      department: "Department of Surgery",
      settings: ["Surgical Wards", "OT", "Emergency", "Post-op Care"],
      responsibilities: ["Pre-op Assessment", "Surgical Assistance", "Post-op Care", "Wound Management"],
      assessment: "Logbook + Surgical Skills + Final Exam",
      supervisor: "Prof. Dr. A. Karim"
    },
    {
      name: "Pediatrics Internship",
      duration: "8 Weeks",
      department: "Department of Pediatrics",
      settings: ["Pediatric Ward", "NICU", "OPD", "Emergency"],
      responsibilities: ["Child Care", "Vaccination", "Growth Monitoring", "Emergency Management"],
      assessment: "Logbook + Pediatric Skills + Final Exam",
      supervisor: "Prof. Dr. S. Begum"
    },
    {
      name: "Obstetrics & Gynecology Internship",
      duration: "8 Weeks",
      department: "Department of Obstetrics & Gynecology",
      settings: ["Labor Ward", "Gynae Ward", "OPD", "Emergency"],
      responsibilities: ["Antenatal Care", "Normal Delivery", "Postnatal Care", "Emergency OB"],
      assessment: "Logbook + Obstetric Skills + Final Exam",
      supervisor: "Prof. Dr. N. Ahmed"
    },
    {
      name: "Community Medicine Internship",
      duration: "4 Weeks",
      department: "Department of Community Medicine",
      settings: ["Urban Health Center", "Rural Health Center", "School Health", "Research"],
      responsibilities: ["Community Care", "Health Education", "Research Projects", "Health Camps"],
      assessment: "Logbook + Community Assessment + Final Exam",
      supervisor: "Prof. Dr. S. Khatun"
    },
    {
      name: "Elective Rotations",
      duration: "8 Weeks",
      department: "Various Departments",
      settings: ["Specialty Departments", "Research Centers", "Hospitals Abroad"],
      responsibilities: ["Specialty Training", "Research Work", "Clinical Electives", "Professional Development"],
      assessment: "Logbook + Elective Report + Presentation",
      supervisor: "Department Heads"
    }
  ]

  const clinicalSkills = [
    {
      category: "Basic Clinical Skills",
      skills: ["History Taking", "Physical Examination", "Vital Signs Monitoring", "Basic Life Support", "Injection Techniques"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "BLS Certified"
    },
    {
      category: "Emergency Skills",
      skills: ["CPR", "Emergency Airway Management", "Trauma Care", "Emergency Drug Administration", "Disaster Response"],
      competency: "Required",
      assessment: "Simulation Training + Direct Observation",
      certification: "ACLS/ATLS Certified"
    },
    {
      category: "Procedural Skills",
      skills: ["IV Cannulation", "NG Tube Insertion", "Catheterization", "Wound Suturing", "Basic Surgical Procedures"],
      competency: "Required",
      assessment: "Skills Lab + Clinical Performance",
      certification: "Procedure Certified"
    },
    {
      category: "Diagnostic Skills",
      skills: ["ECG Interpretation", "X-ray Reading", "Basic Lab Tests", "Point-of-Care Testing", "Clinical Reasoning"],
      competency: "Required",
      assessment: "Case Studies + Direct Observation",
      certification: "Diagnostic Skills Certified"
    },
    {
      category: "Communication Skills",
      skills: ["Patient Communication", "Family Counseling", "Team Communication", "Documentation", "Professional Ethics"],
      competency: "Required",
      assessment: "Role Play + Direct Observation",
      certification: "Communication Certified"
    },
    {
      category: "Management Skills",
      skills: ["Time Management", "Resource Management", "Leadership", "Decision Making", "Quality Improvement"],
      competency: "Required",
      assessment: "Case Management + Direct Observation",
      certification: "Management Certified"
    }
  ]

  const assessmentMethods = [
    {
      name: "Internship Logbook",
      description: "Comprehensive record of all clinical experiences and procedures performed",
      weight: "30%",
      frequency: "Continuous",
      criteria: ["Procedure Completion", "Case Diversity", "Skill Progress", "Attendance"],
      minimum: "80% completion required"
    },
    {
      name: "Clinical Evaluation",
      description: "Regular assessment of clinical performance by supervising faculty",
      weight: "25%",
      frequency: "Monthly",
      criteria: ["Clinical Skills", "Professional Behavior", "Patient Care", "Team Work"],
      minimum: "75% average required"
    },
    {
      name: "OSCE Examination",
      description: "Objective Structured Clinical Examination with standardized patients",
      weight: "20%",
      frequency: "End of Phase",
      criteria: ["Clinical Skills", "Communication", "Time Management", "Decision Making"],
      minimum: "70% pass mark"
    },
    {
      name: "Written Examination",
      description: "Comprehensive written examination covering clinical knowledge",
      weight: "15%",
      frequency: "End of Phase",
      criteria: ["Clinical Knowledge", "Problem Solving", "Management Planning", "Emergency Care"],
      minimum: "60% pass mark"
    },
    {
      name: "Professional Assessment",
      description: "Assessment of professional behavior and ethics",
      weight: "10%",
      frequency: "Continuous",
      criteria: ["Professionalism", "Ethics", "Communication", "Team Work"],
      minimum: "Satisfactory rating required"
    }
  ]

  const supportServices = [
    {
      name: "Clinical Supervision",
      description: "24/7 supervision by senior faculty and residents",
      availability: "Round the clock",
      supervisors: "55 Faculty Members",
      coverage: "All Departments",
      contact: "Ext: 2000 (Emergency)"
    },
    {
      name: "Mentorship Program",
      description: "Individual mentorship for professional development",
      availability: "Weekly Meetings",
      mentors: "Senior Faculty",
      coverage: "All Interns",
      contact: "Mentorship Coordinator"
    },
    {
      name: "Skills Lab Support",
      description: "Access to skills lab for practice and training",
      availability: "24/7 Access",
      instructors: "Skills Lab Faculty",
      coverage: "All Skills",
      contact: "Skills Lab: Ext: 2100"
    },
    {
      name: "Counseling Services",
      description: "Psychological support and counseling for interns",
      availability: "By Appointment",
      counselors: "Professional Counselors",
      coverage: "All Interns",
      contact: "Counseling Center: Ext: 2200"
    },
    {
      name: "Library & Learning Resources",
      description: "Access to learning resources and study materials",
      availability: "24/7 Access",
      librarians: "Library Staff",
      coverage: "All Resources",
      contact: "Library: Ext: 2300"
    }
  ]

  const professionalDevelopment = [
    {
      name: "Weekly Clinical Conferences",
      description: "Regular conferences on clinical topics and case discussions",
      frequency: "Every Tuesday",
      duration: "2 Hours",
      participants: "Interns + Residents + Faculty",
      credits: "2 CME Credits/Session"
    },
    {
      name: "Grand Rounds",
      description: "Monthly grand rounds with guest speakers and case presentations",
      frequency: "First Thursday Monthly",
      duration: "3 Hours",
      participants: "All Clinical Staff",
      credits: "3 CME Credits/Session"
    },
    {
      name: "Skills Workshops",
      description: "Hands-on workshops for clinical skills development",
      frequency: "Monthly",
      duration: "4 Hours",
      participants: "Interns by Rotation",
      credits: "4 CME Credits/Workshop"
    },
    {
      name: "Research Seminars",
      description: "Seminars on research methodology and evidence-based medicine",
      frequency: "Bi-weekly",
      duration: "1 Hour",
      participants: "All Interns",
      credits: "1 CME Credit/Seminar"
    },
    {
      name: "Professional Ethics Sessions",
      description: "Sessions on medical ethics and professional conduct",
      frequency: "Monthly",
      duration: "2 Hours",
      participants: "All Interns",
      credits: "2 CME Credits/Session"
    }
  ]

  const certificationRequirements = [
    {
      name: "Medical Registration",
      description: "Registration with Bangladesh Medical and Dental Council",
      deadline: "Before Internship Start",
      authority: "BMDC",
      status: "Required"
    },
    {
      name: "BLS Certification",
      description: "Basic Life Support certification",
      deadline: "First Month",
      authority: "American Heart Association",
      status: "Required"
    },
    {
      name: "ACLS Certification",
      description: "Advanced Cardiac Life Support certification",
      deadline: "First 3 Months",
      authority: "American Heart Association",
      status: "Required"
    },
    {
      name: "Professional License",
      description: "Professional medical license for practice",
      deadline: "Before Internship Completion",
      authority: "BMDC",
      status: "Required"
    },
    {
      name: "CME Credits",
      description: "Continuing Medical Education credits",
      deadline: "Throughout Internship",
      authority: "Medical College",
      status: "Required (50 Credits)"
    }
  ]

  const achievements = [
    {
      title: "Best Internship Program Award",
      year: "2024",
      category: "Education",
      description: "Recognized for excellence in internship training and clinical education.",
      impact: "High"
    },
    {
      title: "Clinical Training Excellence",
      year: "2023",
      category: "Clinical Training",
      description: "Awarded for outstanding clinical training and skill development.",
      impact: "High"
    },
    {
      title: "Professional Development Excellence",
      year: "2023",
      category: "Professional Development",
      description: "Recognized for exceptional professional development programs.",
      impact: "Medium"
    },
    {
      title: "Intern Satisfaction Award",
      year: "2022",
      category: "Student Satisfaction",
      description: "Awarded for highest intern satisfaction and feedback ratings.",
      impact: "High"
    }
  ]

  const careerOpportunities = [
    {
      title: "Medical Officer",
      organization: "Government Hospitals",
      positions: "Multiple",
      requirements: "BMDC Registration + Internship Completion",
      salary: "BDT 50,000-80,000/month"
    },
    {
      title: "Resident Doctor",
      organization: "Medical Colleges",
      positions: "Limited",
      requirements: "Internship + Entrance Exam",
      salary: "BDT 60,000-90,000/month"
    },
    {
      title: "General Practitioner",
      organization: "Private Practice",
      positions: "Unlimited",
      requirements: "BMDC Registration + Internship",
      salary: "Variable"
    },
    {
      title: "Research Fellow",
      organization: "Research Institutions",
      positions: "Few",
      requirements: "Internship + Research Interest",
      salary: "BDT 40,000-70,000/month"
    },
    {
      title: "Public Health Officer",
      organization: "NGOs/International Organizations",
      positions: "Several",
      requirements: "Internship + Public Health Interest",
      salary: "BDT 55,000-85,000/month"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <BriefcaseIcon className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Phase IV - Internship & Clinical Practice</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Comprehensive Clinical Training and Professional Development</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Professional Practice</div>
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
                  <div className="text-sm text-gray-600">Interns</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentOverview.facultyCount}</div>
                  <div className="text-sm text-gray-600">Supervisors</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentOverview.courses}</div>
                  <div className="text-sm text-gray-600">Rotations</div>
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

          {/* Internship Rotations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Internship Rotations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internshipRotations.map((rotation, index) => (
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
                        <span className="font-medium">Responsibilities:</span>
                        <div className="space-y-1 mt-1">
                          {rotation.responsibilities.slice(0, 3).map((responsibility, responsibilityIndex) => (
                            <div key={responsibilityIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              {responsibility}
                            </div>
                          ))}
                          {rotation.responsibilities.length > 3 && (
                            <div className="text-blue-600 font-medium">
                              +{rotation.responsibilities.length - 3} more responsibilities
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="font-medium">Supervisor:</span>
                        <span className="font-medium text-blue-600">{rotation.supervisor}</span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="font-medium">Assessment:</span>
                        <span className="font-medium">{rotation.assessment}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Clinical Skills */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Skills Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicalSkills.map((skill, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <TargetIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{skill.category}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {skill.competency}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Skills:</h4>
                      <div className="space-y-1">
                        {skill.skills.slice(0, 3).map((skillItem, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            {skillItem}
                          </div>
                        ))}
                        {skill.skills.length > 3 && (
                          <div className="text-sm text-blue-600 font-medium">
                            +{skill.skills.length - 3} more skills
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Assessment:</span>
                        <span className="font-medium">{skill.assessment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Certification:</span>
                        <span className="font-medium text-green-600">{skill.certification}</span>
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
                        <FileCheckIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{assessment.name}</h3>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          {assessment.weight}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{assessment.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Frequency:</span>
                        <span className="font-medium">{assessment.frequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Minimum:</span>
                        <span className="font-medium text-orange-600">{assessment.minimum}</span>
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

          {/* Support Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Support Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportServices.map((service, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {service.availability}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Staff:</span>
                        <span className="font-medium">{service.supervisors}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Coverage:</span>
                        <span className="font-medium">{service.coverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Contact:</span>
                        <span className="font-medium text-blue-600">{service.contact}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Development */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Professional Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalDevelopment.map((program, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <AwardIcon2 className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{program.name}</h3>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                          {program.credits}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Frequency:</span>
                        <span className="font-medium">{program.frequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{program.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Participants:</span>
                        <span className="font-medium">{program.participants}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certification Requirements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Certification Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificationRequirements.map((cert, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <BadgeCheck className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{cert.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          cert.status === 'Required' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{cert.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Deadline:</span>
                        <span className="font-medium">{cert.deadline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Authority:</span>
                        <span className="font-medium">{cert.authority}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Career Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerOpportunities.map((career, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{career.title}</h3>
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                          {career.positions}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Organization:</span> {career.organization}
                      </div>
                      <div>
                        <span className="font-medium">Requirements:</span> {career.requirements}
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="font-medium">Salary Range:</span>
                        <span className="font-medium text-green-600">{career.salary}</span>
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
