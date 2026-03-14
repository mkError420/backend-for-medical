import React from "react"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="responsive-container-full section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* College Info */}
          <div className="xl:col-span-1">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-xl">MC</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold">Medical College</h3>
                <p className="text-xs text-gray-400">Hospital & Research Center</p>
              </div>
            </div>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              A premier institution for medical education, healthcare services, and research excellence.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="xl:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="/admission/local/mbbs-info" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">Admission</Link></li>
              <li><Link href="/departments/phase-1/general-info" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">Departments</Link></li>
              <li><Link href="/facilities/academic/general" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">Facilities</Link></li>
              <li><Link href="/hospital/doctors" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">Find Doctors</Link></li>
              <li><Link href="/journal/archive" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">Medical Journal</Link></li>
              <li><Link href="/library/opac" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">Library</Link></li>
              <li><Link href="/notice-board/overview" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">Notice Board</Link></li>
              <li><Link href="/career" className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base">Career</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="xl:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#10651E] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">Medical College Road</p>
                  <p className="text-gray-300 text-sm sm:text-base">Dhaka 1234, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">+880 1234-567890</p>
                  <p className="text-gray-300 text-sm sm:text-base">+880 1234-567891</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">info@medicalcollege.edu</p>
                  <p className="text-gray-300 text-sm sm:text-base">admission@medicalcollege.edu</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-300 text-sm sm:text-base">Emergency: 24/7 Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="xl:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Subscribe to get updates on admissions, events, and medical news.
            </p>
            <form className="space-y-2 sm:space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-medical-blue text-sm sm:text-base"
              />
              <button
                type="submit"
                className="w-full bg-gray-800 text-white hover:bg-[#FFFFFF] hover:text-black font-medium py-2 px-3 sm:px-4 rounded-lg transition-colors text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 sm:gap-4 max-w-7xl mx-auto">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} RCMC Medical College & Hospital. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-primary transition-colors">Sitemap</Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-primary transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
