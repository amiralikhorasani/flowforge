function ErrorState({
  icon,
  title = "Something went wrong",
  description = "We could not load this content. Please try again.",
  action,
  className = "",
}) {
  return (
    <div
      className={`flex min-h-56 w-full flex-col items-center justify-center rounded-xl border border-dashed border-red-500/30 bg-red-500/5 px-5 py-8 text-center sm:min-h-64 sm:px-8 sm:py-10 ${className}`}
    >
      <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-red-500/15 text-red-300 sm:size-12">
        {icon ?? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="size-6"
          >
            <path d="M12 8v4m0 4h.01M10.3 3.9 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
          </svg>
        )}
      </div>
      <h3 className="text-base font-medium text-slate-100 sm:text-lg">
        {title}
      </h3>
      {description && (
        <p className="mt-2 max-w-sm text-sm text-slate-400 sm:text-base">
          {description}
        </p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export default ErrorState;
