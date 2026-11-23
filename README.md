# Chibueze Williams Full-Stack Developer Portfolio

A modern, highly responsive, multi-page portfolio website for **Chibueze Williams**, Full-Stack Software Engineer, engineered with Next.js 16 (App Router), TypeScript, Tailwind CSS, Framer Motion, and a project-aware AI assistant.

---

## 🌟 Key Features

1. **Multi-Page App Router Architecture**:
   - `/` — Homepage: Hero with custom framed portrait, 6 glass statistics cards, "How Can I Assist You?" service cards, "My Process" 4-step workflow, and high-impact CTA.
   - `/about` — About Me: Framed profile card with live availability indicator, verified biography, tech stack preview, and professional experience timeline (Spinbrite & Lumecs).
   - `/skills` — My Tech Toolbox: 7 categorized skill sections with interactive filtering, glassmorphic badges, and ambient lighting.
   - `/projects` — Selected Work: Dynamic interactive project showcase with animated layout transitions.
   - `/projects/[slug]` — Dynamic project showcase with pre-selected project exploration.
   - `/contact` — Contact: Direct channels (Email, GitHub) and validated form with AgentMail integration and mailto fallback.

2. **Project-Aware AI Assistant**:
   - Integrated into the `/projects` page.
   - Smooth desktop two-panel split (60% showcase, 40% AI assistant) with full-screen overlay on mobile.
   - Grounded strictly in structured JSON knowledge (`src/data/knowledge/`).
   - Strict unknown-information policy with fallback: *"I don't have a verified answer to that. You can reach Chibueze directly and ask him about it."* and direct message action.
   - Multi-provider abstraction: Meta Llama 3.1 8B Instruct (Hugging Face) as primary, Google Gemini as fallback, and built-in local deterministic token streaming when API keys are not supplied.

3. **Design System & Aesthetics**:
   - **Dark Theme** (default): Cinematic near-black (`#080808`), vibrant orange accents (`#FF6A00`), glassmorphic panels, and subtle ambient glows.
   - **Light Theme**: Sophisticated off-white (`#F5F6F8`), soft cream surfaces (`#FAF8F4`), and electric blue accents (`#315FE8`).
   - Decorative dotted matrix patterns in hero corners.
   - Name-based animated introduction loading sequence (`CHIBUEZE WILLIAMS`).
   - WhatsApp-inspired fixed bottom navigation bar on mobile (no hamburger menu).
   - Real resume PDF download at `/Chibueze-Williams-Obodo-CV.pdf`.

---

## Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/ChibuezeWilly/portfolio.git
cd portfolio
npm install
```

### 2. Configure Environment Variables

Create `.env.local` using `.env.example` as a template:

```bash
cp .env.example .env.local
```

Populate the variables:

# Public Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── layout.tsx                     # Root layout with fonts, theme provider, and loading screen
│   ├── page.tsx                       # Homepage (Hero, Services, Process)
│   ├── about/page.tsx                 # About Me page
│   ├── skills/page.tsx                # Skills & Tech Toolbox page
│   ├── projects/page.tsx              # Selected Work showcase & AI assistant
│   ├── projects/[slug]/page.tsx       # Dynamic project detail view
│   ├── contact/page.tsx               # Contact page & form
│   ├── sitemap.ts                     # Dynamic XML sitemap generator
│   ├── robots.ts                      # SEO robots.txt rules
│   └── api/
│       ├── ai/chat/route.ts           # Project-aware streaming AI chat endpoint
│       ├── project-assistant/route.ts # API alias for project assistant
│       └── contact/send/route.ts      # Contact form submission & AgentMail handler
│
├── components/
│   ├── hero/                          # HeroIntro, HeroPortrait, HeroStats, Hero
│   ├── about/                         # AboutContent
│   ├── skills/                        # SkillsContent
│   ├── projects/                      # FeaturedProject, ProjectCard, AiPanel, ProjectsShowcase
│   ├── contact/                       # ContactContent
│   ├── home/                          # ServicesSection, ProcessSection
│   ├── navigation/                    # DesktopNav, MobileNav, Navbar
│   ├── footer/                        # Footer
│   ├── theme-provider.tsx             # Theme context & toggle
│   ├── loading-screen.tsx             # Name-based intro loading sequence
│   └── icons.tsx                      # SVG icon components
│
├── data/
│   ├── projects.ts                    # Typed project definitions
│   ├── stats.ts                       # Verified key metrics
│   ├── services.ts                    # Capabilities & service offerings
│   ├── experience.ts                  # Spinbrite & Lumecs employment history
│   ├── skills.ts                      # Categorized technology stack
│   ├── process.ts                     # 4-step engineering workflow
│   ├── navigation.ts                  # Navigation routes & CV download config
│   └── knowledge/                     # JSON knowledge base for AI Assistant
│       ├── global.json                # Global developer profile
│       ├── experience.json            # Employment details
│       ├── skills.json                # Technical competencies
│       ├── projects.json              # Project index & preview settings
│       ├── operon.json                # Operon project knowledge
│       ├── novora.json                # Novora project knowledge
│       ├── tallyflow.json             # TallyFlow project knowledge
│       ├── churndesk.json             # ChurnDesk project knowledge
│       └── contact.json               # Contact preferences
│
├── lib/
│   ├── ai-providers.ts                # Hugging Face, Gemini, and fallback streaming abstraction
│   ├── knowledge-retrieval.ts         # Server-side JSON knowledge retrieval
│   ├── rate-limit.ts                  # In-memory sliding window rate limiter
│   └── utils.ts                       # Class merging utility
│
└── types/
    └── index.ts                       # TypeScript interfaces
```

---

## 🔒 Security & Privacy
- Server-side rate limiting on both `/api/ai/chat` and `/api/contact/send`.
- Client input is strictly validated and sanitized before forwarding to AI models or email processors.
- Strict unknown information policy ensures the AI never hallucinates undocumented credentials, employment, or project achievements.

---

**Designed & Built by Chibueze Williams.**
