"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  GraduationCap,
  Users,
  Clock,
  FileText,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  Award,
  CheckCircle,
  ArrowRight,
  Download,
  Info,
  X,
  ChevronDown,
  Upload,
  Edit,
  Eye,
  AlertCircle,
  CheckSquare,
  Square,
  Loader,
  User,
  CreditCard,
  Shield,
  Target,
  Camera,
  Save,
  Send,
  Home,
  IdCard,
  School,
  Stethoscope,
  Globe,
  Plane,
  CreditCard as PassportIcon
} from "lucide-react"

export default function ForeignApplicationPage() {
  const [currentSection, setCurrentSection] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    religion: "",
    nationality: "",
    passportNumber: "",
    passportExpiry: "",
    visaType: "",
    phone: "",
    email: "",
    
    // Address Information
    presentAddress: "",
    permanentAddress: "",
    city: "",
    country: "",
    postalCode: "",
    
    // Academic Information
    olevelBoard: "",
    olevelYear: "",
    olevelGPA: "",
    olevelRegistration: "",
    alevelBoard: "",
    alevelYear: "",
    alevelGPA: "",
    alevelRegistration: "",
    equivalenceCertificate: "",
    
    // English Proficiency
    englishTest: "",
    testScore: "",
    testDate: "",
    
    // Guardian Information
    guardianName: "",
    guardianPhone: "",
    guardianRelation: "",
    guardianOccupation: "",
    guardianEmail: "",
    guardianAddress: "",
    
    // Financial Information
    sponsorName: "",
    sponsorRelation: "",
    sponsorIncome: "",
    sponsorOccupation: "",
    paymentMethod: "",
    
    // Agreement
    declaration: false,
    termsAccepted: false
  })
  
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File | null}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const sections = [
    { id: 1, title: "Personal Information", icon: User },
    { id: 2, title: "Address Details", icon: Home },
    { id: 3, title: "Academic Records", icon: School },
    { id: 4, title: "English Proficiency", icon: Globe },
    { id: 5, title: "Guardian & Sponsor", icon: Users },
    { id: 6, title: "Document Upload", icon: Upload },
    { id: 7, title: "Review & Submit", icon: Send }
  ]

  const requiredDocuments = [
    { id: "photo", name: "Passport Size Photo", required: true, description: "Recent color photo with white background" },
    { id: "signature", name: "Signature", required: true, description: "Clear signature on white paper" },
    { id: "passport", name: "Passport Copy", required: true, description: "Valid passport (first page and visa page)" },
    { id: "birth", name: "Birth Certificate", required: true, description: "Original birth certificate" },
    { id: "olevel", name: "O-Level Certificates", required: true, description: "Original O-Level certificates" },
    { id: "alevel", name: "A-Level Certificates", required: true, description: "Original A-Level certificates" },
    { id: "equivalence", name: "Equivalence Certificate", required: true, description: "From concerned authority" },
    { id: "english", name: "English Test Certificate", required: true, description: "IELTS/TOEFL score report" },
    { id: "medical", name: "Medical Certificate", required: true, description: "Medical fitness certificate" },
    { id: "character", name: "Character Certificate", required: true, description: "From last attended institution" },
    { id: "financial", name: "Financial Support Documents", required: true, description: "Bank statements/sponsor letter" },
    { id: "recommendation", name: "Recommendation Letters", required: false, description: "Academic recommendation letters" }
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const handleFileUpload = (docId: string, file: File) => {
    setUploadedFiles(prev => ({ ...prev, [docId]: file }))
  }

  const validateSection = (sectionId: number): boolean => {
    const newErrors: {[key: string]: string} = {}
    
    if (sectionId === 1) {
      // Personal Information validation
      if (!formData.firstName) newErrors.firstName = "First name is required"
      if (!formData.lastName) newErrors.lastName = "Last name is required"
      if (!formData.fatherName) newErrors.fatherName = "Father's name is required"
      if (!formData.motherName) newErrors.motherName = "Mother's name is required"
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
      if (!formData.gender) newErrors.gender = "Gender is required"
      if (!formData.bloodGroup) newErrors.bloodGroup = "Blood group is required"
      if (!formData.nationality) newErrors.nationality = "Nationality is required"
      if (!formData.passportNumber) newErrors.passportNumber = "Passport number is required"
      if (!formData.passportExpiry) newErrors.passportExpiry = "Passport expiry is required"
      if (!formData.phone) newErrors.phone = "Phone number is required"
      if (!formData.email) newErrors.email = "Email is required"
      else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format"
    }
    
    if (sectionId === 2) {
      // Address validation
      if (!formData.presentAddress) newErrors.presentAddress = "Present address is required"
      if (!formData.permanentAddress) newErrors.permanentAddress = "Permanent address is required"
      if (!formData.city) newErrors.city = "City is required"
      if (!formData.country) newErrors.country = "Country is required"
      if (!formData.postalCode) newErrors.postalCode = "Postal code is required"
    }
    
    if (sectionId === 3) {
      // Academic validation
      if (!formData.olevelBoard) newErrors.olevelBoard = "O-Level board is required"
      if (!formData.olevelYear) newErrors.olevelYear = "O-Level year is required"
      if (!formData.olevelGPA) newErrors.olevelGPA = "O-Level GPA is required"
      if (!formData.alevelBoard) newErrors.alevelBoard = "A-Level board is required"
      if (!formData.alevelYear) newErrors.alevelYear = "A-Level year is required"
      if (!formData.alevelGPA) newErrors.alevelGPA = "A-Level GPA is required"
      if (!formData.equivalenceCertificate) newErrors.equivalenceCertificate = "Equivalence certificate is required"
    }
    
    if (sectionId === 4) {
      // English Proficiency validation
      if (!formData.englishTest) newErrors.englishTest = "English test type is required"
      if (!formData.testScore) newErrors.testScore = "Test score is required"
      if (!formData.testDate) newErrors.testDate = "Test date is required"
    }
    
    if (sectionId === 5) {
      // Guardian & Sponsor validation
      if (!formData.guardianName) newErrors.guardianName = "Guardian name is required"
      if (!formData.guardianPhone) newErrors.guardianPhone = "Guardian phone is required"
      if (!formData.guardianRelation) newErrors.guardianRelation = "Guardian relation is required"
      if (!formData.sponsorName) newErrors.sponsorName = "Sponsor name is required"
      if (!formData.sponsorRelation) newErrors.sponsorRelation = "Sponsor relation is required"
      if (!formData.paymentMethod) newErrors.paymentMethod = "Payment method is required"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextSection = () => {
    if (validateSection(currentSection)) {
      if (currentSection < sections.length) {
        setCurrentSection(currentSection + 1)
      }
    }
  }

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1)
    }
  }

  const handleSubmit = async () => {
    if (!formData.declaration || !formData.termsAccepted) {
      setErrors({ 
        declaration: !formData.declaration ? "Declaration must be accepted" : "",
        termsAccepted: !formData.termsAccepted ? "Terms must be accepted" : ""
      })
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Foreign student application submitted successfully! You will receive a confirmation email shortly with further instructions.")
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-[#F9FAFB] text-gray-700 overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 opacity-20 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-200 opacity-20 rounded-full -ml-32 -mb-32"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white bg-opacity-60 p-4 rounded-full backdrop-blur-sm">
                <Globe className="h-20 w-20 text-blue-600" />
              </div>
            </div>
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-800">
                Foreign Student
                <span className="block text-3xl md:text-4xl text-gray-600 mt-2">Application Form</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Complete your application for MBBS program as an international student
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="/admission/foreign/mbbs-info">
                <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                  <ArrowRight className="mr-2 h-6 w-6 rotate-180" />
                  Back to MBBS Info
                </Button>
              </Link>
              <Link href="/admission/foreign/eligibility">
                <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                  <CheckCircle className="mr-2 h-6 w-6" />
                  Check Eligibility
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Application Progress</h3>
                <span className="text-sm text-gray-600">Section {currentSection} of {sections.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(currentSection / sections.length) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-4">
                {sections.map((section, index) => (
                  <div key={section.id} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentSection > section.id 
                        ? 'bg-green-500 text-white' 
                        : currentSection === section.id 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {currentSection > section.id ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        React.createElement(section.icon, { className: "h-5 w-5" })
                      )}
                    </div>
                    <span className="text-xs text-gray-600 mt-2 text-center hidden sm:block">{section.title}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Application Form */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700">
              <CardTitle className="flex items-center text-white text-xl">
                {React.createElement(sections[currentSection - 1].icon, { className: "mr-3 h-6 w-6" })}
                {sections[currentSection - 1].title}
              </CardTitle>
              <CardDescription className="text-blue-100">
                Please fill in all required information accurately
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              
              {/* Section 1: Personal Information */}
              {currentSection === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Father's Name *</label>
                      <input
                        type="text"
                        value={formData.fatherName}
                        onChange={(e) => handleInputChange("fatherName", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.fatherName ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter father's name"
                      />
                      {errors.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mother's Name *</label>
                      <input
                        type="text"
                        value={formData.motherName}
                        onChange={(e) => handleInputChange("motherName", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.motherName ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter mother's name"
                      />
                      {errors.motherName && <p className="text-red-500 text-sm mt-1">{errors.motherName}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                      <input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => handleInputChange("gender", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group *</label>
                      <select
                        value={formData.bloodGroup}
                        onChange={(e) => handleInputChange("bloodGroup", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.bloodGroup ? 'border-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">Select blood group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                      {errors.bloodGroup && <p className="text-red-500 text-sm mt-1">{errors.bloodGroup}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Religion</label>
                      <select
                        value={formData.religion}
                        onChange={(e) => handleInputChange("religion", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select religion</option>
                        <option value="islam">Islam</option>
                        <option value="hinduism">Hinduism</option>
                        <option value="buddhism">Buddhism</option>
                        <option value="christianity">Christianity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nationality *</label>
                      <input
                        type="text"
                        value={formData.nationality}
                        onChange={(e) => handleInputChange("nationality", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.nationality ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your nationality"
                      />
                      {errors.nationality && <p className="text-red-500 text-sm mt-1">{errors.nationality}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Passport Number *</label>
                      <input
                        type="text"
                        value={formData.passportNumber}
                        onChange={(e) => handleInputChange("passportNumber", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.passportNumber ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter passport number"
                      />
                      {errors.passportNumber && <p className="text-red-500 text-sm mt-1">{errors.passportNumber}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Passport Expiry *</label>
                      <input
                        type="date"
                        value={formData.passportExpiry}
                        onChange={(e) => handleInputChange("passportExpiry", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.passportExpiry ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.passportExpiry && <p className="text-red-500 text-sm mt-1">{errors.passportExpiry}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Visa Type</label>
                      <select
                        value={formData.visaType}
                        onChange={(e) => handleInputChange("visaType", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select visa type</option>
                        <option value="student">Student Visa</option>
                        <option value="tourist">Tourist Visa (to be converted)</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter phone number with country code"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter email address"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Section 2: Address Details */}
              {currentSection === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Present Address *</label>
                      <textarea
                        value={formData.presentAddress}
                        onChange={(e) => handleInputChange("presentAddress", e.target.value)}
                        rows={3}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.presentAddress ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your present address"
                      />
                      {errors.presentAddress && <p className="text-red-500 text-sm mt-1">{errors.presentAddress}</p>}
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Permanent Address *</label>
                      <textarea
                        value={formData.permanentAddress}
                        onChange={(e) => handleInputChange("permanentAddress", e.target.value)}
                        rows={3}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.permanentAddress ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your permanent address"
                      />
                      {errors.permanentAddress && <p className="text-red-500 text-sm mt-1">{errors.permanentAddress}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter city name"
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter country name"
                      />
                      {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code *</label>
                      <input
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange("postalCode", e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter postal code"
                      />
                      {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  onClick={prevSection}
                  disabled={currentSection === 1}
                  variant="outline"
                  className="border-gray-600 text-gray-600 hover:bg-gray-50"
                >
                  <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  Previous
                </Button>
                {currentSection === sections.length ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Application
                      </>
                    )}
                  </Button>
                ) : (
                  <Button
                    onClick={nextSection}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Help with Your Application?</h3>
              <p className="text-blue-100 mb-6">
                Our foreign student admission team is here to help you with any questions about the application process
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Foreign Student Office
                </Button>
                <Button size="lg" variant="outline" className="border-white text-gray-700 hover:bg-white hover:text-blue-600">
                  <Mail className="mr-2 h-5 w-5 text-gray-700" />
                  Email Application Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
