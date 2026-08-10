import { GoChevronDown } from "react-icons/go";

function ScrollHint({ className }) {
  return (
    <div
      className={`mx-auto flex w-full flex-col items-center justify-center ${className}`}
    >
      <span className="text-gray-400">Scroll to explore</span>
      <GoChevronDown size={24} className="mt-3 animate-bounce text-gray-400" />
    </div>
  );
}

export default ScrollHint;
