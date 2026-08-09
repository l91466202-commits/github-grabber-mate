import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Our society was stuck in a redevelopment dispute for years. Adv. Chaudhary handled it with clarity and patience, and we finally got a fair resolution.',
    name: 'Rakesh Menon',
    location: 'Andheri, Mumbai',
  },
  {
    quote:
      'He explained every step of my property matter in simple language and never made me chase him for updates. Truly professional.',
    name: 'Sana Shaikh',
    location: 'Kurla, Mumbai',
  },
  {
    quote:
      'A difficult family matter was managed with sensitivity and strong preparation. The outcome was better than we expected.',
    name: 'Prakash Joshi',
    location: 'Powai, Mumbai',
  },
  {
    quote:
      'Transparent fees, quick responses and solid courtroom representation for our recovery suit. Highly recommended.',
    name: 'Imran Qureshi',
    location: 'Sakinaka, Mumbai',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Clients</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          WHAT OUR<br />CLIENTS SAY
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="rounded-xl border border-gray-800 p-8 transition-all duration-300 hover:scale-[1.02] hover:border-gray-600"
            >
              <blockquote className="text-base lg:text-lg text-gray-300 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-xs text-gray-500 tracking-widest uppercase">
                {t.name} — {t.location}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
