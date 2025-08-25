import Link from "next/link";

export default function ProductList() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10">
      {/* Home Link */}
      <div className="mb-6 w-full max-w-2xl flex justify-start">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          ← Home
        </Link>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Product List
      </h1>

      {/* Product Cards */}
      <div className="grid gap-6 w-full max-w-2xl">
        <Link
          href="/product/1"
          className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-200 transition"
        >
          <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
          <p className="text-gray-600 mt-2 text-sm">Click to view details</p>
        </Link>

        <Link
          href="/product/2"
          className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-200 transition"
        >
          <h2 className="text-xl font-semibold text-gray-800">Product 2</h2>
          <p className="text-gray-600 mt-2 text-sm">Click to view details</p>
        </Link>

        <Link
          href="/product/3"
          replace
          className="block p-6 bg-white rounded-xl shadow hover:shadow-lg border border-gray-200 transition"
        >
          <h2 className="text-xl font-semibold text-gray-800">Product 3</h2>
          <p className="text-gray-600 mt-2 text-sm">Click to view details</p>
        </Link>
      </div>
    </div>
  );
}
