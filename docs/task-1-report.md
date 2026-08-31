# Task 1 Report — Design System & Project Structure

## Files Created

| File | Purpose |
|------|---------|
| `css/variables.css` | CSS custom properties (colors, shadows, typography, spacing, radius, transitions) |
| `css/base.css` | Modern CSS reset, fluid typography scale, link/image defaults, `.sr-only` utility |
| `css/components.css` | Buttons (primary/secondary/gold), cards, badges, typography helper classes |
| `css/layout.css` | Container, grid systems (2/3/4 col), flexbox utilities, section spacing, text alignment, margin-bottom helpers, responsive stacking |
| `index.html` | HTML5 template loading Google Fonts (Fraunces + Inter), all CSS files, placeholder body |
| `js/main.js` | Empty JS placeholder for future interactivity |
| `docs/task-1-report.md` | This report |

## Key Design Decisions

1. **CSS architecture**: Layered approach — variables → base → layout → components — allowing each file to be independently maintainable and each layer to reference the one before it.
2. **Fluid typography**: All heading sizes use `clamp()` to scale smoothly between mobile and desktop without breakpoints.
3. **Brand color tokens**: Prefixed with `--stb-` to avoid collisions and make intent clear. Primary green `#2D7A3A` anchors the palette; gold `#D4A843` serves as accent.
4. **Font choices**: Fraunces (variable-weight serif) for headings gives a warm, organic feel fitting an agri-food brand; Inter for body keeps readability high.
5. **Component-level CSS**: Buttons, cards, and badges live in `components.css` so page-specific CSS (future files) only needs to compose, not redefine.
6. **Responsive grid**: `.grid-2/3/4` collapse to single column at 768px via a media query, keeping the system simple.
7. **Google Fonts**: Fraunces weights 400/600/700/900 and Inter weights 400/500/600 loaded with `display=swap` for fast render.

## Concerns

- **Font file size**: Fraunces at 400/600/700/900 is ~120KB+; consider subsetting or dropping weight 900 if unused in later tasks.
- **No `@media` query for grid on mobile**: The stacking rule exists but hasn't been tested visually — Task 2 onward should validate.
- **Empty JS**: Placeholder only; no functionality yet. Main.js should be populated when interactive components are built.
