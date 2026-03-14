"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  User, 
  Shield, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Award, 
  CheckCircle, 
  Building, 
  MapPin, 
  Crown,
  Star,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookOpen,
  Coffee,
  Heart,
  Target,
  Lightbulb,
  Settings,
  Wrench,
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
  Grid,
  Wrench as Tool,
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
  Video,
  Presentation,
  Globe,
  Book,
  PenTool,
  Database,
  BarChart,
  PieChart,
  TrendingDown,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  MoreHorizontal
} from "lucide-react"

export default function RMCActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null)

  const activitiesInfo = {
    name: "Research Management Committee Activities",
    tagline: "Engaging in innovative research initiatives and academic excellence",
    description: "The RMC conducts a wide range of research activities including workshops, seminars, conferences, and collaborative projects to advance medical knowledge and foster research culture."
  }

  const categories = [
    { id: "all", name: "All Activities", icon: <Grid className="w-4 h-4" />, color: "bg-gray-500" },
    { id: "workshops", name: "Workshops", icon: <Wrench className="w-4 h-4" />, color: "bg-blue-500" },
    { id: "seminars", name: "Seminars", icon: <Presentation className="w-4 h-4" />, color: "bg-green-500" },
    { id: "conferences", name: "Conferences", icon: <Globe className="w-4 h-4" />, color: "bg-purple-500" },
    { id: "publications", name: "Publications", icon: <Book className="w-4 h-4" />, color: "bg-orange-500" },
    { id: "collaborations", name: "Collaborations", icon: <Users className="w-4 h-4" />, color: "bg-red-500" }
  ]

  const upcomingActivities = [
    {
      id: "1",
      title: "Advanced Research Methodology Workshop",
      category: "workshops",
      date: "2024-03-25",
      time: "9:00 AM - 5:00 PM",
      venue: "Conference Hall, Research Building",
      organizer: "Dr. Elizabeth Thompson",
      participants: 50,
      description: "Comprehensive workshop on advanced research methodologies including qualitative and quantitative research design, data analysis techniques, and manuscript preparation.",
      objectives: [
        "Understanding advanced research designs",
        "Mastering statistical analysis methods",
        "Learning manuscript writing skills",
        "Developing grant proposals"
      ],
      speakers: [
        { name: "Dr. Elizabeth Thompson", topic: "Research Design Frameworks" },
        { name: "Dr. Robert Martinez", topic: "Statistical Analysis Techniques" },
        { name: "Dr. Sarah Johnson", topic: "Manuscript Preparation" }
      ],
      registration: "Open",
      fee: "Free for faculty, $50 for external participants"
    },
    {
      id: "2",
      title: "Clinical Research Ethics Seminar",
      category: "seminars",
      date: "2024-04-02",
      time: "2:00 PM - 4:00 PM",
      venue: "Seminar Room A, Medical College",
      organizer: "Dr. Patricia Williams",
      participants: 75,
      description: "Interactive seminar focusing on ethical considerations in clinical research, informed consent processes, and regulatory compliance requirements.",
      objectives: [
        "Understanding research ethics principles",
        "Implementing informed consent procedures",
        "Navigating regulatory requirements",
        "Managing ethical dilemmas in research"
      ],
      speakers: [
        { name: "Dr. Patricia Williams", topic: "IRB Processes and Procedures" },
        { name: "Dr. James Anderson", topic: "Regulatory Compliance" }
      ],
      registration: "Required",
      fee: "Free"
    },
    {
      id: "3",
      title: "International Medical Research Conference",
      category: "conferences",
      date: "2024-04-15-17",
      time: "9:00 AM - 6:00 PM",
      venue: "Main Auditorium, Medical College",
      organizer: "RMC Leadership Team",
      participants: 300,
      description: "Three-day international conference bringing together researchers from around the world to share latest findings, collaborate on projects, and discuss future directions in medical research.",
      objectives: [
        "Showcasing cutting-edge research",
        "Facilitating international collaborations",
        "Discussing emerging trends in medicine",
        "Networking opportunities"
      ],
      speakers: [
        { name: "International Speakers", topic: "Various research topics" },
        { name: "Keynote Speakers", topic: "Future of Medical Research" }
      ],
      registration: "Early bird available",
      fee: "$200 for students, $400 for professionals"
    },
    {
      id: "4",
      title: "Grant Writing Bootcamp",
      category: "workshops",
      date: "2024-04-20",
      time: "10:00 AM - 4:00 PM",
      venue: "Training Room, Research Building",
      organizer: "Dr. Linda Brown",
      participants: 30,
      description: "Intensive bootcamp focused on developing skills for writing successful research grant proposals, budget preparation, and funding strategy development.",
      objectives: [
        "Understanding funding mechanisms",
        "Writing compelling proposals",
        "Developing realistic budgets",
        "Building funder relationships"
      ],
      speakers: [
        { name: "Dr. Linda Brown", topic: "Grant Writing Strategies" },
        { name: "Dr. Thomas Garcia", topic: "Budget Development" }
      ],
      registration: "Limited seats",
      fee: "$100"
    }
  ]

  const pastActivities = [
    {
      id: "5",
      title: "Biostatistics for Medical Researchers",
      category: "workshops",
      date: "2024-02-10",
      time: "9:00 AM - 5:00 PM",
      venue: "Computer Lab, Research Building",
      organizer: "Dr. Michael Chen",
      participants: 45,
      description: "Hands-on workshop on statistical analysis using SPSS and R for medical research data.",
      outcomes: "Participants gained practical skills in statistical analysis and data interpretation.",
      feedback: "4.8/5 average rating from participants"
    },
    {
      id: "6",
      title: "Publication Ethics and Integrity",
      category: "seminars",
      date: "2024-01-25",
      time: "3:00 PM - 5:00 PM",
      venue: "Seminar Room B",
      organizer: "Dr. Robert Martinez",
      participants: 60,
      description: "Seminar on publication ethics, plagiarism prevention, and research integrity.",
      outcomes: "Increased awareness of ethical publishing practices among faculty and students.",
      feedback: "Excellent engagement and discussion"
    },
    {
      id: "7",
      title: "Research Collaboration Meet",
      category: "collaborations",
      date: "2024-01-15",
      time: "2:00 PM - 6:00 PM",
      venue: "Conference Hall",
      organizer: "RMC Team",
      participants: 80,
      description: "Networking event to foster interdisciplinary research collaborations.",
      outcomes: "12 new collaborative research projects initiated.",
      feedback: "Highly successful networking event"
    }
  ]

  const ongoingProjects = [
    {
      title: "COVID-19 Research Initiative",
      description: "Multi-center study on long-term effects of COVID-19",
      progress: 75,
      team: 15,
      duration: "24 months",
      status: "On track"
    },
    {
      title: "Cancer Biomarker Discovery",
      description: "Identification of novel biomarkers for early cancer detection",
      progress: 60,
      team: 12,
      duration: "36 months",
      status: "On track"
    },
    {
      title: "Digital Health Research",
      description: "Evaluating effectiveness of digital health interventions",
      progress: 45,
      team: 8,
      duration: "18 months",
      status: "Ahead of schedule"
    },
    {
      title: "Mental Health Studies",
      description: "Research on mental health interventions for healthcare workers",
      progress: 30,
      team: 10,
      duration: "12 months",
      status: "Just started"
    }
  ]

  const publications = [
    {
      title: "Novel Biomarkers for Early Cancer Detection",
      authors: "Thompson E, Foster A, Chen M, et al.",
      journal: "Nature Medicine",
      year: "2024",
      impact: "IF: 82.9",
      type: "Original Research"
    },
    {
      title: "Long-term Effects of COVID-19 on Cardiovascular System",
      authors: "Johnson S, Martinez R, Anderson J, et al.",
      journal: "The Lancet",
      year: "2024",
      impact: "IF: 168.9",
      type: "Clinical Study"
    },
    {
      title: "Machine Learning in Medical Diagnosis",
      authors: "Kim D, Brown L, Garcia T, et al.",
      journal: "JAMA",
      year: "2024",
      impact: "IF: 157.3",
      type: "Methodology"
    },
    {
      title: "Mental Health Interventions During Pandemic",
      authors: "Williams P, Anderson J, Thompson E, et al.",
      journal: "BMJ",
      year: "2023",
      impact: "IF: 105.7",
      type: "Review Article"
    }
  ]

  const filteredActivities = selectedCategory === "all" 
    ? [...upcomingActivities, ...pastActivities]
    : [...upcomingActivities, ...pastActivities].filter(activity => activity.category === selectedCategory)

  const toggleActivity = (activityId: string) => {
    setExpandedActivity(expandedActivity === activityId ? null : activityId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
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
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Research Activities</h2>
          <div className="space-y-6">
            {filteredActivities.map((activity) => (
              <Card key={activity.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleActivity(activity.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        {activity.category === "workshops" && <Wrench className="w-6 h-6 text-blue-600" />}
                        {activity.category === "seminars" && <Presentation className="w-6 h-6 text-green-600" />}
                        {activity.category === "conferences" && <Globe className="w-6 h-6 text-purple-600" />}
                        {activity.category === "collaborations" && <Users className="w-6 h-6 text-red-600" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="capitalize">
                        {activity.category}
                      </Badge>
                      {expandedActivity === activity.id ? 
                        <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      }
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{activity.venue}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{activity.organizer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{activity.participants} participants</span>
                      </div>
                    </div>
                    {(activity as any).registration && (
                      <Badge variant={(activity as any).registration === "Open" ? "default" : "secondary"}>
                        {(activity as any).registration}
                      </Badge>
                    )}
                  </div>
                  
                  {expandedActivity === activity.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      {(activity as any).objectives && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-3">Learning Objectives:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {(activity as any).objectives.map((objective: string, index: number) => (
                              <li key={index}>{objective}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {(activity as any).speakers && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-3">Speakers:</h4>
                          <div className="space-y-2">
                            {(activity as any).speakers.map((speaker: any, index: number) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="font-medium">{speaker.name}</span>
                                <span className="text-gray-600">- {speaker.topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {(activity as any).fee && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-3">Registration Fee:</h4>
                          <p className="text-gray-700">{(activity as any).fee}</p>
                        </div>
                      )}
                      
                      {(activity as any).outcomes && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-3">Outcomes:</h4>
                          <p className="text-gray-700">{(activity as any).outcomes}</p>
                        </div>
                      )}
                      
                      {(activity as any).feedback && (
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Feedback:</h4>
                          <p className="text-gray-700">{(activity as any).feedback}</p>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Ongoing Projects */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ongoing Research Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ongoingProjects.map((project, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{project.team} team members</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <Badge 
                          variant={project.status === "On track" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {project.status}
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

      {/* Recent Publications */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Publications</h2>
          <div className="space-y-4">
            {publications.map((publication, index) => (
              <Card key={index} className="border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Book className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{publication.title}</h3>
                      <p className="text-gray-600 mb-2">{publication.authors}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          <span>{publication.journal}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{publication.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4" />
                          <span>{publication.impact}</span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs">
                          {publication.type}
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
    </div>
  )
}
