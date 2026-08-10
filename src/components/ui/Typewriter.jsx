import { motion } from "motion/react";

function Typewriter({ children }) {
  return (
    <motion.span
      initial={{ width: 0, height: 0 }}
      animate={{ width: "100%", height: "100%" }}
      transition={{
        duration: 1,
        ease: "steps(25)",
      }}
      className="overflow-hidden"
    >
      {children}
    </motion.span>
  );
}

export default Typewriter;
