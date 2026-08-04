# DevFlow Git Workflow

## 🌿 Branch strategy

`main` is always releasable. `develop` integrates approved work during active development. Create short-lived branches from `develop` using `feature/`, `fix/`, `docs/`, or `chore/` prefixes, for example `feature/kanban-filters`.

## ✍️ Commits

Use imperative conventional messages: `feat(tasks): add priority filter`, `fix(calendar): preserve selected date`, `docs: expand AI vision`, or `chore: update tooling`. Keep commits focused and avoid mixing refactors with behavior changes unless inseparable.

## 🔍 Pull requests

Open a PR early when feedback is useful. Explain user impact, include screenshots for UI changes, link scope or issues, list verification performed, and call out deferred work. At least one reviewer should confirm behavior, accessibility, and architecture alignment.

## 🏷️ Releases

Tag approved releases with semantic versions such as `v1.0.0`. Release notes should state customer-facing changes, migration concerns, and known limitations. Protect `main`; merge only reviewed, passing changes.
