"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, Eye as EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Globe, Home, Baby, Users as UsersIcon, HeartHandshake, Shield as ShieldIcon } from "lucide-react"

export default function CommunityMedicinePage() {
  const departmentInfo = {
    name: "Department of Community Medicine - Phase 3",
    head: "Prof. Dr. S. Khatun",
    established: "2012",
    faculty: 10,
    students: 180,
    courses: 3,
    centers: 5,
    description: "The Phase 3 Community Medicine program focuses on population health, disease prevention, health promotion, and community healthcare delivery. We emphasize public health principles, epidemiology, and community-based research."
  }

  const faculty = [
    {
      name: "Prof. Dr. S. Khatun",
      designation: "Professor & Head",
      qualifications: "MBBS, MPH, PhD",
      experience: "20 years",
      specialization: "Epidemiology, Public Health Policy",
      email: "s.khatun@rcmc.edu.bd",
      phone: "Ext: 2360",
      publications: 42,
      research: "Epidemiological Studies, Health Policy Research",
      image: "/faculty/s-khatun.jpg"
    },
    {
      name: "Assoc. Prof. Dr. M. Rahman",
      designation: "Associate Professor",
      qualifications: "MBBS, MPH",
      experience: "16 years",
      specialization: "Maternal & Child Health, Nutrition",
      email: "m.rahman@rcmc.edu.bd",
      phone: "Ext: 2361",
      publications: 35,
      research: "Maternal Health, Child Nutrition Programs",
      image: "/faculty/m-rahman.jpg"
    },
    {
      name: "Asst. Prof. Dr. A. Karim",
      designation: "Assistant Professor",
      qualifications: "MBBS, MPH",
      experience: "10 years",
      specialization: "Environmental Health, Occupational Medicine",
      email: "a.karim@rcmc.edu.bd",
      phone: "Ext: 2362",
      publications: 22,
      research: "Environmental Health Impact, Occupational Safety",
      image: "/faculty/a-karim.jpg"
    },
    {
      name: "Dr. N. Ahmed",
      designation: "Lecturer",
      qualifications: "MBBS, MPH (Pursuing)",
      experience: "6 years",
      specialization: "Health Education, Behavior Change Communication",
      email: "n.ahmed@rcmc.edu.bd",
      phone: "Ext: 2363",
      publications: 12,
      research: "Health Promotion Strategies, Community Engagement",
      image: "/faculty/n-ahmed.jpg"
    }
  ]

  const courses = [
    {
      code: "COMM-301",
      name: "Epidemiology & Biostatistics",
      semester: "3rd Year, 1st Semester",
      credits: 5,
      type: "Theory + Practical",
      duration: "6 Months",
      description: "Advanced study of epidemiological methods, biostatistical analysis, and research design in community health.",
      topics: ["Epidemiological Methods", "Biostatistics", "Research Design", "Data Analysis"],
      prerequisites: "Basic Statistics"
    },
    {
      code: "COMM-302",
      name: "Public Health & Policy",
      semester: "3rd Year, 2nd Semester",
      credits: 4,
      type: "Theory + Practical",
      duration: "6 Months",
      description: "Study of public health systems, health policy development, and healthcare management.",
      topics: ["Health Systems", "Health Policy", "Healthcare Management", "Health Economics"],
      prerequisites: "COMM-301"
    },
    {
      code: "COMM-303",
      name: "Community Health Practice",
      semester: "4th Year, 1st Semester",
      credits: 6,
      type: "Theory + Practical",
      duration: "1 Year",
      description: "Practical application of community medicine principles through field visits and community projects.",
      topics: ["Field Visits", "Community Surveys", "Health Programs", "Research Projects"],
      prerequisites: "COMM-302"
    }
  ]

  const communityCenters = [
    {
      name: "Urban Health Center",
      location: "City Center Area",
      population: "50,000",
      staff: 15,
      services: ["OPD Services", "Maternal Health", "Child Health", "Immunization", "Health Education"],
      activities: ["Daily OPD", "Health Camps", "School Health Programs", "Community Outreach"],
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Rural Health Center",
      location: "Village Union Area",
      population: "25,000",
      staff: 10,
      services: ["Primary Care", "Maternal Health", "Child Health", "Immunization", "Family Planning"],
      activities: ["Weekly Clinics", "Home Visits", "Health Education", "Disease Surveillance"],
      incharge: "Asst. Prof. Dr. A. Karim"
    },
    {
      name: "School Health Program",
      location: "5 Primary Schools",
      population: "2,000 Students",
      staff: 8,
      services: ["Health Check-ups", "Vision Screening", "Dental Health", "Nutrition Programs"],
      activities: ["Regular Health Check-ups", "Health Education", "Vaccination Drives", "Nutrition Monitoring"],
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Industrial Health Unit",
      location: "Industrial Zone",
      population: "10,000 Workers",
      staff: 6,
      services: ["Occupational Health", "Safety Training", "Health Screening", "First Aid"],
      activities: ["Health Screening", "Safety Programs", "Health Education", "Emergency Response"],
      incharge: "Asst. Prof. Dr. A. Karim"
    },
    {
      name: "Research & Training Center",
      location: "College Campus",
      population: "Research Focus",
      staff: 12,
      services: ["Research Support", "Training Programs", "Data Analysis", "Public Health Consultation"],
      activities: ["Research Projects", "Training Workshops", "Data Management", "Policy Analysis"],
      incharge: "Prof. Dr. S. Khatun"
    }
  ]

  const researchProjects = [
    {
      title: "Maternal Mortality Surveillance Study",
      principalInvestigator: "Prof. Dr. S. Khatun",
      coInvestigators: ["Assoc. Prof. Dr. M. Rahman", "Dr. N. Ahmed"],
      duration: "2024-2026",
      funding: "BDT 800,000",
      status: "Ongoing",
      description: "Comprehensive study of maternal mortality factors and prevention strategies in the catchment area.",
      publications: 3,
      impact: "High"
    },
    {
      title: "Child Nutrition Intervention Program",
      principalInvestigator: "Assoc. Prof. Dr. M. Rahman",
      coInvestigators: ["Dr. N. Ahmed"],
      duration: "2023-2025",
      funding: "BDT 600,000",
      status: "Ongoing",
      description: "Community-based intervention program to improve child nutrition and growth parameters.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Environmental Health Impact Assessment",
      principalInvestigator: "Asst. Prof. Dr. A. Karim",
      coInvestigators: ["Prof. Dr. S. Khatun"],
      duration: "2024-2027",
      funding: "BDT 700,000",
      status: "Starting",
      description: "Assessment of environmental factors on community health and disease patterns.",
      publications: 0,
      impact: "High"
    }
  ]

  const healthPrograms = [
    {
      name: "Immunization Program",
      target: "Children 0-5 years",
      coverage: "95%",
      activities: ["Routine Immunization", "Campaign Drives", "Awareness Programs", "Cold Chain Management"],
      outcomes: "Reduced vaccine-preventable diseases by 80%",
      challenges: "Cold chain maintenance, vaccine hesitancy"
    },
    {
      name: "Maternal Health Program",
      target: "Pregnant Women",
      coverage: "85%",
      activities: ["ANC Check-ups", "Delivery Care", "PNC Services", "Health Education"],
      outcomes: "Reduced maternal mortality by 60%",
      challenges: "Transportation, cultural barriers"
    },
    {
      name: "School Health Program",
      target: "School Children",
      coverage: "100%",
      activities: ["Health Screening", "Health Education", "Nutrition Programs", "Dental Care"],
      outcomes: "Improved health awareness, early disease detection",
      challenges: "Resource constraints, follow-up"
    },
    {
      name: "Disease Surveillance",
      target: "General Population",
      coverage: "100%",
      activities: ["Disease Reporting", "Outbreak Investigation", "Data Analysis", "Response Planning"],
      outcomes: "Early outbreak detection, timely response",
      challenges: "Reporting compliance, data quality"
    }
  ]

  const fieldActivities = [
    {
      name: "Community Survey",
      duration: "2 Weeks",
      participants: "Phase 3 Students",
      objectives: ["Data Collection", "Community Assessment", "Health Needs Analysis"],
      methodology: "House-to-house surveys, focus group discussions",
      assessment: "Survey Report + Presentation"
    },
    {
      name: "Health Camp",
      duration: "1 Day",
      participants: "Students + Faculty",
      objectives: ["Health Services", "Health Education", "Disease Screening"],
      methodology: "Camp setup, patient examination, health counseling",
      assessment: "Camp Report + Reflection"
    },
    {
      name: "School Visit",
      duration: "Half Day",
      participants: "Students",
      objectives: ["Health Education", "Health Check-up", "Awareness Programs"],
      methodology: "Interactive sessions, health screening, demonstrations",
      assessment: "Visit Report + Feedback"
    },
    {
      name: "Industrial Visit",
      duration: "Half Day",
      participants: "Students",
      objectives: ["Occupational Health Assessment", "Safety Evaluation", "Worker Education"],
      methodology: "Workplace assessment, worker interviews, safety audit",
      assessment: "Assessment Report + Recommendations"
    }
  ]

  const achievements = [
    {
      title: "Best Community Medicine Department",
      year: "2024",
      category: "Academic Excellence",
      description: "Recognized for outstanding community medicine education and public health contributions.",
      impact: "High"
    },
    {
      title: "Public Health Innovation Award",
      year: "2023",
      category: "Research",
      description: "Awarded for innovative public health interventions and community programs.",
      impact: "High"
    },
    {
      title: "Community Service Excellence",
      year: "2023",
      category: "Community Service",
      description: "Recognized for exceptional community service and health promotion activities.",
      impact: "High"
    },
    {
      title: "Best Health Program Implementation",
      year: "2022",
      category: "Implementation",
      description: "Awarded for successful implementation of community health programs.",
      impact: "Medium"
    }
  ]

  const upcomingEvents = [
    {
      title: "Community Health Fair 2024",
      date: "2024-12-25",
      time: "9:00 AM - 5:00 PM",
      venue: "Urban Health Center",
      type: "Health Fair",
      organizer: "Prof. Dr. S. Khatun",
      participants: "Community Members",
      description: "Annual health fair with free health check-ups, education, and services."
    },
    {
      title: "Public Health Workshop",
      date: "2024-12-28",
      time: "2:00 PM - 4:00 PM",
      venue: "Research Center",
      type: "Workshop",
      organizer: "Assoc. Prof. Dr. M. Rahman",
      participants: "Health Workers",
      description: "Workshop on modern public health practices and methodologies."
    },
    {
      title: "Community Medicine Research Conference",
      date: "2024-12-31",
      time: "10:00 AM - 1:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Asst. Prof. Dr. A. Karim",
      participants: "Researchers & Students",
      description: "Conference showcasing community medicine research and innovations."
    }
  ]

  const resources = [
    {
      title: "Community Medicine Manual",
      description: "Comprehensive guide for community medicine practices and field activities",
      type: "PDF",
      size: "7.2 MB",
      downloadCount: 1450,
      category: "Manual"
    },
    {
      title: "Public Health Guidelines",
      description: "Complete guidelines for public health programs and interventions",
      type: "PDF",
      size: "5.8 MB",
      downloadCount: 2100,
      category: "Guidelines"
    },
    {
      title: "Epidemiology Study Materials",
      description: "Study materials for epidemiological methods and biostatistics",
      type: "PDF",
      size: "9.5 MB",
      downloadCount: 1800,
      category: "Study Material"
    },
    {
      title: "Health Education Videos",
      description: "Educational videos for community health promotion and disease prevention",
      type: "Video",
      size: "650 MB",
      downloadCount: 950,
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
                <HeartHandshake className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Community Medicine - Phase 3</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Public Health Excellence and Community Healthcare</p>
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
                    <Home className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentInfo.centers}</div>
                  <div className="text-sm text-gray-600">Community Centers</div>
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

          {/* Community Centers */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Community Centers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityCenters.map((center, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Home className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{center.name}</h3>
                        <p className="text-sm text-gray-600">{center.location}</p>
                        <p className="text-sm text-blue-600 font-medium">Incharge: {center.incharge}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{center.population}</div>
                        <div className="text-xs text-gray-600">Population</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <User className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="font-semibold">{center.staff}</div>
                        <div className="text-xs text-gray-600">Staff</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {center.services.slice(0, 3).map((service, serviceIndex) => (
                          <span key={serviceIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {service}
                          </span>
                        ))}
                        {center.services.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            +{center.services.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">Activities:</span>
                      </div>
                      <div className="space-y-1">
                        {center.activities.slice(0, 2).map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {activity}
                          </div>
                        ))}
                        {center.activities.length > 2 && (
                          <div className="text-blue-600 font-medium">
                            +{center.activities.length - 2} more activities
                          </div>
                        )}
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

          {/* Health Programs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Health Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {healthPrograms.map((program, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <ShieldIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{program.name}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {program.coverage} Coverage
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Target:</span> {program.target}
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

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-green-700">Outcomes:</span>
                        <span>{program.outcomes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <span className="font-medium text-orange-700">Challenges:</span>
                        <span>{program.challenges}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Field Activities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Field Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fieldActivities.map((activity, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{activity.name}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {activity.duration}
                      </span>
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Participants:</span> {activity.participants}
                      </div>
                      <div>
                        <span className="font-medium">Objectives:</span>
                        <div className="space-y-1 mt-1">
                          {activity.objectives.map((objective, objectiveIndex) => (
                            <div key={objectiveIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              {objective}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">Methodology:</span> {activity.methodology}
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="font-medium">Assessment:</span>
                        <span className="font-medium text-blue-600">{activity.assessment}</span>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Community Medicine Resources</h2>
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
