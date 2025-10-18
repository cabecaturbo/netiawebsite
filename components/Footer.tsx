import Link from 'next/link'

export const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Home", href: "/" },
        { name: "Fin Overview", href: "/overview" },
        { name: "Channels", href: "/channels" },
        { name: "Voice", href: "/voice" },
        { name: "Procedures", href: "/procedures" },
        { name: "Fin Insights", href: "/insights" }
      ]
    },
    {
      title: "AI Technology",
      links: [
        { name: "AI Engine", href: "/ai-engine" },
        { name: "Models", href: "/models" },
        { name: "AI Research", href: "/research" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Financial Services", href: "/solutions/financial" },
        { name: "Retail and ecommerce", href: "/solutions/retail" },
        { name: "Enterprise", href: "/solutions/enterprise" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Customers", href: "/customers" },
        { name: "Pioneer", href: "/pioneer" },
        { name: "Webinars", href: "/webinars" },
        { name: "Fin 3", href: "/fin3" },
        { name: "Help Center", href: "/help" },
        { name: "Safety & security", href: "/security" },
        { name: "Ideas Blog", href: "/blog" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Careers", href: "/careers" },
        { name: "Press & Media", href: "/press" }
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
              AI-powered customer service that works seamlessly with your business.
            </p>
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
                © 2025 Netia. All rights reserved.
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



