"use client"

import React, { useState, useEffect } from "react"
import { Search, Phone, Mail, MapPin, Calendar, Clock, Star, Award, Building, Bed, Shield, Heart, Brain, Eye, Stethoscope, Activity, ChevronRight, ArrowRight, CheckCircle, TrendingUp, BarChart3, FileText, Download, ExternalLink, Users, PhoneCall, MessageCircle, GraduationCap, Briefcase, Filter, ChevronDown, ChevronUp, X, FilterIcon, BookOpen, Globe, Linkedin, Twitter, Facebook, Instagram, Youtube, Video, Camera, PenTool, Languages, Award as AwardIcon, Syringe, Pill, Microscope, Thermometer, User, Users2, Shield as ShieldIcon, Heart as HeartIcon, Brain as BrainIcon, Eye as EyeIcon, Stethoscope as StethoscopeIcon, Syringe as SyringeIcon, Pill as PillIcon, Microscope as MicroscopeIcon, Thermometer as ThermometerIcon, FileText as FileTextIcon, Download as DownloadIcon, ExternalLink as ExternalLinkIcon, MessageSquare, ThumbsUp, Bookmark, Share2, ChevronLeft, ChevronRight as ChevronRightIcon, Info, AlertCircle, CheckCircle as CheckCircleIcon, TestTube } from "lucide-react"

interface Department {
  id: string
  name: string
  code: string
  description: string
  head: string
  headTitle: string
  contact: {
    phone: string
    email: string
    location: string
    extension: string
  }
  beds: {
    total: number
    available: number
    occupied: number
    icu: number
    general: number
    private: number
  }
  staff: {
    doctors: number
    nurses: number
    technicians: number
    admin: number
  }
  services: string[]
  specialties: string[]
  equipment: string[]
  timings: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
  }
  emergency: boolean
  appointmentRequired: boolean
  icon: string
  color: string
  establishedYear: number
  annualPatients: number
  successRate: number
  averageStay: number
  procedures: number
  featured: boolean
  achievements: string[]
  researchAreas: string[]
  accreditation: string[]
  internationalServices: boolean
}

const departments: Department[] = [
  {
    id: "1",
    name: "Emergency Medicine",
    code: "EM",
    description: "24/7 emergency care and trauma services with dedicated trauma team and critical care unit",
    head: "Dr. A. K. M. Fazlul Haque",
    headTitle: "Professor & Head of Emergency Medicine",
    contact: {
      phone: "+880-2-12345678",
      email: "emergency@rcmc.edu.bd",
      location: "Ground Floor, Main Hospital Building",
      extension: "101"
    },
    beds: {
      total: 30,
      available: 12,
      occupied: 18,
      icu: 10,
      general: 15,
      private: 5
    },
    staff: {
      doctors: 12,
      nurses: 45,
      technicians: 8,
      admin: 3
    },
    services: ["Emergency Care", "Trauma Management", "Critical Care", "Emergency Surgery", "Ambulance Services", "Emergency Medicine"],
    specialties: ["Trauma Care", "Critical Care", "Emergency Surgery", "Disaster Medicine", "Acute Medicine"],
    equipment: ["Ventilators", "Monitors", "Defibrillators", "X-ray", "Ultrasound", "CT Scanner"],
    timings: {
      monday: "24 Hours",
      tuesday: "24 Hours",
      wednesday: "24 Hours",
      thursday: "24 Hours",
      friday: "24 Hours",
      saturday: "24 Hours",
      sunday: "24 Hours"
    },
    emergency: true,
    appointmentRequired: false,
    icon: "shield",
    color: "red",
    establishedYear: 2008,
    annualPatients: 45000,
    successRate: 96.5,
    averageStay: 2.8,
    procedures: 15000,
    featured: true,
    achievements: ["Best Emergency Department Award 2023", "Trauma Center Excellence Award"],
    researchAreas: ["Emergency Medicine", "Trauma Care", "Critical Care"],
    accreditation: ["BMDC", "WHO"],
    internationalServices: true
  },
  {
    id: "2",
    name: "Cardiology",
    code: "CARD",
    description: "Comprehensive cardiac care and cardiovascular services including interventional procedures and cardiac surgery",
    head: "Prof. Dr. M. A. Karim",
    headTitle: "Professor & Head of Cardiology",
    contact: {
      phone: "+880-2-12345679",
      email: "cardiology@rcmc.edu.bd",
      location: "3rd Floor, Block A",
      extension: "201"
    },
    beds: {
      total: 80,
      available: 25,
      occupied: 55,
      icu: 20,
      general: 40,
      private: 20
    },
    staff: {
      doctors: 15,
      nurses: 60,
      technicians: 12,
      admin: 5
    },
    services: ["Cardiac Consultation", "ECG", "Echocardiography", "Stress Test", "Cardiac Catheterization", "Angioplasty"],
    specialties: ["Interventional Cardiology", "Cardiac Surgery", "Heart Failure", "Arrhythmia", "Preventive Cardiology"],
    equipment: ["ECG Machines", "Echocardiography", "Stress Test Equipment", "Cath Lab", "ICU Monitors", "Defibrillators"],
    timings: {
      monday: "8:00 AM - 8:00 PM",
      tuesday: "8:00 AM - 8:00 PM",
      wednesday: "8:00 AM - 8:00 PM",
      thursday: "8:00 AM - 8:00 PM",
      friday: "8:00 AM - 8:00 PM",
      saturday: "8:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    emergency: true,
    appointmentRequired: true,
    icon: "heart",
    color: "red",
    establishedYear: 2008,
    annualPatients: 35000,
    successRate: 98.2,
    averageStay: 4.5,
    procedures: 12000,
    featured: true,
    achievements: ["Best Cardiology Department 2022", "Excellence in Cardiac Care"],
    researchAreas: ["Interventional Cardiology", "Heart Failure", "Cardiac Imaging"],
    accreditation: ["BMDC", "American Heart Association"],
    internationalServices: true
  },
  {
    id: "3",
    name: "Neurology",
    code: "NEURO",
    description: "Diagnosis and treatment of neurological disorders including stroke, epilepsy, and neurocritical care",
    head: "Dr. S. R. Ahmed",
    headTitle: "Associate Professor & Head",
    contact: {
      phone: "+880-2-12345680",
      email: "neurology@rcmc.edu.bd",
      location: "4th Floor, Block B",
      extension: "301"
    },
    beds: {
      total: 60,
      available: 20,
      occupied: 40,
      icu: 15,
      general: 35,
      private: 10
    },
    staff: {
      doctors: 10,
      nurses: 40,
      technicians: 8,
      admin: 3
    },
    services: ["Neurological Consultation", "EEG", "EMG", "Nerve Conduction Study", "Evoked Potentials", "Sleep Study"],
    specialties: ["Stroke Care", "Epilepsy", "Movement Disorders", "Neurocritical Care", "Neuroimaging"],
    equipment: ["EEG Machines", "EMG Equipment", "CT Scanner", "MRI", "Ultrasound", "Neuro Monitors"],
    timings: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 5:00 PM",
      saturday: "9:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    emergency: true,
    appointmentRequired: true,
    icon: "brain",
    color: "purple",
    establishedYear: 2010,
    annualPatients: 18000,
    successRate: 94.8,
    averageStay: 5.2,
    procedures: 8000,
    featured: false,
    achievements: ["Stroke Center of Excellence", "Best Neurology Department 2021"],
    researchAreas: ["Stroke Medicine", "Epilepsy", "Movement Disorders"],
    accreditation: ["BMDC", "International Stroke Organization"],
    internationalServices: false
  },
  {
    id: "4",
    name: "Obstetrics & Gynecology",
    code: "OBGYN",
    description: "Women's health and maternity care services including high-risk pregnancy and gynecological surgery",
    head: "Dr. N. K. Begum",
    headTitle: "Professor & Head of OBGYN",
    contact: {
      phone: "+880-2-12345681",
      email: "obgyn@rcmc.edu.bd",
      location: "2nd Floor, Block C",
      extension: "401"
    },
    beds: {
      total: 100,
      available: 35,
      occupied: 65,
      icu: 20,
      general: 60,
      private: 20
    },
    staff: {
      doctors: 18,
      nurses: 80,
      technicians: 15,
      admin: 6
    },
    services: ["Maternity Care", "High-Risk Pregnancy", "Gynecological Surgery", "Infertility", "Family Planning", "Prenatal Care"],
    specialties: ["High-Risk Pregnancy", "Infertility", "Gynecological Oncology", "Laparoscopic Surgery", "Menopause"],
    equipment: ["Ultrasound", "Fetal Monitors", "Labor Tables", "NICU Equipment", "Surgical Instruments", "Mammography"],
    timings: {
      monday: "8:30 AM - 4:30 PM",
      tuesday: "8:30 AM - 4:30 PM",
      wednesday: "8:30 AM - 4:30 PM",
      thursday: "8:30 AM - 4:30 PM",
      friday: "8:30 AM - 4:30 PM",
      saturday: "8:30 AM - 1:30 PM",
      sunday: "Closed"
    },
    emergency: true,
    appointmentRequired: true,
    icon: "users",
    color: "pink",
    establishedYear: 2008,
    annualPatients: 25000,
    successRate: 97.8,
    averageStay: 3.5,
    procedures: 3500,
    featured: false,
    achievements: ["Best Maternity Care Award 2023", "Women's Health Excellence"],
    researchAreas: ["Maternal Health", "High-Risk Pregnancy", "Gynecological Oncology"],
    accreditation: ["BMDC", "WHO"],
    internationalServices: true
  },
  {
    id: "5",
    name: "Pediatrics",
    code: "PED",
    description: "Comprehensive healthcare for children and adolescents including neonatology and pediatric surgery",
    head: "Dr. M. R. Khan",
    headTitle: "Professor & Head of Pediatrics",
    contact: {
      phone: "+880-2-12345682",
      email: "pediatrics@rcmc.edu.bd",
      location: "1st Floor, Block D",
      extension: "501"
    },
    beds: {
      total: 70,
      available: 22,
      occupied: 48,
      icu: 25,
      general: 35,
      private: 10
    },
    staff: {
      doctors: 14,
      nurses: 55,
      technicians: 10,
      admin: 4
    },
    services: ["Child Healthcare", "Neonatology", "Pediatric Surgery", "Vaccination", "Growth Monitoring", "Child Nutrition"],
    specialties: ["Neonatology", "Pediatric Cardiology", "Pediatric Surgery", "Pediatric Neurology", "Child Development"],
    equipment: ["NICU Equipment", "Incubators", "Ventilators", "Child Monitors", "Vaccination Equipment", "Growth Charts"],
    timings: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 5:00 PM",
      saturday: "9:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    emergency: true,
    appointmentRequired: true,
    icon: "users",
    color: "blue",
    establishedYear: 2009,
    annualPatients: 30000,
    successRate: 98.5,
    averageStay: 3.2,
    procedures: 5000,
    featured: false,
    achievements: ["Best Pediatric Department 2022", "Child Healthcare Excellence"],
    researchAreas: ["Neonatology", "Pediatric Nutrition", "Child Development"],
    accreditation: ["BMDC", "UNICEF"],
    internationalServices: false
  },
  {
    id: "6",
    name: "Surgery",
    code: "SURG",
    description: "General and specialized surgical services including laparoscopic surgery and trauma surgery",
    head: "Dr. A. H. M. R. Khan",
    headTitle: "Professor & Head of Surgery",
    contact: {
      phone: "+880-2-12345683",
      email: "surgery@rcmc.edu.bd",
      location: "5th Floor, Block E",
      extension: "601"
    },
    beds: {
      total: 90,
      available: 30,
      occupied: 60,
      icu: 25,
      general: 50,
      private: 15
    },
    staff: {
      doctors: 16,
      nurses: 70,
      technicians: 20,
      admin: 5
    },
    services: ["General Surgery", "Laparoscopic Surgery", "Onco Surgery", "Plastic Surgery", "Trauma Surgery", "Day Care Surgery"],
    specialties: ["General Surgery", "Laparoscopic Surgery", "Onco Surgery", "Plastic Surgery", "Vascular Surgery"],
    equipment: ["Operating Theaters", "Laparoscopic Equipment", "Surgical Instruments", "Anesthesia Machines", "Recovery Rooms"],
    timings: {
      monday: "8:00 AM - 8:00 PM",
      tuesday: "8:00 AM - 8:00 PM",
      wednesday: "8:00 AM - 8:00 PM",
      thursday: "8:00 AM - 8:00 PM",
      friday: "8:00 AM - 8:00 PM",
      saturday: "8:00 AM - 2:00 PM",
      sunday: "Closed"
    },
    emergency: true,
    appointmentRequired: true,
    icon: "stethoscope",
    color: "green",
    establishedYear: 2008,
    annualPatients: 20000,
    successRate: 97.2,
    averageStay: 4.8,
    procedures: 12000,
    featured: false,
    achievements: ["Surgical Excellence Award 2023", "Best Surgery Department"],
    researchAreas: ["Minimally Invasive Surgery", "Surgical Oncology", "Trauma Surgery"],
    accreditation: ["BMDC", "Royal College of Surgeons"],
    internationalServices: true
  },
  {
    id: "7",
    name: "Anesthesiology",
    code: "ANES",
    description: "Anesthesia services for all surgical procedures and pain management services",
    head: "Dr. M. A. Salam",
    headTitle: "Professor & Head of Anesthesiology",
    contact: {
      phone: "+880-2-12345684",
      email: "anesthesia@rcmc.edu.bd",
      location: "4th Floor, Block F",
      extension: "701"
    },
    beds: {
      total: 20,
      available: 8,
      occupied: 12,
      icu: 10,
      general: 8,
      private: 2
    },
    staff: {
      doctors: 8,
      nurses: 25,
      technicians: 6,
      admin: 2
    },
    services: ["General Anesthesia", "Regional Anesthesia", "Pain Management", "ICU Care", "Pre-anesthesia Assessment", "Post-anesthesia Care"],
    specialties: ["General Anesthesia", "Regional Anesthesia", "Pain Management", "Critical Care Anesthesia"],
    equipment: ["Anesthesia Machines", "Ventilators", "Monitors", "Pain Management Equipment", "ICU Equipment"],
    timings: {
      monday: "24 Hours",
      tuesday: "24 Hours",
      wednesday: "24 Hours",
      thursday: "24 Hours",
      friday: "24 Hours",
      saturday: "24 Hours",
      sunday: "24 Hours"
    },
    emergency: true,
    appointmentRequired: false,
    icon: "shield",
    color: "indigo",
    establishedYear: 2008,
    annualPatients: 15000,
    successRate: 99.5,
    averageStay: 1.5,
    procedures: 8000,
    featured: false,
    achievements: ["Anesthesia Excellence Award", "Pain Management Center"],
    researchAreas: ["Anesthesia Techniques", "Pain Management", "Critical Care"],
    accreditation: ["BMDC", "American Society of Anesthesiologists"],
    internationalServices: false
  },
  {
    id: "8",
    name: "Radiology",
    code: "RAD",
    description: "Advanced diagnostic imaging services including X-ray, CT, MRI, and ultrasound",
    head: "Dr. R. Islam",
    headTitle: "Professor & Head of Radiology",
    contact: {
      phone: "+880-2-12345685",
      email: "radiology@rcmc.edu.bd",
      location: "Ground Floor, Diagnostic Center",
      extension: "801"
    },
    beds: {
      total: 10,
      available: 5,
      occupied: 5,
      icu: 2,
      general: 6,
      private: 2
    },
    staff: {
      doctors: 8,
      nurses: 20,
      technicians: 15,
      admin: 3
    },
    services: ["X-Ray", "CT Scan", "MRI", "Ultrasound", "Mammography", "DEXA Scan", "Interventional Radiology"],
    specialties: ["Diagnostic Radiology", "Interventional Radiology", "Neuroradiology", "Body Imaging"],
    equipment: ["X-Ray Machines", "CT Scanner", "MRI Machine", "Ultrasound", "Mammography", "DEXA Scanner"],
    timings: {
      monday: "8:00 AM - 10:00 PM",
      tuesday: "8:00 AM - 10:00 PM",
      wednesday: "8:00 AM - 10:00 PM",
      thursday: "8:00 AM - 10:00 PM",
      friday: "8:00 AM - 10:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "8:00 AM - 2:00 PM"
    },
    emergency: true,
    appointmentRequired: true,
    icon: "microscope",
    color: "blue",
    establishedYear: 2008,
    annualPatients: 50000,
    successRate: 99.8,
    averageStay: 0.5,
    procedures: 25000,
    featured: false,
    achievements: ["Radiology Excellence Award", "Best Diagnostic Center"],
    researchAreas: ["Medical Imaging", "Interventional Radiology", "Diagnostic Accuracy"],
    accreditation: ["BMDC", "American College of Radiology"],
    internationalServices: true
  },
  {
    id: "9",
    name: "Pathology",
    code: "PATH",
    description: "Comprehensive laboratory diagnostics including hematology, biochemistry, and microbiology",
    head: "Dr. S. K. Rahman",
    headTitle: "Professor & Head of Pathology",
    contact: {
      phone: "+880-2-12345686",
      email: "pathology@rcmc.edu.bd",
      location: "1st Floor, Laboratory Building",
      extension: "901"
    },
    beds: {
      total: 5,
      available: 2,
      occupied: 3,
      icu: 1,
      general: 3,
      private: 1
    },
    staff: {
      doctors: 10,
      nurses: 30,
      technicians: 25,
      admin: 4
    },
    services: ["Blood Tests", "Urine Tests", "Biopsy", "Histopathology", "Microbiology", "Molecular Diagnostics"],
    specialties: ["Clinical Pathology", "Anatomical Pathology", "Microbiology", "Molecular Diagnostics"],
    equipment: ["Analyzers", "Microscopes", "Culture Media", "PCR Machines", "Histology Equipment"],
    timings: {
      monday: "7:00 AM - 10:00 PM",
      tuesday: "7:00 AM - 10:00 PM",
      wednesday: "7:00 AM - 10:00 PM",
      thursday: "7:00 AM - 10:00 PM",
      friday: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 8:00 PM",
      sunday: "7:00 AM - 2:00 PM"
    },
    emergency: true,
    appointmentRequired: false,
    icon: "testtube",
    color: "green",
    establishedYear: 2008,
    annualPatients: 80000,
    successRate: 99.9,
    averageStay: 0.2,
    procedures: 100000,
    featured: false,
    achievements: ["Laboratory Excellence Award", "Best Pathology Department"],
    researchAreas: ["Clinical Pathology", "Molecular Diagnostics", "Microbiology"],
    accreditation: ["BMDC", "College of American Pathologists"],
    internationalServices: true
  },
  {
    id: "10",
    name: "Pharmacy",
    code: "PHARM",
    description: "24/7 pharmacy services with complete medication supply and clinical pharmacy services",
    head: "Dr. A. K. M. Salam",
    headTitle: "Chief Pharmacist",
    contact: {
      phone: "+880-2-12345687",
      email: "pharmacy@rcmc.edu.bd",
      location: "Ground Floor, Main Building",
      extension: "1001"
    },
    beds: {
      total: 0,
      available: 0,
      occupied: 0,
      icu: 0,
      general: 0,
      private: 0
    },
    staff: {
      doctors: 2,
      nurses: 5,
      technicians: 20,
      admin: 3
    },
    services: ["Medication Dispensing", "Drug Information", "Clinical Pharmacy", "Compounding", "Vaccination", "Medication Review"],
    specialties: ["Clinical Pharmacy", "Hospital Pharmacy", "Compounding", "Drug Information"],
    equipment: ["Dispensing Systems", "Compounding Equipment", "Drug Storage", "Quality Control Equipment"],
    timings: {
      monday: "24 Hours",
      tuesday: "24 Hours",
      wednesday: "24 Hours",
      thursday: "24 Hours",
      friday: "24 Hours",
      saturday: "24 Hours",
      sunday: "24 Hours"
    },
    emergency: true,
    appointmentRequired: false,
    icon: "pill",
    color: "orange",
    establishedYear: 2008,
    annualPatients: 100000,
    successRate: 100,
    averageStay: 0.1,
    procedures: 500000,
    featured: false,
    achievements: ["Pharmacy Excellence Award", "Best Hospital Pharmacy"],
    researchAreas: ["Clinical Pharmacy", "Drug Information", "Pharmacoeconomics"],
    accreditation: ["BMDC", "Pharmacy Council"],
    internationalServices: false
  }
]

export default function HospitalDepartmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null)
  const [showDepartmentDetails, setShowDepartmentDetails] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const getDepartmentIcon = (iconName: string) => {
    switch (iconName) {
      case "shield":
        return <ShieldIcon className="h-8 w-8" />
      case "heart":
        return <HeartIcon className="h-8 w-8" />
      case "brain":
        return <BrainIcon className="h-8 w-8" />
      case "users":
        return <Users className="h-8 w-8" />
      case "stethoscope":
        return <StethoscopeIcon className="h-8 w-8" />
      case "microscope":
        return <MicroscopeIcon className="h-8 w-8" />
      case "testtube":
        return <TestTube className="h-8 w-8" />
      case "pill":
        return <PillIcon className="h-8 w-8" />
      default:
        return <Building className="h-8 w-8" />
    }
  }

  const getDepartmentColor = (color: string) => {
    switch (color) {
      case "red":
        return "bg-red-100 text-red-700 border-red-200"
      case "blue":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "green":
        return "bg-green-100 text-green-700 border-green-200"
      case "purple":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "pink":
        return "bg-pink-100 text-pink-700 border-pink-200"
      case "orange":
        return "bg-orange-100 text-orange-700 border-orange-200"
      case "indigo":
        return "bg-indigo-100 text-indigo-700 border-indigo-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const handleDepartmentClick = (department: Department) => {
    setSelectedDepartment(department)
    setShowDepartmentDetails(true)
  }

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.head.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#FBFCFC] text-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">

            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hospital Departments</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our comprehensive medical departments providing specialized healthcare services
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                <Building className="h-4 w-4" />
                <span className="text-xl">{departments.length}</span>
              </div>
              <p className="text-xs text-gray-600">Departments</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                <Bed className="h-4 w-4" />
                <span className="text-xl">{departments.reduce((sum, d) => sum + d.beds.total, 0)}</span>
              </div>
              <p className="text-xs text-gray-600">Total Beds</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold">
                <Users className="h-4 w-4" />
                <span className="text-xl">{departments.reduce((sum, d) => sum + d.staff.doctors, 0)}</span>
              </div>
              <p className="text-xs text-gray-600">Doctors</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
                <Shield className="h-4 w-4" />
                <span className="text-xl">{departments.filter(d => d.emergency).length}</span>
              </div>
              <p className="text-xs text-gray-600">24/7 Services</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
                <TrendingUp className="h-4 w-4" />
                <span className="text-xl">{Math.round(departments.reduce((sum, d) => sum + d.successRate, 0) / departments.length)}%</span>
              </div>
              <p className="text-xs text-gray-600">Avg Success Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-indigo-600 font-semibold">
                <Users className="h-4 w-4" />
                <span className="text-xl">{(departments.reduce((sum, d) => sum + d.annualPatients, 0) / 1000).toFixed(0)}K</span>
              </div>
              <p className="text-xs text-gray-600">Annual Patients</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search departments by name, description, services, or head..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-gray-300 text-gray-800"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2 h-2 bg-current rounded-sm"></div>
                  <div className="w-2 h-2 bg-current rounded-sm"></div>
                  <div className="w-2 h-2 bg-current rounded-sm"></div>
                  <div className="w-2 h-2 bg-current rounded-sm"></div>
                </div>
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-gray-300 text-black"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="space-y-1">
                  <div className="w-6 h-1 bg-current rounded-sm"></div>
                  <div className="w-6 h-1 bg-current rounded-sm"></div>
                  <div className="w-6 h-1 bg-current rounded-sm"></div>
                </div>
                List
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Departments ({filteredDepartments.length} departments found)
                </h2>
                <div className="text-sm text-gray-600">
                  {filteredDepartments.length} departments available
                </div>
              </div>
            </div>

            {/* Grid View */}
            {viewMode === "grid" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {filteredDepartments.map((department) => (
                  <div
                    key={department.id}
                    className="bg-white border rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                    onClick={() => handleDepartmentClick(department)}
                  >
                    {/* Department Header */}
                    <div className="relative h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-t-2xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-t-2xl"></div>
                      <div className="relative z-10 flex items-center justify-center h-full">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getDepartmentColor(department.color)}`}>
                          {getDepartmentIcon(department.icon)}
                        </div>
                        {department.emergency && (
                          <div className="absolute top-4 right-4">
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-500 text-white rounded-full text-xs font-semibold">
                              <Shield className="h-3 w-3" />
                              24/7
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Department Content */}
                    <div className="p-6">
                      {/* Name and Head */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {department.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">{department.headTitle}</p>
                        <p className="text-sm text-gray-700">{department.head}</p>
                      </div>

                      {/* Description */}
                      <div className="mb-4">
                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{department.description}</p>
                      </div>

                      {/* Key Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <Bed className="h-4 w-4" />
                            <span className="text-xs font-medium">Beds</span>
                          </div>
                          <div className="text-lg font-bold text-blue-600">{department.beds.total}</div>
                          <div className="text-xs text-gray-500">{department.beds.available} available</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <Users className="h-4 w-4" />
                            <span className="text-xs font-medium">Staff</span>
                          </div>
                          <div className="text-lg font-bold text-green-600">{department.staff.doctors + department.staff.nurses}</div>
                          <div className="text-xs text-gray-500">{department.staff.doctors} doctors</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <TrendingUp className="h-4 w-4" />
                            <span className="text-xs font-medium">Success Rate</span>
                          </div>
                          <div className="text-lg font-bold text-purple-600">{department.successRate}%</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <Users className="h-4 w-4" />
                            <span className="text-xs font-medium">Annual Patients</span>
                          </div>
                          <div className="text-lg font-bold text-orange-600">{(department.annualPatients / 1000).toFixed(0)}K</div>
                        </div>
                      </div>

                      {/* Services */}
                      <div className="mb-4">
                        <div className="text-sm text-gray-600 mb-2">Key Services</div>
                        <div className="flex flex-wrap gap-1">
                          {department.services.slice(0, 4).map((service, index) => (
                            <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              {service}
                            </span>
                          ))}
                          {department.services.length > 4 && (
                            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              +{department.services.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>{department.contact.phone}</span>
                          </div>
                        </div>
                        <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                          View Details
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* List View */}
            {viewMode === "list" && (
              <div className="divide-y divide-gray-100">
                {filteredDepartments.map((department) => (
                  <div
                    key={department.id}
                    className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => handleDepartmentClick(department)}
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${getDepartmentColor(department.color)}`}>
                        {getDepartmentIcon(department.icon)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{department.name}</h3>
                            <p className="text-sm text-gray-600">{department.headTitle}</p>
                            <p className="text-sm text-gray-700">{department.head}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {department.emergency && (
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-500 text-white rounded-full text-xs font-semibold">
                                <Shield className="h-3 w-3" />
                                24/7
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{department.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Bed className="h-4 w-4" />
                            <span>{department.beds.total} beds ({department.beds.available} available)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="h-4 w-4" />
                            <span>{department.staff.doctors} doctors, {department.staff.nurses} nurses</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <TrendingUp className="h-4 w-4" />
                            <span>{department.successRate}% success rate</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="h-4 w-4" />
                            <span>{(department.annualPatients / 1000).toFixed(0)}K annual patients</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              <span>{department.contact.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              <span>{department.contact.email}</span>
                            </div>
                          </div>
                          <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                            View Details
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Department Details Modal */}
      {showDepartmentDetails && selectedDepartment && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Department Details</h2>
                <button
                  onClick={() => setShowDepartmentDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Department Header */}
                <div className="border-b pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-20 h-20 rounded-xl flex items-center justify-center ${getDepartmentColor(selectedDepartment.color)}`}>
                      {getDepartmentIcon(selectedDepartment.icon)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedDepartment.name}</h3>
                      <p className="text-lg text-gray-600 mb-1">{selectedDepartment.description}</p>
                      <div className="flex items-center gap-2">
                        {selectedDepartment.emergency && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-500 text-white rounded-full text-sm font-semibold">
                            <Shield className="h-3 w-3" />
                            24/7 Emergency
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Department Head */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Department Head</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium text-gray-900">{selectedDepartment.head}</div>
                      <div className="text-sm text-gray-600">{selectedDepartment.headTitle}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{selectedDepartment.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{selectedDepartment.contact.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{selectedDepartment.contact.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Bed className="h-4 w-4" />
                      <span className="text-sm font-medium">Bed Capacity</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{selectedDepartment.beds.total}</div>
                    <div className="text-xs text-gray-500">{selectedDepartment.beds.available} available</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-medium">Medical Staff</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">{selectedDepartment.staff.doctors + selectedDepartment.staff.nurses}</div>
                    <div className="text-xs text-gray-500">{selectedDepartment.staff.doctors} doctors</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-medium">Success Rate</span>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">{selectedDepartment.successRate}%</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-medium">Annual Patients</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">{(selectedDepartment.annualPatients / 1000).toFixed(0)}K</div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Services</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedDepartment.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timings */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Department Timings</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-2 text-sm">
                      {Object.entries(selectedDepartment.timings).map(([day, timing]) => (
                        <div key={day} className="text-center">
                          <div className="font-medium text-gray-900 capitalize">{day.slice(0, 3)}</div>
                          <div className="text-gray-600">{timing}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                {selectedDepartment.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Achievements</h4>
                    <div className="space-y-2">
                      {selectedDepartment.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <AwardIcon className="h-4 w-4 text-yellow-500" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
