"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, User, Mail } from "lucide-react"

interface MessageFormData {
  name: string
  message: string
}

const MessageWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [currentTickerIndex, setCurrentTickerIndex] = useState(0)
  const [formData, setFormData] = useState<MessageFormData>({
    name: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const tickerMessages = [
    "Chat with us",
    "Need help? Message us",
    "We're here to help",
    "Send us a message"
  ]

  useEffect(() => {
    // Start animation immediately - no delay
    const tickerElement = document.querySelector('.animate-scroll span') as HTMLElement
    if (tickerElement) {
      // Force animation restart
      tickerElement.style.animation = 'none'
      tickerElement.offsetHeight // Trigger reflow
      tickerElement.style.animation = 'scroll-text 8s linear infinite'
    }

    const interval = setInterval(() => {
      setCurrentTickerIndex((prev) => (prev + 1) % tickerMessages.length)
    }, 3000) // Change message every 3 seconds

    return () => clearInterval(interval)
  }, [])

  // Immediate message change when animation completes
  useEffect(() => {
    const handleAnimationEnd = () => {
      setCurrentTickerIndex((prev) => (prev + 1) % tickerMessages.length)
    }

    const tickerSpanElement = document.querySelector('.animate-scroll span') as HTMLElement
    if (tickerSpanElement) {
      tickerSpanElement.addEventListener('animationiteration', handleAnimationEnd)
    }

    return () => {
      if (tickerSpanElement) {
        tickerSpanElement.removeEventListener('animationiteration', handleAnimationEnd)
      }
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      const widgetElement = document.getElementById('message-widget')
      
      if (widgetElement && !widgetElement.contains(target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const toggleWidget = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setIsMinimized(false)
      setSubmitStatus("idle")
    }
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log("Message submitted:", formData)
      setSubmitStatus("success")
      setFormData({
        name: "",
        message: ""
      })
      
      // Auto close after success
      setTimeout(() => {
        setIsOpen(false)
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Error submitting message:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.message

  return (
    <>
      {/* Floating Message Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          <Button
            onClick={toggleWidget}
            className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            aria-label="Open message widget"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          </Button>
          
          {/* Always Visible Ticker */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-x-20 mb-2 transition-opacity duration-200">
            <div className="text-gray-600 text-xs shadow-lg whitespace-nowrap overflow-hidden">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <div className="inline-block min-w-[100px] text-center animate-scroll">
                  <span className="inline-block pl-0">{tickerMessages[currentTickerIndex]}</span>
                </div>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Widget */}
      {isOpen && (
        <div id="message-widget" className="fixed bottom-24 right-6 z-50 w-80 max-w-[90vw]">
          <Card className="shadow-2xl border-0">
            {/* Header */}
            <CardHeader className="bg-[#E2E6E6] text-gray-700 p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <CardTitle className="text-lg font-semibold">Live Chat</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMinimize}
                    className="text-gray-700 hover:bg-white/20 p-1 h-6 w-6"
                  >
                    {isMinimized ? "▲" : "▼"}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleWidget}
                    className="text-white hover:bg-white/20 p-1 h-6 w-6"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Content */}
            {!isMinimized && (
              <CardContent className="p-4 bg-white">
                {submitStatus === "success" ? (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Send className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-sm text-gray-600">Thank you for your message. We'll get back to you soon.</p>
                  </div>
                ) : submitStatus === "error" ? (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <X className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Error!</h3>
                    <p className="text-sm text-gray-600">Failed to send message. Please try again.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                        placeholder="Type your message here..."
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className="w-full bg-[#374151] hover:[#E2EBE4] text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}

                {/* Quick Actions */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-around text-center">
                    <a
                      href="mailto:info@rcmc.edu.bd"
                      className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mail className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-xs">Email</span>
                    </a>
                    <a
                      href="/contact"
                      className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-xs">Contact</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      )}
    </>
  )
}

export default MessageWidget
