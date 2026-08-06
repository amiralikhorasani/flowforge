function Spinner({ size = "medium", className = "" }) {
  const sizes = {
    small: "size-4 border-2 sm:size-5",
    medium: "size-7 border-2 sm:size-8",
    large: "size-10 border-3 sm:size-12",
  };

  return (
    <div
      className={`${sizes[size] ?? sizes.medium} animate-spin rounded-full border-violet-500/25 border-t-violet-400 ${className}`}
      aria-label="Loading"
      role="status"
    />
  );
}

export default Spinner;
