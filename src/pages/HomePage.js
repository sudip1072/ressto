import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Featured from "../components/HomePage/Featured";
import Services from "../components/HomePage/Services";

export default function HomePage() {
  return (
    <>
      <Hero title="Homely Food" max="true">
        <Link to="/menus" className="main-link" style={{ margin: "2rem" }}>
          our menu
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
