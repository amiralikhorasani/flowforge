import { motion } from "motion/react";
import Drawer from "../../components/ui/Drawer";
import Container from "../../components/ui/Container";
import SidebarAvatar from "./SidebarAvatar";
import SidebarSection from "./SidebarSection";

export default function DashboardSidebar({
  isOpen,
  closeHandler,
  className = "",
  navItems,
}) {
  return (
    <>
      {/* Desktop / persistent sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`sticky top-7 left-0 z-50 z-auto hidden h-[calc(100dvh-3.75rem)] translate-x-0 transform rounded-2xl border-r border-white/5 bg-gray-950/95 backdrop-blur-xl xl:flex ${className}`}
        aria-label="Sidebar navigation"
      >
        <Container className="flex h-full w-64 flex-col shadow shadow-gray-900 xl:w-80">
          <SidebarAvatar hasLogo={true} />

          <nav
            className="scroll_style mt-8 flex-1 space-y-6 overflow-y-auto p-4"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <SidebarSection section={item} closeHandler={closeHandler} />
            ))}
          </nav>
        </Container>
      </motion.aside>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} closeHandler={closeHandler} className="xl:hidden">
        <div className="w-full">
          <SidebarAvatar hasLogo={false} />

          <nav className="mt-8 space-y-6">
            {navItems.map((item) => (
              <SidebarSection section={item} closeHandler={closeHandler} />
            ))}
          </nav>
        </div>
      </Drawer>
    </>
  );
}
