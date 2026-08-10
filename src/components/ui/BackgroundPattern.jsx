import styled from "styled-components";

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;

  opacity: 0.3;

  pointer-events: none;

  opacity: 0.3;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 45px,
      #444cf7 45px,
      #444cf7 46px,
      transparent 46px,
      transparent 91px,
      #444cf7 91px,
      #444cf7 92px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 45px,
      #444cf7 45px,
      #444cf7 46px,
      transparent 46px,
      transparent 91px,
      #444cf7 91px,
      #444cf7 92px
    ),
    radial-gradient(circle at 46px 46px, #444cf7 3.68px, transparent 4.18px),
    radial-gradient(circle at 0px 0px, #444cf7 2.76px, transparent 3.26px),
    radial-gradient(circle at 92px 0px, #444cf7 2.76px, transparent 3.26px),
    radial-gradient(circle at 0px 92px, #444cf7 2.76px, transparent 3.26px),
    radial-gradient(circle at 92px 92px, #444cf7 2.76px, transparent 3.26px);
  background-size: 92px 92px;

  mask-image: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 75%
  );
  -webkit-mask-image: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 75%
  );
  mask-size: 100% 100%;
  -webkit-mask-size: 100% 100%;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
`;

export default BackgroundPattern;
