import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();

  return <>Product - {id}</>;
};

export default Product;
