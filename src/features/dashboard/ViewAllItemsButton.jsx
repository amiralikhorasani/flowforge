import Button from "../../components/ui/Button";

function ViewAllItemsButton({
  to,
  text = "View All",
  containerClassName = "",
  className = "",
}) {
  return (
    <div
      className={`flex justify-center border-t border-white/5 pt-4! pb-1 sm:border-none sm:p-2! ${containerClassName}`}
    >
      <Button
        to={to}
        variant="ghost"
        size="small"
        className={`text-nowrap ${className}`}
      >
        {text}
      </Button>
    </div>
  );
}

export default ViewAllItemsButton;
