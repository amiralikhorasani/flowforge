import { motion } from "motion/react";
import Avatar from "../../components/ui/Avatar";
import Badge from "../../components/ui/Badge";
import Card from "../../components/ui/Card";

const CardMotion = motion.create(Card);

function ActivityItem({ activity, index }) {
  const Icon = activity?.icon;

  return (
    <CardMotion
      variant="interactive"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="flex! w-full! min-w-0! flex-col! gap-4! px-4! py-3!"
    >
      <div className="flex items-center gap-2">
        <div
          className={`flex min-h-7 min-w-7 items-center justify-center rounded-xl ${activity?.iconBg} ${activity?.iconColor}`}
          aria-hidden="true"
        >
          <Icon size={16} />
        </div>

        <div className="flex items-center gap-1">
          <Avatar
            src={activity?.user?.avatar}
            alt={activity?.user?.name}
            size="small"
          />

          <span className="max-w-full truncate text-nowrap text-white">
            {activity?.user?.name}
          </span>
        </div>
      </div>

      <div className="min-w-0 flex-1 flex-col">
        <div className="mb-7 flex flex-col items-start justify-between gap-1 text-sm">
          <span className="max-w-full truncate text-nowrap text-slate-400">
            {activity?.action}
          </span>

          <span className="max-w-full truncate text-nowrap text-slate-300">
            {activity?.target}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-500">{activity?.time}</p>

          {activity?.project && (
            <div className="flex items-center gap-2">
              <Badge variant="primary" size="small">
                {activity?.project}
              </Badge>
            </div>
          )}
        </div>
      </div>
    </CardMotion>
  );
}

export default ActivityItem;
