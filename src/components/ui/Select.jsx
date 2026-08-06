function Select({ options, onChange, size = "medium", className = "", ...props }) {
  const selectSizes = {
    small: "px-2.5 py-1.5 pr-8 text-xs sm:px-3 sm:py-2 sm:pr-9 sm:text-sm",
    medium: "px-3 py-2 pr-10 text-sm sm:px-4 sm:py-2.5 sm:text-base",
    large: "px-4 py-2.5 pr-11 text-base sm:px-5 sm:py-3 sm:pr-12 sm:text-lg",
  };

  const iconSizes = {
    small: "right-2.5 size-3.5 sm:right-3 sm:size-4",
    medium: "right-3 size-4 sm:right-4 sm:size-5",
    large: "right-4 size-5 sm:right-5 sm:size-5",
  };

  return (
    <div className="relative w-full">
      <select
        onChange={onChange}
        className={`w-full appearance-none rounded-lg border-2 border-slate-700 bg-slate-900 font-normal text-slate-300 transition-colors duration-200 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 disabled:cursor-not-allowed disabled:border-slate-800 disabled:bg-slate-900/50 disabled:text-slate-500 ${selectSizes[size] ?? selectSizes.medium} ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-slate-400 ${iconSizes[size] ?? iconSizes.medium}`}
      >
        <path d="m5 7.5 5 5 5-5" />
      </svg>
    </div>
  );
}

export default Select;
