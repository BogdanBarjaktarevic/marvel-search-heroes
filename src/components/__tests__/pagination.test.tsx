import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "../pagination";

const mock_props = {
  pages: [1, 2, 3, 4, 5],
  onPageChange: jest.fn(),
  currentPage: 3,
  total: 100,
  showNextPrev: true,
  onNext: jest.fn(),
  onPrev: jest.fn(),
};

test("should render all provided pages", async () => {
  render(<Pagination {...mock_props} />);
  mock_props.pages.forEach((page) => {
    expect(screen.getByText(page)).toBeInTheDocument();
  });
});

test("should render next and prev buttons if its showNextPrev equal to true and current page is not 1 or last page", async () => {
  render(<Pagination {...mock_props} />);
  expect(screen.getByText("arrowLeft.svg")).toBeInTheDocument();
  expect(screen.getByText("arrowRight.svg")).toBeInTheDocument();
});

test("should not render next and prev buttons if the showNextPrev is equal to false", async () => {
  const mock_props1 = { ...mock_props, showNextPrev: false };
  render(<Pagination {...mock_props1} />);
  expect(screen.queryByText("arrowLeft.svg")).not.toBeInTheDocument();
  expect(screen.queryByText("arrowRight.svg")).not.toBeInTheDocument();
});

test("should not render arrowLeft if the current page is 1 and showNextPrev is true", async () => {
  const mock_props2 = { ...mock_props, currentPage: 1 };

  render(<Pagination {...mock_props2} />);
  expect(screen.queryByText("arrowLeft.svg")).not.toBeInTheDocument();
  expect(screen.getByText("arrowRight.svg")).toBeInTheDocument();
});

test("should not render arrowRight if the current page is last page and showNextPrev is true", async () => {
  const mock_props2 = { ...mock_props, currentPage: 5, total: 5 };

  render(<Pagination {...mock_props2} />);
  expect(screen.getByText("arrowLeft.svg")).toBeInTheDocument();
  expect(screen.queryByText("arrowRight.svg")).not.toBeInTheDocument();
});

test("should return nothing if the current page is greater than total", async () => {
  const mock_props3 = { ...mock_props, currentPage: 5, total: 3 };

  const { container } = render(<Pagination {...mock_props3} />);
  expect(container).toBeEmptyDOMElement();
});

test("should change page on click correctly", async () => {
  render(<Pagination {...mock_props} />);

  const pageBtn = screen.getByRole("button", {
    name: /4/i,
  });

  userEvent.click(pageBtn);
  expect(mock_props.onPageChange).toHaveBeenCalled();
});

test("should display red border above active page", async () => {
  render(<Pagination {...mock_props} />);

  const activePage = screen.getByRole("button", {
    name: /3/i,
  });
  expect(activePage.className).toContain("border-red-500");
});

test("should handle prev button navigation correctly", async () => {
  render(<Pagination {...mock_props} />);

  const prevBtn = screen.getByText(/prev/i);
  userEvent.click(prevBtn);
  expect(mock_props.onPrev).toHaveBeenCalled();
});

test("should handle next button navigation correctly", async () => {
  render(<Pagination {...mock_props} />);

  const nextBtn = screen.getByText(/next/i);
  userEvent.click(nextBtn);
  expect(mock_props.onNext).toHaveBeenCalled();
});
