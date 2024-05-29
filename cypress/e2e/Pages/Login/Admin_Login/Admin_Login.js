const LoginPageElementsLocators= require('../../../Locators/Login/Admin_login.json')

export class AdminloginPage{

  email(emails) {
      cy.xpath(LoginPageElementsLocators.AdminLoginPageLocators.email_text).type(emails);
      return
  }
  password(passwords) {
      cy.xpath(LoginPageElementsLocators.AdminLoginPageLocators.password_text).type(passwords);
      return
  }

  LoginButton() {
      cy.xpath(LoginPageElementsLocators.AdminLoginPageLocators.LoginButton_text).click();
      cy.wait(4000);
      return
  }
}


