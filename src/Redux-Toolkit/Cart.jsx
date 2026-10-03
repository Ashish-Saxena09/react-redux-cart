import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "./cartSlicer";
import { Link } from "react-router-dom";

export function Cartt() {
  const [productList, setProductlist] = useState([]);
  const [id, setId] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      console.log(data);
      setProductlist(data.products);
    }

    getProducts();
  }, []);

  return (
    <>
      <h1>Products</h1>

      <div className="products">
        {productList.length > 0
          ? productList.map((product) => {
              const isExpanded = id.includes(product.id);
              return (
                <div className="product-card" key={product.id}>
                  <p>{product.id}</p>

                  <p>{product.title}</p>

                  <img src={product.images[0]} width={200} height={200} />

                  <p>
                    {isExpanded
                      ? product.description
                      : product.description.substring(0, 50) + "..."}
                  </p>

                  <button
                    onClick={() => {
                      if (isExpanded) {
                        setId(id.filter((id) => id !== product.id));
                      } else {
                        setId([...id, product.id]);
                      }
                    }}
                  >
                    {isExpanded ? "Hide" : "Show"}
                  </button>

                  <p>${product.price}</p>

                  <Link to={`/product/${product.id}`}>View Product</Link>

                  <button
                    onClick={() => {
                      dispatch(addTocart(product));
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })
          : "No products to show"}
      </div>
    </>
  );
}
