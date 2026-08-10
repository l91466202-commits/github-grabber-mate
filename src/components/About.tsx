import { motion } from 'framer-motion'
import portrait from '@/assets/tariq-portrait.jpg'
import { SITE } from '@/lib/site'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

const details = [
  { label: 'Full Name', value: SITE.name },
  { label: 'Qualifications', value: SITE.qualifications },
  { label: 'Designation', value: 'Advocate, High Court, Mumbai' },
  { label: 'Experience', value: SITE.experience },
  { label: 'Phone', value: SITE.phone },
  { label: 'Email', value: SITE.email },
  { label: 'Office', value: SITE.address },
  { label: 'Working Hours', value: SITE.hours },
]

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          ABOUT ADV.<br />TARIQ CHAUDHARY
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src={portrait}
              alt="Portrait of Adv. Tariq A.A. Chaudhary"
              className="w-full h-auto rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              Advocate — High Court, Mumbai
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              With over 13 years at the bar, Adv. Tariq A.A. Chaudhary represents individuals,
              businesses, housing societies, and institutions before the High Court, Civil Courts,
              Tribunals, quasi-judicial authorities, and government departments in Mumbai. His
              practice is built on meticulous preparation, clear counsel, and an unwavering
              commitment to protecting his clients' legal and proprietary rights.
            </p>
            <p className="mt-6 text-base lg:text-lg text-gray-400 leading-relaxed">
              Every matter receives personal attention — from the first consultation through
              drafting, litigation management, and enforcement — with transparent fees and
              practical, strategy-driven advice.
            </p>

            <dl className="mt-10 divide-y divide-gray-800 border-t border-gray-800">
              {details.map((d) => (
                <div key={d.label} className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                  <dt className="text-xs text-gray-500 tracking-widest uppercase">{d.label}</dt>
                  <dd className="text-sm text-gray-300 break-words sm:col-span-2">{d.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
