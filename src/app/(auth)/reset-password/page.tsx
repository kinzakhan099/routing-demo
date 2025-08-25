"use client";
import React from "react";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Reset Your Password
        </h1>

        {/* Form */}
        <form className="space-y-5">
          {/* New Password */}
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter new password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter new password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Reset Password
          </button>
        </form>

        {/* Back to Login */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Remembered your password?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
