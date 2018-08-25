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
        {/* {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onChangePage(page)}>
              {page}
            </a>
          </li>
        ))} */}
        {/* arrow buttons */}

        <li className={currentPage === 1 ? "page-item invisible" : "page-item"}>
          <a
            // className="page-link"
            onClick={() => onPreviousPage(currentPage)}
            aria-label="Previous"
          >
            <img
              src={previousArrow}
              alt="previous arrow"
              style={{ height: "40px", margin: "0 40px 0 0" }}
            />
            {/* <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span> */}
          </a>
        </li>
        <p> </p>
        <li className={currentPage === 3 ? "page-item invisible" : "page-item"}>
          <a
            // className="page-link"
            onClick={() => onNextPage(currentPage)}
            aria-label="Next"
          >
            <img src={nextArrow} alt="next arrow" style={{ height: "40px" }} />
            {/* <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span> */}
          </a>
        </li>
        {/* <a href="#" className="previous round">
          &#8249;
        </a>
        <a href="#" className="next round">
          &#8250;
        </a> */}
      </ul>
    </nav>
  );
};

export default Pagination;
