import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchCharacters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";

  useEffect(() => {
    document.getElementById("q").value = searchTerm;
  }, [searchTerm]);

  const handleOnChange = (event) => {
    setSearchParams({ q: event.target.value });
  };

  return (
    <div>
      <input
        id="q"
        aria-label="Search contacts"
        placeholder="Search"
        type="search"
        name="q"
        defaultValue={searchTerm}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchCharacters;
