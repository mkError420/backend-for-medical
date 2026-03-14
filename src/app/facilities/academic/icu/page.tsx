"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function ICUPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedBed, setSelectedBed] = useState<any>(null)
  const [activeSimulation, setActiveSimulation] = useState<any>(null)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-blue-500 to-blue-600' },
    { id: 'beds', label: 'ICU Beds', icon: '🛏️', color: 'from-red-500 to-red-600' },
    { id: 'simulations', label: 'Simulations', icon: '🎭', color: 'from-purple-500 to-purple-600' },
    { id: 'equipment', label: 'Equipment', icon: '🔧', color: 'from-green-500 to-green-600' },
    { id: 'schedule', label: 'Schedule', icon: '📅', color: 'from-orange-500 to-orange-600' }
  ]

  const icuBeds = [
    {
      id: 1,
      bedNumber: "ICU-001",
      type: "Medical ICU",
      status: "occupied",
      patientType: "Critical Care",
      monitoring: ["ECG", "Blood Pressure", "Oxygen Saturation", "Temperature", "Respiratory Rate"],
      ventilation: "Mechanical Ventilator",
      medications: ["Vasopressors", "Sedatives", "Antibiotics", "Analgesics"],
      staff: ["Dr. M. Ali", "Nurse Sarah", "Respiratory Therapist"],
      admissionTime: "2025-02-10 14:30",
      diagnosis: "Septic Shock",
      procedures: ["Central Line", "Arterial Line", "Foley Catheter", "NG Tube"],
      isolation: "Contact Precautions",
      familyVisiting: "Restricted",
      lastUpdate: "2025-02-14 08:00"
    },
    {
      id: 2,
      bedNumber: "ICU-002",
      type: "Surgical ICU",
      status: "occupied",
      patientType: "Post-Operative",
      monitoring: ["ECG", "Blood Pressure", "Oxygen Saturation", "Temperature", "CVP"],
      ventilation: "Spontaneous",
      medications: ["Antibiotics", "Analgesics", "Anticoagulants", "PPI"],
      staff: ["Dr. S. Karim", "Nurse Mike", "Surgical Resident"],
      admissionTime: "2025-02-12 09:15",
      diagnosis: "Post CABG",
      procedures: ["Chest Tubes", "Swan-Ganz Catheter", "PAC", "Dialysis Catheter"],
      isolation: "Standard Precautions",
      familyVisiting: "Limited",
      lastUpdate: "2025-02-14 07:30"
    },
    {
      id: 3,
      bedNumber: "ICU-003",
      type: "Neuro ICU",
      status: "occupied",
      patientType: "Neurological Critical",
      monitoring: ["ICP Monitor", "EEG", "ECG", "Blood Pressure", "Oxygen Saturation"],
      ventilation: "Mechanical Ventilator",
      medications: ["Mannitol", "Sedatives", "Antiepileptics", "Vasopressors"],
      staff: ["Dr. A. Rahman", "Nurse Emily", "Neuro Resident"],
      admissionTime: "2025-02-11 16:45",
      diagnosis: "Severe Head Injury",
      procedures: ["ICP Monitor", "Ventriculostomy", "ET Tube", "Foley Catheter"],
      isolation: "Standard Precautions",
      familyVisiting: "Restricted",
      lastUpdate: "2025-02-14 06:45"
    },
    {
      id: 4,
      bedNumber: "ICU-004",
      type: "Medical ICU",
      status: "available",
      patientType: "Ready for Admission",
      monitoring: ["ECG", "Blood Pressure", "Oxygen Saturation", "Temperature", "Respiratory Rate"],
      ventilation: "Ready",
      medications: ["Stock Available"],
      staff: ["On Call Staff Available"],
      admissionTime: "Available",
      diagnosis: "Available",
      procedures: ["Equipment Ready"],
      isolation: "Can be Isolated",
      familyVisiting: "Standard Policy",
      lastUpdate: "2025-02-14 08:15"
    },
    {
      id: 5,
      bedNumber: "ICU-005",
      type: "Cardiac ICU",
      status: "occupied",
      patientType: "Cardiac Critical",
      monitoring: ["ECG", "Blood Pressure", "Oxygen Saturation", "Temperature", "Cardiac Output"],
      ventilation: "Mechanical Ventilator",
      medications: ["Inotropes", "Antiarrhythmics", "Anticoagulants", "Diuretics"],
      staff: ["Dr. N. Ahmed", "Nurse John", "Cardiology Fellow"],
      admissionTime: "2025-02-13 11:20",
      diagnosis: "Acute MI with Cardiogenic Shock",
      procedures: ["IABP", "Swan-Ganz", "Temporary Pacer", "Central Line"],
      isolation: "Standard Precautions",
      familyVisiting: "Restricted",
      lastUpdate: "2025-02-14 07:00"
    },
    {
      id: 6,
      bedNumber: "ICU-006",
      type: "Pediatric ICU",
      status: "occupied",
      patientType: "Pediatric Critical",
      monitoring: ["ECG", "Blood Pressure", "Oxygen Saturation", "Temperature", "Capnography"],
      ventilation: "Mechanical Ventilator",
      medications: ["Pediatric Drips", "Sedatives", "Antibiotics", "Nutrition"],
      staff: ["Dr. K. Hossain", "Nurse Lisa", "Pediatric Resident"],
      admissionTime: "2025-02-12 20:30",
      diagnosis: "Respiratory Failure",
      procedures: ["ET Tube", "Umbilical Line", "CVP", "Temperature Probe"],
      isolation: "Contact Precautions",
      familyVisiting: "Parent Only",
      lastUpdate: "2025-02-14 06:30"
    }
  ]

  const simulations = [
    {
      id: 1,
      name: "Code Blue Simulation",
      category: "emergency",
      difficulty: "Advanced",
      duration: "45 minutes",
      maxParticipants: 8,
      scenario: "Cardiac Arrest",
      objectives: ["Rapid assessment", "Team leadership", "ACLS protocols", "Communication skills"],
      equipment: ["Manikin", "Defibrillator", "Crash cart", "Airway equipment"],
      assessment: ["Time to CPR", "Quality of compressions", "Team coordination", "Protocol adherence"],
      instructor: "Dr. M. Ali",
      successRate: 92,
      nextSession: "Today 14:00"
    },
    {
      id: 2,
      name: "Ventilator Management",
      category: "respiratory",
      difficulty: "Intermediate",
      duration: "60 minutes",
      maxParticipants: 4,
      scenario: "Respiratory Failure",
      objectives: ["Ventilator settings", "ABG interpretation", "Weaning protocols", "Troubleshooting"],
      equipment: ["Ventilator simulator", "ABG analyzer", "Monitoring systems", "Airway tools"],
      assessment: ["Settings accuracy", "ABG interpretation", "Clinical judgment", "Time management"],
      instructor: "Dr. S. Karim",
      successRate: 88,
      nextSession: "Tomorrow 10:00"
    },
    {
      id: 3,
      name: "Sepsis Management",
      category: "medical",
      difficulty: "Advanced",
      duration: "90 minutes",
      maxParticipants: 6,
      scenario: "Septic Shock",
      objectives: ["Early recognition", "Fluid resuscitation", "Vasopressor management", "Source control"],
      equipment: ["Monitoring systems", "Infusion pumps", "Lab simulator", "Medication cart"],
      assessment: ["Recognition time", "Protocol adherence", "Clinical decisions", "Documentation"],
      instructor: "Dr. A. Rahman",
      successRate: 85,
      nextSession: "Friday 09:00"
    },
    {
      id: 4,
      name: "Neurological Emergency",
      category: "neuro",
      difficulty: "Advanced",
      duration: "75 minutes",
      maxParticipants: 4,
      scenario: "Increased ICP",
      objectives: ["ICP monitoring", "Neuro assessment", "Emergency interventions", "Family communication"],
      equipment: ["ICP monitor", "Neuro assessment tools", "Emergency meds", "Communication devices"],
      assessment: ["Assessment accuracy", "Intervention timing", "Clinical judgment", "Communication"],
      instructor: "Dr. N. Ahmed",
      successRate: 90,
      nextSession: "Friday 14:00"
    },
    {
      id: 5,
      name: "Trauma Resuscitation",
      category: "trauma",
      difficulty: "Advanced",
      duration: "120 minutes",
      maxParticipants: 10,
      scenario: "Multiple Trauma",
      objectives: ["ATLS protocols", "Team coordination", "Prioritization", "Resource management"],
      equipment: ["Trauma manikin", "Imaging simulator", "Surgical tools", "Blood products"],
      assessment: ["Protocol adherence", "Team performance", "Decision making", "Time efficiency"],
      instructor: "Dr. R. Islam",
      successRate: 87,
      nextSession: "Saturday 10:00"
    },
    {
      id: 6,
      name: "Pediatric Critical Care",
      category: "pediatric",
      difficulty: "Intermediate",
      duration: "60 minutes",
      maxParticipants: 4,
      scenario: "Pediatric Respiratory Failure",
      objectives: ["Pediatric assessment", "Age-appropriate interventions", "Family communication", "Medication dosing"],
      equipment: ["Pediatric manikin", "Age-specific equipment", "Drug calculator", "Monitoring systems"],
      assessment: ["Assessment skills", "Intervention accuracy", "Communication", "Documentation"],
      instructor: "Dr. K. Hossain",
      successRate: 93,
      nextSession: "Monday 13:00"
    }
  ]

  const equipment = [
    {
      name: "Ventilators",
      count: 8,
      type: "Mechanical Ventilation",
      status: "Operational",
      models: ["Hamilton C6", "Dräger Evita", "Servo-i", "PB840"],
      features: ["Volume control", "Pressure support", "High-flow oxygen", "NIV modes"],
      maintenance: "Weekly checks",
      lastService: "2025-02-12",
      nextService: "2025-02-19"
    },
    {
      name: "Patient Monitors",
      count: 12,
      type: "Multi-Parameter",
      status: "Operational",
      models: ["Philips IntelliVue", "GE CARESCAPE", "Nihon Kohden", "Mindray"],
      features: ["ECG", "NIBP", "SpO2", "Temperature", "Respiration", "Invasive pressure"],
      maintenance: "Daily calibration",
      lastService: "2025-02-14",
      nextService: "2025-02-15"
    },
    {
      name: "Infusion Pumps",
      count: 24,
      type: "Medication Delivery",
      status: "Operational",
      models: ["Baxter Colleague", "Smiths Medical", "Fresenius", "Braun"],
      features: ["Programmable rates", "Dose calculations", "Library functions", "Wireless connectivity"],
      maintenance: "Monthly inspection",
      lastService: "2025-02-10",
      nextService: "2025-03-10"
    },
    {
      name: "Defibrillators",
      count: 6,
      type: "Emergency Response",
      status: "Operational",
      models: ["Philips HeartStart", "Zoll R Series", "Physio-Control", "Medtronic"],
      features: ["Biphasic energy", "CPR guidance", "AED mode", "Data recording"],
      maintenance: "Weekly checks",
      lastService: "2025-02-13",
      nextService: "2025-02-20"
    },
    {
      name: "Bedside Ultrasound",
      count: 4,
      type: "Diagnostic Imaging",
      status: "Operational",
      models: ["SonoSite", "GE Vscan", "Philips Lumify", "Mindray"],
      features: ["Cardiac imaging", "Vascular access", "FAST exam", "Procedural guidance"],
      maintenance: "Monthly service",
      lastService: "2025-02-08",
      nextService: "2025-03-08"
    },
    {
      name: "CRRT Machines",
      count: 3,
      type: "Renal Replacement",
      status: "Operational",
      models: ["Prismaflex", "CRRT MAX", "Aquarius", "NxStage"],
      features: ["Continuous dialysis", "Fluid removal", "Electrolyte management", "Anticoagulation"],
      maintenance: "After each use",
      lastService: "2025-02-14",
      nextService: "Next use"
    }
  ]

  const todaySchedule = [
    {
      time: "08:00-09:00",
      activity: "Morning Rounds",
      area: "All ICU Beds",
      staff: "ICU Team",
      type: "clinical",
      status: "in-progress"
    },
    {
      time: "09:00-10:00",
      activity: "Bedside Procedures",
      area: "ICU-001, ICU-003",
      staff: "Procedure Team",
      type: "procedure",
      status: "scheduled"
    },
    {
      time: "10:00-11:00",
      activity: "Family Meetings",
      area: "Conference Room",
      staff: "Attending Physicians",
      type: "communication",
      status: "scheduled"
    },
    {
      time: "11:00-12:00",
      activity: "Equipment Check",
      area: "All Areas",
      staff: "Biomedical Team",
      type: "maintenance",
      status: "scheduled"
    },
    {
      time: "14:00-14:45",
      activity: "Code Blue Simulation",
      area: "Simulation Lab",
      staff: "Dr. M. Ali + Team",
      type: "training",
      status: "scheduled"
    },
    {
      time: "15:00-16:00",
      activity: "Multidisciplinary Rounds",
      area: "All ICU Beds",
      staff: "Full ICU Team",
      type: "clinical",
      status: "scheduled"
    },
    {
      time: "16:00-17:00",
      activity: "Handover Meeting",
      area: "Conference Room",
      staff: "Shift Teams",
      type: "administrative",
      status: "scheduled"
    }
  ]

  const performanceMetrics = [
    {
      label: "Bed Occupancy",
      value: 83,
      unit: "%",
      trend: "up",
      icon: Bed,
      color: "text-red-600"
    },
    {
      label: "Patient Outcomes",
      value: 87,
      unit: "%",
      trend: "stable",
      icon: HeartPulse,
      color: "text-blue-600"
    },
    {
      label: "Staff Training",
      value: 92,
      unit: "%",
      trend: "up",
      icon: GraduationCap,
      color: "text-green-600"
    },
    {
      label: "Equipment Uptime",
      value: 98,
      unit: "%",
      trend: "stable",
      icon: Monitor,
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
            ICU Facility Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">ICU Beds</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">24</div>
              <div className="text-sm text-gray-600">Staff Members</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">57</div>
              <div className="text-sm text-gray-600">Equipment Units</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
          <CardContent className="p-6 text-center">
            <Bed className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">5/6</div>
            <div className="text-sm opacity-90">Beds Occupied</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <HeartPulse className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">87%</div>
            <div className="text-sm opacity-90">Patient Outcomes</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <GraduationCap className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">92%</div>
            <div className="text-sm opacity-90">Training Completion</div>
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
                    <div className="text-sm text-gray-600">{session.activity}</div>
                    <div className="text-xs text-gray-500">{session.area} • {session.staff}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{session.type}</div>
                  <div className="text-xs text-gray-600">{session.status}</div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {icuBeds.map((bed, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{bed.bedNumber}</h3>
                  <p className="text-sm text-gray-600">{bed.type}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  bed.status === 'occupied' ? 'bg-red-500' :
                  bed.status === 'available' ? 'bg-green-500' :
                  bed.status === 'maintenance' ? 'bg-yellow-500' :
                  'bg-gray-500'
                }`}></div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium">{bed.status}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Patient Type:</span>
                  <span className="font-medium">{bed.patientType}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ventilation:</span>
                  <span className="font-medium">{bed.ventilation}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Isolation:</span>
                  <span className="font-medium">{bed.isolation}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Monitoring:</h4>
                <div className="flex flex-wrap gap-1">
                  {bed.monitoring.slice(0, 3).map((monitor, monitorIndex) => (
                    <span key={monitorIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
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
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Procedures:</h4>
                <div className="flex flex-wrap gap-1">
                  {bed.procedures.slice(0, 3).map((procedure, procedureIndex) => (
                    <span key={procedureIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {procedure}
                    </span>
                  ))}
                  {bed.procedures.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{bed.procedures.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Staff Assigned:</h4>
                <div className="flex flex-wrap gap-1">
                  {bed.staff.map((staffMember, staffIndex) => (
                    <span key={staffIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {staffMember}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Current Status:</h4>
                <p className="text-sm text-gray-600">
                  {bed.diagnosis === "Available" ? "Ready for admission" : `Diagnosis: ${bed.diagnosis}`}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                {bed.status === 'available' && (
                  <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Assign Patient
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
        {['all', 'emergency', 'respiratory', 'medical', 'neuro', 'trauma', 'pediatric'].map((category) => (
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
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{simulation.name}</h3>
                  <p className="text-sm text-gray-600">{simulation.scenario}</p>
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
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Success Rate:</span>
                  <span className="font-medium">{simulation.successRate}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Next Session:</span>
                  <span className="font-medium">{simulation.nextSession}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Learning Objectives:</h4>
                <div className="space-y-1">
                  {simulation.objectives.slice(0, 3).map((objective, objectiveIndex) => (
                    <div key={objectiveIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {objective}
                    </div>
                  ))}
                  {simulation.objectives.length > 3 && (
                    <div className="text-xs text-gray-500">+{simulation.objectives.length - 3} more objectives</div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Equipment Required:</h4>
                <div className="flex flex-wrap gap-1">
                  {simulation.equipment.slice(0, 3).map((equipment, equipmentIndex) => (
                    <span key={equipmentIndex} className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
                      {equipment}
                    </span>
                  ))}
                  {simulation.equipment.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{simulation.equipment.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
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
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.type}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  item.status === 'Operational' ? 'bg-green-500' :
                  item.status === 'Maintenance' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}></div>
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
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Last Service:</span>
                  <span className="font-medium">{item.lastService}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Next Service:</span>
                  <span className="font-medium">{item.nextService}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Models:</h4>
                <div className="flex flex-wrap gap-1">
                  {item.models.map((model, modelIndex) => (
                    <span key={modelIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {model}
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
                    08:00-09:00
                  </div>
                  <div className="bg-red-100 text-red-700 text-xs p-1 rounded">
                    14:00-15:00
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
                    <div className="font-semibold text-gray-800">{session.activity}</div>
                    <div className="text-sm text-gray-600">
                      {session.time} • {session.area} • {session.staff}
                    </div>
                    <div className="text-xs text-gray-500">{session.type} • {session.status}</div>
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
      case 'beds': return renderBeds()
      case 'simulations': return renderSimulations()
      case 'equipment': return renderEquipment()
      case 'schedule': return renderSchedule()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-blue-600/5 to-green-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <HeartPulse className="w-16 h-16 text-red-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Intensive Care Unit</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Advanced critical care facility with comprehensive monitoring and life support systems
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Critical Care
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Life Support
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
      <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Excellence in Critical Care</h2>
          <p className="text-xl mb-8 opacity-90">State-of-the-art ICU facility for comprehensive critical care training and patient management</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Simulation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Training
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
