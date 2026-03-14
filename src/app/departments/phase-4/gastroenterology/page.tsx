"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2 } from "lucide-react"

export default function GastroenterologyPage() {
  const departmentInfo = {
    name: "Department of Gastroenterology - Phase 4",
    head: "Prof. Dr. M. Hassan",
    established: "2013",
    faculty: 8,
    interns: 15,
    beds: 30,
    description: "The Phase 4 Gastroenterology program provides comprehensive internship training in digestive diseases, endoscopic procedures, and hepatology. Interns gain hands-on experience in diagnosing and managing acute and chronic gastrointestinal conditions."
  }

  const faculty = [
    {
      name: "Prof. Dr. M. Hassan",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCP",
      experience: "22 years",
      specialization: "Therapeutic Endoscopy, Hepatology",
      email: "m.hassan@rcmc.edu.bd",
      phone: "Ext: 2700",
      publications: 42,
      research: "Endoscopic Procedures, Liver Diseases",
      image: "/faculty/m-hassan.jpg"
    },
    {
      name: "Assoc. Prof. Dr. S. Ahmed",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS",
      experience: "18 years",
      specialization: "Inflammatory Bowel Disease, Motility Disorders",
      email: "s.ahmed@rcmc.edu.bd",
      phone: "Ext: 2701",
      publications: 35,
      research: "IBD, Functional GI Disorders",
      image: "/faculty/s-ahmed.jpg"
    },
    {
      name: "Asst. Prof. Dr. A. Karim",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "14 years",
      specialization: "Pancreatology, Biliary Diseases",
      email: "a.karim@rcmc.edu.bd",
      phone: "Ext: 2702",
      publications: 28,
      research: "Pancreatic Diseases, Biliary Disorders",
      image: "/faculty/a-karim.jpg"
    },
    {
      name: "Dr. N. Begum",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "10 years",
      specialization: "General Gastroenterology, Endoscopy",
      email: "n.begum@rcmc.edu.bd",
      phone: "Ext: 2703",
      publications: 18,
      research: "General GI Diseases, Endoscopic Procedures",
      image: "/faculty/n-begum.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Gastroenterology OPD",
      type: "Outpatient Care",
      capacity: 50,
      dailyPatients: "80/day",
      description: "Comprehensive outpatient care for digestive diseases",
      facilities: ["Consultation Rooms", "Endoscopy Suite", "Motility Lab", "Counseling Room"],
      commonCases: ["GERD", "IBS", "IBD", "Liver Diseases", "Pancreatic Disorders"],
      incharge: "Dr. N. Begum"
    },
    {
      name: "Gastroenterology Ward",
      type: "Inpatient Care",
      capacity: 30,
      beds: 30,
      admissions: "60/month",
      description: "Inpatient care for acute and chronic gastrointestinal conditions",
      facilities: ["Private Rooms", "General Ward", "Monitoring Systems", "Emergency Equipment"],
      commonCases: ["GI Bleeding", "Acute Pancreatitis", "Severe Hepatitis", "IBD Flares", "Liver Failure"],
      incharge: "Dr. N. Begum"
    },
    {
      name: "Endoscopy Unit",
      type: "Procedural Unit",
      capacity: 20,
      dailyProcedures: "40/day",
      description: "Advanced diagnostic and therapeutic endoscopic procedures",
      facilities: ["Endoscopy Rooms", "ERCP Suite", "Recovery Area", "Sterilization Unit"],
      commonCases: ["Upper GI Endoscopy", "Colonoscopy", "ERCP", "Capsule Endoscopy", "Manometry"],
      incharge: "Prof. Dr. M. Hassan"
    },
    {
      name: "Hepatology Unit",
      type: "Specialized Unit",
      capacity: 15,
      dailyPatients: "30/day",
      description: "Specialized care for liver diseases and transplantation",
      facilities: ["Liver Clinic", "Fibroscan", "Transplant Evaluation", "Viral Hepatitis Treatment"],
      commonCases: ["Viral Hepatitis", "Cirrhosis", "Liver Cancer", "Fatty Liver", "Autoimmune Liver Disease"],
      incharge: "Assoc. Prof. Dr. S. Ahmed"
    },
    {
      name: "Motility Lab",
      type: "Diagnostic Unit",
      capacity: 10,
      dailyStudies: "20/day",
      description: "Advanced testing for gastrointestinal motility disorders",
      facilities: ["Manometry Systems", "pH Monitoring", "Breath Testing", "Anorectal Testing"],
      commonCases: ["Achalasia", "GERD", "IBS", "Constipation", "Fecal Incontinence"],
      incharge: "Asst. Prof. Dr. A. Karim"
    },
    {
      name: "Intensive GI Care",
      type: "Critical Care",
      capacity: 8,
      beds: 8,
      admissions: "20/month",
      description: "Intensive care for critically ill gastrointestinal patients",
      facilities: ["ICU Beds", "Ventilators", "Monitoring Systems", "Emergency Procedures"],
      commonCases: ["GI Bleeding", "Acute Liver Failure", "Severe Pancreatitis", "Toxic Ingestion", "Post-procedure Care"],
      incharge: "Prof. Dr. M. Hassan"
    }
  ]

  const internshipProgram = [
    {
      name: "OPD Duties",
      duration: "4 Weeks",
      setting: "Gastroenterology OPD",
      responsibilities: ["Patient Consultation", "History Taking", "Physical Examination", "Treatment Planning"],
      skills: ["GI Assessment", "History Taking", "Physical Examination", "Communication"],
      assessment: "Logbook + Supervisor Evaluation",
      supervisor: "Dr. N. Begum"
    },
    {
      name: "Ward Duties",
      duration: "3 Weeks",
      setting: "Gastroenterology Ward",
      responsibilities: ["Inpatient Care", "Daily Rounds", "Treatment Management", "Emergency Response"],
      skills: ["Inpatient Management", "Acute GI Care", "Monitoring", "Documentation"],
      assessment: "Logbook + Ward Skills Assessment",
      supervisor: "Dr. N. Begum"
    },
    {
      name: "Endoscopy Rotation",
      duration: "3 Weeks",
      setting: "Endoscopy Unit",
      responsibilities: ["Procedure Assistance", "Patient Preparation", "Monitoring", "Post-procedure Care"],
      skills: ["Endoscopic Procedures", "Patient Monitoring", "Complication Recognition", "Emergency Response"],
      assessment: "Logbook + Endoscopy Skills Assessment",
      supervisor: "Prof. Dr. M. Hassan"
    },
    {
      name: "Hepatology Rotation",
      duration: "2 Weeks",
      setting: "Hepatology Unit",
      responsibilities: ["Liver Disease Management", "Viral Hepatitis Treatment", "Transplant Evaluation", "Follow-up"],
      skills: ["Liver Assessment", "Viral Hepatitis Management", "Transplant Evaluation", "Counseling"],
      assessment: "Logbook + Hepatology Skills Assessment",
      supervisor: "Assoc. Prof. Dr. S. Ahmed"
    },
    {
      name: "Motility Lab Rotation",
      duration: "1 Week",
      setting: "Motility Lab",
      responsibilities: ["Testing Procedures", "Data Analysis", "Report Preparation", "Patient Counseling"],
      skills: ["Motility Testing", "Data Interpretation", "Report Writing", "Patient Education"],
      assessment: "Logbook + Motility Skills Assessment",
      supervisor: "Asst. Prof. Dr. A. Karim"
    },
    {
      name: "Emergency Rotation",
      duration: "1 Week",
      setting: "Emergency Department",
      responsibilities: ["Emergency GI Care", "Triage", "Stabilization", "Referral"],
      skills: ["Emergency Assessment", "Acute GI Care", "Resuscitation", "Team Coordination"],
      assessment: "Logbook + Emergency Skills Assessment",
      supervisor: "Prof. Dr. M. Hassan"
    }
  ]

  const clinicalSkills = [
    {
      category: "Basic GI Skills",
      skills: ["Abdominal Examination", "History Taking", "GI Assessment", "Nutritional Assessment", "Risk Factor Evaluation"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "GI Skills Certified"
    },
    {
      category: "Emergency GI Skills",
      skills: ["GI Bleeding Management", "Acute Pancreatitis Care", "Toxic Ingestion Management", "Resuscitation", "Emergency Procedures"],
      competency: "Required",
      assessment: "Simulation Training + Direct Observation",
      certification: "Emergency GI Certified"
    },
    {
      category: "Endoscopic Skills",
      skills: ["Upper GI Endoscopy", "Colonoscopy", "ERCP Assistance", "Biopsy", "Polypectomy"],
      competency: "Required",
      assessment: "Skills Lab + Clinical Performance",
      certification: "Endoscopy Skills Certified"
    },
    {
      category: "Hepatology Skills",
      skills: ["Liver Assessment", "Viral Hepatitis Management", "Cirrhosis Care", "Transplant Evaluation", "Liver Biopsy"],
      competency: "Required",
      assessment: "Clinical Training + Direct Observation",
      certification: "Hepatology Skills Certified"
    },
    {
      category: "Motility Skills",
      skills: ["Manometry", "pH Monitoring", "Breath Testing", "Anorectal Testing", "Data Interpretation"],
      competency: "Optional",
      assessment: "Lab Training + Direct Observation",
      certification: "Motility Skills Certified"
    },
    {
      category: "Procedural Skills",
      skills: ["Liver Biopsy", "Paracentesis", "Nasogastric Tube Insertion", "PEG Placement", "Emergency Procedures"],
      competency: "Required",
      assessment: "Skills Lab + Clinical Performance",
      certification: "Procedural Skills Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Upper GI Diseases",
      conditions: ["GERD", "Peptic Ulcer Disease", "Gastritis", "Upper GI Bleeding", "Esophageal Disorders"],
      prevalence: "30%",
      management: ["PPI Therapy", "H. Pylori Eradication", "Lifestyle Modification", "Endoscopic Therapy"],
      complications: ["Bleeding", "Perforation", "Stricture", "Cancer"]
    },
    {
      category: "Lower GI Diseases",
      conditions: ["IBS", "IBD", "Colorectal Cancer", "Diverticular Disease", "Infectious Colitis"],
      prevalence: "25%",
      management: ["Medical Therapy", "Biologics", "Surgery", "Lifestyle", "Surveillance"],
      complications: ["Strictures", "Fistulas", "Cancer", "Malnutrition"]
    },
    {
      category: "Liver Diseases",
      conditions: ["Viral Hepatitis", "Cirrhosis", "Fatty Liver", "Liver Cancer", "Autoimmune Liver Disease"],
      prevalence: "20%",
      management: ["Antiviral Therapy", "Lifestyle", "Transplant", "Immunosuppression", "Surveillance"],
      complications: ["Liver Failure", "Cancer", "Portal Hypertension", "Encephalopathy"]
    },
    {
      category: "Pancreatic Diseases",
      conditions: ["Acute Pancreatitis", "Chronic Pancreatitis", "Pancreatic Cancer", "Exocrine Insufficiency", "Autoimmune Pancreatitis"],
      prevalence: "15%",
      management: ["Supportive Care", "Enzyme Therapy", "Surgery", "Chemotherapy", "Lifestyle"],
      complications: ["Organ Failure", "Pseudocysts", "Diabetes", "Malnutrition"]
    },
    {
      category: "Motility Disorders",
      conditions: ["Achalasia", "GERD", "Gastroparesis", "Constipation", "Fecal Incontinence"],
      prevalence: "10%",
      management: ["Medical Therapy", "Endoscopic Therapy", "Surgery", "Lifestyle", "Biofeedback"],
      complications: ["Aspiration", "Malnutrition", "Quality of Life Issues", "Psychological Impact"]
    }
  ]

  const procedures = [
    {
      name: "Upper GI Endoscopy",
      description: "Diagnostic and therapeutic examination of upper gastrointestinal tract",
      type: "Diagnostic/Therapeutic",
      duration: "15-30 minutes",
      anesthesia: "Conscious Sedation",
      recovery: "1-2 hours",
      complications: ["Perforation", "Bleeding", "Aspiration", "Cardiac Events"],
      frequency: "Daily"
    },
    {
      name: "Colonoscopy",
      description: "Diagnostic and therapeutic examination of colon and rectum",
      type: "Diagnostic/Therapeutic",
      duration: "30-60 minutes",
      anesthesia: "Conscious Sedation",
      recovery: "2-4 hours",
      complications: ["Perforation", "Bleeding", "Infection", "Preparation Issues"],
      frequency: "Daily"
    },
    {
      name: "ERCP",
      description: "Endoscopic retrograde cholangiopancreatography for biliary and pancreatic diseases",
      type: "Therapeutic",
      duration: "60-120 minutes",
      anesthesia: "Conscious Sedation/General",
      recovery: "4-6 hours",
      complications: ["Pancreatitis", "Bleeding", "Perforation", "Infection"],
      frequency: "Weekly"
    },
    {
      name: "Liver Biopsy",
      description: "Percutaneous liver biopsy for liver disease diagnosis",
      type: "Diagnostic",
      duration: "15-30 minutes",
      anesthesia: "Local",
      recovery: "2-4 hours",
      complications: ["Bleeding", "Pain", "Infection", "Tumor Seeding"],
      frequency: "As needed"
    },
    {
      name: "Paracentesis",
      description: "Diagnostic and therapeutic removal of ascitic fluid",
      type: "Diagnostic/Therapeutic",
      duration: "30-60 minutes",
      anesthesia: "Local",
      recovery: "Immediate",
      complications: ["Bleeding", "Infection", "Hypotension", "Bowel Injury"],
      frequency: "As needed"
    },
    {
      name: "Capsule Endoscopy",
      description: "Wireless capsule endoscopy for small bowel examination",
      type: "Diagnostic",
      duration: "8-12 hours",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Capsule Retention", "Incomplete Study", "Technical Failure"],
      frequency: "Weekly"
    }
  ]

  const protocols = [
    {
      name: "GI Bleeding Management Protocol",
      description: "Standardized protocol for acute gastrointestinal bleeding management",
      steps: ["Initial Assessment", "Resuscitation", "Risk Stratification", "Endoscopic Intervention", "Post-procedure Care"],
      frequency: "Every Bleeding Case",
      documentation: "Bleeding Registry",
      quality: "International Guidelines"
    },
    {
      name: "Acute Pancreatitis Protocol",
      description: "Comprehensive protocol for acute pancreatitis management",
      steps: ["Severity Assessment", "Supportive Care", "Complication Monitoring", "Nutritional Support", "Follow-up"],
      frequency: "Every Pancreatitis Case",
      documentation: "Pancreatitis Registry",
      quality: "International Guidelines"
    },
    {
      name: "Endoscopy Safety Protocol",
      description: "Safety protocols for endoscopic procedures",
      steps: ["Pre-procedure Assessment", "Informed Consent", "Sedation Monitoring", "Procedure Safety", "Post-procedure Care"],
      frequency: "Every Endoscopy",
      documentation: "Endoscopy Records",
      quality: "Safety Standards"
    },
    {
      name: "Viral Hepatitis Management Protocol",
      description: "Protocol for viral hepatitis screening, diagnosis, and treatment",
      steps: ["Screening", "Diagnosis", "Staging", "Treatment Selection", "Monitoring"],
      frequency: "Every Hepatitis Case",
      documentation: "Hepatitis Registry",
      quality: "WHO Guidelines"
    },
    {
      name: "IBD Management Protocol",
      description: "Comprehensive protocol for inflammatory bowel disease management",
      steps: ["Diagnosis", "Activity Assessment", "Treatment Selection", "Monitoring", "Surveillance"],
      frequency: "Every IBD Case",
      documentation: "IBD Registry",
      quality: "International Guidelines"
    }
  ]

  const researchProjects = [
    {
      title: "IBD Outcomes Study",
      principalInvestigator: "Assoc. Prof. Dr. S. Ahmed",
      coInvestigators: ["Prof. Dr. M. Hassan", "Dr. N. Begum"],
      duration: "2024-2026",
      funding: "BDT 650,000",
      status: "Ongoing",
      description: "Study of treatment outcomes and quality of life in inflammatory bowel disease patients.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Viral Hepatitis Registry",
      principalInvestigator: "Prof. Dr. M. Hassan",
      coInvestigators: ["Asst. Prof. Dr. A. Karim"],
      duration: "2023-2025",
      funding: "BDT 550,000",
      status: "Ongoing",
      description: "Comprehensive registry of viral hepatitis patients for outcomes and quality improvement.",
      publications: 1,
      impact: "High"
    },
    {
      title: "Endoscopic Quality Improvement",
      principalInvestigator: "Asst. Prof. Dr. A. Karim",
      coInvestigators: ["Prof. Dr. M. Hassan"],
      duration: "2024-2027",
      funding: "BDT 600,000",
      status: "Starting",
      description: "Study of quality indicators and improvement strategies in endoscopic procedures.",
      publications: 0,
      impact: "Medium"
    }
  ]

  const achievements = [
    {
      title: "Best Gastroenterology Department Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding gastroenterology care and clinical outcomes.",
      impact: "High"
    },
    {
      title: "Endoscopy Excellence Award",
      year: "2023",
      category: "Procedural Excellence",
      description: "Awarded for exceptional endoscopic services and outcomes.",
      impact: "High"
    },
    {
      title: "Research Excellence Award",
      year: "2023",
      category: "Research",
      description: "Awarded for outstanding research contributions in gastroenterology.",
      impact: "High"
    },
    {
      title: "Hepatology Innovation Award",
      year: "2022",
      category: "Innovation",
      description: "Recognized for innovative approaches in liver disease management.",
      impact: "Medium"
    }
  ]

  const upcomingEvents = [
    {
      title: "Gastroenterology Workshop 2024",
      date: "2025-01-04",
      time: "9:00 AM - 5:00 PM",
      venue: "Gastroenterology Department",
      type: "Workshop",
      organizer: "Prof. Dr. M. Hassan",
      participants: "Gastroenterology Professionals",
      description: "Annual workshop on recent advances in gastroenterology and endoscopic procedures."
    },
    {
      title: "Liver Disease Seminar",
      date: "2025-01-07",
      time: "2:00 PM - 4:00 PM",
      venue: "Hepatology Unit",
      type: "Seminar",
      organizer: "Assoc. Prof. Dr. S. Ahmed",
      participants: "Healthcare Workers",
      description: "Seminar on liver disease management and hepatitis treatment."
    },
    {
      title: "Endoscopy Conference",
      date: "2025-01-10",
      time: "10:00 AM - 1:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Asst. Prof. Dr. A. Karim",
      participants: "Healthcare Professionals",
      description: "Conference on advanced endoscopic procedures and therapeutic interventions."
    }
  ]

  const resources = [
    {
      title: "Gastroenterology Internship Manual",
      description: "Comprehensive guide for gastroenterology internship training and procedures",
      type: "PDF",
      size: "11.2 MB",
      downloadCount: 1550,
      category: "Manual"
    },
    {
      title: "Endoscopy Procedures Guide",
      description: "Complete guidelines for endoscopic procedures and techniques",
      type: "PDF",
      size: "8.5 MB",
      downloadCount: 2100,
      category: "Guidelines"
    },
    {
      title: "GI Endoscopy Atlas",
      description: "Comprehensive atlas of gastrointestinal endoscopic findings and procedures",
      type: "PDF",
      size: "28.8 MB",
      downloadCount: 2600,
      category: "Atlas"
    },
    {
      title: "Endoscopic Procedures Videos",
      description: "Demonstration videos of gastrointestinal endoscopic procedures",
      type: "Video",
      size: "1.2 GB",
      downloadCount: 1450,
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
                <StethoscopeIcon className="w-12 h-12 text-green-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Gastroenterology - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Digestive Diseases and Endoscopic Care</p>
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
                    <MonitorIcon className="w-8 h-8 text-orange-600" />
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
                        <UsersIcon3 className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="font-semibold">{unit.dailyPatients}</div>
                        <div className="text-xs text-gray-600">Daily Patients</div>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common GI Conditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonConditions.map((condition, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <AlertTriangleIcon2 className="w-6 h-6" />
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

          {/* Procedures */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">GI Procedures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {procedures.map((procedure, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <SyringeIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{procedure.name}</h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Gastroenterology Resources</h2>
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
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
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
