function Switch({ label, size = "medium", className = "", ...props }) {
  const sizes = {
    small: {
      track: "h-5 w-9",
      thumb: "after:size-4 after:left-0.5 peer-checked:after:translate-x-4",
      text: "text-xs sm:text-sm",
      gap: "gap-2",
    },
    medium: {
      track: "h-6 w-11",
      thumb: "after:size-5 after:left-0.5 peer-checked:after:translate-x-5",
      text: "text-sm sm:text-base",
      gap: "gap-2.5",
    },
    large: {
      track: "h-7 w-12",
      thumb: "after:size-5 after:left-0.5 peer-checked:after:translate-x-5",
      text: "text-base sm:text-lg",
      gap: "gap-3",
    },
  };

  const activeSize = sizes[size] ?? sizes.medium;

  return (
    <label
      className={`inline-flex cursor-pointer items-center ${activeSize.gap} ${activeSize.text} text-slate-300 ${className}`}
    >
      <input
        type="checkbox"
        role="switch"
        className="peer sr-only"
        {...props}
      />
      <span
        className={`relative shrink-0 rounded-full bg-slate-700 transition-colors peer-checked:bg-violet-600 peer-focus-visible:ring-2 peer-focus-visible:ring-violet-500/20 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 after:absolute after:top-1/2 after:-translate-y-1/2 after:rounded-full after:bg-slate-200 after:shadow-sm after:transition-transform ${activeSize.track} ${activeSize.thumb}`}
      />
      {label && <span>{label}</span>}
    </label>
  );
}

export default Switch;
