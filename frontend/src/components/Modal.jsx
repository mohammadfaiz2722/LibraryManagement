import { useState } from "react";
import Modal from "../components/Modal";

export default function ManageStudents() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Students</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          + Add Student
        </button>
      </div>

      {/* Students Table (Dummy) */}
      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Membership</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">John Doe</td>
              <td className="p-3">john@example.com</td>
              <td className="p-3">Monthly</td>
              <td className="p-3">
                <button className="text-blue-600 hover:underline">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add Student Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Student"
      >
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          <select className="w-full border p-2 rounded">
            <option>One-Day</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
}
