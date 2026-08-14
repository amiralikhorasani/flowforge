import { motion } from "motion/react";
import { LuAward } from "react-icons/lu";
import Drawer from "../../components/ui/Drawer";
import Badge from "../../components/ui/Badge";
import NavbarItems from "../../components/ui/NavbarItems";
import Logo from "../../components/ui/Logo";
import Container from "../../components/ui/Container";
import Avatar from "../../components/ui/Avatar";
import { Link } from "react-router";

export default function DashboardSidebar({
  isOpen,
  closeHandler,
  className = "",
  navItems,
  navItemsSecondary,
}) {
  return (
    <>
      {/* Desktop / persistent sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`static inset-y-0 left-0 z-50 z-auto hidden h-[calc(100dvh-3.75rem)] translate-x-0 transform rounded-2xl border-r border-white/5 bg-gray-950/95 backdrop-blur-xl xl:flex ${className}`}
        aria-label="Sidebar navigation"
      >
        <Container className="flex h-full w-64 flex-col shadow shadow-gray-900 xl:w-80">
          <div className="border-b border-white/10 pt-2 pb-5">
            <Logo size="small" />

            <Link
              to="/user/settings"
              className="mt-6 flex items-center justify-between p-0"
            >
              <div className="flex items-center gap-2">
                <Avatar />
                <span>Amirali Khorasani</span>
              </div>
            </Link>
          </div>

          <nav
            className="scroll_style flex-1 space-y-1 overflow-y-auto p-4"
            aria-label="Main navigation"
          >
            <div className="mt-5 px-3 py-2 text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Main
            </div>

            <NavbarItems
              items={navItems}
              handlerCloseMenu={closeHandler}
              column={true}
            />

            <div className="mt-5 px-3 py-2 pt-4 text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Team
            </div>

            <NavbarItems
              items={navItemsSecondary}
              handlerCloseMenu={closeHandler}
              column={true}
            />
          </nav>

          <div className="border-t border-white/5 p-4">
            <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
              <div className="rounded-lg bg-violet-500/10 p-2 text-violet-400">
                <LuAward size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">
                  Pro Plan Active
                </p>
                <p className="text-xs text-slate-400">14 days remaining</p>
              </div>
              <Badge variant="primary" size="small">
                Pro
              </Badge>
            </div>
          </div>
        </Container>
      </motion.aside>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} closeHandler={closeHandler} className="xl:hidden">
        <div className="w-full">
          <nav className="space-y-2">
            <div className="mt-5 px-3 py-2 text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Main
            </div>

            <NavbarItems
              items={navItems}
              handlerCloseMenu={closeHandler}
              column={true}
            />

            <div className="mt-5 px-3 py-2 pt-4 text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Team
            </div>

            <NavbarItems
              items={navItemsSecondary}
              handlerCloseMenu={closeHandler}
              column={true}
            />
          </nav>

          <div className="mt-6 w-full">
            <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
              <div className="rounded-lg bg-violet-500/10 p-2 text-violet-400">
                <LuAward size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">
                  Pro Plan Active
                </p>
                <p className="text-xs text-slate-400">14 days remaining</p>
              </div>
              <Badge variant="primary" size="small">
                Pro
              </Badge>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
