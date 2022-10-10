import { Suspense, useState } from "react";
import Characters from "../components/characters";
import SearchCharacters from "../components/searchCharacters";
import { useDebounce } from "../hooks/useDebounce";

const Root = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debauncedTerm = useDebounce(searchTerm, 500);

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
        <Characters searchTerm={debauncedTerm} />
      </Suspense>
    </div>
  );
};

export default Root;
