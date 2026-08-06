function Button({
  children,
  className = "",
  variant = "primary",
  size = "medium",
  iconBtn = false,
  outline = false,
  ...props
}) {
  const base = `${iconBtn ? "rounded-full aspect-square" : "rounded-lg"} leading-5 font-medium focus:ring-2 focus:ring-violet-500/20 focus:outline-none flex items-center justify-center gap-2`;

  const buttonSizes = {
    small: `${iconBtn ? "p-1.5 [&>svg]:size-4" : "px-2.5 py-2 md:px-3.5 md:py-2 sm:px-3 text-xs sm:text-sm"}`,
    medium: `${iconBtn ? "p-2 [&>svg]:size-5" : "px-3.5 py-2.5 md:px-4.5 md:py-3 sm:px-4 text-sm sm:text-base"}`,
    large: `${iconBtn ? "p-2 [&>svg]:size-6" : "px-5 py-3 md:px-6 md:py-3.5 sm:px-5.5 text-base sm:text-lg"}`,
  };

  const variants = {
    primary: `${outline ? "shadow-[inset_0_0_0_2px_theme(colors.slate.500)] bg-linear-to-r from-gray-800 to-slate-900 hover:text-white text-slate-300" : "bg-linear-to-r from-violet-600 to-violet-400 hover:to-violet-500 text-white"} `,
    secondry:
      "bg-linear-to-r from-cyan-400 to-sky-500 text-slate-900 hover:to-sky-400 hover:text-slate-950",
  };

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
