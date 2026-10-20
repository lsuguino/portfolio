import { author } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-text-muted">
        © {year} {author.name}
      </div>
    </footer>
  )
}
