function Input({
  label,
  variant = "primary",
  icon,
  size = "medium",
  containerClassName = "",
  className = "",
  ...props
}) {
  const Icon = icon;

  const base =
    "w-full rounded-lg border text-sm transition outline-none text-gray-200 border-gray-700  focus:ring-1 placeholder:text-slate-500 bg-slate-950/70";

  const variants = {
    primary: "focus:ring-blue-500",
    secondary: "focus:ring-violet-500",
  };

  const baseIconStyle =
    "absolute top-1/2 left-3 -translate-y-1/2 text-gray-500";

  const inputSizes = {
    small: "px-2 py-2 sm:px-3  sm:py-2 text-xs sm:text-sm",
    medium: "px-3 py-2.5 sm:px-4  sm:py-2.5 text-sm sm:text-base",
    large: "px-4 py-3 sm:px-5  sm:py-3 text-base sm:text-lg",
  };

  const iconSizes = {
    small: "size-4 sm:size-5",
    medium: "size-5",
    large: "size-6",
  };

  return (
    <label className={`my-2 w-full ${containerClassName}`}>
      {label && (
        <span className="mb-2 block text-sm font-normal text-slate-400">
          {label}
        </span>
      )}
      {!Icon ? (
        <input
          className={`${base} ${inputSizes[size]} ${className} ${variants[variant]} disabled:opacity-50`}
          {...props}
        />
      ) : (
        <div className="relative">
          <Icon className={`${baseIconStyle} ${iconSizes[size]}`} />
          <input
            className={`${base} ${inputSizes[size]} ${className} ${variants[variant]} ps-10!`}
            {...props}
          />
        </div>
      )}
    </label>
  );
}

export default Input;
