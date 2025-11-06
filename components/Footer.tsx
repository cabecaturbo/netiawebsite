import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-g py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center text-center">
          <div>
            <div className="text-sm font-semibold text-fg mb-3">Product</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/features" className="text-muted hover:text-fg transition-colors">Features</a></li>
              <li><a href="/features/chat" className="text-muted hover:text-fg transition-colors">Chatbot</a></li>
              <li><a href="/demo" className="text-muted hover:text-fg transition-colors">Demo</a></li>
              <li><a href="/pricing" className="text-muted hover:text-fg transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-fg mb-3">Company</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-muted hover:text-fg transition-colors">About</a></li>
              <li><a href="/waitlist" className="text-muted hover:text-fg transition-colors">Waitlist</a></li>
              <li><a href="/login" className="text-muted hover:text-fg transition-colors">Login</a></li>
              <li><a href="/signup/starter" className="text-muted hover:text-fg transition-colors">Sign up</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-fg mb-3">Resources</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="text-muted hover:text-fg transition-colors">Help Center</a></li>
              <li><a href="/api-docs" className="text-muted hover:text-fg transition-colors">API Docs</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-fg mb-3">Legal</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="text-muted hover:text-fg transition-colors">Privacy</a></li>
              <li><a href="/terms" className="text-muted hover:text-fg transition-colors">Terms</a></li>
              <li><a href="/security" className="text-muted hover:text-fg transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Netia. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="/privacy" className="text-muted hover:text-fg transition-colors">Privacy</a>
            <a href="/terms" className="text-muted hover:text-fg transition-colors">Terms</a>
            <a href="/security" className="text-muted hover:text-fg transition-colors">Security</a>
          </nav>
          <span className="flex items-center gap-2 text-sm text-muted">
            <span>Powered by</span>
            <span className="relative inline-block h-5 w-[86px]">
              <Image src="/openai-logo.png" alt="OpenAI" fill className="object-contain" />
            </span>
          </span>
        </div>
      </div>
    </footer>
  )
}



