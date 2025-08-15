import React, { useState } from "react";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";

const ManageStaff = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const staffList = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "9876543210", role: "Librarian" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9876541230", role: "Assistant" },
  ];

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) errors.email = "Valid email is required";
    if (!formData.phone.match(/^\d{10}$/)) errors.phone = "Valid 10-digit phone number is required";
    if (!formData.role) errors.role = "Role is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData); // Replace with actual submission logic
      setIsModalOpen(false);
      setFormData({ name: "", email: "", phone: "", role: "" });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const filteredStaff = staffList.filter(
    (staff) =>
      staff.name.toLowerCase().includes(search.toLowerCase()) ||
      staff.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0 text-gray-800">Manage Staff</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          <Plus className="w-5 h-5 mr-2" /> Add Staff
        </button>
      </div>

      {/* Search */}
      <div className="relative flex items-center bg-white rounded-lg shadow p-2 mb-6 max-w-md">
        <Search className="w-5 h-5 text-gray-400 absolute left-3" />
        <input
          type="text"
          placeholder="Search staff by name or email..."
          className="flex-1 pl-10 pr-4 py-2 border-none rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search staff"
        />
      </div>

      {/* Staff Table (Desktop) */}
      <div className="hidden md:block overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4 text-left font-semibold">Name</th>
              <th className="p-4 text-left font-semibold">Email</th>
              <th className="p-4 text-left font-semibold">Phone</th>
              <th className="p-4 text-left font-semibold">Role</th>
              <th className="p-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStaff.map((staff) => (
              <tr key={staff.id} className="border-t hover:bg-gray-50 transition">
                <td className="p-4">{staff.name}</td>
                <td className="p-4">{staff.email}</td>
                <td className="p-4">{staff.phone}</td>
                <td className="p-4">{staff.role}</td>
                <td className="p-4 flex justify-center gap-3">
                  <button
                    className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    aria-label={`Edit ${staff.name}`}
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                    aria-label={`Delete ${staff.name}`}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Staff Cards (Mobile) */}
      <div className="space-y-4 md:hidden">
        {filteredStaff.map((staff) => (
          <div key={staff.id} className="bg-white rounded-lg shadow p-4">
            <p className="font-semibold text-gray-800">{staff.name}</p>
            <p className="text-sm text-gray-600">{staff.email}</p>
            <p className="text-sm text-gray-600">{staff.phone}</p>
            <p className="text-sm font-medium text-gray-800 mt-1">{staff.role}</p>
            <div className="flex gap-3 mt-3">
              <button
                className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                aria-label={`Edit ${staff.name}`}
              >
                <Pencil size={18} />
              </button>
              <button
                className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                aria-label={`Delete ${staff.name}`}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Staff Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Add Staff</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                    formErrors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-invalid={!!formErrors.name}
                  aria-describedby={formErrors.name ? "name-error" : undefined}
                />
                {formErrors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-invalid={!!formErrors.email}
                  aria-describedby={formErrors.email ? "email-error" : undefined}
                />
                {formErrors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (10 digits)"
                  className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                    formErrors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.phone}
                  onChange={handleInputChange}
                  aria-invalid={!!formErrors.phone}
                  aria-describedby={formErrors.phone ? "phone-error" : undefined}
                />
                {formErrors.phone && (
                  <p id="phone-error" className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                )}
              </div>
              <div>
                <select
                  name="role"
                  className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none appearance-none bg-white bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 12 12%27%3E%3Cpath fill=%27%23333%27 d=%27M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_16px_center] bg-[length:12px] ${
                    formErrors.role ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.role}
                  onChange={handleInputChange}
                  aria-invalid={!!formErrors.role}
                  aria-describedby={formErrors.role ? "role-error" : undefined}
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="Librarian">Librarian</option>
                  <option value="Assistant">Assistant</option>
                  <option value="Manager">Manager</option>
                  <option value="Developer">Developer</option>
                </select>
                {formErrors.role && (
                  <p id="role-error" className="text-red-500 text-sm mt-1">{formErrors.role}</p>
                )}
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setFormData({ name: "", email: "", phone: "", role: "" });
                    setFormErrors({});
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageStaff;