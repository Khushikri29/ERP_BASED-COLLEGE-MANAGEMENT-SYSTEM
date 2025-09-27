// src/components/AppLayout.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import VerifyResults from "./Pages/VerifyResult"; // Example Content
import StudentDropout from "./Pages/StudentDropout";
import ApproveStudents from "./Pages/ApproveStudents";
import CreateCourse from "./Pages/CreateCourse";
import UpdateStudent from "./Pages/UpdateStudent";
import DashboardOverview from "./Pages/DashboardOverview";
// Import other page components here (e.g., ApproveStudents, CreateCourse, etc.)

const HodLayout = () => {
  // State to manage which page/component is currently visible
  const [currentPage, setCurrentPage] = useState("VerifyResult"); // Default to Verify Result

  const renderContent = () => {
    switch (currentPage) {
      case "Profile":
        return <DashboardOverview />; // Placeholder
      case "ApproveStudents":
        return <ApproveStudents />; // Placeholder
      case "StudentDropout":
        return <StudentDropout />;
      case "UpdateStudent":
        return <UpdateStudent />;
      case "CreateCourse":
        return <CreateCourse />; // Placeholder
      case "VerifyResult":
        return <VerifyResults />; // Actual Component
      default:
        return <VerifyResults />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header Component */}
        <Header />

        {/* Page Content */}
        <main className="p-6 md:p-8 flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default HodLayout;
