# Tenet AI Landing Page

## Overview

Tenet AI is a SaaS landing page for an enterprise-ready platform that provides specialized AI agents (SDR, Sales, Support, HR) integrated with WhatsApp. The platform is powered by Google Gemini and offers 24/7 automation capabilities. This is a marketing/institutional website that connects to an external dashboard at `https://app.tenetai.com.br`.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with dark mode enabled by default
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for fluid, tech-focused animations
- **Icons**: Lucide React for UI icons, react-icons for social media icons
- **Fonts**: Inter (UI) and Space Grotesk (headings) from Google Fonts

### Design System
- **Theme**: Dark mode futuristic clean aesthetic
- **Primary Color**: Electric Cyan (#00FFFF) for CTAs and accents
- **Background**: Anthracite Gray (#1a1a1a)
- **Text**: Metallic Silver (#c0c0c0)
- **Layout**: max-w-7xl container, responsive padding

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **Build**: esbuild for server bundling, Vite for client
- **Database**: PostgreSQL with Drizzle ORM (schema defined but minimal usage for landing page)
- **Session**: Memory storage for development, connect-pg-simple available for production

### Project Structure
```
client/           # Frontend React application
  src/
    components/   # UI and landing page components
    pages/        # Route pages (home, not-found)
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data access layer
shared/           # Shared types and schemas
  schema.ts       # Drizzle database schema
```

### Landing Page Sections
1. **Navbar** - Sticky navigation with smooth scroll and mobile menu
2. **Hero** - Full viewport with animated particles and dual CTAs
3. **Agent Cards** - Grid showcasing SDR, Sales, Support, and HR agents
4. **Technical Features** - Security, RAG, and A/B Testing capabilities
5. **Pricing Table** - Three-tier pricing (Starter, Professional, Tenet)
6. **FAQ** - Accordion-style objection handling
7. **Footer** - Links and social media

## External Dependencies

### Third-Party Services
- **WhatsApp Business API**: Integration for AI agents (external dashboard)
- **Google Gemini**: AI model powering the agents (mentioned in marketing)
- **External Dashboard**: `https://app.tenetai.com.br` - CTA buttons link here

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **Drizzle ORM**: Schema management and migrations in `shared/schema.ts`
- **Drizzle Kit**: Database push via `npm run db:push`

### Key NPM Dependencies
- `@tanstack/react-query`: Server state management
- `framer-motion`: Animation library
- `drizzle-orm` / `drizzle-zod`: Database ORM and validation
- `express`: HTTP server framework
- `wouter`: Client-side routing
- Full shadcn/ui component set via Radix UI primitives