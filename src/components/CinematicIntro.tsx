import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import portrait from '@/assets/tariq-portrait.jpg'

const SPARKS = Array.from({ length: 18 }, (_, i) => {
  const angle = (i / 18) * Math.PI * 2
  return {
    id: i,
    x: Math.cos(angle) * (120 + (i % 5) * 45),
    y: Math.sin(angle) * (100 + (i % 4) * 40),
    delay: 1.05 + (i % 6) * 0.015,
    size: 2 + (i % 3),
  }
})

export function CinematicIntro() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => setDone(true), reduce ? 300 : 4300)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (done) document.body.style.overflow = ''
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[10000] transform-gpu overflow-hidden bg-black will-change-[opacity]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden="true"
        >
          {/* Fireball travelling from corner to centre */}
          <motion.div
            className="absolute left-1/2 top-1/2"
            initial={{ x: '-62vw', y: '-52vh', scale: 0.18, opacity: 0 }}
            animate={{
              x: ['-62vw', '-18vw', '0vw', '0vw'],
              y: ['-52vh', '-16vh', '0vh', '0vh'],
              scale: [0.18, 0.5, 2.6, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: 1.25, times: [0, 0.55, 0.85, 1], ease: [0.16, 0.8, 0.3, 1] }}
          >
            <div
              className="h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[2px]"
              style={{
                background:
                  'radial-gradient(circle at 40% 40%, #fffdf5 0%, #ffe6a6 28%, #f5a623 55%, #b45309 75%, rgba(0,0,0,0) 78%)',
                boxShadow: '0 0 60px 20px rgba(245,166,35,0.45), 0 0 160px 60px rgba(180,83,9,0.25)',
              }}
            />
            {/* comet trail */}
            <div
              className="absolute left-0 top-0 h-6 w-56 origin-left -translate-y-1/2 rotate-[38deg] rounded-full blur-md"
              style={{
                background:
                  'linear-gradient(270deg, rgba(255,214,140,0.75), rgba(180,83,9,0.15), rgba(0,0,0,0))',
              }}
            />
          </motion.div>

          {/* Impact flash */}
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.85, 0] }}
            transition={{ duration: 0.45, delay: 1.0, ease: 'easeOut' }}
          />

          {/* Shockwave rings */}
          {[0, 0.09, 0.2].map((d, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full border"
              style={{
                borderColor: i === 0 ? 'rgba(255,230,166,0.9)' : 'rgba(255,255,255,0.35)',
                borderWidth: i === 0 ? 2 : 1,
              }}
              initial={{ width: 0, height: 0, x: '-50%', y: '-50%', opacity: 0 }}
              animate={{ width: [0, 900], height: [0, 900], opacity: [0.9, 0] }}
              transition={{ duration: 1.1, delay: 1.02 + d, ease: 'easeOut' }}
            />
          ))}

          {/* Sparks */}
          {SPARKS.map((s) => (
            <motion.span
              key={s.id}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: s.size,
                height: s.size,
                background: '#ffe6a6',
                boxShadow: '0 0 8px 2px rgba(255,214,140,0.8)',
              }}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ x: s.x, y: s.y, opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, delay: s.delay, ease: 'easeOut' }}
            />
          ))}

          {/* Smoke haze */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(120,90,50,0.35), rgba(0,0,0,0) 70%)' }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.4, 1.6, 2.1] }}
            transition={{ duration: 2.4, delay: 1.05, ease: 'easeOut' }}
          />

          {/* Name reveal */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <motion.h2
              className="font-display text-[11vw] leading-none tracking-tight text-white sm:text-6xl md:text-7xl"
              style={{ textShadow: '0 0 28px rgba(255,214,140,0.35), 0 0 80px rgba(255,255,255,0.12)' }}
              initial={{ opacity: 0, scale: 1.25, filter: 'blur(14px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
            >
              Advocate Tariq Chaudhary
            </motion.h2>

            <motion.div
              className="mt-4 h-px w-0 bg-gradient-to-r from-transparent via-[#ffe6a6] to-transparent"
              animate={{ width: ['0%', '70%'] }}
              transition={{ duration: 0.9, delay: 1.6, ease: 'easeOut' }}
            />

            <motion.p
              className="mt-4 text-[11px] uppercase tracking-[0.35em] text-white/70 sm:text-xs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            >
              High Court, Mumbai
            </motion.p>
          </div>

          {/* Portrait slides down */}
          <motion.div
            className="absolute inset-x-0 top-0 flex justify-center"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 1.2, delay: 3.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-[70vh] w-full max-w-2xl">
              <img
                src={portrait}
                alt=""
                className="h-full w-full object-cover object-top grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
