// src/pages/DashboardOverview.jsx
import React from "react";
import {
  UserGroupIcon,
  BookOpenIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

// Dummy data
const recentApprovals = [
  { student: "Rohan Sharma", course: "B.Tech CS", date: "2023-10-26" },
  { student: "Priya Patel", course: "B.Tech IT", date: "2023-10-25" },
  { student: "Sameer Ali", course: "M.Tech CS", date: "2023-10-24" },
];

const DashboardOverview = ({ setCurrentPage }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        {/* Placeholder for HOD Dashboard Icon */}
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
          <UserGroupIcon className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">
          HOD Dashboard Overview
        </h1>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Students */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <UserGroupIcon className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Students</p>
            <p className="text-3xl font-bold text-gray-900">1,256</p>
          </div>
        </div>

        {/* Courses Managed */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <BookOpenIcon className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Courses Managed</p>
            <p className="text-3xl font-bold text-gray-900">48</p>
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
            <ClockIcon className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">
              Pending Approvals
            </p>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </div>
        </div>

        {/* Dropout Alerts */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600">
            <ExclamationTriangleIcon className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Dropout Alerts</p>
            <p className="text-3xl font-bold text-gray-900">3</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid: Recent Approvals + Prediction/Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Approvals (2/3 width) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Recent Approvals
          </h2>
          <div className="divide-y divide-gray-100">
            <div className="grid grid-cols-3 text-sm text-gray-500 font-medium pb-2 uppercase">
              <span>Student Name</span>
              <span>Course</span>
              <span>Date</span>
            </div>
            {recentApprovals.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 py-4 text-gray-700 hover:bg-gray-50 transition duration-100"
              >
                <span className="font-medium">{item.student}</span>
                <span>{item.course}</span>
                <span>{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dropout Prediction & Quick Actions (1/3 width) */}
        <div className="lg:col-span-1 space-y-6">
          {/* Dropout Prediction */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Dropout Prediction
              </h2>
              <span className="px-3 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full">
                Alert
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-2">
              Risk level this semester
            </p>

            {/* Progress Bar (Placeholder for visual) */}
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div></div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-red-200 text-red-600">
                    High Risk
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                {/* Red fill to represent high risk */}
                <div
                  style={{ width: "75%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                ></div>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage("StudentDropout")}
              className="flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 transition mt-4"
            >
              View detailed prediction{" "}
              <ChevronRightIcon className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Quick Actions
            </h2>
            <button
              onClick={() => setCurrentPage("VerifyResult")}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-purple-50 border border-purple-200 text-purple-600 font-semibold rounded-lg hover:bg-purple-100 transition duration-150"
            >
              <CheckBadgeIcon className="w-5 h-5" />
              <span>Verify Result</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
