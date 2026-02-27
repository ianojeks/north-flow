

## Plan: Add Dark/Light Mode Toggle

Currently the site is dark-only. The existing dark theme variables in `:root` will become the `.dark` class theme, and new light-mode values will take their place in `:root`.

### Changes

**1. Add light mode CSS variables** (`src/index.css`)
- Move current dark values under `.dark` selector
- Add light theme values in `:root` (white/gray backgrounds, dark text, adjusted gradients, glass effect, shadows)
- Update `.glass` utility to use CSS variables so it adapts per theme

**2. Wire up `next-themes`** (`src/App.tsx`)
- Wrap app in `<ThemeProvider>` from `next-themes` with `attribute="class"`, `defaultTheme="dark"`, `enableSystem`

**3. Add theme toggle to Navbar** (`src/components/Navbar.tsx`)
- Add a Sun/Moon icon button that calls `useTheme().setTheme()` to toggle between light and dark

**4. Update `tailwind.config.ts`**
- Already has `darkMode: ["class"]` -- no change needed

**5. Update hardcoded dark colors in components**
- `HeroSection.tsx`: background grid uses hardcoded `hsl(174 72% 48%)` -- convert to use CSS variables or `currentColor` so it adapts
- Components using `bg-gradient-card`, `bg-gradient-hero`, `.glass` will automatically adapt via CSS variable changes

### Light Theme Color Palette
- Background: clean white `0 0% 100%`
- Foreground: dark gray `220 20% 10%`
- Card: light gray `220 14% 97%`
- Muted: `220 14% 94%`
- Border: `220 14% 88%`
- Primary/accent stay the same (teal + gold)
- Shadows become softer, glow becomes subtler

