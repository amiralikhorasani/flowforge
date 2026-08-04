# DevFlow Animation System

## ✨ Principles

Animation establishes relationship and feedback, never spectacle. Use 120–180 ms for small interactions and 180–300 ms for page or overlay transitions. Respect `prefers-reduced-motion` by removing non-essential movement.

| Interaction | Motion guidance |
| --- | --- |
| Hover | small color/elevation change; no layout jump |
| Card lift | 2–4 px translate with soft shadow on interactive cards |
| Fade/scale | subtle opacity and 0.98→1 scale for transient content |
| Sidebar | translate with opacity; preserve focus order |
| Page transition | short fade and directional continuity only |
| Modal | backdrop fade, panel scale/slide, focus trapped immediately |
| Tooltip | brief fade and small vertical offset |
| Loading/skeleton | calm shimmer or pulse; never imply false progress |
| Buttons | pressed state, pending state, then success/error feedback |
| Charts | animate initial reveal conservatively; update without distracting redraw |

Blur may support overlays and glass surfaces, but it must not obscure important context. Motion implementation should follow [UI Principles](UIPrinciples.md).
