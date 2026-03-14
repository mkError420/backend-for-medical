"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2 } from "lucide-react"

export default function UrologyPage() {
  const [activeTimeline, setActiveTimeline] = useState('patient-journey')
  const [selectedModule, setSelectedModule] = useState<number | null>(null)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const departmentInfo = {
    name: "Department of Urology - Phase 4",
    head: "Prof. Dr. K. Ahmed",
    established: "2013",
    faculty: 7,
    interns: 14,
    beds: 35,
    description: "The Phase 4 Urology program provides comprehensive training in endourology, laparoscopic surgery, andrology, and urologic oncology. Interns gain expertise in minimally invasive procedures and advanced urologic care."
  }

  const timelineEvents = [
    {
      id: 'patient-journey',
      title: 'Patient Journey',
      icon: '🏥',
      description: 'Complete patient experience from consultation to recovery',
      color: 'from-blue-400 to-blue-600',
      steps: ['Initial Consultation', 'Diagnostic Workup', 'Treatment Planning', 'Procedure', 'Follow-up Care']
    },
    {
      id: 'surgical-evolution',
      title: 'Surgical Evolution',
      icon: '🔬',
      description: 'Advancement of urologic surgical techniques',
      color: 'from-purple-400 to-purple-600',
      steps: ['Open Surgery', 'Laparoscopy', 'Endoscopy', 'Robotics', 'Future Innovations']
    },
    {
      id: 'research-milestones',
      title: 'Research Milestones',
      icon: '🔍',
      description: 'Key research achievements and breakthroughs',
      color: 'from-green-400 to-green-600',
      steps: ['Clinical Trials', 'Publications', 'Innovations', 'Collaborations', 'Impact']
    },
    {
      id: 'training-progression',
      title: 'Training Progression',
      icon: '📚',
      description: 'Intern development and skill acquisition',
      color: 'from-orange-400 to-orange-600',
      steps: ['Basic Skills', 'Advanced Procedures', 'Research', 'Leadership', 'Excellence']
    }
  ]

  const interactiveModules = [
    {
      id: 1,
      title: 'Endourology Suite',
      category: 'Clinical Excellence',
      icon: '🔬',
      description: 'Advanced minimally invasive urologic procedures',
      features: ['Laser Lithotripsy', 'Ureteroscopy', 'PCNL', 'Flexible Cystoscopy'],
      stats: { procedures: 1200, success: 96, satisfaction: 98 },
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Laparoscopic Center',
      category: 'Surgical Innovation',
      icon: '🤖',
      description: 'Minimally invasive surgical solutions',
      features: ['Nephrectomy', 'Pyeloplasty', 'Prostatectomy', 'Adrenalectomy'],
      stats: { procedures: 450, success: 94, satisfaction: 97 },
      color: 'bg-purple-500'
    },
    {
      id: 3,
      title: 'Andrology Clinic',
      category: 'Specialized Care',
      icon: '👨',
      description: 'Male reproductive health and wellness',
      features: ['Infertility Treatment', 'ED Management', 'Hormone Therapy', 'Microsurgery'],
      stats: { procedures: 800, success: 92, satisfaction: 95 },
      color: 'bg-green-500'
    },
    {
      id: 4,
      title: 'Urologic Oncology',
      category: 'Cancer Care',
      icon: '🎗️',
      description: 'Comprehensive cancer treatment and management',
      features: ['Prostate Cancer', 'Bladder Cancer', 'Kidney Cancer', 'Testicular Cancer'],
      stats: { procedures: 350, success: 89, satisfaction: 94 },
      color: 'bg-red-500'
    },
    {
      id: 5,
      title: 'Pediatric Urology',
      category: 'Children\'s Health',
      icon: '👶',
      description: 'Specialized urologic care for children',
      features: ['Congenital Anomalies', 'Voiding Dysfunction', 'UTI Management', 'Surgery'],
      stats: { procedures: 600, success: 97, satisfaction: 98 },
      color: 'bg-yellow-500'
    },
    {
      id: 6,
      title: 'Female Urology',
      category: 'Women\'s Health',
      icon: '👩',
      description: 'Female-specific urologic conditions',
      features: ['Incontinence', 'Pelvic Floor', 'UTI Prevention', 'Reconstruction'],
      stats: { procedures: 900, success: 93, satisfaction: 96 },
      color: 'bg-pink-500'
    }
  ]

  const teamMembers = [
    {
      id: 1,
      name: 'Prof. Dr. K. Ahmed',
      role: 'Professor & Head',
      expertise: 'Endourology & Laparoscopy',
      experience: '20 years',
      achievements: ['Pioneer in Laser Surgery', '1000+ Procedures', 'International Recognition'],
      avatar: '👨‍⚕️'
    },
    {
      id: 2,
      name: 'Assoc. Prof. Dr. S. Rahman',
      role: 'Associate Professor',
      expertise: 'Urologic Oncology',
      experience: '16 years',
      achievements: ['Cancer Research Expert', 'Clinical Trials Lead', 'Publications'],
      avatar: '👩‍⚕️'
    },
    {
      id: 3,
      name: 'Asst. Prof. Dr. M. Karim',
      role: 'Assistant Professor',
      expertise: 'Andrology & Infertility',
      experience: '12 years',
      achievements: ['Innovation Award', 'Patient Care Excellence', 'Research Grants'],
      avatar: '👨‍⚕️'
    },
    {
      id: 4,
      name: 'Dr. N. Sultana',
      role: 'Senior Registrar',
      expertise: 'Female & Pediatric Urology',
      experience: '8 years',
      achievements: ['Women\'s Health Advocate', 'Teaching Excellence', 'Community Outreach'],
      avatar: '👩‍⚕️'
    }
  ]

  const innovationHub = [
    {
      title: 'Robotic Surgery Program',
      description: 'State-of-the-art da Vinci robotic system',
      impact: '95% precision improvement',
      status: 'Active',
      progress: 85
    },
    {
      title: '3D Printing Laboratory',
      description: 'Custom surgical models and implants',
      impact: '40% reduction in surgical time',
      status: 'Development',
      progress: 60
    },
    {
      title: 'AI Diagnostic System',
      description: 'Machine learning for early detection',
      impact: '30% improved accuracy',
      status: 'Pilot',
      progress: 45
    },
    {
      title: 'Telemedicine Platform',
      description: 'Remote consultations and follow-ups',
      impact: '50% increased accessibility',
      status: 'Active',
      progress: 75
    }
  ]

  const renderTimeline = () => (
    <div className="space-y-8">
      {/* Mobile: Stacked layout, Medium & Large: 2 cards per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {timelineEvents.map((event, index) => (
          <div key={event.id}>
            {/* Mobile: Timeline Node on top, Desktop: Hidden */}
            <div className="flex md:hidden w-full justify-center mb-4">
              <div className="relative">
                <div className="w-8 h-8 bg-white border-4 border-gray-600 rounded-full shadow-lg z-10"></div>
                {activeTimeline === event.id && (
                  <div className="absolute inset-0 w-8 h-8 bg-gray-600 rounded-full animate-ping"></div>
                )}
              </div>
            </div>
            
            {/* Content Card */}
            <div className="text-gray-800 p-4 md:p-6 rounded-2xl shadow-xl md:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden h-full"
                 style={{backgroundColor: '#DDE9E0'}}
                 onClick={() => setActiveTimeline(event.id)}>
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-full -mr-8 -mt-8"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/30 rounded-full -ml-6 -mb-6"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center mb-4">
                  <span className="text-3xl md:text-2xl mb-2">{event.icon}</span>
                  <h3 className="text-lg md:text-lg font-bold">{event.title}</h3>
                  <div className="w-12 h-1 bg-gray-600 rounded-full mt-2"></div>
                </div>
                <p className="text-sm md:text-sm opacity-80 mb-3 md:mb-3 text-center">{event.description}</p>
                
                <div className="space-y-1 md:space-y-1">
                  {event.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center justify-center gap-2 text-xs md:text-sm">
                      <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></div>
                      <span className="font-medium text-center">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderModules = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {interactiveModules.map((module) => (
        <div key={module.id}
             className={`relative transform transition-all duration-300 cursor-pointer ${
               selectedModule === module.id ? 'scale-105 z-10' : 'hover:scale-102'
             }`}
             onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}>
          <div className="text-gray-800 p-1 rounded-xl md:rounded-2xl" style={{backgroundColor: '#DDE9E0'}}>
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-600 rounded-lg md:rounded-xl flex items-center justify-center text-white text-xl md:text-2xl">
                  {module.icon}
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hidden sm:inline">
                  {module.category}
                </span>
              </div>
              
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">{module.title}</h3>
              <p className="text-sm text-gray-600 mb-3 md:mb-4 line-clamp-2">{module.description}</p>
              
              <div className="grid grid-cols-3 gap-2 mb-3 md:mb-4">
                <div className="text-center">
                  <div className="text-base md:text-lg font-bold text-gray-800">{module.stats.procedures}</div>
                  <div className="text-xs text-gray-600">Procedures</div>
                </div>
                <div className="text-center">
                  <div className="text-base md:text-lg font-bold text-green-600">{module.stats.success}%</div>
                  <div className="text-xs text-gray-600">Success</div>
                </div>
                <div className="text-center">
                  <div className="text-base md:text-lg font-bold text-blue-600">{module.stats.satisfaction}%</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>
              </div>

              {selectedModule === module.id && (
                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Features:</h4>
                  <div className="space-y-1">
                    {module.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderTeam = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {teamMembers.map((member, index) => (
        <div key={member.id} className="transform transition-all duration-300">
          <div className="p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl" style={{backgroundColor: '#DDE9E0'}}>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-3xl md:text-4xl flex-shrink-0">
                {member.avatar}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm md:text-base">{member.role}</p>
                <p className="text-sm text-gray-600">{member.expertise}</p>
              </div>
            </div>
            
            <div className="mb-4 md:mb-6">
              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 text-sm text-gray-600 mb-3 md:mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{member.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>{member.achievements.length} Awards</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 md:gap-2">
                {member.achievements.map((achievement, achievementIndex) => (
                  <span key={achievementIndex} className="px-2 py-1 bg-white/70 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <button className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-3 md:px-4 py-2 rounded-lg md:rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 text-sm">
                View Profile
              </button>
              <button className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white px-3 md:px-4 py-2 rounded-lg md:rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 text-sm">
                Contact
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderInnovation = () => (
    <div className="space-y-6">
      {innovationHub.map((innovation, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="flex items-center">
            <div className="w-2 h-full bg-gradient-to-b from-blue-400 to-purple-600"></div>
            <div className="flex-1 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{innovation.title}</h3>
                  <p className="text-sm text-gray-600">{innovation.description}</p>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    innovation.status === 'Active' ? 'bg-green-100 text-green-700' :
                    innovation.status === 'Development' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {innovation.status}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm font-bold text-blue-600">{innovation.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full transition-all duration-500"
                       style={{width: `${innovation.progress}%`}}></div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">{innovation.impact}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const contentSections = [
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'modules', label: 'Modules', icon: '🔧' },
    { id: 'team', label: 'Team', icon: '👥' },
    { id: 'innovation', label: 'Innovation', icon: '💡' }
  ]

  const renderContent = () => {
    switch(activeTimeline) {
      case 'timeline': return renderTimeline()
      case 'modules': return renderModules()
      case 'team': return renderTeam()
      case 'innovation': return renderInnovation()
      default: return renderTimeline()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Unique Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-green-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-white/80 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <span className="text-5xl">🏥</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">{departmentInfo.name}</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Pioneering Urologic Excellence Through Innovation and Compassionate Care
              </p>
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

      {/* Unique Navigation */}
      <div className="bg-white shadow-lg">
        <div className="responsive-container-full">
          <div className="flex justify-center">
            {contentSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTimeline(section.id)}
                className={`flex items-center justify-center gap-2 px-6 py-4 border-b-4 transition-all duration-300 whitespace-nowrap min-w-[120px] ${
                  activeTimeline === section.id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="font-medium">{section.label}</span>
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
                <p className="opacity-80">Leading innovation in urologic care and surgical excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
