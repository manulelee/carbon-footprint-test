/** @type { import('@storybook/react').Preview } */
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import i18n from "/src/i18n";
const preview = {
  Preview: {
    globals: {
      locale: "en_US",
      locales: {
        en_US: "English (US)",
        it_IT: "Italiano",
      },
    },
  },
  parameters: {
    i18n,
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
