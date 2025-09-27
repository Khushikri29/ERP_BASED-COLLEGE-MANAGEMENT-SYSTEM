// src/pages/VerifyResults.jsx
import React from "react";
import {
  MagnifyingGlassIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const resultsData = [
  {
    roll: "CS10123",
    name: "John Doe",
    branch: "CSE",
    semester: 5,
    course: "Data Structure",
  },
  {
    roll: "EC10124",
    name: "Jane Smith",
    branch: "ECE",
    semester: 3,
    course: "Analog Circuit",
  },
  {
    roll: "ME10125",
    name: "Peter Jones",
    branch: "ME",
    semester: 7,
    course: "Thermodynarr",
  },
  {
    roll: "CS10126",
    name: "Susan Lee",
    branch: "CSE",
    semester: 5,
    course: "Algorithms",
  },
  {
    roll: "EE10127",
    name: "David Chen",
    branch: "EEE",
    semester: 3,
    course: "Power System",
  },
];

const VerifyResults = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">
        Pending Result Verification
      </h1>
      <p className="mt-1 text-gray-500 mb-6">
        Review and approve student exam results.
      </p>

      <div className="flex gap-6">
        {/* Left Column: Filters and Table */}
        <div className="flex-grow bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          {/* Filters */}
          <div className="grid grid-cols-5 gap-4 mb-6 items-end">
            <div className="col-span-2">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700"
              >
                Search
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="search"
                  className="block w-full rounded-md border-gray-300 pl-10 pr-4 py-2 text-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Student Name / Roll No / Course"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="branch"
                className="block text-sm font-medium text-gray-700"
              >
                Branch
              </label>
              <select
                id="branch"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-purple-500 focus:ring-purple-500"
              >
                <option>All</option>
                {/* ... other options */}
              </select>
            </div>
            <div>
              <label
                htmlFor="semester"
                className="block text-sm font-medium text-gray-700"
              >
                Semester/Year
              </label>
              <select
                id="semester"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-purple-500 focus:ring-purple-500"
              >
                <option>All</option>
                {/* ... other options */}
              </select>
            </div>

            <div className="flex-shrink-0">
              <label
                htmlFor="examType"
                className="block text-sm font-medium text-gray-700"
              >
                Exam Type
              </label>
              <select
                id="examType"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-purple-500 focus:ring-purple-500"
              >
                <option>All</option>
                {/* ... other options */}
              </select>
            </div>
          </div>
          <div className="flex justify-end mb-6">
            <button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition duration-150">
              Apply Filter
            </button>
          </div>

          {/* Results Table */}
          <h2 className="text-xl font-medium text-gray-900 mb-4">Results</h2>

          <div className="flex justify-end space-x-3 mb-4">
            <button className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-150 flex items-center">
              <CheckIcon className="w-5 h-5 mr-1" /> Bulk Approve
            </button>
            <button className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-150 flex items-center">
              <XMarkIcon className="w-5 h-5 mr-1" /> Bulk Reject
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4">
                    <input
                      type="checkbox"
                      className="rounded text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                  </th>
                  {[
                    "ROLL NO",
                    "STUDENT NAME",
                    "BRANCH",
                    "SEMESTER",
                    "COURSE",
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
                {resultsData.map((row) => (
                  <tr key={row.roll}>
                    <td className="p-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="rounded text-purple-600 border-gray-300 focus:ring-purple-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.roll}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.branch}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.semester}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.course}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Summary */}
        <div className="w-80 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">
                  Total Results Pending
                </span>
                <span className="text-xl font-bold text-yellow-600">3</span>
                <div className="w-6 h-6 rounded-full bg-yellow-200 flex items-center justify-center text-yellow-600">
                  💡
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">
                  Total Approved
                </span>
                <span className="text-xl font-bold text-green-600">1</span>
                <CheckIcon className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">
                  Total Rejected
                </span>
                <span className="text-xl font-bold text-red-600">1</span>
                <XMarkIcon className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Branch-wise Pending Results
            </h3>
            <ul className="space-y-2">
              {[
                "Computer Science (CSE)",
                "Electronics (ECE)",
                "Mechanical (ME)",
              ].map((branch, index) => (
                <li key={branch} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{branch}</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                    {1}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyResults;
