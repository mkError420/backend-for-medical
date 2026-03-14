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
  Stethoscope
} from "lucide-react"

export default function ApplicationPage() {
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
    nationality: "Bangladeshi",
    phone: "",
    email: "",
    
    // Address Information
    presentAddress: "",
    permanentAddress: "",
    city: "",
    district: "",
    postalCode: "",
    
    // Academic Information
    sscBoard: "",
    sscYear: "",
    sscGPA: "",
    sscRoll: "",
    sscRegistration: "",
    hscBoard: "",
    hscYear: "",
    hscGPA: "",
    hscRoll: "",
    hscRegistration: "",
    
    // Additional Information
    quota: "",
    guardianPhone: "",
    guardianRelation: "",
    guardianOccupation: "",
    guardianIncome: "",
    
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
    { id: 4, title: "Document Upload", icon: Upload },
    { id: 5, title: "Review & Submit", icon: Send }
  ]

  const requiredDocuments = [
    { id: "photo", name: "Passport Size Photo", required: true, description: "Recent color photo with white background" },
    { id: "signature", name: "Signature", required: true, description: "Clear signature on white paper" },
    { id: "birth", name: "Birth Certificate", required: true, description: "Original birth certificate" },
    { id: "citizenship", name: "Citizenship Certificate", required: true, description: "Proof of Bangladeshi citizenship" },
    { id: "ssc", name: "SSC Mark Sheet", required: true, description: "Original SSC/Dakhil/O-level result" },
    { id: "hsc", name: "HSC Mark Sheet", required: true, description: "Original HSC/Alim/A-level result" },
    { id: "admission", name: "MBBS Admission Result Sheet", required: true, description: "MBBS admission test result sheet" },
    { id: "character", name: "Character Certificate", required: true, description: "From last attended institution" },
    { id: "medical", name: "Medical Certificate", required: false, description: "Medical fitness certificate" },
    { id: "quota", name: "Quota Certificate", required: false, description: "If applicable for quota" }
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
      if (!formData.phone) newErrors.phone = "Phone number is required"
      if (!formData.email) newErrors.email = "Email is required"
      else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format"
    }
    
    if (sectionId === 2) {
      // Address validation
      if (!formData.presentAddress) newErrors.presentAddress = "Present address is required"
      if (!formData.permanentAddress) newErrors.permanentAddress = "Permanent address is required"
      if (!formData.city) newErrors.city = "City is required"
      if (!formData.district) newErrors.district = "District is required"
      if (!formData.postalCode) newErrors.postalCode = "Postal code is required"
    }
    
    if (sectionId === 3) {
      // Academic validation
      if (!formData.sscBoard) newErrors.sscBoard = "SSC board is required"
      if (!formData.sscYear) newErrors.sscYear = "SSC year is required"
      if (!formData.sscGPA) newErrors.sscGPA = "SSC GPA is required"
      if (!formData.hscBoard) newErrors.hscBoard = "HSC board is required"
      if (!formData.hscYear) newErrors.hscYear = "HSC year is required"
      if (!formData.hscGPA) newErrors.hscGPA = "HSC GPA is required"
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
      alert("Application submitted successfully! You will receive a confirmation email shortly.")
    }, 3000)
  }

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {sections.map((section, index) => (
          <div key={section.id} className="flex items-center">
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
                <span className="font-bold">{section.id}</span>
              )}
            </div>
            <div className={`hidden sm:block ml-2 text-sm font-medium ${
              currentSection >= section.id ? 'text-blue-600' : 'text-gray-500'
            }`}>
              {section.title}
            </div>
            {index < sections.length - 1 && (
              <div className={`ml-4 w-8 h-0.5 ${
                currentSection > section.id ? 'bg-green-500' : 'bg-gray-300'
              }`}></div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentSection / sections.length) * 100}%` }}
        ></div>
      </div>
    </div>
  )

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your first name"
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your last name"
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Father's Name *
          </label>
          <input
            type="text"
            value={formData.fatherName}
            onChange={(e) => handleInputChange("fatherName", e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.fatherName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter father's name"
          />
          {errors.fatherName && <p className="text-red-500 text-xs mt-1">{errors.fatherName}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mother's Name *
          </label>
          <input
            type="text"
            value={formData.motherName}
            onChange={(e) => handleInputChange("motherName", e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.motherName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter mother's name"
          />
          {errors.motherName && <p className="text-red-500 text-xs mt-1">{errors.motherName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth *
          </label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.dateOfBirth ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender *
          </label>
          <select
            value={formData.gender}
            onChange={(e) => handleInputChange("gender", e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.gender ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Blood Group *
          </label>
          <select
            value={formData.bloodGroup}
            onChange={(e) => handleInputChange("bloodGroup", e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.bloodGroup ? "border-red-500" : "border-gray-300"
            }`}
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
          {errors.bloodGroup && <p className="text-red-500 text-xs mt-1">{errors.bloodGroup}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Religion
          </label>
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nationality
          </label>
          <select
            value={formData.nationality}
            onChange={(e) => handleInputChange("nationality", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="Bangladeshi">Bangladeshi</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
    </div>
  )

  const renderAddressInfo = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Present Address *
        </label>
        <textarea
          value={formData.presentAddress}
          onChange={(e) => handleInputChange("presentAddress", e.target.value)}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.presentAddress ? "border-red-500" : "border-gray-300"
          }`}
          rows={3}
          placeholder="Enter your present address"
        />
        {errors.presentAddress && <p className="text-red-500 text-xs mt-1">{errors.presentAddress}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Permanent Address *
        </label>
        <textarea
          value={formData.permanentAddress}
          onChange={(e) => handleInputChange("permanentAddress", e.target.value)}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errors.permanentAddress ? "border-red-500" : "border-gray-300"
          }`}
          rows={3}
          placeholder="Enter your permanent address"
        />
        {errors.permanentAddress && <p className="text-red-500 text-xs mt-1">{errors.permanentAddress}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City *
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.city ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your city"
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            District *
          </label>
          <select
            value={formData.district}
            onChange={(e) => handleInputChange("district", e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.district ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select district</option>
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="khulna">Khulna</option>
            <option value="sylhet">Sylhet</option>
            <option value="barisal">Barisal</option>
            <option value="rangpur">Rangpur</option>
            <option value="mymensingh">Mymensingh</option>
          </select>
          {errors.district && <p className="text-red-500 text-xs mt-1">{errors.district}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Postal Code *
          </label>
          <input
            type="text"
            value={formData.postalCode}
            onChange={(e) => handleInputChange("postalCode", e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.postalCode ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter postal code"
          />
          {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
        </div>
      </div>
    </div>
  )

  const renderAcademicInfo = () => (
    <div className="space-y-8">
      {/* SSC Information */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">SSC/Dakhil/O-level Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Board *
            </label>
            <select
              value={formData.sscBoard}
              onChange={(e) => handleInputChange("sscBoard", e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.sscBoard ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select board</option>
              <option value="dhaka">Dhaka</option>
              <option value="chittagong">Chittagong</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="khulna">Khulna</option>
              <option value="sylhet">Sylhet</option>
              <option value="barisal">Barisal</option>
              <option value="rangpur">Rangpur</option>
              <option value="mymensingh">Mymensingh</option>
              <option value="madrasah">Madrasah</option>
              <option value="technical">Technical</option>
            </select>
            {errors.sscBoard && <p className="text-red-500 text-xs mt-1">{errors.sscBoard}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Passing Year *
            </label>
            <input
              type="number"
              value={formData.sscYear}
              onChange={(e) => handleInputChange("sscYear", e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.sscYear ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g., 2022"
            />
            {errors.sscYear && <p className="text-red-500 text-xs mt-1">{errors.sscYear}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              GPA *
            </label>
            <input
              type="number"
              step="0.01"
              value={formData.sscGPA}
              onChange={(e) => handleInputChange("sscGPA", e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.sscGPA ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g., 4.50"
            />
            {errors.sscGPA && <p className="text-red-500 text-xs mt-1">{errors.sscGPA}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Roll Number
            </label>
            <input
              type="text"
              value={formData.sscRoll}
              onChange={(e) => handleInputChange("sscRoll", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter roll number"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Registration Number
            </label>
            <input
              type="text"
              value={formData.sscRegistration}
              onChange={(e) => handleInputChange("sscRegistration", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter registration number"
            />
          </div>
        </div>
      </div>

      {/* HSC Information */}
      <div className="bg-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-purple-800 mb-4">HSC/Alim/A-level Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Board *
            </label>
            <select
              value={formData.hscBoard}
              onChange={(e) => handleInputChange("hscBoard", e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.hscBoard ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select board</option>
              <option value="dhaka">Dhaka</option>
              <option value="chittagong">Chittagong</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="khulna">Khulna</option>
              <option value="sylhet">Sylhet</option>
              <option value="barisal">Barisal</option>
              <option value="rangpur">Rangpur</option>
              <option value="mymensingh">Mymensingh</option>
              <option value="madrasah">Madrasah</option>
              <option value="technical">Technical</option>
            </select>
            {errors.hscBoard && <p className="text-red-500 text-xs mt-1">{errors.hscBoard}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Passing Year *
            </label>
            <input
              type="number"
              value={formData.hscYear}
              onChange={(e) => handleInputChange("hscYear", e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.hscYear ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g., 2024"
            />
            {errors.hscYear && <p className="text-red-500 text-xs mt-1">{errors.hscYear}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              GPA *
            </label>
            <input
              type="number"
              step="0.01"
              value={formData.hscGPA}
              onChange={(e) => handleInputChange("hscGPA", e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.hscGPA ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g., 3.75"
            />
            {errors.hscGPA && <p className="text-red-500 text-xs mt-1">{errors.hscGPA}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Roll Number
            </label>
            <input
              type="text"
              value={formData.hscRoll}
              onChange={(e) => handleInputChange("hscRoll", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter roll number"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Registration Number
            </label>
            <input
              type="text"
              value={formData.hscRegistration}
              onChange={(e) => handleInputChange("hscRegistration", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter registration number"
            />
          </div>
        </div>
      </div>

      {/* Guardian Information */}
      <div className="bg-green-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">Guardian Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Guardian's Phone Number
            </label>
            <input
              type="tel"
              value={formData.guardianPhone}
              onChange={(e) => handleInputChange("guardianPhone", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter guardian's phone"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Relationship
            </label>
            <select
              value={formData.guardianRelation}
              onChange={(e) => handleInputChange("guardianRelation", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select relationship</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="guardian">Guardian</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Occupation
            </label>
            <input
              type="text"
              value={formData.guardianOccupation}
              onChange={(e) => handleInputChange("guardianOccupation", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter occupation"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Annual Income (BDT)
            </label>
            <input
              type="text"
              value={formData.guardianIncome}
              onChange={(e) => handleInputChange("guardianIncome", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter annual income"
            />
          </div>
        </div>
      </div>
    </div>
  )

  const renderDocumentUpload = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Upload className="h-12 w-12 text-blue-600 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-800">Upload Required Documents</h3>
        <p className="text-gray-600">Please upload all required documents in PDF, JPG, or PNG format</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {requiredDocuments.map((doc) => (
          <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">
                  {doc.name}
                  {doc.required && <span className="text-red-500 ml-1">*</span>}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
              </div>
              {uploadedFiles[doc.id] ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <Upload className="h-5 w-5 text-gray-400" />
              )}
            </div>
            
            <div className="relative">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => e.target.files?.[0] && handleFileUpload(doc.id, e.target.files[0])}
                className="hidden"
                id={`file-${doc.id}`}
              />
              <label
                htmlFor={`file-${doc.id}`}
                className={`block w-full py-2 px-4 text-center rounded-lg cursor-pointer transition-colors ${
                  uploadedFiles[doc.id]
                    ? 'bg-green-50 text-green-700 border border-green-300'
                    : 'bg-blue-50 text-blue-700 border border-blue-300 hover:bg-blue-100'
                }`}
              >
                {uploadedFiles[doc.id] ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {uploadedFiles[doc.id]?.name}
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Upload className="h-4 w-4 mr-2" />
                    Choose File
                  </span>
                )}
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-1" />
          <div>
            <h4 className="font-medium text-yellow-800">Important Notes</h4>
            <ul className="text-sm text-yellow-700 mt-2 space-y-1">
              <li>• All documents must be clear and readable</li>
              <li>• File size should not exceed 5MB per document</li>
              <li>• Original documents will be verified during admission</li>
              <li>• Keep photocopies of all submitted documents</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const renderReviewSubmit = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <Eye className="h-12 w-12 text-blue-600 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-gray-800">Review Your Application</h3>
        <p className="text-gray-600">Please review all information before submitting</p>
      </div>

      {/* Application Summary */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-semibold text-gray-800 mb-4">Personal Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-600">Name:</span>
            <span className="ml-2 text-gray-800">{formData.firstName} {formData.lastName}</span>
          </div>
          <div>
            <span className="font-medium text-gray-600">Date of Birth:</span>
            <span className="ml-2 text-gray-800">{formData.dateOfBirth}</span>
          </div>
          <div>
            <span className="font-medium text-gray-600">Phone:</span>
            <span className="ml-2 text-gray-800">{formData.phone}</span>
          </div>
          <div>
            <span className="font-medium text-gray-600">Email:</span>
            <span className="ml-2 text-gray-800">{formData.email}</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-semibold text-gray-800 mb-4">Academic Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-600">SSC GPA:</span>
            <span className="ml-2 text-gray-800">{formData.sscGPA}</span>
          </div>
          <div>
            <span className="font-medium text-gray-600">HSC GPA:</span>
            <span className="ml-2 text-gray-800">{formData.hscGPA}</span>
          </div>
          <div>
            <span className="font-medium text-gray-600">Combined GPA:</span>
            <span className="ml-2 text-gray-800">
              {(parseFloat(formData.sscGPA || "0") + parseFloat(formData.hscGPA || "0")).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-semibold text-gray-800 mb-4">Uploaded Documents</h4>
        <div className="space-y-2">
          {requiredDocuments.filter(doc => uploadedFiles[doc.id]).map(doc => (
            <div key={doc.id} className="flex items-center text-sm">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-gray-700">{doc.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Declaration */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-semibold text-blue-800 mb-4">Declaration</h4>
        <div className="space-y-4">
          <label className="flex items-start">
            <input
              type="checkbox"
              checked={formData.declaration}
              onChange={(e) => handleInputChange("declaration", e.target.checked)}
              className="mt-1 mr-3"
            />
            <span className="text-sm text-gray-700">
              I hereby declare that all information provided in this application form is true and correct to the best of my knowledge. I understand that any false information may lead to cancellation of my admission.
            </span>
          </label>
          {errors.declaration && <p className="text-red-500 text-xs">{errors.declaration}</p>}
          
          <label className="flex items-start">
            <input
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
              className="mt-1 mr-3"
            />
            <span className="text-sm text-gray-700">
              I have read and agree to the terms and conditions of the admission process.
            </span>
          </label>
          {errors.termsAccepted && <p className="text-red-500 text-xs">{errors.termsAccepted}</p>}
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting || !formData.declaration || !formData.termsAccepted}
          className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <Loader className="h-5 w-5 mr-2 animate-spin" />
              Submitting...
            </span>
          ) : (
            <span className="flex items-center">
              <Send className="h-5 w-5 mr-2" />
              Submit Application
            </span>
          )}
        </Button>
      </div>
    </div>
  )

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
                <Edit className="h-20 w-20 text-blue-600" />
              </div>
            </div>
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-800">
                Online Application
                <span className="block text-3xl md:text-4xl text-gray-600 mt-2">MBBS Admission Form</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Complete your application for MBBS admission in just a few simple steps
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="/admission/local/mbbs-info">
                <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                  <ArrowRight className="mr-2 h-6 w-6 rotate-180" />
                  Back to MBBS Info
                </Button>
              </Link>
              <Link href="/admission/local/eligibility">
                <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                  <CheckCircle className="mr-2 h-6 w-6" />
                  Check Eligibility
                </Button>
              </Link>
              <Link href="/admission/local/process">
                <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                  <Target className="mr-2 h-6 w-6" />
                  Admission Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700">
              <CardTitle className="flex items-center text-white text-xl">
                <Edit className="mr-3 h-6 w-6" />
                MBBS Admission Application Form
              </CardTitle>
              <CardDescription className="text-blue-100">
                Please fill in all required fields carefully
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {renderProgressBar()}
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {sections[currentSection - 1].title}
                  </h2>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">Step {currentSection} of {sections.length}</span>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      {React.createElement(sections[currentSection - 1].icon, { className: "h-4 w-4 text-blue-600" })}
                    </div>
                  </div>
                </div>
              </div>

              {currentSection === 1 && renderPersonalInfo()}
              {currentSection === 2 && renderAddressInfo()}
              {currentSection === 3 && renderAcademicInfo()}
              {currentSection === 4 && renderDocumentUpload()}
              {currentSection === 5 && renderReviewSubmit()}

              {/* Navigation Buttons */}
              {currentSection < 5 && (
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
                  <Button
                    onClick={nextSection}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
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
                Our admission counselors are available to assist you with the application process
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Admission Office
                </Button>
                <Button size="lg" variant="outline" className="border-white text-gray-700 hover:bg-white hover:text-blue-600">
                  <Mail className="mr-2 h-5 w-5 text-gray-700" />
                  Email Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
