import { useLoaderData, useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [, setSearchParams] = useSearchParams();
  const { totalCount, q } = useLoaderData();
  const totalPages = Math.round(totalCount / 20);
  const pagesArr = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleOnPageChange = (page) => {
    setSearchParams({ page, q });
  };

  return (
    <div>
      {pagesArr.map((page) => (
        <button key={page} onClick={() => handleOnPageChange(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
