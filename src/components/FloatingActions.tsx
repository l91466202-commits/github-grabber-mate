import { useState } from 'react'
import { SITE } from '@/lib/site'
import { Phone, MessageCircle, MessageSquare, X } from 'lucide-react'
import { Chatbot } from '@/components/Chatbot'

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          onClick={() => setChatOpen((o) => !o)}
          aria-label="Open legal assistant chat"
          className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-semibold uppercase tracking-widest text-black shadow-lg hover:bg-gray-200 transition-colors"
        >
          {chatOpen ? <X className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
          <span className="hidden sm:inline">{chatOpen ? 'Close' : 'Chat'}</span>
        </button>
        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-semibold uppercase tracking-widest text-black shadow-lg hover:bg-gray-200 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call</span>
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center gap-2 rounded-xl border border-gray-600 bg-black/70 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white shadow-lg hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>

      <Chatbot open={chatOpen} setOpen={setChatOpen} />
    </>
  )
}
