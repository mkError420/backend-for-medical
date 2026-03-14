"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2, Wind, Activity as ActivityIcon3, Thermometer as ThermometerIcon, HeartHandshake as HeartHandshakeIcon, AlertTriangle as AlertTriangleIcon3 } from "lucide-react"

export default function PhysiotherapyPage() {
  const departmentInfo = {
    name: "Department of Physiotherapy - Phase 4",
    head: "Prof. Dr. S. Islam",
    established: "2013",
    faculty: 6,
    interns: 10,
    beds: 20,
    description: "The Phase 4 Physiotherapy program provides comprehensive internship training in rehabilitation, physical therapy, and therapeutic exercises. Interns gain hands-on experience in restoring function and improving quality of life for patients with various conditions."
  }

  const faculty = [
    {
      name: "Prof. Dr. S. Islam",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, DPMR",
      experience: "18 years",
      specialization: "Neurological Rehabilitation, Sports Medicine",
      email: "s.islam@rcmc.edu.bd",
      phone: "Ext: 2900",
      publications: 28,
      research: "Stroke Rehabilitation, Sports Injuries, Neurological Disorders",
      image: "/faculty/s-islam.jpg"
    },
    {
      name: "Assoc. Prof. Dr. M. Rahman",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS, DPMR",
      experience: "14 years",
      specialization: "Orthopedic Rehabilitation, Manual Therapy",
      email: "m.rahman@rcmc.edu.bd",
      phone: "Ext: 2901",
      publications: 22,
      research: "Orthopedic Rehabilitation, Manual Therapy, Post-operative Care",
      image: "/faculty/m-rahman.jpg"
    },
    {
      name: "Asst. Prof. Dr. A. Khatun",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS, DPMR",
      experience: "10 years",
      specialization: "Cardiopulmonary Rehabilitation, Pediatric Physiotherapy",
      email: "a.khatun@rcmc.edu.bd",
      phone: "Ext: 2902",
      publications: 16,
      research: "Cardiac Rehabilitation, Pediatric Conditions, Respiratory Therapy",
      image: "/faculty/a-khatun.jpg"
    },
    {
      name: "Dr. N. Ahmed",
      designation: "Senior Physiotherapist",
      qualifications: "BPT, MPT",
      experience: "8 years",
      specialization: "General Physiotherapy, Exercise Therapy",
      email: "n.ahmed@rcmc.edu.bd",
      phone: "Ext: 2903",
      publications: 12,
      research: "Exercise Physiology, General Rehabilitation, Preventive Care",
      image: "/faculty/n-ahmed.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Physiotherapy OPD",
      type: "Outpatient Care",
      capacity: 30,
      dailyPatients: "80/day",
      description: "Comprehensive outpatient physiotherapy services for various conditions",
      facilities: ["Consultation Rooms", "Exercise Area", "Treatment Rooms", "Electrotherapy Unit"],
      commonCases: ["Back Pain", "Neck Pain", "Joint Pain", "Sports Injuries", "Post-operative Rehab"],
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Rehabilitation Ward",
      type: "Inpatient Care",
      capacity: 20,
      beds: 20,
      admissions: "40/month",
      description: "Inpatient rehabilitation for patients requiring intensive therapy",
      facilities: ["Rehabilitation Rooms", "Exercise Equipment", "Hydrotherapy Pool", "Gymnasium"],
      commonCases: ["Stroke Rehab", "Spinal Cord Injury", "Traumatic Brain Injury", "Amputee Rehab", "Severe Orthopedic Cases"],
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Exercise Therapy Unit",
      type: "Therapeutic Unit",
      capacity: 25,
      dailySessions: "100/day",
      description: "Advanced exercise therapy and rehabilitation programs",
      facilities: ["Exercise Equipment", "Resistance Training", "Balance Training", "Cardiovascular Equipment"],
      commonCases: ["Strength Training", "Endurance Training", "Balance Training", "Flexibility Training", "Functional Training"],
      incharge: "Assoc. Prof. Dr. M. Rahman"
    },
    {
      name: "Electrotherapy Unit",
      type: "Therapeutic Unit",
      capacity: 15,
      dailySessions: "60/day",
      description: "Advanced electrotherapy and modalities for pain management and tissue healing",
      facilities: ["Electrotherapy Equipment", "Ultrasound Therapy", "Laser Therapy", "TENS/IFC Units"],
      commonCases: ["Pain Management", "Tissue Healing", "Muscle Stimulation", "Nerve Stimulation", "Inflammation Control"],
      incharge: "Asst. Prof. Dr. A. Khatun"
    },
    {
      name: "Hydrotherapy Unit",
      type: "Therapeutic Unit",
      capacity: 10,
      dailySessions: "30/day",
      description: "Aquatic therapy for rehabilitation and pain management",
      facilities: ["Therapeutic Pool", "Underwater Treadmill", "Resistance Jets", "Temperature Control"],
      commonCases: ["Arthritis", "Spinal Conditions", "Neurological Disorders", "Post-operative Rehab", "Sports Injuries"],
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Sports Medicine Clinic",
      type: "Specialized Care",
      capacity: 20,
      dailyPatients: "40/day",
      description: "Specialized care for sports injuries and performance enhancement",
      facilities: ["Assessment Room", "Treatment Area", "Exercise Testing", "Biomechanics Lab"],
      commonCases: ["Sports Injuries", "Performance Enhancement", "Injury Prevention", "Athletic Training", "Return to Sports"],
      incharge: "Prof. Dr. S. Islam"
    }
  ]

  const internshipProgram = [
    {
      name: "OPD Duties",
      duration: "4 Weeks",
      setting: "Physiotherapy OPD",
      responsibilities: ["Patient Assessment", "Treatment Planning", "Exercise Therapy", "Patient Education"],
      skills: ["Clinical Assessment", "Treatment Planning", "Exercise Prescription", "Communication"],
      assessment: "Logbook + Supervisor Evaluation",
      supervisor: "Dr. N. Ahmed"
    },
    {
      name: "Ward Duties",
      duration: "3 Weeks",
      setting: "Rehabilitation Ward",
      responsibilities: ["Inpatient Care", "Daily Therapy", "Progress Monitoring", "Discharge Planning"],
      skills: ["Inpatient Management", "Intensive Rehabilitation", "Progress Assessment", "Team Coordination"],
      assessment: "Logbook + Ward Skills Assessment",
      supervisor: "Dr. N. Ahmed"
    },
    {
      name: "Exercise Therapy Rotation",
      duration: "2 Weeks",
      setting: "Exercise Therapy Unit",
      responsibilities: ["Exercise Prescription", "Therapeutic Exercise", "Progress Monitoring", "Equipment Management"],
      skills: ["Exercise Programming", "Therapeutic Techniques", "Progress Assessment", "Equipment Operation"],
      assessment: "Logbook + Exercise Skills Assessment",
      supervisor: "Assoc. Prof. Dr. M. Rahman"
    },
    {
      name: "Electrotherapy Rotation",
      duration: "2 Weeks",
      setting: "Electrotherapy Unit",
      responsibilities: ["Modality Selection", "Treatment Application", "Safety Monitoring", "Equipment Maintenance"],
      skills: ["Electrotherapy Techniques", "Modality Selection", "Safety Protocols", "Equipment Operation"],
      assessment: "Logbook + Electrotherapy Skills Assessment",
      supervisor: "Asst. Prof. Dr. A. Khatun"
    },
    {
      name: "Hydrotherapy Rotation",
      duration: "1 Week",
      setting: "Hydrotherapy Unit",
      responsibilities: ["Aquatic Therapy", "Pool Management", "Water Safety", "Patient Monitoring"],
      skills: ["Aquatic Therapy Techniques", "Water Safety", "Pool Management", "Patient Monitoring"],
      assessment: "Logbook + Hydrotherapy Skills Assessment",
      supervisor: "Dr. N. Ahmed"
    },
    {
      name: "Sports Medicine Rotation",
      duration: "1 Week",
      setting: "Sports Medicine Clinic",
      responsibilities: ["Sports Assessment", "Injury Management", "Performance Training", "Prevention Programs"],
      skills: ["Sports Assessment", "Injury Management", "Performance Enhancement", "Prevention Strategies"],
      assessment: "Logbook + Sports Medicine Skills Assessment",
      supervisor: "Prof. Dr. S. Islam"
    }
  ]

  const clinicalSkills = [
    {
      category: "Basic Physiotherapy Skills",
      skills: ["Patient Assessment", "Physical Examination", "Treatment Planning", "Exercise Prescription", "Patient Education"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "Basic Physiotherapy Certified"
    },
    {
      category: "Manual Therapy Skills",
      skills: ["Joint Mobilization", "Soft Tissue Mobilization", "Spinal Manipulation", "Myofascial Release", "Trigger Point Therapy"],
      competency: "Required",
      assessment: "Skills Lab + Clinical Performance",
      certification: "Manual Therapy Certified"
    },
    {
      category: "Exercise Therapy Skills",
      skills: ["Therapeutic Exercise", "Strengthening Exercises", "Stretching Techniques", "Balance Training", "Functional Training"],
      competency: "Required",
      assessment: "Exercise Lab + Direct Observation",
      certification: "Exercise Therapy Certified"
    },
    {
      category: "Electrotherapy Skills",
      skills: ["TENS/IFC", "Ultrasound Therapy", "Laser Therapy", "Electrical Stimulation", "Heat/Cold Therapy"],
      competency: "Required",
      assessment: "Modality Lab + Clinical Performance",
      certification: "Electrotherapy Certified"
    },
    {
      category: "Neurological Rehabilitation",
      skills: ["Stroke Rehabilitation", "Spinal Cord Injury Rehab", "Balance Training", "Gait Training", "Functional Recovery"],
      competency: "Required",
      assessment: "Neuro Lab + Clinical Performance",
      certification: "Neuro Rehab Certified"
    },
    {
      category: "Sports Medicine Skills",
      skills: ["Sports Assessment", "Injury Management", "Return to Sports", "Performance Enhancement", "Injury Prevention"],
      competency: "Required",
      assessment: "Sports Lab + Clinical Performance",
      certification: "Sports Medicine Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Musculoskeletal Conditions",
      conditions: ["Low Back Pain", "Neck Pain", "Shoulder Pain", "Knee Pain", "Joint Disorders"],
      prevalence: "40%",
      management: ["Manual Therapy", "Exercise Therapy", "Electrotherapy", "Patient Education"],
      complications: ["Chronic Pain", "Functional Limitation", "Reduced Quality of Life", "Work Disability"]
    },
    {
      category: "Neurological Conditions",
      conditions: ["Stroke", "Spinal Cord Injury", "Parkinson's Disease", "Multiple Sclerosis", "Traumatic Brain Injury"],
      prevalence: "25%",
      management: ["Neurological Rehabilitation", "Functional Training", "Balance Training", "Gait Training"],
      complications: ["Motor Deficits", "Functional Impairment", "Dependence", "Reduced Independence"]
    },
    {
      category: "Cardiopulmonary Conditions",
      conditions: ["COPD", "Heart Disease", "Post-CABG", "Asthma", "Respiratory Conditions"],
      prevalence: "15%",
      management: ["Cardiopulmonary Rehab", "Breathing Exercises", "Endurance Training", "Education"],
      complications: ["Reduced Exercise Capacity", "Breathing Difficulties", "Functional Limitation", "Hospitalization"]
    },
    {
      category: "Sports Injuries",
      conditions: ["Sprains", "Strains", "Fractures", "Dislocations", "Overuse Injuries"],
      prevalence: "15%",
      management: ["Sports Rehabilitation", "Manual Therapy", "Exercise Therapy", "Return to Sports"],
      complications: ["Delayed Recovery", "Re-injury", "Performance Decline", "Career Impact"]
    },
    {
      category: "Pediatric Conditions",
      conditions: ["Cerebral Palsy", "Developmental Delay", "Scoliosis", "Congenital Disorders", "Pediatric Injuries"],
      prevalence: "5%",
      management: ["Pediatric Rehabilitation", "Developmental Therapy", "Family Education", "School Integration"],
      complications: ["Developmental Delays", "Functional Limitations", "Social Issues", "Educational Impact"]
    }
  ]

  const procedures = [
    {
      name: "Manual Therapy",
      description: "Hands-on techniques for joint and soft tissue mobilization",
      type: "Therapeutic",
      duration: "30-45 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Soreness", "Temporary Discomfort", "Rare Injury"],
      frequency: "Daily"
    },
    {
      name: "Therapeutic Exercise",
      description: "Prescribed exercises for rehabilitation and functional improvement",
      type: "Therapeutic",
      duration: "45-60 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Muscle Soreness", "Fatigue", "Overexertion"],
      frequency: "Daily"
    },
    {
      name: "Electrotherapy",
      description: "Use of electrical modalities for pain management and tissue healing",
      type: "Therapeutic",
      duration: "15-30 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Skin Irritation", "Allergic Reaction", "Burns"],
      frequency: "As needed"
    },
    {
      name: "Hydrotherapy",
      description: "Aquatic therapy using water for rehabilitation and pain relief",
      type: "Therapeutic",
      duration: "30-45 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Dizziness", "Hypothermia", "Slip Hazards"],
      frequency: "Weekly"
    },
    {
      name: "Gait Training",
      description: "Training for improving walking ability and gait patterns",
      type: "Therapeutic",
      duration: "30-60 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Fatigue", "Muscle Soreness", "Balance Issues"],
      frequency: "Daily"
    },
    {
      name: "Balance Training",
      description: "Exercises to improve balance and prevent falls",
      type: "Therapeutic",
      duration: "30-45 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Dizziness", "Fall Risk", "Fatigue"],
      frequency: "Daily"
    }
  ]

  const protocols = [
    {
      name: "Low Back Pain Protocol",
      description: "Standardized protocol for low back pain assessment and management",
      steps: ["Assessment", "Classification", "Treatment Planning", "Exercise Prescription", "Education"],
      frequency: "Every Low Back Pain Case",
      documentation: "Back Pain Registry",
      quality: "Clinical Guidelines"
    },
    {
      name: "Stroke Rehabilitation Protocol",
      description: "Comprehensive protocol for stroke rehabilitation and recovery",
      steps: ["Initial Assessment", "Goal Setting", "Rehabilitation Planning", "Progress Monitoring", "Discharge Planning"],
      frequency: "Every Stroke Case",
      documentation: "Stroke Registry",
      quality: "Rehab Guidelines"
    },
    {
      name: "Post-operative Rehabilitation Protocol",
      description: "Protocol for post-operative rehabilitation and recovery",
      steps: ["Pre-op Assessment", "Post-op Evaluation", "Rehabilitation Planning", "Progressive Exercise", "Discharge Planning"],
      frequency: "Every Post-op Case",
      documentation: "Surgical Registry",
      quality: "Surgical Guidelines"
    },
    {
      name: "Sports Injury Protocol",
      description: "Protocol for sports injury management and return to sports",
      steps: ["Injury Assessment", "Acute Management", "Rehabilitation", "Return to Sports Testing", "Prevention"],
      frequency: "Every Sports Injury",
      documentation: "Sports Registry",
      quality: "Sports Medicine Guidelines"
    },
    {
      name: "Cardiac Rehabilitation Protocol",
      description: "Protocol for cardiac rehabilitation and conditioning",
      steps: ["Cardiac Assessment", "Risk Stratification", "Exercise Prescription", "Progress Monitoring", "Education"],
      frequency: "Every Cardiac Case",
      documentation: "Cardiac Registry",
      quality: "Cardiac Guidelines"
    }
  ]

  const researchProjects = [
    {
      title: "Low Back Pain Outcomes Study",
      principalInvestigator: "Assoc. Prof. Dr. M. Rahman",
      coInvestigators: ["Prof. Dr. S. Islam", "Dr. N. Ahmed"],
      duration: "2024-2026",
      funding: "BDT 450,000",
      status: "Ongoing",
      description: "Study of treatment outcomes and quality of life in low back pain patients.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Stroke Rehabilitation Effectiveness",
      principalInvestigator: "Prof. Dr. S. Islam",
      coInvestigators: ["Asst. Prof. Dr. A. Khatun"],
      duration: "2023-2025",
      funding: "BDT 400,000",
      status: "Ongoing",
      description: "Study of effectiveness of different rehabilitation techniques in stroke patients.",
      publications: 1,
      impact: "High"
    },
    {
      title: "Sports Injury Prevention Study",
      principalInvestigator: "Dr. N. Ahmed",
      coInvestigators: ["Prof. Dr. S. Islam"],
      duration: "2024-2027",
      funding: "BDT 350,000",
      status: "Starting",
      description: "Study of prevention strategies for common sports injuries.",
      publications: 0,
      impact: "Medium"
    }
  ]

  const achievements = [
    {
      title: "Best Rehabilitation Department Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding rehabilitation services and patient outcomes.",
      impact: "High"
    },
    {
      title: "Sports Medicine Excellence Award",
      year: "2023",
      category: "Specialty Excellence",
      description: "Awarded for exceptional sports medicine services and injury management.",
      impact: "High"
    },
    {
      title: "Rehabilitation Innovation Award",
      year: "2023",
      category: "Innovation",
      description: "Recognized for innovative rehabilitation techniques and approaches.",
      impact: "High"
    },
    {
      title: "Research Excellence Award",
      year: "2022",
      category: "Research",
      description: "Awarded for outstanding research contributions in physiotherapy.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Physiotherapy Workshop 2024",
      date: "2025-01-07",
      time: "9:00 AM - 5:00 PM",
      venue: "Physiotherapy Department",
      type: "Workshop",
      organizer: "Prof. Dr. S. Islam",
      participants: "Physiotherapy Professionals",
      description: "Annual workshop on recent advances in physiotherapy and rehabilitation."
    },
    {
      title: "Manual Therapy Seminar",
      date: "2025-01-10",
      time: "2:00 PM - 4:00 PM",
      venue: "Exercise Therapy Unit",
      type: "Seminar",
      organizer: "Assoc. Prof. Dr. M. Rahman",
      participants: "Healthcare Workers",
      description: "Seminar on advanced manual therapy techniques and applications."
    },
    {
      title: "Sports Medicine Conference",
      date: "2025-01-13",
      time: "10:00 AM - 1:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Dr. N. Ahmed",
      participants: "Healthcare Professionals",
      description: "Conference on sports medicine and injury management strategies."
    }
  ]

  const resources = [
    {
      title: "Physiotherapy Internship Manual",
      description: "Comprehensive guide for physiotherapy internship training and procedures",
      type: "PDF",
      size: "8.5 MB",
      downloadCount: 1200,
      category: "Manual"
    },
    {
      title: "Exercise Therapy Guidelines",
      description: "Complete guidelines for exercise therapy and rehabilitation",
      type: "PDF",
      size: "6.2 MB",
      downloadCount: 1800,
      category: "Guidelines"
    },
    {
      title: "Manual Therapy Atlas",
      description: "Comprehensive atlas of manual therapy techniques and procedures",
      type: "PDF",
      size: "18.5 MB",
      downloadCount: 2200,
      category: "Atlas"
    },
    {
      title: "Rehabilitation Exercise Videos",
      description: "Demonstration videos of rehabilitation exercises and techniques",
      type: "Video",
      size: "950 MB",
      downloadCount: 1100,
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
                <ActivityIcon3 className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Physiotherapy - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Rehabilitation and Physical Therapy</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Clinical Practice</div>
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
                  <div className="text-2xl font-bold text-gray-800">{departmentInfo.interns}</div>
                  <div className="text-sm text-gray-600">Current Interns</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Hospital className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentInfo.beds}</div>
                  <div className="text-sm text-gray-600">Rehabilitation Beds</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MonitorIcon className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">6</div>
                  <div className="text-sm text-gray-600">Clinical Units</div>
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

          {/* Clinical Units */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Units</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicalUnits.map((unit, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Hospital className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{unit.name}</h3>
                        <p className="text-sm text-gray-600">{unit.type}</p>
                        <p className="text-sm text-blue-600 font-medium">Incharge: {unit.incharge}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{unit.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{unit.capacity}</div>
                        <div className="text-xs text-gray-600">Capacity</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <UsersIcon3 className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="font-semibold">{unit.dailyPatients}</div>
                        <div className="text-xs text-gray-600">Daily Patients</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Common Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {unit.commonCases.slice(0, 3).map((case_, caseIndex) => (
                          <span key={caseIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {case_}
                          </span>
                        ))}
                        {unit.commonCases.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            +{unit.commonCases.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Admissions:</span>
                        <span className="font-medium">{unit.admissions}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Internship Program */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Internship Program</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internshipProgram.map((program, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{program.name}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {program.duration}
                      </span>
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Setting:</span> {program.setting}
                      </div>
                      <div>
                        <span className="font-medium">Responsibilities:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {program.responsibilities.slice(0, 3).map((responsibility, responsibilityIndex) => (
                            <span key={responsibilityIndex} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              {responsibility}
                            </span>
                          ))}
                          {program.responsibilities.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              +{program.responsibilities.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">Skills:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {program.skills.slice(0, 3).map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-2 py-1 bg-blue-100 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                          {program.skills.length > 3 && (
                            <span className="px-2 py-1 bg-blue-100 rounded-full text-xs">
                              +{program.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="font-medium">Supervisor:</span>
                        <span className="font-medium text-blue-600">{program.supervisor}</span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="font-medium">Assessment:</span>
                        <span className="font-medium">{program.assessment}</span>
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
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <TargetIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{skill.category}</h3>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          {skill.competency}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Skills:</h4>
                      <div className="space-y-1">
                        {skill.skills.slice(0, 3).map((skillItem, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
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

          {/* Common Conditions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Conditions Treated</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonConditions.map((condition, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <AlertTriangleIcon3 className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{condition.category}</h3>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                          {condition.prevalence} Prevalence
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Common Conditions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {condition.conditions.slice(0, 4).map((condition_, conditionIndex) => (
                          <span key={conditionIndex} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                            {condition_}
                          </span>
                        ))}
                        {condition.conditions.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                            +{condition.conditions.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Management:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {condition.management.slice(0, 3).map((management, managementIndex) => (
                            <span key={managementIndex} className="px-2 py-1 bg-blue-100 rounded-full text-xs">
                              {management}
                            </span>
                          ))}
                          {condition.management.length > 3 && (
                            <span className="px-2 py-1 bg-blue-100 rounded-full text-xs">
                              +{condition.management.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Potential Complications:</h4>
                      <div className="space-y-1">
                        {condition.complications.slice(0, 2).map((complication, complicationIndex) => (
                          <div key={complicationIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            {complication}
                          </div>
                        ))}
                        {condition.complications.length > 2 && (
                          <div className="text-sm text-red-600 font-medium">
                            +{condition.complications.length - 2} more complications
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Procedures */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Physiotherapy Procedures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {procedures.map((procedure, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <SyringeIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{procedure.name}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {procedure.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{procedure.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{procedure.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Anesthesia:</span>
                        <span className="font-medium">{procedure.anesthesia}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Recovery:</span>
                        <span className="font-medium">{procedure.recovery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Frequency:</span>
                        <span className="font-medium">{procedure.frequency}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Potential Complications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {procedure.complications.map((complication, complicationIndex) => (
                          <span key={complicationIndex} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                            {complication}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Protocols */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Protocols</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {protocols.map((protocol, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FileCheckIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{protocol.name}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {protocol.frequency}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{protocol.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Protocol Steps:</h4>
                      <div className="space-y-1">
                        {protocol.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Documentation:</span>
                        <span className="font-medium">{protocol.documentation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quality Standard:</span>
                        <span className="font-medium text-green-600">{protocol.quality}</span>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Physiotherapy Resources</h2>
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
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
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
