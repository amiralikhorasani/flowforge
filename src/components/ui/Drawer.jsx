import { createPortal } from "react-dom";
import { motion } from "motion/react";

import useOutsideClick from "../../hooks/useOutsideClick";
import Overlay from "./Overlay";
import Logo from "./Logo";
import Container from "./Container";
import { LuX } from "react-icons/lu";
import Button from "./Button";

const containerClasses = `fixed inset-0 z-50 h-screen w-4/5 flex  flex-col items-start justify-start gap-8 rounded-e-xl border border-slate-700/80 bg-slate-900/80 px-5 py-8 shadow-2xl shadow-black/30 backdrop-blur-xl items-center justify-center gap-1 lg:flex`;

const MotionContainer = motion.create(Container);

function Drawer({ children, isOpen, closeHandler, logoUnderLine = false }) {
  const ref = useOutsideClick(closeHandler);

  if (!isOpen) return null;

  return createPortal(
    <>
      <Overlay />

      <MotionContainer
        initial={{
          opacity: 0,
          x: -280,
          filter: "blur(5px)",
        }}
        animate={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.19,
        }}
        ref={ref}
        className={`flex items-center justify-between px-4! py-6! ${containerClasses}`}
      >
        <motion.div className="w-full">
          <div
            className={`mb-10 flex w-full items-center justify-between ${logoUnderLine ? "border-b border-white/10 pb-5" : ""}`}
          >
            <Logo />

            <Button
              variant="outline"
              className="shadow-none!"
              iconBtn={true}
              size="small"
              onClick={closeHandler}
            >
              <LuX />
            </Button>
          </div>

          <div>{children}</div>
        </motion.div>
      </MotionContainer>
    </>,
    document.body,
  );
}

export default Drawer;
