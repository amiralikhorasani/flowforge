import Spinner from "./Spinner";

function LoadingScreen({
  message = "Loading...",
  size = "medium",
  className = "",
}) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-slate-950/85 px-5 text-center backdrop-blur-sm ${className}`}
    >
      <Spinner size={size} />
      {message && (
        <p className="text-sm font-medium text-slate-300 sm:text-base">
          {message}
        </p>
      )}
    </div>
  );
}

export default LoadingScreen;
