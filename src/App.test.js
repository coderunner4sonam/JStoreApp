import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("chek_hello", () => {
  render(<App />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
