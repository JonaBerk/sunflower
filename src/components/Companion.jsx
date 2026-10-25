import { useEffect, useRef } from 'react'
import Spiral from './Spiral.jsx'

/*
 * Companion flower: keeps the sunflower present after the hero has scrolled away.
 * Variants (chosen with ?v= in the address, see App.jsx):
 *   a  Sits in the left column next to the section labels and grows section by section,
 *      fully open at Contact.
 *   c  The hero flower shrinks and glides into the logo while the hero scrolls away.
 *   d  Appears small at the right edge and grows so large that only part of it reaches
 *      into the page.
 */

const clamp01 = (x) => Math.min(1, Math.max(0, x))
const ease = (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2)

export default function Companion({ variant }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0

    const update = () => {
      frame = 0
      const hero = document.querySelector('.hero')
      const heroH = hero ? hero.offsetHeight : window.innerHeight
      const y = window.scrollY
      const vw = window.innerWidth
      const vh = window.innerHeight
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - vh)
      // progress through the page after the hero
      const after = clamp01((y - heroH * 0.5) / Math.max(1, maxScroll - heroH * 0.5))

      if (variant === 'a') {
        el.style.opacity = String(clamp01((y - heroH * 0.45) / (heroH * 0.3)))
        el.style.setProperty('--bloom', (0.12 + 0.88 * (reduce ? 1 : after)).toFixed(4))
      }

      if (variant === 'd') {
        const p = reduce ? 1 : after
        const grow = clamp01((y - heroH * 0.4) / (heroH * 0.4))
        // the visible part (55 % of the radius) stays within the right page margin plus a little
        const margin = Math.max(24, (vw - 1120 - 48) / 2)
        const Rmax = Math.max(120, Math.min(vh * 0.62, (margin + 70) / 0.55))
        const R = 60 + p * (Rmax - 60) // radius of the full flower
        const cx = vw + R * 0.45 // centre beyond the edge, only a part reaches in
        const cy = vh * 0.55
        el.style.width = `${2 * R}px`
        el.style.transform = `translate(${cx - R}px, ${cy - R}px)`
        el.style.opacity = String(grow)
        el.style.setProperty('--bloom', (0.35 + 0.65 * p).toFixed(4))
      }

      if (variant === 'c') {
        const heroSpiral = document.querySelector('.hero__spiral')
        const logo = document.querySelector('.brand__mark')
        if (heroSpiral && logo) {
          const a = heroSpiral.getBoundingClientRect()
          const b = logo.getBoundingClientRect()
          const p = reduce ? 0 : ease(clamp01(y / (heroH * 0.85)))
          const w = a.width + (b.width / 0.79 - a.width) * p
          const cx = a.left + a.width / 2 + (b.left + b.width / 2 - (a.left + a.width / 2)) * p
          const cy = a.top + a.height / 2 + (b.top + b.height / 2 - (a.top + a.height / 2)) * p
          el.style.width = `${w}px`
          el.style.transform = `translate(${cx - w / 2}px, ${cy - w / 2}px)`
          el.style.opacity = String(1 - clamp01((p - 0.86) / 0.14))
          const heroBloom = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hero-bloom')) || 0.62
          el.style.setProperty('--bloom', (heroBloom * (1 - p) + 0.75 * p).toFixed(4))
        }
      }
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    // keep following the hero's intro animation for its first seconds
    const start = performance.now()
    const intro = () => {
      update()
      if (performance.now() - start < 1600) frame = requestAnimationFrame(intro)
      else frame = 0
    }
    frame = requestAnimationFrame(intro)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [variant])

  if (variant === 'a') {
    return (
      <div className="companion companion--a" aria-hidden="true">
        <div className="wrap companion__wrap">
          <div ref={ref} className="companion__flower">
            <Spiral count={420} spacing={6} seed={3.2} core={0.14} bloom />
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'c' || variant === 'd') {
    return (
      <div ref={ref} className={`companion companion--${variant}`} aria-hidden="true">
        <Spiral count={840} spacing={9} seed={4.4} core={0.12} bloom />
      </div>
    )
  }

  return null
}
