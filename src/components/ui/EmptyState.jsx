function EmptyState({
  icon,
  title = "Nothing here yet",
  description,
  action,
  className = "",
}) {
  return (
    <div className={`flex min-h-56 w-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/50 px-5 py-8 text-center sm:min-h-64 sm:px-8 sm:py-10 ${className}`}>
      <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-violet-500/15 text-violet-300 sm:size-12">
        {icon ?? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6">
            <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5z" />
            <path d="M8 12h8M12 8v8" />
          </svg>
        )}
      </div>
      <h3 className="text-base font-medium text-slate-100 sm:text-lg">{title}</h3>
      {description && <p className="mt-2 max-w-sm text-sm text-slate-400 sm:text-base">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export default EmptyState;
