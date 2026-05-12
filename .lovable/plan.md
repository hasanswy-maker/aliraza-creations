## Goal
On mobile, headings (Anton font) feel tight and polished. On desktop, the `md:` jumps push them to extreme sizes (`md:text-[9rem]`, `md:text-8xl`, `md:text-7xl`) which makes Anton look stretched and thin. Scale every desktop heading down one to two steps so desktop matches the mobile feel.

## Changes (all heading-size classes only — no font swap, no copy changes)

**`src/routes/index.tsx`**
- Hero h1: `md:text-[9rem]` → `md:text-7xl lg:text-8xl`
- Featured h2: `md:text-6xl` → `md:text-5xl`
- CTA h2: `md:text-7xl` → `md:text-6xl`
- Stat tiles: `md:text-5xl` → `md:text-4xl`

**`src/routes/work.tsx`**
- h1: `md:text-8xl` → `md:text-7xl`

**`src/routes/contact.tsx`**
- h1: `md:text-8xl` → `md:text-7xl`

**`src/routes/testimonials.tsx`**
- h1: `md:text-8xl` → `md:text-7xl`
- Section h2: `md:text-5xl` → `md:text-4xl`

**`src/routes/services.tsx`**
- h1: `md:text-8xl` → `md:text-7xl`
- FAQ h2: `md:text-6xl` → `md:text-5xl`

**`src/routes/about.tsx`**
- h1: `md:text-7xl` → `md:text-6xl`
- Section h2: `md:text-6xl` → `md:text-5xl`

**`src/routes/stats.tsx`**
- h1: `md:text-8xl` → `md:text-7xl`
- Big stat values: `md:text-6xl` → `md:text-5xl`
- "Last 12 months": `md:text-4xl` → `md:text-3xl`
- "Greatest hits" h2: `md:text-6xl` → `md:text-5xl`

## Out of scope
- No font-family change (Anton + Space Grotesk stay)
- No body copy / paragraph size changes
- No mobile-side changes — mobile already looks right
