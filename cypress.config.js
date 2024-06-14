const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

// Function to get environment-specific configuration
function getEnvConfig(env) {
  const path = `./cypress.env.${env}.json`;
  if (fs.existsSync(path)) {
    return require(path).env;
  } else {
    throw new Error(`No configuration file found for environment: ${env}`);
  }
}

// Set the environment, defaulting to 'sit1'
const environment = process.env.CYPRESS_ENV || 'sit1';
const envConfig = getEnvConfig(environment);

console.log('Loaded environment:', environment);
console.log('Environment configuration:', envConfig);

module.exports = defineConfig({
  projectId: 'sjnqhg',
  viewportWidth: 1280,
  viewportHeight: 800,

  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
      return config; // Return the updated config object
    },
    baseUrl: envConfig.baseUrl,
    specPattern: '**/*.cy.js'
  },

  fixturesFolder: 'cypress/e2e/fixtures',
  video: true,
  videosFolder: 'cypress/e2e/videos',
  screenshotsFolder: 'cypress/e2e/screenshots',
  pageLoadTimeout: 30000,
  screenshots: true,
  screenshotOnRunFailure: true,

  reporter: 'mocha-allure-reporter',
    reporterOptions: {
      targetDir: 'allure-results'
    },
  
  env: envConfig,
  
});