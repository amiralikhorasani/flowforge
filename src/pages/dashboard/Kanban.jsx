import DashboardPageLayout from "../../features/dashboard/DashboardPageLayout";

export default function KanbanPage() {
  return (
    <DashboardPageLayout>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/20">
        <h2 className="text-xl font-semibold text-white">Kanban board</h2>
        <p className="mt-2 text-sm text-slate-400">
          This page can contain columns for backlog, doing, review, and done.
        </p>
      </div>
    </DashboardPageLayout>
  );
}
