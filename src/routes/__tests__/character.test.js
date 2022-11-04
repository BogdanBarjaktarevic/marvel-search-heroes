import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Character from "../character";

const mocked_character = {
  id: "123",
  name: "fake_character",
  description: "fake_character_description",
  thumbnail: {
    path: "fake_path",
    extension: "fake_extension",
  },
  comics: {
    available: 2,
  },
  events: {
    available: 5,
  },
  series: {
    available: 3,
  },
  stories: {
    available: 1,
  },
};

const fake_character_loader = {
  character: mocked_character,
};
const routes = [
  {
    path: "/characters/:characterId",
    element: <Character />,
    loader: () => fake_character_loader,
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ["/characters/123"],
});

test("should render character data correctly", async () => {
  render(<RouterProvider router={router} />);

  expect(
    screen.getByRole("heading", {
      name: /fake_character/i,
    })
  ).toBeInTheDocument();

  expect(screen.getByText(/fake_character_description/i)).toBeInTheDocument();
  screen.getByRole("img", {
    name: /fake_character/i,
  });
});
