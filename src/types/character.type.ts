export interface CharacterModel {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
  };
  events: {
    available: number;
  };
  series: {
    available: number;
  };
  stories: {
    available: number;
  };
}

export interface CharactersModel {
  characters: CharacterModel[];
}

export type RootLoaderData = {
  characters: CharacterModel[];
  q: string;
  totalCount: number;
};
