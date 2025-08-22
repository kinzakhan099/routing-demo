export default function ProductReview({
  params,
}: {
  params: { productid: string; reviewid: string };
}) {
  const { productid, reviewid } = params;
  const reviewsData: Record<string, Record<string, string>> = {
    phone: {
      '1': 'Great phone, very satisfied!',
      '2': 'Battery life could be better.',
    },
    laptop: {
      '1': 'Super fast and lightweight.',
      '2': 'Screen quality is amazing.',
    },
    // Add more products and reviews as needed
  };
  const review = reviewsData[productid]?.[reviewid] || 'Review not found.';
  return (
    <div>
      <h1>Product Review Page for Product {productid} and Review {reviewid}</h1>
      <p>{review}</p>
    </div>
  );
}