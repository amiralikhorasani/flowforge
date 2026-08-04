import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const AppLayout = lazy(() => import("../layouts/AppLayout"));
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
