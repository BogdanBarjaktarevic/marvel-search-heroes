import md5 from "md5";
import axios from "axios";
import { CHARACTERS_TO_SHOW } from "../../utils/charactersPaginationConfig";
import { CharacterModel, CharactersModel } from "./../../types/character.type";

const baseURL = "https://gateway.marvel.com:443/v1/public";
const ts = new Date().getTime();
const hash = md5(
  ts +
    "ecf126501e3bcb12164bcee53827f543ce912d0a" +
    "0622c3575ae5bee52acc3124180653bc"
).toString();
const apikey = "0622c3575ae5bee52acc3124180653bc";

const params = {
  apikey,
  ts,
  hash,
};

const marvelAPI = axios.create({
  baseURL: baseURL,
});

export const getCharacters = async (
  nameStartsWith?: string,
  offset?: number
): Promise<{ characters: CharactersModel; totalCount: number }> => {
  try {
    const response = await marvelAPI.get(`${baseURL}/characters`, {
      params: {
        ...params,
        nameStartsWith: nameStartsWith ? nameStartsWith : undefined,
        offset,
        limit: CHARACTERS_TO_SHOW || 20,
      },
    });
    const characters = response.data.data.results;
    const totalCount = response.data.data.total;
    return { characters, totalCount };
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};

export const getCharacter = async (
  characterId: string | undefined
): Promise<CharacterModel> => {
  try {
    const response = await marvelAPI.get(
      `${baseURL}/characters/${characterId}`,
      {
        params: {
          ...params,
        },
      }
    );
    return response.data.data.results[0];
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};
