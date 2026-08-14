import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const AppLayout = lazy(() => import("../layouts/AppLayout"));
const AppLayoutUser = lazy(() => import("../layouts/AppLayoutUser"));
const AppLayoutDashboard = lazy(() => import("../layouts/AppLayoutDashboard"));

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const ForgotPassword = lazy(() => import("../pages/ForgetPassword"));
const NotFound = lazy(() => import("../pages/NotFound"));

const OverviewPage = lazy(() => import("../pages/dashboard/Overview"));
const ProjectsPage = lazy(() => import("../pages/dashboard/Projects"));
const TasksPage = lazy(() => import("../pages/dashboard/Tasks"));
const CalendarPage = lazy(() => import("../pages/dashboard/Calendar"));
const KanbanPage = lazy(() => import("../pages/dashboard/Kanban"));
const TeamPage = lazy(() => import("../pages/dashboard/Team"));
const AnalyticsPage = lazy(() => import("../pages/dashboard/Analytics"));
const SettingsPage = lazy(() => import("../pages/dashboard/Settings"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: "/user",
    element: <AppLayoutUser />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <AppLayoutDashboard />,
    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
      {
        path: "overview",
        element: <OverviewPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "tasks",
        element: <TasksPage />,
      },
      {
        path: "calendar",
        element: <CalendarPage />,
      },
      {
        path: "kanban",
        element: <KanbanPage />,
      },
      {
        path: "team",
        element: <TeamPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
