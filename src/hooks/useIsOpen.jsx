import { useState } from "react";

function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false);

  return [isOpen, openHandler, closeHandler];
}

export default useIsOpen;
