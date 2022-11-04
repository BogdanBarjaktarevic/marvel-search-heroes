import { render, screen } from "@testing-library/react";
import Icon from "../icon";

test("should render icon correctly  ", () => {
  render(<Icon name="search" className="w-6 h-6" />);
  expect(screen.getByText("search.svg")).toBeInTheDocument();
});
