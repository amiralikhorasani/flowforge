function Chip({
  children,
  variant = "primary",
  size = "medium",
  outline = false,
  className = "",
  ...props
}) {
  const solidVariants = {
    primary:
      "bg-linear-to-r from-violet-600 to-violet-400 text-white hover:to-violet-500",
    secondry:
      "bg-linear-to-r from-cyan-400 to-sky-500 text-slate-900 hover:to-sky-400",
  };

  const outlineVariants = {
    primary:
      "border-violet-400/40 bg-violet-500/10 text-violet-200 hover:bg-violet-500/20",
    secondry:
      "border-cyan-400/40 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/20",
  };

  const sizes = {
    small: "gap-1 px-2 py-1 text-xs",
    medium: "gap-1.5 px-2.5 py-1.5 text-xs sm:text-sm",
    large: "gap-2 px-3.5 py-2 text-sm sm:text-base",
  };

  const variantStyles = outline
    ? (outlineVariants[variant] ?? outlineVariants.primary)
    : (solidVariants[variant] ?? solidVariants.primary);

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 focus:ring-2 focus:ring-violet-500/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${outline ? "border" : "border border-transparent"} ${sizes[size] ?? sizes.medium} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Chip;
