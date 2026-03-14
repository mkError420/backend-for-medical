"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function ServiceLabPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedService, setSelectedService] = useState<any>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-teal-500 to-teal-600' },
    { id: 'services', label: 'Services', icon: '🔬', color: 'from-cyan-500 to-cyan-600' },
    { id: 'tests', label: 'Tests', icon: '🧪', color: 'from-blue-500 to-blue-600' },
    { id: 'equipment', label: 'Equipment', icon: '⚙️', color: 'from-purple-500 to-purple-600' },
    { id: 'schedule', label: 'Schedule', icon: '📅', color: 'from-orange-500 to-orange-600' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️', color: 'from-indigo-500 to-indigo-600' }
  ]

  const services = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      category: "hematology",
      description: "Comprehensive blood cell analysis including RBC, WBC, and platelet counts",
      price: 250,
      duration: "30 minutes",
      sampleType: "Blood",
      availability: "24/7",
      urgency: "Routine & Emergency",
      parameters: ["RBC count", "WBC count", "Hemoglobin", "Hematocrit", "Platelet count", "MCV", "MCH", "MCHC"],
      equipment: ["Automated hematology analyzer", "Microscope", "Staining reagents"],
      staff: ["Medical technologist", "Pathologist"],
      dailyVolume: 150,
      turnaroundTime: "2 hours"
    },
    {
      id: 2,
      name: "Blood Chemistry Panel",
      category: "biochemistry",
      description: "Comprehensive metabolic panel including liver, kidney, and electrolyte tests",
      price: 450,
      duration: "45 minutes",
      sampleType: "Blood",
      availability: "24/7",
      urgency: "Routine & Emergency",
      parameters: ["Glucose", "BUN", "Creatinine", "Sodium", "Potassium", "Chloride", "Bicarbonate", "AST", "ALT", "Alkaline phosphatase", "Bilirubin"],
      equipment: ["Autoanalyzer", "Spectrophotometer", "Centrifuge"],
      staff: ["Biochemist", "Medical technologist"],
      dailyVolume: 120,
      turnaroundTime: "3 hours"
    },
    {
      id: 3,
      name: "Urine Analysis",
      category: "urinalysis",
      description: "Complete urine examination including physical, chemical, and microscopic analysis",
      price: 150,
      duration: "20 minutes",
      sampleType: "Urine",
      availability: "24/7",
      urgency: "Routine & Emergency",
      parameters: ["Color", "Appearance", "pH", "Specific gravity", "Protein", "Glucose", "Ketones", "Blood", "Bilirubin", "Urobilinogen", "Microscopy"],
      equipment: ["Urine analyzer", "Microscope", "Centrifuge", "Dipsticks"],
      staff: ["Medical technologist"],
      dailyVolume: 200,
      turnaroundTime: "1 hour"
    },
    {
      id: 4,
      name: "Microbial Culture & Sensitivity",
      category: "microbiology",
      description: "Bacterial culture with antibiotic sensitivity testing",
      price: 800,
      duration: "48-72 hours",
      sampleType: "Various",
      availability: "24/7",
      urgency: "Routine",
      parameters: ["Bacterial identification", "Antibiotic susceptibility", "Quantitative culture"],
      equipment: ["Incubator", "Autoclave", "Biosafety cabinet", "Microscope"],
      staff: ["Microbiologist", "Medical technologist"],
      dailyVolume: 60,
      turnaroundTime: "48-72 hours"
    },
    {
      id: 5,
      name: "Serology Tests",
      category: "serology",
      description: "Immunological tests for various diseases and conditions",
      price: 350,
      duration: "1 hour",
      sampleType: "Blood",
      availability: "24/7",
      urgency: "Routine & Emergency",
      parameters: ["HIV", "Hepatitis B", "Hepatitis C", "Syphilis", "Rubella", "Toxoplasma"],
      equipment: ["ELISA reader", "Rapid test kits", "Western blot"],
      staff: ["Serologist", "Medical technologist"],
      dailyVolume: 80,
      turnaroundTime: "4 hours"
    },
    {
      id: 6,
      name: "Hormone Assays",
      category: "endocrinology",
      description: "Hormone level testing for various endocrine disorders",
      price: 600,
      duration: "2 hours",
      sampleType: "Blood",
      availability: "24/7",
      urgency: "Routine",
      parameters: ["TSH", "T3", "T4", "Cortisol", "Insulin", "Testosterone", "Estrogen", "Progesterone"],
      equipment: ["Immunoassay analyzer", "Gamma counter", "Centrifuge"],
      staff: ["Endocrinologist", "Medical technologist"],
      dailyVolume: 40,
      turnaroundTime: "6 hours"
    }
  ]

  const equipmentData = [
    {
      id: 1,
      name: "Automated Hematology Analyzer",
      category: "hematology",
      status: "operational",
      capacity: "100 samples/hour",
      tests: ["CBC", "Differential", "Reticulocyte count"],
      manufacturer: "Sysmex",
      model: "XN-1000",
      installationDate: "2023-06-15",
      lastMaintenance: "2025-02-01",
      nextMaintenance: "2025-05-01",
      uptime: "99.5%"
    },
    {
      id: 2,
      name: "Clinical Chemistry Analyzer",
      category: "biochemistry",
      status: "operational",
      capacity: "200 tests/hour",
      tests: ["Liver function", "Kidney function", "Lipid profile", "Electrolytes"],
      manufacturer: "Roche",
      model: "Cobas 8000",
      installationDate: "2023-08-20",
      lastMaintenance: "2025-02-05",
      nextMaintenance: "2025-05-05",
      uptime: "98.8%"
    },
    {
      id: 3,
      name: "Microbiology Incubator",
      category: "microbiology",
      status: "operational",
      capacity: "50 cultures",
      tests: ["Bacterial culture", "Fungal culture", "Mycobacteria culture"],
      manufacturer: "Thermo Scientific",
      model: "Heracell 150i",
      installationDate: "2023-05-10",
      lastMaintenance: "2025-02-10",
      nextMaintenance: "2025-05-10",
      uptime: "99.2%"
    },
    {
      id: 4,
      name: "ELISA Plate Reader",
      category: "serology",
      status: "operational",
      capacity: "96 wells/plate",
      tests: ["HIV", "Hepatitis", "Syphilis", "Autoimmune"],
      manufacturer: "Bio-Rad",
      model: "iMark",
      installationDate: "2023-07-25",
      lastMaintenance: "2025-02-08",
      nextMaintenance: "2025-05-08",
      uptime: "99.7%"
    },
    {
      id: 5,
      name: "Immunoassay Analyzer",
      category: "endocrinology",
      status: "operational",
      capacity: "120 tests/hour",
      tests: ["Hormones", "Tumor markers", "Cardiac markers"],
      manufacturer: "Abbott",
      model: "Architect i2000",
      installationDate: "2023-09-15",
      lastMaintenance: "2025-02-12",
      nextMaintenance: "2025-05-12",
      uptime: "99.1%"
    },
    {
      id: 6,
      name: "Urine Analyzer",
      category: "urinalysis",
      status: "operational",
      capacity: "60 samples/hour",
      tests: ["Physical", "Chemical", "Microscopic"],
      manufacturer: "Siemens",
      model: "Clinitek Atlas",
      installationDate: "2023-04-20",
      lastMaintenance: "2025-02-15",
      nextMaintenance: "2025-05-15",
      uptime: "98.5%"
    }
  ]

  const scheduleData = [
    {
      time: "08:00-12:00",
      day: "Monday",
      activity: "Routine Testing",
      services: ["CBC", "Biochemistry", "Urinalysis"],
      staff: "Dr. Sarah Johnson + 3 Technologists",
      status: "in-progress"
    },
    {
      time: "12:00-14:00",
      day: "Monday",
      activity: "Emergency Testing",
      services: ["CBC", "Biochemistry", "Serology"],
      staff: "Dr. Michael Chen + 2 Technologists",
      status: "scheduled"
    },
    {
      time: "14:00-18:00",
      activity: "Specialized Testing",
      services: ["Hormone Assays", "Microbial Culture"],
      staff: "Dr. Emily Davis + 2 Technologists",
      status: "scheduled"
    },
    {
      time: "18:00-22:00",
      activity: "Emergency Services",
      services: ["CBC", "Biochemistry", "Urgent Tests"],
      staff: "Dr. Robert Wilson + 2 Technologists",
      status: "scheduled"
    },
    {
      time: "22:00-08:00",
      activity: "Night Shift",
      services: ["Emergency Testing", "Critical Care Samples"],
      staff: "Dr. Lisa Anderson + 1 Technologist",
      status: "scheduled"
    }
  ]

  const galleryImages = [
    {
      id: 1,
      title: "Main Service Laboratory",
      category: "facility",
      description: "Modern service laboratory with advanced diagnostic equipment",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Automated Testing Area",
      category: "equipment",
      description: "State-of-the-art automated analyzers for high-volume testing",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Sample Reception",
      category: "facility",
      description: "Efficient sample reception and processing area",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Quality Control Section",
      category: "quality",
      description: "Rigorous quality control and assurance procedures",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Microbiology Lab",
      category: "facility",
      description: "Dedicated microbiology section for culture and sensitivity",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Technical Team",
      category: "staff",
      description: "Skilled medical technologists and pathologists at work",
      image: "/api/placeholder/400/300"
    }
  ]

  const performanceMetrics = [
    {
      label: "Daily Tests",
      value: 650,
      unit: "samples",
      trend: "up",
      icon: TestTube,
      color: "text-teal-600"
    },
    {
      label: "Turnaround Time",
      value: 2.5,
      unit: "hours",
      trend: "down",
      icon: Clock,
      color: "text-blue-600"
    },
    {
      label: "Accuracy Rate",
      value: 99.8,
      unit: "%",
      trend: "stable",
      icon: Target,
      color: "text-green-600"
    },
    {
      label: "Equipment Uptime",
      value: 99.2,
      unit: "%",
      trend: "up",
      icon: Activity,
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
                <metric.icon className="w-8 h-8 text-teal-600" />
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
            Service Laboratory Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Service Categories</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">650</div>
              <div className="text-sm text-gray-600">Daily Tests</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">99.8%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white">
          <CardContent className="p-6 text-center">
            <TestTube className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-90">Service Availability</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">2.5h</div>
            <div className="text-sm opacity-90">Avg. Turnaround</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <Target className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">99.8%</div>
            <div className="text-sm opacity-90">Quality Score</div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Today's Laboratory Schedule
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
                    <div className="text-xs text-gray-500">{session.staff}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{session.services.length} Services</div>
                  <div className="text-xs text-gray-600">{session.status}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderServices = () => (
    <div className="space-y-6">
      {/* Service Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'hematology', 'biochemistry', 'urinalysis', 'microbiology', 'serology', 'endocrinology'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeCategory === category
                ? 'border-b-2 border-cyan-600 text-cyan-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services
          .filter(service => activeCategory === 'all' || service.category === activeCategory)
          .map((service, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Droplets className="w-4 h-4" />
                      <span>{service.sampleType}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      <span>{service.urgency}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-medium text-teal-600">৳{service.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Daily Volume:</span>
                  <span className="font-medium">{service.dailyVolume} tests</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Turnaround:</span>
                  <span className="font-medium">{service.turnaroundTime}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Parameters:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.parameters.slice(0, 3).map((param, paramIndex) => (
                    <span key={paramIndex} className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs">
                      {param}
                    </span>
                  ))}
                  {service.parameters.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{service.parameters.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Equipment Used:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.equipment.map((equipment, equipIndex) => (
                    <span key={equipIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {equipment}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
                  Book Test
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  View Details
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderTests = () => (
    <div className="space-y-8">
      {/* Test Categories Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {['hematology', 'biochemistry', 'urinalysis', 'microbiology', 'serology', 'endocrinology'].map((category, index) => {
          const categoryServices = services.filter(s => s.category === category)
          return (
            <Card key={index} className="text-center p-4 hover:shadow-lg transition-all duration-300">
              <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${
                category === 'hematology' ? 'bg-red-100' :
                category === 'biochemistry' ? 'bg-blue-100' :
                category === 'urinalysis' ? 'bg-green-100' :
                category === 'microbiology' ? 'bg-purple-100' :
                category === 'serology' ? 'bg-orange-100' :
                'bg-pink-100'
              }`}>
                <FlaskConical className={`w-6 h-6 ${
                  category === 'hematology' ? 'text-red-600' :
                  category === 'biochemistry' ? 'text-blue-600' :
                  category === 'urinalysis' ? 'text-green-600' :
                  category === 'microbiology' ? 'text-purple-600' :
                  category === 'serology' ? 'text-orange-600' :
                  'text-pink-600'
                }`} />
              </div>
              <div className="font-semibold text-gray-800 capitalize">{category}</div>
              <div className="text-sm text-gray-600">{categoryServices.length} tests</div>
            </Card>
          )
        })}
      </div>

      {/* Detailed Test Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Most Ordered Tests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {services.slice(0, 4).map((service, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                      <span className="text-cyan-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{service.name}</div>
                      <div className="text-sm text-gray-600">{service.dailyVolume} tests/day</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-teal-600">৳{service.price}</div>
                    <div className="text-xs text-gray-500">{service.turnaroundTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Test Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Routine Tests</span>
                  <span className="text-sm font-semibold">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Emergency Tests</span>
                  <span className="text-sm font-semibold">20%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{width: '20%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Specialized Tests</span>
                  <span className="text-sm font-semibold">5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '5%'}}></div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Tests/Day</span>
                  <span className="text-lg font-bold text-gray-800">650</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderEquipment = () => (
    <div className="space-y-6">
      {/* Equipment Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'hematology', 'biochemistry', 'microbiology', 'serology', 'endocrinology', 'urinalysis'].map((category) => (
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
                  <span className="font-medium capitalize">{equipment.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Capacity:</span>
                  <span className="font-medium">{equipment.capacity}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Uptime:</span>
                  <span className="font-medium text-green-600">{equipment.uptime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Installed:</span>
                  <span className="font-medium">{equipment.installationDate}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Test Types:</h4>
                <div className="flex flex-wrap gap-1">
                  {equipment.tests.map((test, testIndex) => (
                    <span key={testIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {test}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Maintenance:</h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Last Service:</span>
                    <span className="font-medium">{equipment.lastMaintenance}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Next Service:</span>
                    <span className="font-medium">{equipment.nextMaintenance}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Schedule
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
                  <div className="bg-cyan-100 text-cyan-700 text-xs p-1 rounded">
                    08:00-18:00
                  </div>
                  <div className="bg-blue-100 text-blue-700 text-xs p-1 rounded">
                    18:00-08:00
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
          <CardTitle>Daily Laboratory Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduleData.map((session, index) => (
              <div key={index} className="border-l-4 border-cyan-600 pl-4 py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">{session.activity}</div>
                    <div className="text-sm text-gray-600">
                      {session.time} • {session.services.join(', ')}
                    </div>
                    <div className="text-xs text-gray-500">{session.staff}</div>
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

  const renderGallery = () => (
    <div className="space-y-8">
      {/* Gallery Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'facility', 'equipment', 'quality', 'staff'].map((category) => (
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
                  image.category === 'quality' ? 'bg-purple-100 text-purple-700' :
                  'bg-orange-100 text-orange-700'
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
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-sm opacity-90">Facility Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <Settings className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-sm opacity-90">Equipment Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-sm opacity-90">Quality Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-sm opacity-90">Staff Images</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview()
      case 'services': return renderServices()
      case 'tests': return renderTests()
      case 'equipment': return renderEquipment()
      case 'schedule': return renderSchedule()
      case 'gallery': return renderGallery()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 via-cyan-600/5 to-blue-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <FlaskConical className="w-16 h-16 text-teal-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Service Laboratory</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Advanced diagnostic laboratory providing comprehensive testing services with 24/7 availability and rapid turnaround times
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  24/7 Service
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Quality Assured
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
                    ? 'border-teal-600 text-teal-600 bg-teal-50'
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
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Excellence in Diagnostic Services</h2>
          <p className="text-xl mb-8 opacity-90">State-of-the-art laboratory facility providing accurate, timely, and comprehensive diagnostic testing</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Test
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
