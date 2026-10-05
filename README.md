# Addithalam Foundation Website

Official website for **Addithalam Foundation** — a registered public charitable trust in Chennai providing free, industry-grade IT education, mentorship, and career placement preparation for underprivileged students and women in technology.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Localization**: English (`en`) & Tamil (`ta`) Bilingual Architecture
- **Bundler / Dev Engine**: Turbopack

---

## 🚀 Getting Started for Developers / Interns

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18.18+ or v20+ recommended)
- [Git](https://git-scm.com/)

### 2. Clone and Install Dependencies
```bash
git clone <YOUR_REPO_URL>
cd "AdithalamFoundation Website"
npm install
```

### 3. Run Development Server (Turbopack)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
├── public/                  # Static assets & photography
│   ├── images/              # Optimized images (hero, programs, logo, features)
├── src/
│   ├── app/                 # Next.js App Router pages (about, programs, impact, team, contact, donate)
│   ├── components/          # Reusable UI components
│   │   ├── home/            # Home page sections
│   │   ├── layout/          # Header, Footer, PageHero, StickyMobileBar
│   │   └── programs/        # Program detail components
│   ├── context/             # Language context (en / ta state management)
│   ├── data/                # Program curriculums, team data, translations, trust metadata
│   └── styles/              # globals.css & design tokens
├── tailwind.config.ts       # Tailwind theme configuration
├── next.config.ts           # Next.js config
└── package.json
```

---

## 🎨 Design & Theme Guidelines

- **Primary Saffron**: `#F68632`
- **Dark Charcoal**: `#231F20` / `#1A1A1A`
- **Warm Canvas**: `#FAF8F5`
- **Tamil Typography**: Uses `Noto Sans Tamil` with zero letter-spacing and 1.65 line-height.
- **English Typography**: Uses `Inter` & `Manrope`.
