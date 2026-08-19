import defaultAvatar from "../../assets/images/default-avatar.png";

function Avatar({
  src = defaultAvatar,
  alt = "Profile image",
  size = "medium",
  className = "",
  ...props
}) {
  const avatarSizes = {
    mini: "size-7 sm:size-8",
    small: "size-8 sm:size-10",
    medium: "size-10 sm:size-12",
    large: "size-14 sm:size-16",
  };

  if (!src) {
    src = defaultAvatar;
    alt = "default avatar image";
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${avatarSizes[size] ?? avatarSizes.medium} rounded-full border-2 border-slate-700 bg-slate-800 object-cover p-0.5 ${className}`}
      {...props}
    />
  );
}

export default Avatar;
