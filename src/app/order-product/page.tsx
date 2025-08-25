"use client";

import React from "react";
import { useRouter } from "next/navigation"; // used for navigation between pages

export default function OrderProduct() {
  const router = useRouter(); // here it is used

  const handleClick = () => {
    console.log("Order placed!");
    router.push("/"); // navigates to home page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Order Product</h1>
      
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md 
                   hover:bg-green-700 hover:shadow-lg focus:outline-none 
                   focus:ring-2 focus:ring-green-400 focus:ring-offset-2 
                   transition duration-300"
      >
        Place Order
      </button>
    </div>
  );
}
