import { useLoaderData, useNavigation, Link } from "react-router-dom";

const Characters = () => {
  const { characters } = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        opacity: isLoading ? 0.2 : 1,
      }}
    >
      {characters.map((character) => (
        <Link key={character.id} to={`/characters/${character.id}`}>
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
