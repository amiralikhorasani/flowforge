import { motion } from "motion/react";

import {
  LuBot,
  LuChartNoAxesCombined,
  LuClipboardCheck,
  LuKanban,
  LuLayoutDashboard,
  LuUsers,
} from "react-icons/lu";

import FeatureCard from "./FeaturesCard";

const features = [
  {
    title: "AI-Powered Development",
    subtitle: "Build Smarter",
    description:
      "Leverage AI-powered tools to accelerate development, automate repetitive tasks, generate useful insights, and help your team make faster and smarter decisions throughout the development workflow.",
    icon: LuBot,
  },
  {
    title: "Manage Projects",
    subtitle: "Stay Organized",
    description:
      "Keep every project organized in one powerful workspace. Track progress, manage priorities, coordinate tasks, and maintain a clear overview of everything your team is working on.",
    icon: LuLayoutDashboard,
  },
  {
    title: "Kanban Boards",
    subtitle: "Visualize Your Workflow",
    description:
      "Visualize your entire workflow with flexible Kanban boards. Move tasks between stages, monitor progress at a glance, and keep your development process clear, focused, and easy to manage.",
    icon: LuKanban,
  },
  {
    title: "Team Collaboration",
    subtitle: "Work Better Together",
    description:
      "Bring your team together in a shared workspace where everyone can communicate, collaborate, share updates, assign responsibilities, and stay aligned with project goals and deadlines.",
    icon: LuUsers,
  },
  {
    title: "Analytics",
    subtitle: "Understand Your Progress",
    description:
      "Turn project activity into meaningful insights with clear analytics. Monitor performance, track productivity, identify bottlenecks, and understand how your projects and team are progressing.",
    icon: LuChartNoAxesCombined,
  },
  {
    title: "Task Management",
    subtitle: "Never Lose Track",
    description:
      "Create, organize, prioritize, and track tasks with ease. Set deadlines, assign team members, manage task status, and keep every important detail connected to the work that needs to get done.",
    icon: LuClipboardCheck,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Features() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="py-20 md:py-28"
    >
      {/* Section Header */}
      <motion.div
        variants={itemVariants}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <span className="text-sm font-medium tracking-[0.2em] text-blue-400 uppercase">
          Powerful Features
        </span>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-200 md:text-5xl">
          Everything your team needs
          <br />
          <span className="text-blue-400">to build better.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
          FlowForge brings your projects, tasks, team, and development workflow
          together in one focused workspace.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        variants={containerVariants}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature) => (
          <motion.div key={feature.title} variants={itemVariants}>
            <FeatureCard feature={feature} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Features;
