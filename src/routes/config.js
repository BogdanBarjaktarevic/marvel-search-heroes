import { createBrowserRouter } from "react-router-dom";
import Root, { loader as rootLoader } from "./root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
  },
]);
