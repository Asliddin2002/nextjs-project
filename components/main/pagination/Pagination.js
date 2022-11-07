import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Pagination = () => {
  return (
    <div className="pagination_wraper">
      <FiChevronLeft />
      <div className="pagination">
        <div className="pagination_count">1</div>
        <div className="pagination_count active">2</div>
        <div className="pagination_count">3</div>
      </div>
      <FiChevronRight />
    </div>
  );
};

export default Pagination;
