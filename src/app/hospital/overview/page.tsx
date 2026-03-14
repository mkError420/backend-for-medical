"use client"

import React, { useState, useEffect } from "react"
import { Search, Phone, Mail, MapPin, Clock, Users, Calendar, Star, Award, Building, Bed, Shield, Heart, Brain, Eye, Stethoscope, Activity, ChevronRight, ArrowRight, CheckCircle, TrendingUp, BarChart3, FileText, Download, ExternalLink, User, PhoneCall, MessageCircle, Ambulance, Microscope, Pill, Syringe, Thermometer, X } from "lucide-react"

interface HospitalStats {
  totalBeds: number
  icuBeds: number
  emergencyBeds: number
  generalBeds: number
  occupancyRate: number
  averageStay: number
  annualPatients: number
  emergencyCases: number
  surgeries: number
  deliveries: number
  successRate: number
  satisfaction: number
  accreditation: string
  establishedYear: number
}

interface Department {
  id: string
  name: string
  description: string
  head: string
  headTitle: string
  beds: number
  doctors: number
  nurses: number
  specialties: string[]
  timings: string
  emergency: boolean
  icon: string
  color: string
}

interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  available: boolean
  timing: string
  emergency: boolean
}

interface Achievement {
  id: string
  title: string
  description: string
  year: string
  category: string
  icon: string
}

interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  date: string
  treatment: string
}

const hospitalStats: HospitalStats = {
  totalBeds: 650,
  icuBeds: 50,
  emergencyBeds: 30,
  generalBeds: 570,
  occupancyRate: 85,
  averageStay: 4.2,
  annualPatients: 125000,
  emergencyCases: 45000,
  surgeries: 12000,
  deliveries: 3500,
  successRate: 98.5,
  satisfaction: 96.2,
  accreditation: "BMDC & WHO Approved",
  establishedYear: 2008
}

const departments: Department[] = [
  {
    id: "1",
    name: "Emergency Medicine",
    description: "24/7 emergency care and trauma services",
    head: "Dr. A. K. M. Fazlul Haque",
    headTitle: "Head of Emergency Medicine",
    beds: 30,
    doctors: 12,
    nurses: 45,
    specialties: ["Trauma Care", "Critical Care", "Emergency Surgery", "Cardiac Emergency"],
    timings: "24 Hours",
    emergency: true,
    icon: "ambulance",
    color: "red"
  },
  {
    id: "2",
    name: "Cardiology",
    description: "Comprehensive cardiac care and cardiovascular services",
    head: "Prof. Dr. M. A. Karim",
    headTitle: "Professor & Head of Cardiology",
    beds: 80,
    doctors: 15,
    nurses: 60,
    specialties: ["Interventional Cardiology", "Cardiac Surgery", "Heart Failure", "Arrhythmia"],
    timings: "24 Hours (Emergency) / 8AM-8PM (OPD)",
    emergency: true,
    icon: "heart",
    color: "red"
  },
  {
    id: "3",
    name: "Neurology",
    description: "Diagnosis and treatment of neurological disorders",
    head: "Dr. S. R. Ahmed",
    headTitle: "Associate Professor & Head",
    beds: 60,
    doctors: 10,
    nurses: 40,
    specialties: ["Stroke Care", "Epilepsy", "Movement Disorders", "Neurocritical Care"],
    timings: "24 Hours (Emergency) / 9AM-5PM (OPD)",
    emergency: true,
    icon: "brain",
    color: "purple"
  },
  {
    id: "4",
    name: "Obstetrics & Gynecology",
    description: "Women's health and maternity care services",
    head: "Dr. N. K. Begum",
    headTitle: "Professor & Head of OBGYN",
    beds: 100,
    doctors: 18,
    nurses: 80,
    specialties: ["Maternity Care", "High-Risk Pregnancy", "Gynecological Surgery", "Infertility"],
    timings: "24 Hours (Delivery) / 8AM-8PM (OPD)",
    emergency: true,
    icon: "users",
    color: "pink"
  },
  {
    id: "5",
    name: "Pediatrics",
    description: "Comprehensive healthcare for children and adolescents",
    head: "Dr. M. R. Khan",
    headTitle: "Professor & Head of Pediatrics",
    beds: 70,
    doctors: 14,
    nurses: 55,
    specialties: ["Neonatology", "Pediatric Surgery", "Pediatric Cardiology", "Vaccination"],
    timings: "24 Hours (NICU) / 9AM-5PM (OPD)",
    emergency: true,
    icon: "users",
    color: "blue"
  },
  {
    id: "6",
    name: "Surgery",
    description: "General and specialized surgical services",
    head: "Dr. A. H. M. R. Khan",
    headTitle: "Professor & Head of Surgery",
    beds: 90,
    doctors: 16,
    nurses: 70,
    specialties: ["General Surgery", "Laparoscopic Surgery", "Onco Surgery", "Plastic Surgery"],
    timings: "24 Hours (Emergency) / 8AM-8PM (OPD)",
    emergency: true,
    icon: "stethoscope",
    color: "green"
  }
]

const services: Service[] = [
  {
    id: "1",
    title: "Emergency Services",
    description: "24/7 emergency medical care with dedicated trauma team",
    icon: "ambulance",
    features: ["24/7 Availability", "Trauma Team", "Emergency Surgery", "ICU Support"],
    available: true,
    timing: "24 Hours",
    emergency: true
  },
  {
    id: "2",
    title: "Intensive Care Unit",
    description: "Advanced critical care with state-of-the-art monitoring",
    icon: "heart",
    features: ["50 ICU Beds", "Advanced Monitoring", "Ventilator Support", "Critical Care Team"],
    available: true,
    timing: "24 Hours",
    emergency: true
  },
  {
    id: "3",
    title: "Diagnostic Services",
    description: "Complete diagnostic and laboratory services",
    icon: "microscope",
    features: ["Radiology", "Pathology", "MRI", "CT Scan", "Ultrasound"],
    available: true,
    timing: "24 Hours (Emergency) / 8AM-10PM (Routine)",
    emergency: true
  },
  {
    id: "4",
    title: "Blood Bank",
    description: "24/7 blood bank services with modern facilities",
    icon: "thermometer",
    features: ["Blood Collection", "Component Separation", "Cross Matching", "Emergency Supply"],
    available: true,
    timing: "24 Hours",
    emergency: true
  },
  {
    id: "5",
    title: "Pharmacy",
    description: "24/7 pharmacy services with complete medication supply",
    icon: "pill",
    features: ["Medication Supply", "Emergency Drugs", "Compounding", "Consultation"],
    available: true,
    timing: "24 Hours",
    emergency: true
  },
  {
    id: "6",
    title: "Ambulance Services",
    description: "Advanced life support ambulance services",
    icon: "ambulance",
    features: ["24/7 Service", "Advanced Life Support", "Paramedic Team", "GPS Tracking"],
    available: true,
    timing: "24 Hours",
    emergency: true
  }
]

const achievements: Achievement[] = [
  {
    id: "1",
    title: "BMDC Accreditation",
    description: "Fully accredited by Bangladesh Medical & Dental Council",
    year: "2023",
    category: "Accreditation",
    icon: "award"
  },
  {
    id: "2",
    title: "ISO 9001:2015 Certification",
    description: "Quality management system certification",
    year: "2022",
    category: "Quality",
    icon: "shield"
  },
  {
    id: "3",
    title: "Best Hospital Award",
    description: "Recognized as the best private hospital in North Bengal",
    year: "2023",
    category: "Award",
    icon: "star"
  },
  {
    id: "4",
    title: "WHO Safe Hospital",
    description: "WHO recognized for patient safety and quality care",
    year: "2021",
    category: "Safety",
    icon: "checkcircle"
  }
]

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "International Patient",
    content: "The exceptional care and professionalism at this hospital saved my life. The doctors and nurses went above and beyond to ensure my recovery.",
    rating: 5,
    date: "2024-03-01",
    treatment: "Cardiac Surgery"
  },
  {
    id: "2",
    name: "Mohammad Ali",
    role: "Patient Family Member",
    content: "My mother received excellent treatment here. The facilities are world-class and the staff is very caring and attentive.",
    rating: 5,
    date: "2024-02-15",
    treatment: "Joint Replacement"
  },
  {
    id: "3",
    name: "Fatema Begum",
    role: "Patient",
    content: "The maternity care here is exceptional. From delivery to postnatal care, everything was handled with great expertise and compassion.",
    rating: 5,
    date: "2024-01-20",
    treatment: "Normal Delivery"
  }
]

export default function HospitalOverviewPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)

  const getDepartmentIcon = (iconName: string) => {
    switch (iconName) {
      case "ambulance":
        return <Ambulance className="h-6 w-6" />
      case "heart":
        return <Heart className="h-6 w-6" />
      case "brain":
        return <Brain className="h-6 w-6" />
      case "users":
        return <Users className="h-6 w-6" />
      case "stethoscope":
        return <Stethoscope className="h-6 w-6" />
      default:
        return <Building className="h-6 w-6" />
    }
  }

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "ambulance":
        return <Ambulance className="h-8 w-8" />
      case "heart":
        return <Heart className="h-8 w-8" />
      case "microscope":
        return <Microscope className="h-8 w-8" />
      case "thermometer":
        return <Thermometer className="h-8 w-8" />
      case "pill":
        return <Pill className="h-8 w-8" />
      default:
        return <Activity className="h-8 w-8" />
    }
  }

  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award className="h-8 w-8" />
      case "shield":
        return <Shield className="h-8 w-8" />
      case "star":
        return <Star className="h-8 w-8" />
      case "checkcircle":
        return <CheckCircle className="h-8 w-8" />
      default:
        return <Award className="h-8 w-8" />
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

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.head.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#E0E6E4] text-gray-700">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4] text-gray-700">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Rangpur Community Medical College Hospital</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
              Excellence in Healthcare Since {hospitalStats.establishedYear}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>{hospitalStats.accreditation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>{hospitalStats.successRate}% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{hospitalStats.satisfaction}% Patient Satisfaction</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                <PhoneCall className="h-5 w-5" />
                Emergency: +88-0123456789
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-semibold">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-[#E0E6E4] border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold mb-2">
                <Bed className="h-5 w-5" />
                <span className="text-2xl">{hospitalStats.totalBeds}</span>
              </div>
              <p className="text-sm text-gray-600">Total Beds</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-red-600 font-semibold mb-2">
                <Heart className="h-5 w-5" />
                <span className="text-2xl">{hospitalStats.icuBeds}</span>
              </div>
              <p className="text-sm text-gray-600">ICU Beds</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold mb-2">
                <Users className="h-5 w-5" />
                <span className="text-2xl">{(hospitalStats.annualPatients / 1000).toFixed(0)}K</span>
              </div>
              <p className="text-sm text-gray-600">Annual Patients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold mb-2">
                <Activity className="h-5 w-5" />
                <span className="text-2xl">{(hospitalStats.surgeries / 1000).toFixed(0)}K</span>
              </div>
              <p className="text-sm text-gray-600">Surgeries</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold mb-2">
                <Ambulance className="h-5 w-5" />
                <span className="text-2xl">{(hospitalStats.emergencyCases / 1000).toFixed(0)}K</span>
              </div>
              <p className="text-sm text-gray-600">Emergency Cases</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-pink-600 font-semibold mb-2">
                <Users className="h-5 w-5" />
                <span className="text-2xl">{hospitalStats.deliveries}</span>
              </div>
              <p className="text-sm text-gray-600">Deliveries</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-indigo-600 font-semibold mb-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-2xl">{hospitalStats.occupancyRate}%</span>
              </div>
              <p className="text-sm text-gray-600">Occupancy Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-yellow-600 font-semibold mb-2">
                <Clock className="h-5 w-5" />
                <span className="text-2xl">{hospitalStats.averageStay}</span>
              </div>
              <p className="text-sm text-gray-600">Avg Stay (Days)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-[#E0E6E4] border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-8">
            {["overview", "departments", "services", "achievements", "testimonials"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 transition-colors capitalize ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Hospital</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Rangpur Community Medical College Hospital is a premier healthcare institution dedicated to providing
                    exceptional medical care to the people of North Bengal and beyond. Established in {hospitalStats.establishedYear},
                    our hospital has grown into a state-of-the-art facility with {hospitalStats.totalBeds} beds and comprehensive
                    medical services across all major specialties.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our commitment to excellence is reflected in our {hospitalStats.successRate}% success rate and {hospitalStats.satisfaction}% patient satisfaction.
                    We are proud to be recognized by the Bangladesh Medical & Dental Council and WHO for our quality standards
                    and patient safety protocols.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="font-medium">BMDC Accredited</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">ISO 9001:2015 Certified</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="font-medium">WHO Approved</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{hospitalStats.totalBeds}+</div>
                    <div className="text-sm text-gray-600">Total Beds</div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{departments.length}</div>
                    <div className="text-sm text-gray-600">Departments</div>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Emergency</div>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">{new Date().getFullYear() - hospitalStats.establishedYear}+</div>
                    <div className="text-sm text-gray-600">Years of Service</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Ambulance className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">24/7 Emergency Services</h3>
                    <p className="text-gray-600 text-sm">Round-the-clock emergency care with dedicated trauma team</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Advanced ICU</h3>
                    <p className="text-gray-600 text-sm">State-of-the-art intensive care unit with advanced monitoring</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Microscope className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Modern Diagnostics</h3>
                    <p className="text-gray-600 text-sm">Complete diagnostic and laboratory services</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Medical Team</h3>
                    <p className="text-gray-600 text-sm">Highly qualified doctors and experienced nursing staff</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Thermometer className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Blood Bank</h3>
                    <p className="text-gray-600 text-sm">24/7 blood bank services with modern facilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Patient Safety</h3>
                    <p className="text-gray-600 text-sm">WHO recognized for patient safety and quality care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Departments Tab */}
        {activeTab === "departments" && (
          <div className="space-y-8">
            {/* Search */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search departments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDepartments.map((department) => (
                <div
                  key={department.id}
                  className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedDepartment(department.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                        department.color === "red" ? "bg-red-100 text-red-700" :
                        department.color === "purple" ? "bg-purple-100 text-purple-700" :
                        department.color === "pink" ? "bg-pink-100 text-pink-700" :
                        department.color === "blue" ? "bg-blue-100 text-blue-700" :
                        department.color === "green" ? "bg-green-100 text-green-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {getDepartmentIcon(department.icon)}
                      </div>
                      {department.emergency && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                          <Ambulance className="h-3 w-3" />
                          24/7
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {department.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{department.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="h-4 w-4" />
                        <span>{department.head}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{department.timings}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{department.beds}</div>
                        <div className="text-xs text-gray-600">Beds</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{department.doctors}</div>
                        <div className="text-xs text-gray-600">Doctors</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{department.nurses}</div>
                        <div className="text-xs text-gray-600">Nurses</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {department.specialties.slice(0, 3).map((specialty, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                      {department.specialties.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          +{department.specialties.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                      service.emergency ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                    }`}>
                      {getServiceIcon(service.icon)}
                    </div>
                    {service.emergency && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        <Ambulance className="h-3 w-3" />
                        24/7
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{service.timing}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className={`text-sm font-medium ${
                      service.available ? "text-green-600" : "text-gray-500"
                    }`}>
                      {service.available ? "Available" : "Unavailable"}
                    </span>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                    achievement.category === "Accreditation" ? "bg-blue-100 text-blue-700" :
                    achievement.category === "Quality" ? "bg-green-100 text-green-700" :
                    achievement.category === "Award" ? "bg-yellow-100 text-yellow-700" :
                    achievement.category === "Safety" ? "bg-red-100 text-red-700" :
                    "bg-gray-100 text-gray-700"
                  }`}>
                    {getAchievementIcon(achievement.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{achievement.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === "testimonials" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Treatment: {testimonial.treatment} • {testimonial.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-[#E0E6E4] text-gray-700 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Need Medical Assistance?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our dedicated team is here to help you 24/7
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Hotline</h3>
              <p className="text-gray-600 mb-2">24/7 Emergency Services</p>
              <p className="text-2xl font-bold">+88-0123456789</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Appointments</h3>
              <p className="text-gray-600 mb-2">Book Your Visit</p>
              <button className="bg-gray-700 text-gray-100 px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                Book Now
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">Rangpur, Bangladesh</p>
              <button className="bg-gray-700 text-gray-100 px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
