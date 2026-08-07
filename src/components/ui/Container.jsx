function Container({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-xl bg-linear-to-br from-gray-950 to-gray-900 p-5 text-slate-300 shadow-[inset_0_0_0_1px_theme(colors.slate.800)] backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
