function Input({ label, icon, size = "medium", className = "", ...props }) {
  const Icon = icon;

  // const base =
  //   "w-full rounded-lg border-2 border-slate-700 bg-tramsparent font-normal text-slate-300 placeholder:text-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400";

  const base =
    "w-full rounded-lg border border-gray-700 bg-gray-950/60 text-sm text-gray-200 transition outline-none placeholder:text-gray-600 focus:border-blue-500";

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
    <label className="my-4 block w-full">
      {label && (
        <span className="mb-2 block text-sm font-normal text-slate-400">
          {label}
        </span>
      )}
      {!Icon ? (
        <input
          className={`${base} ${inputSizes[size]} ${className}`}
          {...props}
        />
      ) : (
        <div className="relative">
          <Icon className={`${baseIconStyle} ${iconSizes[size]}`} />
          <input
            className={`${base} ${inputSizes[size]} ${className} ps-10!`}
            {...props}
          />
        </div>
      )}
    </label>
  );
}

export default Input;
