function CardTitle({ icon, title, description }) {
  const Icon = icon;
  return (
    <div className="flex w-full items-center gap-3">
      <div className="rounded-lg bg-violet-500/10 p-2 text-violet-400">
        <Icon size={20} />
      </div>
      <div className="min-w-0">
        <h3 className="font-medium text-white">{title}</h3>
        <p className="max-w-full truncate text-xs text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CardTitle;
