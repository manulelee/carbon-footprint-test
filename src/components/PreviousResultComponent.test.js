import React from "react";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Importa la configurazione di i18next
import PreviousResultComponent from "./PreviousResultComponent";
import { act } from "react-dom/test-utils";

describe("Previous result component", () => {
  const previousResult = {
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

  test("renders component", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PreviousResultComponent previous={previousResult} />
      </I18nextProvider>
    );
    const component = screen.getByTestId("previousResult");
    if (component === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(component).toBeInTheDocument();
  });

  test("renders title", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PreviousResultComponent previous={previousResult} />
      </I18nextProvider>
    );
    const title = screen.queryByText(i18n.t("homePage.previousResult.title"));
    if (title === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(title).toBeInTheDocument();
  });

  test("renders expand button", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PreviousResultComponent previous={previousResult} />
      </I18nextProvider>
    );
    const button = screen.queryByRole("button");
    if (button === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(i18n.t("homePage.previousResult.expand"));
  });

  test("renders collapse button", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PreviousResultComponent previous={previousResult} />
      </I18nextProvider>
    );
    const button = screen.queryByRole("button", { name: i18n.t("homePage.previousResult.expand") });
    if (button === null) {
      throw new Error("Element not found in the DOM");
    }
    act(() => {
      button.click();
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(i18n.t("homePage.previousResult.collapse"));
  });
});
