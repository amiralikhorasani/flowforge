import { motion } from "motion/react";

export default function DashboardPageLayout({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      {children}
    </motion.section>
  );
}
