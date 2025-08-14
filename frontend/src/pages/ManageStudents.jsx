// src/pages/ManageStudents.jsx
import { useState } from "react";

export default function ManageStudents() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Students</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Student
        </button>
      </div>

      {/* Student table placeholder */}
      <div className="bg-white shadow rounded-lg p-4">
        <p>No students found.</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            <h2 className="text-lg font-semibold mb-4">Add Student</h2>
            <form>
              <input
                type="text"
                placeholder="Student Name"
                className="w-full p-2 border rounded mb-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded mb-3"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>

            {/* Close button in top right */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
