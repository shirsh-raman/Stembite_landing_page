# Task 7: Contact Page

**Status:** DONE

## Files Created

1. **`css/contact.css`** — Contact page styles including hero, two-column layout, form inputs, detail items with icons, map placeholder, FAQ answer animation, and responsive breakpoints.

2. **`contact.html`** — Full contact page with:
   - Contact hero section (green-light background)
   - Two-column contact form + details section
   - B2B CTA section (dark background, gold button)
   - Quick FAQ accordion section
   - Header with active nav on "Contact" link
   - Full footer with newsletter and links

3. **`js/contact.js`** — Form submission handling with validation visual feedback, success state animation, and FAQ accordion toggle logic.

## CSS Details
- `.contact-hero` — Green-light bg, centered text
- `.contact-section` — CSS Grid two-column (1fr 1fr), collapses at 992px
- `.contact-form` — White card with shadow and border-radius
- `.form-input` / `.form-textarea` — Full-width, border transitions to green on focus
- `.contact-detail-item` — Flex row with 48px icon circle
- `.contact-map` — 16:9 aspect ratio gradient placeholder
- FAQ answer max-height transition for accordion animation

## JS Details
- Validates required fields on submit, highlights invalid fields in red
- Shows "Message Sent! ✓" confirmation for 3 seconds, then resets
- FAQ accordion toggles max-height and changes +/− symbol
