"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2 } from "lucide-react"

export default function EndocrinologyPage() {
  const departmentInfo = {
    name: "Department of Endocrinology - Phase 4",
    head: "Prof. Dr. F. Rahman",
    established: "2013",
    faculty: 6,
    interns: 12,
    beds: 30,
    description: "The Phase 4 Endocrinology program provides comprehensive internship training in diabetes management, thyroid disorders, and hormonal diseases. Interns gain hands-on experience in diagnosing and managing acute and chronic endocrine conditions."
  }

  const faculty = [
    {
      name: "Prof. Dr. F. Rahman",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCP",
      experience: "20 years",
      specialization: "Diabetes Mellitus, Thyroid Disorders",
      email: "f.rahman@rcmc.edu.bd",
      phone: "Ext: 2800",
      publications: 42,
      research: "Diabetes Management, Metabolic Disorders",
      image: "/faculty/f-rahman.jpg"
    },
    {
      name: "Assoc. Prof. Dr. S. Akhter",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS, FRCP",
      experience: "16 years",
      specialization: "Reproductive Endocrinology, PCOS",
      email: "s.akhter@rcmc.edu.bd",
      phone: "Ext: 2801",
      publications: 28,
      research: "PCOS, Hormonal Disorders",
      image: "/faculty/s-akhter.jpg"
    },
    {
      name: "Asst. Prof. Dr. M. Karim",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "10 years",
      specialization: "Pituitary Disorders, Neuroendocrinology",
      email: "m.karim@rcmc.edu.bd",
      phone: "Ext: 2802",
      publications: 22,
      research: "Pituitary Tumors, Hormone Deficiencies",
      image: "/faculty/m-karim.jpg"
    },
    {
      name: "Dr. N. Sultana",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "7 years",
      specialization: "Bone Metabolism, Osteoporosis",
      email: "n.sultana@rcmc.edu.bd",
      phone: "Ext: 2803",
      publications: 14,
      research: "Osteoporosis, Calcium Disorders",
      image: "/faculty/n-sultana.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Endocrinology OPD",
      type: "Outpatient Care",
      capacity: 40,
      dailyPatients: "60/day",
      description: "Comprehensive outpatient care for endocrine and metabolic disorders",
      facilities: ["Consultation Rooms", "Diabetes Education Room", "Hormone Lab", "Bone Density Unit"],
      commonCases: ["Diabetes", "Thyroid Disorders", "PCOS", "Osteoporosis", "Obesity"],
      incharge: "Dr. N. Sultana"
    },
    {
      name: "Endocrinology Ward",
      type: "Inpatient Care",
      capacity: 30,
      beds: 30,
      admissions: "50/month",
      description: "Inpatient care for acute and chronic endocrine conditions",
      facilities: ["Private Rooms", "General Ward", "Glucose Monitoring", "Hormone Testing", "Emergency Equipment"],
      commonCases: ["Diabetic Ketoacidosis", "Thyroid Storm", "Adrenal Crisis", "Hypoglycemia", "Electrolyte Disorders"],
      incharge: "Dr. N. Sultana"
    },
    {
      name: "Diabetes Care Center",
      type: "Specialized Care",
      capacity: 25,
      dailyPatients: "40/day",
      description: "Specialized center for comprehensive diabetes management and education",
      facilities: ["Diabetes Clinic", "Education Room", "Foot Care Unit", "Nutrition Counseling", "Insulin Pump Clinic"],
      commonCases: ["Type 1 Diabetes", "Type 2 Diabetes", "Gestational Diabetes", "Diabetic Complications", "Diabetes Education"],
      incharge: "Prof. Dr. F. Rahman"
    },
    {
      name: "Thyroid Clinic",
      type: "Specialized Care",
      capacity: 20,
      dailyPatients: "30/day",
      description: "Specialized clinic for thyroid disorders and thyroid cancer follow-up",
      facilities: ["Ultrasound", "Fine Needle Aspiration", "Hormone Testing", "Radioactive Iodine Therapy", "Follow-up Clinic"],
      commonCases: ["Hyperthyroidism", "Hypothyroidism", "Thyroid Nodules", "Thyroid Cancer", "Goiter"],
      incharge: "Assoc. Prof. Dr. S. Akhter"
    },
    {
      name: "Bone Metabolism Unit",
      type: "Diagnostic/Treatment",
      capacity: 15,
      dailyPatients: "25/day",
      description: "Specialized unit for bone disorders and metabolic bone disease",
      facilities: ["DEXA Scanner", "Bone Density Testing", "Calcium Lab", "Fracture Risk Assessment", "Treatment Clinic"],
      commonCases: ["Osteoporosis", "Osteopenia", "Paget's Disease", "Hyperparathyroidism", "Vitamin D Deficiency"],
      incharge: "Dr. N. Sultana"
    },
    {
      name: "Reproductive Endocrinology Clinic",
      type: "Specialized Care",
      capacity: 15,
      dailyPatients: "20/day",
      description: "Specialized clinic for reproductive and hormonal disorders",
      facilities: ["Hormone Testing", "Ultrasound", "Fertility Assessment", "PCOS Clinic", "Menopause Clinic"],
      commonCases: ["PCOS", "Infertility", "Menopause", "Hirsutism", "Menstrual Disorders"],
      incharge: "Assoc. Prof. Dr. S. Akhter"
    }
  ]

  const internshipProgram = [
    {
      name: "OPD Duties",
      duration: "4 Weeks",
      setting: "Endocrinology OPD",
      responsibilities: ["Patient Consultation", "Hormone Assessment", "Diabetes Education", "Patient Counseling"],
      skills: ["Endocrine Examination", "Hormone Interpretation", "Glucose Monitoring", "Communication"],
      assessment: "Logbook + Supervisor Evaluation",
      supervisor: "Dr. N. Sultana"
    },
    {
      name: "Ward Duties",
      duration: "3 Weeks",
      setting: "Endocrinology Ward",
      responsibilities: ["Inpatient Care", "Daily Rounds", "Treatment Management", "Emergency Response"],
      skills: ["Inpatient Management", "Acute Endocrine Care", "Glucose Management", "Documentation"],
      assessment: "Logbook + Ward Skills Assessment",
      supervisor: "Dr. N. Sultana"
    },
    {
      name: "Diabetes Center Rotation",
      duration: "2 Weeks",
      setting: "Diabetes Care Center",
      responsibilities: ["Diabetes Management", "Patient Education", "Complication Screening", "Insulin Therapy"],
      skills: ["Diabetes Management", "Insulin Therapy", "Patient Education", "Complication Assessment"],
      assessment: "Logbook + Diabetes Skills Assessment",
      supervisor: "Prof. Dr. F. Rahman"
    },
    {
      name: "Thyroid Clinic Rotation",
      duration: "2 Weeks",
      setting: "Thyroid Clinic",
      responsibilities: ["Thyroid Assessment", "Ultrasound Assistance", "Biopsy Support", "Treatment Planning"],
      skills: ["Thyroid Examination", "Hormone Interpretation", "Ultrasound Basics", "Biopsy Assistance"],
      assessment: "Logbook + Thyroid Skills Assessment",
      supervisor: "Assoc. Prof. Dr. S. Akhter"
    },
    {
      name: "Bone Metabolism Rotation",
      duration: "2 Weeks",
      setting: "Bone Metabolism Unit",
      responsibilities: ["Bone Density Testing", "Fracture Risk Assessment", "Calcium Management", "Treatment Planning"],
      skills: ["DEXA Operation", "Bone Health Assessment", "Calcium Management", "Fracture Prevention"],
      assessment: "Logbook + Bone Skills Assessment",
      supervisor: "Dr. N. Sultana"
    },
    {
      name: "Emergency Rotation",
      duration: "1 Week",
      setting: "Emergency Department",
      responsibilities: ["Emergency Endocrine Care", "Triage", "Stabilization", "Referral"],
      skills: ["Emergency Assessment", "Acute Endocrine Care", "Resuscitation", "Team Coordination"],
      assessment: "Logbook + Emergency Skills Assessment",
      supervisor: "Prof. Dr. F. Rahman"
    }
  ]

  const clinicalSkills = [
    {
      category: "Basic Endocrine Skills",
      skills: ["Endocrine Examination", "Thyroid Assessment", "Diabetes Screening", "Hormone Testing", "Bone Health Assessment"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "Endocrine Skills Certified"
    },
    {
      category: "Emergency Endocrine Skills",
      skills: ["DKA Management", "Thyroid Storm Management", "Adrenal Crisis Management", "Severe Hypoglycemia", "Electrolyte Emergencies"],
      competency: "Required",
      assessment: "Simulation Training + Direct Observation",
      certification: "Emergency Endocrinology Certified"
    },
    {
      category: "Diabetes Management Skills",
      skills: ["Insulin Therapy", "Oral Hypoglycemics", "Glucose Monitoring", "Complication Screening", "Patient Education"],
      competency: "Required",
      assessment: "Case Studies + Direct Observation",
      certification: "Diabetes Skills Certified"
    },
    {
      category: "Thyroid Skills",
      skills: ["Thyroid Ultrasound", "Fine Needle Aspiration", "Hormone Interpretation", "Radioactive Iodine Therapy", "Thyroid Cancer Follow-up"],
      competency: "Required",
      assessment: "Skills Lab + Clinical Performance",
      certification: "Thyroid Skills Certified"
    },
    {
      category: "Reproductive Endocrine Skills",
      skills: ["PCOS Management", "Hormone Assessment", "Infertility Evaluation", "Menopause Management", "Menstrual Disorders"],
      competency: "Required",
      assessment: "Clinic Training + Direct Observation",
      certification: "Reproductive Endocrine Skills Certified"
    },
    {
      category: "Bone Metabolism Skills",
      skills: ["DEXA Operation", "Fracture Risk Assessment", "Calcium Management", "Vitamin D Management", "Osteoporosis Treatment"],
      competency: "Optional",
      assessment: "Bone Unit Training + Direct Observation",
      certification: "Bone Metabolism Skills Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Diabetes Mellitus",
      conditions: ["Type 1 Diabetes", "Type 2 Diabetes", "Gestational Diabetes", "MODY", "Secondary Diabetes"],
      prevalence: "40%",
      management: ["Lifestyle Modification", "Oral Hypoglycemics", "Insulin Therapy", "Monitoring", "Complication Prevention"],
      complications: ["Retinopathy", "Nephropathy", "Neuropathy", "Cardiovascular Disease", "Hypoglycemia"]
    },
    {
      category: "Thyroid Disorders",
      conditions: ["Hyperthyroidism", "Hypothyroidism", "Thyroid Nodules", "Thyroid Cancer", "Thyroiditis"],
      prevalence: "25%",
      management: ["Antithyroid Drugs", "Thyroid Hormone Replacement", "Radioactive Iodine", "Surgery", "Monitoring"],
      complications: ["Thyroid Storm", "Myxedema Coma", "Cardiac Effects", "Bone Loss", "Pregnancy Complications"]
    },
    {
      category: "Reproductive Endocrine Disorders",
      conditions: ["PCOS", "Infertility", "Menopause", "Hirsutism", "Menstrual Disorders"],
      prevalence: "15%",
      management: ["Hormonal Therapy", "Lifestyle Modification", "Ovulation Induction", "Surgical Intervention", "Symptom Management"],
      complications: ["Infertility", "Metabolic Syndrome", "Endometrial Cancer", "Cardiovascular Risk", "Psychological Impact"]
    },
    {
      category: "Bone and Mineral Disorders",
      conditions: ["Osteoporosis", "Osteopenia", "Hyperparathyroidism", "Vitamin D Deficiency", "Paget's Disease"],
      prevalence: "10%",
      management: ["Calcium Supplementation", "Vitamin D", "Bisphosphonates", "Hormone Therapy", "Lifestyle Modification"],
      complications: ["Fractures", "Bone Pain", "Deformities", "Hypercalcemia", "Kidney Stones"]
    },
    {
      category: "Pituitary and Adrenal Disorders",
      conditions: ["Pituitary Tumors", "Acromegaly", "Cushing's Syndrome", "Addison's Disease", "Prolactinoma"],
      prevalence: "10%",
      management: ["Hormone Replacement", "Surgery", "Medical Therapy", "Radiation", "Monitoring"],
      complications: ["Hormone Deficiencies", "Cardiovascular Disease", "Metabolic Disorders", "Vision Loss", "Infertility"]
    }
  ]

  const procedures = [
    {
      name: "Fine Needle Aspiration (FNA)",
      description: "Diagnostic procedure for thyroid nodules",
      type: "Diagnostic",
      duration: "15-30 minutes",
      anesthesia: "Local",
      recovery: "Immediate",
      complications: ["Bleeding", "Infection", "Pain", "Non-diagnostic Sample", "Hematoma"],
      frequency: "Daily"
    },
    {
      name: "Thyroid Ultrasound",
      description: "Imaging procedure for thyroid assessment",
      type: "Diagnostic",
      duration: "20-30 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Minimal", "Discomfort", "Allergy to Gel"],
      frequency: "Daily"
    },
    {
      name: "DEXA Bone Density Scan",
      description: "Bone mineral density measurement",
      type: "Diagnostic",
      duration: "15-20 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Minimal", "Radiation Exposure", "Claustrophobia"],
      frequency: "Daily"
    },
    {
      name: "Dynamic Hormone Testing",
      description: "Comprehensive hormone function testing",
      type: "Diagnostic",
      duration: "2-4 hours",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Hypoglycemia", "Allergic Reaction", "Vein Irritation", "Fainting"],
      frequency: "Daily"
    },
    {
      name: "Insulin Pump Initiation",
      description: "Therapeutic procedure for insulin delivery",
      type: "Therapeutic",
      duration: "60-90 minutes",
      anesthesia: "None",
      recovery: "Education Period",
      complications: ["Infection", "Site Reactions", "Pump Failure", "Hypoglycemia", "Hyperglycemia"],
      frequency: "Weekly"
    },
    {
      name: "Radioactive Iodine Therapy",
      description: "Therapeutic procedure for hyperthyroidism and thyroid cancer",
      type: "Therapeutic",
      duration: "Outpatient Procedure",
      anesthesia: "None",
      recovery: "Isolation Period",
      complications: ["Radiation Sickness", "Hypothyroidism", "Dry Mouth", "Salivary Gland Damage", "Secondary Cancers"],
      frequency: "Monthly"
    }
  ]

  const protocols = [
    {
      name: "Diabetic Ketoacidosis (DKA) Protocol",
      description: "Standardized protocol for DKA management",
      steps: ["Initial Assessment", "Fluid Resuscitation", "Insulin Therapy", "Electrolyte Management", "Transition to Subcutaneous"],
      frequency: "Every DKA Case",
      documentation: "DKA Registry",
      quality: "ADA Guidelines"
    },
    {
      name: "Thyroid Storm Protocol",
      description: "Rapid response protocol for thyroid storm management",
      steps: ["ABC Assessment", "Beta Blockers", "Antithyroid Drugs", "Supportive Care", "Definitive Treatment Planning"],
      frequency: "Emergency Cases",
      documentation: "Thyroid Emergency Log",
      quality: "ATA Guidelines"
    },
    {
      name: "Adrenal Crisis Protocol",
      description: "Comprehensive protocol for adrenal crisis management",
      steps: ["Rapid Assessment", "Hydrocortisone Administration", "Fluid Resuscitation", "Electrolyte Correction", "Investigation"],
      frequency: "Emergency Cases",
      documentation: "Adrenal Crisis Registry",
      quality: "Endocrine Society Guidelines"
    },
    {
      name: "Diabetes Foot Care Protocol",
      description: "Standardized protocol for diabetic foot assessment and care",
      steps: ["Foot Examination", "Risk Assessment", "Patient Education", "Treatment Planning", "Follow-up"],
      frequency: "Every Diabetes Visit",
      documentation: "Foot Care Registry",
      quality: "IWGDF Guidelines"
    },
    {
      name: "Osteoporosis Management Protocol",
      description: "Protocol for osteoporosis assessment and treatment",
      steps: ["Risk Assessment", "DEXA Scanning", "Fracture Risk Calculation", "Treatment Initiation", "Monitoring"],
      frequency: "Osteoporosis Cases",
      documentation: "Bone Health Registry",
      quality: "NOF Guidelines"
    }
  ]

  const researchProjects = [
    {
      title: "Diabetes Complications Registry",
      principalInvestigator: "Prof. Dr. F. Rahman",
      coInvestigators: ["Assoc. Prof. Dr. S. Akhter", "Dr. N. Sultana"],
      duration: "2024-2026",
      funding: "BDT 650,000",
      status: "Ongoing",
      description: "Comprehensive registry of diabetes complications and outcomes.",
      publications: 2,
      impact: "High"
    },
    {
      title: "PCOS Metabolic Study",
      principalInvestigator: "Assoc. Prof. Dr. S. Akhter",
      coInvestigators: ["Asst. Prof. Dr. M. Karim"],
      duration: "2023-2025",
      funding: "BDT 550,000",
      status: "Ongoing",
      description: "Study of metabolic complications and treatment outcomes in PCOS patients.",
      publications: 1,
      impact: "Medium"
    },
    {
      title: "Thyroid Nodule Characterization",
      principalInvestigator: "Asst. Prof. Dr. M. Karim",
      coInvestigators: ["Prof. Dr. F. Rahman"],
      duration: "2024-2027",
      funding: "BDT 600,000",
      status: "Starting",
      description: "Research on ultrasound characteristics and malignancy risk in thyroid nodules.",
      publications: 0,
      impact: "High"
    }
  ]

  const achievements = [
    {
      title: "Best Diabetes Care Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding diabetes management and patient education.",
      impact: "High"
    },
    {
      title: "Thyroid Care Excellence",
      year: "2023",
      category: "Specialized Care",
      description: "Awarded for exceptional thyroid disorder management and outcomes.",
      impact: "High"
    },
    {
      title: "Research Excellence Award",
      year: "2023",
      category: "Research",
      description: "Awarded for outstanding research contributions in endocrinology.",
      impact: "Medium"
    },
    {
      title: "Patient Education Achievement",
      year: "2022",
      category: "Education",
      description: "Recognized for excellence in patient education and diabetes counseling.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Endocrinology Workshop 2024",
      date: "2025-01-04",
      time: "9:00 AM - 5:00 PM",
      venue: "Endocrinology Department",
      type: "Workshop",
      organizer: "Prof. Dr. F. Rahman",
      participants: "Endocrinology Professionals",
      description: "Annual workshop on recent advances in endocrinology and diabetes care."
    },
    {
      title: "Diabetes Management Seminar",
      date: "2025-01-07",
      time: "2:00 PM - 4:00 PM",
      venue: "Diabetes Care Center",
      type: "Seminar",
      organizer: "Assoc. Prof. Dr. S. Akhter",
      participants: "Healthcare Workers",
      description: "Seminar on diabetes management protocols and new therapies."
    },
    {
      title: "Thyroid Disorders Conference",
      date: "2025-01-10",
      time: "10:00 AM - 1:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Asst. Prof. Dr. M. Karim",
      participants: "Healthcare Professionals",
      description: "Conference on thyroid disorders and recent advances in treatment."
    }
  ]

  const resources = [
    {
      title: "Endocrinology Internship Manual",
      description: "Comprehensive guide for endocrinology internship training and procedures",
      type: "PDF",
      size: "9.2 MB",
      downloadCount: 1550,
      category: "Manual"
    },
    {
      title: "Diabetes Management Guidelines",
      description: "Complete guidelines for diabetes management and complications",
      type: "PDF",
      size: "7.8 MB",
      downloadCount: 2000,
      category: "Guidelines"
    },
    {
      title: "Thyroid Disorders Atlas",
      description: "Comprehensive atlas of thyroid disorders and ultrasound findings",
      type: "PDF",
      size: "12.5 MB",
      downloadCount: 1850,
      category: "Atlas"
    },
    {
      title: "Endocrine Procedures Videos",
      description: "Demonstration videos of endocrine procedures and examinations",
      type: "Video",
      size: "750 MB",
      downloadCount: 1150,
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
                <ActivityIcon2 className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Endocrinology - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Hormonal Care and Diabetes Management</p>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Endocrine Conditions</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Endocrine Procedures</h2>
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
