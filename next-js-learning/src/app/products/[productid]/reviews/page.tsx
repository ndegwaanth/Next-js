import { promises } from "dns";

export default async function Reviews(
    {
        params,
    }: {
        params: Promise<{ reviewid: string }>;
    }
) {
    const reviewID = (await params).reviewid
    return <h1>Review  of a product</h1>;
    
}