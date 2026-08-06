function Checkbox({ label, className = "", ...props }) {
  return (
    <label className={`inline-flex cursor-pointer items-center gap-2.5 text-sm text-slate-300 sm:text-base ${className}`}>
      <input type="checkbox" className="peer sr-only" {...props} />
      <span className="flex size-5 shrink-0 items-center justify-center rounded-md border-2 border-slate-700 bg-slate-900 text-xs text-white transition-colors peer-checked:border-violet-500 peer-checked:bg-violet-600 peer-checked:[&>svg]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-violet-500/20 peer-disabled:cursor-not-allowed peer-disabled:border-slate-800 peer-disabled:bg-slate-900/50 peer-disabled:peer-checked:bg-violet-950">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-3 opacity-0 transition-opacity">
          <path d="m3 8 3.1 3.1L13 4.5" />
        </svg>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}

export default Checkbox;
