import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenCapturing = true) {
  let ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.body.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler],
  );

  return ref;
}
