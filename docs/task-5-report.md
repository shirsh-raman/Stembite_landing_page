# Task 5 Report — Our Story Page

## Status: DONE

## Files Created

1. **`css/story.css`** — Story page styles
   - `.story-hero` — green-light background, centered hero
   - `.mission` — white card, max-width 800px, centered quote block
   - `.mission__quote` — Fraunces 600 italic, green border-left
   - `.mission__author` — Inter 600, gray
   - `.problem-section` — two-column grid layout
   - `.timeline` — vertical timeline with connecting line, alternating left/right items
   - `.timeline__dot` — 20px green circle with white center
   - `.timeline__content` — card with shadow, max-width 400px
   - `.timeline__year` — Fraunces 700, gold accent
   - `.values-grid` — 4-column grid
   - `.value-card` — centered card with gradient circle icon
   - `.team-grid` — 3-column grid
   - `.team-card` — centered card with gradient avatar circle

2. **`story.html`** — Full story page
   - Header/footer copied from index.html
   - Title: "STEMBITE Foods — Our Story"
   - Active nav link: `header__nav-link--active` on "Our Story" (both desktop and mobile)
   - 6 sections: Hero, Mission, Problem, Timeline, Values, Team
   - Links `story.css` and `story.js`

3. **`js/story.js`** — Timeline animation
   - IntersectionObserver on `.timeline__item`
   - Alternating slide-in from left/right
   - 0.5s ease transition

4. **`docs/task-5-report.md`** — This file
