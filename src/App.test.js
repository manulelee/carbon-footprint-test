import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Importa la configurazione di i18next

describe("App component", () => {
  test("renders navbar", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    const navbar = screen.getByTestId("navbar");
    if (navbar === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(navbar).toBeInTheDocument();
  });

  test("renders component", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    const homePage = screen.getByTestId("homePage");
    if (homePage === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(homePage).toBeInTheDocument();
  });

  test("renders footer", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    const footer = screen.getByTestId("footer");
    if (footer === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(footer).toBeInTheDocument();
  });
});
