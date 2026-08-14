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

  return (
    <div className="flex h-screen max-h-screen items-start overflow-hidden bg-linear-to-b from-gray-950 to-slate-900">
      <DashboardSidebar
        isOpen={isOpen}
        openHandler={openHandler}
        closeHandler={closeHandler}
        className="mx-5 my-7"
        navItems={navItems}
        navItemsSecondary={navItemsSecondary}
      />

      <div className="scroll_style flex h-svh flex-1 flex-col overflow-y-auto py-7 sm:px-5">
        <main>
          <div className="mx-5">
            <DashboardHeader
              openHandler={openHandler}
              pages={[...navItems, ...navItemsSecondary]}
            />

            <Suspense
              fallback={<LoadingScreen message="Loading..." size="large" />}
            >
              <Outlet />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
