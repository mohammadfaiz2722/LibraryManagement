import { useState } from "react";
import { Bell, AlertTriangle, CheckCircle, Info, X } from "lucide-react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
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
  ]);

  const handleMarkAsRead = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Bell size={24} className="text-indigo-600" /> Notifications
      </h1>

      <div className="bg-white shadow-lg rounded-xl divide-y">
        {notifications.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <p className="text-lg">No notifications available.</p>
            <p className="text-sm mt-2">You're all caught up!</p>
          </div>
        ) : (
          notifications.map((n) => (
            <div
              key={n.id}
              className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-all duration-200"
            >
              {/* Icon */}
              <div className="mt-1">{n.icon}</div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-gray-800 text-sm sm:text-base">{n.message}</p>
                <span className="text-xs text-gray-500">{n.time}</span>
              </div>

              {/* Mark as Read Button */}
              <button
                onClick={() => handleMarkAsRead(n.id)}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                title="Mark as Read"
              >
                <X size={16} className="text-indigo-600" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}