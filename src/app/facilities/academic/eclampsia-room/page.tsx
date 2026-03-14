"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function EclampsiaRoomPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedBed, setSelectedBed] = useState<any>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-red-500 to-red-600' },
    { id: 'beds', label: 'Beds', icon: '🛏️', color: 'from-orange-500 to-orange-600' },
    { id: 'equipment', label: 'Equipment', icon: '⚕️', color: 'from-purple-500 to-purple-600' },
    { id: 'protocols', label: 'Protocols', icon: '📋', color: 'from-blue-500 to-blue-600' },
    { id: 'staff', label: 'Staff', icon: '👥', color: 'from-green-500 to-green-600' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️', color: 'from-indigo-500 to-indigo-600' }
  ]

  const eclampsiaBeds = [
    {
      id: 1,
      bedNumber: "ER-001",
      type: "critical",
      status: "occupied",
      patientName: "Mrs. Ayesha Rahman",
      gestationalAge: "32 weeks",
      condition: "Severe pre-eclampsia",
      bloodPressure: "180/120 mmHg",
      proteinuria: "3+",
      seizures: "1 episode",
      medications: ["Magnesium sulfate", "Labetalol", "Hydralazine"],
      monitoring: ["Continuous BP", "Fetal monitoring", "Urine output", "Neurological checks"],
      staff: ["Dr. Sarah Johnson", "Nurse Emily Davis", "Dr. Michael Chen"],
      admissionTime: "2025-02-14 03:45",
      lastSeizure: "2025-02-14 04:30",
      magnesiumLoading: "Complete",
      magnesiumMaintenance: "2g/hour",
      fetalStatus: "Stable",
      complications: "HELLP syndrome suspected"
    },
    {
      id: 2,
      bedNumber: "ER-002",
      type: "high-risk",
      status: "occupied",
      patientName: "Mrs. Fatima Ali",
      gestationalAge: "28 weeks",
      condition: "Moderate pre-eclampsia",
      bloodPressure: "160/100 mmHg",
      proteinuria: "2+",
      seizures: "None",
      medications: ["Labetalol", "Aspirin", "Calcium"],
      monitoring: ["Hourly BP", "Fetal monitoring", "Daily labs", "Weight monitoring"],
      staff: ["Dr. Lisa Anderson", "Nurse Jessica Wilson", "Dr. Robert Wilson"],
      admissionTime: "2025-02-14 08:15",
      lastSeizure: "None",
      magnesiumLoading: "Not required",
      magnesiumMaintenance: "Not required",
      fetalStatus: "Stable",
      complications: "IUGR suspected"
    },
    {
      id: 3,
      bedNumber: "ER-003",
      type: "recovery",
      status: "occupied",
      patientName: "Mrs. Nusrat Islam",
      gestationalAge: "Delivered",
      condition: "Postpartum pre-eclampsia",
      bloodPressure: "145/95 mmHg",
      proteinuria: "1+",
      seizures: "None",
      medications: ["Nifedipine", "Labetalol", "Magnesium sulfate"],
      monitoring: ["BP monitoring", "Postpartum bleeding", "Fluid balance", "Neurological"],
      staff: ["Dr. David Thompson", "Nurse Amanda Brown", "Midwife Maria Garcia"],
      admissionTime: "2025-02-13 20:30",
      lastSeizure: "None",
      magnesiumLoading: "Complete",
      magnesiumMaintenance: "1g/hour",
      fetalStatus: "Delivered healthy infant",
      complications: "None"
    },
    {
      id: 4,
      bedNumber: "ER-004",
      type: "critical",
      status: "available",
      patientName: "Available",
      gestationalAge: "N/A",
      condition: "Ready for admission",
      bloodPressure: "N/A",
      proteinuria: "N/A",
      seizures: "N/A",
      medications: "Available",
      monitoring: ["All systems ready", "Emergency equipment ready", "Drugs prepared"],
      staff: ["On-call team"],
      admissionTime: "Available",
      lastSeizure: "N/A",
      magnesiumLoading: "Prepared",
      magnesiumMaintenance: "Prepared",
      fetalStatus: "N/A",
      complications: "None"
    },
    {
      id: 5,
      bedNumber: "ER-005",
      type: "observation",
      status: "occupied",
      patientName: "Mrs. Karima Begum",
      gestationalAge: "30 weeks",
      condition: "Gestational hypertension",
      bloodPressure: "150/95 mmHg",
      proteinuria: "Trace",
      seizures: "None",
      medications: ["Labetalol", "Low-dose aspirin"],
      monitoring: ["BP monitoring", "Proteinuria checks", "Fetal growth", "Symptoms watch"],
      staff: ["Dr. Rachel Green", "Nurse Olivia Martinez", "Midwife Jennifer White"],
      admissionTime: "2025-02-14 10:00",
      lastSeizure: "None",
      magnesiumLoading: "Not required",
      magnesiumMaintenance: "Not required",
      fetalStatus: "Stable",
      complications: "None"
    },
    {
      id: 6,
      bedNumber: "ER-006",
      type: "step-down",
      status: "occupied",
      patientName: "Mrs. Sumaya Khan",
      gestationalAge: "Delivered",
      condition: "Postpartum recovery",
      bloodPressure: "130/85 mmHg",
      proteinuria: "None",
      seizures: "None",
      medications: "None",
      monitoring: ["BP monitoring", "Wound care", "Breastfeeding support", "Mental health"],
      staff: ["Dr. Emily Taylor", "Nurse Rachel Green", "Midwife Lisa Chen"],
      admissionTime: "2025-02-14 14:00",
      lastSeizure: "None",
      magnesiumLoading: "Complete",
      magnesiumMaintenance: "Stopped",
      fetalStatus: "Delivered healthy infant",
      complications: "None"
    }
  ]

  const equipment = [
    {
      category: "Monitoring Equipment",
      items: [
        { name: "Invasive BP Monitors", count: 6, status: "operational", location: "Each bed" },
        { name: "Fetal Monitors", count: 6, status: "operational", location: "Each bed" },
        { name: "Central Monitoring System", count: 1, status: "operational", location: "Nurse station" },
        { name: "Urine Output Monitors", count: 6, status: "operational", location: "Each bed" }
      ]
    },
    {
      category: "Emergency Equipment",
      items: [
        { name: "Emergency Crash Carts", count: 3, status: "operational", location: "Strategic points" },
        { name: "Airway Management Kits", count: 6, status: "operational", location: "Each bed" },
        { name: "Defibrillators", count: 3, status: "operational", location: "Each zone" },
        { name: "Suction Machines", count: 6, status: "operational", location: "Each bed" }
      ]
    },
    {
      category: "Medication Equipment",
      items: [
        { name: "IV Pumps", count: 12, status: "operational", location: "Each bed" },
        { name: "Magnesium Sulfate Pumps", count: 6, status: "operational", location: "Critical beds" },
        { name: "Syringe Pumps", count: 12, status: "operational", location: "Each bed" },
        { name: "Medication Carts", count: 3, status: "operational", location: "Each zone" }
      ]
    },
    {
      category: "Safety Equipment",
      items: [
        { name: "Bed Rails", count: 6, status: "operational", location: "Each bed" },
        { name: "Seizure Pads", count: 6, status: "operational", location: "Each bed" },
        { name: "Oxygen Cylinders", count: 12, status: "operational", location: "Each bed" },
        { name: "Emergency Call Buttons", count: 6, status: "operational", location: "Each bed" }
      ]
    }
  ]

  const protocols = [
    {
      name: "Seizure Management Protocol",
      description: "Immediate management of eclamptic seizures",
      steps: [
        "Maintain airway, breathing, circulation",
        "Administer magnesium sulfate 4-6g IV over 15-20 min",
        "Administer lorazepam 2-4mg IV if seizures persist",
        "Monitor maternal vital signs continuously",
        "Monitor fetal heart rate continuously"
      ],
      medications: ["Magnesium sulfate", "Lorazepam", "Diazepam"],
      monitoring: ["Vital signs", "FHR", "Respiratory status", "Neurological status"],
      timeframe: "Immediate"
    },
    {
      name: "Blood Pressure Management",
      description: "Control of severe hypertension in pre-eclampsia",
      steps: [
        "Maintain BP 140-150/90-100 mmHg",
        "Administer IV labetalol 20mg bolus",
        "Repeat labetalol every 10 min if needed",
        "Consider hydralazine if refractory",
        "Monitor urine output and reflexes"
      ],
      medications: ["Labetalol", "Hydralazine", "Nifedipine"],
      monitoring: ["BP every 5-15 min", "Reflexes", "Urine output", "Headache"],
      timeframe: "Continuous"
    },
    {
      name: "Magnesium Sulfate Protocol",
      description: "Prevention and treatment of eclamptic seizures",
      steps: [
        "Loading dose: 4-6g IV over 15-20 min",
        "Maintenance: 2g/hour continuous infusion",
        "Monitor deep tendon reflexes",
        "Monitor respiratory rate",
        "Monitor urine output (>30ml/hr)",
        "Stop if toxicity signs appear"
      ],
      medications: ["Magnesium sulfate", "Calcium gluconate"],
      monitoring: ["Reflexes", "Respiratory rate", "Urine output", "Serum magnesium"],
      timeframe: "Continuous"
    },
    {
      name: "HELLP Syndrome Management",
      description: "Management of hemolysis, elevated liver enzymes, low platelets",
      steps: [
        "Stabilize maternal condition first",
        "Consider corticosteroids",
        "Monitor platelets, LFTs, hemoglobin",
        "Prepare for delivery if indicated",
        "Manage complications (DIC, renal failure)"
      ],
      medications: ["Corticosteroids", "Platelets", "Fresh frozen plasma"],
      monitoring: ["Platelets", "LFTs", "Hemoglobin", "Renal function", "Coagulation"],
      timeframe: "Every 6-12 hours"
    },
    {
      name: "Postpartum Management",
      description: "Care after delivery for pre-eclampsia patients",
      steps: [
        "Continue magnesium for 24 hours postpartum",
        "Monitor BP closely for 48 hours",
        "Encourage ambulation when stable",
        "Monitor for postpartum complications",
        "Provide breastfeeding support"
      ],
      medications: ["Magnesium sulfate", "Antihypertensives", "Analgesics"],
      monitoring: ["BP", "Vital signs", "Wound healing", "Breastfeeding", "Mental health"],
      timeframe: "48-72 hours"
    },
    {
      name: "Emergency Delivery Protocol",
      description: "Indications and timing for delivery in severe pre-eclampsia",
      steps: [
        "Assess maternal and fetal status",
        "Prepare for emergency C-section",
        "Continue magnesium sulfate during delivery",
        "Have neonatal team ready",
        "Monitor for postpartum complications"
      ],
      medications: ["Magnesium sulfate", "Antihypertensives", "Antibiotics"],
      monitoring: ["Maternal vitals", "FHR", "Blood loss", "Urine output"],
      timeframe: "Immediate when indicated"
    }
  ]

  const staff = [
    {
      category: "Medical Staff",
      members: [
        { name: "Dr. Sarah Johnson", role: "Maternal-Fetal Medicine", experience: "15 years", onDuty: true, specialization: "High-risk pregnancy" },
        { name: "Dr. Michael Chen", role: "Obstetrician", experience: "12 years", onDuty: true, specialization: "Eclampsia management" },
        { name: "Dr. Lisa Anderson", role: "Anesthesiologist", experience: "10 years", onDuty: true, specialization: "Critical care" },
        { name: "Dr. Robert Wilson", role: "Nephrologist", experience: "8 years", onDuty: "On call", specialization: "Renal complications" }
      ]
    },
    {
      category: "Nursing Staff",
      members: [
        { name: "Emily Davis", role: "ICU Nurse", experience: "10 years", onDuty: true, certification: "CCRN" },
        { name: "Jessica Wilson", role: "Obstetric Nurse", experience: "8 years", onDuty: true, certification: "RNC-OB" },
        { name: "Amanda Brown", role: "Critical Care Nurse", experience: "6 years", onDuty: true, certification: "CCRN" },
        { name: "Rachel Green", role: "Staff Nurse", experience: "4 years", onDuty: false, certification: "RN" }
      ]
    },
    {
      category: "Support Staff",
      members: [
        { name: "David Thompson", role: "Neonatologist", experience: "12 years", onDuty: "On call", specialization: "Neonatal intensive care" },
        { name: "Olivia Martinez", role: "Clinical Pharmacist", experience: "7 years", onDuty: true, specialization: "Critical care pharmacy" },
        { name: "Emily Taylor", role: "Lab Technician", experience: "5 years", onDuty: true, specialization: "Emergency labs" }
      ]
    }
  ]

  const galleryImages = [
    {
      id: 1,
      title: "Main Eclampsia Room",
      category: "facility",
      description: "Specialized eclampsia room with advanced monitoring systems",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Critical Care Monitoring",
      category: "equipment",
      description: "Advanced monitoring equipment for continuous patient surveillance",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Emergency Response Team",
      category: "staff",
      description: "Dedicated medical team providing specialized care",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Medication Preparation",
      category: "equipment",
      description: "Pharmacy area with emergency medications ready",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Family Support Area",
      category: "facility",
      description: "Comfortable area for families with regular updates",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Neonatal Care Unit",
      category: "facility",
      description: "Specialized neonatal care for infants of eclamptic mothers",
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
      color: "text-red-600"
    },
    {
      label: "Critical Cases",
      value: 2,
      unit: "patients",
      trend: "up",
      icon: AlertTriangle,
      color: "text-orange-600"
    },
    {
      label: "Staff Available",
      value: 11,
      unit: "members",
      trend: "stable",
      icon: Users,
      color: "text-blue-600"
    },
    {
      label: "Success Rate",
      value: 96,
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
            Eclampsia Room Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Specialized Beds</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">2</div>
              <div className="text-sm text-gray-600">Critical Cases</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">11</div>
              <div className="text-sm text-gray-600">Staff Members</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">96%</div>
            <div className="text-sm opacity-90">Success Rate</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6 text-center">
            <Activity className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-90">Critical Care</div>
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
            Current Patient Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {eclampsiaBeds.slice(0, 3).map((bed: any, index: number) => (
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
                    <div className="text-xs text-gray-500">{bed.condition} • {bed.bloodPressure}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{bed.seizures}</div>
                  <div className="text-xs text-gray-600">Seizures</div>
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
        {['all', 'critical', 'high-risk', 'recovery', 'observation', 'step-down'].map((type) => (
          <button
            key={type}
            onClick={() => setActiveCategory(type)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeCategory === type
                ? 'border-b-2 border-orange-600 text-orange-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Beds Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eclampsiaBeds
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
                  <span className="text-gray-600">Gestation:</span>
                  <span className="font-medium">{bed.gestationalAge}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Condition:</span>
                  <span className="font-medium">{bed.condition}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">BP:</span>
                  <span className="font-medium">{bed.bloodPressure}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Proteinuria:</span>
                  <span className="font-medium">{bed.proteinuria}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Seizures:</span>
                  <span className="font-medium">{bed.seizures}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Medications:</h4>
                <div className="flex flex-wrap gap-1">
                  {Array.isArray(bed.medications) && bed.medications.slice(0, 3).map((med: string, medIndex: number) => (
                    <span key={medIndex} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
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
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Magnesium Therapy:</h4>
                <div className="text-sm text-gray-600">
                  Loading: {bed.magnesiumLoading} | Maintenance: {bed.magnesiumMaintenance}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
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
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <Monitor className="w-8 h-8 mx-auto mb-2 text-red-600" />
              <div className="text-2xl font-bold text-gray-800">19</div>
              <div className="text-sm text-gray-600">Monitoring Devices</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-gray-800">18</div>
              <div className="text-sm text-gray-600">Emergency Items</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Activity className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-800">36</div>
              <div className="text-sm text-gray-600">Medication Devices</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Shield className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-800">30</div>
              <div className="text-sm text-gray-600">Safety Equipment</div>
            </div>
          </div>
        </CardContent>
      </Card>
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
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
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
                      <span className="font-medium text-blue-600">{stepIndex + 1}.</span>
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
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <FileText className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-800">{protocols.length}</div>
              <div className="text-sm text-gray-600">Total Protocols</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-red-600" />
              <div className="text-2xl font-bold text-gray-800">2</div>
              <div className="text-sm text-gray-600">Emergency Protocols</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Target className="w-8 h-8 mx-auto mb-2 text-green-600" />
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
      case 'beds': return renderBeds()
      case 'equipment': return renderEquipment()
      case 'protocols': return renderProtocols()
      case 'staff': return renderStaff()
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
                  <AlertTriangle className="w-16 h-16 text-red-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Eclampsia Room</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Specialized critical care facility for management of eclampsia and severe pre-eclampsia with advanced monitoring, emergency protocols, and expert medical team
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Critical Care
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Expert Management
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
          <h2 className="text-3xl font-bold mb-4">Excellence in Critical Maternal Care</h2>
          <p className="text-xl mb-8 opacity-90">State-of-the-art eclampsia facility providing comprehensive care for high-risk pregnancies with the highest safety standards and expert management</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Emergency Contact
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Protocols
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
