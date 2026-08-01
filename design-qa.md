# Design QA

- Scope: Contact section and reusable footer separation on the home and project archive pages.
- Source visual truth: `approved-designs/main-page-overview.png` and the existing navy, electric-lime, glass-border design system.
- Prototype capture: desktop home page at 1440 × 900, footer visible in the in-app browser.
- State: desktop default.
- Console/error overlay: no Vite error overlay present.

## Findings

- No P0, P1, or P2 issues found.
- The lime header brand now uses a transparent fill with a crisp white outline; browser capture confirms it remains legible over the glass navigation.
- Strengths and Contact now join without a divider; Contact was reduced to 661px with no gap between its main CTA and link row.
- All five Strengths cards share the same hover animation selector and rotated keyword treatment.
- More Projects has 36px of space below it before About begins.
- About uses the revised `about-lareina.png` asset with powder-blue and white retro sneakers based on the supplied footwear reference.
- Experience now uses a script-style display face, a softly extended raster light trail, and reference-aligned dates, nodes, axis, and cards.
- Home includes a visible More Projects link between Selected Projects and About.
- Header brand uses the lime treatment with white text; right-side language controls have additional breathing room.
- Contact main-content vertical spacing is approximately half the previous value while preserving the 1060px section height.
- Contact now matches the other main sections at 1060px desktop height and follows the established 1700px page shell, typography scale, lime accent, fine borders, and shared deep-navy surface.
- A visible 1px divider now separates Contact from the compact footer metadata row.
- Header CONTACT resolves to `#contact` on the home page and `/#contact` from the archive page.
- Contact CTA, email, LinkedIn, GitHub, and Back to Top links are present and accessible; the footer includes “@ 2026 LAREINA YANG” and “DESIGNED & BUILT WITH CODEX”.
- The transition from Strengths into the footer is visually clean; the fixed site navigation remains readable.
- Mobile layout collapses the CTA, social links, and metadata into a single-column structure.

## Verification

- Browser-rendered footer inspected at the desktop viewport.
- Server-rendered HTML assertions cover the footer heading and Back to Top link.
- ESLint, production build, and Node tests pass.

final result: passed

---

# Experience Signature Flourish QA — 2026-08-01

- Source visual truth: user-provided `Screenshot 2026-08-01 at 3.57.33 PM.png`.
- State checked: desktop Experience heading at `/#experience`.
- The gold handwritten “Experience” treatment now continues into a long, gently curved stroke, matching the reference composition.
- Browser measurement: flourish width 179px at the tested viewport, 2px stroke, with responsive width reduction on small screens.
- Existing heading hierarchy, copy, cloud artwork, and timeline layout remain unchanged.
- Lint, production build, and rendered HTML tests passed.

final result: passed

---

# Archive Bottom Anchor and Project Links QA — 2026-08-01

- Source visual truth: browser annotations for the filtered archive at 1440 × 900 and the saved footer-note reference screenshot.
- Implementation screenshot: `implementation-projects-links.png`.
- Focused comparison: `design-qa-archive-bottom-comparison.png` (reference above, implementation below).
- Viewport: 1440 × 900 CSS px, device pixel ratio 1.
- State: Software Systems selected, Ticket Viewer active.

## Evidence and findings

- No actionable P0, P1, or P2 issues remain for the two annotated changes.
- The archive note now uses absolute bottom anchoring only in filtered desktop/tablet states. Its rendered bottom is 25px above the panel border, so it no longer rises with a one-row or two-row result set.
- The full Ticket Viewer row is covered by one accessible link whose bounds match the row bounds; the detail-card CTA points to the same repository.
- All eight projects expose a labeled `_blank` link with `rel="noreferrer"` and a project-specific GitHub URL.
- Browser console errors checked: none; document width remains 1440px with no horizontal overflow.

## Required fidelity surfaces

- Fonts and typography: existing footer-note typography is unchanged.
- Spacing and layout: the note stays pinned to the filtered panel bottom with the requested empty space retained above it.
- Colors and visual tokens: no changes to the approved navy/lime visual treatment.
- Image quality: project thumbnails and detail-card images are unchanged.
- Copy and content: note copy is unchanged; project links are mapped to the matching repositories.

## Comparison history

- Initial P2: at 1440px the note remained in normal flow and sat 108px above the panel bottom. Fixed by moving the formatted desktop rule into the later-loaded refinement stylesheet; post-fix gap is 25px.
- Initial P2: adding the link as a normal grid child displaced the row columns. Fixed by absolutely covering the existing article with the link; post-fix link and row share the same visual bounds.

final result: passed

---

# Filtered Archive Minimum Height and Footer Note QA — 2026-08-01

- Source visual truth: `/var/folders/6l/lt90wr250jsc_xj7nz46yfj80000gn/T/TemporaryItems/NSIRD_screencaptureui_KSg91a/Screenshot 2026-08-01 at 3.00.03 PM.png` and browser annotation screenshot at 1024 × 768.
- Implementation screenshot: `implementation-projects-robotics.png`.
- Focused comparison: `design-qa-archive-note-comparison.png` (reference above, implementation below).
- Viewport: 1024 × 768 CSS px, device pixel ratio 1; full-page implementation capture is 1024 × 1318 pixels.
- State: Robotics & XR selected, two project rows visible, Tom’s Target detail card active.

## Evidence and findings

- No actionable P0, P1, or P2 differences remain for this scoped annotation.
- The filtered archive panel has an 820px minimum height. Both project thumbnails end above the panel bottom, the detail card ends above the footer note, and the note ends 25px above the panel border.
- The footer note reproduces the reference copy, uppercase mono typography, wide tracking, top divider, paired lime sparkle icons, and glow treatment.
- The 1024px document has no horizontal overflow (`scrollWidth` equals `innerWidth`).
- Robotics & XR filter remained functional and rendered exactly two rows.
- Browser console errors checked: none.

## Required fidelity surfaces

- Fonts and typography: existing mono font, uppercase copy, compact size, and tracked lettering match the source treatment.
- Spacing and layout: note is centered between two edge-aligned sparkle icons with the source-like divider and inset spacing; filtered panel height contains all visual content.
- Colors and tokens: existing navy glass surface, translucent divider, white-gray copy, and electric-lime glow are reused.
- Image quality: real project thumbnails remain uncropped within their rows; standard library icons replace text-glyph or CSS-drawn stars.
- Copy and content: reference sentence is reproduced exactly.

## Comparison history

- Initial P2: filtered panel collapsed to 428.5px, leaving the 495px detail card outside its frame. Fixed with a filtered-state minimum height of 820px.
- Initial P2: the first footer layout crowded the second sparkle behind the detail card. Fixed by moving the note to the bottom of the expanded panel and distributing both icons with `space-between`.
- Post-fix browser evidence: panel bottom 1157px, card bottom 1038px, note 1085–1132px, and both row thumbnails within the panel.

final result: passed

---

# Projects Archive Interaction QA — 2026-08-01

- Source visual truth: `approved-designs/05-all-projects.png`.
- Implementation screenshot: `implementation-projects.png`.
- Combined comparison: `design-qa-comparison.png` (source left, implementation right).
- Viewport and density: 1024 × 1536 CSS px, device pixel ratio 1; both source and implementation are 1024 × 1536 pixels, so no density normalization was required.
- State: desktop archive with AI Art Detector selected; category filter and project-detail interactions tested separately.

## Full-view comparison evidence

- The archive retains the cloud-and-glass visual system, electric-lime filter/row state, thumbnail-led table, and right-side bordered detail card shown in the source.
- Every project row now has a distinct, subject-appropriate 16:9 image.
- The implementation uses the existing live page typography and spacing rather than replacing unrelated archive styling.

## Focused interaction evidence

- AI & Products filter changed `aria-pressed` to `true` and reduced the rendered project rows from 8 to TaskMosaic, AI Art Detector, and Livinit.
- Project focus changed the detail card title and image to the corresponding project.
- Hover/focus/active styling uses the same lime surface and navy text treatment as the source.
- Browser console errors checked: none.

## Required fidelity surfaces

- Fonts and typography: existing project display and mono typography preserved; card hierarchy matches the source with project title, body, tags, metric, and action.
- Spacing and layout: desktop uses a table/detail-card grid; 761–1100px uses the reference-like floating card; mobile stacks the detail card above the list.
- Colors and tokens: existing navy, lime, white, translucent borders, glow, and glass tokens reused.
- Image quality: eight real raster assets are present; generated assets are 16:9 and match each listed project's subject and dark cinematic art direction.
- Copy and content: all eight project names, categories, years, focus labels, descriptions, tags, and project-specific metrics are populated.

## Findings

- No actionable P0, P1, or P2 issues remain in the requested list hover, image, filtering, or detail-card behavior.
- P3: the source includes extra decorative archive footer copy that remains outside this scoped interaction update.

## Comparison history

- Initial P2: the 1024px table and card competed for horizontal space. Fixed by switching the mid-width layout to a floating right-side detail card and tightening header/filter spacing.
- Post-fix evidence: 1024 × 1536 browser capture has no horizontal document overflow at the tested desktop breakpoint; interactive controls and card content remain accessible.

final result: passed
