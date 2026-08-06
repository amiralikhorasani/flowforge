function Textarea({
  label,
  size = "medium",
  className = "",
  rows = 4,
  ...props
}) {
  const base =
    "w-full resize-y rounded-lg border-2 border-slate-700 bg-transparent font-normal text-slate-300 placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 disabled:cursor-not-allowed disabled:border-slate-800 disabled:bg-slate-900/50 disabled:text-slate-500";

  const textareaSizes = {
    small: "px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm",
    medium: "px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base",
    large: "px-4 py-2 text-base sm:px-5 sm:py-3 sm:text-lg",
  };

  return (
    <label className="my-4 block w-full">
      {label && (
        <span className="mb-2 block text-sm font-normal text-slate-400">
          {label}
        </span>
      )}
      <textarea
        rows={rows}
        className={`${base} ${textareaSizes[size] ?? textareaSizes.medium} ${className}`}
        {...props}
      />
    </label>
  );
}

export default Textarea;
