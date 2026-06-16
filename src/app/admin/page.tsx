"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Newspaper,
  Calendar,
  Image,
  Users,
  Briefcase,
  Download,
  GraduationCap,
  Trophy,
  LogOut,
  Menu,
} from "lucide-react";

const modules = [
  { id: "news", label: "News", icon: Newspaper, desc: "Manage news articles and announcements" },
  { id: "events", label: "Events", icon: Calendar, desc: "Create and edit campus events" },
  { id: "gallery", label: "Gallery", icon: Image, desc: "Upload and organize gallery images" },
  { id: "faculty", label: "Faculty", icon: Users, desc: "Manage faculty profiles" },
  { id: "placements", label: "Placements", icon: Briefcase, desc: "Update placement records" },
  { id: "downloads", label: "Downloads", icon: Download, desc: "Manage downloadable documents" },
  { id: "admissions", label: "Admissions", icon: GraduationCap, desc: "Update admission information" },
  { id: "achievements", label: "Student Achievements", icon: Trophy, desc: "Publish student achievements" },
];

export default function AdminDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeModule, setActiveModule] = useState("news");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) setLoggedIn(true);
    else alert("Invalid credentials. Use admin@mptc.ac.in / admin123");
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <LayoutDashboard className="text-white" size={28} />
            </div>
            <h1 className="font-poppins font-bold text-primary-900 text-xl">Admin Dashboard</h1>
            <p className="text-slate-500 text-sm mt-1">MPTC Karunagappally</p>
          </div>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-300 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-300 outline-none"
            />
            <button type="submit" className="btn-primary w-full justify-center">Sign In</button>
          </div>
          <p className="text-xs text-slate-400 text-center mt-4">Demo: admin@mptc.ac.in / admin123</p>
          <Link href="/" className="block text-center text-sm text-primary-500 mt-4 hover:underline">← Back to Website</Link>
        </form>
      </div>
    );
  }

  const active = modules.find((m) => m.id === activeModule)!;

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <aside className={`${sidebarOpen ? "w-64" : "w-0"} bg-primary-950 text-white transition-all overflow-hidden shrink-0`}>
        <div className="p-5 border-b border-white/10">
          <div className="font-poppins font-bold">MPTC Admin</div>
          <div className="text-primary-300 text-xs">Content Management</div>
        </div>
        <nav className="p-3 space-y-1">
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModule(m.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                activeModule === m.id ? "bg-primary-500 text-white" : "text-primary-200 hover:bg-white/10"
              }`}
            >
              <m.icon size={18} />
              {m.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => setLoggedIn(false)}
          className="flex items-center gap-2 px-6 py-4 text-primary-300 hover:text-white text-sm w-full"
        >
          <LogOut size={16} /> Logout
        </button>
      </aside>

      <div className="flex-1">
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg">
              <Menu size={20} />
            </button>
            <h1 className="font-poppins font-bold text-primary-900">{active.label}</h1>
          </div>
          <Link href="/" className="text-sm text-primary-500 hover:underline">View Site</Link>
        </header>

        <main className="p-6">
          <div className="bg-white rounded-2xl border p-6 max-w-4xl">
            <p className="text-slate-600 mb-6">{active.desc}</p>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-12 text-center">
              <active.icon size={40} className="text-slate-300 mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-slate-700 mb-2">Manage {active.label}</h3>
              <p className="text-slate-500 text-sm mb-4">
                Connect PostgreSQL database to enable full CRUD operations for {active.label.toLowerCase()}.
              </p>
              <button className="btn-primary">Add New {active.label.slice(0, -1)}</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
