export const metadata = {
  title: "About Code Evolution",
  description: "Learn more about us on this page.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          Welcome to <span className="font-semibold">Code Evolution</span> — a
          place where we share knowledge, tutorials, and insights to help
          developers grow. Our mission is to make learning programming simple,
          engaging, and practical.
        </p>
      </div>

      {/* Info Cards */}
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            🚀 Our Mission
          </h2>
          <p className="text-gray-600 text-sm">
            To empower developers around the world with clear, modern, and
            hands-on coding tutorials.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            🌍 Our Vision
          </h2>
          <p className="text-gray-600 text-sm">
            A global community where learning to code is accessible and
            enjoyable for everyone.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            💡 What We Do
          </h2>
          <p className="text-gray-600 text-sm">
            We create tutorials, build projects, and share resources that help
            you master programming step by step.
          </p>
        </div>
      </div>
    </div>
  );
}
