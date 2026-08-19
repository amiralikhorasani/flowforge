import { LuFlag } from "react-icons/lu";

import profileImg from "../../assets/images/amiraliProfile.jpg";
import CardTitle from "./CardTitle";
import SectionLayout from "./SectionLayout";
import TaskItem from "./TaskItem";
import EmptyState from "../../components/ui/EmptyState";
import ViewAllItemsButton from "./ViewAllItemsButton";

const tasks = [
  {
    id: 1,
    title: "Implement dashboard analytics charts",
    project: "FlowForge Dashboard",
    status: "in-progress",
    priority: "high",
    assignee: {
      name: "Amirali K.",
      avatar: profileImg,
    },
    dueDate: "2026-08-15",
    comments: 3,
  },
  {
    id: 2,
    title: "Design mobile navigation patterns",
    project: "Mobile App Redesign",
    status: "todo",
    priority: "medium",
    assignee: { name: "Sara A.", avatar: profileImg },
    dueDate: "2026-08-18",
    comments: 1,
  },
  {
    id: 3,
    title: "Write API documentation for auth endpoints",
    project: "API Documentation",
    status: "review",
    priority: "low",
    assignee: {
      name: "Amirali K.",
      avatar: profileImg,
    },
    dueDate: "2026-08-10",
    comments: 0,
  },
  {
    id: 4,
    title: "Create design token documentation",
    project: "Design System v2",
    status: "todo",
    priority: "medium",
    assignee: { name: "Reza M.", avatar: profileImg },
    dueDate: "2026-08-22",
    comments: 2,
  },
  {
    id: 5,
    title: "Fix responsive layout issues on tablet",
    project: "FlowForge Dashboard",
    status: "done",
    priority: "high",
    assignee: { name: "Sara A.", avatar: profileImg },
    dueDate: "2026-08-12",
    comments: 4,
  },
  {
    id: 6,
    title: "Set up CI/CD pipeline for mobile builds",
    project: "Mobile App Redesign",
    status: "in-progress",
    priority: "high",
    assignee: { name: "Reza M.", avatar: profileImg },
    dueDate: "2026-08-25",
    comments: 1,
  },
];

export default function RecentTasks() {
  return (
    <SectionLayout>
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-white/5 px-5 py-3.5 sm:flex-row sm:items-center">
        <CardTitle
          icon={LuFlag}
          title="Recent Tasks"
          description="Tasks assigned to you or updated recently"
        />

        <ViewAllItemsButton to="/workspace/tasks" />
      </div>

      {/* Tasks List */}
      <div className="scroll_style max-h-144 divide-y divide-white/5 overflow-auto">
        {tasks.map((task, index) => (
          <TaskItem key={task.id} task={task} index={index} />
        ))}

        {/* Empty state for when no tasks */}
        {tasks.length === 0 && (
          <EmptyState
            icon={LuFlag}
            title="No recent tasks"
            description="Tasks you're assigned to will appear here"
          />
        )}
      </div>
    </SectionLayout>
  );
}
