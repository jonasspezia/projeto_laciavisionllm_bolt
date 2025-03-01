import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export const Layout: React.FC = () => {
  return (
    <div className="flex h-screen bg-white-soft">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-white-soft">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
