const Characters = ({ characters }) => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {characters.map((character) => (
        <div key={character.id}>
          <h6>{character.name}</h6>
          <img
            width="150px"
            height="150px"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Characters;
