import React from "react";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Importa la configurazione di i18next
import App from "../App";
import * as userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Footer component", () => {
  test("renders title", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    const title = screen.queryAllByText("LIMIT");
    if (title === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(title[title.length - 1]).toBeInTheDocument();
  });

  test("renders first paragraph", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    const paragraph = screen.queryByText(i18n.t("footer.firstP"));
    if (paragraph === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(paragraph).toBeInTheDocument();
  });

  test("renders second paragraph", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    const paragraph = screen.queryByText(i18n.t("footer.secondP"));
    if (paragraph === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(paragraph).toBeInTheDocument();
  });

  test("renders form", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );
    const form = screen.queryByLabelText(i18n.t("footer.form.label"));
    const submitButton = screen.getByText(i18n.t("footer.form.button"));
    if (form === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(form).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("focus on button", async () => {
    const user = userEvent.default.setup();
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );

    const input = screen.getByPlaceholderText(i18n.t("footer.form.placeholder"));
    const submitButton = screen.getByText(i18n.t("footer.form.button"));
    await act(async () => {
      await user.click(input);
      await user.type(input, "name.surname@example.com");
      expect(input).toHaveFocus();
      await user.tab();
      expect(submitButton).toHaveFocus();
      await user.click(submitButton);
      expect(input).toHaveValue("name.surname@example.com");
    });
  });
});
