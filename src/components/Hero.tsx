import { motion } from 'framer-motion'
import portrait from '@/assets/tariq-portrait.jpg'
import { SITE } from '@/lib/site'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-end">
      <div className="absolute inset-0">
        <img
          src={portrait}
          alt="Adv. Tariq A.A. Chaudhary, Advocate, High Court, Mumbai"
          className="w-full h-full object-cover object-top grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 pb-20 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl"
        >
          <h1 className="font-display leading-none tracking-tighter text-[13vw] sm:text-[10vw] md:text-hero">
            <span className="block text-white">TARIQ A.A.</span>
            <span className="block text-white">CHAUDHARY</span>
          </h1>
          <p className="mt-4 text-xs sm:text-base text-gray-300 tracking-wider uppercase leading-relaxed break-words">
            Advocate — High Court, Mumbai · {SITE.qualifications}
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-sm sm:text-base text-white/80 max-w-xl leading-relaxed"
          >
            13+ years of dedicated legal service. Trusted representation for civil, criminal,
            family, and property law.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[SITE.experience + ' Experience', 'High Court, Mumbai', '100+ Cases Won'].map((b) => (
              <span
                key={b}
                className="rounded-full border border-gray-700 px-4 py-2 text-xs tracking-widest uppercase text-gray-300"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-white text-black px-6 py-3 text-sm font-semibold uppercase tracking-widest text-center hover:bg-gray-200 transition-colors"
            >
              Get a Free Consultation
            </a>
            <a
              href={SITE.phoneHref}
              className="rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-center text-white hover:bg-white/10 transition-colors"
            >
              Call {SITE.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
