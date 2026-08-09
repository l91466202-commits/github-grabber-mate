import { motion } from 'framer-motion'

const reasons = [
  { title: '13+ Years of Experience', desc: 'Extensive courtroom and advisory expertise across Mumbai.' },
  { title: 'Personalized Attention', desc: 'A client-first approach on every single matter.' },
  { title: 'Strategic Legal Advice', desc: 'Practical solutions aimed at real-world outcomes.' },
  { title: 'Proven Track Record', desc: 'A consistently high success rate across practice areas.' },
  { title: 'Transparent & Affordable', desc: 'Clear fees agreed upfront, with no surprises.' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function WhyChooseUs() {
  return (
    <section id="why" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Why Us</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          WHY CLIENTS<br />TRUST US
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="rounded-xl border border-gray-800 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-gray-600"
            >
              <span className="text-xs text-gray-600 tracking-widest">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold uppercase tracking-wide text-white">{r.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
