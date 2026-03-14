"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2, Wind, Activity as ActivityIcon3, Thermometer as ThermometerIcon, HeartHandshake as HeartHandshakeIcon, AlertTriangle as AlertTriangleIcon3 } from "lucide-react"

export default function RespiratoryPage() {
  const departmentInfo = {
    name: "Department of Respiratory Medicine - Phase 4",
    head: "Prof. Dr. A. Rahman",
    established: "2013",
    faculty: 7,
    interns: 12,
    beds: 25,
    description: "The Phase 4 Respiratory Medicine program provides comprehensive internship training in respiratory diseases, pulmonary medicine, and critical care. Interns gain hands-on experience in diagnosing and managing acute and chronic respiratory conditions."
  }

  const faculty = [
    {
      name: "Prof. Dr. A. Rahman",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCP",
      experience: "20 years",
      specialization: "Interventional Pulmonology, Critical Care",
      email: "a.rahman@rcmc.edu.bd",
      phone: "Ext: 2800",
      publications: 38,
      research: "Bronchoscopy, Lung Cancer, Sleep Medicine",
      image: "/faculty/a-rahman.jpg"
    },
    {
      name: "Assoc. Prof. Dr. S. Khatun",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS",
      experience: "16 years",
      specialization: "Asthma, COPD, Allergic Diseases",
      email: "s.khatun@rcmc.edu.bd",
      phone: "Ext: 2801",
      publications: 32,
      research: "Asthma Management, COPD, Environmental Lung Diseases",
      image: "/faculty/s-khatun.jpg"
    },
    {
      name: "Asst. Prof. Dr. M. Ahmed",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "12 years",
      specialization: "Tuberculosis, Occupational Lung Diseases",
      email: "m.ahmed@rcmc.edu.bd",
      phone: "Ext: 2802",
      publications: 24,
      research: "Tuberculosis, Occupational Medicine, Environmental Health",
      image: "/faculty/m-ahmed.jpg"
    },
    {
      name: "Dr. N. Begum",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "8 years",
      specialization: "General Pulmonology, Sleep Medicine",
      email: "n.begum@rcmc.edu.bd",
      phone: "Ext: 2803",
      publications: 16,
      research: "General Respiratory Diseases, Sleep Disorders",
      image: "/faculty/n-begum.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Respiratory OPD",
      type: "Outpatient Care",
      capacity: 40,
      dailyPatients: "60/day",
      description: "Comprehensive outpatient care for respiratory diseases",
      facilities: ["Consultation Rooms", "PFT Lab", "Allergy Testing", "Counseling Room"],
      commonCases: ["Asthma", "COPD", "Tuberculosis", "Allergic Diseases", "Sleep Disorders"],
      incharge: "Dr. N. Begum"
    },
    {
      name: "Respiratory Ward",
      type: "Inpatient Care",
      capacity: 25,
      beds: 25,
      admissions: "50/month",
      description: "Inpatient care for acute and chronic respiratory conditions",
      facilities: ["Private Rooms", "General Ward", "Monitoring Systems", "Emergency Equipment"],
      commonCases: ["Severe Asthma", "COPD Exacerbation", "Pneumonia", "TB Complications", "Respiratory Failure"],
      incharge: "Dr. N. Begum"
    },
    {
      name: "Pulmonary Function Lab",
      type: "Diagnostic Unit",
      capacity: 20,
      dailyTests: "40/day",
      description: "Advanced pulmonary function testing and diagnostics",
      facilities: ["Spirometry", "Body Plethysmography", "DLCO Testing", "Exercise Testing", "Allergy Testing"],
      commonCases: ["Spirometry", "Lung Volume Testing", "Diffusion Capacity", "Exercise Testing", "Bronchial Challenge"],
      incharge: "Assoc. Prof. Dr. S. Khatun"
    },
    {
      name: "Bronchoscopy Unit",
      type: "Procedural Unit",
      capacity: 15,
      dailyProcedures: "20/day",
      description: "Advanced diagnostic and therapeutic bronchoscopic procedures",
      facilities: ["Bronchoscopy Suite", "Recovery Area", "Sterilization Unit", "Fluoroscopy"],
      commonCases: ["Diagnostic Bronchoscopy", "Therapeutic Bronchoscopy", "EBUS", "BAL", "Biopsy"],
      incharge: "Prof. Dr. A. Rahman"
    },
    {
      name: "Sleep Lab",
      type: "Diagnostic Unit",
      capacity: 10,
      dailyStudies: "15/day",
      description: "Comprehensive sleep disorder diagnosis and management",
      facilities: ["Sleep Study Rooms", "Polysomnography", "Home Sleep Testing", "CPAP Clinic"],
      commonCases: ["Sleep Apnea", "Insomnia", "Narcolepsy", "Restless Leg Syndrome", "Parasomnias"],
      incharge: "Dr. N. Begum"
    },
    {
      name: "Respiratory ICU",
      type: "Critical Care",
      capacity: 8,
      beds: 8,
      admissions: "20/month",
      description: "Intensive care for critically ill respiratory patients",
      facilities: ["Ventilators", "Monitoring Systems", "Bronchoscopy", "Emergency Procedures"],
      commonCases: ["Respiratory Failure", "ARDS", "Severe Pneumonia", "Status Asthmaticus", "Post-operative Care"],
      incharge: "Prof. Dr. A. Rahman"
    }
  ]

  const internshipProgram = [
    {
      name: "OPD Duties",
      duration: "4 Weeks",
      setting: "Respiratory OPD",
      responsibilities: ["Patient Consultation", "History Taking", "Physical Examination", "Treatment Planning"],
      skills: ["Respiratory Assessment", "History Taking", "Physical Examination", "Communication"],
      assessment: "Logbook + Supervisor Evaluation",
      supervisor: "Dr. N. Begum"
    },
    {
      name: "Ward Duties",
      duration: "3 Weeks",
      setting: "Respiratory Ward",
      responsibilities: ["Inpatient Care", "Daily Rounds", "Treatment Management", "Emergency Response"],
      skills: ["Inpatient Management", "Acute Respiratory Care", "Monitoring", "Documentation"],
      assessment: "Logbook + Ward Skills Assessment",
      supervisor: "Dr. N. Begum"
    },
    {
      name: "PFT Lab Rotation",
      duration: "2 Weeks",
      setting: "Pulmonary Function Lab",
      responsibilities: ["PFT Testing", "Data Analysis", "Report Preparation", "Quality Control"],
      skills: ["PFT Procedures", "Data Interpretation", "Report Writing", "Quality Assurance"],
      assessment: "Logbook + PFT Skills Assessment",
      supervisor: "Assoc. Prof. Dr. S. Khatun"
    },
    {
      name: "Bronchoscopy Rotation",
      duration: "2 Weeks",
      setting: "Bronchoscopy Unit",
      responsibilities: ["Procedure Assistance", "Patient Preparation", "Monitoring", "Post-procedure Care"],
      skills: ["Bronchoscopic Procedures", "Patient Monitoring", "Complication Recognition", "Emergency Response"],
      assessment: "Logbook + Bronchoscopy Skills Assessment",
      supervisor: "Prof. Dr. A. Rahman"
    },
    {
      name: "Sleep Lab Rotation",
      duration: "1 Week",
      setting: "Sleep Lab",
      responsibilities: ["Sleep Studies", "Data Analysis", "CPAP Management", "Patient Counseling"],
      skills: ["Sleep Testing", "Data Interpretation", "CPAP Management", "Patient Education"],
      assessment: "Logbook + Sleep Lab Skills Assessment",
      supervisor: "Dr. N. Begum"
    },
    {
      name: "ICU Rotation",
      duration: "1 Week",
      setting: "Respiratory ICU",
      responsibilities: ["Critical Care", "Ventilator Management", "Emergency Procedures", "Life Support"],
      skills: ["Critical Care Management", "Ventilator Management", "Emergency Response", "Team Coordination"],
      assessment: "Logbook + ICU Skills Assessment",
      supervisor: "Prof. Dr. A. Rahman"
    }
  ]

  const clinicalSkills = [
    {
      category: "Basic Respiratory Skills",
      skills: ["Respiratory Examination", "History Taking", "Physical Examination", "Chest Auscultation", "PFT Interpretation"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "Respiratory Skills Certified"
    },
    {
      category: "Emergency Respiratory Skills",
      skills: ["Acute Asthma Management", "COPD Exacerbation", "Respiratory Failure", "Intubation", "Ventilator Management"],
      competency: "Required",
      assessment: "Simulation Training + Direct Observation",
      certification: "Emergency Respiratory Certified"
    },
    {
      category: "PFT Skills",
      skills: ["Spirometry", "Lung Volume Testing", "Diffusion Capacity", "Airway Resistance", "Exercise Testing"],
      competency: "Required",
      assessment: "Lab Training + Direct Observation",
      certification: "PFT Skills Certified"
    },
    {
      category: "Bronchoscopy Skills",
      skills: ["Diagnostic Bronchoscopy", "Therapeutic Bronchoscopy", "EBUS", "BAL", "Biopsy"],
      competency: "Required",
      assessment: "Skills Lab + Clinical Performance",
      certification: "Bronchoscopy Skills Certified"
    },
    {
      category: "Sleep Medicine Skills",
      skills: ["Sleep Study Interpretation", "CPAP Management", "Sleep Disorder Diagnosis", "Patient Counseling"],
      competency: "Required",
      assessment: "Sleep Lab Training + Direct Observation",
      certification: "Sleep Medicine Certified"
    },
    {
      category: "Critical Care Skills",
      skills: ["Mechanical Ventilation", "Non-invasive Ventilation", "Airway Management", "Hemodynamic Monitoring"],
      competency: "Required",
      assessment: "ICU Training + Direct Observation",
      certification: "Critical Care Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Obstructive Airway Diseases",
      conditions: ["Asthma", "COPD", "Bronchiectasis", "Cystic Fibrosis", "Upper Airway Obstruction"],
      prevalence: "35%",
      management: ["Bronchodilators", "Inhaled Corticosteroids", "Antibiotics", "Pulmonary Rehabilitation"],
      complications: ["Respiratory Failure", "Cor Pulmonale", "Frequent Exacerbations", "Quality of Life Impact"]
    },
    {
      category: "Infectious Diseases",
      conditions: ["Pneumonia", "Tuberculosis", "Bronchitis", "Influenza", "COVID-19"],
      prevalence: "25%",
      management: ["Antibiotics", "Antivirals", "Supportive Care", "Vaccination", "Infection Control"],
      complications: ["Sepsis", "ARDS", "Multi-organ Failure", "Chronic Sequelae"]
    },
    {
      category: "Interstitial Lung Diseases",
      conditions: ["ILD", "Sarcoidosis", "Pneumoconiosis", "Hypersensitivity Pneumonitis", "Connective Tissue Disease"],
      prevalence: "15%",
      management: ["Immunosuppression", "Corticosteroids", "Supportive Care", "Lung Transplant", "Environmental Control"],
      complications: ["Fibrosis", "Respiratory Failure", "Pulmonary Hypertension", "Systemic Involvement"]
    },
    {
      category: "Neoplastic Diseases",
      conditions: ["Lung Cancer", "Mesothelioma", "Metastatic Lung Disease", "Carcinoid Tumors", "Lymphoma"],
      prevalence: "15%",
      management: ["Surgery", "Chemotherapy", "Radiation", "Targeted Therapy", "Immunotherapy"],
      complications: ["Metastasis", "Treatment Complications", "Quality of Life Issues", "Survival Impact"]
    },
    {
      category: "Sleep Disorders",
      conditions: ["Sleep Apnea", "Insomnia", "Narcolepsy", "Restless Leg Syndrome", "Parasomnias"],
      prevalence: "10%",
      management: ["CPAP", "Behavioral Therapy", "Medication", "Sleep Hygiene", "Weight Management"],
      complications: ["Cardiovascular Disease", "Metabolic Disorders", "Daytime Sleepiness", "Quality of Life Impact"]
    }
  ]

  const procedures = [
    {
      name: "Diagnostic Bronchoscopy",
      description: "Diagnostic examination of airways using flexible bronchoscope",
      type: "Diagnostic",
      duration: "30-60 minutes",
      anesthesia: "Conscious Sedation",
      recovery: "2-4 hours",
      complications: ["Bleeding", "Infection", "Bronchospasm", "Hypoxia"],
      frequency: "Daily"
    },
    {
      name: "Therapeutic Bronchoscopy",
      description: "Therapeutic procedures for airway diseases",
      type: "Therapeutic",
      duration: "45-90 minutes",
      anesthesia: "Conscious Sedation/General",
      recovery: "4-6 hours",
      complications: ["Bleeding", "Airway Injury", "Infection", "Respiratory Failure"],
      frequency: "Weekly"
    },
    {
      name: "EBUS-TBNA",
      description: "Endobronchial ultrasound with transbronchial needle aspiration",
      type: "Diagnostic",
      duration: "60-90 minutes",
      anesthesia: "Conscious Sedation",
      recovery: "2-4 hours",
      complications: ["Bleeding", "Infection", "Pneumothorax", "Cough"],
      frequency: "Weekly"
    },
    {
      name: "Thoracentesis",
      description: "Diagnostic and therapeutic removal of pleural fluid",
      type: "Diagnostic/Therapeutic",
      duration: "30-45 minutes",
      anesthesia: "Local",
      recovery: "Immediate",
      complications: ["Bleeding", "Infection", "Pneumothorax", "Re-expansion Pulmonary Edema"],
      frequency: "As needed"
    },
    {
      name: "Mechanical Ventilation",
      description: "Artificial ventilation for respiratory failure",
      type: "Therapeutic",
      duration: "Variable",
      anesthesia: "Sedation/General",
      recovery: "Variable",
      complications: ["Barotrauma", "Ventilator-associated Pneumonia", "Weaning Failure", "Hemodynamic Issues"],
      frequency: "As needed"
    },
    {
      name: "CPAP Titration",
      description: "Continuous positive airway pressure titration for sleep apnea",
      type: "Therapeutic",
      duration: "1-2 hours",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Mask Issues", "Pressure Problems", "Patient Discomfort", "Compliance Issues"],
      frequency: "As needed"
    }
  ]

  const protocols = [
    {
      name: "Asthma Management Protocol",
      description: "Standardized protocol for acute and chronic asthma management",
      steps: ["Assessment", "Severity Classification", "Treatment Initiation", "Monitoring", "Education"],
      frequency: "Every Asthma Case",
      documentation: "Asthma Registry",
      quality: "GINA Guidelines"
    },
    {
      name: "COPD Management Protocol",
      description: "Comprehensive protocol for COPD diagnosis and management",
      steps: ["Diagnosis", "Severity Assessment", "Treatment Selection", "Rehabilitation", "Follow-up"],
      frequency: "Every COPD Case",
      documentation: "COPD Registry",
      quality: "GOLD Guidelines"
    },
    {
      name: "TB Management Protocol",
      description: "Protocol for tuberculosis diagnosis, treatment, and follow-up",
      steps: ["Diagnosis", "Treatment Regimen", "Monitoring", "Contact Tracing", "Completion"],
      frequency: "Every TB Case",
      documentation: "TB Registry",
      quality: "WHO Guidelines"
    },
    {
      name: "Respiratory Emergency Protocol",
      description: "Rapid response protocol for respiratory emergencies",
      steps: ["Emergency Assessment", "Stabilization", "Specific Treatment", "ICU Transfer", "Follow-up"],
      frequency: "Emergency Cases",
      documentation: "Emergency Records",
      quality: "Emergency Guidelines"
    },
    {
      name: "Sleep Apnea Protocol",
      description: "Protocol for sleep apnea diagnosis and management",
      steps: ["Screening", "Diagnosis", "Severity Assessment", "Treatment", "Follow-up"],
      frequency: "Every Sleep Apnea Case",
      documentation: "Sleep Registry",
      quality: "AASM Guidelines"
    }
  ]

  const researchProjects = [
    {
      title: "COPD Outcomes Study",
      principalInvestigator: "Assoc. Prof. Dr. S. Khatun",
      coInvestigators: ["Prof. Dr. A. Rahman", "Dr. N. Begum"],
      duration: "2024-2026",
      funding: "BDT 600,000",
      status: "Ongoing",
      description: "Study of treatment outcomes and quality of life in COPD patients.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Tuberculosis Resistance Study",
      principalInvestigator: "Asst. Prof. Dr. M. Ahmed",
      coInvestigators: ["Prof. Dr. A. Rahman"],
      duration: "2023-2025",
      funding: "BDT 550,000",
      status: "Ongoing",
      description: "Study of drug resistance patterns in tuberculosis patients.",
      publications: 1,
      impact: "High"
    },
    {
      title: "Bronchoscopy Quality Improvement",
      principalInvestigator: "Prof. Dr. A. Rahman",
      coInvestigators: ["Dr. N. Begum"],
      duration: "2024-2027",
      funding: "BDT 500,000",
      status: "Starting",
      description: "Study of quality indicators and improvement strategies in bronchoscopy.",
      publications: 0,
      impact: "Medium"
    }
  ]

  const achievements = [
    {
      title: "Best Respiratory Department Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding respiratory care and clinical outcomes.",
      impact: "High"
    },
    {
      title: "Bronchoscopy Excellence Award",
      year: "2023",
      category: "Procedural Excellence",
      description: "Awarded for exceptional bronchoscopic services and outcomes.",
      impact: "High"
    },
    {
      title: "Asthma Care Excellence",
      year: "2023",
      category: "Patient Care",
      description: "Recognized for excellence in asthma management and education.",
      impact: "High"
    },
    {
      title: "Research Excellence Award",
      year: "2022",
      category: "Research",
      description: "Awarded for outstanding research contributions in respiratory medicine.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Respiratory Medicine Workshop 2024",
      date: "2025-01-06",
      time: "9:00 AM - 5:00 PM",
      venue: "Respiratory Department",
      type: "Workshop",
      organizer: "Prof. Dr. A. Rahman",
      participants: "Respiratory Professionals",
      description: "Annual workshop on recent advances in respiratory medicine and pulmonary procedures."
    },
    {
      title: "Asthma Education Seminar",
      date: "2025-01-09",
      time: "2:00 PM - 4:00 PM",
      venue: "PFT Lab",
      type: "Seminar",
      organizer: "Assoc. Prof. Dr. S. Khatun",
      participants: "Healthcare Workers",
      description: "Seminar on asthma management and patient education."
    },
    {
      title: "Sleep Medicine Conference",
      date: "2025-01-12",
      time: "10:00 AM - 1:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Dr. N. Begum",
      participants: "Healthcare Professionals",
      description: "Conference on sleep disorders and management strategies."
    }
  ]

  const resources = [
    {
      title: "Respiratory Medicine Internship Manual",
      description: "Comprehensive guide for respiratory medicine internship training and procedures",
      type: "PDF",
      size: "10.8 MB",
      downloadCount: 1450,
      category: "Manual"
    },
    {
      title: "Asthma Management Guidelines",
      description: "Complete guidelines for asthma diagnosis and management",
      type: "PDF",
      size: "7.2 MB",
      downloadCount: 2000,
      category: "Guidelines"
    },
    {
      title: "Bronchoscopy Atlas",
      description: "Comprehensive atlas of bronchoscopic findings and procedures",
      type: "PDF",
      size: "22.5 MB",
      downloadCount: 2500,
      category: "Atlas"
    },
    {
      title: "Respiratory Procedures Videos",
      description: "Demonstration videos of respiratory procedures and techniques",
      type: "Video",
      size: "1.1 GB",
      downloadCount: 1300,
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Respiratory Medicine - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Respiratory Care and Pulmonary Medicine</p>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Respiratory Conditions</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Respiratory Procedures</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Respiratory Medicine Resources</h2>
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
