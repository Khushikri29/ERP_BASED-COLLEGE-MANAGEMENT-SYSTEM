// src/pages/Profile.jsx
import React from "react";
import { Download, Pencil } from "lucide-react";

const Profile = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-semibold text-gray-900">My Profile</h1>
        </div>
        <p className="text-gray-500">Welcome, Evelyn Reed</p>
      </div>

      <p className="mt-1 text-gray-500 text-lg">
        View and update your personal details here.
      </p>

      {/* Main Profile Card */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        {/* Profile Header and Actions */}
        <div className="flex justify-between items-center pb-6 border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="relative">
              {/* Placeholder for Profile Image */}
              <img
                src="https://i.pravatar.cc/150?img=1"
                alt="Evelyn Reed"
                className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
              />
              {/* Pencil Icon Badge */}
              <button className="absolute bottom-0 right-0 p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition duration-150">
                <Pencil className="w-4 h-4" />
              </button>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Evelyn Reed</h2>
              <p className="text-sm text-gray-600">Employee ID: LIB-00123</p>
              <p className="text-sm text-gray-600">
                Senior Librarian, Department of Computer Science
              </p>
            </div>
          </div>

          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition duration-150">
              <span>Change Photo</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition duration-150">
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Detailed Information Section */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Detailed Information
            </h3>
            <span className="text-xs text-gray-500">
              Last Updated on: 24 Jul, 2024
            </span>
          </div>

          {/* Personal Details */}
          <h4 className="text-lg font-medium text-gray-800 mb-4 border-b pb-2">
            Personal Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-8">
            {/* Full Name */}
            <div>
              <label
                htmlFor="full-name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                defaultValue="Evelyn Reed"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Gender */}
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <input
                type="text"
                id="gender"
                defaultValue="Female"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="text"
                id="dob"
                defaultValue="15th June, 1985"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="contact"
                defaultValue="+1 234 567 890"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Email Address */}
            <div className="md:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                defaultValue="evelyn.reed@university.edu"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <textarea
                id="address"
                rows="3"
                defaultValue="123 University Avenue, College Town, USA"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
              ></textarea>
            </div>
          </div>

          {/* Professional Details */}
          <h4 className="text-lg font-medium text-gray-800 mb-4 border-b pb-2">
            Professional Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {/* Employee ID (Read-only for most users) */}
            <div>
              <label
                htmlFor="employee-id"
                className="block text-sm font-medium text-gray-700"
              >
                Employee ID
              </label>
              <input
                type="text"
                id="employee-id"
                defaultValue="LIB-00123"
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base bg-gray-50 text-gray-600"
              />
            </div>

            {/* Joining Date */}
            <div>
              <label
                htmlFor="joining-date"
                className="block text-sm font-medium text-gray-700"
              >
                Joining Date
              </label>
              <input
                type="text"
                id="joining-date"
                defaultValue="1st August, 2010"
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base bg-gray-50 text-gray-600"
              />
            </div>

            {/* Department */}
            <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-700"
              >
                Department
              </label>
              <input
                type="text"
                id="department"
                defaultValue="Department of Computer Science"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Designation */}
            <div>
              <label
                htmlFor="designation"
                className="block text-sm font-medium text-gray-700"
              >
                Designation
              </label>
              <input
                type="text"
                id="designation"
                defaultValue="Senior Librarian"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex justify-end space-x-4 border-t pt-6">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
