// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/AdminDashBoard";
import Notifications from "./pages/Notification";
import ManageStudents from "./pages/ManageStudents"; // ✅ import new page
import Sidebar from "./components/SideBar";
import Topbar from "./components/TopBar";
import { useState } from "react";
import ManageStaff from "./pages/ManageStaff";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ManageMembershipPlans from "./pages/MemberShipPlans";

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
              <Route path="/manage-staff" element={<ManageStaff />} /> {/* ✅ new route */}
              <Route path="/login" element={<Login />} /> {/* ✅ new route */}
              <Route path="signup" element={<Signup />} /> {/* ✅ new route */}
              <Route path="forgotpassword" element={<ForgotPassword />} /> {/* ✅ new route */}
              <Route path="membership" element={<ManageMembershipPlans />} /> {/* ✅ new route */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
