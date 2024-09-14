'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { FC, useCallback } from 'react';
import styles from './Pagination.module.scss';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const generatePageNumbers = useCallback(() => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1, 2);

      if (currentPage <= 4) {
        pageNumbers.push(3, 4, 5, '...');
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push('...', totalPages - 4, totalPages - 3, totalPages - 2);
      } else {
        pageNumbers.push(
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...'
        );
      }

      pageNumbers.push(totalPages - 1, totalPages);
    }

    return pageNumbers;
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pageNumbers = generatePageNumbers();

  return (
    <nav
      className={styles.pagination__isRounded}
      role="navigation"
      aria-label="pagination"
    >
      <button
        className={styles.pagination__previous}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        Previous
      </button>

      <button
        className={styles.pagination__next}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next
      </button>

      <ul className={styles.pagination__list}>
        {pageNumbers.map((pageNumber, index) => (
          <li key={index}>
            {typeof pageNumber === 'number' ? (
              <Link
                href={{ pathname, query: { page: pageNumber.toString() } }}
                className={
                  pageNumber === currentPage
                    ? styles.paginationLink__isCurrent
                    : styles.pagination__link
                }
                aria-label={`Go to page ${pageNumber}`}
              >
                {pageNumber}
              </Link>
            ) : (
              <span className={styles.pagination__ellipsis}>...</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
