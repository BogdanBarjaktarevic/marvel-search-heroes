import { Link, useLoaderData } from "react-router-dom";
import { getCharacter } from "../service/api/marvelApi";

export async function loader({ params }) {
  const character = await getCharacter(params.characterId);
  return character;
}

const Character = () => {
  const character = useLoaderData();

  return (
    <div className="bg-slate-200 h-screen flex md:justify-center md:items-center mx-auto flex-col">
      <div className="self-center">
        <Link to="/">
          <div className="p-4 bg-red-500 rounded-full	mb-4 hover:bg-red-600 mt-2 hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 fill-white stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
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
            <div className="flex flex-col items-center">
              <span className="mb-2 text-3xl font-extrabold">
                {character.comics.available}
              </span>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Comics
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-2 text-3xl font-extrabold">
                {character.events.available}
              </span>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Events
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-2 text-3xl font-extrabold">
                {character.series.available}
              </span>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Series
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-2 text-3xl font-extrabold">
                {character.stories.available}
              </span>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Stories
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
