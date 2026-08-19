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
        variant="secondary"
        placeholder={placeholder}
        icon={LuSearch}
        className={` ${className}`}
        {...props}
      />
    </div>
  );
}

export default SearchInput;
