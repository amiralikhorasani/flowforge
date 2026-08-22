import { motion } from "motion/react";
import { fadeUp } from "../../styles/animations";
import { GoArrowUpRight } from "react-icons/go";
import Button from "../../components/ui/Button";
import ScrollHint from "./ScrollHint";
const ButtonMotion = motion.create(Button);

function Hero() {
  return (
    <section className="mt-10 md:mt-20">
      <div className="flex h-[90dvh] flex-col items-center justify-start pt-15">
        <motion.h3
          variants={fadeUp(0.5)}
          initial="hidden"
          animate="visible"
          className="max-w-full text-lg font-light text-gray-400 md:text-2xl"
        >
          Project Management
        </motion.h3>

        <motion.h1
          variants={fadeUp(0.5)}
          initial="hidden"
          animate="visible"
          className="z-10 mt-10 max-w-full text-center text-4xl font-bold text-gray-200 md:mt-5 md:text-7xl md:leading-25"
        >
          Collaborative <span className="text-blue-400">Workspace</span> <br />{" "}
          for Modern Teams
        </motion.h1>

        <motion.h2
          variants={fadeUp(0.9)}
          initial="hidden"
          animate="visible"
          className="z-10 mt-8 max-w-full text-center text-sm text-gray-400 md:mt-2 md:text-lg"
        >
          A modern workspace for developers and teams.
        </motion.h2>

        <ButtonMotion
          variants={fadeUp(1.1)}
          initial="hidden"
          animate="visible"
          variant="secondary"
          size="large"
          to="/user/register"
          className="z-10 mt-20"
        >
          <span>Get Started Free</span>
          <GoArrowUpRight size={20} strokeWidth="1" />
        </ButtonMotion>
        <ScrollHint className="mt-30" />
      </div>
    </section>
  );
}

export default Hero;
