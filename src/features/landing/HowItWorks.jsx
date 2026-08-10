import { motion } from "motion/react";
import {
  LuArrowDown,
  LuArrowRight,
  LuBoxes,
  LuFolderKanban,
  LuRocket,
  LuUsers,
} from "react-icons/lu";

import Container from "../../components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Create Workspace",
    description:
      "Set up your workspace and create the foundation for your team and projects.",
    icon: LuBoxes,
  },
  {
    number: "02",
    title: "Create Project",
    description:
      "Create your project, define its goals, and organize everything in one place.",
    icon: LuFolderKanban,
  },
  {
    number: "03",
    title: "Add Your Team",
    description:
      "Invite your team members, assign responsibilities, and start collaborating.",
    icon: LuUsers,
  },
  {
    number: "04",
    title: "Manage & Ship",
    description:
      "Track progress, manage tasks, collaborate efficiently, and ship your work.",
    icon: LuRocket,
  },
];

function HowItWorks() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mt-32 px-4 md:mt-48"
    >
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="text-sm font-medium tracking-widest text-blue-400 uppercase">
          Simple Workflow
        </span>

        <h2 className="mt-4 text-3xl font-bold text-gray-200 md:text-5xl">
          How It <span className="text-blue-400">Works</span>
        </h2>

        <p className="mt-5 text-sm leading-7 text-gray-400 md:text-base">
          Get your team up and running in just a few simple steps.
        </p>
      </div>

      <div className="mx-auto flex flex-col items-stretch gap-6 md:items-center xl:flex-row xl:gap-0">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="flex w-full max-w-xl flex-col items-center xl:flex-1 xl:flex-row"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="w-full"
              >
                <Container className="group relative h-full min-h-60 p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-950/20">
                  <div className="flex items-start justify-between">
                    <span className="text-4xl font-bold tracking-tight text-blue-400/30 transition-colors duration-300 group-hover:text-blue-400/60">
                      {step.number}
                    </span>

                    <div className="rounded-lg border border-blue-400/20 bg-blue-500/5 p-2.5 text-blue-400">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="mt-8 text-lg font-semibold text-gray-200">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {step.description}
                  </p>
                </Container>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="hidden shrink-0 px-3 text-blue-400/50 xl:block">
                  <LuArrowRight size={24} />
                </div>
              )}

              {index < steps.length - 1 && (
                <div className="flex shrink-0 justify-center py-1 text-blue-400/50 xl:hidden">
                  <LuArrowDown size={22} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default HowItWorks;
