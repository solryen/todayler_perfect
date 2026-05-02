import { useEffect, useRef, useState } from 'react'
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import logoImage from './assets/todayler-logo.jpg'
import heroPhoneImage from './assets/8988.png'
import miaPhoneImage from './assets/2302.PNG'
import {
  APP_STORE_URL,
  BEFORE_AFTER_CONTENT,
  CONTACT_EMAIL,
  FAQS,
  FAST_VALUE_STRIP,
  FINAL_CTA,
  FLOATING_CTA,
  HERO_CONTENT,
  HOME_META,
  LEGAL_META,
  PRICING_CONTENT,
  PRIVACY_LAST_UPDATED,
  PRIVACY_SECTIONS,
  RELIEF_SECTION,
  TERMS_LAST_UPDATED,
  TERMS_SECTIONS,
  TESTIMONIALS,
  TODAY_SECTION,
  TRUST_SECTION,
} from './content'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/privacy"
          element={
            <LegalPage
              title="Privacy Policy"
              lastUpdated={PRIVACY_LAST_UPDATED}
              sections={PRIVACY_SECTIONS}
            />
          }
        />
        <Route
          path="/terms"
          element={
            <LegalPage
              title="Terms of Service"
              lastUpdated={TERMS_LAST_UPDATED}
              sections={TERMS_SECTIONS}
            />
          }
        />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

function Meta({ title, description }) {
  const location = useLocation()

  useEffect(() => {
    document.title = title

    updateHeadTag('meta[name="description"]', {
      tag: 'meta',
      attributes: { name: 'description', content: description },
    })
    updateHeadTag('link[rel="canonical"]', {
      tag: 'link',
      attributes: {
        rel: 'canonical',
        href: `https://example.com${location.pathname}`,
      },
    })
    updateHeadTag('meta[property="og:title"]', {
      tag: 'meta',
      attributes: { property: 'og:title', content: title },
    })
    updateHeadTag('meta[property="og:description"]', {
      tag: 'meta',
      attributes: { property: 'og:description', content: description },
    })
    updateHeadTag('meta[property="og:type"]', {
      tag: 'meta',
      attributes: { property: 'og:type', content: 'website' },
    })
    updateHeadTag('meta[property="og:url"]', {
      tag: 'meta',
      attributes: {
        property: 'og:url',
        content: `https://example.com${location.pathname}`,
      },
    })
    updateHeadTag('meta[property="og:image"]', {
      tag: 'meta',
      attributes: { property: 'og:image', content: 'https://example.com/og-image.jpg' },
    })
    updateHeadTag('meta[name="twitter:card"]', {
      tag: 'meta',
      attributes: { name: 'twitter:card', content: 'summary_large_image' },
    })
    updateHeadTag('meta[name="twitter:title"]', {
      tag: 'meta',
      attributes: { name: 'twitter:title', content: title },
    })
    updateHeadTag('meta[name="twitter:description"]', {
      tag: 'meta',
      attributes: { name: 'twitter:description', content: description },
    })
    updateHeadTag('meta[name="twitter:image"]', {
      tag: 'meta',
      attributes: { name: 'twitter:image', content: 'https://example.com/og-image.jpg' },
    })
  }, [description, location.pathname, title])

  return null
}

function updateHeadTag(selector, config) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement(config.tag)
    document.head.appendChild(element)
  }

  Object.entries(config.attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function HomePage() {
  return (
    <>
      <Meta title={HOME_META.title} description={HOME_META.description} />
      <main className="home-page">
        <HeroSection />
        <FastValueSection />
        <BeforeAfterSection />
        <ReliefSection />
        <TodaySection />
        <TrustSection />
        <TestimonialsSection />
        <FaqSection />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}

function HeroSection() {
  return (
    <section className="section hero-section">
      <PageShell className="hero-layout">
        <Reveal as="div" className="hero-copy reveal reveal-fade-up">
          <BrandLockup />
          <h1 className="hero-title">
            <span className="hero-title-wipe">{HERO_CONTENT.title}</span>
          </h1>
          <p className="hero-description">{HERO_CONTENT.description}</p>
          <div className="button-stack">
            <StoreButton location="hero-primary">{HERO_CONTENT.primaryCta}</StoreButton>
            <InlineButton href="#today-flow" location="hero-secondary">
              {HERO_CONTENT.secondaryCta}
            </InlineButton>
          </div>
          <p className="fine-print">{HERO_CONTENT.finePrint}</p>
        </Reveal>
        <Reveal as="div" className="hero-visual reveal reveal-rise" delay={120}>
          <div className="phone-spotlight">
            <PhoneFrame src={heroPhoneImage} alt="Todayler baby app overview on an iPhone" />
          </div>
        </Reveal>
      </PageShell>
    </section>
  )
}

function FastValueSection() {
  return (
    <section className="section section-tight">
      <PageShell narrow>
        <Reveal as="div" className="value-strip reveal reveal-fade-up">
          <p className="value-strip-title">{FAST_VALUE_STRIP.title}</p>
          <ul className="value-strip-list">
            {FAST_VALUE_STRIP.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </Reveal>
      </PageShell>
    </section>
  )
}

function BeforeAfterSection() {
  return (
    <section className="section section-tight">
      <PageShell narrow>
        <Reveal as="div" className="before-after-strip reveal reveal-fade-up">
          <div className="strip-header">
            <p className="eyebrow">{BEFORE_AFTER_CONTENT.eyebrow}</p>
          </div>
          <div className="before-after-grid">
            <article className="emotion-card emotion-card-before">
              <p className="micro-label">{BEFORE_AFTER_CONTENT.before.label}</p>
              <h2>{BEFORE_AFTER_CONTENT.before.title}</h2>
              <p>{BEFORE_AFTER_CONTENT.before.body}</p>
            </article>
            <article className="emotion-card emotion-card-after">
              <p className="micro-label">{BEFORE_AFTER_CONTENT.after.label}</p>
              <h2>{BEFORE_AFTER_CONTENT.after.title}</h2>
              <p>{BEFORE_AFTER_CONTENT.after.body}</p>
            </article>
          </div>
        </Reveal>
      </PageShell>
    </section>
  )
}

function ReliefSection() {
  return (
    <section className="section section-soft">
      <PageShell>
        <div className="section-heading">
          <Reveal as="h2" className="reveal reveal-fade-up">
            {RELIEF_SECTION.title}
          </Reveal>
          <Reveal as="p" className="section-intro reveal reveal-fade-up" delay={80}>
            {RELIEF_SECTION.intro}
          </Reveal>
        </div>
        <div className="narrative-grid">
          {RELIEF_SECTION.cards.map((card, index) => (
            <Reveal
              as="article"
              key={card.title}
              className="narrative-card reveal reveal-fade-up-soft"
              delay={120 + index * 70}
            >
              <div className="icon-chip" aria-hidden="true">
                <OutlineIcon type={card.icon} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  )
}

function TodaySection() {
  return (
    <section className="section" id="today-flow">
      <PageShell className="split-layout split-layout--balanced">
        <div className="section-copy">
          <p className="eyebrow">{TODAY_SECTION.eyebrow}</p>
          <Reveal as="h2" className="reveal reveal-fade-up">
            {TODAY_SECTION.title}
          </Reveal>
          <Reveal as="p" className="section-intro reveal reveal-fade-up" delay={60}>
            {TODAY_SECTION.intro}
          </Reveal>
          <div className="steps-list">
            {TODAY_SECTION.steps.map((step, index) => (
              <Reveal
                as="article"
                key={step.number}
                className="step-card reveal reveal-fade-up-soft"
                delay={120 + index * 70}
              >
                <p className="step-number">{step.number}</p>
                <div className="step-copy">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <StoreButton location="today-section">{TODAY_SECTION.cta}</StoreButton>
        </div>
        <Reveal as="div" className="today-visual reveal reveal-fade-up-soft" delay={140}>
          <div className="phone-stack">
            <PhoneFrame src={miaPhoneImage} alt="Todayler Mia support on an iPhone" />
          </div>
        </Reveal>
      </PageShell>
    </section>
  )
}

function TrustSection() {
  return (
    <section className="section section-warm">
      <PageShell className="trust-layout">
        <div className="trust-copy">
          <p className="eyebrow">{TRUST_SECTION.eyebrow}</p>
          <Reveal as="h2" className="reveal reveal-fade-up">
            {TRUST_SECTION.title}
          </Reveal>
          <Reveal as="p" className="section-intro reveal reveal-fade-up" delay={80}>
            {TRUST_SECTION.intro}
          </Reveal>
        </div>
        <div className="trust-rails">
          {TRUST_SECTION.rails.map((rail, index) => (
            <Reveal
              as="article"
              key={rail}
              className="trust-rail reveal reveal-fade-up-soft"
              delay={130 + index * 70}
            >
              <div className="icon-chip icon-chip-soft" aria-hidden="true">
                <OutlineIcon type="check" />
              </div>
              <p>{rail}</p>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="section section-tight">
      <PageShell>
        <div className="section-heading section-heading-centered">
          <Reveal as="h2" className="reveal reveal-fade-up">
            Parents say it makes the day feel easier
          </Reveal>
        </div>
        <div className="testimonial-stack">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal
              as="article"
              key={testimonial.name}
              className="testimonial-app-card reveal reveal-fade-up-soft"
              delay={100 + index * 70}
            >
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="section">
      <PageShell narrow>
        <div className="section-heading">
          <Reveal as="h2" className="reveal reveal-fade-up">
            Questions parents ask before they start.
          </Reveal>
        </div>
        <div className="faq-list">
          {FAQS.map((faq, index) => (
            <Reveal
              as="article"
              key={faq.question}
              className="faq-card reveal reveal-fade-up-soft"
              delay={100 + index * 70}
            >
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  )
}

function PricingSection() {
  return (
    <section className="section section-soft">
      <PageShell narrow>
        <div className="pricing-shell">
          <p className="eyebrow">{PRICING_CONTENT.eyebrow}</p>
          <Reveal as="h2" className="reveal reveal-fade-up">
            {PRICING_CONTENT.title}
          </Reveal>
          <Reveal as="p" className="section-intro pricing-intro reveal reveal-fade-up" delay={60}>
            {PRICING_CONTENT.subtitle}
          </Reveal>
          <Reveal as="article" className="pricing-card reveal reveal-fade-up-soft" delay={120}>
            <p className="price-line">
              {PRICING_CONTENT.price}
              <span>{PRICING_CONTENT.priceSuffix}</span>
            </p>
            <p className="billing-note">{PRICING_CONTENT.billingNote}</p>
            <ul className="feature-list">
              {PRICING_CONTENT.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <StoreButton block location="pricing">
              {PRICING_CONTENT.cta}
            </StoreButton>
            <p className="fine-print">{PRICING_CONTENT.finePrint}</p>
          </Reveal>
        </div>
      </PageShell>
    </section>
  )
}

function FinalCtaSection() {
  return (
    <section className="section final-cta">
      <PageShell narrow>
        <div className="final-card">
          <img className="final-logo" src={logoImage} alt="Todayler baby logo" />
          <Reveal as="h2" className="reveal reveal-fade-up">
            {FINAL_CTA.title}
          </Reveal>
          <Reveal as="p" className="section-intro reveal reveal-fade-up" delay={70}>
            {FINAL_CTA.body}
          </Reveal>
          <StoreButton location="final-cta">{FINAL_CTA.cta}</StoreButton>
        </div>
      </PageShell>
    </section>
  )
}

function FloatingCta() {
  return (
    <div className="floating-cta-shell">
      <StoreButton block location="floating">
        {FLOATING_CTA.label}
      </StoreButton>
    </div>
  )
}

function LegalPage({ title, lastUpdated, sections }) {
  return (
    <>
      <Meta title={LEGAL_META[title].title} description={LEGAL_META[title].description} />
      <div className="legal-page">
        <header className="legal-header">
          <PageShell narrow>
            <Link to="/" className="brand-link">
              <img src={logoImage} alt="Todayler" />
              <span>Todayler</span>
            </Link>
          </PageShell>
        </header>
        <main className="legal-main">
          <PageShell narrow>
            <h1 className="legal-title">{title}</h1>
            <p className="legal-updated">Todayler · Last updated: {lastUpdated}</p>
            <div className="legal-sections">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.link ? (
                    <a
                      className="button button-primary legal-link-button"
                      href={section.link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {section.link.label}
                    </a>
                  ) : null}
                </section>
              ))}
            </div>
          </PageShell>
        </main>
      </div>
    </>
  )
}

function NotFoundPage() {
  return (
    <>
      <Meta title="Todayler - Page Not Found" description="The page you requested does not exist." />
      <main className="not-found-page">
        <PageShell narrow>
          <div className="not-found-card">
            <p className="not-found-code">404</p>
            <h1>Oops! Page not found</h1>
            <p>The page you tried to open does not exist.</p>
            <Link className="button button-primary" to="/">
              Return to Home
            </Link>
          </div>
        </PageShell>
      </main>
    </>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <PageShell className="footer-layout">
        <div className="footer-brand">
          <div className="brand-link brand-link--footer">
            <img src={logoImage} alt="Todayler" />
            <span>Todayler</span>
          </div>
          <p className="footer-tagline">Daily relief for parents of babies 0-24 months.</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
        </nav>
        <div className="footer-meta">
          <p>{CONTACT_EMAIL}</p>
          <p>© 2026 Todayler.</p>
        </div>
      </PageShell>
    </footer>
  )
}

function StoreButton({ children, block = false, location }) {
  return (
    <a
      className={`button button-primary${block ? ' button-block' : ''}`}
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackCtaTap(children, location)}
    >
      {children}
    </a>
  )
}

function InlineButton({ children, href, location }) {
  return (
    <a
      className="button button-secondary"
      href={href}
      onClick={() => trackCtaTap(children, location)}
    >
      {children}
    </a>
  )
}

function trackCtaTap(label, location) {
  const eventPayload = {
    event: 'todayler_cta_tap',
    label,
    location,
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventPayload)
  }

  window.dispatchEvent(new CustomEvent('todayler:cta', { detail: eventPayload }))
}

function PageShell({ children, narrow = false, className = '' }) {
  const shellClassName = ['page-shell', narrow ? 'page-shell--narrow' : '', className]
    .filter(Boolean)
    .join(' ')

  return <div className={shellClassName}>{children}</div>
}

function BrandLockup() {
  return (
    <div className="brand-lockup">
      <img className="brand-mark" src={logoImage} alt="Todayler" />
      <span>Todayler</span>
    </div>
  )
}

function PhoneFrame({ src, alt, className = '' }) {
  return (
    <div className={`phone-frame ${className}`.trim()}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

function OutlineIcon({ type }) {
  const icons = {
    relief: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8.4 20.6a7.6 7.6 0 0 1 14.7-2.4 6 6 0 0 1 .5 12H12.3a5.5 5.5 0 0 1-3.9-9.6Z" />
        <path d="M12.4 17.2c.8 1.1 2.1 1.8 3.6 1.8 1.5 0 2.8-.7 3.6-1.8" />
      </svg>
    ),
    rest: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7.5 18.6h17" />
        <path d="M9.4 18.6v-2.5a3.5 3.5 0 0 1 3.5-3.5h6.2a3.5 3.5 0 0 1 3.5 3.5v2.5" />
        <path d="M9.5 18.6v4.1m13-4.1v4.1" />
        <path d="M9 11.2h5.2" />
        <path d="M19.1 9.1h4.1" />
      </svg>
    ),
    support: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 25.7c6-3.8 8.9-7 8.9-11.2A4.9 4.9 0 0 0 20 9.6c-1.5 0-2.9.7-4 1.9a5.4 5.4 0 0 0-4-1.9A4.9 4.9 0 0 0 7.1 14.5c0 4.2 2.9 7.4 8.9 11.2Z" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="16" cy="16" r="10.5" />
        <path d="m11.8 16.4 2.9 2.8 5.7-6" />
      </svg>
    ),
  }

  return <span className="outline-icon">{icons[type]}</span>
}

function Reveal({
  as = 'div',
  children,
  className = '',
  threshold,
  rootMargin,
  delay = 0,
}) {
  const { isVisible, setNode } = useReveal({ threshold, rootMargin })
  const Tag = as

  return (
    <Tag
      ref={setNode}
      className={getRevealClassName(className, isVisible)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

function useReveal({ threshold = 0.22, rootMargin = '0px 0px -10% 0px' } = {}) {
  const nodeRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    const element = nodeRef.current
    if (!element || isVisible || prefersReducedMotion) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible, prefersReducedMotion, rootMargin, threshold])

  return {
    isVisible: isVisible || prefersReducedMotion,
    setNode: (node) => {
      nodeRef.current = node
    },
  }
}

function getRevealClassName(baseClassName, isVisible) {
  return [baseClassName, isVisible ? 'reveal-visible' : '']
    .filter(Boolean)
    .join(' ')
}

export default App
