function Switch({ label, className = "", ...props }) {
  return (
    <label className={`inline-flex cursor-pointer items-center gap-2.5 text-sm text-slate-300 sm:text-base ${className}`}>
      <input type="checkbox" role="switch" className="peer sr-only" {...props} />
      <span className="relative h-6 w-11 shrink-0 rounded-full bg-slate-700 transition-colors after:absolute after:top-1/2 after:left-0.5 after:size-5 after:-translate-y-1/2 after:rounded-full after:bg-slate-200 after:shadow-sm after:transition-transform peer-checked:bg-violet-600 peer-checked:after:translate-x-5 peer-focus-visible:ring-2 peer-focus-visible:ring-violet-500/20 peer-disabled:cursor-not-allowed peer-disabled:opacity-50" />
      {label && <span>{label}</span>}
    </label>
  );
}

export default Switch;
