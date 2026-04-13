import { useState } from 'react'
import { Link } from 'react-router-dom'

const painPoints = [
  {
    number: '01',
    title: 'Time-Intensive Search',
    description:
      'Hours lost scrolling through endless product pages across multiple retailer sites. Fashion shopping sessions run 30–50% longer than other categories, with in-depth browsing exceeding 10 minutes per item.',
  },
  {
    number: '02',
    title: 'Decision Paralysis',
    description:
      'Too many options with no guidance on what pairs well leads to abandoned carts and buyer\'s remorse. Vast options create choice paralysis and prolonged, inefficient shopping experiences.',
  },
  {
    number: '03',
    title: 'Post-Purchase Frustration',
    description:
      'Wrong sizes and unmet expectations drive costly returns and lost confidence. Customers consistently struggle with inconsistent sizing and the inability to accurately assess fit before purchasing.',
  },
  {
    number: '04',
    title: 'Low Confidence',
    description:
      'Without personalized guidance, women struggle to trust their own style choices. Poor fit experiences lead to body dissatisfaction and reduced confidence in online shopping, creating lasting negative associations with fashion purchases.',
  },
]

const features = [
  {
    title: 'Personalized Guided Search',
    description:
      'AI analyzes your body shape against curated outfit silhouettes and garment attributes to surface outfits matched to your figure, style, and occasion.',
  },
  {
    title: 'Personal Shopper Agent',
    description:
      'An autonomous AI agent handles price comparison and checkout across multiple retailers — with shipment tracking and returns management on the roadmap.',
  },
  {
    title: 'Multi-Retailer Access',
    description:
      'Real-time inventory sourcing across multiple retailers ensures the best price and availability.',
  },
]


const tableRows = [
  {
    task: 'Style Magnet UI (Frontend)',
    stack: 'Next.js · Vercel',
  },
  {
    task: 'Product Scraping',
    stack: 'Apify',
  },
  {
    task: 'Outfit Recommendations & Fit Match',
    stack: 'PostgreSQL · Gemini · FastAPI',
  },
  {
    task: 'Natural Language Processing',
    stack: 'Gemini · PostgreSQL (Supabase)',
  },
  {
    task: 'Checkout AI Automation',
    stack: 'Playwright (Python)',
  },
  {
    task: 'Database',
    stack: 'PostgreSQL (Supabase)',
  },
]

const aiCapabilities = [
  {
    capability: 'DISCOVERY',
    title: 'Fit Intelligence',
    status: 'live',
    description:
      "Customer body shape and outfit garment shapes are sent to an LLM, which scores the match and explains in natural language why the outfit works for the user's figure — in real time.",
  },
  {
    capability: 'RECOMMENDATIONS',
    title: 'Adaptive Catalogue',
    status: 'live',
    description:
      'Learns from user favourites and evolves recommendations as new outfits are added to the database — growing smarter with every addition.',
  },
  {
    capability: 'SOURCING',
    title: 'Real-Time Price Intelligence',
    status: 'live',
    description:
      'Scans inventory across multiple retailers simultaneously to surface the best available price and stock.',
  },
  {
    capability: 'SIZING',
    title: 'Precision Sizing',
    status: 'roadmap',
    description:
      "Size charts are retrieved per garment and matched against the customer's own measurements to recommend the exact size — so they get the right fit every time.",
  },
  {
    capability: 'SUBSTITUTIONS',
    title: 'Smart Alternatives',
    status: 'roadmap',
    description:
      'Proposes attribute-matched alternatives when items are unavailable, out of budget, or out of stock.',
  },
  {
    capability: 'AI SHOPPING AGENT',
    title: 'Autonomous Checkout',
    status: 'live',
    description:
      'An AI agent browses your selected retailers, identifies each outfit item at the lowest available price, adds it to the cart, and autonomously completes the full checkout — customer details, shipping address, and payment information — on your behalf. Currently live across two major retail storefronts.',
  },
  {
    capability: 'NATURAL LANGUAGE SEARCH',
    title: 'Conversational Discovery',
    status: 'live',
    description:
      "Customers describe what they're looking for in natural language — such as 'a dress for a wedding as a guest' — and the system queries the vector database to surface the most relevant outfit matches instantly.",
  },
]

const dataPipeline = [
  {
    number: '01',
    title: 'Data Collection',
    rows: [
      {
        tag: 'CUSTOMER PROFILE',
        text: 'Customer signs up and enters body shape attributes — shoulder width, waist, and hip proportions (e.g. narrow, wide, cinched, or same width as hips).',
      },
      {
        tag: 'MEASUREMENTS',
        text: 'Customer enters their exact body measurements to enable precise fit matching.',
      },
      {
        tag: 'OUTFIT SCRAPING',
        text: 'Outfit data — images, prices, and descriptions — are scraped from partner retailers and stored in a vector database.',
      },
      {
        tag: 'CLOTHING SHAPES',
        text: 'Each clothing item in every outfit has its shape attributes extracted and stored in the vector database alongside product data.',
      },
    ],
  },
  {
    number: '02',
    title: 'Data Processing',
    rows: [
      {
        tag: 'LLM INPUT',
        text: 'Customer body shape profile and the full outfit catalogue are formatted and sent to the LLM in JSON format.',
      },
      {
        tag: 'FAVOURITES',
        text: "The customer's saved favourite outfits are analysed to identify style patterns and preferences to inform recommendations.",
      },
    ],
  },
  {
    number: '03',
    title: 'AI Model Processing',
    rows: [
      {
        tag: 'FIT ENGINE',
        text: "The LLM receives the customer's body shape alongside the shape attributes of every clothing item in the catalogue. It determines which outfits will look best on the customer's specific body shape and features.",
      },
      {
        tag: 'SHOPPING AGENT',
        text: "If a customer purchases an outfit, the AI shopping agent queries the vector database to identify the retailer offering the lowest price for each clothing item, then proceeds to checkout autonomously using the customer's stored profile information.",
      },
    ],
  },
  {
    number: '04',
    title: 'Output',
    rows: [
      {
        tag: 'RECOMMENDATION',
        text: "A personalised fit score is generated alongside a 3-sentence natural language explanation of why each outfit will look best on the customer's body.",
      },
      {
        tag: 'NATURAL LANGUAGE',
        text: 'Customers can type a natural language prompt — such as "I\'m looking for a dress to wear to a wedding as a guest" — and the system surfaces the most relevant outfit matches.',
      },
      {
        tag: 'AUTONOMOUS CHECKOUT',
        text: "The AI shopping agent completes the entire checkout process on the customer's behalf — selecting items, sizes, filling in personal and payment details, and finalising the purchase across multiple retailer storefronts.",
      },
    ],
  },
]

const whyNowRows = [
  {
    number: '01',
    title: 'AI is Disrupting Fashion Discovery',
    body: '73% of fashion executives plan to integrate generative AI into their businesses by 2026. The industry is at an inflection point.',
    source: 'McKinsey State of Fashion 2026',
  },
  {
    number: '02',
    title: 'Autonomous AI Agents Are Coming',
    body: 'Agentic AI is shifting from chatbots to autonomous decision-makers that can browse, compare, and purchase on behalf of users — the infrastructure for this shift exists today.',
    source: 'McKinsey State of Fashion 2026',
  },
  {
    number: '03',
    title: 'The Opportunity Window',
    body: 'No major player has combined AI-driven styling, fit prediction, and multi-retailer aggregation into one seamless experience — yet.',
    source: 'Market Analysis 2025',
  },
]

const kpiCards = [
  {
    category: 'ACQUISITION',
    current: '100+',
    live: true,
    target: 'TARGET: 1,000',
    insight: 'Waitlist signups — real demand signal before a single line of marketing spend.',
  },
  {
    category: 'ACTIVATION',
    current: '—',
    live: false,
    target: 'TARGET: 500',
    insight:
      'Account signups — users who have moved from interest to active engagement with the platform.',
  },
  {
    category: 'CONVERSION',
    current: '—',
    live: false,
    target: 'TARGET: 250',
    insight:
      'Orders placed — the clearest signal that Style Magnet is delivering enough confidence to drive a purchase.',
  },
  {
    category: 'AI EFFECTIVENESS',
    current: '—',
    live: false,
    target: 'TARGET: >70%',
    insight:
      '% of orders with an AI fit score present — tells us whether the AI is actually influencing discovery and purchase decisions, or if customers are bypassing it entirely.',
  },
  {
    category: 'RELIABILITY',
    current: '—',
    live: false,
    target: 'TARGET: >90%',
    insight:
      'Agent checkout success rate — measures how consistently the Playwright agent completes the full checkout process without error across retailer storefronts.',
  },
  {
    category: 'QUALITY',
    current: '—',
    live: false,
    target: 'TARGET: <10%',
    insight:
      '30-day return rate — a lower return rate signals that AI fit matching is working and customers are receiving items that meet expectations.',
  },
]

const gtmRows = [
  {
    number: '01',
    stage: 'Awareness',
    description:
      'Organic content across LinkedIn, Instagram, and Pinterest — targeting professional women and fashion-forward audiences with style content, product storytelling, and AI fashion insights.',
  },
  {
    number: '02',
    stage: 'Consideration',
    description:
      'Demo video showcasing the AI fit engine and autonomous shopping agent drives traffic to the Style Magnet waitlist landing page.',
  },
  {
    number: '03',
    stage: 'Conversion',
    description:
      'Waitlist signup converts to account creation — users complete their body shape profile, measurements, and style preferences to unlock personalised recommendations.',
  },
  {
    number: '04',
    stage: 'Activation',
    description:
      "First AI fit score received — the moment Style Magnet delivers its core promise. A personalised, body-shape-aware outfit match with a natural language explanation of why it works for the user's figure.",
  },
  {
    number: '05',
    stage: 'Loyalty',
    description:
      'Users return as the outfit catalogue grows, save favourites, and place repeat orders via the AI shopping agent — building habitual engagement with the platform.',
  },
]

const compRows = [
  { need: 'Accurate Fit',     stitchFix: true,  ltk: false, modesens: false },
  { need: 'Personalization',  stitchFix: true,  ltk: false, modesens: false },
  { need: 'Style Variety',    stitchFix: false, ltk: true,  modesens: true  },
  { need: 'Ease of Shopping', stitchFix: false, ltk: false, modesens: true  },
]

const personas = [
  {
    avatar: '/sarah.png',
    name: 'Sarah, 33',
    label: 'SENIOR MARKETING DIRECTOR',
    bio: 'Ambitious and efficiency-driven, Sarah is a San Francisco professional who shops primarily on mobile during her commute. She earns $120K annually and prioritizes quality over quantity — but her packed calendar leaves little room for browsing.',
    goals: [
      'Find flattering clothes quickly without endless browsing',
      'Eliminate fit guesswork and avoid costly returns',
      'Build a wardrobe that works across work and social occasions',
    ],
    frustrations: [
      'Too little time for considered shopping',
      'Inconsistent sizing makes online purchases a gamble',
      'Struggles to assess fit accurately before buying',
    ],
  },
  {
    avatar: '/jessica.png',
    name: 'Jessica, 40',
    label: 'SENIOR UX DESIGNER',
    bio: 'A creative and style-aware designer balancing fintech leadership with family life in Austin. Jessica has the disposable income to invest in quality pieces but not the time to find them — she wants to stay current without the scroll.',
    goals: [
      'Discover new brands aligned with her aesthetic',
      'Stay current with trends without dedicating hours to research',
      'Build a versatile, mix-and-match wardrobe within budget',
    ],
    frustrations: [
      'Styling confidence doesn\'t always translate to shopping confidence',
      'Overwhelmed by the volume of choices across retailers',
      'Frequent returns due to poor fit erode trust in online shopping',
    ],
  },
  {
    avatar: '/maya.png',
    name: 'Maya, 26',
    label: 'PROGRAM COORDINATOR',
    bio: 'Social media savvy and trend-focused, Maya is building her wardrobe on a $70K salary in Washington, DC. She has the time to research deals but needs guidance cutting through fast fashion noise to find pieces that are both affordable and worth buying.',
    goals: [
      'Stay on top of trends without overspending',
      'Find affordable fashion that doesn\'t sacrifice quality',
      'Build a stylish, intentional wardrobe on a real budget',
    ],
    frustrations: [
      'Budget constraints narrow her options significantly',
      'Fast fashion is overwhelming and hard to evaluate for quality',
      'Difficulty finding pieces that feel worth the investment',
    ],
  },
]

const phases = [
  {
    label: 'Phase 01',
    title: 'Foundation Build',
    items: [
      { tag: 'INFRASTRUCTURE', text: 'Core systems architecture and technical environment setup' },
      { tag: 'DATABASE', text: 'Database architecture design and schema planning' },
      { tag: 'FRONTEND', text: 'Frontend planning, component structure, and customer journey mapping' },
      { tag: 'UX', text: 'User flows and wireframe planning' },
    ],
  },
  {
    label: 'Phase 02',
    title: 'Core Feature Development',
    items: [
      { tag: 'AI', text: 'AI Match Fit engine — body-shape-aware outfit recommendations using LLM scoring' },
      { tag: 'AI', text: 'LLM selection and evaluation across Claude, GPT, and Gemini' },
      { tag: 'AGENT', text: 'AI personal shopping agent — autonomous multi-retailer checkout automation' },
      { tag: 'DATABASE', text: 'Retailer outfit population and DB mapping' },
      { tag: 'GTM', text: 'Early go-to-market — waitlist building and audience development' },
    ],
  },
  {
    label: 'Phase 03',
    title: 'Integration',
    items: [
      { tag: 'FRONTEND', text: 'Frontend and backend connected end-to-end' },
      { tag: 'DATABASE', text: 'Customer profile data populated — body shape, address, preferences' },
      { tag: 'DATABASE', text: 'Outfit catalogue fully populated across retailers' },
      { tag: 'AGENT', text: 'AI shopping agent workflow tested across live retailer storefronts' },
      { tag: 'ENGINEERING', text: 'Bug fixes and integration issues resolved' },
      { tag: 'GTM', text: 'Continued waitlist growth and pre-launch audience targeting' },
    ],
  },
  {
    label: 'Phase 04',
    title: 'Stabilization',
    items: [
      { tag: 'ENGINEERING', text: 'Rigorous end-to-end testing across all systems and user flows' },
      { tag: 'ENGINEERING', text: 'Bug fixes and edge case resolution' },
      { tag: 'PERFORMANCE', text: 'Performance hardening and load testing' },
      { tag: 'ENGINEERING', text: 'Production readiness validation across frontend and backend' },
    ],
  },
  {
    label: 'Phase 05',
    title: 'Launch 🚀',
    items: [
      { tag: 'LAUNCH', text: 'Style Magnet goes live' },
      { tag: 'GTM', text: 'Full go-to-market execution — waitlist conversion and user activation' },
      { tag: 'GROWTH', text: 'Onboarding first users and collecting early feedback for iteration' },
    ],
  },
  {
    label: 'Phase 06',
    title: 'Growth & Iteration',
    items: [
      { tag: 'SIZING', text: 'Precision sizing engine — garment size charts matched against customer measurements for exact fit every time.' },
      { tag: 'SUBSTITUTIONS', text: 'Smart alternatives proposed when items are out of stock, out of budget, or unavailable at preferred retailers.' },
      { tag: 'RECOMMENDATIONS', text: 'Continued outfit catalogue expansion and recommendation refinement as the database grows.' },
      { tag: 'AGENT', text: 'Returns management automation added to the AI personal shopping agent end-to-end workflow.' },
      { tag: 'GROWTH', text: 'Waitlist conversion, user onboarding optimization, and early retention tracking.' },
      { tag: 'FEEDBACK', text: 'First user feedback loops informing the next iteration cycle.' },
    ],
  },
]

function RoadmapAccordion() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      {phases.map((phase, i) => {
        const isOpen = activeIndex === i
        return (
          <div
            key={i}
            className={`border-b border-warm-gray ${isOpen ? 'border-l-4 border-l-gold' : 'border-l-4 border-l-transparent'}`}
          >
            <button
              className="w-full flex items-center justify-between py-5 px-4 text-left"
              onClick={() => setActiveIndex(isOpen ? null : i)}
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-base tracking-[0.2em] uppercase font-semibold flex-shrink-0" style={{ color: '#8B6914' }}>
                  {phase.label}
                </span>
                <span className="font-display font-bold leading-snug" style={{ fontSize: '1.5rem', color: '#1A1A1A' }}>
                  {phase.title}
                </span>
              </div>
              <span className="font-mono text-xl leading-none flex-shrink-0 ml-6" style={{ color: '#8B6914' }}>
                {isOpen ? '−' : '+'}
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? '600px' : '0px' }}
            >
              <div className="pt-4 pb-6 px-4">
                {phase.items.map((item, j) => (
                  <div key={j}>
                    {j > 0 && <div className="border-t border-warm-gray" />}
                    <div className="grid grid-cols-[180px_1fr] gap-6 py-3 items-start">
                      <span className="font-mono text-sm tracking-widest uppercase font-semibold text-[#4A4A4A] pt-0.5">
                        {item.tag}
                      </span>
                      <span className="font-sans text-[#4A4A4A] text-base leading-relaxed">
                        {item.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function StyleMagnet() {
  return (
    <div className="animate-page-in pt-24 min-h-screen px-6 md:px-12 max-w-7xl mx-auto">
      {/* Back */}
      <div className="pt-10 mb-20">
        <Link
          to="/"
          className="font-mono text-xs tracking-widest uppercase text-[#4A4A4A] hover:text-[#8B6914] transition-colors duration-200 flex items-center gap-2"
        >
          <span>←</span> Back to Work
        </Link>
      </div>

      {/* ── Project header ──────────────────────────────── */}
      <div className="border-t border-warm-gray pt-14 grid md:grid-cols-12 gap-10 md:items-center">
        <div className="md:col-span-3 flex flex-col gap-3">
          <span className="font-mono text-sm tracking-[0.2em] uppercase font-semibold" style={{ color: '#8B6914' }}>
            AI Product
          </span>
          <img
            src="/Style_Magnet_New_Hero_Img.png"
            alt="Style Magnet logo"
            className="w-full h-auto mt-4"
          />
        </div>

        <div className="md:col-span-9">
          <h1
            className="font-display font-bold text-charcoal leading-[0.9] mb-6"
            style={{ fontSize: 'clamp(44px, 9vw, 120px)' }}
          >
            Style
            <br />
            <span className="font-light italic">Magnet</span>
          </h1>
          <p className="font-sans text-[#4A4A4A] text-lg leading-relaxed max-w-2xl">
            Style Magnet is a fashion AI platform that simplifies online shopping for busy
            professional women with customer-specific, data-informed personalization. Many women
            face poor fit, decision fatigue, and a time-consuming purchasing process — leading us
            to build AI outfit recommendations based on body shape and style preferences, and an
            autonomous AI personal shopper agent. By streamlining product discovery, outfit
            creation, and purchasing, Style Magnet enhances customer satisfaction, reduces
            returns, and delivers a painless shopping experience.
          </p>
        </div>
      </div>

      {/* ── 01 Problem ──────────────────────────────────── */}
      <section className="mt-28 border-t border-warm-gray pt-16 pb-24">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          01 — Problem
        </p>

        <h2
          className="font-display font-semibold text-charcoal leading-tight mb-16"
          style={{ fontSize: 'clamp(30px, 5vw, 62px)' }}
        >
          The modern shopping experience
          <br className="hidden md:block" /> is broken.
        </h2>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { number: '10+ min', label: 'SHOPPING SESSION PER ITEM' },
            { number: '40%', label: 'WOMEN DISAPPOINTED WITH FIT' },
            { number: '84%', label: 'FASHION CART ABANDONMENT RATE' },
          ].map((stat) => (
            <div key={stat.label} className="border-l-4 border-gold bg-[#EDEAE5] p-8 flex flex-col gap-3">
              <p
                className="font-display font-bold text-charcoal leading-none"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
              >
                {stat.number}
              </p>
              <p className="font-mono text-sm tracking-[0.2em] uppercase font-semibold" style={{ color: '#8B6914' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-gray">
          {painPoints.map((card) => (
            <div key={card.number} className="bg-cream p-8 flex flex-col gap-5">
              <span
                className="font-display font-bold leading-none select-none"
                style={{
                  fontSize: 'clamp(56px, 6vw, 84px)',
                  color: 'transparent',
                  WebkitTextStroke: '1px #C9A96E',
                }}
              >
                {card.number}
              </span>
              <div className="flex-1 flex flex-col gap-3 pb-6 border-b border-gold/35">
                <h3 className="font-display font-semibold font-bold text-charcoal text-xl leading-snug">
                  {card.title}
                </h3>
                <p className="text-[#4A4A4A] text-base leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 02 Target Audience ──────────────────────────── */}
      <section className="border-t border-warm-gray pt-16 pb-24">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          02 — Target Audience
        </p>

        <h2
          className="font-display font-semibold text-charcoal leading-tight mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          Built for women who want style{' '}
          <span className="font-light italic">without the struggle.</span>
        </h2>
        <p className="font-mono text-sm tracking-[0.18em] uppercase font-semibold text-[#4A4A4A] mb-14 leading-relaxed">
          Prioritizes Convenience · Dynamic Lifestyle · Fashion Disposable Income · Urban Residents
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((persona) => (
            <div
              key={persona.name}
              className="group bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 hover:shadow-[0_10px_32px_rgba(0,0,0,0.1)] transition-all duration-200"
            >
              <div
                className="w-full bg-gold"
                style={{ height: '80px', borderRadius: '0 0 50% 50% / 0 0 30px 30px' }}
              />
              <div className="flex justify-center -mt-12">
                <img
                  src={persona.avatar}
                  alt={persona.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover"
                />
              </div>
              <div className="px-8 pb-8 pt-4 flex flex-col items-center gap-5">
                <div className="text-center">
                  <h3 className="font-display font-bold text-charcoal text-2xl leading-snug">
                    {persona.name}
                  </h3>
                  <p className="font-mono text-sm tracking-[0.2em] uppercase font-semibold mt-1.5" style={{ color: '#8B6914' }}>
                    {persona.label}
                  </p>
                </div>
                <p className="text-[#4A4A4A] text-base leading-relaxed text-center">{persona.bio}</p>
                <div className="w-full space-y-4">
                  <div>
                    <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-2" style={{ color: '#1A1A1A' }}>
                      Goals
                    </p>
                    <ul className="space-y-2">
                      {persona.goals.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-base text-[#4A4A4A] leading-relaxed">
                          <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: '#8B6914' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-2" style={{ color: '#1A1A1A' }}>
                      Frustrations
                    </p>
                    <ul className="space-y-2">
                      {persona.frustrations.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-base text-[#4A4A4A] leading-relaxed">
                          <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: '#8B6914' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 03 Competitive Landscape ────────────────────── */}
      <section className="border-t border-warm-gray pt-16 pb-24">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          03 — Competitive Landscape
        </p>

        <h2
          className="font-display font-semibold text-charcoal leading-tight mb-14"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          Style Magnet wins where{' '}
          <span className="font-light italic">it matters most.</span>
        </h2>

        <p className="font-sans text-[#4A4A4A] text-lg leading-relaxed max-w-2xl mb-10">
          The fashion discovery space is crowded, but no competitor delivers the full picture. Stitch
          Fix offers human styling but locks users into a rigid subscription with limited flexibility.
          LTK drives discovery through influencer content but offers no fit matching or
          personalization. Modesens aggregates luxury inventory but is style-agnostic with no
          guidance layer. Style Magnet is the only platform that combines body-shape-aware fit
          matching, evolving personal recommendations, trend-driven style variety, and an end-to-end
          AI personal shopper — in one seamless experience.
        </p>

        <div className="overflow-x-auto">
          <table
            className="w-full min-w-[580px]"
            style={{ borderCollapse: 'separate', borderSpacing: 0 }}
          >
            <thead>
              <tr>
                <th className="py-4 px-6 text-left font-mono text-sm tracking-widest uppercase font-semibold text-[#4A4A4A] w-2/5">
                  Customer Needs
                </th>
                <th className="py-5 px-6 bg-white rounded-t-xl text-center font-display font-bold text-charcoal text-base border border-[#C9A96E]">
                  Style Magnet
                </th>
                {['Stitch Fix', 'LTK', 'Modesens'].map((comp) => (
                  <th
                    key={comp}
                    className="py-4 px-6 text-center font-mono text-sm tracking-widest uppercase font-semibold text-[#4A4A4A]"
                  >
                    {comp}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compRows.map((row, i) => {
                const isLast = i === compRows.length - 1
                const compValues = [row.stitchFix, row.ltk, row.modesens]
                return (
                  <tr key={row.need}>
                    <td className="border-t border-warm-gray py-5 px-6 font-sans font-semibold text-charcoal text-base">
                      {row.need}
                    </td>
                    <td
                      className={`bg-white py-5 px-6 text-center border-l border-r border-b border-[#C9A96E] ${
                        isLast ? 'rounded-b-xl' : ''
                      }`}
                    >
                      <span className="text-gold text-xl font-bold">✓</span>
                    </td>
                    {compValues.map((val, j) => (
                      <td key={j} className="border-t border-warm-gray py-5 px-6 text-center">
                        {val ? (
                          <span className="text-[#4A4A4A] text-lg">✓</span>
                        ) : (
                          <span className="text-[#4A4A4A] text-lg">✕</span>
                        )}
                      </td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 04 Solution ─────────────────────────────────── */}
      <section className="border-t border-warm-gray pt-16 pb-24">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          04 — Solution
        </p>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-14">
          <div className="md:col-span-7">
            <h2
              className="font-display font-semibold text-charcoal leading-tight"
              style={{ fontSize: 'clamp(26px, 3.8vw, 50px)' }}
            >
              From hours of searching to perfect finds — at a fraction of the cost of a personal
              stylist.
            </h2>
          </div>
          <div className="md:col-span-5 flex items-start pt-1">
            <p className="text-[#4A4A4A] text-lg leading-relaxed">
              Style Magnet is an AI-powered personal shopper that eliminates the frustration of
              outfit pairing, retailer-hopping, and getting the wrong fit. Our AI analyzes your body
              shape against curated outfit silhouettes and garment attributes, then scores each match
              and explains exactly why it works for your figure. The AI personal shopper takes it
              from there — sourcing every piece across multiple retailers, finding the best price,
              and automatically completing the checkout process for you. One experience. Done.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-gold/30 rounded-sm p-8 flex flex-col gap-4 hover:border-gold/65 transition-colors duration-300 group"
            >
              <div className="w-5 h-px bg-gold group-hover:w-8 transition-all duration-300" />
              <h3 className="font-display font-semibold font-bold text-charcoal text-2xl leading-snug">
                {feature.title}
              </h3>
              <p className="text-[#4A4A4A] text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 05 Roadmap ──────────────────────────────────── */}
      <section className="border-t border-warm-gray pt-16 pb-24">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          05 — Roadmap
        </p>

        <h2
          className="font-display font-semibold text-charcoal leading-tight mb-20"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          From zero to launch —{' '}
          <span className="font-light italic">built in phases.</span>
        </h2>

        {/* Accordion */}
        <RoadmapAccordion />
      </section>

      {/* ── 06 Customer Journey Map ─────────────────────── */}
      <section className="border-t border-warm-gray pt-16 pb-24">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          06 — Customer Journey Map
        </p>

        <h2
          className="font-display font-semibold text-charcoal leading-tight mb-6"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          The Style Magnet experience.
        </h2>

        <p className="font-sans text-[#4A4A4A] text-lg leading-relaxed max-w-2xl mb-12">
          A reimagined shopping journey — from discovery to doorstep — designed to eliminate
          friction at every step.
        </p>

        {/* Stage cards */}
        <div className="relative">
          {/* Connecting gold line through circle centers */}
          <div className="absolute left-0 right-0 hidden md:block" style={{ top: '20px' }}>
            <div className="h-px bg-gold/40 mx-[10%]" />
          </div>

          <div className="flex gap-4 overflow-x-auto md:overflow-visible md:grid md:grid-cols-5 pb-4 md:pb-0">
            {[
              {
                num: '01',
                stage: 'DISCOVERY',
                actions:
                  'Browses curated outfits on the Style Magnet platform.',
                touchPoints:
                  'Style Magnet platform, curated outfit catalogue.',
              },
              {
                num: '02',
                stage: 'FIT MATCHING',
                actions:
                  'AI scores each outfit against the user\'s body shape and generates a natural language explanation of why it works for their figure.',
                touchPoints:
                  'AI fit engine, body shape profile, LLM scoring and explanation.',
              },
              {
                num: '03',
                stage: 'DECISION',
                actions:
                  'Selects an outfit with full confidence — no guesswork, no size uncertainty.',
                touchPoints:
                  'Outfit recommendation card with fit score and personalized explanation.',
              },
              {
                num: '04',
                stage: 'AUTOMATED PURCHASE',
                actions:
                  'AI personal shopping agent sources every piece across multiple retailers, finds the best price, and automatically completes the checkout process.',
                touchPoints:
                  'Multi-retailer storefront automation, Playwright agent, checkout completion.',
              },
              {
                num: '05',
                stage: 'DELIVERY',
                actions:
                  'Items arrive fitting as expected — fewer surprises, fewer returns.',
                touchPoints:
                  'Retailer delivery, first wear, Style Magnet fit confidence.',
              },
            ].map((card) => (
              <div key={card.num} className="flex flex-col items-center flex-shrink-0 w-56 md:w-auto">
                {/* Gold circle — overlaps card top */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-gold flex items-center justify-center mb-0 -mb-5 flex-shrink-0">
                  <span className="font-mono text-2xl font-bold text-cream">{card.num}</span>
                </div>

                {/* Card */}
                <div className="w-full bg-white rounded-lg p-6 pt-8 shadow-sm hover:-translate-y-1 transition-transform duration-200" style={{ boxShadow: '0 2px 12px rgba(180,160,130,0.10)' }}>
                  <p className="font-mono text-sm tracking-[0.18em] uppercase font-semibold text-center mb-5" style={{ color: '#8B6914' }}>
                    {card.stage}
                  </p>

                  <div>
                    <p className="font-mono text-sm tracking-widest uppercase font-semibold text-[#4A4A4A] mb-1">
                      ACTIONS
                    </p>
                    <p className="font-sans text-[#4A4A4A] text-sm leading-relaxed">
                      {card.actions}
                    </p>
                  </div>

                  <div className="border-t border-warm-gray mt-4 pt-4">
                    <p className="font-mono text-sm tracking-widest uppercase font-semibold text-[#4A4A4A] mb-1">
                      TOUCH POINTS
                    </p>
                    <p className="font-sans text-[#4A4A4A] text-sm leading-relaxed">
                      {card.touchPoints}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 AI Hypothesis ────────────────────────────── */}
      <section className="border-t border-warm-gray pt-16 pb-24">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          07 — AI Hypothesis
        </p>

        <h2
          className="font-display font-semibold text-charcoal leading-tight mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          Two hypotheses.{' '}
          <span className="font-light italic">One north star.</span>
        </h2>
        <p className="text-[#4A4A4A] text-lg leading-relaxed mb-16 max-w-2xl">
          Each hypothesis is structured as: if we deliver X to Y users, they will Z — and we
          capture value through W.
        </p>

        <div className="border-l-4 border-gold pl-8 md:pl-12 py-8">
          <p className="font-mono text-sm tracking-[0.2em] uppercase font-semibold mb-5" style={{ color: '#8B6914' }}>
            Hypothesis 01
          </p>
          <h3
            className="font-display font-semibold text-charcoal leading-snug mb-6"
            style={{ fontSize: 'clamp(22px, 2.8vw, 34px)' }}
          >
            Guiding Pre-Purchase Decisions
          </h3>
          <p className="text-[#4A4A4A] text-base leading-relaxed max-w-3xl">
            If we deliver{' '}
            <strong className="text-charcoal font-semibold">
              AI-powered personal shopping guidance
            </strong>{' '}
            with &gt;20% conversion rates and &gt;4.5/5 satisfaction to shoppers seeking
            frictionless discovery, they can{' '}
            <strong className="text-charcoal font-semibold">
              purchase confidently without overwhelm or fit uncertainty
            </strong>{' '}
            — driving higher conversions, larger baskets, fewer returns, and stronger loyalty.
            Value captured through{' '}
            <strong className="text-charcoal font-semibold">
              premium subscriptions, sales commissions, and data partnerships
            </strong>
            .
          </p>
        </div>

        <div className="h-px bg-warm-gray my-1" />

        <div className="border-l-4 border-gold pl-8 md:pl-12 py-8">
          <p className="font-mono text-sm tracking-[0.2em] uppercase font-semibold mb-5" style={{ color: '#8B6914' }}>
            Hypothesis 02
          </p>
          <h3
            className="font-display font-semibold text-charcoal leading-snug mb-6"
            style={{ fontSize: 'clamp(22px, 2.8vw, 34px)' }}
          >
            The Personal Shopper Agent
          </h3>
          <p className="text-[#4A4A4A] text-base leading-relaxed max-w-3xl">
            If we deliver an{' '}
            <strong className="text-charcoal font-semibold">
              AI shopping agent that handles price search, checkout, tracking, and returns
              end-to-end
            </strong>{' '}
            — delivering{' '}
            <strong className="text-charcoal font-semibold">30% time savings</strong> for
            time-constrained shoppers — they can complete purchases hands-off without retailer
            searching or logistics overhead. This creates higher transaction frequency, increased
            lifetime value, and stronger brand dependency. Value captured through{' '}
            <strong className="text-charcoal font-semibold">
              transaction fees, premium subscriptions, and retailer commissions
            </strong>
            .
          </p>
        </div>
      </section>

      {/* ── 08 AI Strategy ──────────────────────────────── */}
      <section className="border-t border-warm-gray pt-16 pb-24">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          08 — AI Strategy
        </p>

        <h2
          className="font-display font-semibold text-charcoal leading-tight mb-14"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          Seven AI capabilities.{' '}
          <span className="font-light italic">One seamless experience.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
          {aiCapabilities.map((card, i) => {
            let colClass = 'md:col-span-2'
            if (i === 4) colClass = 'md:col-start-2 md:col-span-2'
            if (i === 5) colClass = 'md:col-start-4 md:col-span-2'
            if (i === 6) colClass = 'md:col-start-6 md:col-span-2'
            return (
              <div
                key={card.capability}
                className={`${colClass} group bg-cream border-l-2 border-gold p-8 flex flex-col gap-4
                  hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)]
                  transition-all duration-200`}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-sm tracking-[0.2em] uppercase font-semibold" style={{ color: '#8B6914' }}>
                    {card.capability}
                  </p>
                  {card.status === 'live' ? (
                    <span className="font-mono text-sm tracking-widest uppercase px-2 py-0.5 rounded-full bg-[#C9A96E] text-cream flex-shrink-0">
                      LIVE
                    </span>
                  ) : (
                    <span className="font-mono text-sm tracking-widest uppercase px-2 py-0.5 rounded-full bg-[#EDEAE5] text-charcoal/45 flex-shrink-0">
                      ROADMAP
                    </span>
                  )}
                </div>
                <h3 className="font-display font-semibold font-bold text-charcoal text-xl leading-snug">
                  {card.title}
                </h3>
                <p className="text-[#4A4A4A] text-base leading-relaxed">{card.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 09 Data Pipeline ────────────────────────────── */}
      <section className="border-t border-warm-gray pt-16 pb-24">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          09 — Data Pipeline
        </p>

        <h2
          className="font-display font-semibold text-charcoal leading-tight mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          How the data flows.
        </h2>

        <p className="font-sans text-[#4A4A4A] text-lg leading-relaxed max-w-2xl mb-12">
          From customer signup to personalised outfit recommendation and autonomous checkout —
          every step is data-driven.
        </p>

        <div className="divide-y divide-warm-gray">
          {dataPipeline.map((stage) => (
            <div key={stage.number} className="py-10">
              <div className="flex items-baseline gap-8 mb-8">
                <span className="font-mono text-5xl leading-none flex-shrink-0" style={{ color: '#8B6914' }}>
                  {stage.number}
                </span>
                <h3
                  className="font-display font-semibold text-charcoal leading-snug"
                  style={{ fontSize: 'clamp(22px, 2.8vw, 34px)' }}
                >
                  {stage.title}
                </h3>
              </div>
              <div className="divide-y divide-warm-gray">
                {stage.rows.map((row) => (
                  <div key={row.tag} className="grid grid-cols-[160px_1fr] gap-6 py-4">
                    <span className="font-mono text-sm tracking-[0.2em] uppercase font-semibold text-[#4A4A4A] pt-0.5">
                      {row.tag}
                    </span>
                    <p className="font-sans text-[#4A4A4A] text-base leading-relaxed">
                      {row.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 10 Tech Stack ───────────────────────────────── */}
      <section className="border-t border-warm-gray pt-16 pb-24">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          10 — Tech Stack
        </p>

        <h2
          className="font-display font-semibold text-charcoal leading-tight mb-14"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          The stack behind{' '}
          <span className="font-light italic">the experience.</span>
        </h2>

        <div className="mb-8 overflow-x-auto">
          <div className="min-w-[400px]">
            <div className="grid grid-cols-2 bg-gold px-6 py-4">
              {['Task', 'Tech Stack'].map((col) => (
                <span
                  key={col}
                  className="font-mono text-base font-bold tracking-widest uppercase text-cream"
                >
                  {col}
                </span>
              ))}
            </div>
            {tableRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 px-6 py-5 border-b border-warm-gray ${
                  i % 2 === 0 ? 'bg-cream' : 'bg-[#EDEAE5]'
                }`}
              >
                <span className="font-sans font-medium text-base pr-4 leading-snug" style={{ color: '#1A1A1A' }}>
                  {row.task}
                </span>
                <span className="font-mono text-base tracking-wide text-[#4A4A4A] leading-relaxed">
                  {row.stack}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11 System Architecture ──────────────────────── */}
      <section className="border-t border-warm-gray pt-16 pb-24">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          11 — System Architecture
        </p>

        <h2
          className="font-display font-semibold text-charcoal leading-tight mb-6"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          How it all connects.
        </h2>

        <div className="font-sans text-[#4A4A4A] text-lg leading-relaxed max-w-3xl mb-8 flex flex-col gap-4">
          <p>
            Style Magnet's architecture runs across three layers. The user authenticates via JWT
            and Supabase Auth, sets up their body shape profile and style preferences, then browses
            outfit cards fetched in batch to eliminate N+1 performance issues.
          </p>
          <p>
            The AI recommendation layer compresses outfit metadata and passes it to Gemini, which
            ranks outfits by body shape, style, season, and occasion. Results are cached in
            sessionStorage for 10 minutes — repeat sessions skip the Gemini call entirely.
          </p>
          <p>
            The data pipeline runs in parallel — Apify scrapes retailer product data feeding
            Supabase PostgreSQL across outfits, products, users, and orders. Row Level Security
            ensures every user sees only their own data, JWT-enforced at the database level.
          </p>
        </div>

        <a href="/SM_sys_flow.png" target="_blank" rel="noreferrer" className="block mt-8">
          <img
            src="/SM_sys_flow.png"
            alt="Style Magnet Technical System Workflow"
            className="w-full rounded-lg overflow-hidden border border-warm-gray shadow-md"
          />
        </a>

        <p className="font-mono text-xs tracking-[0.2em] text-[#4A4A4A] text-center mt-4">
          Fig. 1 — Style Magnet Technical System Workflow
        </p>

        <div className="h-px bg-warm-gray my-12" />

        <h3
          className="font-display font-semibold mb-4"
          style={{ fontSize: '1.5rem', color: '#1A1A1A' }}
        >
          Prompt-Based Recommendations
        </h3>

        <div className="font-sans text-[#4A4A4A] text-lg leading-relaxed max-w-3xl mb-8 flex flex-col gap-4">
          <p>
            Pipeline A handles prompt-based outfit discovery. When a user types a natural language
            query — such as 'outfit for a beach wedding' — Gemini extracts key parameters including
            occasion, season, style tags, and formality level, outputting a structured JSON object.
          </p>
          <p>
            A Query Builder converts those parameters into a database filter, merged with the
            user's body shape profile. The resulting query retrieves a matching outfit pool from
            Supabase PostgreSQL, which a Prompt-Aware Re-Ranker then scores against the original
            prompt — assigning a fit score and generating a natural language reason for each match.
          </p>
          <p>
            Results are cached for 10 minutes keyed by prompt hash and user ID — repeat queries
            skip the full pipeline. A Low Confidence Fallback triggers when scores fall below
            threshold, surfacing general feed results and logging the interaction for future model
            improvement.
          </p>
        </div>

        <a href="/SM_prompt_flow.png" target="_blank" rel="noreferrer" className="block mt-8">
          <img
            src="/SM_prompt_flow.png"
            alt="Style Magnet Pipeline A — Prompt-Based Recommendations"
            className="w-full rounded-lg overflow-hidden border border-warm-gray shadow-md"
          />
        </a>

        <p className="font-mono text-xs tracking-[0.2em] text-[#4A4A4A] text-center mt-3">
          Fig. 2 — Pipeline A: Prompt-Based Recommendations
        </p>

        <div className="h-px bg-warm-gray my-12" />

        <h3
          className="font-display font-semibold mb-4"
          style={{ fontSize: '1.5rem', color: '#1A1A1A' }}
        >
          Checkout Pipeline & AI Shopping Agent
        </h3>

        <div className="font-sans text-[#4A4A4A] text-lg leading-relaxed max-w-3xl mb-8 flex flex-col gap-4">
          <p>
            The checkout pipeline always refetches live prices directly from the database — never
            trusting the frontend — ensuring accuracy between browse and purchase. Prices are
            validated, locked, and copied into an order record. Payment is processed through Stripe
            with webhook confirmation, a Payment Failed fallback, and order confirmation via email.
          </p>
          <p>
            For fully automated purchasing, the AI Shopping Agent built on Playwright takes over.
            An Agent Controller loops through each cart item and routes it to a per-retailer Site
            Adapter for ShopBop, Nordstrom, and others. Playwright then executes autonomously:
            launch browser in stealth mode, navigate to the product page, select the correct size,
            add to cart, fill the full checkout form, and capture the result. Bot detection is
            handled with random delays and human-like interaction patterns, credentials are stored
            encrypted, and retry logic handles partial failures.
          </p>
        </div>

        <a href="/SM_checkout_flow.png" target="_blank" rel="noreferrer" className="block mt-8">
          <img
            src="/SM_checkout_flow.png"
            alt="Style Magnet Checkout Pipeline and AI Shopping Agent Workflow"
            className="w-full rounded-lg overflow-hidden border border-warm-gray shadow-md"
          />
        </a>

        <p className="font-mono text-xs tracking-[0.2em] text-[#4A4A4A] text-center mt-3">
          Fig. 3 — Checkout Pipeline & AI Shopping Agent — Playwright Automation
        </p>
      </section>

      {/* ── 12 What We Built ────────────────────────────── */}
      <section className="border-t border-warm-gray pt-16 pb-24">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          12 — What We Built
        </p>

        <h2
          className="font-display font-semibold text-charcoal leading-tight mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          See it in action.
        </h2>

        <p className="font-sans text-[#4A4A4A] text-lg leading-relaxed max-w-2xl mb-10">
          A live walkthrough of the Style Magnet AI fit recommendations engine, natural language
          outfit search and autonomous shopping agent.
        </p>

        <div className="w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg border border-warm-gray">
          <iframe
            src="https://www.youtube.com/embed/424LcuzPGuc"
            title="Style Magnet Demo"
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="https://stylemagnet.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-lg text-[#4A4A4A] hover:text-[#C9A96E] hover:underline transition-colors duration-200"
          >
            Explore the live product →
          </a>
        </div>
      </section>

      {/* ── 13 Why Now ──────────────────────────────────── */}
      <section className="border-t border-warm-gray pt-16 pb-32">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          13 — Why Now
        </p>

        <h2
          className="font-display font-semibold text-charcoal leading-tight mb-16"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          The market is ready.{' '}
          <span className="font-light italic">The technology is here.</span>
        </h2>

        <div className="divide-y divide-warm-gray">
          {whyNowRows.map((row) => (
            <div key={row.number} className="flex gap-8 md:gap-14 items-start py-10">
              <span className="font-mono text-[11px] tracking-widest uppercase w-5 flex-shrink-0 pt-1" style={{ color: '#8B6914' }}>
                {row.number}
              </span>
              <div className="flex-1 min-w-0">
                <h3
                  className="font-display font-semibold text-charcoal leading-snug mb-3"
                  style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
                >
                  {row.title}
                </h3>
                <p className="text-[#4A4A4A] text-base leading-relaxed">{row.body}</p>
              </div>
              <p className="font-mono text-sm tracking-wide text-[#4A4A4A] flex-shrink-0 self-end text-right max-w-[130px] leading-relaxed hidden sm:block">
                {row.source}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 14 KPIs ──────────────────────────────────────── */}
      <section className="border-t border-warm-gray pt-16 pb-32">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          14 — KPIs
        </p>

        <h2
          className="font-display font-semibold text-charcoal leading-tight mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          The numbers that matter.
        </h2>

        <p className="font-sans text-[#4A4A4A] text-base leading-relaxed max-w-2xl mb-12">
          Six metrics that tell us whether Style Magnet is working — from early traction to AI
          effectiveness.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kpiCards.map((card) => (
            <div
              key={card.category}
              className="bg-[#EDEAE5] rounded-lg p-8 border-t-4 border-gold flex flex-col gap-3
                hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)]
                transition-all duration-200"
            >
              <p className="font-mono text-sm tracking-[0.2em] uppercase font-semibold" style={{ color: '#8B6914' }}>
                {card.category}
              </p>
              {card.live ? (
                <p
                  className="font-display font-bold leading-none text-charcoal"
                  style={{ fontSize: 'clamp(36px, 4vw, 48px)' }}
                >
                  {card.current}
                </p>
              ) : (
                <p
                  className="font-display font-bold leading-none text-2xl"
                  style={{ color: '#D1CBC3' }}
                >
                  {card.current}
                </p>
              )}
              <p className="font-mono text-sm tracking-[0.15em] uppercase text-[#4A4A4A]">
                {card.target}
              </p>
              <div className="h-px bg-gold/20 mt-auto mb-1" />
              <p className="font-sans text-[#4A4A4A] text-base leading-relaxed">{card.insight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 15 GTM ───────────────────────────────────────── */}
      <section className="border-t border-warm-gray pt-16 pb-32">
        <p className="font-mono text-base tracking-[0.2em] uppercase font-semibold mb-10" style={{ color: '#8B6914' }}>
          15 — Go-to-Market
        </p>

        <h2
          className="font-display font-semibold text-charcoal leading-tight mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          From zero to loyal customer.
        </h2>

        <p className="font-sans text-[#4A4A4A] text-lg leading-relaxed max-w-2xl mb-12">
          A five-stage funnel strategy built around organic content, product-led growth, and the
          moment Style Magnet delivers its core promise.
        </p>

        <div className="divide-y divide-warm-gray">
          {gtmRows.map((row) => (
            <div key={row.number} className="flex items-start gap-8 py-8">
              <span className="font-mono text-5xl leading-none min-w-[80px]" style={{ color: '#8B6914' }}>
                {row.number}
              </span>
              <h3
                className="font-display font-semibold text-charcoal leading-snug min-w-[200px]"
                style={{ fontSize: 'clamp(20px, 2vw, 24px)' }}
              >
                {row.stage}
              </h3>
              <p className="font-sans text-[#4A4A4A] text-base leading-relaxed flex-1">
                {row.description}
              </p>
            </div>
          ))}
        </div>

        {/* Below-funnel callout */}
        <div className="mt-12 max-w-2xl mx-auto border-l-4 border-gold bg-[#EDEAE5] p-6 rounded-lg">
          <p className="font-sans text-[#4A4A4A] text-base leading-relaxed">
            Style Magnet currently has{' '}
            <span
              className="font-display font-bold text-2xl"
              style={{ color: '#C9A96E' }}
            >
              100+
            </span>{' '}
            users on the waitlist — real demand signal generated entirely through organic
            content before a single dollar of paid marketing.
          </p>
        </div>
      </section>
    </div>
  )
}
