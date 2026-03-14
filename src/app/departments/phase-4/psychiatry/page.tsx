"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Heart, Mail, Phone, MapPin, FileText, Calendar, Settings, Shield, Building, User, Briefcase, Clock, Download, Eye, Search, Filter, CheckCircle, AlertCircle, BookOpen, FileCheck, Lock, Unlock, Scale, HandHeart, Gavel, UserCheck, Stethoscope, Activity, PlayCircle, Video, FileQuestion, Timer, BarChart3, TrendingUp, GraduationCap, Brain, Lightbulb, Target, BookMarked, Users2, MessageSquare, Award as AwardIcon, AlertTriangle, Ban, ThumbsUp, Handshake, Star, Flag, FileSignature, Wrench, Clipboard, UserCheck2, Building2, Truck, UserPlus, CalendarDays, FileText as FileIcon, ChevronRight, Megaphone, ArrowRight, Layers, GitBranch, Workflow, Zap, Calendar as CalendarIcon, TrendingUp as TrendingIcon, Database, FileSpreadsheet, Presentation, Monitor, MessageCircle, FileSearch, RefreshCw, CheckSquare, Square, Edit, Save, Upload, Send, Link, Network, GitMerge, ArrowRightCircle, ArrowLeftCircle, ArrowUpCircle, ArrowDownCircle, Book, VideoIcon, Trophy, Medal, GraduationCap as UserGraduate, School, User as Teacher, Brain as BrainCircuit, Lightbulb as LightBulbIcon, Microscope, Beaker, Dna, HeartPulse, Bone, EyeIcon, Activity as HeartActivity, Pill, TestTube, FlaskConical, Hospital, Syringe, Ambulance, ClipboardList, Baby, Users as UsersIcon, Stethoscope as StethoscopeIcon, Thermometer, HeartHandshake, Shield as ShieldIcon, AlertTriangle as AlertTriangleIcon, CheckCircle as CheckCircleIcon, FileCheck as FileCheckIcon, Award as AwardIcon2, Calendar as CalendarIcon2, Target as TargetIcon, Users as UsersIcon2, Briefcase as BriefcaseIcon, BadgeCheck, UserRound, UserCheck2 as UserCheckIcon2, Syringe as SyringeIcon, Activity as ActivityIcon, TrendingUp as TrendingUpIcon, Bed, Droplets, Shield as ShieldIcon2, Camera, Sun, Eye as EyeIcon2, Users as UsersIcon3, Heart as HeartIcon2, Activity as ActivityIcon2, Monitor as MonitorIcon, Zap as ZapIcon, Brain as BrainIcon2, AlertTriangle as AlertTriangleIcon2, TrendingUp as TrendingUpIcon2, Wind, Activity as ActivityIcon3, Thermometer as ThermometerIcon, HeartHandshake as HeartHandshakeIcon, AlertTriangle as AlertTriangleIcon3 } from "lucide-react"

export default function PsychiatryPage() {
  const departmentInfo = {
    name: "Department of Psychiatry - Phase 4",
    head: "Prof. Dr. A. Khan",
    established: "2013",
    faculty: 7,
    interns: 10,
    beds: 40,
    description: "The Phase 4 Psychiatry program provides comprehensive internship training in mental health, psychiatric disorders, and psychosocial care. Interns gain hands-on experience in diagnosing and managing various psychiatric conditions and promoting mental wellness."
  }

  const faculty = [
    {
      name: "Prof. Dr. A. Khan",
      designation: "Professor & Head",
      qualifications: "MBBS, FCPS, FRCPsych",
      experience: "24 years",
      specialization: "General Psychiatry, Mood Disorders",
      email: "a.khan@rcmc.edu.bd",
      phone: "Ext: 3500",
      publications: 42,
      research: "Mood Disorders, Schizophrenia, Community Mental Health",
      image: "/faculty/a-khan.jpg"
    },
    {
      name: "Assoc. Prof. Dr. S. Rahman",
      designation: "Associate Professor",
      qualifications: "MBBS, FCPS, FRCPsych",
      experience: "20 years",
      specialization: "Child & Adolescent Psychiatry",
      email: "s.rahman@rcmc.edu.bd",
      phone: "Ext: 3501",
      publications: 36,
      research: "Child Psychiatry, ADHD, Autism, Developmental Disorders",
      image: "/faculty/s-rahman.jpg"
    },
    {
      name: "Asst. Prof. Dr. M. Khatun",
      designation: "Assistant Professor",
      qualifications: "MBBS, FCPS",
      experience: "16 years",
      specialization: "Addiction Psychiatry, Substance Abuse",
      email: "m.khatun@rcmc.edu.bd",
      phone: "Ext: 3502",
      publications: 28,
      research: "Addiction Medicine, Substance Abuse, Rehabilitation",
      image: "/faculty/m-khatun.jpg"
    },
    {
      name: "Dr. N. Ahmed",
      designation: "Senior Registrar",
      qualifications: "MBBS, FCPS",
      experience: "12 years",
      specialization: "Consultation-Liaison Psychiatry, Emergency Psychiatry",
      email: "n.ahmed@rcmc.edu.bd",
      phone: "Ext: 3503",
      publications: 22,
      research: "Emergency Psychiatry, CL Psychiatry, Psychosomatic Medicine",
      image: "/faculty/n-ahmed.jpg"
    }
  ]

  const clinicalUnits = [
    {
      name: "Psychiatry OPD",
      type: "Outpatient Care",
      capacity: 60,
      dailyPatients: "180/day",
      description: "Comprehensive outpatient psychiatric care and counseling",
      facilities: ["Consultation Rooms", "Counseling Rooms", "Psychological Testing", "Pharmacy", "Recovery Area"],
      commonCases: ["Depression", "Anxiety Disorders", "Bipolar Disorder", "Schizophrenia", "Stress Disorders"],
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Psychiatry Ward",
      type: "Inpatient Care",
      capacity: 40,
      beds: 40,
      admissions: "80/month",
      description: "Inpatient care for acute psychiatric conditions and crisis management",
      facilities: ["Private Rooms", "General Ward", "Isolation Rooms", "Recreation Area", "Security"],
      commonCases: ["Severe Depression", "Psychosis", "Mania", "Suicide Risk", "Acute Psychiatric Emergencies"],
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Child Psychiatry Unit",
      type: "Specialized Care",
      capacity: 30,
      dailyPatients: "60/day",
      description: "Specialized care for children and adolescents with mental health issues",
      facilities: ["Child-friendly Rooms", "Play Therapy", "Assessment Tools", "Family Counseling", "Educational Support"],
      commonCases: ["ADHD", "Autism", "Childhood Depression", "Behavioral Disorders", "Learning Disabilities"],
      incharge: "Assoc. Prof. Dr. S. Rahman"
    },
    {
      name: "Addiction Treatment Center",
      type: "Specialized Care",
      capacity: 25,
      dailyPatients: "50/day",
      description: "Comprehensive addiction treatment and rehabilitation services",
      facilities: ["Detoxification Unit", "Counseling Rooms", "Group Therapy", "Recreation", "Aftercare"],
      commonCases: ["Alcohol Dependence", "Drug Addiction", "Behavioral Addictions", "Withdrawal Management", "Relapse Prevention"],
      incharge: "Asst. Prof. Dr. M. Khatun"
    },
    {
      name: "Emergency Psychiatry",
      type: "Emergency Care",
      capacity: 20,
      dailyPatients: "40/day",
      description: "24/7 emergency psychiatric services and crisis intervention",
      facilities: ["Emergency Rooms", "Isolation Rooms", "Restraint Equipment", "Security", "Rapid Response Team"],
      commonCases: ["Suicidal Attempts", "Psychotic Episodes", "Severe Anxiety", "Mania", "Delirium"],
      incharge: "Dr. N. Ahmed"
    },
    {
      name: "Psychological Assessment Unit",
      type: "Diagnostic Unit",
      capacity: 20,
      dailyAssessments: "80/day",
      description: "Comprehensive psychological testing and assessment services",
      facilities: ["Testing Rooms", "Assessment Tools", "Neuropsychological Tests", "Intelligence Testing", "Personality Assessment"],
      commonCases: ["Psychological Testing", "Neuropsychological Assessment", "IQ Testing", "Personality Assessment", "Career Counseling"],
      incharge: "Assoc. Prof. Dr. S. Rahman"
    }
  ]

  const internshipProgram = [
    {
      name: "Psychiatry OPD Rotation",
      duration: "4 Weeks",
      setting: "Psychiatry OPD",
      responsibilities: ["Patient Assessment", "Diagnosis", "Treatment Planning", "Counseling", "Follow-up"],
      skills: ["Psychiatric Assessment", "Diagnostic Skills", "Treatment Planning", "Counseling Techniques", "Documentation"],
      assessment: "Logbook + OPD Skills Assessment",
      supervisor: "Dr. N. Ahmed"
    },
    {
      name: "Psychiatry Ward Rotation",
      duration: "3 Weeks",
      setting: "Psychiatry Ward",
      responsibilities: ["Inpatient Care", "Medication Management", "Crisis Intervention", "Therapeutic Activities", "Discharge Planning"],
      skills: ["Inpatient Management", "Medication Management", "Crisis Intervention", "Therapeutic Activities", "Safety Protocols"],
      assessment: "Logbook + Ward Skills Assessment",
      supervisor: "Dr. N. Ahmed"
    },
    {
      name: "Child Psychiatry Rotation",
      duration: "2 Weeks",
      setting: "Child Psychiatry Unit",
      responsibilities: ["Child Assessment", "Family Counseling", "Play Therapy", "Educational Support", "Behavioral Management"],
      skills: ["Child Assessment", "Family Counseling", "Play Therapy", "Behavioral Management", "Developmental Assessment"],
      assessment: "Logbook + Child Psychiatry Skills Assessment",
      supervisor: "Assoc. Prof. Dr. S. Rahman"
    },
    {
      name: "Addiction Psychiatry Rotation",
      duration: "2 Weeks",
      setting: "Addiction Treatment Center",
      responsibilities: ["Addiction Assessment", "Detoxification", "Counseling", "Group Therapy", "Relapse Prevention"],
      skills: ["Addiction Assessment", "Detoxification Management", "Counseling", "Group Therapy", "Relapse Prevention"],
      assessment: "Logbook + Addiction Skills Assessment",
      supervisor: "Asst. Prof. Dr. M. Khatun"
    },
    {
      name: "Emergency Psychiatry Rotation",
      duration: "2 Weeks",
      setting: "Emergency Psychiatry",
      responsibilities: ["Emergency Assessment", "Crisis Intervention", "Risk Management", "Stabilization", "Referral"],
      skills: ["Emergency Assessment", "Crisis Intervention", "Risk Management", "Emergency Treatment", "Safety Protocols"],
      assessment: "Logbook + Emergency Skills Assessment",
      supervisor: "Dr. N. Ahmed"
    },
    {
      name: "Psychological Assessment Rotation",
      duration: "1 Week",
      setting: "Psychological Assessment Unit",
      responsibilities: ["Psychological Testing", "Assessment Administration", "Report Writing", "Test Interpretation"],
      skills: ["Psychological Testing", "Assessment Administration", "Test Interpretation", "Report Writing", "Ethical Considerations"],
      assessment: "Logbook + Assessment Skills Assessment",
      supervisor: "Assoc. Prof. Dr. S. Rahman"
    }
  ]

  const clinicalSkills = [
    {
      category: "Psychiatric Assessment Skills",
      skills: ["Mental Status Examination", "Risk Assessment", "Diagnostic Interviewing", "Case Formulation", "Documentation"],
      competency: "Required",
      assessment: "Direct Observation + OSCE",
      certification: "Psychiatric Assessment Certified"
    },
    {
      category: "Pharmacotherapy Skills",
      skills: ["Medication Management", "Side Effect Monitoring", "Dose Adjustment", "Drug Interactions", "Adherence Support"],
      competency: "Required",
      assessment: "Pharmacotherapy Training + Clinical Performance",
      certification: "Pharmacotherapy Certified"
    },
    {
      category: "Psychotherapy Skills",
      skills: ["Supportive Therapy", "CBT Techniques", "Family Therapy", "Group Therapy", "Crisis Counseling"],
      competency: "Required",
      assessment: "Psychotherapy Training + Direct Observation",
      certification: "Psychotherapy Certified"
    },
    {
      category: "Emergency Psychiatry Skills",
      skills: ["Emergency Assessment", "Risk Management", "Crisis Intervention", "Restraint Management", "Emergency Protocols"],
      competency: "Required",
      assessment: "Emergency Training + Direct Observation",
      certification: "Emergency Psychiatry Certified"
    },
    {
      category: "Child Psychiatry Skills",
      skills: ["Child Assessment", "Developmental Evaluation", "Family Counseling", "Play Therapy", "Educational Support"],
      competency: "Required",
      assessment: "Child Psychiatry Training + Clinical Performance",
      certification: "Child Psychiatry Certified"
    },
    {
      category: "Addiction Psychiatry Skills",
      skills: ["Addiction Assessment", "Detoxification", "Relapse Prevention", "Counseling", "Rehabilitation"],
      competency: "Required",
      assessment: "Addiction Training + Clinical Performance",
      certification: "Addiction Psychiatry Certified"
    }
  ]

  const commonConditions = [
    {
      category: "Mood Disorders",
      conditions: ["Major Depressive Disorder", "Bipolar Disorder", "Dysthymia", "Cyclothymia", "Seasonal Affective Disorder"],
      prevalence: "30%",
      management: ["Antidepressants", "Mood Stabilizers", "Psychotherapy", "ECT", "Lifestyle Modification"],
      complications: ["Suicide Risk", "Functional Impairment", "Social Isolation", "Comorbid Anxiety", "Substance Abuse"]
    },
    {
      category: "Anxiety Disorders",
      conditions: ["Generalized Anxiety", "Panic Disorder", "Social Anxiety", "Phobias", "OCD"],
      prevalence: "25%",
      management: ["Anxiolytics", "SSRIs", "CBT", "Exposure Therapy", "Relaxation Techniques"],
      complications: ["Depression", "Substance Abuse", "Functional Impairment", "Physical Health Issues", "Social Withdrawal"]
    },
    {
      category: "Psychotic Disorders",
      conditions: ["Schizophrenia", "Schizoaffective", "Brief Psychotic Disorder", "Delusional Disorder", "Schizophreniform"],
      prevalence: "15%",
      management: ["Antipsychotics", "Psychotherapy", "Social Skills Training", "Family Therapy", "Rehabilitation"],
      complications: ["Cognitive Decline", "Social Isolation", "Functional Impairment", "Substance Abuse", "Increased Mortality"]
    },
    {
      category: "Substance Use Disorders",
      conditions: ["Alcohol Dependence", "Opioid Dependence", "Stimulant Use", "Cannabis Use", "Polysubstance Abuse"],
      prevalence: "20%",
      management: ["Detoxification", "Medication Assisted Treatment", "Psychotherapy", "AA/NA", "Rehabilitation"],
      complications: ["Medical Complications", "Psychiatric Comorbidity", "Social Problems", "Legal Issues", "Overdose Risk"]
    },
    {
      category: "Child & Adolescent Disorders",
      conditions: ["ADHD", "Autism Spectrum", "Conduct Disorder", "Childhood Depression", "Anxiety Disorders"],
      prevalence: "10%",
      management: ["Behavioral Therapy", "Medication", "Family Therapy", "Educational Support", "Parent Training"],
      complications: ["Academic Problems", "Social Difficulties", "Family Stress", "Long-term Disability", "Comorbid Conditions"]
    }
  ]

  const procedures = [
    {
      name: "Electroconvulsive Therapy (ECT)",
      description: "Electrical stimulation of the brain for severe psychiatric conditions",
      type: "Therapeutic",
      duration: "15-30 minutes",
      anesthesia: "General",
      recovery: "2-4 hours",
      complications: ["Memory Loss", "Headache", "Nausea", "Confusion", "Cardiovascular Effects"],
      frequency: "Weekly"
    },
    {
      name: "Psychological Assessment",
      description: "Comprehensive psychological testing for diagnosis and treatment planning",
      type: "Diagnostic",
      duration: "2-4 hours",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Test Anxiety", "Fatigue", "Emotional Distress", "Testing Errors"],
      frequency: "Daily"
    },
    {
      name: "Crisis Intervention",
      description: "Emergency intervention for psychiatric crises and suicidal behavior",
      type: "Emergency",
      duration: "30-60 minutes",
      anesthesia: "None",
      recovery: "Variable",
      complications: ["Patient Agitation", "Staff Injury", "Treatment Failure", "Legal Issues"],
      frequency: "As needed"
    },
    {
      name: "Detoxification Protocol",
      description: "Medical management of substance withdrawal symptoms",
      type: "Therapeutic",
      duration: "5-10 days",
      anesthesia: "None",
      recovery: "1-2 weeks",
      complications: ["Seizures", "Delirium", "Medical Complications", "Relapse", "Psychiatric Symptoms"],
      frequency: "As needed"
    },
    {
      name: "Group Therapy Session",
      description: "Therapeutic group session for various psychiatric conditions",
      type: "Therapeutic",
      duration: "60-90 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Emotional Distress", "Group Conflict", "Confidentiality Breach", "Dropout"],
      frequency: "Weekly"
    },
    {
      name: "Family Therapy Session",
      description: "Therapeutic session involving family members for psychiatric treatment",
      type: "Therapeutic",
      duration: "60-90 minutes",
      anesthesia: "None",
      recovery: "Immediate",
      complications: ["Family Conflict", "Resistance", "Emotional Distress", "Dropout"],
      frequency: "Weekly"
    }
  ]

  const protocols = [
    {
      name: "Suicide Risk Assessment Protocol",
      description: "Standardized protocol for suicide risk assessment and management",
      steps: ["Risk Assessment", "Safety Planning", "Intervention", "Monitoring", "Follow-up"],
      frequency: "Every Suicidal Patient",
      documentation: "Suicide Registry",
      quality: "WHO Guidelines"
    },
    {
      name: "Seclusion and Restraint Protocol",
      description: "Protocol for safe use of seclusion and restraint in psychiatric emergencies",
      steps: ["Assessment", "Authorization", "Implementation", "Monitoring", "Debriefing"],
      frequency: "Every Emergency",
      documentation: "Restraint Registry",
      quality: "APA Guidelines"
    },
    {
      name: "Medication Management Protocol",
      description: "Protocol for psychiatric medication prescribing and monitoring",
      steps: ["Assessment", "Prescription", "Monitoring", "Side Effect Management", "Adjustment"],
      frequency: "Every Medication",
      documentation: "Medication Registry",
      quality: "APA Guidelines"
    },
    {
      name: "ECT Protocol",
      description: "Standardized protocol for electroconvulsive therapy administration",
      steps: ["Pre-ECT Assessment", "Consent", "Procedure", "Post-ECT Care", "Follow-up"],
      frequency: "Every ECT",
      documentation: "ECT Registry",
      quality: "APA Guidelines"
    },
    {
      name: "Child Psychiatry Protocol",
      description: "Protocol for child and adolescent psychiatric assessment and treatment",
      steps: ["Assessment", "Family Involvement", "Treatment Planning", "School Coordination", "Follow-up"],
      frequency: "Every Child Case",
      documentation: "Child Registry",
      quality: "AACAP Guidelines"
    }
  ]

  const researchProjects = [
    {
      title: "Depression Outcomes Study",
      principalInvestigator: "Prof. Dr. A. Khan",
      coInvestigators: ["Assoc. Prof. Dr. S. Rahman", "Dr. N. Ahmed"],
      duration: "2024-2026",
      funding: "BDT 600,000",
      status: "Ongoing",
      description: "Study of depression treatment outcomes and quality improvement.",
      publications: 3,
      impact: "High"
    },
    {
      title: "Child Psychiatry Registry Study",
      principalInvestigator: "Assoc. Prof. Dr. S. Rahman",
      coInvestigators: ["Prof. Dr. A. Khan"],
      duration: "2023-2025",
      funding: "BDT 500,000",
      status: "Ongoing",
      description: "Study of childhood psychiatric disorders and treatment effectiveness.",
      publications: 2,
      impact: "High"
    },
    {
      title: "Addiction Treatment Study",
      principalInvestigator: "Asst. Prof. Dr. M. Khatun",
      coInvestigators: ["Dr. N. Ahmed"],
      duration: "2024-2027",
      funding: "BDT 450,000",
      status: "Starting",
      description: "Study of addiction treatment modalities and relapse prevention.",
      publications: 0,
      impact: "Medium"
    }
  ]

  const achievements = [
    {
      title: "Best Psychiatry Department Award",
      year: "2024",
      category: "Clinical Excellence",
      description: "Recognized for outstanding psychiatric care and mental health services.",
      impact: "High"
    },
    {
      title: "Mental Health Awareness Award",
      year: "2023",
      category: "Community Service",
      description: "Awarded for exceptional mental health awareness and community outreach.",
      impact: "High"
    },
    {
      title: "Child Psychiatry Excellence Award",
      year: "2023",
      category: "Specialty Excellence",
      description: "Recognized for excellence in child and adolescent psychiatric care.",
      impact: "High"
    },
    {
      title: "Research Excellence Award",
      year: "2022",
      category: "Research",
      description: "Awarded for outstanding research contributions in psychiatry.",
      impact: "High"
    }
  ]

  const upcomingEvents = [
    {
      title: "Psychiatry Workshop 2024",
      date: "2025-01-13",
      time: "9:00 AM - 5:00 PM",
      venue: "Psychiatry Department",
      type: "Workshop",
      organizer: "Prof. Dr. A. Khan",
      participants: "Psychiatry Professionals",
      description: "Annual workshop on recent advances in psychiatry and mental health."
    },
    {
      title: "Child Psychiatry Training",
      date: "2025-01-16",
      time: "10:00 AM - 4:00 PM",
      venue: "Child Psychiatry Unit",
      type: "Training",
      organizer: "Assoc. Prof. Dr. S. Rahman",
      participants: "Healthcare Workers",
      description: "Hands-on training for child and adolescent psychiatric assessment and management."
    },
    {
      title: "Addiction Medicine Conference",
      date: "2025-01-19",
      time: "2:00 PM - 5:00 PM",
      venue: "College Auditorium",
      type: "Conference",
      organizer: "Asst. Prof. Dr. M. Khatun",
      participants: "Healthcare Professionals",
      description: "Conference on latest advances in addiction medicine and rehabilitation."
    }
  ]

  const resources = [
    {
      title: "Psychiatry Internship Manual",
      description: "Comprehensive guide for psychiatry internship training and procedures",
      type: "PDF",
      size: "12.5 MB",
      downloadCount: 1400,
      category: "Manual"
    },
    {
      title: "Psychiatric Assessment Guidelines",
      description: "Complete guidelines for psychiatric assessment and diagnosis",
      type: "PDF",
      size: "8.8 MB",
      downloadCount: 2000,
      category: "Guidelines"
    },
    {
      title: "Psychotherapy Techniques Atlas",
      description: "Comprehensive atlas of psychotherapy techniques and approaches",
      type: "PDF",
      size: "28.5 MB",
      downloadCount: 2200,
      category: "Atlas"
    },
    {
      title: "Psychiatry Procedure Videos",
      description: "Demonstration videos of psychiatric procedures and therapeutic techniques",
      type: "Video",
      size: "1.8 GB",
      downloadCount: 1200,
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
                <BrainIcon2 className="w-12 h-12 text-purple-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Psychiatry - Phase 4</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">Advanced Mental Healthcare and Psychiatric Medicine</p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white text-gray-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md">Mental Wellness Excellence</div>
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
                  <div className="text-sm text-gray-600">Psychiatric Beds</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MonitorIcon className="w-8 h-8 text-indigo-600" />
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
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        <User className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-sm text-purple-600 font-medium">{member.designation}</p>
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

                    <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
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
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <Hospital className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{unit.name}</h3>
                        <p className="text-sm text-gray-600">{unit.type}</p>
                        <p className="text-sm text-purple-600 font-medium">Incharge: {unit.incharge}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{unit.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                        <div className="font-semibold">{unit.capacity}</div>
                        <div className="text-xs text-gray-600">Capacity</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <UsersIcon3 className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                        <div className="font-semibold">{unit.dailyPatients}</div>
                        <div className="text-xs text-gray-600">Daily Patients</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Common Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {unit.commonCases.slice(0, 3).map((case_, caseIndex) => (
                          <span key={caseIndex} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
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
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
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
                            <span key={skillIndex} className="px-2 py-1 bg-purple-100 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                          {program.skills.length > 3 && (
                            <span className="px-2 py-1 bg-purple-100 rounded-full text-xs">
                              +{program.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="font-medium">Supervisor:</span>
                        <span className="font-medium text-purple-600">{program.supervisor}</span>
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Common Psychiatric Conditions</h2>
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
                            <span key={managementIndex} className="px-2 py-1 bg-purple-100 rounded-full text-xs">
                              {management}
                            </span>
                          ))}
                          {condition.management.length > 3 && (
                            <span className="px-2 py-1 bg-purple-100 rounded-full text-xs">
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Psychiatric Procedures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {procedures.map((procedure, index) => (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <SyringeIcon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{procedure.name}</h3>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
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
                        <p className="text-sm text-purple-600 font-medium">PI: {project.principalInvestigator}</p>
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
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
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
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
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
                        <CalendarDays className="w-6 h-6 text-purple-600" />
                        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                      </div>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
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

                    <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Psychiatry Resources</h2>
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
                          <div className="text-sm text-purple-600 font-medium">
                            {resource.downloadCount} downloads
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {resource.category}
                          </span>
                          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
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
