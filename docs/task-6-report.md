# Task 6 — How It Works Page

**Status:** DONE

## Deliverables

### 1. `css/process.css`
- `.process-hero` — Green gradient background, white text, padding 6rem 0 3rem
- `.process-steps` — Flex column with 4rem gap for vertical step layout
- `.process-step` — Flex row, gap 4rem, aligned center; `.process-step--reverse` flips to row-reverse
- `.process-step__number` — 100px circle, green-light bg, Fraunces 900, 2.5rem, green primary
- `.process-step__content` — Max-width 500px with title and description styles
- `.process-step__visual` — Aspect ratio placeholder with border-radius
- `.quality-grid` — 3-column CSS grid
- `.quality-card` — White card with icon circle, title, description
- `.compliance-banner` — Dark background, centered text, 4rem padding
- Responsive breakpoints for mobile (single column)

### 2. `process.html`
- Full page with header/footer matching existing pages
- Title: "STEMBITE Foods — How It Works"
- Active nav link: "How It Works" has `header__nav-link--active`
- Sections: Hero, 8 Process Steps (alternating), Quality Assurance (3 cards), Compliance Banner

### 3. `js/process.js`
- IntersectionObserver-based scroll animation
- Steps fade in and slide up (translateY 30px → 0) when 20% visible
- Transition: 0.6s ease

## Notes
- Copied header/footer structure from `story.html`
- Used `data-page="process"` for navigation active state
- All CSS uses existing design system variables from `variables.css`
- No external dependencies added
