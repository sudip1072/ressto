import React from "react";
import CartSection from "../components/CartPage";
import Hero from "../components/Hero";
import cartBCG from "../images/cartBCG.jpg";

export default function CartPage(props) {
  console.log(props);

  return (
    <>
      <Hero img={cartBCG} />
      <CartSection history={props.history} />
    </>
  );
}
