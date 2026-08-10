import { motion } from "motion/react";
import styled from "styled-components";

const BackgroundGradientStyle = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  height: 900px;

  background: radial-gradient(
    circle at 50% 20%,
    rgb(124 58 237 / 20%) 0%,
    rgb(37 99 235 / 15%) 25%,
    transparent 65%
  );

  filter: blur(40px);
  opacity: 0.3;

  pointer-events: none;
`;

const MotionBackgroundGradient = motion.create(BackgroundGradientStyle);

function BackgroundGradient() {
  return (
    <MotionBackgroundGradient
      initial={{
        opacity: 0,
        y: -100,
        filter: "blur(20px)",
      }}
      animate={{
        opacity: 0.8,
        y: 0,
        filter: "blur(40px)",
      }}
      transition={{
        duration: 2,
      }}
    />
  );
}

export default BackgroundGradient;
