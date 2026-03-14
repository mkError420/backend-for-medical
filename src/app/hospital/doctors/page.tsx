"use client"

import React, { useState, useEffect } from "react"
import { Search, User, Phone, Mail, MapPin, Calendar, Clock, Star, Award, Building, Bed, Shield, Heart, Brain, Eye, Stethoscope, Activity, ChevronRight, ArrowRight, CheckCircle, TrendingUp, BarChart3, FileText, Download, ExternalLink, Users, PhoneCall, MessageCircle, GraduationCap, Briefcase, Filter, ChevronDown, ChevronUp, X, FilterIcon, BookOpen, Globe, Linkedin, Twitter, Facebook, Instagram, Youtube, Video, Camera, PenTool, Languages, Award as AwardIcon, Syringe, Pill, Microscope, Thermometer } from "lucide-react"

interface Doctor {
  id: string
  name: string
  title: string
  department: string
  departmentCode: string
  specialization: string[]
  qualifications: string[]
  experience: number
  bio: string
  education: {
    degree: string
    institution: string
    year: string
  }[]
  professionalMemberships: string[]
  awards: string[]
  publications: number
  languages: string[]
  consultation: {
    days: string[]
    time: string
    fees: string
    appointmentRequired: boolean
  }
  contact: {
    phone: string
    email: string
    chamber: string
    address: string
  }
  expertise: string[]
  availability: "available" | "busy" | "on-leave"
  rating: number
  reviews: number
  patients: number
  image: string
  joinedYear: number
  status: "active" | "inactive"
}

const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. A. K. M. Fazlul Haque",
    title: "Professor & Head",
    department: "Emergency Medicine",
    departmentCode: "EM",
    specialization: ["Emergency Medicine", "Trauma Care", "Critical Care"],
    qualifications: ["MBBS", "FCPS (Emergency Medicine)", "FRCP (Edinburgh)"],
    experience: 25,
    bio: "Professor Haque is a renowned emergency medicine specialist with over 25 years of experience in trauma care and emergency medicine. He has trained internationally and has numerous publications in emergency medicine.",
    education: [
      { degree: "MBBS", institution: "Dhaka Medical College", year: "1999" },
      { degree: "FCPS (Emergency Medicine)", institution: "BCPS", year: "2005" },
      { degree: "FRCP (Edinburgh)", institution: "Royal College of Physicians", year: "2012" }
    ],
    professionalMemberships: ["Bangladesh College of Physicians and Surgeons", "Royal College of Emergency Medicine", "American College of Emergency Physicians"],
    awards: ["Best Emergency Physician Award 2020", "Excellence in Medical Education Award 2018"],
    publications: 45,
    languages: ["English", "Bengali", "Hindi"],
    consultation: {
      days: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      time: "6:00 PM - 9:00 PM",
      fees: "1000 BDT",
      appointmentRequired: true
    },
    contact: {
      phone: "+880-2-12345678",
      email: "dr.haque@rcmc.edu.bd",
      chamber: "Chamber 301, OPD Building",
      address: "Rangpur Community Medical College Hospital"
    },
    expertise: ["Trauma Management", "Critical Care", "Emergency Surgery", "Disaster Medicine"],
    availability: "available",
    rating: 4.8,
    reviews: 156,
    patients: 2500,
    image: "/doctors/dr-haque.jpg",
    joinedYear: 2008,
    status: "active"
  },
  {
    id: "2",
    name: "Prof. Dr. M. A. Karim",
    title: "Professor",
    department: "Cardiology",
    departmentCode: "CARD",
    specialization: ["Interventional Cardiology", "Cardiac Catheterization", "Heart Failure"],
    qualifications: ["MBBS", "FCPS (Medicine)", "MD (Cardiology)", "FRCP (London)"],
    experience: 20,
    bio: "Professor Karim is a leading interventional cardiologist with expertise in complex cardiac procedures. He has performed over 5000 cardiac interventions and has trained many cardiologists.",
    education: [
      { degree: "MBBS", institution: "Mymensingh Medical College", year: "2004" },
      { degree: "FCPS (Medicine)", institution: "BCPS", year: "2010" },
      { degree: "MD (Cardiology)", institution: "BSMMU", year: "2014" },
      { degree: "FRCP (London)", institution: "Royal College of Physicians", year: "2017" }
    ],
    professionalMemberships: ["Bangladesh College of Physicians and Surgeons", "European Society of Cardiology", "American College of Cardiology"],
    awards: ["Best Cardiologist Award 2021", "Excellence in Cardiac Care Award 2019"],
    publications: 62,
    languages: ["English", "Bengali", "Hindi", "Urdu"],
    consultation: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      time: "5:00 PM - 8:00 PM",
      fees: "1500 BDT",
      appointmentRequired: true
    },
    contact: {
      phone: "+880-2-12345679",
      email: "dr.karim@rcmc.edu.bd",
      chamber: "Chamber 201, Cardiology Department",
      address: "Rangpur Community Medical College Hospital"
    },
    expertise: ["Angioplasty", "Stenting", "Pacemaker Implantation", "Cardiac Catheterization"],
    availability: "available",
    rating: 4.9,
    reviews: 234,
    patients: 3200,
    image: "/doctors/dr-karim.jpg",
    joinedYear: 2010,
    status: "active"
  },
  {
    id: "3",
    name: "Dr. S. R. Ahmed",
    title: "Associate Professor",
    department: "Neurology",
    departmentCode: "NEURO",
    specialization: ["Stroke Medicine", "Epilepsy", "Movement Disorders"],
    qualifications: ["MBBS", "FCPS (Medicine)", "MD (Neurology)", "FRCP (Glasgow)"],
    experience: 15,
    bio: "Dr. Ahmed is a neurologist with special interest in stroke medicine and epilepsy. He has established a comprehensive stroke unit and has contributed significantly to neurology research.",
    education: [
      { degree: "MBBS", institution: "Rajshahi Medical College", year: "2009" },
      { degree: "FCPS (Medicine)", institution: "BCPS", year: "2015" },
      { degree: "MD (Neurology)", institution: "BSMMU", year: "2018" },
      { degree: "FRCP (Glasgow)", institution: "Royal College of Physicians", year: "2021" }
    ],
    professionalMemberships: ["Bangladesh College of Physicians and Surgeons", "International Stroke Society", "American Academy of Neurology"],
    awards: ["Young Neurologist Award 2019", "Stroke Care Excellence Award 2020"],
    publications: 38,
    languages: ["English", "Bengali", "Hindi"],
    consultation: {
      days: ["Sunday", "Monday", "Wednesday", "Thursday", "Friday"],
      time: "4:00 PM - 7:00 PM",
      fees: "1200 BDT",
      appointmentRequired: true
    },
    contact: {
      phone: "+880-2-12345680",
      email: "dr.ahmed@rcmc.edu.bd",
      chamber: "Chamber 301, Neurology Department",
      address: "Rangpur Community Medical College Hospital"
    },
    expertise: ["Stroke Management", "Epilepsy Treatment", "Movement Disorders", "Neurocritical Care"],
    availability: "available",
    rating: 4.7,
    reviews: 189,
    patients: 2100,
    image: "/doctors/dr-ahmed.jpg",
    joinedYear: 2012,
    status: "active"
  },
  {
    id: "4",
    name: "Dr. N. K. Begum",
    title: "Professor",
    department: "Obstetrics & Gynecology",
    departmentCode: "OBGYN",
    specialization: ["High-Risk Pregnancy", "Infertility", "Laparoscopic Surgery"],
    qualifications: ["MBBS", "FCPS (OBGYN)", "MS (OBGYN)", "FRCS (Glasgow)"],
    experience: 18,
    bio: "Professor Begum is a renowned obstetrician and gynecologist with expertise in high-risk pregnancies and advanced laparoscopic surgeries. She has delivered over 8000 babies and has numerous research publications.",
    education: [
      { degree: "MBBS", institution: "Dhaka Medical College", year: "2006" },
      { degree: "FCPS (OBGYN)", institution: "BCPS", year: "2012" },
      { degree: "MS (OBGYN)", institution: "BSMMU", year: "2015" },
      { degree: "FRCS (Glasgow)", institution: "Royal College of Surgeons", year: "2019" }
    ],
    professionalMemberships: ["Bangladesh College of Physicians and Surgeons", "Royal College of Obstetricians and Gynaecologists", "International Federation of Gynecology and Obstetrics"],
    awards: ["Best OBGYN Award 2020", "Women's Health Excellence Award 2018"],
    publications: 55,
    languages: ["English", "Bengali", "Hindi", "Urdu"],
    consultation: {
      days: ["Saturday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      time: "9:00 AM - 12:00 PM",
      fees: "800 BDT",
      appointmentRequired: true
    },
    contact: {
      phone: "+880-2-12345681",
      email: "dr.begum@rcmc.edu.bd",
      chamber: "Chamber 401, OBGYN Department",
      address: "Rangpur Community Medical College Hospital"
    },
    expertise: ["High-Risk Pregnancy", "Infertility Treatment", "Laparoscopic Surgery", "Gynecological Oncology"],
    availability: "available",
    rating: 4.9,
    reviews: 267,
    patients: 3500,
    image: "/doctors/dr-begum.jpg",
    joinedYear: 2010,
    status: "active"
  },
  {
    id: "5",
    name: "Dr. M. R. Khan",
    title: "Professor",
    department: "Pediatrics",
    departmentCode: "PED",
    specialization: ["Neonatology", "Pediatric Cardiology", "Vaccination"],
    qualifications: ["MBBS", "FCPS (Pediatrics)", "MD (Pediatrics)", "FRCP (Edinburgh)"],
    experience: 16,
    bio: "Professor Khan is a leading pediatrician with special interest in neonatology and pediatric cardiology. He has established a modern NICU and has extensive experience in treating complex pediatric conditions.",
    education: [
      { degree: "MBBS", institution: "Chittagong Medical College", year: "2008" },
      { degree: "FCPS (Pediatrics)", institution: "BCPS", year: "2014" },
      { degree: "MD (Pediatrics)", institution: "BSMMU", year: "2017" },
      { degree: "FRCP (Edinburgh)", institution: "Royal College of Physicians", year: "2020" }
    ],
    professionalMemberships: ["Bangladesh College of Physicians and Surgeons", "Royal College of Paediatrics and Child Health", "American Academy of Pediatrics"],
    awards: ["Best Pediatrician Award 2021", "Child Health Excellence Award 2019"],
    publications: 42,
    languages: ["English", "Bengali", "Hindi"],
    consultation: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      time: "10:00 AM - 1:00 PM",
      fees: "600 BDT",
      appointmentRequired: true
    },
    contact: {
      phone: "+880-2-12345682",
      email: "dr.khan@rcmc.edu.bd",
      chamber: "Chamber 301, Pediatrics Department",
      address: "Rangpur Community Medical College Hospital"
    },
    expertise: ["Neonatal Care", "Pediatric Cardiology", "Vaccination", "Child Nutrition"],
    availability: "available",
    rating: 4.8,
    reviews: 198,
    patients: 2800,
    image: "/doctors/dr-khan.jpg",
    joinedYear: 2011,
    status: "active"
  },
  {
    id: "6",
    name: "Dr. A. H. M. R. Khan",
    title: "Professor",
    department: "Surgery",
    departmentCode: "SURG",
    specialization: ["Laparoscopic Surgery", "Onco Surgery", "General Surgery"],
    qualifications: ["MBBS", "FCPS (Surgery)", "MS (Surgery)", "FRCS (Glasgow)"],
    experience: 22,
    bio: "Professor Khan is a senior surgeon with expertise in laparoscopic and onco surgery. He has performed over 8000 surgeries and has pioneered several surgical techniques in the region.",
    education: [
      { degree: "MBBS", institution: "Sylhet Medical College", year: "2002" },
      { degree: "FCPS (Surgery)", institution: "BCPS", year: "2008" },
      { degree: "MS (Surgery)", institution: "BSMMU", year: "2011" },
      { degree: "FRCS (Glasgow)", institution: "Royal College of Surgeons", year: "2015" }
    ],
    professionalMemberships: ["Bangladesh College of Physicians and Surgeons", "Royal College of Surgeons", "American College of Surgeons"],
    awards: ["Best Surgeon Award 2020", "Surgical Excellence Award 2018"],
    publications: 48,
    languages: ["English", "Bengali", "Hindi", "Urdu"],
    consultation: {
      days: ["Saturday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      time: "3:00 PM - 6:00 PM",
      fees: "1000 BDT",
      appointmentRequired: true
    },
    contact: {
      phone: "+880-2-12345683",
      email: "dr.khan@rcmc.edu.bd",
      chamber: "Chamber 201, Surgery Department",
      address: "Rangpur Community Medical College Hospital"
    },
    expertise: ["Laparoscopic Surgery", "Onco Surgery", "General Surgery", "Trauma Surgery"],
    availability: "available",
    rating: 4.7,
    reviews: 212,
    patients: 3000,
    image: "/doctors/dr-surgeon.jpg",
    joinedYear: 2009,
    status: "active"
  }
]

const departments = [
  { code: "EM", name: "Emergency Medicine" },
  { code: "CARD", name: "Cardiology" },
  { code: "NEURO", name: "Neurology" },
  { code: "OBGYN", name: "Obstetrics & Gynecology" },
  { code: "PED", name: "Pediatrics" },
  { code: "SURG", name: "Surgery" }
]

const specializations = [
  "All Specializations",
  "Emergency Medicine",
  "Trauma Care",
  "Critical Care",
  "Interventional Cardiology",
  "Cardiac Catheterization",
  "Heart Failure",
  "Stroke Medicine",
  "Epilepsy",
  "Movement Disorders",
  "High-Risk Pregnancy",
  "Infertility",
  "Laparoscopic Surgery",
  "Neonatology",
  "Pediatric Cardiology",
  "Vaccination",
  "Onco Surgery",
  "General Surgery"
]

const experienceLevels = ["All Experience", "0-5 years", "5-10 years", "10-15 years", "15-20 years", "20+ years"]
const availabilityOptions = ["All Availability", "Available", "Busy", "On Leave"]
const sortOptions = [
  { value: "name", label: "Name" },
  { value: "rating", label: "Rating" },
  { value: "experience", label: "Experience" },
  { value: "patients", label: "Most Patients" },
  { value: "reviews", label: "Most Reviews" }
]

export default function HospitalDoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
  const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations")
  const [selectedExperience, setSelectedExperience] = useState("All Experience")
  const [selectedAvailability, setSelectedAvailability] = useState("All Availability")
  const [sortBy, setSortBy] = useState("name")
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [doctorsPerPage] = useState(12)
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [showDoctorDetails, setShowDoctorDetails] = useState(false)
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(mockDoctors)

  useEffect(() => {
    let filtered = mockDoctors.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doctor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doctor.specialization.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           doctor.bio.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesDepartment = selectedDepartment === "All Departments" || doctor.departmentCode === selectedDepartment
      const matchesSpecialization = selectedSpecialization === "All Specializations" ||
                               doctor.specialization.some(spec => spec.toLowerCase().includes(selectedSpecialization.toLowerCase()))
      
      const matchesExperience = selectedExperience === "All Experience" ||
        (selectedExperience === "0-5 years" && doctor.experience <= 5) ||
        (selectedExperience === "5-10 years" && doctor.experience > 5 && doctor.experience <= 10) ||
        (selectedExperience === "10-15 years" && doctor.experience > 10 && doctor.experience <= 15) ||
        (selectedExperience === "15-20 years" && doctor.experience > 15 && doctor.experience <= 20) ||
        (selectedExperience === "20+ years" && doctor.experience > 20)
      
      const matchesAvailability = selectedAvailability === "All Availability" || doctor.availability === selectedAvailability

      return matchesSearch && matchesDepartment && matchesSpecialization && matchesExperience && matchesAvailability
    })

    // Sort doctors
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "rating":
          return b.rating - a.rating
        case "experience":
          return b.experience - a.experience
        case "patients":
          return b.patients - a.patients
        case "reviews":
          return b.reviews - a.reviews
        default:
          return 0
      }
    })

    setFilteredDoctors(filtered)
    setCurrentPage(1)
  }, [searchTerm, selectedDepartment, selectedSpecialization, selectedExperience, selectedAvailability, sortBy])

  const indexOfLastDoctor = currentPage * doctorsPerPage
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor)
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage)

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "available":
        return "bg-green-100 text-green-800 border-green-200"
      case "busy":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "on-leave":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case "available":
        return <CheckCircle className="h-3 w-3" />
      case "busy":
        return <Clock className="h-3 w-3" />
      case "on-leave":
        return <X className="h-3 w-3" />
      default:
        return <CheckCircle className="h-3 w-3" />
    }
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    )
  }

  const handleDoctorClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor)
    setShowDoctorDetails(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#FBFCFC] text-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Medical Team</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet our highly qualified and experienced doctors dedicated to providing exceptional healthcare
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
                <Users className="h-4 w-4" />
                <span className="text-xl">{mockDoctors.length}</span>
              </div>
              <p className="text-xs text-gray-600">Total Doctors</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                <Star className="h-4 w-4" />
                <span className="text-xl">{(mockDoctors.reduce((sum, d) => sum + d.rating, 0) / mockDoctors.length).toFixed(1)}</span>
              </div>
              <p className="text-xs text-gray-600">Avg Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold">
                <TrendingUp className="h-4 w-4" />
                <span className="text-xl">{Math.round(mockDoctors.reduce((sum, d) => sum + d.experience, 0) / mockDoctors.length)}</span>
              </div>
              <p className="text-xs text-gray-600">Avg Experience (Years)</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold">
                <Users className="h-4 w-4" />
                <span className="text-xl">{mockDoctors.reduce((sum, d) => sum + d.patients, 0).toLocaleString()}</span>
              </div>
              <p className="text-xs text-gray-600">Total Patients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-indigo-600 font-semibold">
                <CheckCircle className="h-4 w-4" />
                <span className="text-xl">{mockDoctors.filter(d => d.availability === 'available').length}</span>
              </div>
              <p className="text-xs text-gray-600">Available Now</p>
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
                  placeholder="Search doctors by name, title, specialization, or bio..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
              {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {departments.map(dept => (
                      <option key={dept.code} value={dept.code}>{dept.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                  <select
                    value={selectedSpecialization}
                    onChange={(e) => setSelectedSpecialization(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {specializations.map(spec => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                  <select
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {experienceLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <select
                    value={selectedAvailability}
                    onChange={(e) => setSelectedAvailability(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {availabilityOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedDepartment("All Departments")
                      setSelectedSpecialization("All Specializations")
                      setSelectedExperience("All Experience")
                      setSelectedAvailability("All Availability")
                      setSortBy("name")
                    }}
                    className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Our Doctors ({filteredDoctors.length} doctors found)
                </h2>
                <div className="text-sm text-gray-600">
                  Showing {indexOfFirstDoctor + 1}-{Math.min(indexOfLastDoctor, filteredDoctors.length)} of {filteredDoctors.length}
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {currentDoctors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                  {currentDoctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      className="bg-white border rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                      onClick={() => handleDoctorClick(doctor)}
                    >
                      {/* Doctor Header with Image */}
                      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-t-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-t-2xl"></div>
                        <div className="relative z-10 flex items-center justify-center h-full">
                          <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-200 overflow-hidden">
                            <img 
                              src={`https://randomuser.me/api/portraits/med/men/${doctor.id === '1' ? '32' : doctor.id === '2' ? '65' : doctor.id === '3' ? '45' : doctor.id === '4' ? '44' : doctor.id === '5' ? '67' : '75'}.jpg`}
                              alt={doctor.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = `https://randomuser.me/api/portraits/med/women/${doctor.id === '4' ? '32' : '44'}.jpg`
                              }}
                            />
                          </div>
                          {/* Availability Badge */}
                          <div className="absolute top-4 right-4">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border shadow-lg ${getAvailabilityColor(doctor.availability)}`}>
                              {getAvailabilityIcon(doctor.availability)}
                              {doctor.availability === "available" ? "Available" : 
                               doctor.availability === "busy" ? "Busy" : "On Leave"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Doctor Content */}
                      <div className="p-6">
                        {/* Name and Title */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors leading-tight">
                              {doctor.name}
                            </h3>
                            <p className="text-gray-600 mb-1">{doctor.title}</p>
                            <div className="flex items-center gap-2">
                              <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                                {doctor.department}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(doctor.rating)}
                            </div>
                            <div className="text-xs text-gray-500">
                              {doctor.reviews} reviews • {doctor.experience} years
                            </div>
                          </div>
                        </div>

                        {/* Specialization Tags */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {doctor.specialization.slice(0, 3).map((spec, index) => (
                              <span key={index} className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
                                {spec}
                              </span>
                            ))}
                            {doctor.specialization.length > 3 && (
                              <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                +{doctor.specialization.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Bio */}
                        <div className="mb-4">
                          <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{doctor.bio}</p>
                        </div>

                        {/* Key Information Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center gap-2 text-gray-600 mb-1">
                              <GraduationCap className="h-4 w-4" />
                              <span className="text-xs font-medium">Qualifications</span>
                            </div>
                            <div className="space-y-1">
                              {doctor.qualifications.slice(0, 2).map((qual, index) => (
                                <div key={index} className="text-sm font-medium text-gray-900">{qual}</div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center gap-2 text-gray-600 mb-1">
                              <Users className="h-4 w-4" />
                              <span className="text-xs font-medium">Patients</span>
                            </div>
                            <div className="text-lg font-bold text-blue-600">{doctor.patients.toLocaleString()}</div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center gap-2 text-gray-600 mb-1">
                              <FileText className="h-4 w-4" />
                              <span className="text-xs font-medium">Publications</span>
                            </div>
                            <div className="text-lg font-bold text-green-600">{doctor.publications}</div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center gap-2 text-gray-600 mb-1">
                              <TrendingUp className="h-4 w-4" />
                              <span className="text-xs font-medium">Experience</span>
                            </div>
                            <div className="text-lg font-bold text-purple-600">{doctor.experience} years</div>
                          </div>
                        </div>

                        {/* Consultation Info */}
                        <div className="bg-blue-50 rounded-lg p-4 mb-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="flex items-center gap-2 text-gray-600 mb-1">
                                <Calendar className="h-4 w-4" />
                                <span className="font-medium">Available Days</span>
                              </div>
                              <div className="font-medium text-gray-900">{doctor.consultation.days.slice(0, 3).join(", ")}</div>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 text-gray-600 mb-1">
                                <Clock className="h-4 w-4" />
                                <span className="font-medium">Time</span>
                              </div>
                              <div className="font-medium text-gray-900">{doctor.consultation.time}</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-3 border-t border-blue-200">
                            <div className="flex items-center gap-2 text-sm">
                              <Thermometer className="h-4 w-4 text-gray-600" />
                              <span className="font-medium text-blue-600">{doctor.consultation.fees}</span>
                            </div>
                            <div className="text-xs text-gray-500">
                              {doctor.consultation.appointmentRequired ? "Appointment required" : "Walk-in available"}
                            </div>
                          </div>
                        </div>

                        {/* Book Appointment Button - Bottom of Card */}
                        <div className="border-t pt-4">
                          <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-[#F9FAFB] hover:text-black transition-colors font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1">
                              <Calendar className="h-4 w-4" />
                              Book Appointment
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                // Create enhanced CV content as HTML for PDF conversion
                                const cvContent = `
                                  <!DOCTYPE html>
                                  <html>
                                  <head>
                                    <title>${doctor.name} - Professional Profile</title>
                                    <style>
                                      @page {
                                        margin: 20mm;
                                        size: A4;
                                      }
                                      body { 
                                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                                        line-height: 1.6; 
                                        margin: 0; 
                                        padding: 0;
                                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                      }
                                      .container {
                                        max-width: 210mm;
                                        margin: 0 auto;
                                        background: white;
                                        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                                      }
                                      .header { 
                                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                        color: white;
                                        padding: 40px;
                                        text-align: center;
                                        position: relative;
                                        overflow: hidden;
                                      }
                                      .header::before {
                                        content: '';
                                        position: absolute;
                                        top: -50%;
                                        right: -50%;
                                        width: 200%;
                                        height: 200%;
                                        background: repeating-linear-gradient(
                                          45deg,
                                          transparent,
                                          transparent 10px,
                                          rgba(255,255,255,0.05) 10px,
                                          rgba(255,255,255,0.05) 20px
                                        );
                                      }
                                      .profile-section {
                                        display: flex;
                                        align-items: center;
                                        gap: 30px;
                                        position: relative;
                                        z-index: 1;
                                      }
                                      .profile-image {
                                        width: 120px;
                                        height: 120px;
                                        border-radius: 50%;
                                        background: white;
                                        padding: 5px;
                                        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                                      }
                                      .profile-info {
                                        flex: 1;
                                        text-align: left;
                                      }
                                      .name { 
                                        font-size: 32px; 
                                        font-weight: 700; 
                                        margin-bottom: 8px;
                                        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
                                      }
                                      .title { 
                                        font-size: 20px; 
                                        font-weight: 300;
                                        margin-bottom: 15px;
                                        opacity: 0.95;
                                      }
                                      .department {
                                        display: inline-block;
                                        background: rgba(255,255,255,0.2);
                                        padding: 8px 16px;
                                        border-radius: 20px;
                                        font-size: 14px;
                                        font-weight: 500;
                                        backdrop-filter: blur(10px);
                                      }
                                      .main-content {
                                        padding: 40px;
                                      }
                                      .section { 
                                        margin-bottom: 35px;
                                        page-break-inside: avoid;
                                      }
                                      .section-title { 
                                        font-size: 18px; 
                                        font-weight: 700; 
                                        margin-bottom: 15px; 
                                        color: #2d3748;
                                        border-bottom: 3px solid #667eea;
                                        padding-bottom: 8px;
                                        display: flex;
                                        align-items: center;
                                        gap: 10px;
                                      }
                                      .section-title::before {
                                        content: '';
                                        width: 5px;
                                        height: 20px;
                                        background: #667eea;
                                        border-radius: 3px;
                                      }
                                      .info-grid {
                                        display: grid;
                                        grid-template-columns: repeat(2, 1fr);
                                        gap: 20px;
                                        margin-bottom: 20px;
                                      }
                                      .info-item {
                                        background: #f8fafc;
                                        padding: 15px;
                                        border-radius: 8px;
                                        border-left: 4px solid #667eea;
                                      }
                                      .info-label {
                                        font-size: 12px;
                                        color: #718096;
                                        text-transform: uppercase;
                                        letter-spacing: 0.5px;
                                        margin-bottom: 5px;
                                        font-weight: 600;
                                      }
                                      .info-value {
                                        font-size: 14px;
                                        color: #2d3748;
                                        font-weight: 500;
                                      }
                                      .contact-info { 
                                        background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%);
                                        padding: 25px; 
                                        border-radius: 12px;
                                        display: grid;
                                        grid-template-columns: repeat(2, 1fr);
                                        gap: 20px;
                                      }
                                      .contact-item {
                                        display: flex;
                                        align-items: center;
                                        gap: 12px;
                                      }
                                      .contact-icon {
                                        width: 40px;
                                        height: 40px;
                                        background: #667eea;
                                        color: white;
                                        border-radius: 50%;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        font-size: 16px;
                                      }
                                      .education-item, .expertise-item {
                                        background: #f8fafc;
                                        padding: 20px;
                                        border-radius: 8px;
                                        margin-bottom: 15px;
                                        border-left: 4px solid #764ba2;
                                      }
                                      .degree {
                                        font-weight: 700;
                                        color: #2d3748;
                                        font-size: 16px;
                                        margin-bottom: 5px;
                                      }
                                      .institution {
                                        color: #4a5568;
                                        font-size: 14px;
                                        margin-bottom: 3px;
                                      }
                                      .year {
                                        color: #718096;
                                        font-size: 12px;
                                        font-style: italic;
                                      }
                                      .expertise-list {
                                        display: flex;
                                        flex-wrap: wrap;
                                        gap: 10px;
                                      }
                                      .expertise-tag {
                                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                                        color: white;
                                        padding: 8px 16px;
                                        border-radius: 20px;
                                        font-size: 12px;
                                        font-weight: 500;
                                      }
                                      .stats-grid {
                                        display: grid;
                                        grid-template-columns: repeat(4, 1fr);
                                        gap: 20px;
                                        margin-bottom: 30px;
                                      }
                                      .stat-card {
                                        background: white;
                                        border: 2px solid #e2e8f0;
                                        border-radius: 12px;
                                        padding: 20px;
                                        text-align: center;
                                        transition: transform 0.2s;
                                      }
                                      .stat-number {
                                        font-size: 28px;
                                        font-weight: 700;
                                        color: #667eea;
                                        margin-bottom: 5px;
                                      }
                                      .stat-label {
                                        font-size: 12px;
                                        color: #718096;
                                        text-transform: uppercase;
                                        letter-spacing: 0.5px;
                                      }
                                      .bio-section {
                                        background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%);
                                        padding: 25px;
                                        border-radius: 12px;
                                        font-style: italic;
                                        color: #4a5568;
                                        line-height: 1.8;
                                      }
                                      .footer {
                                        background: #2d3748;
                                        color: white;
                                        padding: 20px;
                                        text-align: center;
                                        font-size: 12px;
                                      }
                                      @media print {
                                        body { background: none; }
                                        .container { box-shadow: none; }
                                      }
                                    </style>
                                  </head>
                                  <body>
                                    <div class="container">
                                      <div class="header">
                                        <div class="profile-section">
                                          <div class="profile-image">
                                            <img src="https://randomuser.me/api/portraits/med/${doctor.id === '4' ? 'women' : 'men'}/${doctor.id === '1' ? '32' : doctor.id === '2' ? '65' : doctor.id === '3' ? '45' : doctor.id === '4' ? '44' : doctor.id === '5' ? '67' : '75'}.jpg" 
                                                 style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" />
                                          </div>
                                          <div class="profile-info">
                                            <div class="name">${doctor.name}</div>
                                            <div class="title">${doctor.title}</div>
                                            <div class="department">${doctor.department}</div>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div class="main-content">
                                        <div class="stats-grid">
                                          <div class="stat-card">
                                            <div class="stat-number">${doctor.experience}</div>
                                            <div class="stat-label">Years Experience</div>
                                          </div>
                                          <div class="stat-card">
                                            <div class="stat-number">${doctor.patients.toLocaleString()}</div>
                                            <div class="stat-label">Patients Treated</div>
                                          </div>
                                          <div class="stat-card">
                                            <div class="stat-number">${doctor.publications}</div>
                                            <div class="stat-label">Publications</div>
                                          </div>
                                          <div class="stat-card">
                                            <div class="stat-number">${doctor.rating}★</div>
                                            <div class="stat-label">Rating</div>
                                          </div>
                                        </div>
                                        
                                        <div class="section">
                                          <div class="section-title">Professional Summary</div>
                                          <div class="bio-section">
                                            ${doctor.bio}
                                          </div>
                                        </div>
                                        
                                        <div class="section">
                                          <div class="section-title">Contact Information</div>
                                          <div class="contact-info">
                                            <div class="contact-item">
                                              <div class="contact-icon">📞</div>
                                              <div>
                                                <div class="info-label">Phone</div>
                                                <div class="info-value">${doctor.contact.phone}</div>
                                              </div>
                                            </div>
                                            <div class="contact-item">
                                              <div class="contact-icon">✉️</div>
                                              <div>
                                                <div class="info-label">Email</div>
                                                <div class="info-value">${doctor.contact.email}</div>
                                              </div>
                                            </div>
                                            <div class="contact-item">
                                              <div class="contact-icon">🏥</div>
                                              <div>
                                                <div class="info-label">Chamber</div>
                                                <div class="info-value">${doctor.contact.chamber}</div>
                                              </div>
                                            </div>
                                            <div class="contact-item">
                                              <div class="contact-icon">📍</div>
                                              <div>
                                                <div class="info-label">Address</div>
                                                <div class="info-value">${doctor.contact.address}</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        
                                        <div class="section">
                                          <div class="section-title">Consultation Details</div>
                                          <div class="info-grid">
                                            <div class="info-item">
                                              <div class="info-label">Available Days</div>
                                              <div class="info-value">${doctor.consultation.days.join(', ')}</div>
                                            </div>
                                            <div class="info-item">
                                              <div class="info-label">Consultation Time</div>
                                              <div class="info-value">${doctor.consultation.time}</div>
                                            </div>
                                            <div class="info-item">
                                              <div class="info-label">Consultation Fee</div>
                                              <div class="info-value">${doctor.consultation.fees}</div>
                                            </div>
                                            <div class="info-item">
                                              <div class="info-label">Appointment Required</div>
                                              <div class="info-value">${doctor.consultation.appointmentRequired ? 'Yes' : 'No'}</div>
                                            </div>
                                          </div>
                                        </div>
                                        
                                        <div class="section">
                                          <div class="section-title">Educational Background</div>
                                          ${doctor.education.map(edu => 
                                            `<div class="education-item">
                                              <div class="degree">${edu.degree}</div>
                                              <div class="institution">${edu.institution}</div>
                                              <div class="year">${edu.year}</div>
                                            </div>`
                                          ).join('')}
                                        </div>
                                        
                                        <div class="section">
                                          <div class="section-title">Areas of Expertise</div>
                                          <div class="expertise-list">
                                            ${doctor.expertise.map(expertise => 
                                              `<div class="expertise-tag">${expertise}</div>`
                                            ).join('')}
                                          </div>
                                        </div>
                                        
                                        <div class="section">
                                          <div class="section-title">Professional Qualifications</div>
                                          <div class="info-grid">
                                            ${doctor.qualifications.map(qual => 
                                              `<div class="info-item">
                                                <div class="info-value">${qual}</div>
                                              </div>`
                                            ).join('')}
                                          </div>
                                        </div>
                                        
                                        <div class="section">
                                          <div class="section-title">Languages Spoken</div>
                                          <div class="expertise-list">
                                            ${doctor.languages.map(lang => 
                                              `<div class="expertise-tag" style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);">${lang}</div>`
                                            ).join('')}
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div class="footer">
                                        <div>Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                        <div style="margin-top: 5px;">Rangpur Community Medical College Hospital</div>
                                      </div>
                                    </div>
                                  </body>
                                  </html>
                                `;
                                
                                // Create and download PDF using browser's print functionality
                                const printWindow = window.open('', '_blank');
                                if (printWindow) {
                                  printWindow.document.write(cvContent);
                                  printWindow.document.close();
                                  printWindow.focus();
                                  
                                  // Wait for content to load, then trigger print dialog
                                  setTimeout(() => {
                                    printWindow.print();
                                  }, 1000);
                                }
                              }}
                              className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1">
                              <Download className="h-4 w-4" />
                              Download CV
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-16 text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedDepartment("All Departments")
                      setSelectedSpecialization("All Specializations")
                      setSelectedExperience("All Experience")
                      setSelectedAvailability("All Availability")
                      setSortBy("name")
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="p-6 border-t">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-3 py-2 border rounded-lg ${
                            currentPage === pageNum
                              ? "bg-blue-600 text-white border-blue-600"
                              : "border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          {pageNum}
                        </button>
                      )
                    })}
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Doctor Details Modal */}
      {showDoctorDetails && selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Doctor Details</h2>
                <button
                  onClick={() => setShowDoctorDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Doctor Header */}
                <div className="border-b pb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/med/men/${selectedDoctor.id === '1' ? '32' : selectedDoctor.id === '2' ? '65' : selectedDoctor.id === '3' ? '45' : selectedDoctor.id === '4' ? '44' : selectedDoctor.id === '5' ? '67' : '75'}.jpg`}
                        alt={selectedDoctor.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://randomuser.me/api/portraits/med/women/${selectedDoctor.id === '4' ? '32' : '44'}.jpg`
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedDoctor.name}</h3>
                      <p className="text-lg text-gray-600 mb-1">{selectedDoctor.title}</p>
                      <p className="text-gray-600">{selectedDoctor.department}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getAvailabilityColor(selectedDoctor.availability)}`}>
                          {getAvailabilityIcon(selectedDoctor.availability)}
                          {selectedDoctor.availability === "available" ? "Available" : 
                           selectedDoctor.availability === "busy" ? "Busy" : "On Leave"}
                        </span>
                        <div className="flex items-center gap-2">
                          {renderStars(selectedDoctor.rating)}
                          <span className="text-sm text-gray-600">({selectedDoctor.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Professional Information</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-600">Experience</div>
                        <div className="font-medium text-gray-900">{selectedDoctor.experience} years</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Qualifications</div>
                        <div className="space-y-1">
                          {selectedDoctor.qualifications.map((qual, index) => (
                            <div key={index} className="font-medium text-gray-900">{qual}</div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Patients Treated</div>
                        <div className="font-medium text-gray-900">{selectedDoctor.patients.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Publications</div>
                        <div className="font-medium text-gray-900">{selectedDoctor.publications}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-600">Phone</div>
                        <div className="font-medium text-gray-900">{selectedDoctor.contact.phone}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Email</div>
                        <div className="font-medium text-gray-900">{selectedDoctor.contact.email}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Chamber</div>
                        <div className="font-medium text-gray-900">{selectedDoctor.contact.chamber}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Address</div>
                        <div className="font-medium text-gray-900">{selectedDoctor.contact.address}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Biography</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">{selectedDoctor.bio}</p>
                  </div>
                </div>

                {/* Specialization */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDoctor.expertise.map((expertise, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {expertise}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Education</h4>
                  <div className="space-y-2">
                    {selectedDoctor.education.map((edu, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0">
                          <GraduationCap className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{edu.degree}</div>
                          <div className="text-sm text-gray-600">{edu.institution}</div>
                          <div className="text-xs text-gray-500">{edu.year}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultation Details */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Consultation Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-2">Available Days</div>
                      <div className="font-medium text-gray-900">{selectedDoctor.consultation.days.join(", ")}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-2">Consultation Time</div>
                      <div className="font-medium text-gray-900">{selectedDoctor.consultation.time}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-2">Consultation Fee</div>
                      <div className="font-medium text-gray-900">{selectedDoctor.consultation.fees}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-2">Appointment Required</div>
                      <div className="font-medium text-gray-900">
                        {selectedDoctor.consultation.appointmentRequired ? "Yes" : "No"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDoctor.languages.map((lang, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Professional Memberships */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Professional Memberships</h4>
                  <div className="space-y-2">
                    {selectedDoctor.professionalMemberships.map((membership, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <AwardIcon className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-700">{membership}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Awards */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Awards & Recognition</h4>
                  <div className="space-y-2">
                    {selectedDoctor.awards.map((award, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <AwardIcon className="h-4 w-4 text-yellow-500" />
                        <span className="text-gray-700">{award}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t">
                  <button className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-[#F9FAFB] hover:text-black transition-colors font-medium">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </button>
                  <button 
                    onClick={() => window.location.href = `tel:${selectedDoctor.contact.phone}`}
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    Contact
                  </button>
                  <button 
                    onClick={() => {
                      // Create enhanced CV content as HTML for PDF conversion
                      const cvContent = `
                        <!DOCTYPE html>
                        <html>
                        <head>
                          <title>${selectedDoctor.name} - Professional Profile</title>
                          <style>
                            @page {
                              margin: 20mm;
                              size: A4;
                            }
                            body { 
                              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                              line-height: 1.6; 
                              margin: 0; 
                              padding: 0;
                              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            }
                            .container {
                              max-width: 210mm;
                              margin: 0 auto;
                              background: white;
                              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                            }
                            .header { 
                              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                              color: white;
                              padding: 40px;
                              text-align: center;
                              position: relative;
                              overflow: hidden;
                            }
                            .header::before {
                              content: '';
                              position: absolute;
                              top: -50%;
                              right: -50%;
                              width: 200%;
                              height: 200%;
                              background: repeating-linear-gradient(
                                45deg,
                                transparent,
                                transparent 10px,
                                rgba(255,255,255,0.05) 10px,
                                rgba(255,255,255,0.05) 20px
                              );
                            }
                            .profile-section {
                              display: flex;
                              align-items: center;
                              gap: 30px;
                              position: relative;
                              z-index: 1;
                            }
                            .profile-image {
                              width: 120px;
                              height: 120px;
                              border-radius: 50%;
                              background: white;
                              padding: 5px;
                              box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                            }
                            .profile-info {
                              flex: 1;
                              text-align: left;
                            }
                            .name { 
                              font-size: 32px; 
                              font-weight: 700; 
                              margin-bottom: 8px;
                              text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
                            }
                            .title { 
                              font-size: 20px; 
                              font-weight: 300;
                              margin-bottom: 15px;
                              opacity: 0.95;
                            }
                            .department {
                              display: inline-block;
                              background: rgba(255,255,255,0.2);
                              padding: 8px 16px;
                              border-radius: 20px;
                              font-size: 14px;
                              font-weight: 500;
                              backdrop-filter: blur(10px);
                            }
                            .main-content {
                              padding: 40px;
                            }
                            .section { 
                              margin-bottom: 35px;
                              page-break-inside: avoid;
                            }
                            .section-title { 
                              font-size: 18px; 
                              font-weight: 700; 
                              margin-bottom: 15px; 
                              color: #2d3748;
                              border-bottom: 3px solid #667eea;
                              padding-bottom: 8px;
                              display: flex;
                              align-items: center;
                              gap: 10px;
                            }
                            .section-title::before {
                              content: '';
                              width: 5px;
                              height: 20px;
                              background: #667eea;
                              border-radius: 3px;
                            }
                            .info-grid {
                              display: grid;
                              grid-template-columns: repeat(2, 1fr);
                              gap: 20px;
                              margin-bottom: 20px;
                            }
                            .info-item {
                              background: #f8fafc;
                              padding: 15px;
                              border-radius: 8px;
                              border-left: 4px solid #667eea;
                            }
                            .info-label {
                              font-size: 12px;
                              color: #718096;
                              text-transform: uppercase;
                              letter-spacing: 0.5px;
                              margin-bottom: 5px;
                              font-weight: 600;
                            }
                            .info-value {
                              font-size: 14px;
                              color: #2d3748;
                              font-weight: 500;
                            }
                            .contact-info { 
                              background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%);
                              padding: 25px; 
                              border-radius: 12px;
                              display: grid;
                              grid-template-columns: repeat(2, 1fr);
                              gap: 20px;
                            }
                            .contact-item {
                              display: flex;
                              align-items: center;
                              gap: 12px;
                            }
                            .contact-icon {
                              width: 40px;
                              height: 40px;
                              background: #667eea;
                              color: white;
                              border-radius: 50%;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                              font-size: 16px;
                            }
                            .education-item, .expertise-item {
                              background: #f8fafc;
                              padding: 20px;
                              border-radius: 8px;
                              margin-bottom: 15px;
                              border-left: 4px solid #764ba2;
                            }
                            .degree {
                              font-weight: 700;
                              color: #2d3748;
                              font-size: 16px;
                              margin-bottom: 5px;
                            }
                            .institution {
                              color: #4a5568;
                              font-size: 14px;
                              margin-bottom: 3px;
                            }
                            .year {
                              color: #718096;
                              font-size: 12px;
                              font-style: italic;
                            }
                            .expertise-list {
                              display: flex;
                              flex-wrap: wrap;
                              gap: 10px;
                            }
                            .expertise-tag {
                              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                              color: white;
                              padding: 8px 16px;
                              border-radius: 20px;
                              font-size: 12px;
                              font-weight: 500;
                            }
                            .stats-grid {
                              display: grid;
                              grid-template-columns: repeat(4, 1fr);
                              gap: 20px;
                              margin-bottom: 30px;
                            }
                            .stat-card {
                              background: white;
                              border: 2px solid #e2e8f0;
                              border-radius: 12px;
                              padding: 20px;
                              text-align: center;
                              transition: transform 0.2s;
                            }
                            .stat-number {
                              font-size: 28px;
                              font-weight: 700;
                              color: #667eea;
                              margin-bottom: 5px;
                            }
                            .stat-label {
                              font-size: 12px;
                              color: #718096;
                              text-transform: uppercase;
                              letter-spacing: 0.5px;
                            }
                            .bio-section {
                              background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%);
                              padding: 25px;
                              border-radius: 12px;
                              font-style: italic;
                              color: #4a5568;
                              line-height: 1.8;
                            }
                            .footer {
                              background: #2d3748;
                              color: white;
                              padding: 20px;
                              text-align: center;
                              font-size: 12px;
                            }
                            @media print {
                              body { background: none; }
                              .container { box-shadow: none; }
                            }
                          </style>
                        </head>
                        <body>
                          <div class="container">
                            <div class="header">
                              <div class="profile-section">
                                <div class="profile-image">
                                  <img src="https://randomuser.me/api/portraits/med/${selectedDoctor.id === '4' ? 'women' : 'men'}/${selectedDoctor.id === '1' ? '32' : selectedDoctor.id === '2' ? '65' : selectedDoctor.id === '3' ? '45' : selectedDoctor.id === '4' ? '44' : selectedDoctor.id === '5' ? '67' : '75'}.jpg" 
                                       style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;" />
                                </div>
                                <div class="profile-info">
                                  <div class="name">${selectedDoctor.name}</div>
                                  <div class="title">${selectedDoctor.title}</div>
                                  <div class="department">${selectedDoctor.department}</div>
                                </div>
                              </div>
                            </div>
                            
                            <div class="main-content">
                              <div class="stats-grid">
                                <div class="stat-card">
                                  <div class="stat-number">${selectedDoctor.experience}</div>
                                  <div class="stat-label">Years Experience</div>
                                </div>
                                <div class="stat-card">
                                  <div class="stat-number">${selectedDoctor.patients.toLocaleString()}</div>
                                  <div class="stat-label">Patients Treated</div>
                                </div>
                                <div class="stat-card">
                                  <div class="stat-number">${selectedDoctor.publications}</div>
                                  <div class="stat-label">Publications</div>
                                </div>
                                <div class="stat-card">
                                  <div class="stat-number">${selectedDoctor.rating}★</div>
                                  <div class="stat-label">Rating</div>
                                </div>
                              </div>
                              
                              <div class="section">
                                <div class="section-title">Professional Summary</div>
                                <div class="bio-section">
                                  ${selectedDoctor.bio}
                                </div>
                              </div>
                              
                              <div class="section">
                                <div class="section-title">Contact Information</div>
                                <div class="contact-info">
                                  <div class="contact-item">
                                    <div class="contact-icon">📞</div>
                                    <div>
                                      <div class="info-label">Phone</div>
                                      <div class="info-value">${selectedDoctor.contact.phone}</div>
                                    </div>
                                  </div>
                                  <div class="contact-item">
                                    <div class="contact-icon">✉️</div>
                                    <div>
                                      <div class="info-label">Email</div>
                                      <div class="info-value">${selectedDoctor.contact.email}</div>
                                    </div>
                                  </div>
                                  <div class="contact-item">
                                    <div class="contact-icon">🏥</div>
                                    <div>
                                      <div class="info-label">Chamber</div>
                                      <div class="info-value">${selectedDoctor.contact.chamber}</div>
                                    </div>
                                  </div>
                                  <div class="contact-item">
                                    <div class="contact-icon">📍</div>
                                    <div>
                                      <div class="info-label">Address</div>
                                      <div class="info-value">${selectedDoctor.contact.address}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div class="section">
                                <div class="section-title">Consultation Details</div>
                                <div class="info-grid">
                                  <div class="info-item">
                                    <div class="info-label">Available Days</div>
                                    <div class="info-value">${selectedDoctor.consultation.days.join(', ')}</div>
                                  </div>
                                  <div class="info-item">
                                    <div class="info-label">Consultation Time</div>
                                    <div class="info-value">${selectedDoctor.consultation.time}</div>
                                  </div>
                                  <div class="info-item">
                                    <div class="info-label">Consultation Fee</div>
                                    <div class="info-value">${selectedDoctor.consultation.fees}</div>
                                  </div>
                                  <div class="info-item">
                                    <div class="info-label">Appointment Required</div>
                                    <div class="info-value">${selectedDoctor.consultation.appointmentRequired ? 'Yes' : 'No'}</div>
                                  </div>
                                </div>
                              </div>
                              
                              <div class="section">
                                <div class="section-title">Educational Background</div>
                                ${selectedDoctor.education.map(edu => 
                                  `<div class="education-item">
                                    <div class="degree">${edu.degree}</div>
                                    <div class="institution">${edu.institution}</div>
                                    <div class="year">${edu.year}</div>
                                  </div>`
                                ).join('')}
                              </div>
                              
                              <div class="section">
                                <div class="section-title">Areas of Expertise</div>
                                <div class="expertise-list">
                                  ${selectedDoctor.expertise.map(expertise => 
                                    `<div class="expertise-tag">${expertise}</div>`
                                  ).join('')}
                                </div>
                              </div>
                              
                              <div class="section">
                                <div class="section-title">Professional Qualifications</div>
                                <div class="info-grid">
                                  ${selectedDoctor.qualifications.map(qual => 
                                    `<div class="info-item">
                                      <div class="info-value">${qual}</div>
                                    </div>`
                                  ).join('')}
                                </div>
                              </div>
                              
                              <div class="section">
                                <div class="section-title">Languages Spoken</div>
                                <div class="expertise-list">
                                  ${selectedDoctor.languages.map(lang => 
                                    `<div class="expertise-tag" style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);">${lang}</div>`
                                  ).join('')}
                                </div>
                              </div>
                            </div>
                            
                            <div class="footer">
                              <div>Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                              <div style="margin-top: 5px;">Rangpur Community Medical College Hospital</div>
                            </div>
                          </div>
                        </body>
                        </html>
                      `;
                      
                      // Create and download PDF using browser's print functionality
                      const printWindow = window.open('', '_blank');
                      if (printWindow) {
                        printWindow.document.write(cvContent);
                        printWindow.document.close();
                        printWindow.focus();
                        
                        // Wait for content to load, then trigger print dialog
                        setTimeout(() => {
                          printWindow.print();
                        }, 1000);
                      }
                    }}
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="h-4 w-4" />
                    Download CV
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
