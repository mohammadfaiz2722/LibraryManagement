import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

const ManageMembershipPlans = () => {
  const [plans, setPlans] = useState([
    { id: 1, name: "One Day", price: 5, duration: "1 Day" },
    { id: 2, name: "Monthly", price: 50, duration: "30 Days" },
  ]);
  const [form, setForm] = useState({ name: "", price: "", duration: "" });
  const [errors, setErrors] = useState({});
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Plan name is required";
    if (!form.price || form.price <= 0) newErrors.price = "Price must be a positive number";
    if (!form.duration.trim() || !/^\d+\s*(Day|Days|Month|Months|Year|Years)$/i.test(form.duration)) {
      newErrors.duration = "Duration must be a number followed by Day(s), Month(s), or Year(s)";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      if (editingId) {
        setPlans(plans.map((p) => (p.id === editingId ? { ...form, id: editingId, price: parseFloat(form.price) } : p)));
        setEditingId(null);
      } else {
        setPlans([...plans, { ...form, id: Date.now(), price: parseFloat(form.price) }]);
      }
      setForm({ name: "", price: "", duration: "" });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleEdit = (plan) => {
    setForm(plan);
    setEditingId(plan.id);
    setErrors({});
  };

  const handleDelete = (id) => {
    setPlans(plans.filter((p) => p.id !== id));
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Manage Membership Plans</h1>

      {/* Add/Edit Form */}
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 mb-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="relative">
            <label htmlFor="name" className="sr-only">Plan Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Plan Name"
              value={form.name}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none ${errors.name ? "border-red-500" : "border-gray-300"}`}
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="relative">
            <label htmlFor="price" className="sr-only">Price</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                id="price"
                type="number"
                name="price"
                placeholder="Price"
                value={form.price}
                onChange={handleChange}
                className={`w-full border rounded-lg pl-6 pr-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none ${errors.price ? "border-red-500" : "border-gray-300"}`}
                required
                min="0"
                step="0.01"
                aria-invalid={!!errors.price}
                aria-describedby={errors.price ? "price-error" : undefined}
              />
            </div>
            {errors.price && (
              <p id="price-error" className="text-red-500 text-sm mt-1">{errors.price}</p>
            )}
          </div>
          <div className="relative">
            <label htmlFor="duration" className="sr-only">Duration</label>
            <input
              id="duration"
              type="text"
              name="duration"
              placeholder="Duration (e.g., 1 Day, 30 Days)"
              value={form.duration}
              onChange={handleChange}
              className={`w-full border rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none ${errors.duration ? "border-red-500" : "border-gray-300"}`}
              required
              aria-invalid={!!errors.duration}
              aria-describedby={errors.duration ? "duration-error" : undefined}
            />
            {errors.duration && (
              <p id="duration-error" className="text-red-500 text-sm mt-1">{errors.duration}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center justify-center hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
          >
            {editingId ? <Edit className="w-4 h-4 mr-1" /> : <Plus className="w-4 h-4 mr-1" />}
            {editingId ? "Update Plan" : "Add Plan"}
          </button>
        </form>
      </div>

      {/* Plans Table (Desktop) */}
      <div className="hidden md:block bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Price</th>
              <th className="p-4 font-semibold">Duration</th>
              <th className="p-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.id} className="border-t hover:bg-gray-50 transition">
                <td className="p-4">{plan.name}</td>
                <td className="p-4">${parseFloat(plan.price).toFixed(2)}</td>
                <td className="p-4">{plan.duration}</td>
                <td className="p-4 flex justify-center gap-3">
                  <button
                    onClick={() => handleEdit(plan)}
                    className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    aria-label={`Edit ${plan.name}`}
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(plan.id)}
                    className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                    aria-label={`Delete ${plan.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
            {plans.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No plans available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Plans Cards (Mobile) */}
      <div className="md:hidden space-y-4">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white shadow rounded-lg p-4">
            <p className="font-semibold text-gray-800">{plan.name}</p>
            <p className="text-sm text-gray-600">${parseFloat(plan.price).toFixed(2)}</p>
            <p className="text-sm text-gray-600">{plan.duration}</p>
            <div className="flex gap-3 mt-3">
              <button
                onClick={() => handleEdit(plan)}
                className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                aria-label={`Edit ${plan.name}`}
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(plan.id)}
                className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                aria-label={`Delete ${plan.name}`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        {plans.length === 0 && (
          <div className="bg-white shadow rounded-lg p-4 text-center text-gray-500">
            No plans available.
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMembershipPlans;