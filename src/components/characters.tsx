import { useLoaderData, useNavigation, Link } from "react-router-dom";
import { RootLoaderData } from "../types/character.type";
import { SvgIconsKeys } from "../types/icon.type";
import Icon from "./icon";

interface StatsProps {
  iconName: SvgIconsKeys;
  children: React.ReactNode | React.ReactNode[];
}

const Stats = ({ children, iconName }: StatsProps) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="w-5 h-5 stroke-slate-500" name={iconName} />
      <span className="text-slate-600 text-xs">{children}</span>
    </div>
  );
};

const Characters = () => {
  const { characters } = useLoaderData() as RootLoaderData;
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div
      className={`grid lg:grid-cols-4 gap-3 grid-rows-5 md:grid-cols-2 grid-rows-10  ${
        isLoading ? "opacity-25" : "opacity-100"
      }`}
    >
      {characters.map((character) => (
        <Link key={character.id} to={`/characters/${character.id}`}>
          <div className="shadow-md rounded-md bg-slate-100 hover:brightness-110 h-full w-full flex flex-col">
            <div className="h-48">
              <img
                className="rounded-md h-full w-full"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="mb-6 pt-4 px-4">
                <h5 className="font-bold text-slate-700">{character.name}</h5>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam nulla ea facilis repellendus rem? Ad esse eius minus!
                  Maxime
                </p>
              </div>
              <hr className="border-t border-slate-300" />
              <div className="flex justify-between mb-1 pt-2 px-4">
                <Stats iconName="camera">{character.series.available}</Stats>
                <Stats iconName="events">{character.comics.available}</Stats>
                <Stats iconName="series">{character.stories.available}</Stats>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Characters;
