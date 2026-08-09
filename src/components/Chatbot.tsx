import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send } from 'lucide-react'
import { SITE } from '@/lib/site'
import { cn } from '@/lib/utils'

type Msg = { role: 'bot' | 'user'; text: string }

const R = {
  greeting: {
    en: "Hello! I'm your legal assistant. How can I help you?",
    hi: 'नमस्ते! मैं आपकी कानूनी सहायक हूँ। मैं आपकी कैसे मदद कर सकता हूँ?',
  },
  location: {
    en: `Our office is located at: ${SITE.address}.`,
    hi: 'हमारा कार्यालय इस पते पर स्थित है: 6, कैलाश पार्क, कैलाशपुरम, साकीनाका मेट्रो स्टेशन के पास, साकीनाका, अंधेरी (पूर्व), मुंबई - 400 072.',
  },
  contact: {
    en: `You can call us at ${SITE.phone} or email us at ${SITE.email}`,
    hi: `आप हमें ${SITE.phone} पर कॉल कर सकते हैं या ${SITE.email} पर ईमेल कर सकते हैं।`,
  },
  whatsapp: {
    en: `Click here to chat with us on WhatsApp: ${SITE.whatsapp}`,
    hi: `व्हाट्सएप पर हमसे बात करने के लिए यहाँ क्लिक करें: ${SITE.whatsapp}`,
  },
  practice: {
    en: 'We handle property disputes, contractual & commercial disputes, family & matrimonial matters, co-operative housing society disputes, consumer protection, government & municipal disputes, litigation & enforcement, senior citizen tribunal matters, and arbitration/mediation.',
    hi: 'हम संपत्ति विवाद, अनुबंध एवं वाणिज्यिक विवाद, पारिवारिक एवं वैवाहिक मामले, सहकारी गृहनिर्माण संस्था विवाद, उपभोक्ता संरक्षण, सरकारी एवं नगरपालिका विवाद, मुकदमेबाज़ी एवं प्रवर्तन, वरिष्ठ नागरिक न्यायाधिकरण मामले, तथा मध्यस्थता के मामले देखते हैं।',
  },
  hours: {
    en: `Our working hours are ${SITE.hours}.`,
    hi: 'हमारे कार्य समय: सोमवार से शनिवार, सुबह 10:00 से रात 9:00 बजे तक।',
  },
  fallback: {
    en: "I'm not sure about that. Please contact our office directly for more details.",
    hi: 'मुझे इसके बारे में जानकारी नहीं है। कृपया अधिक जानकारी के लिए सीधे हमारे कार्यालय से संपर्क करें।',
  },
}

function reply(input: string) {
  const t = input.toLowerCase()
  const hi = /[\u0900-\u097F]/.test(input)
  const pick = (k: keyof typeof R) => (hi ? R[k].hi : R[k].en)

  if (/hello|hi\b|hey|namaste|नमस्ते|हाय/.test(t)) return pick('greeting')
  if (/address|location|office|where|पता|कार्यालय|कहाँ/.test(t)) return pick('location')
  if (/whatsapp|व्हाट्सएप/.test(t)) return pick('whatsapp')
  if (/phone|call|email|contact|number|फोन|कॉल|ईमेल|संपर्क/.test(t)) return pick('contact')
  if (/practice|area|case|service|property|divorce|मामल|सेवा|संपत्ति|तलाक/.test(t)) return pick('practice')
  if (/time|hour|open|समय|खुल/.test(t)) return pick('hours')
  return pick('fallback')
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'bot', text: `${R.greeting.en}\n${R.greeting.hi}` },
  ])
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = (e: React.FormEvent) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    setInput('')
    setMessages((m) => [...m, { role: 'user', text }, { role: 'bot', text: reply(text) }])
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open legal assistant chat"
        className="fixed bottom-24 right-6 z-50 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-semibold uppercase tracking-widest text-black shadow-lg hover:bg-gray-200 transition-colors"
      >
        {open ? <X className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
        <span>{open ? 'Close' : 'Chat'}</span>
      </button>

      <div
        className={cn(
          'fixed bottom-44 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm rounded-xl border border-gray-800 bg-[#0d0d0d] shadow-2xl transition-all duration-300',
          open ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
        )}
      >
        <div className="border-b border-gray-800 px-4 py-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-white">Legal Assistant</p>
          <p className="text-xs text-gray-500">English / हिंदी</p>
        </div>

        <div className="max-h-80 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn(
                'max-w-[85%] whitespace-pre-line rounded-xl px-3 py-2 text-sm leading-relaxed',
                m.role === 'user'
                  ? 'ml-auto bg-white text-black'
                  : 'bg-transparent text-gray-300'
              )}
            >
              {m.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <form onSubmit={send} className="flex items-center gap-2 border-t border-gray-800 p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question…"
            className="flex-1 rounded-full border border-gray-800 bg-transparent px-4 py-2 text-sm text-white placeholder:text-gray-600 focus:border-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black hover:bg-gray-200"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </>
  )
}
