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
  Star
} from "lucide-react"

export default function EligibilityPage() {
  const [gpaSSC, setGpaSSC] = useState("")
  const [gpaHSC, setGpaHSC] = useState("")
  const [hasBiology, setHasBiology] = useState(false)
  const [age, setAge] = useState("")
  const [citizenship, setCitizenship] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [isEligible, setIsEligible] = useState(false)

  const checkEligibility = () => {
    const sscGpa = parseFloat(gpaSSC)
    const hscGpa = parseFloat(gpaHSC)
    const studentAge = parseInt(age)
    
    const eligible = 
      sscGpa >= 4.0 && 
      hscGpa >= 3.5 && 
      (sscGpa + hscGpa) >= 8.0 && 
      hasBiology && 
      studentAge >= 17 && 
      studentAge <= 22 && 
      citizenship === "bangladeshi"
    
    setIsEligible(eligible)
    setShowResult(true)
  }

  const resetCalculator = () => {
    setGpaSSC("")
    setGpaHSC("")
    setHasBiology(false)
    setAge("")
    setCitizenship("")
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
                <CheckCircle className="h-20 w-20 text-green-600" />
              </div>
            </div>
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-800">
                Eligibility Checker
                <span className="block text-3xl md:text-4xl text-gray-600 mt-2">MBBS Admission Requirements</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Find out if you meet the criteria for admission to our prestigious MBBS program
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="/admission/local/mbbs-info">
                <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                  <ArrowRight className="mr-2 h-6 w-6 rotate-180" />
                  Back to MBBS Info
                </Button>
              </Link>
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
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
              <h3 className="font-bold text-xl mb-2 text-gray-800">SSC GPA 4.0+</h3>
              <p className="text-gray-600">Minimum required</p>
              <div className="mt-4 text-blue-600 font-semibold">Essential</div>
            </CardContent>
          </Card>
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-full -mr-10 -mt-10"></div>
              <BookOpen className="h-14 w-14 text-green-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">HSC GPA 3.5+</h3>
              <p className="text-gray-600">Minimum required</p>
              <div className="mt-4 text-green-600 font-semibold">Essential</div>
            </CardContent>
          </Card>
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full -mr-10 -mt-10"></div>
              <Calculator className="h-14 w-14 text-purple-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">Total GPA 8.0+</h3>
              <p className="text-gray-600">SSC + HSC combined</p>
              <div className="mt-4 text-purple-600 font-semibold">Required</div>
            </CardContent>
          </Card>
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-full -mr-10 -mt-10"></div>
              <Users className="h-14 w-14 text-orange-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">Age 17-22</h3>
              <p className="text-gray-600">Age limit as of current year</p>
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
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <Calculator className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Check Your Eligibility
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Use our interactive calculator to instantly determine if you meet the admission criteria
              </p>
            </div>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700">
                <CardTitle className="flex items-center text-white text-xl">
                  <Calculator className="mr-3 h-6 w-6" />
                  MBBS Eligibility Calculator
                </CardTitle>
                <CardDescription className="text-green-100">
                  Fill in your academic details to check eligibility
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* SSC GPA */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      SSC/Dakhil/O-level GPA
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="5"
                      value={gpaSSC}
                      onChange={(e) => setGpaSSC(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your SSC GPA (e.g., 4.50)"
                    />
                    <p className="text-xs text-gray-500 mt-1">Minimum required: 4.0</p>
                  </div>

                  {/* HSC GPA */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      HSC/Alim/A-level GPA
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="5"
                      value={gpaHSC}
                      onChange={(e) => setGpaHSC(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your HSC GPA (e.g., 3.75)"
                    />
                    <p className="text-xs text-gray-500 mt-1">Minimum required: 3.5</p>
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your age"
                    />
                    <p className="text-xs text-gray-500 mt-1">Age limit: 17-22 years</p>
                  </div>

                  {/* Citizenship */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Citizenship
                    </label>
                    <select
                      value={citizenship}
                      onChange={(e) => setCitizenship(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select citizenship</option>
                      <option value="bangladeshi">Bangladeshi</option>
                      <option value="other">Other</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Only Bangladeshi citizens eligible for local seats</p>
                  </div>
                </div>

                {/* Biology Requirement */}
                <div className="mt-6">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasBiology}
                      onChange={(e) => setHasBiology(e.target.checked)}
                      className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      I studied Biology in both SSC and HSC
                    </span>
                  </label>
                  <p className="text-xs text-gray-500 mt-1 ml-8">Biology is mandatory in both levels</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    onClick={checkEligibility}
                    disabled={!gpaSSC || !gpaHSC || !age || !citizenship}
                    className="bg-green-600 hover:bg-green-700 px-8 py-3"
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
                            ? 'You meet all the requirements for MBBS admission. Proceed with the application process.'
                            : 'You do not meet all the requirements. Please review the criteria below.'
                          }
                        </p>
                      </div>
                    </div>

                    {/* Detailed Breakdown */}
                    <div className="mt-6 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">SSC GPA:</span>
                        <span className={`font-semibold ${parseFloat(gpaSSC) >= 4.0 ? 'text-green-600' : 'text-red-600'}`}>
                          {gpaSSC} {parseFloat(gpaSSC) >= 4.0 ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">HSC GPA:</span>
                        <span className={`font-semibold ${parseFloat(gpaHSC) >= 3.5 ? 'text-green-600' : 'text-red-600'}`}>
                          {gpaHSC} {parseFloat(gpaHSC) >= 3.5 ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Combined GPA:</span>
                        <span className={`font-semibold ${(parseFloat(gpaSSC) + parseFloat(gpaHSC)) >= 8.0 ? 'text-green-600' : 'text-red-600'}`}>
                          {(parseFloat(gpaSSC) + parseFloat(gpaHSC)).toFixed(2)} {(parseFloat(gpaSSC) + parseFloat(gpaHSC)) >= 8.0 ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Age:</span>
                        <span className={`font-semibold ${parseInt(age) >= 17 && parseInt(age) <= 22 ? 'text-green-600' : 'text-red-600'}`}>
                          {age} years {parseInt(age) >= 17 && parseInt(age) <= 22 ? '✓' : '✗'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Citizenship:</span>
                        <span className={`font-semibold ${citizenship === 'bangladeshi' ? 'text-green-600' : 'text-red-600'}`}>
                          {citizenship === 'bangladeshi' ? 'Bangladeshi ✓' : 'Other ✗'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Biology in Both Levels:</span>
                        <span className={`font-semibold ${hasBiology ? 'text-green-600' : 'text-red-600'}`}>
                          {hasBiology ? 'Yes ✓' : 'No ✗'}
                        </span>
                      </div>
                    </div>

                    {isEligible && (
                      <div className="mt-6 flex flex-wrap gap-4">
                        <Link href="/admission/local/mbbs-info">
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
                Detailed Eligibility Criteria
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Complete breakdown of all requirements for MBBS admission
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
                        <span className="font-semibold text-gray-800">SSC/Dakhil/O-level</span>
                        <p className="text-gray-600 text-sm">Minimum GPA 4.0 out of 5.0</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">HSC/Alim/A-level</span>
                        <p className="text-gray-600 text-sm">Minimum GPA 3.5 out of 5.0</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Combined GPA</span>
                        <p className="text-gray-600 text-sm">Minimum 8.0 (SSC + HSC)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Biology Subject</span>
                        <p className="text-gray-600 text-sm">Must have Biology in both SSC and HSC</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Physics & Chemistry</span>
                        <p className="text-gray-600 text-sm">Must have Physics and Chemistry in HSC</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Requirements */}
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <Users className="mr-3 h-6 w-6" />
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
                        <span className="font-semibold text-gray-800">Citizenship</span>
                        <p className="text-gray-600 text-sm">Must be Bangladeshi citizen</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Age Limit</span>
                        <p className="text-gray-600 text-sm">17-22 years as of current year</p>
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
                        <span className="font-semibold text-gray-800">Character Certificate</span>
                        <p className="text-gray-600 text-sm">Good moral character required</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-full p-1 mr-3 mt-1">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">No Criminal Record</span>
                        <p className="text-gray-600 text-sm">Clean legal record mandatory</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Special Quotas */}
            <div className="mt-12">
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <Star className="mr-3 h-6 w-6" />
                    Special Quota Eligibility
                  </CardTitle>
                </div>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-800 mb-2">Freedom Fighter</h4>
                      <p className="text-sm text-gray-600 mb-2">Children/grandchildren of freedom fighters</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• 5% seats reserved</li>
                        <li>• Certificate required</li>
                        <li>• Minimum GPA 7.0 combined</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Tribal</h4>
                      <p className="text-sm text-gray-600 mb-2">Students from tribal communities</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• 1% seats reserved</li>
                        <li>• Community certificate</li>
                        <li>• Minimum GPA 7.0 combined</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Disabled</h4>
                      <p className="text-sm text-gray-600 mb-2">Physically challenged students</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• 1% seats reserved</li>
                        <li>• Medical certificate</li>
                        <li>• Minimum GPA 7.0 combined</li>
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
              <h3 className="text-2xl font-bold mb-4">Need Help with Eligibility?</h3>
              <p className="text-blue-100 mb-6">
                Our admission counselors are here to help you understand the requirements and guide you through the process
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
