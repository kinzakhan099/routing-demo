export default function FirstBlog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Blog Image */}
        <img
          src="https://source.unsplash.com/random/1200x600?writing"
          alt="First Blog"
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          First Blog Post
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
            Welcome to our very first blog post! 🎉 This is where we share
            exciting updates, tutorials, and thoughts about web development.
          </p>

          <p>
            In this post, we’ll talk about the importance of learning modern
            frameworks like <span className="font-semibold">Next.js</span> and{" "}
            <span className="font-semibold">Tailwind CSS</span>. Both tools
            empower developers to build applications faster, with better
            performance and beautiful design.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
            Why Blogging Matters?
          </h2>
          <p>
            Blogging is not just about sharing knowledge — it’s also about
            documenting your journey, helping others learn, and building a
            strong developer community.
          </p>

          <ul className="list-disc list-inside mt-4">
            <li>Share your experiences with others 🌍</li>
            <li>Improve your own understanding of concepts 📚</li>
            <li>Connect with like-minded developers 🤝</li>
          </ul>

          <p className="mt-6">
            Thanks for reading our first blog post! Stay tuned for more content
            where we dive deeper into development tools, best practices, and
            coding tutorials. 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
