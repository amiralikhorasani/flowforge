# DevFlow Coding Standards

## 🧼 Conventions

Use PascalCase for React components and their files, camelCase for functions and variables, and `use` prefixes for hooks. Use concise, descriptive names that communicate domain intent. Folder names use lowercase and kebab-case only when multiple words improve readability.

## 📦 Imports and formatting

Order imports: external packages, internal aliases/modules, relative modules, then styles. Keep one primary component per component file where practical. Prettier controls layout; ESLint catches correctness and consistency issues. Do not hand-format against automated tooling.

## 🧠 Clean code

Prefer small components, explicit props, early returns, and pure helpers. Keep business decisions in feature modules and visual primitives reusable. Comments explain non-obvious intent, constraints, or trade-offs—not syntax. Avoid duplicated state, magic values, and speculative abstractions.

## ✅ Quality expectations

Validate untrusted input, handle empty/loading/error states, preserve accessibility semantics, and add tests around meaningful behavior as the test suite is established. Follow [Architecture](Architecture.md) for ownership boundaries.
