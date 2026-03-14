"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function CCUPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedBed, setSelectedBed] = useState<any>(null)
  const [activeProcedure, setActiveProcedure] = useState<any>(null)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-red-500 to-red-600' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️', color: 'from-indigo-500 to-indigo-600' },
    { id: 'beds', label: 'CCU Beds', icon: '🛏️', color: 'from-pink-500 to-pink-600' },
    { id: 'procedures', label: 'Procedures', icon: '🏥', color: 'from-purple-500 to-purple-600' },
    { id: 'equipment', label: 'Equipment', icon: '🔧', color: 'from-blue-500 to-blue-600' },
    { id: 'schedule', label: 'Schedule', icon: '📅', color: 'from-green-500 to-green-600' }
  ]

  const ccuBeds = [
    {
      id: 1,
      bedNumber: "CCU-001",
      type: "Post-MI Care",
      status: "occupied",
      patientType: "Acute Myocardial Infarction",
      monitoring: ["12-lead ECG", "Hemodynamic monitoring", "Cardiac enzymes", "Troponin levels", "Arrhythmia detection"],
      support: ["IABP", "Temporary pacing", "Inotropic support", "Antiplatelet therapy"],
      medications: ["Aspirin", "Heparin", "Beta-blockers", "ACE inhibitors", "Statins"],
      staff: ["Dr. M. Ali", "Nurse Sarah", "Cardiology Fellow"],
      admissionTime: "2025-02-13 22:15",
      diagnosis: "Anterior Wall MI",
      procedures: ["Primary PCI", "IABP insertion", "Temporary pacer", "Central line"],
      complications: ["Arrhythmias", "Heart failure", "Cardiogenic shock"],
      familyStatus: "Informed",
      lastUpdate: "2025-02-14 07:30"
    },
    {
      id: 2,
      bedNumber: "CCU-002",
      type: "Arrhythmia Management",
      status: "occupied",
      patientType: "Cardiac Arrhythmia",
      monitoring: ["Telemetry", "Holter monitoring", "Event monitoring", "BP monitoring", "O2 saturation"],
      support: ["External pacing", "Defibrillator standby", "Antiarrhythmic therapy", "Electrolyte management"],
      medications: ["Amiodarone", "Beta-blockers", "Calcium channel blockers", "Digoxin"],
      staff: ["Dr. S. Karim", "Nurse Mike", "Electrophysiology Team"],
      admissionTime: "2025-02-14 02:45",
      diagnosis: "Ventricular Tachycardia",
      procedures: ["Electrical cardioversion", "Temporary pacing", "ICD consideration", "EP study"],
      complications: ["Syncope", "Hypotension", "Cardiac arrest"],
      familyStatus: "Waiting room",
      lastUpdate: "2025-02-14 06:15"
    },
    {
      id: 3,
      bedNumber: "CCU-003",
      type: "Heart Failure",
      status: "occupied",
      patientType: "Advanced Heart Failure",
      monitoring: ["Swan-Ganz catheter", "Cardiac output", "BNP levels", "Daily weights", "I/O monitoring"],
      support: ["Ventilator support", "Renal replacement", "Inotropic support", "Ultrafiltration"],
      medications: ["Diuretics", "ACE inhibitors", "Beta-blockers", "Aldosterone antagonists"],
      staff: ["Dr. A. Rahman", "Nurse Emily", "Heart Failure Team"],
      admissionTime: "2025-02-12 18:30",
      diagnosis: " Decompensated CHF",
      procedures: ["Swan-Ganz insertion", "Dialysis catheter", "Ultrafiltration", "Optimization"],
      complications: ["Renal dysfunction", "Hepatic congestion", "Pulmonary edema"],
      familyStatus: "Regular updates",
      lastUpdate: "2025-02-14 08:00"
    },
    {
      id: 4,
      bedNumber: "CCU-004",
      type: "Post-PCI Care",
      status: "available",
      patientType: "Ready for Admission",
      monitoring: ["ECG monitoring", "Vital signs", "Access site monitoring", "Bleeding assessment"],
      support: ["Standard cardiac monitoring"],
      medications: ["Antiplatelet therapy", "Anticoagulation", "Statins", "Beta-blockers"],
      staff: ["On-call cardiology team"],
      admissionTime: "Available",
      diagnosis: "Available for post-PCI patients",
      procedures: ["Prepared for PCI recovery", "Access site care", "Complication monitoring"],
      complications: "Monitoring for bleeding, arrhythmias",
      familyStatus: "Standard visiting hours",
      lastUpdate: "2025-02-14 08:15"
    },
    {
      id: 5,
      bedNumber: "CCU-005",
      type: "Pre-Cardiac Surgery",
      status: "occupied",
      patientType: "Pre-Op Optimization",
      monitoring: ["Hemodynamic monitoring", "Labs", "Medication optimization", "Risk assessment"],
      support: ["Pre-operative optimization"],
      medications: ["Beta-blockers", "Statins", "ACE inhibitors", "Diuretics"],
      staff: ["Dr. N. Ahmed", "Nurse John", "Surgical Team"],
      admissionTime: "2025-02-13 16:00",
      diagnosis: "Severe CAD - Pre-Op",
      procedures: ["Cardiac cath", "Optimization", "Pre-op testing", "Family counseling"],
      complications: "Monitoring for decompensation",
      familyStatus: "Pre-op counseling",
      lastUpdate: "2025-02-14 07:45"
    },
    {
      id: 6,
      bedNumber: "CCU-006",
      type: "Cardiac Arrest Recovery",
      status: "occupied",
      patientType: "Post-Cardiac Arrest",
      monitoring: ["Neurological monitoring", "Hemodynamic support", "Targeted temperature management", "EEG"],
      support: ["Therapeutic hypothermia", "Mechanical ventilation", "IABP", "Advanced life support"],
      medications: ["Sedation", "Neuroprotective agents", "Antiarrhythmics", "Vasopressors"],
      staff: ["Dr. R. Islam", "Nurse Lisa", "Critical Care Team"],
      admissionTime: "2025-02-14 04:20",
      diagnosis: "Out-of-hospital cardiac arrest",
      procedures: ["CPR", "Advanced airway", "Targeted hypothermia", "Neurological assessment"],
      complications: ["Anoxic brain injury", "Multi-organ dysfunction", "Arrhythmias"],
      familyStatus: "Critical care updates",
      lastUpdate: "2025-02-14 08:30"
    }
  ]

  const procedures = [
    {
      id: 1,
      name: "Primary PCI",
      category: "interventional",
      complexity: "High",
      duration: "90 minutes",
      successRate: 95,
      description: "Emergency percutaneous coronary intervention for acute MI",
      indications: ["STEMI", "High-risk NSTEMI", "Cardiogenic shock"],
      equipment: ["Cath lab", "Stents", "Balloons", "IABP", "Impella"],
      team: ["Interventional cardiologist", "Cath lab nurse", "Radiology tech"],
      complications: ["Bleeding", "Contrast nephropathy", "No-reflow", "Arrhythmias"],
      outcomes: ["Mortality reduction", "Preserved LV function", "Reduced complications"],
      trainingLevel: "Advanced"
    },
    {
      id: 2,
      name: "IABP Insertion",
      category: "mechanical support",
      complexity: "Intermediate",
      duration: "30 minutes",
      successRate: 92,
      description: "Intra-aortic balloon pump for circulatory support",
      indications: ["Cardiogenic shock", "High-risk PCI", "Bridge to therapy"],
      equipment: ["IABP console", "IABP catheter", "Ultrasound guidance", "Monitoring"],
      team: ["Cardiologist", "CCU nurse", "Respiratory therapist"],
      complications: ["Limb ischemia", "Bleeding", "Infection", "Balloon malfunction"],
      outcomes: ["Hemodynamic support", "Reduced afterload", "Improved perfusion"],
      trainingLevel: "Intermediate"
    },
    {
      id: 3,
      name: "Temporary Pacing",
      category: "electrical therapy",
      complexity: "Intermediate",
      duration: "45 minutes",
      successRate: 88,
      description: "Temporary cardiac pacing for bradyarrhythmias",
      indications: ["Complete heart block", "Symptomatic bradycardia", "Post-MI block"],
      equipment: ["Pacing generator", "Pacing wires", "Fluoroscopy", "ECG monitoring"],
      team: ["Cardiologist", "CCU nurse", "Cardiology tech"],
      complications: ["Infection", "Lead displacement", "Cardiac perforation", "Arrhythmias"],
      outcomes: ["Hemodynamic stability", "Adequate heart rate", "Bridge to permanent pacer"],
      trainingLevel: "Intermediate"
    },
    {
      id: 4,
      name: "Electrical Cardioversion",
      category: "electrical therapy",
      complexity: "Basic",
      duration: "15 minutes",
      successRate: 85,
      description: "Synchronized electrical cardioversion for arrhythmias",
      indications: ["Atrial fibrillation", "Atrial flutter", "SVT", "VT with pulses"],
      equipment: ["Defibrillator", "Synchronization", "Sedation", "Monitoring"],
      team: ["Cardiologist", "CCU nurse", "Respiratory therapist"],
      complications: ["Skin burns", "Arrhythmias", "Embolic events", "Hypotension"],
      outcomes: ["Sinus rhythm", "Symptom relief", "Improved hemodynamics"],
      trainingLevel: "Basic"
    },
    {
      id: 5,
      name: "Swan-Ganz Catheterization",
      category: "monitoring",
      complexity: "Advanced",
      duration: "60 minutes",
      successRate: 90,
      description: "Pulmonary artery catheter for hemodynamic monitoring",
      indications: ["Heart failure", "Shock", "Complex cases", "Post-operative monitoring"],
      equipment: ["Swan-Ganz catheter", "Pressure transducer", "Monitor", "Ultrasound"],
      team: ["Cardiologist", "CCU nurse", "Cardiology fellow"],
      complications: ["Arrhythmias", "Infection", "Pulmonary artery rupture", "Thrombosis"],
      outcomes: ["Accurate hemodynamics", "Guided therapy", "Improved outcomes"],
      trainingLevel: "Advanced"
    },
    {
      id: 6,
      name: "CPR and Advanced Life Support",
      category: "emergency",
      complexity: "Advanced",
      duration: "Variable",
      successRate: 25,
      description: "Cardiopulmonary resuscitation and ACLS protocols",
      indications: ["Cardiac arrest", "Respiratory arrest", "Peri-arrest arrhythmias"],
      equipment: ["Crash cart", "Defibrillator", "Airway equipment", "Emergency meds"],
      team: ["Full code team", "Nursing staff", "Respiratory therapy"],
      complications: ["Rib fractures", "Aspiration", "Organ injury", "Neurological injury"],
      outcomes: ["ROSC", "Survival", "Neurological recovery", "Quality of life"],
      trainingLevel: "Advanced"
    }
  ]

  const equipment = [
    {
      name: "Cardiac Monitors",
      count: 8,
      type: "Patient Monitoring",
      status: "Operational",
      models: ["Philips IntelliVue", "GE CARESCAPE", "Nihon Kohden"],
      features: ["12-lead ECG", "Arrhythmia detection", "ST monitoring", "Hemodynamics"],
      maintenance: "Daily calibration",
      lastService: "2025-02-14",
      nextService: "2025-02-15"
    },
    {
      name: "Defibrillators",
      count: 4,
      type: "Emergency Response",
      status: "Operational",
      models: ["Philips HeartStart", "Zoll R Series", "Physio-Control"],
      features: ["Biphasic energy", "Pacing", "AED mode", "Data recording"],
      maintenance: "Weekly checks",
      lastService: "2025-02-12",
      nextService: "2025-02-19"
    },
    {
      name: "IABP Consoles",
      count: 3,
      type: "Mechanical Support",
      status: "Operational",
      models: ["Datascope CS100", "Maquet Getinge", "Teleflex"],
      features: ["1:1 counterpulsation", "Helium drive", "Trigger modes", "Data display"],
      maintenance: "After each use",
      lastService: "2025-02-13",
      nextService: "Next use"
    },
    {
      name: "Temporary Pacemakers",
      count: 6,
      type: "Electrical Therapy",
      status: "Operational",
      models: ["Medtronic 5388", "St. Jude Medical", "Biotronik"],
      features: ["Dual chamber", "Rate response", "Multiple modes", "Battery backup"],
      maintenance: "Weekly checks",
      lastService: "2025-02-10",
      nextService: "2025-02-17"
    },
    {
      name: "Infusion Pumps",
      count: 24,
      type: "Medication Delivery",
      status: "Operational",
      models: ["Baxter Colleague", "Smiths Medical", "Fresenius"],
      features: ["Programmable rates", "Dose calculations", "Library functions", "Wireless"],
      maintenance: "Monthly inspection",
      lastService: "2025-02-08",
      nextService: "2025-03-08"
    },
    {
      name: "Ventilators",
      count: 4,
      type: "Respiratory Support",
      status: "Operational",
      models: ["Dräger Evita", "Hamilton C6", "Servo-i"],
      features: ["Volume control", "Pressure support", "Non-invasive", "High flow"],
      maintenance: "Weekly checks",
      lastService: "2025-02-11",
      nextService: "2025-02-18"
    }
  ]

  const todaySchedule = [
    {
      time: "08:00-09:00",
      activity: "Morning Rounds",
      area: "All CCU Beds",
      staff: "Cardiology Team",
      type: "clinical",
      status: "in-progress"
    },
    {
      time: "09:00-10:00",
      activity: "Primary PCI",
      area: "Cath Lab",
      staff: "Dr. M. Ali + Team",
      type: "procedure",
      status: "scheduled"
    },
    {
      time: "10:00-11:00",
      activity: "IABP Insertion",
      area: "CCU-002",
      staff: "Dr. S. Karim",
      type: "procedure",
      status: "scheduled"
    },
    {
      time: "11:00-12:00",
      activity: "Family Meetings",
      area: "Conference Room",
      staff: "Attending Physicians",
      type: "communication",
      status: "scheduled"
    },
    {
      time: "14:00-15:00",
      activity: "ECG Interpretation Training",
      area: "Education Room",
      staff: "Cardiology Fellows",
      type: "training",
      status: "scheduled"
    },
    {
      time: "15:00-16:00",
      activity: "Multidisciplinary Rounds",
      area: "All CCU Beds",
      staff: "Full Cardiology Team",
      type: "clinical",
      status: "scheduled"
    },
    {
      time: "16:00-17:00",
      activity: "Equipment Check",
      area: "All Areas",
      staff: "Biomedical Team",
      type: "maintenance",
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
      label: "PCI Success Rate",
      value: 95,
      unit: "%",
      trend: "stable",
      icon: HeartPulse,
      color: "text-pink-600"
    },
    {
      label: "Mortality Rate",
      value: 4.2,
      unit: "%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-orange-600"
    },
    {
      label: "Training Completion",
      value: 89,
      unit: "%",
      trend: "up",
      icon: GraduationCap,
      color: "text-blue-600"
    }
  ]

  const galleryImages = [
    {
      id: 1,
      title: "CCU Main Ward",
      category: "facility",
      description: "Main coronary care unit with advanced monitoring systems",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Cardiac Monitor Setup",
      category: "equipment",
      description: "State-of-the-art cardiac monitoring equipment at each bedside",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Emergency Response Team",
      category: "staff",
      description: "Dedicated cardiac emergency response team in action",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "IABP Console",
      category: "equipment",
      description: "Intra-aortic balloon pump console for mechanical support",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "CCU Nursing Station",
      category: "facility",
      description: "Central nursing station with comprehensive monitoring displays",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Training Session",
      category: "education",
      description: "Cardiology fellows undergoing advanced CCU training",
      image: "/api/placeholder/400/300"
    },
    {
      id: 7,
      title: "Patient Room",
      category: "facility",
      description: "Private CCU room with full monitoring and support systems",
      image: "/api/placeholder/400/300"
    },
    {
      id: 8,
      title: "Multidisciplinary Rounds",
      category: "staff",
      description: "Daily multidisciplinary team rounds for patient care planning",
      image: "/api/placeholder/400/300"
    },
    {
      id: 9,
      title: "Defibrillator System",
      category: "equipment",
      description: "Advanced defibrillation system for emergency cardiac care",
      image: "/api/placeholder/400/300"
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
            CCU Facility Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">CCU Beds</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="w-8 h-8 text-pink-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">95%</div>
              <div className="text-sm text-gray-600">PCI Success Rate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">18</div>
              <div className="text-sm text-gray-600">Staff Members</div>
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
        <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white">
          <CardContent className="p-6 text-center">
            <HeartPulse className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">4.2%</div>
            <div className="text-sm opacity-90">Mortality Rate</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <Target className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">89%</div>
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
        {ccuBeds.map((bed, index) => (
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
                  'bg-yellow-500'
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
                  <span className="text-gray-600">Diagnosis:</span>
                  <span className="font-medium">{bed.diagnosis}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Family Status:</span>
                  <span className="font-medium">{bed.familyStatus}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Monitoring:</h4>
                <div className="flex flex-wrap gap-1">
                  {bed.monitoring.slice(0, 3).map((monitor, monitorIndex) => (
                    <span key={monitorIndex} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
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
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Support Systems:</h4>
                <div className="flex flex-wrap gap-1">
                  {bed.support.slice(0, 3).map((support, supportIndex) => (
                    <span key={supportIndex} className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">
                      {support}
                    </span>
                  ))}
                  {bed.support.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{bed.support.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Medications:</h4>
                <div className="flex flex-wrap gap-1">
                  {bed.medications.slice(0, 3).map((med, medIndex) => (
                    <span key={medIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {med}
                    </span>
                  ))}
                  {bed.medications.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{bed.medications.length - 3} more
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

              <div className="flex gap-2">
                <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
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

  const renderProcedures = () => (
    <div className="space-y-8">
      {/* Procedure Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'interventional', 'mechanical support', 'electrical therapy', 'monitoring', 'emergency'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveProcedure(category)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeProcedure === category
                ? 'border-b-2 border-red-600 text-red-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Procedures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {procedures
          .filter(proc => activeProcedure === 'all' || proc.category === activeProcedure)
          .map((procedure, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{procedure.name}</h3>
                  <p className="text-sm text-gray-600">{procedure.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      procedure.complexity === 'Basic' ? 'bg-green-100 text-green-700' :
                      procedure.complexity === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {procedure.complexity}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{procedure.duration}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Success Rate:</span>
                  <span className="font-medium">{procedure.successRate}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Training Level:</span>
                  <span className="font-medium">{procedure.trainingLevel}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Indications:</h4>
                <div className="flex flex-wrap gap-1">
                  {procedure.indications.slice(0, 3).map((indication, indicationIndex) => (
                    <span key={indicationIndex} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                      {indication}
                    </span>
                  ))}
                  {procedure.indications.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{procedure.indications.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Equipment:</h4>
                <div className="flex flex-wrap gap-1">
                  {procedure.equipment.slice(0, 3).map((equipment, equipmentIndex) => (
                    <span key={equipmentIndex} className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">
                      {equipment}
                    </span>
                  ))}
                  {procedure.equipment.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{procedure.equipment.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Team Members:</h4>
                <div className="flex flex-wrap gap-1">
                  {procedure.team.map((teamMember, teamIndex) => (
                    <span key={teamIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {teamMember}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                  Training
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
                  'bg-yellow-500'
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
                    <span key={featureIndex} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
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
                  <div className="bg-red-100 text-red-700 text-xs p-1 rounded">
                    08:00-09:00
                  </div>
                  <div className="bg-pink-100 text-pink-700 text-xs p-1 rounded">
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
              <div key={index} className="border-l-4 border-red-600 pl-4 py-2">
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

  const renderGallery = () => (
    <div className="space-y-8">
      {/* Gallery Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'facility', 'equipment', 'staff', 'education'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveProcedure(category)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeProcedure === category
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
          .filter(img => activeProcedure === 'all' || img.category === activeProcedure)
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
            <Wrench className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-sm opacity-90">Equipment Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">2</div>
            <div className="text-sm opacity-90">Staff Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6 text-center">
            <GraduationCap className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-sm opacity-90">Education Images</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview()
      case 'beds': return renderBeds()
      case 'procedures': return renderProcedures()
      case 'equipment': return renderEquipment()
      case 'schedule': return renderSchedule()
      case 'gallery': return renderGallery()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-pink-600/5 to-purple-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <HeartPulse className="w-16 h-16 text-red-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Coronary Care Unit</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Advanced cardiac critical care facility with comprehensive monitoring and interventional capabilities
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Cardiac Excellence
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Critical Care
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
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Excellence in Cardiac Care</h2>
          <p className="text-xl mb-8 opacity-90">State-of-the-art CCU facility for comprehensive cardiac critical care and interventional procedures</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Training
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Procedures
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
