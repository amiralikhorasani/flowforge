import { Link } from "react-router";
import flowForgeLogo from "../../assets/images/logo-FlowForge.png";

function Logo({ logo = flowForgeLogo, size = "medium", className = "" }) {
  const logoSize = {
    small: "max-h-6 sm:max-h-8",
    medium: "max-h-8 sm:max-h-9",
    large: "max-h-11 sm:max-h-12",
  };

  return (
    <Link to="/">
      <img
        src={logo}
        alt="FlowForge Logo"
        className={`${logoSize[size]} object-contain ${className}`}
      />
    </Link>
  );
}

export default Logo;
