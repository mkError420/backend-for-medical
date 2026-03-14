"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart } from "lucide-react"

export default function HistologyRoomPage() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [selectedMicroscope, setSelectedMicroscope] = useState<any>(null)
  const [activeWorkstation, setActiveWorkstation] = useState<number | null>(null)

  const sections = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', color: 'from-blue-500 to-blue-600' },
    { id: 'microscopes', label: 'Microscopes', icon: '🔬', color: 'from-green-500 to-green-600' },
    { id: 'workstations', label: 'Workstations', icon: '💻', color: 'from-purple-500 to-purple-600' },
    { id: 'specimens', label: 'Specimens', icon: '🧪', color: 'from-orange-500 to-orange-600' },
    { id: 'schedule', label: 'Schedule', icon: '📅', color: 'from-red-500 to-red-600' }
  ]

  const microscopes = [
    {
      id: 1,
      name: "Olympus BX51",
      type: "Binocular",
      magnification: "40x-1000x",
      status: "available",
      location: "Workstation A-1",
      features: ["Phase contrast", "Dark field", "Fluorescence", "Digital camera", "Image capture"],
      condition: "Excellent",
      lastMaintenance: "2025-02-10",
      nextMaintenance: "2025-03-10",
      usage: 245,
      assignedTo: null,
      specifications: {
        eyepieces: "10x widefield",
        objectives: "4x, 10x, 40x, 100x oil",
        illumination: "LED Kohler",
        stage: "Mechanical with X-Y controls",
        camera: "12MP digital"
      }
    },
    {
      id: 2,
      name: "Zeiss Primo Star",
      type: "Binocular",
      magnification: "40x-1000x",
      status: "in-use",
      location: "Workstation A-2",
      features: ["Bright field", "Phase contrast", "Digital imaging", "Measurement tools"],
      condition: "Good",
      lastMaintenance: "2025-02-08",
      nextMaintenance: "2025-03-08",
      usage: 189,
      assignedTo: "Batch 2024 - Group A",
      specifications: {
        eyepieces: "10x widefield",
        objectives: "4x, 10x, 40x, 100x oil",
        illumination: "Halogen Kohler",
        stage: "Mechanical",
        camera: "8MP digital"
      }
    },
    {
      id: 3,
      name: "Nikon Eclipse E200",
      type: "Trinocular",
      magnification: "40x-1500x",
      status: "available",
      location: "Workstation B-1",
      features: ["Bright field", "Phase contrast", "Fluorescence", "Digital camera", "Research grade"],
      condition: "Excellent",
      lastMaintenance: "2025-02-12",
      nextMaintenance: "2025-03-12",
      usage: 156,
      assignedTo: null,
      specifications: {
        eyepieces: "10x widefield",
        objectives: "4x, 10x, 40x, 60x, 100x oil",
        illumination: "LED Kohler",
        stage: "Motorized",
        camera: "16MP digital"
      }
    },
    {
      id: 4,
      name: "Leica DM500",
      type: "Binocular",
      magnification: "40x-1000x",
      status: "maintenance",
      location: "Workstation B-2",
      features: ["Bright field", "Phase contrast", "Digital imaging"],
      condition: "Fair",
      lastMaintenance: "2025-02-05",
      nextMaintenance: "2025-02-20",
      usage: 298,
      assignedTo: null,
      specifications: {
        eyepieces: "10x widefield",
        objectives: "4x, 10x, 40x, 100x oil",
        illumination: "Halogen",
        stage: "Mechanical",
        camera: "5MP digital"
      }
    },
    {
      id: 5,
      name: "Olympus CX31",
      type: "Binocular",
      magnification: "40x-1000x",
      status: "available",
      location: "Workstation C-1",
      features: ["Bright field", "Phase contrast", "Educational features"],
      condition: "Good",
      lastMaintenance: "2025-02-11",
      nextMaintenance: "2025-03-11",
      usage: 167,
      assignedTo: null,
      specifications: {
        eyepieces: "10x widefield",
        objectives: "4x, 10x, 40x, 100x oil",
        illumination: "LED",
        stage: "Fixed",
        camera: "None"
      }
    },
    {
      id: 6,
      name: "Zeiss Axio Scope.A1",
      type: "Binocular",
      magnification: "40x-1000x",
      status: "available",
      location: "Workstation C-2",
      features: ["Bright field", "Phase contrast", "Fluorescence", "Digital camera"],
      condition: "Excellent",
      lastMaintenance: "2025-02-09",
      nextMaintenance: "2025-03-09",
      usage: 134,
      assignedTo: null,
      specifications: {
        eyepieces: "10x widefield",
        objectives: "4x, 10x, 40x, 100x oil",
        illumination: "LED Kohler",
        stage: "Mechanical",
        camera: "10MP digital"
      }
    }
  ]

  const workstations = [
    {
      id: 1,
      name: "Workstation A-1",
      microscope: "Olympus BX51",
      computer: "Dell OptiPlex",
      monitor: "Dell 24\" UltraSharp",
      status: "available",
      features: ["Image analysis software", "Digital capture", "Measurement tools", "Database access"],
      software: ["ImageJ", "NIS-Elements", "Adobe Photoshop", "Microsoft Office"],
      lastUsed: "2025-02-14",
      assignedTo: null,
      booking: null
    },
    {
      id: 2,
      name: "Workstation A-2",
      microscope: "Zeiss Primo Star",
      computer: "HP EliteDesk",
      monitor: "HP 24\" EliteDisplay",
      status: "in-use",
      features: ["Image analysis software", "Digital capture", "Measurement tools", "Database access"],
      software: ["ImageJ", "ZEN software", "Adobe Photoshop", "Microsoft Office"],
      lastUsed: "2025-02-14",
      assignedTo: "Batch 2024 - Group A",
      booking: "09:00-12:00"
    },
    {
      id: 3,
      name: "Workstation B-1",
      microscope: "Nikon Eclipse E200",
      computer: "Dell OptiPlex",
      monitor: "Dell 27\" UltraSharp",
      status: "available",
      features: ["Advanced image analysis", "3D reconstruction", "Fluorescence analysis", "Research tools"],
      software: ["ImageJ", "NIS-Elements", "Imaris", "MATLAB", "Microsoft Office"],
      lastUsed: "2025-02-13",
      assignedTo: null,
      booking: null
    },
    {
      id: 4,
      name: "Workstation B-2",
      microscope: "Leica DM500",
      computer: "HP EliteDesk",
      monitor: "HP 24\" EliteDisplay",
      status: "maintenance",
      features: ["Basic image analysis", "Digital capture", "Measurement tools"],
      software: ["ImageJ", "Leica LAS", "Adobe Photoshop", "Microsoft Office"],
      lastUsed: "2025-02-10",
      assignedTo: null,
      booking: "Under maintenance"
    },
    {
      id: 5,
      name: "Workstation C-1",
      microscope: "Olympus CX31",
      computer: "Dell OptiPlex",
      monitor: "Dell 22\" UltraSharp",
      status: "available",
      features: ["Educational software", "Basic image analysis", "Student tracking"],
      software: ["ImageJ", "Olympus software", "Microsoft Office", "Educational tools"],
      lastUsed: "2025-02-12",
      assignedTo: null,
      booking: null
    },
    {
      id: 6,
      name: "Workstation C-2",
      microscope: "Zeiss Axio Scope.A1",
      computer: "HP EliteDesk",
      monitor: "HP 24\" EliteDisplay",
      status: "available",
      features: ["Image analysis software", "Digital capture", "Fluorescence analysis"],
      software: ["ImageJ", "ZEN software", "Adobe Photoshop", "Microsoft Office"],
      lastUsed: "2025-02-14",
      assignedTo: null,
      booking: null
    }
  ]

  const specimenCollections = [
    {
      name: "Normal Histology Collection",
      category: "normal",
      specimens: 450,
      slides: 1800,
      description: "Collection of normal tissue specimens from all organ systems",
      storage: "Slide Cabinet A-1",
      lastUpdated: "2025-02-10",
      curator: "Dr. M. Ali",
      access: "Open to all students",
      specialFeatures: ["Complete organ systems", "Multiple staining techniques", "Digital catalog available"]
    },
    {
      name: "Pathology Collection",
      category: "pathological",
      specimens: 320,
      slides: 1280,
      description: "Pathological specimens covering various disease conditions",
      storage: "Slide Cabinet A-2",
      lastUpdated: "2025-02-08",
      curator: "Dr. S. Karim",
      access: "Supervised access only",
      specialFeatures: ["Rare disease specimens", "Comparative pathology", "Clinical correlations"]
    },
    {
      name: "Experimental Collection",
      category: "experimental",
      specimens: 180,
      slides: 720,
      description: "Specimens from experimental studies and research projects",
      storage: "Slide Cabinet B-1",
      lastUpdated: "2025-02-12",
      curator: "Dr. A. Rahman",
      access: "Research students only",
      specialFeatures: ["Animal models", "Treatment effects", "Time series specimens"]
    },
    {
      name: "Teaching Collection",
      category: "educational",
      specimens: 280,
      slides: 1120,
      description: "Specially prepared specimens for undergraduate teaching",
      storage: "Slide Cabinet B-2",
      lastUpdated: "2025-02-14",
      curator: "Dr. N. Ahmed",
      access: "Open to all students",
      specialFeatures: ["Classic examples", "Clear staining", "Educational labels"]
    }
  ]

  const todaySchedule = [
    {
      time: "09:00-11:00",
      workstation: "A-2",
      group: "Batch 2024 - Group A",
      topic: "Basic Histology - Epithelial Tissue",
      instructor: "Dr. M. Ali",
      specimen: "Normal epithelial specimens",
      type: "practical",
      status: "completed"
    },
    {
      time: "11:00-13:00",
      workstation: "A-1",
      group: "Batch 2023 - Group B",
      topic: "Connective Tissue - Practical",
      instructor: "Dr. S. Karim",
      specimen: "Normal connective tissue",
      type: "practical",
      status: "in-progress"
    },
    {
      time: "14:00-16:00",
      workstation: "B-1",
      group: "Research Students",
      topic: "Fluorescence Microscopy Workshop",
      instructor: "Prof. Dr. A. Rahman",
      specimen: "Fluorescent labeled specimens",
      type: "workshop",
      status: "upcoming"
    },
    {
      time: "16:00-18:00",
      workstation: "C-1",
      group: "Batch 2024 - Group C",
      topic: "Muscular Tissue Study",
      instructor: "Dr. N. Ahmed",
      specimen: "Normal muscular tissue",
      type: "practical",
      status: "upcoming"
    }
  ]

  const performanceMetrics = [
    {
      label: "Microscope Utilization",
      value: 87,
      unit: "%",
      trend: "up",
      icon: Microscope,
      color: "text-blue-600"
    },
    {
      label: "Daily Sessions",
      value: 24,
      unit: "sessions",
      trend: "up",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      label: "Student Satisfaction",
      value: 94,
      unit: "%",
      trend: "stable",
      icon: Star,
      color: "text-purple-600"
    },
    {
      label: "Equipment Downtime",
      value: 2.3,
      unit: "%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-orange-600"
    }
  ]

  const renderDashboard = () => (
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

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <Microscope className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">6</div>
            <div className="text-sm opacity-90">Total Microscopes</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <Monitor className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">6</div>
            <div className="text-sm opacity-90">Workstations</div>
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
                    <div className="text-sm text-gray-600">{session.topic}</div>
                    <div className="text-xs text-gray-500">{session.group} • {session.instructor}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{session.workstation}</div>
                  <div className="text-xs text-gray-600">{session.type}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderMicroscopes = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {microscopes.map((microscope, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{microscope.name}</h3>
                  <p className="text-sm text-gray-600">{microscope.type}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  microscope.status === 'available' ? 'bg-green-500' :
                  microscope.status === 'in-use' ? 'bg-blue-500' :
                  'bg-red-500'
                }`}></div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Magnification:</span>
                  <span className="font-medium">{microscope.magnification}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Condition:</span>
                  <span className="font-medium">{microscope.condition}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Usage:</span>
                  <span className="font-medium">{microscope.usage} sessions</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{microscope.location}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {microscope.features.slice(0, 3).map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                  {microscope.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{microscope.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Specifications:</h4>
                <div className="space-y-1 text-xs text-gray-600">
                  <div>• Eyepieces: {microscope.specifications.eyepieces}</div>
                  <div>• Objectives: {microscope.specifications.objectives}</div>
                  <div>• Illumination: {microscope.specifications.illumination}</div>
                  <div>• Camera: {microscope.specifications.camera}</div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                {microscope.status === 'available' && (
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

  const renderWorkstations = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workstations.map((station, index) => (
          <Card key={index} className={`shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
            activeWorkstation === station.id ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={() => setActiveWorkstation(station.id)}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{station.name}</h3>
                  <p className="text-sm text-gray-600">{station.microscope}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  station.status === 'available' ? 'bg-green-500' :
                  station.status === 'in-use' ? 'bg-blue-500' :
                  'bg-red-500'
                }`}></div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Computer:</span>
                  <span className="font-medium">{station.computer}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Monitor:</span>
                  <span className="font-medium">{station.monitor}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Last Used:</span>
                  <span className="font-medium">{station.lastUsed}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Software Available:</h4>
                <div className="flex flex-wrap gap-1">
                  {station.software.slice(0, 3).map((software, softwareIndex) => (
                    <span key={softwareIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {software}
                    </span>
                  ))}
                  {station.software.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{station.software.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {station.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  {station.assignedTo || "Available"}
                </span>
                {station.booking && (
                  <span className="text-xs text-blue-600 font-medium">{station.booking}</span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Workstation Details */}
      {activeWorkstation && (
        <Card className="shadow-lg border-2 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {workstations.find(w => w.id === activeWorkstation)?.name} - Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Hardware Configuration</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Microscope:</span>
                    <span className="font-medium">{workstations.find(w => w.id === activeWorkstation)?.microscope}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Computer:</span>
                    <span className="font-medium">{workstations.find(w => w.id === activeWorkstation)?.computer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monitor:</span>
                    <span className="font-medium">{workstations.find(w => w.id === activeWorkstation)?.monitor}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Software & Tools</h4>
                <div className="space-y-2 text-sm">
                  {workstations.find(w => w.id === activeWorkstation)?.software.map((software, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{software}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )

  const renderSpecimens = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specimenCollections.map((collection, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Beaker className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{collection.name}</h3>
                  <p className="text-sm text-gray-600">{collection.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{collection.specimens}</div>
                  <div className="text-xs text-gray-600">Specimens</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{collection.slides}</div>
                  <div className="text-xs text-gray-600">Slides</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">{collection.category}</div>
                  <div className="text-xs text-gray-600">Category</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Storage:</span>
                  <span className="font-medium">{collection.storage}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Curator:</span>
                  <span className="font-medium">{collection.curator}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Last Updated:</span>
                  <span className="font-medium">{collection.lastUpdated}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Special Features:</h4>
                <div className="space-y-1">
                  {collection.specialFeatures.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  collection.access === 'Open to all students' ? 'bg-green-100 text-green-700' :
                  collection.access === 'Supervised access only' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {collection.access}
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Collection
                </button>
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
                    <div className="font-semibold text-gray-800">{session.topic}</div>
                    <div className="text-sm text-gray-600">
                      {session.time} • {session.workstation} • {session.instructor}
                    </div>
                    <div className="text-xs text-gray-500">{session.group}</div>
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
    switch(activeSection) {
      case 'dashboard': return renderDashboard()
      case 'microscopes': return renderMicroscopes()
      case 'workstations': return renderWorkstations()
      case 'specimens': return renderSpecimens()
      case 'schedule': return renderSchedule()
      default: return renderDashboard()
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
                  <Microscope className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Histology Room</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Advanced microscopy facility with digital imaging and comprehensive specimen collection
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Digital Microscopy
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Research Grade
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
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center justify-center gap-2 px-6 py-4 border-b-4 transition-all duration-300 whitespace-nowrap min-w-[120px] ${
                  activeSection === section.id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="font-medium">{section.label}</span>
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
          <h2 className="text-3xl font-bold mb-4">Excellence in Microscopy Education</h2>
          <p className="text-xl mb-8 opacity-90">State-of-the-art histology facility for comprehensive tissue analysis training</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Session
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Specimens
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
