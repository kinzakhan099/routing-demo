export default function Reviews({ 
  params 
}: { 
  params: { productid: string } 
}) {
  const reviews: { [key: string]: string[] } = {
    "1": ["Great product!", "Really liked the quality."],
    "2": ["Not worth the price.", "Broke after 2 days."],
    "3": ["Amazing! Would buy again.", "5 stars ⭐⭐⭐⭐⭐"],
    phone: ["Product Review for Product phone and Review 1"],
    // Add more products and their reviews as needed
  };

  const productReviews = reviews[params.productid] || ["No reviews yet."];

  return (
    <div>
      <h1>Reviews for Product {params.productid}</h1>
      <ul>
        {productReviews.map((review, index) => (
          <li key={index}>{review} </li>
        ))}
      </ul>
    </div>
  );
}
