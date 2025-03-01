import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Circle, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ChecklistItem {
  id: string;
  text: string;
  status: "completed" | "pending" | "in-progress";
  timestamp?: string;
}

interface ProcedureChecklistProps {
  items: ChecklistItem[];
  progress: number;
}

export const ProcedureChecklist: React.FC<ProcedureChecklistProps> = ({
  items,
  progress,
}) => {
  const getStatusIcon = (status: ChecklistItem["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green" />;
      case "pending":
        return <Circle className="h-5 w-5 text-gray-300" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-turquoise" />;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Procedure Checklist</CardTitle>
        <div className="flex items-center gap-2 mt-2">
          <Progress value={progress} className="h-2 flex-1" />
          <span className="text-sm font-medium">{progress}%</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              <div className="mt-0.5">{getStatusIcon(item.status)}</div>
              <div className="flex-1">
                <p className={`text-sm ${item.status === "completed" ? "line-through text-muted-foreground" : ""}`}>
                  {item.text}
                </p>
                {item.timestamp && (
                  <span className="text-xs text-muted-foreground">
                    {item.timestamp}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
