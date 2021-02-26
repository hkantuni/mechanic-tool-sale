import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Card } from "./Card";
import "./styles.css";
import data from "./tools.json";
import toolbrand from "./toolbrand.json";

const PER_PAGE = 12;

export function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [filterByMake, setfilterByMake] = useState("");

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  function handleFilterClickByMake(event) {
    setfilterByMake(event.target.value);
  }

  const filteredDataByMake =
    filterByMake === "All" || filterByMake === ""
      ? data
      : data.filter((item) => item.brand.includes(filterByMake));

  const offset = currentPage * PER_PAGE;
  const currentPageData = filteredDataByMake.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(filteredDataByMake.length / PER_PAGE);

  return (
    <>
      <h1
        style={{
          marginTop: "0",
          paddingTop: "30px",
          backgroundColor: "#d2d8de",
        }}
      >
        Automotive Tools for Sale
        <h4>
          to purchase tools please call 202-446-7422 or email to:
          hkantuni@gmail.com, please note tool ID number
        </h4>
      </h1>

      <div className="filters">
        <div className="dropdown">
          <label className="filterlables">filter by brand</label>
          <div
            className="dropdown btn btn-secondary filter-btn"
            aria-labelledby="dropdownMenuButton"
          >
            <select
              className="filter-area"
              value={filterByMake}
              onChange={handleFilterClickByMake}
            >
              <option key="all" value="All">
                All
              </option>
              {toolbrand.map((tool) => (
                <option
                  className="filter-brands"
                  key={tool.id}
                  value={tool.brand}
                >
                  {tool.brand}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card-deck">
          {currentPageData.map((item) => (
            <Card
              key={item.key}
              id={item.id}
              item={item.item}
              item_number={item.item_number}
              brand={item.brand}
              condition={item.condition}
              url1={item.link_1}
              url2={item.link_2}
              url3={item.link_3}
              url4={item.link_4}
              price_new={item.price_new}
              price_current={item.price_current}
              placeholder={item.placeholder}
              status={item.status}
            />
          ))}
        </div>
        {pageCount > 1 && (
          <div className="card-deck">
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
          </div>
        )}
      </div>
    </>
  );
}
