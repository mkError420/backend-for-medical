"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon } from "lucide-react"

export default function BedsideTeachingPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedRoom, setSelectedRoom] = useState<any>(null)
  const [activeSimulation, setActiveSimulation] = useState<any>(null)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-blue-500 to-blue-600' },
    { id: 'rooms', label: 'Teaching Rooms', icon: '🏥', color: 'from-green-500 to-green-600' },
    { id: 'simulations', label: 'Simulations', icon: '🎭', color: 'from-purple-500 to-purple-600' },
    { id: 'equipment', label: 'Equipment', icon: '🔧', color: 'from-orange-500 to-orange-600' },
    { id: 'schedule', label: 'Schedule', icon: '📅', color: 'from-red-500 to-red-600' }
  ]

  const teachingRooms = [
    {
      id: 1,
      name: "Clinical Skills Lab A",
      building: "Clinical Block",
      floor: "2nd Floor",
      room: "CSL-A-201",
      capacity: 25,
      type: "General Ward",
      status: "available",
      features: ["Hospital beds", "Patient monitors", "IV stands", "Oxygen supply", "Emergency equipment", "Privacy curtains"],
      equipment: ["Patient simulators", "Vital signs monitors", "ECG machines", "Suction devices", "Crash carts"],
      simulationLevel: "Basic",
      currentSession: null,
      nextSession: "14:00-16:00 - Basic Clinical Skills",
      instructor: "Dr. M. Ali",
      utilization: 78,
      rating: 4.7,
      lastInspection: "2025-02-14",
      accessibility: "Wheelchair accessible"
    },
    {
      id: 2,
      name: "Clinical Skills Lab B",
      building: "Clinical Block",
      floor: "2nd Floor",
      room: "CSL-B-202",
      capacity: 20,
      type: "ICU Simulation",
      status: "in-use",
      features: ["ICU beds", "Ventilators", "Advanced monitors", "Infusion pumps", "Defibrillators", "Central oxygen"],
      equipment: ["High-fidelity simulators", "Ventilator systems", "Multi-parameter monitors", "Infusion pumps", "Defibrillators"],
      simulationLevel: "Advanced",
      currentSession: "10:00-12:00 - ICU Training",
      nextSession: "14:00-16:00 - Emergency Response",
      instructor: "Prof. Dr. S. Karim",
      utilization: 92,
      rating: 4.9,
      lastInspection: "2025-02-13",
      accessibility: "Wheelchair accessible"
    },
    {
      id: 3,
      name: "Pediatric Ward Simulation",
      building: "Clinical Block",
      floor: "3rd Floor",
      room: "PWS-301",
      capacity: 15,
      type: "Pediatric",
      status: "available",
      features: ["Pediatric beds", "Neonatal incubators", "Child-sized equipment", "Play area", "Parent counseling space"],
      equipment: ["Pediatric simulators", "Neonatal monitors", "Infant warmers", "Pediatric equipment"],
      simulationLevel: "Intermediate",
      currentSession: null,
      nextSession: "15:00-17:00 - Pediatric Assessment",
      instructor: "Dr. A. Rahman",
      utilization: 65,
      rating: 4.6,
      lastInspection: "2025-02-12",
      accessibility: "Child-friendly"
    },
    {
      id: 4,
      name: "Emergency Room Simulation",
      building: "Clinical Block",
      floor: "1st Floor",
      room: "ER-101",
      capacity: 30,
      type: "Emergency",
      status: "available",
      features: ["Trauma bay", "Resuscitation area", "Decontamination shower", "Isolation rooms", "Communication system"],
      equipment: ["Trauma simulators", "Emergency equipment", "Communication devices", "Decontamination units"],
      simulationLevel: "Advanced",
      currentSession: null,
      nextSession: "16:00-18:00 - Emergency Procedures",
      instructor: "Dr. N. Ahmed",
      utilization: 71,
      rating: 4.8,
      lastInspection: "2025-02-15",
      accessibility: "Full accessible"
    },
    {
      id: 5,
      name: "Surgical Ward Simulation",
      building: "Clinical Block",
      floor: "3rd Floor",
      room: "SW-301",
      capacity: 18,
      type: "Surgical",
      status: "maintenance",
      features: ["Surgical beds", "Operating lights", "Scrub sinks", "Anesthesia machines", "Recovery area"],
      equipment: ["Surgical simulators", "Anesthesia machines", "Surgical lights", "Monitoring systems"],
      simulationLevel: "Advanced",
      currentSession: "Under Maintenance",
      nextSession: "Available from Tomorrow",
      instructor: "Prof. Dr. R. Islam",
      utilization: 85,
      rating: 4.9,
      lastInspection: "2025-02-10",
      accessibility: "Full accessible"
    },
    {
      id: 6,
      name: "Obstetrics & Gynecology Lab",
      building: "Clinical Block",
      floor: "4th Floor",
      room: "OBGYN-401",
      capacity: 12,
      type: "Obstetrics",
      status: "available",
      features: ["Delivery beds", "Labor rooms", "Neonatal care area", "Counseling space", "Privacy curtains"],
      equipment: ["Obstetric simulators", "Fetal monitors", "Delivery beds", "Neonatal equipment"],
      simulationLevel: "Intermediate",
      currentSession: null,
      nextSession: "13:00-15:00 - Normal Delivery",
      instructor: "Dr. K. Hossain",
      utilization: 73,
      rating: 4.5,
      lastInspection: "2025-02-14",
      accessibility: "Women's health focused"
    }
  ]

  const simulations = [
    {
      id: 1,
      name: "Basic Patient Assessment",
      category: "fundamental",
      difficulty: "Beginner",
      duration: "45 minutes",
      maxParticipants: 8,
      description: "Comprehensive training in basic patient assessment techniques including history taking and physical examination",
      objectives: ["History taking", "Physical examination", "Vital signs measurement", "Documentation"],
      skills: ["Communication", "Examination techniques", "Vital signs", "Patient interaction"],
      equipment: ["Stethoscope", "Blood pressure cuff", "Thermometer", "Penlight"],
      scenarios: ["Routine check-up", "Pre-operative assessment", "Post-operative care"],
      assessment: ["Direct observation", "Skills checklist", "Performance evaluation"],
      instructor: "Dr. M. Ali"
    },
    {
      id: 2,
      name: "Advanced Cardiac Assessment",
      category: "cardiac",
      difficulty: "Advanced",
      duration: "90 minutes",
      maxParticipants: 6,
      objectives: ["Cardiac examination", "ECG interpretation", "Heart sounds analysis", "Emergency response"],
      skills: ["ECG placement", "Cardiac auscultation", "Murmur identification", "Arrhythmia recognition"],
      equipment: ["ECG machine", "Stethoscope", "Cardiac monitors", "Emergency drugs"],
      scenarios: ["Myocardial infarction", "Arrhythmias", "Heart failure", "Cardiac arrest"],
      assessment: ["ECG analysis", "Clinical reasoning", "Time measurement", "Protocol adherence"],
      instructor: "Prof. Dr. S. Karim"
    },
    {
      id: 3,
      name: "Pediatric Assessment",
      category: "pediatric",
      difficulty: "Intermediate",
      duration: "60 minutes",
      maxParticipants: 8,
      objectives: ["Child examination", "Growth assessment", "Developmental screening", "Parent communication"],
      skills: ["Pediatric examination", "Growth charts", "Developmental milestones", "Family interaction"],
      equipment: ["Pediatric stethoscope", "Growth charts", "Developmental tools", "Toys for distraction"],
      scenarios: ["Well-child visit", "Fever assessment", "Developmental delay", "Vaccination counseling"],
      assessment: ["Age-appropriate examination", "Parent communication", "Documentation", "Sensitivity"],
      instructor: "Dr. A. Rahman"
    },
    {
      id: 4,
      name: "Emergency Response",
      category: "emergency",
      difficulty: "Advanced",
      duration: "120 minutes",
      maxParticipants: 10,
      objectives: ["Triage", "Basic life support", "Advanced life support", "Team coordination"],
      skills: ["CPR", "AED use", "Airway management", "Team leadership", "Resource management"],
      equipment: ["AED trainers", "Bag-valve-mask", "Emergency drugs", "Defibrillators"],
      scenarios: ["Cardiac arrest", "Trauma", "Respiratory emergency", "Multiple casualties"],
      assessment: ["Time measurement", "Protocol adherence", "Team performance", "Decision making"],
      instructor: "Dr. N. Ahmed"
    },
    {
      id: 5,
      name: "Surgical Ward Management",
      category: "surgical",
      difficulty: "Intermediate",
      duration: "75 minutes",
      maxParticipants: 6,
      objectives: ["Post-operative care", "Wound management", "Pain assessment", "Complication monitoring"],
      skills: ["Wound dressing", "Drain management", "Pain assessment", "Infection control"],
      equipment: ["Dressing kits", "Drainage systems", "Pain scales", "Monitoring devices"],
      scenarios: ["Post-op recovery", "Wound infection", "Pain crisis", "Surgical complications"],
      assessment: ["Clinical judgment", "Prioritization", "Documentation", "Communication"],
      instructor: "Prof. Dr. R. Islam"
    },
    {
      id: 6,
      name: "Obstetric Emergency",
      category: "obstetrics",
      difficulty: "Advanced",
      duration: "90 minutes",
      maxParticipants: 8,
      objectives: ["Emergency obstetrics", "Neonatal resuscitation", "High-risk pregnancy", "Team coordination"],
      skills: ["Emergency delivery", "Neonatal resuscitation", "Maternal stabilization", "Team communication"],
      equipment: ["Delivery kits", "Neonatal resuscitation equipment", "Emergency drugs", "Monitoring systems"],
      scenarios: ["Preeclampsia", "Postpartum hemorrhage", "Shoulder dystocia", "Neonatal depression"],
      assessment: ["Clinical decision making", "Time management", "Team coordination", "Protocol adherence"],
      instructor: "Dr. K. Hossain"
    }
  ]

  const equipment = [
    {
      name: "Patient Simulators",
      category: "simulation",
      count: 12,
      types: ["Adult male", "Adult female", "Pediatric", "Neonatal", "Geriatric"],
      features: ["Realistic anatomy", "Vital signs simulation", "Voice response", "Wireless control"],
      maintenance: "Weekly calibration",
      status: "Operational"
    },
    {
      name: "Monitoring Systems",
      category: "diagnostic",
      count: 18,
      types: ["Multi-parameter monitors", "ECG machines", "Pulse oximeters", "Blood pressure monitors"],
      features: ["Real-time data", "Alarm systems", "Data recording", "Trend analysis"],
      maintenance: "Daily checks",
      status: "Operational"
    },
    {
      name: "Emergency Equipment",
      category: "emergency",
      count: 24,
      types: ["AEDs", "Crash carts", "Emergency drugs", "Airway equipment", "Defibrillators"],
      features: ["Portable", "Battery powered", "Standardized kits", "Regular inspection"],
      maintenance: "Monthly inspection",
      status: "Operational"
    },
    {
      name: "Examination Tools",
      category: "diagnostic",
      count: "Complete sets",
      types: ["Stethoscopes", "Otoscopes", "Ophthalmoscopes", "Thermometers", "Penlights"],
      features: ["Professional grade", "Student sets", "Regular calibration", "Replacement available"],
      maintenance: "As needed",
      status: "Operational"
    },
    {
      name: "Communication Devices",
      category: "communication",
      count: 15,
      types: ["Intercom systems", "Recording devices", "Patient call systems", "Team communication"],
      features: ["Hands-free", "Recording capability", "Clear audio", "Multiple channels"],
      maintenance: "Weekly testing",
      status: "Operational"
    },
    {
      name: "Documentation Tools",
      category: "documentation",
      count: "Complete sets",
      types: ["Electronic records", "Paper forms", "Assessment tools", "Checklists"],
      features: ["HIPAA compliant", "Standardized forms", "Digital integration", "Audit trail"],
      maintenance: "Software updates",
      status: "Operational"
    }
  ]

  const todaySchedule = [
    {
      time: "09:00-11:00",
      room: "CSL-B-202",
      simulation: "ICU Training",
      group: "Batch 2023 - Group A",
      instructor: "Prof. Dr. S. Karim",
      participants: 20,
      status: "scheduled"
    },
    {
      time: "11:00-13:00",
      room: "CSL-A-201",
      simulation: "Basic Assessment",
      group: "Batch 2024 - Group B",
      instructor: "Dr. M. Ali",
      participants: 25,
      status: "scheduled"
    },
    {
      time: "14:00-16:00",
      room: "CSL-A-201",
      simulation: "Basic Clinical Skills",
      group: "Batch 2024 - Group C",
      instructor: "Dr. M. Ali",
      participants: 25,
      status: "scheduled"
    },
    {
      time: "16:00-18:00",
      room: "ER-101",
      simulation: "Emergency Response",
      group: "Batch 2023 - Group B",
      instructor: "Dr. N. Ahmed",
      participants: 30,
      status: "scheduled"
    },
    {
      time: "15:00-17:00",
      room: "PWS-301",
      simulation: "Pediatric Assessment",
      group: "Batch 2024 - Group D",
      instructor: "Dr. A. Rahman",
      participants: 15,
      status: "scheduled"
    }
  ]

  const performanceMetrics = [
    {
      label: "Room Utilization",
      value: 76,
      unit: "%",
      trend: "up",
      icon: Building,
      color: "text-blue-600"
    },
    {
      label: "Daily Sessions",
      value: 22,
      unit: "sessions",
      trend: "up",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      label: "Student Satisfaction",
      value: 92,
      unit: "%",
      trend: "stable",
      icon: Star,
      color: "text-purple-600"
    },
    {
      label: "Simulation Success",
      value: 88,
      unit: "%",
      trend: "up",
      icon: Target,
      color: "text-orange-600"
    }
  ]

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="w-8 h-8 text-blue-600" />
                <div className={`flex items-center gap-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-600' :
                  metric.trend === 'down' ? 'text-red-600' :
                  'text-gray-600'
                }`}>
                  {metric.trend === 'up' && <TrendingUp className="w-4 h-4" />}
                  {metric.trend === 'down' && <AlertTriangle className="w-4 h-4" />}
                  {metric.trend === 'stable' && <Activity className="w-4 h-4" />}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{metric.value}{metric.unit}</div>
              <div className={`text-sm font-medium ${metric.color}`}>{metric.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Facility Overview */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="w-5 h-5" />
            Bedside Teaching Facilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Teaching Rooms</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">128</div>
              <div className="text-sm text-gray-600">Total Capacity</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Simulation Types</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <Bed className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">6</div>
            <div className="text-sm opacity-90">Teaching Rooms</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <Stethoscope className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">18</div>
            <div className="text-sm opacity-90">Monitoring Systems</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <FileText className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">4,920</div>
            <div className="text-sm opacity-90">Total Slides</div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Today's Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {todaySchedule.map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    session.status === 'completed' ? 'bg-green-500' :
                    session.status === 'in-progress' ? 'bg-blue-500' :
                    'bg-gray-400'
                  }`}></div>
                  <div>
                    <div className="font-semibold text-gray-800">{session.time}</div>
                    <div className="text-sm text-gray-600">{session.simulation}</div>
                    <div className="text-xs text-gray-500">{session.group} • {session.instructor}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{session.room}</div>
                  <div className="text-xs text-gray-600">{session.participants} participants</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderRooms = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachingRooms.map((room, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{room.name}</h3>
                  <p className="text-sm text-gray-600">{room.type} • {room.capacity} capacity</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  room.status === 'available' ? 'bg-green-500' :
                  room.status === 'in-use' ? 'bg-blue-500' :
                  room.status === 'maintenance' ? 'bg-red-500' :
                  'bg-yellow-500'
                }`}></div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{room.building} • {room.floor}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Room:</span>
                  <span className="font-medium">{room.room}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Simulation Level:</span>
                  <span className="font-medium">{room.simulationLevel}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Utilization:</span>
                  <span className="font-medium">{room.utilization}%</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {room.features.slice(0, 4).map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                  {room.features.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{room.features.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Equipment:</h4>
                <div className="flex flex-wrap gap-1">
                  {room.equipment.slice(0, 3).map((equipment, equipmentIndex) => (
                    <span key={equipmentIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {equipment}
                    </span>
                  ))}
                  {room.equipment.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{room.equipment.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Current Status:</h4>
                <p className="text-sm text-gray-600">
                  {room.currentSession || room.nextSession}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                {room.status === 'available' && (
                  <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Book Room
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderSimulations = () => (
    <div className="space-y-8">
      {/* Simulation Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'fundamental', 'cardiac', 'pediatric', 'emergency', 'surgical', 'obstetrics'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveSimulation(category)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeSimulation === category
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Simulations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {simulations
          .filter(sim => activeSimulation === 'all' || sim.category === activeSimulation)
          .map((simulation, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{simulation.name}</h3>
                  <p className="text-sm text-gray-600">{simulation.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      simulation.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      simulation.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {simulation.difficulty}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{simulation.duration}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Max Participants:</span>
                  <span className="font-medium">{simulation.maxParticipants}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Instructor:</span>
                  <span className="font-medium">{simulation.instructor}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Learning Objectives:</h4>
                <div className="space-y-1">
                  {simulation.objectives.map((objective, objectiveIndex) => (
                    <div key={objectiveIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {objective}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Skills Covered:</h4>
                <div className="flex flex-wrap gap-1">
                  {simulation.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                  {simulation.skills.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{simulation.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Equipment Required:</h4>
                <div className="flex flex-wrap gap-1">
                  {simulation.equipment.map((equipment, equipmentIndex) => (
                    <span key={equipmentIndex} className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                      {equipment}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Book Session
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderEquipment = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Count:</span>
                  <span className="font-medium">{item.count}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium text-green-600">{item.status}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Maintenance:</span>
                  <span className="font-medium">{item.maintenance}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {item.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderSchedule = () => (
    <div className="space-y-8">
      {/* Schedule Overview */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Weekly Schedule Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="text-center">
                <div className="font-semibold text-gray-800 mb-2">{day}</div>
                <div className="space-y-1">
                  <div className="bg-blue-100 text-blue-700 text-xs p-1 rounded">
                    09:00-11:00
                  </div>
                  <div className="bg-green-100 text-green-700 text-xs p-1 rounded">
                    14:00-16:00
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Schedule */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Today's Detailed Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {todaySchedule.map((session, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">{session.simulation}</div>
                    <div className="text-sm text-gray-600">
                      {session.time} • {session.room} • {session.instructor}
                    </div>
                    <div className="text-xs text-gray-500">{session.group} • {session.participants} participants</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    session.status === 'completed' ? 'bg-green-100 text-green-700' :
                    session.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {session.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview()
      case 'rooms': return renderRooms()
      case 'simulations': return renderSimulations()
      case 'equipment': return renderEquipment()
      case 'schedule': return renderSchedule()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-green-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <Bed className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Bedside Teaching Facilities</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Advanced clinical training facility with patient simulators and real-time monitoring systems
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Clinical Excellence
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Patient Safety
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-lg">
        <div className="responsive-container-full">
          <div className="flex justify-center overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 px-6 py-4 border-b-4 transition-all duration-300 whitespace-nowrap min-w-[120px] ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Excellence in Clinical Training</h2>
          <p className="text-xl mb-8 opacity-90">State-of-the-art bedside teaching facility for comprehensive clinical skills development</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Session
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Simulations
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
