import { Link } from "react-router-dom";
import Characters from "../components/characters";
import Pagination from "../components/pagination";
import SearchCharacters from "../components/searchCharacters";
import useCharactersPagination from "../hooks/useCharactersPagination";
import { getCharacters } from "../service/api/marvelApi";
import { CHARACTERS_TO_SHOW } from "../utils/charactersPaginationConfig";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const offset =
    (url.searchParams.get("page") || 1) * CHARACTERS_TO_SHOW -
    CHARACTERS_TO_SHOW;
  const { characters, totalCount } = await getCharacters(q, offset);
  return { characters, q, totalCount };
}

const Root = () => {
  const {
    pages,
    handleOnPageChange,
    currentPage,
    showNextPrev,
    totalPages,
    handleNext,
    handlePrev,
  } = useCharactersPagination();

  return (
    <div className="bg-slate-200">
      <div className="container mx-auto py-6 flex flex-col max-w-sm lg:flex-row md:max-w-md lg:container">
        <div className="flex-1">
          <h1 className="text-3xl text-center md:text-left md:text-5xl text-red-500 font-black uppercase">
            <Link to="/">Marvel Heroes</Link>
          </h1>
          <Link to="/characters/bookmarked">Favourite</Link>
        </div>
        <div className="flex-1 ">
          <SearchCharacters />
        </div>
      </div>
      <div className="mx-auto max-w-xs md:container">
        <Characters />
      </div>
      <Pagination
        pages={pages}
        onPageChange={handleOnPageChange}
        currentPage={currentPage}
        showNextPrev={showNextPrev}
        total={totalPages}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default Root;
