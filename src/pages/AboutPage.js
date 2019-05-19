import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";
import aboutBCG from "../images/aboutBCG.jpg";

export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBCG} />
      <Info />
    </>
  );
}
