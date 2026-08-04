# DevFlow Project Structure

## 📁 `src` directory guide

| Folder | Responsibility |
| --- | --- |
| `app` | Root composition, providers, and application setup |
| `features` | Domain-owned modules such as tasks, projects, and calendar |
| `pages` | Route-level page compositions |
| `layouts` | Shared application shells and navigation frames |
| `components` | Reusable presentational components; includes UI primitives |
| `hooks` | Shared React hooks with no feature-private ownership |
| `services` | API, persistence, and external integration boundaries |
| `lib` | Configured third-party clients and framework helpers |
| `utils` | Pure generic utilities |
| `styles` | Global tokens, resets, and shared style foundations |
| `assets` | Static images, icons, and visual assets |
| `routes` | Route definitions, guards, and route utilities |
| `docs` | Product and engineering documentation |

## 🧭 Placement rules

Prefer a feature-local file when it has one domain consumer. Promote it to a shared folder only after a stable, cross-domain use appears. Avoid circular imports and never let a page become the permanent home of business logic.
