'use client'

import { useState } from 'react'
import Link from 'next/link'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Pricing */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="font-display font-semibold text-xl text-fg">
              Netia
            </Link>
            <Link href="/pricing" className="text-sm text-muted hover:text-fg transition-colors">
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="/demo"
              className="px-4 py-2 text-sm font-medium text-fg border border-border rounded-full hover:bg-surface transition-colors"
            >
              View demo
            </a>
            <a
              href="/signup/starter"
              className="px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors"
            >
              Start free trial
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-3">
              <Link href="/pricing" className="block w-full text-left text-sm text-muted hover:text-fg transition-colors">
                Pricing
              </Link>
              <div className="pt-4 space-y-2">
                <a
                  href="/demo"
                  className="block w-full px-4 py-2 text-sm font-medium text-fg border border-border rounded-full text-center hover:bg-surface transition-colors"
                >
                  View demo
                </a>
                <a
                  href="/signup/starter"
                  className="block w-full px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-full text-center hover:bg-primary-600 transition-colors"
                >
                  Start free trial
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}



