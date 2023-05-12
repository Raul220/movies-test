import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { BrowserRouter } from "react-router-dom";

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

  it("Check is the button first page is disabled at start", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const firstPageButton = screen.getByTestId("go-first-page-buttom");
    expect(firstPageButton).toBeDisabled();
  });

  it("Check is the button previous page is disabled at start", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const previousPageButton = screen.getByTestId("go-previous-page-buttom");
    expect(previousPageButton).toBeDisabled();
  });

  it("Check is the button next page is not disabled at start", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const nextPageButton = screen.getByTestId("go-next-page-button");
    expect(nextPageButton).not.toBeDisabled();
  });

  it("Check is the button last page is disabled at start", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const lastPageButton = screen.getByTestId("go-last-page-button");
    expect(lastPageButton).not.toBeDisabled();
  });
  
  it("Check is the button last page is disabled at start", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const lastPageButton = screen.getByTestId("go-last-page-button");
    expect(lastPageButton).not.toBeDisabled();
  });

  it("Check is the indicator is 1 at start", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const indicator = screen.getByTestId("current-page");
    expect(indicator).toBe('1 / 500');
  });
});
