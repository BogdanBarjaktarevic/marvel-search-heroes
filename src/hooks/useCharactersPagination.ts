import { RootLoaderData } from "./../types/character.type";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { charactersPaginationConfig } from "../utils/charactersPaginationConfig";

const useCharactersPagination = () => {
  const { totalCount, q } = useLoaderData() as RootLoaderData;
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = +(searchParams?.get("page") || 1);

  const { showNextPrev, pagesToShow, resultsPerPage } =
    charactersPaginationConfig;

  const totalPages = Math.round(totalCount / resultsPerPage);
  const pagesArr = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pages =
    currentPage > 1
      ? pagesArr.splice(currentPage - 2, pagesToShow)
      : pagesArr.splice(currentPage - 1, pagesToShow);

  const handleOnPageChange = (page: number) => {
    const pageParam = page.toString();
    if (q) {
      setSearchParams({ page: pageParam, q });
    } else {
      setSearchParams({ page: pageParam });
    }
  };

  const handleNext = () => {
    const pageParam = (currentPage + 1).toString();
    if (q) {
      setSearchParams({ page: pageParam, q });
    } else {
      setSearchParams({ page: pageParam });
    }
  };

  const handlePrev = () => {
    const pageParam = (currentPage - 1).toString();
    if (q) {
      setSearchParams({ page: pageParam, q });
    } else {
      setSearchParams({ page: pageParam });
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
