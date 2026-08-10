import { FaGripLines } from "react-icons/fa";
import Container from "./Container";

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <Container className="bg-red h-full w-full">
      <div className="flex items-center gap-2">
        <Icon size={30} strokeWidth={1} className="mb-0.5 text-blue-300" />
        <h4 className="text-2xl font-bold">{feature.title}</h4>
      </div>
      <div className="flex items-center gap-2">
        <FaGripLines
          size={15}
          strokeWidth={1}
          className="mt-2.5 text-gray-400"
        />
        <h5 className="mt-3 text-base text-gray-300">{feature.subtitle}</h5>
      </div>
      <p className="mt-9 text-xs font-light text-gray-400 sm:text-base">
        {feature.description}
      </p>
    </Container>
  );
}

export default FeatureCard;
