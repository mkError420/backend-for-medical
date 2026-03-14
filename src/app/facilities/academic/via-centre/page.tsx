"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function VIACentrePage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedStation, setSelectedStation] = useState<any>(null)
  const [activeModule, setActiveModule] = useState<any>(null)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-blue-500 to-blue-600' },
    { id: 'vr-stations', label: 'VR Stations', icon: '🥽', color: 'from-purple-500 to-purple-600' },
    { id: 'modules', label: 'Learning Modules', icon: '📚', color: 'from-green-500 to-green-600' },
    { id: 'equipment', label: 'Equipment', icon: '💻', color: 'from-orange-500 to-orange-600' },
    { id: 'schedule', label: 'Schedule', icon: '📅', color: 'from-red-500 to-red-600' }
  ]

  const vrStations = [
    {
      id: 1,
      name: "VR Station Alpha",
      location: "VIA Centre - Room 101",
      status: "available",
      type: "High-End VR",
      equipment: ["Oculus Quest 3", "High-end PC", "4K Monitor", "Surround Sound", "Haptic Feedback"],
      features: ["Full body tracking", "Haptic feedback", "Multi-user support", "Real-time collaboration"],
      capacity: 1,
      currentSession: null,
      nextSession: "14:00-16:00 - Anatomy Lab VR",
      instructor: "Dr. M. Ali",
      utilization: 85,
      lastMaintenance: "2025-02-14",
      nextMaintenance: "2025-02-28",
      software: ["Complete Anatomy", "3D Organon", "BioDigital Human", "Anatomy.tv"],
      specifications: {
        processor: "Intel Core i9-13900K",
        graphics: "NVIDIA RTX 4090",
        memory: "32GB DDR5",
        storage: "2TB NVMe SSD",
        vr: "Oculus Quest 3 with controllers"
      }
    },
    {
      id: 2,
      name: "VR Station Beta",
      location: "VIA Centre - Room 102",
      status: "in-use",
      type: "Standard VR",
      equipment: ["Meta Quest 2", "Gaming PC", "HD Monitor", "Stereo Sound"],
      features: ["Room-scale VR", "Wireless operation", "Hand tracking", "Voice commands"],
      capacity: 1,
      currentSession: "10:00-12:00 - Virtual Dissection",
      nextSession: "14:00-16:00 - Surgical Training",
      instructor: "Dr. S. Karim",
      utilization: 92,
      lastMaintenance: "2025-02-13",
      nextMaintenance: "2025-02-27",
      software: ["Anatomy 360", "VR Anatomy", "人体解剖学VR", "Essential Anatomy 5"],
      specifications: {
        processor: "Intel Core i7-12700K",
        graphics: "NVIDIA RTX 3070",
        memory: "16GB DDR4",
        storage: "1TB NVMe SSD",
        vr: "Meta Quest 2 with controllers"
      }
    },
    {
      id: 3,
      name: "VR Station Gamma",
      location: "VIA Centre - Room 103",
      status: "available",
      type: "AR Station",
      equipment: ["Microsoft HoloLens 2", "Tablet", "Touch Screen", "Wireless Network"],
      features: ["Augmented reality", "Real-time overlay", "Gesture control", "Mobile compatibility"],
      capacity: 2,
      currentSession: null,
      nextSession: "15:00-17:00 - AR Anatomy",
      instructor: "Dr. A. Rahman",
      utilization: 78,
      lastMaintenance: "2025-02-15",
      nextMaintenance: "2025-03-01",
      software: ["AR Anatomy", "Anatomy AR", "BioDigital AR", "Complete Anatomy AR"],
      specifications: {
        processor: "Intel Core i7-11700K",
        graphics: "NVIDIA RTX 3060",
        memory: "16GB DDR4",
        storage: "1TB NVMe SSD",
        ar: "Microsoft HoloLens 2"
      }
    },
    {
      id: 4,
      name: "VR Station Delta",
      location: "VIA Centre - Room 104",
      status: "maintenance",
      type: "Multi-User VR",
      equipment: ["Multiple VR Headsets", "Server", "Network Infrastructure", "Large Screen"],
      features: ["Multi-user environment", "Collaborative learning", "Real-time interaction", "Group sessions"],
      capacity: 4,
      currentSession: "Under Maintenance",
      nextSession: "Available Tomorrow",
      instructor: "Prof. Dr. N. Ahmed",
      utilization: 88,
      lastMaintenance: "2025-02-10",
      nextMaintenance: "2025-02-20",
      software: ["VR Classroom", "Anatomy Lab VR", "Surgical Training VR", "Medical Education VR"],
      specifications: {
        processor: "Dual Intel Xeon",
        graphics: "Dual NVIDIA RTX 4080",
        memory: "64GB DDR4",
        storage: "4TB RAID SSD",
        vr: "4x Oculus Quest 3"
      }
    },
    {
      id: 5,
      name: "VR Station Epsilon",
      location: "VIA Centre - Room 105",
      status: "available",
      type: "Research VR",
      equipment: ["Advanced VR", "Motion Capture", "Biometric Sensors", "Data Analytics"],
      features: ["Motion tracking", "Biometric monitoring", "Data collection", "Research tools"],
      capacity: 2,
      currentSession: null,
      nextSession: "16:00-18:00 - Research Session",
      instructor: "Dr. R. Islam",
      utilization: 65,
      lastMaintenance: "2025-02-12",
      nextMaintenance: "2025-02-26",
      software: ["Research VR", "Motion Analysis", "Biometric VR", "Data Analytics VR"],
      specifications: {
        processor: "Intel Core i9-13900K",
        graphics: "NVIDIA RTX 4090",
        memory: "64GB DDR5",
        storage: "4TB NVMe SSD",
        vr: "Advanced VR with motion capture"
      }
    },
    {
      id: 6,
      name: "VR Station Zeta",
      location: "VIA Centre - Room 106",
      status: "available",
      type: "Mobile VR",
      equipment: ["Mobile VR", "Tablets", "Wireless Network", "Portable Setup"],
      features: ["Portable setup", "Mobile learning", "Flexible deployment", "Remote access"],
      capacity: 3,
      currentSession: null,
      nextSession: "13:00-15:00 - Mobile VR Session",
      instructor: "Dr. K. Hossain",
      utilization: 72,
      lastMaintenance: "2025-02-14",
      nextMaintenance: "2025-02-28",
      software: ["Mobile Anatomy VR", "Portable VR", "Remote Learning VR", "Flexible VR"],
      specifications: {
        processor: "Intel Core i5-12400",
        graphics: "NVIDIA RTX 3050",
        memory: "8GB DDR4",
        storage: "512GB NVMe SSD",
        vr: "Mobile VR devices"
      }
    }
  ]

  const learningModules = [
    {
      id: 1,
      name: "Virtual Human Anatomy",
      category: "anatomy",
      difficulty: "Beginner",
      duration: "2 hours",
      participants: 1,
      description: "Complete exploration of human anatomy in virtual reality with interactive 3D models",
      objectives: ["Identify major organs", "Understand body systems", "Learn anatomical relationships", "Practice spatial awareness"],
      features: ["360° view", "Layer by layer dissection", "Interactive labels", "Quiz mode"],
      equipment: ["VR headset", "Controllers", "Computer"],
      software: ["Complete Anatomy VR", "3D Organon"],
      instructor: "Dr. M. Ali",
      rating: 4.8,
      completions: 156,
      nextSession: "Today 14:00"
    },
    {
      id: 2,
      name: "Surgical Simulation VR",
      category: "surgery",
      difficulty: "Advanced",
      duration: "3 hours",
      participants: 2,
      description: "Advanced surgical procedures simulation with realistic physics and haptic feedback",
      objectives: ["Practice surgical techniques", "Learn instrument handling", "Understand anatomy in surgery", "Develop procedural skills"],
      features: ["Haptic feedback", "Realistic physics", "Multi-user collaboration", "Performance tracking"],
      equipment: ["Advanced VR", "Haptic devices", "Surgical instruments"],
      software: ["Surgical VR Pro", "Medical Simulation VR"],
      instructor: "Prof. Dr. S. Karim",
      rating: 4.9,
      completions: 89,
      nextSession: "Tomorrow 10:00"
    },
    {
      id: 3,
      name: "Emergency Medicine VR",
      category: "emergency",
      difficulty: "Intermediate",
      duration: "1.5 hours",
      participants: 4,
      description: "Emergency medical scenarios with team-based decision making and time pressure",
      objectives: ["Practice emergency protocols", "Team coordination", "Rapid decision making", "Crisis management"],
      features: ["Multi-user environment", "Time pressure", "Realistic scenarios", "Team communication"],
      equipment: ["Multi-user VR", "Communication system", "Emergency equipment"],
      software: ["Emergency VR", "Medical Crisis VR"],
      instructor: "Dr. A. Rahman",
      rating: 4.7,
      completions: 124,
      nextSession: "Today 16:00"
    },
    {
      id: 4,
      name: "Pediatric Anatomy VR",
      category: "pediatrics",
      difficulty: "Intermediate",
      duration: "2 hours",
      participants: 1,
      description: "Specialized pediatric anatomy with age-appropriate models and developmental stages",
      objectives: ["Learn pediatric anatomy", "Understand development", "Age-specific features", "Child physiology"],
      features: ["Age-specific models", "Developmental stages", "Interactive learning", "Child-friendly interface"],
      equipment: ["Standard VR", "Pediatric models", "Educational tools"],
      software: ["Pediatric VR", "Child Anatomy VR"],
      instructor: "Dr. N. Ahmed",
      rating: 4.6,
      completions: 98,
      nextSession: "Tomorrow 14:00"
    },
    {
      id: 5,
      name: "Neuroscience VR Lab",
      category: "neuroscience",
      difficulty: "Advanced",
      duration: "2.5 hours",
      participants: 2,
      description: "Detailed exploration of the nervous system with neural pathway visualization",
      objectives: ["Understand brain anatomy", "Neural pathways", "Neurological functions", "Clinical correlations"],
      features: ["Neural pathway tracing", "3D brain models", "Functional mapping", "Clinical cases"],
      equipment: ["Advanced VR", "Neuroscience software", "Brain models"],
      software: ["Neuroscience VR", "Brain Lab VR"],
      instructor: "Prof. Dr. R. Islam",
      rating: 4.9,
      completions: 67,
      nextSession: "Friday 10:00"
    },
    {
      id: 6,
      name: "Dental Anatomy VR",
      category: "dentistry",
      difficulty: "Intermediate",
      duration: "1.5 hours",
      participants: 1,
      description: "Comprehensive dental anatomy with oral cavity exploration and dental procedures",
      objectives: ["Dental anatomy", "Oral cavity", "Tooth structure", "Dental procedures"],
      features: ["3D dental models", "Procedure simulation", "Anatomical detail", "Clinical relevance"],
      equipment: ["Dental VR", "Dental models", "Procedure tools"],
      software: ["Dental VR Pro", "Oral Anatomy VR"],
      instructor: "Dr. K. Hossain",
      rating: 4.5,
      completions: 112,
      nextSession: "Friday 14:00"
    }
  ]

  const equipment = [
    {
      name: "VR Headsets",
      category: "vr",
      count: 12,
      types: ["Oculus Quest 3", "Meta Quest 2", "Microsoft HoloLens 2"],
      features: ["Wireless operation", "High resolution", "Hand tracking", "Comfortable fit"],
      maintenance: "Weekly cleaning",
      status: "Operational",
      utilization: 85
    },
    {
      name: "High-End Computers",
      category: "computing",
      count: 6,
      types: ["Gaming PCs", "Workstations", "Servers"],
      features: ["RTX 4090 graphics", "32GB RAM", "NVMe SSD", "Liquid cooling"],
      maintenance: "Monthly updates",
      status: "Operational",
      utilization: 92
    },
    {
      name: "Haptic Devices",
      category: "feedback",
      count: 8,
      types: ["Haptic gloves", "Force feedback devices", "Vibration controllers"],
      features: ["Realistic feedback", "Force simulation", "Touch sensitivity", "Wireless connection"],
      maintenance: "Bi-weekly calibration",
      status: "Operational",
      utilization: 78
    },
    {
      name: "Motion Capture Systems",
      category: "tracking",
      count: 2,
      types: ["Full-body tracking", "Hand tracking", "Facial tracking"],
      features: ["High precision", "Real-time tracking", "Multiple users", "Data recording"],
      maintenance: "Weekly calibration",
      status: "Operational",
      utilization: 65
    },
    {
      name: "Display Systems",
      category: "visual",
      count: 10,
      types: ["4K monitors", "Large screens", "Projectors", "Touch screens"],
      features: ["4K resolution", "HDR support", "Touch interface", "Large format"],
      maintenance: "Monthly cleaning",
      status: "Operational",
      utilization: 88
    },
    {
      name: "Audio Systems",
      category: "sound",
      count: 12,
      types: ["Surround sound", "Headphones", "Microphones", "Speakers"],
      features: ["3D audio", "Noise cancellation", "Voice recognition", "Clear communication"],
      maintenance: "Monthly testing",
      status: "Operational",
      utilization: 95
    }
  ]

  const todaySchedule = [
    {
      time: "09:00-11:00",
      station: "VR Station Beta",
      module: "Virtual Dissection",
      group: "Batch 2024 - Group A",
      instructor: "Dr. S. Karim",
      participants: 1,
      status: "in-progress"
    },
    {
      time: "11:00-13:00",
      station: "VR Station Alpha",
      module: "Anatomy Lab VR",
      group: "Batch 2023 - Group B",
      instructor: "Dr. M. Ali",
      participants: 1,
      status: "scheduled"
    },
    {
      time: "14:00-16:00",
      station: "VR Station Alpha",
      module: "Virtual Human Anatomy",
      group: "Batch 2024 - Group C",
      instructor: "Dr. M. Ali",
      participants: 1,
      status: "scheduled"
    },
    {
      time: "16:00-18:00",
      station: "VR Station Epsilon",
      module: "Research Session",
      group: "Research Students",
      instructor: "Dr. R. Islam",
      participants: 2,
      status: "scheduled"
    },
    {
      time: "15:00-17:00",
      station: "VR Station Gamma",
      module: "AR Anatomy",
      group: "Batch 2024 - Group D",
      instructor: "Dr. A. Rahman",
      participants: 2,
      status: "scheduled"
    }
  ]

  const performanceMetrics = [
    {
      label: "Station Utilization",
      value: 82,
      unit: "%",
      trend: "up",
      icon: Monitor,
      color: "text-blue-600"
    },
    {
      label: "Daily Sessions",
      value: 28,
      unit: "sessions",
      trend: "up",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      label: "Student Satisfaction",
      value: 96,
      unit: "%",
      trend: "stable",
      icon: Star,
      color: "text-purple-600"
    },
    {
      label: "Module Completion",
      value: 91,
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
            VIA Centre Facilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">VR Stations</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Learning Modules</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">12</div>
              <div className="text-sm text-gray-600">VR Headsets</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <Headphones className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">12</div>
            <div className="text-sm opacity-90">VR Headsets</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <Cpu className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">6</div>
            <div className="text-sm opacity-90">High-End PCs</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <Gamepad2 className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">646</div>
            <div className="text-sm opacity-90">Total Sessions</div>
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
                    <div className="text-sm text-gray-600">{session.module}</div>
                    <div className="text-xs text-gray-500">{session.group} • {session.instructor}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{session.station}</div>
                  <div className="text-xs text-gray-600">{session.participants} participants</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderVRStations = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vrStations.map((station, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{station.name}</h3>
                  <p className="text-sm text-gray-600">{station.type}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  station.status === 'available' ? 'bg-green-500' :
                  station.status === 'in-use' ? 'bg-blue-500' :
                  station.status === 'maintenance' ? 'bg-red-500' :
                  'bg-yellow-500'
                }`}></div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{station.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Capacity:</span>
                  <span className="font-medium">{station.capacity} users</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Utilization:</span>
                  <span className="font-medium">{station.utilization}%</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Equipment:</h4>
                <div className="flex flex-wrap gap-1">
                  {station.equipment.slice(0, 3).map((equipment, equipmentIndex) => (
                    <span key={equipmentIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {equipment}
                    </span>
                  ))}
                  {station.equipment.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{station.equipment.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {station.features.slice(0, 3).map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                  {station.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{station.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Software:</h4>
                <div className="flex flex-wrap gap-1">
                  {station.software.slice(0, 2).map((software, softwareIndex) => (
                    <span key={softwareIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {software}
                    </span>
                  ))}
                  {station.software.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{station.software.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Current Status:</h4>
                <p className="text-sm text-gray-600">
                  {station.currentSession || station.nextSession}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                {station.status === 'available' && (
                  <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Book Station
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderModules = () => (
    <div className="space-y-8">
      {/* Module Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'anatomy', 'surgery', 'emergency', 'pediatrics', 'neuroscience', 'dentistry'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveModule(category)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeModule === category
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningModules
          .filter(module => activeModule === 'all' || module.category === activeModule)
          .map((module, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{module.name}</h3>
                  <p className="text-sm text-gray-600">{module.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      module.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {module.difficulty}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{module.duration}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Participants:</span>
                  <span className="font-medium">{module.participants}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Instructor:</span>
                  <span className="font-medium">{module.instructor}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Rating:</span>
                  <span className="font-medium">⭐ {module.rating}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Learning Objectives:</h4>
                <div className="space-y-1">
                  {module.objectives.slice(0, 3).map((objective, objectiveIndex) => (
                    <div key={objectiveIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {objective}
                    </div>
                  ))}
                  {module.objectives.length > 3 && (
                    <div className="text-xs text-gray-500">+{module.objectives.length - 3} more objectives</div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {module.features.slice(0, 3).map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                  {module.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{module.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Statistics:</h4>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Completions:</span>
                  <span className="font-medium">{module.completions}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Next Session:</span>
                  <span className="font-medium">{module.nextSession}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Book Module
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
                  <span className="text-gray-600">Utilization:</span>
                  <span className="font-medium">{item.utilization}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Maintenance:</span>
                  <span className="font-medium">{item.maintenance}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Types:</h4>
                <div className="flex flex-wrap gap-1">
                  {item.types.map((type, typeIndex) => (
                    <span key={typeIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {item.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
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
                    <div className="font-semibold text-gray-800">{session.module}</div>
                    <div className="text-sm text-gray-600">
                      {session.time} • {session.station} • {session.instructor}
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
      case 'vr-stations': return renderVRStations()
      case 'modules': return renderModules()
      case 'equipment': return renderEquipment()
      case 'schedule': return renderSchedule()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-green-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <Headphones className="w-16 h-16 text-purple-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">VIA Centre</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Virtual Interactive Anatomy Centre - Advanced VR/AR medical education and simulation facility
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Virtual Reality
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Interactive Learning
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
                    ? 'border-purple-600 text-purple-600 bg-purple-50'
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
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Excellence in Virtual Medical Education</h2>
          <p className="text-xl mb-8 opacity-90">State-of-the-art VR/AR facility for immersive anatomy and medical training</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book VR Session
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore Modules
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
