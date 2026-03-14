"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Phone, Mail, Calendar, TrendingUp, Target, Lightbulb, GraduationCap, Brain, HeartHandshake, Shield, Star, ChevronRight, ArrowRight, Building, Library, Coffee, Wifi, Car, Bus, Utensils, Dumbbell, Trees, Sun, Cloud, Wind, Thermometer, Volume2, Video, Laptop, FileText, Search, Menu, X, Zap, Globe, Languages, Trophy, Medal, Flag, CheckCircle, AlertCircle, Info, FlaskConical, Microscope, Bed, Baby, AlertTriangle, Wrench, Activity, HeartPulse, MessageCircle, Stethoscope, Syringe, Monitor, User, Settings, PlayCircle, PauseCircle, RefreshCw, Download, Upload, Eye, FileCheck, BookOpen, BookMarked, Zap as ZapIcon, Target as TargetIcon, Award as AwardIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Camera, Image, Archive, History, Scroll, Globe2, Compass, Map, Presentation, MessageSquare, UserCheck, UserPlus, Users2, VideoIcon, Headphones, Wifi as WifiIcon, Coffee as CoffeeIcon, Monitor as MonitorIcon, BookMarked as BookMarkedIcon, FileText as FileTextIcon } from "lucide-react"

export default function TutorialRoomPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedRoom, setSelectedRoom] = useState<any>(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'rooms', label: 'Tutorial Rooms', icon: '🏛️' },
    { id: 'schedule', label: 'Schedule', icon: '📅' },
    { id: 'resources', label: 'Resources', icon: '📚' },
    { id: 'booking', label: 'Booking', icon: '📝' }
  ]

  const tutorialRooms = [
    {
      id: 1,
      name: "Tutorial Room A-101",
      building: "Academic Block A",
      floor: "1st Floor",
      capacity: 25,
      type: "Small Group",
      status: "available",
      equipment: ["Smart Board", "Projector", "Whiteboard", "Audio System", "Video Conference", "Computers"],
      features: ["Air Conditioning", "Natural Light", "Sound Proof", "WiFi", "Power Backup", "Recording System"],
      availability: {
        monday: ["9:00-11:00", "14:00-16:00"],
        tuesday: ["10:00-12:00", "15:00-17:00"],
        wednesday: ["9:00-11:00", "13:00-15:00"],
        thursday: ["11:00-13:00", "16:00-18:00"],
        friday: ["9:00-11:00", "14:00-16:00"],
        saturday: ["10:00-12:00"],
        sunday: []
      },
      currentBooking: null,
      nextBooking: "14:00-16:00 - Clinical Skills Tutorial",
      rating: 4.8,
      bookings: 156
    },
    {
      id: 2,
      name: "Tutorial Room A-102",
      building: "Academic Block A",
      floor: "1st Floor",
      capacity: 30,
      type: "Medium Group",
      status: "occupied",
      equipment: ["Smart Board", "Projector", "Whiteboard", "Audio System", "Video Conference", "Computers"],
      features: ["Air Conditioning", "Natural Light", "Sound Proof", "WiFi", "Power Backup", "Recording System"],
      availability: {
        monday: ["10:00-12:00", "15:00-17:00"],
        tuesday: ["9:00-11:00", "14:00-16:00"],
        wednesday: ["11:00-13:00", "16:00-18:00"],
        thursday: ["9:00-11:00", "13:00-15:00"],
        friday: ["10:00-12:00", "15:00-17:00"],
        saturday: [],
        sunday: []
      },
      currentBooking: "10:00-12:00 - Anatomy Tutorial",
      nextBooking: "15:00-17:00 - Physiology Discussion",
      rating: 4.7,
      bookings: 142
    },
    {
      id: 3,
      name: "Tutorial Room B-201",
      building: "Academic Block B",
      floor: "2nd Floor",
      capacity: 20,
      type: "Small Group",
      status: "available",
      equipment: ["Smart Board", "Projector", "Whiteboard", "Audio System"],
      features: ["Air Conditioning", "Natural Light", "WiFi", "Power Backup"],
      availability: {
        monday: ["11:00-13:00", "16:00-18:00"],
        tuesday: ["9:00-11:00", "14:00-16:00"],
        wednesday: ["10:00-12:00", "15:00-17:00"],
        thursday: ["9:00-11:00", "13:00-15:00"],
        friday: ["11:00-13:00", "16:00-18:00"],
        saturday: ["9:00-11:00"],
        sunday: []
      },
      currentBooking: null,
      nextBooking: "11:00-13:00 - Biochemistry Tutorial",
      rating: 4.6,
      bookings: 128
    },
    {
      id: 4,
      name: "Tutorial Room B-202",
      building: "Academic Block B",
      floor: "2nd Floor",
      capacity: 35,
      type: "Large Group",
      status: "maintenance",
      equipment: ["Smart Board", "Projector", "Whiteboard", "Audio System", "Video Conference", "Computers"],
      features: ["Air Conditioning", "Natural Light", "Sound Proof", "WiFi", "Power Backup", "Recording System"],
      availability: {
        monday: ["9:00-11:00", "14:00-16:00"],
        tuesday: ["10:00-12:00", "15:00-17:00"],
        wednesday: ["9:00-11:00", "13:00-15:00"],
        thursday: ["11:00-13:00", "16:00-18:00"],
        friday: ["9:00-11:00", "14:00-16:00"],
        saturday: ["10:00-12:00"],
        sunday: []
      },
      currentBooking: "Under Maintenance",
      nextBooking: "Available from Tomorrow",
      rating: 4.9,
      bookings: 189
    },
    {
      id: 5,
      name: "Tutorial Room C-301",
      building: "Academic Block C",
      floor: "3rd Floor",
      capacity: 25,
      type: "Small Group",
      status: "available",
      equipment: ["Smart Board", "Projector", "Whiteboard", "Audio System", "Computers"],
      features: ["Air Conditioning", "Natural Light", "WiFi", "Power Backup"],
      availability: {
        monday: ["9:00-11:00", "14:00-16:00"],
        tuesday: ["10:00-12:00", "15:00-17:00"],
        wednesday: ["11:00-13:00", "16:00-18:00"],
        thursday: ["9:00-11:00", "13:00-15:00"],
        friday: ["10:00-12:00", "15:00-17:00"],
        saturday: ["9:00-11:00"],
        sunday: []
      },
      currentBooking: null,
      nextBooking: "14:00-16:00 - Pharmacology Tutorial",
      rating: 4.5,
      bookings: 98
    },
    {
      id: 6,
      name: "Tutorial Room C-302",
      building: "Academic Block C",
      floor: "3rd Floor",
      capacity: 40,
      type: "Large Group",
      status: "available",
      equipment: ["Smart Board", "Projector", "Whiteboard", "Audio System", "Video Conference", "Computers"],
      features: ["Air Conditioning", "Natural Light", "Sound Proof", "WiFi", "Power Backup", "Recording System"],
      availability: {
        monday: ["10:00-12:00", "15:00-17:00"],
        tuesday: ["9:00-11:00", "14:00-16:00"],
        wednesday: ["11:00-13:00", "16:00-18:00"],
        thursday: ["9:00-11:00", "13:00-15:00"],
        friday: ["10:00-12:00", "15:00-17:00"],
        saturday: [],
        sunday: []
      },
      currentBooking: null,
      nextBooking: "10:00-12:00 - Microbiology Tutorial",
      rating: 4.8,
      bookings: 167
    }
  ]

  const todaySchedule = [
    {
      time: "9:00-11:00",
      room: "A-101",
      subject: "Anatomy Tutorial",
      instructor: "Dr. M. Ali",
      group: "Batch 2024 - Group A",
      type: "tutorial",
      status: "completed"
    },
    {
      time: "10:00-12:00",
      room: "A-102",
      subject: "Physiology Discussion",
      instructor: "Prof. Dr. S. Karim",
      group: "Batch 2024 - Group B",
      type: "discussion",
      status: "in-progress"
    },
    {
      time: "11:00-13:00",
      room: "B-201",
      subject: "Biochemistry Tutorial",
      instructor: "Dr. A. Rahman",
      group: "Batch 2023 - Group A",
      type: "tutorial",
      status: "upcoming"
    },
    {
      time: "14:00-16:00",
      room: "A-101",
      subject: "Clinical Skills Tutorial",
      instructor: "Dr. N. Ahmed",
      group: "Batch 2024 - Group C",
      type: "practical",
      status: "upcoming"
    },
    {
      time: "15:00-17:00",
      room: "A-102",
      subject: "Pathology Discussion",
      instructor: "Prof. Dr. R. Islam",
      group: "Batch 2023 - Group B",
      type: "discussion",
      status: "upcoming"
    },
    {
      time: "16:00-18:00",
      room: "B-201",
      subject: "Pharmacology Tutorial",
      instructor: "Dr. K. Hossain",
      group: "Batch 2024 - Group D",
      type: "tutorial",
      status: "upcoming"
    }
  ]

  const resources = [
    {
      name: "Digital Whiteboard Templates",
      type: "templates",
      category: "teaching",
      description: "Pre-designed templates for various medical subjects",
      downloads: 1240,
      rating: 4.7,
      size: "45 MB",
      format: "PPT, PDF"
    },
    {
      name: "Tutorial Session Recordings",
      type: "videos",
      category: "learning",
      description: "Recorded tutorial sessions for review",
      downloads: 890,
      rating: 4.8,
      size: "2.3 GB",
      format: "MP4"
    },
    {
      name: "Interactive Case Studies",
      type: "cases",
      category: "assessment",
      description: "Clinical case studies for group discussion",
      downloads: 567,
      rating: 4.6,
      size: "120 MB",
      format: "PDF, Interactive"
    },
    {
      name: "Assessment Tools",
      type: "assessment",
      category: "evaluation",
      description: "Tools for evaluating student performance",
      downloads: 432,
      rating: 4.5,
      size: "28 MB",
      format: "Excel, Forms"
    },
    {
      name: "Reference Materials",
      type: "reference",
      category: "study",
      description: "Comprehensive reference materials for tutorials",
      downloads: 2100,
      rating: 4.9,
      size: "890 MB",
      format: "PDF, E-books"
    },
    {
      name: "Teaching Guidelines",
      type: "guidelines",
      category: "instruction",
      description: "Best practices for conducting tutorials",
      downloads: 345,
      rating: 4.7,
      size: "15 MB",
      format: "PDF, DOC"
    }
  ]

  const bookingRequests = [
    {
      id: 1,
      requester: "Dr. M. Ali",
      department: "Anatomy",
      room: "A-101",
      date: "2025-02-15",
      time: "14:00-16:00",
      purpose: "Anatomy Tutorial for Batch 2024",
      participants: 25,
      status: "approved",
      requestedAt: "2025-02-10"
    },
    {
      id: 2,
      requester: "Prof. Dr. S. Karim",
      department: "Physiology",
      room: "B-201",
      date: "2025-02-16",
      time: "10:00-12:00",
      purpose: "Physiology Discussion Session",
      participants: 20,
      status: "pending",
      requestedAt: "2025-02-11"
    },
    {
      id: 3,
      requester: "Dr. A. Rahman",
      department: "Biochemistry",
      room: "C-301",
      date: "2025-02-17",
      time: "15:00-17:00",
      purpose: "Biochemistry Practical Tutorial",
      participants: 18,
      status: "pending",
      requestedAt: "2025-02-12"
    }
  ]

  const stats = [
    { label: "Total Rooms", value: "6", icon: Building, color: "bg-blue-500" },
    { label: "Available Now", value: "4", icon: CheckCircle, color: "bg-green-500" },
    { label: "Today's Sessions", value: "18", icon: Calendar, color: "bg-purple-500" },
    { label: "Total Bookings", value: "880", icon: Users, color: "bg-orange-500" }
  ]

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className={`${stat.color} text-white`}>
            <CardContent className="p-6 text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
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
                    <div className="text-sm text-gray-600">{session.subject}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{session.room}</div>
                  <div className="text-xs text-gray-600">{session.instructor}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-800 mb-2">Book a Room</h3>
            <p className="text-sm text-gray-600">Reserve tutorial room for your session</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <MessageSquare className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-800 mb-2">View Schedule</h3>
            <p className="text-sm text-gray-600">Check room availability and bookings</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <Download className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-800 mb-2">Resources</h3>
            <p className="text-sm text-gray-600">Access teaching materials and templates</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderRooms = () => (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex gap-2 border-b">
        {['all', 'available', 'occupied', 'maintenance'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeFilter === filter
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorialRooms
          .filter(room => activeFilter === 'all' || room.status === activeFilter)
          .map((room) => (
          <Card key={room.id} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{room.name}</h3>
                  <p className="text-sm text-gray-600">{room.building} • {room.floor}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  room.status === 'available' ? 'bg-green-500' :
                  room.status === 'occupied' ? 'bg-red-500' :
                  'bg-yellow-500'
                }`}></div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Capacity:</span>
                  <span className="font-medium">{room.capacity} students</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">{room.type}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Rating:</span>
                  <span className="font-medium">⭐ {room.rating}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Equipment:</h4>
                <div className="flex flex-wrap gap-1">
                  {room.equipment.slice(0, 3).map((item, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {item}
                    </span>
                  ))}
                  {room.equipment.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      +{room.equipment.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Current Status:</h4>
                <p className="text-sm text-gray-600">
                  {room.currentBooking || room.nextBooking}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                {room.status === 'available' && (
                  <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Book Now
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderSchedule = () => (
    <div className="space-y-8">
      {/* Week View */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Weekly Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="text-center">
                <div className="font-semibold text-gray-800 mb-2">{day}</div>
                <div className="space-y-1">
                  {tutorialRooms.slice(0, 3).map((room, roomIndex) => (
                    <div key={roomIndex} className="bg-blue-100 text-blue-700 text-xs p-1 rounded">
                      {room.name.split('-')[0]}
                    </div>
                  ))}
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
                    <div className="font-semibold text-gray-800">{session.subject}</div>
                    <div className="text-sm text-gray-600">
                      {session.time} • {session.room} • {session.instructor}
                    </div>
                    <div className="text-xs text-gray-500">{session.group}</div>
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

  const renderResources = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileTextIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-1">{resource.name}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">{resource.type}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Size:</span>
                  <span className="font-medium">{resource.size}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-medium">{resource.format}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Rating:</span>
                  <span className="font-medium">⭐ {resource.rating}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderBooking = () => (
    <div className="space-y-8">
      {/* Booking Form */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>New Booking Request</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Requester Name</label>
              <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
              <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter department" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Room Preference</label>
              <select className="w-full p-2 border rounded-lg">
                <option>Select a room</option>
                {tutorialRooms.map(room => (
                  <option key={room.id} value={room.id}>
                    {room.name} ({room.capacity} capacity)
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input type="date" className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot</label>
              <select className="w-full p-2 border rounded-lg">
                <option>Select time slot</option>
                <option>9:00-11:00</option>
                <option>10:00-12:00</option>
                <option>11:00-13:00</option>
                <option>14:00-16:00</option>
                <option>15:00-17:00</option>
                <option>16:00-18:00</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Participants</label>
              <input type="number" className="w-full p-2 border rounded-lg" placeholder="Enter number of participants" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
              <textarea className="w-full p-2 border rounded-lg" rows={3} placeholder="Describe the purpose of booking"></textarea>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Submit Request
            </button>
            <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Cancel
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Booking Requests */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Recent Booking Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bookingRequests.map((request, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold text-gray-800">{request.purpose}</div>
                    <div className="text-sm text-gray-600">
                      {request.requester} • {request.department} • {request.room}
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    request.status === 'approved' ? 'bg-green-100 text-green-700' :
                    request.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {request.status}
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{request.date} • {request.time}</span>
                  <span>{request.participants} participants</span>
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
      case 'rooms': return renderRooms()
      case 'schedule': return renderSchedule()
      case 'resources': return renderResources()
      case 'booking': return renderBooking()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{backgroundColor: '#E7EEE7'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-green-600/5"></div>
        <div className="relative responsive-container-full py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300">
                  <BookMarkedIcon className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Tutorial Rooms</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Modern tutorial facilities designed for interactive learning and small group discussions
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Interactive Learning
                </div>
                <div className="bg-white/70 backdrop-blur-md px-6 py-3 rounded-full text-lg font-semibold text-gray-800">
                  Smart Technology
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-lg">
        <div className="responsive-container-full">
          <div className="flex overflow-x-auto">
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
          <h2 className="text-3xl font-bold mb-4">Enhance Your Teaching Experience</h2>
          <p className="text-xl mb-8 opacity-90">Book our modern tutorial rooms for interactive and engaging learning sessions</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book a Room
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
