import React from "react";
import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Importa la configurazione di i18next
import PrivacyPolicyPage from "./PrivacyPolicyPage";

describe("Privacy Policy page", () => {
  test("renders component", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PrivacyPolicyPage />
      </I18nextProvider>
    );
    const component = screen.getByTestId("privacyPolicyPage");
    if (component === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(component).toBeInTheDocument();
  });

  test("renders title", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PrivacyPolicyPage />
      </I18nextProvider>
    );
    const title = screen.queryByText(i18n.t("privacyPolicy.title"));
    if (title === null) {
      throw new Error("Element not found in the DOM");
    }
    expect(title).toBeInTheDocument();
  });
});
