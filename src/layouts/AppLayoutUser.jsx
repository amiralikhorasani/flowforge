import { Suspense } from "react";
import { Outlet } from "react-router";
import LoadingScreen from "../components/ui/LoadingScreen";

function AppLayout() {
  return (
    <div className="scroll-smooth">
      <Suspense fallback={<LoadingScreen message="Loading..." size="large" />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default AppLayout;
