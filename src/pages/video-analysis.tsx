import React from "react";
import { VideoPlayer } from "@/components/video-analysis/video-player";
import { FeedbackPanel } from "@/components/video-analysis/feedback-panel";
import { ProcedureChecklist } from "@/components/video-analysis/procedure-checklist";
import { Button } from "@/components/ui/button";
import { Download, Share2, MessageSquare } from "lucide-react";

const feedbackItems = [
  {
    id: "1",
    timestamp: "00:45",
    message: "Excellent hand positioning during initial incision",
    type: "success" as const,
  },
  {
    id: "2",
    timestamp: "01:30",
    message: "Consider adjusting the angle of the laparoscope for better visibility",
    type: "info" as const,
  },
  {
    id: "3",
    timestamp: "02:15",
    message: "Potential risk of tissue damage - adjust forceps pressure",
    type: "warning" as const,
  },
  {
    id: "4",
    timestamp: "03:20",
    message: "Good identification of anatomical landmarks",
    type: "success" as const,
  },
  {
    id: "5",
    timestamp: "04:10",
    message: "Maintain consistent traction during dissection",
    type: "info" as const,
  },
  {
    id: "6",
    timestamp: "05:45",
    message: "Excellent clip placement technique",
    type: "success" as const,
  },
  {
    id: "7",
    timestamp: "06:30",
    message: "Caution: Proximity to common bile duct",
    type: "warning" as const,
  },
];

const checklistItems = [
  {
    id: "1",
    text: "Patient positioning and preparation",
    status: "completed" as const,
    timestamp: "00:15",
  },
  {
    id: "2",
    text: "Initial port placement",
    status: "completed" as const,
    timestamp: "01:20",
  },
  {
    id: "3",
    text: "Identification of anatomical landmarks",
    status: "completed" as const,
    timestamp: "03:05",
  },
  {
    id: "4",
    text: "Dissection of Calot's triangle",
    status: "in-progress" as const,
  },
  {
    id: "5",
    text: "Clipping and division of cystic duct",
    status: "pending" as const,
  },
  {
    id: "6",
    text: "Gallbladder removal from liver bed",
    status: "pending" as const,
  },
  {
    id: "7",
    text: "Extraction of gallbladder",
    status: "pending" as const,
  },
  {
    id: "8",
    text: "Final inspection and hemostasis",
    status: "pending" as const,
  },
  {
    id: "9",
    text: "Port removal and closure",
    status: "pending" as const,
  },
];

export const VideoAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Video Analysis</h1>
          <p className="text-muted-foreground">
            AI-powered analysis and feedback for your medical procedures
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            Request Feedback
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <VideoPlayer />
          <FeedbackPanel feedback={feedbackItems} />
        </div>
        <div>
          <ProcedureChecklist items={checklistItems} progress={42} />
        </div>
      </div>
    </div>
  );
};

export default VideoAnalysis;
