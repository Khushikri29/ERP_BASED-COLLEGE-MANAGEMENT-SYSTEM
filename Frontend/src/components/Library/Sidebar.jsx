// src/components/Sidebar.jsx
import React from "react";
import {
  LayoutDashboard,
  UserCircle,
  BookOpen,
  Clock,
  Bell,
  LogOut,
  CheckCheck,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, key: "Dashboard" },
  { name: "Profile", icon: UserCircle, key: "Profile" },
  { name: "Issue / Return", icon: BookOpen, key: "IssueReturn" },
  { name: "Books", icon: CheckCheck, key: "AvailableBooks" }, // Corresponds to Available/Total Books
  { name: "Pending Returns", icon: Clock, key: "PendingReturns" },
  { name: "Notifications", icon: Bell, key: "Notifications" },
];

const Sidebar = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="w-64 bg-white border-r flex flex-col h-screen sticky top-0">
      {/* Logo/Title */}
      <div className="p-6 flex items-center h-16 border-b">
        <div className="w-8 h-8 rounded-lg bg-purple-600 mr-3 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-semibold text-gray-800">
          Librarian UI
        </span>
      </div>

      {/* User Info (from 2.png) */}
      <div className="p-6 flex items-center space-x-3 border-b">
        <img
          src="https://i.pravatar.cc/150?img=1"
          alt="Evelyn Reed"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">Evelyn Reed</p>
          <p className="text-xs text-gray-500">Librarian</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = currentPage === item.key;
          const baseClasses =
            "flex items-center p-3 rounded-lg transition-colors duration-200";
          const activeClasses = "bg-purple-100 text-purple-700 font-semibold";
          const inactiveClasses = "text-gray-600 hover:bg-gray-100";

          return (
            <button
              key={item.key}
              onClick={() => setCurrentPage(item.key)}
              className={`${baseClasses} ${
                isActive ? activeClasses : inactiveClasses
              } w-full text-left`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t">
        <button className="flex items-center p-3 w-full justify-center rounded-lg bg-red-50 text-red-600 font-medium hover:bg-red-100 transition">
          <LogOut className="w-5 h-5 mr-2" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
