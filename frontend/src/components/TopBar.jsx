import { Menu, Bell, Search, User } from "lucide-react";

export default function Topbar({ setSidebarOpen }) {
  return (
    <div className="bg-white border-b shadow-sm p-4 flex items-center justify-between">
      
      {/* Left - Mobile menu button */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
        <h2 className=" text-2xl font-bold text-gray-800 hidden sm:block">Library Management System</h2>
      </div>

      {/* Center - Search Bar */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-1 w-96">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search books, students..."
          className="bg-transparent outline-none px-2 w-full text-sm"
        />
      </div>

      {/* Right - Notifications & Profile */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
          <User size={20} />
          <span className="hidden sm:block text-sm font-medium">Admin</span>
        </div>
      </div>
    </div>
  );
}
