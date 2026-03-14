"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2, Wind, Activity as ActivityIcon3, Thermometer as ThermometerIcon, HeartHandshake as HeartHandshakeIcon, AlertTriangle as AlertTriangleIcon3 } from "lucide-react"

export default function CasualtyPage() {
  const departmentInfo = {
    name: "Department of Casualty & Emergency Medicine - Phase 4",
    head: "Prof. Dr. M. Karim",
    established: "2012",
    faculty: 8,
    interns: 15,
    beds: 40,
    description: "The Phase 4 Casualty & Emergency Medicine program provides comprehensive internship training in emergency care, trauma management, and acute medical conditions. Interns gain hands-on experience in managing life-threatening emergencies and critical situations."
  }

  const faculty = [
    {
      name: "Prof. Dr. M. Karim",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCS",
      experience: "22 years",
      specialization: "Trauma Surgery, Critical Care",
      email: "m.karim@rcmc.edu.bd",
      phone: "Ext: 3000",
      publications: 42,
      research: "Trauma Management, Emergency Care, Critical Care Medicine",
      image: "/faculty/m-karim.jpg"
    },
    {
      name: "Assoc. Prof. Dr. S. Rahman",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS, FRCS",
      experience: "18 years",
      specialization: "Emergency Medicine, Disaster Management",
      email: "s.rahman@rcmc.edu.bd",
      phone: "Ext: 3001",
      publications: 35,
      research: "Emergency Medicine, Disaster Response, Acute Care",
      image: "/faculty/s-rahman.jpg"
    },
    {
      name: "Asst. Prof. Dr. A. Khatun",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "14 years",
      specialization: "Medical Emergencies, Toxicology",
      email: "a.khatun@rcmc.edu.bd",
      phone: "Ext: 3002",
      publications: 28,
      research: "Medical Emergencies, Toxicology, Acute Medicine",
      image: "/faculty/a-khatun.jpg"
    },
    {
      name: "Dr. N. Ahmed",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "10 years",
      specialization: "Emergency Medicine, Pre-hospital Care",
      email: "n.ahmed@rcmc.edu.bd",
      phone: "Ext: 3003",
      publications: 18,
      research: "Pre-hospital Care, Emergency Medicine, First Aid",
      image: "/faculty/n-ahmed.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Emergency Reception",
      type: "Triage Unit",
      capacity: 50,
      dailyPatients: "200/day",
      description: "Initial assessment and triage of emergency patients",
      facilities: ["Triage Area", "Waiting Room", "Registration", "Initial Assessment"],
      commonCases: ["Triage", "Initial Assessment", "Vital Signs", "Emergency Classification", "Patient Flow"],
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Emergency OPD",
      type: "Outpatient Emergency",
      capacity: 30,
      dailyPatients: "150/day",
      description: "Emergency outpatient care for acute conditions",
      facilities: ["Consultation Rooms", "Treatment Area", "Observation Beds", "Emergency Equipment"],
      commonCases: ["Acute Illness", "Minor Injuries", "Infections", "Pain Management", "Acute Exacerbations"],
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Resuscitation Unit",
      type: "Critical Care",
      capacity: 10,
      beds: 10,
      dailyPatients: "30/day",
      description: "Advanced life support and resuscitation for critical patients",
      facilities: ["Resuscitation Beds", "Ventilators", "Monitors", "Emergency Equipment", "Crash Carts"],
      commonCases: ["Cardiac Arrest", "Respiratory Failure", "Severe Trauma", "Shock", "Life-threatening Conditions"],
      incharge: "Prof. Dr. M. Karim"
    },
    {
      name: "Trauma Unit",
      type: "Specialized Care",
      capacity: 15,
      beds: 15,
      dailyPatients: "40/day",
      description: "Specialized care for trauma and injury patients",
      facilities: ["Trauma Bays", "Surgical Suite", "Imaging", "Blood Bank", "Operating Room"],
      commonCases: ["Major Trauma", "Road Traffic Accidents", "Falls", "Assault Injuries", "Industrial Accidents"],
      incharge: "Assoc. Prof. Dr. S. Rahman"
    },
    {
      name: "Emergency Ward",
      type: "Inpatient Care",
      capacity: 40,
      beds: 40,
      admissions: "80/month",
      description: "Short-term inpatient care for emergency conditions",
      facilities: ["Emergency Beds", "Monitoring Systems", "Treatment Areas", "Isolation Rooms", "Recovery Area"],
      commonCases: ["Acute Medical Conditions", "Post-operative Care", "Observation", "Stabilization", "Transfer Preparation"],
      incharge: "Asst. Prof. Dr. A. Khatun"
    },
    {
      name: "Emergency ICU",
      type: "Critical Care",
      capacity: 12,
      beds: 12,
      admissions: "30/month",
      description: "Intensive care for critically ill emergency patients",
      facilities: ["ICU Beds", "Advanced Monitoring", "Ventilators", "Dialysis", "Emergency Procedures"],
      commonCases: ["Septic Shock", "Multi-organ Failure", "Severe Sepsis", "Critical Trauma", "Post-cardiac Arrest"],
      incharge: "Prof. Dr. M. Karim"
    }
  ]

  const internshipProgram = [
    {
      name: "Emergency Reception Rotation",
      duration: "2 Weeks",
      setting: "Emergency Reception",
      responsibilities: ["Triage", "Initial Assessment", "Vital Signs", "Patient Classification", "Documentation"],
      skills: ["Triage Skills", "Rapid Assessment", "Vital Sign Measurement", "Emergency Classification", "Communication"],
      assessment: "Logbook + Triage Skills Assessment",
      supervisor: "Dr. N. Ahmed"
    },
    {
      name: "Emergency OPD Duties",
      duration: "3 Weeks",
      setting: "Emergency OPD",
      responsibilities: ["Patient Consultation", "Emergency Treatment", "Minor Procedures", "Referral Management"],
      skills: ["Emergency Assessment", "Acute Care Management", "Minor Procedures", "Referral Skills", "Documentation"],
      assessment: "Logbook + Emergency Skills Assessment",
      supervisor: "Dr. N. Ahmed"
    },
    {
      name: "Resuscitation Unit Rotation",
      duration: "3 Weeks",
      setting: "Resuscitation Unit",
      responsibilities: ["Resuscitation", "Advanced Life Support", "Critical Care", "Emergency Procedures"],
      skills: ["ALS Skills", "Resuscitation", "Critical Care Management", "Emergency Procedures", "Team Leadership"],
      assessment: "Logbook + Resuscitation Skills Assessment",
      supervisor: "Prof. Dr. M. Karim"
    },
    {
      name: "Trauma Unit Rotation",
      duration: "3 Weeks",
      setting: "Trauma Unit",
      responsibilities: ["Trauma Assessment", "Trauma Management", "Emergency Surgery", "Trauma Care"],
      skills: ["Trauma Assessment", "Trauma Management", "Emergency Surgery", "ATLS Protocols", "Multi-trauma Care"],
      assessment: "Logbook + Trauma Skills Assessment",
      supervisor: "Assoc. Prof. Dr. S. Rahman"
    },
    {
      name: "Emergency Ward Duties",
      duration: "2 Weeks",
      setting: "Emergency Ward",
      responsibilities: ["Inpatient Care", "Emergency Management", "Monitoring", "Discharge Planning"],
      skills: ["Inpatient Emergency Care", "Monitoring", "Stabilization", "Transfer Management", "Documentation"],
      assessment: "Logbook + Ward Skills Assessment",
      supervisor: "Asst. Prof. Dr. A. Khatun"
    },
    {
      name: "Emergency ICU Rotation",
      duration: "2 Weeks",
      setting: "Emergency ICU",
      responsibilities: ["Critical Care", "ICU Management", "Ventilator Management", "Emergency Procedures"],
      skills: ["Critical Care Management", "Ventilator Management", "ICU Procedures", "Emergency ICU Care", "Team Coordination"],
      assessment: "Logbook + ICU Skills Assessment",
      supervisor: "Prof. Dr. M. Karim"
    }
  ]

  const clinicalSkills = [
    {
      category: "Basic Emergency Skills",
      skills: ["Triage", "Vital Signs", "Rapid Assessment", "Basic Life Support", "Emergency Documentation"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "Basic Emergency Certified"
    },
    {
      category: "Advanced Life Support",
      skills: ["ALS Protocols", "Cardiac Arrest Management", "Airway Management", "Defibrillation", "Drug Administration"],
      competency: "Required",
      assessment: "Simulation Training + Direct Observation",
      certification: "ALS Certified"
    },
    {
      category: "Trauma Management",
      skills: ["ATLS Protocols", "Trauma Assessment", "Multi-trauma Care", "Emergency Surgery", "Trauma Resuscitation"],
      competency: "Required",
      assessment: "Trauma Training + Clinical Performance",
      certification: "ATLS Certified"
    },
    {
      category: "Emergency Procedures",
      skills: ["Intubation", "Chest Tube Insertion", "Central Line Placement", "Emergency Surgery", "Diagnostic Procedures"],
      competency: "Required",
      assessment: "Procedural Skills Lab + Clinical Performance",
      certification: "Emergency Procedures Certified"
    },
    {
      category: "Critical Care Skills",
      skills: ["Mechanical Ventilation", "Hemodynamic Monitoring", "ICU Management", "Critical Care Protocols", "Emergency ICU Care"],
      competency: "Required",
      assessment: "ICU Training + Direct Observation",
      certification: "Critical Care Certified"
    },
    {
      category: "Toxicology & Environmental",
      skills: ["Toxicology Assessment", "Poison Management", "Environmental Emergencies", "Decontamination", "Antidote Administration"],
      competency: "Required",
      assessment: "Toxicology Training + Direct Observation",
      certification: "Toxicology Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Cardiovascular Emergencies",
      conditions: ["Acute MI", "Cardiac Arrest", "Arrhythmias", "Heart Failure", "Hypertensive Crisis"],
      prevalence: "25%",
      management: ["Thrombolysis", "Cardiac Monitoring", "Emergency Medications", "Resuscitation", "Referral"],
      complications: ["Cardiogenic Shock", "Arrhythmias", "Cardiac Arrest", "Multi-organ Failure"]
    },
    {
      category: "Respiratory Emergencies",
      conditions: ["Acute Asthma", "COPD Exacerbation", "Pneumonia", "Pulmonary Embolism", "Respiratory Failure"],
      prevalence: "20%",
      management: ["Bronchodilators", "Oxygen Therapy", "Ventilatory Support", "Emergency Medications", "ICU Care"],
      complications: ["Respiratory Failure", "Hypoxia", "Cardiac Arrest", "Multi-organ Failure"]
    },
    {
      category: "Trauma & Injuries",
      conditions: ["Road Traffic Accidents", "Falls", "Assault Injuries", "Burns", "Industrial Accidents"],
      prevalence: "30%",
      management: ["ATLS Protocols", "Emergency Surgery", "Trauma Resuscitation", "Blood Transfusion", "ICU Care"],
      complications: ["Hemorrhagic Shock", "Multi-trauma", "Organ Failure", "Infection", "Disability"]
    },
    {
      category: "Neurological Emergencies",
      conditions: ["Stroke", "Head Injury", "Seizures", "Meningitis", "Spinal Cord Injury"],
      prevalence: "15%",
      management: ["Neurological Assessment", "Emergency Treatment", "CT/MRI", "Neurosurgical Referral", "ICU Care"],
      complications: ["Brain Herniation", "Permanent Disability", "Coma", "Death", "Seizure Complications"]
    },
    {
      category: "Medical Emergencies",
      conditions: ["Diabetic Emergencies", "Sepsis", "Toxicology", "Acute Abdomen", "Shock"],
      prevalence: "10%",
      management: ["Emergency Treatment", "Specific Antidotes", "Supportive Care", "ICU Admission", "Specialist Referral"],
      complications: ["Multi-organ Failure", "Sepsis", "Metabolic Crisis", "Organ Damage", "Death"]
    }
  ]

  const procedures = [
    {
      name: "Cardiopulmonary Resuscitation",
      description: "Emergency resuscitation for cardiac arrest patients",
      type: "Emergency",
      duration: "30-60 minutes",
      anesthesia: "None",
      recovery: "Variable",
      complications: ["Rib Fractures", "Aspiration", "Brain Injury", "Death"],
      frequency: "As needed"
    },
    {
      name: "Endotracheal Intubation",
      description: "Airway management for respiratory failure",
      type: "Emergency",
      duration: "5-15 minutes",
      anesthesia: "Sedation/Paralysis",
      recovery: "Variable",
      complications: ["Esophageal Intubation", "Tube Displacement", "Aspiration", "Hypoxia"],
      frequency: "Daily"
    },
    {
      name: "Chest Tube Insertion",
      description: "Management of pneumothorax and hemothorax",
      type: "Emergency",
      duration: "20-30 minutes",
      anesthesia: "Local",
      recovery: "Immediate",
      complications: ["Bleeding", "Infection", "Lung Injury", "Tube Malposition"],
      frequency: "Weekly"
    },
    {
      name: "Central Venous Catheter",
      description: "Central venous access for emergency care",
      type: "Emergency",
      duration: "15-30 minutes",
      anesthesia: "Local",
      recovery: "Immediate",
      complications: ["Arterial Puncture", "Pneumothorax", "Infection", "Thrombosis"],
      frequency: "Daily"
    },
    {
      name: "Emergency Thoracotomy",
      description: "Emergency surgery for thoracic trauma",
      type: "Emergency Surgery",
      duration: "60-120 minutes",
      anesthesia: "General",
      recovery: "Variable",
      complications: ["Bleeding", "Infection", "Organ Injury", "Death"],
      frequency: "Monthly"
    },
    {
      name: "Diagnostic Peritoneal Lavage",
      description: "Diagnostic procedure for abdominal trauma",
      type: "Diagnostic",
      duration: "20-30 minutes",
      anesthesia: "Local",
      recovery: "Immediate",
      complications: ["Bleeding", "Infection", "Perforation", "False Results"],
      frequency: "Weekly"
    }
  ]

  const protocols = [
    {
      name: "Cardiac Arrest Protocol",
      description: "Standardized protocol for cardiac arrest management",
      steps: ["Recognition", "CPR Initiation", "ALS Protocols", "Post-resuscitation Care", "Transfer"],
      frequency: "Every Cardiac Arrest",
      documentation: "Cardiac Arrest Registry",
      quality: "AHA Guidelines"
    },
    {
      name: "Trauma Resuscitation Protocol",
      description: "Comprehensive protocol for trauma patient management",
      steps: ["Primary Survey", "Resuscitation", "Secondary Survey", "Definitive Care", "Transfer"],
      frequency: "Every Major Trauma",
      documentation: "Trauma Registry",
      quality: "ATLS Guidelines"
    },
    {
      name: "Sepsis Management Protocol",
      description: "Protocol for sepsis recognition and management",
      steps: ["Recognition", "Screening", "Initial Management", "Source Control", "ICU Care"],
      frequency: "Every Sepsis Case",
      documentation: "Sepsis Registry",
      quality: "Surviving Sepsis Guidelines"
    },
    {
      name: "Stroke Protocol",
      description: "Protocol for acute stroke management",
      steps: ["Recognition", "CT Scan", "Thrombolysis", "Supportive Care", "Neurology Referral"],
      frequency: "Every Stroke Case",
      documentation: "Stroke Registry",
      quality: "AHA/ASA Guidelines"
    },
    {
      name: "Mass Casualty Protocol",
      description: "Protocol for mass casualty incident management",
      steps: ["Triage", "Resource Allocation", "Patient Management", "Transfer", "Documentation"],
      frequency: "Mass Casualty Events",
      documentation: "Disaster Registry",
      quality: "Disaster Guidelines"
    }
  ]

  const researchProjects = [
    {
      title: "Trauma Outcomes Study",
      principalInvestigator: "Assoc. Prof. Dr. S. Rahman",
      coInvestigators: ["Prof. Dr. M. Karim", "Dr. N. Ahmed"],
      duration: "2024-2026",
      funding: "BDT 700,000",
      status: "Ongoing",
      description: "Study of trauma management outcomes and quality improvement.",
      publications: 3,
      impact: "High"
    },
    {
      title: "Emergency Medicine Quality Study",
      principalInvestigator: "Prof. Dr. M. Karim",
      coInvestigators: ["Asst. Prof. Dr. A. Khatun"],
      duration: "2023-2025",
      funding: "BDT 600,000",
      status: "Ongoing",
      description: "Study of emergency care quality and patient outcomes.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Cardiac Arrest Registry Study",
      principalInvestigator: "Dr. N. Ahmed",
      coInvestigators: ["Prof. Dr. M. Karim"],
      duration: "2024-2027",
      funding: "BDT 500,000",
      status: "Starting",
      description: "Study of cardiac arrest outcomes and resuscitation effectiveness.",
      publications: 0,
      impact: "Medium"
    }
  ]

  const achievements = [
    {
      title: "Best Emergency Department Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding emergency care and patient outcomes.",
      impact: "High"
    },
    {
      title: "Trauma Care Excellence Award",
      year: "2023",
      category: "Specialty Excellence",
      description: "Awarded for exceptional trauma care and management.",
      impact: "High"
    },
    {
      title: "Emergency Medicine Innovation Award",
      year: "2023",
      category: "Innovation",
      description: "Recognized for innovative emergency care approaches.",
      impact: "High"
    },
    {
      title: "Disaster Management Excellence",
      year: "2022",
      category: "Disaster Response",
      description: "Awarded for excellence in disaster management and response.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Emergency Medicine Workshop 2024",
      date: "2025-01-08",
      time: "9:00 AM - 5:00 PM",
      venue: "Emergency Department",
      type: "Workshop",
      organizer: "Prof. Dr. M. Karim",
      participants: "Emergency Professionals",
      description: "Annual workshop on recent advances in emergency medicine and trauma care."
    },
    {
      title: "ATLS Training Course",
      date: "2025-01-11",
      time: "8:00 AM - 6:00 PM",
      venue: "Trauma Unit",
      type: "Training",
      organizer: "Assoc. Prof. Dr. S. Rahman",
      participants: "Healthcare Workers",
      description: "Advanced Trauma Life Support training course for healthcare providers."
    },
    {
      title: "Emergency Medicine Conference",
      date: "2025-01-14",
      time: "10:00 AM - 1:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Dr. N. Ahmed",
      participants: "Healthcare Professionals",
      description: "Conference on emergency medicine and critical care updates."
    }
  ]

  const resources = [
    {
      title: "Emergency Medicine Internship Manual",
      description: "Comprehensive guide for emergency medicine internship training and procedures",
      type: "PDF",
      size: "12.5 MB",
      downloadCount: 1600,
      category: "Manual"
    },
    {
      title: "ATLS Guidelines",
      description: "Complete guidelines for Advanced Trauma Life Support",
      type: "PDF",
      size: "8.2 MB",
      downloadCount: 2200,
      category: "Guidelines"
    },
    {
      title: "Emergency Procedures Atlas",
      description: "Comprehensive atlas of emergency procedures and techniques",
      type: "PDF",
      size: "25.5 MB",
      downloadCount: 2800,
      category: "Atlas"
    },
    {
      title: "Emergency Medicine Videos",
      description: "Demonstration videos of emergency procedures and resuscitation",
      type: "Video",
      size: "1.5 GB",
      downloadCount: 1500,
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
                <Ambulance className="w-12 h-12 text-red-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Casualty & Emergency Medicine - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Emergency Care and Trauma Management</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">24/7 Emergency Service</div>
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
                  <div className="text-sm text-gray-600">Emergency Beds</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MonitorIcon className="w-8 h-8 text-red-600" />
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
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
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
                          <span key={caseIndex} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Emergency Conditions</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Emergency Procedures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {procedures.map((procedure, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <SyringeIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{procedure.name}</h3>
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Emergency Medicine Resources</h2>
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
