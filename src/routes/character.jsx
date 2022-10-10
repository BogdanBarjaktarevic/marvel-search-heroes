import { useParams } from "react-router-dom";
import useSWR from "swr";
import { getCharacter } from "../service/api/marvelApi";

const Character = () => {
  const { characterId } = useParams();
  const { data: character } = useSWR(
    ["/characters", characterId],
    getCharacter,
    { suspense: true, revalidateOnFocus: false }
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{character.name}</h1>
      <h5>Appeared in: {character.comics.available} comics</h5>
      <p>{character.description}</p>
      <img
        width="300"
        height="300"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
    </div>
  );
};

export default Character;
