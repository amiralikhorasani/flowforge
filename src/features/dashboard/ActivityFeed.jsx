import {
  LuGitCommitHorizontal,
  LuMessageSquare,
  LuUserPlus,
  LuFlag,
  LuStar,
  LuFileText,
} from "react-icons/lu";

import Button from "../../components/ui/Button";
import profileImg from "../../assets/images/amiraliProfile.jpg";
import CardTitle from "./CardTitle";
import SectionLayout from "./SectionLayout";
import ActivityItem from "./ActivityItem";

const activities = [
  {
    id: 1,
    type: "commit",
    user: {
      name: "Amirali Khorasani",
      avatar: profileImg,
    },
    action: "pushed a commit",
    target: "Design system update",
    project: "FlowForge",
    time: "2 hours ago",
    icon: LuGitCommitHorizontal,
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
  },
  {
    id: 2,
    type: "comment",
    user: { name: "Sara Ahmadi", avatar: profileImg },
    action: "commented on",
    target: "Task #245 - Dashboard layout",
    project: "FlowForge",
    time: "4 hours ago",
    icon: LuMessageSquare,
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
  },
  {
    id: 3,
    type: "member",
    user: { name: "Reza Mohammadi", avatar: profileImg },
    action: "joined the project",
    target: "Mobile App Redesign",
    project: "FlowForge",
    time: "Yesterday",
    icon: LuUserPlus,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    id: 4,
    type: "task",
    user: {
      name: "Amirali Khorasani",
      avatar: profileImg,
    },
    action: "completed",
    target: "API integration for auth",
    project: "FlowForge",
    time: "Yesterday",
    icon: LuFlag,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  {
    id: 5,
    type: "star",
    user: { name: "Team FlowForge", avatar: profileImg },
    action: "starred the repository",
    target: "FlowForge",
    project: "",
    time: "2 days ago",
    icon: LuStar,
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-400",
  },
  {
    id: 6,
    type: "document",
    user: { name: "Sara Ahmadi", avatar: profileImg },
    action: "created a document",
    target: "Project roadmap Q3",
    project: "FlowForge",
    time: "3 days ago",
    icon: LuFileText,
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
  },
];

export default function ActivityFeed() {
  return (
    <SectionLayout>
      <div className="flex flex-col justify-between gap-4 border-b border-white/5 px-5 py-3.5 sm:flex-row sm:items-center">
        <CardTitle
          title="Recent Activity"
          description="Latest updates from your team"
          icon={LuMessageSquare}
        />

        <Button
          to="/workspace/activities"
          variant="ghost"
          size="small"
          className="rounded-none! border-t border-white/5 pt-4! pb-1 text-nowrap sm:border-none sm:p-2!"
        >
          View All
        </Button>
      </div>

      <div className="grid gap-5 p-4 md:grid-cols-2">
        {activities.map((activity, index) => (
          <ActivityItem key={activity.id} activity={activity} index={index} />
        ))}
      </div>
    </SectionLayout>
  );
}
