"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, Eye, EyeOff, Shield, LogIn, ArrowLeft } from 'lucide-react'
import { adminAPI } from '@/lib/admin/api';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      // Test API connection first
      const isConnected = await adminAPI.testConnection();
      if (!isConnected) {
        setError('Unable to connect to admin server. Please check if the backend is running on localhost:5000')
        setIsLoading(false)
        return
      }

      // Call the backend API
      const response = await adminAPI.login(formData.email, formData.password)

      if (response.success && response.data) {
        // Store token and user info
        localStorage.setItem('adminToken', response.data.token)
        localStorage.setItem('adminUser', JSON.stringify(response.data.admin))
        
        // Show success message and redirect
        setSuccess('Login successful! Redirecting to admin dashboard...')
        console.log('Login successful, redirecting to admin dashboard...')
        
        // Redirect to admin dashboard with a small delay
        setTimeout(() => {
          window.location.href = '/admin-dashboard'
        }, 1500)
      } else {
        setError(response.error || 'Login failed')
        setSuccess('')
      }
    } catch (err: any) {
      setError('Unable to connect to admin server. Please try again.')
      setSuccess('')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home Button */}
        <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Admin Login
            </CardTitle>
            <CardDescription className="text-gray-600">
              Access the Medical College Admin Dashboard
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-700">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="border-green-200 bg-green-50">
                  <AlertDescription className="text-green-700">
                    {success}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@medicalcollege.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-11"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="h-11 pr-10"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </>
                )}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm font-medium text-gray-700 mb-2">Demo Credentials:</p>
              <div className="space-y-1 text-sm text-gray-600">
                <p><strong>Email:</strong> admin@medicalcollege.com</p>
                <p><strong>Password:</strong> admin123</p>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                Admin dashboard will be available at{' '}
                <a href="/admin-dashboard" className="text-blue-600 hover:underline">
                  /admin-dashboard
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
