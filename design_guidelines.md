# Tenet AI Landing Page - Design Guidelines

## Design Approach
**Reference-Based + Dark Futuristic SaaS Pattern**
Inspired by: Linear (clean tech aesthetic), Vercel (dark mode excellence), Stripe (conversion focus)

## Visual Identity (User-Specified)
**Color Palette:**
- Primary: Electric Cyan (#00FFFF) - CTAs, accents, hover states
- Neutrals: Anthracite Gray (#1a1a1a background), Metallic Silver (#c0c0c0 text)
- Semantic: Success green for testimonials/proof, subtle red for urgency

**Aesthetic:** Dark Mode Futuristic Clean - sophisticated B2B tech, not gaming

## Typography System
**Font Stack:** Inter (Google Fonts) for UI + Space Grotesk for headlines
- Hero H1: 4xl/5xl (mobile/desktop), bold, 1.1 line-height
- Section Headers: 3xl/4xl, semibold
- Feature Cards: xl title, base description
- Body: base (16px), 1.6 line-height for readability
- Pricing: 3xl for prices, emphasize value

## Layout & Spacing
**Container System:** max-w-7xl centered, px-4 mobile, px-8 desktop
**Spacing Units:** Consistent use of 4, 8, 12, 16, 24 (p-4, py-8, gap-12, etc.)
**Section Padding:** py-16 mobile, py-24 desktop for breathing room

## Component Structure

### 1. Navigation (Sticky)
- Dark translucent background with backdrop blur
- Logo left, CTA "Acessar Painel" right (electric cyan, rounded)
- Smooth scroll anchors to sections

### 2. Hero Section
**Layout:** Full viewport (min-h-screen), centered content
**Background:** Gradient mesh with subtle animated particles (Framer Motion)
**Content Stack:**
- Headline: "Automação 24/7 com Agentes de IA Especializados"
- Subheadline: Technology badge "Powered by Google Gemini"
- Dual CTAs: Primary "Começar Agora" + Secondary "Ver Demo"
- Trust indicators: "Enterprise-Ready | WhatsApp Integrado"

### 3. Nossos Tenets (Agent Cards)
**Grid:** 2x2 on desktop (grid-cols-2 lg:grid-cols-4 for wider screens)
**Card Design:**
- Dark card with subtle border, hover: cyan glow effect
- Icon top (Lucide, cyan accent), agent name, 2-3 line description
- Each card: SDR, Sales, Support, RH with specific icons

### 4. Diferenciais Técnicos
**3-Column Feature Grid:**
- Icon + Title + Description pattern
- Segurança Enterprise (shield icon)
- Base de Conhecimento RAG (database icon)
- A/B Testing (beaker/experiment icon)
- Emphasize "upload de documentos" and "isolamento de dados"

### 5. Pricing Table (Critical Conversion Section)
**3-Column Comparison Table:**
- Highlight "Professional" as recommended (border accent)
- Large price display with /mês suffix
- Feature list with checkmarks (green for included)
- Structured rows: Agentes, Conversas, Tokens, Features
- Bottom CTA per plan, primary style on Professional

**Plans:**
- Starter: R$ 119,90 (1 agent, 300 conversations)
- Professional: R$ 349,90 (3 agents, 1.5k conversations, CRM)
- Tenet: R$ 499,90 (5 agents, 5k conversations, RAG, API, White-label)

### 6. FAQ Accordion
**Layout:** Single column, max-w-3xl
**Interaction:** Expand/collapse with smooth animation
**Content Focus:** Security concerns, setup time, integration questions

### 7. Footer
**Multi-column:** Product links, Resources, Company, Social
**Bottom:** Copyright, Privacy/Terms links
**Style:** Minimal, dark background lighter than body

## Animations (Framer Motion - Subtle)
- Hero: Fade-in on load + particle float
- Scroll reveal: Cards fade up with stagger (50ms delay each)
- Hover states: Scale 1.02, glow effects on cards
- NO heavy animations - performance is critical

## Images Strategy
**Hero Background:** Abstract tech gradient/mesh (not photograph)
**Agent Icons:** Use Lucide React icons (headset, briefcase, users, file-check)
**NO stock photos** - maintain futuristic clean aesthetic
**Optional:** Subtle dashboard mockup screenshot in Diferenciais section

## Responsive Behavior
- Mobile: Stack all grids to single column, reduce padding by 50%
- Tablet: 2-column grids where applicable
- Desktop: Full multi-column layouts
- Sticky navigation collapses to hamburger <768px

## Conversion Optimization
- Multiple "Acessar Painel" CTAs: Hero, Navbar, Footer
- Pricing as focal point (largest section)
- FAQ immediately after pricing (objection handling)
- Trust signals throughout: "Enterprise-Ready", "Google Gemini", token counts