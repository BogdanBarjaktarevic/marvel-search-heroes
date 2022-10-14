import { useLoaderData } from "react-router-dom";
import { getCharacter } from "../service/api/marvelApi";

export async function loader({ params }) {
  const character = await getCharacter(params.characterId);
  return character;
}

const Character = () => {
  const character = useLoaderData();

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
