import { createBrowserRouter } from "react-router-dom";
import Character, { loader as characterLoader } from "./character";
import LikedCharacters, { loader as likedLoader } from "./likedCharacters";
import Root, { loader as rootLoader } from "./root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    errorElement: <div>Something went wrong</div>,
  },
  {
    path: "characters/:characterId",
    element: <Character />,
    loader: characterLoader,
  },
  {
    path: "characters/bookmarked",
    element: <Root />,
    loader: likedLoader,
  },
]);
