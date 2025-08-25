import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        Welcome Home!
      </h1>

      {/* Navigation Links */}
      <nav className="flex gap-6 mb-10 text-lg">
        <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
          About Us
        </Link>
        <Link href="/products" className="text-gray-700 hover:text-blue-600 transition">
          Products
        </Link>
        <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">
          Services
        </Link>
        <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">
          Blog
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
          Contact
        </Link>
        
      </nav>

      {/* Article Language Buttons */}
      <div className="flex gap-4">
        <Link
          href="/articles/breaking-news-123?lang=en"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Read in English
        </Link>
        <Link
          href="/articles/breaking-news-123?lang=fr"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Read in French
        </Link>
        <Link
          href="/articles/breaking-news-123?lang=es"
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Read in Spanish
        </Link>
      </div>
    </div>
  );
}
