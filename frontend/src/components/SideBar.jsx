import { LayoutDashboard, Bell, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden transition ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar content */}
      <div
        className={`fixed md:sticky top-0 left-0 h-full md:h-screen w-64 bg-white shadow-lg p-4 
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:shadow-none`}
      >
        {/* Close button for mobile */}
        <div className="flex justify-between items-center md:hidden mb-4">
          <h1 className="text-xl font-bold">Library System</h1>
          <X
            size={24}
            className="cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        {/* Navigation */}
     <nav className="space-y-4">
  <Link
    to="/"
    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
  >
    <LayoutDashboard size={20} /> Dashboard
  </Link>
  <Link
    to="/manage-students"
    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
  >
    📚 Manage Students
  </Link>
  <Link
    to="/notifications"
    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
  >
    <Bell size={20} /> Notifications
  </Link>
</nav>

      </div>
    </>
  );
}
