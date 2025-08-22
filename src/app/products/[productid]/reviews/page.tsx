export default function Reviews({ 
  params 
}: { 
  params: { productid: string } 
}) {
  const reviewsData: Record<string, Record<string, string>> = {
    phone: {
      '1': 'Great phone, very satisfied!',
      '2': 'Battery life could be better.',
    },
    laptop: {
      '1': 'Super fast and lightweight.',
      '2': 'Screen quality is amazing.',
    },
    tablet: {
      '1': 'Perfect for reading and browsing.',
      '2': 'Stylus support is a game changer.',
    },
    watch: {
      '1': 'Stylish and functional.',
      '2': 'Health tracking features are excellent.',
    },
    // Add more products and reviews as needed
  };

  const productReviewsObj = reviewsData[params.productid];
  const productReviews = productReviewsObj
    ? Object.entries(productReviewsObj)
    : [];

  return (
    <div>
      <h1>Reviews for Product {params.productid}</h1>
      {productReviews.length > 0 ? (
        <ul>
          {productReviews.map(([reviewid, review]) => (
            <li key={reviewid}>
              <strong>Review {reviewid}:</strong> {review}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}
