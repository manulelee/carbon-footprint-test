import React from "react";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Importa la configurazione di i18next
import FeaturePage from "./FeaturesPage";

describe("Features page", () => {
  test("renders component", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <FeaturePage />
      </I18nextProvider>
    );
    const component = screen.getByTestId("featuresPage");
    if (component === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(component).toBeInTheDocument();
  });

  test("renders title", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <FeaturePage />
      </I18nextProvider>
    );
    const title = screen.queryByText(i18n.t("featuresPage.title"));
    if (title === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(title).toBeInTheDocument();
  });

  test("renders first paragraph", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <FeaturePage />
      </I18nextProvider>
    );
    const paragraph = screen.queryByText(i18n.t("featuresPage.firstP"));
    if (paragraph === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(paragraph).toBeInTheDocument();
  });

  test("renders cards", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <FeaturePage />
      </I18nextProvider>
    );
    const firstCard =
      screen.queryByText((content, element) => {
        return /CO2/ && content.includes(i18n.t("featuresPage.cards.first.title"));
      }) && screen.queryByText(i18n.t("featuresPage.cards.first.description"));
    if (firstCard === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(firstCard).toBeInTheDocument();

    const secondCard =
      screen.queryByText(i18n.t("featuresPage.cards.second.title")) &&
      screen.queryByText(i18n.t("featuresPage.cards.second.description"));
    if (secondCard === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(secondCard).toBeInTheDocument();

    const thirdCard =
      screen.queryByText(i18n.t("featuresPage.cards.third.title")) &&
      screen.queryByText(i18n.t("featuresPage.cards.third.description"));
    if (thirdCard === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(thirdCard).toBeInTheDocument();

    const fourthCard =
      screen.queryByText(i18n.t("featuresPage.cards.fourth.title")) &&
      screen.queryByText(i18n.t("featuresPage.cards.fourth.description"));
    if (fourthCard === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(fourthCard).toBeInTheDocument();
  });
});
