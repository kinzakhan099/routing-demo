export default function SecondBlog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Blog Image */}
        <img
          src="https://source.unsplash.com/random/1200x600?tailwind"
          alt="Tailwind CSS Styling"
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Styling with Tailwind CSS
        </h1>

        {/* Author & Date */}
        <p className="text-sm text-gray-500 mb-8">
          ✍️ Written by <span className="font-medium">Admin</span> · 📅{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Tailwind CSS is one of the most popular utility-first CSS frameworks
            used by developers today. Instead of writing custom CSS from
            scratch, you apply ready-made utility classes directly in your JSX or HTML.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
            Why Developers Love Tailwind?
          </h2>
          <p>
            Tailwind makes styling extremely fast and consistent. You don’t need
            to leave your component files to switch between CSS and JSX, which
            makes the development workflow much smoother.
          </p>

          <ul className="list-disc list-inside mt-4">
            <li>🎨 Rapid prototyping with prebuilt classes</li>
            <li>📱 Mobile-first and responsive by design</li>
            <li>⚡ No naming conflicts with custom classes</li>
            <li>🛠️ Highly customizable with configuration files</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
            Example Usage
          </h2>
          <p>
            Here’s how simple it is to create a styled button with Tailwind:
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            <code>
              {`<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
  Click Me
</button>`}
            </code>
          </pre>

          <p className="mt-6">
            With just a few utility classes, you can create a fully styled,
            responsive, and accessible button. That’s the power of Tailwind CSS!
          </p>

          <p className="mt-6">
            If you haven’t tried Tailwind yet, this is the best time to start.
            It has a strong community, great documentation, and fits perfectly
            with frameworks like Next.js. 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
