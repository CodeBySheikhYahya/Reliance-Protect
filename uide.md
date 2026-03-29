Build me a world-class, $100,000-level premium insurance website using Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. This should look and feel like it was designed by a top-tier agency like Fantasy or Huge Inc.

=== GLOBAL DESIGN SYSTEM ===
- Color palette: Deep navy (#0A0F1E), electric blue (#2563EB), cyan accent (#06B6D4), pure white, soft gray (#F8FAFC)
- Typography: Use next/font to load "Inter" for body and "Cal Sans" or "Sora" for headings
- Glassmorphism cards: backdrop-blur-xl, bg-white/5, border border-white/10
- Grain texture overlay on hero using SVG filter
- Custom CSS cursor (glowing dot that follows mouse)
- Smooth page load with staggered entrance animations
- All sections have scroll-triggered animations using Framer Motion useInView
- Consistent 8px spacing grid throughout

=== NAVBAR ===
- Frosted glass navbar: fixed, backdrop-blur-2xl, bg-navy/80
- Logo left: shield SVG icon + "ShieldElite Insurance"
- Nav links: Home, Coverage, Claims, About, Blog — with animated underline hover effect
- Right side: "Get a Quote" pill button with shimmer animation on hover
- Mobile: hamburger → full screen overlay menu with staggered link animations
- Navbar shrinks slightly on scroll with smooth transition

=== HERO SECTION ===
- Full viewport height
- Animated gradient mesh background (CSS keyframe animation — moving blue/cyan blobs)
- Large bold headline: "Protection That Moves With Your Life" — animate each word sliding up with stagger
- Subheadline fades in after 0.5s delay
- Two CTA buttons: "Get Your Free Quote" (solid blue, pulse glow) + "See Our Plans" (ghost button)
- Floating animated stats cards: "50K+ Clients", "99.8% Claims Paid", "24/7 Support" — each floats with subtle up-down animation
- Scroll indicator arrow bouncing at bottom
- Abstract 3D-style shield illustration on the right (built with pure CSS/SVG, rotating slowly)

=== TRUST BAR ===
- Full-width section: "Trusted by leading companies"
- Infinite scrolling logo marquee (CSS animation, no library)
- 8 company logos as SVG placeholders with blur-to-sharp hover

=== COVERAGE PLANS SECTION ===
- Section title with gradient text (blue to cyan)
- 3 pricing cards: Basic, Premium (most popular), Enterprise
- Popular card: elevated with glow border (box-shadow: 0 0 40px #2563EB40), scale-105
- Each card: glass morphism style, animated checkmarks, hover lifts with shadow
- Toggle switch: Monthly / Annually — prices animate with number counter
- All cards entrance: staggered slide-up with Framer Motion

=== WHY CHOOSE US SECTION ===
- Dark background section
- 6 feature cards in 3x2 grid
- Each card: icon (animated SVG — draws itself on scroll), title, description
- Cards flip on hover to reveal more detail (3D CSS flip animation)
- Animated counter numbers: "15+ Years", "50,000+ Clients", "$2B+ Claims Paid" — count up when in view

=== HOW IT WORKS ===
- 4 steps with animated connecting line between them
- Step icons animate in sequence with delays
- Timeline line draws itself using SVG stroke-dashoffset animation on scroll
- Steps: Get Quote → Choose Plan → Submit Docs → Get Covered

=== TESTIMONIALS SECTION ===
- Gradient background section
- Auto-playing carousel with smooth slide transitions (Framer Motion AnimatePresence)
- Each testimonial card: photo avatar (placeholder), name, role, star rating, quote
- 5 testimonials, auto-advances every 4 seconds
- Navigation dots below, manual control supported
- Pause on hover

=== INSURANCE CALCULATOR ===
- Interactive quote estimator widget
- Sliders for: Age, Coverage Amount, Plan Type (radio buttons)
- Real-time price update with animated number transition
- CTA: "Get Exact Quote" button
- Glassmorphism card with glow effect

=== BLOG / INSIGHTS SECTION ===
- 3 article cards in a grid
- Each card: gradient overlay image, category tag, title, read time, animated arrow on hover
- Cards reveal with stagger animation

=== FAQ SECTION ===
- Accordion component — smooth height animation with Framer Motion
- 8 questions with detailed answers
- Plus/minus icon rotates on open

=== FINAL CTA SECTION ===
- Full-width gradient banner (animated gradient background)
- Bold headline + subtext + two buttons
- Floating decorative elements (blurred circles in background)

=== FOOTER ===
- Dark navy background
- 4 column grid: Logo+tagline, Products, Company, Contact
- Social icons with hover color animations
- Newsletter subscribe input with animated submit
- Bottom bar: copyright + legal links
- Subtle top border with gradient

=== ANIMATIONS SPECIFICATION (FRAMER MOTION) ===
- All sections: { initial: { opacity: 0, y: 60 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: "easeOut" } }
- Cards: staggerChildren: 0.15
- Hover on all interactive elements: whileHover: { scale: 1.03, y: -4 }
- Page entrance: stagger all hero elements with 0.1s delays
- Use layoutId for shared element transitions where applicable
- Smooth scroll behavior on html element

=== COMPONENT FILE STRUCTURE ===
/app
  layout.tsx (global font, metadata, cursor component)
  page.tsx (imports all sections in order)
/components
  Navbar.tsx
  Hero.tsx
  TrustBar.tsx
  Plans.tsx
  WhyUs.tsx
  HowItWorks.tsx
  Testimonials.tsx
  Calculator.tsx
  Blog.tsx
  FAQ.tsx
  FinalCTA.tsx
  Footer.tsx
  CustomCursor.tsx
  AnimatedCounter.tsx
/lib
  constants.ts (all text content, plan data, testimonials)

=== TECHNICAL REQUIREMENTS ===
- All components are client components where animations are needed ("use client")
- No external UI libraries (Shadcn ok for basic primitives only)
- All images use next/image with proper sizing
- Fully responsive: mobile first, perfect on 375px, 768px, 1280px, 1920px
- Performance: no animation jank, use will-change and transform only
- TypeScript strict mode — all props typed
- No console errors or warnings

Build every single component completely with full working code. Do not use placeholder comments. Make it production-ready.