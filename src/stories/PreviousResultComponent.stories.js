import { userEvent, within } from "@storybook/testing-library";
import PreviousResultComponent from "../components/PreviousResultComponent";

export default {
  title: "Previous result component",
  component: PreviousResultComponent,
};

export const Collapsed = {
  args: {
    previous: {
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
    },
  },
};

export const Expanded = {
  args: {
    previous: {
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
    },
  },
  play: async ({ canvasElement, step }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);
    await step("Collapse card", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });
  },
};
