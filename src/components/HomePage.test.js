import React from "react";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Importa la configurazione di i18next
import HomePage from "./HomePage";
import * as userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

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
};
describe("Home page", () => {
  test("renders title", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <HomePage />
      </I18nextProvider>
    );
    const title = screen.queryByText(i18n.t("homePage.test.title"));
    if (title === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(title).toBeInTheDocument();
  });

  test("renders first paragraph", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <HomePage />
      </I18nextProvider>
    );
    const paragraph = screen.queryByText(i18n.t("homePage.test.firstP"));
    if (paragraph === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(paragraph).toBeInTheDocument();
  });

  test("renders second paragraph", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <HomePage />
      </I18nextProvider>
    );
    const paragraph = screen.queryByText(i18n.t("homePage.test.secondP"));
    if (paragraph === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(paragraph).toBeInTheDocument();
  });

  test("renders form", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <HomePage />
      </I18nextProvider>
    );
    const form =
      screen.queryByLabelText(i18n.t("homePage.form.label")) &&
      screen.queryByPlaceholderText(i18n.t("homePage.form.placeholder"));
    if (form === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(form).toBeInTheDocument();
  });

  // Test esito positivo
  test("renders result component", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue(result);

    const user = userEvent.default.setup();
    render(
      <I18nextProvider i18n={i18n}>
        <HomePage />
      </I18nextProvider>
    );

    const input = screen.getByPlaceholderText(i18n.t("homePage.form.placeholder"));
    const submitButton = screen.getByText(i18n.t("homePage.form.button"));

    act(() => {
      user.type(input, "https://www.google.com");
      user.tab();
      user.click(submitButton, "enter");
    });

    setTimeout(async () => {
      const testComponent = screen.getByText(i18n.t("homePage.testSuccessfull.title") + " https://www.google.com");
      const calulateOtherSiteButton = screen.getByText(i18n.t("homePage.testSuccessfull.link"));
      await user.click(calulateOtherSiteButton);
      const previousResultComponent = screen.getByTestId("previousResult");
      let result = JSON.parse(sessionStorage.getItem("previousResult"));
      expect(result).toHaveLength(1);
      expect(result.url).toBe("https://www.google.com/");
      expect(result.green).toBe(true);
      expect(sessionStorage.getItem("previousResult")[0]).toEqual(result);
      expect(sessionStorage.getItem("previousResult")).not.toBeNull();
      expect(testComponent).toBeInTheDocument();
      expect(input).toHaveValue("");
      expect(submitButton).toBeInTheDocument();
      expect(previousResultComponent).toBeInTheDocument();
    }, 20000);
  });

  // Test esito negativo
  test("renders error message", async () => {
    const user = userEvent.default.setup();
    render(
      <I18nextProvider i18n={i18n}>
        <HomePage />
      </I18nextProvider>
    );

    const input = screen.getByPlaceholderText(i18n.t("homePage.form.placeholder"));
    const submitButton = screen.getByText(i18n.t("homePage.form.button"));

    user.type(input, "https://www.google");
    user.click(submitButton);

    setTimeout(() => {
      const errorComponent =
        screen.getByText(i18n.t("homePage.testError.title")) &&
        screen.getByText(i18n.t("homePage.testError.description"));
      expect(errorComponent).toBeInTheDocument();
      expect(input).toHaveValue("https://www.google");
      expect(submitButton).toBeInTheDocument();
    }, 15000);
  });

  test("renders loader", async () => {
    const user = userEvent.default.setup();
    render(
      <I18nextProvider i18n={i18n}>
        <HomePage />
      </I18nextProvider>
    );

    const input = screen.getByPlaceholderText(i18n.t("homePage.form.placeholder"));
    const submitButton = screen.getByText(i18n.t("homePage.form.button"));

    act(() => {
      user.type(input, "https://www.google.com");
      user.click(submitButton);
    });

    setTimeout(() => {
      const loader = screen.getByRole(i18n.t("status"));
      expect(loader).toBeInTheDocument();
      expect(input).toHaveValue("https://www.google.com");
      expect(submitButton).toBeInTheDocument();
    }, 2500);
  });

  test("updates input value on change", () => {
    const user = userEvent.default.setup();
    render(
      <I18nextProvider i18n={i18n}>
        <HomePage />
      </I18nextProvider>
    );

    const input = screen.getByPlaceholderText(i18n.t("homePage.form.placeholder"));
    const submitButton = screen.getByText(i18n.t("homePage.form.button"));
    user.type(input, "https://www.google.com");
    user.tab();
    user.click(submitButton);
    setTimeout(() => {
      expect(input).toHaveValue('"https://www.google.com"');
    }, 1000);
  });
});
