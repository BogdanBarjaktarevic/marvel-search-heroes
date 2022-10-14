import { useLoaderData, useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { totalCount, q } = useLoaderData();
  const currentPage = searchParams.get("page") || 1;
  console.log("~ currentPage", currentPage);
  const totalPages = Math.round(totalCount / 20);
  const pagesArr = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pagesToShow =
    currentPage > 1
      ? pagesArr.splice(currentPage - 2, 3)
      : pagesArr.splice(currentPage - 1, 3);

  const handleOnPageChange = (page) => {
    setSearchParams({ page, q });
  };

  return (
    <div>
      {pagesToShow.map((page) => (
        <button
          disabled={currentPage == page}
          key={page}
          onClick={() => handleOnPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
