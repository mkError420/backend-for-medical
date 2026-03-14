"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2 } from "lucide-react"

export default function OrthopaedicsPage() {

  const departmentInfo = {
    name: "Department of Orthopaedics - Phase 4",
    head: "Prof. Dr. M. Ali",
    established: "2013",
    faculty: 10,
    interns: 20,
    beds: 50,
    description: "The Phase 4 Orthopaedics program provides comprehensive internship training in musculoskeletal medicine, trauma surgery, and joint replacement. Interns gain hands-on experience in managing fractures, sports injuries, and degenerative conditions."
  }

  const faculty = [
    {
      id: 1,
      name: "Prof. Dr. M. Ali",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCS",
      experience: "24 years",
      specialization: "Joint Replacement Surgery, Arthroplasty",
      email: "m.ali@rcmc.edu.bd",
      phone: "Ext: 3000",
      publications: 52,
      research: "Joint Replacement Biomaterials, Orthopaedic Implants",
      image: "/faculty/m-ali.jpg",
      achievements: ["Pioneer in Hip Replacement", "International Speaker", "Research Excellence"]
    },
    {
      id: 2,
      name: "Assoc. Prof. Dr. S. Karim",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS, FRCS",
      experience: "18 years",
      specialization: "Spine Surgery, Deformity Correction",
      email: "s.karim@rcmc.edu.bd",
      phone: "Ext: 3001",
      publications: 38,
      research: "Spinal Deformities, Minimally Invasive Spine Surgery",
      image: "/faculty/s-karim.jpg",
      achievements: ["Spine Surgery Expert", "Published Author", "Teaching Excellence"]
    },
    {
      id: 3,
      name: "Asst. Prof. Dr. A. Rahman",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "14 years",
      specialization: "Sports Medicine, Arthroscopy",
      email: "a.rahman@rcmc.edu.bd",
      phone: "Ext: 3002",
      publications: 28,
      research: "Sports Injuries, Arthroscopic Techniques",
      image: "/faculty/a-rahman.jpg",
      achievements: ["Arthroscopy Pioneer", "Sports Medicine Expert", "Innovation Award"]
    },
    {
      id: 4,
      name: "Dr. N. Ahmed",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "9 years",
      specialization: "Trauma Surgery, Fracture Management",
      email: "n.ahmed@rcmc.edu.bd",
      phone: "Ext: 3003",
      publications: 18,
      research: "Fracture Healing, Trauma Outcomes",
      image: "/faculty/n-ahmed.jpg",
      achievements: ["Trauma Care Excellence", "Clinical Research", "Patient Safety"]
    }
  ]

  const services = [
    {
      id: 1,
      name: "Joint Replacement Surgery",
      icon: "🦴",
      description: "Total hip, knee, and shoulder replacement surgeries",
      procedures: ["Total Hip Replacement", "Total Knee Replacement", "Partial Knee Replacement", "Shoulder Replacement"],
      outcomes: ["95% Success Rate", "Reduced Pain", "Improved Mobility", "Better Quality of Life"],
      technology: ["Computer-Assisted Surgery", "3D Planning", "Custom Implants", "Navigation Systems"]
    },
    {
      id: 2,
      name: "Spine Surgery",
      icon: "🦴",
      description: "Advanced surgical and non-spinal treatments",
      procedures: ["Spinal Fusion", "Discectomy", "Laminectomy", "Deformity Correction"],
      outcomes: ["90% Success Rate", "Pain Relief", "Neurological Improvement", "Stabilization"],
      technology: ["Minimally Invasive Techniques", "Robotic Assistance", "Intra-op Monitoring", "Navigation"]
    },
    {
      id: 3,
      name: "Sports Medicine",
      icon: "🦴",
      description: "Comprehensive care for sports injuries and athletes",
      procedures: ["ACL Reconstruction", "Meniscus Repair", "Rotator Cuff Repair", "Cartilage Restoration"],
      outcomes: ["92% Return to Sports", "Improved Function", "Reduced Re-injury", "Performance Enhancement"],
      technology: ["Arthroscopic Surgery", "Biologic Treatments", "PRP Therapy", "Advanced Imaging"]
    },
    {
      id: 4,
      name: "Trauma & Fracture Care",
      icon: "🦴",
      description: "24/7 emergency trauma and fracture management",
      procedures: ["Internal Fixation", "External Fixation", "Intramedullary Nailing", "Plating Systems"],
      outcomes: ["Excellent Healing", "Early Mobilization", "Reduced Complications", "Functional Recovery"],
      technology: ["Locking Plates", "Minimally Invasive Fixation", "3D Imaging", "Computer Planning"]
    },
    {
      id: 5,
      name: "Pediatric Orthopaedics",
      icon: "🦴",
      description: "Specialized orthopaedic care for children",
      procedures: ["Congenital Deformity Correction", "Scoliosis Treatment", "Growth Plate Management", "Clubfoot Treatment"],
      outcomes: ["Normal Development", "Improved Function", "Reduced Disability", "Better Growth"],
      technology: ["Growth-Friendly Implants", "Minimally Invasive Techniques", "3D Modeling", "Custom Bracing"]
    },
    {
      id: 6,
      name: "Hand & Microsurgery",
      icon: "🦴",
      description: "Specialized hand surgery and microsurgical procedures",
      procedures: ["Carpal Tunnel Release", "Tendon Repair", "Nerve Repair", "Reconstructive Surgery"],
      outcomes: ["Improved Function", "Reduced Pain", "Better Sensation", "Enhanced Dexterity"],
      technology: ["Microsurgical Techniques", "Arthroscopy", "Nerve Monitoring", "Advanced Imaging"]
    }
  ]

  const statistics = [
    { label: "Surgeries Performed", value: "2,500+", icon: "🔧", color: "bg-blue-500" },
    { label: "Success Rate", value: "94%", icon: "✓", color: "bg-green-500" },
    { label: "Patient Satisfaction", value: "96%", icon: "😊", color: "bg-purple-500" },
    { label: "Research Publications", value: "136", icon: "📚", color: "bg-orange-500" }
  ]

  const technologies = [
    {
      name: "Computer-Assisted Surgery",
      description: "Advanced navigation systems for precise surgical planning and execution",
      benefits: ["Improved Accuracy", "Reduced Surgical Time", "Better Outcomes", "Less Invasive"],
      image: "/tech/cas.jpg"
    },
    {
      name: "3D Printing & Custom Implants",
      description: "Patient-specific implants and surgical guides using 3D printing technology",
      benefits: ["Perfect Fit", "Reduced Surgery Time", "Better Integration", "Customized Solutions"],
      image: "/tech/3d-printing.jpg"
    },
    {
      name: "Robotic Surgery",
      description: "Robotic assistance for enhanced precision in complex procedures",
      benefits: ["Enhanced Precision", "Minimally Invasive", "Reduced Blood Loss", "Faster Recovery"],
      image: "/tech/robotic.jpg"
    },
    {
      name: "Advanced Imaging",
      description: "State-of-the-art imaging for accurate diagnosis and planning",
      benefits: ["Better Visualization", "Accurate Planning", "Reduced Radiation", "Real-time Imaging"],
      image: "/tech/imaging.jpg"
    }
  ]

  const researchAreas = [
    {
      title: "Biomaterials Research",
      description: "Development of new materials for orthopaedic implants",
      projects: 8,
      funding: "BDT 1.2M",
      publications: 15
    },
    {
      title: "Biomechanics Studies",
      description: "Analysis of joint mechanics and implant performance",
      projects: 6,
      funding: "BDT 800K",
      publications: 12
    },
    {
      title: "Clinical Outcomes Research",
      description: "Long-term studies on surgical outcomes and patient satisfaction",
      projects: 10,
      funding: "BDT 900K",
      publications: 18
    },
    {
      title: "Regenerative Medicine",
      description: "Stem cell and tissue engineering applications in orthopaedics",
      projects: 5,
      funding: "BDT 1.5M",
      publications: 8
    }
  ]

  const trainingPrograms = [
    {
      name: "Basic Orthopaedic Skills",
      duration: "4 weeks",
      level: "Beginner",
      modules: ["Anatomy", "Basic Fracture Management", "Plating Techniques", "Post-op Care"],
      certification: "Basic Orthopaedic Skills Certified"
    },
    {
      name: "Advanced Surgical Techniques",
      duration: "6 weeks",
      level: "Advanced",
      modules: ["Joint Replacement", "Spine Surgery", "Arthroscopy", "Trauma Management"],
      certification: "Advanced Surgical Skills Certified"
    },
    {
      name: "Research Methodology",
      duration: "2 weeks",
      level: "Intermediate",
      modules: ["Study Design", "Data Analysis", "Publication Skills", "Grant Writing"],
      certification: "Research Methods Certified"
    },
    {
      name: "Sports Medicine Fellowship",
      duration: "12 weeks",
      level: "Advanced",
      modules: ["Sports Injuries", "Arthroscopy", "Rehabilitation", "Performance Enhancement"],
      certification: "Sports Medicine Fellowship"
    }
  ]








  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Bone className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Orthopaedics - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Orthopaedic Care & Surgical Excellence</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Surgical Excellence</div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Department Overview */}
          <Card className="shadow-lg border-0 mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentInfo.faculty}</div>
                  <div className="text-sm text-gray-600">Faculty Members</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentInfo.interns}</div>
                  <div className="text-sm text-gray-600">Current Interns</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Hospital className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{departmentInfo.beds}</div>
                  <div className="text-sm text-gray-600">Hospital Beds</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MonitorIcon className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">6</div>
                  <div className="text-sm text-gray-600">Clinical Services</div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
                {departmentInfo.description}
              </p>
              <div className="text-center mt-6">
                <p className="text-lg font-semibold text-gray-800">
                  Head of Department: {departmentInfo.head}
                </p>
                <p className="text-sm text-gray-600">
                  Established: {departmentInfo.established}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Faculty Members */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Faculty Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faculty.map((member, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <User className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-sm text-blue-600 font-medium">{member.designation}</p>
                        <p className="text-sm text-gray-600">{member.qualifications}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Brain className="w-4 h-4" />
                        <span>{member.specialization}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{member.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>{member.publications} publications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span className="text-blue-600">{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{member.phone}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Research Focus:</h4>
                      <p className="text-sm text-gray-600">{member.research}</p>
                    </div>

                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Full Profile
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Procedures:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.procedures.slice(0, 3).map((procedure, procIndex) => (
                          <span key={procIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {procedure}
                          </span>
                        ))}
                        {service.procedures.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            +{service.procedures.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Success Rate:</span>
                        <span className="font-medium">{service.outcomes[0]}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Advanced Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{tech.name}</h3>
                        <p className="text-sm text-gray-600">{tech.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Research Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchAreas.map((area, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Search className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{area.title}</h3>
                        <p className="text-sm text-gray-600">{area.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{area.projects}</div>
                        <div className="text-xs text-gray-600">Projects</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{area.funding}</div>
                        <div className="text-xs text-gray-600">Funding</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">{area.publications}</div>
                        <div className="text-xs text-gray-600">Publications</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Training Programs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Training Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingPrograms.map((program, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{program.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {program.duration}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            program.level === 'Beginner' 
                              ? 'bg-green-100 text-green-700'
                              : program.level === 'Intermediate'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {program.level}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Modules:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.modules.map((module, moduleIndex) => (
                          <span key={moduleIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-600 font-medium">
                        {program.certification}
                      </span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Enroll Now
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
