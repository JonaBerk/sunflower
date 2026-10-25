import { useEffect, useMemo, useRef, useState } from 'react'

/*
 * Path variant B · the flower as a timeline.
 * Every station is one ring of the sunflower: studies in the turquoise core, today at the
 * outer edge. Ring widths follow the years spent there. Scrolling through the list opens
 * the flower ring by ring and highlights the current station.
 */

const GOLDEN_ANGLE = (137.508 * Math.PI) / 180
const clamp01 = (x) => Math.min(1, Math.max(0, x))
// years per station, oldest first: studies, ReqPOOL, Kapsch, WeCon
const WEIGHTS = [3, 4, 1, 2.5]

export default function PathFlower({ stations }) {
  const list = [...stations].reverse() // oldest first
  const root = useRef(null)
  const canvas = useRef(null)
  const [active, setActive] = useState(0)
  const bloomRef = useRef(0.2)

  // outer edge (0 to 1) of each ring
  const edges = useMemo(() => {
    const sum = WEIGHTS.reduce((a, b) => a + b, 0)
    let acc = 0
    return WEIGHTS.map((w) => (acc += w) / sum)
  }, [])

  const seeds = useMemo(() => {
    const count = 520
    const spacing = 7
    const out = []
    for (let i = 1; i <= count; i++) {
      const r = spacing * Math.sqrt(i)
      const a = i * GOLDEN_ANGLE
      const t = i / count
      out.push({ x: r * Math.cos(a), y: r * Math.sin(a), r: 3.4 * (0.55 + 0.45 * t), t, ring: edges.findIndex((e) => t <= e) })
    }
    return { list: out, extent: spacing * Math.sqrt(count) + 4 }
  }, [edges])

  useEffect(() => {
    const el = root.current
    const c = canvas.current
    if (!el || !c) return
    const ctx = c.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    let shown = reduce ? 1 : 0.15 // animated bloom value
    let target = shown
    let current = 0

    const draw = () => {
      const size = c.clientWidth
      if (!size) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const px = Math.round(size * dpr)
      if (c.width !== px) {
        c.width = px
        c.height = px
      }
      const style = getComputedStyle(c)
      const turquoise = style.getPropertyValue('--turquoise').trim()
      const sun = style.getPropertyValue('--sun').trim()
      const { list: seedList, extent } = seeds
      const scale = px / (extent * 2)
      ctx.setTransform(scale, 0, 0, scale, px / 2, px / 2)
      ctx.clearRect(-extent, -extent, extent * 2, extent * 2)
      for (const s of seedList) {
        const show = clamp01((shown - s.t) * 28)
        if (show <= 0) continue
        // current station bright, earlier ones calmer
        const isCurrent = s.ring === current
        ctx.globalAlpha = show * (isCurrent ? 1 : 0.4)
        ctx.fillStyle = s.ring === 0 ? turquoise : sun
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r * (0.25 + 0.75 * show), 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const animate = () => {
      frame = 0
      shown += (target - shown) * 0.12
      if (Math.abs(target - shown) < 0.001) shown = target
      draw()
      if (shown !== target) frame = requestAnimationFrame(animate)
    }

    const onScroll = () => {
      const steps = [...el.querySelectorAll('.flowerpath__step')]
      const mid = window.innerHeight * 0.55
      let idx = 0
      steps.forEach((s, i) => {
        if (s.getBoundingClientRect().top < mid) idx = i
      })
      const first = steps[0]?.getBoundingClientRect().top ?? 0
      const started = first < window.innerHeight * 0.85
      current = idx
      setActive(idx)
      target = reduce ? 1 : started ? edges[idx] + 0.02 : 0.15
      if (!frame) frame = requestAnimationFrame(animate)
    }

    onScroll()
    draw()
    const ro = new ResizeObserver(draw)
    ro.observe(c)
    const mo = new MutationObserver(draw)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      ro.disconnect()
      mo.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [seeds, edges])

  return (
    <div ref={root} className="flowerpath">
      <div className="flowerpath__art">
        <canvas ref={canvas} className="flowerpath__canvas" aria-hidden="true" />
        <p className="flowerpath__legend label">Core: studies · outer ring: today</p>
      </div>
      <ol className="flowerpath__list">
        {list.map((s, i) => (
          <li key={s.org} className={`flowerpath__step ${i === active ? 'is-active' : ''} ${i < active ? 'is-past' : ''}`}>
            <span className={`flowerpath__swatch ${i === 0 ? 'is-core' : ''}`} aria-hidden="true" />
            <span className="flowerpath__years">{s.years}</span>
            <span className="flowerpath__role">{s.role}</span>
            <span className="muted">{s.org}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
