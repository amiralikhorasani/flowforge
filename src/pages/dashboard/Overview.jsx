import { motion } from "motion/react";

import RecentProjects from "../../features/dashboard/RecentProjects";
import StatsCards from "../../features/dashboard/StatsCards";
import DashboardPageLayout from "../../features/dashboard/DashboardPageLayout";
import ActivityFeed from "../../features/dashboard/ActivityFeed";
import RecentTasks from "../../features/dashboard/RecentTasks";

export default function OverviewPage() {
  return (
    <DashboardPageLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <StatsCards />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-7"
      >
        <RecentProjects />
      </motion.div>

      <div className="mt-7 grid w-full gap-6 lg:grid-cols-2">
        <div className="h-full w-full min-w-0 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full"
          >
            <ActivityFeed />
          </motion.div>
        </div>

        <div className="h-full w-full min-w-0 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full"
          >
            <RecentTasks />
          </motion.div>
        </div>
      </div>
    </DashboardPageLayout>
  );
}
