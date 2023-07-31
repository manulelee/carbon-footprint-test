import TestResultComponent from "../components/TestResultComponent";

export default {
  title: "Test result component",
  component: TestResultComponent,
};

export const SuccessfullResult = {
  args: {
    result: {
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
