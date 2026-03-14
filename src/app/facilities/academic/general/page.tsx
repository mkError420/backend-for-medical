"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle } from "lucide-react"

export default function GeneralAcademicFacilitiesPage() {
  const [activeView, setActiveView] = useState('dashboard')
  const [selectedFacility, setSelectedFacility] = useState<any>(null)
  const [hoveredFacility, setHoveredFacility] = useState<number | null>(null)

  const views = [
    { id: 'dashboard', label: 'Dashboard', icon: '�' },
    { id: 'facilities', label: 'Facilities', icon: '�️' },
    { id: 'overview', label: 'Overview', icon: '📋' }
  ]

  const facilities = [
    {
      id: 1,
      name: "Practical Laboratory",
      category: 'learning',
      icon: FlaskConical,
      description: "Hands-on practical training facility for medical procedures",
      features: ["Modern Equipment", "Safety Protocols", "Supervised Practice", "Skill Stations", "Assessment Areas", "Storage Facilities"],
      capacity: "40 students",
      hours: "8 AM - 6 PM",
      stats: { equipment: "50+", stations: "20+", supervision: "Full-time", satisfaction: "96%" }
    },
    {
      id: 2,
      name: "Skill Lab",
      category: 'learning',
      icon: Target,
      description: "Dedicated space for clinical skill development",
      features: ["Simulation Mannequins", "Medical Equipment", "Training Modules", "Video Recording", "Feedback Systems", "Practice Areas"],
      capacity: "30 students",
      hours: "8 AM - 8 PM",
      stats: { simulators: "15+", skills: "50+", feedback: "Instant", satisfaction: "97%" }
    },
    {
      id: 3,
      name: "Service Laboratory",
      category: 'learning',
      icon: HeartHandshake,
      description: "Laboratory for clinical service training",
      features: ["Service Bays", "Patient Simulation", "Equipment Training", "Protocol Practice", "Quality Control", "Documentation"],
      capacity: "25 students",
      hours: "9 AM - 5 PM",
      stats: { services: "20+", training: "Comprehensive", quality: "High", satisfaction: "95%" }
    },
    {
      id: 4,
      name: "Museum",
      category: 'learning',
      icon: Trophy,
      description: "Medical museum with historical specimens and displays",
      features: ["Specimen Collection", "Historical Artifacts", "Educational Displays", "Interactive Exhibits", "Research Materials", "Guided Tours"],
      capacity: "100 visitors",
      hours: "9 AM - 5 PM",
      stats: { specimens: "500+", exhibits: "50+", tours: "Daily", satisfaction: "92%" }
    },
    {
      id: 5,
      name: "Class Room",
      category: 'learning',
      icon: GraduationCap,
      description: "Modern classrooms with advanced teaching technology",
      features: ["Smart Boards", "Projectors", "Audio Systems", "Climate Control", "Flexible Seating", "Recording Capability"],
      capacity: "60 students",
      hours: "8 AM - 9 PM",
      stats: { rooms: "15+", technology: "Smart", capacity: "60 each", satisfaction: "94%" }
    },
    {
      id: 6,
      name: "Tutorial Room",
      category: 'learning',
      icon: BookOpen,
      description: "Small group tutorial and discussion rooms",
      features: ["Interactive Displays", "Group Seating", "Whiteboards", "Video Conferencing", "Resource Materials", "Quiet Environment"],
      capacity: "20 students",
      hours: "8 AM - 10 PM",
      stats: { rooms: "10+", groups: "5-20", resources: "Full", satisfaction: "93%" }
    },
    {
      id: 7,
      name: "Gallery",
      category: 'recreation',
      icon: Award,
      description: "Art gallery for student exhibitions and cultural events",
      features: ["Exhibition Space", "Lighting Systems", "Display Areas", "Event Hosting", "Art Storage", "Reception Area"],
      capacity: "200 visitors",
      hours: "10 AM - 6 PM",
      stats: { exhibitions: "12/year", space: "Large", events: "Regular", satisfaction: "91%" }
    },
    {
      id: 8,
      name: "Cadaver Room",
      category: 'learning',
      icon: Brain,
      description: "Advanced anatomy facility with cadaver preservation",
      features: ["Preservation Systems", "Dissection Tables", "Ventilation", "Safety Equipment", "Storage", "Study Areas"],
      capacity: "30 students",
      hours: "8 AM - 6 PM",
      stats: { tables: "15+", preservation: "Advanced", safety: "High", satisfaction: "95%" }
    },
    {
      id: 9,
      name: "Dissection Hall",
      category: 'learning',
      icon: Search,
      description: "Large-scale dissection facility for anatomy training",
      features: ["Multiple Stations", "Audio Systems", "Visual Aids", "Equipment Storage", "Cleaning Facilities", "Waste Management"],
      capacity: "50 students",
      hours: "8 AM - 6 PM",
      stats: { stations: "25+", capacity: "50", equipment: "Modern", satisfaction: "96%" }
    },
    {
      id: 10,
      name: "Histology Practical Room",
      category: 'learning',
      icon: Microscope,
      description: "Specialized facility for histology practical training",
      features: ["Microscopy Stations", "Slide Preparation", "Staining Areas", "Storage", "Safety Equipment", "Quality Control"],
      capacity: "25 students",
      hours: "9 AM - 5 PM",
      stats: { microscopes: "20+", slides: "1000+", preparation: "Full", satisfaction: "94%" }
    },
    {
      id: 11,
      name: "Book Corner",
      category: 'learning',
      icon: FileText,
      description: "Quiet study area with comprehensive medical library",
      features: ["Reference Books", "Study Carrels", "Computer Access", "Printing Services", "Quiet Zones", "Research Assistance"],
      capacity: "80 students",
      hours: "8 AM - 10 PM",
      stats: { books: "10000+", seats: "80", computers: "15", satisfaction: "92%" }
    },
    {
      id: 12,
      name: "Bed Side Teaching Facilities",
      category: 'learning',
      icon: Bed,
      description: "Clinical training facility simulating hospital bedside care",
      features: ["Hospital Beds", "Medical Equipment", "Patient Simulators", "Monitoring Systems", "Training Areas", "Documentation"],
      capacity: "20 students",
      hours: "8 AM - 6 PM",
      stats: { beds: "20+", equipment: "Full", simulation: "Advanced", satisfaction: "96%" }
    },
    {
      id: 13,
      name: "Labour Room",
      category: 'support',
      icon: Baby,
      description: "Obstetric training facility for delivery procedures",
      features: ["Delivery Beds", "Monitoring Equipment", "Resuscitation Tools", "Neonatal Care", "Family Areas", "Training Simulators"],
      capacity: "15 patients",
      hours: "24/7",
      stats: { beds: "10+", equipment: "Advanced", training: "Comprehensive", satisfaction: "97%" }
    },
    {
      id: 14,
      name: "VIA Centre",
      category: 'support',
      icon: Shield,
      description: "Violence and Injury Assessment center",
      features: ["Assessment Rooms", "Medical Examination", "Documentation", "Counseling Services", "Legal Support", "Privacy Protection"],
      capacity: "20 cases/day",
      hours: "24/7 emergency, 9 AM - 5 PM routine",
      stats: { rooms: "5+", staff: "10+", privacy: "High", satisfaction: "95%" }
    },
    {
      id: 15,
      name: "Eclampsia Room",
      category: 'support',
      icon: AlertTriangle,
      description: "Specialized facility for eclampsia emergency management",
      features: ["Emergency Equipment", "Monitoring Systems", "Medication Storage", "Resuscitation Tools", "Isolation Capabilities", "Emergency Protocols"],
      capacity: "10 patients",
      hours: "24/7",
      stats: { beds: "8+", equipment: "Advanced", response: "Immediate", satisfaction: "98%" }
    },
    {
      id: 16,
      name: "Septic Room",
      category: 'support',
      icon: AlertCircle,
      description: "Isolation facility for sepsis and critical infection management",
      features: ["Isolation Beds", "Negative Pressure", "Advanced Monitoring", "Specialized Equipment", "Safety Protocols", "Staff Protection"],
      capacity: "8 patients",
      hours: "24/7",
      stats: { beds: "6+", isolation: "Complete", monitoring: "Advanced", satisfaction: "96%" }
    },
    {
      id: 17,
      name: "Procedure & Dressing Room",
      category: 'support',
      icon: Wrench,
      description: "Clinical facility for medical procedures and wound care",
      features: ["Procedure Tables", "Sterile Environment", "Equipment Storage", "Wound Care Supplies", "Recovery Area", "Documentation"],
      capacity: "25 patients/day",
      hours: "8 AM - 8 PM",
      stats: { tables: "8+", sterility: "High", recovery: "Dedicated", satisfaction: "94%" }
    },
    {
      id: 18,
      name: "ICU",
      category: 'support',
      icon: Activity,
      description: "Intensive Care Unit for critical patient management",
      features: ["Critical Care Beds", "Advanced Ventilation", "Multi-parameter Monitoring", "Life Support Systems", "Emergency Equipment", "Staff Station"],
      capacity: "12 patients",
      hours: "24/7",
      stats: { beds: "12+", ventilation: "Advanced", monitoring: "Multi-parameter", satisfaction: "97%" }
    },
    {
      id: 19,
      name: "HDU",
      category: 'support',
      icon: HeartPulse,
      description: "High Dependency Unit for intermediate care patients",
      features: ["HDU Beds", "Specialized Monitoring", "Respiratory Support", "Medication Pumps", "Emergency Response", "Family Facilities"],
      capacity: "8 patients",
      hours: "24/7",
      stats: { beds: "8+", monitoring: "Specialized", support: "Respiratory", satisfaction: "95%" }
    },
    {
      id: 20,
      name: "CCU",
      category: 'support',
      icon: HeartHandshake,
      description: "Coronary Care Unit for cardiac patients",
      features: ["Cardiac Beds", "Cardiac Monitoring", "Defibrillators", "Emergency Medications", "Post-procedure Care", "Cardiac Rehabilitation"],
      capacity: "10 patients",
      hours: "24/7",
      stats: { beds: "10+", monitoring: "Cardiac", equipment: "Advanced", satisfaction: "96%" }
    },
    {
      id: 21,
      name: "Word",
      category: 'recreation',
      icon: MessageCircle,
      description: "Student recreation and social activity center",
      features: ["Common Areas", "Entertainment Systems", "Study Spaces", "Refreshment Services", "Meeting Points", "Relaxation Zones"],
      capacity: "150 students",
      hours: "10 AM - 10 PM",
      stats: { capacity: "150", activities: "Multiple", services: "Full", satisfaction: "89%" }
    }
  ]

  
  const realTimeStats = [
    { label: "Active Facilities", value: 12, unit: "facilities", color: "text-blue-600", icon: "🏛️" },
    { label: "Current Occupancy", value: 3200, unit: "students", color: "text-green-600", icon: "👥" },
    { label: "Available Spaces", value: 1800, unit: "spots", color: "text-orange-600", icon: "📍" },
    { label: "Facility Usage", value: 64, unit: "%", color: "text-purple-600", icon: "📊" }
  ]

  const renderFacilityCard = (facility: any) => (
    <div key={facility.id}
         className={`relative transform transition-all duration-300 cursor-pointer ${
           hoveredFacility === facility.id ? 'scale-105 z-10' : 'hover:scale-102'
         }`}
         onMouseEnter={() => setHoveredFacility(facility.id)}
         onMouseLeave={() => setHoveredFacility(null)}>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${
          facility.category === 'learning' ? 'from-green-400 to-green-600' :
          facility.category === 'technology' ? 'from-orange-400 to-orange-600' :
          facility.category === 'recreation' ? 'from-pink-400 to-pink-600' :
          facility.category === 'support' ? 'from-indigo-400 to-indigo-600' :
          'from-blue-400 to-blue-600'
        }`}></div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <facility.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">{facility.stats.satisfaction}</div>
              <div className="text-xs text-gray-600">Satisfaction</div>
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-gray-800 mb-2">{facility.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{facility.description}</p>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Capacity:</span>
              <span className="font-medium">{facility.capacity}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Hours:</span>
              <span className="font-medium">{facility.hours}</span>
            </div>
            
            {hoveredFacility === facility.id && (
              <div className="space-y-3 pt-3 border-t border-gray-200">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {facility.features.slice(0, 3).map((feature: string, featureIndex: number) => (
                      <span key={featureIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  const renderFacilityDetail = () => {
    if (!selectedFacility) return null

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600">
            <button
              onClick={() => setSelectedFacility(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute inset-0 flex items-center justify-center">
              <selectedFacility.icon className="w-24 h-24 text-white/80" />
            </div>
          </div>
          
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedFacility.name}</h2>
              <p className="text-gray-600 text-lg">{selectedFacility.description}</p>
              {selectedFacility.highlight && (
                <div className="mt-4 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 font-medium flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    {selectedFacility.highlight}
                  </p>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">{selectedFacility.capacity}</div>
                <div className="text-sm text-gray-600">Capacity</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-green-600">{selectedFacility.hours}</div>
                <div className="text-sm text-gray-600">Operating Hours</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">{selectedFacility.stats.satisfaction}</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Features & Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedFacility.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(selectedFacility.stats).map(([key, value]: [string, any]) => (
                  <div key={key} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg text-center">
                    <div className="text-xl font-bold text-gray-800">{value}</div>
                    <div className="text-xs text-gray-600 capitalize">{key.replace(/_/g, ' ')}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Schedule Visit
              </button>
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Real-time Stats Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {realTimeStats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">{stat.icon}</div>
              <div className={`w-3 h-3 rounded-full ${stat.color === 'text-blue-600' ? 'bg-blue-600' : stat.color === 'text-green-600' ? 'bg-green-600' : stat.color === 'text-orange-600' ? 'bg-orange-600' : 'bg-purple-600'} animate-pulse`}></div>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 mb-1">{stat.unit}</div>
            <div className={`text-sm font-medium ${stat.color}`}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Department Overview */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Building className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">12</div>
            <div className="text-sm text-gray-600">Facilities</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">5,000+</div>
            <div className="text-sm text-gray-600">Daily Capacity</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">94%</div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">24/7</div>
            <div className="text-sm text-gray-600">Hours</div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderFacilities = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {facilities.map(renderFacilityCard)}
    </div>
  )

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Facility Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Learning Spaces</h4>
                <p className="text-sm text-gray-600">Modern educational environments</p>
              </div>
            </div>
            <div className="space-y-2">
              {facilities.filter(f => f.category === 'learning').map((facility, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  {facility.name}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Technology</h4>
                <p className="text-sm text-gray-600">Advanced tech infrastructure</p>
              </div>
            </div>
            <div className="space-y-2">
              {facilities.filter(f => f.category === 'technology').map((facility, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-orange-600" />
                  {facility.name}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-pink-50 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Recreation</h4>
                <p className="text-sm text-gray-600">Wellness and leisure facilities</p>
              </div>
            </div>
            <div className="space-y-2">
              {facilities.filter(f => f.category === 'recreation').map((facility, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  {facility.name}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Support Services</h4>
                <p className="text-sm text-gray-600">Essential support infrastructure</p>
              </div>
            </div>
            <div className="space-y-2">
              {facilities.filter(f => f.category === 'support').map((facility, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  {facility.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch(activeView) {
      case 'dashboard': return renderDashboard()
      case 'facilities': return renderFacilities()
      case 'overview': return renderOverview()
      default: return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Modern Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-green-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <span className="text-6xl">🏛️</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">General Academic Facilities</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                World-class infrastructure designed to nurture excellence in medical education and research
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Student Excellence
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  24/7 Access
                </div>
              </div>
            </div>
            
            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-sm text-gray-700">Facilities</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-green-600">5,000+</div>
                <div className="text-sm text-gray-700">Daily Capacity</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-purple-600">94%</div>
                <div className="text-sm text-gray-700">Satisfaction</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-gray-700">Hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-lg">
        <div className="responsive-container-full">
          <div className="flex justify-center">
            {views.map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id)}
                className={`flex items-center justify-center gap-2 px-6 py-4 border-b-4 transition-all duration-300 whitespace-nowrap min-w-[120px] ${
                  activeView === view.id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{view.icon}</span>
                <span className="font-medium">{view.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Our World-Class Facilities</h2>
          <p className="text-xl mb-8 opacity-90">Schedule a campus tour and see firsthand how our facilities support excellence in medical education</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Campus Tour
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Download Facility Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
