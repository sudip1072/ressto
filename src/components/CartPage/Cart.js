import React from "react";
import Title from "../Title";
import CartList from "./CartList";
import CartColumns from "./CartColumns";

import CartTotals from "./CartTotals";

export default function Cart({ history }) {
  return (
    <section className="py-5">
      {/* title */}
      <div className="container">
        <Title title="Your cart items" center />
      </div>
      {/* cart Columns */}

      <CartColumns />

      {/* cart list  */}

      <CartList />

      {/* cart totals */}
      <CartTotals history={history} />
    </section>
  );
}
