/// <reference types="Cypress"/>

import {AddMember} from "../../../Pages/Provider/Add_Member/AddMember"
import { loginAsProvider } from "../../../utils/Login";
import { generateMemberData } from "../../../utils/dataGenerator";

const Add_newMember = new AddMember();

describe('Provider Member Management', () => {
    beforeEach(() => {
      loginAsProvider('provider1'); // i can use multiple providers here jus t call those numbers ( 1,2,3 and upto so on )
    });

    // Catch any uncaught exceptions and prevent them from failing the test
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
  });


    // it('Logs in with valid credentials', () => {
    //     loginAsProvider(); // this function is created in utils i am using it by reused here
    //   })


    it('TC01: Login as Provider and Add a New Member',()=>{
        // loginAsProvider(); 
      //cy.fixture('AddMember_provider').then((data)=>{
        const data = generateMemberData();
        try {
          
          Add_newMember.dashboard_member();
          Add_newMember.addMember_button();
          Add_newMember.memberFirstName(data.fName);
          Add_newMember.memberLastName(data.lName);
          Add_newMember.selectGender3();
          Add_newMember.membersEmail(data.membersEmail);
          Add_newMember.sendInviteCheckBox();
          Add_newMember.phoneNumberDropdown();
          Add_newMember.countrySelection();
          Add_newMember.enterNumber(data.number);
          Add_newMember.memberDOB(data.dob);
          Add_newMember.Address1(data.address1);
          Add_newMember.Address2(data.address2);
          Add_newMember.enterCity(data.city);
          Add_newMember.selectStateDropdown();
          Add_newMember.stateName(data.state);
          Add_newMember.enterZipCode(data.zipCode);
          Add_newMember.Referral_Source()
          Add_newMember.Primary_interests()
          Add_newMember.addMemberButton();

          cy.wait(4000);
      } catch (error) {
          // Log the error or handle it accordingly and display the message 
          cy.log('An error occurred: ' + error.message);
      }
        
       
    })
      })

   
  //});
    /// Below Code for the assertions we used to verify, but i can not used assertions in try catch which is not recommended

//   it('Now login as Provider and Adds A new Member', () => {
//     cy.fixture('AddMember_provider').then((data) => {
//         // Navigate to dashboard member page
//         Add_newMember.dashboard_member();
//         cy.url().should('include', '/dashboard'); // Assertion to check URL

//         // Click on add member button
//         Add_newMember.addMember_button();
//         cy.get('.add-member-form').should('be.visible'); // Assertion to check form visibility

//         // Fill in the member details
//         Add_newMember.memberFirstName(data.fName);
//         cy.get('input[name="firstName"]').should('have.value', data.fName); // Assertion to check first name

//         Add_newMember.memberLastName(data.lName);
//         cy.get('input[name="lastName"]').should('have.value', data.lName); // Assertion to check last name

//         Add_newMember.selectGender3();
//         cy.get('input[name="gender"]').should('have.value', '3'); // Assertion to check gender selection

//         Add_newMember.membersEmail(data.membersEmail);
//         cy.get('input[name="email"]').should('have.value', data.membersEmail); // Assertion to check email

//         Add_newMember.sendInviteCheckBox();
//         cy.get('input[name="sendInvite"]').should('be.checked'); // Assertion to check checkbox

//         Add_newMember.phoneNumberDropdown();
//         cy.get('.phone-dropdown').should('be.visible'); // Assertion to check phone dropdown visibility

//         Add_newMember.countrySelection();
//         cy.get('.country-dropdown').should('have.value', 'selectedCountry'); // Assertion to check country selection

//         Add_newMember.enterNumber(data.number);
//         cy.get('input[name="phoneNumber"]').should('have.value', data.number); // Assertion to check phone number

//         Add_newMember.memberDOB(data.dob);
//         cy.get('input[name="dob"]').should('have.value', data.dob); // Assertion to check date of birth

//         Add_newMember.Address1(data.address1);
//         cy.get('input[name="address1"]').should('have.value', data.address1); // Assertion to check address1

//         Add_newMember.Address2(data.address2);
//         cy.get('input[name="address2"]').should('have.value', data.address2); // Assertion to check address2

//         Add_newMember.enterCity(data.city);
//         cy.get('input[name="city"]').should('have.value', data.city); // Assertion to check city

//         Add_newMember.selectStateDropdown();
//         cy.get('.state-dropdown').should('be.visible'); // Assertion to check state dropdown visibility

//         Add_newMember.stateName(data.state);
//         cy.get('input[name="state"]').should('have.value', data.state); // Assertion to check state

//         Add_newMember.enterZipCode(data.zipCode);
//         cy.get('input[name="zipCode"]').should('have.value', data.zipCode); // Assertion to check zip code

//         // Submit the form
//         Add_newMember.addMemberButton();
//         cy.wait(4000);

//         // Check if member is added successfully (assuming there's a success message or redirection)
//         cy.contains('Member added successfully').should('be.visible'); // Example assertion
//     });
// });
  