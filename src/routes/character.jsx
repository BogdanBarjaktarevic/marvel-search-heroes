import { Link, useLoaderData } from "react-router-dom";
import { getCharacter } from "../service/api/marvelApi";
import Icon from "../components/icon";

export async function loader({ params }) {
  const character = await getCharacter(params.characterId);
  return character;
}

const Stats = ({ children, text }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="mb-2 text-3xl font-extrabold">{children}</span>
      <p className="font-light text-gray-500 dark:text-gray-400">{text}</p>
    </div>
  );
};

const Character = () => {
  const character = useLoaderData();

  return (
    <div className="bg-slate-200 h-screen flex md:justify-center md:items-center mx-auto flex-col">
      <div className="self-center">
        <Link to="/">
          <div className="p-4 bg-red-500 rounded-full	mb-4 hover:bg-red-600 mt-2 hover:cursor-pointer">
            <Icon className="w-6 h-6 fill-white stroke-white" name="home" />
          </div>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:container shadow-md rounded-md bg-slate-100 p-6">
        <div className="max-w-sm">
          <img
            className="rounded-md"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
        </div>
        <div className="grow mt-4 md:mt-0 md:ml-6 flex flex-col justify-between">
          <div>
            <h5 className="font-bold text-slate-700">{character.name}</h5>
            <h5 className="mt-2">Description</h5>
            <p className="text-xs">{character.description}</p>
          </div>
          <div className="flex justify-between mt-8 md:mt-0">
            <Stats text="Comics">{character.comics.available}</Stats>
            <Stats text="Events">{character.events.available}</Stats>
            <Stats text="Series">{character.series.available}</Stats>
            <Stats text="Stories">{character.stories.available}</Stats>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
