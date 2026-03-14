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
  Phone as PhoneIcon
} from "lucide-react"

export default function ActivitiesPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const activitiesInfo = {
    name: "Student Activities",
    tagline: "Engaging activities for holistic student development",
    established: "2010",
    coordinator: "Ms. Jennifer Adams",
    activities: "50+",
    description: "The Student Activities program offers a diverse range of extracurricular activities designed to foster personal growth, skill development, and community engagement among students.",
    mission: "To provide comprehensive opportunities for students to explore their interests, develop new skills, and create lasting memories through engaging activities and events."
  }

  const quickStats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "2,000+",
      label: "Participants",
      description: "Active student participants",
      color: "text-blue-600"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      value: "100+",
      label: "Events",
      description: "Annual events and activities",
      color: "text-green-600"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      value: "25+",
      label: "Awards",
      description: "Achievements and recognitions",
      color: "text-orange-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.8",
      label: "Satisfaction",
      description: "Student satisfaction rating",
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
      id: "sports",
      name: "Sports",
      icon: <Dumbbell className="w-4 h-4" />
    },
    {
      id: "cultural",
      name: "Cultural",
      icon: <Music className="w-4 h-4" />
    },
    {
      id: "academic",
      name: "Academic",
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      id: "arts",
      name: "Arts",
      icon: <Palette className="w-4 h-4" />
    },
    {
      id: "technical",
      name: "Technical",
      icon: <Lightbulb className="w-4 h-4" />
    },
    {
      id: "social",
      name: "Social",
      icon: <Users className="w-4 h-4" />
    }
  ]

  const activities = {
    sports: [
      {
        name: "Basketball Tournament",
        icon: <Trophy className="w-8 h-8 text-orange-500" />,
        description: "Inter-college basketball championship",
        schedule: "March 15-20",
        venue: "Sports Complex",
        participants: "16 teams",
        coordinator: "Mr. John Smith",
        contact: "john.smith@college.edu",
        features: ["Professional coaching", "Tournament format", "Prizes and awards", "Live streaming", "Media coverage"],
        image: "https://picsum.photos/seed/basketball/400/300.jpg"
      },
      {
        name: "Football League",
        icon: <Trophy className="w-8 h-8 text-green-500" />,
        description: "Annual football competition",
        schedule: "April 1-15",
        venue: "Football Ground",
        participants: "12 teams",
        coordinator: "Mr. Mike Johnson",
        contact: "mike.johnson@college.edu",
        features: ["League format", "Professional referees", "Training sessions", "Equipment provided", "Medical support"],
        image: "https://picsum.photos/seed/football/400/300.jpg"
      },
      {
        name: "Athletics Meet",
        icon: <Trophy className="w-8 h-8 text-blue-500" />,
        description: "Track and field championship",
        schedule: "May 10-12",
        venue: "Athletics Track",
        participants: "200+ athletes",
        coordinator: "Ms. Sarah Williams",
        contact: "sarah.williams@college.edu",
        features: ["Multiple events", "Age categories", "Professional timing", "Record tracking", "Awards ceremony"],
        image: "https://picsum.photos/seed/athletics/400/300.jpg"
      }
    ],
    cultural: [
      {
        name: "Annual Cultural Fest",
        icon: <Music className="w-8 h-8 text-purple-500" />,
        description: "Grand cultural celebration with performances",
        schedule: "February 20-22",
        venue: "Main Auditorium",
        participants: "500+ students",
        coordinator: "Ms. Emily Davis",
        contact: "emily.davis@college.edu",
        features: ["Music performances", "Dance shows", "Drama plays", "Fashion show", "Food festival"],
        image: "https://picsum.photos/seed/cultural-fest/400/300.jpg"
      },
      {
        name: "Music Concert",
        icon: <Music className="w-8 h-8 text-pink-500" />,
        description: "Live music performances by students",
        schedule: "March 25",
        venue: "Open Air Theater",
        participants: "50+ performers",
        coordinator: "Mr. Robert Miller",
        contact: "robert.miller@college.edu",
        features: ["Live bands", "Solo performances", "DJ night", "Sound system", "Lighting effects"],
        image: "https://picsum.photos/seed/music-concert/400/300.jpg"
      },
      {
        name: "Dance Competition",
        icon: <Music className="w-8 h-8 text-red-500" />,
        description: "Inter-department dance competition",
        schedule: "April 5",
        venue: "Dance Studio",
        participants: "15 teams",
        coordinator: "Ms. Lisa Anderson",
        contact: "lisa.anderson@college.edu",
        features: ["Multiple dance forms", "Professional judges", "Prizes", "Costume provision", "Choreography support"],
        image: "https://picsum.photos/seed/dance-competition/400/300.jpg"
      }
    ],
    academic: [
      {
        name: "Science Exhibition",
        icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
        description: "Showcase of innovative science projects",
        schedule: "March 10-12",
        venue: "Science Building",
        participants: "100+ projects",
        coordinator: "Dr. James Wilson",
        contact: "james.wilson@college.edu",
        features: ["Project displays", "Live demonstrations", "Expert judges", "Research papers", "Innovation awards"],
        image: "https://picsum.photos/seed/science-exhibition/400/300.jpg"
      },
      {
        name: "Debate Competition",
        icon: <BookOpen className="w-8 h-8 text-green-500" />,
        description: "Inter-college debate championship",
        schedule: "April 8",
        venue: "Conference Hall",
        participants: "32 teams",
        coordinator: "Ms. Patricia Brown",
        contact: "patricia.brown@college.edu",
        features: ["Current topics", "Expert panel", "Research support", "Public speaking training", "Certificates"],
        image: "https://picsum.photos/seed/debate-competition/400/300.jpg"
      },
      {
        name: "Quiz Competition",
        icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
        description: "General knowledge and subject-specific quizzes",
        schedule: "May 5",
        venue: "Multiple Classrooms",
        participants: "200+ students",
        coordinator: "Mr. David Lee",
        contact: "david.lee@college.edu",
        features: ["Multiple categories", "Team and individual", "Digital buzzers", "Prize distribution", "Media coverage"],
        image: "https://picsum.photos/seed/quiz-competition/400/300.jpg"
      }
    ],
    arts: [
      {
        name: "Art Exhibition",
        icon: <Palette className="w-8 h-8 text-cyan-500" />,
        description: "Display of student artwork and creativity",
        schedule: "March 18-20",
        venue: "Art Gallery",
        participants: "150+ artists",
        coordinator: "Ms. Barbara Garcia",
        contact: "barbara.garcia@college.edu",
        features: ["Painting display", "Sculpture exhibition", "Digital art", "Photography", "Art workshops"],
        image: "https://picsum.photos/seed/art-exhibition/400/300.jpg"
      },
      {
        name: "Photography Contest",
        icon: <Camera className="w-8 h-8 text-purple-500" />,
        description: "Capture moments through lens",
        schedule: "April 15",
        venue: "Photography Studio",
        participants: "80+ photographers",
        coordinator: "Mr. Thomas Martinez",
        contact: "thomas.martinez@college.edu",
        features: ["Theme-based", "Professional judging", "Equipment provision", "Workshops", "Exhibition"],
        image: "https://picsum.photos/seed/photography-contest/400/300.jpg"
      },
      {
        name: "Drama Festival",
        icon: <Drama className="w-8 h-8 text-red-500" />,
        description: "Theatrical performances and plays",
        schedule: "May 20-22",
        venue: "Drama Theater",
        participants: "10 drama groups",
        coordinator: "Ms. Nancy Thompson",
        contact: "nancy.thompson@college.edu",
        features: ["Stage plays", "Street theater", "Mono-acting", "Script writing", "Costume design"],
        image: "https://picsum.photos/seed/drama-festival/400/300.jpg"
      }
    ],
    technical: [
      {
        name: "Hackathon",
        icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
        description: "24-hour coding challenge",
        schedule: "March 25-26",
        venue: "Computer Lab",
        participants: "100+ developers",
        coordinator: "Dr. Richard Anderson",
        contact: "richard.anderson@college.edu",
        features: ["Team coding", "Mentorship", "Prizes", "Incubation support", "Industry experts"],
        image: "https://picsum.photos/seed/hackathon/400/300.jpg"
      },
      {
        name: "Robotics Workshop",
        icon: <Lightbulb className="w-8 h-8 text-green-500" />,
        description: "Hands-on robotics building and programming",
        schedule: "April 10-12",
        venue: "Robotics Lab",
        participants: "60 students",
        coordinator: "Ms. Jennifer Wilson",
        contact: "jennifer.wilson@college.edu",
        features: ["Kit provision", "Expert guidance", "Competition", "Certification", "Project showcase"],
        image: "https://picsum.photos/seed/robotics-workshop/400/300.jpg"
      },
      {
        name: "Tech Talk Series",
        icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
        description: "Industry expert talks and seminars",
        schedule: "Monthly",
        venue: "Conference Hall",
        participants: "200+ attendees",
        coordinator: "Mr. Charles Davis",
        contact: "charles.davis@college.edu",
        features: ["Industry experts", "Networking", "Q&A sessions", "Certificate", "Recording"],
        image: "https://picsum.photos/seed/tech-talk/400/300.jpg"
      }
    ],
    social: [
      {
        name: "Community Service",
        icon: <Heart className="w-8 h-8 text-pink-500" />,
        description: "Volunteer activities for social causes",
        schedule: "Ongoing",
        venue: "Various Locations",
        participants: "300+ volunteers",
        coordinator: "Ms. Susan Martinez",
        contact: "susan.martinez@college.edu",
        features: ["NGO partnerships", "Rural outreach", "Environmental campaigns", "Health camps", "Education support"],
        image: "https://picsum.photos/seed/community-service/400/300.jpg"
      },
      {
        name: "Leadership Summit",
        icon: <Users className="w-8 h-8 text-purple-500" />,
        description: "Student leadership development program",
        schedule: "April 20-22",
        venue: "Conference Center",
        participants: "100 leaders",
        coordinator: "Dr. Barbara Johnson",
        contact: "barbara.johnson@college.edu",
        features: ["Workshops", "Guest speakers", "Team building", "Mentoring", "Certification"],
        image: "https://picsum.photos/seed/leadership-summit/400/300.jpg"
      },
      {
        name: "Wellness Week",
        icon: <Heart className="w-8 h-8 text-green-500" />,
        description: "Mental and physical health awareness",
        schedule: "May 15-19",
        venue: "Campus Wide",
        participants: "All students",
        coordinator: "Ms. Dorothy Lee",
        contact: "dorothy.lee@college.edu",
        features: ["Yoga sessions", "Mental health talks", "Fitness activities", "Nutrition guidance", "Medical checkups"],
        image: "https://picsum.photos/seed/wellness-week/400/300.jpg"
      }
    ]
  }

  const upcomingEvents = [
    {
      title: "Basketball Tournament",
      date: "March 15-20",
      time: "9:00 AM - 6:00 PM",
      location: "Sports Complex",
      type: "sports",
      description: "Inter-college basketball championship",
      participants: "16 teams"
    },
    {
      title: "Science Exhibition",
      date: "March 10-12",
      time: "10:00 AM - 4:00 PM",
      location: "Science Building",
      type: "academic",
      description: "Showcase of innovative science projects",
      participants: "100+ projects"
    },
    {
      title: "Annual Cultural Fest",
      date: "February 20-22",
      time: "All Day",
      location: "Main Auditorium",
      type: "cultural",
      description: "Grand cultural celebration",
      participants: "500+ students"
    },
    {
      title: "Hackathon",
      date: "March 25-26",
      time: "24 Hours",
      location: "Computer Lab",
      type: "technical",
      description: "24-hour coding challenge",
      participants: "100+ developers"
    }
  ]

  const achievements = [
    {
      title: "National Sports Championship",
      year: "2023",
      description: "Won 3 gold medals in athletics",
      category: "sports"
    },
    {
      title: "Best Cultural Performers",
      year: "2023",
      description: "Recognized at state-level cultural fest",
      category: "cultural"
    },
    {
      title: "Innovation Award",
      year: "2023",
      description: "Science project selected for national exhibition",
      category: "academic"
    },
    {
      title: "Community Service Excellence",
      year: "2023",
      description: "1000+ hours of community service completed",
      category: "social"
    }
  ]

  const getAllActivities = () => {
    if (activeCategory === 'all') {
      return Object.values(activities).flat()
    }
    return activities[activeCategory as keyof typeof activities] || []
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      {/* Hero Section */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="text-center text-gray-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-10 h-10 text-white" />
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
                <div className="text-3xl font-bold mb-2 text-gray-700">4.8★</div>
                <div className="text-lg font-medium text-gray-500">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Activity Impact</h2>
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
                    <Trophy className="w-8 h-8 text-yellow-600" />
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
