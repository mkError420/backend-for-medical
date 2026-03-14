"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2, Wind, Activity as ActivityIcon3, Thermometer as ThermometerIcon, HeartHandshake as HeartHandshakeIcon, AlertTriangle as AlertTriangleIcon3 } from "lucide-react"

export default function OphthalmologyPage() {
  const departmentInfo = {
    name: "Department of Ophthalmology - Phase 4",
    head: "Prof. Dr. R. Khatun",
    established: "2013",
    faculty: 5,
    interns: 8,
    beds: 20,
    description: "The Phase 4 Ophthalmology program provides comprehensive internship training in eye diseases, ophthalmic surgery, and vision care. Interns gain hands-on experience in diagnosing and managing various ocular conditions and performing ophthalmic procedures."
  }

  const faculty = [
    {
      name: "Prof. Dr. R. Khatun",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCS",
      experience: "20 years",
      specialization: "Retinal Surgery, Vitreoretinal Diseases",
      email: "r.khatun@rcmc.edu.bd",
      phone: "Ext: 3100",
      publications: 32,
      research: "Retinal Diseases, Vitreoretinal Surgery, Diabetic Retinopathy",
      image: "/faculty/r-khatun.jpg"
    },
    {
      name: "Assoc. Prof. Dr. M. Rahman",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS, FRCS",
      experience: "16 years",
      specialization: "Cataract Surgery, Anterior Segment",
      email: "m.rahman@rcmc.edu.bd",
      phone: "Ext: 3101",
      publications: 26,
      research: "Cataract Surgery, Corneal Diseases, Refractive Surgery",
      image: "/faculty/m-rahman.jpg"
    },
    {
      name: "Asst. Prof. Dr. A. Islam",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "12 years",
      specialization: "Glaucoma, Neuro-ophthalmology",
      email: "a.islam@rcmc.edu.bd",
      phone: "Ext: 3102",
      publications: 20,
      research: "Glaucoma Management, Neuro-ophthalmology, Pediatric Ophthalmology",
      image: "/faculty/a-islam.jpg"
    },
    {
      name: "Dr. N. Ahmed",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "8 years",
      specialization: "General Ophthalmology, Ocular Trauma",
      email: "n.ahmed@rcmc.edu.bd",
      phone: "Ext: 3103",
      publications: 14,
      research: "General Ophthalmology, Ocular Trauma, Community Eye Health",
      image: "/faculty/n-ahmed.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Ophthalmology OPD",
      type: "Outpatient Care",
      capacity: 40,
      dailyPatients: "120/day",
      description: "Comprehensive outpatient eye care services",
      facilities: ["Consultation Rooms", "Visual Acuity Testing", "Slit Lamp Examination", "Diagnostic Equipment"],
      commonCases: ["Refractive Errors", "Cataract", "Glaucoma", "Retinal Diseases", "Corneal Disorders"],
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Ophthalmology Ward",
      type: "Inpatient Care",
      capacity: 20,
      beds: 20,
      admissions: "35/month",
      description: "Inpatient care for ophthalmic surgery and serious conditions",
      facilities: ["Private Rooms", "General Ward", "Pre-operative Area", "Post-operative Care"],
      commonCases: ["Post-operative Care", "Ocular Trauma", "Serious Eye Infections", "Complex Surgeries", "Emergency Cases"],
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Operating Theater",
      type: "Surgical Unit",
      capacity: 15,
      dailySurgeries: "25/day",
      description: "Advanced ophthalmic surgical procedures",
      facilities: ["Modern OT", "Phacoemulsification System", "Vitrectomy Machine", "Laser Equipment", "Microscope"],
      commonCases: ["Cataract Surgery", "Glaucoma Surgery", "Retinal Surgery", "Corneal Surgery", "Ocular Trauma Repair"],
      incharge: "Prof. Dr. R. Khatun"
    },
    {
      name: "Diagnostic Unit",
      type: "Diagnostic Unit",
      capacity: 20,
      dailyTests: "80/day",
      description: "Advanced ophthalmic diagnostic services",
      facilities: ["Visual Field Testing", "OCT Scanner", "Fundus Photography", "Ultrasound", "Biometry"],
      commonCases: ["Visual Field Testing", "OCT Scanning", "Fundus Photography", "A-scan/B-scan", "Corneal Topography"],
      incharge: "Assoc. Prof. Dr. M. Rahman"
    },
    {
      name: "Laser Unit",
      type: "Therapeutic Unit",
      capacity: 10,
      dailyProcedures: "30/day",
      description: "Laser treatments for various ophthalmic conditions",
      facilities: ["YAG Laser", "Argon Laser", "SLT Laser", "Laser Room", "Recovery Area"],
      commonCases: ["Post-cataract YAG", "Retinal Laser", "Glaucoma Laser", "Diabetic Retinopathy", "Retinal Tears"],
      incharge: "Asst. Prof. Dr. A. Islam"
    },
    {
      name: "Optical Shop",
      type: "Support Service",
      capacity: 25,
      dailyPatients: "60/day",
      description: "Prescription glasses and contact lens services",
      facilities: ["Refraction Room", "Frame Selection", "Lens Grinding", "Contact Lens Fitting", "Low Vision Aids"],
      commonCases: ["Spectacle Fitting", "Contact Lens", "Low Vision Aids", "Prescription Glasses", "Visual Aids"],
      incharge: "Dr. N. Ahmed"
    }
  ]

  const internshipProgram = [
    {
      name: "OPD Duties",
      duration: "4 Weeks",
      setting: "Ophthalmology OPD",
      responsibilities: ["Patient Consultation", "Visual Acuity Testing", "Slit Lamp Examination", "Refraction"],
      skills: ["Visual Assessment", "Slit Lamp Skills", "Refraction", "Patient Communication", "Documentation"],
      assessment: "Logbook + OPD Skills Assessment",
      supervisor: "Dr. N. Ahmed"
    },
    {
      name: "Ward Duties",
      duration: "2 Weeks",
      setting: "Ophthalmology Ward",
      responsibilities: ["Inpatient Care", "Pre-operative Assessment", "Post-operative Care", "Emergency Management"],
      skills: ["Inpatient Management", "Pre-operative Assessment", "Post-operative Care", "Emergency Response"],
      assessment: "Logbook + Ward Skills Assessment",
      supervisor: "Dr. N. Ahmed"
    },
    {
      name: "Surgical Rotation",
      duration: "3 Weeks",
      setting: "Operating Theater",
      responsibilities: ["Surgical Assistance", "Pre-operative Preparation", "Intra-operative Support", "Post-operative Care"],
      skills: ["Surgical Assistance", "Instrument Handling", "Microsurgery Skills", "Operating Room Protocols"],
      assessment: "Logbook + Surgical Skills Assessment",
      supervisor: "Prof. Dr. R. Khatun"
    },
    {
      name: "Diagnostic Rotation",
      duration: "2 Weeks",
      setting: "Diagnostic Unit",
      responsibilities: ["Diagnostic Testing", "Equipment Operation", "Result Interpretation", "Quality Control"],
      skills: ["Diagnostic Equipment Operation", "Result Interpretation", "Quality Assurance", "Technical Skills"],
      assessment: "Logbook + Diagnostic Skills Assessment",
      supervisor: "Assoc. Prof. Dr. M. Rahman"
    },
    {
      name: "Laser Rotation",
      duration: "1 Week",
      setting: "Laser Unit",
      responsibilities: ["Laser Procedures", "Patient Preparation", "Safety Protocols", "Post-procedure Care"],
      skills: ["Laser Operation", "Safety Protocols", "Patient Preparation", "Laser Techniques"],
      assessment: "Logbook + Laser Skills Assessment",
      supervisor: "Asst. Prof. Dr. A. Islam"
    },
    {
      name: "Optical Rotation",
      duration: "1 Week",
      setting: "Optical Shop",
      responsibilities: ["Refraction", "Spectacle Fitting", "Contact Lens Fitting", "Visual Aid Selection"],
      skills: ["Refraction Skills", "Spectacle Fitting", "Contact Lens Management", "Visual Aid Selection"],
      assessment: "Logbook + Optical Skills Assessment",
      supervisor: "Dr. N. Ahmed"
    }
  ]

  const clinicalSkills = [
    {
      category: "Basic Ophthalmic Skills",
      skills: ["Visual Acuity Testing", "Slit Lamp Examination", "Refraction", "Fundus Examination", "Intraocular Pressure"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "Basic Ophthalmology Certified"
    },
    {
      category: "Diagnostic Skills",
      skills: ["Visual Field Testing", "OCT Interpretation", "Fundus Photography", "Ultrasound", "Biometry"],
      competency: "Required",
      assessment: "Diagnostic Lab + Clinical Performance",
      certification: "Diagnostic Ophthalmology Certified"
    },
    {
      category: "Surgical Skills",
      skills: ["Surgical Assistance", "Microsurgery", "Instrument Handling", "Suture Techniques", "Operating Room Protocols"],
      competency: "Required",
      assessment: "Surgical Skills Lab + Clinical Performance",
      certification: "Surgical Ophthalmology Certified"
    },
    {
      category: "Laser Procedures",
      skills: ["YAG Laser", "Argon Laser", "SLT Laser", "Laser Safety", "Patient Preparation"],
      competency: "Required",
      assessment: "Laser Training + Direct Observation",
      certification: "Laser Procedures Certified"
    },
    {
      category: "Emergency Ophthalmology",
      skills: ["Ocular Trauma Management", "Emergency Assessment", "Acute Eye Conditions", "Emergency Procedures", "Referral"],
      competency: "Required",
      assessment: "Emergency Training + Direct Observation",
      certification: "Emergency Ophthalmology Certified"
    },
    {
      category: "Pediatric Ophthalmology",
      skills: ["Pediatric Assessment", "Childhood Eye Diseases", "Strabismus", "Amblyopia", "Pediatric Surgery"],
      competency: "Required",
      assessment: "Pediatric Training + Clinical Performance",
      certification: "Pediatric Ophthalmology Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Refractive Errors",
      conditions: ["Myopia", "Hyperopia", "Astigmatism", "Presbyopia", "Anisometropia"],
      prevalence: "35%",
      management: ["Spectacles", "Contact Lenses", "Refractive Surgery", "Orthokeratology", "Visual Aids"],
      complications: ["Progressive Myopia", "Amblyopia", "Eye Strain", "Headaches", "Visual Fatigue"]
    },
    {
      category: "Cataract",
      conditions: ["Senile Cataract", "Congenital Cataract", "Traumatic Cataract", "Secondary Cataract", "Complicated Cataract"],
      prevalence: "25%",
      management: ["Phacoemulsification", "Manual Small Incision", "Extracapsular Extraction", "Intraocular Lens", "Post-operative Care"],
      complications: ["Post-operative Infection", "IOL Dislocation", "Cystoid Macular Edema", "Retinal Detachment", "Secondary Cataract"]
    },
    {
      category: "Glaucoma",
      conditions: ["Primary Open Angle", "Angle Closure", "Normal Tension", "Secondary Glaucoma", "Congenital Glaucoma"],
      prevalence: "15%",
      management: ["Medical Treatment", "Laser Treatment", "Surgical Treatment", "Monitoring", "Lifestyle Modification"],
      complications: ["Vision Loss", "Visual Field Defects", "Optic Nerve Damage", "Blindness", "Reduced Quality of Life"]
    },
    {
      category: "Retinal Diseases",
      conditions: ["Diabetic Retinopathy", "Age-related Macular Degeneration", "Retinal Detachment", "Retinal Vascular Diseases", "Inherited Retinal Disorders"],
      prevalence: "15%",
      management: ["Laser Treatment", "Intravitreal Injections", "Vitrectomy", "Medical Management", "Lifestyle Changes"],
      complications: ["Vision Loss", "Blindness", "Macular Scarring", "Vitreous Hemorrhage", "Retinal Scarring"]
    },
    {
      category: "Corneal Diseases",
      conditions: ["Keratoconus", "Corneal Ulcer", "Dry Eye Syndrome", "Corneal Dystrophies", "Corneal Trauma"],
      prevalence: "10%",
      management: ["Medical Treatment", "Contact Lenses", "Corneal Transplant", "Cross-linking", "Artificial Tears"],
      complications: ["Vision Loss", "Corneal Scarring", "Perforation", "Infection", "Visual Impairment"]
    }
  ]

  const procedures = [
    {
      name: "Phacoemulsification",
      description: "Modern cataract surgery using ultrasound to remove cataract",
      type: "Surgical",
      duration: "20-30 minutes",
      anesthesia: "Local/Topical",
      recovery: "1-2 weeks",
      complications: ["Infection", "IOL Dislocation", "Cystoid Macular Edema", "Retinal Detachment"],
      frequency: "Daily"
    },
    {
      name: "YAG Laser Capsulotomy",
      description: "Laser treatment for posterior capsule opacification",
      type: "Laser",
      duration: "5-10 minutes",
      anesthesia: "Topical",
      recovery: "Immediate",
      complications: ["IOL Damage", "Retinal Detachment", "Floaters", "Transient IOP Rise"],
      frequency: "Daily"
    },
    {
      name: "Argon Laser Photocoagulation",
      description: "Laser treatment for retinal diseases",
      type: "Laser",
      duration: "15-30 minutes",
      anesthesia: "Topical",
      recovery: "Immediate",
      complications: ["Scotoma", "Burns", "Choroidal Neovascularization", "Visual Field Loss"],
      frequency: "Weekly"
    },
    {
      name: "Trabeculectomy",
      description: "Surgical treatment for glaucoma",
      type: "Surgical",
      duration: "45-60 minutes",
      anesthesia: "Local",
      recovery: "4-6 weeks",
      complications: ["Bleeding", "Infection", "Hypotony", "Cataract Formation", "Filter Failure"],
      frequency: "Weekly"
    },
    {
      name: "Pars Plana Vitrectomy",
      description: "Surgical treatment for vitreoretinal diseases",
      type: "Surgical",
      duration: "60-120 minutes",
      anesthesia: "Local/General",
      recovery: "4-8 weeks",
      complications: ["Cataract", "Retinal Detachment", "Infection", "Bleeding", "IOP Rise"],
      frequency: "Monthly"
    },
    {
      name: "Corneal Transplant",
      description: "Surgical replacement of diseased cornea",
      type: "Surgical",
      duration: "60-90 minutes",
      anesthesia: "Local/General",
      recovery: "6-12 months",
      complications: ["Graft Rejection", "Infection", "Graft Failure", "Astigmatism", "Suture Complications"],
      frequency: "Monthly"
    }
  ]

  const protocols = [
    {
      name: "Cataract Surgery Protocol",
      description: "Standardized protocol for cataract assessment and surgery",
      steps: ["Pre-operative Assessment", "Biometry", "IOL Calculation", "Surgical Planning", "Post-operative Care"],
      frequency: "Every Cataract Case",
      documentation: "Cataract Registry",
      quality: "Surgical Guidelines"
    },
    {
      name: "Glaucoma Management Protocol",
      description: "Comprehensive protocol for glaucoma diagnosis and management",
      steps: ["Screening", "Diagnosis", "Treatment Planning", "Monitoring", "Surgical Intervention"],
      frequency: "Every Glaucoma Case",
      documentation: "Glaucoma Registry",
      quality: "Glaucoma Guidelines"
    },
    {
      name: "Diabetic Retinopathy Protocol",
      description: "Protocol for diabetic retinopathy screening and management",
      steps: ["Screening", "Grading", "Treatment Planning", "Laser Treatment", "Follow-up"],
      frequency: "Every Diabetic Patient",
      documentation: "Diabetic Registry",
      quality: "Diabetic Guidelines"
    },
    {
      name: "Ocular Trauma Protocol",
      description: "Protocol for ocular trauma assessment and management",
      steps: ["Emergency Assessment", "Imaging", "Surgical Planning", "Repair", "Rehabilitation"],
      frequency: "Every Trauma Case",
      documentation: "Trauma Registry",
      quality: "Trauma Guidelines"
    },
    {
      name: "Pediatric Ophthalmology Protocol",
      description: "Protocol for pediatric eye examination and management",
      steps: ["Screening", "Examination", "Diagnosis", "Treatment", "Follow-up"],
      frequency: "Every Pediatric Case",
      documentation: "Pediatric Registry",
      quality: "Pediatric Guidelines"
    }
  ]

  const researchProjects = [
    {
      title: "Diabetic Retinopathy Outcomes Study",
      principalInvestigator: "Prof. Dr. R. Khatun",
      coInvestigators: ["Assoc. Prof. Dr. M. Rahman", "Dr. N. Ahmed"],
      duration: "2024-2026",
      funding: "BDT 550,000",
      status: "Ongoing",
      description: "Study of treatment outcomes in diabetic retinopathy patients.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Cataract Surgery Quality Study",
      principalInvestigator: "Assoc. Prof. Dr. M. Rahman",
      coInvestigators: ["Prof. Dr. R. Khatun"],
      duration: "2023-2025",
      funding: "BDT 450,000",
      status: "Ongoing",
      description: "Study of cataract surgery outcomes and quality improvement.",
      publications: 1,
      impact: "High"
    },
    {
      title: "Glaucoma Registry Study",
      principalInvestigator: "Asst. Prof. Dr. A. Islam",
      coInvestigators: ["Prof. Dr. R. Khatun"],
      duration: "2024-2027",
      funding: "BDT 400,000",
      status: "Starting",
      description: "Study of glaucoma management outcomes and disease progression.",
      publications: 0,
      impact: "Medium"
    }
  ]

  const achievements = [
    {
      title: "Best Ophthalmology Department Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding ophthalmic care and surgical outcomes.",
      impact: "High"
    },
    {
      title: "Cataract Surgery Excellence Award",
      year: "2023",
      category: "Surgical Excellence",
      description: "Awarded for exceptional cataract surgery outcomes and volume.",
      impact: "High"
    },
    {
      title: "Diabetic Retinopathy Care Excellence",
      year: "2023",
      category: "Specialty Excellence",
      description: "Recognized for excellence in diabetic retinopathy management.",
      impact: "High"
    },
    {
      title: "Community Eye Health Award",
      year: "2022",
      category: "Community Service",
      description: "Awarded for outstanding community eye health initiatives.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Ophthalmology Workshop 2024",
      date: "2025-01-09",
      time: "9:00 AM - 5:00 PM",
      venue: "Ophthalmology Department",
      type: "Workshop",
      organizer: "Prof. Dr. R. Khatun",
      participants: "Ophthalmology Professionals",
      description: "Annual workshop on recent advances in ophthalmology and eye surgery."
    },
    {
      title: "Phacoemulsification Training",
      date: "2025-01-12",
      time: "10:00 AM - 4:00 PM",
      venue: "Operating Theater",
      type: "Training",
      organizer: "Assoc. Prof. Dr. M. Rahman",
      participants: "Healthcare Workers",
      description: "Hands-on training for phacoemulsification surgery techniques."
    },
    {
      title: "Glaucoma Update Conference",
      date: "2025-01-15",
      time: "2:00 PM - 5:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Asst. Prof. Dr. A. Islam",
      participants: "Healthcare Professionals",
      description: "Conference on latest updates in glaucoma diagnosis and management."
    }
  ]

  const resources = [
    {
      title: "Ophthalmology Internship Manual",
      description: "Comprehensive guide for ophthalmology internship training and procedures",
      type: "PDF",
      size: "9.5 MB",
      downloadCount: 1300,
      category: "Manual"
    },
    {
      title: "Cataract Surgery Guidelines",
      description: "Complete guidelines for cataract assessment and surgical management",
      type: "PDF",
      size: "7.2 MB",
      downloadCount: 1900,
      category: "Guidelines"
    },
    {
      title: "Ophthalmic Surgery Atlas",
      description: "Comprehensive atlas of ophthalmic surgical procedures and techniques",
      type: "PDF",
      size: "28.5 MB",
      downloadCount: 2400,
      category: "Atlas"
    },
    {
      title: "Ophthalmology Procedure Videos",
      description: "Demonstration videos of ophthalmic procedures and surgical techniques",
      type: "Video",
      size: "1.8 GB",
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
                <EyeIcon2 className="w-12 h-12 text-blue-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Ophthalmology - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Eye Care and Vision Surgery</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Vision Care Excellence</div>
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
                  <div className="text-sm text-gray-600">Eye Care Beds</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MonitorIcon className="w-8 h-8 text-blue-600" />
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Eye Conditions</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Ophthalmic Procedures</h2>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Ophthalmology Resources</h2>
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
