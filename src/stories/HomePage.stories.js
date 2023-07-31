import { userEvent, within } from "@storybook/testing-library";
import HomePage from "../components/HomePage";

export default {
  title: "Home page",
  component: HomePage,
};

export const Home = {};

export const Submitted = {
  play: async ({ canvasElement, step }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);

    await step("Fulfill form", async () => {
      await userEvent.type(canvas.getByTestId("url"), "www.google.co");
    });

    await step("Submit form", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });
  },
};
