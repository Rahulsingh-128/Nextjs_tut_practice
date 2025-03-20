export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
  return <h2>Product detail Page {productId}</h2>;
}
