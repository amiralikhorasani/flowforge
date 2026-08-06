function Badge({
  children,
  variant = "default",
  size = "medium",
  className = "",
}) {
  const variants = {
    default: "border-slate-700 bg-slate-800 text-slate-300",
    primary: "border-violet-500/30 bg-violet-500/15 text-violet-300",
    success: "border-emerald-500/30 bg-emerald-500/15 text-emerald-300",
    warning: "border-amber-500/30 bg-amber-500/15 text-amber-300",
    danger: "border-red-500/30 bg-red-500/15 text-red-300",
  };

  const sizes = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-2.5 py-1 text-xs sm:text-sm",
    large: "px-3 py-1.5 text-sm sm:text-base",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium ${variants[variant] ?? variants.default} ${sizes[size] ?? sizes.medium} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
