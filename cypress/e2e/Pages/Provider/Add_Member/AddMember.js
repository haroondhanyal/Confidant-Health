const AddNewMemberElements = require ('../../../Locators/Members/Add_Members.json')

export class AddMember{
    dashboard_member(){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.dashboardSelectionMember_text).click()
        cy.wait(4000)     
    }
    addMember_button(){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.addMemberButton_text).click()
        cy.wait(2000)
    }
    memberFirstName(fName){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.firstName_text).type(fName)
        cy.wait(2000)
    }
    memberLastName(lName){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.lastName_text).type(lName)
        cy.wait(2000)
    }
    selectGender1(){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.radioButton_Gender1).click()
        cy.wait(2000)
    }
    selectGender2(){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.radioButton_Gender2).click()
        cy.wait(2000)
    }
    selectGender3(){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.radioButton_Gender3).click()
        cy.wait(2000)
    }
    membersEmail(membersEmail){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.email_text).type(membersEmail)
        cy.wait(2000)
    }
    sendInviteCheckBox(){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.sendInvite_checkbox).click()
        cy.wait(2000)
    }
    phoneNumberDropdown(){
        cy.get(AddNewMemberElements.AddNewMemberLocators.phoneNumber_Dropdown).click()
        cy.wait(2000)
    }
    countrySelection(){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.countrySelection).click()
        cy.wait(2000)
    }
    enterNumber(number){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.number_text).type(number)
        cy.wait(2000)
    }
    memberDOB(dob){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.dob_Selection).type(dob)
        cy.wait(2000)
    }
    Address1(address1){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.addressLine1_text).type(address1)
        cy.wait(2000)
    }
    Address2(address2){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.addressLine2_text).type(address2)
        cy.wait(2000)
    }
    enterCity(city){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.city_text).type(city)
        cy.wait(2000)
    }
    selectStateDropdown(){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.selectState_Dropdown).click()
        cy.wait(2000)
    }
    stateName(state){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.stateName_text).type(state)
        cy.wait(2000)
    }
    enterZipCode(zipCode){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.zipCode_text).type(zipCode)
        cy.wait(2000)
    }
    referralSource_Selection(){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.referralSource_Selection).type()
        cy.wait(2000)
    }
    primaryInterests_Selection(){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.primaryInterests_selection).type()
        cy.wait(2000)
    }
    memberCancelButton(){
        cy.xpath(AddNewMemberElements.AddNewMemberLocators.Cancel_Button).click()
        cy.wait(2000)
    }
    // addMemberButton(){
    //     cy.xpath(AddNewMemberElements.AddNewMemberLocators.addMember).click()
    //     cy.wait(2000)
    // }
    addMemberButton(){
        cy.get(AddNewMemberElements.AddNewMemberLocators.Add).click()
        cy.wait(2000) //// using css selector for this because xpath for Add members cant work we have the 
                     ///// same xpath for the ADd member here
    }

}