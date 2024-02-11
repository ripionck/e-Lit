'use client';

import { Pagination } from 'flowbite-react';
import { useState } from 'react';

const PaginationX = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center my-4">
      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};
export default PaginationX;
