import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FloatingBalls } from "@/components/FloatingBalls"

export default function ApiDocs() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating elements */}
      <FloatingBalls />
      
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4 relative">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-fg mb-4">
              API Documentation
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Build powerful integrations with Netia's REST API. Access AI conversations, manage business profiles, and automate workflows.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <nav className="space-y-2">
                    <a href="#getting-started" className="block px-4 py-2 text-sm text-muted hover:text-fg hover:bg-surface rounded-lg transition-colors">Getting Started</a>
                    <a href="#authentication" className="block px-4 py-2 text-sm text-muted hover:text-fg hover:bg-surface rounded-lg transition-colors">Authentication</a>
                    <a href="#conversations" className="block px-4 py-2 text-sm text-muted hover:text-fg hover:bg-surface rounded-lg transition-colors">Conversations</a>
                    <a href="#business-profiles" className="block px-4 py-2 text-sm text-muted hover:text-fg hover:bg-surface rounded-lg transition-colors">Business Profiles</a>
                    <a href="#webhooks" className="block px-4 py-2 text-sm text-muted hover:text-fg hover:bg-surface rounded-lg transition-colors">Webhooks</a>
                    <a href="#rate-limits" className="block px-4 py-2 text-sm text-muted hover:text-fg hover:bg-surface rounded-lg transition-colors">Rate Limits</a>
                    <a href="#sdks" className="block px-4 py-2 text-sm text-muted hover:text-fg hover:bg-surface rounded-lg transition-colors">SDKs</a>
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                
                {/* Getting Started */}
                <section id="getting-started" className="mb-12">
                  <h2 className="font-display text-2xl font-semibold text-fg mb-6">Getting Started</h2>
                  <div className="bg-gray-900 rounded-lg p-6 mb-6">
                    <pre className="text-gray-100 text-sm overflow-x-auto">
                      <code>{`# Base URL
https://api.netia.ai/v1

# Authentication
curl -H "Authorization: Bearer YOUR_API_KEY" \\
     https://api.netia.ai/v1/conversations`}</code>
                    </pre>
                  </div>
                  <p className="text-muted mb-4">
                    All API requests must include your API key in the Authorization header. You can find your API key in your dashboard settings.
                  </p>
                </section>

                {/* Authentication */}
                <section id="authentication" className="mb-12">
                  <h2 className="font-display text-2xl font-semibold text-fg mb-6">Authentication</h2>
                  <div className="bg-surface border border-border rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-fg mb-3">API Key</h3>
                    <p className="text-muted mb-4">
                      Include your API key in the Authorization header of all requests:
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-gray-100 text-sm">
                        <code>Authorization: Bearer sk-1234567890abcdef</code>
                      </pre>
                    </div>
                  </div>
                </section>

                {/* Conversations */}
                <section id="conversations" className="mb-12">
                  <h2 className="font-display text-2xl font-semibold text-fg mb-6">Conversations</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-surface border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-fg mb-3">Create Conversation</h3>
                      <div className="bg-gray-900 rounded-lg p-4 mb-4">
                        <pre className="text-gray-100 text-sm">
                          <code>{`POST /conversations
{
  "business_id": "biz_123",
  "customer_message": "What are your hours?",
  "context": {
    "customer_name": "John Doe",
    "source": "website"
  }
}`}</code>
                        </pre>
                      </div>
                      <p className="text-sm text-muted">Creates a new conversation and returns the AI response.</p>
                    </div>

                    <div className="bg-surface border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-fg mb-3">Get Conversation</h3>
                      <div className="bg-gray-900 rounded-lg p-4 mb-4">
                        <pre className="text-gray-100 text-sm">
                          <code>{`GET /conversations/{conversation_id}

# Response
{
  "id": "conv_123",
  "business_id": "biz_123",
  "messages": [
    {
      "role": "customer",
      "content": "What are your hours?",
      "timestamp": "2024-01-01T12:00:00Z"
    },
    {
      "role": "assistant", 
      "content": "We're open Monday-Friday 9AM-5PM",
      "timestamp": "2024-01-01T12:00:01Z"
    }
  ]
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Business Profiles */}
                <section id="business-profiles" className="mb-12">
                  <h2 className="font-display text-2xl font-semibold text-fg mb-6">Business Profiles</h2>
                  
                  <div className="bg-surface border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-fg mb-3">Update Business Profile</h3>
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <pre className="text-gray-100 text-sm">
                        <code>{`PUT /business-profiles/{business_id}
{
  "name": "Acme Dental",
  "hours": "Monday-Friday 9AM-5PM",
  "services": ["General Dentistry", "Cleanings"],
  "pricing": {
    "cleaning": "$150",
    "checkup": "$100"
  },
  "contact": {
    "phone": "+1-555-0123",
    "email": "info@acmedental.com"
  }
}`}</code>
                      </pre>
                    </div>
                    <p className="text-sm text-muted">Updates your business profile to improve AI response accuracy.</p>
                  </div>
                </section>

                {/* Webhooks */}
                <section id="webhooks" className="mb-12">
                  <h2 className="font-display text-2xl font-semibold text-fg mb-6">Webhooks</h2>
                  
                  <div className="bg-surface border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-fg mb-3">Configure Webhook</h3>
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <pre className="text-gray-100 text-sm">
                        <code>{`POST /webhooks
{
  "url": "https://your-app.com/webhook",
  "events": ["conversation.created", "conversation.updated"],
  "secret": "your-webhook-secret"
}`}</code>
                      </pre>
                    </div>
                    <p className="text-sm text-muted">Set up webhooks to receive real-time notifications about conversations.</p>
                  </div>
                </section>

                {/* Rate Limits */}
                <section id="rate-limits" className="mb-12">
                  <h2 className="font-display text-2xl font-semibold text-fg mb-6">Rate Limits</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-surface border border-border rounded-lg p-6 text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-2">100</div>
                      <div className="text-sm text-muted">Requests per minute</div>
                    </div>
                    <div className="bg-surface border border-border rounded-lg p-6 text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-2">10,000</div>
                      <div className="text-sm text-muted">Requests per day</div>
                    </div>
                    <div className="bg-surface border border-border rounded-lg p-6 text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-2">1,000</div>
                      <div className="text-sm text-muted">Conversations per hour</div>
                    </div>
                  </div>
                </section>

                {/* SDKs */}
                <section id="sdks" className="mb-12">
                  <h2 className="font-display text-2xl font-semibold text-fg mb-6">SDKs & Libraries</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surface border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-fg mb-3">JavaScript/Node.js</h3>
                      <div className="bg-gray-900 rounded-lg p-4 mb-4">
                        <pre className="text-gray-100 text-sm">
                          <code>{`npm install @netia/sdk

import { NetiaClient } from '@netia/sdk';

const client = new NetiaClient('your-api-key');
const response = await client.conversations.create({
  business_id: 'biz_123',
  customer_message: 'What are your hours?'
});`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="bg-surface border border-border rounded-lg p-6">
                      <h3 className="font-semibold text-fg mb-3">Python</h3>
                      <div className="bg-gray-900 rounded-lg p-4 mb-4">
                        <pre className="text-gray-100 text-sm">
                          <code>{`pip install netia-sdk

from netia import NetiaClient

client = NetiaClient('your-api-key')
response = client.conversations.create(
    business_id='biz_123',
    customer_message='What are your hours?'
)`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="font-display text-2xl font-semibold text-fg mb-4">
              Ready to start building?
            </h2>
            <p className="text-muted mb-8">
              Get your API key and start integrating Netia into your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/dashboard"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors btn-enhanced"
              >
                Get API Key
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
      </main>
      <Footer />
    </div>
  )
}
