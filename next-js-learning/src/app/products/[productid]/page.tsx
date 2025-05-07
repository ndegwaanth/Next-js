import { promises } from "dns";

export default async function ProductDetail(
    {
        params,
    }: {
        params: Promise<{ productid: string }>;
    }
) {
    const productID = (await params).productid
    return <h1>Detail of product {productID}</h1>;
    
}