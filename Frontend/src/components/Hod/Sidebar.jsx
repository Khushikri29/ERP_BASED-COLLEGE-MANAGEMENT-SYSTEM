// src/components/Sidebar.jsx
import React from "react";
import {
  UserCircleIcon,
  CheckCircleIcon,
  ArrowDownCircleIcon,
  PencilSquareIcon,
  BookOpenIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { name: "Profile", icon: UserCircleIcon, key: "Profile" },
  { name: "Approve Students", icon: CheckCircleIcon, key: "ApproveStudents" },
  { name: "Student Dropout", icon: ArrowDownCircleIcon, key: "StudentDropout" },
  { name: "Update Student", icon: PencilSquareIcon, key: "UpdateStudent" },
  { name: "Create Course", icon: BookOpenIcon, key: "CreateCourse" },
  { name: "Verify Result", icon: CheckBadgeIcon, key: "VerifyResult" },
];

const Sidebar = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="w-64 bg-white border-r flex flex-col h-screen sticky top-0">
      {/* Logo/University Name */}
      <div className="p-6 flex items-center h-16 border-b">
        <div className="w-8 h-8 rounded-full bg-purple-600 mr-3"></div>
        <span className="text-xl font-semibold text-gray-800">
          Acme University
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
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
    </div>
  );
};

export default Sidebar;
