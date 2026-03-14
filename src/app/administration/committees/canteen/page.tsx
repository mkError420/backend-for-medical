"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Target, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, BookOpen, GraduationCap, UserCheck, Clock, Coffee, ChefHat, Utensils, Package } from "lucide-react"

export default function CanteenPage() {
  const [activeTab, setActiveTab] = useState("management")

  const canteenCommittee = [
    {
      name: "Prof. Dr. M. A. Rahman",
      position: "Canteen Committee Chairman",
      role: "Overall Canteen Management",
      email: "canteen.chairman@rcmc.edu.bd",
      phone: "+88-0123457500",
      experience: "18+ years",
      qualification: "MBBS, MD, MHA",
      specialization: "Food Service Management & Nutrition",
      avatar: "MR",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Dr. S. K. Ahmed",
      position: "Canteen Manager",
      role: "Operations & Food Quality",
      email: "canteen.manager@rcmc.edu.bd",
      phone: "+88-0123457501",
      experience: "12+ years",
      qualification: "MBBS, M.Sc. (Food Science)",
      specialization: "Food Safety & Quality Control",
      avatar: "SA",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Prof. Dr. R. C. Mondal",
      position: "Senior Canteen Officer",
      role: "Nutrition & Menu Planning",
      email: "nutrition.officer@rcmc.edu.bd",
      phone: "+88-0123457502",
      experience: "15+ years",
      qualification: "MBBS, M.Sc. (Nutrition)",
      specialization: "Dietary Planning & Student Nutrition",
      avatar: "RM",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Ms. N. A. Begum",
      position: "Canteen Officer",
      role: "Student Food Services",
      email: "student.food@rcmc.edu.bd",
      phone: "+88-0123457503",
      experience: "10+ years",
      qualification: "B.Sc., M.Sc. (Food Technology)",
      specialization: "Student Meal Planning & Service Quality",
      avatar: "NB",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Mr. K. M. Hassan",
      position: "Assistant Canteen Officer",
      role: "Procurement & Supply Management",
      email: "procurement.officer@rcmc.edu.bd",
      phone: "+88-0123457504",
      experience: "8+ years",
      qualification: "B.Com., M.Sc. (Supply Chain)",
      specialization: "Food Procurement & Vendor Management",
      avatar: "KH",
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "Ms. F. R. Chowdhury",
      position: "Canteen Supervisor",
      role: "Daily Operations & Staff Management",
      email: "supervisor.canteen@rcmc.edu.bd",
      phone: "+88-0123457505",
      experience: "6+ years",
      qualification: "B.Sc., M.Sc. (Hospitality)",
      specialization: "Staff Training & Customer Service",
      avatar: "FC",
      color: "from-teal-500 to-cyan-600"
    }
  ]

  const canteenServices = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Meal Services",
      description: "Breakfast, lunch, and dinner service"
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Nutrition Programs",
      description: "Balanced and nutritious meal planning"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Catering Services",
      description: "Special events and party catering"
    },
    {
      icon: <ChefHat className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Food safety and quality standards"
    }
  ]

  const menuHighlights = [
    {
      day: "Monday",
      special: "Fish Day",
      items: ["Grilled Fish", "Fish Curry", "Mixed Vegetables", "Rice", "Salad"]
    },
    {
      day: "Tuesday",
      special: "Chicken Special",
      items: ["Fried Chicken", "Chicken Biryani", "Vegetable Pulao", "Raita", "Curd"]
    },
    {
      day: "Wednesday",
      special: "Vegetarian Delight",
      items: ["Mixed Vegetables", "Dal Makhani", "Paneer Tikka", "Roti", "Papad"]
    },
    {
      day: "Thursday",
      special: "Beef Day",
      items: ["Beef Curry", "Beef Biryani", "Mixed Vegetables", "Rice", "Yogurt"]
    },
    {
      day: "Friday",
      special: "Seafood Special",
      items: ["Prawn Curry", "Fish Fry", "Mixed Vegetables", "Rice", "Sweet Dish"]
    }
  ]

  const canteenStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "5",
      label: "Committee Members",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      number: "1000+",
      label: "Daily Meals Served",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "100%",
      label: "Food Safety Compliance",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "24/7",
      label: "Service Availability",
      color: "from-purple-400 to-purple-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Hero Section */}
      <div className="bg-[#EAEAEA] text-green-600">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Canteen Committee</h1>
            <p className="text-xl md:text-2xl text-black-800 leading-relaxed mb-8">
              Quality Food Service for Our Campus Community
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 inline-flex">
                <button
                  onClick={() => setActiveTab("management")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "management"
                      ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                      : "text-orange-600 hover:text-orange-800 hover:bg-white/10"
                  }`}
                >
                  <Users className="inline w-4 h-4 mr-2" />
                  Management
                </button>
                <button
                  onClick={() => setActiveTab("menu")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "menu"
                      ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                      : "text-orange-600 hover:text-orange-800 hover:bg-white/10"
                  }`}
                >
                  <Utensils className="inline w-4 h-4 mr-2" />
                  Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="responsive-container-full py-12">
        <div className="max-w-6xl mx-auto">
          {/* Management Tab */}
          {activeTab === "management" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-orange-900 mb-4">Canteen Management</h2>
                <p className="text-xl text-orange-600">Ensuring quality food service and nutrition</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {canteenCommittee.map((member, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-orange-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white text-xl font-bold">{member.avatar}</span>
                      </div>
                      <h3 className="text-lg font-bold text-orange-900 mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-orange-700 mb-1">{member.position}</p>
                      <p className="text-xs text-orange-500 mb-3">{member.role}</p>
                      
                      <div className="space-y-2 text-xs mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <Mail className="w-3 h-3 text-orange-400" />
                          <span className="text-orange-600">{member.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="w-3 h-3 text-orange-400" />
                          <span className="text-orange-600">{member.phone}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-orange-200">
                        <p className="text-xs text-orange-500 mb-1">Experience: {member.experience}</p>
                        <p className="text-xs text-orange-500 mb-1">Qualification: {member.qualification}</p>
                        <p className="text-xs text-orange-500">Specialization: {member.specialization}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Canteen Services */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-orange-900 mb-8 text-center">Canteen Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {canteenServices.map((service, index) => (
                    <Card key={index} className="bg-white/80 backdrop-blur-md border border-orange-200 hover:bg-white/90 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                          {service.icon}
                        </div>
                        <h4 className="text-lg font-bold text-orange-900 mb-2">{service.title}</h4>
                        <p className="text-sm text-orange-600">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {canteenStats.map((stat, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-orange-200 hover:bg-white/90 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-orange-900 mb-1">{stat.number}</div>
                        <div className="text-orange-600">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </div>
          )}

          {/* Menu Tab */}
          {activeTab === "menu" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-orange-900 mb-4">Weekly Menu Highlights</h2>
                <p className="text-xl text-orange-600">Nutritious and delicious meals every day</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuHighlights.map((menu, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-md border border-orange-200 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-orange-900 mb-2">{menu.day}</h3>
                          <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {menu.special}
                          </div>
                        </div>
                        <Package className="w-6 h-6 text-orange-400" />
                      </div>
                      <ul className="space-y-2">
                        {menu.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-orange-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-md border border-orange-200">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-orange-900 mb-6">Contact Canteen Committee</h2>
                <p className="text-orange-600 mb-8 max-w-2xl mx-auto">
                  For canteen services, meal inquiries, or feedback, please contact our Canteen Committee through the following channels:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-semibold text-orange-900">Canteen Location</h3>
                      <p className="text-orange-600 text-sm">Main Campus Building</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-semibold text-orange-900">Canteen Phone</h3>
                      <p className="text-orange-600 text-sm">+88-0123457500</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-600" />
                    <div>
                      <h3 className="font-semibold text-orange-900">Canteen Email</h3>
                      <p className="text-orange-600 text-sm">canteen@rcmc.edu.bd</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-orange-50 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-orange-900 mb-2">Service Hours</h3>
                  <p className="text-orange-600">Breakfast: 7:00 AM - 9:00 AM</p>
                  <p className="text-orange-600">Lunch: 12:00 PM - 2:00 PM</p>
                  <p className="text-orange-600">Dinner: 7:00 PM - 9:00 PM</p>
                  <p className="text-orange-600">Friday: 8:00 AM - 2:00 PM</p>
                  <p className="text-orange-600">Saturday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
