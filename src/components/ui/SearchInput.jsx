import { LuSearch } from "react-icons/lu";
import Input from "./Input";

function SearchInput({
  className = "",
  containerClassName = "",
  placeholder = "Search...",
  ...props
}) {
  return (
    <div
      className={`group relative block w-full md:max-w-[19rem] lg:max-w-[22rem] ${containerClassName}`}
      aria-label="Search"
    >
      <Input
        type="search"
        placeholder={placeholder}
        icon={LuSearch}
        className={`w-full rounded-xl border border-white/10 bg-slate-950/70 py-2.5 pr-3 pl-9 text-sm text-slate-100 shadow-inner shadow-slate-950/40 transition-all outline-none placeholder:text-slate-500 focus:border-violet-500 focus:bg-slate-950 focus:ring-2 focus:ring-violet-500/20 sm:py-2.5 sm:pl-10 sm:text-sm ${className}`}
        {...props}
      />
    </div>
  );
}

export default SearchInput;
