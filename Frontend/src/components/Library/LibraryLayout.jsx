// src/components/AppLayout.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "../Library/Pages/Dashboard"; // Example Content
import Profile from "../Library/Pages/Profile"; // Example Content
import IssueReturn from "../Library/Pages/IssueReturn"; // Example Content
import AvailableBooks from "../Library/Pages/AvailableBooks"; // Example Content
import PendingReturns from "../Library/Pages/PendingReturns"; // Example Content
import Notifications from "../Library/Pages/Notifications"; // Example Content
// Import other page components here (Profile, IssueReturn, AvailableBooks, etc.)

const LibraryLayout = () => {
  // State to manage which page/component is currently visible
  const [currentPage, setCurrentPage] = useState("Dashboard"); // Default to Dashboard

  const renderContent = () => {
    switch (currentPage) {
      case "Dashboard":
        return <Dashboard />;
      case "Profile":
        return <Profile />;
      case "IssueReturn":
        return <IssueReturn />;
      case "AvailableBooks":
        return <AvailableBooks />;
      case "PendingReturns":
        return <PendingReturns />;
      case "Notifications":
        return <Notifications />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* We'll integrate the welcome message and search into the main content area for the dashboard, 
            or you can create a separate Header component depending on the complexity needed. 
            For this UI, the main dashboard doesn't use a separate complex header like the other pages.
        */}
        <main className="p-6 md:p-8 flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default LibraryLayout;
