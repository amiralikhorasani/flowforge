function Card({
  children,
  className = "",
  variant = "default",
  padding = "medium",
  hover = false,
  ...props
}) {
  const variants = {
    default: "bg-gray-900/50 border-white/5",
    glass: "bg-white/5 backdrop-blur-xl border-white/10",
    metric:
      "bg-gradient-to-br from-gray-900/80 to-gray-950/80 border-violet-500/10",
    interactive:
      "bg-gray-900/50 border-white/5 hover:border-violet-500/20 hover:bg-gray-800/50",
  };

  const paddings = {
    none: "",
    small: "p-3 sm:p-4",
    medium: "p-4 sm:p-5",
    large: "p-5 sm:p-6",
  };

  const baseClasses = "rounded-xl border transition-all duration-200";

  return (
    <div
      className={`${baseClasses} ${variants[variant] ?? variants.default} ${paddings[padding] ?? paddings.medium} ${hover ? "cursor-pointer" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
