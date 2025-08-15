import React, { useState } from "react";
import { User, Mail, Lock, Phone } from "lucide-react";

const Signup = () => {
  const [form, setForm] = useState({ role: "", name: "", email: "", phone: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.role) newErrors.role = "Please select a role";
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = "Please enter a valid email";
    if (!form.phone.match(/^\d{10}$/)) newErrors.phone = "Please enter a valid 10-digit phone number";
    if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", form); // Replace with actual API call
      setForm({ role: "", name: "", email: "", phone: "", password: "" });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 sm:p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://www.dummyimage.com/600x400/000/fff&text=Library+Logo"
            alt="Library Logo"
            className="w-20 h-20 rounded-full object-cover shadow-sm"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">Create Your Account</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Role Selection */}
          <div className="relative">
            <label htmlFor="role" className="sr-only">Role</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <select
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
                className={`flex-1 outline-none bg-transparent appearance-none pr-8 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%270 0 12 12%27%3E%3Cpath fill=%27%23333%27 d=%27M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_8px_center] bg-[length:12px] ${errors.role ? "border-red-500" : "border-gray-300"}`}
                required
                aria-invalid={!!errors.role}
                aria-describedby={errors.role ? "role-error" : undefined}
              >
                <option value="" disabled>Select Role</option>
                <option value="Librarian">Librarian</option>
                <option value="Assistant">Assistant</option>
                <option value="Manager">Manager</option>
                <option value="Student">Student</option>
              </select>
            </div>
            {errors.role && (
              <p id="role-error" className="text-red-500 text-sm mt-1">{errors.role}</p>
            )}
          </div>

          {/* Full Name */}
          <div className="relative">
            <label htmlFor="name" className="sr-only">Full Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className={`flex-1 outline-none bg-transparent ${errors.name ? "border-red-500" : "border-gray-300"}`}
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
            </div>
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className={`flex-1 outline-none bg-transparent ${errors.email ? "border-red-500" : "border-gray-300"}`}
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
            </div>
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="relative">
            <label htmlFor="phone" className="sr-only">Phone</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <Phone className="w-5 h-5 text-gray-400 mr-2" />
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Phone (10 digits)"
                value={form.phone}
                onChange={handleChange}
                className={`flex-1 outline-none bg-transparent ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                required
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
            </div>
            {errors.phone && (
              <p id="phone-error" className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className={`flex-1 outline-none bg-transparent ${errors.password ? "border-red-500" : "border-gray-300"}`}
                required
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? "password-error" : undefined}
              />
            </div>
            {errors.password && (
              <p id="password-error" className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;