import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Play, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoItem {
  id: string;
  title: string;
  date: string;
  duration: string;
  thumbnail: string;
  score: number;
  status: "completed" | "in-progress" | "needs-review";
}

interface RecentVideosProps {
  videos: VideoItem[];
}

export const RecentVideos: React.FC<RecentVideosProps> = ({ videos }) => {
  const getStatusIcon = (status: VideoItem["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-turquoise" />;
      case "needs-review":
        return <AlertCircle className="h-4 w-4 text-amber-500" />;
    }
  };

  const getStatusText = (status: VideoItem["status"]) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "needs-review":
        return "Needs Review";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Procedure Videos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {videos.map((video) => (
            <div key={video.id} className="flex gap-4">
              <div className="relative w-24 h-16 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-sm">{video.title}</h3>
                  <div className="flex items-center gap-1 text-xs">
                    {getStatusIcon(video.status)}
                    <span>{getStatusText(video.status)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                  <span>{video.date}</span>
                  <span>•</span>
                  <span>{video.duration}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={video.score} className="h-2 flex-1" />
                  <span className="text-xs font-medium">{video.score}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          View All Videos
        </Button>
      </CardContent>
    </Card>
  );
};
