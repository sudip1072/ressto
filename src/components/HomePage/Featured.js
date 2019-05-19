import React from "react";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import Title from "../Title";
import { MenuConsumer } from "../../context";

export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title=" our must try menus" center="true" />
        <div className="row my-5">
          <MenuConsumer>
            {value => {
              const { featuredMenus } = value;

              return featuredMenus.map(menu => (
                <Menu key={menu.id} menu={menu} />
              ));
            }}
          </MenuConsumer>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Link to="/menus" className="main-link">
              our menus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
