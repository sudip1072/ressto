import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { MenuConsumer } from "../context";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    // import menu consumer and create MenuConsumer component to access props , arguments passed through providers
    <MenuConsumer>
      {value => {
        //destructures all  props equals to value
        const { cartItems, handleSidebar, handleCart } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icons" onClick={handleSidebar} />
              <img src={logo} alt="company logo" width="200" height="50" />
              <div className="nav-cart">
                <FaCartPlus className="nav-icons" onClick={handleCart} />

                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </MenuConsumer>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGreen);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icons {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;
