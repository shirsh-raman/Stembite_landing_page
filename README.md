# STEMBITE Foods

Landing page for STEMBITE Foods — an agri-food startup transforming banana stem waste into nutritious, sustainable food products.

## Tech Stack

- HTML5, CSS3 (custom properties), Vanilla JavaScript
- Google Fonts — Fraunces + Inter
- Static site (no frameworks), Python HTTP server for local dev

## Project Structure

```
Stembite_landing_page/
├── index.html          # Home
├── products.html       # Products
├── story.html          # Our story
├── process.html        # Manufacturing process
├── contact.html        # Contact / inquiries
├── css/
│   ├── variables.css   # CSS custom properties
│   ├── base.css        # Reset and typography
│   ├── layout.css      # Grid and containers
│   ├── components.css  # Buttons, cards, shared UI
│   ├── header.css      # Site header/nav
│   ├── footer.css      # Site footer
│   ├── home.css        # Home page styles
│   ├── products.css    # Products page styles
│   ├── story.css       # Story page styles
│   ├── process.css     # Process page styles
│   ├── contact.css     # Contact page styles
│   └── responsive.css  # Media queries
├── js/
│   ├── navigation.js   # Mobile nav and header behavior
│   ├── main.js         # Shared utilities
│   ├── products.js     # Products page logic
│   ├── story.js        # Story page logic
│   ├── process.js      # Process page logic
│   └── contact.js      # Contact form handling
├── docs/
│   ├── plan.md         # Project plan
│   └── task-*-report.md
├── STEMBITE.pdf        # Reference material
├── STEMBITE.pptx       # Reference material
├── start.sh            # Alternative dev server script
└── package.json
```

## Getting Started

Requires Python 3 for the local dev server.

```bash
# Option 1 — npm
npm start

# Option 2 — shell script
chmod +x start.sh
./start.sh
```

Both open a local server at `http://localhost:8080`.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, value propositions, product teaser |
| Products | `products.html` | Fibre+, Flour+, Mix, Bites, Pro (B2B) |
| Our Story | `story.html` | Brand mission and founding story |
| Process | `process.html` | Banana stem-to-product manufacturing journey |
| Contact | `contact.html` | Inquiry form and contact details |

**Brand pillars:** FSSAI Certified · 100% Natural · Farmer-Linked · Sustainable

## License

[MIT](https://opensource.org/licenses/MIT)
