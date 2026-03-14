"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#E2E6E6] py-16">
        <div className="responsive-container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-700">Rangpur Community Medical College — Shaping Clinicians, Inspiring Confidence</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700">
              Get in touch with Rangpur Community Medical College & Hospital
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="responsive-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:mx-8 lg:px-8">
            {/* Contact Form */}
            <div className="lg:col-span-1">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="Enter message subject"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleTextareaChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                        placeholder="Enter your message here..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-dark text-white py-3"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent border-r-transparent animate-spin rounded-full"></div>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8 lg:mx-8 lg:px-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>
                    Reach out to us through any of the following channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Campus Address</h3>
                      <p className="text-gray-600">
                        Rangpur Community Medical College & Hospital<br />
                        Rangpur, Rajshahi, Bangladesh<br />
                        Postal Code: 5400
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                      <p className="text-gray-600">
                        Main Office: +880-1234-5678<br />
                        Emergency: +880-1234-5679<br />
                        Admission Hotline: +880-1234-5680
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Addresses</h3>
                      <p className="text-gray-600">
                        General Info: info@rcmc.edu<br />
                        Admissions: admission@rcmc.edu<br />
                        Emergency: emergency@rcmc.edu
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Quick Actions</CardTitle>
                  <CardDescription>
                    Get immediate assistance or information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/hospital/emergency" className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Emergency Services</h3>
                      <p className="text-sm text-gray-600">24/7 Emergency Care</p>
                    </div>
                  </Link>
                  
                  <Link href="http://localhost:3000/admission/local/mbbs-info" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Send className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Admissions</h3>
                      <p className="text-sm text-gray-600">Apply Now</p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
