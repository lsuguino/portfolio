import { motion, useReducedMotion } from 'framer-motion'
import { author } from '../data/content'

export default function Hero() {
  const prefersReduced = useReducedMotion()

  const variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: 'easeOut' }}
        variants={variants}
        className="max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-4 tracking-tight">
          {author.name}
        </h1>
        <p className="text-lg sm:text-xl font-medium text-accent mb-6 uppercase tracking-widest">
          {author.title}
        </p>
        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          {author.tagline}
        </p>
      </motion.div>
    </section>
  )
}
