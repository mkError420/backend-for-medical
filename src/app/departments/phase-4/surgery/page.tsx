"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2 } from "lucide-react"

export default function SurgeryPage() {
  const departmentInfo = {
    name: "Department of Surgery - Phase 4",
    head: "Prof. Dr. A. Khan",
    established: "2013",
    faculty: 12,
    interns: 24,
    beds: 60,
    description: "The Phase 4 Surgery program provides comprehensive internship training in general surgery, surgical emergencies, and operative procedures. Interns gain hands-on experience in pre-operative, intra-operative, and post-operative surgical care."
  }

  const faculty = [
    {
      name: "Prof. Dr. A. Khan",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCS",
      experience: "25 years",
      specialization: "Gastrointestinal Surgery, Laparoscopic Surgery",
      email: "a.khan@rcmc.edu.bd",
      phone: "Ext: 2900",
      publications: 58,
      research: "Minimally Invasive Surgery, Surgical Oncology",
      image: "/faculty/a-khan.jpg"
    },
    {
      name: "Assoc. Prof. Dr. M. Rahman",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS, FRCS",
      experience: "20 years",
      specialization: "Breast Surgery, Endocrine Surgery",
      email: "m.rahman@rcmc.edu.bd",
      phone: "Ext: 2901",
      publications: 42,
      research: "Breast Cancer, Thyroid Surgery",
      image: "/faculty/m-rahman.jpg"
    },
    {
      name: "Asst. Prof. Dr. S. Islam",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "15 years",
      specialization: "Trauma Surgery, Critical Care",
      email: "s.islam@rcmc.edu.bd",
      phone: "Ext: 2902",
      publications: 32,
      research: "Trauma Management, Surgical Critical Care",
      image: "/faculty/s-islam.jpg"
    },
    {
      name: "Asst. Prof. Dr. F. Ahmed",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "12 years",
      specialization: "Vascular Surgery, Hepatobiliary Surgery",
      email: "f.ahmed@rcmc.edu.bd",
      phone: "Ext: 2903",
      publications: 28,
      research: "Vascular Reconstruction, Liver Surgery",
      image: "/faculty/f-ahmed.jpg"
    },
    {
      name: "Dr. N. Begum",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "8 years",
      specialization: "Pediatric Surgery, Day Care Surgery",
      email: "n.begum@rcmc.edu.bd",
      phone: "Ext: 2904",
      publications: 18,
      research: "Pediatric Surgical Conditions, Minimally Invasive Pediatric Surgery",
      image: "/faculty/n-begum.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Surgery OPD",
      type: "Outpatient Care",
      capacity: 60,
      dailyPatients: "80/day",
      description: "Comprehensive outpatient surgical consultation and pre-operative assessment",
      facilities: ["Consultation Rooms", "Minor OT", "Dressing Room", "Pre-op Assessment", "Follow-up Clinic"],
      commonCases: ["Hernia", "Gallstones", "Breast Lump", "Appendicitis", "Thyroid Nodule"],
      incharge: "Dr. N. Begum"
    },
    {
      name: "Surgery Ward",
      type: "Inpatient Care",
      capacity: 60,
      beds: 60,
      admissions: "120/month",
      description: "Inpatient care for pre-operative and post-operative surgical patients",
      facilities: ["Private Rooms", "General Ward", "Semi-Private Rooms", "Recovery Area", "Nursing Station"],
      commonCases: ["Post-operative Care", "Pre-operative Preparation", "Wound Care", "Pain Management", "Complication Management"],
      incharge: "Dr. N. Begum"
    },
    {
      name: "Major Operating Theater",
      type: "Surgical Suite",
      capacity: 8,
      dailyCases: "15/day",
      description: "Advanced surgical suite for major surgical procedures",
      facilities: ["8 Operating Tables", "Laparoscopic Equipment", "Anesthesia Machines", "Recovery Room", "Sterile Processing"],
      commonCases: ["Laparoscopic Cholecystectomy", "Hernia Repair", "Gastrectomy", "Colectomy", "Thyroidectomy"],
      incharge: "Prof. Dr. A. Khan"
    },
    {
      name: "Minor Operating Theater",
      type: "Surgical Suite",
      capacity: 4,
      dailyCases: "20/day",
      description: "Dedicated theater for minor surgical procedures under local anesthesia",
      facilities: ["4 Operating Tables", "Local Anesthesia Setup", "Minor Instrument Sets", "Recovery Area", "Dressing Room"],
      commonCases: ["Excision of Lump", "Dermatological Surgery", "Abscess Drainage", "Suturing", "Biopsy"],
      incharge: "Assoc. Prof. Dr. M. Rahman"
    },
    {
      name: "Surgical ICU",
      type: "Critical Care",
      capacity: 10,
      beds: 10,
      admissions: "35/month",
      description: "Intensive care for critically ill surgical patients",
      facilities: ["Ventilators", "Hemodynamic Monitoring", "Advanced Life Support", "Isolation Rooms", "Dialysis Support"],
      commonCases: ["Post-operative ICU Care", "Sepsis", "Major Trauma", "Multi-organ Failure", "Respiratory Failure"],
      incharge: "Asst. Prof. Dr. S. Islam"
    },
    {
      name: "Trauma Center",
      type: "Emergency Care",
      capacity: 20,
      dailyPatients: "25/day",
      description: "24/7 trauma center for emergency surgical care",
      facilities: ["Trauma Bay", "Resuscitation Area", "Imaging Access", "Blood Bank", "Emergency OT"],
      commonCases: ["Road Traffic Accidents", "Stab Injuries", "Gunshot Wounds", "Blunt Trauma", "Burns"],
      incharge: "Asst. Prof. Dr. S. Islam"
    }
  ]

  const internshipProgram = [
    {
      name: "OPD Duties",
      duration: "4 Weeks",
      setting: "Surgery OPD",
      responsibilities: ["Patient Consultation", "Pre-op Assessment", "Minor Procedures", "Follow-up Care"],
      skills: ["Surgical Examination", "Pre-op Evaluation", "Minor Surgical Procedures", "Patient Counseling"],
      assessment: "Logbook + Supervisor Evaluation",
      supervisor: "Dr. N. Begum"
    },
    {
      name: "Ward Duties",
      duration: "3 Weeks",
      setting: "Surgery Ward",
      responsibilities: ["Pre-op Care", "Post-op Management", "Wound Care", "Round Participation"],
      skills: ["Ward Management", "Post-op Care", "Wound Management", "Fluid Management"],
      assessment: "Logbook + Ward Skills Assessment",
      supervisor: "Dr. N. Begum"
    },
    {
      name: "OT Assistant Rotation",
      duration: "4 Weeks",
      setting: "Operating Theater",
      responsibilities: ["Surgical Assistance", "Instrument Handling", "Scrubbing", "Patient Positioning"],
      skills: ["Surgical Assisting", "Instrument Knowledge", "Sterile Technique", "OT Protocols"],
      assessment: "Logbook + OT Skills Assessment",
      supervisor: "Prof. Dr. A. Khan"
    },
    {
      name: "Minor OT Rotation",
      duration: "2 Weeks",
      setting: "Minor Operating Theater",
      responsibilities: ["Minor Surgery Performance", "Local Anesthesia", "Suturing", "Dressing"],
      skills: ["Minor Surgical Procedures", "Local Anesthesia", "Suturing Techniques", "Wound Management"],
      assessment: "Logbook + Minor OT Skills Assessment",
      supervisor: "Assoc. Prof. Dr. M. Rahman"
    },
    {
      name: "Surgical ICU Rotation",
      duration: "2 Weeks",
      setting: "Surgical ICU",
      responsibilities: ["Critical Care", "Post-op ICU Management", "Ventilator Management", "Hemodynamic Support"],
      skills: ["Critical Care Management", "Ventilator Management", "Hemodynamic Monitoring", "Emergency Response"],
      assessment: "Logbook + SICU Skills Assessment",
      supervisor: "Asst. Prof. Dr. S. Islam"
    },
    {
      name: "Emergency Rotation",
      duration: "1 Week",
      setting: "Trauma Center",
      responsibilities: ["Emergency Surgery", "Trauma Assessment", "Resuscitation", "Emergency Procedures"],
      skills: ["Emergency Assessment", "Trauma Management", "Emergency Procedures", "Team Coordination"],
      assessment: "Logbook + Emergency Skills Assessment",
      supervisor: "Asst. Prof. Dr. S. Islam"
    }
  ]

  const clinicalSkills = [
    {
      category: "Basic Surgical Skills",
      skills: ["Surgical History Taking", "Physical Examination", "Wound Assessment", "Suturing", "Dressing Changes"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "Basic Surgical Skills Certified"
    },
    {
      category: "Emergency Surgical Skills",
      skills: ["Trauma Assessment", "Primary Survey", "CPR", "Emergency Procedures", "Resuscitation"],
      competency: "Required",
      assessment: "Simulation Training + Direct Observation",
      certification: "Emergency Surgery Certified"
    },
    {
      category: "Operating Theater Skills",
      skills: ["Scrubbing Technique", "Gowning and Gloving", "Instrument Handling", "Surgical Assistance", "Sterile Technique"],
      competency: "Required",
      assessment: "Skills Lab + Clinical Performance",
      certification: "OT Skills Certified"
    },
    {
      category: "Minor Surgical Procedures",
      skills: ["Excision of Lump", "Incision and Drainage", "Biopsy", "Suturing Techniques", "Local Anesthesia"],
      competency: "Required",
      assessment: "Skills Lab + Direct Observation",
      certification: "Minor Surgery Skills Certified"
    },
    {
      category: "Post-operative Care Skills",
      skills: ["Post-op Assessment", "Pain Management", "Wound Care", "Fluid Management", "Complication Recognition"],
      competency: "Required",
      assessment: "Ward Training + Direct Observation",
      certification: "Post-op Care Skills Certified"
    },
    {
      category: "Laparoscopic Skills",
      skills: ["Basic Laparoscopy", "Port Placement", "Camera Navigation", "Instrument Manipulation", "Tissue Dissection"],
      competency: "Optional",
      assessment: "Simulation Lab + Direct Observation",
      certification: "Laparoscopic Skills Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Gastrointestinal Surgery",
      conditions: ["Appendicitis", "Cholecystitis", "Hernia", "Intestinal Obstruction", "Peptic Ulcer Disease"],
      prevalence: "35%",
      management: ["Medical Therapy", "Elective Surgery", "Emergency Surgery", "Laparoscopic Surgery", "Conservative Management"],
      complications: ["Infection", "Bleeding", "Anastomotic Leak", "Ileus", "Recurrence"]
    },
    {
      category: "Breast and Endocrine Surgery",
      conditions: ["Breast Cancer", "Benign Breast Disease", "Thyroid Disorders", "Parathyroid Disease", "Adrenal Tumors"],
      prevalence: "20%",
      management: ["Surgical Resection", "Hormone Therapy", "Chemotherapy", "Radiotherapy", "Observation"],
      complications: ["Wound Infection", "Nerve Injury", "Hormonal Deficits", "Recurrence", "Cosmetic Issues"]
    },
    {
      category: "Trauma and Emergency Surgery",
      conditions: ["Abdominal Trauma", "Chest Trauma", "Soft Tissue Injuries", "Fractures", "Burns"],
      prevalence: "15%",
      management: ["Emergency Surgery", "Conservative Management", "Wound Care", "Reconstruction", "Rehabilitation"],
      complications: ["Infection", "Bleeding", "Organ Failure", "Contractures", "Chronic Pain"]
    },
    {
      category: "Vascular Surgery",
      conditions: ["Varicose Veins", "Peripheral Vascular Disease", "Aneurysm", "Deep Vein Thrombosis", "Arterial Insufficiency"],
      prevalence: "10%",
      management: ["Surgical Repair", "Endovascular Procedures", "Medical Therapy", "Compression Therapy", "Lifestyle Modification"],
      complications: ["Graft Failure", "Infection", "Thrombosis", "Bleeding", "Amputation"]
    },
    {
      category: "Pediatric Surgery",
      conditions: ["Inguinal Hernia", "Undescended Testis", "Intussusception", "Pyloric Stenosis", "Hirschsprung's Disease"],
      prevalence: "10%",
      management: ["Elective Surgery", "Emergency Surgery", "Medical Management", "Observation", "Rehabilitation"],
      complications: ["Infection", "Bleeding", "Recurrence", "Growth Issues", "Psychological Impact"]
    },
    {
      category: "Dermatological and Soft Tissue Surgery",
      conditions: ["Skin Cancer", "Benign Skin Tumors", "Abscesses", "Cysts", "Ulcers"],
      prevalence: "10%",
      management: ["Excision", "Incision and Drainage", "Skin Grafting", "Medical Therapy", "Wound Care"],
      complications: ["Infection", "Scarring", "Recurrence", "Cosmetic Issues", "Chronic Wounds"]
    }
  ]

  const procedures = [
    {
      name: "Appendectomy",
      description: "Surgical removal of the appendix for appendicitis",
      type: "Therapeutic",
      duration: "45-90 minutes",
      anesthesia: "General",
      recovery: "1-2 days",
      complications: ["Infection", "Bleeding", "Abscess", "Ileus", "Anesthetic Complications"],
      frequency: "Daily"
    },
    {
      name: "Laparoscopic Cholecystectomy",
      description: "Minimally invasive removal of the gallbladder",
      type: "Therapeutic",
      duration: "60-120 minutes",
      anesthesia: "General",
      recovery: "1-2 days",
      complications: ["Bile Duct Injury", "Bleeding", "Infection", "Stone Retention", "Port Site Hernia"],
      frequency: "Daily"
    },
    {
      name: "Hernia Repair",
      description: "Surgical repair of abdominal wall hernias",
      type: "Therapeutic",
      duration: "60-90 minutes",
      anesthesia: "General/Regional",
      recovery: "1-3 days",
      complications: ["Recurrence", "Infection", "Chronic Pain", "Mesh Complications", "Bleeding"],
      frequency: "Daily"
    },
    {
      name: "Thyroidectomy",
      description: "Surgical removal of thyroid gland or part of it",
      type: "Therapeutic",
      duration: "90-150 minutes",
      anesthesia: "General",
      recovery: "2-3 days",
      complications: ["Hypocalcemia", "Recurrent Laryngeal Nerve Injury", "Bleeding", "Infection", "Hypothyroidism"],
      frequency: "Weekly"
    },
    {
      name: "Mastectomy",
      description: "Surgical removal of breast tissue for cancer",
      type: "Therapeutic",
      duration: "120-180 minutes",
      anesthesia: "General",
      recovery: "3-5 days",
      complications: ["Infection", "Seroma", "Lymphedema", "Cosmetic Issues", "Psychological Impact"],
      frequency: "Weekly"
    },
    {
      name: "Exploratory Laparotomy",
      description: "Emergency abdominal exploration for trauma or diagnosis",
      type: "Diagnostic/Therapeutic",
      duration: "90-180 minutes",
      anesthesia: "General",
      recovery: "3-7 days",
      complications: ["Bleeding", "Infection", "Organ Injury", "Adhesions", "Wound Dehiscence"],
      frequency: "As needed"
    }
  ]

  const protocols = [
    {
      name: "Trauma Management Protocol",
      description: "Standardized protocol for trauma patient management",
      steps: ["Primary Survey", "Resuscitation", "Secondary Survey", "Definitive Care", "Transfer Decision"],
      frequency: "Every Trauma Case",
      documentation: "Trauma Registry",
      quality: "ATLS Guidelines"
    },
    {
      name: "Surgical Site Infection Prevention Protocol",
      description: "Protocol for prevention of surgical site infections",
      steps: ["Pre-op Preparation", "Antibiotic Prophylaxis", "Sterile Technique", "Post-op Care", "Surveillance"],
      frequency: "Every Surgery",
      documentation: "SSI Registry",
      quality: "WHO Guidelines"
    },
    {
      name: "Post-operative Pain Management Protocol",
      description: "Comprehensive protocol for post-operative pain control",
      steps: ["Pain Assessment", "Multimodal Analgesia", "Opioid Management", "Non-pharmacological Methods", "Follow-up"],
      frequency: "Every Post-op Patient",
      documentation: "Pain Management Registry",
      quality: "ASA Guidelines"
    },
    {
      name: "Enhanced Recovery After Surgery (ERAS) Protocol",
      description: "Protocol for accelerated post-operative recovery",
      steps: ["Pre-op Optimization", "Intra-op Management", "Post-op Care", "Early Mobilization", "Nutrition"],
      frequency: "Selected Cases",
      documentation: "ERAS Registry",
      quality: "International ERAS Society"
    },
    {
      name: "Surgical Emergency Protocol",
      description: "Rapid response protocol for surgical emergencies",
      steps: ["Emergency Assessment", "Stabilization", "Diagnostic Workup", "Emergency Surgery", "Post-op Care"],
      frequency: "Emergency Cases",
      documentation: "Emergency Surgery Log",
      quality: "Hospital Guidelines"
    }
  ]

  const researchProjects = [
    {
      title: "Laparoscopic Surgery Outcomes Study",
      principalInvestigator: "Prof. Dr. A. Khan",
      coInvestigators: ["Assoc. Prof. Dr. M. Rahman", "Asst. Prof. Dr. S. Islam"],
      duration: "2024-2026",
      funding: "BDT 800,000",
      status: "Ongoing",
      description: "Study of outcomes and complications in laparoscopic surgical procedures.",
      publications: 3,
      impact: "High"
    },
    {
      title: "Breast Cancer Surgery Registry",
      principalInvestigator: "Assoc. Prof. Dr. M. Rahman",
      coInvestigators: ["Asst. Prof. Dr. F. Ahmed"],
      duration: "2023-2025",
      funding: "BDT 650,000",
      status: "Ongoing",
      description: "Comprehensive registry of breast cancer surgery outcomes and quality indicators.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Trauma Care Quality Improvement",
      principalInvestigator: "Asst. Prof. Dr. S. Islam",
      coInvestigators: ["Prof. Dr. A. Khan"],
      duration: "2024-2027",
      funding: "BDT 700,000",
      status: "Starting",
      description: "Research on trauma care outcomes and quality improvement initiatives.",
      publications: 0,
      impact: "High"
    }
  ]

  const achievements = [
    {
      title: "Best Surgery Department Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding surgical care and clinical outcomes.",
      impact: "High"
    },
    {
      title: "Laparoscopic Surgery Excellence",
      year: "2023",
      category: "Surgical Innovation",
      description: "Awarded for excellence in minimally invasive surgical procedures.",
      impact: "High"
    },
    {
      title: "Trauma Care Achievement",
      year: "2023",
      category: "Emergency Care",
      description: "Recognized for exceptional trauma care and emergency surgery outcomes.",
      impact: "High"
    },
    {
      title: "Research Excellence Award",
      year: "2022",
      category: "Research",
      description: "Awarded for outstanding research contributions in surgical sciences.",
      impact: "Medium"
    }
  ]

  const upcomingEvents = [
    {
      title: "Surgery Workshop 2024",
      date: "2025-01-05",
      time: "9:00 AM - 5:00 PM",
      venue: "Surgery Department",
      type: "Workshop",
      organizer: "Prof. Dr. A. Khan",
      participants: "Surgery Professionals",
      description: "Annual workshop on recent advances in surgery and laparoscopic techniques."
    },
    {
      title: "Trauma Care Seminar",
      date: "2025-01-08",
      time: "2:00 PM - 4:00 PM",
      venue: "Trauma Center",
      type: "Seminar",
      organizer: "Asst. Prof. Dr. S. Islam",
      participants: "Healthcare Workers",
      description: "Seminar on trauma management protocols and emergency surgery."
    },
    {
      title: "Laparoscopic Surgery Conference",
      date: "2025-01-11",
      time: "10:00 AM - 1:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Assoc. Prof. Dr. M. Rahman",
      participants: "Healthcare Professionals",
      description: "Conference on minimally invasive surgery and advanced laparoscopic techniques."
    }
  ]

  const resources = [
    {
      title: "Surgery Internship Manual",
      description: "Comprehensive guide for surgery internship training and procedures",
      type: "PDF",
      size: "11.5 MB",
      downloadCount: 1850,
      category: "Manual"
    },
    {
      title: "Surgical Techniques Atlas",
      description: "Complete atlas of surgical procedures and techniques",
      type: "PDF",
      size: "18.2 MB",
      downloadCount: 2400,
      category: "Atlas"
    },
    {
      title: "Trauma Management Guidelines",
      description: "Comprehensive guidelines for trauma and emergency surgery management",
      type: "PDF",
      size: "8.8 MB",
      downloadCount: 2100,
      category: "Guidelines"
    },
    {
      title: "Surgical Procedures Videos",
      description: "Demonstration videos of common surgical procedures and techniques",
      type: "Video",
      size: "1.2 GB",
      downloadCount: 1450,
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
                <SyringeIcon className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Surgery - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Surgical Care and Operative Excellence</p>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Surgical Conditions</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Surgical Procedures</h2>
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
