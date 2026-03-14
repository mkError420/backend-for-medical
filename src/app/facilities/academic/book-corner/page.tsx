"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon, Droplets, Wind as WindIcon, ThermometerSun, Shield as ShieldIcon, Lock, Unlock, AlertTriangle as AlertTriangleIcon, Activity as ActivityIcon, Beaker, TestTube, Pipette, Database, BarChart3, PieChart, LineChart, UserCheck2, Thermometer as ThermometerIcon, Eye as EyeIcon, Ear as EarIcon, Hand as HandIcon, Stethoscope as StethoscopeIcon, Cpu, HardDrive, Mouse, Keyboard, Headphones as HeadphonesIcon, Gamepad2, Smartphone, Tablet, Monitor as MonitorIcon2, Tv, Radio, Wifi as WifiIcon2, Server, Cloud as CloudIcon, Download as DownloadIcon, Upload as UploadIcon, Play as PlayIcon, Pause as PauseIcon, SkipForward, SkipBack, Volume2 as VolumeIcon, Maximize2, Minimize2, Settings2, HelpCircle, BookOpen as BookOpenIcon, FileText as FileTextIcon2, Image as ImageIcon, Video as VideoIcon2, Music, Film, Camera as CameraIcon, Mic, MicOff, VideoOff, Share2, Share, Link, ExternalLink, Copy, Clipboard, Save, Save as SaveIcon, Trash2, Edit3, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Move, ZoomIn, ZoomOut, RotateCw, RotateCcw, Maximize, Minimize, Fullscreen, Layout, Grid, List, Columns, Rows, Square, Circle, Triangle, Pentagon, Hexagon, Star as StarIcon, Heart, Heart as HeartIcon, ThumbsUp, ThumbsDown, Send, Reply, Forward, Inbox, Archive as ArchiveIcon, Trash, Search as SearchIcon, Filter, Shuffle, Repeat, Repeat1, SkipForward as SkipForwardIcon, SkipBack as SkipBackIcon, PlayCircle as PlayCircleIcon, PauseCircle as PauseCircleIcon, StopCircle, Square as SquareIcon } from "lucide-react"

export default function BookCornerPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊', color: 'from-amber-500 to-amber-600' },
    { id: 'books', label: 'Books', icon: '📚', color: 'from-blue-500 to-blue-600' },
    { id: 'reading', label: 'Reading', icon: '📖', color: 'from-green-500 to-green-600' },
    { id: 'events', label: 'Events', icon: '🎉', color: 'from-purple-500 to-purple-600' },
    { id: 'facilities', label: 'Facilities', icon: '🏛️', color: 'from-orange-500 to-orange-600' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️', color: 'from-indigo-500 to-indigo-600' }
  ]

  const books = [
    {
      id: 1,
      title: "Gray's Anatomy",
      author: "Henry Gray",
      category: "anatomy",
      isbn: "978-0702057354",
      edition: "42nd Edition",
      year: 2020,
      available: true,
      totalCopies: 5,
      borrowedCopies: 2,
      location: "Section A, Shelf 1",
      description: "Comprehensive anatomical reference with detailed illustrations",
      rating: 4.8,
      reviews: 124,
      tags: ["anatomy", "reference", "illustrations"],
      featured: true
    },
    {
      id: 2,
      title: "Guyton and Hall Textbook of Medical Physiology",
      author: "John E. Hall",
      category: "physiology",
      isbn: "978-1455770052",
      edition: "14th Edition",
      year: 2021,
      available: true,
      totalCopies: 8,
      borrowedCopies: 3,
      location: "Section B, Shelf 2",
      description: "Complete guide to medical physiology with clinical correlations",
      rating: 4.7,
      reviews: 98,
      tags: ["physiology", "clinical", "comprehensive"],
      featured: true
    },
    {
      id: 3,
      title: "Robbins Basic Pathology",
      author: "Vinay Kumar",
      category: "pathology",
      isbn: "978-0323531339",
      edition: "10th Edition",
      year: 2020,
      available: false,
      totalCopies: 6,
      borrowedCopies: 6,
      location: "Section C, Shelf 3",
      description: "Fundamental concepts of pathology with clinical applications",
      rating: 4.6,
      reviews: 87,
      tags: ["pathology", "clinical", "fundamentals"],
      featured: false
    },
    {
      id: 4,
      title: "Harrison's Principles of Internal Medicine",
      author: " Dennis L. Kasper",
      category: "medicine",
      isbn: "978-1264266875",
      edition: "21st Edition",
      year: 2022,
      available: true,
      totalCopies: 10,
      borrowedCopies: 4,
      location: "Section D, Shelf 1",
      description: "Comprehensive internal medicine reference for practitioners",
      rating: 4.9,
      reviews: 156,
      tags: ["medicine", "reference", "clinical"],
      featured: true
    },
    {
      id: 5,
      title: "Bailey & Love's Short Practice of Surgery",
      author: "Sir Norman L. Browse",
      category: "surgery",
      isbn: "978-1498758306",
      edition: "27th Edition",
      year: 2021,
      available: true,
      totalCopies: 7,
      borrowedCopies: 2,
      location: "Section E, Shelf 2",
      description: "Essential surgical guide with modern techniques",
      rating: 4.5,
      reviews: 76,
      tags: ["surgery", "techniques", "practice"],
      featured: false
    },
    {
      id: 6,
      title: "Pharmacology for Medicine",
      author: "Laurence Brunton",
      category: "pharmacology",
      isbn: "978-0702074485",
      edition: "14th Edition",
      year: 2022,
      available: true,
      totalCopies: 5,
      borrowedCopies: 1,
      location: "Section F, Shelf 1",
      description: "Complete pharmacology reference with drug mechanisms",
      rating: 4.4,
      reviews: 65,
      tags: ["pharmacology", "drugs", "mechanisms"],
      featured: false
    },
    {
      id: 7,
      title: "Nelson Textbook of Pediatrics",
      author: "Robert M. Kliegman",
      category: "pediatrics",
      isbn: "978-0323529501",
      edition: "21st Edition",
      year: 2023,
      available: false,
      totalCopies: 4,
      borrowedCopies: 4,
      location: "Section G, Shelf 1",
      description: "Comprehensive pediatric medicine reference",
      rating: 4.7,
      reviews: 89,
      tags: ["pediatrics", "children", "medicine"],
      featured: false
    },
    {
      id: 8,
      title: "Williams Obstetrics",
      author: "F. Gary Cunningham",
      category: "obstetrics",
      isbn: "978-1264254216",
      edition: "26th Edition",
      year: 2022,
      available: true,
      totalCopies: 6,
      borrowedCopies: 2,
      location: "Section H, Shelf 2",
      description: "Complete obstetrics guide with modern practices",
      rating: 4.6,
      reviews: 72,
      tags: ["obstetrics", "pregnancy", "delivery"],
      featured: false
    }
  ]

  const readingSpaces = [
    {
      id: 1,
      name: "Silent Reading Zone",
      type: "individual",
      capacity: 20,
      features: ["Individual desks", "Reading lamps", "Power outlets", "Soundproofing"],
      available: 18,
      amenities: ["WiFi", "Power outlets", "Adjustable lighting"],
      atmosphere: "Quiet study environment"
    },
    {
      id: 2,
      name: "Group Study Area",
      type: "group",
      capacity: 16,
      features: ["Large tables", "Whiteboards", "Presentation screen", "Collaborative tools"],
      available: 8,
      amenities: ["WiFi", "Projector", "Whiteboard", "Conference setup"],
      atmosphere: "Collaborative learning space"
    },
    {
      id: 3,
      name: "Digital Reading Room",
      type: "digital",
      capacity: 12,
      features: ["Computers", "E-reader access", "Digital resources", "Printing"],
      available: 10,
      amenities: ["High-speed internet", "Printing", "Scanning", "E-reader devices"],
      atmosphere: "Technology-enabled reading"
    },
    {
      id: 4,
      name: "Comfort Lounge",
      type: "casual",
      capacity: 15,
      features: ["Comfortable seating", "Coffee table", "Relaxed atmosphere", "Natural lighting"],
      available: 12,
      amenities: ["Coffee machine", "Snacks", "Magazines", "Newspapers"],
      atmosphere: "Relaxed reading environment"
    }
  ]

  const events = [
    {
      id: 1,
      title: "Book Reading Club",
      date: "2025-02-20",
      time: "15:00-17:00",
      type: "club",
      description: "Monthly book discussion featuring medical literature",
      speaker: "Dr. Sarah Johnson",
      location: "Group Study Area",
      participants: 15,
      maxParticipants: 20,
      registration: "Open"
    },
    {
      id: 2,
      title: "Author Meet & Greet",
      date: "2025-02-25",
      time: "14:00-16:00",
      type: "meet",
      description: "Meet renowned medical authors and discuss their work",
      speaker: "Dr. Michael Chen",
      location: "Main Hall",
      participants: 45,
      maxParticipants: 50,
      registration: "Open"
    },
    {
      id: 3,
      title: "Medical Literature Workshop",
      date: "2025-03-01",
      time: "10:00-13:00",
      type: "workshop",
      description: "Learn effective medical literature review techniques",
      speaker: "Dr. Emily Davis",
      location: "Digital Reading Room",
      participants: 12,
      maxParticipants: 15,
      registration: "Open"
    },
    {
      id: 4,
      title: "Book Fair",
      date: "2025-03-05-07",
      time: "09:00-18:00",
      type: "fair",
      description: "Annual medical book fair with publishers and authors",
      speaker: "Multiple Publishers",
      location: "Book Corner Exhibition Area",
      participants: 200,
      maxParticipants: 250,
      registration: "Free Entry"
    }
  ]

  const facilities = [
    {
      name: "Digital Catalog System",
      description: "Online book search and reservation system",
      status: "operational",
      usage: "High"
    },
    {
      name: "Self-Checkout Kiosk",
      description: "Automated book borrowing and return system",
      status: "operational",
      usage: "Medium"
    },
    {
      name: "Printing & Copying",
      description: "Document printing and copying services",
      status: "operational",
      usage: "High"
    },
    {
      name: "Study Room Booking",
      description: "Online booking system for study spaces",
      status: "operational",
      usage: "Medium"
    },
    {
      name: "Reference Desk",
      description: "Librarian assistance and research help",
      status: "operational",
      usage: "High"
    },
    {
      name: "Cafeteria",
      description: "Refreshments and light meals for readers",
      status: "operational",
      usage: "Medium"
    }
  ]

  const galleryImages = [
    {
      id: 1,
      title: "Main Reading Hall",
      category: "facility",
      description: "Spacious main reading hall with natural lighting",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Book Collection",
      category: "books",
      description: "Extensive collection of medical textbooks and references",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Digital Resources",
      category: "technology",
      description: "Modern digital reading and research facilities",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Study Spaces",
      category: "facility",
      description: "Comfortable and well-equipped study areas",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Reading Events",
      category: "events",
      description: "Book reading events and author interactions",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Student Activities",
      category: "activities",
      description: "Students engaged in reading and learning activities",
      image: "/api/placeholder/400/300"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Books', count: books.length, icon: BookOpen },
    { id: 'anatomy', name: 'Anatomy', count: books.filter(b => b.category === 'anatomy').length, icon: Brain },
    { id: 'physiology', name: 'Physiology', count: books.filter(b => b.category === 'physiology').length, icon: Heart },
    { id: 'pathology', name: 'Pathology', count: books.filter(b => b.category === 'pathology').length, icon: Microscope },
    { id: 'medicine', name: 'Medicine', count: books.filter(b => b.category === 'medicine').length, icon: Stethoscope },
    { id: 'surgery', name: 'Surgery', count: books.filter(b => b.category === 'surgery').length, icon: Wrench },
    { id: 'pharmacology', name: 'Pharmacology', count: books.filter(b => b.category === 'pharmacology').length, icon: FlaskConical },
    { id: 'pediatrics', name: 'Pediatrics', count: books.filter(b => b.category === 'pediatrics').length, icon: Baby },
    { id: 'obstetrics', name: 'Obstetrics', count: books.filter(b => b.category === 'obstetrics').length, icon: HeartHandshake }
  ]

  const performanceMetrics = [
    {
      label: "Total Books",
      value: books.length,
      unit: "titles",
      trend: "up",
      icon: BookOpen,
      color: "text-amber-600"
    },
    {
      label: "Reading Spaces",
      value: readingSpaces.length,
      unit: "areas",
      trend: "stable",
      icon: Users,
      color: "text-blue-600"
    },
    {
      label: "Monthly Events",
      value: events.length,
      unit: "events",
      trend: "up",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      label: "Active Users",
      value: 450,
      unit: "students",
      trend: "up",
      icon: Users,
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
                <metric.icon className="w-8 h-8 text-amber-600" />
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

      {/* Featured Books */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            Featured Books
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.filter(book => book.featured).slice(0, 3).map((book, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">{book.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        {book.rating}
                      </span>
                      <span>({book.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        book.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {book.available ? 'Available' : 'Borrowed'}
                      </span>
                      <span className="text-xs text-gray-500">
                        {book.totalCopies - book.borrowedCopies}/{book.totalCopies} copies
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Reading Spaces Overview */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Reading Spaces
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {readingSpaces.map((space, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">{space.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{space.atmosphere}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Capacity:</span>
                  <span className="font-medium">{space.capacity}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Available:</span>
                  <span className={`font-medium ${space.available > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {space.available}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.slice(0, 3).map((event, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.date} • {event.time}</p>
                    <p className="text-xs text-gray-500">{event.location} • {event.participants}/{event.maxParticipants} participants</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.registration === 'Open' ? 'bg-green-100 text-green-700' :
                    event.registration === 'Free Entry' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {event.registration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderBooks = () => (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search books by title, author, or ISBN..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books
          .filter(book => selectedCategory === 'all' || book.category === selectedCategory)
          .filter(book => searchTerm === '' || 
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.isbn.includes(searchTerm)
          )
          .map((book, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      {book.rating}
                    </span>
                    <span>({book.reviews} reviews)</span>
                    <span>• {book.edition}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">ISBN:</span>
                  <span className="font-medium">{book.isbn}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{book.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Year:</span>
                  <span className="font-medium">{book.year}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Tags:</h4>
                <div className="flex flex-wrap gap-1">
                  {book.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{book.description}</p>

              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  book.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {book.available ? 'Available' : 'All Borrowed'}
                </span>
                <span className="text-sm text-gray-600">
                  {book.totalCopies - book.borrowedCopies}/{book.totalCopies} copies
                </span>
              </div>

              <div className="flex gap-2">
                <button 
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                    book.available 
                      ? 'bg-amber-600 text-white hover:bg-amber-700' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!book.available}
                >
                  {book.available ? 'Borrow' : 'Unavailable'}
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Reserve
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderReading = () => (
    <div className="space-y-8">
      {/* Reading Spaces */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {readingSpaces.map((space, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{space.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{space.atmosphere}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{space.capacity} capacity</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>{space.available} available</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {space.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Amenities:</h4>
                <div className="flex flex-wrap gap-1">
                  {space.amenities.map((amenity, amenityIndex) => (
                    <span key={amenityIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button 
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                    space.available > 0
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={space.available === 0}
                >
                  {space.available > 0 ? 'Book Space' : 'Full'}
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  View Details
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reading Guidelines */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Reading Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Silent Zone Rules</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Maintain complete silence in designated areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Use headphones for audio content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Set mobile phones to silent mode</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">General Guidelines</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Handle books with care and respect</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Return books on time to avoid fines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Keep your workspace clean and organized</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderEvents = () => (
    <div className="space-y-8">
      {/* Events List */}
      <div className="space-y-6">
        {events.map((event, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{event.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.registration === 'Open' ? 'bg-green-100 text-green-700' :
                      event.registration === 'Free Entry' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {event.registration}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Speaker: {event.speaker}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {event.participants}/{event.maxParticipants} participants
                      </span>
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Event Statistics */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Event Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-gray-800">{events.length}</div>
              <div className="text-sm text-gray-600">Total Events</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-gray-800">{events.reduce((sum, e) => sum + e.participants, 0)}</div>
              <div className="text-sm text-gray-600">Total Participants</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-gray-800">4</div>
              <div className="text-sm text-gray-600">Event Types</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Star className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-gray-800">4.8</div>
              <div className="text-sm text-gray-600">Avg. Rating</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderFacilities = () => (
    <div className="space-y-8">
      {/* Facilities List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facilities.map((facility, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{facility.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{facility.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      facility.status === 'operational' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {facility.status}
                    </span>
                    <span className="flex items-center gap-1">
                      <Activity className="w-4 h-4" />
                      <span className="capitalize">{facility.usage} usage</span>
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Operating Hours */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Operating Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Weekdays</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">08:00 - 22:00</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Weekend</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Saturday - Sunday</span>
                  <span className="font-medium">09:00 - 20:00</span>
                </div>
              </div>
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
        {['all', 'facility', 'books', 'technology', 'events', 'activities'].map((category) => (
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
                  image.category === 'books' ? 'bg-green-100 text-green-700' :
                  image.category === 'technology' ? 'bg-purple-100 text-purple-700' :
                  image.category === 'events' ? 'bg-orange-100 text-orange-700' :
                  'bg-pink-100 text-pink-700'
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
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-sm opacity-90">Book Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6 text-center">
            <Laptop className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">1</div>
            <div className="text-sm opacity-90">Technology Images</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6 text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">2</div>
            <div className="text-sm opacity-90">Event & Activity Images</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview()
      case 'books': return renderBooks()
      case 'reading': return renderReading()
      case 'events': return renderEvents()
      case 'facilities': return renderFacilities()
      case 'gallery': return renderGallery()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-orange-600/5 to-yellow-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <BookOpen className="w-16 h-16 text-amber-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Book Corner</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Comprehensive medical library with extensive book collection, comfortable reading spaces, and engaging literary events for academic excellence
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Knowledge Hub
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Reading Excellence
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
                    ? 'border-amber-600 text-amber-600 bg-amber-50'
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
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-12">
        <div className="responsive-container-full text-center">
          <h2 className="text-3xl font-bold mb-4">Gateway to Medical Knowledge</h2>
          <p className="text-xl mb-8 opacity-90">Explore our extensive collection of medical literature and enhance your learning journey</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Browse Books
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Reading Space
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
