import { motion } from "motion/react";
import {
  LuUsers,
  LuFolderKanban,
  LuCheckCheck,
  LuClock,
  LuTrendingUp,
  LuTarget,
} from "react-icons/lu";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

const stats = [
  {
    title: "Team Members",
    value: "12",
    change: "+2 this month",
    changeType: "positive",
    icon: <LuUsers size={24} />,
    iconColor: "text-violet-400",
    bgColor: "bg-violet-500/10",
  },
  {
    title: "Active Projects",
    value: "8",
    change: "+1 this week",
    changeType: "positive",
    icon: <LuFolderKanban size={24} />,
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    title: "Tasks Completed",
    value: "156",
    change: "+23 today",
    changeType: "positive",
    icon: <LuCheckCheck size={24} />,
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "Productivity",
    value: "87%",
    change: "+26 today",
    changeType: "positive",
    icon: <LuClock size={24} />,
    iconColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
  },
];

const miniStats = [
  {
    label: "Completion Rate",
    value: "87%",
    trend: "+5%",
    icon: <LuTrendingUp size={16} />,
    color: "text-emerald-400",
  },
  {
    label: "On-Time Delivery",
    value: "92%",
    trend: "+2%",
    icon: <LuTarget size={16} />,
    color: "text-violet-400",
  },
];

export default function StatsCards() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card
              variant="glass"
              className="relative h-full overflow-hidden p-5 sm:p-6"
            >
              <div className="flex items-start justify-between">
                <div className="min-w-0 flex-1">
                  <p className="mb-1.5 text-sm font-medium text-slate-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5">
                    <Badge
                      variant={
                        stat.changeType === "positive" ? "success" : "warning"
                      }
                      size="small"
                    >
                      {stat.change}
                    </Badge>
                  </div>
                </div>
                <div
                  className={`flex-shrink-0 rounded-xl p-3 ${stat.bgColor} ${stat.iconColor}`}
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>
              </div>

              <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        {miniStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
          >
            <Card className="flex h-full flex-col items-start justify-between gap-5 p-3! sm:flex-row sm:items-center sm:p-4!">
              <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center">
                <div className="flex items-center gap-1">
                  <div
                    className={`rounded-lg bg-white/5 p-2 ${stat.color}`}
                    aria-hidden="true"
                  >
                    {stat.icon}
                  </div>

                  <p className="text-xs font-medium text-slate-400">
                    {stat.label}
                  </p>
                </div>

                <p className="text-lg font-bold text-white sm:ml-3">
                  {stat.value}
                </p>
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-emerald-400">
                <LuTrendingUp size={12} /> {stat.trend}
              </span>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
