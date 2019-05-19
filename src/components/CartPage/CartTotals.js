import React from "react";
import { MenuConsumer } from "../../context";
import PaypalBtn from "./PaypalBtn";

export default function CartTotals({ history }) {
  return (
    <div className="container">
      <div className="row">
        <MenuConsumer>
          {value => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-primary text-capitalize mb-4"
                  onClick={clearCart}
                >
                  clear cart
                </button>
                <h3> subtotal :₹{cartSubTotal}</h3>
                <h3> tax :₹{cartTax}</h3>
                <h3> total :₹{cartTotal}</h3>
                <PaypalBtn
                  history={history}
                  cartTotal={cartTotal}
                  clearCart={clearCart}
                />
              </div>
            );
          }}
        </MenuConsumer>
      </div>
    </div>
  );
}
