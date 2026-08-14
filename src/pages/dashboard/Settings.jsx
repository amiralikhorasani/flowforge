import DashboardPageLayout from "../../features/dashboard/DashboardPageLayout";

export default function SettingsPage() {
  return (
    <DashboardPageLayout>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/20">
        <h2 className="text-xl font-semibold text-white">Workspace settings</h2>
        <p className="mt-2 text-sm text-slate-400">
          This page can contain forms for profile, notifications, and security
          settings.
        </p>
      </div>
    </DashboardPageLayout>
  );
}
