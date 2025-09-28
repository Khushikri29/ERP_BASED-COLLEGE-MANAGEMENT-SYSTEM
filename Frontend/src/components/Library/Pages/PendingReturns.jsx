// src/pages/PendingReturns.jsx
import React from "react";
import { Clock, Send, AlertTriangle } from "lucide-react";

// Dummy data for pending returns
const pendingData = [
  {
    id: "#12346",
    student: "Jane Smith",
    roll: "ME-202",
    title: "Fundamentals of Physics",
    dueDate: "2024-07-04",
    days: "25 Days Overdue",
    status: "Overdue",
  },
  {
    id: "#12351",
    student: "Mark Wilson",
    roll: "CS-103",
    title: "Calculus I",
    dueDate: "2024-09-29",
    days: "Due Tomorrow",
    status: "Due Soon",
  },
  {
    id: "#12355",
    student: "Sarah Lee",
    roll: "EE-302",
    title: "Digital Logic",
    dueDate: "2024-10-02",
    days: "3 Days Remaining",
    status: "Due Soon",
  },
  {
    id: "#12349",
    student: "Ethan Parker",
    roll: "CE-401",
    title: "Structural Analysis",
    dueDate: "2024-07-25",
    days: "65 Days Overdue",
    status: "Overdue",
  },
];

const getStatusStyles = (status) => {
  switch (status) {
    case "Overdue":
      return "bg-red-100 text-red-700";
    case "Due Soon":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const PendingReturns = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Clock className="w-8 h-8 text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-900">Pending Returns</h1>
      </div>

      <h2 className="text-xl font-semibold text-gray-900">
        Manage Pending & Overdue Books
      </h2>
      <p className="mt-1 text-gray-500 mb-6">
        Review books that are past their due date or are due shortly.
      </p>

      {/* Action and Filter Summary */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <span className="text-lg font-medium text-gray-800">
            {pendingData.filter((d) => d.status === "Overdue").length} Books are
            currently **Overdue**
          </span>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition duration-150">
          <Send className="w-5 h-5" />
          <span>Send Bulk Reminder</span>
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Issue ID",
                  "Student Name",
                  "Roll No",
                  "Book Title",
                  "Due Date",
                  "Days/Status",
                  "Action",
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
              {pendingData.map((row) => (
                <tr key={row.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
                    {row.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {row.student}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.roll}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.title}
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
                      {row.days}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      title="Send Reminder"
                      className="text-purple-600 hover:text-purple-800 transition"
                    >
                      <Send className="w-5 h-5" />
                    </button>
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

export default PendingReturns;
