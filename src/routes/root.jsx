import Characters from "../components/characters";
import SearchCharacters from "../components/searchCharacters";
import { getCharacters } from "../service/api/marvelApi";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const characters = await getCharacters(q);
  return { characters, q };
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
    </div>
  );
};

export default Root;
