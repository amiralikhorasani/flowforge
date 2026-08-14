import { LuSearch } from "react-icons/lu";

function SearchInput({
  className = "",
  containerClassName = "",
  placeholder = "Search...",
  value,
  onChange,
  ...props
}) {
  return (
    <label
      className={`group relative block w-full md:max-w-[19rem] lg:max-w-[22rem] ${containerClassName}`}
      aria-label="Search"
    >
      <LuSearch
        className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-violet-300 sm:left-3.5"
        size={16}
      />

      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border border-white/10 bg-slate-950/70 py-2.5 pr-3 pl-9 text-sm text-slate-100 shadow-inner shadow-slate-950/40 transition-all outline-none placeholder:text-slate-500 focus:border-violet-500 focus:bg-slate-950 focus:ring-2 focus:ring-violet-500/20 sm:py-2.5 sm:pl-10 sm:text-sm ${className}`}
        {...props}
      />
    </label>
  );
}

export default SearchInput;
