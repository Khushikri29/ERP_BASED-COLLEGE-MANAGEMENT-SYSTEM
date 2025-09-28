// src/pages/AvailableBooks.jsx
import React from "react";
import {
  BookOpen,
  CheckCircle,
  Hourglass,
  XCircle,
  Download,
  Search,
} from "lucide-react";

// Dummy data
const inventoryMetrics = [
  {
    title: "Total Books",
    count: "12,543",
    icon: BookOpen,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Available Books",
    count: "9,871",
    icon: CheckCircle,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Issued Books",
    count: "2,512",
    icon: Hourglass,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Overdue Books",
    count: "160",
    icon: XCircle,
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
];

const categoryData = [
  {
    name: "Computer Science",
    total: "3,450",
    available: "2,800",
    issued: "650",
  },
  {
    name: "Mechanical Engineering",
    total: "2,100",
    available: "1,500",
    issued: "600",
  },
  { name: "Physics", total: "1,800", available: "1,650", issued: "150" },
  { name: "Literature", total: "2,500", available: "2,100", issued: "400" },
  { name: "Mathematics", total: "1,200", available: "950", issued: "250" },
];

const recentAdditions = [
  {
    id: "BK-9871",
    title: "AI: A Modern Approach",
    author: "Stuart Russell",
    category: "Computer Science",
    date: "2024-07-20",
    available: true,
  },
  {
    id: "BK-5432",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Literature",
    date: "2024-07-18",
    available: false,
  },
  {
    id: "BK-1123",
    title: "Clean Code",
    author: "Robert C Martin",
    category: "Computer Science",
    date: "2024-07-15",
    available: true,
  },
  {
    id: "BK-4589",
    title: "1984",
    author: "George Orwell",
    category: "Dystopian Fiction",
    date: "2024-07-12",
    available: false,
  },
];

const AvailableBooks = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <BookOpen className="w-8 h-8 text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-900">
          Available / Total Books
        </h1>
      </div>

      <h2 className="text-xl font-semibold text-gray-900">
        Library Inventory Overview
      </h2>
      <p className="mt-1 text-gray-500 mb-6">
        View total books, currently available books, and category-wise
        distribution.
      </p>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {inventoryMetrics.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-center space-x-4"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bgColor} ${item.iconColor}`}
            >
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{item.title}</p>
              <p className="text-2xl font-bold text-gray-900">{item.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Inventory Grid: Categories + Recent Additions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category-wise Book Count (1/3 width) */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Category-wise Book Count
          </h2>
          <div className="space-y-4">
            {categoryData.map((category, index) => (
              <div key={index}>
                <p className="text-base font-medium text-gray-900">
                  {category.name}
                </p>
                <div className="flex justify-between text-sm text-gray-500 mt-0.5">
                  <span>
                    {category.total} / {category.available}
                  </span>
                  <span className="text-purple-600 font-semibold">
                    {category.issued}
                  </span>
                </div>
                {/* Simple Bar for visual representation (optional) */}
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div
                    className="bg-green-600 h-1.5 rounded-full"
                    style={{
                      width: `${
                        (parseFloat(category.available.replace(",", "")) /
                          parseFloat(category.total.replace(",", ""))) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="pt-4 border-t mt-4 text-xs text-gray-500">
              <span>
                Total / Available |{" "}
                <span className="text-purple-600">Issued</span>
              </span>
            </div>
          </div>
        </div>

        {/* Recent Additions / Updates (2/3 width) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Recent Additions / Updates
            </h2>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Book, Author..."
                  className="pl-9 py-2 border border-gray-300 rounded-md text-sm focus:ring-purple-500 focus:border-purple-500 w-48"
                />
              </div>
              <select className="py-2 border border-gray-300 rounded-md text-sm focus:ring-purple-500 focus:border-purple-500">
                <option>All Categories</option>
              </select>
              <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition duration-150">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {[
                    "BOOK ID",
                    "TITLE",
                    "AUTHOR",
                    "CATEGORY",
                    "ADDED DATE",
                    "AVAILABILITY",
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
                {recentAdditions.map((row) => (
                  <tr key={row.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {row.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div
                        className={`w-5 h-5 rounded-full mx-auto ${
                          row.available ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {row.available ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : (
                          <XCircle className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableBooks;
