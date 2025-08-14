import { useState } from "react";

export default function ManageStudents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in all fields.");
      return;
    }
    // Placeholder for form submission logic
    console.log("Student Data:", formData);
    setIsModalOpen(false);
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Students</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
        >
          Add Student
        </button>
      </div>

      {/* Student table placeholder */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <div className="text-center text-gray-500 py-8">
          <p className="text-lg">No students found.</p>
          <p className="text-sm mt-2">Click "Add Student" to start adding students to the system.</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative transform transition-all duration-300 scale-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Student</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter student name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter student email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  Save
                </button>
              </div>
            </form>

            {/* Close button in top right */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl transition-colors duration-200"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}