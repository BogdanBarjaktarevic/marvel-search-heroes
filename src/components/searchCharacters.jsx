import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const SearchCharacters = () => {
  const [val, setVal] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  const isFirstSearch = searchTerm === null;
  const defVal = useDebounce(val, 1000);

  useEffect(() => {
    if (defVal || !isFirstSearch) {
      setSearchParams({ q: defVal });
    }
  }, [defVal]);

  const handleOnChange = (event) => {
    setVal(event.target.value);
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
