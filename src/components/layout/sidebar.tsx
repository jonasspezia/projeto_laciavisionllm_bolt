import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart2, 
  Video, 
  CheckSquare, 
  BookOpen, 
  Glasses, 
  Lightbulb, 
  FileText,
  Home,
  Settings,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  path, 
  active 
}) => {
  return (
    <Link to={path} className="w-full">
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-3 font-normal",
          active ? "bg-blue-deep/10 text-turquoise" : "text-gray-500 hover:text-turquoise"
        )}
      >
        {icon}
        <span>{label}</span>
      </Button>
    </Link>
  );
};

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const sidebarItems = [
    { icon: <Home size={20} />, label: "Dashboard", path: "/" },
    { icon: <Video size={20} />, label: "Video Analysis", path: "/video-analysis" },
    { icon: <BarChart2 size={20} />, label: "Performance Metrics", path: "/metrics" },
    { icon: <CheckSquare size={20} />, label: "Procedure Checklists", path: "/checklists" },
    { icon: <BookOpen size={20} />, label: "Educational Resources", path: "/resources" },
    { icon: <Glasses size={20} />, label: "AR Simulations", path: "/simulations" },
    { icon: <Lightbulb size={20} />, label: "Innovation Hub", path: "/innovation" },
    { icon: <FileText size={20} />, label: "Article Summaries", path: "/articles" },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <Video className="h-8 w-8 text-turquoise" />
          <h1 className="text-xl font-semibold text-blue-dark">LaciaVisionLLM</h1>
        </div>
      </div>
      
      <div className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            path={item.path}
            active={currentPath === item.path}
          />
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <SidebarItem icon={<Settings size={20} />} label="Settings" path="/settings" active={currentPath === "/settings"} />
        <Button variant="ghost" className="w-full justify-start gap-3 font-normal text-gray-500 hover:text-red-500 mt-2">
          <LogOut size={20} />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
};
