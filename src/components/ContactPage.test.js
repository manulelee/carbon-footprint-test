import React from "react";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Importa la configurazione di i18next
import ContactPage from "./ContactPage";
import * as userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Features page", () => {
  test("renders component", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactPage />
      </I18nextProvider>
    );
    const component = screen.getByTestId("contactPage");
    if (component === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(component).toBeInTheDocument();
  });

  test("renders title", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactPage />
      </I18nextProvider>
    );
    const title = screen.queryByText(i18n.t("contactPage.title"));
    if (title === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(title).toBeInTheDocument();
  });

  test("renders first paragraph", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactPage />
      </I18nextProvider>
    );
    const paragraph = screen.queryByText(i18n.t("contactPage.firstP"));
    if (paragraph === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(paragraph).toBeInTheDocument();
  });

  test("renders form", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ContactPage />
      </I18nextProvider>
    );

    const form =
      screen.getByPlaceholderText(i18n.t("contactPage.form.name.placeholder")) &&
      screen.getByPlaceholderText(i18n.t("contactPage.form.email.placeholder")) &&
      screen.getByPlaceholderText(i18n.t("contactPage.form.message.placeholder"));
    const submitButton = screen.getByRole("button", { name: i18n.t("contactPage.form.button") });
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
        <ContactPage />
      </I18nextProvider>
    );

    const inputName = screen.getByPlaceholderText(i18n.t("contactPage.form.name.placeholder"));
    const inputEmail = screen.getByPlaceholderText(i18n.t("contactPage.form.email.placeholder"));
    const inputMessage = screen.getByPlaceholderText(i18n.t("contactPage.form.message.placeholder"));
    const submitButton = screen.getByRole("button", { name: i18n.t("contactPage.form.button") });
    await act(async () => {
      await user.click(inputName);
      await user.type(inputName, "Name & Surname");
      expect(inputName).toHaveFocus();
      await user.tab();
      await user.type(inputEmail, "email.example.com");
      expect(inputEmail).toHaveFocus();
      await user.tab();
      await user.type(inputMessage, "Message...");
      expect(inputMessage).toHaveFocus();
      await user.tab();
      expect(submitButton).toHaveFocus();
      await user.click(submitButton);
    });
  });
});
