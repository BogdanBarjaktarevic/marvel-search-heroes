import { Link } from "react-router-dom";
import useSWR from "swr";
import { getCharacters } from "../service/api/marvelApi";

const Characters = ({ searchTerm }) => {
  const { data: characters } = useSWR(
    ["/characters", searchTerm],
    getCharacters,
    {
      suspense: true,
    }
  );

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {characters.map((character) => (
        <Link to={`/characters/${character.id}`} key={character.id}>
          <div>
            <h6>{character.name}</h6>
            <img
              width="150px"
              height="150px"
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Characters;
