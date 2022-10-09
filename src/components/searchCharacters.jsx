const SearchCharacters = ({ searchTerm, setSearchTerm }) => {
  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        id="q"
        aria-label="Search contacts"
        placeholder="Search"
        type="search"
        name="q"
        value={searchTerm}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchCharacters;
