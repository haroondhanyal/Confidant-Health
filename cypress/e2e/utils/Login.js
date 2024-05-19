/// <reference types="Cypress"/>

import { ProviderloginPage } from '../Pages/Login/Provider_Login/Provider_Login';

export function loginAsProvider(){
    const Login_Credentials = new ProviderloginPage();

    cy.fixture('Provider_login').then((data) => {
        cy.visit('https://sit1.web.confidanthealth.com/login'); 
        cy.wait(3000);
        Login_Credentials.email(data.email);
        Login_Credentials.password(data.password);
        Login_Credentials.LoginButton();
      });

}