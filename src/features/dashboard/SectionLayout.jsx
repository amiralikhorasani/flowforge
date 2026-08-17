import Card from "../../components/ui/Card";

function SectionLayout({ children, className = "" }) {
  return (
    <Card className={`w-full overflow-hidden p-0! ${className}`}>
      {children}
    </Card>
  );
}

export default SectionLayout;
