# The Hyena Hub — Production Web Platform

[![FIAPF Accredited](https://img.shields.io/badge/FIAPF-Accredited-d4af37.svg)](https://hyenahub.com)
[![Cinema Standards](https://img.shields.io/badge/Optics-65mm%20%7C%208K%20Dolby-gold.svg)](https://hyenahub.com)

**The Hyena Hub** is a borderless film production house and global distribution ecosystem calibrated for international cinema, narrative storytelling, and platform syndication.

---

## Directory Architecture

```
hyena-hub-production/
│
├── index.html                 # Home Page
├── about.html                 # About Us Page
├── services.html              # Services & 3-Stage Ecosystem
├── portfolio.html             # Portfolio Slate & Screening Room
├── contact.html               # Contact & Creator Intake Portal
│
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── hero_cinematic.png
│   │   │   └── slate_film1.png
│   │   ├── logo/
│   │   │   ├── logo.png
│   │   │   └── logo.jpg
│   │   ├── backgrounds/
│   │   ├── team/
│   │   ├── projects/
│   │   ├── icons/
│   │   └── thumbnails/
│   ├── videos/
│   ├── fonts/
│   └── documents/
│
├── css/
│   ├── style.css              # Main style entry point (@import modules)
│   ├── variables.css          # Design tokens & color palette
│   ├── animations.css         # Transitions, scroll reveal & effects
│   ├── responsive.css         # Breakpoint rules & mobile layouts
│   └── components.css         # UI components & form systems
│
├── js/
│   ├── main.js                # Core app initializer
│   ├── navbar.js              # Sticky navbar & mobile drawer
│   ├── animations.js          # IntersectionObserver reveals
│   ├── portfolio.js           # Slate filters & modal dialogs
│   ├── contact.js             # Multi-step intake wizard
│   └── utils.js               # Helper utilities
│
├── pages/
│   ├── privacy.html           # Privacy Policy & DRM Terms
│   ├── terms.html             # Terms of Service & Submission Notice
│   └── 404.html               # Custom 404 error page
│
├── components/
│   ├── navbar.html            # Reusable nav header snippet
│   ├── footer.html            # Reusable footer snippet
│   ├── hero.html              # Reusable hero banner snippet
│   └── testimonials.html      # Reusable testimonials snippet
│
├── data/
│   ├── portfolio.json         # Motion pictures slate dataset
│   ├── team.json              # Leadership & production leads
│   └── testimonials.json      # Industry reviews dataset
│
├── README.md                  # Documentation
├── LICENSE                    # Software License
├── .gitignore                 # Git ignore rules
└── favicon.ico                # Site favicon
```

---

## Key Features

1. **Editorial Aesthetic & Obsidian Gold Design System**: Built with modern typography (Playfair Display & Inter), HSL tailored obsidian dark mode, subtle film grain overlays, and micro-animations.
2. **Interactive 3-Stage Pipeline**: Genesis (Development), Execution (Production), and Distribution (Syndication & Private Theater).
3. **Filterable Film Slate & Case Study Modals**: Dynamically filter films by category with interactive case study spec sheets and trailer dialogs.
4. **The Private Theater Screening Room**: Features custom video control bar, 4K HDR DRM branding, and page light dimmer mode.
5. **Creator Intake Multi-Step Wizard**: 4-step story submission form with drag-and-drop pitch deck upload simulator and tracking reference ID generation.

---

## Quick Start

Open `index.html` in any modern web browser or serve locally with any standard static file server (e.g. `npx serve`, `python -m http.server 8000`, or Live Server).

---

&copy; 2026 The Hyena Hub. All Rights Reserved. Borderless Cinema & Syndication.
