import { motion } from "motion/react";
import {
  LuMessageSquare,
  LuCalendar,
  LuEllipsis,
  LuFolderKanban,
  LuChevronRight,
  LuFlag,
} from "react-icons/lu";
import Avatar from "../../components/ui/Avatar";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";

const statusConfig = {
  todo: {
    label: "To Do",
    color: "text-slate-400",
    bg: "bg-slate-500/10",
    icon: LuFlag,
  },
  "in-progress": {
    label: "In Progress",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    icon: LuFlag,
  },
  review: {
    label: "In Review",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    icon: LuMessageSquare,
  },
  done: {
    label: "Done",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    icon: LuChevronRight,
  },
};

const priorityConfig = {
  high: { label: "High", color: "text-red-400", bg: "bg-red-500/10" },
  medium: { label: "Medium", color: "text-amber-400", bg: "bg-amber-500/10" },
  low: { label: "Low", color: "text-cyan-400", bg: "bg-cyan-500/10" },
};

function TaskItem({ task, index }) {
  const status = statusConfig[task.status];
  const priority = priorityConfig[task.priority];
  const Icon = status.icon;
  const isOverdue =
    new Date(task.dueDate) < new Date() && task.status !== "done";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="group px-3 py-5 transition-colors hover:bg-white/2"
    >
      <div className="flex min-w-0 items-start gap-1">
        {/* Task Content */}
        <div className="w-full min-w-0 space-y-2 text-sm">
          <div className="mb-5 flex min-w-0 flex-col items-start justify-between gap-2 md:flex-row lg:flex-col 2xl:flex-row">
            <div className="flex items-center gap-2">
              <div
                className={`flex min-h-7 min-w-7 items-center justify-center rounded-xl ${status?.bg} ${status?.color}`}
                aria-hidden="true"
              >
                <Icon size={16} />
              </div>
              <h4 className="max-w-full min-w-0 truncate text-white">
                {task.title}
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <Badge size="small" className="text-nowrap">
                {priority.label}
              </Badge>
              <Badge
                variant={
                  task.status === "done"
                    ? "success"
                    : task.status === "in-progress"
                      ? "primary"
                      : task.status === "review"
                        ? "warning"
                        : "default"
                }
                size="small"
                className="text-nowrap"
              >
                {status.label}
              </Badge>
            </div>
          </div>

          <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <LuFolderKanban size={12} />
              <span className="max-w-37.5 truncate">{task.project}</span>
            </span>
            <span className="flex items-center gap-1">
              <LuCalendar size={12} />
              <span className={isOverdue ? "text-red-400" : ""}>
                Due:{" "}
                {new Date(task.dueDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </span>
            {task.comments > 0 && (
              <span className="flex items-center gap-1">
                <LuMessageSquare size={12} />
                <span>{task.comments}</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Avatar
              src={task.assignee.avatar}
              alt={task.assignee.name}
              size="mini"
            />
            <span className="text-xs font-medium text-slate-300">
              {task.assignee.name}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            iconBtn={true}
            variant="ghost"
            size="small"
            className="text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 hover:text-white"
            aria-label="Task options"
          >
            <LuEllipsis size={18} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default TaskItem;
