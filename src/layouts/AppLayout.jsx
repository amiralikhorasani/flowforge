import { Suspense } from "react";
import { Outlet } from "react-router";
import LoadingScreen from "../components/ui/LoadingScreen";
import Header from "../components/ui/header/Header";
import Footer from "../components/ui/Footer";

function AppLayout() {
  return (
    <div className="scroll-smooth">
      <Header />

      <main className="mx-auto max-w-full scroll-smooth px-3 sm:max-w-5/6 sm:px-4">
        <Suspense
          fallback={<LoadingScreen message="Loading..." size="large" />}
        >
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
