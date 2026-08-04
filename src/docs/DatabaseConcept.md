# DevFlow Database Concept

## 🗂️ Conceptual entities

| Entity | Responsibility |
| --- | --- |
| User | Identity, profile, preferences, memberships |
| Workspace | Organizational boundary for members and work |
| Project | Initiative with ownership, status, dates, and goals |
| Task | Atomic work item with status, priority, assignee, and schedule |
| Sprint | Time-boxed planning container for selected tasks |
| Label | Reusable classification for tasks and projects |
| Comment | Conversation attached to a task or project |
| Notification | User-targeted record of relevant events |
| Activity | Immutable audit-style event for meaningful changes |

## 🔗 Relationships

A user may belong to many workspaces; a workspace contains many projects, members, labels, and notifications. A project has many tasks and may run many sprints. Tasks can belong to one project and optionally one sprint, have one assignee, many labels, many comments, and many activity records. Notifications refer to an event and recipient, not merely a screen state.

## 🔐 Future data principles

Workspace boundaries drive authorization. IDs should be stable, timestamps consistently represented, deletes designed deliberately, and activity records append-only. The conceptual model intentionally avoids choosing table schemas or database technology; implementation is a later concern.
