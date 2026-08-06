function Input({ label, size = "medium", className = "", ...props }) {
  const base =
    "w-full rounded-lg border-2 border-slate-700 bg-tramsparent font-normal text-slate-300 placeholder:text-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400";

  const inputSizes = {
    small: "px-2 py-1.5 sm:px-3  sm:py-2 text-xs sm:text-sm",
    medium: "px-3 py-2 sm:px-4  sm:py-2.5 text-sm sm:text-base",
    large: "px-4 py-2 sm:px-5  sm:py-3 text-base sm:text-lg",
  };

  return (
    <label className="my-4 block w-full">
      {label && (
        <span className="mb-2 block text-sm font-normal text-slate-400">
          {label}
        </span>
      )}
      <input
        className={`${base} ${inputSizes[size] ?? inputSizes.medium} ${className}`}
        {...props}
      />
    </label>
  );
}

export default Input;
