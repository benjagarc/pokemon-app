"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PaginationProps } from "./interface";
import { memo } from "react";

const Pagination = ({
  currentPage,
  totalPages,
  basePath = "/pokemon",
}: PaginationProps) => {
  const searchParams = useSearchParams();

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    return `${basePath}?${params.toString()}`;
  };

  const pagesToShow = 2;
  const startPage = Math.max(1, currentPage - pagesToShow);
  const endPage = Math.min(totalPages, currentPage + pagesToShow);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center items-center gap-2 mt-8 text-sm text-black font-medium flex-wrap">
      {currentPage > 1 && (
        <Link
          href={createPageLink(currentPage - 1)}
          className="px-1 py-1 rounded bg-white/10 hover:bg-pokemon-yellow/80 transition"
        >
          ← Prev
        </Link>
      )}

      {startPage > 1 && (
        <>
          <Link
            href={createPageLink(1)}
            className="px-1 py-1 rounded hover:bg-pokemon-yellow/80"
          >
            1
          </Link>
          {startPage > 2 && <span>...</span>}
        </>
      )}

      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={createPageLink(page)}
          className={`px-1 py-1 rounded ${
            page === currentPage
              ? "bg-yellow-400 text-black font-bold shadow"
              : "hover:bg-pokemon-yellow/80"
          }`}
        >
          {page}
        </Link>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2">...</span>}
          <Link
            href={createPageLink(totalPages)}
            className="px-1 py-1 rounded hover:bg-pokemon-yellow/80"
          >
            {totalPages}
          </Link>
        </>
      )}

      {currentPage < totalPages && (
        <Link
          href={createPageLink(currentPage + 1)}
          className="px-1 py-1 rounded  hover:bg-pokemon-yellow/80 transition"
        >
          Next →
        </Link>
      )}
    </nav>
  );
};

export default memo(Pagination);
