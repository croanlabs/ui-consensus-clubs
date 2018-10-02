import React, { Component } from "react";
import arrowIcon from "../assets/icons/polls/next@2x.svg";

const Pagination = props => {
  const { onNextPage, onPreviousPage, currentPage, itemCount } = props;
  let nextArrowClassName;
  if (currentPage === 1) {
    nextArrowClassName = "currentPageIsOne";
  } else if (currentPage === itemCount) {
    nextArrowClassName = "invisible";
  }
  return (
    // 1, 2, 3 buttons
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {/* arrow buttons */}

        <li className={currentPage === 1 ? "invisible" : ""}>
          <a onClick={() => onPreviousPage(currentPage)} aria-label="Previous">
            <img
              src={arrowIcon}
              alt="previous arrow"
              style={{ margin: "0 40px 0 0" }}
            />
          </a>
        </li>
        <li className={nextArrowClassName}>
          <a onClick={() => onNextPage(currentPage)} aria-label="Next">
            <img
              src={arrowIcon}
              alt="next arrow"
              style={{ transform: "rotate(180deg)" }}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
