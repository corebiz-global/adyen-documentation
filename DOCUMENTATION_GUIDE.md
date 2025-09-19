# Documentation Guide & Decisions

This document serves as a reference for the style, structure, and conventions used in this documentation project. It helps maintain consistency across sessions.

## Visual Style (Based on Adyen Docs)

- **Color Palette**: The primary color palette is based on Adyen's branding, defined as CSS variables in `src/css/custom.css`.
  - `--adyen-green: #0ABF53` (Primary color)
  - `--adyen-dark-blue: #00112C` (Main text color)
  - `--adyen-interactive-blue: #4990E2` (Link color)
  - Neutral grays for backgrounds and borders.
- **Fonts**:
  - **Base Font**: Inter
  - **Code Font**: Fira Code
- **Disclaimer/Blockquote Style**: Blockquotes are styled as attention boxes with a light yellow background and an orange left border.

## Structural Rules

- **File Granularity**: The documentation is split into smaller, single-purpose Markdown files rather than one monolithic document.
- **Categorization**: Related documents are grouped into folders (e.g., `docs/adyen-configuration/`). These folders automatically become categories in the sidebar.
- **Category Configuration**: Each category folder must contain a `_category_.json` file to define its label (title) and position in the sidebar.

## Content & Writing Style

- **Language**: All documentation text, including titles and headings, must be in English.
- **Document Titles**: Each document should have its title explicitly set in the frontmatter using the `title` key (e.g., `title: Prerequisites`).
- **No Numbering in Headings**: Headings and subheadings should not contain numerical prefixes (e.g., use `## Introduction`, not `## 1. Introduction`). The order is defined by the `sidebar_position` in the frontmatter and the file structure.
- **Action-Oriented Headings**: Where appropriate, headings should be phrased as direct instructions or questions (e.g., `## How to get your credentials`).
- **Highlighting**: Use bold (`**...**`) to highlight key terms that users need to identify and act upon.
- **Internal Linking**: Use relative Markdown links to connect related documents and guide the user through the steps (e.g., `[generate your API key](./adyen-configuration/api-key.md)`).

## Site Configuration (`docusaurus.config.ts`)

- **Home Page**: The documentation itself serves as the home page. This is configured by setting `routeBasePath: '/'` for the `docs` preset.
- **Root Document**: The `docs/intro.md` file is designated as the site's root page by using `slug: /` in its frontmatter.
- **Navbar**: The navbar is clean and contains only the site logo. The title and all navigation items have been removed.
- **Footer**: The "Documentation" link in the footer points to the root of the site (`to: '/'`).
