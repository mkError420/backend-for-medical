"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon } from "lucide-react"

export default function SkillLabPage() {
  const [activeView, setActiveView] = useState('dashboard')
  const [selectedStation, setSelectedStation] = useState<any>(null)
  const [hoveredStation, setHoveredStation] = useState<number | null>(null)

  const views = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'stations', label: 'Skill Stations', icon: '🏥' },
    { id: 'equipment', label: 'Equipment', icon: '🔬' },
    { id: 'training', label: 'Training', icon: '📚' }
  ]

  const skillStations = [
    {
      id: 1,
      name: "Basic Life Support Station",
      category: 'emergency',
      icon: HeartHandshake,
      description: "Comprehensive BLS training with CPR and emergency response",
      skills: ["CPR", "AED Operation", "Choking Management", "Emergency Assessment", "Team Communication", "Documentation"],
      equipment: ["Mannequins", "AED Trainers", "Airway Management Tools", "Monitoring Devices", "Emergency Kits"],
      capacity: "12 students",
      duration: "2 hours",
      certification: "BLS Certified",
      difficulty: "Beginner",
      success: "96%"
    },
    {
      id: 2,
      name: "Suturing & Wound Care Station",
      category: 'procedural',
      icon: Wrench,
      description: "Advanced suturing techniques and wound management training",
      skills: ["Basic Suturing", "Advanced Suturing", "Wound Assessment", "Dressing Techniques", "Sterile Technique", "Instrument Handling"],
      equipment: ["Suturing Kits", "Practice Pads", "Surgical Instruments", "Sterile Supplies", "Lighting Systems", "Magnification Tools"],
      capacity: "8 students",
      duration: "3 hours",
      certification: "Suturing Certified",
      difficulty: "Intermediate",
      success: "94%"
    },
    {
      id: 3,
      name: "IV Cannulation Station",
      category: 'procedural',
      icon: Syringe,
      description: "Intravenous cannulation and vascular access training",
      skills: ["Vein Assessment", "Cannulation Technique", "Complication Management", "Site Selection", "Patient Communication", "Documentation"],
      equipment: ["IV Training Arms", "Cannulation Kits", "Infusion Pumps", "Ultrasound Devices", "Practice Models", "Monitoring Systems"],
      capacity: "10 students",
      duration: "2.5 hours",
      certification: "IV Access Certified",
      difficulty: "Intermediate",
      success: "93%"
    },
    {
      id: 4,
      name: "Airway Management Station",
      category: 'emergency',
      icon: Activity,
      description: "Advanced airway management and intubation techniques",
      skills: ["Bag-Valve-Mask", "Laryngeal Mask", "Endotracheal Intubation", "Cricothyrotomy", "Difficult Airway", "Rapid Sequence Induction"],
      equipment: ["Intubation Mannequins", "Laryngoscopes", "Airway Tubes", "Suction Devices", "Capnographs", "Emergency Cricothyrotomy Kits"],
      capacity: "6 students",
      duration: "4 hours",
      certification: "Airway Management Certified",
      difficulty: "Advanced",
      success: "91%"
    },
    {
      id: 5,
      name: "Physical Examination Station",
      category: 'clinical',
      icon: Stethoscope,
      description: "Comprehensive physical examination skills training",
      skills: ["General Examination", "Systematic Approach", "History Taking", "Communication Skills", "Clinical Reasoning", "Documentation"],
      equipment: ["Examination Beds", "Diagnostic Tools", "Stethoscopes", "BP Monitors", "Ophthalmoscopes", "Otoscopes"],
      capacity: "15 students",
      duration: "3 hours",
      certification: "Clinical Examination Certified",
      difficulty: "Beginner",
      success: "97%"
    },
    {
      id: 6,
      name: "Obstetrics & Gynecology Station",
      category: 'clinical',
      icon: Baby,
      description: "OB/GYN procedures and examination training",
      skills: ["Pelvic Examination", "Pap Smear", "IUD Insertion", "Delivery Simulation", "Prenatal Assessment", "Emergency Obstetrics"],
      equipment: ["OB/GYN Models", "Delivery Simulators", "Ultrasound Machines", "Speculum Sets", "Fetal Monitors", "Emergency Kits"],
      capacity: "8 students",
      duration: "4 hours",
      certification: "OB/GYN Skills Certified",
      difficulty: "Advanced",
      success: "92%"
    },
    {
      id: 7,
      name: "Surgical Skills Station",
      category: 'procedural',
      icon: Target,
      description: "Basic surgical techniques and instrument handling",
      skills: ["Instrument Handling", "Knot Tying", "Surgical Scrubbing", "Gowning & Gloving", "Surgical Safety", "Team Communication"],
      equipment: ["Surgical Instruments", "Practice Boards", "Scrub Sinks", "Gowning Areas", "Safety Checklists", "Video Recording"],
      capacity: "10 students",
      duration: "3 hours",
      certification: "Surgical Skills Certified",
      difficulty: "Intermediate",
      success: "95%"
    },
    {
      id: 8,
      name: "Emergency Response Station",
      category: 'emergency',
      icon: AlertTriangle,
      description: "Emergency medicine and rapid response training",
      skills: ["Triage", "Emergency Assessment", "Rapid Response", "Team Leadership", "Resource Management", "Debriefing"],
      equipment: ["Emergency Simulators", "Monitoring Systems", "Emergency Carts", "Communication Devices", "Triage Tags", "Documentation Tools"],
      capacity: "12 students",
      duration: "3.5 hours",
      certification: "Emergency Response Certified",
      difficulty: "Advanced",
      success: "90%"
    }
  ]

  const equipment = [
    {
      name: "High-Fidelity Simulators",
      category: "simulation",
      count: 15,
      status: "operational",
      utilization: "85%",
      maintenance: "Monthly",
      description: "Advanced patient simulators for realistic training"
    },
    {
      name: "Task Trainers",
      category: "training",
      count: 45,
      status: "operational", 
      utilization: "92%",
      maintenance: "Weekly",
      description: "Specialized trainers for specific procedures"
    },
    {
      name: "VR/AR Systems",
      category: "technology",
      count: 8,
      status: "operational",
      utilization: "78%",
      maintenance: "Bi-weekly",
      description: "Virtual and augmented reality training systems"
    },
    {
      name: "Video Recording Systems",
      category: "assessment",
      count: 12,
      status: "operational",
      utilization: "88%",
      maintenance: "Monthly",
      description: "Recording and debriefing systems"
    },
    {
      name: "Monitoring Equipment",
      category: "clinical",
      count: 30,
      status: "operational",
      utilization: "95%",
      maintenance: "Weekly",
      description: "Patient monitoring and diagnostic equipment"
    },
    {
      name: "Emergency Carts",
      category: "emergency",
      count: 6,
      status: "operational",
      utilization: "70%",
      maintenance: "Daily",
      description: "Fully equipped emergency response carts"
    }
  ]

  const trainingPrograms = [
    {
      name: "Basic Clinical Skills",
      duration: "4 weeks",
      level: "Beginner",
      sessions: 16,
      students: 45,
      completion: "88%",
      nextStart: "2025-02-01"
    },
    {
      name: "Advanced Procedural Skills",
      duration: "6 weeks", 
      level: "Advanced",
      sessions: 24,
      students: 28,
      completion: "92%",
      nextStart: "2025-02-15"
    },
    {
      name: "Emergency Medicine Skills",
      duration: "3 weeks",
      level: "Intermediate",
      sessions: 12,
      students: 35,
      completion: "85%",
      nextStart: "2025-03-01"
    },
    {
      name: "Surgical Skills Foundation",
      duration: "5 weeks",
      level: "Intermediate",
      sessions: 20,
      students: 22,
      completion: "94%",
      nextStart: "2025-03-15"
    }
  ]

  const realTimeStats = [
    { label: "Active Students", value: 142, unit: "students", color: "text-blue-600", icon: "👥" },
    { label: "Stations Running", value: 6, unit: "stations", color: "text-green-600", icon: "🏥" },
    { label: "Equipment Usage", value: 87, unit: "%", color: "text-orange-600", icon: "📊" },
    { label: "Today's Sessions", value: 24, unit: "sessions", color: "text-purple-600", icon: "📅" }
  ]

  const renderStationCard = (station: any) => (
    <div key={station.id}
         className={`relative transform transition-all duration-300 cursor-pointer ${
           hoveredStation === station.id ? 'scale-105 z-10' : 'hover:scale-102'
         }`}
         onMouseEnter={() => setHoveredStation(station.id)}
         onMouseLeave={() => setHoveredStation(null)}>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${
          station.category === 'emergency' ? 'from-red-400 to-red-600' :
          station.category === 'procedural' ? 'from-blue-400 to-blue-600' :
          station.category === 'clinical' ? 'from-green-400 to-green-600' :
          'from-purple-400 to-purple-600'
        }`}></div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <station.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">{station.success}%</div>
              <div className="text-xs text-gray-600">Success Rate</div>
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-gray-800 mb-2">{station.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{station.description}</p>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Capacity:</span>
              <span className="font-medium">{station.capacity}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Duration:</span>
              <span className="font-medium">{station.duration}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Level:</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                station.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                station.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>{station.difficulty}</span>
            </div>
            
            {hoveredStation === station.id && (
              <div className="space-y-3 pt-3 border-t border-gray-200">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {station.skills.slice(0, 4).map((skill: string, skillIndex: number) => (
                      <span key={skillIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Real-time Stats Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {realTimeStats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">{stat.icon}</div>
              <div className={`w-3 h-3 rounded-full ${stat.color === 'text-blue-600' ? 'bg-blue-600' : stat.color === 'text-green-600' ? 'bg-green-600' : stat.color === 'text-orange-600' ? 'bg-orange-600' : 'bg-purple-600'} animate-pulse`}></div>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 mb-1">{stat.unit}</div>
            <div className={`text-sm font-medium ${stat.color}`}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Training Programs Overview */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Current Training Programs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainingPrograms.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold text-gray-800">{program.name}</h4>
                  <p className="text-sm text-gray-600">{program.duration} • {program.level}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{program.completion}%</div>
                  <div className="text-xs text-gray-600">Completion</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-semibold text-gray-800">{program.sessions}</div>
                  <div className="text-xs text-gray-600">Sessions</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-800">{program.students}</div>
                  <div className="text-xs text-gray-600">Students</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-green-600">{program.nextStart}</div>
                  <div className="text-xs text-gray-600">Next Start</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderStations = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillStations.map(renderStationCard)}
    </div>
  )

  const renderEquipment = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Count:</span>
                  <span className="font-medium">{item.count}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Utilization:</span>
                  <span className="font-medium text-green-600">{item.utilization}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Maintenance:</span>
                  <span className="font-medium">{item.maintenance}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === 'operational' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {item.status}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderTraining = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {trainingPrograms.map((program, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {program.duration}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      program.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      program.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {program.level}
                    </span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{program.sessions}</div>
                  <div className="text-xs text-gray-600">Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{program.students}</div>
                  <div className="text-xs text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{program.completion}%</div>
                  <div className="text-xs text-gray-600">Completion</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">{program.nextStart}</div>
                  <div className="text-xs text-gray-600">Next Start</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Enroll Now
                </button>
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  View Details
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderContent = () => {
    switch(activeView) {
      case 'dashboard': return renderDashboard()
      case 'stations': return renderStations()
      case 'equipment': return renderEquipment()
      case 'training': return renderTraining()
      default: return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Modern Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-green-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <TargetIcon className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Skill Laboratory</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Advanced clinical skills training facility with state-of-the-art simulation technology
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Hands-On Training
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Expert Supervision
                </div>
              </div>
            </div>
            
            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-blue-600">8</div>
                <div className="text-sm text-gray-700">Skill Stations</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-green-600">142</div>
                <div className="text-sm text-gray-700">Active Students</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-purple-600">87%</div>
                <div className="text-sm text-gray-700">Equipment Usage</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-orange-600">93%</div>
                <div className="text-sm text-gray-700">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-lg">
        <div className="responsive-container-full">
          <div className="flex justify-center">
            {views.map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id)}
                className={`flex items-center justify-center gap-2 px-6 py-4 border-b-4 transition-all duration-300 whitespace-nowrap min-w-[120px] ${
                  activeView === view.id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{view.icon}</span>
                <span className="font-medium">{view.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Master Your Clinical Skills</h2>
          <p className="text-xl mb-8 opacity-90">Join our comprehensive training programs and enhance your medical expertise</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Training Session
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Download Training Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
