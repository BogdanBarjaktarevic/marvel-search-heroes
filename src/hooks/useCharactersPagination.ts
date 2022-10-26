import { useLoaderData, useSearchParams } from "react-router-dom";
import { charactersPaginationConfig } from "../utils/charactersPaginationConfig";

const useCharactersPagination = () => {
  const { totalCount, q } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || 1);

  const { showNextPrev, pagesToShow, resultsPerPage } =
    charactersPaginationConfig;

  const totalPages = Math.round(totalCount / resultsPerPage);
  const pagesArr = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pages =
    currentPage > 1
      ? pagesArr.splice(currentPage - 2, pagesToShow)
      : pagesArr.splice(currentPage - 1, pagesToShow);

  const handleOnPageChange = (page) => {
    if (q) {
      setSearchParams({ page, q });
    } else {
      setSearchParams({ page });
    }
  };

  const handleNext = () => {
    if (q) {
      setSearchParams({ page: currentPage + 1, q });
    } else {
      setSearchParams({ page: currentPage + 1 });
    }
  };

  const handlePrev = () => {
    if (q) {
      setSearchParams({ page: currentPage - 1, q });
    } else {
      setSearchParams({ page: currentPage - 1 });
    }
  };

  return {
    handleOnPageChange,
    pages,
    currentPage,
    showNextPrev,
    totalPages,
    handlePrev,
    handleNext,
  };
};

export default useCharactersPagination;
