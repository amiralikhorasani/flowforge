import LinkItem from "./LinkItem";

function NavItem({
  item: { title, to, icon },
  handlerCloseMenu,
  className = "",
  column,
}) {
  return (
    <li
      onClick={handlerCloseMenu}
      className={`${column ? "w-full flex-col items-start gap-5" : ""} ${className} text-slate-400`}
    >
      <LinkItem to={to} icon={icon} title={title} column={column} />
    </li>
  );
}

export default NavItem;
