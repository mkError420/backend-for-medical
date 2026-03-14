"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function ClassroomPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedRoom, setSelectedRoom] = useState<any>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-emerald-500 to-emerald-600' },
    { id: 'classrooms', label: 'Classrooms', icon: '🏫', color: 'from-blue-500 to-blue-600' },
    { id: 'facilities', label: 'Facilities', icon: '🏛️', color: 'from-purple-500 to-purple-600' },
    { id: 'schedule', label: 'Schedule', icon: '📅', color: 'from-orange-500 to-orange-600' },
    { id: 'technology', label: 'Technology', icon: '💻', color: 'from-cyan-500 to-cyan-600' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️', color: 'from-indigo-500 to-indigo-600' }
  ]

  const classrooms = [
    {
      id: 1,
      name: "Lecture Hall A",
      type: "lecture",
      capacity: 150,
      floor: "Ground Floor",
      status: "available",
      features: ["Projector", "Sound System", "Air Conditioning", "WiFi", "Recording System"],
      equipment: ["Smart Board", "Document Camera", "Microphones", "Speakers"],
      schedule: "08:00-17:00",
      bookingStatus: "Available",
      maintenance: "Weekly cleaning",
      lastInspection: "2025-02-10",
      accessibility: "Wheelchair accessible",
      ventilation: "Central AC",
      lighting: "LED lighting"
    },
    {
      id: 2,
      name: "Tutorial Room B-1",
      type: "tutorial",
      capacity: 30,
      floor: "1st Floor",
      status: "occupied",
      features: ["Interactive Board", "Air Conditioning", "WiFi", "Video Conferencing"],
      equipment: ["Smart TV", "Whiteboard", "Laptop Connections"],
      schedule: "09:00-16:00",
      bookingStatus: "Occupied - Biochemistry",
      maintenance: "Daily cleaning",
      lastInspection: "2025-02-12",
      accessibility: "Wheelchair accessible",
      ventilation: "Central AC",
      lighting: "Natural + LED"
    },
    {
      id: 3,
      name: "Seminar Hall C",
      type: "seminar",
      capacity: 80,
      floor: "2nd Floor",
      status: "available",
      features: ["Projector", "Sound System", "Video Conferencing", "Recording", "Air Conditioning"],
      equipment: ["HD Projector", "Surround Sound", "Video Conference System", "Recording System"],
      schedule: "08:00-18:00",
      bookingStatus: "Available",
      maintenance: "Bi-weekly cleaning",
      lastInspection: "2025-02-08",
      accessibility: "Wheelchair accessible",
      ventilation: "Central AC",
      lighting: "Dimmable LED"
    },
    {
      id: 4,
      name: "Computer Lab D",
      type: "computer",
      capacity: 40,
      floor: "3rd Floor",
      status: "maintenance",
      features: ["Computers", "High-Speed Internet", "Air Conditioning", "Projector"],
      equipment: ["40 Desktop PCs", "Server", "Network Equipment", "Printer"],
      schedule: "09:00-17:00",
      bookingStatus: "Under Maintenance",
      maintenance: "System updates",
      lastInspection: "2025-02-14",
      accessibility: "Wheelchair accessible",
      ventilation: "Central AC",
      lighting: "Anti-glare LED"
    },
    {
      id: 5,
      name: "Anatomy Lab E",
      type: "laboratory",
      capacity: 25,
      floor: "4th Floor",
      status: "available",
      features: ["Dissection Tables", "Microscopes", "Models", "Air Conditioning"],
      equipment: ["Dissection Tables", "Microscopes", "Anatomical Models", "Storage"],
      schedule: "08:00-16:00",
      bookingStatus: "Available",
      maintenance: "Daily cleaning",
      lastInspection: "2025-02-11",
      accessibility: "Wheelchair accessible",
      ventilation: "Specialized ventilation",
      lighting: "Task lighting"
    },
    {
      id: 6,
      name: "Group Study Room F",
      type: "study",
      capacity: 12,
      floor: "5th Floor",
      status: "occupied",
      features: ["Whiteboard", "WiFi", "Air Conditioning", "Study Materials"],
      equipment: ["Whiteboard", "Charging Stations", "Study Resources"],
      schedule: "24/7 Access",
      bookingStatus: "Occupied - Group Study",
      maintenance: "Daily cleaning",
      lastInspection: "2025-02-13",
      accessibility: "Wheelchair accessible",
      ventilation: "Natural ventilation",
      lighting: "Adjustable LED"
    }
  ]

  const facilities = [
    {
      id: 1,
      name: "Digital Library",
      type: "resource",
      capacity: 60,
      features: ["Digital Resources", "Study Areas", "Computers", "Printing"],
      available: "24/7",
      location: "Ground Floor",
      equipment: ["Computers", "Printers", "Scanners", "Digital Database"]
    },
    {
      id: 2,
      name: "Faculty Lounge",
      type: "faculty",
      capacity: 20,
      features: ["Workstations", "Meeting Area", "Refreshments", "WiFi"],
      available: "08:00-18:00",
      location: "1st Floor",
      equipment: ["Workstations", "Coffee Machine", "Meeting Table"]
    },
    {
      id: 3,
      name: "Student Common Room",
      type: "student",
      capacity: 50,
      features: ["Seating Area", "Vending Machines", "WiFi", "Entertainment"],
      available: "08:00-22:00",
      location: "Basement",
      equipment: ["TV", "Vending Machines", "Seating", "WiFi"]
    },
    {
      id: 4,
      name: "Prayer Room",
      type: "prayer",
      capacity: 30,
      features: ["Prayer Space", "Wudu Area", "Quiet Environment"],
      available: "24/7",
      location: "2nd Floor",
      equipment: ["Prayer Mats", "Wudu Facilities"]
    }
  ]

  const scheduleData = [
    {
      time: "08:00-09:30",
      day: "Monday",
      subject: "Anatomy",
      faculty: "Dr. Sarah Johnson",
      room: "Lecture Hall A",
      batch: "MBBS Year 1",
      type: "lecture"
    },
    {
      time: "09:45-11:15",
      day: "Monday",
      subject: "Physiology",
      faculty: "Dr. Michael Chen",
      room: "Tutorial Room B-1",
      batch: "MBBS Year 1",
      type: "tutorial"
    },
    {
      time: "11:30-13:00",
      day: "Monday",
      subject: "Biochemistry",
      faculty: "Dr. Emily Davis",
      room: "Seminar Hall C",
      batch: "MBBS Year 2",
      type: "seminar"
    },
    {
      time: "14:00-16:00",
      day: "Monday",
      subject: "Computer Skills",
      faculty: "Dr. Robert Wilson",
      room: "Computer Lab D",
      batch: "All Years",
      type: "practical"
    },
    {
      time: "16:15-17:45",
      day: "Monday",
      subject: "Group Study",
      faculty: "Self Study",
      room: "Group Study Room F",
      batch: "Study Groups",
      type: "study"
    }
  ]

  const technology = [
    {
      category: "Teaching Technology",
      items: [
        { name: "Smart Boards", count: 12, status: "operational", location: "All classrooms" },
        { name: "Projectors", count: 15, status: "operational", location: "Lecture halls and seminar rooms" },
        { name: "Document Cameras", count: 8, status: "operational", location: "Tutorial rooms" },
        { name: "Interactive Displays", count: 6, status: "operational", location: "Seminar halls" }
      ]
    },
    {
      category: "Audio Visual",
      items: [
        { name: "Sound Systems", count: 10, status: "operational", location: "Lecture halls" },
        { name: "Microphones", count: 20, status: "operational", location: "All rooms" },
        { name: "Video Conference", count: 5, status: "operational", location: "Seminar rooms" },
        { name: "Recording Systems", count: 3, status: "operational", location: "Main halls" }
      ]
    },
    {
      category: "Computing",
      items: [
        { name: "Desktop Computers", count: 60, status: "operational", location: "Computer lab" },
        { name: "Laptops", count: 15, status: "operational", location: "Faculty rooms" },
        { name: "Servers", count: 3, status: "operational", location: "IT department" },
        { name: "Network Equipment", count: 25, status: "operational", location: "All floors" }
      ]
    },
    {
      category: "Infrastructure",
      items: [
        { name: "WiFi Access Points", count: 30, status: "operational", location: "All areas" },
        { name: "Air Conditioning", count: 20, status: "operational", location: "All rooms" },
        { name: "Lighting Systems", count: 100, status: "operational", location: "All areas" },
        { name: "Security Cameras", count: 40, status: "operational", location: "All areas" }
      ]
    }
  ]

  const galleryImages = [
    {
      id: 1,
      title: "Main Lecture Hall",
      category: "classroom",
      description: "Spacious lecture hall with modern teaching equipment",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Interactive Tutorial Room",
      category: "classroom",
      description: "Modern tutorial room with interactive smart board",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Computer Laboratory",
      category: "technology",
      description: "Well-equipped computer lab with high-speed internet",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Digital Library",
      category: "facility",
      description: "Modern digital library with extensive resources",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Seminar Hall",
      category: "classroom",
      description: "Professional seminar hall with video conferencing",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Student Common Room",
      category: "facility",
      description: "Comfortable student common room for relaxation",
      image: "/api/placeholder/400/300"
    }
  ]

  const performanceMetrics = [
    {
      label: "Total Classrooms",
      value: 6,
      unit: "rooms",
      trend: "stable",
      icon: Building,
      color: "text-emerald-600"
    },
    {
      label: "Student Capacity",
      value: 335,
      unit: "students",
      trend: "up",
      icon: Users,
      color: "text-blue-600"
    },
    {
      label: "Utilization Rate",
      value: 78,
      unit: "%",
      trend: "up",
      icon: Activity,
      color: "text-green-600"
    },
    {
      label: "Technology Score",
      value: 95,
      unit: "%",
      trend: "stable",
      icon: Laptop,
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
                <metric.icon className="w-8 h-8 text-emerald-600" />
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
            Classroom Facility Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Classrooms</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">335</div>
              <div className="text-sm text-gray-600">Total Capacity</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">95%</div>
              <div className="text-sm text-gray-600">Technology Ready</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <CardContent className="p-6 text-center">
            <Building className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">6</div>
            <div className="text-sm opacity-90">Room Types</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">78%</div>
            <div className="text-sm opacity-90">Utilization Rate</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <Wifi className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm opacity-90">WiFi Coverage</div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Today's Class Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduleData.slice(0, 3).map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <div>
                    <div className="font-semibold text-gray-800">{session.time}</div>
                    <div className="text-sm text-gray-600">{session.subject}</div>
                    <div className="text-xs text-gray-500">{session.faculty} • {session.room}</div>
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

  const renderClassrooms = () => (
    <div className="space-y-6">
      {/* Classroom Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'lecture', 'tutorial', 'seminar', 'computer', 'laboratory', 'study'].map((type) => (
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

      {/* Classrooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classrooms
          .filter(room => activeCategory === 'all' || room.type === activeCategory)
          .map((room, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{room.name}</h3>
                  <p className="text-sm text-gray-600 capitalize">{room.type} • {room.floor}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  room.status === 'available' ? 'bg-green-500' :
                  room.status === 'occupied' ? 'bg-red-500' :
                  'bg-yellow-500'
                }`}></div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Capacity:</span>
                  <span className="font-medium">{room.capacity} students</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium capitalize ${
                    room.status === 'available' ? 'text-green-600' :
                    room.status === 'occupied' ? 'text-red-600' :
                    'text-yellow-600'
                  }`}>{room.status}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Booking:</span>
                  <span className="font-medium">{room.bookingStatus}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {room.features.slice(0, 3).map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                  {room.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{room.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Equipment:</h4>
                <div className="flex flex-wrap gap-1">
                  {room.equipment.slice(0, 3).map((equipment, equipIndex) => (
                    <span key={equipIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
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

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Room
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

  const renderFacilities = () => (
    <div className="space-y-8">
      {/* Additional Facilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facilities.map((facility, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{facility.name}</h3>
                  <p className="text-sm text-gray-600 capitalize">{facility.type} facility</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{facility.capacity} capacity</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{facility.available}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{facility.location}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {facility.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Equipment:</h4>
                <div className="flex flex-wrap gap-1">
                  {facility.equipment.map((equipment, equipIndex) => (
                    <span key={equipIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {equipment}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Get Directions
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
            Facility Utilization Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Room Type Distribution</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Lecture Halls</span>
                    <span className="text-sm font-semibold">16.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '16.7%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Tutorial Rooms</span>
                    <span className="text-sm font-semibold">16.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '16.7%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Seminar Halls</span>
                    <span className="text-sm font-semibold">16.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '16.7%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Computer Labs</span>
                    <span className="text-sm font-semibold">16.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-cyan-600 h-2 rounded-full" style={{width: '16.7%'}}></div>
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
                    <span className="text-sm font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Afternoon (12PM-5PM)</span>
                    <span className="text-sm font-semibold">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Evening (5PM-9PM)</span>
                    <span className="text-sm font-semibold">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Night (9PM-12AM)</span>
                    <span className="text-sm font-semibold">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-600 h-2 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
              </div>
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
                  <div className="bg-blue-100 text-blue-700 text-xs p-1 rounded">
                    08:00-17:00
                  </div>
                  <div className="bg-purple-100 text-purple-700 text-xs p-1 rounded">
                    18:00-21:00
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
          <CardTitle>Complete Class Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduleData.map((session, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">{session.subject}</div>
                    <div className="text-sm text-gray-600">
                      {session.day} • {session.time} • {session.faculty}
                    </div>
                    <div className="text-xs text-gray-500">{session.batch} • {session.room} • {session.type}</div>
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
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

  const renderTechnology = () => (
    <div className="space-y-8">
      {/* Technology Categories */}
      {technology.map((techCategory, index) => (
        <Card key={index} className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Laptop className="w-5 h-5" />
              {techCategory.category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {techCategory.items.map((item, itemIndex) => (
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

      {/* Technology Summary */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Technology Infrastructure Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Monitor className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-800">90</div>
              <div className="text-sm text-gray-600">Total Devices</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Wifi className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-800">100%</div>
              <div className="text-sm text-gray-600">Network Coverage</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Settings className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-gray-800">98%</div>
              <div className="text-sm text-gray-600">Operational Rate</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Zap className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-gray-800">24/7</div>
              <div className="text-sm text-gray-600">IT Support</div>
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
        {['all', 'classroom', 'facility', 'technology'].map((category) => (
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
                  image.category === 'classroom' ? 'bg-blue-100 text-blue-700' :
                  image.category === 'facility' ? 'bg-green-100 text-green-700' :
                  image.category === 'technology' ? 'bg-purple-100 text-purple-700' :
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
            <div className="text-sm opacity-90">Classroom Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <Library className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">2</div>
            <div className="text-sm opacity-90">Facility Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <Laptop className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-sm opacity-90">Technology Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
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
      case 'classrooms': return renderClassrooms()
      case 'facilities': return renderFacilities()
      case 'schedule': return renderSchedule()
      case 'technology': return renderTechnology()
      case 'gallery': return renderGallery()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-blue-600/5 to-purple-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <Building className="w-16 h-16 text-emerald-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Academic Classrooms</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Modern, well-equipped classrooms and learning spaces designed to facilitate effective medical education with advanced technology integration
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Modern Learning
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Technology Enabled
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
                    ? 'border-emerald-600 text-emerald-600 bg-emerald-50'
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
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Excellence in Medical Education</h2>
          <p className="text-xl mb-8 opacity-90">State-of-the-art classroom facilities providing the perfect environment for learning and academic excellence</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Classroom
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
