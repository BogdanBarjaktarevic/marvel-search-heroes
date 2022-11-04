import { render, screen } from "@testing-library/react";
import {
  createMemoryRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import Characters from "../characters";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigation: jest.fn().mockReturnValue({ state: "idle" }),
}));

const mocked_characters = [
  {
    name: "character_1",
    id: "1234",
    thumbnail: {
      path: "fake_path",
      extension: "fake_ext",
    },
    series: {
      available: 10,
    },
    comics: {
      available: 20,
    },
    stories: {
      available: 30,
    },
  },
  {
    name: "character_2",
    id: "12345",
    thumbnail: {
      path: "fake_path",
      extension: "fake_ext",
    },
    series: {
      available: 10,
    },
    comics: {
      available: 20,
    },
    stories: {
      available: 30,
    },
  },
];

const fake_root_loader = {
  characters: mocked_characters,
  totalCount: mocked_characters.length,
};
const routes = [
  {
    path: "/",
    element: <Characters />,
    loader: () => fake_root_loader,
  },
];

const router = createMemoryRouter(routes, {});

test("should render characters correctly", async () => {
  (useNavigation as jest.Mock).mockImplementation(() => {
    return { state: "idle" };
  });
  render(<RouterProvider router={router} />);

  expect(screen.getAllByRole("heading")).toHaveLength(2);
});

test("should render character information correctly", async () => {
  (useNavigation as jest.Mock).mockImplementation(() => {
    return { state: "idle" };
  });
  render(<RouterProvider router={router} />);

  const character1 = screen.getByRole("heading", {
    name: /character_1/i,
  });

  expect(character1).toHaveTextContent("character_1");
});

test("should add opacity-25 class when loading", async () => {
  (useNavigation as jest.Mock).mockImplementation(() => {
    return { state: "loading" };
  });
  render(<RouterProvider router={router} />);
  const container = screen.getByTestId("characters-container");
  expect(container.className).toContain("opacity-25");
});
