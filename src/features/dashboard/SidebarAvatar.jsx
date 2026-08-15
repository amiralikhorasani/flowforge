import { Link } from "react-router";
import Logo from "../../components/ui/Logo";
import Avatar from "../../components/ui/Avatar";

function SidebarAvatar({ hasLogo }) {
  return (
    <div className="border-b border-white/10 pt-2 pb-5">
      {hasLogo && <Logo size="small" />}

      <Link
        to="settings"
        className={`${hasLogo && "mt-6"} flex items-center justify-between p-0`}
      >
        <div className="flex items-center gap-2">
          <Avatar />
          <span>Amirali Khorasani</span>
        </div>
      </Link>
    </div>
  );
}

export default SidebarAvatar;
