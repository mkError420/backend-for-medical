"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2, Wind, Activity as ActivityIcon3, Thermometer as ThermometerIcon, HeartHandshake as HeartHandshakeIcon, AlertTriangle as AlertTriangleIcon3 } from "lucide-react"

export default function ObstetricsGynaecologyPage() {
  const departmentInfo = {
    name: "Department of Obstetrics & Gynecology - Phase 4",
    head: "Prof. Dr. N. Ahmed",
    established: "2013",
    faculty: 8,
    interns: 12,
    beds: 70,
    description: "The Phase 4 Obstetrics & Gynecology program provides comprehensive internship training in women's healthcare, pregnancy management, and reproductive health. Interns gain hands-on experience in normal and high-risk pregnancies, gynecological surgeries, and reproductive medicine."
  }

  const faculty = [
    {
      name: "Prof. Dr. N. Ahmed",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCOG",
      experience: "24 years",
      specialization: "High-risk Pregnancy, Maternal-fetal Medicine",
      email: "n.ahmed@rcmc.edu.bd",
      phone: "Ext: 3300",
      publications: 45,
      research: "Maternal-fetal Medicine, High-risk Pregnancy, Obstetric Complications",
      image: "/faculty/n-ahmed.jpg"
    },
    {
      name: "Assoc. Prof. Dr. S. Khatun",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS, FRCOG",
      experience: "20 years",
      specialization: "Gynecological Oncology, Minimal Access Surgery",
      email: "s.khatun@rcmc.edu.bd",
      phone: "Ext: 3301",
      publications: 38,
      research: "Gynecological Oncology, Laparoscopic Surgery, Women's Cancer",
      image: "/faculty/s-khatun.jpg"
    },
    {
      name: "Asst. Prof. Dr. M. Rahman",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "16 years",
      specialization: "Infertility, Reproductive Medicine",
      email: "m.rahman@rcmc.edu.bd",
      phone: "Ext: 3302",
      publications: 28,
      research: "Infertility Treatment, ART, Reproductive Endocrinology",
      image: "/faculty/m-rahman.jpg"
    },
    {
      name: "Dr. A. Islam",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "12 years",
      specialization: "General Obstetrics & Gynecology, Family Planning",
      email: "a.islam@rcmc.edu.bd",
      phone: "Ext: 3303",
      publications: 22,
      research: "General OBGYN, Family Planning, Safe Motherhood",
      image: "/faculty/a-islam.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Antenatal OPD",
      type: "Outpatient Care",
      capacity: 60,
      dailyPatients: "150/day",
      description: "Comprehensive antenatal care for pregnant women",
      facilities: ["Consultation Rooms", "Ultrasound", "Fetal Monitoring", "Laboratory", "Education Room"],
      commonCases: ["Normal Pregnancy", "High-risk Pregnancy", "Antenatal Checkups", "Screening", "Counseling"],
      incharge: "Dr. A. Islam"
    },
    {
      name: "Gynecology OPD",
      type: "Outpatient Care",
      capacity: 40,
      dailyPatients: "120/day",
      description: "Comprehensive gynecological care for women",
      facilities: ["Consultation Rooms", "Colposcopy", "Ultrasound", "Minor Procedures", "Counseling"],
      commonCases: ["Menstrual Disorders", "PID", "PCOD", "Fibroids", "Cancer Screening"],
      incharge: "Dr. A. Islam"
    },
    {
      name: "Labor Ward",
      type: "Delivery Unit",
      capacity: 30,
      dailyDeliveries: "25/day",
      description: "Labor and delivery services for normal and complicated births",
      facilities: ["Labor Rooms", "Delivery Beds", "Fetal Monitoring", "Emergency Equipment", "OT"],
      commonCases: ["Normal Delivery", "Cesarean Section", "Instrumental Delivery", "Complicated Delivery", "Emergency Delivery"],
      incharge: "Prof. Dr. N. Ahmed"
    },
    {
      name: "Gynecology Ward",
      type: "Inpatient Care",
      capacity: 40,
      beds: 40,
      admissions: "80/month",
      description: "Inpatient care for gynecological conditions and post-operative care",
      facilities: ["Private Rooms", "General Ward", "Post-operative Care", "Recovery Room", "Isolation"],
      commonCases: ["Post-operative Care", "Gynecological Surgeries", "Medical Management", "Emergency Cases", "Observation"],
      incharge: "Assoc. Prof. Dr. S. Khatun"
    },
    {
      name: "Operation Theater",
      type: "Surgical Unit",
      capacity: 25,
      dailySurgeries: "30/day",
      description: "Advanced gynecological and obstetric surgical procedures",
      facilities: ["Modern OT", "Laparoscopic Equipment", "Hysteroscopy", "Ultrasound", "Recovery"],
      commonCases: ["Cesarean Section", "Hysterectomy", "Myomectomy", "Ovarian Surgery", "Laparoscopic Surgery"],
      incharge: "Assoc. Prof. Dr. S. Khatun"
    },
    {
      name: "Infertility Clinic",
      type: "Specialized Care",
      capacity: 20,
      dailyPatients: "40/day",
      description: "Comprehensive infertility evaluation and treatment",
      facilities: ["Consultation Rooms", "ART Laboratory", "Semen Analysis", "Ultrasound", "Counseling"],
      commonCases: ["Infertility Evaluation", "IUI", "IVF", "Hormonal Treatment", "Counseling"],
      incharge: "Asst. Prof. Dr. M. Rahman"
    }
  ]

  const internshipProgram = [
    {
      name: "Antenatal OPD Rotation",
      duration: "3 Weeks",
      setting: "Antenatal OPD",
      responsibilities: ["Antenatal Checkups", "Risk Assessment", "Screening", "Patient Education", "Documentation"],
      skills: ["Antenatal Assessment", "Risk Identification", "Ultrasound Interpretation", "Patient Counseling"],
      assessment: "Logbook + Antenatal Skills Assessment",
      supervisor: "Dr. A. Islam"
    },
    {
      name: "Gynecology OPD Rotation",
      duration: "2 Weeks",
      setting: "Gynecology OPD",
      responsibilities: ["Gynecological Consultation", "Screening", "Minor Procedures", "Counseling"],
      skills: ["Gynecological Assessment", "Screening Procedures", "Colposcopy", "Patient Management"],
      assessment: "Logbook + Gynecology Skills Assessment",
      supervisor: "Dr. A. Islam"
    },
    {
      name: "Labor Ward Rotation",
      duration: "4 Weeks",
      setting: "Labor Ward",
      responsibilities: ["Labor Management", "Delivery Assistance", "Emergency Response", "Post-delivery Care"],
      skills: ["Labor Management", "Delivery Skills", "Emergency Obstetrics", "Neonatal Care"],
      assessment: "Logbook + Labor Ward Skills Assessment",
      supervisor: "Prof. Dr. N. Ahmed"
    },
    {
      name: "Gynecology Ward Rotation",
      duration: "2 Weeks",
      setting: "Gynecology Ward",
      responsibilities: ["Inpatient Care", "Post-operative Management", "Emergency Response", "Discharge Planning"],
      skills: ["Inpatient Management", "Post-operative Care", "Emergency Response", "Ward Management"],
      assessment: "Logbook + Ward Skills Assessment",
      supervisor: "Assoc. Prof. Dr. S. Khatun"
    },
    {
      name: "OT Rotation",
      duration: "3 Weeks",
      setting: "Operation Theater",
      responsibilities: ["Surgical Assistance", "Pre-operative Care", "Instrument Handling", "Post-operative Care"],
      skills: ["Surgical Assistance", "Instrument Handling", "OT Protocols", "Surgical Skills"],
      assessment: "Logbook + OT Skills Assessment",
      supervisor: "Assoc. Prof. Dr. S. Khatun"
    },
    {
      name: "Infertility Clinic Rotation",
      duration: "1 Week",
      setting: "Infertility Clinic",
      responsibilities: ["Infertility Evaluation", "ART Procedures", "Counseling", "Follow-up"],
      skills: ["Infertility Assessment", "ART Procedures", "Counseling Skills", "Laboratory Procedures"],
      assessment: "Logbook + Infertility Skills Assessment",
      supervisor: "Asst. Prof. Dr. M. Rahman"
    }
  ]

  const clinicalSkills = [
    {
      category: "Antenatal Care Skills",
      skills: ["Antenatal Assessment", "Fetal Monitoring", "Risk Identification", "Ultrasound", "Patient Education"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "Antenatal Care Certified"
    },
    {
      category: "Labor Management Skills",
      skills: ["Labor Assessment", "Delivery Techniques", "Emergency Obstetrics", "Instrumental Delivery", "Cesarean Section"],
      competency: "Required",
      assessment: "Skills Lab + Clinical Performance",
      certification: "Labor Management Certified"
    },
    {
      category: "Gynecological Skills",
      skills: ["Gynecological Assessment", "Screening Procedures", "Colposcopy", "Biopsy", "Cancer Screening"],
      competency: "Required",
      assessment: "Gynecology Training + Direct Observation",
      certification: "Gynecology Certified"
    },
    {
      category: "Surgical Skills",
      skills: ["Surgical Assistance", "Instrument Handling", "Suturing", "Laparoscopy", "Hysteroscopy"],
      competency: "Required",
      assessment: "Surgical Skills Lab + Clinical Performance",
      certification: "Surgical Skills Certified"
    },
    {
      category: "Emergency Obstetrics",
      skills: ["Emergency Assessment", "Resuscitation", "Emergency Delivery", "Complication Management", "Team Coordination"],
      competency: "Required",
      assessment: "Emergency Training + Direct Observation",
      certification: "Emergency Obstetrics Certified"
    },
    {
      category: "Infertility & ART",
      skills: ["Infertility Assessment", "ART Procedures", "Counseling", "Laboratory Skills", "Follow-up Care"],
      competency: "Required",
      assessment: "Infertility Training + Direct Observation",
      certification: "Infertility & ART Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Pregnancy Complications",
      conditions: ["Pre-eclampsia", "Gestational Diabetes", "Placenta Previa", "Multiple Pregnancy", "Preterm Labor"],
      prevalence: "25%",
      management: ["Medical Management", "Close Monitoring", "Timely Delivery", "NICU Care", "Multidisciplinary Care"],
      complications: ["Maternal Mortality", "Fetal Complications", "Preterm Birth", "NICU Admission", "Long-term Disability"]
    },
    {
      category: "Gynecological Disorders",
      conditions: ["Menstrual Disorders", "PID", "PCOD", "Endometriosis", "Fibroids"],
      prevalence: "35%",
      management: ["Medical Treatment", "Hormonal Therapy", "Surgical Management", "Lifestyle Changes", "Follow-up"],
      complications: ["Infertility", "Chronic Pain", "Anemia", "Quality of Life Issues", "Cancer Risk"]
    },
    {
      category: "Gynecological Cancers",
      conditions: ["Cervical Cancer", "Ovarian Cancer", "Endometrial Cancer", "Vulvar Cancer", "Gestational Trophoblastic Disease"],
      prevalence: "15%",
      management: ["Surgery", "Chemotherapy", "Radiotherapy", "Targeted Therapy", "Palliative Care"],
      complications: ["Metastasis", "Treatment Complications", "Fertility Issues", "Psychological Impact", "Mortality"]
    },
    {
      category: "Infertility",
      conditions: ["Male Factor", "Female Factor", "Unexplained Infertility", "Secondary Infertility", "Age-related Infertility"],
      prevalence: "15%",
      management: ["ART", "IUI", "IVF", "ICSI", "Surgical Correction"],
      complications: ["Treatment Failure", "Multiple Pregnancy", "OHSS", "Psychological Stress", "Financial Burden"]
    },
    {
      category: "Menopause & Urogynecology",
      conditions: ["Menopause", "Osteoporosis", "Urinary Incontinence", "Pelvic Organ Prolapse", "Sexual Dysfunction"],
      prevalence: "10%",
      management: ["Hormone Therapy", "Lifestyle Changes", "Surgical Correction", "Pelvic Floor Exercises", "Counseling"],
      complications: ["Cardiovascular Disease", "Osteoporosis", "Quality of Life Issues", "Psychological Problems", "Social Impact"]
    }
  ]

  const procedures = [
    {
      name: "Cesarean Section",
      description: "Surgical delivery of baby through abdominal incision",
      type: "Surgical",
      duration: "45-90 minutes",
      anesthesia: "Regional/General",
      recovery: "3-5 days",
      complications: ["Infection", "Bleeding", "Thromboembolism", "Injury to Organs", "Future Pregnancy Issues"],
      frequency: "Daily"
    },
    {
      name: "Total Hysterectomy",
      description: "Surgical removal of uterus for various gynecological conditions",
      type: "Surgical",
      duration: "60-120 minutes",
      anesthesia: "Regional/General",
      recovery: "4-6 weeks",
      complications: ["Bleeding", "Infection", "Injury to Organs", "Early Menopause", "Psychological Impact"],
      frequency: "Weekly"
    },
    {
      name: "Laparoscopic Surgery",
      description: "Minimally invasive gynecological surgeries",
      type: "Surgical",
      duration: "60-180 minutes",
      anesthesia: "General",
      recovery: "2-4 weeks",
      complications: ["Port Site Infection", "Bleeding", "Organ Injury", "Conversion to Open", "Anesthesia Complications"],
      frequency: "Weekly"
    },
    {
      name: "Myomectomy",
      description: "Surgical removal of uterine fibroids",
      type: "Surgical",
      duration: "90-150 minutes",
      anesthesia: "Regional/General",
      recovery: "4-6 weeks",
      complications: ["Bleeding", "Infection", "Recurrence", "Adhesions", "Future Fertility Issues"],
      frequency: "Weekly"
    },
    {
      name: "Ovarian Cystectomy",
      description: "Surgical removal of ovarian cysts",
      type: "Surgical",
      duration: "60-90 minutes",
      anesthesia: "Regional/General",
      recovery: "2-4 weeks",
      complications: ["Bleeding", "Infection", "Ovarian Damage", "Recurrence", "Fertility Impact"],
      frequency: "Weekly"
    },
    {
      name: "IVF Procedure",
      description: "In vitro fertilization for infertility treatment",
      type: "ART",
      duration: "2-3 weeks",
      anesthesia: "Sedation",
      recovery: "Immediate",
      complications: ["OHSS", "Multiple Pregnancy", "Ectopic Pregnancy", "Treatment Failure", "Emotional Stress"],
      frequency: "Monthly"
    }
  ]

  const protocols = [
    {
      name: "Antenatal Care Protocol",
      description: "Standardized protocol for comprehensive antenatal care",
      steps: ["Registration", "Initial Assessment", "Regular Checkups", "Screening", "Delivery Planning"],
      frequency: "Every Pregnancy",
      documentation: "Antenatal Registry",
      quality: "WHO Guidelines"
    },
    {
      name: "Labor Management Protocol",
      description: "Protocol for labor assessment and management",
      steps: ["Labor Assessment", "Monitoring", "Progress Evaluation", "Delivery Planning", "Post-delivery Care"],
      frequency: "Every Labor",
      documentation: "Labor Registry",
      quality: "WHO Guidelines"
    },
    {
      name: "Emergency Obstetrics Protocol",
      description: "Protocol for obstetric emergencies management",
      steps: ["Emergency Recognition", "Resuscitation", "Emergency Delivery", "NICU Transfer", "Post-emergency Care"],
      frequency: "Every Emergency",
      documentation: "Emergency Registry",
      quality: "Emergency Guidelines"
    },
    {
      name: "Gynecological Cancer Protocol",
      description: "Protocol for gynecological cancer management",
      steps: ["Screening", "Diagnosis", "Staging", "Treatment Planning", "Follow-up"],
      frequency: "Every Cancer Case",
      documentation: "Cancer Registry",
      quality: "Cancer Guidelines"
    },
    {
      name: "Infertility Treatment Protocol",
      description: "Protocol for infertility evaluation and treatment",
      steps: ["Evaluation", "Treatment Planning", "ART Procedures", "Follow-up", "Counseling"],
      frequency: "Every Infertility Case",
      documentation: "Infertility Registry",
      quality: "ART Guidelines"
    }
  ]

  const researchProjects = [
    {
      title: "Maternal-fetal Medicine Outcomes Study",
      principalInvestigator: "Prof. Dr. N. Ahmed",
      coInvestigators: ["Assoc. Prof. Dr. S. Khatun", "Dr. A. Islam"],
      duration: "2024-2026",
      funding: "BDT 750,000",
      status: "Ongoing",
      description: "Study of high-risk pregnancy outcomes and management strategies.",
      publications: 3,
      impact: "High"
    },
    {
      title: "Gynecological Oncology Research",
      principalInvestigator: "Assoc. Prof. Dr. S. Khatun",
      coInvestigators: ["Prof. Dr. N. Ahmed"],
      duration: "2023-2025",
      funding: "BDT 650,000",
      status: "Ongoing",
      description: "Study of gynecological cancers and treatment outcomes.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Infertility Treatment Success Study",
      principalInvestigator: "Asst. Prof. Dr. M. Rahman",
      coInvestigators: ["Dr. A. Islam"],
      duration: "2024-2027",
      funding: "BDT 550,000",
      status: "Starting",
      description: "Study of ART success rates and factors affecting outcomes.",
      publications: 0,
      impact: "Medium"
    }
  ]

  const achievements = [
    {
      title: "Best OBGYN Department Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding women's healthcare services and outcomes.",
      impact: "High"
    },
    {
      title: "Safe Motherhood Excellence Award",
      year: "2023",
      category: "Maternal Care",
      description: "Awarded for exceptional maternal care and safe delivery outcomes.",
      impact: "High"
    },
    {
      title: "Gynecological Oncology Excellence",
      year: "2023",
      category: "Specialty Excellence",
      description: "Recognized for excellence in gynecological cancer care and treatment.",
      impact: "High"
    },
    {
      title: "Infertility Treatment Excellence",
      year: "2022",
      category: "Reproductive Medicine",
      description: "Awarded for outstanding infertility treatment and success rates.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "OBGYN Workshop 2024",
      date: "2025-01-11",
      time: "9:00 AM - 5:00 PM",
      venue: "OBGYN Department",
      type: "Workshop",
      organizer: "Prof. Dr. N. Ahmed",
      participants: "OBGYN Professionals",
      description: "Annual workshop on recent advances in obstetrics and gynecology."
    },
    {
      title: "High-risk Pregnancy Training",
      date: "2025-01-14",
      time: "10:00 AM - 4:00 PM",
      venue: "Antenatal OPD",
      type: "Training",
      organizer: "Dr. A. Islam",
      participants: "Healthcare Workers",
      description: "Hands-on training for high-risk pregnancy management."
    },
    {
      title: "Infertility & ART Conference",
      date: "2025-01-17",
      time: "2:00 PM - 5:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Asst. Prof. Dr. M. Rahman",
      participants: "Healthcare Professionals",
      description: "Conference on latest advances in infertility treatment and ART."
    }
  ]

  const resources = [
    {
      title: "OBGYN Internship Manual",
      description: "Comprehensive guide for obstetrics and gynecology internship training",
      type: "PDF",
      size: "13.5 MB",
      downloadCount: 1500,
      category: "Manual"
    },
    {
      title: "Antenatal Care Guidelines",
      description: "Complete guidelines for antenatal care and pregnancy management",
      type: "PDF",
      size: "9.2 MB",
      downloadCount: 2100,
      category: "Guidelines"
    },
    {
      title: "Gynecological Surgery Atlas",
      description: "Comprehensive atlas of gynecological surgical procedures",
      type: "PDF",
      size: "35.5 MB",
      downloadCount: 2800,
      category: "Atlas"
    },
    {
      title: "OBGYN Procedure Videos",
      description: "Demonstration videos of obstetric and gynecological procedures",
      type: "Video",
      size: "2.8 GB",
      downloadCount: 1400,
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
                <HeartIcon2 className="w-12 h-12 text-pink-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Obstetrics & Gynecology - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Women's Healthcare and Reproductive Medicine</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Women's Health Excellence</div>
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
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Baby className="w-8 h-8 text-pink-600" />
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
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <User className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-sm text-pink-600 font-medium">{member.designation}</p>
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

                    <button className="w-full bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-2">
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
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Hospital className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{unit.name}</h3>
                        <p className="text-sm text-gray-600">{unit.type}</p>
                        <p className="text-sm text-pink-600 font-medium">Incharge: {unit.incharge}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{unit.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{unit.capacity}</div>
                        <div className="text-xs text-gray-600">Capacity</div>
                      </div>
                      <div className="text-center p-3 bg-pink-50 rounded-lg">
                        <UsersIcon3 className="w-5 h-5 text-pink-600 mx-auto mb-1" />
                        <div className="font-semibold">{unit.dailyPatients}</div>
                        <div className="text-xs text-gray-600">Daily Patients</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Common Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {unit.commonCases.slice(0, 3).map((case_, caseIndex) => (
                          <span key={caseIndex} className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
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
                        <span>Deliveries/Surgeries:</span>
                        <span className="font-medium">{unit.dailyDeliveries || unit.dailySurgeries}</span>
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
                      <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
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
                            <span key={skillIndex} className="px-2 py-1 bg-pink-100 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                          {program.skills.length > 3 && (
                            <span className="px-2 py-1 bg-pink-100 rounded-full text-xs">
                              +{program.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="font-medium">Supervisor:</span>
                        <span className="font-medium text-pink-600">{program.supervisor}</span>
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
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <TargetIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{skill.category}</h3>
                        <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
                          {skill.competency}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Skills:</h4>
                      <div className="space-y-1">
                        {skill.skills.slice(0, 3).map((skillItem, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common OBGYN Conditions</h2>
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
                            <span key={managementIndex} className="px-2 py-1 bg-pink-100 rounded-full text-xs">
                              {management}
                            </span>
                          ))}
                          {condition.management.length > 3 && (
                            <span className="px-2 py-1 bg-pink-100 rounded-full text-xs">
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">OBGYN Procedures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {procedures.map((procedure, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <SyringeIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{procedure.name}</h3>
                        <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
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
                        <p className="text-sm text-pink-600 font-medium">PI: {project.principalInvestigator}</p>
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
                      <button className="text-pink-600 hover:text-pink-700 text-sm font-medium">
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
                          <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
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
                        <CalendarDays className="w-6 h-6 text-pink-600" />
                        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                      </div>
                      <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
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

                    <button className="w-full bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-2">
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">OBGYN Resources</h2>
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
                          <div className="text-sm text-pink-600 font-medium">
                            {resource.downloadCount} downloads
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {resource.category}
                          </span>
                          <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-2">
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
