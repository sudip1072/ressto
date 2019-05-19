import React from "react";
import Title from "../Title";
import { MenuConsumer } from "../../context";
import FilterMenus from "./FilterMenus";
import Menu from "../Menu";

export default function Menus() {
  return (
    <MenuConsumer>
      {value => {
        const { filterMenus } = value;
        return (
          <section className="py-5">
            <div className="container">
              <Title center title="our healthy menus" />
              <FilterMenus />
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    total menus :{filterMenus.length}
                  </h6>
                </div>
              </div>
              <div className="row py-5">
                {filterMenus.length === 0 ? (
                  <div className="col text-title text-center">
                    Sorry, No items matched
                  </div>
                ) : (
                  filterMenus.map(menu => {
                    return <Menu key={menu.id} menu={menu} />;
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </MenuConsumer>
  );
}
