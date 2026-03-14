"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2, Wind, Activity as ActivityIcon3, Thermometer as ThermometerIcon, HeartHandshake as HeartHandshakeIcon, AlertTriangle as AlertTriangleIcon3 } from "lucide-react"

export default function RadiologyPage() {
  const departmentInfo = {
    name: "Department of Radiology - Phase 4",
    head: "Prof. Dr. K. Ahmed",
    established: "2013",
    faculty: 6,
    interns: 10,
    beds: 15,
    description: "The Phase 4 Radiology program provides comprehensive internship training in diagnostic imaging, interventional radiology, and radiation safety. Interns gain hands-on experience in various imaging modalities and image-guided procedures."
  }

  const faculty = [
    {
      name: "Prof. Dr. K. Ahmed",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCR",
      experience: "22 years",
      specialization: "Neuroradiology, Interventional Radiology",
      email: "k.ahmed@rcmc.edu.bd",
      phone: "Ext: 3200",
      publications: 38,
      research: "Neuroimaging, Interventional Procedures, Advanced Imaging",
      image: "/faculty/k-ahmed.jpg"
    },
    {
      name: "Assoc. Prof. Dr. M. Rahman",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS, FRCR",
      experience: "18 years",
      specialization: "Body Imaging, Cross-sectional Imaging",
      email: "m.rahman@rcmc.edu.bd",
      phone: "Ext: 3201",
      publications: 32,
      research: "CT/MRI Imaging, Body Imaging, Oncologic Imaging",
      image: "/faculty/m-rahman.jpg"
    },
    {
      name: "Asst. Prof. Dr. S. Khatun",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "14 years",
      specialization: "Ultrasound, Women's Imaging",
      email: "s.khatun@rcmc.edu.bd",
      phone: "Ext: 3202",
      publications: 24,
      research: "Ultrasound Imaging, Women's Imaging, Pediatric Radiology",
      image: "/faculty/s-khatun.jpg"
    },
    {
      name: "Dr. N. Islam",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "10 years",
      specialization: "General Radiology, Emergency Imaging",
      email: "n.islam@rcmc.edu.bd",
      phone: "Ext: 3203",
      publications: 18,
      research: "Emergency Radiology, General Imaging, Quality Assurance",
      image: "/faculty/n-islam.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Diagnostic Radiology",
      type: "Imaging Unit",
      capacity: 50,
      dailyStudies: "200/day",
      description: "Comprehensive diagnostic imaging services",
      facilities: ["X-ray Rooms", "CT Scanner", "MRI Suite", "Ultrasound Units", "Viewing Stations"],
      commonCases: ["Chest X-ray", "Abdominal CT", "Brain MRI", "Ultrasound Studies", "Bone Imaging"],
      incharge: "Dr. N. Islam"
    },
    {
      name: "Interventional Radiology",
      type: "Procedural Unit",
      capacity: 20,
      dailyProcedures: "40/day",
      description: "Image-guided diagnostic and therapeutic procedures",
      facilities: ["Angiography Suite", "Interventional Room", "Recovery Area", "Procedure Planning", "Fluoroscopy"],
      commonCases: ["Biopsies", "Drainage Procedures", "Angiography", "Embolization", "Vascular Interventions"],
      incharge: "Prof. Dr. K. Ahmed"
    },
    {
      name: "CT Imaging Unit",
      type: "Advanced Imaging",
      capacity: 30,
      dailyScans: "80/day",
      description: "Advanced CT imaging for various conditions",
      facilities: ["Multi-detector CT", "CT Angiography", "Cardiac CT", "3D Reconstruction", "Contrast Injection"],
      commonCases: ["Head CT", "Chest CT", "Abdominal CT", "CT Angiography", "Cardiac CT"],
      incharge: "Assoc. Prof. Dr. M. Rahman"
    },
    {
      name: "MRI Imaging Unit",
      type: "Advanced Imaging",
      capacity: 25,
      dailyScans: "60/day",
      description: "Advanced MRI imaging for detailed diagnosis",
      facilities: ["1.5T MRI", "3T MRI", "MRI Angiography", "Functional MRI", "Spectroscopy"],
      commonCases: ["Brain MRI", "Spine MRI", "Joint MRI", "MRI Angiography", "Functional MRI"],
      incharge: "Prof. Dr. K. Ahmed"
    },
    {
      name: "Ultrasound Unit",
      type: "Imaging Unit",
      capacity: 35,
      dailyStudies: "120/day",
      description: "Ultrasound imaging for various conditions",
      facilities: ["USG Machines", "Doppler USG", "Portable USG", "Interventional USG", "3D/4D USG"],
      commonCases: ["Abdominal USG", "Pelvic USG", "Doppler Studies", "Breast USG", "Interventional USG"],
      incharge: "Asst. Prof. Dr. S. Khatun"
    },
    {
      name: "Nuclear Medicine",
      type: "Specialized Imaging",
      capacity: 15,
      dailyStudies: "30/day",
      description: "Nuclear medicine imaging for functional assessment",
      facilities: ["Gamma Camera", "SPECT", "PET-CT", "Radioisotope Lab", "Hot Lab"],
      commonCases: ["Bone Scans", "Cardiac Scans", "PET-CT", "Thyroid Scans", "Renal Scans"],
      incharge: "Dr. N. Islam"
    }
  ]

  const internshipProgram = [
    {
      name: "Diagnostic Radiology Rotation",
      duration: "4 Weeks",
      setting: "Diagnostic Radiology",
      responsibilities: ["Image Acquisition", "Image Interpretation", "Report Writing", "Quality Control"],
      skills: ["Image Interpretation", "Report Writing", "Contrast Management", "Quality Assurance"],
      assessment: "Logbook + Reporting Skills Assessment",
      supervisor: "Dr. N. Islam"
    },
    {
      name: "CT Imaging Rotation",
      duration: "2 Weeks",
      setting: "CT Imaging Unit",
      responsibilities: ["CT Protocoling", "CT Scanning", "Image Interpretation", "3D Reconstruction"],
      skills: ["CT Protocoling", "CT Operation", "Image Interpretation", "Advanced CT Techniques"],
      assessment: "Logbook + CT Skills Assessment",
      supervisor: "Assoc. Prof. Dr. M. Rahman"
    },
    {
      name: "MRI Imaging Rotation",
      duration: "2 Weeks",
      setting: "MRI Imaging Unit",
      responsibilities: ["MRI Protocoling", "MRI Scanning", "Image Interpretation", "Advanced MRI"],
      skills: ["MRI Protocoling", "MRI Operation", "Image Interpretation", "Advanced MRI Techniques"],
      assessment: "Logbook + MRI Skills Assessment",
      supervisor: "Prof. Dr. K. Ahmed"
    },
    {
      name: "Ultrasound Rotation",
      duration: "2 Weeks",
      setting: "Ultrasound Unit",
      responsibilities: ["USG Scanning", "Doppler Studies", "Interventional USG", "Report Writing"],
      skills: ["USG Scanning", "Doppler Techniques", "Interventional USG", "Report Writing"],
      assessment: "Logbook + USG Skills Assessment",
      supervisor: "Asst. Prof. Dr. S. Khatun"
    },
    {
      name: "Interventional Radiology Rotation",
      duration: "2 Weeks",
      setting: "Interventional Radiology",
      responsibilities: ["Procedure Assistance", "Patient Preparation", "Image Guidance", "Post-procedure Care"],
      skills: ["Interventional Procedures", "Image Guidance", "Complication Management", "Patient Care"],
      assessment: "Logbook + IR Skills Assessment",
      supervisor: "Prof. Dr. K. Ahmed"
    },
    {
      name: "Nuclear Medicine Rotation",
      duration: "1 Week",
      setting: "Nuclear Medicine",
      responsibilities: ["Scan Protocoling", "Radiopharmacy", "Image Acquisition", "Image Interpretation"],
      skills: ["Nuclear Medicine Techniques", "Radiopharmacy", "Image Interpretation", "Radiation Safety"],
      assessment: "Logbook + Nuclear Medicine Skills Assessment",
      supervisor: "Dr. N. Islam"
    }
  ]

  const clinicalSkills = [
    {
      category: "Basic Radiology Skills",
      skills: ["Image Interpretation", "Report Writing", "Contrast Management", "Quality Control", "Radiation Safety"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "Basic Radiology Certified"
    },
    {
      category: "CT Imaging Skills",
      skills: ["CT Protocoling", "CT Operation", "Image Reconstruction", "CT Angiography", "Advanced CT"],
      competency: "Required",
      assessment: "CT Training + Clinical Performance",
      certification: "CT Imaging Certified"
    },
    {
      category: "MRI Imaging Skills",
      skills: ["MRI Protocoling", "MRI Operation", "Advanced MRI", "MRI Safety", "Image Interpretation"],
      competency: "Required",
      assessment: "MRI Training + Clinical Performance",
      certification: "MRI Imaging Certified"
    },
    {
      category: "Ultrasound Skills",
      skills: ["USG Scanning", "Doppler Techniques", "Interventional USG", "3D/4D USG", "Report Writing"],
      competency: "Required",
      assessment: "USG Training + Direct Observation",
      certification: "Ultrasound Certified"
    },
    {
      category: "Interventional Skills",
      skills: ["Biopsy Techniques", "Drainage Procedures", "Vascular Access", "Embolization", "Angiography"],
      competency: "Required",
      assessment: "IR Training + Clinical Performance",
      certification: "Interventional Radiology Certified"
    },
    {
      category: "Nuclear Medicine Skills",
      skills: ["Radiopharmacy", "Scan Protocoling", "Image Acquisition", "Image Interpretation", "Radiation Safety"],
      competency: "Required",
      assessment: "Nuclear Medicine Training + Direct Observation",
      certification: "Nuclear Medicine Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Neuroimaging",
      conditions: ["Stroke", "Brain Tumors", "Head Trauma", "Multiple Sclerosis", "Neuroinfections"],
      prevalence: "25%",
      imaging: ["CT Head", "MRI Brain", "CT/MRI Angiography", "Diffusion MRI", "Perfusion Studies"],
      protocols: ["Stroke Protocol", "Tumor Protocol", "Trauma Protocol", "MS Protocol", "Infection Protocol"],
      complications: ["Missed Diagnosis", "Delayed Treatment", "Inadequate Imaging", "Contrast Reactions"]
    },
    {
      category: "Body Imaging",
      conditions: ["Abdominal Pain", "Cancer Staging", "Trauma", "Infections", "Vascular Diseases"],
      prevalence: "30%",
      imaging: ["CT Abdomen", "MRI Abdomen", "Ultrasound", "Angiography", "PET-CT"],
      protocols: ["Abdominal Protocol", "Cancer Staging", "Trauma Protocol", "Infection Protocol", "Vascular Protocol"],
      complications: ["Missed Lesions", "Inadequate Staging", "Contrast Issues", "Radiation Dose"]
    },
    {
      category: "Musculoskeletal",
      conditions: ["Fractures", "Joint Diseases", "Soft Tissue Tumors", "Sports Injuries", "Infections"],
      prevalence: "20%",
      imaging: ["X-ray", "CT", "MRI", "Ultrasound", "Bone Scans"],
      protocols: ["Fracture Protocol", "Joint Protocol", "Soft Tissue Protocol", "Sports Protocol", "Infection Protocol"],
      complications: ["Missed Fractures", "Inadequate Assessment", "Over-radiation", "Contrast Issues"]
    },
    {
      category: "Cardiothoracic",
      conditions: ["Chest Diseases", "Cardiac Conditions", "Pulmonary Embolism", "Aortic Diseases", "Lung Cancer"],
      prevalence: "15%",
      imaging: ["Chest X-ray", "CT Chest", "Cardiac CT", "MRI Heart", "Vascular Imaging"],
      protocols: ["Chest Protocol", "Cardiac Protocol", "PE Protocol", "Aortic Protocol", "Cancer Protocol"],
      complications: ["Missed Diagnosis", "Radiation Dose", "Contrast Reactions", "Image Artifacts"]
    },
    {
      category: "Women's Imaging",
      conditions: ["Breast Cancer", "Gynecological Diseases", "Pregnancy Issues", "Pelvic Diseases", "Oncology"],
      prevalence: "10%",
      imaging: ["Mammography", "Ultrasound", "MRI", "CT", "PET-CT"],
      protocols: ["Breast Protocol", "Gynae Protocol", "Pregnancy Protocol", "Pelvic Protocol", "Oncology Protocol"],
      complications: ["Missed Cancer", "Radiation Exposure", "Contrast Issues", "Inadequate Imaging"]
    }
  ]

  const procedures = [
    {
      name: "CT-guided Biopsy",
      description: "Image-guided tissue sampling for diagnosis",
      type: "Interventional",
      duration: "30-60 minutes",
      anesthesia: "Local",
      recovery: "2-4 hours",
      complications: ["Bleeding", "Infection", "Pneumothorax", "Tumor Seeding"],
      frequency: "Daily"
    },
    {
      name: "Ultrasound-guided Drainage",
      description: "Image-guided fluid drainage for treatment",
      type: "Interventional",
      duration: "20-45 minutes",
      anesthesia: "Local",
      recovery: "1-2 hours",
      complications: ["Bleeding", "Infection", "Catheter Issues", "Organ Injury"],
      frequency: "Daily"
    },
    {
      name: "Angiography",
      description: "Vascular imaging for diagnosis and intervention",
      type: "Diagnostic/Interventional",
      duration: "45-90 minutes",
      anesthesia: "Local/Sedation",
      recovery: "4-6 hours",
      complications: ["Contrast Reactions", "Vascular Injury", "Bleeding", "Kidney Injury"],
      frequency: "Weekly"
    },
    {
      name: "Embolization",
      description: "Vascular occlusion for therapeutic purposes",
      type: "Interventional",
      duration: "60-120 minutes",
      anesthesia: "Local/Sedation",
      recovery: "6-12 hours",
      complications: ["Non-target Embolization", "Ischemia", "Post-embolization Syndrome", "Recanalization"],
      frequency: "Weekly"
    },
    {
      name: "Radiofrequency Ablation",
      description: "Image-guided tumor ablation",
      type: "Interventional",
      duration: "60-90 minutes",
      anesthesia: "Local/Sedation",
      recovery: "4-6 hours",
      complications: ["Bleeding", "Infection", "Thermal Injury", "Incomplete Ablation"],
      frequency: "Monthly"
    },
    {
      name: "Vertebroplasty",
      description: "Vertebral augmentation for compression fractures",
      type: "Interventional",
      duration: "45-60 minutes",
      anesthesia: "Local/Sedation",
      recovery: "2-4 hours",
      complications: ["Cement Leakage", "Bleeding", "Infection", "Fracture"],
      frequency: "Monthly"
    }
  ]

  const protocols = [
    {
      name: "Stroke Imaging Protocol",
      description: "Standardized protocol for acute stroke imaging",
      steps: ["Non-contrast CT", "CT Angiography", "CT Perfusion", "MRI if needed", "Report Generation"],
      frequency: "Every Stroke Case",
      documentation: "Stroke Registry",
      quality: "AHA/ASA Guidelines"
    },
    {
      name: "Trauma Imaging Protocol",
      description: "Comprehensive protocol for trauma imaging",
      steps: ["Primary Survey CT", "Secondary Survey", "Focused Assessment", "Follow-up Imaging", "Report Generation"],
      frequency: "Every Major Trauma",
      documentation: "Trauma Registry",
      quality: "ATLS Guidelines"
    },
    {
      name: "Cancer Staging Protocol",
      description: "Protocol for oncologic imaging and staging",
      steps: ["Local Assessment", "Regional Assessment", "Distant Metastasis", "TNM Staging", "Report Generation"],
      frequency: "Every Cancer Case",
      documentation: "Cancer Registry",
      quality: "AJCC Guidelines"
    },
    {
      name: "Interventional Radiology Protocol",
      description: "Standardized protocol for interventional procedures",
      steps: ["Pre-procedure Planning", "Consent", "Procedure", "Post-procedure Care", "Follow-up"],
      frequency: "Every IR Procedure",
      documentation: "IR Registry",
      quality: "SIR Guidelines"
    },
    {
      name: "Radiation Safety Protocol",
      description: "Protocol for radiation protection and safety",
      steps: ["Dose Assessment", "Shielding", "Monitoring", "Documentation", "Quality Control"],
      frequency: "All Procedures",
      documentation: "Radiation Safety Records",
      quality: "IAEA Guidelines"
    }
  ]

  const researchProjects = [
    {
      title: "Advanced Neuroimaging Study",
      principalInvestigator: "Prof. Dr. K. Ahmed",
      coInvestigators: ["Assoc. Prof. Dr. M. Rahman", "Dr. N. Islam"],
      duration: "2024-2026",
      funding: "BDT 650,000",
      status: "Ongoing",
      description: "Study of advanced neuroimaging techniques in stroke and brain tumors.",
      publications: 3,
      impact: "High"
    },
    {
      title: "Interventional Radiology Outcomes",
      principalInvestigator: "Assoc. Prof. Dr. M. Rahman",
      coInvestigators: ["Prof. Dr. K. Ahmed"],
      duration: "2023-2025",
      funding: "BDT 550,000",
      status: "Ongoing",
      description: "Study of interventional radiology procedures and outcomes.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Ultrasound Quality Improvement",
      principalInvestigator: "Asst. Prof. Dr. S. Khatun",
      coInvestigators: ["Dr. N. Islam"],
      duration: "2024-2027",
      funding: "BDT 450,000",
      status: "Starting",
      description: "Study of ultrasound quality improvement and standardization.",
      publications: 0,
      impact: "Medium"
    }
  ]

  const achievements = [
    {
      title: "Best Radiology Department Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding radiology services and diagnostic accuracy.",
      impact: "High"
    },
    {
      title: "Interventional Radiology Excellence Award",
      year: "2023",
      category: "Specialty Excellence",
      description: "Awarded for exceptional interventional radiology services and outcomes.",
      impact: "High"
    },
    {
      title: "Imaging Innovation Award",
      year: "2023",
      category: "Innovation",
      description: "Recognized for innovative imaging techniques and approaches.",
      impact: "High"
    },
    {
      title: "Radiation Safety Excellence",
      year: "2022",
      category: "Safety",
      description: "Awarded for excellence in radiation safety and protection.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Radiology Workshop 2024",
      date: "2025-01-10",
      time: "9:00 AM - 5:00 PM",
      venue: "Radiology Department",
      type: "Workshop",
      organizer: "Prof. Dr. K. Ahmed",
      participants: "Radiology Professionals",
      description: "Annual workshop on recent advances in radiology and imaging."
    },
    {
      title: "Advanced Imaging Training",
      date: "2025-01-13",
      time: "10:00 AM - 4:00 PM",
      venue: "CT/MRI Unit",
      type: "Training",
      organizer: "Assoc. Prof. Dr. M. Rahman",
      participants: "Healthcare Workers",
      description: "Hands-on training for advanced CT and MRI techniques."
    },
    {
      title: "Interventional Radiology Conference",
      date: "2025-01-16",
      time: "2:00 PM - 5:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Dr. N. Islam",
      participants: "Healthcare Professionals",
      description: "Conference on interventional radiology procedures and innovations."
    }
  ]

  const resources = [
    {
      title: "Radiology Internship Manual",
      description: "Comprehensive guide for radiology internship training and procedures",
      type: "PDF",
      size: "11.5 MB",
      downloadCount: 1400,
      category: "Manual"
    },
    {
      title: "Imaging Protocols Guidelines",
      description: "Complete guidelines for radiology imaging protocols and procedures",
      type: "PDF",
      size: "8.2 MB",
      downloadCount: 2000,
      category: "Guidelines"
    },
    {
      title: "Radiology Imaging Atlas",
      description: "Comprehensive atlas of radiology imaging and procedures",
      type: "PDF",
      size: "32.5 MB",
      downloadCount: 2600,
      category: "Atlas"
    },
    {
      title: "Interventional Radiology Videos",
      description: "Demonstration videos of interventional radiology procedures",
      type: "Video",
      size: "2.2 GB",
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
                <MonitorIcon className="w-12 h-12 text-purple-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Radiology - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Diagnostic Imaging and Interventional Radiology</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Imaging Excellence</div>
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
                  <div className="text-sm text-gray-600">Observation Beds</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MonitorIcon className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">6</div>
                  <div className="text-sm text-gray-600">Imaging Units</div>
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
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <MonitorIcon className="w-6 h-6" />
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
                        <div className="font-semibold">{unit.dailyStudies}</div>
                        <div className="text-xs text-gray-600">Daily Studies</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Common Studies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {unit.commonCases.slice(0, 3).map((case_, caseIndex) => (
                          <span key={caseIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Imaging Conditions</h2>
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
                        <span className="font-medium">Imaging:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {condition.imaging.slice(0, 3).map((imaging, imagingIndex) => (
                            <span key={imagingIndex} className="px-2 py-1 bg-blue-100 rounded-full text-xs">
                              {imaging}
                            </span>
                          ))}
                          {condition.imaging.length > 3 && (
                            <span className="px-2 py-1 bg-blue-100 rounded-full text-xs">
                              +{condition.imaging.length - 3} more
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Interventional Radiology Procedures</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Radiology Resources</h2>
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
