import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const data = await register(
        formData.fullName,
        formData.email,
        formData.password
      );

      console.log(data);

      toast.success("Account created successfully");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      console.error("Signup error:", error);

      toast.error(
        error.response?.data?.message ||
        "Failed to create account"
      );
    }
  };

  return (
    <div className="h-screen bg-[#F2F0F1] flex items-center justify-center px-4 py-4 overflow-auto">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6">

        <h1 className="text-3xl font-black text-center">
          SHOP.CO
        </h1>

        <h2 className="text-2xl font-bold text-center mt-4">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mt-1 text-sm">
          Sign up to start shopping
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-5 space-y-4"
        >

          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium text-sm">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-full px-5 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-sm">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-full px-5 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-sm">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-full px-5 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium text-sm">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-full px-5 py-3 outline-none focus:border-black"
            />
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />

            I agree to the Terms & Conditions
          </label>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-black text-white rounded-full py-3 font-semibold hover:bg-gray-900 transition"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center mt-5 text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-black"
          >
            Login
          </Link>
        </p>

      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

    </div>
  );
};

export default Signup;