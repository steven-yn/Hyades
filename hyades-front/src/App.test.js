import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@testing-library/jest-dom";
afterEach(cleanup);
test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/yoonOcean/i);
  expect(linkElement).toBeInTheDocument();
});
