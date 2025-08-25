import { notFound, redirect } from "next/navigation";

export default function ProductReview({
  params,
}: {
  params: { productid: string; reviewid: string };
}) {
  const { productid, reviewid } = params;

  // Redirect if invalid
  if (parseInt(reviewid) > 1000) {
    redirect("/products");
  }

  // Simulated review data
  const reviewsData: Record<string, Record<string, string>> = {
    phone: {
      "1": "Great phone, very satisfied!",
      "2": "Battery life could be better.",
    },
    laptop: {
      "1": "Super fast and lightweight.",
      "2": "Screen quality is amazing.",
    },
    tablet: {
      "1": "Perfect for reading and browsing.",
      "2": "Stylus support is a game changer.",
    },
    watch: {
      "1": "Stylish and functional.",
      "2": "Health tracking features are excellent.",
    },
  };

  const review = reviewsData[productid]?.[reviewid] || "Review not found.";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Product Review
        </h1>
        <div className="mb-6">
          <p className="text-sm text-gray-500 text-center">
            Product:{" "}
            <span className="font-semibold text-blue-600">{productid}</span> | Review ID:{" "}
            <span className="font-semibold text-blue-600">{reviewid}</span>
          </p>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          {review}
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="/products"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
          >
            Back to Products
          </a>
        </div>
      </div>
    </div>
  );
}
