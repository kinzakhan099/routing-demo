
export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Our Blog</h1>
        <p className="text-gray-600 text-lg">
          Stay up to date with the latest tutorials, insights, and news from{" "}
          <span className="font-semibold">Code Evolution</span>.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Blog Post 1 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
          <img
            src="https://source.unsplash.com/random/400x250?code"
            alt="Blog Post"
            className="w-full h-40 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Getting Started with Next.js
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Learn how to build modern React applications with Next.js and its
              powerful features.
            </p>
            <a
              href="/blog/first"
              className="text-blue-500 font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
          <img
            src="https://source.unsplash.com/random/400x250?laptop"
            alt="Blog Post"
            className="w-full h-40 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Styling with Tailwind CSS
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Discover how to rapidly style your applications with Tailwind CSS
              utility classes.
            </p>
            <a
              href="/blog/second"
              className="text-blue-500 font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
          <img
            src="https://source.unsplash.com/random/400x250?technology"
            alt="Blog Post"
            className="w-full h-40 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Why Learn React in 2025?
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              React continues to dominate frontend development—here’s why you
              should learn it this year.
            </p>
            <a
              href="/blog/third"
              className="text-blue-500 font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
