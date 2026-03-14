"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2 } from "lucide-react"

export default function OtorhinolaryngologyPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const departmentInfo = {
    name: "Department of Otorhinolaryngology - Phase 4",
    head: "Prof. Dr. R. Chowdhury",
    established: "2013",
    faculty: 8,
    interns: 16,
    beds: 40,
    description: "The Phase 4 Otorhinolaryngology program provides comprehensive training in ear, nose, and throat disorders, head and neck surgery, and audiology. Interns gain expertise in managing complex ENT conditions and surgical procedures."
  }

  const specialties = [
    {
      id: 1,
      title: "Otology & Neurotology",
      icon: "👂",
      description: "Advanced ear surgery and hearing disorders",
      color: "from-blue-400 to-blue-600",
      procedures: ["Cochlear Implants", "Stapedectomy", "Tympanoplasty", "Mastoidectomy"],
      technology: ["Microsurgery", "Hearing Aids", "Balance Testing", "Imaging Systems"],
      outcomes: ["95% Success Rate", "Hearing Improvement", "Balance Restoration", "Quality of Life"]
    },
    {
      id: 2,
      title: "Rhinology & Endoscopic Surgery",
      icon: "👃",
      description: "Nasal and sinus disorders with endoscopic treatment",
      color: "from-green-400 to-green-600",
      procedures: ["FESS", "Septoplasty", "Rhinoplasty", "Sinus Surgery"],
      technology: ["Endoscopic Systems", "Navigation", "Imaging", "Laser Surgery"],
      outcomes: ["98% Success Rate", "Breathing Improvement", "Sinus Clearance", "Aesthetic Enhancement"]
    },
    {
      id: 3,
      title: "Laryngology & Voice Disorders",
      icon: "🎤",
      description: "Voice, swallowing, and airway disorders",
      color: "from-purple-400 to-purple-600",
      procedures: ["Laryngoscopy", "Voice Surgery", "Swallowing Therapy", "Airway Reconstruction"],
      technology: ["Stroboscopy", "Voice Analysis", "Laser Systems", "Rehabilitation"],
      outcomes: ["92% Success Rate", "Voice Restoration", "Swallowing Improvement", "Airway Patency"]
    },
    {
      id: 4,
      title: "Head & Neck Surgery",
      icon: "🦴",
      description: "Complex head and neck oncologic surgery",
      color: "from-red-400 to-red-600",
      procedures: ["Thyroidectomy", "Neck Dissection", "Tumor Resection", "Reconstruction"],
      technology: ["Robotic Surgery", "Microvascular", "3D Planning", "Navigation"],
      outcomes: ["90% Success Rate", "Tumor Control", "Function Preservation", "Reconstruction"]
    },
    {
      id: 5,
      title: "Pediatric ENT",
      icon: "👶",
      description: "Specialized ENT care for children",
      color: "from-yellow-400 to-yellow-600",
      procedures: ["Adenoidectomy", "Tonsillectomy", "Tube Insertion", "Congenital Surgery"],
      technology: ["Pediatric Instruments", "Monitoring", "Anesthesia", "Imaging"],
      outcomes: ["96% Success Rate", "Infection Control", "Hearing Improvement", "Development Support"]
    },
    {
      id: 6,
      title: "Audiology & Speech Therapy",
      icon: "🔊",
      description: "Comprehensive hearing and speech rehabilitation",
      color: "from-indigo-400 to-indigo-600",
      procedures: ["Hearing Tests", "Speech Therapy", "Balance Therapy", "Rehabilitation"],
      technology: ["Audiometry", "Speech Analysis", "Vestibular Testing", "Hearing Aids"],
      outcomes: ["94% Success Rate", "Communication Improvement", "Balance Restoration", "Social Integration"]
    }
  ]

  const faculty = [
    {
      id: 1,
      name: "Prof. Dr. R. Chowdhury",
      title: "Professor & Head",
      expertise: "Otology & Neurotology",
      experience: "22 years",
      publications: 48,
      awards: ["Best ENT Surgeon 2023", "Research Excellence", "International Speaker"],
      image: "/faculty/r-chowdhury.jpg"
    },
    {
      id: 2,
      name: "Assoc. Prof. Dr. S. Islam",
      title: "Associate Professor",
      expertise: "Rhinology & Endoscopic Surgery",
      experience: "18 years",
      publications: 36,
      awards: ["Innovation Award", "Teaching Excellence", "Clinical Research"],
      image: "/faculty/s-islam.jpg"
    },
    {
      id: 3,
      name: "Asst. Prof. Dr. M. Rahman",
      title: "Assistant Professor",
      expertise: "Head & Neck Surgery",
      experience: "14 years",
      publications: 28,
      awards: ["Surgical Excellence", "Patient Care Award", "Research Grant"],
      image: "/faculty/m-rahman.jpg"
    },
    {
      id: 4,
      name: "Dr. N. Khatun",
      title: "Senior Registrar",
      expertise: "Laryngology & Voice Disorders",
      experience: "10 years",
      publications: 18,
      awards: ["Young Investigator", "Clinical Excellence", "Community Service"],
      image: "/faculty/n-khatun.jpg"
    }
  ]

  const technologies = [
    {
      name: "Endoscopic Navigation System",
      description: "Advanced 3D navigation for precise sinus and skull base surgery",
      icon: "🧭",
      features: ["Real-time Tracking", "3D Visualization", "Precision Guidance", "Safety Monitoring"]
    },
    {
      name: "Cochlear Implant Technology",
      description: "State-of-the-art hearing restoration solutions",
      icon: "🎧",
      features: ["Digital Processing", "Wireless Connectivity", "Custom Programming", "Bilateral Support"]
    },
    {
      name: "Robotic Surgery System",
      description: "Minimally invasive robotic head and neck surgery",
      icon: "🤖",
      features: ["3D Vision", "Precise Control", "Minimally Invasive", "Enhanced Recovery"]
    },
    {
      name: "Voice Analysis Laboratory",
      description: "Comprehensive voice and speech assessment tools",
      icon: "📊",
      features: ["Acoustic Analysis", "Stroboscopy", "Voice Therapy", "Performance Metrics"]
    }
  ]

  const stats = [
    { value: "3,500+", label: "Surgeries Annually", icon: "🔬", color: "bg-blue-500" },
    { value: "98%", label: "Success Rate", icon: "✓", color: "bg-green-500" },
    { value: "15,000+", label: "Patients Treated", icon: "👥", color: "bg-purple-500" },
    { value: "50+", label: "Research Papers", icon: "📚", color: "bg-orange-500" }
  ]

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.color} text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300`}>
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm opacity-90">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Department Introduction */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white">
            <Hospital className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">About Our Department</h2>
            <p className="text-gray-600">{departmentInfo.description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl text-center">
            <User className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{departmentInfo.faculty}</div>
            <div className="text-sm text-gray-600">Faculty</div>
          </div>
          <div className="bg-white p-4 rounded-xl text-center">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{departmentInfo.interns}</div>
            <div className="text-sm text-gray-600">Interns</div>
          </div>
          <div className="bg-white p-4 rounded-xl text-center">
            <Bed className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{departmentInfo.beds}</div>
            <div className="text-sm text-gray-600">Beds</div>
          </div>
          <div className="bg-white p-4 rounded-xl text-center">
            <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">{departmentInfo.established}</div>
            <div className="text-sm text-gray-600">Established</div>
          </div>
        </div>
      </div>

      {/* Department Head */}
      <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <CardContent className="p-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{departmentInfo.head}</h3>
              <p className="text-lg opacity-90 mb-2">Professor & Head of Department</p>
              <p className="opacity-80">Leading excellence in ENT care and surgical innovation</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSpecialties = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {specialties.map((specialty) => (
        <Card 
          key={specialty.id}
          className={`overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
            hoveredCard === specialty.id ? 'ring-4 ring-blue-400' : ''
          }`}
          onMouseEnter={() => setHoveredCard(specialty.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className={`h-2 bg-gradient-to-r ${specialty.color}`}></div>
          <CardContent className="p-6">
            <div className="text-4xl mb-4">{specialty.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{specialty.title}</h3>
            <p className="text-gray-600 mb-4">{specialty.description}</p>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Procedures:</h4>
                <div className="flex flex-wrap gap-2">
                  {specialty.procedures.slice(0, 3).map((proc, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {proc}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Outcomes:</h4>
                <div className="text-sm text-green-600 font-medium">
                  {specialty.outcomes[0]}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderFaculty = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {faculty.map((member) => (
        <Card key={member.id} className="hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                <User className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.title}</p>
                <p className="text-sm text-gray-600 mb-3">{member.expertise}</p>
                <div className="flex flex-wrap gap-2">
                  {member.awards.slice(0, 2).map((award, index) => (
                    <span key={index} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
              <div className="bg-blue-50 p-3 rounded-xl">
                <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <div className="text-sm font-bold text-blue-600">{member.experience}</div>
                <div className="text-xs text-gray-600">Experience</div>
              </div>
              <div className="bg-green-50 p-3 rounded-xl">
                <FileText className="w-5 h-5 text-green-600 mx-auto mb-1" />
                <div className="text-sm font-bold text-green-600">{member.publications}</div>
                <div className="text-xs text-gray-600">Publications</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-xl">
                <Award className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                <div className="text-sm font-bold text-purple-600">{member.awards.length}</div>
                <div className="text-xs text-gray-600">Awards</div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                View Profile
              </button>
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Contact
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderTechnology = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {technologies.map((tech, index) => (
        <Card key={index} className="hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                {tech.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Key Features:</h4>
              <div className="grid grid-cols-2 gap-2">
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const sections = [
    { id: 'overview', label: 'Overview', icon: '🏥' },
    { id: 'specialties', label: 'Specialties', icon: '👂' },
    { id: 'faculty', label: 'Faculty', icon: '👨‍⚕️' },
    { id: 'technology', label: 'Technology', icon: '🔬' }
  ]

  const renderContent = () => {
    switch(activeSection) {
      case 'overview': return renderOverview()
      case 'specialties': return renderSpecialties()
      case 'faculty': return renderFaculty()
      case 'technology': return renderTechnology()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Modern Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="relative responsive-container-full py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <span className="text-6xl">👂</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 animate-fade-in">
              {departmentInfo.name}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
              Advanced ENT Care, Surgical Excellence & Innovation
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                Clinical Excellence
              </div>
              <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                Surgical Innovation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Navigation */}
      <div className="bg-white shadow-lg sticky top-0 z-40">
        <div className="responsive-container-full">
          <div className="flex justify-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center justify-center gap-2 px-6 py-4 border-b-4 transition-all duration-300 whitespace-nowrap min-w-[100px] ${
                  activeSection === section.id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="font-medium hidden md:inline">{section.label}</span>
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

      {/* Modern Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative responsive-container-full text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Excellence in ENT Care</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our expert team provides comprehensive care for all ear, nose, and throat conditions with advanced technology and compassionate service
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Book Appointment
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
