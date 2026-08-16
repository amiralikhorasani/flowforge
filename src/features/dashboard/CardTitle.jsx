function CardTitle({ icon, title, description }) {
  const Icon = icon;
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-lg bg-violet-500/10 p-2 text-violet-400">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-xs text-slate-400">{description}</p>
      </div>
    </div>
  );
}

export default CardTitle;
