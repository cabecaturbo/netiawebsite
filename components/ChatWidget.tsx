'use client'

import { useMemo, useState } from 'react'

interface ChatWidgetProps {
  enabled?: boolean
}

export const ChatWidget = ({ enabled = true }: ChatWidgetProps) => {
  const [open, setOpen] = useState(false)

  if (!enabled) return null

  const token = process.env.NEXT_PUBLIC_CHAT_TOKEN
  const inbox = process.env.NEXT_PUBLIC_CHAT_INBOX_ID
  const title = process.env.NEXT_PUBLIC_CHAT_TITLE || 'Netia'
  const subtitle = process.env.NEXT_PUBLIC_CHAT_SUBTITLE || 'AI Powered Chatbot'
  const primaryColor = process.env.NEXT_PUBLIC_CHAT_PRIMARY_COLOR || '#3b82f6'
  const host = process.env.NEXT_PUBLIC_CHAT_HOST || 'https://app.netia.ai/chat'

  if (!token || !inbox) return null

  const iframeSrc = useMemo(() => {
    const params = new URLSearchParams({
      token,
      inbox,
      title,
      subtitle,
      primaryColor,
      newMessagePlaceholder: 'Start typing...',
      showAgentAvailability: '0',
      agentAvailableText: "We're online right now!",
      agentUnavailableText: "We're away at the moment.",
      requireEmailUpfront: '0',
      iconVariant: 'outlined',
      isBrandingHidden: 'false',
    })
    return `${host}?${params.toString()}`
  }, [token, inbox, title, subtitle, primaryColor, host])

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <button
        type="button"
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen(v => !v)}
        className="w-15 h-15 md:w-[60px] md:h-[60px] w-[56px] h-[56px] rounded-full bg-blue-500 text-white shadow-lg text-2xl leading-none grid place-items-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {open ? '✕' : '💬'}
      </button>

      {open && (
        <iframe
          title="Netia Chat"
          src={iframeSrc}
          className="fixed bottom-24 right-5 w-[90vw] max-w-[400px] h-[70vh] max-h-[600px] rounded-xl shadow-xl border-0"
        />
      )}
    </div>
  )
}


