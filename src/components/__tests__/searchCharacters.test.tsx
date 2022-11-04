import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  createMemoryRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import SearchCharacters from "../searchCharacters";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigation: jest.fn().mockImplementation(() => {
    return { location: { pathname: "/", search: "" } };
  }),
}));

const fake_root_loader = {
  characters: [],
  totalCount: 0,
  q: "",
};
const routes = [
  {
    path: "/",
    element: <SearchCharacters />,
    loader: () => fake_root_loader,
  },
];

const router = createMemoryRouter(routes, {});

test("should update search input correctly", async () => {
  (useNavigation as jest.Mock).mockImplementation(() => {
    return { location: {} };
  });
  render(<RouterProvider router={router} />);
  const searchInput: HTMLInputElement = screen.getByRole("searchbox", {
    name: /search characters/i,
  });
  userEvent.type(searchInput, "character_1");
  await act(() => {
    (useNavigation as jest.Mock).mockImplementation(() => {
      return {
        location: {},
      };
    });
  });

  expect(searchInput.value).toEqual("character_1");
});

test("fasfasfas", async () => {
  (useNavigation as jest.Mock).mockImplementation(() => {
    return { location: { search: "?q=fake_query" } };
  });

  render(<RouterProvider router={router} />);
  expect(screen.getByText("loading.svg")).toBeInTheDocument();
});
