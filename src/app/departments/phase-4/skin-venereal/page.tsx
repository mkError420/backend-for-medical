"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2 } from "lucide-react"

export default function SkinVenerealPage() {
  const departmentInfo = {
    name: "Department of Skin & Venereal Diseases - Phase 4",
    head: "Prof. Dr. R. Islam",
    established: "2013",
    faculty: 8,
    interns: 15,
    beds: 20,
    description: "The Phase 4 Skin & Venereal Diseases program provides comprehensive internship training in dermatology, sexually transmitted infections, and cosmetic dermatology. Interns gain hands-on experience in diagnosing and managing common and complex skin conditions."
  }

  const faculty = [
    {
      name: "Prof. Dr. R. Islam",
      designation: "Professor & Head",
      qualifications: "MBBS, DD, FCPS",
      experience: "20 years",
      specialization: "Dermatosurgery, Cosmetic Dermatology",
      email: "r.islam@rcmc.edu.bd",
      phone: "Ext: 2500",
      publications: 38,
      research: "Dermatosurgery, Laser Therapy",
      image: "/faculty/r-islam.jpg"
    },
    {
      name: "Assoc. Prof. Dr. S. Khatun",
      designation: "Associate Professor",
      qualifications: "MBBS, DD, FCPS",
      experience: "16 years",
      specialization: "Pediatric Dermatology, Allergic Disorders",
      email: "s.khatun@rcmc.edu.bd",
      phone: "Ext: 2501",
      publications: 32,
      research: "Pediatric Dermatology, Allergic Diseases",
      image: "/faculty/s-khatun.jpg"
    },
    {
      name: "Asst. Prof. Dr. M. Ahmed",
      designation: "Assistant Professor",
      qualifications: "MBBS, DD, FCPS",
      experience: "12 years",
      specialization: "Venereal Diseases, STI Management",
      email: "m.ahmed@rcmc.edu.bd",
      phone: "Ext: 2502",
      publications: 24,
      research: "Sexually Transmitted Infections, HIV/AIDS",
      image: "/faculty/m-ahmed.jpg"
    },
    {
      name: "Dr. N. Begum",
      designation: "Senior Registrar",
      qualifications: "MBBS, DD",
      experience: "8 years",
      specialization: "General Dermatology, Skin Infections",
      email: "n.begum@rcmc.edu.bd",
      phone: "Ext: 2503",
      publications: 16,
      research: "Skin Infections, Fungal Diseases",
      image: "/faculty/n-begum.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Dermatology OPD",
      type: "Outpatient Care",
      capacity: 80,
      dailyPatients: "120/day",
      description: "Comprehensive outpatient care for dermatological conditions",
      facilities: ["Consultation Rooms", "Examination Rooms", "Photography Unit", "Counseling Room"],
      commonCases: ["Acne", "Eczema", "Psoriasis", "Skin Infections", "Allergic Disorders"],
      incharge: "Dr. N. Begum"
    },
    {
      name: "Dermatology Ward",
      type: "Inpatient Care",
      capacity: 20,
      beds: 20,
      admissions: "40/month",
      description: "Inpatient care for severe dermatological conditions requiring hospitalization",
      facilities: ["Private Rooms", "General Ward", "Treatment Room", "Isolation Rooms"],
      commonCases: ["Severe Eczema", "Psoriasis", "Drug Reactions", "Autoimmune Diseases", "Severe Infections"],
      incharge: "Dr. N. Begum"
    },
    {
      name: "STI Clinic",
      type: "Specialized Clinic",
      capacity: 30,
      dailyPatients: "40/day",
      description: "Confidential specialized clinic for sexually transmitted infections",
      facilities: ["Private Consultation", "Counseling Room", "Laboratory", "Pharmacy"],
      commonCases: ["HIV/AIDS", "Syphilis", "Gonorrhea", "Chlamydia", "HPV"],
      incharge: "Asst. Prof. Dr. M. Ahmed"
    },
    {
      name: "Cosmetic Dermatology Unit",
      type: "Cosmetic Services",
      capacity: 20,
      dailyPatients: "30/day",
      description: "Advanced cosmetic dermatology procedures and treatments",
      facilities: ["Laser Room", "Chemical Peel Room", "Phototherapy Unit", "Cosmetic Consultation"],
      commonCases: ["Acne Scars", "Pigmentation", "Hair Removal", "Anti-aging", "Skin Rejuvenation"],
      incharge: "Prof. Dr. R. Islam"
    },
    {
      name: "Phototherapy Unit",
      type: "Treatment Unit",
      capacity: 10,
      dailyPatients: "20/day",
      description: "Specialized phototherapy treatment for various skin conditions",
      facilities: ["UVB Chambers", "PUVA Units", "Phototherapy Beds", "Monitoring Equipment"],
      commonCases: ["Psoriasis", "Vitiligo", "Eczema", "Mycosis Fungoides", "Photodermatoses"],
      incharge: "Assoc. Prof. Dr. S. Khatun"
    },
    {
      name: "Dermatosurgery Unit",
      type: "Surgical Unit",
      capacity: 15,
      dailyPatients: "10/day",
      description: "Surgical procedures for skin conditions and cosmetic enhancements",
      facilities: ["Minor OT", "Surgical Instruments", "Electrosurgical Unit", "Recovery Room"],
      commonCases: ["Skin Cancer Surgery", "Cyst Removal", "Scar Revision", "Biopsy", "Cosmetic Procedures"],
      incharge: "Prof. Dr. R. Islam"
    }
  ]

  const internshipProgram = [
    {
      name: "OPD Duties",
      duration: "4 Weeks",
      setting: "Dermatology OPD",
      responsibilities: ["Patient Consultation", "Diagnosis", "Treatment Planning", "Patient Education"],
      skills: ["Dermatological Examination", "Diagnosis", "Treatment Planning", "Communication"],
      assessment: "Logbook + Supervisor Evaluation",
      supervisor: "Dr. N. Begum"
    },
    {
      name: "Ward Duties",
      duration: "2 Weeks",
      setting: "Dermatology Ward",
      responsibilities: ["Inpatient Care", "Daily Rounds", "Treatment Management", "Discharge Planning"],
      skills: ["Inpatient Management", "Severe Disease Management", "Emergency Care", "Documentation"],
      assessment: "Logbook + Ward Skills Assessment",
      supervisor: "Dr. N. Begum"
    },
    {
      name: "STI Clinic Rotation",
      duration: "2 Weeks",
      setting: "STI Clinic",
      responsibilities: ["STI Management", "Counseling", "Contact Tracing", "Health Education"],
      skills: ["STI Diagnosis", "Confidential Communication", "Counseling", "Preventive Education"],
      assessment: "Logbook + STI Skills Evaluation",
      supervisor: "Asst. Prof. Dr. M. Ahmed"
    },
    {
      name: "Cosmetic Dermatology",
      duration: "2 Weeks",
      setting: "Cosmetic Unit",
      responsibilities: ["Cosmetic Procedures", "Patient Assessment", "Treatment Planning", "Follow-up"],
      skills: ["Cosmetic Assessment", "Procedure Assistance", "Patient Counseling", "Safety Protocols"],
      assessment: "Logbook + Cosmetic Skills Assessment",
      supervisor: "Prof. Dr. R. Islam"
    },
    {
      name: "Phototherapy Rotation",
      duration: "1 Week",
      setting: "Phototherapy Unit",
      responsibilities: ["Phototherapy Treatment", "Patient Monitoring", "Safety Protocols", "Side Effect Management"],
      skills: ["Phototherapy Protocols", "UV Safety", "Patient Monitoring", "Emergency Response"],
      assessment: "Logbook + Phototherapy Assessment",
      supervisor: "Assoc. Prof. Dr. S. Khatun"
    },
    {
      name: "Dermatosurgery Rotation",
      duration: "1 Week",
      setting: "Dermatosurgery Unit",
      responsibilities: ["Surgical Assistance", "Pre-operative Care", "Post-operative Care", "Wound Management"],
      skills: ["Surgical Assistance", "Sterile Techniques", "Wound Care", "Emergency Response"],
      assessment: "Logbook + Surgical Skills Assessment",
      supervisor: "Prof. Dr. R. Islam"
    }
  ]

  const clinicalSkills = [
    {
      category: "Basic Dermatological Skills",
      skills: ["Skin Examination", "Lesion Description", "Dermoscopy", "Photography", "Documentation"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "Dermatology Skills Certified"
    },
    {
      category: "Diagnostic Skills",
      skills: ["Fungal Diagnosis", "Bacterial Culture", "Allergy Testing", "Patch Testing", "Biopsy Techniques"],
      competency: "Required",
      assessment: "Lab Skills + Direct Observation",
      certification: "Diagnostic Skills Certified"
    },
    {
      category: "Treatment Skills",
      skills: ["Topical Therapy", "Systemic Therapy", "Phototherapy", "Injection Therapy", "Wound Care"],
      competency: "Required",
      assessment: "Treatment Planning + Direct Observation",
      certification: "Treatment Skills Certified"
    },
    {
      category: "Procedural Skills",
      skills: ["Biopsy", "Cryotherapy", "Electrosurgery", "Excision", "Suture"],
      competency: "Required",
      assessment: "Skills Lab + Clinical Performance",
      certification: "Procedural Skills Certified"
    },
    {
      category: "STI Management Skills",
      skills: ["STI Diagnosis", "Contact Tracing", "Counseling", "Confidential Communication", "Health Education"],
      competency: "Required",
      assessment: "Role Play + Direct Observation",
      certification: "STI Management Certified"
    },
    {
      category: "Cosmetic Skills",
      skills: ["Cosmetic Assessment", "Chemical Peels", "Laser Safety", "Patient Counseling", "Complication Management"],
      competency: "Required",
      assessment: "Cosmetic Training + Direct Observation",
      certification: "Cosmetic Skills Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Inflammatory Conditions",
      conditions: ["Acne Vulgaris", "Atopic Dermatitis", "Contact Dermatitis", "Psoriasis", "Seborrheic Dermatitis"],
      prevalence: "35%",
      management: ["Topical Steroids", "Systemic Therapy", "Phototherapy", "Lifestyle Changes"],
      complications: ["Scarring", "Infection", "Psychological Impact"]
    },
    {
      category: "Infections",
      conditions: ["Bacterial Infections", "Fungal Infections", "Viral Infections", "Parasitic Infections", "STIs"],
      prevalence: "25%",
      management: ["Antibiotics", "Antifungals", "Antivirals", "Specific Treatments"],
      complications: ["Systemic Spread", "Resistance", "Chronic Infection"]
    },
    {
      category: "Tumors",
      conditions: ["Benign Tumors", "Malignant Tumors", "Premalignant Conditions", "Cysts", "Lipomas"],
      prevalence: "15%",
      management: ["Surgical Excision", "Medical Therapy", "Monitoring", "Biopsy"],
      complications: ["Malignancy", "Recurrence", "Metastasis"]
    },
    {
      category: "Genetic Disorders",
      conditions: ["Ichthyosis", "Epidermolysis Bullosa", "Albinism", "Ectodermal Dysplasia", "Connective Tissue Disorders"],
      prevalence: "5%",
      management: ["Supportive Care", "Symptomatic Treatment", "Genetic Counseling", "Multidisciplinary Care"],
      complications: ["Chronic Disability", "Systemic Involvement", "Psychological Impact"]
    },
    {
      category: "Cosmetic Conditions",
      conditions: ["Melasma", "Hyperpigmentation", "Hypopigmentation", "Scars", "Aging Changes"],
      prevalence: "20%",
      management: ["Cosmetic Procedures", "Topical Agents", "Laser Therapy", "Chemical Peels"],
      complications: ["Treatment Complications", "Dissatisfaction", "Cost Issues"]
    }
  ]

  const procedures = [
    {
      name: "Skin Biopsy",
      description: "Diagnostic procedure for skin lesions and tumors",
      type: "Diagnostic",
      duration: "15-30 minutes",
      anesthesia: "Local",
      recovery: "Immediate",
      complications: ["Bleeding", "Infection", "Scarring"],
      frequency: "As needed"
    },
    {
      name: "Cryotherapy",
      description: "Freezing treatment for benign skin lesions",
      type: "Therapeutic",
      duration: "5-15 minutes",
      anesthesia: "None/Local",
      recovery: "Immediate",
      complications: ["Pain", "Blistering", "Hypopigmentation"],
      frequency: "Weekly"
    },
    {
      name: "Electrosurgery",
      description: "Electrical treatment for skin lesions and cosmetic procedures",
      type: "Therapeutic/Cosmetic",
      duration: "10-30 minutes",
      anesthesia: "Local",
      recovery: "1-2 hours",
      complications: ["Scarring", "Infection", "Pigment Changes"],
      frequency: "As needed"
    },
    {
      name: "Chemical Peels",
      description: "Chemical exfoliation for cosmetic improvement",
      type: "Cosmetic",
      duration: "20-45 minutes",
      anesthesia: "None",
      recovery: "3-7 days",
      complications: ["Irritation", "Hyperpigmentation", "Scarring"],
      frequency: "Monthly"
    },
    {
      name: "Laser Therapy",
      description: "Laser treatment for various skin conditions",
      type: "Therapeutic/Cosmetic",
      duration: "15-60 minutes",
      anesthesia: "Topical/None",
      recovery: "Immediate-7 days",
      complications: ["Pigment Changes", "Scarring", "Infection"],
      frequency: "Weekly-Monthly"
    },
    {
      name: "Phototherapy",
      description: "Light therapy for inflammatory skin conditions",
      type: "Therapeutic",
      duration: "15-30 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Erythema", "Burning", "Premature Aging"],
      frequency: "2-3 times weekly"
    }
  ]

  const protocols = [
    {
      name: "Dermatological Assessment Protocol",
      description: "Standardized approach to dermatological patient assessment",
      steps: ["History Taking", "Physical Examination", "Lesion Description", "Diagnostic Tests", "Treatment Plan"],
      frequency: "Every Patient",
      documentation: "Standard Forms",
      quality: "Evidence-based"
    },
    {
      name: "STI Management Protocol",
      description: "Confidential protocol for sexually transmitted infection management",
      steps: ["Confidential Consultation", "Diagnosis", "Treatment", "Contact Tracing", "Counseling"],
      frequency: "STI Cases",
      documentation: "Confidential Records",
      quality: "WHO Guidelines"
    },
    {
      name: "Emergency Dermatology Protocol",
      description: "Rapid response protocol for dermatological emergencies",
      steps: ["Emergency Assessment", "Stabilization", "Specific Treatment", "Referral", "Follow-up"],
      frequency: "Emergency Cases",
      documentation: "Emergency Records",
      quality: "Emergency Guidelines"
    },
    {
      name: "Cosmetic Procedure Protocol",
      description: "Standardized protocol for cosmetic dermatology procedures",
      steps: ["Patient Assessment", "Informed Consent", "Procedure", "Follow-up", "Complication Management"],
      frequency: "Cosmetic Procedures",
      documentation: "Cosmetic Records",
      quality: "Safety Standards"
    },
    {
      name: "Infection Control Protocol",
      description: "Infection control measures for dermatology practice",
      steps: ["Hand Hygiene", "Equipment Sterilization", "Environmental Cleaning", "Waste Management", "Staff Protection"],
      frequency: "Daily",
      documentation: "Infection Control Log",
      quality: "CDC Guidelines"
    }
  ]

  const researchProjects = [
    {
      title: "Psoriasis Treatment Outcomes Study",
      principalInvestigator: "Prof. Dr. R. Islam",
      coInvestigators: ["Assoc. Prof. Dr. S. Khatun", "Dr. N. Begum"],
      duration: "2024-2026",
      funding: "BDT 600,000",
      status: "Ongoing",
      description: "Study of treatment outcomes and quality of life in psoriasis patients.",
      publications: 2,
      impact: "High"
    },
    {
      title: "STI Epidemiology Study",
      principalInvestigator: "Asst. Prof. Dr. M. Ahmed",
      coInvestigators: ["Prof. Dr. R. Islam"],
      duration: "2023-2025",
      funding: "BDT 500,000",
      status: "Ongoing",
      description: "Epidemiological study of sexually transmitted infections in the local population.",
      publications: 1,
      impact: "High"
    },
    {
      title: "Cosmetic Dermatology Safety Study",
      principalInvestigator: "Assoc. Prof. Dr. S. Khatun",
      coInvestigators: ["Dr. N. Begum"],
      duration: "2024-2027",
      funding: "BDT 550,000",
      status: "Starting",
      description: "Safety and efficacy study of cosmetic dermatology procedures.",
      publications: 0,
      impact: "Medium"
    }
  ]

  const achievements = [
    {
      title: "Best Dermatology Department Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding dermatological care and clinical outcomes.",
      impact: "High"
    },
    {
      title: "STI Management Excellence",
      year: "2023",
      category: "Public Health",
      description: "Awarded for exceptional sexually transmitted infection management program.",
      impact: "High"
    },
    {
      title: "Cosmetic Dermatology Innovation",
      year: "2023",
      category: "Innovation",
      description: "Recognized for innovative approaches in cosmetic dermatology.",
      impact: "Medium"
    },
    {
      title: "Research Excellence Award",
      year: "2022",
      category: "Research",
      description: "Awarded for outstanding research contributions in dermatology.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Dermatology Workshop 2024",
      date: "2024-12-30",
      time: "9:00 AM - 5:00 PM",
      venue: "Dermatology Department",
      type: "Workshop",
      organizer: "Prof. Dr. R. Islam",
      participants: "Dermatology Professionals",
      description: "Annual workshop on recent advances in dermatology."
    },
    {
      title: "STI Management Seminar",
      date: "2025-01-04",
      time: "2:00 PM - 4:00 PM",
      venue: "STI Clinic",
      type: "Seminar",
      organizer: "Asst. Prof. Dr. M. Ahmed",
      participants: "Healthcare Workers",
      description: "Seminar on sexually transmitted infection management and prevention."
    },
    {
      title: "Cosmetic Dermatology Conference",
      date: "2025-01-07",
      time: "10:00 AM - 1:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Assoc. Prof. Dr. S. Khatun",
      participants: "Healthcare Professionals",
      description: "Conference on cosmetic dermatology and aesthetic medicine."
    }
  ]

  const resources = [
    {
      title: "Dermatology Internship Manual",
      description: "Comprehensive guide for dermatology internship training and procedures",
      type: "PDF",
      size: "9.5 MB",
      downloadCount: 1450,
      category: "Manual"
    },
    {
      title: "STI Management Guidelines",
      description: "Complete guidelines for sexually transmitted infection management",
      type: "PDF",
      size: "6.2 MB",
      downloadCount: 1850,
      category: "Guidelines"
    },
    {
      title: "Dermatological Procedures Atlas",
      description: "Comprehensive atlas of dermatological procedures and techniques",
      type: "PDF",
      size: "25.8 MB",
      downloadCount: 2100,
      category: "Atlas"
    },
    {
      title: "Cosmetic Dermatology Videos",
      description: "Demonstration videos of cosmetic dermatology procedures",
      type: "Video",
      size: "850 MB",
      downloadCount: 1200,
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
                <EyeIcon2 className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Skin & Venereal Diseases - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Dermatology and Venereal Disease Management</p>
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
                  <div className="text-sm text-gray-600">Hospital Beds</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-orange-600" />
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Dermatological Conditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonConditions.map((condition, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <AlertTriangleIcon className="w-6 h-6" />
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Dermatological Procedures</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Dermatology Resources</h2>
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
