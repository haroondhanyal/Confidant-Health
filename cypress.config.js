const { defineConfig } = require("cypress");
           
const fs = require('fs');

function getEnvConfig(env) {
  const path = `./cypress.env.${env}.json`;
  if (fs.existsSync(path)) {
    return require(path).env;
  } else {
    throw new Error(`No configuration file found for environment: ${env}`);
  }
} 

const environment = process.env.CYPRESS_ENV || 'sit1'; // Default to 'sit1' if CYPRESS_ENV is not set
const envConfig = getEnvConfig(environment);

console.log('Loaded environment:', environment);
console.log('Environment configuration:', envConfig);

module.exports = defineConfig({
  "projectId": "Confident Project Version1",
  "viewportWidth": 1280,
  "viewportHeight": 800,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: envConfig.baseUrl,
     // I have define some test files that i can include to run in my project :
   specPattern: [
    // '**/*.spec.js',
    '**/*.cy.js'
    // '**/*.js'
  ]
  },
  fixturesFolder: 'cypress/e2e/fixtures',
  video: true,
  videosFolder: 'cypress/e2e/videos',
  screenshotsFolder: 'cypress/e2e/screenshots',

  pageLoadTimeout:30000 ,
  screenshots: true,

  screenshotOnRunFailure: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mochawesome/testresults',
      overwrite: false,
      html: false,
      json: false
    },
  },

  env: envConfig,
  
});

