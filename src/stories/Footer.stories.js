import { BrowserRouter } from "react-router-dom";
import { userEvent, within } from "@storybook/testing-library";
import FooterComponent from "../components/FooterComponent";

export default {
  title: "Footer",
  component: FooterComponent,
};

export const Empty = {
  render: () => (
    <BrowserRouter>
      <FooterComponent />
    </BrowserRouter>
  ),
};
export const Submitted = {
  render: () => (
    <BrowserRouter>
      <FooterComponent />
    </BrowserRouter>
  ),
  play: async ({ canvasElement, step }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);

    await step("Fulfill form", async () => {
      await userEvent.type(canvas.getByTestId("email"), "emanuele@storybook.com");
    });

    await step("Submit form", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });
  },
};
