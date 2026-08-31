# STEMBITE Foods Website Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Build a multi-page website for STEMBITE Foods — an agri-food startup transforming banana stem waste into nutritious food products.

**Architecture:** Static HTML/CSS/JS multi-page site with shared components, clean modern design (white + green accents), responsive layout.

**Tech Stack:** HTML5, CSS3 (custom properties), Vanilla JavaScript, Google Fonts (Fraunces + Inter)

## Global Constraints

- Colors: Primary Green #2D7A3A, Secondary Green #5BAA6B, Gold Accent #D4A843, Background #FAFBF7, Dark #1A2E1C, Light Green #E8F5E9
- Fonts: Fraunces (headings), Inter (body) from Google Fonts
- All pages share identical header/footer/navigation
- Mobile-first responsive design (min 48px tap targets)
- No external frameworks — pure HTML/CSS/JS
- Images use placeholder SVGs or CSS gradients (no external image dependencies)
- All text content comes from the STEMBITE PDF/PPTX analysis

---

## Task 1: Design System & Project Structure

**Files:**
- Create: `css/variables.css` — CSS custom properties, color palette, typography scale
- Create: `css/base.css` — Reset, body styles, typography defaults, utility classes
- Create: `css/components.css` — Button styles, card styles, badge styles
- Create: `css/layout.css` — Container, grid, section spacing utilities
- Create: `index.html` — Empty shell with head includes (placeholder for content)

**Interfaces:**
- Consumes: Color palette and typography from research
- Produces: CSS files that all pages import; base HTML template

---

## Task 2: Shared Components (Header, Footer, Navigation)

**Files:**
- Create: `css/header.css` — Navigation bar styles, mega menu, mobile hamburger
- Create: `css/footer.css` — Footer grid, newsletter signup, social links
- Create: `js/navigation.js` — Mobile menu toggle, sticky header, active page detection
- Create: `components/header.html` — Reusable header markup (included via JS)
- Create: `components/footer.html` — Reusable footer markup (included via JS)

**Interfaces:**
- Consumes: Design system from Task 1
- Produces: Navigation HTML loaded on all pages; header/footer CSS

---

## Task 3: Home Page

**Files:**
- Create: `css/home.css` — Hero section, product preview, how-it-works, impact stats, testimonials
- Create: `index.html` — Full home page content with all sections

**Sections:**
1. Hero — Split layout: text left ("From Farm Waste to Everyday Nutrition"), visual right (CSS gradient/illustration), dual CTA
2. Trust Bar — FSSAI Certified, 100% Natural, Farmer-Linked badges
3. Problem & Opportunity — Banana stem waste statistics
4. Product Showcase — 5 product cards in a grid
5. How It Works — 4-step visual journey (Source → Extract → Transform → Nutrition)
6. Impact Stats — Animated counters (waste diverted, farmers supported, products created)
7. Testimonials — Customer quotes
8. Campaign CTA — "WASTE SE WELLNESS" banner with email signup
9. Footer (shared)

---

## Task 4: Products Page

**Files:**
- Create: `css/products.css` — Product grid, filter bar, product cards, comparison table
- Create: `products.html` — Full products page

**Sections:**
1. Page Header — "Our Products" with subtitle
2. Filter Bar — All / Consumer / B2B toggle
3. Product Grid — 5 product cards with images, descriptions, benefits, CTAs
4. Product Comparison Table — Side-by-side nutritional comparison
5. FAQ Section — Common questions
6. Footer (shared)

---

## Task 5: Our Story Page

**Files:**
- Create: `css/story.css` — Mission section, timeline, team cards, values
- Create: `story.html` — Full story page

**Sections:**
1. Mission Statement — "We are not simply selling banana-stem powder..."
2. The Problem — Agricultural waste crisis with banana farming
3. The Journey — Timeline of key milestones
4. Our Values — Sustainability, Nutrition, Community, Innovation
5. Team — Founder profiles
6. Footer (shared)

---

## Task 6: How It Works Page

**Files:**
- Create: `css/process.css` — Step-by-step layout, process visuals
- Create: `process.html` — Full process page

**Sections:**
1. Hero — "From Stem to Superfood"
2. Process Steps — Collection → Sorting → Shredding → Drying → Grinding → Sieving → Testing → Packaging
3. Quality Assurance — FSSAI compliance, testing protocols
4. Sustainability — Environmental impact
5. Footer (shared)

---

## Task 7: Contact Page

**Files:**
- Create: `css/contact.css` — Contact form, map, details layout
- Create: `contact.html` — Full contact page

**Sections:**
1. Contact Form — Name, email, subject, message
2. Contact Details — Phone, email, address
3. FAQ Quick Links
4. Footer (shared)

---

## Task 8: Responsive Design & Mobile Optimizations

**Files:**
- Modify: All CSS files — Add responsive breakpoints
- Create: `css/responsive.css` — Media queries, mobile-specific styles
- Create: `js/main.js` — Smooth scroll, animation triggers, lazy loading

**Requirements:**
- Mobile breakpoint: 768px and below
- Tablet breakpoint: 768px-1024px
- Desktop: 1024px+
- Sticky mobile CTA bar
- Hamburger menu functionality
- Touch-friendly tap targets (48px minimum)

---

## Task 9: Final Review & Polish

**Files:**
- Review all HTML for semantic correctness
- Review all CSS for consistency
- Test all page navigation
- Verify responsive behavior
- Add smooth transitions and hover effects
- Ensure accessibility (contrast, alt text, ARIA labels)
