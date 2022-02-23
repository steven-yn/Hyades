import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainPage from "./pages/MainPage";

afterEach(cleanup);
test("renders learn react link", () => {
  render(<MainPage />);
  const linkElement = screen.getByText(/yoonOcean/i);
  expect(linkElement).toBeInTheDocument();
});
