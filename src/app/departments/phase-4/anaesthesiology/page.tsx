"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2 } from "lucide-react"

export default function AnaesthesiologyPage() {
  const [activeView, setActiveView] = useState('dashboard')
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [hoveredSpecialty, setHoveredSpecialty] = useState<number | null>(null)

  const departmentInfo = {
    name: "Department of Anaesthesiology - Phase 4",
    head: "Prof. Dr. A. Islam",
    established: "2013",
    faculty: 9,
    interns: 18,
    beds: 25,
    description: "The Phase 4 Anaesthesiology program provides comprehensive training in perioperative medicine, critical care, and pain management. Interns gain expertise in anesthesia techniques, patient monitoring, and emergency resuscitation."
  }

  const specialties = [
    {
      id: 1,
      name: "General Anaesthesia",
      icon: "💉",
      description: "Comprehensive anesthesia for all surgical procedures",
      procedures: 4500,
      success: 99.8,
      color: "from-blue-400 to-blue-600",
      skills: ["Airway Management", "Regional Blocks", "GA Techniques", "Monitoring"],
      equipment: ["Anesthesia Machines", "Ventilators", "Monitors", "Infusion Pumps"]
    },
    {
      id: 2,
      name: "Cardiac Anaesthesia",
      icon: "❤️",
      description: "Specialized anesthesia for cardiac and thoracic surgery",
      procedures: 1200,
      success: 99.5,
      color: "from-red-400 to-red-600",
      skills: ["TEE", "Hemodynamic Monitoring", "Inotropes", "ECMO Support"],
      equipment: ["TEE Probes", "Swan-Ganz Catheters", "IABP", "ECMO Machine"]
    },
    {
      id: 3,
      name: "Neuro Anaesthesia",
      icon: "🧠",
      description: "Anesthesia for neurosurgical procedures",
      procedures: 800,
      success: 99.2,
      color: "from-purple-400 to-purple-600",
      skills: ["ICP Monitoring", "Neuroprotection", "Brain Relaxation", "Evoked Potentials"],
      equipment: ["ICP Monitors", "BIS Monitors", "NIRS", "EEG Machines"]
    },
    {
      id: 4,
      name: "Pediatric Anaesthesia",
      icon: "👶",
      description: "Specialized anesthesia for pediatric patients",
      procedures: 1500,
      success: 99.7,
      color: "from-green-400 to-green-600",
      skills: ["Pediatric Airway", "Fluid Management", "Pain Control", "Emergencies"],
      equipment: ["Pediatric Circuits", "Infusion Pumps", "Ventilators", "Monitors"]
    },
    {
      id: 5,
      name: "Obstetric Anaesthesia",
      icon: "🤰",
      description: "Anesthesia for obstetric and gynecologic procedures",
      procedures: 2000,
      success: 99.9,
      color: "from-pink-400 to-pink-600",
      skills: ["Spinal Anesthesia", "Epidural Analgesia", "High-Risk Pregnancy", "Emergencies"],
      equipment: ["Epidural Pumps", "Spinal Needles", "Ultrasound", "Fetal Monitors"]
    },
    {
      id: 6,
      name: "Critical Care",
      icon: "🏥",
      description: "Intensive care management of critically ill patients",
      procedures: 950,
      success: 94.0,
      color: "from-orange-400 to-orange-600",
      skills: ["Ventilator Management", "Hemodynamic Support", "Sedation", "ECMO"],
      equipment: ["ICU Ventilators", "CRRT Machines", "IABP", "ECMO"]
    }
  ]

  const team = [
    {
      id: 1,
      name: "Prof. Dr. A. Islam",
      title: "Professor & Head",
      expertise: "Cardiac & Critical Care Anaesthesia",
      experience: "22 years",
      cases: "15,000+",
      publications: 45,
      awards: ["Best Anesthesiologist 2023", "Research Excellence", "Teacher of the Year"],
      avatar: "👨‍⚕️"
    },
    {
      id: 2,
      name: "Assoc. Prof. Dr. S. Rahman",
      title: "Associate Professor",
      expertise: "Neuro & Pediatric Anaesthesia",
      experience: "18 years",
      cases: "10,000+",
      publications: 38,
      awards: ["Innovation Award", "Clinical Excellence", "Research Grant"],
      avatar: "👩‍⚕️"
    },
    {
      id: 3,
      name: "Asst. Prof. Dr. M. Ali",
      title: "Assistant Professor",
      expertise: "Obstetric & Regional Anaesthesia",
      experience: "14 years",
      cases: "8,000+",
      publications: 28,
      awards: ["Young Investigator", "Patient Safety Award", "Quality Improvement"],
      avatar: "👨‍⚕️"
    },
    {
      id: 4,
      name: "Dr. N. Khatun",
      title: "Senior Registrar",
      expertise: "General & Pain Management",
      experience: "10 years",
      cases: "5,000+",
      publications: 18,
      awards: ["Best Resident", "Quality Care", "Community Service"],
      avatar: "👩‍⚕️"
    }
  ]

  const realTimeStats = [
    { label: "Active Cases", value: 12, unit: "patients", color: "text-blue-600", icon: "🏥" },
    { label: "ORs Running", value: 8, unit: "theaters", color: "text-green-600", icon: "⚕️" },
    { label: "ICU Occupancy", value: 85, unit: "%", color: "text-orange-600", icon: "📊" },
    { label: "Pain Clinic", value: 24, unit: "visits", color: "text-purple-600", icon: "�" }
  ]

  const equipmentStatus = [
    { name: "Anesthesia Machines", total: 15, available: 12, maintenance: 3, status: "operational" },
    { name: "Ventilators", total: 20, available: 18, maintenance: 2, status: "operational" },
    { name: "Monitors", total: 35, available: 33, maintenance: 2, status: "operational" },
    { name: "Ultrasound Machines", total: 8, available: 7, maintenance: 1, status: "operational" }
  ]

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Real-time Stats Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {realTimeStats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">{stat.icon}</div>
              <div className={`w-3 h-3 rounded-full ${stat.color === 'text-blue-600' ? 'bg-blue-600' : stat.color === 'text-green-600' ? 'bg-green-600' : stat.color === 'text-orange-600' ? 'bg-orange-600' : 'bg-red-600'} animate-pulse`}></div>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 mb-1">{stat.unit}</div>
            <div className={`text-sm font-medium ${stat.color}`}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Department Overview */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{departmentInfo.faculty}</div>
            <div className="text-sm text-gray-600">Faculty</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{departmentInfo.interns}</div>
            <div className="text-sm text-gray-600">Interns</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Bed className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{departmentInfo.beds}</div>
            <div className="text-sm text-gray-600">Beds</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{departmentInfo.established}</div>
            <div className="text-sm text-gray-600">Established</div>
          </div>
        </div>
      </div>

      {/* Equipment Status */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Equipment Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {equipmentStatus.map((equipment, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-800 mb-3">{equipment.name}</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total:</span>
                  <span className="font-medium">{equipment.total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600">Available:</span>
                  <span className="font-medium text-green-600">{equipment.available}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-orange-600">Maintenance:</span>
                  <span className="font-medium text-orange-600">{equipment.maintenance}</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  {equipment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSpecialties = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {specialties.map((specialty) => (
        <div key={specialty.id}
             className={`relative transform transition-all duration-300 cursor-pointer ${
               hoveredSpecialty === specialty.id ? 'scale-105 z-10' : 'hover:scale-102'
             }`}
             onMouseEnter={() => setHoveredSpecialty(specialty.id)}
             onMouseLeave={() => setHoveredSpecialty(null)}>
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${specialty.color}`}></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{specialty.icon}</div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">{specialty.success}%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">{specialty.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{specialty.description}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Procedures:</span>
                  <span className="font-medium">{specialty.procedures.toLocaleString()}</span>
                </div>
                
                {hoveredSpecialty === specialty.id && (
                  <div className="space-y-3 pt-3 border-t border-gray-200">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {specialty.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Equipment:</h4>
                      <div className="flex flex-wrap gap-1">
                        {specialty.equipment.map((equipment, equipmentIndex) => (
                          <span key={equipmentIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                            {equipment}
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
      ))}
    </div>
  )

  const renderTeam = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {team.map((member, index) => (
        <div key={member.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl">
                {member.avatar}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.title}</p>
                <p className="text-sm text-gray-600">{member.expertise}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-800">{member.experience}</div>
                <div className="text-xs text-gray-600">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">{member.cases}</div>
                <div className="text-xs text-gray-600">Cases</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">{member.publications}</div>
                <div className="text-xs text-gray-600">Publications</div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {member.awards.map((award, awardIndex) => (
                  <span key={awardIndex} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                    {award}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300">
                View Profile
              </button>
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300">
                Contact
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const views = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'specialties', label: 'Specialties', icon: '🏥' },
    { id: 'team', label: 'Team', icon: '👥' }
  ]

  const renderContent = () => {
    switch(activeView) {
      case 'dashboard': return renderDashboard()
      case 'specialties': return renderSpecialties()
      case 'team': return renderTeam()
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
                  <span className="text-6xl">💉</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">{departmentInfo.name}</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Excellence in Perioperative Medicine, Critical Care & Pain Management
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Patient Safety First
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  24/7 Critical Care
                </div>
              </div>
            </div>
            
            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-blue-600">{departmentInfo.faculty}</div>
                <div className="text-sm text-gray-700">Faculty</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-green-600">{departmentInfo.interns}</div>
                <div className="text-sm text-gray-700">Interns</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-purple-600">{departmentInfo.beds}</div>
                <div className="text-sm text-gray-700">Beds</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-orange-600">{departmentInfo.established}</div>
                <div className="text-sm text-gray-700">Established</div>
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

      {/* Department Head Spotlight */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">{departmentInfo.head}</h3>
                <p className="text-lg opacity-90">Professor & Head of Department</p>
                <p className="opacity-80">Leading excellence in anesthesia care and patient safety</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
