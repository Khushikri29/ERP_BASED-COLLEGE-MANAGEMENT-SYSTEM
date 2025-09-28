// src/pages/Dashboard.jsx
import React from "react";
import { Bell } from "lucide-react";
import { BookOpen, BookOpenCheck, Clock, CheckCircle } from "lucide-react";

// Dummy data
const recentlyIssued = [
  {
    id: "#12345",
    student: "Liam Carter",
    title: "The Enigma Code",
    issueDate: "2024-07-15",
    dueDate: "2024-08-15",
    status: "Issued",
  },
  {
    id: "#12346",
    student: "Olivia Bennett",
    title: "Quantum Computing",
    issueDate: "2024-07-10",
    dueDate: "2024-08-10",
    status: "Returned",
  },
  {
    id: "#12347",
    student: "Noah Thompson",
    title: "Robotics Handbook",
    issueDate: "2024-07-05",
    dueDate: "2024-08-05",
    status: "Issued",
  },
  {
    id: "#12348",
    student: "Ava Harper",
    title: "Electrical Circuits",
    issueDate: "2024-06-30",
    dueDate: "2024-07-30",
    status: "Returned",
  },
  {
    id: "#12349",
    student: "Ethan Parker",
    title: "Structural Analysis",
    issueDate: "2024-06-25",
    dueDate: "2024-07-25",
    status: "Overdue",
  },
];

const getStatusStyles = (status) => {
  switch (status) {
    case "Issued":
      return "bg-blue-100 text-blue-700";
    case "Returned":
      return "bg-green-100 text-green-700";
    case "Overdue":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header/Welcome Section */}
      <div className="flex justify-between items-center pb-4 border-b">
        <h1 className="text-3xl font-semibold text-gray-900">
          Welcome, Evelyn!
        </h1>
        <div className="flex items-center space-x-4">
          <p className="text-gray-500">Here's your library's activity today.</p>
          {/* Search and Notification Icons from 2.png */}
          <Bell className="w-5 h-5 text-gray-500 hover:text-purple-600 cursor-pointer" />
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg py-1.5 px-3 text-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Books */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Books</p>
            <p className="text-3xl font-bold text-gray-900">15,670</p>
          </div>
        </div>

        {/* Books Issued */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
            <BookOpenCheck className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Books Issued</p>
            <p className="text-3xl font-bold text-gray-900">350</p>
          </div>
        </div>

        {/* Returned Today */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <CheckCircle className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Returned Today</p>
            <p className="text-3xl font-bold text-gray-900">25</p>
          </div>
        </div>

        {/* Pending Returns */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600">
            <Clock className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Pending Returns</p>
            <p className="text-3xl font-bold text-gray-900">15</p>
          </div>
        </div>
      </div>

      {/* Recently Issued / Returned Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Recently Issued / Returned
          </h2>
          <div className="space-x-3">
            <button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition duration-150">
              Send Reminder
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition duration-150">
              Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Issue ID",
                  "Student Name",
                  "Book Title",
                  "Issue Date",
                  "Due Date",
                  "Status",
                  "...",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentlyIssued.map((row) => (
                <tr key={row.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
                    {row.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {row.student}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.issueDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-500">
                    {row.dueDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyles(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    <button className="hover:text-purple-600">...</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
