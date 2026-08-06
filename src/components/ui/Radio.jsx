function Radio({ label, className = "", ...props }) {
  return (
    <label className={`inline-flex cursor-pointer items-center gap-2.5 text-sm text-slate-300 sm:text-base ${className}`}>
      <input type="radio" className="peer sr-only" {...props} />
      <span className="flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-700 bg-slate-900 transition-colors peer-checked:border-violet-500 peer-checked:[&>span]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-violet-500/20 peer-disabled:cursor-not-allowed peer-disabled:border-slate-800 peer-disabled:bg-slate-900/50">
        <span className="size-2 rounded-full bg-violet-400 opacity-0 transition-opacity" />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}

export default Radio;
