// src/pages/CreateCourse.jsx
import React from "react";
import { CloudArrowUpIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const CreateCourse = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <BookOpenIcon className="w-8 h-8 text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-900">
          Create a New Course
        </h1>
      </div>

      <p className="mt-1 text-gray-500 mb-6">
        Add a new course to the curriculum and assign faculty.
      </p>

      {/* Main Form Card */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {/* Course Code */}
          <div>
            <label
              htmlFor="course-code"
              className="block text-sm font-medium text-gray-700"
            >
              Course Code
            </label>
            <input
              type="text"
              id="course-code"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
              placeholder="e.g., CS101"
            />
          </div>

          {/* Course Name */}
          <div>
            <label
              htmlFor="course-name"
              className="block text-sm font-medium text-gray-700"
            >
              Course Name
            </label>
            <input
              type="text"
              id="course-name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
              placeholder="e.g., Introduction to Programming"
            />
          </div>

          {/* Credits */}
          <div>
            <label
              htmlFor="credits"
              className="block text-sm font-medium text-gray-700"
            >
              Credits
            </label>
            <input
              type="number"
              id="credits"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
              placeholder="e.g., 3"
            />
          </div>

          {/* Semester */}
          <div>
            <label
              htmlFor="semester"
              className="block text-sm font-medium text-gray-700"
            >
              Semester
            </label>
            <select
              id="semester"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2.5 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
            >
              <option>Select Semester</option>
              <option>1st</option>
              <option>2nd</option>
              {/* Add more options */}
            </select>
          </div>

          {/* Department / Branch (Full width for better alignment) */}
          <div className="md:col-span-2">
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department / Branch
            </label>
            <select
              id="department"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2.5 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
            >
              <option>Select Department</option>
              <option>Computer Science (CSE)</option>
              <option>Electronics (ECE)</option>
              {/* Add more options */}
            </select>
          </div>

          {/* Assigned Faculty (Full width for consistency) */}
          <div className="md:col-span-2">
            <label
              htmlFor="faculty"
              className="block text-sm font-medium text-gray-700"
            >
              Assigned Faculty
            </label>
            <input
              type="text"
              id="faculty"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
              placeholder="Start typing faculty name..."
            />
          </div>

          {/* Description (Full width) */}
          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-base focus:border-purple-500 focus:ring-purple-500"
              placeholder="A brief description of the course..."
            ></textarea>
          </div>

          {/* Attach Syllabus (Full width) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Attach Syllabus (PDF)
            </label>
            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
              <div className="space-y-1 text-center">
                <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-purple-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 hover:text-purple-500"
                  >
                    <span>Upload a file or drag and drop</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".pdf"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">PDF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end space-x-4 border-t pt-6">
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
            Save Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
