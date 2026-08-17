import Button from "../../components/ui/Button";

function CardFooter({ btnText, btnOnClick, children }) {
  return (
    <div className="border-t border-white/5 py-2">
      {btnText ? (
        <Button
          variant="ghost"
          className="mx-auto px-5 text-slate-300 hover:text-white"
          onClick={btnOnClick}
        >
          {btnText}
        </Button>
      ) : (
        { children }
      )}
    </div>
  );
}

export default CardFooter;
