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
  Calculator,
  Receipt,
  PiggyBank,
  CreditCardIcon,
  Banknote,
  TrendingUp,
  HelpCircle,
  FileSpreadsheet,
  Printer,
  Share2,
  Smartphone,
  Globe,
  Plane
} from "lucide-react"

export default function ForeignFeeStructurePage() {
  const [selectedPlan, setSelectedPlan] = useState("")
  const [showBreakdown, setShowBreakdown] = useState(false)
  const [calculationMethod, setCalculationMethod] = useState("annual")

  const feeStructure = {
    firstYear: {
      admission: 2000,
      tuition: 10000,
      library: 500,
      laboratory: 1000,
      development: 1500,
      medical: 300,
      sports: 200,
      idCard: 100,
      visaProcessing: 500,
      insurance: 400,
      total: 16500
    },
    subsequentYears: {
      tuition: 10000,
      library: 500,
      laboratory: 1000,
      development: 500,
      medical: 300,
      sports: 200,
      insurance: 400,
      total: 12900
    }
  }

  const paymentPlans = [
    {
      id: "annual",
      name: "Annual Payment",
      description: "Pay full year fees at once",
      discount: "5% discount",
      frequency: "Once per year",
      icon: CreditCardIcon,
      color: "blue"
    },
    {
      id: "semester",
      name: "Semester Payment",
      description: "Pay in two installments per year",
      discount: "2% discount",
      frequency: "Twice per year",
      icon: Receipt,
      color: "green"
    },
    {
      id: "monthly",
      name: "Monthly Installment",
      description: "Pay in 12 monthly installments",
      discount: "No discount",
      frequency: "Monthly",
      icon: Calendar,
      color: "purple"
    }
  ]

  const additionalFees = [
    { name: "Hostel Accommodation", amount: "$2,400/year", description: "Shared room with meals included" },
    { name: "Airport Pickup", amount: "$100 (one-time)", description: "From Shahjalal Airport to campus" },
    { name: "Lab Coat & Equipment", amount: "$200 (one-time)", description: "Required for practical sessions" },
    { name: "Study Materials", amount: "$500/year", description: "Books and reference materials" },
    { name: "Examination Fees", amount: "$300/year", description: "Internal and external exams" },
    { name: "Internship Fees", amount: "$1,000", description: "Final year internship" },
    { name: "Medical Insurance Upgrade", amount: "$600/year", description: "Comprehensive coverage option" }
  ]

  const scholarshipCategories = [
    {
      name: "Academic Excellence",
      criteria: "A-Level GPA 4.0+",
      benefit: "20% tuition waiver",
      students: "Top 5 international students"
    },
    {
      name: "Regional Scholarship",
      criteria: "SAARC countries",
      benefit: "15% tuition waiver",
      students: "Students from SAARC nations"
    },
    {
      name: "Early Bird Discount",
      criteria: "Application before July 31",
      benefit: "10% tuition waiver",
      students: "First 50 applicants"
    },
    {
      name: "Women in Medicine",
      criteria: "Female students with A-Level 3.5+",
      benefit: "10% tuition waiver",
      students: "Top 15 female students"
    }
  ]

  const calculateTotalCost = () => {
    const firstYear = feeStructure.firstYear.total
    const subsequentYears = feeStructure.subsequentYears.total
    const total5Years = firstYear + (subsequentYears * 4)
    
    let discount = 0
    if (selectedPlan === "annual") discount = 0.05
    else if (selectedPlan === "semester") discount = 0.02
    
    const discountedTotal = total5Years * (1 - discount)
    
    return {
      original: total5Years,
      discounted: discountedTotal,
      savings: total5Years - discountedTotal
    }
  }

  const handleDownloadFeeStructure = () => {
    // Create fee structure HTML content for PDF
    const feeContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Foreign Student MBBS Fee Structure - 2025-2026</title>
        <style>
            body { 
                font-family: Arial, sans-serif; 
                line-height: 1.6; 
                margin: 40px; 
                color: #333;
            }
            h1 { 
                color: #1f2937; 
                text-align: center; 
                border-bottom: 3px solid #3b82f6; 
                padding-bottom: 10px; 
            }
            h2 { 
                color: #1f2937; 
                border-left: 4px solid #3b82f6; 
                padding-left: 10px; 
                margin-top: 30px; 
            }
            .fee-item { 
                display: flex; 
                justify-content: space-between; 
                padding: 5px 0; 
                border-bottom: 1px solid #e5e7eb; 
            }
            .total { 
                font-weight: bold; 
                font-size: 1.1em; 
                color: #3b82f6; 
                border-top: 2px solid #3b82f6; 
                padding-top: 10px; 
            }
            .summary-box { 
                background: #eff6ff; 
                border: 1px solid #3b82f6; 
                padding: 15px; 
                margin: 20px 0; 
                border-radius: 5px; 
            }
            .contact { 
                background: #f8fafc; 
                border: 1px solid #e5e7eb; 
                padding: 15px; 
                margin: 20px 0; 
                border-radius: 5px; 
            }
            .footer { 
                text-align: center; 
                margin-top: 40px; 
                font-size: 0.9em; 
                color: #6b7280; 
            }
            @media print {
                body { margin: 20px; }
                .no-print { display: none; }
            }
        </style>
    </head>
    <body>
        <h1>FOREIGN STUDENT MBBS PROGRAM FEE STRUCTURE</h1>
        <h2>Academic Year 2025-2026</h2>
        
        <h2>First Year Fees</h2>
        <div class="fee-item"><span>Admission Fee</span><span>$${feeStructure.firstYear.admission.toLocaleString()}</span></div>
        <div class="fee-item"><span>Tuition Fee</span><span>$${feeStructure.firstYear.tuition.toLocaleString()}</span></div>
        <div class="fee-item"><span>Library Fee</span><span>$${feeStructure.firstYear.library.toLocaleString()}</span></div>
        <div class="fee-item"><span>Laboratory Fee</span><span>$${feeStructure.firstYear.laboratory.toLocaleString()}</span></div>
        <div class="fee-item"><span>Development Fee</span><span>$${feeStructure.firstYear.development.toLocaleString()}</span></div>
        <div class="fee-item"><span>Medical Fee</span><span>$${feeStructure.firstYear.medical.toLocaleString()}</span></div>
        <div class="fee-item"><span>Sports Fee</span><span>$${feeStructure.firstYear.sports.toLocaleString()}</span></div>
        <div class="fee-item"><span>ID Card Fee</span><span>$${feeStructure.firstYear.idCard.toLocaleString()}</span></div>
        <div class="fee-item"><span>Visa Processing Fee</span><span>$${feeStructure.firstYear.visaProcessing.toLocaleString()}</span></div>
        <div class="fee-item"><span>Insurance Fee</span><span>$${feeStructure.firstYear.insurance.toLocaleString()}</span></div>
        <div class="fee-item total"><span>Total First Year</span><span>$${feeStructure.firstYear.total.toLocaleString()}</span></div>
        
        <h2>Subsequent Years (Years 2-5)</h2>
        <div class="fee-item"><span>Tuition Fee</span><span>$${feeStructure.subsequentYears.tuition.toLocaleString()}</span></div>
        <div class="fee-item"><span>Library Fee</span><span>$${feeStructure.subsequentYears.library.toLocaleString()}</span></div>
        <div class="fee-item"><span>Laboratory Fee</span><span>$${feeStructure.subsequentYears.laboratory.toLocaleString()}</span></div>
        <div class="fee-item"><span>Development Fee</span><span>$${feeStructure.subsequentYears.development.toLocaleString()}</span></div>
        <div class="fee-item"><span>Medical Fee</span><span>$${feeStructure.subsequentYears.medical.toLocaleString()}</span></div>
        <div class="fee-item"><span>Sports Fee</span><span>$${feeStructure.subsequentYears.sports.toLocaleString()}</span></div>
        <div class="fee-item"><span>Insurance Fee</span><span>$${feeStructure.subsequentYears.insurance.toLocaleString()}</span></div>
        <div class="fee-item total"><span>Total Per Year</span><span>$${feeStructure.subsequentYears.total.toLocaleString()}</span></div>
        
        <div class="summary-box">
            <h2>Program Summary</h2>
            <div class="fee-item"><span>First Year</span><span>$${feeStructure.firstYear.total.toLocaleString()}</span></div>
            <div class="fee-item"><span>Years 2-5 (4 years)</span><span>$${(feeStructure.subsequentYears.total * 4).toLocaleString()}</span></div>
            <div class="fee-item total"><span>Complete Program (5 Years)</span><span>$${totalCost.original.toLocaleString()}</span></div>
        </div>
        
        <h2>Payment Plans & Discounts</h2>
        <div class="fee-item"><span>Annual Payment</span><span>5% discount (Save $${totalCost.savings.toLocaleString()})</span></div>
        <div class="fee-item"><span>Semester Payment</span><span>2% discount</span></div>
        <div class="fee-item"><span>Monthly Installment</span><span>No discount</span></div>
        
        <h2>Additional Fees (Optional)</h2>
        ${additionalFees.map(fee => `<div class="fee-item"><span>${fee.name}</span><span>${fee.amount}</span></div>`).join('')}
        
        <h2>Scholarships Available</h2>
        ${scholarshipCategories.map(scholarship => 
          `<div class="fee-item"><span>${scholarship.name}</span><span>${scholarship.benefit}</span></div>`
        ).join('')}
        
        <div class="contact">
            <h2>Contact Information</h2>
            <div class="fee-item"><span>Foreign Student Office</span><span>+880-2-XXXXXXX</span></div>
            <div class="fee-item"><span>Email</span><span>foreign@medicalcollege.edu.bd</span></div>
            <div class="fee-item"><span>Website</span><span>www.medicalcollege.edu.bd</span></div>
        </div>
        
        <div class="footer">
            <p>Generated on: ${new Date().toLocaleDateString()}</p>
            <p>Medical College Bangladesh - Foreign Student Admission Portal</p>
        </div>
    </body>
    </html>
    `.trim()

    // Create a new window and print
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(feeContent)
      printWindow.document.close()
      
      // Wait for content to load, then trigger print
      printWindow.onload = () => {
        printWindow.print()
        printWindow.close()
      }
    }
  }

  const totalCost = calculateTotalCost()

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
                <span className="block text-3xl md:text-4xl text-gray-600 mt-2">Fee Structure</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive breakdown of international student MBBS program fees with flexible payment options
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="/admission/foreign/mbbs-info">
                <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
                  <ArrowRight className="mr-2 h-6 w-6 rotate-180" />
                  Back to MBBS Info
                </Button>
              </Link>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200" onClick={handleDownloadFeeStructure}>
                <Download className="mr-2 h-6 w-6" />
                Download Fee Structure
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="container mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-full -mr-10 -mt-10"></div>
              <DollarSign className="h-14 w-14 text-green-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">First Year</h3>
              <p className="text-3xl font-bold text-green-600">${feeStructure.firstYear.total.toLocaleString()}</p>
              <p className="text-gray-600 text-sm mt-2">Including visa & insurance</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-10 -mt-10"></div>
              <TrendingUp className="h-14 w-14 text-blue-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">Per Year</h3>
              <p className="text-3xl font-bold text-blue-600">${feeStructure.subsequentYears.total.toLocaleString()}</p>
              <p className="text-gray-600 text-sm mt-2">Years 2-5</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full -mr-10 -mt-10"></div>
              <Calculator className="h-14 w-14 text-purple-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">Total 5 Years</h3>
              <p className="text-3xl font-bold text-purple-600">${totalCost.original.toLocaleString()}</p>
              <p className="text-gray-600 text-sm mt-2">Complete program</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-full -mr-10 -mt-10"></div>
              <PiggyBank className="h-14 w-14 text-orange-600 mx-auto mb-4 relative z-10" />
              <h3 className="font-bold text-xl mb-2 text-gray-800">Savings</h3>
              <p className="text-3xl font-bold text-orange-600">${totalCost.savings.toLocaleString()}</p>
              <p className="text-gray-600 text-sm mt-2">With annual plan</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Detailed Fee Breakdown */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                <FileSpreadsheet className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Foreign Student Fee Breakdown
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Complete transparency in fee structure with no hidden charges for international students
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* First Year Fees */}
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <Plane className="mr-3 h-6 w-6" />
                    First Year Fees
                  </CardTitle>
                  <CardDescription className="text-green-100 mt-2">
                    Academic Year 2025-2026
                  </CardDescription>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Admission Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.firstYear.admission.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Tuition Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.firstYear.tuition.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Library Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.firstYear.library.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Laboratory Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.firstYear.laboratory.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Development Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.firstYear.development.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Medical Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.firstYear.medical.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Sports Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.firstYear.sports.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">ID Card Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.firstYear.idCard.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Visa Processing</span>
                      <span className="font-semibold text-gray-800">${feeStructure.firstYear.visaProcessing.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Insurance Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.firstYear.insurance.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t-2 border-gray-200">
                      <span className="text-lg font-bold text-gray-800">Total First Year</span>
                      <span className="text-xl font-bold text-green-600">${feeStructure.firstYear.total.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Subsequent Years Fees */}
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <BookOpen className="mr-3 h-6 w-6" />
                    Subsequent Years Fees
                  </CardTitle>
                  <CardDescription className="text-blue-100 mt-2">
                    Years 2, 3, 4, and 5 (per year)
                  </CardDescription>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Tuition Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.subsequentYears.tuition.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Library Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.subsequentYears.library.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Laboratory Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.subsequentYears.laboratory.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Development Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.subsequentYears.development.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Medical Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.subsequentYears.medical.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Sports Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.subsequentYears.sports.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Insurance Fee</span>
                      <span className="font-semibold text-gray-800">${feeStructure.subsequentYears.insurance.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t-2 border-gray-200">
                      <span className="text-lg font-bold text-gray-800">Total Per Year</span>
                      <span className="text-xl font-bold text-blue-600">${feeStructure.subsequentYears.total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-gray-600">4 Years Total</span>
                      <span className="font-semibold text-gray-800">${(feeStructure.subsequentYears.total * 4).toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Plans */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
                <CreditCard className="h-10 w-10 text-purple-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Flexible Payment Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the payment plan that best suits your financial situation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {paymentPlans.map((plan) => (
                <Card key={plan.id} className={`shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden cursor-pointer ${selectedPlan === plan.id ? 'ring-2 ring-purple-500 transform scale-105' : ''}`} onClick={() => setSelectedPlan(plan.id)}>
                  <div className={`bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-600 p-6 text-center`}>
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white text-xl font-bold">{plan.name}</h3>
                    <p className={`text-${plan.color}-100 text-sm mt-2`}>{plan.description}</p>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-gray-800">{plan.discount}</div>
                      <div className="text-sm text-gray-600">Special discount</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{plan.frequency}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">No hidden charges</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">International payment accepted</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                      Select Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Cost Calculator */}
            {selectedPlan && (
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden mt-8">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6">
                  <CardTitle className="flex items-center text-white text-xl">
                    <Calculator className="mr-3 h-6 w-6" />
                    Cost Calculator
                  </CardTitle>
                </div>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-2">Original Total Cost</div>
                      <div className="text-2xl font-bold text-gray-800">${totalCost.original.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-2">Discount Applied</div>
                      <div className="text-2xl font-bold text-green-600">-${totalCost.savings.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-2">Final Cost</div>
                      <div className="text-2xl font-bold text-purple-600">${totalCost.discounted.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-purple-700 text-center">
                      You save ${totalCost.savings.toLocaleString()} with the {paymentPlans.find(p => p.id === selectedPlan)?.name} plan!
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Additional Fees */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6">
                <Receipt className="h-10 w-10 text-orange-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Additional Fees for Foreign Students
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Other optional and mandatory fees during the program
              </p>
            </div>

            <div className="space-y-4">
              {additionalFees.map((fee, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{fee.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{fee.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-orange-600">{fee.amount}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scholarships */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
                <Award className="h-10 w-10 text-yellow-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Foreign Student Scholarships
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Various scholarship programs to support deserving international students
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scholarshipCategories.map((scholarship, index) => (
                <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 text-center">
                    <Award className="h-8 w-8 text-white mx-auto mb-2" />
                    <h3 className="text-white font-bold">{scholarship.name}</h3>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-600">Criteria</div>
                        <div className="text-xs font-semibold text-gray-800">{scholarship.criteria}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Benefit</div>
                        <div className="text-xs font-semibold text-green-600">{scholarship.benefit}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Available For</div>
                        <div className="text-xs text-gray-700">{scholarship.students}</div>
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <Banknote className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                International Payment Methods
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Multiple secure payment options for international students
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <CreditCard className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">Credit/Debit Cards</h3>
                  <p className="text-sm text-gray-600">Visa, MasterCard, American Express</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">Bank Transfer</h3>
                  <p className="text-sm text-gray-600">Wire transfer to college account</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <Smartphone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">Online Payment</h3>
                  <p className="text-sm text-gray-600">PayPal, Western Union, MoneyGram</p>
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
              <h3 className="text-2xl font-bold mb-4">Need Help with Fee Structure?</h3>
              <p className="text-blue-100 mb-6">
                Our foreign student finance team is available to help you understand the fee structure and payment options
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Finance Office
                </Button>
                <Button size="lg" variant="outline" className="border-white text-gray-700 hover:bg-white hover:text-blue-600">
                  <Mail className="mr-2 h-5 w-5 text-gray-700" />
                  Email Finance Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
