"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function PracticalLabPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedEquipment, setSelectedEquipment] = useState<any>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-blue-500 to-blue-600' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️', color: 'from-indigo-500 to-indigo-600' },
    { id: 'equipment', label: 'Equipment', icon: '🔬', color: 'from-purple-500 to-purple-600' },
    { id: 'experiments', label: 'Experiments', icon: '🧪', color: 'from-green-500 to-green-600' },
    { id: 'schedule', label: 'Schedule', icon: '📅', color: 'from-orange-500 to-orange-600' },
    { id: 'safety', label: 'Safety', icon: '🛡️', color: 'from-red-500 to-red-600' }
  ]

  const equipmentData = [
    {
      id: 1,
      name: "Compound Microscope",
      category: "microscopy",
      status: "operational",
      quantity: 25,
      specifications: ["1000x magnification", "LED illumination", "Digital camera", "Phase contrast"],
      maintenance: "Monthly calibration",
      lastService: "2025-02-10",
      nextService: "2025-03-10",
      location: "Lab A - Bench 1-5",
      manufacturer: "Olympus",
      model: "CX23"
    },
    {
      id: 2,
      name: "Spectrophotometer",
      category: "analytical",
      status: "operational",
      quantity: 8,
      specifications: ["UV-Vis range", "Double beam", "Auto wavelength", "Data logger"],
      maintenance: "Quarterly verification",
      lastService: "2025-02-05",
      nextService: "2025-05-05",
      location: "Lab B - Station 1-2",
      manufacturer: "Shimadzu",
      model: "UV-1800"
    },
    {
      id: 3,
      name: "Centrifuge",
      category: "separation",
      status: "operational",
      quantity: 6,
      specifications: ["15,000 rpm", "Refrigerated", "Multiple rotors", "Digital display"],
      maintenance: "Biannual inspection",
      lastService: "2025-01-15",
      nextService: "2025-07-15",
      location: "Lab C - Area 3",
      manufacturer: "Eppendorf",
      model: "5424 R"
    },
    {
      id: 4,
      name: "Autoclave",
      category: "sterilization",
      status: "operational",
      quantity: 3,
      specifications: ["121°C operation", "30L capacity", "Automatic cycle", "Safety locks"],
      maintenance: "Monthly validation",
      lastService: "2025-02-08",
      nextService: "2025-03-08",
      location: "Sterilization Room",
      manufacturer: "Tuttnau",
      model: "2340M"
    },
    {
      id: 5,
      name: "pH Meter",
      category: "analytical",
      status: "operational",
      quantity: 20,
      specifications: ["pH 0-14 range", "Temperature compensation", "Portable", "Data storage"],
      maintenance: "Monthly calibration",
      lastService: "2025-02-12",
      nextService: "2025-03-12",
      location: "All benches",
      manufacturer: "Mettler Toledo",
      model: "SevenCompact"
    },
    {
      id: 6,
      name: "Incubator",
      category: "culture",
      status: "operational",
      quantity: 4,
      specifications: ["5-60°C range", "CO2 control", "Humidity control", "Digital timer"],
      maintenance: "Quarterly cleaning",
      lastService: "2025-02-01",
      nextService: "2025-05-01",
      location: "Lab D - Culture Room",
      manufacturer: "Thermo Scientific",
      model: "Heracell"
    }
  ]

  const experiments = [
    {
      id: 1,
      title: "Microscopic Examination of Blood Cells",
      category: "histology",
      difficulty: "Intermediate",
      duration: "2 hours",
      students: "30",
      materials: ["Blood slides", "Staining reagents", "Microscopes", "Cover slips"],
      objectives: ["Identify RBCs", "Identify WBCs", "Count blood cells", "Identify abnormalities"],
      safety: ["Gloves required", "Biohazard handling", "Proper disposal"],
      nextSession: "2025-02-15 09:00"
    },
    {
      id: 2,
      title: "Protein Quantification Assay",
      category: "biochemistry",
      difficulty: "Advanced",
      duration: "3 hours",
      students: "20",
      materials: ["Protein samples", "Bradford reagent", "Spectrophotometer", "Cuvettes"],
      objectives: ["Prepare standard curve", "Quantify unknown samples", "Calculate concentration", "Validate results"],
      safety: ["Lab coat required", "Eye protection", "Chemical handling"],
      nextSession: "2025-02-16 14:00"
    },
    {
      id: 3,
      title: "Bacterial Culture Techniques",
      category: "microbiology",
      difficulty: "Basic",
      duration: "2.5 hours",
      students: "25",
      materials: ["Agar plates", "Inoculating loops", "Bacterial strains", "Incubator"],
      objectives: ["Aseptic technique", "Streak plating", "Colony counting", "Gram staining"],
      safety: ["Biosafety cabinet", "Autoclave waste", "Hand washing"],
      nextSession: "2025-02-17 10:00"
    },
    {
      id: 4,
      title: "DNA Extraction Protocol",
      category: "molecular",
      difficulty: "Advanced",
      duration: "4 hours",
      students: "15",
      materials: ["Tissue samples", "Lysis buffer", "Centrifuge", "PCR reagents"],
      objectives: ["Cell lysis", "DNA purification", "Quantification", "Quality assessment"],
      safety: ["PPE required", "Chemical safety", "Sharp disposal"],
      nextSession: "2025-02-18 13:00"
    },
    {
      id: 5,
      title: "Enzyme Kinetics Study",
      category: "biochemistry",
      difficulty: "Intermediate",
      duration: "3 hours",
      students: "20",
      materials: ["Enzyme samples", "Substrate", "Spectrophotometer", "Temperature bath"],
      objectives: ["Measure reaction rates", "Calculate Vmax", "Determine Km", "Plot kinetics"],
      safety: ["Temperature safety", "Chemical handling", "Eye protection"],
      nextSession: "2025-02-19 09:00"
    },
    {
      id: 6,
      title: "Histological Slide Preparation",
      category: "histology",
      difficulty: "Basic",
      duration: "2 hours",
      students: "25",
      materials: ["Tissue samples", "Microtome", "Staining solutions", "Mounting media"],
      objectives: ["Tissue processing", "Sectioning", "Staining", "Microscopy"],
      safety: ["Sharp instrument safety", "Chemical handling", "Ventilation"],
      nextSession: "2025-02-20 14:00"
    }
  ]

  const scheduleData = [
    {
      time: "08:00-10:00",
      day: "Monday",
      activity: "Blood Cell Examination",
      group: "MBBS Year 2",
      lab: "Lab A",
      instructor: "Dr. Sarah Johnson",
      status: "scheduled"
    },
    {
      time: "10:30-12:30",
      day: "Monday",
      activity: "Protein Quantification",
      group: "BSc Biotechnology",
      lab: "Lab B",
      instructor: "Dr. Michael Chen",
      status: "scheduled"
    },
    {
      time: "14:00-16:30",
      day: "Monday",
      activity: "Bacterial Culture",
      group: "MBBS Year 1",
      lab: "Lab C",
      instructor: "Dr. Emily Davis",
      status: "scheduled"
    },
    {
      time: "09:00-13:00",
      day: "Tuesday",
      activity: "DNA Extraction",
      group: "MSc Genetics",
      lab: "Lab D",
      instructor: "Dr. Robert Wilson",
      status: "scheduled"
    },
    {
      time: "14:00-17:00",
      day: "Tuesday",
      activity: "Enzyme Kinetics",
      group: "BSc Biochemistry",
      lab: "Lab B",
      instructor: "Dr. Lisa Anderson",
      status: "scheduled"
    }
  ]

  const safetyProtocols = [
    {
      category: "General Safety",
      protocols: [
        "Always wear lab coat and closed-toe shoes",
        "Know the location of safety equipment",
        "Report any accidents immediately",
        "Keep work area clean and organized",
        "No eating or drinking in the lab"
      ],
      icon: Shield,
      color: "text-blue-600"
    },
    {
      category: "Chemical Safety",
      protocols: [
        "Read MSDS before using chemicals",
        "Use fume hood for volatile substances",
        "Wear appropriate PPE",
        "Label all containers clearly",
        "Store chemicals properly"
      ],
      icon: FlaskConical,
      color: "text-red-600"
    },
    {
      category: "Biological Safety",
      protocols: [
        "Follow biosafety level guidelines",
        "Use biosafety cabinet when required",
        "Disinfect work surfaces before and after",
        "Properly dispose of biohazard waste",
        "Report any exposure immediately"
      ],
      icon: Microscope,
      color: "text-green-600"
    },
    {
      category: "Emergency Procedures",
      protocols: [
        "Know emergency evacuation routes",
        "Understand fire extinguisher locations",
        "Learn first aid procedures",
        "Keep emergency contacts accessible",
        "Participate in safety drills"
      ],
      icon: AlertTriangle,
      color: "text-orange-600"
    }
  ]

  const galleryImages = [
    {
      id: 1,
      title: "Main Laboratory Hall",
      category: "facility",
      description: "Spacious main laboratory with modern equipment",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Microscopy Station",
      category: "equipment",
      description: "Advanced microscopy setup for detailed analysis",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Students in Practical Session",
      category: "education",
      description: "Medical students conducting hands-on experiments",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Safety Equipment",
      category: "safety",
      description: "Comprehensive safety equipment and first aid station",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Chemical Storage",
      category: "facility",
      description: "Organized chemical storage with proper ventilation",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Research Equipment",
      category: "equipment",
      description: "Advanced analytical instruments for research",
      image: "/api/placeholder/400/300"
    }
  ]

  const performanceMetrics = [
    {
      label: "Equipment Utilization",
      value: 78,
      unit: "%",
      trend: "up",
      icon: Activity,
      color: "text-blue-600"
    },
    {
      label: "Student Capacity",
      value: 120,
      unit: "students",
      trend: "stable",
      icon: Users,
      color: "text-green-600"
    },
    {
      label: "Safety Compliance",
      value: 98,
      unit: "%",
      trend: "up",
      icon: Shield,
      color: "text-red-600"
    },
    {
      label: "Experiments/Week",
      value: 24,
      unit: "sessions",
      trend: "up",
      icon: TestTube,
      color: "text-purple-600"
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
            Practical Laboratory Facility Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">66</div>
              <div className="text-sm text-gray-600">Equipment Items</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">120</div>
              <div className="text-sm text-gray-600">Student Capacity</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TestTube className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">24</div>
              <div className="text-sm text-gray-600">Weekly Sessions</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <Microscope className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">25</div>
            <div className="text-sm opacity-90">Microscopes</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <TestTube className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">6</div>
            <div className="text-sm opacity-90">Experiment Types</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-sm opacity-90">Safety Compliance</div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Today's Laboratory Sessions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduleData.slice(0, 3).map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    session.status === 'completed' ? 'bg-green-500' :
                    session.status === 'in-progress' ? 'bg-blue-500' :
                    'bg-gray-400'
                  }`}></div>
                  <div>
                    <div className="font-semibold text-gray-800">{session.time}</div>
                    <div className="text-sm text-gray-600">{session.activity}</div>
                    <div className="text-xs text-gray-500">{session.group} • {session.lab}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{session.instructor}</div>
                  <div className="text-xs text-gray-600">{session.status}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderEquipment = () => (
    <div className="space-y-6">
      {/* Equipment Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'microscopy', 'analytical', 'separation', 'sterilization', 'culture'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeCategory === category
                ? 'border-b-2 border-purple-600 text-purple-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Equipment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipmentData
          .filter(equipment => activeCategory === 'all' || equipment.category === activeCategory)
          .map((equipment, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{equipment.name}</h3>
                  <p className="text-sm text-gray-600">{equipment.manufacturer} {equipment.model}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  equipment.status === 'operational' ? 'bg-green-500' :
                  'bg-yellow-500'
                }`}></div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">{equipment.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Quantity:</span>
                  <span className="font-medium">{equipment.quantity}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{equipment.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium text-green-600">{equipment.status}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Specifications:</h4>
                <div className="flex flex-wrap gap-1">
                  {equipment.specifications.slice(0, 3).map((spec, specIndex) => (
                    <span key={specIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {spec}
                    </span>
                  ))}
                  {equipment.specifications.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{equipment.specifications.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Maintenance:</h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Schedule:</span>
                    <span className="font-medium">{equipment.maintenance}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Last Service:</span>
                    <span className="font-medium">{equipment.lastService}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Next Service:</span>
                    <span className="font-medium">{equipment.nextService}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Book
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderExperiments = () => (
    <div className="space-y-6">
      {/* Experiment Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'histology', 'biochemistry', 'microbiology', 'molecular'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeCategory === category
                ? 'border-b-2 border-green-600 text-green-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiments
          .filter(exp => activeCategory === 'all' || exp.category === activeCategory)
          .map((experiment, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <TestTube className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{experiment.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      experiment.difficulty === 'Basic' ? 'bg-green-100 text-green-700' :
                      experiment.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {experiment.difficulty}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{experiment.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{experiment.students} students</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Next Session:</span>
                  <span className="font-medium">{experiment.nextSession}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Learning Objectives:</h4>
                <div className="flex flex-wrap gap-1">
                  {experiment.objectives.slice(0, 3).map((objective, objIndex) => (
                    <span key={objIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {objective}
                    </span>
                  ))}
                  {experiment.objectives.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{experiment.objectives.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Materials Required:</h4>
                <div className="flex flex-wrap gap-1">
                  {experiment.materials.slice(0, 3).map((material, matIndex) => (
                    <span key={matIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {material}
                    </span>
                  ))}
                  {experiment.materials.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{experiment.materials.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Safety Requirements:</h4>
                <div className="flex flex-wrap gap-1">
                  {experiment.safety.map((safety, safetyIndex) => (
                    <span key={safetyIndex} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                      {safety}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  View Protocol
                </button>
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Session
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
                    08:00-10:00
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
          <CardTitle>Complete Laboratory Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduleData.map((session, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">{session.activity}</div>
                    <div className="text-sm text-gray-600">
                      {session.day} • {session.time} • {session.group}
                    </div>
                    <div className="text-xs text-gray-500">{session.lab} • {session.instructor}</div>
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

  const renderSafety = () => (
    <div className="space-y-8">
      {/* Safety Protocols */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {safetyProtocols.map((protocol, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <protocol.icon className={`w-5 h-5 ${protocol.color}`} />
                {protocol.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {protocol.protocols.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Emergency Contacts */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Emergency Contacts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-lg font-bold text-gray-800 mb-2">Emergency</div>
              <div className="text-2xl font-bold text-red-600">911</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-lg font-bold text-gray-800 mb-2">Lab Safety</div>
              <div className="text-2xl font-bold text-orange-600">ext. 2345</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-lg font-bold text-gray-800 mb-2">Lab Manager</div>
              <div className="text-2xl font-bold text-blue-600">ext. 1234</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safety Equipment Locations */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Safety Equipment Locations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <FlaskConical className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-red-700">Eyewash Stations</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lab A - Near entrance</li>
                <li>• Lab B - Station 3</li>
                <li>• Lab C - Emergency exit</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-blue-700">Fire Extinguishers</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Each laboratory exit</li>
                <li>• Chemical storage room</li>
                <li>• Main corridor</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-green-700">First Aid Kits</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Each laboratory bench</li>
                <li>• Instructor stations</li>
                <li>• Reception area</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-purple-700">Safety Showers</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lab A - Corner A</li>
                <li>• Lab B - Near fume hood</li>
                <li>• Lab C - Emergency area</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderGallery = () => (
    <div className="space-y-8">
      {/* Gallery Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'facility', 'equipment', 'education', 'safety'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeCategory === category
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages
          .filter(img => activeCategory === 'all' || img.category === activeCategory)
          .map((image, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-indigo-300" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium transform scale-95 group-hover:scale-100 transition-all duration-300">
                  View Image
                </button>
              </div>
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  image.category === 'facility' ? 'bg-blue-100 text-blue-700' :
                  image.category === 'equipment' ? 'bg-green-100 text-green-700' :
                  image.category === 'education' ? 'bg-purple-100 text-purple-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {image.category}
                </span>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{image.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{image.description}</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  View Full Size
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Download
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Gallery Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <Building className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">2</div>
            <div className="text-sm opacity-90">Facility Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <Microscope className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">2</div>
            <div className="text-sm opacity-90">Equipment Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-sm opacity-90">Education Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
          <CardContent className="p-6 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-sm opacity-90">Safety Images</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview()
      case 'equipment': return renderEquipment()
      case 'experiments': return renderExperiments()
      case 'schedule': return renderSchedule()
      case 'safety': return renderSafety()
      case 'gallery': return renderGallery()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <Microscope className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Practical Laboratory</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                State-of-the-art practical laboratory facility with comprehensive equipment for hands-on medical education and research
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Hands-On Learning
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Advanced Equipment
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
          <h2 className="text-3xl font-bold mb-4">Excellence in Practical Education</h2>
          <p className="text-xl mb-8 opacity-90">Modern laboratory facility providing comprehensive hands-on training for future healthcare professionals</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Lab Session
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Equipment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
