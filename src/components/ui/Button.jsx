import { Link } from "react-router";

function Button({
  children,
  className = "",
  variant = "primary",
  size = "medium",
  iconBtn = false,
  to,
  ...props
}) {
  const base = `${iconBtn ? "rounded-full aspect-square" : "rounded-lg"} font-medium leading-5 focus:ring-2 focus:ring-violet-500/20 focus:outline-none flex items-center justify-center gap-2`;

  const buttonSizes = {
    small: `${iconBtn ? "p-1 sm:p-1.5 [&>svg]:size-3 sm:[&>svg]:size-4" : "px-2 py-1.5 sm:px-2 text-xs"}`,
    medium: `${iconBtn ? "p-1.5 sm:p-2 [&>svg]:size-4 sm:[&>svg]:size-5" : "px-2.5 py-2 sm:px-3 text-sm"}`,
    large: `${iconBtn ? "p-1.5 sm:p-2 [&>svg]:size-5 sm:[&>svg]:size-6" : "px-4 py-2.5 sm:px-5 text-base"}`,
  };

  const variants = {
    primary:
      "bg-linear-to-r from-violet-600 to-violet-400 hover:to-violet-500 text-white!",
    secondry:
      "bg-linear-to-r from-cyan-400 to-sky-500 text-slate-900! hover:to-sky-400 hover:text-slate-950",
    outline:
      "shadow-[inset_0_0_0_1px_theme(colors.slate.500)] bg-linear-to-r from-gray-800 to-slate-900 hover:text-white! text-slate-300!",
    ghost: "bg-transparent text-slate-300 hover:text-white!",
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${base} ${buttonSizes[size]} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${base} ${buttonSizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
