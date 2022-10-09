import { Suspense, useState } from "react";
import useSWR from "swr";
import { getCharacters } from "../service/api/marvelApi";
import Characters from "../components/characters";
import SearchCharacters from "../components/searchCharacters";
import { useDebounce } from "../hooks/useDebounce";

const Root = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const defferedTerm = useDebounce(searchTerm, 500);

  const { data: characters } = useSWR(
    ["/characters", defferedTerm],
    getCharacters,
    {
      suspense: true,
    }
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Marvel Heroes</h1>
      <SearchCharacters searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Suspense fallback={<div>Loading...</div>}>
        <Characters characters={characters} />
      </Suspense>
    </div>
  );
};

export default Root;
