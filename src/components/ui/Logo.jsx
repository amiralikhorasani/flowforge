import flowForgeLogo from "../../assets/images/logo-FlowForge.png";

function Logo({ logo = flowForgeLogo, size = "medium" }) {
  const logoSize = {
    small: "max-h-4 sm:max-h-7",
    medium: "max-h-6 sm:max-h-8",
    large: "max-h-8 sm:max-h-9",
  };

  return (
    <div>
      <img
        src={logo}
        alt="FlowForge Logo"
        className={`${logoSize[size]} object-contain`}
      />
    </div>
  );
}

export default Logo;
