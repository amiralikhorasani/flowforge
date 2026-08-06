function Tooltip({ children, content, position = "top", className = "" }) {
  const positions = {
    top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
    bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
    left: "top-1/2 right-full mr-2 -translate-y-1/2",
    right: "top-1/2 left-full ml-2 -translate-y-1/2",
  };

  return (
    <span className={`group relative inline-flex ${className}`}>
      {children}
      <span
        role="tooltip"
        className={`pointer-events-none absolute z-50 w-max max-w-56 rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1.5 text-xs font-medium text-slate-200 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 ${positions[position] ?? positions.top}`}
      >
        {content}
      </span>
    </span>
  );
}

export default Tooltip;
