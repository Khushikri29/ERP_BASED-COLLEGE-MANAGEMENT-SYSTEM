// src/pages/UpdateStudent.jsx
import React from "react";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

// Dummy data for the table
const studentRecords = [
  {
    name: "Liam Harper",
    roll: "2021CS001",
    branch: "Computer Science",
    year: "2nd",
    semester: "4th",
  },
  {
    name: "Olivia Bennett",
    roll: "2021EC002",
    branch: "Electronics",
    year: "2nd",
    semester: "4th",
  },
  {
    name: "Noah Carter",
    roll: "2022ME003",
    branch: "Mechanical",
    year: "1st",
    semester: "2nd",
  },
  {
    name: "Ava Morgan",
    roll: "2022EE004",
    branch: "Electrical",
    year: "1st",
    semester: "2nd",
  },
  {
    name: "Ethan Parker",
    roll: "2023CE005",
    branch: "Civil",
    year: "1st",
    semester: "1st",
  },
];

const UpdateStudent = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <PencilSquareIcon className="w-8 h-8 text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-900">
          Update Student Details
        </h1>
      </div>

      <h2 className="text-xl font-semibold text-gray-900">
        Update Student Records
      </h2>
      <p className="mt-1 text-gray-500 mb-6">
        Edit and save student personal and academic details.
      </p>

      {/* Main Content Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative flex-grow">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 pl-10 pr-4 py-2.5 text-base focus:border-purple-500 focus:ring-purple-500"
              placeholder="Student Name / Roll No / ID"
            />
          </div>

          {/* Filters */}
          <select className="md:w-56 rounded-md border-gray-300 py-2.5 text-sm focus:border-purple-500 focus:ring-purple-500">
            <option>Select Branch</option>
          </select>
          <select className="md:w-56 rounded-md border-gray-300 py-2.5 text-sm focus:border-purple-500 focus:ring-purple-500">
            <option>Select Year / Semester</option>
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
                  "Student Name",
                  "Roll No",
                  "Branch",
                  "Year",
                  "Semester",
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
              {studentRecords.map((row) => (
                <tr key={row.roll}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {row.roll}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.branch}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.year}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.semester}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-purple-600 hover:text-purple-800 font-semibold transition">
                      Edit
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

export default UpdateStudent;
