import { notFound, redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading generated");
  }

  const awaitParams = await params;
  const { productId, reviewId } = awaitParams;
  if (parseInt(productId) > 1000) {
    //notFound();
    redirect("/products");
  }
  return (
    <h2>
      Review {reviewId} for Product {productId}
    </h2>
  );
}
