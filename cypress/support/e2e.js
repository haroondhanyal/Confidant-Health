// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath')
// import '@shelex/cypress-allure-plugin';
// Cypress.on('test:after:run', (test, runnable) => {
//     if (test.state === 'failed') {
//       const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
//       const videoFileName = `${runnable.parent.title} -- ${test.title}.mp4`;
//       const screenshotPath = `cypress/screenshots/${Cypress.spec.name}/${screenshotFileName}`;
//       const videoPath = `cypress/videos/${Cypress.spec.name}/${videoFileName}`;
  
//       cy.task('log', `Attaching screenshot: ${screenshotPath}`);
//       cy.task('log', `Attaching video: ${videoPath}`);
  
//       cy.allure().addAttachment('Screenshot', screenshotPath, 'image/png');
//       cy.allure().addAttachment('Video', videoPath, 'video/mp4');
//     }
//   }); // commit this 


// Alternatively you can use CommonJS syntax:
// require('./commands')