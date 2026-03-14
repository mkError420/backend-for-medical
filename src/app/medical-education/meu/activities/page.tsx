"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  Trophy, 
  Music, 
  Gamepad2, 
  Dumbbell, 
  BookOpen, 
  Palette, 
  Camera, 
  Mic, 
  Drama, 
  Heart, 
  Star, 
  Award, 
  Target, 
  Lightbulb, 
  Zap, 
  TrendingUp, 
  Activity, 
  MessageSquare, 
  ChevronRight,
  HelpCircle,
  Phone,
  Mail,
  Globe,
  Video,
  Download,
  Upload,
  Settings,
  Shield,
  Coffee,
  Smile,
  Eye,
  FileText,
  CheckCircle,
  Calendar as CalendarIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  User,
  UserPlus,
  Users2,
  Mail as MailIcon,
  Phone as PhoneIcon,
  GraduationCap,
  Briefcase,
  Stethoscope,
  HeartPulse,
  Microscope,
  TestTube,
  Brain,
  FileCheck,
  Clipboard,
  Award as AwardIcon,
  Play,
  Image as ImageIcon
} from "lucide-react"

export default function MEUActivitiesPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const activitiesInfo = {
    name: "MEU Activities",
    tagline: "Innovative educational programs for medical excellence",
    established: "2015",
    coordinator: "Dr. Jennifer Adams",
    activities: "50+",
    description: "The Medical Education Unit conducts a wide range of activities designed to enhance teaching quality, faculty development, and educational research in medical education.",
    mission: "To foster excellence in medical education through innovative programs, continuous professional development, and research-based educational practices."
  }

  const quickStats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "500+",
      label: "Participants",
      description: "Faculty and students engaged",
      color: "text-blue-600"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      value: "50+",
      label: "Programs",
      description: "Annual educational activities",
      color: "text-green-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "25+",
      label: "Awards",
      description: "Educational excellence awards",
      color: "text-orange-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.9",
      label: "Rating",
      description: "Program satisfaction rating",
      color: "text-purple-600"
    }
  ]

  const activityCategories = [
    {
      id: "all",
      name: "All Activities",
      icon: <Activity className="w-4 h-4" />
    },
    {
      id: "workshops",
      name: "Workshops",
      icon: <Lightbulb className="w-4 h-4" />
    },
    {
      id: "seminars",
      name: "Seminars",
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      id: "training",
      name: "Training",
      icon: <GraduationCap className="w-4 h-4" />
    },
    {
      id: "research",
      name: "Research",
      icon: <Microscope className="w-4 h-4" />
    },
    {
      id: "assessment",
      name: "Assessment",
      icon: <Clipboard className="w-4 h-4" />
    },
    {
      id: "development",
      name: "Development",
      icon: <TrendingUp className="w-4 h-4" />
    }
  ]

  const activities = {
    workshops: [
      {
        name: "Advanced Teaching Methods Workshop",
        icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
        description: "Innovative teaching techniques for medical educators",
        schedule: "March 15-17",
        venue: "MEU Conference Hall",
        participants: "50 faculty",
        coordinator: "Dr. James Wilson",
        contact: "james.wilson@college.edu",
        features: ["Interactive sessions", "Hands-on practice", "Case studies", "Peer feedback", "Certification"],
        image: "https://picsum.photos/seed/teaching-workshop/400/300.jpg"
      },
      {
        name: "Educational Technology Workshop",
        icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
        description: "Digital tools and e-learning platforms",
        schedule: "April 10-12",
        venue: "Computer Lab",
        participants: "40 faculty",
        coordinator: "Dr. Maria Garcia",
        contact: "maria.garcia@college.edu",
        features: ["LMS training", "Digital assessment", "Online teaching", "Multimedia creation", "Technical support"],
        image: "https://picsum.photos/seed/edtech-workshop/400/300.jpg"
      },
      {
        name: "Assessment Design Workshop",
        icon: <Lightbulb className="w-8 h-8 text-green-500" />,
        description: "Creating effective medical assessments",
        schedule: "May 5-7",
        venue: "Assessment Center",
        participants: "35 faculty",
        coordinator: "Dr. Sarah Williams",
        contact: "sarah.williams@college.edu",
        features: ["Question writing", "Blueprint design", "OSCE creation", "Standard setting", "Quality control"],
        image: "https://picsum.photos/seed/assessment-workshop/400/300.jpg"
      }
    ],
    seminars: [
      {
        name: "Medical Education Trends Seminar",
        icon: <BookOpen className="w-8 h-8 text-purple-500" />,
        description: "Latest trends in medical education",
        schedule: "March 20",
        venue: "Main Auditorium",
        participants: "200+ attendees",
        coordinator: "Dr. Robert Mitchell",
        contact: "robert.mitchell@college.edu",
        features: ["Expert speakers", "Panel discussions", "Q&A sessions", "Networking", "Certificate"],
        image: "https://picsum.photos/seed/edu-trends-seminar/400/300.jpg"
      },
      {
        name: "Curriculum Innovation Seminar",
        icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
        description: "Innovative approaches to curriculum design",
        schedule: "April 25",
        venue: "Conference Hall",
        participants: "150 attendees",
        coordinator: "Dr. Michael Chen",
        contact: "michael.chen@college.edu",
        features: ["Case presentations", "Best practices", "Implementation strategies", "Evaluation methods", "Resources sharing"],
        image: "https://picsum.photos/seed/curriculum-seminar/400/300.jpg"
      },
      {
        name: "Student Assessment Seminar",
        icon: <BookOpen className="w-8 h-8 text-pink-500" />,
        description: "Modern assessment techniques in medical education",
        schedule: "May 18",
        venue: "Seminar Room",
        participants: "100 attendees",
        coordinator: "Dr. David Lee",
        contact: "david.lee@college.edu",
        features: ["Formative assessment", "Summative evaluation", "Feedback systems", "Data analysis", "Quality improvement"],
        image: "https://picsum.photos/seed/assessment-seminar/400/300.jpg"
      }
    ],
    training: [
      {
        name: "Faculty Development Program",
        icon: <GraduationCap className="w-8 h-8 text-cyan-500" />,
        description: "Comprehensive faculty training program",
        schedule: "Year-long",
        venue: "MEU Building",
        participants: "100+ faculty",
        coordinator: "Dr. James Wilson",
        contact: "james.wilson@college.edu",
        features: ["Monthly sessions", "Mentoring", "Peer observation", "Portfolio development", "Certification"],
        image: "https://picsum.photos/seed/faculty-training/400/300.jpg"
      },
      {
        name: "Leadership Training for Medical Educators",
        icon: <GraduationCap className="w-8 h-8 text-red-500" />,
        description: "Developing leadership skills in medical education",
        schedule: "June 1-3",
        venue: "Leadership Center",
        participants: "30 faculty",
        coordinator: "Dr. Jennifer Adams",
        contact: "jennifer.adams@college.edu",
        features: ["Leadership styles", "Team management", "Strategic planning", "Communication skills", "Conflict resolution"],
        image: "https://picsum.photos/seed/leadership-training/400/300.jpg"
      },
      {
        name: "Research Methodology Training",
        icon: <GraduationCap className="w-8 h-8 text-yellow-500" />,
        description: "Research skills for medical educators",
        schedule: "July 10-12",
        venue: "Research Lab",
        participants: "45 faculty",
        coordinator: "Dr. David Lee",
        contact: "david.lee@college.edu",
        features: ["Research design", "Data collection", "Statistical analysis", "Publication writing", "Grant writing"],
        image: "https://picsum.photos/seed/research-training/400/300.jpg"
      }
    ],
    research: [
      {
        name: "Educational Research Forum",
        icon: <Microscope className="w-8 h-8 text-green-500" />,
        description: "Platform for sharing educational research",
        schedule: "Monthly",
        venue: "Research Center",
        participants: "25 researchers",
        coordinator: "Dr. David Lee",
        contact: "david.lee@college.edu",
        features: ["Research presentations", "Peer review", "Collaboration opportunities", "Publication support", "Funding guidance"],
        image: "https://picsum.photos/seed/research-forum/400/300.jpg"
      },
      {
        name: "Innovation in Medical Education Research",
        icon: <Microscope className="w-8 h-8 text-blue-500" />,
        description: "Research on innovative teaching methods",
        schedule: "Ongoing",
        venue: "Multiple Locations",
        participants: "30 researchers",
        coordinator: "Dr. Lisa Anderson",
        contact: "lisa.anderson@college.edu",
        features: ["Pilot studies", "Data collection", "Analysis", "Publication", "Implementation"],
        image: "https://picsum.photos/seed/innovation-research/400/300.jpg"
      },
      {
        name: "Educational Technology Research",
        icon: <Microscope className="w-8 h-8 text-purple-500" />,
        description: "Research on digital learning effectiveness",
        schedule: "6 months",
        venue: "EdTech Lab",
        participants: "20 researchers",
        coordinator: "Dr. Maria Garcia",
        contact: "maria.garcia@college.edu",
        features: ["Comparative studies", "User experience", "Learning analytics", "Effectiveness studies", "Recommendations"],
        image: "https://picsum.photos/seed/edtech-research/400/300.jpg"
      }
    ],
    assessment: [
      {
        name: "OSCE Development Program",
        icon: <Clipboard className="w-8 h-8 text-orange-500" />,
        description: "Objective Structured Clinical Examination development",
        schedule: "March 25-29",
        venue: "Clinical Skills Lab",
        participants: "40 faculty",
        coordinator: "Dr. Sarah Williams",
        contact: "sarah.williams@college.edu",
        features: ["Station design", "Checklist creation", "Standardized patients", "Training", "Quality assurance"],
        image: "https://picsum.photos/seed/osce-development/400/300.jpg"
      },
      {
        name: "Assessment Validity Workshop",
        icon: <Clipboard className="w-8 h-8 text-red-500" />,
        description: "Ensuring validity and reliability of assessments",
        schedule: "April 15-17",
        venue: "Assessment Center",
        participants: "35 faculty",
        coordinator: "Dr. Thomas Brown",
        contact: "thomas.brown@college.edu",
        features: ["Validity analysis", "Reliability testing", "Item analysis", "Standard setting", "Quality control"],
        image: "https://picsum.photos/seed/assessment-validity/400/300.jpg"
      },
      {
        name: "Feedback Systems Training",
        icon: <Clipboard className="w-8 h-8 text-green-500" />,
        description: "Effective feedback mechanisms in medical education",
        schedule: "May 8-10",
        venue: "Training Room",
        participants: "30 faculty",
        coordinator: "Dr. Patricia Martinez",
        contact: "patricia.martinez@college.edu",
        features: ["Feedback techniques", "Communication skills", "Documentation", "Follow-up systems", "Improvement plans"],
        image: "https://picsum.photos/seed/feedback-training/400/300.jpg"
      }
    ],
    development: [
      {
        name: "Continuous Professional Development",
        icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
        description: "Ongoing professional growth for educators",
        schedule: "Year-round",
        venue: "MEU Building",
        participants: "All faculty",
        coordinator: "Dr. Jennifer Adams",
        contact: "jennifer.adams@college.edu",
        features: ["Monthly workshops", "Online courses", "Conferences", "Publications", "Certifications"],
        image: "https://picsum.photos/seed/cpd-program/400/300.jpg"
      },
      {
        name: "Mentorship Program",
        icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
        description: "Peer mentorship for medical educators",
        schedule: "Academic year",
        venue: "Departmental",
        participants: "50 pairs",
        coordinator: "Dr. James Wilson",
        contact: "james.wilson@college.edu",
        features: ["Pairing system", "Regular meetings", "Goal setting", "Progress monitoring", "Evaluation"],
        image: "https://picsum.photos/seed/mentorship-program/400/300.jpg"
      },
      {
        name: "Educational Innovation Lab",
        icon: <TrendingUp className="w-8 h-8 text-green-500" />,
        description: "Testing and developing new educational approaches",
        schedule: "Ongoing",
        venue: "Innovation Lab",
        participants: "25 innovators",
        coordinator: "Dr. Michael Chen",
        contact: "michael.chen@college.edu",
        features: ["Pilot projects", "Testing environment", "Data collection", "Iterative improvement", "Scaling"],
        image: "https://picsum.photos/seed/innovation-lab/400/300.jpg"
      }
    ]
  }

  const upcomingEvents = [
    {
      title: "Advanced Teaching Methods Workshop",
      date: "March 15-17",
      time: "9:00 AM - 5:00 PM",
      location: "MEU Conference Hall",
      type: "workshop",
      description: "Innovative teaching techniques for medical educators",
      participants: "50 faculty"
    },
    {
      title: "Medical Education Trends Seminar",
      date: "March 20",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium",
      type: "seminar",
      description: "Latest trends in medical education",
      participants: "200+ attendees"
    },
    {
      title: "OSCE Development Program",
      date: "March 25-29",
      time: "9:00 AM - 6:00 PM",
      location: "Clinical Skills Lab",
      type: "assessment",
      description: "Objective Structured Clinical Examination development",
      participants: "40 faculty"
    },
    {
      title: "Educational Technology Workshop",
      date: "April 10-12",
      time: "9:00 AM - 5:00 PM",
      location: "Computer Lab",
      type: "workshop",
      description: "Digital tools and e-learning platforms",
      participants: "40 faculty"
    }
  ]

  const achievements = [
    {
      title: "Excellence in Medical Education Award",
      year: "2023",
      description: "Recognized for innovative teaching methods",
      category: "teaching"
    },
    {
      title: "Best Research Publication",
      year: "2023",
      description: "Published in top medical education journal",
      category: "research"
    },
    {
      title: "Innovation in Assessment",
      year: "2023",
      description: "Developed novel assessment tool",
      category: "assessment"
    },
    {
      title: "Faculty Development Excellence",
      year: "2023",
      description: "Trained 200+ faculty members",
      category: "development"
    }
  ]

  const getAllActivities = () => {
    if (activeCategory === 'all') {
      return Object.values(activities).flat()
    }
    return activities[activeCategory as keyof typeof activities] || []
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="text-center text-gray-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-700">{activitiesInfo.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90 text-gray-600">
                {activitiesInfo.tagline}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{activitiesInfo.established}</div>
                <div className="text-lg font-medium text-gray-500">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{activitiesInfo.coordinator}</div>
                <div className="text-lg font-medium text-gray-500">Coordinator</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-gray-700">{activitiesInfo.activities}</div>
                <div className="text-lg font-medium text-gray-500">Activities</div>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Program Impact</h2>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Activity Categories</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {activityCategories.map(category => (
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

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getAllActivities().map((activity: any, index: number) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      {activity.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-800">{activity.name}</h3>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <img 
                      src={activity.image} 
                      alt={activity.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{activity.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{activity.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{activity.participants}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{activity.coordinator}</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-gray-800 mb-2">Key Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {activity.features.slice(0, 3).map((feature: string, featureIndex: number) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {activity.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{activity.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <CalendarIcon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ClockIcon className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">{event.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="text-xs">
                          {event.type}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {event.participants}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AwardIcon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{achievement.year}</p>
                  <p className="text-sm text-gray-700 mb-3">{achievement.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {achievement.category}
                  </Badge>
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
                <Heart className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {activitiesInfo.mission}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
