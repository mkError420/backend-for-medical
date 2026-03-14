"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2, Wind, Activity as ActivityIcon3, Thermometer as ThermometerIcon, HeartHandshake as HeartHandshakeIcon, AlertTriangle as AlertTriangleIcon3 } from "lucide-react"

export default function TransfusionMedicinePage() {
  const departmentInfo = {
    name: "Department of Transfusion Medicine - Phase 4",
    head: "Prof. Dr. R. Karim",
    established: "2013",
    faculty: 6,
    interns: 8,
    beds: 15,
    description: "The Phase 4 Transfusion Medicine program provides comprehensive internship training in blood banking, transfusion services, and transfusion medicine. Interns gain hands-on experience in blood component preparation, transfusion reactions, and quality assurance."
  }

  const faculty = [
    {
      name: "Prof. Dr. R. Karim",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCP",
      experience: "22 years",
      specialization: "Transfusion Medicine, Blood Banking",
      email: "r.karim@rcmc.edu.bd",
      phone: "Ext: 3600",
      publications: 38,
      research: "Blood Banking, Transfusion Reactions, Quality Assurance",
      image: "/faculty/r-karim.jpg"
    },
    {
      name: "Assoc. Prof. Dr. S. Ahmed",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS",
      experience: "18 years",
      specialization: "Hematology, Apheresis",
      email: "s.ahmed@rcmc.edu.bd",
      phone: "Ext: 3601",
      publications: 32,
      research: "Hematology, Apheresis, Component Therapy",
      image: "/faculty/s-ahmed.jpg"
    },
    {
      name: "Asst. Prof. Dr. A. Khatun",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "14 years",
      specialization: "Transfusion Reactions, Immunohematology",
      email: "a.khatun@rcmc.edu.bd",
      phone: "Ext: 3602",
      publications: 26,
      research: "Transfusion Reactions, Immunohematology, Blood Safety",
      image: "/faculty/a-khatun.jpg"
    },
    {
      name: "Dr. N. Rahman",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "10 years",
      specialization: "Blood Banking, Quality Control",
      email: "n.rahman@rcmc.edu.bd",
      phone: "Ext: 3603",
      publications: 18,
      research: "Blood Banking, Quality Control, Component Preparation",
      image: "/faculty/n-rahman.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Blood Bank",
      type: "Blood Collection & Processing",
      capacity: 50,
      dailyUnits: "200/day",
      description: "Comprehensive blood collection, processing, and storage facilities",
      facilities: ["Collection Room", "Processing Lab", "Storage Units", "Quarantine", "Quality Control"],
      commonCases: ["Whole Blood", "PRBC", "Platelets", "Plasma", "Cryoprecipitate"],
      incharge: "Dr. N. Rahman"
    },
    {
      name: "Component Preparation Unit",
      type: "Processing Unit",
      capacity: 30,
      dailyComponents: "150/day",
      description: "Advanced blood component preparation and processing",
      facilities: ["Component Lab", "Centrifuge", "Apheresis", "Freezer", "Quality Control"],
      commonCases: ["PRBC", "Platelet Concentrate", "Fresh Frozen Plasma", "Cryoprecipitate", "Washed RBC"],
      incharge: "Dr. N. Rahman"
    },
    {
      name: "Transfusion Service",
      type: "Clinical Service",
      capacity: 25,
      dailyTransfusions: "80/day",
      description: "Clinical transfusion services and patient management",
      facilities: ["Transfusion Room", "Patient Beds", "Monitoring", "Emergency Equipment", "Storage"],
      commonCases: ["Routine Transfusion", "Massive Transfusion", "Component Therapy", "Emergency Transfusion", "Exchange Transfusion"],
      incharge: "Asst. Prof. Dr. A. Khatun"
    },
    {
      name: "Apheresis Unit",
      type: "Specialized Service",
      capacity: 15,
      dailyProcedures: "30/day",
      description: "Apheresis procedures for therapeutic and donor collection",
      facilities: ["Apheresis Machines", "Collection Room", "Recovery Area", "Monitoring", "Storage"],
      commonCases: ["Platelet Apheresis", "Plasma Exchange", "Stem Cell Collection", "Therapeutic Phlebotomy", "Granulocyte Collection"],
      incharge: "Assoc. Prof. Dr. S. Ahmed"
    },
    {
      name: "Quality Control Unit",
      type: "Quality Assurance",
      capacity: 20,
      dailyTests: "300/day",
      description: "Comprehensive quality control and testing services",
      facilities: ["Testing Lab", "Serology", "Microbiology", "Molecular Lab", "Equipment Validation"],
      commonCases: ["Blood Grouping", "Crossmatching", "Serology", "NAT Testing", "Quality Parameters"],
      incharge: "Dr. N. Rahman"
    },
    {
      name: "Transfusion Reaction Unit",
      type: "Emergency Service",
      capacity: 10,
      dailyCases: "15/day",
      description: "Management of transfusion reactions and complications",
      facilities: ["Emergency Room", "Monitoring", "Treatment", "Isolation", "Laboratory"],
      commonCases: ["Hemolytic Reaction", "Allergic Reaction", "Febrile Reaction", "TRALI", "Bacterial Contamination"],
      incharge: "Asst. Prof. Dr. A. Khatun"
    }
  ]

  const internshipProgram = [
    {
      name: "Blood Bank Rotation",
      duration: "4 Weeks",
      setting: "Blood Bank",
      responsibilities: ["Blood Collection", "Processing", "Storage", "Quality Control", "Documentation"],
      skills: ["Blood Collection", "Component Preparation", "Storage Management", "Quality Assurance", "Documentation"],
      assessment: "Logbook + Blood Bank Skills Assessment",
      supervisor: "Dr. N. Rahman"
    },
    {
      name: "Component Preparation Rotation",
      duration: "2 Weeks",
      setting: "Component Preparation Unit",
      responsibilities: ["Component Preparation", "Quality Control", "Storage", "Distribution", "Documentation"],
      skills: ["Component Preparation", "Quality Control", "Storage Management", "Equipment Operation", "Procedural Skills"],
      assessment: "Logbook + Component Skills Assessment",
      supervisor: "Dr. N. Rahman"
    },
    {
      name: "Transfusion Service Rotation",
      duration: "3 Weeks",
      setting: "Transfusion Service",
      responsibilities: ["Patient Assessment", "Transfusion Management", "Monitoring", "Reaction Management", "Patient Education"],
      skills: ["Patient Assessment", "Transfusion Management", "Monitoring", "Emergency Response", "Communication"],
      assessment: "Logbook + Transfusion Skills Assessment",
      supervisor: "Asst. Prof. Dr. A. Khatun"
    },
    {
      name: "Apheresis Rotation",
      duration: "2 Weeks",
      setting: "Apheresis Unit",
      responsibilities: ["Apheresis Procedures", "Donor Management", "Patient Management", "Equipment Operation", "Monitoring"],
      skills: ["Apheresis Procedures", "Donor Screening", "Patient Management", "Equipment Operation", "Safety Protocols"],
      assessment: "Logbook + Apheresis Skills Assessment",
      supervisor: "Assoc. Prof. Dr. S. Ahmed"
    },
    {
      name: "Quality Control Rotation",
      duration: "2 Weeks",
      setting: "Quality Control Unit",
      responsibilities: ["Quality Testing", "Serology", "Microbiology", "Documentation", "Quality Assurance"],
      skills: ["Quality Testing", "Serology", "Microbiology", "Equipment Validation", "Quality Management"],
      assessment: "Logbook + QC Skills Assessment",
      supervisor: "Dr. N. Rahman"
    },
    {
      name: "Transfusion Reaction Rotation",
      duration: "1 Week",
      setting: "Transfusion Reaction Unit",
      responsibilities: ["Reaction Assessment", "Management", "Investigation", "Prevention", "Documentation"],
      skills: ["Reaction Assessment", "Emergency Management", "Investigation", "Prevention Strategies", "Documentation"],
      assessment: "Logbook + Reaction Skills Assessment",
      supervisor: "Asst. Prof. Dr. A. Khatun"
    }
  ]

  const clinicalSkills = [
    {
      category: "Blood Banking Skills",
      skills: ["Blood Collection", "Donor Screening", "Blood Processing", "Storage Management", "Quality Control"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "Blood Banking Certified"
    },
    {
      category: "Component Preparation Skills",
      skills: ["Component Separation", "Centrifugation", "Apheresis", "Quality Control", "Storage"],
      competency: "Required",
      assessment: "Skills Lab + Clinical Performance",
      certification: "Component Preparation Certified"
    },
    {
      category: "Transfusion Skills",
      skills: ["Patient Assessment", "Blood Selection", "Transfusion Management", "Monitoring", "Reaction Management"],
      competency: "Required",
      assessment: "Transfusion Training + Direct Observation",
      certification: "Transfusion Certified"
    },
    {
      category: "Quality Control Skills",
      skills: ["Serology", "Microbiology", "Blood Grouping", "Crossmatching", "NAT Testing"],
      competency: "Required",
      assessment: "QC Training + Direct Observation",
      certification: "Quality Control Certified"
    },
    {
      category: "Apheresis Skills",
      skills: ["Apheresis Procedures", "Donor Management", "Patient Management", "Equipment Operation", "Safety"],
      competency: "Required",
      assessment: "Apheresis Training + Clinical Performance",
      certification: "Apheresis Certified"
    },
    {
      category: "Emergency Transfusion Skills",
      skills: ["Emergency Assessment", "Massive Transfusion", "Component Therapy", "Reaction Management", "Team Coordination"],
      competency: "Required",
      assessment: "Emergency Training + Direct Observation",
      certification: "Emergency Transfusion Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Transfusion Indications",
      conditions: ["Anemia", "Surgical Blood Loss", "Trauma", "Bleeding Disorders", "Cancer"],
      prevalence: "40%",
      management: ["Component Therapy", "Massive Transfusion", "Supportive Care", "Underlying Treatment", "Monitoring"],
      complications: ["Transfusion Reactions", "Iron Overload", "Alloimmunization", "Infections", "Volume Overload"]
    },
    {
      category: "Transfusion Reactions",
      conditions: ["Hemolytic Reaction", "Allergic Reaction", "Febrile Reaction", "TRALI", "Bacterial Contamination"],
      prevalence: "5%",
      management: ["Immediate Stopping", "Supportive Care", "Medication", "Investigation", "Reporting"],
      complications: ["Renal Failure", "DIC", "Shock", "Organ Damage", "Death"]
    },
    {
      category: "Blood Disorders",
      conditions: ["Sickle Cell Disease", "Thalassemia", "Hemophilia", "ITP", "Aplastic Anemia"],
      prevalence: "15%",
      management: ["Regular Transfusion", "Component Therapy", "Chelation", "Supportive Care", "Definitive Treatment"],
      complications: ["Iron Overload", "Alloimmunization", "Infections", "Organ Damage", "Reduced Life Expectancy"]
    },
    {
      category: "Surgical Transfusion",
      conditions: ["Cardiac Surgery", "Orthopedic Surgery", "Trauma Surgery", "Organ Transplant", "Major Surgery"],
      prevalence: "30%",
      management: ["Component Therapy", "Cell Salvage", "Massive Transfusion", "Blood Conservation", "Monitoring"],
      complications: ["Coagulopathy", "Dilution", "Hypothermia", "Complications", "Increased Morbidity"]
    },
    {
      category: "Special Transfusion",
      conditions: ["Neonatal Transfusion", "Exchange Transfusion", "Therapeutic Apheresis", "Stem Cell Collection", "Granulocyte Transfusion"],
      prevalence: "10%",
      management: ["Special Components", "Procedural Support", "Monitoring", "Special Equipment", "Expert Management"],
      complications: ["Technical Difficulties", "Reactions", "Limited Availability", "Cost", "Expertise Required"]
    }
  ]

  const procedures = [
    {
      name: "Whole Blood Collection",
      description: "Collection of whole blood from voluntary and replacement donors",
      type: "Collection",
      duration: "15-30 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Vasovagal Reaction", "Hematoma", "Arterial Puncture", "Nerve Injury", "Infection"],
      frequency: "Daily"
    },
    {
      name: "Apheresis Collection",
      description: "Collection of specific blood components using apheresis technology",
      type: "Collection",
      duration: "60-120 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Citrate Reaction", "Vasovagal", "Hematoma", "Access Issues", "Technical Problems"],
      frequency: "Daily"
    },
    {
      name: "Component Preparation",
      description: "Separation of whole blood into therapeutic components",
      type: "Processing",
      duration: "30-60 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Component Loss", "Bacterial Contamination", "Quality Issues", "Storage Problems", "Labeling Errors"],
      frequency: "Daily"
    },
    {
      name: "Therapeutic Apheresis",
      description: "Removal of pathogenic substances from patient's blood",
      type: "Therapeutic",
      duration: "2-4 hours",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Citrate Reaction", "Hypotension", "Bleeding", "Access Issues", "Technical Problems"],
      frequency: "Weekly"
    },
    {
      name: "Exchange Transfusion",
      description: "Exchange of patient's blood with donor blood",
      type: "Therapeutic",
      duration: "2-6 hours",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Citrate Toxicity", "Hypocalcemia", "Hypoglycemia", "Electrolyte Imbalance", "Infection"],
      frequency: "Weekly"
    },
    {
      name: "Stem Cell Collection",
      description: "Collection of hematopoietic stem cells for transplantation",
      type: "Collection",
      duration: "3-6 hours",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Citrate Reaction", "Access Issues", "Low Yield", "Technical Problems", "Donor Risks"],
      frequency: "Monthly"
    }
  ]

  const protocols = [
    {
      name: "Blood Donor Selection Protocol",
      description: "Standardized protocol for donor screening and selection",
      steps: ["Eligibility Check", "Medical History", "Physical Exam", "Blood Testing", "Approval"],
      frequency: "Every Donation",
      documentation: "Donor Registry",
      quality: "WHO Guidelines"
    },
    {
      name: "Blood Component Preparation Protocol",
      description: "Protocol for standardized blood component preparation",
      steps: ["Component Selection", "Preparation Method", "Quality Control", "Storage", "Labeling"],
      frequency: "Every Component",
      documentation: "Component Registry",
      quality: "AABB Standards"
    },
    {
      name: "Transfusion Reaction Protocol",
      description: "Protocol for management of transfusion reactions",
      steps: ["Recognition", "Stopping Transfusion", "Assessment", "Management", "Investigation"],
      frequency: "Every Reaction",
      documentation: "Reaction Registry",
      quality: "AABB Guidelines"
    },
    {
      name: "Massive Transfusion Protocol",
      description: "Protocol for massive transfusion management",
      steps: ["Assessment", "Blood Component Selection", "Monitoring", "Laboratory Support", "Complication Management"],
      frequency: "Every Massive Transfusion",
      documentation: "Massive Transfusion Registry",
      quality: "Clinical Guidelines"
    },
    {
      name: "Quality Control Protocol",
      description: "Protocol for comprehensive quality control in blood banking",
      steps: ["Sample Collection", "Testing", "Result Interpretation", "Documentation", "Corrective Action"],
      frequency: "Daily",
      documentation: "QC Registry",
      quality: "ISO Standards"
    }
  ]

  const researchProjects = [
    {
      title: "Transfusion Reaction Study",
      principalInvestigator: "Asst. Prof. Dr. A. Khatun",
      coInvestigators: ["Prof. Dr. R. Karim", "Dr. N. Rahman"],
      duration: "2024-2026",
      funding: "BDT 550,000",
      status: "Ongoing",
      description: "Study of transfusion reactions and prevention strategies.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Blood Component Utilization Study",
      principalInvestigator: "Dr. N. Rahman",
      coInvestigators: ["Prof. Dr. R. Karim"],
      duration: "2023-2025",
      funding: "BDT 450,000",
      status: "Ongoing",
      description: "Study of blood component utilization and optimization.",
      publications: 1,
      impact: "High"
    },
    {
      title: "Apheresis Outcomes Study",
      principalInvestigator: "Assoc. Prof. Dr. S. Ahmed",
      coInvestigators: ["Prof. Dr. R. Karim"],
      duration: "2024-2027",
      funding: "BDT 400,000",
      status: "Starting",
      description: "Study of apheresis procedures and outcomes.",
      publications: 0,
      impact: "Medium"
    }
  ]

  const achievements = [
    {
      title: "Best Transfusion Medicine Department Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding transfusion services and blood banking.",
      impact: "High"
    },
    {
      title: "Blood Safety Excellence Award",
      year: "2023",
      category: "Safety Excellence",
      description: "Awarded for excellence in blood safety and quality assurance.",
      impact: "High"
    },
    {
      title: "Component Therapy Excellence Award",
      year: "2023",
      category: "Clinical Innovation",
      description: "Recognized for excellence in blood component therapy.",
      impact: "High"
    },
    {
      title: "Quality Assurance Excellence",
      year: "2022",
      category: "Quality Management",
      description: "Awarded for outstanding quality assurance in blood banking.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Transfusion Medicine Workshop 2024",
      date: "2025-01-14",
      time: "9:00 AM - 5:00 PM",
      venue: "Transfusion Medicine Department",
      type: "Workshop",
      organizer: "Prof. Dr. R. Karim",
      participants: "Transfusion Professionals",
      description: "Annual workshop on recent advances in transfusion medicine and blood banking."
    },
    {
      title: "Blood Banking Training",
      date: "2025-01-17",
      time: "10:00 AM - 4:00 PM",
      venue: "Blood Bank",
      type: "Training",
      organizer: "Dr. N. Rahman",
      participants: "Healthcare Workers",
      description: "Hands-on training for blood banking procedures and quality control."
    },
    {
      title: "Transfusion Safety Conference",
      date: "2025-01-20",
      time: "2:00 PM - 5:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Asst. Prof. Dr. A. Khatun",
      participants: "Healthcare Professionals",
      description: "Conference on blood safety and transfusion reactions management."
    }
  ]

  const resources = [
    {
      title: "Transfusion Medicine Internship Manual",
      description: "Comprehensive guide for transfusion medicine internship training and procedures",
      type: "PDF",
      size: "11.5 MB",
      downloadCount: 1300,
      category: "Manual"
    },
    {
      title: "Blood Banking Guidelines",
      description: "Complete guidelines for blood banking and transfusion services",
      type: "PDF",
      size: "8.8 MB",
      downloadCount: 1900,
      category: "Guidelines"
    },
    {
      title: "Transfusion Procedures Atlas",
      description: "Comprehensive atlas of transfusion medicine procedures and techniques",
      type: "PDF",
      size: "25.5 MB",
      downloadCount: 2100,
      category: "Atlas"
    },
    {
      title: "Transfusion Medicine Videos",
      description: "Demonstration videos of transfusion medicine procedures and techniques",
      type: "Video",
      size: "1.5 GB",
      downloadCount: 1100,
      category: "Multimedia"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-[#EAEAEA] to-[#DDFFDE] text-gray-700">
        <div className="responsive-container-full py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl">
                <Droplets className="w-12 h-12 text-red-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Transfusion Medicine - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Blood Banking and Transfusion Services</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Blood Safety Excellence</div>
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
                  <div className="text-sm text-gray-600">Clinical Units</div>
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
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <User className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-sm text-red-600 font-medium">{member.designation}</p>
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

                    <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Full Profile
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Clinical Units */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Units</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicalUnits.map((unit, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Hospital className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{unit.name}</h3>
                        <p className="text-sm text-gray-600">{unit.type}</p>
                        <p className="text-sm text-red-600 font-medium">Incharge: {unit.incharge}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{unit.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{unit.capacity}</div>
                        <div className="text-xs text-gray-600">Capacity</div>
                      </div>
                      <div className="text-center p-3 bg-red-50 rounded-lg">
                        <UsersIcon3 className="w-5 h-5 text-red-600 mx-auto mb-1" />
                        <div className="font-semibold">{unit.dailyUnits}</div>
                        <div className="text-xs text-gray-600">Daily Units</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Common Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {unit.commonCases.slice(0, 3).map((case_, caseIndex) => (
                          <span key={caseIndex} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                            {case_}
                          </span>
                        ))}
                        {unit.commonCases.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            +{unit.commonCases.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Procedures/Tests:</span>
                        <span className="font-medium">{unit.dailyProcedures || unit.dailyTests}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Internship Program */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Internship Program</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internshipProgram.map((program, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{program.name}</h3>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        {program.duration}
                      </span>
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Setting:</span> {program.setting}
                      </div>
                      <div>
                        <span className="font-medium">Responsibilities:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {program.responsibilities.slice(0, 3).map((responsibility, responsibilityIndex) => (
                            <span key={responsibilityIndex} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              {responsibility}
                            </span>
                          ))}
                          {program.responsibilities.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                              +{program.responsibilities.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">Skills:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {program.skills.slice(0, 3).map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-2 py-1 bg-red-100 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                          {program.skills.length > 3 && (
                            <span className="px-2 py-1 bg-red-100 rounded-full text-xs">
                              +{program.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="font-medium">Supervisor:</span>
                        <span className="font-medium text-red-600">{program.supervisor}</span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="font-medium">Assessment:</span>
                        <span className="font-medium">{program.assessment}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Clinical Skills */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Skills Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicalSkills.map((skill, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <TargetIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{skill.category}</h3>
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                          {skill.competency}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Skills:</h4>
                      <div className="space-y-1">
                        {skill.skills.slice(0, 3).map((skillItem, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            {skillItem}
                          </div>
                        ))}
                        {skill.skills.length > 3 && (
                          <div className="text-sm text-blue-600 font-medium">
                            +{skill.skills.length - 3} more skills
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Assessment:</span>
                        <span className="font-medium">{skill.assessment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Certification:</span>
                        <span className="font-medium text-green-600">{skill.certification}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Common Conditions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Transfusion Conditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonConditions.map((condition, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <AlertTriangleIcon3 className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{condition.category}</h3>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                          {condition.prevalence} Prevalence
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Common Conditions:</h4>
                      <div className="flex flex-wrap gap-2">
                        {condition.conditions.slice(0, 4).map((condition_, conditionIndex) => (
                          <span key={conditionIndex} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                            {condition_}
                          </span>
                        ))}
                        {condition.conditions.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                            +{condition.conditions.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Management:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {condition.management.slice(0, 3).map((management, managementIndex) => (
                            <span key={managementIndex} className="px-2 py-1 bg-red-100 rounded-full text-xs">
                              {management}
                            </span>
                          ))}
                          {condition.management.length > 3 && (
                            <span className="px-2 py-1 bg-red-100 rounded-full text-xs">
                              +{condition.management.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Potential Complications:</h4>
                      <div className="space-y-1">
                        {condition.complications.slice(0, 2).map((complication, complicationIndex) => (
                          <div key={complicationIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            {complication}
                          </div>
                        ))}
                        {condition.complications.length > 2 && (
                          <div className="text-sm text-red-600 font-medium">
                            +{condition.complications.length - 2} more complications
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Procedures */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Transfusion Medicine Procedures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {procedures.map((procedure, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <SyringeIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{procedure.name}</h3>
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                          {procedure.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{procedure.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{procedure.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Anesthesia:</span>
                        <span className="font-medium">{procedure.anesthesia}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Recovery:</span>
                        <span className="font-medium">{procedure.recovery}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Frequency:</span>
                        <span className="font-medium">{procedure.frequency}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Potential Complications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {procedure.complications.map((complication, complicationIndex) => (
                          <span key={complicationIndex} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                            {complication}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Protocols */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Protocols</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {protocols.map((protocol, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FileCheckIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{protocol.name}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {protocol.frequency}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{protocol.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Protocol Steps:</h4>
                      <div className="space-y-1">
                        {protocol.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Documentation:</span>
                        <span className="font-medium">{protocol.documentation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quality Standard:</span>
                        <span className="font-medium text-green-600">{protocol.quality}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Projects */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Research Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchProjects.map((project, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Search className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                        <p className="text-sm text-red-600 font-medium">PI: {project.principalInvestigator}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 
                          project.status === 'Starting' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{project.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Funding:</span>
                        <span className="font-medium">{project.funding}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Publications:</span>
                        <span className="font-medium">{project.publications}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Co-Investigators:</h4>
                      <div className="space-y-1">
                        {project.coInvestigators.map((coPI, coPIIndex) => (
                          <div key={coPIIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            {coPI}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {project.impact} IMPACT
                      </span>
                      <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                        View Details →
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            achievement.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {achievement.impact} IMPACT
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                            {achievement.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {achievement.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <CalendarDays className="w-6 h-6 text-red-600" />
                        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                      </div>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                        {event.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Date: {event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Time: {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Venue: {event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Organizer: {event.organizer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>Participants: {event.participants}</span>
                      </div>
                    </div>

                    <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      Register for Event
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Transfusion Medicine Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{resource.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                              {resource.type}
                            </span>
                            <span>{resource.size}</span>
                          </div>
                          <div className="text-sm text-red-600 font-medium">
                            {resource.downloadCount} downloads
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {resource.category}
                          </span>
                          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                            <Download className="w-4 h-4" />
                            Download
                          </button>
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
    </div>
  )
}
