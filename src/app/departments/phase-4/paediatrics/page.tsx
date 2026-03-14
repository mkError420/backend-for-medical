"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed } from "lucide-react"

export default function PaediatricsPage() {
  const departmentInfo = {
    name: "Department of Paediatrics - Phase 4",
    head: "Prof. Dr. S. Begum",
    established: "2012",
    faculty: 12,
    interns: 25,
    beds: 60,
    description: "The Phase 4 Paediatrics program provides comprehensive internship training in child healthcare, including neonatal care, pediatric emergencies, and preventive pediatrics. Interns gain hands-on experience in managing common and complex pediatric conditions."
  }

  const faculty = [
    {
      name: "Prof. Dr. S. Begum",
      designation: "Professor & Head",
      qualifications: "MBBS, DCH, FCPS",
      experience: "22 years",
      specialization: "Neonatology, Pediatric Intensive Care",
      email: "s.begum@rcmc.edu.bd",
      phone: "Ext: 2400",
      publications: 45,
      research: "Neonatal Outcomes, Pediatric Critical Care",
      image: "/faculty/s-begum.jpg"
    },
    {
      name: "Assoc. Prof. Dr. M. Rahman",
      designation: "Associate Professor",
      qualifications: "MBBS, DCH, FCPS",
      experience: "18 years",
      specialization: "Pediatric Cardiology, Congenital Heart Disease",
      email: "m.rahman@rcmc.edu.bd",
      phone: "Ext: 2401",
      publications: 38,
      research: "Pediatric Cardiology, Heart Diseases in Children",
      image: "/faculty/m-rahman.jpg"
    },
    {
      name: "Asst. Prof. Dr. A. Karim",
      designation: "Assistant Professor",
      qualifications: "MBBS, DCH, FCPS",
      experience: "14 years",
      specialization: "Pediatric Neurology, Developmental Disorders",
      email: "a.karim@rcmc.edu.bd",
      phone: "Ext: 2402",
      publications: 28,
      research: "Neurodevelopmental Disorders, Pediatric Epilepsy",
      image: "/faculty/a-karim.jpg"
    },
    {
      name: "Dr. N. Ahmed",
      designation: "Senior Registrar",
      qualifications: "MBBS, DCH",
      experience: "10 years",
      specialization: "General Pediatrics, Infectious Diseases",
      email: "n.ahmed@rcmc.edu.bd",
      phone: "Ext: 2403",
      publications: 18,
      research: "Pediatric Infections, Vaccine Preventable Diseases",
      image: "/faculty/n-ahmed.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Pediatric Ward",
      type: "Inpatient Care",
      capacity: 40,
      beds: 40,
      admissions: "120/month",
      description: "General pediatric inpatient care for children aged 0-12 years",
      facilities: ["Individual Beds", "Play Area", "Parents' Room", "Treatment Room"],
      commonCases: ["Respiratory Infections", "Gastroenteritis", "Fever", "Nutritional Disorders"],
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Neonatal Intensive Care Unit (NICU)",
      type: "Critical Care",
      capacity: 15,
      beds: 15,
      admissions: "45/month",
      description: "Specialized care for newborns requiring intensive monitoring and treatment",
      facilities: ["Incubators", "Ventilators", "Phototherapy Units", "Monitoring Systems"],
      commonCases: ["Prematurity", "Neonatal Sepsis", "Birth Asphyxia", "Jaundice"],
      incharge: "Prof. Dr. S. Begum"
    },
    {
      name: "Pediatric Intensive Care Unit (PICU)",
      type: "Critical Care",
      capacity: 5,
      beds: 5,
      admissions: "20/month",
      description: "Intensive care for critically ill children requiring advanced life support",
      facilities: ["Ventilators", "Monitors", "Crash Carts", "Isolation Rooms"],
      commonCases: ["Severe Sepsis", "Respiratory Failure", "Multi-organ Failure", "Trauma"],
      incharge: "Asst. Prof. Dr. A. Karim"
    },
    {
      name: "Pediatric Emergency",
      type: "Emergency Care",
      capacity: 20,
      beds: 10,
      dailyPatients: "50/day",
      description: "24/7 emergency care for acute pediatric conditions and injuries",
      facilities: ["Resuscitation Area", "Observation Beds", "Treatment Rooms", "Triage Area"],
      commonCases: ["Acute Respiratory Distress", "Dehydration", "Seizures", "Trauma"],
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Pediatric OPD",
      type: "Outpatient Care",
      capacity: 100,
      dailyPatients: "150/day",
      description: "Comprehensive outpatient care for routine and specialized pediatric services",
      facilities: ["Consultation Rooms", "Vaccination Center", "Growth Monitoring", "Play Area"],
      commonCases: ["Well-child Visits", "Vaccination", "Growth Assessment", "Chronic Diseases"],
      incharge: "Assoc. Prof. Dr. M. Rahman"
    },
    {
      name: "Immunization Center",
      type: "Preventive Care",
      capacity: 50,
      dailyPatients: "80/day",
      description: "Comprehensive immunization and preventive health services for children",
      facilities: ["Cold Chain Storage", "Vaccination Rooms", "Record Keeping", "Counseling Area"],
      commonCases: ["Routine Immunization", "Catch-up Vaccination", "Health Education", "Growth Monitoring"],
      incharge: "Dr. N. Ahmed"
    }
  ]

  const internshipProgram = [
    {
      name: "Ward Duties",
      duration: "4 Weeks",
      setting: "Pediatric Ward",
      responsibilities: ["Patient Management", "Daily Rounds", "Treatment Planning", "Discharge Planning"],
      skills: ["History Taking", "Physical Examination", "Treatment Planning", "Communication"],
      assessment: "Logbook + Supervisor Evaluation",
      supervisor: "Dr. N. Ahmed"
    },
    {
      name: "NICU Rotation",
      duration: "3 Weeks",
      setting: "Neonatal Intensive Care Unit",
      responsibilities: ["Neonatal Care", "Monitoring", "Procedures", "Emergency Response"],
      skills: ["Neonatal Assessment", "Ventilator Management", "Procedures", "Family Counseling"],
      assessment: "Logbook + Skills Assessment",
      supervisor: "Prof. Dr. S. Begum"
    },
    {
      name: "Emergency Duties",
      duration: "2 Weeks",
      setting: "Pediatric Emergency",
      responsibilities: ["Emergency Care", "Triage", "Resuscitation", "Stabilization"],
      skills: ["Emergency Assessment", "Resuscitation", "Procedures", "Decision Making"],
      assessment: "Logbook + Emergency Skills Test",
      supervisor: "Dr. N. Ahmed"
    },
    {
      name: "OPD Duties",
      duration: "3 Weeks",
      setting: "Pediatric OPD",
      responsibilities: ["Outpatient Care", "Vaccination", "Health Education", "Follow-up"],
      skills: ["Outpatient Assessment", "Vaccination", "Counseling", "Preventive Care"],
      assessment: "Logbook + OPD Skills Evaluation",
      supervisor: "Assoc. Prof. Dr. M. Rahman"
    },
    {
      name: "PICU Rotation",
      duration: "2 Weeks",
      setting: "Pediatric Intensive Care Unit",
      responsibilities: ["Critical Care", "Monitoring", "Procedures", "Team Participation"],
      skills: ["Critical Care Assessment", "Advanced Procedures", "Monitoring", "Team Work"],
      assessment: "Logbook + Critical Care Evaluation",
      supervisor: "Asst. Prof. Dr. A. Karim"
    },
    {
      name: "Community Paediatrics",
      duration: "1 Week",
      setting: "Community Settings",
      responsibilities: ["Health Camps", "School Health", "Health Education", "Surveillance"],
      skills: ["Community Assessment", "Health Education", "Screening", "Data Collection"],
      assessment: "Logbook + Community Report",
      supervisor: "Prof. Dr. S. Begum"
    }
  ]

  const clinicalSkills = [
    {
      category: "Basic Pediatric Skills",
      skills: ["Pediatric History Taking", "Physical Examination", "Growth Assessment", "Developmental Assessment", "Nutritional Assessment"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "Pediatric Skills Certified"
    },
    {
      category: "Emergency Skills",
      skills: ["Pediatric CPR", "Emergency Airway Management", "Fluid Resuscitation", "Seizure Management", "Trauma Care"],
      competency: "Required",
      assessment: "Simulation Training + Direct Observation",
      certification: "PALS Certified"
    },
    {
      category: "Procedural Skills",
      skills: ["IV Cannulation", "Lumbar Puncture", "Endotracheal Intubation", "Chest Tube Insertion", "Umbilical Catheterization"],
      competency: "Required",
      assessment: "Skills Lab + Clinical Performance",
      certification: "Procedural Skills Certified"
    },
    {
      category: "Neonatal Skills",
      skills: ["Neonatal Resuscitation", "APGAR Scoring", "Newborn Assessment", "Kangaroo Care", "Breastfeeding Support"],
      competency: "Required",
      assessment: "Neonatal Simulation + Direct Observation",
      certification: "NRP Certified"
    },
    {
      category: "Communication Skills",
      skills: ["Child Communication", "Parent Counseling", "Family Education", "Team Communication", "Breaking Bad News"],
      competency: "Required",
      assessment: "Role Play + Direct Observation",
      certification: "Communication Skills Certified"
    },
    {
      category: "Preventive Care Skills",
      skills: ["Immunization", "Growth Monitoring", "Developmental Screening", "Health Education", "Nutritional Counseling"],
      competency: "Required",
      assessment: "Community Practice + Direct Observation",
      certification: "Preventive Care Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Respiratory Conditions",
      conditions: ["Upper Respiratory Infections", "Pneumonia", "Bronchiolitis", "Asthma", "Croup"],
      prevalence: "40%",
      management: ["Antibiotics", "Bronchodilators", "Supportive Care", "Education"],
      complications: ["Respiratory Failure", "Hospitalization", "Chronic Lung Disease"]
    },
    {
      category: "Gastrointestinal Conditions",
      conditions: ["Acute Gastroenteritis", "Constipation", "Abdominal Pain", "Hepatitis", "Malnutrition"],
      prevalence: "25%",
      management: ["Fluid Therapy", "Dietary Management", "Medications", "Nutritional Support"],
      complications: ["Dehydration", "Malnutrition", "Electrolyte Imbalance"]
    },
    {
      category: "Neonatal Conditions",
      conditions: ["Prematurity", "Neonatal Sepsis", "Birth Asphyxia", "Jaundice", "Congenital Anomalies"],
      prevalence: "15%",
      management: ["NICU Care", "Antibiotics", "Supportive Care", "Surgical Intervention"],
      complications: ["Mortality", "Developmental Delay", "Chronic Disability"]
    },
    {
      category: "Neurological Conditions",
      conditions: ["Febrile Seizures", "Epilepsy", "Meningitis", "Developmental Delay", "Cerebral Palsy"],
      prevalence: "10%",
      management: ["Anticonvulsants", "Antibiotics", "Therapy", "Supportive Care"],
      complications: ["Developmental Delay", "Disability", "Chronic Illness"]
    },
    {
      category: "Other Conditions",
      conditions: ["Skin Diseases", "Allergic Conditions", "Endocrine Disorders", "Hematological Diseases", "Genetic Disorders"],
      prevalence: "10%",
      management: ["Topical Therapy", "Antihistamines", "Hormone Therapy", "Supportive Care"],
      complications: ["Chronic Disease", "Systemic Involvement", "Growth Issues"]
    }
  ]

  const protocols = [
    {
      name: "Pediatric Assessment Protocol",
      description: "Standardized approach to pediatric patient assessment",
      steps: ["Initial Assessment", "Primary Survey", "Secondary Survey", "Investigation Plan", "Treatment Plan"],
      frequency: "Every Patient",
      documentation: "Standard Forms",
      quality: "Evidence-based"
    },
    {
      name: "Emergency Management Protocol",
      description: "Rapid response protocol for pediatric emergencies",
      steps: ["Triage", "Primary Assessment", "Resuscitation", "Stabilization", "Transfer"],
      frequency: "Emergency Cases",
      documentation: "Emergency Records",
      quality: "ATLS Guidelines"
    },
    {
      name: "Neonatal Care Protocol",
      description: "Comprehensive care protocol for newborn infants",
      steps: ["Initial Assessment", "APGAR Scoring", "Routine Care", "Monitoring", "Parent Education"],
      frequency: "Every Newborn",
      documentation: "Neonatal Records",
      quality: "WHO Guidelines"
    },
    {
      name: "Immunization Protocol",
      description: "Standard immunization schedule and procedures",
      steps: ["Screening", "Vaccine Preparation", "Administration", "Documentation", "Monitoring"],
      frequency: "Routine Visits",
      documentation: "Immunization Cards",
      quality: "National Guidelines"
    },
    {
      name: "Discharge Planning Protocol",
      description: "Comprehensive discharge planning for pediatric patients",
      steps: ["Clinical Assessment", "Family Education", "Medication Review", "Follow-up Planning", "Documentation"],
      frequency: "Every Discharge",
      documentation: "Discharge Summary",
      quality: "Best Practice"
    }
  ]

  const researchProjects = [
    {
      title: "Neonatal Outcomes Study",
      principalInvestigator: "Prof. Dr. S. Begum",
      coInvestigators: ["Assoc. Prof. Dr. M. Rahman", "Dr. N. Ahmed"],
      duration: "2024-2026",
      funding: "BDT 700,000",
      status: "Ongoing",
      description: "Study of neonatal outcomes and factors affecting survival and development.",
      publications: 3,
      impact: "High"
    },
    {
      title: "Pediatric Vaccine Response Study",
      principalInvestigator: "Assoc. Prof. Dr. M. Rahman",
      coInvestigators: ["Asst. Prof. Dr. A. Karim"],
      duration: "2023-2025",
      funding: "BDT 500,000",
      status: "Ongoing",
      description: "Study of vaccine response and effectiveness in pediatric population.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Developmental Disorders Screening",
      principalInvestigator: "Asst. Prof. Dr. A. Karim",
      coInvestigators: ["Prof. Dr. S. Begum"],
      duration: "2024-2027",
      funding: "BDT 600,000",
      status: "Starting",
      description: "Development and validation of developmental disorders screening tools.",
      publications: 0,
      impact: "High"
    }
  ]

  const achievements = [
    {
      title: "Best Pediatric Department Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding pediatric care and clinical outcomes.",
      impact: "High"
    },
    {
      title: "NICU Excellence Award",
      year: "2023",
      category: "Critical Care",
      description: "Awarded for exceptional neonatal intensive care services.",
      impact: "High"
    },
    {
      title: "Child Healthcare Innovation",
      year: "2023",
      category: "Innovation",
      description: "Recognized for innovative approaches to child healthcare.",
      impact: "Medium"
    },
    {
      title: "Immunization Excellence",
      year: "2022",
      category: "Preventive Care",
      description: "Awarded for outstanding immunization coverage and child health programs.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Pediatric Workshop 2024",
      date: "2024-12-28",
      time: "9:00 AM - 5:00 PM",
      venue: "Pediatric Department",
      type: "Workshop",
      organizer: "Prof. Dr. S. Begum",
      participants: "Pediatric Professionals",
      description: "Annual workshop on recent advances in pediatric care."
    },
    {
      title: "Neonatal Care Seminar",
      date: "2025-01-02",
      time: "2:00 PM - 4:00 PM",
      venue: "NICU Conference Room",
      type: "Seminar",
      organizer: "Assoc. Prof. Dr. M. Rahman",
      participants: "Healthcare Workers",
      description: "Seminar on advanced neonatal care techniques."
    },
    {
      title: "Child Health Conference",
      date: "2025-01-05",
      time: "10:00 AM - 1:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Asst. Prof. Dr. A. Karim",
      participants: "Healthcare Professionals",
      description: "Conference on comprehensive child health and development."
    }
  ]

  const resources = [
    {
      title: "Pediatric Internship Manual",
      description: "Comprehensive guide for pediatric internship training and procedures",
      type: "PDF",
      size: "8.2 MB",
      downloadCount: 1650,
      category: "Manual"
    },
    {
      title: "Pediatric Emergency Protocols",
      description: "Complete protocols for pediatric emergency management",
      type: "PDF",
      size: "5.5 MB",
      downloadCount: 2100,
      category: "Protocols"
    },
    {
      title: "Neonatal Care Guidelines",
      description: "Detailed guidelines for neonatal care and management",
      type: "PDF",
      size: "7.8 MB",
      downloadCount: 1800,
      category: "Guidelines"
    },
    {
      title: "Pediatric Skills Videos",
      description: "Demonstration videos of pediatric procedures and examinations",
      type: "Video",
      size: "650 MB",
      downloadCount: 950,
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
                <Baby className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Paediatrics - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Pediatric Care and Internship Training</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Clinical Practice</div>
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
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <StethoscopeIcon className="w-8 h-8 text-orange-600" />
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

          {/* Clinical Units */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Units</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clinicalUnits.map((unit, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Hospital className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{unit.name}</h3>
                        <p className="text-sm text-gray-600">{unit.type}</p>
                        <p className="text-sm text-blue-600 font-medium">Incharge: {unit.incharge}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{unit.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{unit.capacity}</div>
                        <div className="text-xs text-gray-600">Capacity</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Bed className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="font-semibold">{unit.beds}</div>
                        <div className="text-xs text-gray-600">Beds</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Common Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {unit.commonCases.slice(0, 3).map((case_, caseIndex) => (
                          <span key={caseIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
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
                        <span>Admissions:</span>
                        <span className="font-medium">{unit.admissions}</span>
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
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
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
                            <span key={skillIndex} className="px-2 py-1 bg-blue-100 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                          {program.skills.length > 3 && (
                            <span className="px-2 py-1 bg-blue-100 rounded-full text-xs">
                              +{program.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="font-medium">Supervisor:</span>
                        <span className="font-medium text-blue-600">{program.supervisor}</span>
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
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <TargetIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{skill.category}</h3>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          {skill.competency}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Skills:</h4>
                      <div className="space-y-1">
                        {skill.skills.slice(0, 3).map((skillItem, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Pediatric Conditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonConditions.map((condition, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <AlertTriangleIcon className="w-6 h-6" />
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
                            <span key={managementIndex} className="px-2 py-1 bg-blue-100 rounded-full text-xs">
                              {management}
                            </span>
                          ))}
                          {condition.management.length > 3 && (
                            <span className="px-2 py-1 bg-blue-100 rounded-full text-xs">
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

          {/* Protocols */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Clinical Protocols</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {protocols.map((protocol, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FileCheckIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{protocol.name}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
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
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
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
                        <p className="text-sm text-blue-600 font-medium">PI: {project.principalInvestigator}</p>
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
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
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
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
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
                        <CalendarDays className="w-6 h-6 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
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

                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Pediatrics Resources</h2>
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
                          <div className="text-sm text-blue-600 font-medium">
                            {resource.downloadCount} downloads
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {resource.category}
                          </span>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
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
