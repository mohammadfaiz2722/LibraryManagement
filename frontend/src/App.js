// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/AdminDashBoard";
import Notifications from "./pages/Notification";
import ManageStudents from "./pages/ManageStudents"; // ✅ import new page
import Sidebar from "./components/SideBar";
import Topbar from "./components/TopBar";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <Topbar setSidebarOpen={setSidebarOpen} />
          <main className="p-4 sm:p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/manage-students" element={<ManageStudents />} /> {/* ✅ new route */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
