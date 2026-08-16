import { LuFolderKanban } from "react-icons/lu";
import Button from "../../components/ui/Button";
import profileImg from "../../assets/images/amiraliProfile.jpg";
import Card from "../../components/ui/Card";
import useColumnCount from "./useColumnCount";
import ProjectCard from "./ProjectCard";
import CardTitle from "./CardTitle";
import useShowAllItems from "./useShowAllItems";

const projects = [
  {
    id: 1,
    name: "FlowForge Dashboard",
    description: "Main dashboard redesign with new analytics",
    status: "active",
    progress: 75,
    members: [
      { name: "Amirali K.", avatar: profileImg },
      { name: "Sara A.", avatar: profileImg },
      { name: "Reza M.", avatar: profileImg },
    ],
    dueDate: "2026-08-20",
    tasks: { total: 24, completed: 18 },
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    name: "Mobile App Redesign",
    description: "Complete UI/UX overhaul for iOS and Android",
    status: "planning",
    progress: 15,
    members: [
      { name: "Sara A.", avatar: profileImg },
      { name: "Reza M.", avatar: profileImg },
    ],
    dueDate: "2026-09-15",
    tasks: { total: 42, completed: 6 },
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 3,
    name: "API Documentation",
    description: "Comprehensive API docs with examples",
    status: "review",
    progress: 90,
    members: [{ name: "Amirali K.", avatar: profileImg }],
    dueDate: "2026-08-10",
    tasks: { total: 12, completed: 11 },
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    name: "Design System v2",
    description: "New component library with dark mode support",
    status: "active",
    progress: 45,
    members: [
      { name: "Reza M.", avatar: profileImg },
      { name: "Sara A.", avatar: profileImg },
      { name: "Amirali K.", avatar: profileImg },
    ],
    dueDate: "2026-09-01",
    tasks: { total: 36, completed: 16 },
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 1,
    name: "FlowForge Dashboard",
    description: "Main dashboard redesign with new analytics",
    status: "active",
    progress: 75,
    members: [
      { name: "Amirali K.", avatar: profileImg },
      { name: "Sara A.", avatar: profileImg },
      { name: "Reza M.", avatar: profileImg },
    ],
    dueDate: "2026-08-20",
    tasks: { total: 24, completed: 18 },
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    name: "Mobile App Redesign",
    description: "Complete UI/UX overhaul for iOS and Android",
    status: "planning",
    progress: 15,
    members: [
      { name: "Sara A.", avatar: profileImg },
      { name: "Reza M.", avatar: profileImg },
    ],
    dueDate: "2026-09-15",
    tasks: { total: 42, completed: 6 },
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 3,
    name: "API Documentation",
    description: "Comprehensive API docs with examples",
    status: "review",
    progress: 90,
    members: [{ name: "Amirali K.", avatar: profileImg }],
    dueDate: "2026-08-10",
    tasks: { total: 12, completed: 11 },
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    name: "Design System v2",
    description: "New component library with dark mode support",
    status: "active",
    progress: 45,
    members: [
      { name: "Reza M.", avatar: profileImg },
      { name: "Sara A.", avatar: profileImg },
      { name: "Amirali K.", avatar: profileImg },
    ],
    dueDate: "2026-09-01",
    tasks: { total: 36, completed: 16 },
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 2,
    name: "Mobile App Redesign",
    description: "Complete UI/UX overhaul for iOS and Android",
    status: "planning",
    progress: 15,
    members: [
      { name: "Sara A.", avatar: profileImg },
      { name: "Reza M.", avatar: profileImg },
    ],
    dueDate: "2026-09-15",
    tasks: { total: 42, completed: 6 },
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 3,
    name: "API Documentation",
    description: "Comprehensive API docs with examples",
    status: "review",
    progress: 90,
    members: [{ name: "Amirali K.", avatar: profileImg }],
    dueDate: "2026-08-10",
    tasks: { total: 12, completed: 11 },
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    name: "Design System v2",
    description: "New component library with dark mode support",
    status: "active",
    progress: 45,
    members: [
      { name: "Reza M.", avatar: profileImg },
      { name: "Sara A.", avatar: profileImg },
      { name: "Amirali K.", avatar: profileImg },
    ],
    dueDate: "2026-09-01",
    tasks: { total: 36, completed: 16 },
    color: "from-amber-500 to-orange-600",
  },
];

export default function RecentProjects() {
  const columnCount = useColumnCount();

  const {
    show: projectsShow,
    isShowAll: isShowAllProject,
    setIsShowAll: setIsShowAllProject,
  } = useShowAllItems(projects, columnCount);

  return (
    <Card className="w-full overflow-hidden p-0!">
      <div className="flex flex-col gap-4 border-b border-white/5 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
        <CardTitle
          title="Recent Projects"
          description="Projects you recently worked on"
          icon={LuFolderKanban}
        />
        <Button
          to="/dashboard/projects"
          variant="ghost"
          size="small"
          className="text-slate-300 hover:text-white"
        >
          View All
        </Button>
      </div>

      <div className="scroll_style grid grid-cols-1 gap-4 space-y-4 p-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {projectsShow.map((project, index) => (
          <ProjectCard project={project} index={index} />
        ))}
      </div>

      <div className="border-t border-white/5 py-2">
        <Button
          variant="ghost"
          className="mx-auto px-5 text-slate-300 hover:text-white"
          onClick={() => setIsShowAllProject((show) => !show)}
        >
          {isShowAllProject ? "Less than" : "View All Projects"}
        </Button>
      </div>
    </Card>
  );
}
