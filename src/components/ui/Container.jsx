function Container({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-xl border-[1.7px] border-t-gray-800 border-r-violet-200/30 border-b-violet-200/30 border-l-gray-800 bg-linear-to-br from-gray-950/65 to-gray-900/65 p-5 text-slate-300 backdrop-blur-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
