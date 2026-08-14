import { NavLink } from "react-router";

const navLinkClass =
  "rounded-lg px-2 py-1 text-sm flex items-center justify-center gap-1 lg:text-base hover:bg-gray-800/50 hover:text-slate-400! ";

function LinkItem({
  to,
  icon,
  title,
  classNameActive = "",
  className = "",
  column = false,
  ...props
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${column ? "justify-start!" : ""} ${navLinkClass} ${classNameActive} ${isActive ? "border-b-2 border-b-gray-700 bg-gray-800/50 text-slate-400!" : ""} ${className}`
      }
      {...props}
    >
      {icon && <div className="mb-0.5">{icon}</div>}
      <span>{title}</span>
    </NavLink>
  );
}

export default LinkItem;
