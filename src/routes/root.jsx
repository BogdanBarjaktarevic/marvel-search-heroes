import Characters from "../components/characters";
import Pagination from "../components/pagination";
import SearchCharacters from "../components/searchCharacters";
import { getCharacters } from "../service/api/marvelApi";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const offset = url.searchParams.get("page") * 20;
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
      <h1>Marvel Heroes</h1>
      <SearchCharacters />
      <Characters />
      <Pagination />
    </div>
  );
};

export default Root;
