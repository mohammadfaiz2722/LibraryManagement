import Sidebar from "../components/SideBar";
import Topbar from "../components/TopBar";
import StatCard from "../components/StatCard";
import DashboardChart from "../components/DashBoardChart";
import { Users, BookOpen, Calendar, Monitor } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div>
      {/* Sidebar */}
     

      {/* Main Section */}
      <div >
        {/* Topbar */}
        {/* <Topbar className="sticky top-0 bg-white shadow-md z-10" /> */}

        {/* Stat Cards */}
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Students" 
            value="150" 
            gradient="bg-gradient-to-r from-blue-600 to-blue-800" 
            icon={<Users className="w-8 h-8 text-white" />}
            className="transform hover:scale-105 transition-transform duration-200 shadow-lg rounded-xl"
          />
          <StatCard 
            title="Total Staff" 
            value="20" 
            gradient="bg-gradient-to-r from-green-600 to-green-800" 
            icon={<Monitor className="w-8 h-8 text-white" />}
            className="transform hover:scale-105 transition-transform duration-200 shadow-lg rounded-xl"
          />
          <StatCard 
            title="Books in Library" 
            value="1200" 
            gradient="bg-gradient-to-r from-purple-600 to-purple-800" 
            icon={<BookOpen className="w-8 h-8 text-white" />}
            className="transform hover:scale-105 transition-transform duration-200 shadow-lg rounded-xl"
          />
          <StatCard 
            title="Events" 
            value="8" 
            gradient="bg-gradient-to-r from-pink-600 to-pink-800" 
            icon={<Calendar className="w-8 h-8 text-white" />}
            className="transform hover:scale-105 transition-transform duration-200 shadow-lg rounded-xl"
          />
        </div>

        {/* Chart */}
        <div className="p-8 bg-white mx-8 mb-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Performance Overview</h2>
          <DashboardChart className="w-full h-96" />
        </div>
      </div>
    </div>
  );
}