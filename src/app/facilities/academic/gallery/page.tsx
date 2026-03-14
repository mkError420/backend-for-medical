"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-violet-500 to-violet-600' },
    { id: 'facilities', label: 'Facilities', icon: '🏛️', color: 'from-blue-500 to-blue-600' },
    { id: 'equipment', label: 'Equipment', icon: '🔬', color: 'from-purple-500 to-purple-600' },
    { id: 'events', label: 'Events', icon: '🎉', color: 'from-pink-500 to-pink-600' },
    { id: 'achievements', label: 'Achievements', icon: '🏆', color: 'from-yellow-500 to-yellow-600' },
    { id: 'videos', label: 'Videos', icon: '🎬', color: 'from-red-500 to-red-600' }
  ]

  const galleryImages = [
    // Facilities Images
    {
      id: 1,
      title: "Main Academic Building",
      category: "facilities",
      subcategory: "building",
      description: "Modern academic building with state-of-the-art infrastructure",
      image: "/api/placeholder/400/300",
      date: "2024-01-15",
      photographer: "Medical College Media Team",
      tags: ["architecture", "building", "modern"],
      featured: true
    },
    {
      id: 2,
      title: "Central Library",
      category: "facilities",
      subcategory: "library",
      description: "Comprehensive medical library with extensive digital resources",
      image: "/api/placeholder/400/300",
      date: "2024-01-20",
      photographer: "Medical College Media Team",
      tags: ["library", "study", "resources"],
      featured: true
    },
    {
      id: 3,
      title: "Lecture Hall Complex",
      category: "facilities",
      subcategory: "classroom",
      description: "Modern lecture halls equipped with advanced teaching technology",
      image: "/api/placeholder/400/300",
      date: "2024-02-01",
      photographer: "Medical College Media Team",
      tags: ["lecture", "classroom", "technology"],
      featured: false
    },
    {
      id: 4,
      title: "Practical Laboratory",
      category: "facilities",
      subcategory: "laboratory",
      description: "Advanced practical lab with modern equipment",
      image: "/api/placeholder/400/300",
      date: "2024-02-05",
      photographer: "Medical College Media Team",
      tags: ["laboratory", "practical", "equipment"],
      featured: true
    },
    {
      id: 5,
      title: "Service Laboratory",
      category: "facilities",
      subcategory: "laboratory",
      description: "State-of-the-art diagnostic service laboratory",
      image: "/api/placeholder/400/300",
      date: "2024-02-10",
      photographer: "Medical College Media Team",
      tags: ["laboratory", "diagnostic", "service"],
      featured: false
    },
    {
      id: 6,
      title: "CCU Facility",
      category: "facilities",
      subcategory: "clinical",
      description: "Advanced coronary care unit with critical care facilities",
      image: "/api/placeholder/400/300",
      date: "2024-02-15",
      photographer: "Medical College Media Team",
      tags: ["ccu", "critical", "care"],
      featured: true
    },

    // Equipment Images
    {
      id: 7,
      title: "Advanced Microscopy Setup",
      category: "equipment",
      subcategory: "microscopy",
      description: "High-resolution microscopes for detailed cellular analysis",
      image: "/api/placeholder/400/300",
      date: "2024-01-25",
      photographer: "Lab Photography Team",
      tags: ["microscope", "equipment", "research"],
      featured: false
    },
    {
      id: 8,
      title: "Automated Analyzers",
      category: "equipment",
      subcategory: "analyzer",
      description: "Modern automated analyzers for efficient diagnostics",
      image: "/api/placeholder/400/300",
      date: "2024-02-08",
      photographer: "Lab Photography Team",
      tags: ["analyzer", "automated", "diagnostic"],
      featured: true
    },
    {
      id: 9,
      title: "Surgical Training Equipment",
      category: "equipment",
      subcategory: "surgical",
      description: "Advanced surgical simulation equipment for training",
      image: "/api/placeholder/400/300",
      date: "2024-02-12",
      photographer: "Lab Photography Team",
      tags: ["surgical", "training", "simulation"],
      featured: false
    },
    {
      id: 10,
      title: "Digital Learning Tools",
      category: "equipment",
      subcategory: "digital",
      description: "Interactive digital learning tools and smart boards",
      image: "/api/placeholder/400/300",
      date: "2024-02-18",
      photographer: "Lab Photography Team",
      tags: ["digital", "learning", "interactive"],
      featured: false
    },

    // Events Images
    {
      id: 11,
      title: "Annual Convocation 2024",
      category: "events",
      subcategory: "convocation",
      description: "Graduating students celebrating their achievements",
      image: "/api/placeholder/400/300",
      date: "2024-01-30",
      photographer: "Event Photography Team",
      tags: ["convocation", "graduation", "celebration"],
      featured: true
    },
    {
      id: 12,
      title: "Medical Conference",
      category: "events",
      subcategory: "conference",
      description: "International medical conference hosted at our institution",
      image: "/api/placeholder/400/300",
      date: "2024-02-14",
      photographer: "Event Photography Team",
      tags: ["conference", "medical", "international"],
      featured: true
    },
    {
      id: 13,
      title: "Research Symposium",
      category: "events",
      subcategory: "research",
      description: "Annual research symposium showcasing student projects",
      image: "/api/placeholder/400/300",
      date: "2024-02-20",
      photographer: "Event Photography Team",
      tags: ["research", "symposium", "students"],
      featured: false
    },
    {
      id: 14,
      title: "Health Camp",
      category: "events",
      subcategory: "community",
      description: "Free health camp organized for local community",
      image: "/api/placeholder/400/300",
      date: "2024-02-25",
      photographer: "Event Photography Team",
      tags: ["health", "camp", "community"],
      featured: false
    },

    // Achievement Images
    {
      id: 15,
      title: "Excellence Award 2024",
      category: "achievements",
      subcategory: "award",
      description: "Institution recognized for excellence in medical education",
      image: "/api/placeholder/400/300",
      date: "2024-01-10",
      photographer: "Achievement Team",
      tags: ["award", "excellence", "recognition"],
      featured: true
    },
    {
      id: 16,
      title: "Research Grant Success",
      category: "achievements",
      subcategory: "research",
      description: "Major research grant awarded for innovative medical research",
      image: "/api/placeholder/400/300",
      date: "2024-01-22",
      photographer: "Achievement Team",
      tags: ["research", "grant", "innovation"],
      featured: false
    },
    {
      id: 17,
      title: "Student Achievement",
      category: "achievements",
      subcategory: "student",
      description: "Students achieving top positions in national examinations",
      image: "/api/placeholder/400/300",
      date: "2024-02-05",
      photographer: "Achievement Team",
      tags: ["students", "achievement", "success"],
      featured: true
    },
    {
      id: 18,
      title: "Faculty Recognition",
      category: "achievements",
      subcategory: "faculty",
      description: "Faculty members recognized for outstanding contributions",
      image: "/api/placeholder/400/300",
      date: "2024-02-16",
      photographer: "Achievement Team",
      tags: ["faculty", "recognition", "contribution"],
      featured: false
    }
  ]

  const videos = [
    {
      id: 1,
      title: "Campus Tour 2024",
      category: "facilities",
      duration: "5:30",
      description: "Complete virtual tour of our medical college campus",
      thumbnail: "/api/placeholder/400/300",
      views: 15420,
      date: "2024-01-15",
      featured: true
    },
    {
      id: 2,
      title: "Student Life at Medical College",
      category: "events",
      duration: "8:45",
      description: "Experience the vibrant student life and activities",
      thumbnail: "/api/placeholder/400/300",
      views: 8920,
      date: "2024-02-01",
      featured: true
    },
    {
      id: 3,
      title: "Research Excellence",
      category: "achievements",
      duration: "12:20",
      description: "Showcase of our research achievements and innovations",
      thumbnail: "/api/placeholder/400/300",
      views: 6780,
      date: "2024-02-10",
      featured: false
    },
    {
      id: 4,
      title: "Laboratory Facilities",
      category: "equipment",
      duration: "6:15",
      description: "Advanced laboratory facilities and equipment demonstration",
      thumbnail: "/api/placeholder/400/300",
      views: 5430,
      date: "2024-02-20",
      featured: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Images', count: galleryImages.length, icon: Image },
    { id: 'facilities', name: 'Facilities', count: galleryImages.filter(img => img.category === 'facilities').length, icon: Building },
    { id: 'equipment', name: 'Equipment', count: galleryImages.filter(img => img.category === 'equipment').length, icon: FlaskConical },
    { id: 'events', name: 'Events', count: galleryImages.filter(img => img.category === 'events').length, icon: Calendar },
    { id: 'achievements', name: 'Achievements', count: galleryImages.filter(img => img.category === 'achievements').length, icon: Trophy }
  ]

  const performanceMetrics = [
    {
      label: "Total Images",
      value: galleryImages.length,
      unit: "photos",
      trend: "up",
      icon: Camera,
      color: "text-violet-600"
    },
    {
      label: "Videos",
      value: videos.length,
      unit: "videos",
      trend: "up",
      icon: VideoIcon,
      color: "text-red-600"
    },
    {
      label: "Categories",
      value: categories.length,
      unit: "types",
      trend: "stable",
      icon: Grid,
      color: "text-blue-600"
    },
    {
      label: "Featured Content",
      value: galleryImages.filter(img => img.featured).length + videos.filter(v => v.featured).length,
      unit: "items",
      trend: "up",
      icon: Star,
      color: "text-yellow-600"
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
                <metric.icon className="w-8 h-8 text-violet-600" />
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

      {/* Featured Content */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            Featured Gallery Content
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.filter(img => img.featured).slice(0, 3).map((image, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(image)}>
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <div className="w-full h-48 bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-violet-300" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Uploads */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Recent Uploads
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {galleryImages.slice(-5).reverse().map((image, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => setSelectedImage(image)}>
                <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ImageIcon className="w-8 h-8 text-violet-300" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{image.title}</h4>
                  <p className="text-sm text-gray-600">{image.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {image.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Camera className="w-3 h-3" />
                      {image.photographer}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Category Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <Card key={index} className="text-center p-4 hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => {
            setSelectedCategory(category.id)
            setActiveTab(category.id === 'all' ? 'overview' : category.id)
          }}>
            <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center bg-violet-100">
              <category.icon className="w-6 h-6 text-violet-600" />
            </div>
            <div className="font-semibold text-gray-800">{category.name}</div>
            <div className="text-sm text-gray-600">{category.count} items</div>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderFacilities = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex gap-2 border-b">
        {['all', 'building', 'library', 'classroom', 'laboratory', 'clinical'].map((subcategory) => (
          <button
            key={subcategory}
            onClick={() => setSelectedCategory(subcategory)}
            className={`px-4 py-2 font-medium transition-colors ${
              selectedCategory === subcategory
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages
          .filter(img => img.category === 'facilities')
          .filter(img => selectedCategory === 'all' || img.subcategory === selectedCategory)
          .map((image, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer" onClick={() => setSelectedImage(image)}>
            <div className="relative overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-blue-300" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium transform scale-95 group-hover:scale-100 transition-all duration-300">
                  View Image
                </button>
              </div>
              {image.featured && (
                <div className="absolute top-2 right-2">
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              )}
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{image.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{image.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {image.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {image.date}
                </span>
                <span className="flex items-center gap-1">
                  <Camera className="w-3 h-3" />
                  {image.photographer}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderEquipment = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex gap-2 border-b">
        {['all', 'microscopy', 'analyzer', 'surgical', 'digital'].map((subcategory) => (
          <button
            key={subcategory}
            onClick={() => setSelectedCategory(subcategory)}
            className={`px-4 py-2 font-medium transition-colors ${
              selectedCategory === subcategory
                ? 'border-b-2 border-purple-600 text-purple-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages
          .filter(img => img.category === 'equipment')
          .filter(img => selectedCategory === 'all' || img.subcategory === selectedCategory)
          .map((image, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer" onClick={() => setSelectedImage(image)}>
            <div className="relative overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-purple-300" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 bg-white text-purple-600 px-4 py-2 rounded-lg font-medium transform scale-95 group-hover:scale-100 transition-all duration-300">
                  View Image
                </button>
              </div>
              {image.featured && (
                <div className="absolute top-2 right-2">
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              )}
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{image.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{image.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {image.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {image.date}
                </span>
                <span className="flex items-center gap-1">
                  <Camera className="w-3 h-3" />
                  {image.photographer}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderEvents = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex gap-2 border-b">
        {['all', 'convocation', 'conference', 'research', 'community'].map((subcategory) => (
          <button
            key={subcategory}
            onClick={() => setSelectedCategory(subcategory)}
            className={`px-4 py-2 font-medium transition-colors ${
              selectedCategory === subcategory
                ? 'border-b-2 border-pink-600 text-pink-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages
          .filter(img => img.category === 'events')
          .filter(img => selectedCategory === 'all' || img.subcategory === selectedCategory)
          .map((image, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer" onClick={() => setSelectedImage(image)}>
            <div className="relative overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-pink-300" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 bg-white text-pink-600 px-4 py-2 rounded-lg font-medium transform scale-95 group-hover:scale-100 transition-all duration-300">
                  View Image
                </button>
              </div>
              {image.featured && (
                <div className="absolute top-2 right-2">
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              )}
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{image.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{image.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {image.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {image.date}
                </span>
                <span className="flex items-center gap-1">
                  <Camera className="w-3 h-3" />
                  {image.photographer}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderAchievements = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex gap-2 border-b">
        {['all', 'award', 'research', 'student', 'faculty'].map((subcategory) => (
          <button
            key={subcategory}
            onClick={() => setSelectedCategory(subcategory)}
            className={`px-4 py-2 font-medium transition-colors ${
              selectedCategory === subcategory
                ? 'border-b-2 border-yellow-600 text-yellow-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages
          .filter(img => img.category === 'achievements')
          .filter(img => selectedCategory === 'all' || img.subcategory === selectedCategory)
          .map((image, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer" onClick={() => setSelectedImage(image)}>
            <div className="relative overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-yellow-300" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 bg-white text-yellow-600 px-4 py-2 rounded-lg font-medium transform scale-95 group-hover:scale-100 transition-all duration-300">
                  View Image
                </button>
              </div>
              {image.featured && (
                <div className="absolute top-2 right-2">
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              )}
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{image.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{image.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {image.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {image.date}
                </span>
                <span className="flex items-center gap-1">
                  <Camera className="w-3 h-3" />
                  {image.photographer}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderVideos = () => (
    <div className="space-y-6">
      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
            <div className="relative overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-red-100 to-rose-100 flex items-center justify-center">
                <VideoIcon2 className="w-16 h-16 text-red-300" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 bg-white text-red-600 px-4 py-2 rounded-lg font-medium transform scale-95 group-hover:scale-100 transition-all duration-300 flex items-center gap-2">
                  <PlayIcon className="w-4 h-4" />
                  Play Video
                </button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                {video.duration}
              </div>
              {video.featured && (
                <div className="absolute top-2 right-2">
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              )}
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{video.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{video.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {video.views.toLocaleString()} views
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {video.date}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview()
      case 'facilities': return renderFacilities()
      case 'equipment': return renderEquipment()
      case 'events': return renderEvents()
      case 'achievements': return renderAchievements()
      case 'videos': return renderVideos()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-purple-600/5 to-pink-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <Camera className="w-16 h-16 text-violet-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Medical College Gallery</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Visual journey through our state-of-the-art facilities, achievements, events, and campus life showcasing excellence in medical education
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Visual Excellence
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Campus Life
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
                    ? 'border-violet-600 text-violet-600 bg-violet-50'
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
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Excellence in Medical Education</h2>
          <p className="text-xl mb-8 opacity-90">Explore our visual gallery showcasing the best of medical education facilities and achievements</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-violet-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Download Gallery
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-violet-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Share Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{selectedImage.title}</h2>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="w-full h-96 bg-gradient-to-br from-violet-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                <ImageIcon className="w-24 h-24 text-violet-300" />
              </div>
              <p className="text-gray-600 mb-4">{selectedImage.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedImage.tags.map((tag: string, index: number) => (
                  <span key={index} className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {selectedImage.date}
                </span>
                <span className="flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  {selectedImage.photographer}
                </span>
              </div>
              <div className="flex gap-4 mt-6">
                <button className="flex-1 bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors">
                  Download Full Size
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                  Share Image
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
