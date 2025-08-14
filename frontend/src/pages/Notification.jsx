// src/pages/Notifications.jsx
import { Bell, AlertTriangle, CheckCircle, Info } from "lucide-react";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "info",
      message: "Your membership has been renewed successfully.",
      time: "2 hours ago",
      icon: <CheckCircle className="text-green-500" size={20} />,
    },
    {
      id: 2,
      type: "warning",
      message: "Seat booking system will be down for maintenance at 10 PM.",
      time: "5 hours ago",
      icon: <AlertTriangle className="text-yellow-500" size={20} />,
    },
    {
      id: 3,
      type: "info",
      message: "New books have arrived in the library!",
      time: "1 day ago",
      icon: <Info className="text-blue-500" size={20} />,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-700 mb-6 flex items-center gap-2">
        <Bell size={24} className="text-indigo-600" /> Notifications
      </h1>

      <div className="bg-white shadow rounded-lg divide-y">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="flex items-start gap-4 p-4 hover:bg-gray-50 transition"
          >
            {/* Icon */}
            <div className="mt-1">{n.icon}</div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-gray-800 text-sm">{n.message}</p>
              <span className="text-xs text-gray-500">{n.time}</span>
            </div>

            {/* Mark as Read Button */}
            <button className="text-xs text-indigo-600 hover:underline">
              Mark as Read
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
