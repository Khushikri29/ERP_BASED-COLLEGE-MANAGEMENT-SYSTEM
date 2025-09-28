// src/pages/IssueReturn.jsx
import React from "react";
import { BookOpen, Search, Calendar, Send, FileText } from "lucide-react";

// Dummy data for the table
const issuedBooks = [
  {
    id: "#12345",
    student: "John Doe",
    roll: "CS-101",
    title: "The Art of Programming",
    author: "Donald Knuth",
    issueDate: "2024-07-01",
    dueDate: "2024-07-15",
    status: "Issued",
  },
  {
    id: "#12346",
    student: "Jane Smith",
    roll: "ME-202",
    title: "Fundamentals of Physics",
    author: "Halliday, Resnick",
    issueDate: "2024-06-20",
    dueDate: "2024-07-04",
    status: "Overdue",
  },
  {
    id: "#12347",
    student: "Peter Jones",
    roll: "EE-301",
    title: "Circuit Analysis",
    author: "William Hayt",
    issueDate: "2024-07-10",
    dueDate: "2024-07-24",
    status: "Issued",
  },
  {
    id: "#12348",
    student: "Alice Williams",
    roll: "CS-102",
    title: "Data Structures in C++",
    author: "Yedidyah Langsam",
    issueDate: "2024-06-15",
    dueDate: "2024-06-29",
    status: "Returned",
  },
];

const getStatusStyles = (status) => {
  switch (status) {
    case "Issued":
      return "bg-blue-100 text-blue-700";
    case "Overdue":
      return "bg-red-100 text-red-700";
    case "Returned":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const IssueReturn = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <BookOpen className="w-8 h-8 text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-900">
          Issue / Return Books
        </h1>
      </div>

      <h2 className="text-xl font-semibold text-gray-900">
        Manage Book Issue & Return
      </h2>
      <p className="mt-1 text-gray-500 mb-6">
        Track issued books, process returns, and send reminders.
      </p>

      {/* Filters Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4 mb-4 items-end">
          {/* Search */}
          <div className="relative flex-grow">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="search"
              className="block w-full rounded-md border-gray-300 pl-10 pr-4 py-2.5 text-base focus:border-purple-500 focus:ring-purple-500"
              placeholder="Student Name / Roll No / All"
            />
          </div>

          {/* Branch / Class Filter */}
          <select className="md:w-48 rounded-md border-gray-300 py-2.5 text-sm focus:border-purple-500 focus:ring-purple-500">
            <option>All Branches</option>
            <option>CS</option>
            <option>ME</option>
            {/* Add more options */}
          </select>

          {/* Issue / Due Date Filter */}
          <div className="relative md:w-48">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 pr-10 pl-3 py-2.5 text-base focus:border-purple-500 focus:ring-purple-500"
              placeholder="mm/dd/yyyy"
            />
          </div>

          <button className="px-6 py-2.5 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition duration-150 flex-shrink-0">
            Apply Filter
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        {/* Bulk Actions */}
        <div className="flex justify-between items-center mb-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition duration-150">
            <Send className="w-5 h-5" />
            <span>Send Reminder</span>
          </button>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="selectAll"
              className="rounded text-purple-600 border-gray-300 focus:ring-purple-500"
            />
            <label
              htmlFor="selectAll"
              className="text-sm font-medium text-gray-700"
            >
              Select All
            </label>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 w-4"></th> {/* Checkbox Column */}
                {[
                  "Issue ID",
                  "Student Name",
                  "Roll No",
                  "Book Title",
                  "Author",
                  "Issue Date",
                  "Due Date",
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
              {issuedBooks.map((row) => (
                <tr key={row.id}>
                  <td className="p-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                  </td>
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.issueDate}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm font-semibold"
                    style={{
                      color: row.status === "Overdue" ? "#dc2626" : undefined,
                    }}
                  >
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-3">
                      {/* Return Icon */}
                      <button
                        title="Process Return"
                        className="text-green-500 hover:text-green-700 transition"
                      >
                        <FileText className="w-5 h-5" />
                      </button>
                      {/* Reminder Icon */}
                      <button
                        title="Send Reminder"
                        className="text-orange-500 hover:text-orange-700 transition"
                      >
                        <Send className="w-5 h-5" />
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

export default IssueReturn;
