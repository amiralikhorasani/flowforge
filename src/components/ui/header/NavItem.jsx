import { NavLink } from "react-router";

const navLinkClass =
  "rounded-lg px-2 py-1 text-sm  flex items-center justify-center gap-1 lg:text-base hover:bg-gray-800/50 hover:text-slate-400! ";

function NavItem({ item: { title, to, icon }, handlerCloseMenu, className }) {
  return (
    <li onClick={handlerCloseMenu}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${navLinkClass} ${className} ${isActive ? "border-b-2 border-b-gray-700 bg-gray-800/50 text-slate-400!" : ""}`
        }
      >
        <div className="mb-0.5">{icon}</div>
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
