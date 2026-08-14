import DashboardPageLayout from "../../features/dashboard/DashboardPageLayout";

export default function AnalyticsPage() {
  return (
    <DashboardPageLayout>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/20">
        <h2 className="text-xl font-semibold text-white">Analytics overview</h2>
        <p className="mt-2 text-sm text-slate-400">
          This page can include charts, KPI summary cards, and trend lines.
        </p>
      </div>
    </DashboardPageLayout>
  );
}
