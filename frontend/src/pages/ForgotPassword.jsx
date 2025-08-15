import React, { useState } from "react";
import { Mail, Lock, Key } from "lucide-react";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
  const [form, setForm] = useState({ email: "", otp: "", newPassword: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1 && !form.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.email = "Please enter a valid email";
    }
    if (step === 2 && !form.otp.match(/^\d{6}$/)) {
      newErrors.otp = "Please enter a valid 6-digit OTP";
    }
    if (step === 3) {
      if (form.newPassword.length < 6) {
        newErrors.newPassword = "Password must be at least 6 characters";
      }
      if (form.newPassword !== form.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateStep();
    if (Object.keys(formErrors).length === 0) {
      if (step === 1) {
        console.log("Reset password request:", { email: form.email }); // Replace with API call
        setStep(2);
      } else if (step === 2) {
        console.log("OTP verification:", { otp: form.otp }); // Replace with API call
        setStep(3);
      } else if (step === 3) {
        console.log("New password set:", { email: form.email, newPassword: form.newPassword }); // Replace with API call
        setForm({ email: "", otp: "", newPassword: "", confirmPassword: "" });
        setStep(1);
        setErrors({});
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setErrors({});
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
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          {step === 1 ? "Reset Your Password" : step === 2 ? "Enter OTP" : "Set New Password"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {step === 1 && (
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
          )}

          {step === 2 && (
            <div className="relative">
              <label htmlFor="otp" className="sr-only">OTP</label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
                <Key className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  id="otp"
                  type="text"
                  name="otp"
                  placeholder="Enter 6-digit OTP"
                  value={form.otp}
                  onChange={handleChange}
                  className={`flex-1 outline-none bg-transparent ${errors.otp ? "border-red-500" : "border-gray-300"}`}
                  required
                  aria-invalid={!!errors.otp}
                  aria-describedby={errors.otp ? "otp-error" : undefined}
                />
              </div>
              {errors.otp && (
                <p id="otp-error" className="text-red-500 text-sm mt-1">{errors.otp}</p>
              )}
              <p className="text-sm text-gray-600 mt-2">
                A 6-digit OTP has been sent to <span className="font-medium">{form.email}</span>.
              </p>
            </div>
          )}

          {step === 3 && (
            <>
              <div className="relative">
                <label htmlFor="newPassword" className="sr-only">New Password</label>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
                  <Lock className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    id="newPassword"
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={form.newPassword}
                    onChange={handleChange}
                    className={`flex-1 outline-none bg-transparent ${errors.newPassword ? "border-red-500" : "border-gray-300"}`}
                    required
                    aria-invalid={!!errors.newPassword}
                    aria-describedby={errors.newPassword ? "newPassword-error" : undefined}
                  />
                </div>
                {errors.newPassword && (
                  <p id="newPassword-error" className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
                )}
              </div>
              <div className="relative">
                <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
                  <Lock className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className={`flex-1 outline-none bg-transparent ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
                    required
                    aria-invalid={!!errors.confirmPassword}
                    aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
                  />
                </div>
                {errors.confirmPassword && (
                  <p id="confirmPassword-error" className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="text-blue-600 hover:underline text-sm"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
            >
              {step === 1 ? "Send Reset Link" : step === 2 ? "Verify OTP" : "Set Password"}
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Remembered your password?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;