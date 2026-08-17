import { motion } from "motion/react";
import { LuUsers, LuClock, LuEllipsis } from "react-icons/lu";
import Avatar from "../../components/ui/Avatar";
import Badge from "../../components/ui/Badge";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

const statusConfig = {
  active: {
    label: "Active",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  planning: { label: "Planning", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  review: {
    label: "In Review",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  completed: {
    label: "Completed",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  onhold: { label: "On Hold", color: "text-slate-400", bg: "bg-slate-500/10" },
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <Card
        variant="interactive"
        className="relative w-full overflow-hidden px-4! py-2!"
      >
        {/* Row: Title */}
        <div className="mb-2 flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <h4 className="truncate text-sm text-white">{project.name}</h4>
            <p className="mt-1 truncate text-xs text-slate-400">
              {project.description}
            </p>
          </div>

          <div className="ml-3 flex flex-col items-end gap-0 pb-2">
            <Button
              iconBtn
              variant="ghost"
              size="small"
              className="text-slate-400 hover:text-white"
            >
              <LuEllipsis size={18} />
            </Button>
            <Badge
              variant={
                project.status === "active"
                  ? "success"
                  : project.status === "review"
                    ? "warning"
                    : "primary"
              }
              size="small"
            >
              {statusConfig[project.status]?.label || project.status}
            </Badge>
          </div>
        </div>

        {/* Row: Progress */}
        <div className="mb-3">
          <div className="mb-1 flex items-center justify-between text-xs">
            <span className="text-slate-400">Progress</span>
            <span className="font-medium text-white">{project.progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${project.progress}%` }}
              transition={{ duration: 0.8, delay: 0.15 + index * 0.05 }}
              className={`h-full rounded-full bg-gradient-to-r ${project.color}`}
            />
          </div>
        </div>

        {/* Row: Stats */}
        <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <LuUsers size={12} />
              <span>{project.members.length} members</span>
            </div>
            <div className="flex items-center gap-1.5">
              <LuClock size={12} />
              <span>
                {project.tasks.completed}/{project.tasks.total} tasks
              </span>
            </div>
          </div>
          <div className="flex items-center -space-x-2">
            {project.members.slice(0, 3).map((member) => (
              <Avatar
                key={member.name}
                src={member.avatar}
                alt={member.name}
                className="size-7! sm:size-8!"
              />
            ))}
            {project.members.length > 3 && (
              <div className="flex size-8 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-700 text-xs font-medium text-slate-300">
                +{project.members.length - 3}
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
