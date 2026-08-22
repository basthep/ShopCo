import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { loginSuccess } from "../../redux/authSlice";
import { login } from "../../services/authService";

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange = (e) => {

        const {
            name,
            value,
            type,
            checked,
        } = e.target;

        setFormData({
            ...formData,

            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = await login(
                formData.email,
                formData.password
            );

            console.log(data);

            // Save token
            localStorage.setItem(
                "token",
                data.token
            );

            // Remember login
            if (formData.remember) {

                localStorage.setItem(
                    "remember",
                    "true"
                );

            } else {

                localStorage.removeItem(
                    "remember"
                );

            }

            // Update Redux
            dispatch(
                loginSuccess({
                    token: data.token,
                })
            );

            // Success Toast
            toast.success("Login successful!");

            // Go to home after toast
            setTimeout(() => {
                navigate("/");
            }, 1000);

        } catch (error) {

            console.error(
                "Login error:",
                error
            );

            // Error Toast
            toast.error(
                error.response?.data?.message ||
                "Invalid email or password"
            );

        }

    };

    return (

        <div className="h-screen bg-[#F2F0F1] flex items-center justify-center px-5 py-6 overflow-hidden">

            <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6">

                {/* Logo */}

                <h1 className="text-4xl font-black text-center">
                    SHOP.CO
                </h1>

                {/* Heading */}

                <h2 className="text-3xl font-bold text-center mt-5">
                    Welcome Back
                </h2>

                <p className="text-center text-gray-500 mt-2">
                    Login to continue shopping
                </p>

                {/* Form */}

                <form
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-4"
                >

                    {/* Email */}

                    <div>

                        <label className="block mb-2 font-medium">
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

                        <label className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-full px-5 py-3 pr-10 outline-none focus:border-black"
                        />

                    </div>

                    {/* Remember */}

                    <div className="flex justify-between items-center text-sm">

                        <label className="flex items-center gap-2 cursor-pointer">

                            <input
                                type="checkbox"
                                name="remember"
                                checked={formData.remember}
                                onChange={handleChange}
                            />

                            Remember Me

                        </label>

                        <button
                            type="button"
                            className="font-medium hover:underline"
                        >
                            Forgot Password?
                        </button>

                    </div>

                    {/* Login */}

                    <button
                        type="submit"
                        className="w-full bg-black text-white rounded-full py-3 font-semibold hover:bg-gray-900 transition"
                    >
                        Login
                    </button>

                </form>

                {/* Signup */}

                <p className="text-center mt-5 text-gray-600">

                    Don't have an account?{" "}

                    <Link
                        to="/register"
                        className="font-bold text-black hover:underline"
                    >
                        Sign Up
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

export default Login;