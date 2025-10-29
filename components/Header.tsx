'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }

    // Check login status
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('netia_customer_logged_in')
      const email = localStorage.getItem('netia_customer_email')
      if (loggedIn === 'true') {
        setIsLoggedIn(true)
        setUserEmail(email || '')
      }
    }

    window.addEventListener('scroll', updateScrollProgress)
    checkLoginStatus()

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  const handleLogout = () => {
    // Clear all auth data
    localStorage.removeItem('netia_customer_logged_in')
    localStorage.removeItem('netia_customer_email')
    localStorage.removeItem('netia_customer_token')
    localStorage.removeItem('netia_customer_renew_token')
    setIsLoggedIn(false)
    setUserEmail('')
    window.location.href = '/'
  }

  // Only show dashboard/logout when logged in AND on dashboard page
  const showDashboardButtons = isLoggedIn && pathname === '/dashboard'

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-300" 
           style={{width: `${scrollProgress}%`}}></div>
      
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="font-display font-semibold text-xl text-fg hover:text-primary-600 transition-colors duration-300 group">
              Netia
              <span className="block w-0 group-hover:w-full h-0.5 bg-primary-500 transition-all duration-300"></span>
            </Link>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/features" className="text-sm text-muted hover:text-fg transition-all duration-300 relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/pricing" className="text-sm text-muted hover:text-fg transition-all duration-300 relative group">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/demo" className="text-sm text-muted hover:text-fg transition-all duration-300 relative group">
                Demo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/integrate" className="text-sm text-muted hover:text-fg transition-all duration-300 relative group">
                Integrate
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {showDashboardButtons ? (
              <>
                <span className="text-sm text-muted">{userEmail}</span>
                <a
                  href="https://app.netia.ai/dashboard"
                  className="px-4 py-2 text-sm font-medium text-fg border border-border rounded-full hover:bg-surface hover:border-primary-200 hover:text-primary-600 transition-all duration-300 hover-lift btn-enhanced"
                >
                  Dashboard
                </a>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-full hover:bg-red-600 transition-all duration-300 hover-lift btn-enhanced"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-fg border border-border rounded-full hover:bg-surface hover:border-primary-200 hover:text-primary-600 transition-all duration-300 hover-lift btn-enhanced"
                >
                  Login
                </Link>
                <a
                  href="/demo"
                  className="px-4 py-2 text-sm font-medium text-fg border border-border rounded-full hover:bg-surface hover:border-primary-200 hover:text-primary-600 transition-all duration-300 hover-lift btn-enhanced"
                >
                  Watch Demo
                </a>
                <a
                  href="/pricing"
                  className="px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-all duration-300 hover-lift btn-enhanced hover-glow shadow-md"
                >
                  Start Free Trial
                </a>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-surface rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`md:hidden border-t border-border transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="py-4 space-y-3">
            <Link 
              href="/features" 
              className={`block w-full text-left text-sm text-muted hover:text-fg transition-all duration-300 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{transitionDelay: isMenuOpen ? '0.1s' : '0s'}}
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className={`block w-full text-left text-sm text-muted hover:text-fg transition-all duration-300 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{transitionDelay: isMenuOpen ? '0.15s' : '0s'}}
            >
              Pricing
            </Link>
            <Link 
              href="/demo" 
              className={`block w-full text-left text-sm text-muted hover:text-fg transition-all duration-300 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{transitionDelay: isMenuOpen ? '0.2s' : '0s'}}
            >
              Demo
            </Link>
            <Link 
              href="/integrate" 
              className={`block w-full text-left text-sm text-muted hover:text-fg transition-all duration-300 transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{transitionDelay: isMenuOpen ? '0.25s' : '0s'}}
            >
              Integrate
            </Link>
            <div className="pt-4 space-y-2">
              {showDashboardButtons ? (
                <>
                  <div className={`text-center text-sm text-muted mb-2 ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{transitionDelay: isMenuOpen ? '0.3s' : '0s'}}
                  >
                    {userEmail}
                  </div>
                  <Link
                    href="https://app.netia.ai/dashboard"
                    className={`block w-full px-4 py-2 text-sm font-medium text-fg border border-border rounded-full text-center hover:bg-surface hover:border-primary-200 hover:text-primary-600 transition-all duration-300 hover-lift transform ${
                      isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{transitionDelay: isMenuOpen ? '0.35s' : '0s'}}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`block w-full px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-full text-center hover:bg-red-600 transition-all duration-300 hover-lift transform ${
                      isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{transitionDelay: isMenuOpen ? '0.4s' : '0s'}}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className={`block w-full px-4 py-2 text-sm font-medium text-fg border border-border rounded-full text-center hover:bg-surface hover:border-primary-200 hover:text-primary-600 transition-all duration-300 hover-lift transform ${
                      isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{transitionDelay: isMenuOpen ? '0.3s' : '0s'}}
                  >
                    Login
                  </Link>
                  <a
                    href="/demo"
                    className={`block w-full px-4 py-2 text-sm font-medium text-fg border border-border rounded-full text-center hover:bg-surface hover:border-primary-200 hover:text-primary-600 transition-all duration-300 hover-lift transform ${
                      isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{transitionDelay: isMenuOpen ? '0.35s' : '0s'}}
                  >
                    Watch Demo
                  </a>
                  <a
                    href="/pricing"
                    className={`block w-full px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-full text-center hover:bg-primary-600 transition-all duration-300 hover-lift hover-glow transform ${
                      isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{transitionDelay: isMenuOpen ? '0.4s' : '0s'}}
                  >
                    Start Free Trial
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}



