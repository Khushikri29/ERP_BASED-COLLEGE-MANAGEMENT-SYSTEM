// src/pages/StudentDropout.jsx
import React from "react";
import {
  EnvelopeIcon,
  EyeIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";

// Dummy data for the table
const studentData = [
  {
    roll: "2022CS101",
    name: "Rohan Sharma",
    branch: "Computer Science",
    semester: "4th",
    attendance: "65%",
    lastExam: "58%",
    risk: "High Risk",
  },
  {
    roll: "2022EC205",
    name: "Priya Singh",
    branch: "Electronics",
    semester: "4th",
    attendance: "78%",
    lastExam: "72%",
    risk: "Medium Risk",
  },
  {
    roll: "2022ME310",
    name: "Amit Kumar",
    branch: "Mechanical",
    semester: "4th",
    attendance: "92%",
    lastExam: "85%",
    risk: "Low Risk",
  },
  {
    roll: "2022CS115",
    name: "Anjali Gupta",
    branch: "Computer Science",
    semester: "4th",
    attendance: "71%",
    lastExam: "65%",
    risk: "Medium Risk",
  },
  {
    roll: "2022EE401",
    name: "Vikram Rathod",
    branch: "Electrical",
    semester: "4th",
    attendance: "62%",
    lastExam: "49%",
    risk: "High Risk",
  },
];

// Helper function to get risk badge styling
const getRiskStyles = (risk) => {
  switch (risk) {
    case "High Risk":
      return "bg-red-100 text-red-700 ring-red-600/20";
    case "Medium Risk":
      return "bg-yellow-100 text-yellow-700 ring-yellow-600/20";
    case "Low Risk":
    default:
      return "bg-green-100 text-green-700 ring-green-600/20";
  }
};

const StudentDropout = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <ArrowDownCircleIcon className="w-8 h-8 text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-900">
          Student Dropout Prediction
        </h1>
        <span className="ml-4 px-3 py-1 text-xs font-semibold text-white bg-purple-600 rounded-full">
          AI/ML
        </span>
      </div>

      <p className="mt-1 text-gray-500 text-lg">
        Monitor and take action on students at risk of dropping out.
      </p>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Level Distribution Chart (Placeholder) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Risk Level Distribution
          </h2>
          {/* Placeholder for Pie Chart */}
          <img
            src="/path/to/3.jpg_risk_chart" // This should be replaced with an actual charting library component (like Chart.js/Recharts)
            alt="Risk Distribution Chart"
            className="w-full h-64 object-contain"
          />
        </div>

        {/* Branch-wise Dropout Risk Chart (Placeholder) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Branch-wise Dropout Risk
          </h2>
          {/* Placeholder for Bar Chart */}
          <img
            src="/path/to/3.jpg_branch_chart" // This should be replaced with an actual charting library component
            alt="Branch Dropout Risk Chart"
            className="w-full h-64 object-contain"
          />
        </div>
      </div>

      {/* Action Alert */}
      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg shadow">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.328a1.5 1.5 0 012.486 0l5.5 9.5A1.5 1.5 0 0115 15.75H5a1.5 1.5 0 01-1.243-2.922l5.5-9.5zM10 16.5a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-lg font-medium text-red-800">
              Immediate Action Needed
            </p>
            <p className="text-sm text-red-700">
              <strong className="font-semibold">
                12 Students at High Risk
              </strong>{" "}
              – Please review their profiles and take necessary actions.
            </p>
          </div>
        </div>
      </div>

      {/* Student List Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        {/* Filters */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-grow">
            <input
              type="text"
              className="w-full rounded-md border-gray-300 pl-4 pr-10 py-2 text-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="Search by Student Name / Roll No"
            />
          </div>
          <select className="rounded-md border-gray-300 py-2 text-sm focus:border-purple-500 focus:ring-purple-500">
            <option>Branch</option>
          </select>
          <select className="rounded-md border-gray-300 py-2 text-sm focus:border-purple-500 focus:ring-purple-500">
            <option>Semester / Year</option>
          </select>
          <select className="rounded-md border-gray-300 py-2 text-sm focus:border-purple-500 focus:ring-purple-500">
            <option>Risk Level</option>
          </select>
          <button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition duration-150">
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
                  "Semester",
                  "Attendance %",
                  "Last Exam Marks",
                  "Risk Level",
                  "Actions",
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
              {studentData.map((row) => (
                <tr key={row.roll}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.roll}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-600 font-semibold">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.branch}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.semester}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.attendance}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.lastExam}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${getRiskStyles(
                        row.risk
                      )}`}
                    >
                      {row.risk}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-3">
                      <button
                        title="Contact Student"
                        className="text-gray-400 hover:text-purple-600 transition"
                      >
                        <EnvelopeIcon className="w-5 h-5" />
                      </button>
                      <button
                        title="View Profile"
                        className="text-gray-400 hover:text-purple-600 transition"
                      >
                        <EyeIcon className="w-5 h-5" />
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

export default StudentDropout;
