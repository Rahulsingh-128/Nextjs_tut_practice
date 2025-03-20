import { notFound } from "next/navigation";

export default function ProductReview({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = params;
  if (parseInt(productId) > 1000) {
    notFound();
  }
  return (
    <h2>
      Review {reviewId} for Product {productId}
    </h2>
  );
}
