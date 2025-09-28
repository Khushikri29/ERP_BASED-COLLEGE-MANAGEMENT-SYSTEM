// src/pages/Notifications.jsx
import React from "react";
import {
  Bell,
  Clock,
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Mail,
} from "lucide-react";

// Dummy data for notifications
const notificationsData = [
  {
    type: "alert",
    icon: AlertTriangle,
    color: "text-red-600",
    text: "3 books marked as Overdue today. Send reminders immediately.",
    time: "5 mins ago",
  },
  {
    type: "reminder",
    icon: Mail,
    color: "text-yellow-600",
    text: "Reminder: The monthly inventory audit is scheduled for Friday.",
    time: "1 hour ago",
  },
  {
    type: "issued",
    icon: BookOpen,
    color: "text-blue-600",
    text: 'Liam Carter was issued "The Enigma Code" (ID: #12345).',
    time: "3 hours ago",
  },
  {
    type: "returned",
    icon: CheckCircle,
    color: "text-green-600",
    text: 'Olivia Bennett returned "Quantum Computing" successfully.',
    time: "Yesterday",
  },
  {
    type: "issued",
    icon: BookOpen,
    color: "text-blue-600",
    text: 'A new book, "Deep Learning," has been added to the CS category.',
    time: "2 days ago",
  },
];

const Notifications = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Bell className="w-8 h-8 text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
      </div>

      <h2 className="text-xl font-semibold text-gray-900">
        Your Activity Feed
      </h2>
      <p className="mt-1 text-gray-500 mb-6">
        Review recent alerts, system updates, and reminders.
      </p>

      {/* Main Notification Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex justify-between items-center pb-4 border-b">
          <h3 className="text-lg font-medium text-gray-800">
            Recent Notifications
          </h3>
          <button className="text-sm font-medium text-purple-600 hover:text-purple-800">
            Mark all as read
          </button>
        </div>

        {/* Notifications List */}
        <ul className="divide-y divide-gray-200">
          {notificationsData.map((note, index) => (
            <li
              key={index}
              className="py-4 hover:bg-gray-50 transition duration-100 px-2 -mx-2 rounded-lg"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${note.color} bg-opacity-10`}
                  style={{ backgroundColor: `${note.color}10` }}
                >
                  <note.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-800">{note.text}</p>
                  <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1">
                    <Clock className="w-3 h-3" />
                    <span>{note.time}</span>
                  </div>
                </div>
                <button className="flex-shrink-0 text-xs text-purple-600 hover:text-purple-800 font-medium">
                  View
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 text-center">
          <button className="text-sm font-medium text-gray-600 hover:text-purple-600">
            Load More Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
