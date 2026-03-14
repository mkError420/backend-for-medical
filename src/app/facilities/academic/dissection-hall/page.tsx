"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function DissectionHallPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedTable, setSelectedTable] = useState<any>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-red-500 to-red-600' },
    { id: 'facilities', label: 'Facilities', icon: '🏛️', color: 'from-blue-500 to-blue-600' },
    { id: 'equipment', label: 'Equipment', icon: '🔬', color: 'from-purple-500 to-purple-600' },
    { id: 'schedule', label: 'Schedule', icon: '📅', color: 'from-orange-500 to-orange-600' },
    { id: 'safety', label: 'Safety', icon: '🛡️', color: 'from-green-500 to-green-600' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️', color: 'from-indigo-500 to-indigo-600' }
  ]

  const dissectionTables = [
    {
      id: 1,
      tableNumber: "DT-001",
      type: "gross",
      status: "available",
      capacity: 8,
      currentUsage: "Anatomy - Upper Limb",
      instructor: "Dr. Sarah Johnson",
      nextSession: "14:00 - 17:00",
      equipment: ["Dissection Kit", "Magnifying Glass", "Forceps", "Scalpels"],
      specimens: ["Human Arm", "Muscle Groups", "Nerve Bundles"],
      ventilation: "Local Exhaust",
      lighting: "LED Task Lighting",
      maintenance: "Daily cleaning",
      lastInspection: "2025-02-14"
    },
    {
      id: 2,
      tableNumber: "DT-002",
      type: "gross",
      status: "occupied",
      capacity: 8,
      currentUsage: "Anatomy - Thorax",
      instructor: "Dr. Michael Chen",
      nextSession: "09:00 - 12:00",
      equipment: ["Dissection Kit", "Bone Saw", "Retractors", "Probes"],
      specimens: ["Human Thorax", "Heart", "Lungs", "Rib Cage"],
      ventilation: "Local Exhaust",
      lighting: "LED Task Lighting",
      maintenance: "Daily cleaning",
      lastInspection: "2025-02-14"
    },
    {
      id: 3,
      tableNumber: "DT-003",
      type: "microscopic",
      status: "available",
      capacity: 4,
      currentUsage: "Histology - Tissue Samples",
      instructor: "Dr. Emily Davis",
      nextSession: "10:00 - 13:00",
      equipment: ["Microscope", "Slide Prep Kit", "Staining Set", "Cover Slips"],
      specimens: ["Tissue Sections", "Cell Samples", "Pathology Slides"],
      ventilation: "General Ventilation",
      lighting: "Microscope Lighting",
      maintenance: "Weekly calibration",
      lastInspection: "2025-02-13"
    },
    {
      id: 4,
      tableNumber: "DT-004",
      type: "demonstration",
      status: "available",
      capacity: 20,
      currentUsage: "Available",
      instructor: "Available",
      nextSession: "15:00 - 18:00",
      equipment: ["Overhead Projector", "Camera System", "Large Display", "Audio System"],
      specimens: ["Full Body Models", "Organ Systems", "Skeletal Models"],
      ventilation: "Central AC",
      lighting: "Adjustable Lighting",
      maintenance: "Weekly check",
      lastInspection: "2025-02-12"
    },
    {
      id: 5,
      tableNumber: "DT-005",
      type: "gross",
      status: "maintenance",
      capacity: 8,
      currentUsage: "Under Maintenance",
      instructor: "Maintenance Team",
      nextSession: "Tomorrow",
      equipment: ["Dissection Kit", "Ventilation System", "Lighting"],
      specimens: "None",
      ventilation: "Under Service",
      lighting: "Under Service",
      maintenance: "Ventilation repair",
      lastInspection: "2025-02-14"
    },
    {
      id: 6,
      tableNumber: "DT-006",
      type: "research",
      status: "available",
      capacity: 6,
      currentUsage: "Available for Research",
      instructor: "Research Faculty",
      nextSession: "By Appointment",
      equipment: ["Advanced Tools", "Recording System", "Measurement Tools", "Data Logger"],
      specimens: ["Research Specimens", "Experimental Models"],
      ventilation: "Advanced Filtration",
      lighting: "Research Grade",
      maintenance: "Bi-weekly",
      lastInspection: "2025-02-14"
    }
  ]

  const equipment = [
    {
      category: "Dissection Tools",
      items: [
        { name: "Scalpel Sets", count: 24, status: "operational", location: "All tables" },
        { name: "Forceps", count: 48, status: "operational", location: "All tables" },
        { name: "Retractors", count: 36, status: "operational", location: "Gross tables" },
        { name: "Probes", count: 60, status: "operational", location: "All tables" }
      ]
    },
    {
      category: "Microscopy Equipment",
      items: [
        { name: "Compound Microscopes", count: 12, status: "operational", location: "Microscopic tables" },
        { name: "Stereomicroscopes", count: 8, status: "operational", location: "Research table" },
        { name: "Digital Microscopes", count: 4, status: "operational", location: "Demonstration area" },
        { name: "Slide Preparation Kits", count: 20, status: "operational", location: "Microscopic tables" }
      ]
    },
    {
      category: "Safety Equipment",
      items: [
        { name: "Fume Hoods", count: 6, status: "operational", location: "Each table" },
        { name: "Safety Showers", count: 3, status: "operational", location: "Hall corners" },
        { name: "Eye Wash Stations", count: 6, status: "operational", location: "Each table" },
        { name: "Fire Extinguishers", count: 8, status: "operational", location: "Strategic points" }
      ]
    },
    {
      category: "Storage Systems",
      items: [
        { name: "Specimen Refrigerators", count: 4, status: "operational", location: "Storage area" },
        { name: "Chemical Storage", count: 2, status: "operational", location: "Secure area" },
        { name: "Tool Cabinets", count: 6, status: "operational", location: "Each table" },
        { name: "Specimen Jars", count: 100, status: "operational", location: "Storage area" }
      ]
    }
  ]

  const scheduleData = [
    {
      time: "08:00-10:00",
      day: "Monday",
      activity: "Upper Limb Dissection",
      instructor: "Dr. Sarah Johnson",
      table: "DT-001",
      batch: "MBBS Year 1",
      type: "practical"
    },
    {
      time: "10:30-12:30",
      day: "Monday",
      activity: "Thoracic Anatomy",
      instructor: "Dr. Michael Chen",
      table: "DT-002",
      batch: "MBBS Year 1",
      type: "practical"
    },
    {
      time: "14:00-16:00",
      day: "Monday",
      activity: "Histology Practical",
      instructor: "Dr. Emily Davis",
      table: "DT-003",
      batch: "MBBS Year 2",
      type: "microscopic"
    },
    {
      time: "16:30-18:00",
      day: "Monday",
      activity: "Demonstration Session",
      instructor: "Dr. Robert Wilson",
      table: "DT-004",
      batch: "All Years",
      type: "demonstration"
    }
  ]

  const safetyProtocols = [
    {
      category: "Personal Safety",
      protocols: [
        "Lab coats must be worn at all times",
        "Gloves are mandatory when handling specimens",
        "Face protection required during dissection",
        "Closed-toe shoes compulsory",
        "No jewelry or loose clothing"
      ],
      icon: Shield,
      color: "text-red-600"
    },
    {
      category: "Specimen Handling",
      protocols: [
        "Follow proper specimen storage procedures",
        "Use formaldehyde fume hoods for preserved specimens",
        "Report any specimen damage immediately",
        "Maintain specimen integrity at all times",
        "Dispose of waste according to guidelines"
      ],
      icon: FlaskConical,
      color: "text-blue-600"
    },
    {
      category: "Equipment Safety",
      protocols: [
        "Inspect tools before each use",
        "Report damaged equipment immediately",
        "Clean and disinfect tools after use",
        "Store sharp objects in designated containers",
        "Follow equipment maintenance schedules"
      ],
      icon: Wrench,
      color: "text-purple-600"
    },
    {
      category: "Emergency Procedures",
      protocols: [
        "Know emergency exit locations",
        "Understand chemical spill procedures",
        "Learn first aid for cuts and injuries",
        "Report all accidents immediately",
        "Participate in safety drills"
      ],
      icon: AlertTriangle,
      color: "text-orange-600"
    }
  ]

  const galleryImages = [
    {
      id: 1,
      title: "Main Dissection Hall",
      category: "facility",
      description: "Spacious main dissection hall with advanced ventilation systems",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Gross Anatomy Tables",
      category: "equipment",
      description: "Modern gross anatomy dissection tables with local exhaust ventilation",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Microscopy Station",
      category: "equipment",
      description: "Advanced microscopy stations for histology and pathology studies",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Demonstration Area",
      category: "facility",
      description: "Large demonstration area with video projection capabilities",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Specimen Storage",
      category: "facility",
      description: "Climate-controlled specimen storage facility",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Safety Equipment",
      category: "safety",
      description: "Comprehensive safety equipment including fume hoods and emergency showers",
      image: "/api/placeholder/400/300"
    }
  ]

  const performanceMetrics = [
    {
      label: "Total Tables",
      value: 6,
      unit: "stations",
      trend: "stable",
      icon: Brain,
      color: "text-red-600"
    },
    {
      label: "Student Capacity",
      value: 54,
      unit: "students",
      trend: "up",
      icon: Users,
      color: "text-blue-600"
    },
    {
      label: "Equipment Count",
      value: 200,
      unit: "items",
      trend: "up",
      icon: Wrench,
      color: "text-purple-600"
    },
    {
      label: "Safety Score",
      value: 98,
      unit: "%",
      trend: "stable",
      icon: Shield,
      color: "text-green-600"
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
                <metric.icon className="w-8 h-8 text-red-600" />
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
            Dissection Hall Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Dissection Tables</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">54</div>
              <div className="text-sm text-gray-600">Student Capacity</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">98%</div>
              <div className="text-sm text-gray-600">Safety Compliance</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
          <CardContent className="p-6 text-center">
            <Brain className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">4</div>
            <div className="text-sm opacity-90">Table Types</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <Wrench className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">200</div>
            <div className="text-sm opacity-90">Equipment Items</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm opacity-90">Ventilation Coverage</div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Today's Dissection Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduleData.slice(0, 3).map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div>
                    <div className="font-semibold text-gray-800">{session.time}</div>
                    <div className="text-sm text-gray-600">{session.activity}</div>
                    <div className="text-xs text-gray-500">{session.instructor} • {session.table}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{session.batch}</div>
                  <div className="text-xs text-gray-600">{session.type}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderFacilities = () => (
    <div className="space-y-8">
      {/* Table Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'gross', 'microscopic', 'demonstration', 'research'].map((type) => (
          <button
            key={type}
            onClick={() => setActiveCategory(type)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeCategory === type
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Dissection Tables Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dissectionTables
          .filter(table => activeCategory === 'all' || table.type === activeCategory)
          .map((table, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{table.tableNumber}</h3>
                  <p className="text-sm text-gray-600 capitalize">{table.type} table</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  table.status === 'available' ? 'bg-green-500' :
                  table.status === 'occupied' ? 'bg-red-500' :
                  'bg-yellow-500'
                }`}></div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Capacity:</span>
                  <span className="font-medium">{table.capacity} students</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium capitalize ${
                    table.status === 'available' ? 'text-green-600' :
                    table.status === 'occupied' ? 'text-red-600' :
                    'text-yellow-600'
                  }`}>{table.status}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Current Usage:</span>
                  <span className="font-medium">{table.currentUsage}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Instructor:</span>
                  <span className="font-medium">{table.instructor}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Equipment:</h4>
                <div className="flex flex-wrap gap-1">
                  {table.equipment.slice(0, 3).map((equipment, equipIndex) => (
                    <span key={equipIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {equipment}
                    </span>
                  ))}
                  {table.equipment.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{table.equipment.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Specimens:</h4>
                <div className="flex flex-wrap gap-1">
                  {Array.isArray(table.specimens) ? table.specimens.slice(0, 2).map((specimen, specIndex) => (
                    <span key={specIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {specimen}
                    </span>
                  )) : (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {table.specimens}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Next Session:</h4>
                <div className="text-sm text-gray-600">{table.nextSession}</div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Table
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  View Details
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Facility Statistics */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Table Utilization Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Table Type Distribution</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Gross Anatomy</span>
                    <span className="text-sm font-semibold">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Microscopic</span>
                    <span className="text-sm font-semibold">17%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '17%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Demonstration</span>
                    <span className="text-sm font-semibold">17%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '17%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Research</span>
                    <span className="text-sm font-semibold">16%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '16%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Daily Usage Patterns</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Morning (8AM-12PM)</span>
                    <span className="text-sm font-semibold">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Afternoon (12PM-5PM)</span>
                    <span className="text-sm font-semibold">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Evening (5PM-9PM)</span>
                    <span className="text-sm font-semibold">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Night (9PM-12AM)</span>
                    <span className="text-sm font-semibold">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-600 h-2 rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderEquipment = () => (
    <div className="space-y-8">
      {/* Equipment Categories */}
      {equipment.map((equipmentCategory, index) => (
        <Card key={index} className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              {equipmentCategory.category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {equipmentCategory.items.map((item, itemIndex) => (
                <div key={itemIndex} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'operational' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Count:</span>
                      <span className="font-medium">{item.count}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-medium capitalize text-green-600">{item.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Equipment Summary */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Equipment Infrastructure Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <Wrench className="w-8 h-8 mx-auto mb-2 text-red-600" />
              <div className="text-2xl font-bold text-gray-800">168</div>
              <div className="text-sm text-gray-600">Total Tools</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Microscope className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-800">24</div>
              <div className="text-sm text-gray-600">Microscopes</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Shield className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-800">17</div>
              <div className="text-sm text-gray-600">Safety Items</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Archive className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-gray-800">112</div>
              <div className="text-sm text-gray-600">Storage Units</div>
            </div>
          </div>
        </CardContent>
      </Card>
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
                  <div className="bg-red-100 text-red-700 text-xs p-1 rounded">
                    08:00-12:00
                  </div>
                  <div className="bg-blue-100 text-blue-700 text-xs p-1 rounded">
                    14:00-18:00
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
          <CardTitle>Complete Dissection Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduleData.map((session, index) => (
              <div key={index} className="border-l-4 border-red-600 pl-4 py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">{session.activity}</div>
                    <div className="text-sm text-gray-600">
                      {session.day} • {session.time} • {session.instructor}
                    </div>
                    <div className="text-xs text-gray-500">{session.batch} • {session.table} • {session.type}</div>
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                    Scheduled
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
              <div className="text-2xl font-bold text-red-600">999</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-lg font-bold text-gray-800 mb-2">Lab Safety</div>
              <div className="text-2xl font-bold text-orange-600">ext. 3456</div>
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
                <span className="font-semibold text-red-700">Fume Hoods</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Each dissection table</li>
                <li>• Specimen preparation area</li>
                <li>• Chemical storage room</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-blue-700">Eye Wash Stations</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Each dissection table</li>
                <li>• Main entrance</li>
                <li>• Emergency exits</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-green-700">Safety Showers</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Hall corners</li>
                <li>• Near specimen storage</li>
                <li>• Emergency exits</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-purple-700">Fire Extinguishers</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Each table area</li>
                <li>• Storage rooms</li>
                <li>• Main corridors</li>
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
        {['all', 'facility', 'equipment', 'safety'].map((category) => (
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
                  image.category === 'safety' ? 'bg-red-100 text-red-700' :
                  'bg-purple-100 text-purple-700'
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
            <Wrench className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">2</div>
            <div className="text-sm opacity-90">Equipment Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
          <CardContent className="p-6 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-sm opacity-90">Safety Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <Camera className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">6</div>
            <div className="text-sm opacity-90">Total Images</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview()
      case 'facilities': return renderFacilities()
      case 'equipment': return renderEquipment()
      case 'schedule': return renderSchedule()
      case 'safety': return renderSafety()
      case 'gallery': return renderGallery()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-orange-600/5 to-yellow-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <Brain className="w-16 h-16 text-red-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Dissection Hall</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Advanced anatomical dissection facility with modern equipment, comprehensive safety measures, and specialized learning environments for medical education
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Hands-On Learning
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Safety First
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
                    ? 'border-red-600 text-red-600 bg-red-50'
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
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Excellence in Anatomical Education</h2>
          <p className="text-xl mb-8 opacity-90">State-of-the-art dissection facility providing comprehensive hands-on anatomical learning with the highest safety standards</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Session
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
