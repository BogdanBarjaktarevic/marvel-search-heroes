import { createBrowserRouter } from "react-router-dom";
import { getCharacters } from "../service/api/marvelApi";
import Characters from "./characters";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Characters />,
    loader: getCharacters,
  },
]);
