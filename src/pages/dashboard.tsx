import React from "react";
import { 
  Video, 
  CheckCircle, 
  Clock, 
  Users, 
  Award,
  TrendingUp,
  Calendar
} from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { RecentVideos } from "@/components/dashboard/recent-videos";

const performanceData = [
  { name: "Jan", score: 65, average: 60 },
  { name: "Feb", score: 68, average: 61 },
  { name: "Mar", score: 70, average: 62 },
  { name: "Apr", score: 72, average: 63 },
  { name: "May", score: 75, average: 64 },
  { name: "Jun", score: 78, average: 65 },
  { name: "Jul", score: 82, average: 66 },
  { name: "Aug", score: 85, average: 67 },
];

const recentVideos = [
  {
    id: "1",
    title: "Laparoscopic Cholecystectomy",
    date: "June 15, 2023",
    duration: "10:30",
    thumbnail: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    score: 85,
    status: "completed" as const,
  },
  {
    id: "2",
    title: "Endoscopic Procedure",
    date: "June 10, 2023",
    duration: "15:45",
    thumbnail: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    score: 65,
    status: "needs-review" as const,
  },
  {
    id: "3",
    title: "Suturing Technique Practice",
    date: "June 5, 2023",
    duration: "08:20",
    thumbnail: "https://images.unsplash.com/photo-1631815588090-d1bcbe9b4b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    score: 45,
    status: "in-progress" as const,
  },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, Dr. Sarah Chen. Here's your performance overview.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Procedures"
          value="128"
          icon={<Video className="h-4 w-4" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Completed"
          value="96"
          icon={<CheckCircle className="h-4 w-4" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="In Progress"
          value="32"
          icon={<Clock className="h-4 w-4" />}
          trend={{ value: 2, isPositive: false }}
        />
        <StatsCard
          title="Average Score"
          value="85%"
          icon={<Award className="h-4 w-4" />}
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <div className="md:col-span-4">
          <PerformanceChart
            data={performanceData}
            title="Performance Trend"
            description="Your procedure quality scores compared to department average"
          />
        </div>
        <div className="md:col-span-3">
          <RecentVideos videos={recentVideos} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard
          title="Peer Comparisons"
          value="Top 15%"
          icon={<Users className="h-4 w-4" />}
          description="Your ranking among peers in your specialty"
          className="md:col-span-1"
        />
        <StatsCard
          title="Improvement Rate"
          value="+12%"
          icon={<TrendingUp className="h-4 w-4" />}
          description="Your skill improvement rate over the last 3 months"
          className="md:col-span-1"
        />
        <StatsCard
          title="Next Assessment"
          value="July 15"
          icon={<Calendar className="h-4 w-4" />}
          description="Scheduled date for your next procedure assessment"
          className="md:col-span-1"
        />
      </div>
    </div>
  );
};

export default Dashboard;
