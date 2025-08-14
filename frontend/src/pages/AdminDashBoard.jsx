// src/pages/AdminDashboard.jsx
import Sidebar from "../components/SideBar";
import Topbar from "../components/TopBar";
import StatCard from "../components/StatCard";
import DashboardChart from "../components/DashBoardChart";
import { Users, BookOpen, Calendar, Monitor } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
    

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
   
        {/* Stat Cards */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Students" 
            value="150" 
            gradient="bg-gradient-to-r from-blue-500 to-blue-700" 
            icon={<Users />} 
          />
          <StatCard 
            title="Total Staff" 
            value="20" 
            gradient="bg-gradient-to-r from-green-500 to-green-700" 
            icon={<Monitor />} 
          />
          <StatCard 
            title="Books in Library" 
            value="1200" 
            gradient="bg-gradient-to-r from-purple-500 to-purple-700" 
            icon={<BookOpen />} 
          />
          <StatCard 
            title="Events" 
            value="8" 
            gradient="bg-gradient-to-r from-pink-500 to-pink-700" 
            icon={<Calendar />} 
          />
        </div>

        {/* Chart */}
        <div className="p-6">
          <DashboardChart />
        </div>
      </div>
    </div>
  );
}
