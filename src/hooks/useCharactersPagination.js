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
  const showPages =
    currentPage > 1
      ? pagesArr.splice(currentPage - 2, pagesToShow)
      : pagesArr.splice(currentPage - 1, pagesToShow);

  const handleOnPageChange = (page) => {
    setSearchParams({ page, q });
  };

  const handleNext = () => {
    setSearchParams({ page: currentPage + 1, q });
  };

  const handlePrev = () => {
    setSearchParams({ page: currentPage - 1, q });
  };

  return {
    handleOnPageChange,
    showPages,
    currentPage,
    showNextPrev,
    totalPages,
    handlePrev,
    handleNext,
  };
};

export default useCharactersPagination;
