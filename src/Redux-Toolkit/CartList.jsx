import { useDispatch, useSelector } from "react-redux";
import { increaseQty } from "./cartSlicer";
import { decreaseQty } from "./cartSlicer";
import { removeItem } from "./cartSlicer";
import { clearCarttt } from "./cartSlicer";

export function CartListt() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const dispatch = useDispatch();
  return (
    <>
      <h1>Cart List</h1>
      <div className="cart-summary">
        <p>Cart Count - {cart.cartCount}</p>
        <p>
          Total Price - $
          {cart.totalPrice === 0 ? 0 : cart.totalPrice.toFixed(2)}
        </p>
      </div>
      {cart.product.map((prod) => {
        return (
          <div className="cart-item" key={prod.id}>
            <p>{prod.title}</p>
            <p>
              <img src={prod.images[0]} width={200} height={200} />
            </p>
            <p>${prod.price}</p>

            <button
              onClick={() => {
                ``;
                dispatch(decreaseQty(prod.id));
              }}
            >
              -
            </button>

            <span>{prod.quantity}</span>

            <button
              onClick={() => {
                dispatch(increaseQty(prod.id));
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                dispatch(removeItem(prod.id));
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      {cart.product.length > 0 && (
        <button
          className="clear-cart"
          onClick={() => {
            dispatch(clearCarttt());
          }}
        >
          Clear Cart
        </button>
      )}
    </>
  );
}
