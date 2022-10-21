import Icon from "./icon";

const Pagination = ({
  pages,
  onPageChange,
  currentPage,
  total,
  onNext,
  onPrev,
  showNextPrev,
}) => {
  const showPrev = showNextPrev && currentPage > 1;
  const showNext = showNextPrev && currentPage < total;

  if (currentPage > total) {
    return null;
  }

  return (
    <div className="flex justify-evenly md:justify-between items-center container mx-auto border-t py-8">
      <div>
        {showPrev && (
          <div
            className="flex items-center hover:cursor-pointer"
            onClick={onPrev}
          >
            <Icon className="w-6 h-6" name="arrowLeft" />
            <span className="ml-2">Prev</span>
          </div>
        )}
      </div>
      <div className="hidden md:block">
        {pages.map((page) => (
          <button
            className={`px-4 ${
              parseInt(currentPage) === page
                ? "border-t-4 border-red-500"
                : "hover:bg-slate-300"
            }`}
            disabled={parseInt(currentPage) === page}
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <div>
        {showNext && (
          <div
            className="flex items-center hover:cursor-pointer"
            onClick={onNext}
          >
            <span className="mr-2">Next</span>
            <Icon className="w-6 h-6" name="arrowRight" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
