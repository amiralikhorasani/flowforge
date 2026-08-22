import NavItem from "./NavItem";

function NavbarItems({
  items,
  handlerCloseMenu,
  column = false,
  className = "",
}) {
  return (
    <ul
      className={`flex justify-center gap-1 ${column ? "flex-col items-start gap-3" : " items-center"} ${className}`}
    >
      {items.map((item) => (
        <NavItem
          key={item.title}
          item={item}
          handlerCloseMenu={handlerCloseMenu}
          column={column}
        />
      ))}
    </ul>
  );
}

export default NavbarItems;
