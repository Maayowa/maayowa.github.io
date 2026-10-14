# AGENTS.md — Maayowa Personal Site (al-folio on Jekyll)

## What this is
Jekyll static site using the **al-folio theme**, deployed to GitHub Pages at `https://maayowa.github.io`.  
This is a **personal academic site**, not the al-folio template repo. Edits should reflect the owner's actual professional profile — do not use Einstein/template placeholder content.

## Key directories

| Path | Purpose |
|---|---|
| `_config.yml` | Site metadata, feature flags, scholar config |
| `_pages/about.md` | Homepage (uses `permalink: /`) |
| `_data/socials.yml` | Social links, email, CV PDF path |
| `_data/cv.yml` | CV data (used by `/cv/` page via `cv_format: rendercv`) |
| `assets/json/resume.json` | JSON Resume data (fallback if no `cv.yml`) |
| `_bibliography/papers.bib` | Publications (rendered by jekyll-scholar) |
| `_posts/` | Blog posts (format: `YYYY-MM-DD-title.md`) |
| `_news/` | News announcements |
| `_pages/cv.md` | CV page (layout: `cv`, `cv_pdf` in frontmatter) |

## Developer commands

### Local dev (Docker — recommended)
```bash
cd maayowa.github.io
docker compose pull && docker compose up
# Site at http://localhost:8080
# Ctrl+C to stop
```

### Local dev (native, if Docker unavailable)
```bash
bundle install
bundle exec jekyll serve --port 4000
# Site at http://localhost:4000
```

### Format check (CI enforces this)
```bash
npx prettier . --write
```

### Build for production
```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## Before every commit
1. `npx prettier . --write` — CI will fail without this
2. Rebuild locally and verify pages render

## Bundler version fix
`Gemfile.lock` pins `BUNDLED WITH 4.0.4`. If bundler fails:
```bash
gem install bundler:4.0.4
bundle install
```

## Conventions

- **Homepage**: `_pages/about.md` — text-forward, first-person intro, CTA button row (Email, CV, GitHub, Scholar, LinkedIn)
- **Name**: Full name is "Oluwabunmi (Bunmi) Iwakin", used as `first_name: Oluwabunmi`, `last_name: Iwakin`
- **Current role**: Postdoctoral Appointee, Argonne National Laboratory, Chicago, IL
- **Scholar config** in `_config.yml` must match publications: `last_name: [Iwakin]`, `first_name: [Oluwabunmi, Oluwabunmi M., O.]`
- **Profile image**: `assets/img/header.jpeg` (set in `_pages/about.md` frontmatter)
- **CV PDF**: `assets/pdf/recent_resume.pdf` — reference this path, not inventing a new one

## Sections to keep
About, Publications, Blog, News, CV — all configured and ready.

## Template content already removed
- 32 template blog posts (only 2 kept for structure)
- Template news/announcements (1 kept)
- Template teaching/project/book pages (removed)
- Einstein placeholder data in `_data/cv.yml` and `assets/json/resume.json` (replaced)

## CI checks (from `.github/workflows/`)
- `prettier.yml` — formatting validation
- `broken-links.yml` — link validation
- `deploy.yml` — build + deploy on push

## Useful docs
- `README.md` — site overview
- `CUSTOMIZE.md` — theming and customization
- `TROUBLESHOOTING.md` — common issues
- `.github/copilot-instructions.md` — build and CI/CD details
