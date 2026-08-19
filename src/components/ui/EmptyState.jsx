import { LuFolderOpen } from "react-icons/lu";

function EmptyState({
  icon,
  title = "Nothing here yet",
  description,
  action,
  className = "",
}) {
  const Icon = icon;

  return (
    <div
      className={`flex min-h-56 w-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/50 px-5 py-8 text-center sm:min-h-64 sm:px-8 sm:py-10 ${className}`}
    >
      <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-violet-500/15 text-violet-300 sm:size-12">
        {icon ? <Icon size={20} /> : <LuFolderOpen size={20} />}
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

export default EmptyState;
