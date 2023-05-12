import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { BrowserRouter } from "react-router-dom";
import "jest-environment-jsdom";

describe("Testing home page", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("Check is the title is rendered", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const titleElement = screen.getByText(/Movies/i);
    expect(titleElement).toBeInTheDocument();
  });
});
