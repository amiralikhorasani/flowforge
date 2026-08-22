import { Suspense } from "react";
import { Outlet } from "react-router";
import LoadingScreen from "../components/ui/LoadingScreen";
import DashboardHeader from "../features/dashboard/DashboardHeader";
import DashboardSidebar from "../features/dashboard/DashboardSidebar";
import useIsOpen from "../hooks/useIsOpen";
import {
  LuCalendar,
  LuFolderKanban,
  LuLayoutDashboard,
  LuTrendingUp,
  LuUsers,
} from "react-icons/lu";
import { BsListTask } from "react-icons/bs";

function AppLayout() {
  const [isOpen, openHandler, closeHandler] = useIsOpen();

  const navItems = [
    {
      sectionName: "PLATFORM",
      sectionItems: [
        {
          title: "Overview",
          to: "/dashboard/overview",
          icon: <LuLayoutDashboard />,
          description:
            "A snapshot of team activity, delivery progress, and important milestones.",
        },

        {
          title: "Kanban Board",
          to: "/dashboard/kanban",
          icon: <LuFolderKanban />,
          description: "Visualize and manage work items in a Kanban board.",
        },

        {
          title: "Backlog & Spring",
          to: "/dashboard/backlog-and-spring",
          icon: <BsListTask />,
        },

        {
          title: "Calendar Schedule",
          to: "/dashboard/calendar",
          icon: <LuCalendar />,
          description: "View and manage upcoming events and deadlines.",
        },
      ],
    },

    {
      sectionName: "WORKSPACE",
      sectionItems: [
        {
          title: "All Projects",
          to: "/dashboard/projects",
          icon: <LuFolderKanban />,
          description:
            "Track active initiatives, delivery status, and strategic priorities.",
        },
        {
          title: "Team Members",
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
      ],
    },
  ];

  const navItemSetting = [
    {
      title: "Settings",
      to: "/dashboard/settings",
      description: "Manage your account settings and preferences.",
    },
  ];

  const allNavItems = [
    ...navItems.flatMap((section) => section.sectionItems),
    ...navItemSetting,
  ];

  return (
    <div className="flex bg-linear-to-b from-gray-950 to-slate-900">
      <DashboardSidebar
        isOpen={isOpen}
        closeHandler={closeHandler}
        className="mx-5 my-7"
        navItems={navItems}
      />

      <main className="w-full py-7 sm:px-5">
        <div className="mx-5 max-w-360 sm:mx-auto">
          <DashboardHeader openHandler={openHandler} pages={allNavItems} />

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
