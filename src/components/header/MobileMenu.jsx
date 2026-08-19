import Drawer from "../ui/Drawer";
import NavbarItems from "../ui/NavbarItems";

function MobileMenu({ items, isOpen, openHandler, closeHandler }) {
  if (!isOpen) return null;

  return (
    <Drawer
      isOpen={isOpen}
      openHandler={openHandler}
      closeHandler={closeHandler}
      logoUnderLine={true}
    >
      <NavbarItems
        items={items}
        handlerCloseMenu={closeHandler}
        column={true}
        className="flex-col items-start gap-y-5!"
      />
    </Drawer>
  );
}

export default MobileMenu;
