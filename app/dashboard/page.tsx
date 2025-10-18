'use client'

import { useState } from 'react'
import { Header } from "@/components/Header"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = {
    conversations: 23,
    limit: 50,
    scheduledAppointments: 4,
    averageResponseTime: '2.3s'
  }

  const recentConversations = [
    { id: 1, customer: 'Sarah Johnson', message: 'What are your business hours?', time: '2 minutes ago', status: 'completed' },
    { id: 2, customer: 'Mike Chen', message: 'How much does a consultation cost?', time: '15 minutes ago', status: 'completed' },
    { id: 3, customer: 'Emily Davis', message: 'Can I schedule for next Tuesday?', time: '1 hour ago', status: 'scheduled' },
    { id: 4, customer: 'John Smith', message: 'Do you offer weekend appointments?', time: '2 hours ago', status: 'completed' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl font-semibold text-fg mb-2">
              Welcome to your Netia Dashboard
            </h1>
            <p className="text-muted">
              Monitor your AI customer service performance and manage your settings.
            </p>
          </div>

          {/* Plan Status */}
          <div className="bg-white border border-border rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-fg">Starter Plan</h3>
                <p className="text-sm text-muted">50 conversations/month</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-fg">$0</div>
                <div className="text-sm text-muted">Free forever</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-muted mb-1">
                <span>Conversations this month</span>
                <span>{stats.conversations}/{stats.limit}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary-500 h-2 rounded-full" 
                  style={{ width: `${(stats.conversations / stats.limit) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted">Total Conversations</p>
                  <p className="text-2xl font-bold text-fg">{stats.conversations}</p>
                </div>
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted">Scheduled Appointments</p>
                  <p className="text-2xl font-bold text-fg">{stats.scheduledAppointments}</p>
                </div>
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted">Avg Response Time</p>
                  <p className="text-2xl font-bold text-fg">{stats.averageResponseTime}</p>
                </div>
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white border border-border rounded-lg">
            <div className="border-b border-border">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'conversations', label: 'Conversations' },
                  { id: 'settings', label: 'Settings' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-muted hover:text-fg hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <h3 className="font-semibold text-fg">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentConversations.map((conversation) => (
                      <div key={conversation.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-medium text-fg">{conversation.customer}</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              conversation.status === 'completed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {conversation.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted">{conversation.message}</p>
                        </div>
                        <span className="text-xs text-muted">{conversation.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'conversations' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-fg">All Conversations</h3>
                    <button className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm hover:bg-primary-600 transition-colors">
                      Export Data
                    </button>
                  </div>
                  <div className="text-center py-12">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    <h4 className="font-medium text-fg mb-2">No conversations yet</h4>
                    <p className="text-muted">Start by adding Netia to your website to begin collecting conversations.</p>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <h3 className="font-semibold text-fg">Account Settings</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-fg mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Your Business Name"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-fg mb-2">
                        Business Hours
                      </label>
                      <input
                        type="text"
                        defaultValue="Mon-Fri 9am-6pm, Sat 10am-4pm"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-fg mb-2">
                        Website URL
                      </label>
                      <input
                        type="url"
                        defaultValue="https://yourwebsite.com"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <button className="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors">
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="font-semibold text-fg mb-4">Add to Your Website</h3>
              <p className="text-muted mb-4">
                Get the integration code to add Netia to your website.
              </p>
              <a
                href="/integrate"
                className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg text-sm hover:bg-primary-600 transition-colors"
              >
                Get Integration Code
              </a>
            </div>
            
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="font-semibold text-fg mb-4">Upgrade Your Plan</h3>
              <p className="text-muted mb-4">
                Need more conversations? Upgrade to Pro or Business for unlimited usage.
              </p>
              <a
                href="/pricing"
                className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg text-sm hover:bg-primary-600 transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
