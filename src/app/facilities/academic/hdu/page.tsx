"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function HDUPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedBed, setSelectedBed] = useState<any>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-purple-500 to-purple-600' },
    { id: 'beds', label: 'Beds', icon: '🛏️', color: 'from-blue-500 to-blue-600' },
    { id: 'equipment', label: 'Equipment', icon: '⚕️', color: 'from-green-500 to-green-600' },
    { id: 'staff', label: 'Staff', icon: '👥', color: 'from-orange-500 to-orange-600' },
    { id: 'protocols', label: 'Protocols', icon: '📋', color: 'from-red-500 to-red-600' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️', color: 'from-indigo-500 to-indigo-600' }
  ]

  const hduBeds = [
    {
      id: 1,
      bedNumber: "HDU-001",
      type: "critical",
      status: "occupied",
      patientName: "Mr. Rahman Ali",
      age: "65 years",
      condition: "Post-operative cardiac surgery",
      diagnosis: "Coronary artery bypass graft",
      vitals: {
        bloodPressure: "120/80 mmHg",
        heartRate: "85 bpm",
        oxygenSaturation: "96%",
        temperature: "37.1°C",
        respiratoryRate: "18 breaths/min"
      },
      monitoring: ["ECG", "Arterial line", "Central venous pressure", "Pulse oximetry", "Urine output"],
      medications: ["Epinephrine", "Dopamine", "Furosemide", "Morphine"],
      ventilator: "Invasive ventilation",
      support: "Mechanical ventilation, Inotropic support",
      admissionTime: "2025-02-14 02:30",
      lastUpdate: "2025-02-14 14:45",
      attendingPhysician: "Dr. Sarah Johnson",
      nurseInCharge: "Nurse Emily Davis",
      familyContact: "017123456789",
      prognosis: "Stable, improving"
    },
    {
      id: 2,
      bedNumber: "HDU-002",
      type: "critical",
      status: "occupied",
      patientName: "Mrs. Fatima Begum",
      age: "58 years",
      condition: "Respiratory failure",
      diagnosis: "Acute respiratory distress syndrome",
      vitals: {
        bloodPressure: "95/60 mmHg",
        heartRate: "110 bpm",
        oxygenSaturation: "88%",
        temperature: "38.2°C",
        respiratoryRate: "28 breaths/min"
      },
      monitoring: ["Capnography", "Arterial line", "Central venous pressure", "Pulse oximetry", "Blood gases"],
      medications: ["Sedation", "Antibiotics", "Vasopressors", "Paralytics"],
      ventilator: "Mechanical ventilation",
      support: "Mechanical ventilation, Paralysis",
      admissionTime: "2025-02-14 05:15",
      lastUpdate: "2025-02-14 14:45",
      attendingPhysician: "Dr. Michael Chen",
      nurseInCharge: "Nurse Jessica Wilson",
      familyContact: "017123456789",
      prognosis: "Critical, stable"
    },
    {
      id: 3,
      bedNumber: "HDU-003",
      type: "step-down",
      status: "occupied",
      patientName: "Mr. Karim Islam",
      age: "42 years",
      condition: "Post-operative care",
      diagnosis: "Abdominal surgery recovery",
      vitals: {
        bloodPressure: "130/85 mmHg",
        heartRate: "78 bpm",
        oxygenSaturation: "98%",
        temperature: "36.8°C",
        respiratoryRate: "16 breaths/min"
      },
      monitoring: ["Standard monitoring", "Pain assessment", "Wound care", "Mobility"],
      medications: ["Analgesics", "Antibiotics", "Anticoagulants"],
      ventilator: "Self-breathing",
      support: "Oxygen therapy, Pain management",
      admissionTime: "2025-02-14 08:00",
      lastUpdate: "2025-02-14 14:45",
      attendingPhysician: "Dr. Lisa Anderson",
      nurseInCharge: "Nurse Amanda Brown",
      familyContact: "017123456789",
      prognosis: "Good, recovering"
    },
    {
      id: 4,
      bedNumber: "HDU-004",
      type: "intermediate",
      status: "occupied",
      patientName: "Mrs. Nusrat Islam",
      age: "35 years",
      condition: "Pre-eclampsia monitoring",
      diagnosis: "Gestational hypertension",
      vitals: {
        bloodPressure: "145/95 mmHg",
        heartRate: "92 bpm",
        oxygenSaturation: "99%",
        temperature: "36.5°C",
        respiratoryRate: "20 breaths/min"
      },
      monitoring: ["BP monitoring", "Fetal monitoring", "Proteinuria checks", "Daily labs"],
      medications: ["Labetalol", "Magnesium sulfate", "Aspirin"],
      ventilator: "Self-breathing",
      support: "Maternal monitoring, Antihypertensive therapy",
      admissionTime: "2025-02-14 10:30",
      lastUpdate: "2025-02-14 14:45",
      attendingPhysician: "Dr. David Thompson",
      nurseInCharge: "Nurse Rachel Green",
      familyContact: "017123456789",
      prognosis: "Stable, controlled"
    },
    {
      id: 5,
      bedNumber: "HDU-005",
      type: "observation",
      status: "available",
      patientName: "Available",
      age: "N/A",
      condition: "Ready for admission",
      diagnosis: "N/A",
      vitals: {
        bloodPressure: "N/A",
        heartRate: "N/A",
        oxygenSaturation: "N/A",
        temperature: "N/A",
        respiratoryRate: "N/A"
      },
      monitoring: ["All systems ready", "Emergency equipment ready", "Monitoring systems ready"],
      medications: "Available",
      ventilator: "Available",
      support: "Ready for immediate use",
      admissionTime: "Available",
      lastUpdate: "Available",
      attendingPhysician: "On-call team",
      nurseInCharge: "Available",
      familyContact: "N/A",
      prognosis: "N/A"
    },
    {
      id: 6,
      bedNumber: "HDU-006",
      type: "isolation",
      status: "occupied",
      patientName: "Mr. Sumaya Khan",
      age: "52 years",
      condition: "Sepsis",
      diagnosis: "Gram-negative bacteremia",
      vitals: {
        bloodPressure: "85/50 mmHg",
        heartRate: "125 bpm",
        oxygenSaturation: "92%",
        temperature: "39.5°C",
        respiratoryRate: "24 breaths/min"
      },
      monitoring: ["Hemodynamic monitoring", "Blood gases", "Lactate levels", "Inflammatory markers"],
      medications: ["Broad-spectrum antibiotics", "Vasopressors", "Steroids", "Fluid resuscitation"],
      ventilator: "Non-invasive ventilation",
      support: "Infection control, Hemodynamic support",
      admissionTime: "2025-02-14 12:00",
      lastUpdate: "2025-02-14 14:45",
      attendingPhysician: "Dr. Emily Taylor",
      nurseInCharge: "Nurse Olivia Martinez",
      familyContact: "017123456789",
      prognosis: "Critical, responding to treatment"
    }
  ]

  const equipment = [
    {
      category: "Monitoring Equipment",
      items: [
        { name: "Patient Monitors", count: 6, status: "operational", location: "Each bed" },
        { name: "Central Monitoring System", count: 1, status: "operational", location: "Nurse station" },
        { name: "Bedside Monitors", count: 6, status: "operational", location: "Each bed" },
        { name: "Transport Monitors", count: 3, status: "operational", location: "Mobile units" },
        { name: "Fetal Monitors", count: 2, status: "operational", location: "Obstetric beds" },
        { name: "Capnography Monitors", count: 6, status: "operational", location: "Critical beds" }
      ]
    },
    {
      category: "Ventilation Equipment",
      items: [
        { name: "Ventilators", count: 4, status: "operational", location: "Critical beds" },
        { name: "BiPAP Machines", count: 2, status: "operational", location: "Step-down beds" },
        { name: "High-Flow Nasal Cannula", count: 3, status: "operational", location: "All beds" },
        { name: "Oxygen Concentrators", count: 6, status: "operational", location: "All beds" },
        { name: "Suction Devices", count: 6, status: "operational", location: "Each bed" },
        { name: "Nebulizers", count: 6, status: "operational", location: "All beds" }
      ]
    },
    {
      category: "Emergency Equipment",
      items: [
        { name: "Defibrillators", count: 6, status: "operational", location: "Each bed" },
        { name: "Emergency Carts", count: 3, status: "operational", location: "Strategic points" },
        { name: "Crash Carts", count: 3, status: "operational", location: "Each zone" },
        { name: "Airway Carts", count: 6, status: "operational", location: "Each bed" },
        { name: "Portable Suction", count: 6, status: "operational", location: "Mobile units" },
        { name: "Emergency Medications", count: 6, status: "operational", location: "Each bed" }
      ]
    },
    {
      category: "Support Equipment",
      items: [
        { name: "Infusion Pumps", count: 12, status: "operational", location: "Each bed" },
        { name: "Syringe Pumps", count: 12, status: "operational", location: "Each bed" },
        { name: "Blood Warmer", count: 2, status: "operational", location: "Critical area" },
        { name: "Blanket Warmers", count: 6, status: "operational", location: "All beds" },
        { name: "Pressure Relieving Mattresses", count: 6, status: "operational", location: "All beds" },
        { name: "IV Poles", count: 6, status: "operational", location: "All beds" }
      ]
    }
  ]

  const staff = [
    {
      category: "Medical Staff",
      members: [
        { name: "Dr. Sarah Johnson", role: "Intensivist", experience: "12 years", onDuty: true, specialization: "Cardiac critical care" },
        { name: "Dr. Michael Chen", role: "Intensivist", experience: "10 years", onDuty: true, specialization: "Respiratory critical care" },
        { name: "Dr. Lisa Anderson", role: "Intensivist", experience: "8 years", onDuty: false, specialization: "Neurological critical care" },
        { name: "Dr. Robert Wilson", role: "Intensivist", experience: "15 years", onDuty: true, specialization: "Trauma critical care" }
      ]
    },
    {
      category: "Nursing Staff",
      members: [
        { name: "Emily Davis", role: "HDU Nurse", experience: "8 years", onDuty: true, certification: "CCRN" },
        { name: "Jessica Wilson", role: "HDU Nurse", experience: "6 years", onDuty: true, certification: "CCRN" },
        { name: "Amanda Brown", role: "HDU Nurse", experience: "4 years", onDuty: false, certification: "RN" },
        { name: "Rachel Green", role: "HDU Nurse", experience: "3 years", onDuty: true, certification: "RN" },
        { name: "Olivia Martinez", role: "HDU Nurse", experience: "5 years", onDuty: false, certification: "RN" }
      ]
    },
    {
      category: "Support Staff",
      members: [
        { name: "David Thompson", role: "Respiratory Therapist", experience: "10 years", onDuty: true, specialization: "Critical care respiratory" },
        { name: "Emily Taylor", role: "Clinical Pharmacist", experience: "7 years", onDuty: true, specialization: "Critical care pharmacy" },
        { name: "Rachel Green", role: "Lab Technician", experience: "4 years", onDuty: true, specialization: "Emergency labs" }
      ]
    }
  ]

  const protocols = [
    {
      name: "Sepsis Management Protocol",
      description: "Evidence-based management of septic shock",
      steps: [
        "Early recognition and source control",
        "Fluid resuscitation with crystalloids",
        "Vasopressor support if needed",
        "Broad-spectrum antibiotics within 1 hour",
        "Reassess patient frequently"
      ],
      medications: ["Norepinephrine", "Epinephrine", "Vasopressin", "Dobutamine"],
      monitoring: ["Hemodynamics", "Lactate", "Blood gases", "Urine output", "Organ function"],
      timeframe: "Immediate and ongoing"
    },
    {
      name: "Acute Respiratory Distress Syndrome",
      description: "Management of ARDS with lung-protective ventilation",
      steps: [
        "Intubation and mechanical ventilation",
        "Lung-protective ventilation strategy",
        "Prone positioning for 16 hours daily",
        "Sedation and analgesia management",
        "Weaning protocol when ready"
      ],
      medications: ["Sedatives", "Neuromuscular blockers", "Analgesics", "Antibiotics"],
      monitoring: ["Ventilator parameters", "Blood gases", "Compliance", "Sedation level"],
      timeframe: "Continuous"
    },
    {
      name: "Post-Cardiac Surgery Care",
      description: "Comprehensive care after cardiac surgery",
      steps: [
        "Hemodynamic monitoring",
        "Arrhythmia monitoring",
        "Chest tube management",
        "Pain management",
        "Early mobilization when stable",
        "Wound care and infection prevention"
      ],
      medications: ["Antiplatelets", "Anticoagulants", "Beta blockers", "Statins"],
      monitoring: ["ECG", "Cardiac enzymes", "Hemodynamics", "Chest X-ray"],
      timeframe: "24-48 hours"
    },
    {
      name: "Stroke Management",
      description: "Acute stroke assessment and treatment",
      steps: [
        "Rapid stroke recognition (FAST)",
        "CT brain within 25 minutes",
        "Thrombolysis if eligible",
        "Blood pressure management",
        "Neurological assessment every hour"
      ],
      medications: ["tPA", "Antiplatelets", "Statins", "Blood pressure control"],
      monitoring: ["Neurological exam", "Blood pressure", "Blood glucose", "NIHSS score"],
      timeframe: "Acute phase"
    },
    {
      name: "Trauma Management",
      description: "ATLS protocol for trauma patients",
      steps: [
        "Primary survey (ABCs)",
        "Secondary survey",
        "Hemorrhage control",
        "Disability assessment",
        "Definitive care and disposition"
      ],
      medications: ["Crystalloids", "Blood products", "Antibiotics", "Analgesics"],
      monitoring: ["Vital signs", "Hemodynamics", "Injury patterns", "Organ function"],
      timeframe: "Immediate and ongoing"
    },
    {
      name: "End-of-Life Care",
      description: "Compassionate care for terminal patients",
      steps: [
        "Goals of care discussion",
        "Symptom management",
        "Psychological support",
        "Family communication",
        "Comfort measures"
      ],
      medications: ["Analgesics", "Anxiolytics", "Sedatives", "Antiemetics"],
      monitoring: ["Comfort level", "Symptom control", "Family satisfaction", "Quality of life"],
      timeframe: "Ongoing"
    }
  ]

  const galleryImages = [
    {
      id: 1,
      title: "Main HDU Ward",
      category: "facility",
      description: "Modern high dependency unit with advanced monitoring systems",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Critical Care Bed",
      category: "equipment",
      description: "Fully equipped critical care bed with integrated monitoring",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Nursing Station",
      category: "facility",
      description: "Central nursing station with 24/7 monitoring",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Family Waiting Area",
      category: "facility",
      description: "Comfortable area for families with regular updates",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Medical Team",
      category: "staff",
      description: "Dedicated HDU medical team providing expert care",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Isolation Room",
      category: "facility",
      description: "Specialized isolation room for infectious cases",
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
      color: "text-purple-600"
    },
    {
      label: "Critical Cases",
      value: 4,
      unit: "patients",
      trend: "up",
      icon: AlertTriangle,
      color: "text-red-600"
    },
    {
      label: "Staff Available",
      value: 12,
      unit: "members",
      trend: "stable",
      icon: Users,
      color: "text-blue-600"
    },
    {
      label: "Success Rate",
      value: 94,
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
                <metric.icon className="w-8 h-8 text-purple-600" />
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
            HDU Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">HDU Beds</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">4</div>
              <div className="text-sm text-gray-600">Critical Cases</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">12</div>
              <div className="text-sm text-gray-600">Staff Members</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">94%</div>
            <div className="text-sm opacity-90">Success Rate</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <Activity className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-90">Critical Care</div>
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
            Current Patient Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {hduBeds.slice(0, 3).map((bed, index) => (
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
                    <div className="text-xs text-gray-500">{bed.condition} • {bed.diagnosis}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{bed.vitals.heartRate} bpm</div>
                  <div className="text-xs text-gray-600">Heart Rate</div>
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
        {['all', 'critical', 'step-down', 'intermediate', 'observation', 'isolation', 'available'].map((type) => (
          <button
            key={type}
            onClick={() => setActiveCategory(type)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeCategory === type
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Beds Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hduBeds
          .filter(bed => activeCategory === 'all' || bed.type === activeCategory)
          .map((bed: any, index: number) => (
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
                  <span className="text-gray-600">Age:</span>
                  <span className="font-medium">{bed.age}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Condition:</span>
                  <span className="font-medium">{bed.condition}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Diagnosis:</span>
                  <span className="font-medium">{bed.diagnosis}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Vital Signs:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">BP:</span>
                    <span className="font-medium">{bed.vitals.bloodPressure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">HR:</span>
                    <span className="font-medium">{bed.vitals.heartRate} bpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">SpO2:</span>
                    <span className="font-medium">{bed.vitals.oxygenSaturation}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temp:</span>
                    <span className="font-medium">{bed.vitals.temperature}°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">RR:</span>
                    <span className="font-medium">{bed.vitals.respiratoryRate} breaths/min</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Monitoring:</h4>
                <div className="flex flex-wrap gap-1">
                  {Array.isArray(bed.monitoring) && bed.monitoring.slice(0, 3).map((monitor: string, monitorIndex: number) => (
                    <span key={monitorIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {monitor}
                    </span>
                  ))}
                  {Array.isArray(bed.monitoring) && bed.monitoring.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{bed.monitoring.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Medications:</h4>
                <div className="flex flex-wrap gap-1">
                  {Array.isArray(bed.medications) && bed.medications.slice(0, 3).map((med: string, medIndex: number) => (
                    <span key={medIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {med}
                    </span>
                  ))}
                  {Array.isArray(bed.medications) && bed.medications.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{bed.medications.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Support:</h4>
                <div className="text-sm text-gray-600">{bed.support}</div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Ventilation:</h4>
                <div className="text-sm text-gray-600">{bed.ventilator}</div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Staff:</h4>
                <div className="flex flex-wrap gap-1">
                  {Array.isArray(bed.staff) && bed.staff.slice(0, 3).map((staffMember: string, staffIndex: number) => (
                    <span key={staffIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {staffMember}
                    </span>
                  ))}
                  {Array.isArray(bed.staff) && bed.staff.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{bed.staff.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Timeline:</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Admission:</span>
                    <span>{bed.admissionTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Update:</span>
                    <span>{bed.lastUpdate}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Medical Team:</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Attending Physician:</span>
                    <span>{bed.attendingPhysician}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nurse in Charge:</span>
                    <span>{bed.nurseInCharge}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Prognosis:</h4>
                <div className="text-sm text-gray-600">{bed.prognosis}</div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Family Contact:</h4>
                <div className="text-sm text-gray-600">{bed.familyContact}</div>
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
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Settings className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-gray-800">29</div>
              <div className="text-sm text-gray-600">Monitoring Devices</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Activity className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-800">21</div>
              <div className="text-sm text-gray-600">Ventilation Devices</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Shield className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-800">27</div>
              <div className="text-sm text-gray-600">Emergency Items</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <HeartHandshake className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-gray-800">36</div>
              <div className="text-sm text-gray-600">Support Equipment</div>
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
                        member.onDuty ? 'text-green-600' : 'text-gray-600'
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
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderProtocols = () => (
    <div className="space-y-8">
      {/* Protocols List */}
      <div className="space-y-6">
        {protocols.map((protocol, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-cyan-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{protocol.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{protocol.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{protocol.timeframe}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Steps:</h4>
                <ol className="space-y-1">
                  {protocol.steps.slice(0, 3).map((step, stepIndex) => (
                    <li key={stepIndex} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="font-medium text-red-600">{stepIndex + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                  {protocol.steps.length > 3 && (
                    <li className="text-sm text-gray-500 italic">
                      +{protocol.steps.length - 3} more steps
                    </li>
                  )}
                </ol>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Medications:</h4>
                <div className="flex flex-wrap gap-1">
                  {protocol.medications.map((med, medIndex) => (
                    <span key={medIndex} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                      {med}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Monitoring:</h4>
                <div className="flex flex-wrap gap-1">
                  {protocol.monitoring.slice(0, 3).map((monitor, monitorIndex) => (
                    <span key={monitorIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {monitor}
                    </span>
                  ))}
                  {protocol.monitoring.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{protocol.monitoring.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  View Full Protocol
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Print Protocol
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Protocol Statistics */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Protocol Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <FileText className="w-8 h-8 mx-auto mb-2 text-red-600" />
              <div className="text-2xl font-bold text-gray-800">{protocols.length}</div>
              <div className="text-sm text-gray-600">Total Protocols</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Target className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Critical Protocols</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Shield className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-800">96%</div>
              <div className="text-sm text-gray-600">Protocol Adherence</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Clock className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-gray-800">24/7</div>
              <div className="text-sm text-gray-600">Protocol Availability</div>
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
            <div className="text-3xl font-bold mb-2">2</div>
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
            <div className="text-3xl font-bold mb-2">2</div>
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
      case 'protocols': return renderProtocols()
      case 'gallery': return renderGallery()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-indigo-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <AlertTriangle className="w-16 h-16 text-purple-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">High Dependency Unit (HDU)</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                State-of-the-art critical care facility with advanced monitoring systems, expert medical team, and comprehensive life support services for critically ill patients
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Critical Care
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
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Excellence in Critical Care</h2>
          <p className="text-xl mb-8 opacity-90">State-of-the-art HDU providing comprehensive critical care with advanced monitoring, expert medical team, and 24/7 emergency services</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Emergency Contact
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Protocols
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
