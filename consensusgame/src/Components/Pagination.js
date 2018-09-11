import React from "react";
import previousArrow from "../assets/icons/next@2x.svg";
import nextArrow from "../assets/icons/next@2x.svg";

const Pagination = props => {
  const { onNextPage, onPreviousPage, currentPage, itemCount } = props;

  let nextArrowStyle;
  if (currentPage === 1) {
    nextArrowStyle = { margin: "0 0 0 70px" };
  } else if (currentPage === 3) {
    nextArrowStyle = { display: "none" };
  } else {
    nextArrowStyle = { display: "inline-block" };
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {/* arrow buttons */}
        <li
          className={"page-item"}
          style={{ display: currentPage === 1 ? "none" : "inline-block" }}
        >
          <a onClick={() => onPreviousPage(currentPage)} aria-label="Previous">
            <img
              src={previousArrow}
              alt="previous arrow"
              style={{ margin: "0 40px 0 0" }}
            />
          </a>
        </li>

        <li className={"page-item"} style={nextArrowStyle}>
          <a onClick={() => onNextPage(currentPage)} aria-label="Next">
            <img
              src={nextArrow}
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
