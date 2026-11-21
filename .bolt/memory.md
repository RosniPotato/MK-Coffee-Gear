# Project memory

## Product intent & audience

- MK Coffee Bar — coffee shop/bar business website
- Production-quality, fully featured design (not template-feel)
- Includes ecommerce/catalog functionality showcasing coffee equipment brands

## Brand personality & voice

- Refined, distinctive coffee-bar branding; emphasis on visual polish

## Visual design & UX direction

- Header: transparent over light hero, transitions to dark on scroll
- Footer: dark background
- Logo: gear emblem + wordmark lockup (wide aspect); scales compact-to-legible across breakpoints
- Reusable `Logo` component inlines the provided SVG with `currentColor` fill so it adapts to header/footer contrast automatically
- Favicon: gear mark extracted from logo on black background
- "Brands We Stand Behind" section: brand cards always visible at top; shopping/catalog area always visible directly below — nothing replaces or hides
- Catalog layout: category rail on left, product cards on right
- Brand selection behavior: clicking a brand card highlights it (white bg + "Viewing" indicator) and swaps the catalog below; sub-header reads "Now browsing: [Brand]" with tagline
- Default brand on page load: Wendougee
- Brand tabs: single-line row, compact padding/font; horizontal scroll fallback if needed — no wrapping
- No origin/country text shown on brand tabs

## Decisions, constraints & rationale

- Created a single inline-SVG `Logo` component instead of reusing the original fixed-white-fill asset, enabling color-shifting across navbar and footer contexts
- Removed old placeholder "MK" text mark from navbar and footer
- Deleted stale placeholder favicon file and rebuilt favicon from logo gear mark
- Restructured brands section so catalog is always visible on homepage (not nested inside expandable cards); brand selector swaps catalog content below rather than replacing the grid
- Removed origin/country labels from brand selector tabs to keep all brand boxes on one line
- Shrunk brand tab padding and font size to fit seven brands in a single row; horizontal scroll used as fallback
- Brands now featured (7 total): Wendougee, Timemore, Eureka, Kalaido, Bideli, Defluid, Dalla Corte — each with three products and a tagline
- Build verified passing after changes

## Open questions & assumptions

- Mobile header currently shows the full gear+wordmark lockup; open whether a gear-only mark in the mobile navbar (full lockup reserved for footer) would be preferred
- More brands/categories/products may be needed beyond current set
- Ecommerce cart/checkout flow not yet discussed — assuming catalog is browse-only for now