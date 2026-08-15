import { useLocation } from "react-router";
import { motion } from "motion/react";
import { LuBell, LuMenu } from "react-icons/lu";

import Button from "../../components/ui/Button";
import SearchInput from "../../components/ui/SearchInput";
import Logo from "../../components/ui/Logo";

function DashboardHeader({ openHandler, pages, className = "" }) {
  const location = useLocation();

  const { title, description } =
    pages.find((page) => page.to === location.pathname) || {};

  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`mb-8 flex flex-col-reverse items-center justify-between gap-y-8 xl:flex-row ${className}`}
    >
      <div className="w-full space-y-2">
        <p className="text-xs font-semibold tracking-[0.22em] text-violet-300 uppercase">
          Dashboard
        </p>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-1 text-sm text-slate-400">{description}</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full items-center justify-between gap-4">
          <Logo className="block xl:hidden" />

          <div className="flex items-center gap-4">
            <SearchInput
              placeholder="Search projects, tasks..."
              className="w-full min-w-0 sm:w-72 lg:w-80"
              containerClassName="w-full sm:w-auto hidden md:block"
            />

            <div className="flex items-center justify-between gap-3">
              <Button
                iconBtn={true}
                variant="outline"
                className="relative shadow-none"
                aria-label="Notifications"
              >
                <LuBell size={22} />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">
                  3
                </span>
              </Button>

              <Button
                iconBtn={true}
                variant="outline"
                className="shadow-none xl:hidden"
                onClick={openHandler}
              >
                <LuMenu size={20} />
              </Button>
            </div>
          </div>
        </div>

        <SearchInput
          placeholder="Search projects, tasks..."
          className="w-full min-w-0 lg:w-80"
          containerClassName="w-full  md:hidden block"
        />
      </div>
    </motion.header>
  );
}

export default DashboardHeader;
