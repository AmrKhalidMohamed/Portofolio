# anatomy.md

> Auto-maintained by OpenWolf. Last scanned: 2026-08-02T13:07:41.256Z
> Files: 24 tracked | Anatomy hits: 0 | Misses: 0

## ./

- `.dockerignore` — Docker ignore rules (~7 tok)
- `CLAUDE.md` — OpenWolf (~57 tok)
- `Dockerfile` — Docker container definition (~39 tok)
- `GEMINI.md` — OpenWolf (~68 tok)
- `index.html` — Portfolio (~158 tok)
- `package-lock.json` — npm lock file (~22626 tok)
- `package.json` — Node.js package manifest (~153 tok)
- `vercel.json` (~49 tok)
- `vite.config.js` — Vite build configuration (~63 tok)

## .claude/

- `settings.json` (~514 tok)

## .claude/commands/

- `reframe.md` — Mode: migrate [framework] (~551 tok)
- `security-audit.md` — Layer 1 — Dependencies (~510 tok)

## .claude/rules/

- `openwolf.md` (~328 tok)

## src/

- `App.jsx` — App (~243 tok)
- `index.css` — Styles: 45 rules, 7 vars, 1 media queries, 4 animations (~9260 tok)
- `main.jsx` (~108 tok)

## src/components/

- `About.jsx` — EmailIcon (~1176 tok)
  - fn `EmailIcon` L3-9 (~98 tok)
  - fn `PhoneIcon` L10-15 (~151 tok)
  - fn `LinkedInIcon` L16-21 (~188 tok)
  - fn `GitHubIcon` L22-27 (~250 tok)
  - fn `About` L28-93 (~455 tok)
- `HeroSection.jsx` — phrases — uses useState, useEffect (~832 tok)
  - fn `HeroSection` L6-91 (~774 tok)
- `Navbar.jsx` — LINKS — uses useState, useRef, useEffect, useLocation, useNavigate (~1010 tok)
  - fn `Navbar` L9-93 (~763 tok)
- `SkillsSection.jsx` — skills (~510 tok)
  - fn `SkillsSection` L28-57 (~299 tok)
- `WorkSection.jsx` — ExternalLinkIcon — uses useRef, useEffect (~2068 tok)
  - fn `ExternalLinkIcon` L5-12 (~116 tok)
  - fn `GitHubIcon` L13-18 (~250 tok)
  - fn `AppleIcon` L19-24 (~207 tok)
  - fn `PlaystoreIcon` L25-35 (~166 tok)
  - fn `WorkSection` L36-166 (~1292 tok)

## src/data/

- `projects.js` — Declares projects (~628 tok)

## src/pages/

- `Home.jsx` — Home — uses useState, useEffect (~197 tok)
- `Resume.jsx` — RESUME_URL (~245 tok)
