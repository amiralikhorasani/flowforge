# DevFlow Architecture

## 🏗️ Feature-based architecture

DevFlow organizes product behavior by domain rather than by technical file type. A feature owns its screens, components, state, services, validation, and tests where practical. This keeps related decisions close together and makes a feature understandable without traversing the entire application.

## 🎯 Why this model

Project work naturally grows around capabilities—tasks, projects, calendar, authentication, notifications—not around generic folders. Domain ownership lowers coupling, makes deletion safer, and supports independent iteration by multiple contributors.

## 📂 Folder philosophy

- `app`: application composition, providers, and bootstrapping.
- `features`: domain-specific flows and feature-private modules.
- `components`: reusable cross-domain presentation components.
- `pages`: route-level screen composition.
- `layouts`: shared structural shells.
- `services`, `lib`, and `utils`: infrastructure, integrations, and pure helpers.

See [Project Structure](ProjectStructure.md) for the complete directory contract.

## 📈 Scalability rules

Features expose a small public API, avoid importing another feature's internals, and move only genuinely shared code to a common layer. Data shapes and permissions remain close to their owning domain. This permits incremental replacement of mock data with remote services.

## ♻️ Reusable components

The shared component layer contains accessible, composable primitives such as Button, Input, Modal, Tabs, Toast, and Card. It must not encode project-specific business rules. Product-specific compositions stay in features.

## 🧭 Routing

Routes map URL intent to page-level compositions. Layouts provide persistent navigation and workspace context; pages load feature modules. Route guards should centralize authenticated and workspace-scoped access rules.

## 🗃️ State management

Keep ephemeral UI state local first. Use Zustand for shared client interaction state such as sidebar visibility, active workspace context, and command palette state. Server state should move to TanStack Query when a backend is introduced, retaining loading, caching, invalidation, and optimistic-update semantics.

## ☁️ Future backend

Supabase is the proposed first backend for authentication, PostgreSQL data, storage, real-time collaboration, and row-level security. Service interfaces should isolate providers so that a future API can be adopted without reshaping every screen. Conceptual data ownership is documented in [Database Concept](DatabaseConcept.md).
