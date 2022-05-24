import React from 'react';
import './Pagination.css'

const Pagination = ({ allPosts, currentPage, postsPerPage, paginate }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(allPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  } 
  
  return (
    <nav className='paginationnav'>
      <div className='ulnav'>
        {pageNumbers.map(number => (
          <button key={number} className={currentPage==number?'activePage':null} onClick={() => paginate(number)}>
              {number}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;