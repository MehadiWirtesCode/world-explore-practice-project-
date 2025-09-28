export const Pagination = ({ totalCountries, cardPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalCountries / cardPerPage);

  const getPages = () => {
    let pages = [];

    if (totalPages <= 5) {
      // Few pages → show all
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 2) {
        pages = [1, 2, 3, "...", totalPages];
      } else if (currentPage >= totalPages - 1) {
        pages = [1, "...", totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
      }
    }

    return pages;
  };

  return (
    <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-6">
      {/* Prev button */}
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        className="px-2 sm:px-3 py-1 rounded-md border bg-gray-200 text-gray-700 disabled:opacity-50 text-sm sm:text-base"
      >
        Prev
      </button>

      {/* Page numbers */}
      {getPages().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2 sm:px-3 py-1 text-gray-500">...</span>
        ) : (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-2 sm:px-3 py-1 rounded-md border transition-all text-sm sm:text-base ${
              currentPage === page
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-200 text-gray-800 border-gray-400 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        className="px-2 sm:px-3 py-1 rounded-md border bg-gray-200 text-gray-700 disabled:opacity-50 text-sm sm:text-base"
      >
        Next
      </button>
    </div>
  );
};
