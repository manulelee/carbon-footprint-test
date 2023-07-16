import React from "react";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Importa la configurazione di i18next
import PricingPage from "./PricingPage";

describe("Pricing page", () => {
  test("renders component", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PricingPage />
      </I18nextProvider>
    );
    const component = screen.getByTestId("pricingPage");
    if (component === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(component).toBeInTheDocument();
  });

  test("renders title", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PricingPage />
      </I18nextProvider>
    );
    const title = screen.queryByText(i18n.t("pricingPage.title"));
    if (title === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(title).toBeInTheDocument();
  });

  test("renders paragraph", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PricingPage />
      </I18nextProvider>
    );
    const paragraph = screen.queryByText(i18n.t("pricingPage.title"));
    if (paragraph === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(paragraph).toBeInTheDocument();
  });

  test("renders cards", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PricingPage />
      </I18nextProvider>
    );
    const firstCard =
      screen.queryByText(i18n.t("pricingPage.cards.first.title")) &&
      screen.getAllByText(i18n.t("pricingPage.cards.first.description"))[0] &&
      screen.getAllByText(i18n.t("pricingPage.cards.first.unit"))[0] &&
      screen.getAllByText(i18n.t("pricingPage.cards.first.button"))[0] &&
      screen.getAllByText(i18n.t("pricingPage.cards.first.options.first"))[0] &&
      screen.getAllByText(i18n.t("pricingPage.cards.first.options.second"))[0] &&
      screen.getAllByText(i18n.t("pricingPage.cards.first.options.third"))[0] &&
      screen.getAllByText(i18n.t("pricingPage.cards.first.options.fourth"))[0] &&
      screen.getAllByText(i18n.t("pricingPage.cards.first.options.fifth"))[0] &&
      screen.getAllByText(i18n.t("pricingPage.cards.first.options.sixth"))[0];
    if (firstCard === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(firstCard).toBeInTheDocument();

    const secondCard =
      screen.queryByText(i18n.t("pricingPage.cards.second.title")) &&
      screen.getAllByText(i18n.t("pricingPage.cards.second.description"))[1] &&
      screen.getAllByText(i18n.t("pricingPage.cards.second.unit"))[1] &&
      screen.getAllByText(i18n.t("pricingPage.cards.second.button"))[1] &&
      screen.getAllByText(i18n.t("pricingPage.cards.second.options.first"))[1] &&
      screen.getAllByText(i18n.t("pricingPage.cards.second.options.second"))[1] &&
      screen.getAllByText(i18n.t("pricingPage.cards.second.options.third"))[1] &&
      screen.getAllByText(i18n.t("pricingPage.cards.second.options.fourth"))[1] &&
      screen.getAllByText(i18n.t("pricingPage.cards.second.options.fifth"))[1] &&
      screen.getAllByText(i18n.t("pricingPage.cards.second.options.sixth"))[1];
    if (secondCard === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(secondCard).toBeInTheDocument();
  });
});
