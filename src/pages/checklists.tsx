import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, Clock, Plus, Search } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ChecklistItem {
  id: string;
  text: string;
  status: "completed" | "pending" | "in-progress";
}

interface ProcedureChecklist {
  id: string;
  title: string;
  category: string;
  items: ChecklistItem[];
  progress: number;
}

const checklists: ProcedureChecklist[] = [
  {
    id: "1",
    title: "Laparoscopic Cholecystectomy",
    category: "Laparoscopic",
    progress: 42,
    items: [
      { id: "1-1", text: "Patient positioning and preparation", status: "completed" },
      { id: "1-2", text: "Initial port placement", status: "completed" },
      { id: "1-3", text: "Identification of anatomical landmarks", status: "completed" },
      { id: "1-4", text: "Dissection of Calot's triangle", status: "in-progress" },
      { id: "1-5", text: "Clipping and division of cystic duct", status: "pending" },
      { id: "1-6", text: "Gallbladder removal from liver bed", status: "pending" },
      { id: "1-7", text: "Extraction of gallbladder", status: "pending" },
      { id: "1-8", text: "Final inspection and hemostasis", status: "pending" },
      { id: "1-9", text: "Port removal and closure", status: "pending" },
    ],
  },
  {
    id: "2",
    title: "Endoscopic Retrograde Cholangiopancreatography (ERCP)",
    category: "Endoscopic",
    progress: 75,
    items: [
      { id: "2-1", text: "Patient preparation and sedation", status: "completed" },
      { id: "2-2", text: "Endoscope insertion", status: "completed" },
      { id: "2-3", text: "Identification of ampulla", status: "completed" },
      { id: "2-4", text: "Cannulation of bile duct", status: "completed" },
      { id: "2-5", text: "Contrast injection and imaging", status: "completed" },
      { id: "2-6", text: "Therapeutic intervention if needed", status: "in-progress" },
      { id: "2-7", text: "Removal of endoscope", status: "pending" },
      { id: "2-8", text: "Post-procedure monitoring", status: "pending" },
    ],
  },
  {
    id: "3",
    title: "Basic Suturing Technique",
    category: "General",
    progress: 100,
    items: [
      { id: "3-1", text: "Preparation of suture material", status: "completed" },
      { id: "3-2", text: "Proper needle holder grip", status: "completed" },
      { id: "3-3", text: "Tissue handling and forceps use", status: "completed" },
      { id: "3-4", text: "Simple interrupted suture placement", status: "completed" },
      { id: "3-5", text: "Knot tying technique", status: "completed" },
      { id: "3-6", text: "Suture removal", status: "completed" },
    ],
  },
];

export const Checklists: React.FC = () => {
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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Procedure Checklists</h1>
          <p className="text-muted-foreground">
            Standardized checklists to ensure procedure quality and safety
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Checklist
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search checklists..."
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-turquoise focus:border-transparent"
        />
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Procedures</TabsTrigger>
          <TabsTrigger value="laparoscopic">Laparoscopic</TabsTrigger>
          <TabsTrigger value="endoscopic">Endoscopic</TabsTrigger>
          <TabsTrigger value="general">General</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {checklists.map((checklist) => (
              <Card key={checklist.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{checklist.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Category: {checklist.category}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <Progress value={checklist.progress} className="h-2 flex-1" />
                    <span className="text-sm font-medium">{checklist.progress}%</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {checklist.items.slice(0, 3).map((item) => (
                      <li key={item.id} className="flex items-start gap-3">
                        <div className="mt-0.5">{getStatusIcon(item.status)}</div>
                        <p className={`text-sm ${item.status === "completed" ? "line-through text-muted-foreground" : ""}`}>
                          {item.text}
                        </p>
                      </li>
                    ))}
                    {checklist.items.length > 3 && (
                      <li className="text-sm text-muted-foreground pl-8">
                        +{checklist.items.length - 3} more items
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="laparoscopic" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {checklists
              .filter((checklist) => checklist.category === "Laparoscopic")
              .map((checklist) => (
                <Card key={checklist.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{checklist.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          Category: {checklist.category}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Progress value={checklist.progress} className="h-2 flex-1" />
                      <span className="text-sm font-medium">{checklist.progress}%</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {checklist.items.slice(0, 3).map((item) => (
                        <li key={item.id} className="flex items-start gap-3">
                          <div className="mt-0.5">{getStatusIcon(item.status)}</div>
                          <p className={`text-sm ${item.status === "completed" ? "line-through text-muted-foreground" : ""}`}>
                            {item.text}
                          </p>
                        </li>
                      ))}
                      {checklist.items.length > 3 && (
                        <li className="text-sm text-muted-foreground pl-8">
                          +{checklist.items.length - 3} more items
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="endoscopic" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {checklists
              .filter((checklist) => checklist.category === "Endoscopic")
              .map((checklist) => (
                <Card key={checklist.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{checklist.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          Category: {checklist.category}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Progress value={checklist.progress} className="h-2 flex-1" />
                      <span className="text-sm font-medium">{checklist.progress}%</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {checklist.items.slice(0, 3).map((item) => (
                        <li key={item.id} className="flex items-start gap-3">
                          <div className="mt-0.5">{getStatusIcon(item.status)}</div>
                          <p className={`text-sm ${item.status === "completed" ? "line-through text-muted-foreground" : ""}`}>
                            {item.text}
                          </p>
                        </li>
                      ))}
                      {checklist.items.length > 3 && (
                        <li className="text-sm text-muted-foreground pl-8">
                          +{checklist.items.length - 3} more items
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="general" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {checklists
              .filter((checklist) => checklist.category === "General")
              .map((checklist) => (
                <Card key={checklist.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{checklist.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          Category: {checklist.category}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Progress value={checklist.progress} className="h-2 flex-1" />
                      <span className="text-sm font-medium">{checklist.progress}%</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {checklist.items.slice(0, 3).map((item) => (
                        <li key={item.id} className="flex items-start gap-3">
                          <div className="mt-0.5">{getStatusIcon(item.status)}</div>
                          <p className={`text-sm ${item.status === "completed" ? "line-through text-muted-foreground" : ""}`}>
                            {item.text}
                          </p>
                        </li>
                      ))}
                      {checklist.items.length > 3 && (
                        <li className="text-sm text-muted-foreground pl-8">
                          +{checklist.items.length - 3} more items
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Checklists;
