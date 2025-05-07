import { promises } from "dns";


export default async function ProductReview({
    params,
}: {
    params: Promise<{ productID: string; reviewID: string }>;
}) {
    const { productID, reviewID } = await params;

    return <h1>ReviewID {reviewID} for ProductID {productID}</h1>;
}
