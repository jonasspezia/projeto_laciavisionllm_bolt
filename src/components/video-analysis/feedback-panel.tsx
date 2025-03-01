import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CheckCircle, AlertCircle, Info } from "lucide-react";

interface FeedbackItem {
  id: string;
  timestamp: string;
  message: string;
  type: "success" | "warning" | "info";
}

interface FeedbackPanelProps {
  feedback: FeedbackItem[];
}

export const FeedbackPanel: React.FC<FeedbackPanelProps> = ({ feedback }) => {
  const getFeedbackIcon = (type: FeedbackItem["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-amber-500" />;
      case "info":
        return <Info className="h-4 w-4 text-turquoise" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="success">Correct</TabsTrigger>
            <TabsTrigger value="warning">Warnings</TabsTrigger>
            <TabsTrigger value="info">Tips</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4 space-y-4">
            {feedback.map((item) => (
              <div key={item.id} className="flex gap-3 p-3 rounded-md bg-gray-50">
                <div className="mt-0.5">{getFeedbackIcon(item.type)}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-sm">{item.message}</p>
                    <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">
                      {item.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="success" className="mt-4 space-y-4">
            {feedback
              .filter((item) => item.type === "success")
              .map((item) => (
                <div key={item.id} className="flex gap-3 p-3 rounded-md bg-green/10">
                  <div className="mt-0.5">{getFeedbackIcon(item.type)}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="text-sm">{item.message}</p>
                      <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">
                        {item.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </TabsContent>
          
          <TabsContent value="warning" className="mt-4 space-y-4">
            {feedback
              .filter((item) => item.type === "warning")
              .map((item) => (
                <div key={item.id} className="flex gap-3 p-3 rounded-md bg-amber-50">
                  <div className="mt-0.5">{getFeedbackIcon(item.type)}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="text-sm">{item.message}</p>
                      <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">
                        {item.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </TabsContent>
          
          <TabsContent value="info" className="mt-4 space-y-4">
            {feedback
              .filter((item) => item.type === "info")
              .map((item) => (
                <div key={item.id} className="flex gap-3 p-3 rounded-md bg-turquoise/10">
                  <div className="mt-0.5">{getFeedbackIcon(item.type)}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="text-sm">{item.message}</p>
                      <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">
                        {item.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
