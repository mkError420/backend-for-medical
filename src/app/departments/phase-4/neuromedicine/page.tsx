"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2 } from "lucide-react"

export default function NeuromedicinePage() {
  const departmentInfo = {
    name: "Department of Neuromedicine - Phase 4",
    head: "Prof. Dr. M. Hassan",
    established: "2013",
    faculty: 8,
    interns: 16,
    beds: 35,
    description: "The Phase 4 Neuromedicine program provides comprehensive internship training in neurology, stroke care, and neurocritical care. Interns gain hands-on experience in diagnosing and managing acute and chronic neurological conditions."
  }

  const faculty = [
    {
      name: "Prof. Dr. M. Hassan",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCP",
      experience: "22 years",
      specialization: "Stroke Medicine, Neurocritical Care",
      email: "m.hassan@rcmc.edu.bd",
      phone: "Ext: 2700",
      publications: 45,
      research: "Stroke Management, Neurocritical Care",
      image: "/faculty/m-hassan.jpg"
    },
    {
      name: "Assoc. Prof. Dr. S. Islam",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS, FRCP",
      experience: "18 years",
      specialization: "Movement Disorders, Epilepsy",
      email: "s.islam@rcmc.edu.bd",
      phone: "Ext: 2701",
      publications: 32,
      research: "Movement Disorders, Epilepsy Surgery",
      image: "/faculty/s-islam.jpg"
    },
    {
      name: "Asst. Prof. Dr. A. Khatun",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "12 years",
      specialization: "Neuroinfections, Demyelinating Disorders",
      email: "a.khatun@rcmc.edu.bd",
      phone: "Ext: 2702",
      publications: 24,
      research: "Neuroinfections, Multiple Sclerosis",
      image: "/faculty/a-khatun.jpg"
    },
    {
      name: "Dr. R. Ahmed",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "8 years",
      specialization: "Headache Medicine, Neurophysiology",
      email: "r.ahmed@rcmc.edu.bd",
      phone: "Ext: 2703",
      publications: 15,
      research: "Headache Disorders, EEG",
      image: "/faculty/r-ahmed.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Neuromedicine OPD",
      type: "Outpatient Care",
      capacity: 50,
      dailyPatients: "80/day",
      description: "Comprehensive outpatient care for neurological disorders",
      facilities: ["Consultation Rooms", "EEG Lab", "EMG Lab", "Neuroimaging"],
      commonCases: ["Stroke", "Epilepsy", "Headache", "Movement Disorders", "Neuropathy"],
      incharge: "Dr. R. Ahmed"
    },
    {
      name: "Neuromedicine Ward",
      type: "Inpatient Care",
      capacity: 35,
      beds: 35,
      admissions: "60/month",
      description: "Inpatient care for acute and chronic neurological conditions",
      facilities: ["Private Rooms", "General Ward", "Monitoring Systems", "Emergency Equipment"],
      commonCases: ["Acute Stroke", "Status Epilepticus", "GBS", "Myasthenic Crisis", "Meningitis"],
      incharge: "Dr. R. Ahmed"
    },
    {
      name: "Stroke Unit",
      type: "Specialized Care",
      capacity: 15,
      beds: 15,
      admissions: "45/month",
      description: "Specialized unit for acute stroke care and thrombolysis",
      facilities: ["Stroke Beds", "CT Scanner Access", "Thrombolysis Setup", "Rehabilitation", "Monitoring"],
      commonCases: ["Ischemic Stroke", "Hemorrhagic Stroke", "TIA", "Post-stroke Care", "Stroke Prevention"],
      incharge: "Prof. Dr. M. Hassan"
    },
    {
      name: "Neurocritical Care Unit",
      type: "Critical Care",
      capacity: 8,
      beds: 8,
      admissions: "20/month",
      description: "Intensive care for critically ill neurological patients",
      facilities: ["Ventilators", "ICP Monitoring", "Continuous EEG", "Advanced Life Support", "Hemodynamic Monitoring"],
      commonCases: ["Severe Stroke", "Status Epilepticus", "GBS with Respiratory Failure", "Meningoencephalitis", "Acute Myasthenia"],
      incharge: "Prof. Dr. M. Hassan"
    },
    {
      name: "EEG Laboratory",
      type: "Diagnostic",
      capacity: 20,
      dailyStudies: "30/day",
      description: "Advanced electroencephalography and neurophysiology services",
      facilities: ["Digital EEG", "Video EEG", "Ambulatory EEG", "Sleep Studies", "Evoked Potentials"],
      commonCases: ["Epilepsy", "Encephalopathy", "Sleep Disorders", "Brain Death", "Neurodevelopmental Disorders"],
      incharge: "Assoc. Prof. Dr. S. Islam"
    },
    {
      name: "Neurorehabilitation Unit",
      type: "Rehabilitation",
      capacity: 25,
      dailyPatients: "35/day",
      description: "Comprehensive neurorehabilitation and physiotherapy services",
      facilities: ["Exercise Equipment", "Gait Training", "Speech Therapy", "Occupational Therapy", "Psychological Support"],
      commonCases: ["Post-stroke Rehab", "Spinal Cord Injury", "Traumatic Brain Injury", "Neuropathy Rehab", "Movement Disorder Therapy"],
      incharge: "Dr. R. Ahmed"
    }
  ]

  const internshipProgram = [
    {
      name: "OPD Duties",
      duration: "4 Weeks",
      setting: "Neuromedicine OPD",
      responsibilities: ["Patient Consultation", "Neurological Examination", "EEG Interpretation", "Patient Education"],
      skills: ["Neurological Exam", "EEG Reading", "Neuroimaging Basics", "Communication"],
      assessment: "Logbook + Supervisor Evaluation",
      supervisor: "Dr. R. Ahmed"
    },
    {
      name: "Ward Duties",
      duration: "3 Weeks",
      setting: "Neuromedicine Ward",
      responsibilities: ["Inpatient Care", "Daily Rounds", "Treatment Management", "Emergency Response"],
      skills: ["Inpatient Management", "Acute Neurological Care", "Monitoring", "Documentation"],
      assessment: "Logbook + Ward Skills Assessment",
      supervisor: "Dr. R. Ahmed"
    },
    {
      name: "Stroke Unit Rotation",
      duration: "2 Weeks",
      setting: "Stroke Unit",
      responsibilities: ["Stroke Assessment", "Thrombolysis", "Post-stroke Care", "Prevention Counseling"],
      skills: ["Stroke Recognition", "NIHSS Scoring", "Thrombolysis Protocol", "Emergency Response"],
      assessment: "Logbook + Stroke Skills Assessment",
      supervisor: "Prof. Dr. M. Hassan"
    },
    {
      name: "Neurocritical Care Rotation",
      duration: "2 Weeks",
      setting: "Neurocritical Care Unit",
      responsibilities: ["Critical Care", "ICP Monitoring", "Ventilator Management", "Life Support"],
      skills: ["Critical Care Management", "ICP Monitoring", "Ventilator Management", "Emergency Response"],
      assessment: "Logbook + NCCU Skills Assessment",
      supervisor: "Prof. Dr. M. Hassan"
    },
    {
      name: "EEG Lab Rotation",
      duration: "2 Weeks",
      setting: "EEG Laboratory",
      responsibilities: ["EEG Studies", "Interpretation", "Report Preparation", "Quality Control"],
      skills: ["EEG Recording", "EEG Interpretation", "Report Writing", "Quality Assurance"],
      assessment: "Logbook + EEG Skills Assessment",
      supervisor: "Assoc. Prof. Dr. S. Islam"
    },
    {
      name: "Emergency Rotation",
      duration: "1 Week",
      setting: "Emergency Department",
      responsibilities: ["Emergency Neurological Care", "Triage", "Stabilization", "Referral"],
      skills: ["Emergency Assessment", "Acute Neurological Care", "Resuscitation", "Team Coordination"],
      assessment: "Logbook + Emergency Skills Assessment",
      supervisor: "Prof. Dr. M. Hassan"
    }
  ]

  const clinicalSkills = [
    {
      category: "Basic Neurological Skills",
      skills: ["Neurological Examination", "Cranial Nerve Assessment", "Motor System Exam", "Sensory System Exam", "Reflex Testing"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "Neurological Skills Certified"
    },
    {
      category: "Emergency Neurological Skills",
      skills: ["Stroke Recognition", "NIHSS Assessment", "ACLS", "Emergency Seizure Management", "Increased ICP Management"],
      competency: "Required",
      assessment: "Simulation Training + Direct Observation",
      certification: "Emergency Neurology Certified"
    },
    {
      category: "Diagnostic Skills",
      skills: ["CT/MRI Interpretation", "EEG Reading", "Lumbar Puncture", "Neurophysiology", "Neuroimaging Basics"],
      competency: "Required",
      assessment: "Case Studies + Direct Observation",
      certification: "Diagnostic Skills Certified"
    },
    {
      category: "Procedural Skills",
      skills: ["Lumbar Puncture", "IV Thrombolysis", "ICP Monitoring", "Basic EEG Setup", "EMG Basics"],
      competency: "Required",
      assessment: "Skills Lab + Clinical Performance",
      certification: "Procedural Skills Certified"
    },
    {
      category: "Rehabilitation Skills",
      skills: ["Stroke Rehab Assessment", "Gait Training", "ADL Assessment", "Swallowing Assessment", "Neurorehab Planning"],
      competency: "Required",
      assessment: "Rehab Training + Direct Observation",
      certification: "Rehabilitation Skills Certified"
    },
    {
      category: "Neurocritical Skills",
      skills: ["ICP Management", "Ventilator Management", "Continuous EEG", "Neurocritical Monitoring", "Emergency Protocols"],
      competency: "Optional",
      assessment: "NCCU Training + Direct Observation",
      certification: "Neurocritical Skills Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Cerebrovascular Diseases",
      conditions: ["Ischemic Stroke", "Hemorrhagic Stroke", "TIA", "Cerebral Venous Thrombosis", "Subarachnoid Hemorrhage"],
      prevalence: "35%",
      management: ["Thrombolysis", "Antiplatelet Therapy", "Blood Pressure Control", "Rehabilitation", "Prevention"],
      complications: ["Hemorrhagic Transformation", "Cerebral Edema", "Seizures", "Aspiration", "Death"]
    },
    {
      category: "Epilepsy and Seizure Disorders",
      conditions: ["Focal Epilepsy", "Generalized Epilepsy", "Status Epilepticus", "Syncope", "PNES"],
      prevalence: "25%",
      management: ["Antiepileptic Drugs", "Lifestyle Modification", "Surgery", "Ketogenic Diet", "VNS"],
      complications: ["Injury", "Cognitive Decline", "Medication Side Effects", "Psychiatric Issues", "SUDEP"]
    },
    {
      category: "Movement Disorders",
      conditions: ["Parkinson's Disease", "Essential Tremor", "Dystonia", "Huntington's Disease", "Tourette Syndrome"],
      prevalence: "15%",
      management: ["Dopaminergic Therapy", "Deep Brain Stimulation", "Botulinum Toxin", "Physical Therapy", "Medication"],
      complications: ["Motor Fluctuations", "Dyskinesia", "Cognitive Impairment", "Depression", "Falls"]
    },
    {
      category: "Neuromuscular Disorders",
      conditions: ["GBS", "Myasthenia Gravis", "ALS", "Muscular Dystrophy", "Peripheral Neuropathy"],
      prevalence: "10%",
      management: ["Immunotherapy", "Symptomatic Treatment", "Respiratory Support", "Physiotherapy", "Supportive Care"],
      complications: ["Respiratory Failure", "Autonomic Dysfunction", "Weakness", "Disability", "Death"]
    },
    {
      category: "Headache Disorders",
      conditions: ["Migraine", "Tension Headache", "Cluster Headache", "Medication Overuse", "Secondary Headache"],
      prevalence: "15%",
      management: ["Acute Treatment", "Preventive Therapy", "Lifestyle Modification", "Biofeedback", "Trigger Management"],
      complications: ["Chronic Daily Headache", "Medication Overuse", "Reduced Quality of Life", "Depression", "Anxiety"]
    }
  ]

  const procedures = [
    {
      name: "Lumbar Puncture",
      description: "Diagnostic procedure to obtain cerebrospinal fluid",
      type: "Diagnostic",
      duration: "15-30 minutes",
      anesthesia: "Local",
      recovery: "2-4 hours",
      complications: ["Headache", "Bleeding", "Infection", "Nerve Injury", "Brain Herniation"],
      frequency: "Daily"
    },
    {
      name: "IV Thrombolysis",
      description: "Emergency treatment for acute ischemic stroke",
      type: "Therapeutic",
      duration: "60 minutes infusion",
      anesthesia: "None",
      recovery: "24 hours monitoring",
      complications: ["Hemorrhage", "Allergic Reaction", "Angioedema", "Reocclusion", "ICH"],
      frequency: "As needed"
    },
    {
      name: "EEG Recording",
      description: "Electroencephalography for brain activity assessment",
      type: "Diagnostic",
      duration: "20-30 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Skin Irritation", "Allergic Reaction", "Discomfort", "Artifacts"],
      frequency: "Daily"
    },
    {
      name: "EMG/NCS",
      description: "Electromyography and nerve conduction studies",
      type: "Diagnostic",
      duration: "30-60 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Pain", "Bleeding", "Infection", "Nerve Irritation"],
      frequency: "Daily"
    },
    {
      name: "ICP Monitor Placement",
      description: "Intracranial pressure monitoring for critical patients",
      type: "Therapeutic",
      duration: "30-45 minutes",
      anesthesia: "Local/General",
      recovery: "ICU monitoring",
      complications: ["Infection", "Bleeding", "Hemorrhage", "Malfunction", "Brain Injury"],
      frequency: "As needed"
    },
    {
      name: "Botulinum Toxin Injection",
      description: "Therapeutic injection for movement disorders",
      type: "Therapeutic",
      duration: "15-30 minutes",
      anesthesia: "Local/Topical",
      recovery: "Immediate",
      complications: ["Pain", "Weakness", "Dysphagia", "Ptosis", "Systemic Effects"],
      frequency: "Weekly"
    }
  ]

  const protocols = [
    {
      name: "Acute Stroke Management Protocol",
      description: "Standardized protocol for acute stroke management",
      steps: ["Rapid Assessment", "CT Scan", "NIHSS Scoring", "Thrombolysis Decision", "Post-treatment Care"],
      frequency: "Every Stroke Case",
      documentation: "Stroke Registry",
      quality: "AHA/ASA Guidelines"
    },
    {
      name: "Status Epilepticus Protocol",
      description: "Rapid response protocol for status epilepticus",
      steps: ["ABC Assessment", "Benzodiazepine Administration", "Second-line AED", "ICU Transfer", "Continuous EEG"],
      frequency: "Emergency Cases",
      documentation: "Seizure Log",
      quality: "ILAE Guidelines"
    },
    {
      name: "GBS Management Protocol",
      description: "Comprehensive protocol for Guillain-Barré syndrome",
      steps: ["Diagnosis", "Respiratory Monitoring", "Immunotherapy", "Supportive Care", "Rehabilitation"],
      frequency: "Every GBS Case",
      documentation: "Neuromuscular Registry",
      quality: "International Standards"
    },
    {
      name: "Increased ICP Protocol",
      description: "Protocol for management of increased intracranial pressure",
      steps: ["ICP Monitoring", "Head Elevation", "Osmotherapy", "Sedation", "Surgical Consultation"],
      frequency: "ICP Cases",
      documentation: "ICP Log",
      quality: "Neurocritical Care Guidelines"
    },
    {
      name: "Neurorehabilitation Protocol",
      description: "Standardized protocol for neurological rehabilitation",
      steps: ["Initial Assessment", "Goal Setting", "Therapy Planning", "Progress Monitoring", "Discharge Planning"],
      frequency: "Rehab Cases",
      documentation: "Rehab Records",
      quality: "WHO Guidelines"
    }
  ]

  const researchProjects = [
    {
      title: "Stroke Outcomes Registry",
      principalInvestigator: "Prof. Dr. M. Hassan",
      coInvestigators: ["Assoc. Prof. Dr. S. Islam", "Dr. R. Ahmed"],
      duration: "2024-2026",
      funding: "BDT 700,000",
      status: "Ongoing",
      description: "Comprehensive registry of stroke patients for outcomes and quality improvement.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Epilepsy Treatment Study",
      principalInvestigator: "Assoc. Prof. Dr. S. Islam",
      coInvestigators: ["Asst. Prof. Dr. A. Khatun"],
      duration: "2023-2025",
      funding: "BDT 500,000",
      status: "Ongoing",
      description: "Study of treatment outcomes and quality of life in epilepsy patients.",
      publications: 1,
      impact: "Medium"
    },
    {
      title: "Neuroinfections Research",
      principalInvestigator: "Asst. Prof. Dr. A. Khatun",
      coInvestigators: ["Prof. Dr. M. Hassan"],
      duration: "2024-2027",
      funding: "BDT 600,000",
      status: "Starting",
      description: "Research on epidemiology and management of neurological infections.",
      publications: 0,
      impact: "High"
    }
  ]

  const achievements = [
    {
      title: "Best Stroke Care Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding stroke care and door-to-needle times.",
      impact: "High"
    },
    {
      title: "Neurocritical Care Excellence",
      year: "2023",
      category: "Critical Care",
      description: "Awarded for exceptional neurocritical care services and outcomes.",
      impact: "High"
    },
    {
      title: "Epilepsy Care Achievement",
      year: "2023",
      category: "Specialized Care",
      description: "Recognized for comprehensive epilepsy management and services.",
      impact: "Medium"
    },
    {
      title: "Research Excellence Award",
      year: "2022",
      category: "Research",
      description: "Awarded for outstanding research contributions in neurology.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Neuromedicine Workshop 2024",
      date: "2025-01-03",
      time: "9:00 AM - 5:00 PM",
      venue: "Neuromedicine Department",
      type: "Workshop",
      organizer: "Prof. Dr. M. Hassan",
      participants: "Neurology Professionals",
      description: "Annual workshop on recent advances in neurology and stroke care."
    },
    {
      title: "Stroke Care Seminar",
      date: "2025-01-06",
      time: "2:00 PM - 4:00 PM",
      venue: "Stroke Unit",
      type: "Seminar",
      organizer: "Assoc. Prof. Dr. S. Islam",
      participants: "Healthcare Workers",
      description: "Seminar on acute stroke management and thrombolysis protocols."
    },
    {
      title: "Epilepsy Conference",
      date: "2025-01-09",
      time: "10:00 AM - 1:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Asst. Prof. Dr. A. Khatun",
      participants: "Healthcare Professionals",
      description: "Conference on epilepsy management and recent advances."
    }
  ]

  const resources = [
    {
      title: "Neuromedicine Internship Manual",
      description: "Comprehensive guide for neuromedicine internship training and procedures",
      type: "PDF",
      size: "9.8 MB",
      downloadCount: 1650,
      category: "Manual"
    },
    {
      title: "Acute Stroke Management Guidelines",
      description: "Complete guidelines for acute stroke management and thrombolysis",
      type: "PDF",
      size: "6.5 MB",
      downloadCount: 2100,
      category: "Guidelines"
    },
    {
      title: "EEG Interpretation Atlas",
      description: "Comprehensive atlas of EEG patterns and neurological conditions",
      type: "PDF",
      size: "14.2 MB",
      downloadCount: 2650,
      category: "Atlas"
    },
    {
      title: "Neurological Examination Videos",
      description: "Demonstration videos of neurological examination procedures",
      type: "Video",
      size: "850 MB",
      downloadCount: 1250,
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
                <BrainIcon2 className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Neuromedicine - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Neurological Care and Stroke Management</p>
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
                            <span key={skillIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                          {program.skills.length > 3 && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                              +{program.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Assessment:</span>
                        <span className="font-medium">{program.assessment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Supervisor:</span>
                        <span className="font-medium">{program.supervisor}</span>
                      </div>
                    </div>

                    <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      View Program Details
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Clinical Skills */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Skills Training</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicalSkills.map((skill, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{skill.category}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        skill.competency === 'Required' 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {skill.competency}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {skill.skills.slice(0, 4).map((skillItem, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                            {skillItem}
                          </span>
                        ))}
                        {skill.skills.length > 4 && (
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                            +{skill.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Assessment:</span>
                        <span className="font-medium">{skill.assessment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Certificate:</span>
                        <span className="font-medium text-green-600">{skill.certification}</span>
                      </div>
                    </div>

                    <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                      <Award className="w-4 h-4" />
                      View Skill Details
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Common Conditions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Neurological Conditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonConditions.map((condition, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{condition.category}</h3>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                        {condition.prevalence} prevalence
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Conditions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {condition.conditions.slice(0, 3).map((conditionItem, conditionIndex) => (
                          <span key={conditionIndex} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                            {conditionItem}
                          </span>
                        ))}
                        {condition.conditions.length > 3 && (
                          <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                            +{condition.conditions.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Management:</h4>
                      <div className="flex flex-wrap gap-2">
                        {condition.management.slice(0, 3).map((management, managementIndex) => (
                          <span key={managementIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                            {management}
                          </span>
                        ))}
                        {condition.management.length > 3 && (
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                            +{condition.management.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Complications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {condition.complications.slice(0, 3).map((complication, complicationIndex) => (
                          <span key={complicationIndex} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                            {complication}
                          </span>
                        ))}
                        {condition.complications.length > 3 && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                            +{condition.complications.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                      <FileText className="w-4 h-4" />
                      View Condition Details
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Procedures */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Neurological Procedures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {procedures.map((procedure, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{procedure.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        procedure.type === 'Diagnostic' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {procedure.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{procedure.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Clock className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{procedure.duration}</div>
                        <div className="text-xs text-gray-600">Duration</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Activity className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="font-semibold">{procedure.anesthesia}</div>
                        <div className="text-xs text-gray-600">Anesthesia</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Complications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {procedure.complications.slice(0, 3).map((complication, complicationIndex) => (
                          <span key={complicationIndex} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                            {complication}
                          </span>
                        ))}
                        {procedure.complications.length > 3 && (
                          <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                            +{procedure.complications.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Frequency:</span>
                        <span className="font-medium">{procedure.frequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Recovery:</span>
                        <span className="font-medium">{procedure.recovery}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Clinical Protocols */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Protocols</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {protocols.map((protocol, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FileCheck className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{protocol.name}</h3>
                        <p className="text-sm text-gray-600">{protocol.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Protocol Steps:</h4>
                      <div className="space-y-2">
                        {protocol.steps.slice(0, 4).map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-medium">
                              {stepIndex + 1}
                            </div>
                            <span className="text-sm text-gray-600">{step}</span>
                          </div>
                        ))}
                        {protocol.steps.length > 4 && (
                          <div className="text-sm text-gray-500">
                            +{protocol.steps.length - 4} more steps
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Frequency:</span>
                        <span className="font-medium">{protocol.frequency}</span>
                      </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchProjects.map((project, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Search className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Ongoing' 
                            ? 'bg-green-100 text-green-700' 
                            : project.status === 'Starting'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Principal Investigator:</span> {project.principalInvestigator}
                      </div>
                      <div>
                        <span className="font-medium">Co-investigators:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.coInvestigators.map((investigator, investigatorIndex) => (
                            <span key={investigatorIndex} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              {investigator}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">Duration:</span> {project.duration}
                      </div>
                      <div>
                        <span className="font-medium">Funding:</span> {project.funding}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Publications:</span>
                        <span className="font-medium">{project.publications}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Impact:</span>
                        <span className="font-medium text-purple-600">{project.impact}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Department Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.category} - {achievement.year}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{achievement.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        achievement.impact === 'High' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {achievement.impact} Impact
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

          {/* Upcoming Events */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                          {event.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Organizer: {event.organizer}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Participants:</span>
                        <span className="font-medium">{event.participants}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Educational Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Download className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{resource.title}</h3>
                        <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                          {resource.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          <span>{resource.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Database className="w-4 h-4" />
                          <span>{resource.size}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Downloads:</span>
                        <span className="font-medium">{resource.downloadCount}</span>
                      </div>
                    </div>

                    <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />
                      Download Resource
                    </button>
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
