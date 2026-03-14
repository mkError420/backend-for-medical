"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function WordPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-blue-500 to-blue-600' },
    { id: 'programs', label: 'Programs', icon: '🎓', color: 'from-purple-500 to-purple-600' },
    { id: 'facilities', label: 'Facilities', icon: '🏛️', color: 'from-green-500 to-green-600' },
    { id: 'resources', label: 'Resources', icon: '📚', color: 'from-orange-500 to-orange-600' },
    { id: 'achievements', label: 'Achievements', icon: '🏆', color: 'from-red-500 to-red-600' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️', color: 'from-indigo-500 to-indigo-600' }
  ]

  const programs = [
    {
      name: "Medical Terminology",
      description: "Comprehensive medical vocabulary and terminology training",
      duration: "6 weeks",
      level: "Intermediate",
      students: 45,
      instructor: "Dr. Sarah Johnson",
      schedule: "Mon, Wed, Fri - 2:00 PM to 4:00 PM",
      topics: ["Anatomy terms", "Physiological terms", "Pharmacological terms", "Clinical abbreviations"],
      assessment: "Weekly quizzes, Final examination",
      certification: "Certificate of Completion"
    },
    {
      name: "Medical Writing",
      description: "Professional medical writing and documentation skills",
      duration: "8 weeks",
      level: "Advanced",
      students: 32,
      instructor: "Dr. Michael Chen",
      schedule: "Tue, Thu - 3:00 PM to 5:00 PM",
      topics: ["Patient records", "Medical reports", "Research papers", "Clinical documentation"],
      assessment: "Writing assignments, Portfolio review",
      certification: "Professional Writing Certificate"
    },
    {
      name: "Health Communication",
      description: "Effective communication in healthcare settings",
      duration: "4 weeks",
      level: "Beginner",
      students: 58,
      instructor: "Dr. Lisa Anderson",
      schedule: "Mon, Wed - 10:00 AM to 12:00 PM",
      topics: ["Patient counseling", "Interprofessional communication", "Health literacy", "Cultural competence"],
      assessment: "Role-playing exercises, Case studies",
      certification: "Communication Skills Certificate"
    },
    {
      name: "Research Methodology",
      description: "Medical research design and statistical analysis",
      duration: "10 weeks",
      level: "Advanced",
      students: 28,
      instructor: "Dr. Robert Wilson",
      schedule: "Sat - 9:00 AM to 1:00 PM",
      topics: ["Research design", "Statistical analysis", "Data interpretation", "Publication ethics"],
      assessment: "Research project, Statistical analysis",
      certification: "Research Methods Certificate"
    },
    {
      name: "Clinical Ethics",
      description: "Ethical principles and decision-making in healthcare",
      duration: "6 weeks",
      level: "Intermediate",
      students: 41,
      instructor: "Dr. Emily Taylor",
      schedule: "Tue, Thu - 1:00 PM to 3:00 PM",
      topics: ["Patient autonomy", "Informed consent", "End-of-life care", "Professional boundaries"],
      assessment: "Case analysis, Ethical dilemmas",
      certification: "Medical Ethics Certificate"
    },
    {
      name: "Public Health",
      description: "Population health and disease prevention strategies",
      duration: "8 weeks",
      level: "Intermediate",
      students: 36,
      instructor: "Dr. David Thompson",
      schedule: "Mon, Wed, Fri - 11:00 AM to 1:00 PM",
      topics: ["Epidemiology", "Health promotion", "Disease prevention", "Global health"],
      assessment: "Community project, Health campaign design",
      certification: "Public Health Certificate"
    }
  ]

  const facilities = [
    {
      name: "Word Processing Lab",
      description: "Modern computer lab with advanced word processing software",
      capacity: 30,
      equipment: ["Computers", "Printers", "Scanners", "Projectors"],
      features: ["High-speed internet", "Office software", "Reference materials", "Technical support"],
      availability: "Monday to Friday, 8:00 AM to 8:00 PM",
      location: "Building A, Room 201"
    },
    {
      name: "Research Library",
      description: "Comprehensive medical literature and reference materials",
      capacity: 50,
      equipment: ["Computers", "Printers", "Microfilm readers", "Digital databases"],
      features: ["Medical journals", "Textbooks", "Research databases", "Study areas"],
      availability: "24/7 access for students",
      location: "Library Building, 2nd Floor"
    },
    {
      name: "Conference Room",
      description: "Professional space for seminars and presentations",
      capacity: 100,
      equipment: ["Projector", "Sound system", "Video conferencing", "Whiteboards"],
      features: ["Presentation tools", "Recording equipment", "Comfortable seating", "Climate control"],
      availability: "By reservation",
      location: "Building B, Room 105"
    },
    {
      name: "Study Areas",
      description: "Quiet spaces for individual and group study",
      capacity: 80,
      equipment: ["Desks", "Chairs", "Power outlets", "WiFi"],
      features: ["Quiet zones", "Group study rooms", "Reference materials", "Refreshment area"],
      availability: "24/7 access",
      location: "Multiple locations"
    },
    {
      name: "Multimedia Center",
      description: "Advanced multimedia production and editing facilities",
      capacity: 20,
      equipment: ["Video cameras", "Audio equipment", "Editing software", "Green screen"],
      features: ["Video production", "Audio recording", "Podcast studio", "Live streaming"],
      availability: "Monday to Friday, 9:00 AM to 6:00 PM",
      location: "Media Building, Room 301"
    },
    {
      name: "Assessment Center",
      description: "Modern testing and examination facilities",
      capacity: 40,
      equipment: ["Computers", "Secure testing software", "Surveillance", "Proctoring stations"],
      features: ["Secure environment", "Multiple test formats", "Accommodations", "Quick results"],
      availability: "By appointment",
      location: "Testing Center, Ground Floor"
    }
  ]

  const resources = [
    {
      category: "Digital Resources",
      items: [
        { name: "Medical Databases", type: "Online", access: "24/7", description: "Access to PubMed, MEDLINE, and other medical databases" },
        { name: "E-Books Library", type: "Digital", access: "24/7", description: "Comprehensive collection of medical textbooks and references" },
        { name: "Video Lectures", type: "Multimedia", access: "On-demand", description: "Recorded lectures and educational videos" },
        { name: "Online Courses", type: "E-learning", access: "Self-paced", description: "Interactive online courses and modules" },
        { name: "Research Tools", type: "Software", access: "Campus", description: "Statistical analysis and research software" }
      ]
    },
    {
      category: "Physical Resources",
      items: [
        { name: "Medical Library", type: "Physical", access: "24/7", description: "Extensive collection of medical books and journals" },
        { name: "Study Materials", type: "Print", access: "Library hours", description: "Textbooks, handouts, and reference materials" },
        { name: "Computer Labs", type: "Facility", access: "Scheduled", description: "Computer labs with specialized software" },
        { name: "Printing Services", type: "Service", access: "Business hours", description: "Printing, scanning, and copying services" },
        { name: "Study Rooms", type: "Space", access: "Reservation", description: "Private study rooms for individuals and groups" }
      ]
    },
    {
      category: "Support Services",
      items: [
        { name: "Academic Advising", type: "Service", access: "By appointment", description: "Personalized academic guidance and planning" },
        { name: "Writing Center", type: "Support", access: "Walk-in", description: "Writing assistance and feedback services" },
        { name: "Technical Support", type: "Service", access: "24/7", description: "IT support for software and hardware issues" },
        { name: "Research Assistance", type: "Support", access: "Scheduled", description: "Guidance for research projects and publications" },
        { name: "Career Services", type: "Service", access: "Business hours", description: "Career counseling and job placement assistance" }
      ]
    }
  ]

  const achievements = [
    {
      title: "Excellence in Medical Education",
      description: "Recognized for outstanding medical education programs and student outcomes",
      year: "2024",
      category: "Educational Excellence",
      awardingBody: "National Medical Education Board",
      impact: "Improved student performance and career readiness"
    },
    {
      title: "Research Innovation Award",
      description: "Awarded for innovative research methodologies and publications",
      year: "2023",
      category: "Research Achievement",
      awardingBody: "International Medical Research Association",
      impact: "Advanced medical research capabilities and collaborations"
    },
    {
      title: "Community Health Impact",
      description: "Recognized for significant contributions to community health initiatives",
      year: "2023",
      category: "Community Service",
      awardingBody: "Public Health Ministry",
      impact: "Improved health outcomes in local communities"
    },
    {
      title: "Technology Integration",
      description: "Excellence in integrating technology into medical education",
      year: "2022",
      category: "Innovation",
      awardingBody: "Medical Technology Association",
      impact: "Enhanced learning experience and accessibility"
    },
    {
      title: "Student Satisfaction Award",
      description: "Highest student satisfaction ratings among medical institutions",
      year: "2024",
      category: "Student Experience",
      awardingBody: "Student Medical Association",
      impact: "Positive learning environment and student support"
    },
    {
      title: "International Collaboration",
      description: "Successful partnerships with international medical institutions",
      year: "2023",
      category: "Global Partnership",
      awardingBody: "World Medical Education Council",
      impact: "Global learning opportunities and cultural exchange"
    }
  ]

  const galleryImages = [
    {
      id: 1,
      title: "Word Processing Lab",
      category: "facility",
      description: "Modern computer lab with advanced word processing equipment",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Research Library",
      category: "facility",
      description: "Comprehensive medical literature and reference materials",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Conference Room",
      category: "facility",
      description: "Professional space for seminars and presentations",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Study Areas",
      category: "facility",
      description: "Quiet spaces for individual and group study",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Multimedia Center",
      category: "facility",
      description: "Advanced multimedia production and editing facilities",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Assessment Center",
      category: "facility",
      description: "Modern testing and examination facilities",
      image: "/api/placeholder/400/300"
    }
  ]

  const performanceMetrics = [
    {
      label: "Total Programs",
      value: 6,
      unit: "programs",
      trend: "up",
      icon: GraduationCap,
      color: "text-blue-600"
    },
    {
      label: "Active Students",
      value: 240,
      unit: "students",
      trend: "up",
      icon: Users,
      color: "text-purple-600"
    },
    {
      label: "Success Rate",
      value: 96,
      unit: "%",
      trend: "stable",
      icon: Target,
      color: "text-green-600"
    },
    {
      label: "Facilities",
      value: 6,
      unit: "centers",
      trend: "stable",
      icon: Building,
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
            Word Education Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Educational Programs</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">240</div>
              <div className="text-sm text-gray-600">Active Students</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">96%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <GraduationCap className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">6</div>
            <div className="text-sm opacity-90">Programs</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">240</div>
            <div className="text-sm opacity-90">Students</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <Award className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">96%</div>
            <div className="text-sm opacity-90">Success Rate</div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Programs */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            Featured Programs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {programs.slice(0, 3).map((program, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{program.name}</h4>
                  <p className="text-sm text-gray-600">{program.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {program.students} students
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderPrograms = () => (
    <div className="space-y-6">
      {/* Program Categories */}
      <div className="flex gap-2 border-b">
        {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
          <button
            key={level}
            onClick={() => setSelectedCategory(level)}
            className={`px-4 py-2 font-medium transition-colors ${
              selectedCategory === level
                ? 'border-b-2 border-purple-600 text-purple-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs
          .filter(program => selectedCategory === 'all' || program.level === selectedCategory)
          .map((program, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{program.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{program.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {program.students} students
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {program.level}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Instructor:</h4>
                <div className="text-sm text-gray-600">{program.instructor}</div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Schedule:</h4>
                <div className="text-sm text-gray-600">{program.schedule}</div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Topics:</h4>
                <div className="flex flex-wrap gap-1">
                  {program.topics.map((topic, topicIndex) => (
                    <span key={topicIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Assessment:</h4>
                <div className="text-sm text-gray-600">{program.assessment}</div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Certification:</h4>
                <div className="text-sm text-gray-600">{program.certification}</div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Enroll Now
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  View Details
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderFacilities = () => (
    <div className="space-y-8">
      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{facility.name}</h3>
                  <p className="text-sm text-gray-600">{facility.description}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Capacity:</h4>
                <div className="text-sm text-gray-600">{facility.capacity} persons</div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Equipment:</h4>
                <div className="flex flex-wrap gap-1">
                  {facility.equipment.map((item, itemIndex) => (
                    <span key={itemIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Features:</h4>
                <div className="space-y-1">
                  {facility.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-600">
                      • {feature}
                    </div>
                  ))}
                  {facility.features.length > 3 && (
                    <div className="text-sm text-gray-500 italic">
                      +{facility.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Availability:</h4>
                <div className="text-sm text-gray-600">{facility.availability}</div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Location:</h4>
                <div className="text-sm text-gray-600">{facility.location}</div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Reserve
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Tour
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Facilities Summary */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Facilities Infrastructure Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Building className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Total Facilities</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-800">320</div>
              <div className="text-sm text-gray-600">Total Capacity</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Wifi className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-gray-800">24/7</div>
              <div className="text-sm text-gray-600">Access Available</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Settings className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-gray-800">Modern</div>
              <div className="text-sm text-gray-600">Equipment</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderResources = () => (
    <div className="space-y-8">
      {/* Resource Categories */}
      {resources.map((resourceCategory, index) => (
        <Card key={index} className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              {resourceCategory.category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resourceCategory.items.map((item, itemIndex) => (
                <div key={itemIndex} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.type === 'Online' || item.type === 'Digital' ? 'bg-blue-100 text-blue-700' :
                      item.type === 'Physical' || item.type === 'Facility' ? 'bg-green-100 text-green-700' :
                      item.type === 'Service' || item.type === 'Support' ? 'bg-purple-100 text-purple-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Access:</span>
                      <span className="font-medium">{item.access}</span>
                    </div>
                    <div className="text-gray-600">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Resource Statistics */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5" />
            Resource Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Globe className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-800">5</div>
              <div className="text-sm text-gray-600">Digital Resources</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-800">5</div>
              <div className="text-sm text-gray-600">Physical Resources</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Users className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-gray-800">5</div>
              <div className="text-sm text-gray-600">Support Services</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Clock className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-gray-800">24/7</div>
              <div className="text-sm text-gray-600">Resource Access</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderAchievements = () => (
    <div className="space-y-8">
      {/* Achievements Timeline */}
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {achievement.year}
                    </span>
                    <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Awarding Body:</h4>
                <div className="text-sm text-gray-600">{achievement.awardingBody}</div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Impact:</h4>
                <div className="text-sm text-gray-600">{achievement.impact}</div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  View Certificate
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Learn More
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievement Statistics */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            Achievement Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <Award className="w-8 h-8 mx-auto mb-2 text-red-600" />
              <div className="text-2xl font-bold text-gray-800">{achievements.length}</div>
              <div className="text-sm text-gray-600">Total Awards</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Target className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-800">2024</div>
              <div className="text-sm text-gray-600">Latest Award</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Star className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-800">6</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Globe className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-gray-800">Global</div>
              <div className="text-sm text-gray-600">Recognition</div>
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
        {['all', 'facility'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 font-medium transition-colors ${
              selectedCategory === category
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
          .filter(img => selectedCategory === 'all' || img.category === selectedCategory)
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
                  'bg-green-100 text-green-700'
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
            <div className="text-3xl font-bold mb-2">6</div>
            <div className="text-sm opacity-90">Facility Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <Camera className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">HD</div>
            <div className="text-sm opacity-90">Image Quality</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <Eye className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">2.5K</div>
            <div className="text-sm opacity-90">Total Views</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6 text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">2024</div>
            <div className="text-sm opacity-90">Last Updated</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview()
      case 'programs': return renderPrograms()
      case 'facilities': return renderFacilities()
      case 'resources': return renderResources()
      case 'achievements': return renderAchievements()
      case 'gallery': return renderGallery()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <BookOpen className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Word Education Center</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Comprehensive educational programs and resources for medical terminology, writing, communication, and professional development in healthcare
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Professional Development
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Academic Excellence
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
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
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
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Excellence in Medical Education</h2>
          <p className="text-xl mb-8 opacity-90">Comprehensive educational programs, modern facilities, and expert instructors dedicated to advancing healthcare knowledge and skills</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
