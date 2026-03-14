"use client"

import React, { useState, useEffect } from "react"
import { Search, Calendar, Clock, Users, Phone, Mail, MapPin, Filter, ChevronDown, ChevronUp, X, CheckCircle, AlertCircle, Star, Award, Building, Bed, Shield, Heart, Brain, Eye, Stethoscope, Activity, ChevronRight, ArrowRight, TrendingUp, BarChart3, FileText, Download, ExternalLink, User, PhoneCall, MessageCircle, GraduationCap, Briefcase, UserCheck, Activity as ActivityIcon, Award as AwardIcon, BarChart as BarChartIcon, TrendingUp as TrendingUpIcon, Users as UsersIcon, Bed as BedIcon, Shield as ShieldIcon, Heart as HeartIcon, Brain as BrainIcon, Eye as EyeIcon, Stethoscope as StethoscopeIcon, Clock as ClockIcon, Calendar as CalendarIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, ChevronLeft, ChevronRight as ChevronRightIcon, Info, AlertCircle as AlertCircleIcon, CheckCircle as CheckCircleIcon, MessageSquare, ThumbsUp, Bookmark, Share2, FilterIcon, DownloadIcon, ExternalLinkIcon } from "lucide-react"

interface OPDSchedule {
  id: string
  department: string
  departmentCode: string
  doctorName: string
  doctorTitle: string
  doctorImage: string
  specialization: string
  day: string
  date: string
  timeSlots: {
    start: string
    end: string
  }[]
  location: string
  room: string
  fees: {
    general: number
    followUp: number
    emergency: number
  }
  appointmentRequired: boolean
  maxPatients: number
  currentBookings: number
  availability: "available" | "limited" | "full" | "unavailable"
  notes: string
  specialInstructions: string[]
  contact: {
    phone: string
    email: string
    extension: string
  }
}

interface Department {
  id: string
  name: string
  code: string
  color: string
  icon: string
  head: string
  contact: string
}

const departments: Department[] = [
  {
    id: "1",
    name: "Emergency Medicine",
    code: "EM",
    color: "red",
    icon: "shield",
    head: "Dr. A. K. M. Fazlul Haque",
    contact: "+880-2-12345678"
  },
  {
    id: "2",
    name: "Cardiology",
    code: "CARD",
    color: "red",
    icon: "heart",
    head: "Prof. Dr. M. A. Karim",
    contact: "+880-2-12345679"
  },
  {
    id: "3",
    name: "Neurology",
    code: "NEURO",
    color: "purple",
    icon: "brain",
    head: "Dr. S. R. Ahmed",
    contact: "+880-2-12345680"
  },
  {
    id: "4",
    name: "Obstetrics & Gynecology",
    code: "OBGYN",
    color: "pink",
    icon: "users",
    head: "Dr. N. K. Begum",
    contact: "+880-2-12345681"
  },
  {
    id: "5",
    name: "Pediatrics",
    code: "PED",
    color: "blue",
    icon: "users",
    head: "Dr. M. R. Khan",
    contact: "+880-2-12345682"
  },
  {
    id: "6",
    name: "Surgery",
    code: "SURG",
    color: "green",
    icon: "stethoscope",
    head: "Dr. A. H. M. R. Khan",
    contact: "+880-2-12345683"
  },
  {
    id: "7",
    name: "Anesthesiology",
    code: "ANES",
    color: "indigo",
    icon: "shield",
    head: "Dr. M. A. Salam",
    contact: "+880-2-12345684"
  },
  {
    id: "8",
    name: "Radiology",
    code: "RAD",
    color: "blue",
    icon: "microscope",
    head: "Dr. R. Islam",
    contact: "+880-2-12345685"
  },
  {
    id: "9",
    name: "Pathology",
    code: "PATH",
    color: "green",
    icon: "testtube",
    head: "Dr. S. K. Rahman",
    contact: "+880-2-12345686"
  },
  {
    id: "10",
    name: "Medicine",
    code: "MED",
    color: "orange",
    icon: "shield",
    head: "Dr. M. A. Rahman",
    contact: "+880-2-12345687"
  },
  {
    id: "11",
    name: "Orthopedics",
    code: "ORTHO",
    color: "blue",
    icon: "shield",
    head: "Dr. A. K. M. Islam",
    contact: "+880-2-12345688"
  },
  {
    id: "12",
    name: "ENT",
    code: "ENT",
    color: "purple",
    icon: "shield",
    head: "Dr. M. A. K. Khan",
    contact: "+880-2-12345689"
  },
  {
    id: "13",
    name: "Dermatology",
    code: "DERM",
    color: "green",
    icon: "shield",
    head: "Dr. S. A. K. Begum",
    contact: "+880-2-12345690"
  },
  {
    id: "14",
    name: "Psychiatry",
    code: "PSYCH",
    color: "blue",
    icon: "shield",
    head: "Dr. M. A. K. Rahman",
    contact: "+880-2-12345691"
  }
]

const mockOPDSchedule: OPDSchedule[] = [
  // Emergency Medicine
  {
    id: "1",
    department: "Emergency Medicine",
    departmentCode: "EM",
    doctorName: "Dr. A. K. M. Fazlul Haque",
    doctorTitle: "Professor & Head",
    doctorImage: "https://randomuser.me/api/portraits/med/men/32.jpg",
    specialization: "Emergency Medicine",
    day: "Monday",
    date: "2024-03-18",
    timeSlots: [
      { start: "08:00 AM", end: "09:00 AM" },
      { start: "09:00 AM", end: "10:00 AM" },
      { start: "10:00 AM", end: "11:00 AM" },
      { start: "11:00 AM", end: "12:00 PM" },
      { start: "01:00 PM", end: "02:00 PM" },
      { start: "02:00 PM", end: "03:00 PM" },
      { start: "03:00 PM", end: "04:00 PM" },
      { start: "04:00 PM", end: "05:00 PM" },
      { start: "05:00 PM", end: "06:00 PM" },
      { start: "06:00 PM", end: "07:00 PM" },
      { start: "07:00 PM", end: "08:00 PM" },
      { start: "08:00 PM", end: "09:00 PM" },
      { start: "09:00 PM", end: "10:00 PM" },
      { start: "10:00 PM", end: "11:00 PM" },
      { start: "11:00 PM", end: "12:00 AM" }
    ],
    location: "Emergency OPD",
    room: "Room 101",
    fees: {
      general: 500,
      followUp: 300,
      emergency: 1000
    },
    appointmentRequired: false,
    maxPatients: 30,
    currentBookings: 12,
    availability: "available",
    notes: "Emergency cases prioritized",
    specialInstructions: ["Trauma cases get immediate attention", "Critical cases bypass regular queue"],
    contact: {
      phone: "+880-2-12345678",
      email: "emergency@rcmc.edu.bd",
      extension: "101"
    }
  },
  {
    id: "2",
    department: "Emergency Medicine",
    departmentCode: "EM",
    doctorName: "Dr. A. K. M. Fazlul Haque",
    doctorTitle: "Professor & Head",
    doctorImage: "https://randomuser.me/api/portraits/med/men/32.jpg",
    specialization: "Emergency Medicine",
    day: "Tuesday",
    date: "2024-03-19",
    timeSlots: [
      { start: "08:00 AM", end: "09:00 AM" },
      { start: "09:00 AM", end: "10:00 AM" },
      { start: "10:00 AM", end: "11:00 AM" },
      { start: "11:00 AM", end: "12:00 PM" },
      { start: "01:00 PM", end: "02:00 PM" },
      { start: "02:00 PM", end: "03:00 PM" },
      { start: "03:00 PM", end: "04:00 PM" },
      { start: "04:00 PM", end: "05:00 PM" },
      { start: "05:00 PM", end: "06:00 PM" },
      { start: "06:00 PM", end: "07:00 PM" },
      { start: "07:00 PM", end: "08:00 PM" },
      { start: "08:00 PM", end: "09:00 PM" },
      { start: "09:00 PM", end: "10:00 PM" },
      { start: "10:00 PM", end: "11:00 PM" },
      { start: "11:00 PM", end: "12:00 AM" }
    ],
    location: "Emergency OPD",
    room: "Room 101",
    fees: {
      general: 500,
      followUp: 300,
      emergency: 1000
    },
    appointmentRequired: false,
    maxPatients: 30,
    currentBookings: 18,
    availability: "limited",
    notes: "High volume day",
    specialInstructions: ["Trauma cases get immediate attention", "Critical cases bypass regular queue"],
    contact: {
      phone: "+880-2-12345678",
      email: "emergency@rcmc.edu.bd",
      extension: "101"
    }
  },
  // Cardiology
  {
    id: "3",
    department: "Cardiology",
    departmentCode: "CARD",
    doctorName: "Prof. Dr. M. A. Karim",
    doctorTitle: "Professor",
    doctorImage: "https://randomuser.me/api/portraits/med/men/65.jpg",
    specialization: "Interventional Cardiology",
    day: "Monday",
    date: "2024-03-18",
    timeSlots: [
      { start: "08:00 AM", end: "09:30 AM" },
      { start: "09:30 AM", end: "11:00 AM" },
      { start: "11:00 AM", end: "12:30 PM" },
      { start: "02:00 PM", end: "03:30 PM" },
      { start: "03:30 PM", end: "05:00 PM" },
      { start: "05:00 PM", end: "06:30 PM" }
    ],
    location: "Cardiology OPD",
    room: "Room 201",
    fees: {
      general: 800,
      followUp: 500,
      emergency: 1500
    },
    appointmentRequired: true,
    maxPatients: 20,
    currentBookings: 15,
    availability: "limited",
    notes: "Special procedures require pre-authorization",
    specialInstructions: ["Bring previous medical records", "Fasting required for some procedures"],
    contact: {
      phone: "+880-2-12345679",
      email: "cardiology@rcmc.edu.bd",
      extension: "201"
    }
  },
  {
    id: "4",
    department: "Cardiology",
    departmentCode: "CARD",
    doctorName: "Prof. Dr. M. A. Karim",
    doctorTitle: "Professor",
    doctorImage: "https://randomuser.me/api/portraits/med/men/65.jpg",
    specialization: "Interventional Cardiology",
    day: "Wednesday",
    date: "2024-03-19",
    timeSlots: [
      { start: "08:00 AM", end: "09:30 AM" },
      { start: "09:30 AM", end: "11:00 AM" },
      { start: "11:00 AM", end: "12:30 PM" },
      { start: "02:00 PM", end: "03:30 PM" },
      { start: "03:30 PM", end: "05:00 PM" },
      { start: "05:00 PM", end: "06:30 PM" }
    ],
    location: "Cardiology OPD",
    room: "Room 201",
    fees: {
      general: 800,
      followUp: 500,
      emergency: 1500
    },
    appointmentRequired: true,
    maxPatients: 20,
    currentBookings: 20,
    availability: "full",
    notes: "Fully booked",
    specialInstructions: ["Bring previous medical records", "Fasting required for some procedures"],
    contact: {
      phone: "+880-2-12345679",
      email: "cardiology@rcmc.edu.bd",
      extension: "201"
    }
  },
  {
    id: "5",
    department: "Cardiology",
    departmentCode: "CARD",
    doctorName: "Dr. S. R. Ahmed",
    doctorTitle: "Associate Professor",
    doctorImage: "https://randomuser.me/api/portraits/med/men/45.jpg",
    specialization: "Clinical Cardiology",
    day: "Thursday",
    date: "2024-03-18",
    timeSlots: [
      { start: "09:00 AM", end: "10:30 AM" },
      { start: "10:30 AM", end: "12:00 PM" },
      { start: "02:00 PM", end: "03:30 PM" },
      { start: "03:30 PM", end: "05:00 PM" }
    ],
    location: "Cardiology OPD",
    room: "Room 202",
    fees: {
      general: 600,
      followUp: 400,
      emergency: 1200
    },
    appointmentRequired: true,
    maxPatients: 15,
    currentBookings: 8,
    availability: "available",
    notes: "General cardiology consultations",
    specialInstructions: ["Bring previous ECG reports", "Medication list required"],
    contact: {
      phone: "+880-2-12345679",
      email: "cardiology@rcmc.edu.bd",
      extension: "202"
    }
  },
  // Neurology
  {
    id: "6",
    department: "Neurology",
    departmentCode: "NEURO",
    doctorName: "Dr. S. R. Ahmed",
    doctorTitle: "Associate Professor",
    doctorImage: "https://randomuser.me/api/portraits/med/men/45.jpg",
    specialization: "Stroke Medicine",
    day: "Monday",
    date: "2024-03-18",
    timeSlots: [
      { start: "09:00 AM", end: "10:30 AM" },
      { start: "10:30 AM", end: "12:00 PM" },
      { start: "02:00 PM", end: "03:30 PM" }
    ],
    location: "Neurology OPD",
    room: "Room 301",
    fees: {
      general: 700,
      followUp: 500,
      emergency: 1000
    },
    appointmentRequired: true,
    maxPatients: 12,
    currentBookings: 6,
    availability: "available",
    notes: "Stroke patients prioritized",
    specialInstructions: ["Bring MRI/CT reports", "Family history important"],
    contact: {
      phone: "+880-2-12345680",
      email: "neurology@rcmc.edu.bd",
      extension: "301"
    }
  },
  {
    id: "7",
    department: "Neurology",
    departmentCode: "NEURO",
    doctorName: "Dr. M. A. Karim",
    doctorTitle: "Assistant Professor",
    doctorImage: "https://randomuser.me/api/portraits/med/men/75.jpg",
    specialization: "Epilepsy",
    day: "Tuesday",
    date: "2024-03-19",
    timeSlots: [
      { start: "09:00 AM", end: "10:30 AM" },
      { start: "10:30 AM", end: "12:00 PM" },
      { start: "02:00 PM", end: "03:30 PM" }
    ],
    location: "Neurology OPD",
    room: "Room 302",
    fees: {
      general: 600,
      followUp: 400,
      emergency: 800
    },
    appointmentRequired: true,
    maxPatients: 12,
    currentBookings: 10,
    availability: "limited",
    notes: "Epilepsy patients",
    specialInstructions: ["Bring seizure diary", "Medication list required"],
    contact: {
      phone: "+880-2-12345680",
      email: "neurology@rcmc.edu.bd",
      extension: "302"
    }
  },
  // OBGYN
  {
    id: "8",
    department: "Obstetrics & Gynecology",
    departmentCode: "OBGYN",
    doctorName: "Dr. N. K. Begum",
    doctorTitle: "Professor",
    doctorImage: "https://randomuser.me/api/portraits/med/women/32.jpg",
    specialization: "High-Risk Pregnancy",
    day: "Monday",
    date: "2024-03-18",
    timeSlots: [
      { start: "09:00 AM", end: "11:00 AM" },
      { start: "11:00 AM", end: "01:00 PM" },
      { start: "02:00 PM", end: "04:00 PM" }
    ],
    location: "OBGYN OPD",
    room: "Room 401",
    fees: {
      general: 600,
      followUp: 400,
      emergency: 800
    },
    appointmentRequired: true,
    maxPatients: 15,
    currentBookings: 12,
    availability: "limited",
    notes: "High-risk pregnancy patients",
    specialInstructions: ["Bring previous reports", "Ultrasound reports required"],
    contact: {
      phone: "+880-2-12345681",
      email: "obgyn@rcmc.edu.bd",
      extension: "401"
    }
  },
  {
    id: "9",
    department: "Obstetrics & Gynecology",
    departmentCode: "OBGYN",
    doctorName: "Dr. S. K. Rahman",
    doctorTitle: "Associate Professor",
    doctorImage: "https://randomuser.me/api/portraits/med/women/44.jpg",
    specialization: "General OBGYN",
    day: "Tuesday",
    date: "2024-03-19",
    timeSlots: [
      { start: "09:00 AM", end: "11:00 AM" },
      { start: "11:00 AM", end: "01:00 PM" },
      { start: "02:00 PM", end: "04:00 PM" }
    ],
    location: "OBGYN OPD",
    room: "Room 402",
    fees: {
      general: 500,
      followUp: 300,
      emergency: 700
    },
    appointmentRequired: true,
    maxPatients: 15,
    currentBookings: 8,
    availability: "available",
    notes: "General OBGYN consultations",
    specialInstructions: ["Previous reports helpful", "Family planning available"],
    contact: {
      phone: "+880-2-12345681",
      email: "obgyn@rcmc.edu.bd",
      extension: "402"
    }
  },
  // Pediatrics
  {
    id: "10",
    department: "Pediatrics",
    departmentCode: "PED",
    doctorName: "Dr. M. R. Khan",
    doctorTitle: "Professor",
    doctorImage: "https://randomuser.me/api/portraits/med/men/67.jpg",
    specialization: "Neonatology",
    day: "Monday",
    date: "2024-03-18",
    timeSlots: [
      { start: "09:00 AM", end: "10:30 AM" },
      { start: "10:30 AM", end: "12:00 PM" },
      { start: "02:00 PM", end: "04:00 PM" }
    ],
    location: "Pediatrics OPD",
    room: "Room 501",
    fees: {
      general: 400,
      followUp: 300,
      emergency: 600
    },
    appointmentRequired: true,
    maxPatients: 20,
    currentBookings: 15,
    availability: "limited",
    notes: "Neonatal cases prioritized",
    specialInstructions: ["Vaccination records required", "Growth chart available"],
    contact: {
      phone: "+880-2-12345682",
      email: "pediatrics@rcmc.edu.bd",
      extension: "501"
    }
  },
  {
    id: "11",
    department: "Pediatrics",
    departmentCode: "PED",
    doctorName: "Dr. A. K. M. Islam",
    doctorTitle: "Associate Professor",
    doctorImage: "https://randomuser.me/api/portraits/med/men/44.jpg",
    specialization: "General Pediatrics",
    day: "Tuesday",
    date: "2024-03-19",
    timeSlots: [
      { start: "09:00 AM", end: "10:30 AM" },
      { start: "10:30 AM", end: "12:00 PM" },
      { start: "02:00 PM", end: "04:00 PM" }
    ],
    location: "Pediatrics OPD",
    room: "Room 502",
    fees: {
      general: 350,
      followUp: 250,
      emergency: 500
    },
    appointmentRequired: true,
    maxPatients: 20,
    currentBookings: 10,
    availability: "available",
    notes: "General pediatrics",
    specialInstructions: ["Vaccination records helpful", "Growth monitoring"],
    contact: {
      phone: "+880-2-12345682",
      email: "pediatrics@rcmc.edu.bd",
      extension: "502"
    }
  },
  // Surgery
  {
    id: "12",
    department: "Surgery",
    departmentCode: "SURG",
    doctorName: "Dr. A. H. M. R. Khan",
    doctorTitle: "Professor",
    doctorImage: "https://randomuser.me/api/portraits/med/men/75.jpg",
    specialization: "General Surgery",
    day: "Monday",
    date: "2024-03-18",
    timeSlots: [
      { start: "08:00 AM", end: "09:30 AM" },
      { start: "09:30 AM", end: "11:00 AM" },
      { start: "02:00 PM", end: "03:30 PM" },
      { start: "03:30 PM", end: "05:00 PM" }
    ],
    location: "Surgery OPD",
    room: "Room 601",
    fees: {
      general: 700,
      followUp: 500,
      emergency: 1200
    },
    appointmentRequired: true,
    maxPatients: 15,
    currentBookings: 12,
    availability: "limited",
    notes: "Pre-operative consultations",
    specialInstructions: ["Bring previous medical records", "Pre-op tests required"],
    contact: {
      phone: "+880-2-12345683",
      email: "surgery@rcmc.edu.bd",
      extension: "601"
    }
  }
]

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const timeSlots = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"]

export default function HospitalOPDSchedulePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedDay, setSelectedDay] = useState("all")
  const [selectedDate, setSelectedDate] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedSchedule, setSelectedSchedule] = useState<OPDSchedule | null>(null)
  const [showScheduleDetails, setShowScheduleDetails] = useState(false)

  const getDepartmentIcon = (iconName: string) => {
    switch (iconName) {
      case "shield":
        return <ShieldIcon className="h-6 w-6" />
      case "heart":
        return <HeartIcon className="h-6 w-6" />
      case "brain":
        return <BrainIcon className="h-6 w-6" />
      case "users":
        return <UsersIcon className="h-6 w-6" />
      case "stethoscope":
        return <StethoscopeIcon className="h-6 w-6" />
      case "microscope":
      case "testtube":
      case "pill":
        return <ShieldIcon className="h-6 w-6" />
      default:
        return <Building className="h-6 w-6" />
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

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "available":
        return "bg-green-100 text-green-800 border-green-200"
      case "limited":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "full":
        return "bg-red-100 text-red-800 border-red-200"
      case "unavailable":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case "available":
        return <CheckCircleIcon className="h-4 w-4" />
      case "limited":
        return <AlertCircleIcon className="h-4 w-4" />
      case "full":
        return <X className="h-4 w-4" />
      case "unavailable":
        return <AlertCircleIcon className="h-4 w-4" />
      default:
        return <CheckCircleIcon className="h-4 w-4" />
    }
  }

  const handleScheduleClick = (schedule: OPDSchedule) => {
    setSelectedSchedule(schedule)
    setShowScheduleDetails(true)
  }

  const filteredSchedules = mockOPDSchedule.filter(schedule => {
    const matchesSearch = schedule.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         schedule.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         schedule.department.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesDepartment = selectedDepartment === "all" || schedule.departmentCode === selectedDepartment
    const matchesDay = selectedDay === "all" || schedule.day === selectedDay
    const matchesDate = !selectedDate || schedule.date === selectedDate

    return matchesSearch && matchesDepartment && matchesDay && matchesDate
  })

  const groupSchedulesByDay = () => {
    const grouped: { [key: string]: OPDSchedule[] } = {}
    
    filteredSchedules.forEach(schedule => {
      const key = schedule.day
      if (!grouped[key]) {
        grouped[key] = []
      }
      grouped[key].push(schedule)
    })

    return grouped
  }

  const groupedSchedules = groupSchedulesByDay()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#FBFCFC] text-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <CalendarIcon className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">OPD Schedule</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              View and book appointments with our medical specialists
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="responsive-grid-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
                <CalendarIcon className="h-4 w-4" />
                <span className="text-xl">{mockOPDSchedule.length}</span>
              </div>
              <p className="text-xs text-gray-600">Total Schedules</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                <UsersIcon className="h-4 w-4" />
                <span className="text-xl">{Array.from(new Set(mockOPDSchedule.map(s => s.doctorName))).length}</span>
              </div>
              <p className="text-xs text-gray-600">Doctors</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold">
                <ClockIcon className="h-4 w-4" />
                <span className="text-xl">{mockOPDSchedule.reduce((sum, s) => sum + s.timeSlots.length, 0)}</span>
              </div>
              <p className="text-xs text-gray-600">Time Slots</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
                <CheckCircleIcon className="h-4 w-4" />
                <span className="text-xl">{mockOPDSchedule.filter(s => s.availability === "available").length}</span>
              </div>
              <div className="text-xs text-gray-600">Available</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
                <AlertCircleIcon className="h-4 w-4" />
                <span className="text-xl">{mockOPDSchedule.filter(s => s.availability === "full").length}</span>
              </div>
              <div className="text-xs text-gray-600">Fully Booked</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search schedules by doctor name, specialization, or department..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept.id} value={dept.code}>{dept.name}</option>
                ))}
              </select>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Days</option>
                {weekDays.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedDepartment("all")
                  setSelectedDay("all")
                  setSelectedDate("")
                }}
                className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Clear All
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-blue-600 text-white"
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
                    ? "bg-blue-600 text-white"
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
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  OPD Schedule ({filteredSchedules.length} schedules found)
                </h2>
                <div className="text-sm text-gray-600">
                  {Object.keys(groupedSchedules).length} days available
                </div>
              </div>
            </div>

            {/* Grid View */}
            {viewMode === "grid" && (
              <div className="card-grid-responsive">
                {Object.entries(groupedSchedules).map(([day, schedules]) => (
                  <div key={day} className="bg-white border rounded-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-900">{day}</h3>
                        <span className="text-sm text-gray-600">{schedules.length} schedules</span>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {schedules.map((schedule) => (
                        <div
                          key={schedule.id}
                          className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                          onClick={() => handleScheduleClick(schedule)}
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${getDepartmentColor(departments.find(d => d.code === schedule.departmentCode)?.color || 'gray')}`}>
                                <img
                                  src={schedule.doctorImage}
                                  alt={schedule.doctorName}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h4 className="text-base font-bold text-gray-900">{schedule.doctorName}</h4>
                                  <p className="text-sm text-gray-600">{schedule.doctorTitle}</p>
                                  <div className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full ${getAvailabilityColor(schedule.availability)}`}>
                                      {getAvailabilityIcon(schedule.availability)}
                                    </div>
                                    <span className="text-xs font-medium">
                                      {schedule.availability === "available" ? "Available" : 
                                       schedule.availability === "limited" ? "Limited" : 
                                       schedule.availability === "full" ? "Full" : "Unavailable"}
                                    </span>
                                  </div>
                                </div>
                                <div className="text-sm text-gray-500">
                                  {schedule.specialization}
                                </div>
                              </div>
                              <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-2 text-gray-600">
                                  <ClockIcon className="h-4 w-4" />
                                  <span>{schedule.timeSlots[0].start} - {schedule.timeSlots[schedule.timeSlots.length - 1].end}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                  <MapPinIcon className="h-4 w-4" />
                                  <span>{schedule.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                  <PhoneIcon className="h-4 w-4" />
                                  <span>{schedule.contact.phone}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                  <UsersIcon className="h-4 w-4" />
                                  <span>{schedule.currentBookings}/{schedule.maxPatients}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <TrendingUpIcon className="h-4 w-4" />
                                  <span>BDT {schedule.fees.general}</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between pt-2 border-t">
                                <div className="text-xs text-gray-500">
                                  {schedule.notes}
                                </div>
                                <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                                  View Details
                                  <ChevronRightIcon className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* List View */}
            {viewMode === "list" && (
              <div className="divide-y divide-gray-100">
                {Object.entries(groupedSchedules).map(([day, schedules]) => (
                  <div key={day} className="bg-white border">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-900">{day}</h3>
                        <span className="text-sm text-gray-600">{schedules.length} schedules</span>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {schedules.map((schedule) => (
                        <div
                          key={schedule.id}
                          className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                          onClick={() => handleScheduleClick(schedule)}
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${getDepartmentColor(departments.find(d => d.code === schedule.departmentCode)?.color || 'gray')}`}>
                                <img
                                  src={schedule.doctorImage}
                                  alt={schedule.doctorName}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h4 className="text-base font-bold text-gray-900">{schedule.doctorName}</h4>
                                  <p className="text-sm text-gray-600">{schedule.doctorTitle}</p>
                                  <div className="flex items-center gap-2">
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getAvailabilityColor(schedule.availability)}`}>
                                      {getAvailabilityIcon(schedule.availability)}
                                      {schedule.availability === "available" ? "Available" : 
                                       schedule.availability === "limited" ? "Limited" : 
                                       schedule.availability === "full" ? "Full" : "Unavailable"}
                                    </span>
                                  </div>
                                  <span className="text-sm text-gray-500">
                                    {schedule.specialization}
                                  </span>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                  <ClockIcon className="h-4 w-4" />
                                  <span>{schedule.timeSlots[0].start} - {schedule.timeSlots[schedule.timeSlots.length - 1].end}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPinIcon className="h-4 w-4" />
                                  <span>{schedule.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <PhoneIcon className="h-4 w-4" />
                                  <span>{schedule.contact.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <UsersIcon className="h-4 w-4" />
                                  <span>{schedule.currentBookings}/{schedule.maxPatients}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <TrendingUpIcon className="h-4 w-4" />
                                  <span>BDT {schedule.fees.general}</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between pt-2 border-t">
                                <div className="text-xs text-gray-500">
                                  {schedule.notes}
                                </div>
                                <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                                  View Details
                                  <ChevronRightIcon className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Schedule Details Modal */}
      {showScheduleDetails && selectedSchedule && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Schedule Details</h2>
                <button
                  onClick={() => setShowScheduleDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Doctor Header */}
                <div className="border-b pb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src={selectedSchedule.doctorImage}
                        alt={selectedSchedule.doctorName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedSchedule.doctorName}</h3>
                      <p className="text-lg text-gray-600 mb-1">{selectedSchedule.doctorTitle}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getDepartmentColor(departments.find(d => d.code === selectedSchedule.departmentCode)?.color || 'gray')}`}>
                          {getDepartmentIcon(selectedSchedule.departmentCode)}
                          {selectedSchedule.department}
                        </span>
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getAvailabilityColor(selectedSchedule.availability)}`}>
                          {getAvailabilityIcon(selectedSchedule.availability)}
                          {selectedSchedule.availability === "available" ? "Available" : 
                           selectedSchedule.availability === "limited" ? "Limited" : 
                           selectedSchedule.availability === "full" ? "Full" : "Unavailable"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schedule Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Schedule Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarIcon className="h-4 w-4 text-gray-600" />
                        <span className="font-medium">Day:</span>
                        <span className="text-gray-900">{selectedSchedule.day}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <ClockIcon className="h-4 w-4 text-gray-600" />
                        <span className="font-medium">Date:</span>
                        <span className="text-gray-900">{selectedSchedule.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <ClockIcon className="h-4 w-4 text-gray-600" />
                        <span className="font-medium">Time:</span>
                        <span className="text-gray-900">{selectedSchedule.timeSlots[0].start} - {selectedSchedule.timeSlots[selectedSchedule.timeSlots.length - 1].end}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPinIcon className="h-4 w-4 text-gray-600" />
                        <span className="font-medium">Location:</span>
                        <span className="text-gray-900">{selectedSchedule.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <PhoneIcon className="h-4 w-4 text-gray-600" />
                        <span className="font-medium">Contact:</span>
                        <span className="text-gray-900">{selectedSchedule.contact.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 mb-3">Time Slots</h4>
                      <div className="space-y-2">
                        {selectedSchedule.timeSlots.map((slot, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <ClockIcon className="h-4 w-4 text-gray-600" />
                              <span className="font-medium">{slot.start}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <ClockIcon className="h-4 w-4 text-gray-600" />
                              <span className="font-medium">{slot.end}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fees */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Consultation Fees</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <TrendingUpIcon className="h-4 w-4" />
                        <span className="text-sm font-medium">General</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">BDT {selectedSchedule.fees.general}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <TrendingUpIcon className="h-4 w-4" />
                        <span className="text-sm font-medium">Follow-up</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">BDT {selectedSchedule.fees.followUp}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <AlertCircleIcon className="h-4 w-4" />
                        <span className="text-sm font-medium">Emergency</span>
                      </div>
                      <div className="text-2xl font-bold text-red-600">BDT {selectedSchedule.fees.emergency}</div>
                    </div>
                  </div>
                </div>

                {/* Special Instructions */}
                {selectedSchedule.specialInstructions.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Special Instructions</h4>
                    <div className="space-y-2">
                      {selectedSchedule.specialInstructions.map((instruction, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <Info className="h-4 w-4 text-blue-600" />
                          <span className="text-gray-700">{instruction}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notes */}
                {selectedSchedule.notes && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Notes</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700">{selectedSchedule.notes}</p>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                    <PhoneIcon className="h-4 w-4" />
                    Call
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                    <MailIcon className="h-4 w-4" />
                    Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
