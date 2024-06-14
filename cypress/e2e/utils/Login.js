// /// <reference types="Cypress"/>

// import { ProviderloginPage } from '../Pages/Login/Provider_Login/Provider_Login';

// export function loginAsProvider(providersRole){
//     const Login_Credentials = new ProviderloginPage();
//     const baseUrl = Cypress.env('baseUrl');
//      // using Switch here
//      switch(providersRole){
//       case 'provider1':
//         cy.fixture('Provider1_login').then((data) => {
//           // cy.visit('https://sit1.web.confidanthealth.com/login'); 
//           cy.visit(baseUrl); 
//           cy.wait(3000);
//           Login_Credentials.email(data.email);
//           Login_Credentials.password(data.password);
//           Login_Credentials.LoginButton();
//         });
//         break;

//       case 'provider2':
//         cy.fixture('Provider2_login').then((data) => {
//           // cy.visit('https://sit1.web.confidanthealth.com/login'); 
//           cy.visit(baseUrl); 
//           cy.wait(3000);
//           Login_Credentials.email(data.email);
//           Login_Credentials.password(data.password);
//           Login_Credentials.LoginButton();
//         });

//      }

    
   
// //// i am using Switch ( for the provider role ) then in each case call those provider 
// // reason , i have multiple providers and i need to login with them i used it .
// }
////////////  new implementation just for the project to use config  and use the base url and used specific commands 
/// <reference types="Cypress"/>

import { ProviderloginPage } from '../Pages/Login/Provider_Login/Provider_Login';
import { AdminloginPage } from '../Pages/Login/Admin_Login/Admin_Login';

// Provider role we will use this function 
export function loginAsProvider(providersRole) {
  const Login_Credentials = new ProviderloginPage();
  const baseUrl = Cypress.env('baseUrl');
  const providerCredentials = Cypress.env(providersRole); // Get credentials for the specified provider

  console.log('Base URL:', baseUrl);
  console.log('Provider Role:', providersRole);
  console.log('Provider Credentials:', providerCredentials);


  if (!providerCredentials) {
    throw new Error(`No credentials found for provider role: ${providersRole}`);
  }

  cy.visit(baseUrl);
  cy.wait(3000);
  Login_Credentials.email(providerCredentials.email);
  Login_Credentials.password(providerCredentials.password);
  Login_Credentials.LoginButton();
}
// now for the admin role i have set this .....
export function loginAsAdmin(adminRole) {
  const Login_Credentials = new AdminloginPage();
  const baseUrl = Cypress.env('baseUrl');
  const adminCredentials = Cypress.env(adminRole); // Get credentials for the specified admin

  console.log('Base URL:', baseUrl);
  console.log('Admin Role:', adminRole);
  console.log('Admin Credentials:', adminCredentials);

  if (!adminCredentials) {
    throw new Error(`No credentials found for admin role: ${adminRole}`);
  }

  cy.visit(baseUrl);
  AdminSelection() 
  cy.wait(2000);
  /// i made the function below by default we have provider 
  /// is selected but i use this function after visiting base url  select the Admin and select until login as admin 

  Login_Credentials.email(adminCredentials.email);
  Login_Credentials.password(adminCredentials.password);
  Login_Credentials.LoginButton();
}
function AdminSelection() {
  cy.xpath("//button[normalize-space()='Log in as Admin']").click();
}