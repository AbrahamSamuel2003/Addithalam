# Workspace Rule: Bilingual Typography & Next.js Stability Invariants

## 1. Bilingual (English ⇄ Tamil) Typography Standards
- **Font Stack**: Always ensure `Noto Sans Tamil` is explicitly loaded and prioritized in CSS when `html[lang="ta"]` is active.
- **Letter Spacing**: English headings use negative tracking (`-0.02em`), but Tamil typography MUST always reset to `letter-spacing: 0` / `letter-spacing: normal` to prevent ligature collision and glyph deformation.
- **Line Heights**: Set body `line-height: 1.65` and headings `line-height: 1.35` for Tamil text to prevent vertical clipping of vowel diacritics (ெ, ே, ை, ௌ, ி, ீ).
- **Flexible Containers**: Always use `flex-wrap` and min-content sizing for tags, badges, and button groups to accommodate the natural character length differences between English and Tamil.
- **Word Breaking**: Apply `overflow-wrap: break-word` and `word-break: normal` to prevent overflow on mobile viewport sizes.

## 2. Next.js 15 Fast Refresh & HMR Stability (Windows)
- In development on Windows, Webpack's disk-based chunk lifecycle can cause race conditions during rapid file updates (`MODULE_NOT_FOUND` / `[object Event]`).
- Prefer Turbopack (`next dev --turbo`) for in-memory incremental chunk updates.
- Keep event handlers clean and avoid re-throwing raw DOM events inside React error boundaries.
