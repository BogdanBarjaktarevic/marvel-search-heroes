import { createBrowserRouter } from "react-router-dom";
import Pagination from "../components/pagination";
import Root, { loader as rootLoader } from "./root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
  },
]);
