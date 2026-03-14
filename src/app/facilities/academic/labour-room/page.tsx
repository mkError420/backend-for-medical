"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function LabourRoomPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedBed, setSelectedBed] = useState<any>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-pink-500 to-pink-600' },
    { id: 'beds', label: 'Beds', icon: '🛏️', color: 'from-rose-500 to-rose-600' },
    { id: 'equipment', label: 'Equipment', icon: '⚕️', color: 'from-purple-500 to-purple-600' },
    { id: 'staff', label: 'Staff', icon: '👥', color: 'from-blue-500 to-blue-600' },
    { id: 'procedures', label: 'Procedures', icon: '🏥', color: 'from-green-500 to-green-600' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️', color: 'from-indigo-500 to-indigo-600' }
  ]

  const labourBeds = [
    {
      id: 1,
      bedNumber: "LR-001",
      type: "labour",
      status: "occupied",
      patientName: "Mrs. Ayesha Rahman",
      gestationalAge: "38 weeks",
      laborStage: "Active Phase",
      cervicalDilation: "6 cm",
      fetalHeartRate: "140 bpm",
      contractions: "Every 3 minutes",
      painManagement: "Epidural",
      monitoring: ["CTG", "Maternal vitals", "Fetal monitoring", "Pain assessment"],
      staff: ["Dr. Sarah Johnson", "Nurse Emily Davis", "Midwife Lisa Chen"],
      admissionTime: "2025-02-14 06:30",
      expectedDelivery: "Within 4-6 hours",
      complications: "None",
      partnerPresent: true
    },
    {
      id: 2,
      bedNumber: "LR-002",
      type: "delivery",
      status: "occupied",
      patientName: "Mrs. Fatima Ali",
      gestationalAge: "40 weeks",
      laborStage: "Second Stage",
      cervicalDilation: "Fully dilated",
      fetalHeartRate: "135 bpm",
      contractions: "Every 2 minutes",
      painManagement: "Entonox",
      monitoring: ["CTG", "Maternal vitals", "Fetal monitoring", "Delivery preparation"],
      staff: ["Dr. Michael Chen", "Nurse Jessica Wilson", "Midwife Maria Garcia"],
      admissionTime: "2025-02-14 04:15",
      expectedDelivery: "Imminent",
      complications: "None",
      partnerPresent: true
    },
    {
      id: 3,
      bedNumber: "LR-003",
      type: "postpartum",
      status: "occupied",
      patientName: "Mrs. Nusrat Islam",
      gestationalAge: "Delivered",
      laborStage: "Postpartum",
      cervicalDilation: "Closed",
      fetalHeartRate: "N/A",
      contractions: "None",
      painManagement: "Analgesics",
      monitoring: ["Maternal vitals", "Postpartum bleeding", "Uterine contraction", "VTE prophylaxis"],
      staff: ["Dr. Robert Wilson", "Nurse Amanda Brown", "Midwife Sophie Martin"],
      admissionTime: "2025-02-13 22:45",
      expectedDelivery: "Delivered 8 hours ago",
      complications: "None",
      partnerPresent: false
    },
    {
      id: 4,
      bedNumber: "LR-004",
      type: "labour",
      status: "available",
      patientName: "Available",
      gestationalAge: "N/A",
      laborStage: "Ready for admission",
      cervicalDilation: "N/A",
      fetalHeartRate: "N/A",
      contractions: "N/A",
      painManagement: "Available",
      monitoring: ["CTG ready", "Maternal monitoring ready", "Fetal monitoring ready"],
      staff: ["On-call team"],
      admissionTime: "Available",
      expectedDelivery: "N/A",
      complications: "None",
      partnerPresent: false
    },
    {
      id: 5,
      bedNumber: "LR-005",
      type: "high-risk",
      status: "occupied",
      patientName: "Mrs. Karima Begum",
      gestationalAge: "36 weeks",
      laborStage: "Induction",
      cervicalDilation: "2 cm",
      fetalHeartRate: "145 bpm",
      contractions: "Induced",
      painManagement: "Epidural",
      monitoring: ["CTG", "Maternal vitals", "Fetal monitoring", "Blood glucose", "BP monitoring"],
      staff: ["Dr. Lisa Anderson", "Nurse Rachel Green", "Midwife Jennifer White", "Neonatologist on call"],
      admissionTime: "2025-02-14 08:00",
      expectedDelivery: "Within 12-24 hours",
      complications: "Gestational diabetes",
      partnerPresent: true
    },
    {
      id: 6,
      bedNumber: "LR-006",
      type: "recovery",
      status: "occupied",
      patientName: "Mrs. Sumaya Khan",
      gestationalAge: "Delivered",
      laborStage: "Recovery",
      cervicalDilation: "Closed",
      fetalHeartRate: "N/A",
      contractions: "None",
      painManagement: "PCA",
      monitoring: ["Maternal vitals", "Postoperative monitoring", "Wound care", "Pain management"],
      staff: ["Dr. David Thompson", "Nurse Olivia Martinez", "Midwife Emily Taylor"],
      admissionTime: "2025-02-14 02:30",
      expectedDelivery: "C-section 6 hours ago",
      complications: "Post C-section recovery",
      partnerPresent: false
    }
  ]

  const equipment = [
    {
      category: "Monitoring Equipment",
      items: [
        { name: "CTG Machines", count: 6, status: "operational", location: "Each bed" },
        { name: "Fetal Dopplers", count: 8, status: "operational", location: "Mobile units" },
        { name: "Maternal Monitors", count: 6, status: "operational", location: "Each bed" },
        { name: "Blood Pressure Monitors", count: 12, status: "operational", location: "All areas" }
      ]
    },
    {
      category: "Delivery Equipment",
      items: [
        { name: "Delivery Beds", count: 6, status: "operational", location: "Delivery rooms" },
        { name: "Neonatal Resuscitation Trolleys", count: 3, status: "operational", location: "Strategic points" },
        { name: "Vacuum Extractors", count: 4, status: "operational", location: "Delivery rooms" },
        { name: "Forceps Sets", count: 6, status: "operational", location: "Sterile storage" }
      ]
    },
    {
      category: "Emergency Equipment",
      items: [
        { name: "Emergency Crash Carts", count: 3, status: "operational", location: "Each zone" },
        { name: "Oxygen Cylinders", count: 12, status: "operational", location: "Each bed" },
        { name: "Suction Machines", count: 6, status: "operational", location: "Each bed" },
        { name: "IV Pumps", count: 12, status: "operational", location: "Each bed" }
      ]
    },
    {
      category: "Comfort Equipment",
      items: [
        { name: "Birthing Balls", count: 8, status: "operational", location: "Available" },
        { name: "TENS Machines", count: 6, status: "operational", location: "Available" },
        { name: "Epidural Carts", count: 3, status: "operational", location: "Anesthesia area" },
        { name: "Warmers", count: 6, status: "operational", location: "Each bed" }
      ]
    }
  ]

  const staff = [
    {
      category: "Medical Staff",
      members: [
        { name: "Dr. Sarah Johnson", role: "Obstetrician", experience: "12 years", onDuty: true, specialization: "High-risk pregnancies" },
        { name: "Dr. Michael Chen", role: "Obstetrician", experience: "8 years", onDuty: true, specialization: "Normal deliveries" },
        { name: "Dr. Lisa Anderson", role: "Obstetrician", experience: "15 years", onDuty: false, specialization: "Maternal-fetal medicine" },
        { name: "Dr. Robert Wilson", role: "Anesthesiologist", experience: "10 years", onDuty: true, specialization: "Labor analgesia" }
      ]
    },
    {
      category: "Nursing Staff",
      members: [
        { name: "Emily Davis", role: "Senior Nurse", experience: "8 years", onDuty: true, shift: "Day" },
        { name: "Jessica Wilson", role: "Senior Nurse", experience: "6 years", onDuty: true, shift: "Day" },
        { name: "Amanda Brown", role: "Staff Nurse", experience: "4 years", onDuty: true, shift: "Night" },
        { name: "Rachel Green", role: "Staff Nurse", experience: "3 years", onDuty: false, shift: "Night" }
      ]
    },
    {
      category: "Midwifery Staff",
      members: [
        { name: "Lisa Chen", role: "Senior Midwife", experience: "10 years", onDuty: true, certification: "RM" },
        { name: "Maria Garcia", role: "Senior Midwife", experience: "8 years", onDuty: true, certification: "RM" },
        { name: "Sophie Martin", role: "Midwife", experience: "5 years", onDuty: true, certification: "RM" },
        { name: "Jennifer White", role: "Midwife", experience: "3 years", onDuty: false, certification: "RM" }
      ]
    },
    {
      category: "Support Staff",
      members: [
        { name: "David Thompson", role: "Neonatologist", experience: "12 years", onDuty: "On call", specialization: "Neonatal care" },
        { name: "Olivia Martinez", role: "Pharmacist", experience: "6 years", onDuty: true, specialization: "Obstetric pharmacy" },
        { name: "Emily Taylor", role: "Lab Technician", experience: "4 years", onDuty: true, specialization: "Emergency labs" }
      ]
    }
  ]

  const procedures = [
    {
      name: "Normal Vaginal Delivery",
      description: "Standard delivery process for uncomplicated pregnancies",
      duration: "8-12 hours",
      successRate: 98,
      staff: ["Obstetrician", "Midwife", "Nurse"],
      equipment: ["Delivery bed", "CTG", "Neonatal resuscitation"],
      painManagement: "Epidural/Entonox"
    },
    {
      name: "Emergency C-Section",
      description: "Surgical delivery for maternal or fetal complications",
      duration: "45-60 minutes",
      successRate: 99,
      staff: ["Obstetrician", "Anesthesiologist", "Surgeon", "Neonatologist"],
      equipment: ["Operating theater", "Surgical instruments", "Anesthesia machine"],
      painManagement: "Spinal/General anesthesia"
    },
    {
      name: "Instrumental Delivery",
      description: "Vacuum or forceps assisted delivery",
      duration: "30-45 minutes",
      successRate: 95,
      staff: ["Obstetrician", "Midwife", "Nurse"],
      equipment: ["Vacuum extractor", "Forceps", "CTG"],
      painManagement: "Local anesthesia"
    },
    {
      name: "Induction of Labor",
      description: "Medical induction for post-term or indicated pregnancies",
      duration: "12-24 hours",
      successRate: 85,
      staff: ["Obstetrician", "Midwife", "Nurse"],
      equipment: ["CTG", "IV pump", "Induction agents"],
      painManagement: "As required"
    },
    {
      name: "Episiotomy Repair",
      description: "Surgical repair of perineal trauma",
      duration: "20-30 minutes",
      successRate: 99,
      staff: ["Obstetrician", "Midwife", "Nurse"],
      equipment: ["Surgical instruments", "Local anesthesia"],
      painManagement: "Local anesthesia"
    },
    {
      name: "Neonatal Resuscitation",
      description: "Emergency care for newborns requiring assistance",
      duration: "5-30 minutes",
      successRate: 92,
      staff: ["Neonatologist", "Neonatal nurse", "Obstetrician"],
      equipment: ["Resuscitation trolley", "Oxygen", "Suction"],
      painManagement: "Not applicable"
    }
  ]

  const galleryImages = [
    {
      id: 1,
      title: "Main Labour Room",
      category: "facility",
      description: "Modern labour room with advanced monitoring equipment",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Delivery Suite",
      category: "facility",
      description: "State-of-the-art delivery suite with emergency equipment",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "CTG Monitoring",
      category: "equipment",
      description: "Advanced fetal monitoring systems for continuous surveillance",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Neonatal Care Unit",
      category: "facility",
      description: "Specialized neonatal care area for newborn assessment",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Medical Team",
      category: "staff",
      description: "Dedicated medical team providing comprehensive care",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Family Support Area",
      category: "facility",
      description: "Comfortable waiting area for families and partners",
      image: "/api/placeholder/400/300"
    }
  ]

  const performanceMetrics = [
    {
      label: "Total Beds",
      value: 6,
      unit: "beds",
      trend: "stable",
      icon: Bed,
      color: "text-pink-600"
    },
    {
      label: "Daily Deliveries",
      value: 8,
      unit: "births",
      trend: "up",
      icon: Baby,
      color: "text-rose-600"
    },
    {
      label: "Staff Available",
      value: 15,
      unit: "members",
      trend: "stable",
      icon: Users,
      color: "text-blue-600"
    },
    {
      label: "Success Rate",
      value: 97,
      unit: "%",
      trend: "stable",
      icon: Target,
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
                <metric.icon className="w-8 h-8 text-pink-600" />
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
            Labour Room Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-pink-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Labour Beds</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Baby className="w-8 h-8 text-rose-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">8</div>
              <div className="text-sm text-gray-600">Daily Deliveries</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">15</div>
              <div className="text-sm text-gray-600">Staff Members</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white">
          <CardContent className="p-6 text-center">
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">97%</div>
            <div className="text-sm opacity-90">Success Rate</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-rose-500 to-rose-600 text-white">
          <CardContent className="p-6 text-center">
            <Activity className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-90">Service Available</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm opacity-90">Emergency Ready</div>
          </CardContent>
        </Card>
      </div>

      {/* Current Status */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Current Labour Room Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {labourBeds.slice(0, 3).map((bed, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    bed.status === 'occupied' ? 'bg-red-500' :
                    bed.status === 'available' ? 'bg-green-500' :
                    'bg-yellow-500'
                  }`}></div>
                  <div>
                    <div className="font-semibold text-gray-800">{bed.bedNumber}</div>
                    <div className="text-sm text-gray-600">{bed.patientName}</div>
                    <div className="text-xs text-gray-500">{bed.laborStage} • {bed.cervicalDilation}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{bed.fetalHeartRate}</div>
                  <div className="text-xs text-gray-600">FHR</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderBeds = () => (
    <div className="space-y-6">
      {/* Bed Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'labour', 'delivery', 'postpartum', 'high-risk', 'recovery'].map((type) => (
          <button
            key={type}
            onClick={() => setActiveCategory(type)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeCategory === type
                ? 'border-b-2 border-rose-600 text-rose-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Beds Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {labourBeds
          .filter(bed => activeCategory === 'all' || bed.type === activeCategory)
          .map((bed, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{bed.bedNumber}</h3>
                  <p className="text-sm text-gray-600 capitalize">{bed.type} bed</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  bed.status === 'occupied' ? 'bg-red-500' :
                  bed.status === 'available' ? 'bg-green-500' :
                  'bg-yellow-500'
                }`}></div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Patient:</span>
                  <span className="font-medium">{bed.patientName}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Gestation:</span>
                  <span className="font-medium">{bed.gestationalAge}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Stage:</span>
                  <span className="font-medium">{bed.laborStage}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Dilation:</span>
                  <span className="font-medium">{bed.cervicalDilation}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">FHR:</span>
                  <span className="font-medium">{bed.fetalHeartRate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Contractions:</span>
                  <span className="font-medium">{bed.contractions}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Monitoring:</h4>
                <div className="flex flex-wrap gap-1">
                  {bed.monitoring.slice(0, 3).map((monitor, monitorIndex) => (
                    <span key={monitorIndex} className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">
                      {monitor}
                    </span>
                  ))}
                  {bed.monitoring.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{bed.monitoring.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Staff Assigned:</h4>
                <div className="flex flex-wrap gap-1">
                  {bed.staff.slice(0, 2).map((staffMember, staffIndex) => (
                    <span key={staffIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {staffMember}
                    </span>
                  ))}
                  {bed.staff.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{bed.staff.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Expected Delivery:</h4>
                <div className="text-sm text-gray-600">{bed.expectedDelivery}</div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Update Status
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
      {/* Equipment Categories */}
      {equipment.map((equipmentCategory, index) => (
        <Card key={index} className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
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
            <div className="text-center p-4 bg-pink-50 rounded-lg">
              <Monitor className="w-8 h-8 mx-auto mb-2 text-pink-600" />
              <div className="text-2xl font-bold text-gray-800">32</div>
              <div className="text-sm text-gray-600">Monitoring Devices</div>
            </div>
            <div className="text-center p-4 bg-rose-50 rounded-lg">
              <Wrench className="w-8 h-8 mx-auto mb-2 text-rose-600" />
              <div className="text-2xl font-bold text-gray-800">16</div>
              <div className="text-sm text-gray-600">Delivery Tools</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Shield className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-800">21</div>
              <div className="text-sm text-gray-600">Emergency Items</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Heart className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-800">23</div>
              <div className="text-sm text-gray-600">Comfort Equipment</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderStaff = () => (
    <div className="space-y-8">
      {/* Staff Categories */}
      {staff.map((staffCategory, index) => (
        <Card key={index} className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              {staffCategory.category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {staffCategory.members.map((member, memberIndex) => (
                <div key={memberIndex} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{member.name}</h4>
                    <div className={`w-3 h-3 rounded-full ${
                      member.onDuty ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Role:</span>
                      <span className="font-medium">{member.role}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-medium">{member.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className={`font-medium capitalize ${
                        member.onDuty ? 'On Duty' : member.onDuty === false ? 'Off Duty' : String(member.onDuty)
                      }`}>
                        {member.onDuty ? 'On Duty' : member.onDuty === false ? 'Off Duty' : String(member.onDuty)}
                      </span>
                    </div>
                    {'specialization' in member && member.specialization && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Specialization:</span>
                        <span className="font-medium">{member.specialization}</span>
                      </div>
                    )}
                    {'certification' in member && member.certification && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Certification:</span>
                        <span className="font-medium">{member.certification}</span>
                      </div>
                    )}
                    {'shift' in member && member.shift && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shift:</span>
                        <span className="font-medium">{member.shift}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderProcedures = () => (
    <div className="space-y-8">
      {/* Procedures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {procedures.map((procedure, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{procedure.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{procedure.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{procedure.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      <span>{procedure.successRate}% success</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Pain Management:</span>
                  <span className="font-medium">{procedure.painManagement}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Required Staff:</h4>
                <div className="flex flex-wrap gap-1">
                  {procedure.staff.map((staffMember, staffIndex) => (
                    <span key={staffIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {staffMember}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Equipment:</h4>
                <div className="flex flex-wrap gap-1">
                  {procedure.equipment.map((equipment, equipmentIndex) => (
                    <span key={equipmentIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {equipment}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  View Protocol
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Training
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Procedure Statistics */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Procedure Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <HeartPulse className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Procedure Types</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Target className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-800">95%</div>
              <div className="text-sm text-gray-600">Avg. Success Rate</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Clock className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-gray-800">4.5h</div>
              <div className="text-sm text-gray-600">Avg. Duration</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Users className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-gray-800">3-4</div>
              <div className="text-sm text-gray-600">Avg. Staff per Procedure</div>
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
        {['all', 'facility', 'equipment', 'staff'].map((category) => (
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
                  image.category === 'staff' ? 'bg-purple-100 text-purple-700' :
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
            <div className="text-3xl font-bold mb-2">4</div>
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
            <Users className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-sm opacity-90">Staff Images</div>
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
      case 'beds': return renderBeds()
      case 'equipment': return renderEquipment()
      case 'staff': return renderStaff()
      case 'procedures': return renderProcedures()
      case 'gallery': return renderGallery()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 via-rose-600/5 to-red-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <Baby className="w-16 h-16 text-pink-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Labour Room</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Modern labour and delivery facility with comprehensive obstetric care, advanced monitoring systems, and dedicated medical team for safe childbirth
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Safe Delivery
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Expert Care
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
                    ? 'border-pink-600 text-pink-600 bg-pink-50'
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
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Excellence in Maternal Care</h2>
          <p className="text-xl mb-8 opacity-90">State-of-the-art labour facility providing comprehensive obstetric care with the highest safety standards and compassionate support</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Emergency Contact
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Tour Facility
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
