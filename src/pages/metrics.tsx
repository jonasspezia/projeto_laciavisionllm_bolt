import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const performanceData = [
  { name: "Hand Positioning", score: 85, average: 75 },
  { name: "Instrument Control", score: 78, average: 70 },
  { name: "Tissue Handling", score: 82, average: 72 },
  { name: "Procedural Flow", score: 90, average: 78 },
  { name: "Anatomical Knowledge", score: 88, average: 80 },
  { name: "Time Efficiency", score: 75, average: 68 },
];

const timelineData = [
  { name: "Jan", score: 65 },
  { name: "Feb", score: 68 },
  { name: "Mar", score: 70 },
  { name: "Apr", score: 72 },
  { name: "May", score: 75 },
  { name: "Jun", score: 78 },
  { name: "Jul", score: 82 },
  { name: "Aug", score: 85 },
];

const procedureTypeData = [
  { name: "Laparoscopic", value: 45 },
  { name: "Endoscopic", value: 30 },
  { name: "Suturing", value: 15 },
  { name: "Other", value: 10 },
];

const COLORS = ["#15bcc6", "#46c68f", "#002046", "#022340"];

export const Metrics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Performance Metrics</h1>
        <p className="text-muted-foreground">
          Detailed analytics and insights about your procedural performance
        </p>
      </div>

      <Tabs defaultValue="skills">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="skills">Skill Breakdown</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="procedures">Procedure Types</TabsTrigger>
        </TabsList>
        
        <TabsContent value="skills" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Skill Performance Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={performanceData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" name="Your Score" fill="#15bcc6" />
                    <Bar dataKey="average" name="Peer Average" fill="#46c68f" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="timeline" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={timelineData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="score"
                      name="Performance Score"
                      stroke="#15bcc6"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="procedures" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Procedure Type Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={procedureTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {procedureTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Metrics;
