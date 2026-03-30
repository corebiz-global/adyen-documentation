# Documentation Guide & Decisions

This document serves as a reference for the style, structure, and conventions used in this documentation project. It helps maintain consistency across sessions.

## Visual Style (Adyen Brand Alignment)

- **Color Palette**: Defined in `src/css/custom.css` to match Adyen's identity.
  - `--adyen-green: #0ABF53` (Primary Action / Highlights)
  - `--adyen-dark-blue: #00112C` (Main Headings / Dark Surface)
  - `--adyen-surface`: Light bluish-gray background for better readability.
- **Fonts**:
  - **Base Font**: 'Fakt' (Premium sans-serif used by Adyen).
  - **Code Font**: 'Fira Code' (Monospace with ligatures).
- **Disclaimer/Blockquote Style**: 
  - Styled as attention boxes using `--adyen-surface-container-high` (soft blue) background.
  - Left border: 3px solid `--adyen-green`.
  - Used for warnings, tips, and important technical notes.
- **Dark Mode**: 
  - Fully supported with high-contrast variables.
  - Ensure all new CSS uses variables (e.g., `--ifm-font-color-base`) instead of hardcoded hex values to maintain legibility.

## Structural Rules

- **File Granularity**: Split documentation into smaller, single-purpose Markdown files.
- **Localization (i18n)**: 
  - The project supports **English (en)**, **Portuguese (pt-BR)**, and **Spanish (es)**.
  - **MANDATORY**: Any change or new page added to `docs/` (English) MUST be replicated in `i18n/pt-BR/...` and `i18n/es/...`.
  - File names must be identical across all language folders to ensure Docusaurus mapping works correctly.
- **Categorization**: Group related documents into folders with a `_category_.json` file defining the sidebar label and position.

## Content & Writing Style

- **No Numbering in Headings**: The order is defined by `sidebar_position` in frontmatter.
- **Action-Oriented Headings**: Use direct instructions (e.g., `## How to configure webhooks`).
- **Technical Attachments**: 
  - When requesting complex files in Support (like `.HAR` or `JAM`), always provide instructional links to help the merchant generate them.
- **Internal Linking**: Use relative Markdown links (e.g., `[label](./path/file.md)`).
- **Text Removal**: Per global mandate, always explain the technical reason before removing significant portions of documentation.

## Site Configuration

- **Home Page**: The site uses `routeBasePath: '/'`, making the documentation the landing page.
- **Root Document**: `docs/intro.md` uses `slug: /` to act as the homepage.
- **Validation**: Always run `npm run build` before committing to ensure i18n mapping and links are valid.
