import Drawer from "../Drawer";
import NavbarItems from "./NavbarItems";

function MobileMenu({ items, isOpen, openHandler, closeHandler }) {
  if (!isOpen) return null;

  return (
    <Drawer
      isOpen={isOpen}
      openHandler={openHandler}
      closeHandler={closeHandler}
    >
      <NavbarItems
        items={items}
        handlerCloseMenu={closeHandler}
        className="flex-col items-start gap-y-5!"
      />
    </Drawer>
  );
}

export default MobileMenu;
