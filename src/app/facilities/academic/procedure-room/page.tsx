"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function ProcedureRoomPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedRoom, setSelectedRoom] = useState<any>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-teal-500 to-teal-600' },
    { id: 'rooms', label: 'Rooms', icon: '🏥️', color: 'from-blue-500 to-blue-600' },
    { id: 'equipment', label: 'Equipment', icon: '⚕️', color: 'from-purple-500 to-purple-600' },
    { id: 'procedures', label: 'Procedures', icon: '🔧', color: 'from-green-500 to-green-600' },
    { id: 'schedule', label: 'Schedule', icon: '📅', color: 'from-orange-500 to-orange-600' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️', color: 'from-indigo-500 to-indigo-600' }
  ]

  const procedureRooms = [
    {
      id: 1,
      roomNumber: "PR-001",
      type: "surgery",
      status: "occupied",
      currentProcedure: "Laparoscopic Cholecystectomy",
      surgeon: "Dr. Sarah Johnson",
      anesthesiologist: "Dr. Michael Chen",
      assistants: ["Nurse Emily Davis", "Scrub Tech Jessica Wilson", "Circulator Nurse"],
      duration: "2 hours",
      startTime: "09:00",
      estimatedEndTime: "11:00",
      patientName: "Mr. Rahman Ali",
      age: "45 years",
      procedureType: "elective",
      complexity: "moderate",
      equipment: ["Laparoscope", "CO2 insufflator", "Video system", "Energy platform"],
      complications: "None",
      notes: "Patient stable, vitals normal"
    },
    {
      id: 2,
      roomNumber: "PR-002",
      type: "surgery",
      status: "occupied",
      currentProcedure: "Open Heart Surgery",
      surgeon: "Dr. Lisa Anderson",
      anesthesiologist: "Dr. Robert Wilson",
      assistants: ["Nurse Amanda Brown", "Perfusionist Rachel Green", "Scrub Tech Olivia Martinez", "Cardiac Tech"],
      duration: "4 hours",
      startTime: "10:30",
      estimatedEndTime: "14:30",
      patientName: "Mrs. Fatima Begum",
      age: "52 years",
      procedureType: "emergency",
      complexity: "high",
      equipment: ["Heart-lung machine", "TEE probe", "Defibrillator", "Cell saver"],
      complications: "Unstable vitals initially",
      notes: "Patient stabilized after initial intervention"
    },
    {
      id: 3,
      roomNumber: "PR-003",
      type: "endoscopy",
      status: "occupied",
      currentProcedure: "Colonoscopy",
      surgeon: "Dr. David Thompson",
      anesthesiologist: "Dr. Emily Taylor",
      assistants: ["Nurse Rachel Green", "Endoscopy Tech Lisa Chen", "GI Fellow"],
      duration: "45 minutes",
      startTime: "11:00",
      estimatedEndTime: "11:45",
      patientName: "Mr. Karim Islam",
      age: "38 years",
      procedureType: "diagnostic",
      complexity: "low",
      equipment: ["Colonoscope", "Video processor", "Biopsy forceps", "Snare"],
      complications: "None",
      notes: "Patient prepped and ready"
    },
    {
      id: 4,
      roomNumber: "PR-004",
      type: "surgery",
      status: "available",
      currentProcedure: "Available",
      surgeon: "Available",
      anesthesiologist: "Available",
      assistants: ["Available"],
      duration: "Variable",
      startTime: "Available",
      estimatedEndTime: "Available",
      patientName: "Available",
      age: "N/A",
      procedureType: "scheduled",
      complexity: "variable",
      equipment: ["Standard surgical set"],
      complications: "None",
      notes: "Room prepared and sterilized"
    },
    {
      id: 5,
      roomNumber: "PR-005",
      type: "minor_surgery",
      status: "occupied",
      currentProcedure: "Dental Extraction",
      surgeon: "Dr. Olivia Martinez",
      anesthesiologist: "Local anesthesia",
      assistants: ["Dental Assistant", "Receptionist"],
      duration: "30 minutes",
      startTime: "13:30",
      estimatedEndTime: "14:00",
      patientName: "Mrs. Sumaya Khan",
      age: "28 years",
      procedureType: "elective",
      complexity: "low",
      equipment: ["Dental chair", "Extraction tools", "X-ray unit"],
      complications: "None",
      notes: "Local anesthesia administered"
    },
    {
      id: 6,
      roomNumber: "PR-006",
      type: "specialized",
      status: "occupied",
      currentProcedure: "Neurosurgery",
      surgeon: "Dr. James Wilson",
      anesthesiologist: "Dr. Jennifer White",
      assistants: ["Neurosurgeon", "Scrub Tech", "Perfusionist", "Neuro nurse"],
      duration: "6 hours",
      startTime: "14:00",
      estimatedEndTime: "20:00",
      patientName: "Mr. Nusrat Islam",
      age: "35 years",
      procedureType: "emergency",
      complexity: "high",
      equipment: ["Microscope", "Microsurgical instruments", "Neuromonitoring", "Navigation system"],
      complications: "Critical condition",
      notes: "Emergency craniotomy for intracerebral hemorrhage"
    }
  ]

  const equipment = [
    {
      category: "Surgical Equipment",
      items: [
        { name: "Laparoscopes", count: 8, status: "operational", location: "Surgery rooms 1,2,3" },
        { name: "Arthroscopes", count: 4, status: "operational", location: "Surgery room 4" },
        { name: "Endoscopes", count: 6, status: "operational", location: "Endoscopy room" },
        { name: "Microscopes", count: 4, status: "operational", location: "Neurosurgery room" },
        { name: "Surgical Tables", count: 6, status: "operational", location: "All rooms" },
        { name: "Operating Lights", count: 6, status: "operational", location: "All rooms" }
      ]
    },
    {
      category: "Monitoring Equipment",
      items: [
        { name: "Patient Monitors", count: 12, status: "operational", location: "All rooms" },
        { name: "Anesthesia Machines", count: 6, status: "operational", location: "All rooms" },
        { name: "Vital Signs Monitors", count: 6, status: "operational", location: "All rooms" },
        { name: "TEE Probes", count: 3, status: "operational", location: "Cardiac OR" },
        { name: "Defibrillators", count: 6, status: "operational", location: "Strategic points" },
        { name: "Infusion Pumps", count: 12, status: "operational", location: "All rooms" }
      ]
    },
    {
      category: "Sterilization Equipment",
      items: [
        { name: "Autoclaves", count: 3, status: "operational", location: "Sterile processing" },
        { name: "Sterilizers", count: 6, status: "operational", location: "All rooms" },
        { name: "Ultrasonic Cleaners", count: 4, status: "operational", location: "All rooms" },
        { name: "Gas Sterilizers", count: 2, status: "operational", location: "Sterile processing" }
      ]
    },
    {
      category: "Emergency Equipment",
      items: [
        { name: "Emergency Carts", count: 3, status: "operational", location: "Each room" },
        { name: "Crash Carts", count: 3, status: "operational", location: "Strategic points" },
        { name: "Suction Machines", count: 12, status: "operational", location: "All rooms" },
        { name: "Oxygen Cylinders", count: 12, status: "operational", location: "All rooms" },
        { name: "Airway Carts", count: 6, status: "operational", location: "All rooms" }
      ]
    }
  ]

  const procedures = [
    {
      name: "Laparoscopic Cholecystectomy",
      description: "Minimally invasive gallbladder removal surgery",
      duration: "1.5-2.5 hours",
      complexity: "moderate",
      successRate: 98,
      staff: ["Surgeon", "Anesthesiologist", "Scrub Nurse", "Circulator Nurse"],
      equipment: ["Laparoscope", "CO2 insufflator", "Video system", "Energy platform"],
      indications: ["Symptomatic gallstones", "Acute cholecystitis", "Biliary colic"],
      preparation: "NPO after midnight, bowel prep",
      recovery: "1-2 days",
      complications: ["Bile leak", "Bleeding", "Infection"]
    },
    {
      name: "Open Heart Surgery",
      description: "Surgical repair of heart conditions",
      duration: "3-6 hours",
      complexity: "high",
      successRate: 95,
      staff: ["Cardiac Surgeon", "Cardiac Anesthesiologist", "Perfusionist", "Cardiac Nurse"],
      equipment: ["Heart-lung machine", "TEE probe", "Defibrillator", "Cell saver"],
      indications: ["Coronary artery disease", "Valve disease", "Congenital heart disease"],
      preparation: "Cardiac evaluation, consent",
      recovery: "2-3 days"
    },
    {
      name: "Colonoscopy",
      description: "Examination of the large intestine and rectum",
      duration: "30-45 minutes",
      complexity: "low",
      successRate: 99,
      staff: ["Gastroenterologist", "Anesthesiologist", "Endoscopy Tech", "GI Fellow"],
      equipment: ["Colonoscope", "Video processor", "Biopsy forceps", "Snare"],
      indications: ["Screening", "GI bleeding", "Inflammatory bowel disease"],
      preparation: "Bowel prep, NPO, clear liquids",
      recovery: "Immediate",
      complications: ["Perforation", "Bleeding", "Infection"]
    },
    {
      name: "Arthroscopy",
      description: "Minimally invasive joint surgery",
      duration: "1-3 hours",
      complexity: "low",
      successRate: 97,
      staff: ["Orthopedic Surgeon", "Anesthesiologist", "Scrub Tech", "Circulator Nurse"],
      equipment: ["Arthroscope", "Video system", "Shaver", "Power tools"],
      indications: ["Joint pain", "Sports injuries", "Degenerative joint disease"],
      preparation: "Regional anesthesia, Tourniquette",
      recovery: "Same day or overnight",
      complications: ["Nerve injury", "Infection", "Stiffness"]
    },
    {
      name: "Neurosurgery",
      description: "Surgical treatment of nervous system disorders",
      duration: "4-8 hours",
      complexity: "high",
      successRate: 85,
      staff: ["Neurosurgeon", "Anesthesiologist", "Neurosurgeon", "Perfusionist", "Neuro Nurse"],
      equipment: ["Microscope", "Microsurgical instruments", "Neuromonitoring", "Navigation system"],
      indications: ["Brain tumor", "Spinal surgery", "Head trauma", "Vascular malformations"],
      preparation: "Neurological assessment, Consent, Hair wash",
      recovery: "2-7 days",
      complications: ["Brain swelling", "Infection", "Neurological deficit"]
    },
    {
      name: "Dental Extraction",
      description: "Removal of problematic teeth",
      duration: "15-45 minutes",
      complexity: "low",
      successRate: 99,
      staff: ["Dentist", "Dental Assistant", "Receptionist"],
      equipment: ["Dental chair", "Extraction tools", "X-ray unit"],
      indications: ["Caries", "Impacted teeth", "Orthodontic treatment"],
      preparation: "Local anesthesia, Oral hygiene",
      recovery: "Immediate",
      complications: ["Dry socket", "Infection", "Nerve damage"]
    },
    {
      name: "Minor Surgery",
      description: "Small surgical procedures",
      duration: "15-30 minutes",
      complexity: "low",
      successRate: 99,
      staff: ["General Surgeon", "Anesthesiologist", "Scrub Tech", "Nurse"],
      equipment: ["Basic surgical set", "Local anesthesia", "Minor instruments"],
      indications: ["Skin lesions", "Minor lacerations", "Cyst removal"],
      preparation: "Local anesthesia, Site preparation",
      recovery: "Same day",
      complications: ["Bleeding", "Infection", "Scarring"]
    }
  ]

  const scheduleData = [
    {
      time: "08:00-10:00",
      day: "Monday",
      procedure: "Laparoscopic Cholecystectomy",
      surgeon: "Dr. Sarah Johnson",
      room: "PR-001",
      patient: "Mr. Ali",
      type: "elective",
      status: "scheduled"
    },
    {
      time: "10:30-14:30",
      day: "Monday",
      procedure: "Open Heart Surgery",
      surgeon: "Dr. Lisa Anderson",
      room: "PR-002",
      patient: "Mrs. Begum",
      type: "emergency",
      status: "scheduled"
    },
    {
      time: "11:00-11:45",
      day: "Monday",
      procedure: "Colonoscopy",
      surgeon: "Dr. David Thompson",
      room: "PR-003",
      patient: "Mr. Islam",
      type: "diagnostic",
      status: "scheduled"
    },
    {
      time: "13:30-14:00",
      day: "medical-college\src\app\facilities\academic\procedure-room\page.tsx", line: 1, column: 1, character: 1
    },
    {
      time: "14:00-20:00",
      day: "Monday",
      procedure: "Neurosurgery",
      surgeon: "Dr. James Wilson",
      room: "PR-6",
      patient: "Mr. Islam",
      type: "emergency",
      status: "scheduled"
    },
    {
      time: "15:00-15:30",
      day: "Monday",
      procedure: "Dental Extraction",
      surgeon: "Dr. Olivia Martinez",
      room: "PR-5",
      patient: "Mrs. Khan",
      type: "elective",
      status: "scheduled"
    }
  ]

  const galleryImages = [
    {
      id: 1,
      title: "Main Procedure Room",
      category: "facility",
      description: "Modern surgical suite with advanced equipment",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Operating Theater",
      category: "facility",
      description: "State-of-the-art operating theater with advanced lighting and imaging",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Surgical Equipment",
      category: "equipment",
      description: "Advanced surgical instruments and devices",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Recovery Area",
      category: "facility",
      description: "Comfortable post-procedure recovery area",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Medical Team",
      category: "staff",
      description: "Dedicated surgical team providing expert care",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Family Waiting Area",
      category: "facility",
      description: "Comfortable waiting area for families",
      image: "/api/placeholder/400/300"
    }
  ]

  const performanceMetrics = [
    {
      label: "Total Rooms",
      value: 6,
      unit: "rooms",
      trend: "stable",
      icon: Building,
      color: "text-teal-600"
    },
    {
      label: "Daily Procedures",
      value: 12,
      unit: "procedures",
      trend: "up",
      icon: Activity,
      color: "text-blue-600"
    },
    {
      label: "Staff Available",
      value: 18,
      unit: "members",
      trend: "stable",
      icon: Users,
      color: "text-green-600"
    },
    {
      label: "Success Rate",
      value: 96,
      unit: "%",
      trend: "stable",
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
            Procedure Room Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Procedure Rooms</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">12</div>
              <div className="text-sm text-gray-600">Daily Procedures</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">18</div>
              <div className="text-sm text-gray-600">Staff Members</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white">
          <CardContent className="p-6 text-center">
            <Wrench className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">96%</div>
            <div className="text-sm opacity-90">Success Rate</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <Activity className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-90">Service Available</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
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
            Current Procedure Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {procedureRooms.slice(0, 3).map((room, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${
                    room.status === 'occupied' ? 'bg-red-500' :
                    room.status === 'available' ? 'bg-green-500' :
                    'bg-yellow-500'
                  }`}></div>
                  <div>
                    <div className="font-semibold text-gray-800">{room.roomNumber}</div>
                    <div className="text-sm text-gray-600">{room.currentProcedure}</div>
                    <div className="text-xs text-gray-500">{room.surgeon} • {room.duration}</div>
                    <div className="text-xs text-gray-500">{room.patientName}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{room.procedureType}</div>
                  <div className="text-xs text-gray-600">{room.status}</div>
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
      {/* Room Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'surgery', 'endoscopy', 'minor_surgery', 'specialized', 'available'].map((type) => (
          <button
            key={type}
            onClick={() => setActiveCategory(type)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeCategory === type
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {procedureRooms
          .filter(room => activeCategory === 'all' || room.type === activeCategory)
          .map((room, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{room.roomNumber}</h3>
                  <p className="text-sm text-gray-600 capitalize">{room.type} room</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  room.status === 'occupied' ? 'bg-red-500' :
                  room.status === 'available' ? 'bg-green-500' :
                  'bg-yellow-500'
                }`}></div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Procedure:</span>
                  <span className="font-medium">{room.currentProcedure}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Surgeon:</span>
                  <span className="font-medium">{room.surgeon}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{room.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Patient:</span>
                  <span className="font-medium">{room.patientName}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Age:</span>
                  <span className="font-medium">{room.age}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Staff Team:</h4>
                <div className="flex flex-wrap gap-1">
                  {room.assistants.slice(0, 3).map((assistant, assistantIndex) => (
                    <span key={assistantIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {assistant}
                    </span>
                  ))}
                  {room.assistants.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{room.assistants.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Equipment:</h4>
                <div className="flex flex-wrap gap-1">
                  {room.equipment.slice(0, 3).map((equipment, equipmentIndex) => (
                    <span key={equipmentIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
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
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Time Schedule:</h4>
                <div className="text-sm text-gray-600">
                  {room.startTime} - {room.estimatedEndTime}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Notes:</h4>
                <div className="text-sm text-gray-600">{room.notes}</div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
            <div className="text-center p-4 bg-teal-50 rounded-lg">
              <Settings className="w-8 h-8 mx-auto mb-2 text-teal-600" />
              <div className="text-2xl font-bold text-gray-800">29</div>
              <div className="text-sm text-gray-600">Surgical Devices</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Monitor className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-800">36</div>
              <div className="text-sm text-gray-600">Monitoring Devices</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Activity className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-gray-800">24</div>
              <div className="text-sm text-gray-600">Emergency Items</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Shield className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-800">15</div>
              <div className="text-sm text-gray-600">Safety Equipment</div>
            </div>
          </div>
        </CardContent>
      </Card>
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
                  <Wrench className="w-6 h-6" />
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
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{procedure.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Complexity:</span>
                  <span className={`font-medium capitalize ${
                    procedure.complexity === 'low' ? 'bg-green-100 text-green-700' :
                    procedure.complexity === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {procedure.complexity}
                  </span>
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

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Indications:</h4>
                <div className="flex flex-wrap gap-1">
                  {procedure.indications.map((indication, indicationIndex) => (
                    <span key={indicationIndex} className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">
                      {indication}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Preparation:</h4>
                <div className="text-sm text-gray-600">{procedure.preparation}</div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Recovery:</h4>
                <div className="text-sm text-gray-600">{procedure.recovery}</div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Complications:</h4>
                <div className="flex flex-wrap gap-1">
                  {procedure.complications && procedure.complications.map((complication: string, complicationIndex: number) => (
                    <span key={complicationIndex} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                      {complication}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  View Full Protocol
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
              <Wrench className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Procedure Types</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Target className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-800">96%</div>
              <div className="text-sm text-gray-600">Avg. Success Rate</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Clock className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-gray-800">2.5h</div>
              <div className="text-sm text-gray-600">Avg. Duration</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Users className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-gray-800">3-4</div>
              <div className="text-sm text-gray-600">Avg. Staff per Procedure</div>
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
                  <div className="bg-teal-100 text-teal-700 text-xs p-1 rounded">
                    08:00-10:00
                  </div>
                  <div className="bg-blue-100 text-blue-700 text-xs p-1 rounded">
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
          <CardTitle>Complete Procedure Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduleData.map((session, index) => (
              <div key={index} className="border-l-4 border-teal-600 pl-4 py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">{session.procedure}</div>
                    <div className="text-sm text-gray-600">
                      {session.day} • {session.time} • {session.room}
                    </div>
                    <div className="text-xs text-gray-500">{session.patient} • {session.type} • {session.status}</div>
                  </div>
                  <div className="text-right">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      session.status === 'completed' ? 'bg-green-100 text-green-700' :
                      session.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {session.status}
                    </div>
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
            <Settings className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">2</div>
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
      case 'rooms': return renderRooms()
      case 'equipment': return renderEquipment()
      case 'procedures': return renderProcedures()
      case 'schedule': return renderSchedule()
      case 'gallery': return renderGallery()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 via-blue-600/5 to-green-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <Wrench className="w-16 h-16 text-teal-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Procedure Room</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                State-of-the-art-art surgical facility with advanced equipment and expert surgical team for comprehensive procedural services
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Surgical Excellence
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Expert Team
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
      <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Excellence in Surgical Care</h2>
          <p className="text-xl mb-8 opacity-90">State-of-the-art surgical facility providing comprehensive procedural services with expert surgical team and advanced equipment</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Procedure
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
