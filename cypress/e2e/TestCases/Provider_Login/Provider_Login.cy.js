/// <reference types="Cypress"/>

import { ProviderloginPage } from "../../Pages/Login/Provider_Login/Provider_Login";

const Login_Credentials = new ProviderloginPage();

describe('Provider Logins:', () => {
  beforeEach(() => {
    cy.visit('https://sit1.web.confidanthealth.com/login'); 
    cy.wait(3000);
  });

  it('Logs in with valid credentials', () => {
    cy.fixture('Provider_login').then((data) => {
      Login_Credentials.email(data.email);
      Login_Credentials.password(data.password);
      Login_Credentials.LoginButton();
      cy.wait(4000);
    });
  });

  
});



