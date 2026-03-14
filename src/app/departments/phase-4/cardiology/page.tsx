"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2 } from "lucide-react"

export default function CardiologyPage() {
  const departmentInfo = {
    name: "Department of Cardiology - Phase 4",
    head: "Prof. Dr. A. Karim",
    established: "2013",
    faculty: 10,
    interns: 20,
    beds: 40,
    description: "The Phase 4 Cardiology program provides comprehensive internship training in cardiovascular medicine, cardiac emergencies, and interventional cardiology. Interns gain hands-on experience in diagnosing and managing acute and chronic cardiac conditions."
  }

  const faculty = [
    {
      name: "Prof. Dr. A. Karim",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCP",
      experience: "25 years",
      specialization: "Interventional Cardiology, Cardiac Catheterization",
      email: "a.karim@rcmc.edu.bd",
      phone: "Ext: 2600",
      publications: 52,
      research: "Interventional Cardiology, Cardiac Imaging",
      image: "/faculty/a-karim.jpg"
    },
    {
      name: "Assoc. Prof. Dr. S. Rahman",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS, FRCP",
      experience: "20 years",
      specialization: "Clinical Cardiology, Echocardiography",
      email: "s.rahman@rcmc.edu.bd",
      phone: "Ext: 2601",
      publications: 38,
      research: "Echocardiography, Cardiac Imaging",
      image: "/faculty/s-rahman.jpg"
    },
    {
      name: "Asst. Prof. Dr. M. Ahmed",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "15 years",
      specialization: "Electrophysiology, Cardiac Arrhythmias",
      email: "m.ahmed@rcmc.edu.bd",
      phone: "Ext: 2602",
      publications: 28,
      research: "Cardiac Electrophysiology, Arrhythmia Management",
      image: "/faculty/m-ahmed.jpg"
    },
    {
      name: "Dr. N. Begum",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "10 years",
      specialization: "Preventive Cardiology, Cardiac Rehabilitation",
      email: "n.begum@rcmc.edu.bd",
      phone: "Ext: 2603",
      publications: 18,
      research: "Preventive Cardiology, Risk Factor Management",
      image: "/faculty/n-begum.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Cardiology OPD",
      type: "Outpatient Care",
      capacity: 60,
      dailyPatients: "100/day",
      description: "Comprehensive outpatient care for cardiovascular diseases",
      facilities: ["Consultation Rooms", "ECG Room", "Echocardiography", "Stress Testing"],
      commonCases: ["Hypertension", "Ischemic Heart Disease", "Arrhythmias", "Heart Failure", "Valvular Disease"],
      incharge: "Dr. N. Begum"
    },
    {
      name: "Cardiology Ward",
      type: "Inpatient Care",
      capacity: 40,
      beds: 40,
      admissions: "80/month",
      description: "Inpatient care for acute and chronic cardiac conditions",
      facilities: ["Private Rooms", "General Ward", "ICU Beds", "Monitoring Systems", "Emergency Equipment"],
      commonCases: ["Acute MI", "Unstable Angina", "Severe Heart Failure", "Arrhythmias", "Post-operative Care"],
      incharge: "Dr. N. Begum"
    },
    {
      name: "Cardiac ICU",
      type: "Critical Care",
      capacity: 10,
      beds: 10,
      admissions: "30/month",
      description: "Intensive care for critically ill cardiac patients",
      facilities: ["Ventilators", "Hemodynamic Monitoring", "IABP", "Temporary Pacemakers", "Advanced Life Support"],
      commonCases: ["Cardiogenic Shock", "Acute MI with Complications", "Severe Arrhythmias", "Cardiac Arrest", "Post-cardiac Surgery"],
      incharge: "Prof. Dr. A. Karim"
    },
    {
      name: "Catheterization Lab",
      type: "Interventional",
      capacity: 15,
      dailyProcedures: "20/day",
      description: "Advanced cardiac catheterization and interventional procedures",
      facilities: ["Cath Lab", "Angiography System", "Interventional Equipment", "Recovery Area", "Control Room"],
      commonCases: ["Coronary Angiography", "PCI", "Pacemaker Implantation", "Valvuloplasty", "Structural Interventions"],
      incharge: "Prof. Dr. A. Karim"
    },
    {
      name: "Echocardiography Lab",
      type: "Diagnostic",
      capacity: 20,
      dailyStudies: "50/day",
      description: "Advanced echocardiography and cardiac imaging services",
      facilities: ["2D/3D Echo", "Doppler Studies", "Stress Echo", "TEE", "Cardiac MRI"],
      commonCases: ["Valvular Disease", "Cardiomyopathy", "Congenital Heart Disease", "Pericardial Disease", "Cardiac Tumors"],
      incharge: "Assoc. Prof. Dr. S. Rahman"
    },
    {
      name: "Cardiac Rehabilitation",
      type: "Rehabilitation",
      capacity: 30,
      dailyPatients: "40/day",
      description: "Comprehensive cardiac rehabilitation and preventive cardiology services",
      facilities: ["Exercise Equipment", "Education Room", "Counseling Area", "Risk Assessment", "Follow-up Clinic"],
      commonCases: ["Post-MI Rehabilitation", "Heart Failure Management", "Risk Factor Control", "Lifestyle Counseling", "Exercise Prescription"],
      incharge: "Dr. N. Begum"
    }
  ]

  const internshipProgram = [
    {
      name: "OPD Duties",
      duration: "4 Weeks",
      setting: "Cardiology OPD",
      responsibilities: ["Patient Consultation", "ECG Interpretation", "Risk Assessment", "Patient Education"],
      skills: ["Cardiac Examination", "ECG Reading", "Risk Stratification", "Communication"],
      assessment: "Logbook + Supervisor Evaluation",
      supervisor: "Dr. N. Begum"
    },
    {
      name: "Ward Duties",
      duration: "3 Weeks",
      setting: "Cardiology Ward",
      responsibilities: ["Inpatient Care", "Daily Rounds", "Treatment Management", "Emergency Response"],
      skills: ["Inpatient Management", "Acute Cardiac Care", "Monitoring", "Documentation"],
      assessment: "Logbook + Ward Skills Assessment",
      supervisor: "Dr. N. Begum"
    },
    {
      name: "ICU Rotation",
      duration: "2 Weeks",
      setting: "Cardiac ICU",
      responsibilities: ["Critical Care", "Hemodynamic Monitoring", "Emergency Procedures", "Life Support"],
      skills: ["Critical Care Management", "Ventilator Management", "Hemodynamic Monitoring", "Emergency Response"],
      assessment: "Logbook + ICU Skills Assessment",
      supervisor: "Prof. Dr. A. Karim"
    },
    {
      name: "Cath Lab Rotation",
      duration: "2 Weeks",
      setting: "Catheterization Lab",
      responsibilities: ["Procedure Assistance", "Patient Preparation", "Monitoring", "Post-procedure Care"],
      skills: ["Cath Lab Procedures", "Radiation Safety", "Emergency Response", "Complication Management"],
      assessment: "Logbook + Cath Lab Skills Assessment",
      supervisor: "Prof. Dr. A. Karim"
    },
    {
      name: "Echo Lab Rotation",
      duration: "2 Weeks",
      setting: "Echocardiography Lab",
      responsibilities: ["Echo Studies", "Image Acquisition", "Report Preparation", "Quality Control"],
      skills: ["Echocardiography", "Image Interpretation", "Report Writing", "Quality Assurance"],
      assessment: "Logbook + Echo Skills Assessment",
      supervisor: "Assoc. Prof. Dr. S. Rahman"
    },
    {
      name: "Emergency Rotation",
      duration: "1 Week",
      setting: "Emergency Department",
      responsibilities: ["Emergency Cardiac Care", "Triage", "Stabilization", "Referral"],
      skills: ["Emergency Assessment", "Acute Cardiac Care", "Resuscitation", "Team Coordination"],
      assessment: "Logbook + Emergency Skills Assessment",
      supervisor: "Prof. Dr. A. Karim"
    }
  ]

  const clinicalSkills = [
    {
      category: "Basic Cardiac Skills",
      skills: ["Cardiac Examination", "ECG Interpretation", "Blood Pressure Measurement", "Heart Sounds Assessment", "Risk Factor Assessment"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "Cardiac Skills Certified"
    },
    {
      category: "Emergency Cardiac Skills",
      skills: ["CPR", "ACLS", "Emergency Cardiac Care", "Defibrillation", "Emergency Drug Administration"],
      competency: "Required",
      assessment: "Simulation Training + Direct Observation",
      certification: "ACLS Certified"
    },
    {
      category: "Diagnostic Skills",
      skills: ["ECG Analysis", "Chest X-ray Interpretation", "Cardiac Biomarkers", "Stress Testing", "Holter Monitoring"],
      competency: "Required",
      assessment: "Case Studies + Direct Observation",
      certification: "Diagnostic Skills Certified"
    },
    {
      category: "Procedural Skills",
      skills: ["Central Line Insertion", "Arterial Line", "Temporary Pacing", "ICD Management", "IABP Management"],
      competency: "Required",
      assessment: "Skills Lab + Clinical Performance",
      certification: "Procedural Skills Certified"
    },
    {
      category: "Imaging Skills",
      skills: ["Basic Echocardiography", "Chest X-ray", "Cardiac CT Basics", "MRI Interpretation", "Nuclear Cardiology"],
      competency: "Required",
      assessment: "Imaging Training + Direct Observation",
      certification: "Imaging Skills Certified"
    },
    {
      category: "Interventional Skills",
      skills: ["Cath Lab Assistance", "Procedure Preparation", "Patient Monitoring", "Complication Recognition", "Emergency Response"],
      competency: "Optional",
      assessment: "Cath Lab Training + Direct Observation",
      certification: "Interventional Skills Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Ischemic Heart Disease",
      conditions: ["Stable Angina", "Unstable Angina", "Acute MI", "Silent Ischemia", "Post-MI"],
      prevalence: "40%",
      management: ["Medical Therapy", "Revascularization", "Risk Factor Control", "Lifestyle Modification"],
      complications: ["Heart Failure", "Arrhythmias", "Cardiogenic Shock", "Death"]
    },
    {
      category: "Heart Failure",
      conditions: ["Systolic HF", "Diastolic HF", "Acute Decompensated HF", "Right-sided HF", "High-output HF"],
      prevalence: "25%",
      management: ["Diuretics", "ACE Inhibitors", "Beta Blockers", "Device Therapy", "Lifestyle"],
      complications: ["Renal Dysfunction", "Arrhythmias", "Thromboembolism", "Progressive Decline"]
    },
    {
      category: "Arrhythmias",
      conditions: ["Atrial Fibrillation", "Ventricular Tachycardia", "Bradycardia", "SVT", "Heart Block"],
      prevalence: "15%",
      management: ["Antiarrhythmics", "Anticoagulation", "Pacemaker", "Ablation", "ICD"],
      complications: ["Stroke", "Syncope", "Sudden Death", "Heart Failure"]
    },
    {
      category: "Valvular Heart Disease",
      conditions: ["Mitral Stenosis", "Mitral Regurgitation", "Aortic Stenosis", "Aortic Regurgitation", "Tricuspid Disease"],
      prevalence: "10%",
      management: ["Medical Therapy", "Valve Repair", "Valve Replacement", "Balloon Valvuloplasty", "TAVR"],
      complications: ["Heart Failure", "Arrhythmias", "Thromboembolism", "Endocarditis"]
    },
    {
      category: "Hypertension",
      conditions: ["Essential Hypertension", "Secondary Hypertension", "Hypertensive Crisis", "White Coat HTN", "Resistant HTN"],
      prevalence: "10%",
      management: ["Lifestyle", "Multiple Drugs", "Device Therapy", "Investigation", "Target Organ Protection"],
      complications: ["Stroke", "Heart Disease", "Kidney Disease", "Vascular Disease"]
    }
  ]

  const procedures = [
    {
      name: "Coronary Angiography",
      description: "Diagnostic procedure to visualize coronary arteries",
      type: "Diagnostic",
      duration: "30-60 minutes",
      anesthesia: "Local",
      recovery: "4-6 hours",
      complications: ["Bleeding", "Contrast Reaction", "Arrhythmia", "Vascular Injury"],
      frequency: "As needed"
    },
    {
      name: "Percutaneous Coronary Intervention (PCI)",
      description: "Therapeutic procedure to open blocked coronary arteries",
      type: "Therapeutic",
      duration: "60-120 minutes",
      anesthesia: "Local",
      recovery: "1-2 days",
      complications: ["Bleeding", "Stent Thrombosis", "No-reflow", "Arrhythmia"],
      frequency: "Daily"
    },
    {
      name: "Temporary Pacemaker Insertion",
      description: "Temporary cardiac pacing for bradyarrhythmias",
      type: "Therapeutic",
      duration: "15-30 minutes",
      anesthesia: "Local",
      recovery: "Immediate",
      complications: ["Infection", "Lead Displacement", "Arrhythmia", "Cardiac Perforation"],
      frequency: "As needed"
    },
    {
      name: "Permanent Pacemaker Implantation",
      description: "Permanent cardiac pacing device implantation",
      type: "Therapeutic",
      duration: "60-90 minutes",
      anesthesia: "Local/General",
      recovery: "1-2 days",
      complications: ["Infection", "Lead Issues", "Device Malfunction", "Pocket Hematoma"],
      frequency: "Weekly"
    },
    {
      name: "ICD Implantation",
      description: "Implantable cardioverter-defibrillator for sudden cardiac death prevention",
      type: "Therapeutic",
      duration: "90-120 minutes",
      anesthesia: "General",
      recovery: "2-3 days",
      complications: ["Infection", "Lead Issues", "Inappropriate Shocks", "Device Malfunction"],
      frequency: "Bi-weekly"
    },
    {
      name: "Balloon Valvuloplasty",
      description: "Minimally invasive valve repair/replacement",
      type: "Therapeutic",
      duration: "60-90 minutes",
      anesthesia: "Local/General",
      recovery: "2-3 days",
      complications: ["Valve Injury", "Vascular Complications", "Arrhythmia", "Residual Stenosis"],
      frequency: "Weekly"
    }
  ]

  const protocols = [
    {
      name: "Acute MI Management Protocol",
      description: "Standardized protocol for acute myocardial infarction management",
      steps: ["Rapid Assessment", "Diagnosis", "Reperfusion Decision", "Thrombolysis/PCI", "Post-procedure Care"],
      frequency: "Every MI Case",
      documentation: "MI Registry",
      quality: "ACC/AHA Guidelines"
    },
    {
      name: "Cardiac Arrest Protocol",
      description: "Rapid response protocol for cardiac arrest management",
      steps: ["CPR Initiation", "ACLS Protocols", "Defibrillation", "Advanced Life Support", "Post-resuscitation Care"],
      frequency: "Emergency Cases",
      documentation: "Code Blue Records",
      quality: "AHA Guidelines"
    },
    {
      name: "Heart Failure Management Protocol",
      description: "Comprehensive protocol for heart failure management",
      steps: ["Assessment", "Diagnosis", "Risk Stratification", "Treatment Optimization", "Follow-up"],
      frequency: "Every HF Case",
      documentation: "HF Registry",
      quality: "ESC Guidelines"
    },
    {
      name: "Arrhythmia Management Protocol",
      description: "Protocol for diagnosis and management of cardiac arrhythmias",
      steps: ["Rhythm Assessment", "Hemodynamic Evaluation", "Acute Treatment", "Long-term Management", "Device Consideration"],
      frequency: "Arrhythmia Cases",
      documentation: "Arrhythmia Registry",
      quality: "ACC/AHA/ESC Guidelines"
    },
    {
      name: "Cardiac Rehabilitation Protocol",
      description: "Standardized protocol for cardiac rehabilitation",
      steps: ["Initial Assessment", "Exercise Prescription", "Risk Factor Management", "Education", "Follow-up"],
      frequency: "Post-MI/CHF Cases",
      documentation: "Rehab Records",
      quality: "WHO Guidelines"
    }
  ]

  const researchProjects = [
    {
      title: "STEMI Outcomes Study",
      principalInvestigator: "Prof. Dr. A. Karim",
      coInvestigators: ["Assoc. Prof. Dr. S. Rahman", "Dr. N. Begum"],
      duration: "2024-2026",
      funding: "BDT 800,000",
      status: "Ongoing",
      description: "Study of outcomes and quality indicators in ST-elevation myocardial infarction patients.",
      publications: 3,
      impact: "High"
    },
    {
      title: "Heart Failure Registry",
      principalInvestigator: "Assoc. Prof. Dr. S. Rahman",
      coInvestigators: ["Asst. Prof. Dr. M. Ahmed"],
      duration: "2023-2025",
      funding: "BDT 600,000",
      status: "Ongoing",
      description: "Comprehensive registry of heart failure patients for outcomes and quality improvement.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Arrhythmia Device Study",
      principalInvestigator: "Asst. Prof. Dr. M. Ahmed",
      coInvestigators: ["Prof. Dr. A. Karim"],
      duration: "2024-2027",
      funding: "BDT 700,000",
      status: "Starting",
      description: "Study of outcomes and complications in patients with cardiac devices.",
      publications: 0,
      impact: "High"
    }
  ]

  const achievements = [
    {
      title: "Best Cardiology Department Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding cardiac care and clinical outcomes.",
      impact: "High"
    },
    {
      title: "Cath Lab Excellence Award",
      year: "2023",
      category: "Interventional Cardiology",
      description: "Awarded for exceptional interventional cardiology services and outcomes.",
      impact: "High"
    },
    {
      title: "STEMI Door-to-Balloon Time Achievement",
      year: "2023",
      category: "Emergency Care",
      description: "Recognized for achieving optimal door-to-balloon times in acute MI management.",
      impact: "High"
    },
    {
      title: "Research Excellence Award",
      year: "2022",
      category: "Research",
      description: "Awarded for outstanding research contributions in cardiology.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Cardiology Workshop 2024",
      date: "2025-01-02",
      time: "9:00 AM - 5:00 PM",
      venue: "Cardiology Department",
      type: "Workshop",
      organizer: "Prof. Dr. A. Karim",
      participants: "Cardiology Professionals",
      description: "Annual workshop on recent advances in cardiology and interventional procedures."
    },
    {
      title: "Cardiac Emergency Seminar",
      date: "2025-01-05",
      time: "2:00 PM - 4:00 PM",
      venue: "Cardiac ICU",
      type: "Seminar",
      organizer: "Assoc. Prof. Dr. S. Rahman",
      participants: "Healthcare Workers",
      description: "Seminar on cardiac emergency management and acute cardiac care."
    },
    {
      title: "Interventional Cardiology Conference",
      date: "2025-01-08",
      time: "10:00 AM - 1:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Asst. Prof. Dr. M. Ahmed",
      participants: "Healthcare Professionals",
      description: "Conference on interventional cardiology and structural heart disease."
    }
  ]

  const resources = [
    {
      title: "Cardiology Internship Manual",
      description: "Comprehensive guide for cardiology internship training and procedures",
      type: "PDF",
      size: "10.2 MB",
      downloadCount: 1750,
      category: "Manual"
    },
    {
      title: "Acute MI Management Guidelines",
      description: "Complete guidelines for acute myocardial infarction management",
      type: "PDF",
      size: "7.5 MB",
      downloadCount: 2200,
      category: "Guidelines"
    },
    {
      title: "ECG Interpretation Atlas",
      description: "Comprehensive atlas of ECG patterns and cardiac arrhythmias",
      type: "PDF",
      size: "15.8 MB",
      downloadCount: 2800,
      category: "Atlas"
    },
    {
      title: "Cardiac Procedures Videos",
      description: "Demonstration videos of cardiac procedures and interventions",
      type: "Video",
      size: "950 MB",
      downloadCount: 1350,
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
                <HeartIcon2 className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Cardiology - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Cardiac Care and Interventional Cardiology</p>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Cardiac Conditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonConditions.map((condition, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <AlertTriangleIcon2 className="w-6 h-6" />
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Cardiac Procedures</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Cardiology Resources</h2>
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
