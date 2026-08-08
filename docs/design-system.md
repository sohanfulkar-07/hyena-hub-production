# THE HYENA HUB — DESIGN SYSTEM & TOKEN ARCHITECTURE

```
HYENA HUB
│
├── COLORS
│   ├── Obsidian            #0A0A0C
│   ├── Ivory               #F5F5F7
│   ├── Champagne Gold      #D4B44A / #F59E0B
│   ├── Muted Grey          #A1A1AA / #71717A
│   └── Cinematic Black     #060608
│
├── TYPOGRAPHY
│   ├── Display             Space Grotesk
│   ├── Heading             Playfair Display
│   ├── Body                Inter / Plus Jakarta Sans
│   └── Metadata            Monospace (Tracking 0.15em)
│
├── SPACING
│   ├── Section             clamp(4rem, 8vw, 7.5rem)
│   ├── Container           1280px Max Width
│   ├── Card                2rem / 2.5rem Padding
│   └── Micro               0.75rem (12px)
│
├── COMPONENTS
│   ├── Navigation          Translucent Sticky Navbar & Drawer
│   ├── Buttons             Champagne Gold Shimmer CTAs
│   ├── Cards               Frost-Glass High-Blur Panels
│   ├── Labels              Floating Active Gold Slate Labels
│   ├── Modals              Forensic DRM Screener Modals
│   └── Forms               Dual-Panel Live Typewriter Console
│
└── MOTION
    ├── Page transitions    Staggered 0.8s Fade-and-Rise
    ├── Scroll reveals      Intersection Observer Triggers
    ├── Hover states        1.01x - 1.05x Gold Glow Scaling
    ├── Image movement      Micro-Gravity Floating Emblem Motion
    └── Cursor interactions  Typewriter Caret & Shimmer Sweeps
```

## CSS Token Implementations (`css/variables.css`)
```css
:root {
  --color-obsidian: #0A0A0C;
  --color-ivory: #F5F5F7;
  --color-champagne-gold: #D4B44A;
  --color-champagne-bright: #F59E0B;
  --color-muted-grey: #A1A1AA;
  --color-cinematic-black: #060608;

  --font-display: 'Space Grotesk', sans-serif;
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', sans-serif;
  --font-metadata: monospace;

  --spacing-section: clamp(4rem, 8vw, 7.5rem);
  --spacing-container: 1280px;
  --spacing-card: 2rem;
  --spacing-micro: 0.75rem;
}
```
