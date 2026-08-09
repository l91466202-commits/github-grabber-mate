import { motion } from 'framer-motion'

const areas = [
  { title: 'Property Disputes', desc: 'Ownership claims, partition suits, possession, injunction, landlord-tenant, eviction.' },
  { title: 'Contractual & Commercial Disputes', desc: 'Recovery suits, breach of contract, specific performance.' },
  { title: 'Family & Matrimonial Matters', desc: 'Divorce, maintenance, custody, succession, probate, wills.' },
  { title: 'Co-operative Housing Society Disputes', desc: 'Society disputes and redevelopment matters.' },
  { title: 'Consumer Protection', desc: 'Consumer complaints and compensation claims.' },
  { title: 'Government & Municipal Disputes', desc: 'MHADA, MCGM and government authority disputes.' },
  { title: 'Litigation & Enforcement', desc: 'Declaratory suits, injunctions, execution of decrees.' },
  { title: 'Senior Citizen Tribunal Matters', desc: 'Under the Maintenance and Welfare Act, 2007.' },
  { title: 'Alternative Dispute Resolution', desc: 'Arbitration, conciliation and mediation.' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function PracticeAreas() {
  return (
    <section id="practice" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Expertise</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-8"
        >
          AREAS OF PRACTICE
        </motion.h2>

        <motion.p {...fadeInUp} className="max-w-3xl text-base lg:text-lg text-gray-400 mb-12 lg:mb-20">
          Adv. Tariq A.A. Chaudhary is engaged in Civil, Property, Commercial, Family and
          Constitutional litigation, representing clients before Civil Courts, Tribunals,
          quasi-judicial authorities and government departments.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="rounded-xl border border-gray-800 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-gray-600 hover:shadow-2xl"
            >
              <h3 className="text-lg font-semibold uppercase tracking-wide text-white">{a.title}</h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">{a.desc}</p>
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeInUp} className="mt-16 rounded-xl border border-gray-800 p-8">
          <h3 className="text-sm text-gray-500 tracking-widest uppercase mb-4">Professional Focus</h3>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-4xl">
            Providing strategic legal advice, drafting, documentation, litigation management,
            dispute resolution and effective representation to protect and enforce the legal and
            proprietary rights of individuals, businesses, societies and institutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
