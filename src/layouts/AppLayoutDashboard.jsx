import { Suspense } from "react";
import { Outlet } from "react-router";
import LoadingScreen from "../components/ui/LoadingScreen";
import DashboardHeader from "../features/dashboard/DashboardHeader";
import DashboardSidebar from "../features/dashboard/DashboardSidebar";
import useIsOpen from "../hooks/useIsOpen";
import {
  LuCalendar,
  LuFlag,
  LuFolderKanban,
  LuLayoutDashboard,
  LuTrendingUp,
  LuUsers,
} from "react-icons/lu";

function AppLayout() {
  const [isOpen, openHandler, closeHandler] = useIsOpen();

  const navItems = [
    {
      title: "Overview",
      to: "/dashboard/overview",
      icon: <LuLayoutDashboard />,
      description:
        "A snapshot of team activity, delivery progress, and important milestones.",
    },
    {
      title: "Projects",
      to: "/dashboard/projects",
      icon: <LuFolderKanban />,
      description:
        "Track active initiatives, delivery status, and strategic priorities.",
    },
    {
      title: "Tasks",
      to: "/dashboard/tasks",
      icon: <LuFlag />,
      description: "Manage and prioritize individual tasks and assignments.",
    },
    {
      title: "Calendar",
      to: "/dashboard/calendar",
      icon: <LuCalendar />,
      description: "View and manage upcoming events and deadlines.",
    },
    {
      title: "Kanban",
      to: "/dashboard/kanban",
      icon: <LuFolderKanban />,
      description: "Visualize and manage work items in a Kanban board.",
    },
  ];

  const navItemsSecondary = [
    {
      title: "Team",
      to: "/dashboard/team",
      icon: <LuUsers />,
      description: "Manage team members and their permissions.",
    },
    {
      title: "Analytics",
      to: "/dashboard/analytics",
      icon: <LuTrendingUp />,
      description: "View and analyze team performance and project metrics.",
    },
  ];

  const navItemSetting = [
    {
      title: "Settings",
      to: "/dashboard/settings",
      description: "Manage your account settings and preferences.",
    },
  ];

  return (
    <div className="flex bg-linear-to-b from-gray-950 to-slate-900">
      <DashboardSidebar
        isOpen={isOpen}
        closeHandler={closeHandler}
        className="mx-5 my-7"
        navItems={navItems}
        navItemsSecondary={navItemsSecondary}
      />

      <main className="w-full py-7 sm:px-5">
        <div className="mx-5">
          <DashboardHeader
            openHandler={openHandler}
            pages={[...navItems, ...navItemsSecondary, ...navItemSetting]}
          />

          <Suspense
            fallback={<LoadingScreen message="Loading..." size="large" />}
          >
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
