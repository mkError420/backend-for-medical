"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MessageCircle, User, HelpCircle, Home, ChevronDown } from "lucide-react"

interface NavItem {
  title: string
  href?: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Administration",
    children: [
      { title: "The Trust", href: "/administration/trust" },
      { title: "Governing Body", href: "/administration/governing-body" },
      {
        title: "Principal's Office",
        children: [
          { title: "Principal", href: "/administration/principal" },
          { title: "General Administration", href: "/administration/general-administration" },
          { title: "Student's Section", href: "/administration/students-section" },
          { title: "Foreign Help Desk", href: "/administration/foreign-help-desk" },
          { title: "Finance and Account's", href: "/administration/finance-accounts" },
          { title: "Library Management", href: "/administration/library-management" }
        ]
      },
      {
        title: "Vice Principal's Office",
        children: [
          { title: "Vice Principal", href: "/administration/vice-principal" },
          { title: "Academic Coordination Committee", href: "/administration/academic-coordination" },
          { title: "Medical Education Unit", href: "/administration/medical-education-unit" },
          { title: "Research and Monitoring Cell Committee", href: "/administration/research-monitoring" }
        ]
      },
      {
        title: "Committees",
        children: [
          { title: "Annual Sports & Cultural Committee", href: "/administration/committees/sports-cultural" },
          { title: "Canteen Committee", href: "/administration/committees/canteen" },
          { title: "Complain Committee", href: "/administration/committees/complaint" },
          { title: "Accreditation Committee", href: "/administration/committees/accreditation" },
          { title: "Day Celebration Committee", href: "/administration/committees/day-celebration" },
          { title: "Debate Club Committee", href: "/administration/committees/debate-club" },
          { title: "IERB Committee", href: "/administration/committees/ierb" },
          { title: "Magazine Committee", href: "/administration/committees/magazine" },
          { title: "Purchase Committee", href: "/administration/committees/purchase" },
          { title: "Wall Magazine (Deyalika) Publication Committee", href: "/administration/committees/wall-magazine" },
          { title: "Website & Prospectus Committee", href: "/administration/committees/website-prospectus" },
          { title: "Bullying and Ragging Committee", href: "/administration/committees/bullying-ragging" },
          { title: "Discipline Committee", href: "/administration/committees/discipline" }
        ]
      },
      {
        title: "Management Committee by Ministry",
        children: [
          { title: "Management Committee", href: "/administration/ministry/management-committee" },
          { title: "Financial Management Committee", href: "/administration/ministry/financial-management" },
          { title: "Academic Committee", href: "/administration/ministry/academic-committee" },
          { title: "Education Quality Control Committee", href: "/administration/ministry/education-quality" }
        ]
      },
      {
        title: "General Information",
        children: [
          { title: "Organogram", href: "/administration/general/organogram" },
          { title: "Service Rules", href: "/administration/general/service-rules" },
          { title: "Job Description", href: "/administration/general/job-description" },
          { title: "Curriculum", href: "/administration/general/curriculum" },
          { title: "Standard Operating Procedures (SOPs)", href: "/administration/general/sops" },
          { title: "Quality Assurance Scheme (QAS)", href: "/administration/general/qas" },
          { title: "Medical Ethics BMDC", href: "/administration/general/medical-ethics" },
          { title: "Teaching Medical Ethics to Undergraduates", href: "/administration/general/teaching-ethics" },
          { title: "Module for Medical Ethics", href: "/administration/general/ethics-module" },
          { title: "Code of Conduct of Faculty", href: "/administration/general/faculty-conduct" },
          { title: "Code of Conduct of Students", href: "/administration/general/student-conduct" },
          { title: "Code of Conduct of Staff", href: "/administration/general/staff-conduct" },
          { title: "Internal Forms (Download Section)", href: "/administration/general/internal-forms" }
        ]
      },
      {
        title: "Quality Assurance",
        children: [
          { title: "Academic Council", href: "/administration/quality/academic-council" },
          { title: "Academic Co-ordination Committee", href: "/administration/quality/academic-coordination" },
          { title: "Phase Co-ordination Committees", href: "/administration/quality/phase-coordination" },
          { title: "Faculty Development Committee", href: "/administration/quality/faculty-development" },
          { title: "External Examiners Review", href: "/administration/quality/external-examiners" },
          { title: "Personal Review Form", href: "/administration/quality/personal-review" },
          { title: "Peer Review Committee", href: "/administration/quality/peer-review" }
        ]
      }
    ]
  },
  {
    title: "Departments",
    children: [
      {
        title: "Phase-I",
        children: [
          { title: "General Info for Phase-I", href: "/departments/phase-1/general-info" },
          { title: "Anatomy", href: "/departments/phase-1/anatomy" },
          { title: "Physiology", href: "/departments/phase-1/physiology" },
          { title: "Biochemistry", href: "/departments/phase-1/biochemistry" }
        ]
      },
      {
        title: "Phase-II",
        children: [
          { title: "General Info for Phase-II", href: "/departments/phase-2/general-info" },
          { title: "Anatomy", href: "/departments/phase-2/anatomy" },
          { title: "Physiology", href: "/departments/phase-2/physiology" },
          { title: "Biochemistry", href: "/departments/phase-2/biochemistry" }
        ]
      },
      {
        title: "Phase-III",
        children: [
          { title: "General Info for Phase-III", href: "/departments/phase-3/general-info" },
          { title: "Community Medicine & Public Health", href: "/departments/phase-3/community-medicine" },
          { title: "Pathology", href: "/departments/phase-3/pathology" },
          { title: "Microbiology", href: "/departments/phase-3/microbiology" }
        ]
      },
      {
        title: "Phase-IV",
        children: [
          { title: "General Info for Phase-IV", href: "/departments/phase-4/general-info" },
          { title: "Medicine", href: "/departments/phase-4/medicine" },
          { title: "Paediatrics", href: "/departments/phase-4/paediatrics" },
          { title: "Psychiatry", href: "/departments/phase-4/psychiatry" },
          { title: "Skin & Venereal Disease", href: "/departments/phase-4/skin-venereal" },
          { title: "Transfusion Medicine", href: "/departments/phase-4/transfusion-medicine" },
          { title: "Cardiology", href: "/departments/phase-4/cardiology" },
          { title: "Neuromedicine", href: "/departments/phase-4/neuromedicine" },
          { title: "Gastroenterology & Hepatology", href: "/departments/phase-4/gastroenterology" },
          { title: "Endocrinology", href: "/departments/phase-4/endocrinology" },
          { title: "Respiratory Medicine", href: "/departments/phase-4/respiratory" },
          { title: "Surgery", href: "/departments/phase-4/surgery" },
          { title: "Physiotherapy", href: "/departments/phase-4/physiotherapy" },
          { title: "Orthopaedics", href: "/departments/phase-4/orthopaedics" },
          { title: "Casualty", href: "/departments/phase-4/casualty" },
          { title: "Otorhinolaryngology (ENT)", href: "/departments/phase-4/otorhinolaryngology" },
          { title: "Ophthalmology", href: "/departments/phase-4/ophthalmology" },
          { title: "Urology", href: "/departments/phase-4/urology" },
          { title: "Radiology & Imaging", href: "/departments/phase-4/radiology" },
          { title: "Anaesthesiology", href: "/departments/phase-4/anaesthesiology" },
          { title: "Obstetrics & Gynaecology", href: "/departments/phase-4/obstetrics-gynaecology" }
        ]
      }
    ]
  },
  {
    title: "Facilities",
    children: [
      {
        title: "Academic",
        children: [
          { title: "General", href: "/facilities/academic/general" },
          { title: "Practical Laboratory", href: "/facilities/academic/practical-lab" },
          { title: "Skill Lab", href: "/facilities/academic/skill-lab" },
          { title: "Service Laboratory", href: "/facilities/academic/service-lab" },
          { title: "Museum", href: "/facilities/academic/museum" },
          { title: "Class Room", href: "/facilities/academic/classroom" },
          { title: "Tutorial Room", href: "/facilities/academic/tutorial-room" },
          { title: "Gallery", href: "/facilities/academic/gallery" },
          { title: "Cadaver Room", href: "/facilities/academic/cadaver-room" },
          { title: "Dissection Hall", href: "/facilities/academic/dissection-hall" },
          { title: "Histology Practical Room", href: "/facilities/academic/histology-room" },
          { title: "Book Corner", href: "/facilities/academic/book-corner" },
          { title: "Bed Side Teaching Facilities", href: "/facilities/academic/bedside-teaching" },
          { title: "Labour Room", href: "/facilities/academic/labour-room" },
          { title: "VIA Centre", href: "/facilities/academic/via-centre" },
          { title: "Eclampsia Room", href: "/facilities/academic/eclampsia-room" },
          { title: "Septic Room", href: "/facilities/academic/septic-room" },
          { title: "Procedure & Dressing Room", href: "/facilities/academic/procedure-room" },
          { title: "ICU", href: "/facilities/academic/icu" },
          { title: "HDU", href: "/facilities/academic/hdu" },
          { title: "CCU", href: "/facilities/academic/ccu" },
          { title: "Word", href: "/facilities/academic/word" }
        ]
      },
      {
        title: "Non-Academic",
        children: [
          { title: "Teachers' Lounge", href: "/facilities/non-academic/teachers-lounge" },
          { title: "Canteen", href: "/facilities/non-academic/canteen" },
          { title: "Students Common Room", href: "/facilities/non-academic/students-common-room" }
        ]
      },
      {
        title: "Student Support System",
        children: [
          { title: "Academic Support System", href: "/facilities/student-support/academic-support" },
          { title: "Financial Support System", href: "/facilities/student-support/financial-support" },
          { title: "Social Support System", href: "/facilities/student-support/social-support" },
          { title: "Psychological Support System", href: "/facilities/student-support/psychological-support" }
        ]
      },
      {
        title: "Hostel",
        children: [
          { title: "Organogram Boy's Hostel", href: "/facilities/hostel/boys-organogram" },
          { title: "Facilities of Boy's Hostel", href: "/facilities/hostel/boys-facilities" },
          { title: "Organogram Girl's Hostel", href: "/facilities/hostel/girls-organogram" },
          { title: "Facilities of Girl's Hostel", href: "/facilities/hostel/girls-facilities" }
        ]
      },
      {
        title: "Activities",
        href: "/facilities/activities"
      }
    ]
  },
  {
    title: "Medical Education & Research",
    children: [
      {
        title: "Medical Education Unit (MEU)",
        children: [
          { title: "MEU Committee", href: "/medical-education/meu/committee" },
          { title: "MEU Activities", href: "/medical-education/meu/activities" }
        ]
      },
      {
        title: "Research & Monitoring Cell",
        children: [
          { title: "RMC Committee", href: "/medical-education/research/rmc-committee" },
          { title: "RMC Activities", href: "/medical-education/research/rmc-activities" }
        ]
      }
    ]
  },
  {
    title: "Journal",
    children: [
      { title: "Medical Journal Archive", href: "/journal/archive" },
      { title: "Research Papers", href: "/journal/research-papers" },
      { title: "Publication System", href: "/journal/publication-system" },
      { title: "PDF Viewer", href: "/journal/pdf-viewer" },
      { title: "Journal Submission Form", href: "/journal/submission" }
    ]
  },
  {
    title: "Admission",
    children: [
      {
        title: "Local",
        children: [
          { title: "MBBS Admission Info", href: "/admission/local/mbbs-info" },
          { title: "Eligibility Criteria", href: "/admission/local/eligibility" },
          { title: "Admission Process", href: "/admission/local/process" },
          { title: "Online Application Form", href: "/admission/local/application" },
          { title: "Fee Structure", href: "/admission/local/fee-structure" }
        ]
      },
      {
        title: "Foreign Admission",
        children: [
          { title: "MBBS Admission Info", href: "/admission/foreign/mbbs-info" },
          { title: "Eligibility Criteria", href: "/admission/foreign/eligibility" },
          { title: "Admission Process", href: "/admission/foreign/process" },
          { title: "Online Application Form", href: "/admission/foreign/application" },
          { title: "Fee Structure", href: "/admission/foreign/fee-structure" }
        ]
      }
    ]
  },
  {
    title: "Library",
    children: [
      { title: "Library OPAC", href: "/library/opac" },
      { title: "E-Library", href: "/library/e-library" },
      { title: "E-Journals", href: "/library/e-journals" }
    ]
  },
  {
    title: "Notice Board",
    children: [
      { title: "Overview", href: "/notice-board/overview" },
      { title: "Service Departments", href: "/notice-board/service-departments" },
      { title: "Diagnostic Services", href: "/notice-board/diagnostic-services" }
    ]
  },
  {
    title: "Hospital",
    children: [
      { title: "Hospital Overview", href: "/hospital/overview" },
      { title: "Doctors List", href: "/hospital/doctors" },
      { title: "Departments", href: "/hospital/departments" },
      { title: "OPD Schedule", href: "/hospital/opd-schedule" },
      { title: "Emergency Info", href: "/hospital/emergency" }
    ]
  }
]

/* Mobile submenu accordion component */
function MobileNavItem({
  item,
  onLinkClick,
  level = 0,
}: {
  item: NavItem
  onLinkClick: () => void
  level?: number
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  return (
    <div className={level > 0 ? "border-l border-gray-200 ml-1 sm:ml-2 pl-1 sm:pl-2" : ""}>
      {item.href ? (
        <Link
          href={item.href}
          onClick={onLinkClick}
          className="flex items-center py-2 sm:py-3 px-2 sm:px-3 text-xs sm:text-sm text-gray-700 hover:text-gray-700 hover:bg-[#E0E6E4] hover:shadow-sm hover:translate-x-1 rounded-md transition-all duration-200 text-sm sm:text-base min-h-[44px]"
        >
          {item.title}
        </Link>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex w-full items-center justify-between py-2 sm:py-3 px-2 sm:px-3 text-left text-xs sm:text-sm font-semibold text-gray-700 hover:bg-[#E0E6E4] hover:shadow-sm hover:translate-x-1 rounded-md transition-all duration-200 min-h-[44px]"
            aria-expanded={isExpanded}
          >
            {item.title}
            {hasChildren && (
              <span
                className={`ml-1 inline-block w-2 h-2 border-r-2 border-b-2 border-gray-300 transform transition-transform duration-300 ease-out ${
                  isExpanded ? "rotate-[135deg]" : "rotate-[-45deg]"
                }`}
              ></span>
            )}
          </button>
          {hasChildren && (
            <div
              className={`mt-0 sm:mt-1 overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-0">
                {item.children!.map((child, idx) => (
                  <MobileNavItem
                    key={idx}
                    item={child}
                    onLinkClick={onLinkClick}
                    level={level + 1}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Header Container - All sticky sections */}
      <div className="sticky top-0 z-40">
        {/* Top Bar - Dark background */}
        <div className="hidden lg:block bg-gray-900 text-white py-2">
          <div className="responsive-container-full">
            <div className="flex flex-wrap justify-center lg:justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0 max-w-7xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6">
                <a href="mailto:info@rcmc.edu.bd" className="flex items-center gap-2 hover:underline">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden xs:inline text-xs sm:text-sm">info@rcmc.edu.bd</span>
                  <span className="xs:hidden text-xs">Email</span>
                </a>
                <a href="tel:+880123456789" className="flex items-center gap-2 hover:underline">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden xs:inline text-xs sm:text-sm">+88-0123456789</span>
                  <span className="xs:hidden text-xs">Phone</span>
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6">
                <Link href="/login" className="flex items-center gap-1 sm:gap-2 hover:underline">
                  <User className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden xs:inline text-xs sm:text-sm">Login</span>
                  <span className="xs:hidden text-xs">Login</span>
                </Link>
                <a href="#faq" className="flex items-center gap-1 sm:gap-2 hover:underline">
                  <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden xs:inline text-xs sm:text-sm">FAQ</span>
                  <span className="xs:hidden text-xs">FAQ</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Bar - Logo and Contact Info */}
        <div className="hidden lg:block bg-white py-3 sm:py-4 border-b">
          <div className="responsive-container-full">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 max-w-7xl mx-auto">
              {/* Logo */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg sm:text-xl">RCMC</span>
                  </div>
                  <div className="text-center lg:text-left">
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                      Rangpur Community Medical College & Hospital
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-600">
                      An Institution of RANGPUR GROUP
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
                <a href="mailto:info@rcmc.edu.bd" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden xs:inline">Email info@rcmc.edu.bd</span>
                  <span className="xs:hidden">Email</span>
                </a>
                <a href="tel:+8801528000258" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden xs:inline">Phone +88-0123456789</span>
                  <span className="xs:hidden">Phone</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-white shadow-md">
          <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-12">
            <div className="flex justify-between items-center h-12 sm:h-14 md:h-15 lg:h-16 xl:h-18 2xl:h-20">
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="lg:hidden h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 rounded-full bg-white border border-gray-200 shadow-sm text-gray-800 hover:bg-gray-50 hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>

            <div className="lg:hidden flex-1 px-2 ml-[3px]">
              <div className="flex items-center justify-center gap-2 min-w-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-blue-600 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs sm:text-sm">RCMC</span>
                </div>
                <div className="min-w-0 text-left">
                  <div className="truncate text-sm sm:text-base md:text-lg font-semibold text-gray-900 leading-tight">
                    Rangpur Community Medical College & Hospital
                  </div>
                  <div className="truncate text-[10px] sm:text-xs md:text-sm text-gray-600 leading-tight">
                    An Institution of RANGPUR GROUP
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11" />

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center justify-center flex-1 w-full">
              <div className="flex items-center space-x-1 md:space-x-2 lg:space-x-3.99 xl:space-x-5 2xl:space-x-8">
                {navItems.map((item, index) => {
                  const isLastTwo = index >= navItems.length - 2

                  return (
                    <div key={index} className="relative group">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="flex items-center gap-0 px-1 md:px-2 lg:px-1.5 xl:px-2.5 2xl:px-3 py-3 text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors whitespace-nowrap"
                        >
                          {item.title === "Home" && <Home className="h-3 w-3 md:h-4 md:w-4" style={{ color: '#26ABEE' }} />}
                          {item.title}
                        </Link>
                      ) : (
                        <button className="flex items-center gap-0 px-1 md:px-2 lg:px-1.5 xl:px-2.5 2xl:px-3 py-3 text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors whitespace-nowrap">
                          {item.title}
                          {item.children && <span className="ml-1 text-gray-400 text-sm font-bold">+</span>}
                        </button>
                      )}
                      
                      {/* Dropdown Menu */}
                      {item.children && (
                        <div
                          className={`absolute top-full mt-0 rounded-lg shadow-xl opacity-0 invisible translate-y-2 scale-[0.98] pointer-events-none transition-all duration-200 ease-out z-50 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto ${
                            isLastTwo ? "left-0 md:left-auto md:right-0 lg:left-auto lg:right-0 xl:left-0 xl:right-0 2xl:left-0 2xl:right-0" : "left-0 md:left-0 lg:left-0 xl:left-0 2xl:left-0"
                          } ${
                            "w-36 sm:w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-72"
                          }`}
                          style={{ backgroundColor: '#E7EFE8' }}
                        >
                          {/* Bridge area to prevent gap */}
                          <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
                          <div className="py-1.5">
                            <div
                              className={
                                item.title === "General Information"
                                  ? "grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1 px-2 auto-rows-min"
                                  : ""
                              }
                            >
                              {item.children.map((child, childIndex) => (
                              <div key={childIndex} className="relative group/submenu">
                                {child.href ? (
                                  <Link
                                    href={child.href}
                                    className={`block px-1.5 sm:px-2 md:px-2.5 lg:px-2 xl:px-3 2xl:px-3.5 py-1.5 text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-sm text-gray-700 transition-all duration-200 whitespace-normal leading-snug hover:bg-gray-100 hover:text-gray-900`}
                                  >
                                    {child.title}
                                  </Link>
                                ) : (
                                  <div className="px-1.5 sm:px-2 md:px-2.5 lg:px-2 xl:px-3 2xl:px-3.5 py-1.5 text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer flex items-center justify-between">
                                    <span>{child.title}</span>
                                    {child.children && <span className="ml-2 text-gray-400 text-xs">+</span>}
                                  </div>
                                )}
                                
                                {/* Submenu */}
                                {child.children && (
                                  <div
                                    className={`absolute top-0 left-full ml-0 rounded-lg shadow-xl opacity-0 invisible translate-x-2 scale-[0.98] pointer-events-none transition-all duration-200 ease-out z-50 group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:translate-x-0 group-hover/submenu:scale-100 group-hover/submenu:pointer-events-auto ${
                                      isLastTwo ? "right-full mr-0 left-auto" : "left-full ml-0"
                                    } min-w-[240px] sm:min-w-[260px] md:min-w-[280px] lg:min-w-[300px] xl:min-w-[320px] 2xl:min-w-[340px]`}
                                    style={{ backgroundColor: '#E7EFE8' }}
                                  >
                                    {/* Bridge area to prevent gap */}
                                    <div className="absolute top-0 -left-2 bottom-0 w-2 bg-transparent" />
                                    <div className="py-1.5">
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-0.5 px-1">
                                        {child.children.map((subChild, subChildIndex) => (
                                          <div key={subChildIndex} className="flex items-center space-x-0.5">
                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-0.5" />
                                            <Link
                                              href={subChild.href || "#"}
                                              className={`block px-2 sm:px-2.5 md:px-3 lg:px-3 xl:px-3.5 2xl:px-4 py-1.5 text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-sm text-gray-700 transition-all duration-200 whitespace-normal leading-snug hover:bg-gray-100 hover:text-gray-900`}
                                            >
                                              {subChild.title}
                                            </Link>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <>
            <div
              className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ease-out ${
                isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={toggleMenu}
              aria-hidden={!isMenuOpen}
            />
            <div
              className={`fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] z-50 lg:hidden bg-white overflow-y-auto shadow-xl transform transition-transform duration-300 ease-out will-change-transform ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
              }`}
              role="dialog"
              aria-modal="true"
              aria-hidden={!isMenuOpen}
            >
              <div className="p-3 sm:p-4">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-sm">RCMC</span>
                    </div>
                    <div>
                      <h2 className="text-sm sm:text-base font-bold text-gray-900">RCMC Rangpur</h2>
                      <p className="text-xs text-gray-600">Rangpur Community Medical College</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMenu}
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Button>
                </div>
                
                <div className="space-y-0 sm:space-y-1">
                  {navItems.map((item, index) => (
                    <MobileNavItem
                      key={index}
                      item={item}
                      onLinkClick={toggleMenu}
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        </div>
      </nav>
      </div>
    </>
  )
}

export default Navbar
