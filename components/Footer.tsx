import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-g py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="text-xl font-semibold text-fg">Netia</div>
            <p className="mt-3 text-sm leading-6 text-muted">
              AI customer support that books appointments 24/7 and turns visitors into customers.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted">
              <span>Powered by</span>
              <span className="relative inline-block h-5 w-[86px]">
                <Image src="/openai-logo.png" alt="OpenAI" fill className="object-contain" />
              </span>
            </div>
          </div>

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
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Netia. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="/privacy" className="text-muted hover:text-fg transition-colors">Privacy</a>
            <a href="/terms" className="text-muted hover:text-fg transition-colors">Terms</a>
            <a href="/security" className="text-muted hover:text-fg transition-colors">Security</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}



