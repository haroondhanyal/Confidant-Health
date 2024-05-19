const LoginPageElementsLocators= require('../../../Locators/Login/Provider_login.json')

export class ProviderloginPage{

  email(emails) {
      cy.xpath(LoginPageElementsLocators.ProviderLoginPageLocators.email_text).type(emails);
      return
  }
  password(passwords) {
      cy.xpath(LoginPageElementsLocators.ProviderLoginPageLocators.password_text).type(passwords);
      return
  }

  LoginButton() {
      cy.xpath(LoginPageElementsLocators.ProviderLoginPageLocators.LoginButton_text).click();
      cy.wait(4000);
      return
  }
}


