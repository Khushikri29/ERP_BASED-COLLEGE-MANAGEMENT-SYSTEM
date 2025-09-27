// src/pages/ApproveStudents.jsx
import React from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// Dummy data for the table
const studentApprovals = [
  {
    roll: "2023CS001",
    name: "Ethan Carter",
    branch: "Computer Science",
    year: "1st",
    registrationDate: "2023-08-15",
    status: "Pending",
  },
  {
    roll: "2023EC002",
    name: "Olivia Bennett",
    branch: "Electronics",
    year: "1st",
    registrationDate: "2023-08-16",
    status: "Pending",
  },
  {
    roll: "2023ME003",
    name: "Noah Thompson",
    branch: "Mechanical",
    year: "1st",
    registrationDate: "2023-08-17",
    status: "Pending",
  },
  {
    roll: "2023CE004",
    name: "Ava Rodriguez",
    branch: "Civil",
    year: "1st",
    registrationDate: "2023-08-18",
    status: "Pending",
  },
  {
    roll: "2023EE005",
    name: "Liam Walker",
    branch: "Electrical",
    year: "1st",
    registrationDate: "2023-08-19",
    status: "Pending",
  },
];

const ApproveStudents = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <CheckCircleIcon className="w-8 h-8 text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-900">Student Approvals</h1>
      </div>

      <h2 className="text-xl font-semibold text-gray-900">
        Pending Student Approvals
      </h2>
      <p className="mt-1 text-gray-500 mb-6">
        Review and approve newly registered or updated student records.
      </p>

      {/* Main Content Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 pl-10 pr-4 py-3 text-base focus:border-purple-500 focus:ring-purple-500"
              placeholder="Search by Student Name / Roll No / ID"
            />
          </div>
        </div>

        {/* Filters and Button */}
        <div className="flex items-center space-x-4 mb-8">
          <select className="flex-1 rounded-md border-gray-300 py-2.5 text-sm focus:border-purple-500 focus:ring-purple-500">
            <option>Select Branch</option>
          </select>
          <select className="flex-1 rounded-md border-gray-300 py-2.5 text-sm focus:border-purple-500 focus:ring-purple-500">
            <option>Select Year/Semester</option>
          </select>
          <select className="flex-1 rounded-md border-gray-300 py-2.5 text-sm focus:border-purple-500 focus:ring-purple-500">
            <option>Approval Status</option>
          </select>
          <button className="px-6 py-2.5 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition duration-150 flex-shrink-0">
            Apply Filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Roll No",
                  "Student Name",
                  "Branch",
                  "Year",
                  "Registration Date",
                  "Status",
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
              {studentApprovals.map((row) => (
                <tr key={row.roll}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.roll}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.branch}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.year}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.registrationDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700">
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-3">
                      <button
                        title="Approve"
                        className="text-green-500 hover:text-green-700 transition"
                      >
                        <CheckCircleIcon className="w-6 h-6" />
                      </button>
                      <button
                        title="Reject"
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <XCircleIcon className="w-6 h-6" />
                      </button>
                    </div>
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

export default ApproveStudents;
