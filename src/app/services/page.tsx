import React from "react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Our Services</h1>
        <p className="text-gray-600 text-lg">
          At <span className="font-semibold">Code Evolution</span>, we provide a
          variety of services to help developers and businesses succeed in the
          digital world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            💻 Web Development
          </h2>
          <p className="text-gray-600 text-sm">
            Custom websites and applications built with modern frameworks like
            Next.js, React, and Tailwind CSS.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            📱 Mobile Apps
          </h2>
          <p className="text-gray-600 text-sm">
            Cross-platform mobile app development using React Native for both
            iOS and Android devices.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            ☁️ Cloud Solutions
          </h2>
          <p className="text-gray-600 text-sm">
            Scalable cloud architecture, hosting, and deployment using AWS,
            Vercel, and Docker.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            🎨 UI/UX Design
          </h2>
          <p className="text-gray-600 text-sm">
            Beautiful and intuitive user interface & experience design tailored
            for your business needs.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            📊 Data & Analytics
          </h2>
          <p className="text-gray-600 text-sm">
            Data-driven insights and dashboards to help you make informed
            business decisions.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            🛠️ Technical Consulting
          </h2>
          <p className="text-gray-600 text-sm">
            Expert advice, mentoring, and consulting to guide your tech journey
            and strategy.
          </p>
        </div>
      </div>
    </div>
  );
}
