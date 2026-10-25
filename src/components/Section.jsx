import { useEffect, useRef } from 'react'

/** Section with hairline, label column (number and name) and content column. */
export default function Section({ id, number, label, title, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      el?.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id={id} ref={ref} className="section reveal" aria-labelledby={`${id}-title`}>
      <div className="wrap section__grid">
        <p className="label">
          {number} · {label}
        </p>
        <div className="section__body">
          <h2 id={`${id}-title`} className="h2">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  )
}
