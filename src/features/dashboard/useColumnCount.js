import { useEffect, useState } from "react";

function useColumnCount() {
  const [columnCount, setColumnCount] = useState(() => {
    if (typeof window === "undefined") return 4;

    if (window.innerWidth >= 1536) return 4;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 2;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) setColumnCount(4);
      else if (window.innerWidth >= 1024) setColumnCount(3);
      else if (window.innerWidth >= 640) setColumnCount(2);
      else setColumnCount(2);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return columnCount;
}

export default useColumnCount;
