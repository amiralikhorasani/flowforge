function Button({
  children,
  className = "",
  variant = "primary",
  size = "medium",
  outline = false,
  ...props
}) {
  const base = `rounded-lg leading-5 font-medium focus:ring-2 focus:ring-violet-900 focus:outline-none flex items-center justify-center gap-2`;

  const buttonSizes = {
    small: `px-2.5 py-2 text-xs sm:text-sm md:px-3.5 md:py-2 sm:px-3`,
    medium: `px-3.5 py-2.5 text-sm sm:text-base md:px-4.5 md:py-3 sm:px-4`,
    large: `px-5 py-3 text-base sm:text-lg md:px-6 md:py-3.5 sm:px-5.5`,
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
