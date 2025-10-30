import Link from 'next/link'

export const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Home", href: "/" },
        { name: "Demo", href: "/demo" },
        { name: "Pricing", href: "/pricing" },
        { name: "Login", href: "/login" },
        { name: "Sign Up", href: "/signup" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Support", href: "mailto:support@netia.ai" },
        { name: "Security", href: "/security" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Help", href: "/help" },
        { name: "Waitlist", href: "/waitlist" }
      ]
    }
  ]

  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link href="/" className="font-display font-semibold text-xl text-fg">
                Netia
              </Link>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              AI chatbot that answers customer questions 24/7 and handles appointment booking.
            </p>
            <div className="flex items-center space-x-0.5 pt-4">
              <span className="text-sm text-gray-600">Powered by</span>
              <img 
                src="/openai-logo.png" 
                alt="OpenAI" 
                className="h-8"
              />
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-display font-semibold text-fg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted hover:text-fg transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-sm text-muted">
                © 2025 Netia. All rights reserved. Seattle, WA
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/terms" className="text-sm text-muted hover:text-fg transition-colors">
                Terms
              </a>
              <a href="/privacy" className="text-sm text-muted hover:text-fg transition-colors">
                Privacy
              </a>
              <a href="/security" className="text-sm text-muted hover:text-fg transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}



