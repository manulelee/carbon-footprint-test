import React from "react";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Importa la configurazione di i18next
import AboutUsPage from "./AboutUsPage";

describe("About us page", () => {
  test("renders component", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <AboutUsPage />
      </I18nextProvider>
    );
    const component = screen.getByTestId("aboutUsPage");
    if (component === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(component).toBeInTheDocument();
  });

  test("renders title", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <AboutUsPage />
      </I18nextProvider>
    );
    const title = screen.queryByText(i18n.t("aboutPage.title"));
    if (title === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(title).toBeInTheDocument();
  });

  test("renders first paragraph", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <AboutUsPage />
      </I18nextProvider>
    );
    const paragraph = screen.queryByText(i18n.t("aboutPage.firstP"));
    if (paragraph === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(paragraph).toBeInTheDocument();
  });

  test("renders second paragraph", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <AboutUsPage />
      </I18nextProvider>
    );
    const paragraph = screen.queryByText(i18n.t("aboutPage.secondP"));
    if (paragraph === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(paragraph).toBeInTheDocument();
  });
});
