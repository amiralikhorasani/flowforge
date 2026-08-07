import { createPortal } from "react-dom";

const overlayClasses = "fixed top-0 z-40 h-dvh w-full backdrop-blur-2xl";

function Overlay({ isShow }) {
  if (isShow) {
    return createPortal(
      <div className={`${isShow ? overlayClasses : "hidden"}`}></div>,
      document.body,
    );
  }

  return <div className={overlayClasses}></div>;
}

export default Overlay;
