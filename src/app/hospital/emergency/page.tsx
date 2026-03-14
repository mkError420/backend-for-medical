"use client"

import React, { useState, useEffect } from "react"
import { Phone, PhoneCall, MapPin, Clock, Users, Star, Bed, Shield, Heart, Brain, Stethoscope, Activity, ArrowRight, CheckCircle, User, MessageCircle, Ambulance, AlertTriangle, Zap, HeartPulse, Timer, Radio, X } from "lucide-react"

interface EmergencyStats {
  totalCases: number
  traumaCases: number
  cardiacCases: number
  strokeCases: number
  pediatricCases: number
  maternityCases: number
  surgicalCases: number
  averageResponseTime: number
  criticalCareBeds: number
  emergencyBeds: number
  ambulances: number
  paramedics: number
  emergencyDoctors: number
  nurses: number
  successRate: number
  patientSatisfaction: number
}

interface EmergencyService {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  available: boolean
  timing: string
  emergency: boolean
  responseTime: string
  contact: string
}

interface EmergencyStaff {
  id: string
  name: string
  title: string
  specialization: string
  experience: string
  image: string
  availability: string
  contact: string
}

interface EmergencyEquipment {
  id: string
  name: string
  description: string
  quantity: number
  status: string
  location: string
}

const emergencyStats: EmergencyStats = {
  totalCases: 45000,
  traumaCases: 12000,
  cardiacCases: 8000,
  strokeCases: 6000,
  pediatricCases: 7000,
  maternityCases: 3500,
  surgicalCases: 8500,
  averageResponseTime: 8,
  criticalCareBeds: 30,
  emergencyBeds: 50,
  ambulances: 12,
  paramedics: 45,
  emergencyDoctors: 15,
  nurses: 120,
  successRate: 96.8,
  patientSatisfaction: 94.5
}

const emergencyServices: EmergencyService[] = [
  {
    id: "1",
    title: "24/7 Emergency Care",
    description: "Round-the-clock emergency medical services with immediate response",
    icon: "ambulance",
    features: ["Immediate Response", "Triage System", "Emergency Surgery", "Critical Care"],
    available: true,
    timing: "24 Hours",
    emergency: true,
    responseTime: "< 5 minutes",
    contact: "+88-0123456789"
  },
  {
    id: "2",
    title: "Trauma Center",
    description: "Advanced trauma care for critical injuries and accidents",
    icon: "shield",
    features: ["Trauma Surgery", "Orthopedic Care", "Neurosurgery", "Burn Treatment"],
    available: true,
    timing: "24 Hours",
    emergency: true,
    responseTime: "< 8 minutes",
    contact: "+88-0123456790"
  },
  {
    id: "3",
    title: "Cardiac Emergency",
    description: "Specialized cardiac emergency care for heart attacks and conditions",
    icon: "heart",
    features: ["Cardiac Cath Lab", "Emergency Angioplasty", "ICU Care", "Rehabilitation"],
    available: true,
    timing: "24 Hours",
    emergency: true,
    responseTime: "< 10 minutes",
    contact: "+88-0123456791"
  },
  {
    id: "4",
    title: "Stroke Unit",
    description: "Dedicated stroke care with thrombolysis and neurointervention",
    icon: "brain",
    features: ["Thrombolysis", "Neuroimaging", "Rehabilitation", "Follow-up Care"],
    available: true,
    timing: "24 Hours",
    emergency: true,
    responseTime: "< 15 minutes",
    contact: "+88-0123456792"
  },
  {
    id: "5",
    title: "Pediatric Emergency",
    description: "Specialized emergency care for children and infants",
    icon: "users",
    features: ["Pediatric ICU", "Neonatal Care", "Child Specialists", "Emergency Vaccination"],
    available: true,
    timing: "24 Hours",
    emergency: true,
    responseTime: "< 12 minutes",
    contact: "+88-0123456793"
  },
  {
    id: "6",
    title: "Maternity Emergency",
    description: "Emergency obstetric care for high-risk pregnancies and deliveries",
    icon: "users",
    features: ["Emergency C-Section", "Blood Bank", "NICU Support", "Maternal ICU"],
    available: true,
    timing: "24 Hours",
    emergency: true,
    responseTime: "< 10 minutes",
    contact: "+88-0123456794"
  }
]

const emergencyStaff: EmergencyStaff[] = [
  {
    id: "1",
    name: "Dr. A. K. M. Fazlul Haque",
    title: "Professor & Head",
    specialization: "Emergency Medicine & Trauma Care",
    experience: "20+ years",
    image: "https://randomuser.me/api/portraits/med/men/32.jpg",
    availability: "24/7 On-call",
    contact: "+88-0123456789"
  },
  {
    id: "2",
    name: "Dr. M. A. Karim",
    title: "Associate Professor",
    specialization: "Cardiac Emergency & Critical Care",
    experience: "15+ years",
    image: "https://randomuser.me/api/portraits/med/men/65.jpg",
    availability: "24/7 On-call",
    contact: "+88-0123456790"
  },
  {
    id: "3",
    name: "Dr. S. R. Ahmed",
    title: "Assistant Professor",
    specialization: "Neuro Emergency & Stroke Care",
    experience: "12+ years",
    image: "https://randomuser.me/api/portraits/med/men/45.jpg",
    availability: "24/7 On-call",
    contact: "+88-0123456791"
  },
  {
    id: "4",
    name: "Dr. N. K. Begum",
    title: "Associate Professor",
    specialization: "Maternal Emergency & High-Risk Pregnancy",
    experience: "18+ years",
    image: "https://randomuser.me/api/portraits/med/women/32.jpg",
    availability: "24/7 On-call",
    contact: "+88-0123456792"
  },
  {
    id: "5",
    name: "Dr. M. R. Khan",
    title: "Assistant Professor",
    specialization: "Pediatric Emergency & Neonatal Care",
    experience: "14+ years",
    image: "https://randomuser.me/api/portraits/med/men/67.jpg",
    availability: "24/7 On-call",
    contact: "+88-0123456793"
  },
  {
    id: "6",
    name: "Dr. A. H. M. R. Khan",
    title: "Associate Professor",
    specialization: "Surgical Emergency & Trauma Surgery",
    experience: "16+ years",
    image: "https://randomuser.me/api/portraits/med/men/75.jpg",
    availability: "24/7 On-call",
    contact: "+88-0123456794"
  }
]

const emergencyEquipment: EmergencyEquipment[] = [
  {
    id: "1",
    name: "Ventilators",
    description: "Advanced mechanical ventilators for respiratory support",
    quantity: 25,
    status: "Operational",
    location: "Emergency ICU"
  },
  {
    id: "2",
    name: "Defibrillators",
    description: "Automated external defibrillators for cardiac emergencies",
    quantity: 15,
    status: "Operational",
    location: "Emergency Bay"
  },
  {
    id: "3",
    name: "Portable X-Ray",
    description: "Mobile X-ray units for immediate imaging",
    quantity: 8,
    status: "Operational",
    location: "Emergency Department"
  },
  {
    id: "4",
    name: "Ultrasound Machines",
    description: "Portable ultrasound for diagnostic imaging",
    quantity: 6,
    status: "Operational",
    location: "Emergency Department"
  },
  {
    id: "5",
    name: "Blood Gas Analyzer",
    description: "Point-of-care blood gas analysis system",
    quantity: 4,
    status: "Operational",
    location: "Emergency Lab"
  },
  {
    id: "6",
    name: "Emergency Monitors",
    description: "Multi-parameter patient monitoring systems",
    quantity: 50,
    status: "Operational",
    location: "Emergency Bays"
  }
]

export default function HospitalEmergencyPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedService, setSelectedService] = useState<EmergencyService | null>(null)
  const [showServiceDetails, setShowServiceDetails] = useState(false)

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "ambulance":
        return <Ambulance className="h-8 w-8" />
      case "shield":
        return <Shield className="h-8 w-8" />
      case "heart":
        return <Heart className="h-8 w-8" />
      case "brain":
        return <Brain className="h-8 w-8" />
      case "users":
        return <Users className="h-8 w-8" />
      default:
        return <Activity className="h-8 w-8" />
    }
  }

  const handleServiceClick = (service: EmergencyService) => {
    setSelectedService(service)
    setShowServiceDetails(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <Ambulance className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Emergency Services</h1>
            <p className="text-red-100 text-lg max-w-3xl mx-auto mb-8">
              24/7 Emergency Medical Care - When Every Second Counts
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">Emergency: +88-0123456789</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Timer className="h-5 w-5" />
                <span className="font-semibold">Avg Response: {emergencyStats.averageResponseTime} mins</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">{emergencyStats.successRate}% Success Rate</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors font-bold text-lg shadow-lg">
                <PhoneCall className="h-6 w-6" />
                Call Emergency Now
              </button>
              <button className="flex items-center gap-2 px-8 py-4 bg-red-800 text-white rounded-lg hover:bg-red-900 transition-colors font-bold text-lg shadow-lg">
                <MapPin className="h-6 w-6" />
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Alert Banner */}
      <div className="bg-red-600 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-3">
            <AlertTriangle className="h-5 w-5 animate-pulse" />
            <span className="font-semibold">24/7 Emergency Services Available - Call +88-0123456789 for Immediate Assistance</span>
            <AlertTriangle className="h-5 w-5 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-red-600 font-semibold mb-2">
                <Activity className="h-5 w-5" />
                <span className="text-2xl">{(emergencyStats.totalCases / 1000).toFixed(0)}K</span>
              </div>
              <p className="text-sm text-gray-600">Annual Cases</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold mb-2">
                <Timer className="h-5 w-5" />
                <span className="text-2xl">{emergencyStats.averageResponseTime}m</span>
              </div>
              <p className="text-sm text-gray-600">Response Time</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold mb-2">
                <Bed className="h-5 w-5" />
                <span className="text-2xl">{emergencyStats.emergencyBeds}</span>
              </div>
              <p className="text-sm text-gray-600">Emergency Beds</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold mb-2">
                <Ambulance className="h-5 w-5" />
                <span className="text-2xl">{emergencyStats.ambulances}</span>
              </div>
              <p className="text-sm text-gray-600">Ambulances</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold mb-2">
                <User className="h-5 w-5" />
                <span className="text-2xl">{emergencyStats.emergencyDoctors}</span>
              </div>
              <p className="text-sm text-gray-600">Emergency Doctors</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-pink-600 font-semibold mb-2">
                <Users className="h-5 w-5" />
                <span className="text-2xl">{emergencyStats.paramedics}</span>
              </div>
              <p className="text-sm text-gray-600">Paramedics</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-indigo-600 font-semibold mb-2">
                <Heart className="h-5 w-5" />
                <span className="text-2xl">{emergencyStats.successRate}%</span>
              </div>
              <p className="text-sm text-gray-600">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-yellow-600 font-semibold mb-2">
                <Star className="h-5 w-5" />
                <span className="text-2xl">{emergencyStats.patientSatisfaction}%</span>
              </div>
              <p className="text-sm text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-8">
            {["overview", "services", "staff", "equipment", "statistics"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 transition-colors capitalize ${
                  activeTab === tab
                    ? "border-red-600 text-red-600"
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
            {/* Emergency Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-600 text-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <Phone className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Emergency Hotline</h3>
                    <p className="text-red-100">24/7 Available</p>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">+88-0123456789</div>
                <p className="text-red-100 text-sm">For all medical emergencies</p>
              </div>
              
              <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <Ambulance className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Ambulance Service</h3>
                    <p className="text-blue-100">24/7 Available</p>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">+88-0123456790</div>
                <p className="text-blue-100 text-sm">For emergency transportation</p>
              </div>
              
              <div className="bg-green-600 text-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Emergency Location</h3>
                    <p className="text-green-100">Ground Floor</p>
                  </div>
                </div>
                <div className="text-lg font-bold mb-2">Main Hospital Building</div>
                <p className="text-green-100 text-sm">Rangpur Community Medical College</p>
              </div>
            </div>

            {/* Emergency Process */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Response Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Call Emergency</h3>
                  <p className="text-gray-600 text-sm">Dial our emergency hotline for immediate assistance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Radio className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Triage Assessment</h3>
                  <p className="text-gray-600 text-sm">Quick assessment to determine priority level</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Immediate Care</h3>
                  <p className="text-gray-600 text-sm">Emergency treatment and stabilization</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HeartPulse className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">4. Specialized Treatment</h3>
                  <p className="text-gray-600 text-sm">Transfer to specialized care if needed</p>
                </div>
              </div>
            </div>

            {/* Emergency Types */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Types We Handle</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Trauma & Accidents</h3>
                    <p className="text-gray-600 text-sm">Road accidents, falls, injuries, and fractures</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cardiac Emergencies</h3>
                    <p className="text-gray-600 text-sm">Heart attacks, chest pain, cardiac arrest</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Stroke & Neurological</h3>
                    <p className="text-gray-600 text-sm">Strokes, seizures, head injuries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pediatric Emergencies</h3>
                    <p className="text-gray-600 text-sm">Child emergencies, fever, breathing issues</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Maternity Emergencies</h3>
                    <p className="text-gray-600 text-sm">Pregnancy complications, delivery emergencies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Surgical Emergencies</h3>
                    <p className="text-gray-600 text-sm">Acute abdomen, injuries requiring surgery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => handleServiceClick(service)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-red-100 text-red-700">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                      <Timer className="h-3 w-3" />
                      {service.responseTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{service.timing}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{service.contact}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, index) => (
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
                    <button className="flex items-center gap-2 text-red-600 hover:text-red-700 text-sm font-medium">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Staff Tab */}
        {activeTab === "staff" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyStaff.map((staff) => (
              <div key={staff.id} className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-200">
                      <img
                        src={staff.image}
                        alt={staff.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{staff.name}</h3>
                      <p className="text-sm text-gray-600">{staff.title}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600">{staff.availability}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Specialization:</span>
                      <p className="text-gray-600">{staff.specialization}</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Experience:</span>
                      <p className="text-gray-600">{staff.experience}</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">Contact:</span>
                      <p className="text-gray-600">{staff.contact}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                      <MessageCircle className="h-4 w-4" />
                      Consult
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Equipment Tab */}
        {activeTab === "equipment" && (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Emergency Equipment</h2>
              <p className="text-gray-600 mt-2">State-of-the-art medical equipment for emergency care</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {emergencyEquipment.map((equipment) => (
                    <tr key={equipment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{equipment.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">{equipment.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{equipment.quantity}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {equipment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{equipment.location}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Statistics Tab */}
        {activeTab === "statistics" && (
          <div className="space-y-8">
            {/* Emergency Cases by Type */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Cases by Type</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="h-10 w-10 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{emergencyStats.traumaCases.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Trauma Cases</div>
                  <div className="text-xs text-gray-500 mt-1">{((emergencyStats.traumaCases / emergencyStats.totalCases) * 100).toFixed(1)}%</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-10 w-10 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{emergencyStats.cardiacCases.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Cardiac Cases</div>
                  <div className="text-xs text-gray-500 mt-1">{((emergencyStats.cardiacCases / emergencyStats.totalCases) * 100).toFixed(1)}%</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-10 w-10 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{emergencyStats.strokeCases.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Stroke Cases</div>
                  <div className="text-xs text-gray-500 mt-1">{((emergencyStats.strokeCases / emergencyStats.totalCases) * 100).toFixed(1)}%</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{emergencyStats.pediatricCases.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Pediatric Cases</div>
                  <div className="text-xs text-gray-500 mt-1">{((emergencyStats.pediatricCases / emergencyStats.totalCases) * 100).toFixed(1)}%</div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{emergencyStats.averageResponseTime} mins</div>
                  <div className="text-sm text-gray-600">Average Response Time</div>
                  <div className="text-xs text-green-600 mt-2">↓ 15% from last year</div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{emergencyStats.successRate}%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                  <div className="text-xs text-green-600 mt-2">↑ 2.3% from last year</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{emergencyStats.patientSatisfaction}%</div>
                  <div className="text-sm text-gray-600">Patient Satisfaction</div>
                  <div className="text-xs text-green-600 mt-2">↑ 1.8% from last year</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{emergencyStats.criticalCareBeds}</div>
                  <div className="text-sm text-gray-600">Critical Care Beds</div>
                  <div className="text-xs text-gray-500 mt-2">85% occupancy rate</div>
                </div>
              </div>
            </div>

            {/* Resource Utilization */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Resource Utilization</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Emergency Beds</span>
                    <span className="text-sm text-gray-600">{emergencyStats.emergencyBeds} beds</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">85% occupied</div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Ambulances</span>
                    <span className="text-sm text-gray-600">{emergencyStats.ambulances} vehicles</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">70% active</div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Emergency Staff</span>
                    <span className="text-sm text-gray-600">{emergencyStats.emergencyDoctors + emergencyStats.nurses} staff</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">90% on duty</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Service Details Modal */}
      {showServiceDetails && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                  <p className="text-gray-600 mt-2">{selectedService.description}</p>
                </div>
                <button
                  onClick={() => setShowServiceDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Details</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>Timing: {selectedService.timing}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Timer className="h-4 w-4 text-gray-400" />
                      <span>Response Time: {selectedService.responseTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>Contact: {selectedService.contact}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                  <div className="space-y-1">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                  <Phone className="h-5 w-5" />
                  Call Emergency
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold">
                  <MessageCircle className="h-5 w-5" />
                  Get Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
