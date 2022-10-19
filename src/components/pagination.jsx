const Pagination = ({ paginationHook }) => {
  const {
    showPages,
    handleOnPageChange,
    currentPage,
    showNextPrev,
    totalPages,
    handleNext,
    handlePrev,
  } = paginationHook();

  const showPrev = showNextPrev && currentPage > 1;
  const showNext = showNextPrev && currentPage < totalPages;

  if (currentPage > totalPages) {
    return null;
  }

  return (
    <div className="flex justify-between items-center container mx-auto border-t py-8">
      <div>
        {showPrev && (
          <div
            className="flex items-center hover:cursor-pointer"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <span className="ml-2">Prev</span>
          </div>
        )}
      </div>
      <div>
        {showPages.map((page) => (
          <button
            className={`px-4 ${
              parseInt(currentPage) === page ? "border-t-4 border-red-500" : ""
            }`}
            disabled={parseInt(currentPage) === page}
            key={page}
            onClick={() => handleOnPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <div>
        {showNext && (
          <div
            className="flex items-center hover:cursor-pointer"
            onClick={handleNext}
          >
            <span className="mr-2">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
