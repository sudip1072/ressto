import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import singleBCG from "../images/singleBCG.jpg";
import { MenuConsumer } from "../context";

export default function SingleMenuPage() {
  return (
    <>
      <Hero img={singleBCG} title="delicious menu" />
      <MenuConsumer>
        {value => {
          const { singleMenu, addToCart, loading } = value;
          if (loading) {
            console.log("hello from loading");
            return <h1>menu loading...</h1>;
          }
          const { category, description, id, title, price, image } = singleMenu;
          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img
                      //src={`../${image}`}
                      src={image}
                      alt="single menu"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">{title}</h5>
                    <h5 className="text-capitalize text-muted mb-4">
                      category :{category}
                    </h5>
                    <h5 className="text-main text-capitalize mb-4">
                      price :₹{price}
                    </h5>
                    <p className="text-capitalize text-title mt-3">
                      description :{" "}
                    </p>
                    <p>{description}</p>
                    <button
                      type="button"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                      onClick={() => addToCart(id)}
                    >
                      {" "}
                      add to cart
                    </button>
                    <Link
                      to="/menus"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                    >
                      back to menus
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </MenuConsumer>
    </>
  );
}
