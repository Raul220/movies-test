import { fireEvent, render, screen } from "@testing-library/react";
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

  it("Check if the title is rendered", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const titleElement = screen.getByText(/Movies/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("Check if the button first page is disabled at start", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const firstPageButton = screen.getByTestId("go-first-page-buttom");
    expect(firstPageButton).toBeDisabled();
  });

  it("Check if the button previous page is disabled at start", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const previousPageButton = screen.getByTestId("go-previous-page-buttom");
    expect(previousPageButton).toBeDisabled();
  });

  it("Check if the button next page is not disabled at start", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const nextPageButton = screen.getByTestId("go-next-page-button");
    expect(nextPageButton).not.toBeDisabled();
  });

  it("Check if the button last page is disabled at start", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const lastPageButton = screen.getByTestId("go-last-page-button");
    expect(lastPageButton).not.toBeDisabled();
  });
  
  it("Check if the button last page is disabled at start", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const lastPageButton = screen.getByTestId("go-last-page-button");
    expect(lastPageButton).not.toBeDisabled();
  });

  it("Check if the indicator is 1 at start", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const indicator = screen.getByTestId("current-page");
    expect(indicator).toBe('1 / 500');
  });

  it("Check if the indicator is 2 when click next page button", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const nextPageButton = screen.getByTestId("go-next-page-button");
    await fireEvent.click(nextPageButton);
    const indicator = screen.getByTestId("current-page");
    expect(indicator).toBe('2 / 500');
  });

  it("Check if the last page button is disable when was clicked", async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const lastPageButton = screen.getByTestId("go-last-page-button");
    await fireEvent.click(lastPageButton);
    expect(lastPageButton).toBeDisabled();
  });
});
