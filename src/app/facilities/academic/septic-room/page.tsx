"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function SepticRoomPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedArea, setSelectedArea] = useState<any>(null)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'areas', label: 'Areas', icon: '🏥' },
    { id: 'protocols', label: 'Protocols', icon: '📋' },
    { id: 'equipment', label: 'Equipment', icon: '🔧' },
    { id: 'schedule', label: 'Schedule', icon: '📅' }
  ]

  const septicAreas = [
    {
      id: 1,
      name: "Septic Ward A",
      type: "Isolation Ward",
      beds: 12,
      status: "operational",
      infectionLevel: "High",
      ventilation: "Negative Pressure",
      features: ["Individual isolation rooms", "Negative pressure ventilation", "Dedicated staff entrance", "Anteroom for PPE"],
      protocols: ["Strict hand hygiene", "PPE required", "Dedicated equipment", "Visitor restrictions"],
      currentPatients: 8,
      availableBeds: 4,
      staffAssigned: 6,
      lastInspection: "2025-02-14",
      nextInspection: "2025-02-28"
    },
    {
      id: 2,
      name: "Septic Ward B",
      type: "Infectious Disease Ward",
      beds: 8,
      status: "operational",
      infectionLevel: "Medium",
      ventilation: "Standard HEPA",
      features: ["Semi-private rooms", "HEPA filtration", "Dedicated bathroom", "Waste management"],
      protocols: ["Enhanced cleaning", "PPE protocols", "Waste segregation", "Staff monitoring"],
      currentPatients: 5,
      availableBeds: 3,
      staffAssigned: 4,
      lastInspection: "2025-02-13",
      nextInspection: "2025-02-27"
    },
    {
      id: 3,
      name: "Burn Unit Septic Area",
      type: "Burn Care",
      beds: 6,
      status: "operational",
      infectionLevel: "Very High",
      ventilation: "Positive Pressure",
      features: ["Hydrotherapy rooms", "Temperature control", "Specialized beds", "Dedicated OR access"],
      protocols: ["Sterile techniques", "Burn-specific protocols", "Environmental monitoring", "Staff vaccination"],
      currentPatients: 4,
      availableBeds: 2,
      staffAssigned: 8,
      lastInspection: "2025-02-15",
      nextInspection: "2025-03-01"
    },
    {
      id: 4,
      name: "ICU Septic Section",
      type: "Critical Care",
      beds: 10,
      status: "operational",
      infectionLevel: "Very High",
      ventilation: "Advanced Filtration",
      features: ["Advanced monitoring", "Isolation capabilities", "Ventilator support", "Dialysis access"],
      protocols: ["Critical care protocols", "Advanced PPE", "Environmental decontamination", "Staff training"],
      currentPatients: 7,
      availableBeds: 3,
      staffAssigned: 12,
      lastInspection: "2025-02-12",
      nextInspection: "2025-02-26"
    }
  ]

  const protocols = [
    {
      name: "Hand Hygiene Protocol",
      category: "basic",
      steps: ["Soap and water for 20 seconds", "Alcohol-based hand rub", "Before patient contact", "After patient contact"],
      frequency: "Every patient interaction",
      compliance: 94,
      lastAudit: "2025-02-10",
      nextAudit: "2025-02-24",
      responsible: "Infection Control Team"
    },
    {
      name: "PPE Donning and Doffing",
      category: "advanced",
      steps: ["Hand hygiene", "Gown", "Mask", "Eye protection", "Gloves", "Proper doffing sequence"],
      frequency: "High-risk procedures",
      compliance: 88,
      lastAudit: "2025-02-08",
      nextAudit: "2025-02-22",
      responsible: "Safety Officer"
    },
    {
      name: "Environmental Cleaning",
      category: "environmental",
      steps: ["Daily cleaning", "Disinfection of surfaces", "Terminal cleaning", "Waste management"],
      frequency: "Daily and after discharge",
      compliance: 91,
      lastAudit: "2025-02-12",
      nextAudit: "2025-02-26",
      responsible: "Housekeeping Supervisor"
    },
    {
      name: "Waste Management",
      category: "waste",
      steps: ["Segregation", "Color coding", "Proper disposal", "Documentation"],
      frequency: "Continuous",
      compliance: 96,
      lastAudit: "2025-02-14",
      nextAudit: "2025-02-28",
      responsible: "Waste Management Team"
    },
    {
      name: "Patient Isolation",
      category: "isolation",
      steps: ["Assessment", "Isolation order", "Room preparation", "Staff assignment", "Monitoring"],
      frequency: "As required",
      compliance: 89,
      lastAudit: "2025-02-09",
      nextAudit: "2025-02-23",
      responsible: "Medical Director"
    },
    {
      name: "Visitor Management",
      category: "visitors",
      steps: ["Screening", "Education", "PPE provision", "Time limits", "Monitoring"],
      frequency: "Every visit",
      compliance: 85,
      lastAudit: "2025-02-11",
      nextAudit: "2025-02-25",
      responsible: "Nursing Supervisor"
    }
  ]

  const equipment = [
    {
      name: "Ventilation Systems",
      count: 8,
      type: "Air Filtration",
      status: "Operational",
      maintenance: "Monthly",
      lastService: "2025-02-01",
      nextService: "2025-03-01",
      location: "All septic areas",
      specifications: ["HEPA filters", "Negative pressure", "Air exchange 12x/hour", "UV sterilization"]
    },
    {
      name: "Autoclaves",
      count: 4,
      type: "Sterilization",
      status: "Operational",
      maintenance: "Weekly",
      lastService: "2025-02-14",
      nextService: "2025-02-21",
      location: "Central sterile processing",
      specifications: ["121°C at 15 PSI", "30 minute cycle", "Steam sterilization", "Biological monitoring"]
    },
    {
      name: "UV Disinfection Units",
      count: 6,
      type: "Environmental",
      status: "Operational",
      maintenance: "Bi-weekly",
      lastService: "2025-02-10",
      nextService: "2025-02-24",
      location: "All patient rooms",
      specifications: ["254nm UV-C", "15 minute cycle", "Remote operation", "Safety sensors"]
    },
    {
      name: "Hand Hygiene Stations",
      count: 24,
      type: "Hygiene",
      status: "Operational",
      maintenance: "Daily",
      lastService: "2025-02-14",
      nextService: "2025-02-15",
      location: "All areas",
      specifications: ["Alcohol dispensers", "Soap dispensers", "Paper towels", "Waste receptacles"]
    },
    {
      name: "Waste Management Systems",
      count: "Complete",
      type: "Waste Disposal",
      status: "Operational",
      maintenance: "Weekly",
      lastService: "2025-02-12",
      nextService: "2025-02-19",
      location: "All areas",
      specifications: ["Color-coded bins", "Sharps containers", "Biohazard disposal", "Chemical waste"]
    },
    {
      name: "Monitoring Devices",
      count: 12,
      type: "Surveillance",
      status: "Operational",
      maintenance: "Monthly",
      lastService: "2025-02-05",
      nextService: "2025-03-05",
      location: "Critical areas",
      specifications: ["Air quality monitors", "Temperature sensors", "Humidity sensors", "Pressure monitors"]
    }
  ]

  const todaySchedule = [
    {
      time: "08:00-09:00",
      area: "Septic Ward A",
      activity: "Morning Rounds",
      staff: "Dr. M. Ali + Team",
      type: "clinical",
      status: "completed"
    },
    {
      time: "09:00-10:00",
      area: "ICU Septic Section",
      activity: "Infection Control Rounds",
      staff: "Infection Control Team",
      type: "inspection",
      status: "in-progress"
    },
    {
      time: "10:00-11:00",
      area: "Burn Unit Septic Area",
      activity: "Dressing Changes",
      staff: "Burn Care Team",
      type: "procedure",
      status: "scheduled"
    },
    {
      time: "11:00-12:00",
      area: "Septic Ward B",
      activity: "Patient Assessment",
      staff: "Dr. S. Karim",
      type: "clinical",
      status: "scheduled"
    },
    {
      time: "14:00-15:00",
      area: "All Areas",
      activity: "Environmental Cleaning",
      staff: "Housekeeping Team",
      type: "maintenance",
      status: "scheduled"
    },
    {
      time: "15:00-16:00",
      area: "ICU Septic Section",
      activity: "Staff Training",
      staff: "Education Department",
      type: "training",
      status: "scheduled"
    }
  ]

  const performanceMetrics = [
    {
      label: "Bed Occupancy",
      value: 73,
      unit: "%",
      trend: "stable",
      icon: Bed,
      color: "text-blue-600"
    },
    {
      label: "Protocol Compliance",
      value: 91,
      unit: "%",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      name: "Infection Rate",
      value: 2.3,
      unit: "%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-red-600"
    },
    {
      label: "Staff Training",
      value: 87,
      unit: "%",
      trend: "up",
      icon: GraduationCap,
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
              <div className={`text-sm font-medium ${metric.color}`}>{metric.label || metric.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Facility Overview */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="w-5 h-5" />
            Septic Room Facilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">36</div>
              <div className="text-sm text-gray-600">Total Beds</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">4</div>
              <div className="text-sm text-gray-600">Septic Areas</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">30</div>
              <div className="text-sm text-gray-600">Staff Members</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <Bed className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">24</div>
            <div className="text-sm opacity-90">Occupied Beds</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">91%</div>
            <div className="text-sm opacity-90">Protocol Compliance</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">2.3%</div>
            <div className="text-sm opacity-90">Infection Rate</div>
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

  const renderAreas = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {septicAreas.map((area, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{area.name}</h3>
                  <p className="text-sm text-gray-600">{area.type}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  area.status === 'operational' ? 'bg-green-500' :
                  area.status === 'maintenance' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}></div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Beds:</span>
                  <span className="font-medium">{area.beds}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Current Patients:</span>
                  <span className="font-medium">{area.currentPatients}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Available Beds:</span>
                  <span className="font-medium">{area.availableBeds}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Infection Level:</span>
                  <span className="font-medium">{area.infectionLevel}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Staff Assigned:</span>
                  <span className="font-medium">{area.staffAssigned}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {area.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Protocols:</h4>
                <div className="flex flex-wrap gap-1">
                  {area.protocols.slice(0, 3).map((protocol, protocolIndex) => (
                    <span key={protocolIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {protocol}
                    </span>
                  ))}
                  {area.protocols.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{area.protocols.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Ventilation:</h4>
                <p className="text-sm text-gray-600">{area.ventilation}</p>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Manage Area
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderProtocols = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {protocols.map((protocol, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{protocol.name}</h3>
                  <p className="text-sm text-gray-600">{protocol.category}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  protocol.compliance >= 90 ? 'bg-green-100 text-green-700' :
                  protocol.compliance >= 80 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {protocol.compliance}% Compliance
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Frequency:</span>
                  <span className="font-medium">{protocol.frequency}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Last Audit:</span>
                  <span className="font-medium">{protocol.lastAudit}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Next Audit:</span>
                  <span className="font-medium">{protocol.nextAudit}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Responsible:</span>
                  <span className="font-medium">{protocol.responsible}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Steps:</h4>
                <div className="space-y-1">
                  {protocol.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Protocol
                </button>
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Audit Report
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
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Location:</h4>
                <p className="text-sm text-gray-600">{item.location}</p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Specifications:</h4>
                <div className="space-y-1">
                  {item.specifications.map((spec, specIndex) => (
                    <div key={specIndex} className="text-xs text-gray-600">
                      • {spec}
                    </div>
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
                  <div className="bg-green-100 text-green-700 text-xs p-1 rounded">
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
      case 'areas': return renderAreas()
      case 'protocols': return renderProtocols()
      case 'equipment': return renderEquipment()
      case 'schedule': return renderSchedule()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-blue-600/5 to-purple-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-16 h-16 text-green-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Septic Room</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Specialized infection control facility with isolation wards and aseptic protocols
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Infection Control
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Isolation Ward
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
                    ? 'border-green-600 text-green-600 bg-green-50'
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
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Excellence in Infection Control</h2>
          <p className="text-xl mb-8 opacity-90">State-of-the-art septic room facility for comprehensive infection management</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Protocols
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
