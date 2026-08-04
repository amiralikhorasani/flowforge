function Spinner({ size = "normal" }) {
  const sizes = {
    mini: "size-5",
    normal: "size-8",
  };

  return (
    <div
      className={`${sizes[size]} animate-spin rounded-full border-2 border-current border-t-stone-300`}
      aria-label="Loading"
    />
  );
}

export default Spinner;
