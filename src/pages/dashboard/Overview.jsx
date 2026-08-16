import { motion } from "motion/react";

import StatsCards from "../../features/dashboard/StatsCards";
import DashboardPageLayout from "../../features/dashboard/DashboardPageLayout";

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
    </DashboardPageLayout>
  );
}
