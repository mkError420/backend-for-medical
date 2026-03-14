"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2, Wind, Activity as ActivityIcon3, Thermometer as ThermometerIcon, HeartHandshake as HeartHandshakeIcon, AlertTriangle as AlertTriangleIcon3 } from "lucide-react"

export default function MedicinePage() {
  const departmentInfo = {
    name: "Department of Medicine - Phase 4",
    head: "Prof. Dr. M. Rahman",
    established: "2013",
    faculty: 12,
    interns: 18,
    beds: 120,
    description: "The Phase 4 Medicine program provides comprehensive internship training in internal medicine, subspecialties, and critical care. Interns gain hands-on experience in diagnosing and managing complex adult diseases and medical emergencies."
  }

  const faculty = [
    {
      name: "Prof. Dr. M. Rahman",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCP",
      experience: "26 years",
      specialization: "Cardiology, Critical Care Medicine",
      email: "m.rahman@rcmc.edu.bd",
      phone: "Ext: 3400",
      publications: 52,
      research: "Cardiovascular Diseases, Critical Care, Internal Medicine",
      image: "/faculty/m-rahman.jpg"
    },
    {
      name: "Assoc. Prof. Dr. S. Ahmed",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS, FRCP",
      experience: "22 years",
      specialization: "Nephrology, Hypertension",
      email: "s.ahmed@rcmc.edu.bd",
      phone: "Ext: 3401",
      publications: 46,
      research: "Kidney Diseases, Hypertension, Dialysis",
      image: "/faculty/s-ahmed.jpg"
    },
    {
      name: "Asst. Prof. Dr. A. Khatun",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "18 years",
      specialization: "Endocrinology, Diabetes",
      email: "a.khatun@rcmc.edu.bd",
      phone: "Ext: 3402",
      publications: 34,
      research: "Diabetes Mellitus, Thyroid Disorders, Metabolic Diseases",
      image: "/faculty/a-khatun.jpg"
    },
    {
      name: "Dr. N. Islam",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "14 years",
      specialization: "Gastroenterology, Hepatology",
      email: "n.islam@rcmc.edu.bd",
      phone: "Ext: 3403",
      publications: 28,
      research: "Liver Diseases, GI Disorders, Infectious Diseases",
      image: "/faculty/n-islam.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Medicine OPD",
      type: "Outpatient Care",
      capacity: 80,
      dailyPatients: "250/day",
      description: "Comprehensive outpatient care for internal medicine conditions",
      facilities: ["Consultation Rooms", "Diagnostic Services", "Laboratory", "Pharmacy", "Counseling"],
      commonCases: ["Hypertension", "Diabetes", "Heart Disease", "GI Disorders", "Respiratory Diseases"],
      incharge: "Dr. N. Islam"
    },
    {
      name: "Medicine Ward",
      type: "Inpatient Care",
      capacity: 120,
      beds: 120,
      admissions: "200/month",
      description: "Inpatient care for medical conditions and post-operative care",
      facilities: ["Private Rooms", "General Ward", "Isolation Rooms", "Monitoring Systems", "Emergency Equipment"],
      commonCases: ["Cardiac Cases", "Diabetic Complications", "Renal Diseases", "Respiratory Failure", "Sepsis"],
      incharge: "Dr. N. Islam"
    },
    {
      name: "Medical ICU",
      type: "Critical Care",
      capacity: 20,
      beds: 20,
      admissions: "60/month",
      description: "Intensive care for critically ill medical patients",
      facilities: ["ICU Beds", "Ventilators", "Monitoring Systems", "Dialysis", "Emergency Equipment"],
      commonCases: ["Septic Shock", "Multi-organ Failure", "Respiratory Failure", "Cardiac Arrest", "Critical Illness"],
      incharge: "Prof. Dr. M. Rahman"
    },
    {
      name: "Diabetes Center",
      type: "Specialized Care",
      capacity: 40,
      dailyPatients: "100/day",
      description: "Comprehensive diabetes care and education",
      facilities: ["Consultation Rooms", "Laboratory", "Education Room", "Foot Care", "Dietary Counseling"],
      commonCases: ["Type 1 Diabetes", "Type 2 Diabetes", "Gestational Diabetes", "Diabetic Complications", "Prediabetes"],
      incharge: "Asst. Prof. Dr. A. Khatun"
    },
    {
      name: "Dialysis Unit",
      type: "Specialized Care",
      capacity: 15,
      dailySessions: "45/day",
      description: "Dialysis services for renal failure patients",
      facilities: ["Dialysis Machines", "Water Treatment", "Recovery Area", "Consultation", "Laboratory"],
      commonCases: ["Hemodialysis", "Peritoneal Dialysis", "CRRT", "Plasmapheresis", "Dialysis Access"],
      incharge: "Assoc. Prof. Dr. S. Ahmed"
    },
    {
      name: "Cardiology Unit",
      type: "Specialized Care",
      capacity: 30,
      dailyPatients: "80/day",
      description: "Specialized cardiac care and cardiac procedures",
      facilities: ["Cardiac Monitoring", "Echocardiography", "Stress Testing", "Cardiac Lab", "Recovery"],
      commonCases: ["Heart Failure", "Coronary Disease", "Arrhythmias", "Hypertension", "Valvular Disease"],
      incharge: "Prof. Dr. M. Rahman"
    }
  ]

  const internshipProgram = [
    {
      name: "Medicine OPD Rotation",
      duration: "4 Weeks",
      setting: "Medicine OPD",
      responsibilities: ["Patient Consultation", "Diagnosis", "Treatment Planning", "Patient Education", "Referral Management"],
      skills: ["Clinical Assessment", "Diagnostic Skills", "Treatment Planning", "Communication", "Documentation"],
      assessment: "Logbook + OPD Skills Assessment",
      supervisor: "Dr. N. Islam"
    },
    {
      name: "Medicine Ward Rotation",
      duration: "6 Weeks",
      setting: "Medicine Ward",
      responsibilities: ["Inpatient Care", "Daily Rounds", "Treatment Management", "Emergency Response", "Discharge Planning"],
      skills: ["Inpatient Management", "Ward Procedures", "Emergency Response", "Team Coordination", "Documentation"],
      assessment: "Logbook + Ward Skills Assessment",
      supervisor: "Dr. N. Islam"
    },
    {
      name: "Medical ICU Rotation",
      duration: "3 Weeks",
      setting: "Medical ICU",
      responsibilities: ["Critical Care", "Ventilator Management", "Emergency Procedures", "Life Support", "Monitoring"],
      skills: ["Critical Care Management", "Ventilator Management", "Emergency Procedures", "Life Support", "Team Leadership"],
      assessment: "Logbook + ICU Skills Assessment",
      supervisor: "Prof. Dr. M. Rahman"
    },
    {
      name: "Diabetes Center Rotation",
      duration: "2 Weeks",
      setting: "Diabetes Center",
      responsibilities: ["Diabetes Management", "Patient Education", "Complication Screening", "Dietary Counseling"],
      skills: ["Diabetes Management", "Patient Education", "Complication Screening", "Insulin Therapy", "Nutritional Counseling"],
      assessment: "Logbook + Diabetes Skills Assessment",
      supervisor: "Asst. Prof. Dr. A. Khatun"
    },
    {
      name: "Dialysis Unit Rotation",
      duration: "2 Weeks",
      setting: "Dialysis Unit",
      responsibilities: ["Dialysis Management", "Patient Assessment", "Vascular Access", "Complication Management"],
      skills: ["Dialysis Procedures", "Patient Assessment", "Vascular Access Management", "Fluid Management", "Emergency Response"],
      assessment: "Logbook + Dialysis Skills Assessment",
      supervisor: "Assoc. Prof. Dr. S. Ahmed"
    },
    {
      name: "Cardiology Rotation",
      duration: "2 Weeks",
      setting: "Cardiology Unit",
      responsibilities: ["Cardiac Assessment", "Echocardiography", "Stress Testing", "Cardiac Procedures", "Emergency Cardiac Care"],
      skills: ["Cardiac Assessment", "Echocardiography", "ECG Interpretation", "Cardiac Procedures", "Emergency Cardiac Care"],
      assessment: "Logbook + Cardiology Skills Assessment",
      supervisor: "Prof. Dr. M. Rahman"
    }
  ]

  const clinicalSkills = [
    {
      category: "General Medicine Skills",
      skills: ["History Taking", "Physical Examination", "Diagnostic Reasoning", "Treatment Planning", "Patient Communication"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "General Medicine Certified"
    },
    {
      category: "Cardiology Skills",
      skills: ["ECG Interpretation", "Echocardiography", "Cardiac Assessment", "Heart Failure Management", "Emergency Cardiac Care"],
      competency: "Required",
      assessment: "Cardiology Training + Clinical Performance",
      certification: "Cardiology Certified"
    },
    {
      category: "Endocrinology Skills",
      skills: ["Diabetes Management", "Thyroid Disorders", "Hormonal Assessment", "Metabolic Diseases", "Endocrine Emergencies"],
      competency: "Required",
      assessment: "Endocrinology Training + Direct Observation",
      certification: "Endocrinology Certified"
    },
    {
      category: "Nephrology Skills",
      skills: ["Renal Assessment", "Dialysis Management", "Fluid Management", "Electrolyte Management", "Hypertension Management"],
      competency: "Required",
      assessment: "Nephrology Training + Clinical Performance",
      certification: "Nephrology Certified"
    },
    {
      category: "Critical Care Skills",
      skills: ["Ventilator Management", "Hemodynamic Monitoring", "Life Support", "Emergency Procedures", "Critical Care Protocols"],
      competency: "Required",
      assessment: "Critical Care Training + Direct Observation",
      certification: "Critical Care Certified"
    },
    {
      category: "Gastroenterology Skills",
      skills: ["GI Assessment", "Liver Disease Management", "GI Procedures", "Nutritional Assessment", "GI Emergencies"],
      competency: "Required",
      assessment: "GI Training + Clinical Performance",
      certification: "Gastroenterology Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Cardiovascular Diseases",
      conditions: ["Coronary Artery Disease", "Heart Failure", "Hypertension", "Arrhythmias", "Valvular Heart Disease"],
      prevalence: "30%",
      management: ["Medical Therapy", "Lifestyle Modification", "Cardiac Procedures", "Rehabilitation", "Follow-up"],
      complications: ["Heart Attack", "Stroke", "Heart Failure", "Arrhythmias", "Sudden Death"]
    },
    {
      category: "Endocrine Disorders",
      conditions: ["Type 2 Diabetes", "Type 1 Diabetes", "Thyroid Disorders", "Obesity", "Metabolic Syndrome"],
      prevalence: "25%",
      management: ["Medical Therapy", "Lifestyle Changes", "Insulin Therapy", "Hormone Replacement", "Nutritional Counseling"],
      complications: ["Diabetic Complications", "Thyroid Crisis", "Metabolic Crises", "Cardiovascular Disease", "Quality of Life Impact"]
    },
    {
      category: "Renal Diseases",
      conditions: ["Chronic Kidney Disease", "Acute Kidney Injury", "Hypertensive Nephropathy", "Diabetic Nephropathy", "Glomerulonephritis"],
      prevalence: "15%",
      management: ["Medical Management", "Dialysis", "Transplant", "Blood Pressure Control", "Fluid Management"],
      complications: ["Renal Failure", "Cardiovascular Disease", "Anemia", "Bone Disease", "Electrolyte Imbalance"]
    },
    {
      category: "Respiratory Diseases",
      conditions: ["COPD", "Asthma", "Pneumonia", "Pulmonary Embolism", "Interstitial Lung Disease"],
      prevalence: "20%",
      management: ["Bronchodilators", "Steroids", "Antibiotics", "Oxygen Therapy", "Pulmonary Rehabilitation"],
      complications: ["Respiratory Failure", "Cor Pulmonale", "Infections", "Quality of Life Impact", "Mortality"]
    },
    {
      category: "Gastrointestinal Diseases",
      conditions: ["GERD", "Peptic Ulcer", "IBS", "IBD", "Liver Disease"],
      prevalence: "10%",
      management: ["Medical Therapy", "Lifestyle Changes", "Dietary Modification", "Endoscopic Procedures", "Surgical Intervention"],
      complications: ["Bleeding", "Perforation", "Malnutrition", "Liver Failure", "Cancer Risk"]
    }
  ]

  const procedures = [
    {
      name: "Central Venous Catheter",
      description: "Placement of central venous access for medication and monitoring",
      type: "Procedural",
      duration: "15-30 minutes",
      anesthesia: "Local",
      recovery: "Immediate",
      complications: ["Bleeding", "Infection", "Pneumothorax", "Arterial Puncture", "Thrombosis"],
      frequency: "Daily"
    },
    {
      name: "Lumbar Puncture",
      description: "Diagnostic and therapeutic procedure for cerebrospinal fluid analysis",
      type: "Diagnostic",
      duration: "15-30 minutes",
      anesthesia: "Local",
      recovery: "2-4 hours",
      complications: ["Headache", "Bleeding", "Infection", "Nerve Damage", "Brain Herniation"],
      frequency: "Weekly"
    },
    {
      name: "Thoracentesis",
      description: "Removal of fluid from pleural space for diagnosis and treatment",
      type: "Therapeutic",
      duration: "20-30 minutes",
      anesthesia: "Local",
      recovery: "Immediate",
      complications: ["Bleeding", "Infection", "Pneumothorax", "Re-expansion Pulmonary Edema", "Pain"],
      frequency: "Weekly"
    },
    {
      name: "Paracentesis",
      description: "Removal of fluid from peritoneal cavity for diagnosis and treatment",
      type: "Therapeutic",
      duration: "20-45 minutes",
      anesthesia: "Local",
      recovery: "Immediate",
      complications: ["Bleeding", "Infection", "Bowel Perforation", "Hypotension", "Electrolyte Imbalance"],
      frequency: "Weekly"
    },
    {
      name: "Endotracheal Intubation",
      description: "Airway management for respiratory failure",
      type: "Emergency",
      duration: "5-15 minutes",
      anesthesia: "Sedation/Paralysis",
      recovery: "Variable",
      complications: ["Esophageal Intubation", "Tube Displacement", "Aspiration", "Hypoxia", "Trauma"],
      frequency: "As needed"
    },
    {
      name: "Cardioversion",
      description: "Electrical conversion of arrhythmias to normal rhythm",
      type: "Therapeutic",
      duration: "15-30 minutes",
      anesthesia: "Sedation",
      recovery: "2-4 hours",
      complications: ["Arrhythmias", "Thromboembolism", "Skin Burns", "Hypotension", "Stroke"],
      frequency: "Weekly"
    }
  ]

  const protocols = [
    {
      name: "Sepsis Management Protocol",
      description: "Standardized protocol for sepsis recognition and management",
      steps: ["Recognition", "Screening", "Initial Management", "Source Control", "ICU Care"],
      frequency: "Every Sepsis Case",
      documentation: "Sepsis Registry",
      quality: "Surviving Sepsis Guidelines"
    },
    {
      name: "Diabetes Management Protocol",
      description: "Comprehensive protocol for diabetes mellitus management",
      steps: ["Screening", "Diagnosis", "Treatment Planning", "Complication Screening", "Follow-up"],
      frequency: "Every Diabetes Case",
      documentation: "Diabetes Registry",
      quality: "ADA Guidelines"
    },
    {
      name: "Cardiac Emergency Protocol",
      description: "Protocol for acute cardiac emergencies management",
      steps: ["Emergency Assessment", "Stabilization", "Specific Treatment", "Monitoring", "Transfer"],
      frequency: "Every Cardiac Emergency",
      documentation: "Cardiac Registry",
      quality: "AHA/ACC Guidelines"
    },
    {
      name: "Renal Failure Protocol",
      description: "Protocol for acute and chronic renal failure management",
      steps: ["Assessment", "Stabilization", "Dialysis Planning", "Management", "Follow-up"],
      frequency: "Every Renal Failure Case",
      documentation: "Renal Registry",
      quality: "KDIGO Guidelines"
    },
    {
      name: "Respiratory Failure Protocol",
      description: "Protocol for respiratory failure assessment and management",
      steps: ["Assessment", "Oxygen Therapy", "Ventilatory Support", "Underlying Cause", "Weaning"],
      frequency: "Every Respiratory Failure",
      documentation: "Respiratory Registry",
      quality: "ARDSnet Guidelines"
    }
  ]

  const researchProjects = [
    {
      title: "Cardiovascular Outcomes Study",
      principalInvestigator: "Prof. Dr. M. Rahman",
      coInvestigators: ["Assoc. Prof. Dr. S. Ahmed", "Dr. N. Islam"],
      duration: "2024-2026",
      funding: "BDT 800,000",
      status: "Ongoing",
      description: "Study of cardiovascular disease outcomes and treatment effectiveness.",
      publications: 4,
      impact: "High"
    },
    {
      title: "Diabetes Registry Study",
      principalInvestigator: "Asst. Prof. Dr. A. Khatun",
      coInvestigators: ["Prof. Dr. M. Rahman"],
      duration: "2023-2025",
      funding: "BDT 700,000",
      status: "Ongoing",
      description: "Study of diabetes management outcomes and complication rates.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Critical Care Quality Study",
      principalInvestigator: "Assoc. Prof. Dr. S. Ahmed",
      coInvestigators: ["Dr. N. Islam"],
      duration: "2024-2027",
      funding: "BDT 600,000",
      status: "Starting",
      description: "Study of critical care quality improvement and patient outcomes.",
      publications: 0,
      impact: "Medium"
    }
  ]

  const achievements = [
    {
      title: "Best Medicine Department Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding internal medicine services and patient outcomes.",
      impact: "High"
    },
    {
      title: "Diabetes Care Excellence Award",
      year: "2023",
      category: "Specialty Excellence",
      description: "Awarded for exceptional diabetes care and management outcomes.",
      impact: "High"
    },
    {
      title: "Critical Care Excellence Award",
      year: "2023",
      category: "Critical Care",
      description: "Recognized for excellence in critical care and ICU management.",
      impact: "High"
    },
    {
      title: "Research Excellence Award",
      year: "2022",
      category: "Research",
      description: "Awarded for outstanding research contributions in internal medicine.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Medicine Workshop 2024",
      date: "2025-01-12",
      time: "9:00 AM - 5:00 PM",
      venue: "Medicine Department",
      type: "Workshop",
      organizer: "Prof. Dr. M. Rahman",
      participants: "Medicine Professionals",
      description: "Annual workshop on recent advances in internal medicine and subspecialties."
    },
    {
      title: "Diabetes Management Training",
      date: "2025-01-15",
      time: "10:00 AM - 4:00 PM",
      venue: "Diabetes Center",
      type: "Training",
      organizer: "Asst. Prof. Dr. A. Khatun",
      participants: "Healthcare Workers",
      description: "Hands-on training for diabetes management and complication screening."
    },
    {
      title: "Critical Care Conference",
      date: "2025-01-18",
      time: "2:00 PM - 5:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Assoc. Prof. Dr. S. Ahmed",
      participants: "Healthcare Professionals",
      description: "Conference on latest advances in critical care and ICU management."
    }
  ]

  const resources = [
    {
      title: "Medicine Internship Manual",
      description: "Comprehensive guide for internal medicine internship training and procedures",
      type: "PDF",
      size: "15.5 MB",
      downloadCount: 1700,
      category: "Manual"
    },
    {
      title: "Internal Medicine Guidelines",
      description: "Complete guidelines for internal medicine diagnosis and management",
      type: "PDF",
      size: "11.2 MB",
      downloadCount: 2400,
      category: "Guidelines"
    },
    {
      title: "Clinical Procedures Atlas",
      description: "Comprehensive atlas of internal medicine procedures and techniques",
      type: "PDF",
      size: "38.5 MB",
      downloadCount: 3000,
      category: "Atlas"
    },
    {
      title: "Medicine Procedure Videos",
      description: "Demonstration videos of internal medicine procedures and techniques",
      type: "Video",
      size: "3.2 GB",
      downloadCount: 1600,
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
                <StethoscopeIcon className="w-12 h-12 text-blue-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Medicine - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Internal Medicine and Critical Care</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Clinical Excellence</div>
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
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
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
                          <span key={caseIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
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
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <TargetIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{skill.category}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {skill.competency}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Skills:</h4>
                      <div className="space-y-1">
                        {skill.skills.slice(0, 3).map((skillItem, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Medical Conditions</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Medical Procedures</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Medicine Resources</h2>
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
