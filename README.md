# Developer Portfolio

A personal portfolio site built with React and TypeScript. It presents my work, experience, and background as a full-stack developer in a single scrollable page — no external CSS framework, just inline styles and Google Fonts.

---

## Stack

- **React 18** with **TypeScript** — fully typed components, props, and event handlers
- **Google Fonts** — Space Grotesk (headings), Inter (body), JetBrains Mono (code/terminal accents)
- **Inline styles** — self-contained, no Tailwind or CSS modules required
- **Vercel** — deployment target

---

## Structure

```
portfolio/
├── portfolio.tsx       # Main component — all sections, data, and logic in one file
└── README.md
```

The component is organized into distinct layers:

- **Types** — TypeScript interfaces for every data shape (`Project`, `ExperienceItem`, `MoringaProject`, etc.)
- **Data constants** — all content (projects, experience, skills, links) declared as typed arrays at the top of the file
- **Sub-components** — `Cursor`, `NavLink`, `Tag`, `ProjectCard`, `SkillGroup` — small, focused, typed
- **Main component** — assembles everything, manages scroll state and active section tracking

---

## Features

**Typewriter hero** — cycles through role titles using a custom `useTypewriter` hook with a blinking amber cursor rendered as a standalone `Cursor` component.

**Sticky nav with active section tracking** — uses `IntersectionObserver` to highlight the current section in the navbar as you scroll. Collapses to a hamburger menu on mobile.

**Dot-grid background** — a `position: fixed` layer built with three stacked CSS `backgroundImage` gradients: vertical lines, horizontal lines, and radial dots. Semi-transparent card surfaces let the grid show through without competing with text.

**Project cards** — each card has a hover state that reveals a top accent border in the project's assigned color and lightens the card background.

**Experience & Education** — left-border accent cards for work history, with Moringa School expanded to include a nested grid of training projects.

---

## Sections

| Section    | Description                                                       |
|------------|-------------------------------------------------------------------|
| Hero       | Name, animated role typewriter, short bio, CTA buttons           |
| Experience | Javan Informatics internship — role, period, description          |
| Projects   | AIM TOSE, Church Membership Platform, Kay Ming Portfolio, POS Refactor |
| Education  | Moringa School — program details and four training projects       |
| Skills     | Frontend, Backend, Data, and Tooling categories                  |
| Contact    | GitHub, LinkedIn, and email links                                 |

---

## Running Locally

```bash
npm install
npm run dev
```

The portfolio is designed to drop directly into a Next.js or Vite project as the root page component.