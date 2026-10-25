import { useEffect, useRef, useState } from 'react'
import './App.css'
import Spiral from './components/Spiral.jsx'
import Section from './components/Section.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import PathFlower from './components/PathFlower.jsx'
import { site, hero, about, focus, path, work, ideas, offTheClock, contact, legal } from './content.js'
import { articles } from './articles.js'
import { projects } from './projects.js'

const nav = [
  ['about', 'About'],
  ['focus', 'Focus'],
  ['path', 'Path'],
  ['work', 'Work'],
  ['contact', 'Contact'],
]

function Header() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <a href="/" className="brand" aria-label={`${site.name}, back to top`}>
          <Spiral count={90} spacing={3} seed={1.6} bloom className="brand__mark" />
          <span>{site.name}</span>
        </a>
        <nav aria-label="Main">
          <ul className="nav">
            {nav.map(([id, name]) => (
              <li key={id}>
                <a className="link" href={`/#${id}`}>
                  {name}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__inner">
          <p className="label">{hero.eyebrow}</p>
          <h1 id="hero-title" className="display">
            {hero.title}
          </h1>
          <p className="lead">{hero.lead}</p>
          <a className="link link--strong" href="#contact">
            {hero.cta}
          </a>
        </div>
        <div className="hero__art">
          <Spiral count={840} spacing={9} seed={4.4} core={0.12} bloom className="hero__spiral" />
          <img
            className="hero__photo"
            src="/images/portrait.webp"
            width="1148"
            height="1600"
            alt="Jonathan Berkmann, smiling, arms crossed"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

/**
 * Lets the sunflowers grow. On load the hero flower opens from the core to its resting size,
 * then keeps opening while the hero is scrolled away (and closes again when scrolling back).
 * The logo mark opens with the progress through the whole page.
 */
const HERO_REST = 0.62 // share of seeds visible at rest
const INTRO_MS = 4200

function useBloom() {
  useEffect(() => {
    const root = document.documentElement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.style.setProperty('--hero-bloom', String(HERO_REST))
      root.style.setProperty('--page-bloom', '1')
      window.dispatchEvent(new Event('bloom'))
      return
    }
    let start = performance.now()
    let frame = 0
    const ease = (x) => 1 - Math.pow(1 - x, 2.2) // calm start, long soft finish
    const tick = (now) => {
      const intro = ease(Math.min(1, (now - start) / INTRO_MS))
      const hero = document.querySelector('.hero')
      const heroH = hero ? hero.offsetHeight : window.innerHeight
      const scroll = Math.min(1, Math.max(0, window.scrollY / heroH))
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const page = Math.min(1, window.scrollY / maxScroll)
      root.style.setProperty('--hero-bloom', (intro * HERO_REST + scroll * (1 - HERO_REST)).toFixed(4))
      root.style.setProperty('--page-bloom', (intro * (0.7 + 0.3 * page)).toFixed(4))
      window.dispatchEvent(new Event('bloom'))
      frame = intro < 1 ? requestAnimationFrame(tick) : 0
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(tick)
    }
    // Switching the theme lets the flowers grow again, like on page load.
    const onTheme = () => {
      start = performance.now()
      if (!frame) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    window.addEventListener('themechange', onTheme)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('themechange', onTheme)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p>
          © {new Date().getFullYear()} {site.name}, {site.place}
        </p>
        <details className="legal">
          <summary className="link">Legal notice and privacy</summary>
          <div className="legal__body">
            <p>
              <strong>Offenlegung gemäß § 25 MedienG</strong>
              <br />
              {legal.owner}, {legal.place}
              <br />
              {legal.purpose}
            </p>
            <p>
              <strong>Privacy</strong>
              <br />
              {legal.privacy}
            </p>
          </div>
        </details>
      </div>
    </footer>
  )
}

const groups = [
  ['projects', 'Projects'],
  ['articles', 'Articles'],
  ['ideas', 'Ideas'],
]

function Card({ href, image, label, title, text, more }) {
  const inner = (
    <>
      {image && <img className="card__image" src={image} alt="" loading="lazy" />}
      <p className="label">{label}</p>
      <h3 className="h3">{title}</h3>
      <p className="muted">{text}</p>
      {more && <span className="link link--strong card__more">{more}</span>}
    </>
  )
  return href ? (
    <a className="card" href={href}>
      {inner}
    </a>
  ) : (
    <div className="card">{inner}</div>
  )
}

function Work() {
  const items = {
    projects: projects.map((p) => (
      <Card
        href={`/work/${p.slug}`}
        image={p.image}
        label={`${p.industry} · ${p.role}`}
        title={p.title}
        text={p.teaser}
        more="Read more"
      />
    )),
    articles: articles.map((a) => (
      <Card href={`/work/${a.slug}`} image={a.image} label={a.date} title={a.title} text={a.teaser} more="Read the article" />
    )),
    ideas: ideas.items.map((i) => <Card image={i.image} label={i.kind} title={i.name} text={i.text} />),
  }
  return (
    <div className="groups">
      {groups.map(([id, name]) => (
        <Rail key={id} id={id} name={name} intro={work.intro[id]} items={items[id]} />
      ))}
    </div>
  )
}

/**
 * One row of cards that scrolls sideways: swipe on touch screens, arrows on desktop.
 * The next card peeks in at the edge, so it is clear there is more.
 */
function Rail({ id, name, intro, items }) {
  const track = useRef(null)
  const [edge, setEdge] = useState({ start: true, end: items.length < 2 })

  useEffect(() => {
    const el = track.current
    if (!el) return
    const update = () =>
      setEdge({
        start: el.scrollLeft <= 4,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
      })
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const move = (dir) => {
    const el = track.current
    const card = el?.querySelector('li')
    if (!card) return
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' })
  }

  return (
    <section className="rail" aria-labelledby={`rail-${id}`}>
      <div className="rail__head">
        <h3 id={`rail-${id}`} className="rail__title">
          {name} <span className="rail__count">{items.length}</span>
        </h3>
        <div className="rail__nav">
          <button type="button" className="rail__arrow" onClick={() => move(-1)} disabled={edge.start} aria-label={`Previous ${name.toLowerCase()}`}>
            ←
          </button>
          <button type="button" className="rail__arrow" onClick={() => move(1)} disabled={edge.end} aria-label={`Next ${name.toLowerCase()}`}>
            →
          </button>
        </div>
      </div>
      <p className="rail__intro muted">{intro}</p>
      <ul ref={track} className="rail__track">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

/**
 * The email address is not in the page source as plain text, so simple scrapers cannot harvest it.
 * It is decoded on click, shown, and the mail program opens.
 */
function Email() {
  const [address, setAddress] = useState(null)
  if (!address) {
    return (
      <button
        type="button"
        className="link link--big phone__reveal"
        onClick={() => {
          const decoded = atob(site.email)
          setAddress(decoded)
          window.location.href = `mailto:${decoded}`
        }}
      >
        Write an email
      </button>
    )
  }
  return (
    <a className="link link--big" href={`mailto:${address}`}>
      {address}
    </a>
  )
}

function ArticlePage({ article }) {
  useEffect(() => {
    document.title = `${article.title} · ${site.name}`
    window.scrollTo(0, 0)
  }, [article])

  return (
    <article className="article wrap">
      <a className="link label article__back" href="/#work">
        Back to work
      </a>
      <header className="article__head">
        <p className="label">{article.date || `${article.industry} · ${article.role}`}</p>
        <h1 className="h2 article__title">{article.title}</h1>
        {article.subtitle && <p className="lead">{article.subtitle}</p>}
        {article.note && <p className="article__note">{article.note}</p>}
      </header>
      {article.image && <img className="article__image" src={article.image} alt={article.imageAlt || ''} />}
      <div className="prose article__body">
        {article.body.map((b, i) => (b.h ? <h2 key={i} className="h3">{b.h}</h2> : <p key={i}>{b.p}</p>))}
      </div>
      {article.sources && (
        <div className="article__sources">
          <p className="label">Sources</p>
          <ul>
            {article.sources.map((src) => (
              <li key={src.url}>
                <a className="link" href={src.url} rel="noopener" target="_blank">
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {article.industry && <p className="article__original">{work.projectNote}</p>}
      {article.original && (
        <p className="article__original">
          <a className="link" href={article.original.url} rel="noopener" target="_blank">
            {article.original.label}
          </a>
        </p>
      )}
    </article>
  )
}

function findArticle() {
  const m = window.location.pathname.match(/^\/(?:work|writing)\/([^/]+)\/?$/)
  return m ? [...projects, ...articles].find((a) => a.slug === m[1]) : null
}

export default function App() {
  useBloom()
  const article = findArticle()
  // Coming back from an article to /#section: jump to that section once the page is rendered.
  useEffect(() => {
    if (!article && window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
    }
  }, [article])
  if (article) {
    return (
      <>
        <Header />
        <main id="main">
          <ArticlePage article={article} />
        </main>
        <Footer />
      </>
    )
  }
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />

        <Section id="about" number="01" label="About" title={about.title}>
          <div className="prose">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="focus" number="02" label="Focus" title={focus.title}>
          <ol className="rows">
            {focus.items.map((item) => (
              <li key={item.name} className="row">
                <h3 className="h3">{item.name}</h3>
                <p className="muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="path" number="03" label="Path" title={path.title}>
          <PathFlower stations={path.stations} />
          <dl className="facts">
            <div>
              <dt className="label">Industries</dt>
              <dd>{path.industries.join(', ')}</dd>
            </div>
            <div>
              <dt className="label">Certifications</dt>
              <dd>{path.certifications.join(', ')}</dd>
            </div>
          </dl>
        </Section>

        <Section id="work" number="04" label="Work" title={work.title}>
          <Work />
        </Section>

        <Section id="off" number="05" label="Off the clock" title={offTheClock.title}>
          <ul className="pairs">
            {offTheClock.items.map((item) => (
              <li key={item.name}>
                {item.kind && <p className="label">{item.kind}</p>}
                <h3 className="h3">{item.name}</h3>
                <p className="muted">{item.text}</p>
                {item.link?.url && (
                  <a
                    className="link link--strong pairs__link"
                    href={item.link.url}
                    {...(item.link.url.startsWith('http') ? { rel: 'noopener', target: '_blank' } : {})}
                  >
                    {item.link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="sunflower">
            <Spiral count={160} spacing={4} seed={2} onView className="sunflower__mark" />
            <div>
              <h3 className="h3">{offTheClock.sunflower.title}</h3>
              <p className="muted">{offTheClock.sunflower.text}</p>
            </div>
          </div>
        </Section>

        <Section id="contact" number="06" label="Contact" title={contact.title}>
          <p className="prose">{contact.text}</p>
          <ul className="contact">
            <li>
              <Email />
            </li>
            <li>
              <a className="link link--big" href={site.linkedin} rel="me noopener" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
        </Section>
      </main>

      <Footer />
    </>
  )
}
