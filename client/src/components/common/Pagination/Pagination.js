import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Pagination({ totalItems, itemCountPerPage, pageCount, currentPage }) {
    const totalPages = Math.ceil(totalItems / itemCountPerPage);
    const [start, setStart] = useState(1);
    //const noPrev = start === 1;
    //const noNext = start + pageCount - 1 >= totalPages;

  useEffect(() => {
    import('./Pagination.css');
    if (currentPage === start + pageCount) setStart((prev) => prev + pageCount);
    if (currentPage < start) setStart((prev) => prev - pageCount);
  }, [currentPage, pageCount, start]);

  return (
    <div className="pager-wrap">
        <ul>
            <li className="btn-pager prev">
                <Link to={`?page=${start - 1}`}></Link>
            </li>
            {[...Array(pageCount)].map((a, i) => (
                <>
                {start + i <= totalPages && (
                    <li key={i}>
                    <Link 
                        to={`?page=${start + i}`}>
                        {start + i}
                    </Link>
                    </li>
                )}
                </>
            ))}
            <li className="btn-pager next">
                <Link to={`?page=${start + pageCount}`}></Link>
            </li>
        </ul>
    </div>
  );
}

export default Pagination;
