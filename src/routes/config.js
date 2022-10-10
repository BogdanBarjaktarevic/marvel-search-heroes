import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Character from "./character";
import Root from "./root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/characters/:characterId",
    element: (
      <Suspense fallback={<div>Loading character...</div>}>
        <Character />
      </Suspense>
    ),
  },
]);
