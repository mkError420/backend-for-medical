"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map } from "lucide-react"

export default function MuseumPage() {
  const [activeView, setActiveView] = useState('dashboard')
  const [selectedExhibit, setSelectedExhibit] = useState<any>(null)
  const [hoveredExhibit, setHoveredExhibit] = useState<number | null>(null)

  const views = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️' },
    { id: 'exhibits', label: 'Exhibits', icon: '🏛️' },
    { id: 'collections', label: 'Collections', icon: '📚' },
    { id: 'tours', label: 'Tours', icon: '🗺️' }
  ]

  const exhibits = [
    {
      id: 1,
      name: "Anatomy Evolution Gallery",
      category: 'anatomy',
      icon: Brain,
      description: "Journey through the evolution of anatomical knowledge and discovery",
      period: "Historical to Modern",
      items: 150,
      interactive: true,
      audioGuide: true,
      featured: true,
      artifacts: ["Ancient anatomical drawings", "Evolution of medical illustrations", "3D anatomical models", "Historical dissection tools"],
      highlights: ["Da Vinci's anatomical sketches", "First human anatomy textbook", "Evolution of surgical instruments"],
      visitorRating: "96%"
    },
    {
      id: 2,
      name: "Surgical Instruments History",
      category: 'surgery',
      icon: Wrench,
      description: "Collection of surgical instruments from ancient to modern times",
      period: "2000 BCE to Present",
      items: 280,
      interactive: true,
      audioGuide: true,
      featured: true,
      artifacts: ["Bronze age surgical tools", "Medieval surgical instruments", "19th century surgical sets", "Modern robotic surgery tools"],
      highlights: ["First surgical scalpel collection", "Evolution of anesthesia equipment", "Robotic surgery demonstration"],
      visitorRating: "94%"
    },
    {
      id: 3,
      name: "Medical breakthroughs Hall",
      category: 'innovation',
      icon: Lightbulb,
      description: "Celebrating revolutionary medical discoveries and innovations",
      period: "1800s to Present",
      items: 95,
      interactive: true,
      audioGuide: true,
      featured: false,
      artifacts: ["Penicillin discovery samples", "First X-ray machine", "DNA discovery materials", "Vaccine development timeline"],
      highlights: ["Nobel prize winning discoveries", "Modern medical technology", "Future medicine exhibits"],
      visitorRating: "97%"
    },
    {
      id: 4,
      name: "Traditional Medicine Corner",
      category: 'traditional',
      icon: HeartHandshake,
      description: "Traditional healing practices from around the world",
      period: "Ancient to Present",
      items: 120,
      interactive: false,
      audioGuide: true,
      featured: false,
      artifacts: ["Traditional herbs collection", "Ancient medical texts", "Traditional healing tools", "Cultural medical practices"],
      highlights: ["Ayurvedic medicine collection", "Traditional Chinese medicine", "Indigenous healing practices"],
      visitorRating: "91%"
    },
    {
      id: 5,
      name: "Pathology Specimen Collection",
      category: 'pathology',
      icon: Microscope,
      description: "Extensive collection of pathological specimens for education",
      period: "1900s to Present",
      items: 450,
      interactive: false,
      audioGuide: false,
      featured: false,
      artifacts: ["Disease specimens", "Historical pathology slides", "Medical imaging collection", "Research samples"],
      highlights: ["Rare disease specimens", "Historical outbreak samples", "Educational pathology collection"],
      visitorRating: "88%"
    },
    {
      id: 6,
      name: "Pharmacy Evolution Gallery",
      category: 'pharmacy',
      icon: FlaskConical,
      description: "Development of pharmaceutical sciences and drug discovery",
      period: "Ancient to Modern",
      items: 200,
      interactive: true,
      audioGuide: true,
      featured: false,
      artifacts: ["Ancient pharmacy tools", "Historical drug formulations", "Modern pharmaceutical equipment", "Drug discovery timeline"],
      highlights: ["First pharmacy collection", "Evolution of drug manufacturing", "Modern pharmacy practice"],
      visitorRating: "93%"
    }
  ]

  const collections = [
    {
      name: "Rare Book Collection",
      category: "documents",
      count: 850,
      description: "Historical medical textbooks and manuscripts",
      value: "Priceless",
      access: "Research Only",
      preservation: "Climate Controlled"
    },
    {
      name: "Medical Instrument Archive",
      category: "instruments",
      count: 1200,
      description: "Historical surgical and diagnostic instruments",
      value: "High Historical Value",
      access: "Public Display",
      preservation: "Regular Maintenance"
    },
    {
      name: "Photography Collection",
      category: "media",
      count: 3500,
      description: "Historical medical photographs and documentation",
      value: "Significant",
      access: "Digital Access Available",
      preservation: "Digitized & Physical"
    },
    {
      name: "Specimen Collection",
      category: "biological",
      count: 2800,
      description: "Pathological and anatomical specimens",
      value: "Educational",
      access: "Educational Use",
      preservation: "Formaldehyde Preserved"
    },
    {
      name: "Artifact Collection",
      category: "historical",
      count: 450,
      description: "Medical artifacts and equipment",
      value: "Museum Quality",
      access: "Public Display",
      preservation: "Conserved"
    }
  ]

  const tourPrograms = [
    {
      name: "General Museum Tour",
      duration: "45 minutes",
      capacity: "25 visitors",
      level: "General",
      languages: ["English", "Bengali"],
      frequency: "Every hour",
      price: "Free",
      highlights: ["Overview of all exhibits", "Key historical artifacts", "Interactive demonstrations"],
      guide: "Professional Guide"
    },
    {
      name: "Medical History Deep Dive",
      duration: "90 minutes",
      capacity: "15 visitors",
      level: "Educational",
      languages: ["English", "Bengali"],
      frequency: "Twice daily",
      price: "BDT 100",
      highlights: ["Detailed historical context", "Rare collection access", "Expert commentary"],
      guide: "Historian Guide"
    },
    {
      name: "Student Educational Tour",
      duration: "60 minutes",
      capacity: "30 students",
      level: "Educational",
      languages: ["English", "Bengali"],
      frequency: "By Appointment",
      price: "Free for Students",
      highlights: ["Curriculum-aligned content", "Interactive learning", "Educational activities"],
      guide: "Educational Guide"
    },
    {
      name: "Research Scholars Tour",
      duration: "120 minutes",
      capacity: "10 researchers",
      level: "Research",
      languages: ["English"],
      frequency: "Weekly",
      price: "BDT 500",
      highlights: ["Behind-the-scenes access", "Research collection viewing", "Archive access"],
      guide: "Curator Tour"
    }
  ]

  const realTimeStats = [
    { label: "Current Visitors", value: 48, unit: "visitors", color: "text-blue-600", icon: "👥" },
    { label: "Active Exhibits", value: 6, unit: "exhibits", color: "text-green-600", icon: "🏛️" },
    { label: "Today's Tours", value: 12, unit: "tours", color: "text-orange-600", icon: "🗺️" },
    { label: "Collection Items", value: 8650, unit: "items", color: "text-purple-600", icon: "📚" }
  ]

  const upcomingEvents = [
    {
      title: "Medical History Lecture Series",
      date: "2025-02-15",
      time: "3:00 PM",
      speaker: "Prof. Dr. A. Rahman",
      topic: "Evolution of Surgical Practices",
      capacity: 100,
      registered: 67
    },
    {
      title: "Rare Book Exhibition",
      date: "2025-02-20",
      time: "10:00 AM",
      duration: "3 days",
      topic: "Ancient Medical Manuscripts",
      capacity: 50,
      registered: 23
    },
    {
      title: "Student Research Symposium",
      date: "2025-02-25",
      time: "2:00 PM",
      participants: "Medical Students",
      topic: "Historical Medical Discoveries",
      capacity: 150,
      registered: 89
    }
  ]

  const galleryImages = [
    {
      id: 1,
      title: "Ancient Surgical Instruments",
      category: 'historical',
      date: "1800s",
      description: "Collection of surgical instruments from the 19th century",
      photographer: "Museum Archives",
      location: "Surgical Instruments Gallery",
      featured: true,
      views: 15420,
      likes: 892,
      image: "/gallery/surgical-instruments.jpg"
    },
    {
      id: 2,
      title: "Anatomy Lecture Hall - 1920",
      category: 'historical',
      date: "1920",
      description: "Historical anatomy lecture hall with students",
      photographer: "Dr. J. Smith",
      location: "Medical History Section",
      featured: true,
      views: 12350,
      likes: 756,
      image: "/gallery/anatomy-hall-1920.jpg"
    },
    {
      id: 3,
      title: "First X-ray Machine",
      category: 'innovation',
      date: "1896",
      description: "One of the first X-ray machines used in medical diagnosis",
      photographer: "Medical Archives",
      location: "Medical Innovations Gallery",
      featured: false,
      views: 9876,
      likes: 623,
      image: "/gallery/first-xray.jpg"
    },
    {
      id: 4,
      title: "Traditional Medicine Collection",
      category: 'traditional',
      date: "1950s",
      description: "Traditional healing tools and herbal medicines",
      photographer: "Ethnography Department",
      location: "Traditional Medicine Corner",
      featured: false,
      views: 8234,
      likes: 534,
      image: "/gallery/traditional-medicine.jpg"
    },
    {
      id: 5,
      title: "Medical Students Graduation - 1945",
      category: 'educational',
      date: "1945",
      description: "Historical graduation ceremony of medical students",
      photographer: "College Archives",
      location: "Education History Gallery",
      featured: false,
      views: 7654,
      likes: 489,
      image: "/gallery/graduation-1945.jpg"
    },
    {
      id: 6,
      title: "Pathology Laboratory - 1930",
      category: 'laboratory',
      date: "1930",
      description: "Historical pathology laboratory with microscopes and specimens",
      photographer: "Lab Archives",
      location: "Laboratory History Section",
      featured: false,
      views: 6892,
      likes: 423,
      image: "/gallery/pathology-lab-1930.jpg"
    },
    {
      id: 7,
      title: "Nursing Training - 1960",
      category: 'educational',
      date: "1960",
      description: "Nursing students in practical training session",
      photographer: "Nursing Archives",
      location: "Nursing History Gallery",
      featured: false,
      views: 5432,
      likes: 367,
      image: "/gallery/nursing-training-1960.jpg"
    },
    {
      id: 8,
      title: "Ancient Medical Texts",
      category: 'documents',
      date: "Ancient",
      description: "Rare ancient medical manuscripts and texts",
      photographer: "Rare Books Collection",
      location: "Document Archives",
      featured: false,
      views: 4567,
      likes: 298,
      image: "/gallery/ancient-texts.jpg"
    },
    {
      id: 9,
      title: "Hospital Ward - 1900",
      category: 'historical',
      date: "1900",
      description: "Historical hospital ward with patient beds and equipment",
      photographer: "Hospital Archives",
      location: "Hospital History Gallery",
      featured: false,
      views: 12345,
      likes: 678,
      image: "/gallery/hospital-ward-1900.jpg"
    },
    {
      id: 10,
      title: "Medical Conference - 1955",
      category: 'events',
      date: "1955",
      description: "International medical conference participants",
      photographer: "Conference Archives",
      location: "Events History Gallery",
      featured: false,
      views: 3456,
      likes: 234,
      image: "/gallery/medical-conference-1955.jpg"
    },
    {
      id: 11,
      title: "Pharmacy Shop - 1880",
      category: 'pharmacy',
      date: "1880",
      description: "Historical pharmacy with medicine bottles and equipment",
      photographer: "Pharmacy Archives",
      location: "Pharmacy History Gallery",
      featured: false,
      views: 5678,
      likes: 412,
      image: "/gallery/pharmacy-1880.jpg"
    },
    {
      id: 12,
      title: "Medical Research Laboratory",
      category: 'research',
      date: "1970",
      description: "Advanced medical research laboratory with equipment",
      photographer: "Research Archives",
      location: "Research History Gallery",
      featured: false,
      views: 4321,
      likes: 289,
      image: "/gallery/research-lab-1970.jpg"
    }
  ]

  const renderExhibitCard = (exhibit: any) => (
    <div key={exhibit.id}
         className={`relative transform transition-all duration-300 cursor-pointer ${
           hoveredExhibit === exhibit.id ? 'scale-105 z-10' : 'hover:scale-102'
         }`}
         onMouseEnter={() => setHoveredExhibit(exhibit.id)}
         onMouseLeave={() => setHoveredExhibit(null)}>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${
          exhibit.category === 'anatomy' ? 'from-blue-400 to-blue-600' :
          exhibit.category === 'surgery' ? 'from-red-400 to-red-600' :
          exhibit.category === 'innovation' ? 'from-green-400 to-green-600' :
          exhibit.category === 'traditional' ? 'from-purple-400 to-purple-600' :
          exhibit.category === 'pathology' ? 'from-orange-400 to-orange-600' :
          'from-teal-400 to-teal-600'
        }`}></div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <exhibit.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">{exhibit.visitorRating}</div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-gray-800 mb-2">{exhibit.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{exhibit.description}</p>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Period:</span>
              <span className="font-medium">{exhibit.period}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Items:</span>
              <span className="font-medium">{exhibit.items}</span>
            </div>
            <div className="flex gap-2">
              {exhibit.interactive && (
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Interactive</span>
              )}
              {exhibit.audioGuide && (
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Audio Guide</span>
              )}
              {exhibit.featured && (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">Featured</span>
              )}
            </div>
            
            {hoveredExhibit === exhibit.id && (
              <div className="space-y-3 pt-3 border-t border-gray-200">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {exhibit.highlights.slice(0, 3).map((highlight: string, index: number) => (
                      <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        {highlight}
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
            <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value.toLocaleString()}</div>
            <div className="text-sm text-gray-600 mb-1">{stat.unit}</div>
            <div className={`text-sm font-medium ${stat.color}`}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-3xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold text-gray-800">{event.title}</h4>
                  <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                </div>
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-2">{event.topic}</p>
                {event.speaker && <p className="text-xs text-gray-600">Speaker: {event.speaker}</p>}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{event.registered}/{event.capacity} registered</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderExhibits = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {exhibits.map(renderExhibitCard)}
    </div>
  )

  const renderCollections = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{collection.name}</h3>
                  <p className="text-sm text-gray-600">{collection.description}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Archive className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Items:</span>
                  <span className="font-medium">{collection.count.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Value:</span>
                  <span className="font-medium">{collection.value}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Access:</span>
                  <span className="font-medium">{collection.access}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Preservation:</span>
                  <span className="font-medium text-green-600">{collection.preservation}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Request Access
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderGallery = () => (
    <div className="space-y-8">
      {/* Featured Images */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Featured Images</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.filter(img => img.featured).map((image, index) => (
            <Card key={image.id} className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Image className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{image.title}</h3>
                    <p className="text-gray-600 mb-2">{image.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {image.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {image.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{image.views.toLocaleString()}</div>
                    <div className="text-xs text-gray-600">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{image.likes.toLocaleString()}</div>
                    <div className="text-xs text-gray-600">Likes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{image.category}</div>
                    <div className="text-xs text-gray-600">Category</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Full Image
                  </button>
                  <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Complete Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={image.id} className="shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image className="w-12 h-12 text-blue-600" />
                </div>
                {image.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-sm font-medium text-gray-800 truncate">{image.title}</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">{image.date}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    image.category === 'historical' ? 'bg-blue-100 text-blue-700' :
                    image.category === 'innovation' ? 'bg-green-100 text-green-700' :
                    image.category === 'educational' ? 'bg-purple-100 text-purple-700' :
                    image.category === 'traditional' ? 'bg-orange-100 text-orange-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {image.category}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{image.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4" />
                    <span>{image.likes.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderTours = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tourPrograms.map((tour, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{tour.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {tour.duration}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      tour.level === 'General' ? 'bg-green-100 text-green-700' :
                      tour.level === 'Educational' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {tour.level}
                    </span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Compass className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{tour.capacity}</div>
                  <div className="text-xs text-gray-600">Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{tour.frequency}</div>
                  <div className="text-xs text-gray-600">Frequency</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Languages:</h4>
                <div className="flex flex-wrap gap-2">
                  {tour.languages.map((lang: string, langIndex: number) => (
                    <span key={langIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Highlights:</h4>
                <div className="space-y-1">
                  {tour.highlights.slice(0, 3).map((highlight: string, highlightIndex: number) => (
                    <div key={highlightIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`text-lg font-bold ${
                  tour.price === "Free" || tour.price.includes("Free") ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {tour.price}
                </span>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Book Tour
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
      case 'exhibits': return renderExhibits()
      case 'collections': return renderCollections()
      case 'gallery': return renderGallery()
      case 'tours': return renderTours()
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
                  <Building className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Medical Museum</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Journey through medical history with our extensive collection of artifacts, specimens, and educational exhibits
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Historical Heritage
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Educational Excellence
                </div>
              </div>
            </div>
            
            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-blue-600">6</div>
                <div className="text-sm text-gray-700">Exhibits</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-green-600">8,650</div>
                <div className="text-sm text-gray-700">Collection Items</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-gray-700">Visitor Satisfaction</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl text-center">
                <div className="text-2xl font-bold text-orange-600">150+</div>
                <div className="text-sm text-gray-700">Years of History</div>
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
          <h2 className="text-3xl font-bold mb-4">Explore Medical History</h2>
          <p className="text-xl mb-8 opacity-90">Visit our museum and discover the fascinating journey of medical science</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Visit
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
