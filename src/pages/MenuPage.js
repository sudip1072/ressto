import React from "react";
import Menus from "../components/MenuPage/Menus";
import Hero from "../components/Hero";
import productBcg from "../images/productBCG.jpg";

export default function MenuPage() {
  return (
    <>
      <Hero img={productBcg} />

      <Menus />
    </>
  );
}
