import md5 from "md5";
import axios from "axios";

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

export const getCharacters = async (url, nameStartsWith) => {
  const response = await marvelAPI.get(`${baseURL}${url}`, {
    params: {
      ...params,
      nameStartsWith: nameStartsWith ? nameStartsWith : undefined,
    },
  });
  const characters = response.data.data.results;
  return characters;
};

export const getCharacter = async (url, characterId) => {
  console.log("~ characterId", characterId);
  const response = await marvelAPI.get(`${baseURL}${url}/${characterId}`, {
    params: {
      ...params,
    },
  });
  return response.data.data.results[0];
};
