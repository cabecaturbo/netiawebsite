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
    localStorage.removeItem('netia_customer_logged_in')
    localStorage.removeItem('netia_customer_email')
    localStorage.removeItem('netia_customer_token')
    localStorage.removeItem('netia_customer_renew_token')
    setIsLoggedIn(false)
    setUserEmail('')
    window.location.href = '/'
  }

  const showDashboardButtons = isLoggedIn && pathname === '/dashboard'

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-14 md:h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="font-display font-semibold text-xl text-fg hover:text-primary-600 transition-colors duration-300 group">
              Netia
              <span className="block w-0 group-hover:w-full h-0.5 bg-primary-500 transition-all duration-300"></span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
              <Link href="/features" className="text-sm text-muted hover:text-fg transition-all duration-300">Features</Link>
              <Link href="/pricing" className="text-sm text-muted hover:text-fg transition-all duration-300">Pricing</Link>
              <Link href="/demo" className="text-sm text-muted hover:text-fg transition-all duration-300">Demo</Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            {showDashboardButtons ? (
              <>
                <span className="text-sm text-muted">{userEmail}</span>
                <a
                  href="https://app.netia.ai/dashboard"
                  className="px-4 py-2 text-sm font-medium text-fg border border-border rounded-full hover:bg-surface hover:border-primary-200 hover:text-primary-600 transition-all duration-300"
                >
                  Dashboard
                </a>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-full hover:bg-red-600 transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-fg border border-border rounded-full hover:bg-surface hover:border-primary-200 hover:text-primary-600 transition-all duration-300"
                >
                  Login
                </Link>
                <a
                  href="/demo"
                  className="px-4 py-2 text-sm font-medium text-fg border border-border rounded-full hover:bg-surface hover:border-primary-200 hover:text-primary-600 transition-all duration-300"
                >
                  Watch Demo
                </a>
                <a
                  href="/pricing"
                  className="px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-all duration-300"
                >
                  Start Free Trial
                </a>
              </>
            )}
          </div>

          <button
            className="md:hidden p-3 min-w-[44px] min-h-[44px] hover:bg-surface rounded-lg transition-colors duration-300 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden border-t border-border transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="py-4 space-y-3">
            <Link href="/features" className="block w-full text-left text-sm text-muted hover:text-fg transition-all duration-300">
              Features
            </Link>
            <Link href="/pricing" className="block w-full text-left text-sm text-muted hover:text-fg transition-all duration-300">
              Pricing
            </Link>
            <Link href="/demo" className="block w-full text-left text-sm text-muted hover:text-fg transition-all duration-300">
              Demo
            </Link>
            <div className="pt-4 space-y-2">
              {showDashboardButtons ? (
                <>
                  <div className="text-center text-sm text-muted mb-2">{userEmail}</div>
                  <Link href="https://app.netia.ai/dashboard" className="block w-full px-4 py-3 min-h-[44px] text-sm font-medium text-fg border border-border rounded-full text-center hover:bg-surface hover:border-primary-200 hover:text-primary-600 transition-all duration-300">
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="block w-full px-4 py-3 min-h-[44px] text-sm font-medium text-white bg-red-500 rounded-full text-center hover:bg-red-600 transition-all duration-300">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="block w-full px-4 py-3 min-h-[44px] text-sm font-medium text-fg border border-border rounded-full text-center hover:bg-surface hover:border-primary-200 hover:text-primary-600 transition-all duration-300">
                    Login
                  </Link>
                  <a href="/demo" className="block w-full px-4 py-3 min-h-[44px] text-sm font-medium text-fg border border-border rounded-full text-center hover:bg-surface hover:border-primary-200 hover:text-primary-600 transition-all duration-300">
                    Watch Demo
                  </a>
                  <a href="/pricing" className="block w-full px-4 py-3 min-h-[44px] text-sm font-medium text-white bg-primary-500 rounded-full text-center hover:bg-primary-600 transition-all duration-300">
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



