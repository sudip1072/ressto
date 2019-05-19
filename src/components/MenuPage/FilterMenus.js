import React from "react";
import styled from "styled-components";
import { MenuConsumer } from "../../context";
import { items } from "../../context/menuData";

export default function FilterMenus() {
  return (
    <MenuConsumer>
      {value => {
        const {
          search,
          min,
          max,
          category,
          price,
          delivery,
          handleChange,
          storeMenus
        } = value;

        let categories = new Set();
        categories.add("all");
        for (let menu in storeMenus) {
          categories.add(storeMenus[menu]["category"]);
        }
        categories = [...categories];
        console.log(categories);

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* text-search */}
                <div>
                  <label htmlFor="search">search menus</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>
                {/* end of text search */}

                {/* category search */}
                <div>
                  <label htmlFor="category">category</label>
                  <select
                    name="category"
                    id="category"
                    onChange={handleChange}
                    value={category}
                    className="filter-item"
                  >
                    {/* <option value="all">all</option>
                    <option value="grilled">grilled</option>
                    <option value="chinese">chinese</option>
                    <option value="breakfast">breakfast</option> */}
                    {categories.map((category, index) => {
                      return (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* end of  category search */}

                {/* price range */}
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      price :<span>₹{price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min={min}
                    max={max}
                    value={price}
                    onChange={handleChange}
                    className="filter-price"
                  />
                </div>

                {/* end of  price range */}

                {/* free delivery */}
                <div>
                  <label htmlFor="delivery" className="mx-2">
                    delivery within 15 min
                  </label>

                  <input
                    type="checkbox"
                    name="delivery"
                    id="delivery"
                    onChange={handleChange}
                    checked={delivery && true}
                  />
                </div>

                {/* end of  free delivery */}
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </MenuConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;
