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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link to="/">Marvel Heroes</Link>
      <SearchCharacters />
      <Characters />
      <Pagination paginationHook={useCharactersPagination} />
    </div>
  );
};

export default Root;
