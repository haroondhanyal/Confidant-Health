const AddProvider =require('../../../Locators/Admin/Add_Provider.json')

export class Add_Provider_By_Admin{
    selectProvider(){
        cy.xpath(AddProvider.Add_Provider_Admin.Select_Provider).click()
        cy.wait(400)
        return
    }
    AddProvider(){
        cy.xpath(AddProvider.Add_Provider_Admin.Add_Provider).click()
        cy.wait(800)
        return
    }
    EnterName(name){
        cy.xpath(AddProvider.Add_Provider_Admin.Enter_Name).type(name)
        cy.wait(300)
    }
    ProviderCode(Provider_Code){
        cy.xpath(AddProvider.Add_Provider_Admin.Provider_Code).type(Provider_Code)
        cy.wait(300)
        return
    }
    Gender(){
        cy.xpath(AddProvider.Add_Provider_Admin.Gender_Selection2).click()
        cy.wait(300)
        return
    }
    EmailProvider(Email){
        cy.xpath(AddProvider.Add_Provider_Admin.Email_Provider).type(Email)
        cy.wait(300)
        return
    }
    ProviderPassword(Password){
        cy.xpath(AddProvider.Add_Provider_Admin.Password).type(Password)
        cy.wait(300)
        return
    }
    CountrySelection(){
        cy.xpath(AddProvider.Add_Provider_Admin.Country_Selection).click()
        cy.wait(300)
        return
    }
    Phone_Selection(){
        cy.xpath(AddProvider.Add_Provider_Admin.Phone_Selection).click()
        cy.wait(300)
        return
    }
    Enter_PhoneNumber(Phone){
        cy.xpath(AddProvider.Add_Provider_Admin.Enter_PhoneNumber).type(Phone)
        cy.wait(300)
        return
    }
    SignOffRole(){
        cy.xpath(AddProvider.Add_Provider_Admin.SignOffRole).click()
        cy.wait(200)
        return
    }
    SignOffRole1(){
        cy.xpath(AddProvider.Add_Provider_Admin.SignOffRole1).click()
        cy.wait(200)
        return
    }
    SignOffRole2(){
        cy.xpath(AddProvider.Add_Provider_Admin.SignOffRole2).click()
        cy.wait(200)
        return
    }
    DesignationSelection(){
        cy.xpath(AddProvider.Add_Provider_Admin.Designation).click()
        cy.wait(200)
        return
    }
    Designation1(){
        cy.xpath(AddProvider.Add_Provider_Admin.SelectDesignation1).then(elements => {
            console.log('Number of elements:', elements.length);
          }).click({ force: true, multiple: true });
        cy.wait(200)
        return
    }
    Designation2(){
        cy.xpath(AddProvider.Add_Provider_Admin.SelectDesignation2).click()
        cy.wait(200)
        return
    }
    Designation3(){
        cy.xpath(AddProvider.Add_Provider_Admin.SelectDesignation3).click()
        cy.wait(200)
        return
    }
    EnterApproaches(Approach){
        cy.xpath(AddProvider.Add_Provider_Admin.Approach).type(Approach)
        cy.wait(400)
        return
    }
    About(About){
        cy.xpath(AddProvider.Add_Provider_Admin.About).type(About)
        cy.wait(400)
        return
    }
    ProfilePicUpload() {

        cy.get('input[type="file"]').then($input => {
            const stub = cy.stub($input[0], 'click').as('fileInputClick');
        });
    
        cy.xpath(AddProvider.Add_Provider_Admin.Profile_Photo).click({force: true});
        cy.get('input[type="file"]').selectFile('C:/Insight-Technology-Projects/Confident-Health/Provider/cypress/e2e/fixtures/images/iron.png', {
            action: 'select',
            force: true
        });
        cy.log('File attached successfully.');
        return this;
    }
    ProviderAdded(){
        //cy.xpath(AddProvider.Add_Provider_Admin.Provider_AddButton).scrollIntoView().click({ multiple: true, force: true })
        cy.get('.jss507 > .MuiButton-contained').scrollIntoView().click({  force: true })
        cy.wait(300)
        return
    }
    State_Selection(){
        cy.get('#mui-14').click()
        cy.wait(300)
        cy.get('#mui-14-option-1').click()
        cy.wait(100)
        cy.get('#mui-14').click()
        cy.get('#mui-14-option-0').click()
        cy.wait(100)
        cy.get('#mui-14').click()
        cy.get('#mui-14-option-3').click()
        cy.wait(100)
        return

    }
    Specialities_Selection(){
        cy.get('#mui-16').click()
        cy.wait(200)
        cy.get('#mui-16-option-7').click()
        cy.wait(100)
        cy.get('#mui-16').click()
        cy.wait(100)
        cy.get('#mui-16-option-4').click()
        cy.wait(100)
        cy.get('#mui-16').click()
        cy.wait(100)
        cy.get('#mui-16-option-3').click()
        cy.wait(100)
        cy.get('#mui-16').click()
        cy.wait(100)
        cy.get('#mui-16-option-2').click()
        cy.wait(100)
        return

    }
    

}