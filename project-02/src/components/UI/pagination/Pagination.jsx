import React from 'react';
import { getPagesArray } from './../../../utils/pages';

export const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = getPagesArray(totalPages);

  return (
    <div className="page__wrapper">
      {pagesArray.map((pageItem) => {
        return (
          <span
            key={pageItem}
            className={page === pageItem ? "page page__current" : "page"}
            onClick={() => changePage(pageItem)}
          >
            {pageItem}
          </span>
        );
      })}
    </div>
  );
};
