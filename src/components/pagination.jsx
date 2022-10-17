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
    <div>
      {showPrev && <button onClick={handlePrev}>Prev</button>}
      {showPages.map((page) => (
        <button
          disabled={parseInt(currentPage) === page}
          key={page}
          onClick={() => handleOnPageChange(page)}
        >
          {page}
        </button>
      ))}
      {showNext && <button onClick={handleNext}>Next</button>}
    </div>
  );
};

export default Pagination;
