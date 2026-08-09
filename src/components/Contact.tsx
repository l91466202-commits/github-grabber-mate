import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { SITE } from '@/lib/site'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

const inputClass =
  'w-full rounded-xl border border-gray-800 bg-transparent px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-gray-500 focus:outline-none'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0A%0A${form.message}`
    window.location.href = `${SITE.emailHref}?subject=${encodeURIComponent(
      form.subject || 'Consultation Request'
    )}&body=${body}`
    toast.success('Opening your email app to send the enquiry.')
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Contact</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-4"
        >
          Get in touch
        </motion.h2>
        <motion.p {...fadeInUp} className="text-sm text-gray-500 tracking-widest uppercase mb-12">
          Schedule a consultation today.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.form {...fadeInUp} onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              className={inputClass}
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              type="email"
              className={inputClass}
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className={inputClass}
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              className={inputClass}
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
            <textarea
              required
              rows={5}
              className={inputClass}
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-black hover:bg-gray-200 transition-colors"
              >
                Send Enquiry
              </button>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white text-center hover:bg-white/10 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.form>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="space-y-8">
            <div className="rounded-xl border border-gray-800 p-6 space-y-4">
              <div>
                <p className="text-xs text-gray-500 tracking-widest uppercase">Phone</p>
                <a href={SITE.phoneHref} className="text-lg text-gray-200 hover:text-white">
                  {SITE.phone}
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 tracking-widest uppercase">Email</p>
                <a href={SITE.emailHref} className="text-base text-gray-200 hover:text-white break-all">
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 tracking-widest uppercase">Office</p>
                <p className="text-sm text-gray-300">{SITE.address}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 tracking-widest uppercase">Working Hours</p>
                <p className="text-sm text-gray-300">{SITE.hours}</p>
              </div>
            </div>

            <iframe
              title="Office location map"
              className="w-full h-64 rounded-xl border border-gray-800 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Sakinaka%20Metro%20Station%2C%20Andheri%20East%2C%20Mumbai%20400072&output=embed"
            />
          </motion.div>
        </div>

        <motion.footer
          {...fadeInUp}
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-900 space-y-6"
        >
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <p className="font-display text-2xl text-white">{SITE.shortName}</p>
              <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">{SITE.tagline}</p>
            </div>
            <nav className="flex flex-wrap gap-6 text-xs tracking-widest uppercase text-gray-400">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#practice" className="hover:text-white">Practice Areas</a>
              <a href="#contact" className="hover:text-white">Contact</a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp
              </a>
            </nav>
          </div>
          <p className="text-xs text-gray-600">
            © 2026 Adv. Tariq Chaudhary. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            This website is for informational purposes only and does not constitute legal advice.
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
