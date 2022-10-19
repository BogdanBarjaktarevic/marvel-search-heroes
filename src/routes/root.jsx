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
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto py-6 flex">
        <div className="flex-1">
          <Link to="/">
            <h1 className="text-5xl text-red-500 font-black uppercase">
              Marvel Heroes
            </h1>
          </Link>
        </div>
        <div className="flex-1">
          <SearchCharacters />
        </div>
      </div>
      <div className="container mx-auto">
        <Characters />
      </div>
      <Pagination paginationHook={useCharactersPagination} />
    </div>
  );
};

export default Root;
