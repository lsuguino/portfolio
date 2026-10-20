import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { author } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        <a
          href="#hero"
          className="rounded text-sm font-semibold uppercase tracking-widest text-text outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {author.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 sm:flex">
          <li>
            <a
              href="#projetos"
              className="rounded text-sm font-medium text-text-muted transition-colors hover:text-text focus-visible:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              className="rounded text-sm font-medium text-text-muted transition-colors hover:text-text focus-visible:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Sobre mim
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="rounded p-1 text-text sm:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <ul
          id="mobile-menu"
          className="flex flex-col gap-1 border-t border-white/5 px-6 py-3 sm:hidden"
        >
          <li>
            <a
              href="#projetos"
              onClick={close}
              className="block rounded py-2 text-base font-medium text-text-muted transition-colors hover:text-text focus-visible:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              onClick={close}
              className="block rounded py-2 text-base font-medium text-text-muted transition-colors hover:text-text focus-visible:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Sobre mim
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
