import { useEffect, useMemo, useRef } from 'react'

const GOLDEN_ANGLE = (137.508 * Math.PI) / 180

/**
 * Sunflower spiral (phyllotaxis). The core seeds are turquoise, the rest sun yellow.
 *
 * Modes:
 * - `bloom`:  seeds are shown up to the CSS variable --bloom (0 to 1, core first).
 *             The page drives --bloom, so the flower opens on load and keeps opening
 *             while scrolling, and closes again when scrolling back.
 *             Drawn on a canvas: hundreds of individually animated SVG circles crash
 *             Safari on iPhone, one canvas is cheap everywhere.
 * - `onView`: seeds grow once from the core when the surrounding section becomes visible.
 */
export default function Spiral({
  count = 400,
  spacing = 10,
  seed = 4,
  core = 0.25,
  bloom = false,
  onView = false,
  className = '',
  title,
}) {
  const seeds = useMemo(() => {
    const list = []
    for (let i = 1; i <= count; i++) {
      const r = spacing * Math.sqrt(i)
      const a = i * GOLDEN_ANGLE
      list.push({
        x: r * Math.cos(a),
        y: r * Math.sin(a),
        r: seed * (0.55 + 0.45 * (i / count)),
        core: i <= count * core,
        t: i / count,
      })
    }
    return list
  }, [count, spacing, seed, core])

  const extent = spacing * Math.sqrt(count) + seed

  if (bloom) {
    return <BloomCanvas seeds={seeds} extent={extent} className={className} title={title} />
  }

  const box = `${-extent} ${-extent} ${extent * 2} ${extent * 2}`

  return (
    <svg
      viewBox={box}
      className={`spiral ${onView ? 'spiral--onview' : ''} ${className}`}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      aria-label={title}
    >
      {seeds.map((s, i) => (
        <circle
          key={i}
          cx={s.x.toFixed(2)}
          cy={s.y.toFixed(2)}
          r={s.r.toFixed(2)}
          fill={s.core ? 'var(--turquoise)' : 'var(--sun)'}
          style={onView ? { '--t': s.t.toFixed(4) } : undefined}
        />
      ))}
    </svg>
  )
}

function BloomCanvas({ seeds, extent, className, title }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let last = ''

    const draw = (force) => {
      const style = getComputedStyle(canvas)
      const bloom = parseFloat(style.getPropertyValue('--bloom')) || 1
      const coreColor = style.getPropertyValue('--turquoise').trim() || '#2bb3a3'
      const sunColor = style.getPropertyValue('--sun').trim() || '#f2c230'
      const size = canvas.clientWidth
      if (!size) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const px = Math.round(size * dpr)
      const key = `${bloom.toFixed(4)}|${px}|${coreColor}|${sunColor}`
      if (!force && key === last) return
      last = key

      if (canvas.width !== px) {
        canvas.width = px
        canvas.height = px
      }
      const scale = px / (extent * 2)
      ctx.setTransform(scale, 0, 0, scale, px / 2, px / 2)
      ctx.clearRect(-extent, -extent, extent * 2, extent * 2)

      for (const s of seeds) {
        // same curve as the former CSS: fade and scale in just beyond the edge
        const show = Math.min(1, Math.max(0, (bloom - s.t) * 28))
        if (show <= 0) continue
        ctx.globalAlpha = show
        ctx.fillStyle = s.core ? coreColor : sunColor
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r * (0.25 + 0.75 * show), 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const onBloom = () => draw(false)
    window.addEventListener('bloom', onBloom)
    const resize = new ResizeObserver(() => draw(true))
    resize.observe(canvas)
    // redraw when the theme changes the colours
    const theme = new MutationObserver(() => draw(true))
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] })
    draw(true)

    return () => {
      window.removeEventListener('bloom', onBloom)
      resize.disconnect()
      theme.disconnect()
    }
  }, [seeds, extent])

  return (
    <canvas
      ref={ref}
      className={`spiral spiral--bloom ${className}`}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      aria-label={title}
    />
  )
}
