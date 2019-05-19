import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { MenuConsumer } from "../context/context";

export default function Menu({ menu }) {
  return (
    <MenuConsumer>
      {value => {
        const { addToCart, setSingleMenu } = value;
        return (
          <MenutWrapper className="col-10 col-sm-8 col-md-6 col-lg-4 my-3">
            <div className="card">
              <div className="img-container">
                <img
                  src={menu.image}
                  className="card-img-top"
                  alt="menu"
                  style={{ height: "220px" }}
                />
                <div className="menu-icons">
                  <Link
                    to={`/menus/${menu.id}`}
                    onClick={() => setSingleMenu(menu.id)}
                  >
                    <FaSearch className="icon" />
                  </Link>
                  <FaCartPlus
                    className="icon"
                    onClick={() => addToCart(menu.id)}
                  />
                </div>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="mb-0">{menu.title}</p>
                <p className="mb-0 text-main">₹{menu.price}</p>
              </div>
            </div>
          </MenutWrapper>
        );
      }}
    </MenuConsumer>
  );
}

const MenutWrapper = styled.div`
  card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
  }
  .card:hover {
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .card-img-top {
    transition: var(--mainTransition);
  }

  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.5;
  }
  .img-container {
    position: relative;
  }
  .menu-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .icon {
    font-size: 2.5rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }

  .card:hover .product-icons {
    opacity: 1;
  }

  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
