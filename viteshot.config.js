const playwrightShooter = require("viteshot/shooters/playwright");
const playwright = require("playwright");
const vite = require("vite");

module.exports = {
  framework: {
    type: "vue",
  },
  shooter: playwrightShooter(playwright.chromium,{
    contexts: {
      mobile: {
        viewport: {
          width: 375,
          height: 10,
        }
      },
      tablet: {
        viewport: {
          width: 768,
          height: 10,
        }
      },
      laptop: {
        viewport: {
          width: 1440,
          height: 10,
        }
      }
    },
  }),
  filePathPattern: "**/*.screenshot.@(vue)"
};
