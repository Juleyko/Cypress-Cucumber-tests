// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "https://telnyx.com/",
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     viewportWidth: 1440,
//     viewportHeight: 900,
//   },
// });
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
// const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

// module.exports = (on, config) => {
//   config.e2e = {
//     specPattern: "**/*.feature",
//     async setupNodeEvents() {
//       await addCucumberPreprocessorPlugin(on, config);
//       on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));
//     },
//   };

//   return config;
// };
const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor: browserify,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "3t2h6z",
  e2e: {
    baseUrl: "https://telnyx.com/",
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
