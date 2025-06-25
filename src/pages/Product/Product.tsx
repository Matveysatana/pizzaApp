import { useLoaderData } from "react-router";
import type { Product } from "../../interfaces/Product.interfaces";

const Product = () => {
  const data = useLoaderData() as Product;

  return <>Product - {data.name}</>;
};

export default Product;
