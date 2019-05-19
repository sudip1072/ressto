import React, { Component } from "react";
import styled from "styled-components";
import { FaWarehouse, FaUtensils, FaHouseDamage } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaWarehouse />,
        title: "Timing",
        text: "12pm to 11pm, Monday - Sunday"
      },
      {
        id: 2,
        icon: <FaUtensils />,
        title: "Eatnfeel slogan",
        text: "We serve you tasty food which makes feel you homely"
      },
      {
        id: 3,
        icon: <FaHouseDamage />,
        title: "Home Delivery",
        text: "We deliver to your doorstep within 2km distance"
      }
    ]
  };

  render() {
    let center;
    return (
      <ServiceWrapper className="py-5" center={center}>
        <div className="container">
          <div className="row">
            {this.state.services.map(item => {
              return (
                <div
                  className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3 "
                  key={item.id}
                >
                  <div className="service-icon">{item.icon}</div>
                  <div className="mt-3 text-capitalize ">
                    {item.title}
                    <div className="title-underline" />
                  </div>
                  <div className="mt-3">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ServiceWrapper>
    );
  }
}

const ServiceWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--darkGrey);
  }
  .title-underline {
    height: 0.25rem;
    width: 7rem;
    background: var(--primaryColor);
    margin: 0 auto;
  }
`;
