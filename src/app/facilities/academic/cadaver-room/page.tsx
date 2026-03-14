"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon } from "lucide-react"

export default function CadaverRoomPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedSpecimen, setSelectedSpecimen] = useState<any>(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'specimens', label: 'Specimens', icon: '🧬' },
    { id: 'equipment', label: 'Equipment', icon: '🔬' },
    { id: 'schedule', label: 'Schedule', icon: '📅' },
    { id: 'safety', label: 'Safety', icon: '🛡️' }
  ]

  const specimens = [
    {
      id: 1,
      name: "Adult Male Cadaver",
      age: "72 years",
      gender: "Male",
      cause: "Natural causes",
      preservation: "Formalin-fixed",
      condition: "Excellent",
      status: "available",
      assignedTo: "Batch 2024 - Group A",
      usage: "Anatomy dissection",
      acquisitionDate: "2024-01-15",
      lastUsed: "2025-02-10",
      totalUsage: 45,
      remainingUsage: 55,
      location: "Cadaver Room A - Table 1",
      specialFeatures: ["Complete musculature", "Intact organs", "Good vascular system", "Preserved nervous system"],
      restrictions: ["No photography", "Supervised use only", "Proper documentation required"],
      maintenance: "Weekly inspection",
      nextMaintenance: "2025-02-17"
    },
    {
      id: 2,
      name: "Adult Female Cadaver",
      age: "68 years",
      gender: "Female",
      cause: "Cardiac arrest",
      preservation: "Formalin-fixed",
      condition: "Good",
      status: "in-use",
      assignedTo: "Batch 2023 - Group B",
      usage: "Regional anatomy",
      acquisitionDate: "2023-08-20",
      lastUsed: "2025-02-14",
      totalUsage: 62,
      remainingUsage: 38,
      location: "Cadaver Room B - Table 2",
      specialFeatures: ["Reproductive system intact", "Good organ preservation", "Detailed vasculature"],
      restrictions: ["No photography", "Supervised use only"],
      maintenance: "Weekly inspection",
      nextMaintenance: "2025-02-18"
    },
    {
      id: 3,
      name: "Elderly Male Cadaver",
      age: "85 years",
      gender: "Male",
      cause: "Respiratory failure",
      preservation: "Formalin-fixed",
      condition: "Fair",
      status: "maintenance",
      assignedTo: "Unassigned",
      usage: "Geriatric anatomy study",
      acquisitionDate: "2024-03-10",
      lastUsed: "2025-02-05",
      totalUsage: 28,
      remainingUsage: 72,
      location: "Cadaver Room A - Table 3",
      specialFeatures: ["Age-related changes visible", "Pathological conditions", "Detailed bone structure"],
      restrictions: ["Limited use", "Supervision required", "Special handling"],
      maintenance: "Bi-weekly inspection",
      nextMaintenance: "2025-02-16"
    },
    {
      id: 4,
      name: "Middle-aged Female Cadaver",
      age: "45 years",
      gender: "Female",
      cause: "Trauma",
      preservation: "Formalin-fixed",
      condition: "Good",
      status: "available",
      assignedTo: "Unassigned",
      usage: "Surgical anatomy",
      acquisitionDate: "2024-06-25",
      lastUsed: "2025-02-08",
      totalUsage: 35,
      remainingUsage: 65,
      location: "Cadaver Room B - Table 1",
      specialFeatures: ["Trauma injuries visible", "Intact organ systems", "Good tissue quality"],
      restrictions: ["Trauma study focus", "Documentation required"],
      maintenance: "Weekly inspection",
      nextMaintenance: "2025-02-19"
    },
    {
      id: 5,
      name: "Pediatric Specimen",
      age: "8 years",
      gender: "Male",
      cause: "Congenital heart defect",
      preservation: "Formalin-fixed",
      condition: "Excellent",
      status: "reserved",
      assignedTo: "Pediatrics Department",
      usage: "Pediatric anatomy",
      acquisitionDate: "2024-09-12",
      lastUsed: "2025-02-12",
      totalUsage: 18,
      remainingUsage: 82,
      location: "Cadaver Room C - Table 1",
      specialFeatures: ["Rare specimen", "Congenital anomalies", "Developmental study"],
      restrictions: ["Department approval required", "Limited access", "Special handling"],
      maintenance: "Weekly inspection",
      nextMaintenance: "2025-02-20"
    },
    {
      id: 6,
      name: "Adult Male Cadaver - Surgical",
      age: "58 years",
      gender: "Male",
      cause: "Liver failure",
      preservation: "Formalin-fixed",
      condition: "Good",
      status: "available",
      assignedTo: "Unassigned",
      usage: "Surgical procedures practice",
      acquisitionDate: "2024-11-05",
      lastUsed: "2025-02-11",
      totalUsage: 22,
      remainingUsage: 78,
      location: "Cadaver Room C - Table 2",
      specialFeatures: ["Surgical anatomy", "Organ systems intact", "Good tissue quality"],
      restrictions: ["Surgical focus only", "Advanced students"],
      maintenance: "Weekly inspection",
      nextMaintenance: "2025-02-21"
    }
  ]

  const equipment = [
    {
      name: "Dissection Tables",
      category: "furniture",
      count: 12,
      condition: "Excellent",
      location: "All Cadaver Rooms",
      features: ["Stainless steel", "Adjustable height", "Built-in drainage", "Side storage"],
      maintenance: "Daily cleaning",
      lastMaintenance: "2025-02-14"
    },
    {
      name: "Ventilation System",
      category: "safety",
      count: 6,
      condition: "Good",
      location: "All Cadaver Rooms",
      features: ["HEPA filters", "Air exchange 12x/hour", "Formaldehyde sensors", "Emergency backup"],
      maintenance: "Monthly inspection",
      lastMaintenance: "2025-02-01"
    },
    {
      name: "Dissection Tool Kits",
      category: "tools",
      count: 24,
      condition: "Good",
      location: "Storage Cabinets",
      features: ["Complete surgical sets", "Sterilized regularly", "Individual student kits", "Backup sets"],
      maintenance: "After each use",
      lastMaintenance: "2025-02-14"
    },
    {
      name: "Preservation Tanks",
      category: "storage",
      count: 8,
      condition: "Excellent",
      location: "Cadaver Room A & B",
      features: ["Temperature controlled", "Formalin circulation", "Level monitoring", "Safety locks"],
      maintenance: "Weekly inspection",
      lastMaintenance: "2025-02-10"
    },
    {
      name: "Microscopy Stations",
      category: "equipment",
      count: 6,
      condition: "Good",
      location: "All Cadaver Rooms",
      features: ["Binocular microscopes", "Digital cameras", "Image capture", "Measurement tools"],
      maintenance: "Bi-weekly calibration",
      lastMaintenance: "2025-02-08"
    },
    {
      name: "Safety Equipment",
      category: "safety",
      count: "Complete sets",
      condition: "Excellent",
      location: "All Cadaver Rooms",
      features: ["PPE kits", "Eye wash stations", "Emergency showers", "First aid kits"],
      maintenance: "Monthly inspection",
      lastMaintenance: "2025-02-05"
    }
  ]

  const safetyProtocols = [
    {
      category: "Personal Protection",
      protocols: [
        "Mandatory lab coats and gloves",
        "Face shields for dissection work",
        "Respirators when required",
        "Closed-toe shoes mandatory",
        "No jewelry or loose clothing"
      ],
      riskLevel: "High",
      frequency: "Always"
    },
    {
      category: "Chemical Safety",
      protocols: [
        "Formalin handling procedures",
        "MSDS available for all chemicals",
        "Spill containment kits available",
        "Proper waste disposal",
        "Chemical storage guidelines"
      ],
      riskLevel: "High",
      frequency: "Always"
    },
    {
      category: "Biological Safety",
      protocols: [
        "Biohazard containment procedures",
        "Sharps handling and disposal",
        "Infection control measures",
        "Decontamination procedures",
        "Exposure incident reporting"
      ],
      riskLevel: "Medium",
      frequency: "Always"
    },
    {
      category: "Emergency Procedures",
      protocols: [
        "Emergency evacuation routes",
        "First aid and CPR training",
        "Chemical spill response",
        "Fire safety procedures",
        "Emergency contact information"
      ],
      riskLevel: "Critical",
      frequency: "Training required"
    }
  ]

  const schedule = [
    {
      date: "2025-02-17",
      time: "9:00-12:00",
      room: "Cadaver Room A",
      specimen: "Adult Male Cadaver",
      group: "Batch 2024 - Group A",
      instructor: "Prof. Dr. M. Ali",
      topic: "Upper Limb Dissection",
      type: "practical",
      status: "scheduled"
    },
    {
      date: "2025-02-17",
      time: "14:00-17:00",
      room: "Cadaver Room B",
      specimen: "Adult Female Cadaver",
      group: "Batch 2023 - Group B",
      instructor: "Dr. S. Karim",
      topic: "Abdominal Anatomy",
      type: "practical",
      status: "scheduled"
    },
    {
      date: "2025-02-18",
      time: "10:00-13:00",
      room: "Cadaver Room C",
      specimen: "Middle-aged Female Cadaver",
      group: "Batch 2024 - Group C",
      instructor: "Dr. A. Rahman",
      topic: "Thoracic Anatomy",
      type: "practical",
      status: "scheduled"
    },
    {
      date: "2025-02-18",
      time: "15:00-18:00",
      room: "Cadaver Room A",
      specimen: "Adult Male Cadaver - Surgical",
      group: "Surgical Residents",
      instructor: "Prof. Dr. N. Ahmed",
      topic: "Surgical Approaches",
      type: "advanced",
      status: "scheduled"
    }
  ]

  const stats = [
    { label: "Total Specimens", value: "6", icon: Brain, color: "bg-blue-500" },
    { label: "Available Now", value: "3", icon: CheckCircle, color: "bg-green-500" },
    { label: "In Use", value: "1", icon: Users, color: "bg-orange-500" },
    { label: "Under Maintenance", value: "2", icon: AlertTriangle, color: "bg-red-500" }
  ]

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className={`${stat.color} text-white`}>
            <CardContent className="p-6 text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Facility Overview */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="w-5 h-5" />
            Cadaver Room Facilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">3</div>
              <div className="text-sm text-gray-600">Cadaver Rooms</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">12</div>
              <div className="text-sm text-gray-600">Dissection Tables</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">24/7</div>
              <div className="text-sm text-gray-600">Ventilation</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {schedule.slice(0, 4).map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-800">{session.topic}</div>
                    <div className="text-sm text-gray-600">{session.group} • {session.instructor}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{session.date}</div>
                  <div className="text-xs text-gray-600">{session.time}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSpecimens = () => (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex gap-2 border-b">
        {['all', 'available', 'in-use', 'maintenance', 'reserved'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeFilter === filter
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Specimens Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specimens
          .filter(specimen => activeFilter === 'all' || specimen.status === activeFilter)
          .map((specimen) => (
          <Card key={specimen.id} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{specimen.name}</h3>
                  <p className="text-sm text-gray-600">{specimen.age} • {specimen.gender}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  specimen.status === 'available' ? 'bg-green-500' :
                  specimen.status === 'in-use' ? 'bg-blue-500' :
                  specimen.status === 'maintenance' ? 'bg-red-500' :
                  'bg-yellow-500'
                }`}></div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Condition:</span>
                  <span className="font-medium">{specimen.condition}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Usage:</span>
                  <span className="font-medium">{specimen.totalUsage}/{specimen.totalUsage + specimen.remainingUsage}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{specimen.location}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Special Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {specimen.specialFeatures.slice(0, 2).map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                  {specimen.specialFeatures.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{specimen.specialFeatures.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Current Status:</h4>
                <p className="text-sm text-gray-600">
                  {specimen.assignedTo || "Unassigned"}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                {specimen.status === 'available' && (
                  <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Reserve
                  </button>
                )}
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
                  <span className="text-gray-600">Condition:</span>
                  <span className="font-medium text-green-600">{item.condition}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{item.location}</span>
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
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Upcoming Sessions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {schedule.map((session, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">{session.topic}</div>
                    <div className="text-sm text-gray-600">
                      {session.date} • {session.time} • {session.room}
                    </div>
                    <div className="text-xs text-gray-500">
                      {session.group} • {session.instructor}
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    session.type === 'practical' ? 'bg-blue-100 text-blue-700' :
                    session.type === 'advanced' ? 'bg-purple-100 text-purple-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {session.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSafety = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {safetyProtocols.map((category, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">{category.category}</h3>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  category.riskLevel === 'Critical' ? 'bg-red-100 text-red-700' :
                  category.riskLevel === 'High' ? 'bg-orange-100 text-orange-700' :
                  category.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {category.riskLevel} Risk
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Frequency:</span>
                  <span className="font-medium">{category.frequency}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Protocols:</h4>
                <div className="space-y-2">
                  {category.protocols.map((protocol, protocolIndex) => (
                    <div key={protocolIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {protocol}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Emergency Information */}
      <Card className="shadow-lg border-2 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="w-5 h-5" />
            Emergency Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Emergency Contacts</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lab Supervisor:</span>
                  <span className="font-medium">Ext: 1234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Security:</span>
                  <span className="font-medium">Ext: 5555</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Medical Emergency:</span>
                  <span className="font-medium">911</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Safety Equipment</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Eye wash stations available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Emergency showers functional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>First aid kits stocked</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Evacuation Routes</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>Primary: North exits</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>Secondary: East exits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>All routes clearly marked</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview()
      case 'specimens': return renderSpecimens()
      case 'equipment': return renderEquipment()
      case 'schedule': return renderSchedule()
      case 'safety': return renderSafety()
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
                  <Brain className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Cadaver Room</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Advanced anatomy dissection facility with preserved specimens and modern safety protocols
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Advanced Anatomy
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Safety First
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-lg">
        <div className="responsive-container-full">
          <div className="flex overflow-x-auto">
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
          <h2 className="text-3xl font-bold mb-4">Excellence in Anatomy Education</h2>
          <p className="text-xl mb-8 opacity-90">State-of-the-art cadaver room facility for comprehensive anatomical study</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Session
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Safety Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
