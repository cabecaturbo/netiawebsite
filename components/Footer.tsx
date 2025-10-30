export const Footer = () => {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted">
            © 2025 Netia. All rights reserved. Seattle, WA
          </p>
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
    </footer>
  )
}



