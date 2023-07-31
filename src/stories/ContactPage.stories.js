import { userEvent, within } from "@storybook/testing-library";
import ContactPage from "../components/ContactPage";

export default {
  title: "Contact us page",
  component: ContactPage,
};

export const Empty = {};

export const Submitted = {
  play: async ({ canvasElement, step }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);

    await step("Fulfill form", async () => {
      await userEvent.type(canvas.getByTestId("name"), "Emanuele Syrbe");
      await userEvent.type(canvas.getByTestId("email"), "emanuele@storybook.com");
      await userEvent.type(canvas.getByTestId("message"), "Test message from storybook");
    });

    await step("Submit form", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });
  },
};
