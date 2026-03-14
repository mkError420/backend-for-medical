"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Wifi, 
  Tv, 
  Coffee, 
  Droplets, 
  Bed, 
  Shield, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Award, 
  CheckCircle, 
  Building, 
  MapPin, 
  Star,
  ChevronRight,
  HelpCircle,
  BookOpen,
  Heart,
  Target,
  Lightbulb,
  Settings,
  Zap,
  TrendingUp,
  Eye,
  FileText,
  Download,
  Upload,
  MessageSquare,
  Activity,
  HandHelping,
  UserCheck,
  UserPlus,
  Users2,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Calendar as CalendarIcon,
  Dumbbell,
  Gamepad2,
  Music,
  Utensils,
  WashingMachine,
  Refrigerator,
  Microwave,
  AirVent,
  Fan,
  Thermometer,
  Lock,
  Key,
  Car,
  Camera,
  Monitor,
  Laptop,
  Smartphone,
  Tablet,
  Globe,
  Compass,
  Map,
  Navigation,
  AlertCircle,
  Heart as HeartIcon,
  FireExtinguisher,
  Bell,
  Megaphone,
  Video,
  Image,
  Play
} from "lucide-react"

export default function BoysHostelFacilitiesPage() {
  const [activeCategory, setActiveCategory] = useState('accommodation')

  const hostelInfo = {
    name: "Boys Hostel Facilities",
    tagline: "Modern amenities and comfortable living spaces for students",
    established: "2010",
    capacity: "500 students",
    description: "The Boys Hostel offers comprehensive facilities designed to provide a comfortable, safe, and productive living environment for students. Our modern amenities and well-maintained spaces ensure that residents have everything they need for academic success and personal wellbeing.",
    mission: "To create a home away from home with world-class facilities that support academic excellence, personal growth, and community living."
  }

  const quickStats = [
    {
      icon: <Bed className="w-6 h-6" />,
      value: "200+",
      label: "Rooms",
      description: "Well-furnished student rooms",
      color: "text-blue-600"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      value: "High-Speed",
      label: "Internet",
      description: "Fiber optic connectivity",
      color: "text-green-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      value: "24/7",
      label: "Security",
      description: "Round-the-clock protection",
      color: "text-purple-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.9",
      label: "Rating",
      description: "Student satisfaction rating",
      color: "text-orange-600"
    }
  ]

  const facilityCategories = [
    {
      id: "accommodation",
      name: "Accommodation",
      icon: <Bed className="w-4 h-4" />
    },
    {
      id: "recreation",
      name: "Recreation",
      icon: <Gamepad2 className="w-4 h-4" />
    },
    {
      id: "dining",
      name: "Dining",
      icon: <Utensils className="w-4 h-4" />
    },
    {
      id: "utilities",
      name: "Utilities",
      icon: <Settings className="w-4 h-4" />
    },
    {
      id: "security",
      name: "Security",
      icon: <Shield className="w-4 h-4" />
    },
    {
      id: "academic",
      name: "Academic",
      icon: <BookOpen className="w-4 h-4" />
    }
  ]

  const facilities = {
    accommodation: [
      {
        name: "Student Rooms",
        icon: <Bed className="w-8 h-8 text-blue-500" />,
        description: "Comfortable and well-furnished rooms for students",
        features: ["Single and double occupancy", "Study tables and chairs", "Wardrobes and storage", "Air conditioning", "Natural lighting", "Ventilation"],
        capacity: "200 rooms",
        availability: "Available for all students",
        image: "/facilities/student-rooms.jpg"
      },
      {
        name: "Common Areas",
        icon: <Users className="w-8 h-8 text-green-500" />,
        description: "Shared spaces for relaxation and social interaction",
        features: ["Lounge areas", "TV rooms", "Reading corners", "Indoor games", "Music systems", "Comfortable seating"],
        capacity: "5 common areas",
        availability: "Open to all residents",
        image: "/facilities/common-areas.jpg"
      },
      {
        name: "Study Rooms",
        icon: <BookOpen className="w-8 h-8 text-purple-500" />,
        description: "Quiet spaces dedicated to academic work",
        features: ["Individual study cubicles", "Group study rooms", "Whiteboards", "High-speed internet", "Power outlets", "24/7 access"],
        capacity: "10 study rooms",
        availability: "Open 24/7",
        image: "/facilities/study-rooms.jpg"
      }
    ],
    recreation: [
      {
        name: "Gaming Zone",
        icon: <Gamepad2 className="w-8 h-8 text-indigo-500" />,
        description: "Modern gaming facilities for entertainment",
        features: ["Gaming consoles", "PC gaming stations", "VR gaming", "Board games", "Tournaments", "Comfortable seating"],
        capacity: "20 gaming stations",
        availability: "10:00 AM - 10:00 PM",
        image: "/facilities/gaming-zone.jpg"
      },
      {
        name: "Music Room",
        icon: <Music className="w-8 h-8 text-pink-500" />,
        description: "Space for music enthusiasts and practice",
        features: ["Musical instruments", "Soundproof rooms", "Recording equipment", "Practice sessions", "Music lessons", "Jam sessions"],
        capacity: "5 rooms",
        availability: "2:00 PM - 9:00 PM",
        image: "/facilities/music-room.jpg"
      },
      {
        name: "Fitness Center",
        icon: <Dumbbell className="w-8 h-8 text-red-500" />,
        description: "Well-equipped gym for physical fitness",
        features: ["Cardio machines", "Weight training", "Free weights", "Fitness trainers", "Locker rooms", "Shower facilities"],
        capacity: "30 students",
        availability: "6:00 AM - 10:00 PM",
        image: "/facilities/fitness-center.jpg"
      }
    ],
    dining: [
      {
        name: "Main Mess",
        icon: <Utensils className="w-8 h-8 text-orange-500" />,
        description: "Hygienic and nutritious food service",
        features: ["Vegetarian and non-vegetarian", "Nutritious meals", "Hygienic preparation", "Dining hall", "Special dietary options", "Meal timing"],
        capacity: "300 students per sitting",
        availability: "Breakfast, Lunch, Dinner",
        image: "/facilities/main-mess.jpg"
      },
      {
        name: "Kitchen Facilities",
        icon: <Coffee className="w-8 h-8 text-amber-500" />,
        description: "Self-cooking facilities for students",
        features: ["Microwave ovens", "Refrigerators", "Cooking ranges", "Utensils", "Dining area", "Cleaning supplies"],
        capacity: "10 cooking stations",
        availability: "6:00 AM - 11:00 PM",
        image: "/facilities/kitchen-facilities.jpg"
      },
      {
        name: "Cafeteria",
        icon: <Coffee className="w-8 h-8 text-brown-500" />,
        description: "Casual dining and refreshment options",
        features: ["Snacks and beverages", "Fast food", "Coffee and tea", "Seating area", "TV entertainment", "Late night service"],
        capacity: "50 students",
        availability: "8:00 AM - 11:00 PM",
        image: "/facilities/cafeteria.jpg"
      }
    ],
    utilities: [
      {
        name: "Laundry Services",
        icon: <WashingMachine className="w-8 h-8 text-cyan-500" />,
        description: "Modern laundry facilities for residents",
        features: ["Washing machines", "Dryers", "Ironing facilities", "Detergent supply", "Folding area", "24/7 access"],
        capacity: "20 machines",
        availability: "24/7 access",
        image: "/facilities/laundry-services.jpg"
      },
      {
        name: "Water Supply",
        icon: <Droplets className="w-8 h-8 text-blue-500" />,
        description: "Continuous hot and cold water supply",
        features: ["Hot water geysers", "Cold water coolers", "Water purifiers", "24/7 supply", "Pressure pumps", "Backup systems"],
        capacity: "Unlimited",
        availability: "24/7",
        image: "/facilities/water-supply.jpg"
      },
      {
        name: "Power Backup",
        icon: <Zap className="w-8 h-8 text-yellow-500" />,
        description: "Uninterrupted power supply systems",
        features: ["Generator backup", "UPS systems", "Solar panels", "Automatic switchover", "Power outlets", "Charging stations"],
        capacity: "Full hostel",
        availability: "Automatic backup",
        image: "/facilities/power-backup.jpg"
      }
    ],
    security: [
      {
        name: "Security Personnel",
        icon: <Shield className="w-8 h-8 text-red-500" />,
        description: "Professional security team for safety",
        features: ["24/7 guards", "CCTV surveillance", "Access control", "Visitor management", "Emergency response", "Patrol services"],
        capacity: "15 security staff",
        availability: "24/7",
        image: "/facilities/security-personnel.jpg"
      },
      {
        name: "Access Control",
        icon: <Lock className="w-8 h-8 text-gray-500" />,
        description: "Modern access management systems",
        features: ["Smart card access", "Biometric entry", "Visitor registration", "Exit monitoring", "Time tracking", "Security logs"],
        capacity: "All entry points",
        availability: "24/7 monitoring",
        image: "/facilities/access-control.jpg"
      },
      {
        name: "Emergency Systems",
        icon: <AlertCircle className="w-8 h-8 text-orange-500" />,
        description: "Comprehensive emergency response systems",
        features: ["Fire alarms", "Medical kits", "Emergency exits", "Fire extinguishers", "Emergency lighting", "Evacuation plans"],
        capacity: "Full hostel",
        availability: "24/7 ready",
        image: "/facilities/emergency-systems.jpg"
      }
    ],
    academic: [
      {
        name: "Computer Lab",
        icon: <Laptop className="w-8 h-8 text-indigo-500" />,
        description: "Modern computing facilities for students",
        features: ["High-speed internet", "Software packages", "Printing services", "Scanning facilities", "Technical support", "24/7 access"],
        capacity: "30 computers",
        availability: "8:00 AM - 11:00 PM",
        image: "/facilities/computer-lab.jpg"
      },
      {
        name: "Library Access",
        icon: <BookOpen className="w-8 h-8 text-green-500" />,
        description: "Dedicated library space for residents",
        features: ["Reference books", "Study materials", "Digital resources", "Quiet environment", "Reading areas", "Research support"],
        capacity: "50 students",
        availability: "8:00 AM - 10:00 PM",
        image: "/facilities/library-access.jpg"
      },
      {
        name: "Tutorial Rooms",
        icon: <Monitor className="w-8 h-8 text-purple-500" />,
        description: "Dedicated spaces for group learning",
        features: ["Projector systems", "Whiteboards", "Audio-visual equipment", "Group discussions", "Presentations", "Study groups"],
        capacity: "5 rooms",
        availability: "Booking system",
        image: "/facilities/tutorial-rooms.jpg"
      }
    ]
  }

  const amenities = [
    {
      title: "Room Amenities",
      icon: <Bed className="w-6 h-6" />,
      items: [
        { name: "Furniture", description: "Bed, study table, chair, wardrobe" },
        { name: "Climate Control", description: "Air conditioning and ventilation" },
        { name: "Lighting", description: "LED lights and study lamps" },
        { name: "Storage", description: "Personal storage spaces" }
      ]
    },
    {
      title: "Technology",
      icon: <Wifi className="w-6 h-6" />,
      items: [
        { name: "High-Speed Internet", description: "Fiber optic WiFi connectivity" },
        { name: "Power Outlets", description: "Multiple charging points" },
        { name: "Cable TV", description: "Entertainment channels" },
        { name: "Smart Features", description: "Smart room controls" }
      ]
    },
    {
      title: "Common Facilities",
      icon: <Users className="w-6 h-6" />,
      items: [
        { name: "Recreation Areas", description: "Games and entertainment zones" },
        { name: "Study Spaces", description: "Quiet study environments" },
        { name: "Dining Facilities", description: "Mess and cafeteria" },
        { name: "Fitness Center", description: "Gym and sports facilities" }
      ]
    }
  ]

  const galleryItems = [
    {
      id: 1,
      type: "image",
      title: "Modern Student Rooms",
      description: "Comfortable and well-furnished living spaces with study areas",
      thumbnail: "/gallery/hostel-rooms.jpg",
      fullImage: "/gallery/hostel-rooms-full.jpg",
      category: "accommodation"
    },
    {
      id: 2,
      type: "image",
      title: "Common Lounge Area",
      description: "Spacious lounge for relaxation and social interaction",
      thumbnail: "/gallery/common-lounge.jpg",
      fullImage: "/gallery/common-lounge-full.jpg",
      category: "accommodation"
    },
    {
      id: 3,
      type: "image",
      title: "Study Room Facilities",
      description: "Quiet and well-equipped study spaces for academic work",
      thumbnail: "/gallery/study-rooms.jpg",
      fullImage: "/gallery/study-rooms-full.jpg",
      category: "academic"
    },
    {
      id: 4,
      type: "video",
      title: "Gaming Zone Tour",
      description: "Virtual tour of modern gaming and entertainment facilities",
      thumbnail: "/gallery/gaming-zone.jpg",
      videoUrl: "/gallery/gaming-zone-tour.mp4",
      duration: "3:30",
      category: "recreation"
    },
    {
      id: 5,
      type: "image",
      title: "Fitness Center",
      description: "State-of-the-art gym equipment and fitness facilities",
      thumbnail: "/gallery/fitness-center.jpg",
      fullImage: "/gallery/fitness-center-full.jpg",
      category: "recreation"
    },
    {
      id: 6,
      type: "image",
      title: "Music Room",
      description: "Soundproof rooms with musical instruments for practice",
      thumbnail: "/gallery/music-room.jpg",
      fullImage: "/gallery/music-room-full.jpg",
      category: "recreation"
    },
    {
      id: 7,
      type: "image",
      title: "Main Mess Hall",
      description: "Hygienic dining hall serving nutritious meals",
      thumbnail: "/gallery/mess-hall.jpg",
      fullImage: "/gallery/mess-hall-full.jpg",
      category: "dining"
    },
    {
      id: 8,
      type: "video",
      title: "Kitchen Facilities Overview",
      description: "Self-cooking facilities and modern kitchen amenities",
      thumbnail: "/gallery/kitchen-facilities.jpg",
      videoUrl: "/gallery/kitchen-facilities-tour.mp4",
      duration: "2:45",
      category: "dining"
    },
    {
      id: 9,
      type: "image",
      title: "Laundry Services",
      description: "Modern washing machines and drying facilities",
      thumbnail: "/gallery/laundry-services.jpg",
      fullImage: "/gallery/laundry-services-full.jpg",
      category: "utilities"
    },
    {
      id: 10,
      type: "image",
      title: "Security Control Room",
      description: "24/7 surveillance and security monitoring systems",
      thumbnail: "/gallery/security-control.jpg",
      fullImage: "/gallery/security-control-full.jpg",
      category: "security"
    },
    {
      id: 11,
      type: "video",
      title: "Computer Lab Tour",
      description: "Modern computing facilities with high-speed internet",
      thumbnail: "/gallery/computer-lab.jpg",
      videoUrl: "/gallery/computer-lab-tour.mp4",
      duration: "4:15",
      category: "academic"
    },
    {
      id: 12,
      type: "image",
      title: "Emergency Systems",
      description: "Fire safety and emergency response equipment",
      thumbnail: "/gallery/emergency-systems.jpg",
      fullImage: "/gallery/emergency-systems-full.jpg",
      category: "security"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="text-center text-gray-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-700">{hostelInfo.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90 text-gray-600">
                {hostelInfo.tagline}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{hostelInfo.established}</div>
                <div className="text-lg font-medium text-gray-500">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{hostelInfo.capacity}</div>
                <div className="text-lg font-medium text-gray-500">Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">200+</div>
                <div className="text-lg font-medium text-gray-500">Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">4.9★</div>
                <div className="text-lg font-medium text-gray-500">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Facility Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className={stat.color}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-600">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Facility Categories</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {facilityCategories.map(category => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Facility Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities[activeCategory as keyof typeof facilities].map((facility: any, index: number) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      {facility.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-800">{facility.name}</h3>
                      <p className="text-sm text-gray-600">{facility.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <img 
                      src={facility.image} 
                      alt={facility.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {facility.features.map((feature: string, featureIndex: number) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-semibold">Capacity:</span>
                        <span>{facility.capacity}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Availability:</span>
                        <span>{facility.availability}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Additional Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      {amenity.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 ml-3">{amenity.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {amenity.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-800">{item.name}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Facilities Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item: any) => (
              <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="absolute top-2 right-2">
                      {item.type === "video" ? (
                        <Badge className="bg-red-500 text-white">
                          <Video className="w-3 h-3 mr-1" />
                          {item.duration}
                        </Badge>
                      ) : (
                        <Badge className="bg-blue-500 text-white">
                          <Image className="w-3 h-3 mr-1" />
                          Image
                        </Badge>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {item.type === "video" ? (
                        <Button className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-4">
                          <Play className="w-6 h-6" />
                        </Button>
                      ) : (
                        <Button className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-4">
                          <Eye className="w-6 h-6" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <Button variant="outline" size="sm">
                        {item.type === "video" ? "Watch Video" : "View Image"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <Card className="border-0">
            <CardContent className="p-8 text-center">
              <div className="max-w-4xl mx-auto">
                <Building className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {hostelInfo.mission}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
