import React, { Component } from "react";
import arrowIcon from "../assets/icons/polls/next@2x.svg";

const Pagination = props => {
  const pages = [1, 2, 3];
  const { onNextPage, onPreviousPage, currentPage } = props;

  return (
    // 1, 2, 3 buttons
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {/* arrow buttons */}

        <li className={currentPage === 1 ? "page-item invisible" : "page-item"} style={{ display: "inline-block" }}>
          <a onClick={() => onPreviousPage(currentPage)} aria-label="Previous">
            <img
              src={arrowIcon}
              alt="previous arrow"
              style={{ margin: "0 40px 0 0" }}
            />
          </a>
        </li>
        <li className={currentPage === 3 ? "page-item invisible" : "page-item"} style={{ display: "inline-block" }}>
          <a onClick={() => onNextPage(currentPage)} aria-label="Next">
            <img src={arrowIcon} alt="next arrow" style={{ transform: "rotate(180deg)" }} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
