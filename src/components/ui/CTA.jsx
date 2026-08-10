import { motion } from "motion/react";
import { GoArrowUpRight } from "react-icons/go";

import Button from "./Button";
import Container from "./Container";

function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mt-32 px-4 md:mt-48"
    >
      <Container className="relative mx-auto max-w-5xl overflow-hidden px-6 py-16 text-center md:px-12 md:py-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10">
          <span className="text-sm font-medium tracking-widest text-blue-400 uppercase">
            Start Building
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl leading-tight font-bold text-gray-200 md:text-5xl md:leading-tight">
            Ready to build something{" "}
            <span className="text-blue-400">great?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            Bring your team together, organize your projects, and turn ideas
            into results with FlowForge.
          </p>

          <Button
            variant="secondry"
            size="large"
            to="/user/register"
            className="mt-10"
          >
            <span>Get Started Free</span>
            <GoArrowUpRight size={20} strokeWidth="1" />
          </Button>

          <p className="mt-5 text-xs text-gray-500">No credit card required.</p>
        </div>
      </Container>
    </motion.section>
  );
}

export default CTA;
