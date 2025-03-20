export default function ProductReview({
  params,
}: {
  params: { productId: string };
}) {
  const productId = params.productId;
  return (
    <div>
      <h1>All review for Product {productId}</h1>
      <ul>
        <li>review 1</li>
        <li>review 2</li>
        <li>review 3</li>
        <li>review 4</li>
      </ul>
    </div>
  );
}
