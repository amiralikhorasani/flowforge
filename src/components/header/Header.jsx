import { motion } from "motion/react";

import { LuHouse } from "react-icons/lu";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import useIsOpen from "../../hooks/useIsOpen";

const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <LuHouse />,
  },
  {
    title: "Product",
    to: "/th",
    icon: <LuHouse />,
  },
  {
    title: "About us",
    to: "/d",
    icon: <LuHouse />,
  },
  {
    title: "Contact us",
    to: "/j",
    icon: <LuHouse />,
  },
];

function Header() {
  const [isOpen, openHandler, closeHandler] = useIsOpen();

  return (
    <>
      <motion.header
        className="sticky top-0 z-30 mx-auto px-4 py-5 lg:max-w-14/15"
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <Navbar items={navItems} handlerOpenMenu={openHandler} />
        <MobileMenu
          items={navItems}
          isOpen={isOpen}
          openHandler={openHandler}
          closeHandler={closeHandler}
        />
      </motion.header>
    </>
  );
}

export default Header;
