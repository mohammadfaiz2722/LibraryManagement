import { LayoutDashboard, Bell, X, Users, Library } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar content */}
      <div
        className={`fixed md:sticky top-0 left-0 h-full md:h-screen w-64 bg-white shadow-xl p-6 
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:shadow-lg z-50`}
      >
        {/* Header section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Library size={28} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Quick Links</h1>
          </div>
          <button
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <Link
            to="/"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <LayoutDashboard size={20} className="text-gray-600" /> Dashboard
          </Link>
          <Link
            to="/manage-students"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <Users size={20} className="text-gray-600" /> Manage Students
          </Link>
          <Link
            to="/notifications"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <Bell size={20} className="text-gray-600" /> Notifications
          </Link>
        </nav>
      </div>
    </>
  );
}