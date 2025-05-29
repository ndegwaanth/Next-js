import { notfound } from "next/navigation";

export default async function ProductDetails(
  {
    params,
  }: {
    params: Promise<{ productId: string }>;
  }
) {
  const productId = (await params).productId;
  if (parseInt(productId) > 100) {
    notfound();
  }
  return <h1>Details about product {productId}</h1>;
}