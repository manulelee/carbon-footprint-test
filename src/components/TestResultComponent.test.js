import React from "react";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Importa la configurazione di i18next
import TestResultComponent from "./TestResultComponent";

describe("Test Result component", () => {
  let result = {
    url: "https://www.google.com/",
    green: true,
    bytes: 200150,
    cleanerThan: 0.96,
    statistics: {
      adjustedBytes: 151113.25,
      energy: 0.0001139954966492951,
      co2: {
        grid: {
          grams: 0.05038600951898844,
          litres: 0.028024698494461365,
        },
        renewable: {
          grams: 0.04368307431600989,
          litres: 0.024296525934564696,
        },
      },
    },
    timestamp: 1689436259,
  };
  test("renders title", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <TestResultComponent result={result} />
      </I18nextProvider>
    );
    const title = screen.queryByText(i18n.t("homePage.resultComponent.title"));
    if (title === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(title).toBeInTheDocument();
  });

  test("renders subtitle", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <TestResultComponent result={result} />
      </I18nextProvider>
    );
    const subtitle = screen.queryByText(
      result.url.slice(8, result.url.length - 1) +
        " " +
        i18n.t("homePage.resultComponent.subtitle1") +
        (result.cleanerThan * 100).toFixed(0) +
        i18n.t("homePage.resultComponent.subtitle2")
    );
    if (subtitle === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(subtitle).toBeInTheDocument();
  });

  describe("renders cards", () => {
    test("first positive", () => {
      render(
        <I18nextProvider i18n={i18n}>
          <TestResultComponent result={result} />
        </I18nextProvider>
      );
      const firstCard =
        screen.queryByText(i18n.t("homePage.resultComponent.cards.first.title")) &&
        screen.queryByText(
          i18n.t("homePage.resultComponent.cards.first.trueDescription") ||
            i18n.t("homePage.resultComponent.cards.first.falseDescription")
        );
      if (firstCard === null) {
        throw new Error("Element not found in the DOM");
      }
      expect(firstCard).toBeInTheDocument();
    });
    test("first negative", () => {
      result.green = false;
      render(
        <I18nextProvider i18n={i18n}>
          <TestResultComponent result={result} />
        </I18nextProvider>
      );
      const firstCard =
        screen.queryByText(i18n.t("homePage.resultComponent.cards.first.title")) &&
        screen.queryByText(i18n.t("homePage.resultComponent.cards.first.falseDescription"));
      if (firstCard === null) {
        throw new Error("Element not found in the DOM");
      }
      expect(firstCard).toBeInTheDocument();
    });

    test("second", () => {
      render(
        <I18nextProvider i18n={i18n}>
          <TestResultComponent result={result} />
        </I18nextProvider>
      );

      const secondCard =
        screen.queryByText(i18n.t("homePage.resultComponent.cards.second.title")) &&
        screen.queryByText(i18n.t("homePage.resultComponent.cards.second.unit")) &&
        screen.queryByText(i18n.t("homePage.resultComponent.cards.second.description"));
      if (secondCard === null) {
        throw new Error("Element not found in the DOM");
      }
      expect(secondCard).toBeInTheDocument();
    });

    test("third", () => {
      render(
        <I18nextProvider i18n={i18n}>
          <TestResultComponent result={result} />
        </I18nextProvider>
      );
      const thirdCard =
        screen.queryByText((content, element) => {
          return /CO2/ && content.includes(i18n.t("homePage.resultComponent.cards.third.title"));
        }) && screen.queryByText(i18n.t("homePage.resultComponent.cards.third.description"));
      if (thirdCard === null) {
        throw new Error("Element not found in the DOM");
      }
      expect(thirdCard).toBeInTheDocument();
    });

    test("fourth", () => {
      render(
        <I18nextProvider i18n={i18n}>
          <TestResultComponent result={result} />
        </I18nextProvider>
      );
      const fourthCard =
        screen.queryByText(i18n.t("homePage.resultComponent.cards.fourth.title")) &&
        screen.queryByText(i18n.t("homePage.resultComponent.cards.fourth.description"));
      if (fourthCard === null) {
        throw new Error("Element not found in the DOM");
      }
      expect(fourthCard).toBeInTheDocument();
    });
  });
});
