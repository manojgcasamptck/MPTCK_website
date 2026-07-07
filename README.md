# Model Polytechnic College Karunagappally — Website

Official website for **Model Polytechnic College Karunagappally** (MPTC), built with Next.js 15+, React 19, Tailwind CSS, TypeScript, and Framer Motion.

## Features

- Full multi-page site matching the college information architecture
- Home page with hero, stats, departments, placements, news, testimonials, gallery
- 53 routes including all About, Admissions, Academics, Placement, Facilities, and Student Life pages
- Admin dashboard with JWT authentication
- AI chatbot for admissions, courses, placement, and contact FAQs
- PostgreSQL schema and Express API server
- Campus images from MPTC1, MPTC2, MPTC3 and official college sources

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16, React 19, Tailwind CSS 4, Framer Motion |
| Backend | Static Next.js site for GitHub Pages |
| Database | None (static site) |
| Auth | None |
| Charts | Recharts |

## Getting Started

```bash
cd MPTC_WEBSITE
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Static Deployment

This repository is configured as a static website ready for GitHub Pages. The site no longer includes a backend or admin panel, and all pages are served as pre-rendered static HTML/CSS/JS.

## Getting Started

```bash
cd MPTC_WEBSITE
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # Navbar, Hero, Footer, cards, charts
└── lib/           # Data, utilities, site config
database/          # PostgreSQL schema
server/            # Express.js REST API
public/images/     # Campus photos (MPTC1-3, brochure)
```

## Color Theme

- Primary: `#0F4C81`
- Secondary: `#F4B400`
- Background: `#F8FAFC`
- Fonts: Poppins (headings), Inter (body)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run server` | Start Express API |

## License

© Model Polytechnic College Karunagappally
