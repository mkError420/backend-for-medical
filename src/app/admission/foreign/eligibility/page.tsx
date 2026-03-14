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
  Calculator,
  AlertCircle,
  Star,
  Globe,
  Plane,
  CreditCard
} from "lucide-react"

export default function ForeignEligibilityPage() {
  const [gpaOLevel, setGpaOLevel] = useState("")
  const [gpaALevel, setGpaALevel] = useState("")
  const [hasBiology, setHasBiology] = useState(false)
  const [hasChemistry, setHasChemistry] = useState(false)
  const [hasPhysics, setHasPhysics] = useState(false)
  const [age, setAge] = useState("")
  const [nationality, setNationality] = useState("")
  const [englishProficiency, setEnglishProficiency] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [isEligible, setIsEligible] = useState(false)

  const checkEligibility = () => {
    const oLevelGpa = parseFloat(gpaOLevel)
    const aLevelGpa = parseFloat(gpaALevel)
    const studentAge = parseInt(age)
    
    const eligible = 
      oLevelGpa >= 3.5 && 
      aLevelGpa >= 3.0 && 
      (oLevelGpa + aLevelGpa) >= 6.5 && 
      hasBiology && 
      hasChemistry &&
      hasPhysics &&
      studentAge >= 17 && 
      studentAge <= 25 && 
      nationality !== "bangladeshi" &&
      (englishProficiency === "ielts" || englishProficiency === "toefl" || englishProficiency === "native")
    
    setIsEligible(eligible)
    setShowResult(true)
  }

  const resetCalculator = () => {
    setGpaOLevel("")
    setGpaALevel("")
    setHasBiology(false)
    setHasChemistry(false)
    setHasPhysics(false)
    setAge("")
    setNationality("")
    setEnglishProficiency("")
    setShowResult(false)
    setIsEligible(false)
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
                <span className="block text-3xl md:text-4xl text-gray-600 mt-2">Eligibility Checker</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Find out if you meet the criteria for international student admission to our MBBS program
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="/admission/foreign/mbbs-info">
                <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                  <ArrowRight className="mr-2 h-6 w-6 rotate-180" />
                  Back to MBBS Info
                </Button>
              </Link>
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                <Calculator className="mr-2 h-6 w-6" />
                Check Eligibility Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Eligibility Overview */}
      <div className="container mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-10 -mt-10"></div>
              <GraduationCap className="h-14 w-14 text-blue-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">O-Level GPA 3.5+</h3>
              <p className="text-gray-600">Minimum required</p>
              <div className="mt-4 text-blue-600 font-semibold">Essential</div>
            </CardContent>
          </Card>
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-full -mr-10 -mt-10"></div>
              <BookOpen className="h-14 w-14 text-green-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">A-Level GPA 3.0+</h3>
              <p className="text-gray-600">Minimum required</p>
              <div className="mt-4 text-green-600 font-semibold">Essential</div>
            </CardContent>
          </Card>
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full -mr-10 -mt-10"></div>
              <Calculator className="h-14 w-14 text-purple-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">Total GPA 6.5+</h3>
              <p className="text-gray-600">O + A Level combined</p>
              <div className="mt-4 text-purple-600 font-semibold">Required</div>
            </CardContent>
          </Card>
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-full -mr-10 -mt-10"></div>
              <Plane className="h-14 w-14 text-orange-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">Age 17-25</h3>
              <p className="text-gray-600">Age limit for foreign students</p>
              <div className="mt-4 text-orange-600 font-semibold">Required</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Eligibility Calculator */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                <Calculator className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Check Your Eligibility
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Use our interactive calculator to instantly determine if you meet the international student admission criteria
              </p>
            </div>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700">
                <CardTitle className="flex items-center text-white text-xl">
                  <Calculator className="mr-3 h-6 w-6" />
                  Foreign Student MBBS Eligibility Calculator
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Fill in your academic details to check eligibility for international admission
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* O-Level GPA */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      O-Level/10th Grade GPA
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="5"
                      value={gpaOLevel}
                      onChange={(e) => setGpaOLevel(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your O-Level GPA (e.g., 4.00)"
                    />
                    <p className="text-xs text-gray-500 mt-1">Minimum required: 3.5</p>
                  </div>

                  {/* A-Level GPA */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      A-Level/12th Grade GPA
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="5"
                      value={gpaALevel}
                      onChange={(e) => setGpaALevel(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your A-Level GPA (e.g., 3.50)"
                    />
                    <p className="text-xs text-gray-500 mt-1">Minimum required: 3.0</p>
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age (as of current year)
                    </label>
                    <input
                      type="number"
                      min="15"
                      max="30"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your age"
                    />
                    <p className="text-xs text-gray-500 mt-1">Age limit: 17-25 years for foreign students</p>
                  </div>

                  {/* Nationality */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nationality
                    </label>
                    <select
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select nationality</option>
                      <option value="bangladeshi">Bangladeshi</option>
                      <option value="indian">Indian</option>
                      <option value="pakistan">Pakistani</option>
                      <option value="nepalese">Nepalese</option>
                      <option value="bhutanese">Bhutanese</option>
                      <option value="maldivian">Maldivian</option>
                      <option value="srilankan">Sri Lankan</option>
                      <option value="other">Other</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Non-Bangladeshi citizens eligible for foreign seats</p>
                  </div>

                  {/* English Proficiency */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      English Proficiency
                    </label>
                    <select
                      value={englishProficiency}
                      onChange={(e) => setEnglishProficiency(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select proficiency level</option>
                      <option value="native">Native English Speaker</option>
                      <option value="ielts">IELTS (Minimum 6.0)</option>
                      <option value="toefl">TOEFL (Minimum 80)</option>
                      <option value="other">Other English Test</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">English proficiency certificate required for non-native speakers</p>
                  </div>
                </div>

                {/* Subject Requirements */}
                <div className="mt-6 space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasBiology}
                      onChange={(e) => setHasBiology(e.target.checked)}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      I studied Biology in O-Level and A-Level
                    </span>
                  </label>
                  <p className="text-xs text-gray-500 ml-8">Biology is mandatory in both levels</p>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasChemistry}
                      onChange={(e) => setHasChemistry(e.target.checked)}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      I studied Chemistry in O-Level and A-Level
                    </span>
                  </label>
                  <p className="text-xs text-gray-500 ml-8">Chemistry is mandatory in both levels</p>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasPhysics}
                      onChange={(e) => setHasPhysics(e.target.checked)}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      I studied Physics in O-Level and A-Level
                    </span>
                  </label>
                  <p className="text-xs text-gray-500 ml-8">Physics is mandatory in both levels</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    onClick={checkEligibility}
                    disabled={!gpaOLevel || !gpaALevel || !age || !nationality || !englishProficiency}
                    className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Check Eligibility
                  </Button>
                  <Button
                    onClick={resetCalculator}
                    variant="outline"
                    className="border-gray-600 text-gray-600 hover:bg-gray-50 px-8 py-3"
                  >
                    Reset
                  </Button>
                </div>

                {/* Result Display */}
                {showResult && (
                  <div className={`mt-8 p-6 rounded-lg border-2 ${isEligible ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                    <div className="flex items-center">
                      {isEligible ? (
                        <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                      ) : (
                        <AlertCircle className="h-8 w-8 text-red-600 mr-3" />
                      )}
                      <div>
                        <h3 className={`text-xl font-bold ${isEligible ? 'text-green-800' : 'text-red-800'}`}>
                          {isEligible ? 'Congratulations! You are Eligible' : 'Not Eligible'}
                        </h3>
                        <p className={`text-sm mt-1 ${isEligible ? 'text-green-600' : 'text-red-600'}`}>
                          {isEligible 
                            ? 'You meet all the requirements for foreign student MBBS admission. Proceed with the application process.'
                            : 'You do not meet all the requirements. Please review the criteria below.'
                          }
                        </p>
                      </div>
                    </div>

                    {/* Detailed Breakdown */}
                    <div className="mt-6 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">O-Level GPA:</span>
                        <span className={`font-semibold ${parseFloat(gpaOLevel) >= 3.5 ? 'text-green-600' : 'text-red-600'}`}>
                          {gpaOLevel} {parseFloat(gpaOLevel) >= 3.5 ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">A-Level GPA:</span>
                        <span className={`font-semibold ${parseFloat(gpaALevel) >= 3.0 ? 'text-green-600' : 'text-red-600'}`}>
                          {gpaALevel} {parseFloat(gpaALevel) >= 3.0 ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Combined GPA:</span>
                        <span className={`font-semibold ${(parseFloat(gpaOLevel) + parseFloat(gpaALevel)) >= 6.5 ? 'text-green-600' : 'text-red-600'}`}>
                          {(parseFloat(gpaOLevel) + parseFloat(gpaALevel)).toFixed(2)} {(parseFloat(gpaOLevel) + parseFloat(gpaALevel)) >= 6.5 ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Age:</span>
                        <span className={`font-semibold ${parseInt(age) >= 17 && parseInt(age) <= 25 ? 'text-green-600' : 'text-red-600'}`}>
                          {age} years {parseInt(age) >= 17 && parseInt(age) <= 25 ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Nationality:</span>
                        <span className={`font-semibold ${nationality !== 'bangladeshi' ? 'text-green-600' : 'text-red-600'}`}>
                          {nationality === 'bangladeshi' ? 'Bangladeshi ✗' : nationality === 'other' ? 'Other ✓' : nationality.charAt(0).toUpperCase() + nationality.slice(1) + ' ✓'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">English Proficiency:</span>
                        <span className={`font-semibold ${englishProficiency === 'ielts' || englishProficiency === 'toefl' || englishProficiency === 'native' ? 'text-green-600' : 'text-red-600'}`}>
                          {englishProficiency === 'native' ? 'Native ✓' : englishProficiency === 'ielts' ? 'IELTS ✓' : englishProficiency === 'toefl' ? 'TOEFL ✓' : englishProficiency === 'other' ? 'Other Test ✓' : 'Not Selected ✗'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Biology:</span>
                        <span className={`font-semibold ${hasBiology ? 'text-green-600' : 'text-red-600'}`}>
                          {hasBiology ? 'Studied ✓' : 'Not Studied ✗'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Chemistry:</span>
                        <span className={`font-semibold ${hasChemistry ? 'text-green-600' : 'text-red-600'}`}>
                          {hasChemistry ? 'Studied ✓' : 'Not Studied ✗'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Physics:</span>
                        <span className={`font-semibold ${hasPhysics ? 'text-green-600' : 'text-red-600'}`}>
                          {hasPhysics ? 'Studied ✓' : 'Not Studied ✗'}
                        </span>
                      </div>
                    </div>

                    {isEligible && (
                      <div className="mt-6 flex flex-wrap gap-4">
                        <Link href="/admission/foreign/mbbs-info">
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            <ArrowRight className="mr-2 h-4 w-4" />
                            Proceed to Application
                          </Button>
                        </Link>
                        <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                          <Download className="mr-2 h-4 w-4" />
                          Download Eligibility Certificate
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Detailed Requirements */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                <Info className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Foreign Student Eligibility Criteria
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Complete breakdown of all requirements for international student MBBS admission
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Academic Requirements */}
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <GraduationCap className="mr-3 h-6 w-6" />
                    Academic Requirements
                  </CardTitle>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">O-Level/10th Grade</span>
                        <p className="text-gray-600 text-sm">Minimum GPA 3.5 out of 5.0 or equivalent</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">A-Level/12th Grade</span>
                        <p className="text-gray-600 text-sm">Minimum GPA 3.0 out of 5.0 or equivalent</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Combined GPA</span>
                        <p className="text-gray-600 text-sm">Minimum 6.5 (O-Level + A-Level)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Science Subjects</span>
                        <p className="text-gray-600 text-sm">Biology, Chemistry, and Physics mandatory</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Equivalence Certificate</span>
                        <p className="text-gray-600 text-sm">Required from concerned authority</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Requirements */}
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <Globe className="mr-3 h-6 w-6" />
                    Personal Requirements
                  </CardTitle>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Nationality</span>
                        <p className="text-gray-600 text-sm">Non-Bangladeshi citizens only</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Age Limit</span>
                        <p className="text-gray-600 text-sm">17-25 years as of current year</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">English Proficiency</span>
                        <p className="text-gray-600 text-sm">IELTS 6.0+ or TOEFL 80+ required</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Medical Fitness</span>
                        <p className="text-gray-600 text-sm">Medically fit as per BMDC standards</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Valid Passport</span>
                        <p className="text-gray-600 text-sm">Minimum 6 months validity required</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Special Requirements */}
            <div className="mt-12">
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <Star className="mr-3 h-6 w-6" />
                    Additional Requirements for Foreign Students
                  </CardTitle>
                </div>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-800 mb-2">Student Visa</h4>
                      <p className="text-sm text-gray-600 mb-2">Valid student visa required</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Visa application assistance provided</li>
                        <li>• Processing time: 4-6 weeks</li>
                        <li>• Required documents: passport, admission letter</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Medical Insurance</h4>
                      <p className="text-sm text-gray-600 mb-2">Comprehensive health insurance mandatory</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Annual coverage required</li>
                        <li>• Local insurance partners available</li>
                        <li>• Coverage: $50,000 minimum</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Financial Support</h4>
                      <p className="text-sm text-gray-600 mb-2">Proof of financial capability required</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Bank statements (6 months)</li>
                        <li>• Sponsor letter (if applicable)</li>
                        <li>• Tuition fee payment plan available</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Help with Foreign Student Eligibility?</h3>
              <p className="text-blue-100 mb-6">
                Our international student counselors are here to help you understand the requirements and guide you through the admission process
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Foreign Student Office
                </Button>
                <Button size="lg" variant="outline" className="border-white text-gray-700 hover:bg-white hover:text-blue-600">
                  <Mail className="mr-2 h-5 w-5 text-gray-700" />
                  Email International Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
