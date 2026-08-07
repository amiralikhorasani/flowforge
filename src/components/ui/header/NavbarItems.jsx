import NavItem from "./NavItem";

function NavbarItems({ items, handlerCloseMenu, className = "" }) {
  return (
    <ul className={`flex items-center justify-center gap-1 ${className}`}>
      {items.map((item) => (
        <NavItem
          key={item.title}
          item={item}
          handlerCloseMenu={handlerCloseMenu}
        />
      ))}
    </ul>
  );
}

export default NavbarItems;
