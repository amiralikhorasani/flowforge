import { Suspense } from "react";
import { Outlet } from "react-router";
import Spinner from "../components/ui/Spinner";

function AppLayout() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default AppLayout;
