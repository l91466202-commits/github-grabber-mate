import { useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'
import { SITE } from '@/lib/site'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'practice', label: 'Practice Areas' },
  { id: 'why', label: 'Why Us' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export function Navigation() {
  const activeSection = useActiveSection()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <button
          onClick={() => scrollToSection('home')}
          className="font-display text-xl md:text-2xl tracking-tight text-white"
        >
          {SITE.shortName}
        </button>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'text-xs font-medium uppercase tracking-widest text-gray-400 transition-colors hover:text-white',
                activeSection === item.id && 'text-white'
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden sm:inline-flex rounded-lg bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-black hover:bg-gray-200 transition-colors"
          >
            Call Now · {SITE.phone}
          </a>
          <button
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="lg:hidden text-xs font-medium uppercase tracking-widest text-white"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-white/10 px-4 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-xs font-medium uppercase tracking-widest text-gray-300 hover:text-white"
            >
              {item.label}
            </button>
          ))}
          <a
            href={SITE.phoneHref}
            className="mt-2 rounded-lg bg-white px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-black"
          >
            Call {SITE.phone}
          </a>
        </nav>
      )}
    </header>
  )
}
