export default function ProductDetail({
  params,
}: {
  params: { productid: string };
}) {
  const { productid } = params;
  return <h1>Product Detail Page {productid}</h1>;
}
