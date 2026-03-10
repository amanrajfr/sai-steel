import { useState, useEffect } from 'react'
import {
  Phone, MapPin, Clock, Star, ChevronDown, Menu, X, ExternalLink,
  CheckCircle, Award, Shield, Zap, Package, Wrench, Building2,
  MessageCircle, ArrowRight, Mail, Truck, Users, ThumbsUp,
  ChevronRight, BadgeCheck
} from 'lucide-react'

/* ─── SEO JSON-LD Structured Data ──────────────────────────────── */
function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    "name": "Sai Steel and Engineering Works",
    "description": "Premium Jindal certified stainless steel pipes, hollow sections, raw material ERW/MS pipes, hardware accessories, decorative pillars, staircases, and steel doors in Patna, Bihar.",
    "url": "https://saisteel.in",
    "telephone": "+917070810247",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ashiana Road, opposite Tarumitra Ashram, near May Flower School, Rajeev Nagar, Digha Ghat",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800011",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Su 09:00-19:30",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "1100",
      "bestRating": "5"
    },
    "hasMap": "https://maps.app.goo.gl/eQfLDK2rRRKDciEV7",
    "servesCuisine": null,
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash",
    "priceRange": "₹₹",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.6093",
      "longitude": "85.0951"
    }
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/* ─── Data ─────────────────────────────────────────────────────── */
const BUSINESS = {
  name: 'Sai Steel & Engineering Works',
  tagline: 'Best Steel Pipes & Raw Material in Patna',
  phone: '070708 10247',
  address: 'Ashiana Road, opposite Tarumitra Ashram, near May Flower School, Rajeev Nagar, Digha Ghat, Patna, Bihar 800011',
  mapsLink: 'https://maps.app.goo.gl/eQfLDK2rRRKDciEV7',
  rating: 5.0,
  reviewCount: '1100+',
  category: 'Steel Distributor · Hardware Accessories',
  hours: {
    open: '9:00 AM',
    close: '7:30 PM',
    weekdays: '9:00 AM – 7:30 PM',
    note: 'Open all 7 days a week',
  },
}

const PRODUCTS = [
  {
    img: '/assets/jindal-pipes.png',
    name: 'Jindal Stainless Steel Pipes',
    badge: 'Jindal Certified',
    desc: 'Premium JSLA-Certified stainless steel round and square pipes — the backbone of modern railings, construction, and architectural projects.',
    tags: ['JSLA Grade JT', 'Corrosion Resistant', 'All Gauges & Sizes'],
  },
  {
    img: '/assets/staircase-railing.png',
    name: 'Stainless Steel Railings',
    badge: 'Popular Choice',
    desc: 'Sleek stainless steel railings and balcony guards fabricated with precision. Adds elegance and safety to homes and offices.',
    tags: ['Residential & Commercial', 'Custom Designs', 'SS Finish'],
  },
  {
    icon: '🪜',
    name: 'Stainless Steel Balusters',
    badge: 'Premium',
    desc: 'High-quality stainless steel balusters for elegant and secure staircase and balcony railings.',
    tags: ['SS Finish', 'Durable', 'Elegant Designs'],
  },
  {
    img: '/assets/steel-door.png',
    name: 'Steel Security Doors',
    badge: 'Custom Made',
    desc: 'Heavy-duty stainless steel doors with designer mesh and panel patterns. Perfect for apartments, flats, and main entrances.',
    tags: ['Heavy Gauge', 'Tamper Resistant', 'Lockable Frames'],
  },
  {
    img: '/assets/decorative-pillars.jpg',
    name: 'Master Pillars',
    badge: 'Architectural',
    desc: 'Ornate stainless steel gate posts and master pillars — mirrored finish on top, wood-tone panels below. Transforms any entrance.',
    tags: ['Gate Pillars', 'Mirror Polished', 'Custom Patterns'],
  },
  {
    icon: '⚙️',
    name: 'ERW / MS Raw Material Pipes',
    badge: 'Bulk Supply',
    desc: 'Electric Resistance Welded and mild-steel raw material pipes for plumbing, water supply, construction scaffolding, and industrial use.',
    tags: ['ERW Pipes', 'MS Pipes', 'Bulk Available'],
  },
  {
    icon: '⬛',
    name: 'Hollow Sections',
    badge: 'Square & Round',
    desc: 'Structural hollow sections for frameworks, gates, grills, and furniture fabrication. Available in square and rectangular profiles.',
    tags: ['Square Hollow', 'Rectangular', 'Custom Sizes'],
  },
  {
    icon: '🏗️',
    name: 'Structural Steel',
    badge: 'Construction',
    desc: 'Steel rods, angles, channels, and I-beams for home construction, renovation, and large-scale building projects across Bihar.',
    tags: ['Steel Rods', 'Angles & Channels', 'I-Beams'],
  },
  {
    icon: '🔧',
    name: 'Pipe Fittings & Hardware',
    badge: 'Complete Range',
    desc: 'Nuts, bolts, flanges, elbows, tees, reducers, caps, and all fittings for seamless plumbing and structural installation.',
    tags: ['Pipe Fittings', 'Flanges', 'Fasteners'],
  },
]

const REVIEWS = [
  {
    name: 'Aman Raj',
    initials: 'AR',
    rating: 5,
    color: 'from-orange-500 to-orange-700',
    text: 'I received excellent service and constant support throughout my entire home construction project. They were truly amazing to work with!',
    time: 'Recent',
  },
  {
    name: 'Chandra Bhushan',
    initials: 'CB',
    rating: 5,
    color: 'from-blue-500 to-blue-700',
    text: 'Brought raw materials for my home. Very satisfied with the stainless steel raw materials... Very quality Jindal steel. Highly recommended.',
    time: 'Recent',
  },
  {
    name: 'Ramesh Pandit',
    initials: 'RP',
    rating: 5,
    color: 'from-green-500 to-green-700',
    text: 'Best steel fabrication and pipes available at very good prices. Truly recommended for anyone looking for quality steel in Patna.',
    time: 'Recent',
  },
  {
    name: 'Harsh Patel',
    initials: 'HP',
    rating: 5,
    color: 'from-purple-500 to-purple-700',
    text: 'I really liked how the team helps you and guides you through the selection. Best steel works in the town. Great experience!',
    time: 'Recent',
  },
  {
    name: 'Sanjay Paswan',
    initials: 'SP',
    rating: 5,
    color: 'from-red-500 to-red-700',
    text: 'Best stainless steel pipe shop at reasonable price of Jindal pipe. Very satisfied! Will definitely come back for more purchases.',
    time: 'Recent',
  },
  {
    name: 'Ritesh Singh',
    initials: 'RS',
    rating: 5,
    color: 'from-teal-500 to-teal-700',
    text: 'Great team attitude and staff behavior is also good. Very professional service and quality products. Highly recommend!',
    time: 'Recent',
  },
]

const STATS = [
  { value: '5.0★', label: 'Google Rating', icon: Star },
  { value: '1100+', label: 'Happy Customers', icon: ThumbsUp },
  { value: '100%', label: 'Satisfaction Rate', icon: Award },
  { value: '7', label: 'Days a Week Open', icon: Clock },
]

const TICKER_ITEMS = [
  '🔩 Jindal Certified Stainless Steel Pipes',
  '⬛ Hollow Sections — Square & Rectangular',
  '⚙️ ERW / MS Raw Material Pipes',
  '🔧 Hardware Fittings & Accessories',
  '🏗️ Structural Steel for Construction',
  '🪟 Custom Steel Doors & Security Grills',
  '🏛️ Master Pillars & Gate Posts',
  '🪜 Stainless Steel Railings',
  '📞 Call Now: 070708 10247',
  '⭐ 5-Star Rated on Google — 1100+ Reviews',
  '🕘 Open 9:00 AM – 7:30 PM, Mon–Sun',
]

const HOURS_DATA = [
  { day: 'Monday', time: '9:00 AM – 7:30 PM', open: true },
  { day: 'Tuesday', time: '9:00 AM – 7:30 PM', open: true },
  { day: 'Wednesday', time: '9:00 AM – 7:30 PM', open: true },
  { day: 'Thursday', time: '9:00 AM – 7:30 PM', open: true },
  { day: 'Friday', time: '9:00 AM – 7:30 PM', open: true },
  { day: 'Saturday', time: '9:00 AM – 7:30 PM', open: true },
  { day: 'Sunday', time: '9:00 AM – 7:30 PM', open: true },
]

/* ─── Helpers ───────────────────────────────────────────────────── */
function Stars({ rating = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={14} className={i <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'} />
      ))}
    </div>
  )
}

function useScrollAnimate() {
  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  })
}

function isCurrentlyOpen() {
  const now = new Date()
  const h = now.getHours()
  const m = now.getMinutes()
  const total = h * 60 + m
  // Open 9:00 AM (540) to 7:30 PM (1170)
  return total >= 9 * 60 && total < 19 * 60 + 30
}

/* ─── Navbar ────────────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'Products', 'Reviews', 'About', 'Contact']

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-steel-950/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/5' : 'bg-transparent'}`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3" aria-label="Sai Steel and Engineering Works - Home">
            <img
              src="/assets/sai-steel-logo.png"
              alt="Sai Steel and Engineering Works Logo"
              className="w-10 h-10 rounded-xl object-contain bg-white p-0.5 shadow-lg shadow-accent-500/30"
              onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
            />
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 items-center justify-center shadow-lg shadow-accent-500/30 pulse-glow hidden">
              <span className="text-white text-sm font-black">SS</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-display font-bold text-lg leading-tight">Sai Steel</div>
              <div className="text-accent-400 text-xs font-medium">& Engineering Works</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-steel-300 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-accent-400">
                {l}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/30"
              aria-label="Call Sai Steel now">
              <Phone size={14} />
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-steel-950/98 border-t border-white/5`}>
        <div className="px-4 py-4 flex flex-col gap-2">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="text-steel-300 hover:text-accent-400 py-3 px-4 rounded-xl hover:bg-white/5 text-sm font-medium transition-all">
              {l}
            </a>
          ))}
          <a href={`tel:${BUSINESS.phone}`}
            className="flex items-center justify-center gap-2 bg-accent-500 text-white py-3 rounded-xl text-sm font-semibold mt-2">
            <Phone size={14} /> {BUSINESS.phone}
          </a>
        </div>
      </div>
    </header>
  )
}

/* ─── Hero ──────────────────────────────────────────────────────── */
function Hero() {
  const currently = isCurrentlyOpen()
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-steel-950" aria-label="Welcome to Sai Steel and Engineering Works">
      {/* Animated background */}
      <div className="absolute inset-0 steel-texture" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent-600/6 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass border border-accent-500/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <span className={`w-2 h-2 rounded-full ${currently ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
              <span className="text-xs font-semibold text-steel-200">
                {currently ? '✓ Open Now' : 'Closed'} — {BUSINESS.hours.weekdays} · {BUSINESS.hours.note}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-none mb-4 animate-fade-up">
              <span className="block">Reinforce</span>
              <span className="block gradient-text">Your Dreams</span>
              <span className="block text-steel-300 text-4xl sm:text-5xl lg:text-5xl mt-2">with Strength</span>
            </h1>

            <p className="text-steel-300 text-base sm:text-xl max-w-xl mt-6 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s' }}>
              Patna's most trusted steel distributor — supplying{' '}
              <span className="text-accent-400 font-semibold">Jindal certified stainless steel pipes</span>,
              hollow sections, decorative pillars, staircases, steel doors, and complete hardware for your construction.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.25s' }}>
              <a href={`tel:${BUSINESS.phone}`}
                className="flex items-center justify-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/40 pulse-glow">
                <Phone size={20} />
                {BUSINESS.phone}
              </a>
              <a href={BUSINESS.mapsLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 glass hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-200 hover:scale-105 border border-white/10">
                <MapPin size={20} />
                Get Directions
                <ExternalLink size={16} className="text-steel-400" />
              </a>
            </div>

            {/* Google Rating */}
            <div className="flex items-center gap-6 animate-fade-up" style={{ animationDelay: '0.35s' }}>
              <div className="glass rounded-2xl px-5 py-3 flex items-center gap-3">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div>
                  <div className="text-white font-bold text-lg">5.0</div>
                  <div className="text-steel-400 text-xs">1100+ Google Reviews</div>
                </div>
              </div>
              <div className="glass rounded-2xl px-5 py-3 flex items-center gap-3">
                <BadgeCheck size={22} className="text-accent-400" />
                <div>
                  <div className="text-white font-bold text-sm">Jindal Authorized</div>
                  <div className="text-steel-400 text-xs">Quality Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Jindal pipes showcase */}
          <div className="hidden lg:flex flex-col gap-6 items-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-md">
              {/* Main product image */}
              <div className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl shadow-black/60 group">
                <img
                  src="/assets/jindal-pipes.png"
                  alt="Jindal Stainless Steel Pipes — JSLA Certified Round and Square Hollow Sections"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-orange rounded-2xl px-5 py-3 flex items-center gap-3 backdrop-blur-md">
                    <img src="/assets/sai-steel-logo.png" alt="Sai Steel" className="w-8 h-8 object-contain bg-white rounded-lg p-0.5" />
                    <div>
                      <div className="text-white font-bold text-sm">JSLA — Jindal Stainless</div>
                      <div className="text-accent-300 text-xs">Grade JT · Premium Quality</div>
                    </div>
                    <BadgeCheck size={20} className="text-accent-400 ml-auto" />
                  </div>
                </div>
              </div>

              {/* Floating accent cards */}
              <div className="absolute -top-4 -right-4 glass border border-accent-500/30 rounded-2xl px-4 py-2 shadow-lg">
                <div className="text-white font-bold text-sm">Patna's #1</div>
                <div className="text-accent-400 text-xs">Steel Distributor</div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass border border-white/10 rounded-2xl px-4 py-2 shadow-lg">
                <div className="text-green-400 font-bold text-sm">✓ In Stock</div>
                <div className="text-steel-400 text-xs">All Gauges Available</div>
              </div>
            </div>

            {/* Mini product grid below */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="glass rounded-2xl overflow-hidden group cursor-pointer hover:border-accent-500/30 border border-white/5 transition-all">
                <img src="/assets/staircase-railing.png" alt="Stainless Steel Railings" className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="px-3 py-2">
                  <div className="text-white text-xs font-bold">SS Railings</div>
                  <div className="text-steel-400 text-xs">Stainless Steel</div>
                </div>
              </div>
              <div className="glass rounded-2xl overflow-hidden group cursor-pointer hover:border-accent-500/30 border border-white/5 transition-all">
                <img src="/assets/decorative-pillars.jpg" alt="Master Pillars" className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="px-3 py-2">
                  <div className="text-white text-xs font-bold">Gate Pillars</div>
                  <div className="text-steel-400 text-xs">Master Pillars</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-steel-500 bounce-subtle">
        <span className="text-xs">Scroll</span>
        <ChevronDown size={18} />
      </div>
    </section>
  )
}

/* ─── Ticker ────────────────────────────────────────────────────── */
function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="bg-accent-600 py-3 overflow-hidden relative" aria-label="Product categories ticker">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className="text-white font-semibold text-sm mx-8">{item}</span>
        ))}
      </div>
    </div>
  )
}

/* ─── Stats ─────────────────────────────────────────────────────── */
function StatsSection() {
  return (
    <section className="py-16 bg-steel-900" aria-label="Business highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i}
                className="animate-on-scroll glass-orange rounded-2xl p-6 text-center card-shine hover:scale-105 transition-transform duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}>
                <Icon size={28} className="text-accent-400 mx-auto mb-3" />
                <div className="text-4xl font-display font-bold text-white mb-1">{s.value}</div>
                <div className="text-steel-400 text-sm font-medium">{s.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── About ─────────────────────────────────────────────────────── */
function About() {
  const attributes = [
    { icon: '♿', label: 'Wheelchair Accessible' },
    { icon: '🚗', label: 'Free Parking Available' },
    { icon: '🏗️', label: 'On-Site Fabrication' },
    { icon: '📦', label: 'Bulk Orders Welcome' },
    { icon: '🤝', label: 'Contractor Friendly' },
    { icon: '⚡', label: 'Quick Delivery' },
  ]

  return (
    <section id="about" className="py-24 bg-steel-950 steel-texture" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 text-accent-400 text-sm font-bold uppercase tracking-widest mb-4 animate-on-scroll">
              <span className="w-8 h-px bg-accent-500" />
              About Us
            </div>
            <h2 id="about-heading" className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 animate-on-scroll delay-100">
              Patna's Most Trusted<br /><span className="gradient-text">Steel Community</span>
            </h2>
            <p className="text-steel-300 text-base leading-relaxed mb-6 animate-on-scroll delay-200">
              <strong className="text-white">Sai Steel and Engineering Works</strong> is Patna's premier destination
              for high-quality Jindal certified stainless steel pipes, hollow sections, master pillars,
              stainless steel railings, steel doors, raw material pipes, and complete hardware accessories. We have built
              our reputation on trust, quality, and a genuine commitment to helping every customer succeed —
              from homeowners to large contractors.
            </p>
            <p className="text-steel-300 text-base leading-relaxed mb-8 animate-on-scroll delay-300">
              Whether you are building your dream home, managing a large construction site, or looking
              for custom steel fabrication — our expert team provides personalized guidance at every
              step. We stock a comprehensive range of products and are available seven days a week,
              from 9 AM to 7:30 PM.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll delay-400">
              <a href={`tel:${BUSINESS.phone}`}
                className="flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105">
                <Phone size={16} />
                Call Us Now
              </a>
              <a href={BUSINESS.mapsLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 glass border border-white/10 hover:bg-white/8 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105">
                <MapPin size={16} />
                View on Maps
                <ExternalLink size={14} className="text-steel-400" />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Team / community card replacing the owner card */}
            <div className="glass rounded-2xl p-6 flex items-center gap-5 animate-on-scroll delay-100">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-lg shadow-accent-500/30">
                <img
                  src="/assets/sai-steel-logo.png"
                  alt="Sai Steel and Engineering Works"
                  className="w-full h-full object-contain bg-white p-1"
                />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-accent-400 font-bold mb-1">Your Local Steel Partner</div>
                <div className="text-white font-bold text-xl font-display">Sai Steel & Engineering</div>
                <div className="text-steel-400 text-sm mt-1">A community-first steel distributor in Patna</div>
              </div>
            </div>

            {/* Attributes grid */}
            <div className="grid grid-cols-2 gap-3">
              {attributes.map((a, i) => (
                <div key={i} className="animate-on-scroll glass rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/8 transition-colors" style={{ transitionDelay: `${(i + 2) * 80}ms` }}>
                  <span className="text-lg">{a.icon}</span>
                  <span className="text-steel-300 text-sm font-medium">{a.label}</span>
                </div>
              ))}
            </div>

            {/* Latest update / quote */}
            <div className="glass-orange rounded-2xl p-5 animate-on-scroll delay-500">
              <div className="flex items-center gap-2 mb-3">
                <Zap size={16} className="text-accent-400" />
                <span className="text-accent-400 text-xs font-bold uppercase tracking-widest">Our Promise</span>
              </div>
              <p className="text-white text-sm leading-relaxed font-medium italic">
                "Good Service — Reinforce Your Dreams with Strength! Discover the best steel pipes in Patna
                at Sai Steel and Engineering Works. Get high-quality steel materials for your construction,
                manufacturing, or custom projects. Visit us and let our expert team guide you to success!"
              </p>
              <a href={`tel:${BUSINESS.phone}`}
                className="mt-3 inline-flex items-center gap-1 text-accent-400 text-sm font-semibold hover:text-accent-300 transition-colors">
                Call Us <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Products ──────────────────────────────────────────────────── */
function Products() {
  return (
    <section id="products" className="py-24 bg-steel-900" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent-400 text-sm font-bold uppercase tracking-widest mb-4 animate-on-scroll">
            <span className="w-8 h-px bg-accent-500" />
            Our Products
            <span className="w-8 h-px bg-accent-500" />
          </div>
          <h2 id="products-heading" className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4 animate-on-scroll delay-100">
            Complete Steel <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-steel-400 text-base sm:text-lg max-w-2xl mx-auto animate-on-scroll delay-200">
            From Jindal certified pipes to master pillars, stainless steel railings, and steel doors — everything your project needs under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p, i) => (
            <article key={i}
              className="animate-on-scroll glass card-shine rounded-2xl overflow-hidden hover:bg-white/8 hover:border-accent-500/20 border border-transparent transition-all duration-300 hover:-translate-y-1 group"
              style={{ transitionDelay: `${i * 60}ms` }}>
              {/* Image or icon */}
              {p.img ? (
                <div className="relative overflow-hidden h-48">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 right-3 text-xs font-bold bg-accent-500/90 text-white border border-accent-500/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {p.badge}
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-between px-6 pt-6 pb-2">
                  <span className="text-4xl">{p.icon}</span>
                  <span className="text-xs font-bold bg-accent-500/15 text-accent-400 border border-accent-500/20 px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                </div>
              )}
              <div className="p-5">
                {p.img && (
                  <span className="inline-block mb-2 text-xs font-bold bg-accent-500/15 text-accent-400 border border-accent-500/20 px-2 py-0.5 rounded-full sr-only">
                    {p.badge}
                  </span>
                )}
                <h3 className="text-white font-display font-bold text-lg mb-2 group-hover:text-accent-400 transition-colors">
                  {p.name}
                </h3>
                <p className="text-steel-400 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="text-xs text-steel-400 bg-white/5 border border-white/8 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <a href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/40">
            <Phone size={20} />
            Enquire About Any Product
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Reviews ───────────────────────────────────────────────────── */
function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-steel-950 steel-texture" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent-400 text-sm font-bold uppercase tracking-widest mb-4 animate-on-scroll">
            <span className="w-8 h-px bg-accent-500" />
            Customer Reviews
            <span className="w-8 h-px bg-accent-500" />
          </div>
          <h2 id="reviews-heading" className="text-4xl sm:text-5xl font-display font-bold text-white mb-4 animate-on-scroll delay-100">
            What Our Community <span className="gradient-text">Says</span>
          </h2>
          {/* Summary */}
          <div className="inline-flex items-center gap-4 glass rounded-2xl px-8 py-4 mt-4 animate-on-scroll delay-200">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-display font-black text-white">{BUSINESS.rating}</div>
              <Stars rating={5} />
              <div className="text-steel-400 text-xs mt-1">{BUSINESS.reviewCount} Reviews</div>
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div className="text-left">
              <div className="text-white font-bold text-sm mb-2">Rating Breakdown</div>
              {[5,4,3,2,1].map(n => (
                <div key={n} className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-steel-400 w-4">{n}</span>
                  <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: n === 5 ? '100%' : '0%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i}
              className="animate-on-scroll glass card-shine rounded-2xl p-6 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1 border border-white/5"
              style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center text-white text-sm font-black shrink-0`}>
                  {r.initials}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{r.name}</div>
                  <Stars rating={r.rating} />
                </div>
                <div className="ml-auto">
                  <span className="text-xs text-green-400 font-medium bg-green-400/10 border border-green-400/20 px-2 py-1 rounded-full">✓ Verified</span>
                </div>
              </div>
              <p className="text-steel-300 text-sm leading-relaxed italic">"{r.text}"</p>
              <div className="mt-4 flex items-center gap-2 text-steel-500 text-xs">
                <Star size={11} className="fill-yellow-400 text-yellow-400" />
                <span>Verified by Google</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <a href={BUSINESS.mapsLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass border border-white/10 hover:bg-white/8 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105">
            View All Reviews on Google
            <ExternalLink size={16} className="text-steel-400" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Hours & Location ──────────────────────────────────────────── */
function HoursAndLocation() {
  const currently = isCurrentlyOpen()
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <section className="py-24 bg-steel-900" aria-label="Business hours and location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hours */}
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 text-accent-400 text-sm font-bold uppercase tracking-widest mb-4">
              <Clock size={16} />
              Business Hours
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">
              Open <span className="gradient-text">Every Day</span>
            </h2>

            <div className="glass rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-accent-500/10 border-b border-white/8 flex items-center justify-between">
                <span className="text-white font-bold">Weekly Schedule</span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${currently ? 'bg-green-400/15 text-green-400 border border-green-400/20' : 'bg-red-400/15 text-red-400 border border-red-400/20'}`}>
                  {currently ? '● Open Now' : '● Closed Now'}
                </span>
              </div>
              {HOURS_DATA.map((h, i) => (
                <div key={i}
                  className={`flex items-center justify-between px-6 py-3.5 border-b border-white/5 last:border-0 ${h.day === today ? 'bg-accent-500/10' : ''} hover:bg-white/5 transition-colors`}>
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${h.open ? 'bg-green-400' : 'bg-red-400'}`} />
                    <span className={`font-medium ${h.day === today ? 'text-accent-400' : 'text-steel-300'}`}>
                      {h.day}
                      {h.day === today && <span className="ml-2 text-xs text-accent-400">(Today)</span>}
                    </span>
                  </div>
                  <span className="text-white font-semibold text-sm">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="animate-on-scroll delay-200">
            <div className="inline-flex items-center gap-2 text-accent-400 text-sm font-bold uppercase tracking-widest mb-4">
              <MapPin size={16} />
              Our Location
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">
              Visit Our <span className="gradient-text">Store</span>
            </h2>

            <div className="glass rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-accent-400" />
                </div>
                <div>
                  <div className="text-white font-bold mb-1">Full Address</div>
                  <p className="text-steel-300 text-sm leading-relaxed">{BUSINESS.address}</p>
                  <a href={BUSINESS.mapsLink} target="_blank" rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-accent-400 text-sm font-semibold hover:text-accent-300 transition-colors">
                    Open in Google Maps <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-accent-400" />
                </div>
                <div>
                  <div className="text-white font-bold mb-1">Phone Number</div>
                  <a href={`tel:${BUSINESS.phone}`} className="text-accent-400 font-bold text-xl hover:text-accent-300 transition-colors font-display">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-orange rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Truck size={18} className="text-accent-400" />
                <span className="text-white font-bold">Parking & Accessibility</span>
              </div>
              <ul className="space-y-2">
                {['Free parking lot on-site', 'Free street parking nearby', 'Wheelchair-accessible entrance', 'Wheelchair-accessible car park'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-steel-300 text-sm">
                    <CheckCircle size={14} className="text-green-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Contact ───────────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-steel-950 steel-texture" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-accent-400 text-sm font-bold uppercase tracking-widest mb-4 animate-on-scroll">
          <span className="w-8 h-px bg-accent-500" />
          Get In Touch
          <span className="w-8 h-px bg-accent-500" />
        </div>
        <h2 id="contact-heading" className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4 animate-on-scroll delay-100">
          Ready to Build? <span className="gradient-text">Let's Talk</span>
        </h2>
        <p className="text-steel-400 text-base sm:text-lg mb-12 animate-on-scroll delay-200">
          Our expert team is ready to help you pick the right steel products for your project.
          Call us today or visit our store in Patna.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Phone, title: 'Call Us', sub: BUSINESS.phone, href: `tel:${BUSINESS.phone}`, label: 'Call Now' },
            { icon: MapPin, title: 'Visit Us', sub: 'Ashiana Rd, Patna 800011', href: BUSINESS.mapsLink, label: 'Get Directions', ext: true },
            { icon: Clock, title: 'Open Hours', sub: '9:00 AM – 7:30 PM', href: '#about', label: 'Mon–Sun, All Week' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className={`animate-on-scroll glass card-shine rounded-2xl p-6 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-accent-400" />
                </div>
                <div className="text-white font-bold mb-1 font-display text-lg">{item.title}</div>
                <div className="text-steel-400 text-sm mb-4">{item.sub}</div>
                <a href={item.href} {...(item.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-1 text-accent-400 font-semibold text-sm hover:text-accent-300 transition-colors">
                  {item.label} <ChevronRight size={14} />
                </a>
              </div>
            )
          })}
        </div>

        <a href={`tel:${BUSINESS.phone}`}
          className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/40 pulse-glow animate-on-scroll">
          <Phone size={22} />
          Call {BUSINESS.phone}
        </a>
      </div>
    </section>
  )
}

/* ─── Footer ────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-black/60 border-t border-white/5 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/sai-steel-logo.png"
                alt="Sai Steel Logo"
                className="w-10 h-10 rounded-xl object-contain bg-white p-0.5"
              />
              <div>
                <div className="text-white font-display font-bold text-lg">Sai Steel & Engineering</div>
                <div className="text-accent-400 text-xs">Works, Patna — Bihar</div>
              </div>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed max-w-sm">
              Patna's most trusted dealer for Jindal quality stainless steel pipes, hollow sections, master pillars, stainless steel railings, steel doors, and hardware accessories.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Stars rating={5} />
              <span className="text-steel-400 text-xs ml-1">5.0 · 1100+ Google Reviews</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="text-white font-bold mb-4 font-display">Products</div>
            <ul className="space-y-2">
              {[
                'Stainless Steel Pipes',
                'Hollow Sections',
                'ERW / MS Raw Pipes',
                'Structural Steel',
                'Hardware Fittings',
                'Stainless Steel Railings',
                'Steel Doors',
                'Master Pillars',
              ].map(p => (
                <li key={p}>
                  <a href="#products" className="text-steel-400 text-sm hover:text-accent-400 transition-colors">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white font-bold mb-4 font-display">Contact</div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-steel-400 text-sm">
                <Phone size={14} className="text-accent-400 shrink-0 mt-0.5" />
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-accent-400 transition-colors">{BUSINESS.phone}</a>
              </li>
              <li className="flex items-start gap-2 text-steel-400 text-sm">
                <MapPin size={14} className="text-accent-400 shrink-0 mt-0.5" />
                <span>{BUSINESS.address}</span>
              </li>
              <li className="flex items-start gap-2 text-steel-400 text-sm">
                <Clock size={14} className="text-accent-400 shrink-0 mt-0.5" />
                <span>9:00 AM – 7:30 PM<br />Mon – Sun</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-steel-500 text-xs">
            © {new Date().getFullYear()} Sai Steel and Engineering Works, Patna. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={BUSINESS.mapsLink} target="_blank" rel="noopener noreferrer"
              className="text-steel-500 hover:text-accent-400 text-xs transition-colors flex items-center gap-1">
              Google Maps <ExternalLink size={11} />
            </a>
            <span className="text-steel-700">·</span>
            <span className="text-steel-500 text-xs">Plus Code: J3QP+9P Patna</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── App ───────────────────────────────────────────────────────── */
export default function App() {
  useScrollAnimate()
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <StatsSection />
        <Products />
        <About />
        <Reviews />
        <HoursAndLocation />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
