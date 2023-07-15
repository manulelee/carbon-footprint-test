import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Importa la configurazione di i18next

test("Home page title", () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
  const titleElement = screen.queryByText(i18n.t("homePage.test.title"));
  if (titleElement === null) {
    throw new Error("Element not found in the DOM");
  }
  expect(titleElement).toBeInTheDocument();
});
