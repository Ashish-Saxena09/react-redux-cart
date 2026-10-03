import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(`https://dummyjson.com/products/${id}`);

      const data = await response.json();

      setProduct(data);
    }

    getProduct();
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{product.title}</h1>

      <img src={product.images[0]} width={200} height={200} />

      <p>{product.description}</p>

      <p>${product.price}</p>
    </div>
  );
}
