import React, { Component } from "react";
import previousArrow from "./Icons/Polls/polls_arrow_previous.png";
import nextArrow from "./Icons/Polls/polls_arrow_next.png";

const Pagination = props => {
  const pages = [1, 2, 3];
  const { onNextPage, onPreviousPage, currentPage } = props;

  return (
    // 1, 2, 3 buttons
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {/* arrow buttons */}

        <li className={currentPage === 1 ? "page-item invisible" : "page-item"}>
          <a onClick={() => onPreviousPage(currentPage)} aria-label="Previous">
            <img
              src={previousArrow}
              alt="previous arrow"
              style={{ height: "40px", margin: "0 40px 0 0" }}
            />
          </a>
        </li>
        <p> </p>
        <li className={currentPage === 3 ? "page-item invisible" : "page-item"}>
          <a onClick={() => onNextPage(currentPage)} aria-label="Next">
            <img src={nextArrow} alt="next arrow" style={{ height: "40px" }} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
