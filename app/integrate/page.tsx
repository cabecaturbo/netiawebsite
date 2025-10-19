import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function Integrate() {
  const codeSnippet = `<!-- Netia AI Chat Widget -->
<script>
  (function() {
    var netia = window.netia = window.netia || [];
    netia.push(['init', {
      businessId: 'YOUR_BUSINESS_ID',
      position: 'bottom-right',
      theme: 'light'
    }]);
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://cdn.netia.ai/widget.js';
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  })();
</script>`

  const wordpressCode = `// Add to your theme's functions.php file
function add_netia_widget() {
    echo '<script>
      (function() {
        var netia = window.netia = window.netia || [];
        netia.push([\'init\', {
          businessId: \'YOUR_BUSINESS_ID\',
          position: \'bottom-right\',
          theme: \'light\'
        }]);
        var script = document.createElement(\'script\');
        script.async = true;
        script.src = \'https://cdn.netia.ai/widget.js\';
        var firstScript = document.getElementsByTagName(\'script\')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
      })();
    </script>';
}
add_action('wp_footer', 'add_netia_widget');`

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating elements */}
      <FloatingBalls />
      
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4 relative">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-fg mb-4">
              Integration Guide
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Set up webhook integration with your existing chat widget. AI responds to customer questions and handles appointment booking using your business profile.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            
            {/* Quick Start */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-4">
                Quick Start
              </h2>
              <p className="text-muted mb-6">
                Copy and paste this code into your website&apos;s HTML before the closing &lt;/body&gt; tag.
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-gray-100 text-sm overflow-x-auto">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
              
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors">
                Copy Code
              </button>
            </div>

            {/* Platform-Specific Guides */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              
              {/* WordPress */}
              <div className="bg-surface border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-semibold text-fg mb-4">
                  WordPress
                </h3>
                <p className="text-muted mb-4">
                  Add Netia to your WordPress site using the theme editor or a plugin.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-gray-100 text-xs overflow-x-auto">
                    <code>{wordpressCode}</code>
                  </pre>
                </div>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm hover:bg-primary-600 transition-colors">
                  Copy WordPress Code
                </button>
              </div>

              {/* Shopify */}
              <div className="bg-surface border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-semibold text-fg mb-4">
                  Shopify
                </h3>
                <p className="text-muted mb-4">
                  Add Netia to your Shopify store through the theme liquid files.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-gray-100 text-xs overflow-x-auto">
                    <code>{`<!-- Add to theme.liquid before </body> -->
<script>
  (function() {
    var netia = window.netia = window.netia || [];
    netia.push(['init', {
      businessId: 'YOUR_BUSINESS_ID',
      position: 'bottom-right',
      theme: 'light'
    }]);
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://cdn.netia.ai/widget.js';
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  })();
</script>`}</code>
                  </pre>
                </div>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm hover:bg-primary-600 transition-colors">
                  Copy Shopify Code
                </button>
              </div>

              {/* Squarespace */}
              <div className="bg-surface border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-semibold text-fg mb-4">
                  Squarespace
                </h3>
                <p className="text-muted mb-4">
                  Add Netia to Squarespace using the Code Injection feature.
                </p>
                <div className="space-y-2 text-sm text-muted">
                  <p>1. Go to Settings → Advanced → Code Injection</p>
                  <p>2. Paste the code in the Footer section</p>
                  <p>3. Save your changes</p>
                </div>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm hover:bg-primary-600 transition-colors mt-4">
                  Copy Code
                </button>
              </div>

              {/* Wix */}
              <div className="bg-surface border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-semibold text-fg mb-4">
                  Wix
                </h3>
                <p className="text-muted mb-4">
                  Add Netia to Wix using the HTML Embed element.
                </p>
                <div className="space-y-2 text-sm text-muted">
                  <p>1. Add HTML Embed element to your page</p>
                  <p>2. Paste the code in the HTML section</p>
                  <p>3. Adjust position and save</p>
                </div>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm hover:bg-primary-600 transition-colors mt-4">
                  Copy Code
                </button>
              </div>
            </div>

            {/* Customization Options */}
            <div className="bg-surface border border-border rounded-lg p-8 mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-6">
                Customization Options
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-fg mb-3">Position</h3>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>• bottom-right (default)</li>
                    <li>• bottom-left</li>
                    <li>• top-right</li>
                    <li>• top-left</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-fg mb-3">Theme</h3>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>• light (default)</li>
                    <li>• dark</li>
                    <li>• auto (matches system)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-fg mb-3">Colors</h3>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>• primaryColor: &apos;#1677FF&apos;</li>
                    <li>• backgroundColor: &apos;#FFFFFF&apos;</li>
                    <li>• textColor: &apos;#0A0A0A&apos;</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-fg mb-3">Behavior</h3>
                  <ul className="space-y-2 text-sm text-muted">
                    <li>• autoOpen: false</li>
                    <li>• showWelcomeMessage: true</li>
                    <li>• enableSounds: true</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Testing */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 mb-12">
              <h2 className="font-display text-2xl font-semibold text-fg mb-4">
                Test Your Integration
              </h2>
              <p className="text-muted mb-6">
                After adding the code to your website, test the integration to make sure everything works correctly.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">1</div>
                  <div>
                    <h4 className="font-semibold text-fg mb-1">Check Widget Appearance</h4>
                    <p className="text-sm text-muted">Look for the Netia chat widget in the corner of your website.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">2</div>
                  <div>
                    <h4 className="font-semibold text-fg mb-1">Test Chat Functionality</h4>
                    <p className="text-sm text-muted">Click the widget and try asking a question to test the AI responses.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">3</div>
                  <div>
                    <h4 className="font-semibold text-fg mb-1">Verify Mobile Compatibility</h4>
                    <p className="text-sm text-muted">Test the widget on mobile devices to ensure it works properly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="text-center">
              <h2 className="font-display text-2xl font-semibold text-fg mb-4">
                Need Help?
              </h2>
              <p className="text-muted mb-8">
                Our support team is here to help you get Netia integrated successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:support@netia.ai"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors btn-enhanced"
                >
                  Contact Support
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-fg border border-border rounded-full hover:bg-surface transition-colors btn-enhanced"
                >
                  See it in action
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
