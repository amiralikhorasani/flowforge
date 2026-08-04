# DevFlow Design System

## 🎨 Color palette

| Token | Value | Intended use |
| --- | --- | --- |
| Background | `#0F0F17` | App canvas |
| Surface | `#181824` | Navigation and raised areas |
| Card | `#202031` | Content containers |
| Primary Purple | `#7C3AED` | Primary actions and selection |
| Accent Cyan | `#22D3EE` | Highlights and data accents |
| White | `#F8FAFC` | Primary text |
| Gray Text | `#A1A1AA` | Secondary text |
| Border | `rgba(255,255,255,0.08)` | Low-contrast separation |
| Success | `#22C55E` | Positive status |
| Warning | `#F59E0B` | Attention status |
| Danger | `#EF4444` | Destructive status |

## 🔤 Typography

| Role | Family | Guidance |
| --- | --- | --- |
| Display and headings | Space Grotesk | Confident hierarchy; compact tracking |
| Interface and body | Inter | Highly legible text and numerals |

Use a clear scale, typically 12, 14, 16, 20, 24, 32, and 40 px. Body text should normally be 14–16 px with generous line height.

## 📐 Layout tokens

| System | Values |
| --- | --- |
| Spacing | 8pt grid: 4, 8, 12, 16, 24, 32, 40, 48, 64 |
| Radius | 8 px controls; 12 px cards; 16 px prominent panels; full pills |
| Shadows | soft black shadows at low opacity; elevate only interactive or overlay layers |
| Breakpoints | 640, 768, 1024, 1280, 1536 px |

## 🧩 Components

| Component | Variants | Rules |
| --- | --- | --- |
| Button | primary, secondary, ghost, danger | One primary action per local decision area |
| Input | default, focused, error, disabled | Visible label, help/error text, keyboard focus |
| Card | default, interactive, glass, metric | Use Card color and consistent padding |
| Badge | neutral, success, warning, danger | Never convey meaning by color alone |
| Icon | Lucide, 16/20/24 px | Pair unfamiliar actions with labels or tooltips |

## ✨ Motion and glassmorphism

Transitions should be brief (120–240 ms), purposeful, and respect reduced-motion preferences. Glass surfaces use a restrained translucent fill, subtle blur, and the standard border; glass never compromises text contrast. See [Animations](Animations.md).

## 📏 Grid system

Use an 8pt spatial rhythm. Desktop content uses a flexible grid with predictable gutters; mobile collapses to a single column without hiding essential actions. Large whitespace, rounded surfaces, low-contrast borders, and gradient lighting create the premium visual tone.
