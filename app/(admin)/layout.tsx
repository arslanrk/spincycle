"use client"
import { useState } from "react";
import Sidebar from "../components/Nav/Sidebar";
import Topbar from "../components/Nav/Topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex h-screen">
      <Sidebar open={sidebarOpen} />
      <div className="flex flex-col flex-1">
        <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="p-4 overflow-y-auto flex-1 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
